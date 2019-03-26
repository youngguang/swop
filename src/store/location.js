import { observable } from 'mobx'

export default observable({
    province:'江苏省',
    city:'南京市',
    area:'秦淮区',
    longitude:'111.111',
    latitude:'111.111',

    setLocation({province, city, area, longitude, latitude}) {
        this.province = province;
        this.city = city;
        this.area = area;
        this.longitude = longitude;
        this.latitude = latitude;
    }
})
