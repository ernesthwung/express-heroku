let getInfo = (data) => {
    let address = data.results[0].formatted_address;
    let lat = data.results[0].geometry.location.lat;
    let lng = data.results[0].geometry.location.lng;

    return {

        lat: lat,
        lng: lng,
        fomrmatted_address: address
    }
}

module.exports = getInfo

/*
請處理 data 取出 lat, lng, formatted_address 等資料，輸出格式如下：｀
{ lat: 37.4224764,
  lng: -122.0842499,
  formatted_address: '1600 Amphitheatre Parkway, Mountain View, CA 94043, USA' }
*/