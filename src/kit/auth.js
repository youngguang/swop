import Taro from '@tarojs/taro'
import fetch from './fetch'
import {auth_key} from './config'

export default async () => {
    let wxSetting = await Taro.getSetting();
    if (!wxSetting || !wxSetting.authSetting['scope.userInfo']) {
        Taro.navigateTo({url: '/pages/user/login/index'})
    }
    
    const token = Taro.getStorageSync(auth_key)
    if (!token) {
        let wxLogin = await Taro.login()
        let code = await fetch("quickLogin", {code: wxLogin.code})
        
        Taro.setStorageSync(auth_key, code)
    }

    // 上报用户信息
    let { userInfo }  = await Taro.getUserInfo()
    console.log(userInfo)
    fetch('/reportUserInfo', userInfo);
}