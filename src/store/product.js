import { observable, action } from 'mobx'
import {fetch} from 'kit'

class Product {
    @observable list = []
    @observable q = ''
    longitude = ''
    latitude = ''
    @observable pageNo = 0

    setLocation(longitude, latitude) {
        self.longitude = longitude;
        self.latitude = latitude;
    }

    @action async queryProduct(queryParam = {}) {
        let data = {
          q: self.q = (queryParam.q || self.q),
          longitude: self.longitude = (queryParam.longitude || self.longitude),
          latitude: self.latitude = (queryParam.latitude || self.latitude),
          pageNo: self.pageNo = (queryParam.pageNo || self.pageNo),
        }
        let res = await fetch({url: '/product/list', data});   
        self.list = self.list.concat(res.data);
    }
}

const self = new Product();
export default self;