var setMap = {
    view : {lat:35.7034,lon:51.3881,scale:11},
    marker : [
        {val:31,mlat:35.7415,mlon:51.4524,Desc:"تهران (ایران) + موزۀ ملی ایران (۳۰)، کتابخانه ملی ایران (۵)، موزه ملک (۴۵)، موزه ملی قرآن کریم (۵۲)، ..."},
        {val:6,mlat:35.7376,mlon:51.4840,Desc:"تهران (ایران) + موزۀ ملی ایران (۳۰)، کتابخانه ملی ایران (۵)، موزه ملک (۴۵)، موزه ملی قرآن کریم (۵۲)، ..."},
        {val:12,mlat:35.7264,mlon:51.3776,Desc:"تهران (ایران) + موزۀ ملی ایران (۳۰)، کتابخانه ملی ایران (۵)، موزه ملک (۴۵)، موزه ملی قرآن کریم (۵۲)، ..."},
        {val:27,mlat:35.7170,mlon:51.5067,Desc:"تهران (ایران) + موزۀ ملی ایران (۳۰)، کتابخانه ملی ایران (۵)، موزه ملک (۴۵)، موزه ملی قرآن کریم (۵۲)، ..."},
        {val:21,mlat:35.7108,mlon:51.4339,Desc:"تهران (ایران) + موزۀ ملی ایران (۳۰)، کتابخانه ملی ایران (۵)، موزه ملک (۴۵)، موزه ملی قرآن کریم (۵۲)، ..."},
        {val:9,mlat:35.6830,mlon:51.2334,Desc:"تهران (ایران) + موزۀ ملی ایران (۳۰)، کتابخانه ملی ایران (۵)، موزه ملک (۴۵)، موزه ملی قرآن کریم (۵۲)، ..."}
    ]
}
///////////////////////////////////


var map = L.map('mapid').setView([setMap.view.lat,setMap.view.lon], setMap.view.scale);
var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
var osm = new L.TileLayer(osmUrl, { maxZoom: 18, attribution: osmAttrib}).addTo(map);

// var myIcon = L.icon({
//     iconUrl: '../Images/search.png',
//     // iconSize: [38, 95],
//     // iconAnchor: [22, 94],
//     // popupAnchor: [-3, -76],
//     // shadowUrl: 'my-icon-shadow.png',
//     // shadowSize: [68, 95],
//     // shadowAnchor: [22, 94]
// });

for (let i = 0; i < setMap.marker.length; i++) {
    var myIcon = L.divIcon({className: 'my-div-icon',html:'<div class="MapMarker">'+ setMap.marker[i].val +'</div>'});
    L.marker([setMap.marker[i].mlat, setMap.marker[i].mlon],
        {
            icon : myIcon,
            alt:setMap.marker[i].val,
        }
        ).addTo(map)
        .bindPopup(setMap.marker[i].Desc);//.openPopup();
}


// var popup = L.popup();
// var circle = L.circle([35.80995,50.93824], 500, {
//     color: '#00a693',
//     fillColor: '#00a693',
//     fillOpacity: 1
// }).addTo(map)
// .bindPopup("فاز 4 مهرشهر").openPopup();

