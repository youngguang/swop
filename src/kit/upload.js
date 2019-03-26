import {host} from './config'

const uploadRequest = (filePath) => 
 new Promise((resolve, rejects) => {
     wx.uploadFile({
         url:`${host}/upload/image`,
         filePath,
         name: 'file',
         success: (res) => {
            resolve(res.data)
         },
         fail:(res) => {
            rejects(res.mesage)
         }
     })
})


exports.multiUpload = async (filePaths) => {
    let actFilePaths = [];

    for (let filePath of filePaths) {
        let actFilePath = await uploadRequest(filePath)
        actFilePaths = actFilePaths.concat(actFilePath);
    }
    return actFilePaths;
}

exports.upload = (filePath) => uploadRequest(filePath)
