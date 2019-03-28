import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import { AtButton, AtTabBar } from 'taro-ui'

import './index.less'

@inject()
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '用户中心'
  }

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }


  render () {
    return (
      <View className='index'>
        <AtButton type='primary'>发布</AtButton>
      </View>
    )
  }
}

export default Index 
