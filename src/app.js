import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
import '@tarojs/async-await'
import Index from './pages/index'
import fetch from './kit/fetch'
import auth from './kit/auth'

import counterStore from './store/counter'
import locationStore from './store/location'
import productStore from './store/product'

import './app.less'
import 'taro-ui/dist/style/index.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = {
  counterStore,
  locationStore,
  productStore
}


class App extends Component {
  config = {
    pages: [
      'pages/index/index',
      'pages/product/index',
      'pages/user/index',
      'pages/user/login/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: "#666",
      selectedColor: "#b4282d",
      backgroundColor: "#fafafa",
      borderStyle: 'black',
      list: [{
        pagePath: "pages/index/index",
        iconPath: "./assets/tab-bar/home.png",
        text: "首页"
      }, {
        pagePath: "pages/product/index",
        iconPath: "./assets/tab-bar/cate.png",
        text: "发布"
      }, {
        pagePath: "pages/user/index",
        iconPath: "./assets/tab-bar/user.png",
        text: "我的"
      }]
    }
  }

  async componentDidMount () {
    await auth();
    const {longitude, latitude} = await Taro.getLocation({type: 'wgs84'});
    locationStore.setLocation({longitude, latitude});
    productStore.setLocation(longitude, latitude);
    
    productStore.queryProduct()
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
