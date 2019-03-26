import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import {
  AtButton,
  AtInput,
  AtTextarea,
  AtImagePicker,
  AtForm
} from 'taro-ui'

import './index.less'

@inject('counterStore', 'locationStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  constructor() {
    super(...arguments)
  }
  render () {
    return (
      <View>
        
      </View>
    )
  }
}

export default Index 
