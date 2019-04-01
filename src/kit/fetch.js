import {host, auth_key} from './config'
import Taro from '@tarojs/taro'

export default ({url, data, method = 'post'}) => 
    new Promise((resolve, reject) =>  
        wx.request({
            url: `${host}/${url}`,
            data, 
            method,
            header: {
              'content-type': 'application/json', 
              'Authorization': Taro.getStorageSync(auth_key)
            },
            success: (res) => {
                if (res.data.status === 'ok') {
                    resolve(res.data.data, res.data.message)
                } else {
                    reject(res.data.message)
                }
            },
            fail: (res) => {
                reject(res.data.message)
            }
    })
)