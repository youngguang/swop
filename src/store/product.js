import { observable, action, reaction } from 'mobx'
import fetch from '../kit/fetch'

class Product {
    @observable list = []
    @observable q = ''
    longitude = ''
    latitude = ''
    @observable pageNo = 0
    @observable pageSize = 20

    setLocation(longitude, latitude) {
        this.longitude = longitude;
        this.latitude = latitude;
    }

    @action async queryProduct() {
        let data = {
          q: this.q,
          longitude: this.longitude,
          latitude: this.latitude,
          pageNo: this.pageNo,
          pageSize: this.pageSize
        }
        let res = await fetch('/product/list', data);   
        console.log(res)
        this.list = res.data;
    }
}

export default new Product();