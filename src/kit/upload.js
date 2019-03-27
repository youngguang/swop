import Taro from '@tarojs/taro'
import {host, auth_key} from './config'

const uploadRequest = (filePath) => 
 new Promise((resolve, rejects) => {
    Taro.uploadFile({
         url:`${host}/upload/image`,
         filePath,
         name: 'file',
         header: {
             'content-type': 'multipart/form-data',
             'Authorization': Taro.getStorageSync(auth_key)
         }
     }).then((res) => {
        resolve(res.data)
     })
})


exports.multiUpload = async (filePaths) => {
    let actFilePaths = [];
    console.log(filePaths)
    for (let filePath of filePaths) {
        console.log(filePath);
        let actFilePath = await uploadRequest(filePath)
        actFilePaths = actFilePaths.concat(actFilePath);
    }
    return actFilePaths;
}

exports.upload = (filePath) => uploadRequest(filePath)
