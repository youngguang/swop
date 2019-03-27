import { observable } from 'mobx'

export default observable({
    province:'',
    city:'',
    area:'',
    longitude:'',
    latitude:'',

    setLocation({province, city, area, longitude, latitude}) {
        this.province = province;
        this.city = city;
        this.area = area;
        this.longitude = longitude;
        this.latitude = latitude;
    }
})
