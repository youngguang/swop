import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import fetch from '../../kit/fetch'
import {multiUpload} from '../../kit/upload'

import {
  AtButton,
  AtInput,
  AtTextarea,
  AtImagePicker,
  AtForm
} from 'taro-ui'

import './index.less'

@inject('locationStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  constructor() {
    super(...arguments)
    this.state = {
      title: '',
      desc: '',
      files:[]
    }
  }
  
  onChangeTitle = (title) => {
      this.setState({title})
  }

  onChange = (files) => {
    this.setState({files})
  }

  onImageClick = (index, file) => {
    wx.previewImage({
      current: file.url,
      urls: this.state.files.map(file => file.url)
    })
  }

  onPublish = async(e) => {
    const {title, desc, files} = this.state;
    const {province, city, area, longitude, latitude} = this.props.locationStore;

    const actFiles = await multiUpload(files.map(file => file.url))
    fetch('product/saveOrUpdate', {
        title,
        desc,
        images: actFiles,
        location: `${latitude},${longitude}`,
        province,
        city,
        area
    }).then(() => {
        Taro.showToast({title:'发布成功'})
    })
  }

  render () {
    const {province, city, area} = this.props.locationStore;
    return (
      <View>
        <AtForm onSubmit={this.onPublish}>
          <AtInput type="text" name="title" onChange={this.onChangeTitle} value={this.state.title} placeholder="标题 想换点啥"   />
          <AtTextarea
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
            maxLength={200}
            placeholder='您想换点啥'
          />
          <AtImagePicker
            length={3}
            showAddBtn={this.state.files.length < 9}
            multiple
            files={this.state.files}
            onChange={this.onChange.bind(this)}
            onFail={this.onFail.bind(this)}
            onImageClick={this.onImageClick.bind(this)}
          />
          <View>{`位置：${province}-${city}-${area}`}</View>
          <AtButton type='primary' formType="submit">发布</AtButton>
        </AtForm>
      </View>
    )
  }
}

export default Index 
