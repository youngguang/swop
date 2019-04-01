import Taro, { Component } from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import {config} from 'kit'

import {
  AtAvatar,
  AtSearchBar,
  AtTextarea,
  AtImagePicker,
  AtForm
} from 'taro-ui'

import './index.less'

@inject('productStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  constructor() {
    super(...arguments)

    this.state = {
      scrollViewHeight: 550
    }
  }

  componentDidMount () {

  }

  onScrollToLower() {
    const {pageNo, queryProduct} = this.props.productStore
    this.setState((prevState) => {
      return {scrollViewHeight: prevState.scrollViewHeight + 550}
    })
    queryProduct({[pageNo]: pageNo + 1})
  }

  render () {
    const {list} = this.props.productStore
    return (
      <View>
        <AtSearchBar
          actionName='搜一下'
          value={this.state.value}
          onChange={this.onChange.bind(this)}
          onActionClick={this.onActionClick.bind(this)} />
        <ScrollView scrollY={true} onScrollToLower={this.onScrollToLower} style={`height: ${this.state.scrollViewHeight}px;`}>
        {
          list.map((item, index) => (
            <View key={`item_${index}`}>
              <View className='at-row'>
                <View className='at-col at-col-3'>
                  <AtAvatar circle image={item.avatarUrl} />
                </View>
                <View className='at-col at-col-3'>
                  {item.nickName}
                </View>
              </View>
              <View>
                <View>
                    <View>{item.title||''}</View>
                    <View>{item.desc||''}</View>
                </View>
              </View>
              <AtImagePicker
                  length={3}
                  files={item.images.map(path => {return {url: config.imagePrefix + path}})}
              />
            </View>
          ))
        }
        </ScrollView>
      </View>
    )
  }
}

export default Index 
