import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import fetch from '../../kit/fetch'

import {
  AtButton,
  AtInput,
  AtTextarea,
  AtImagePicker,
  AtForm
} from 'taro-ui'

import './index.less'

@inject('locationStore', 'productStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  constructor() {
    super(...arguments)
  }

  componentDidMount () {
  }

  render () {
    const {list} = this.props.productStore
    console.log(list)
    return (
      <View>
          
      </View>
    )
  }
}

export default Index 
