import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import { AtButton } from 'taro-ui'

import auth from '../../../kit/auth'

import './index.less'

@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '登录'
  }

  componentDidMount () {
    try {
        Taro.clearStorageSync();
    } catch (e) {
    }
  }

  backTo = () => {
    auth()
    Taro.navigateBack();
  }

  render () {
    return (
      <View className='index'>
        <AtButton type='primary' open-type="getUserInfo" onGetUserInfo={this.backTo}>授权登录</AtButton>
      </View>
    )
  }
}

export default Index 
