var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BatasKelurahanKlojen_1 = new ol.format.GeoJSON();
var features_BatasKelurahanKlojen_1 = format_BatasKelurahanKlojen_1.readFeatures(json_BatasKelurahanKlojen_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKelurahanKlojen_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKelurahanKlojen_1.addFeatures(features_BatasKelurahanKlojen_1);
var lyr_BatasKelurahanKlojen_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKelurahanKlojen_1, 
                style: style_BatasKelurahanKlojen_1,
                popuplayertitle: 'Batas Kelurahan Klojen',
                interactive: true,
                title: '<img src="styles/legend/BatasKelurahanKlojen_1.png" /> Batas Kelurahan Klojen'
            });
var format_PemukimanKlojen_2 = new ol.format.GeoJSON();
var features_PemukimanKlojen_2 = format_PemukimanKlojen_2.readFeatures(json_PemukimanKlojen_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PemukimanKlojen_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PemukimanKlojen_2.addFeatures(features_PemukimanKlojen_2);
var lyr_PemukimanKlojen_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PemukimanKlojen_2, 
                style: style_PemukimanKlojen_2,
                popuplayertitle: 'Pemukiman Klojen',
                interactive: true,
                title: '<img src="styles/legend/PemukimanKlojen_2.png" /> Pemukiman Klojen'
            });
var format_LahanTerbukaHijauKlojen_3 = new ol.format.GeoJSON();
var features_LahanTerbukaHijauKlojen_3 = format_LahanTerbukaHijauKlojen_3.readFeatures(json_LahanTerbukaHijauKlojen_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LahanTerbukaHijauKlojen_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LahanTerbukaHijauKlojen_3.addFeatures(features_LahanTerbukaHijauKlojen_3);
var lyr_LahanTerbukaHijauKlojen_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LahanTerbukaHijauKlojen_3, 
                style: style_LahanTerbukaHijauKlojen_3,
                popuplayertitle: 'Lahan Terbuka Hijau Klojen',
                interactive: true,
                title: '<img src="styles/legend/LahanTerbukaHijauKlojen_3.png" /> Lahan Terbuka Hijau Klojen'
            });
var format_FasilitasIbadahKlojen_4 = new ol.format.GeoJSON();
var features_FasilitasIbadahKlojen_4 = format_FasilitasIbadahKlojen_4.readFeatures(json_FasilitasIbadahKlojen_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasilitasIbadahKlojen_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasilitasIbadahKlojen_4.addFeatures(features_FasilitasIbadahKlojen_4);
var lyr_FasilitasIbadahKlojen_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasilitasIbadahKlojen_4, 
                style: style_FasilitasIbadahKlojen_4,
                popuplayertitle: 'Fasilitas Ibadah Klojen',
                interactive: true,
                title: '<img src="styles/legend/FasilitasIbadahKlojen_4.png" /> Fasilitas Ibadah Klojen'
            });
var format_FasilitasPendidikanKlojen_5 = new ol.format.GeoJSON();
var features_FasilitasPendidikanKlojen_5 = format_FasilitasPendidikanKlojen_5.readFeatures(json_FasilitasPendidikanKlojen_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasilitasPendidikanKlojen_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasilitasPendidikanKlojen_5.addFeatures(features_FasilitasPendidikanKlojen_5);
var lyr_FasilitasPendidikanKlojen_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasilitasPendidikanKlojen_5, 
                style: style_FasilitasPendidikanKlojen_5,
                popuplayertitle: 'Fasilitas Pendidikan Klojen',
                interactive: true,
                title: '<img src="styles/legend/FasilitasPendidikanKlojen_5.png" /> Fasilitas Pendidikan Klojen'
            });
var format_FasilitasUmumKlojen_6 = new ol.format.GeoJSON();
var features_FasilitasUmumKlojen_6 = format_FasilitasUmumKlojen_6.readFeatures(json_FasilitasUmumKlojen_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasilitasUmumKlojen_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasilitasUmumKlojen_6.addFeatures(features_FasilitasUmumKlojen_6);
var lyr_FasilitasUmumKlojen_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasilitasUmumKlojen_6, 
                style: style_FasilitasUmumKlojen_6,
                popuplayertitle: 'Fasilitas Umum Klojen',
                interactive: true,
                title: '<img src="styles/legend/FasilitasUmumKlojen_6.png" /> Fasilitas Umum Klojen'
            });
var format_JalanGangKlojen_7 = new ol.format.GeoJSON();
var features_JalanGangKlojen_7 = format_JalanGangKlojen_7.readFeatures(json_JalanGangKlojen_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanGangKlojen_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanGangKlojen_7.addFeatures(features_JalanGangKlojen_7);
var lyr_JalanGangKlojen_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanGangKlojen_7, 
                style: style_JalanGangKlojen_7,
                popuplayertitle: 'Jalan Gang Klojen',
                interactive: true,
                title: '<img src="styles/legend/JalanGangKlojen_7.png" /> Jalan Gang Klojen'
            });
var format_JalanDesaKlojen_8 = new ol.format.GeoJSON();
var features_JalanDesaKlojen_8 = format_JalanDesaKlojen_8.readFeatures(json_JalanDesaKlojen_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanDesaKlojen_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanDesaKlojen_8.addFeatures(features_JalanDesaKlojen_8);
var lyr_JalanDesaKlojen_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanDesaKlojen_8, 
                style: style_JalanDesaKlojen_8,
                popuplayertitle: 'Jalan Desa Klojen',
                interactive: true,
                title: '<img src="styles/legend/JalanDesaKlojen_8.png" /> Jalan Desa Klojen'
            });
var format_SungaiBrantas_9 = new ol.format.GeoJSON();
var features_SungaiBrantas_9 = format_SungaiBrantas_9.readFeatures(json_SungaiBrantas_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SungaiBrantas_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SungaiBrantas_9.addFeatures(features_SungaiBrantas_9);
var lyr_SungaiBrantas_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SungaiBrantas_9, 
                style: style_SungaiBrantas_9,
                popuplayertitle: 'Sungai Brantas',
                interactive: true,
                title: '<img src="styles/legend/SungaiBrantas_9.png" /> Sungai Brantas'
            });
var format_JalanRayaKlojen_10 = new ol.format.GeoJSON();
var features_JalanRayaKlojen_10 = format_JalanRayaKlojen_10.readFeatures(json_JalanRayaKlojen_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanRayaKlojen_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanRayaKlojen_10.addFeatures(features_JalanRayaKlojen_10);
var lyr_JalanRayaKlojen_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanRayaKlojen_10, 
                style: style_JalanRayaKlojen_10,
                popuplayertitle: 'Jalan Raya Klojen',
                interactive: true,
                title: '<img src="styles/legend/JalanRayaKlojen_10.png" /> Jalan Raya Klojen'
            });
var format_RelKeretaApi_11 = new ol.format.GeoJSON();
var features_RelKeretaApi_11 = format_RelKeretaApi_11.readFeatures(json_RelKeretaApi_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RelKeretaApi_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RelKeretaApi_11.addFeatures(features_RelKeretaApi_11);
var lyr_RelKeretaApi_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RelKeretaApi_11, 
                style: style_RelKeretaApi_11,
                popuplayertitle: 'Rel Kereta Api',
                interactive: true,
                title: '<img src="styles/legend/RelKeretaApi_11.png" /> Rel Kereta Api'
            });
var format_JalanProvinsi_12 = new ol.format.GeoJSON();
var features_JalanProvinsi_12 = format_JalanProvinsi_12.readFeatures(json_JalanProvinsi_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanProvinsi_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanProvinsi_12.addFeatures(features_JalanProvinsi_12);
var lyr_JalanProvinsi_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanProvinsi_12, 
                style: style_JalanProvinsi_12,
                popuplayertitle: 'Jalan Provinsi',
                interactive: true,
                title: '<img src="styles/legend/JalanProvinsi_12.png" /> Jalan Provinsi'
            });
var format_LokasiFakesKlojen_13 = new ol.format.GeoJSON();
var features_LokasiFakesKlojen_13 = format_LokasiFakesKlojen_13.readFeatures(json_LokasiFakesKlojen_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LokasiFakesKlojen_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LokasiFakesKlojen_13.addFeatures(features_LokasiFakesKlojen_13);
var lyr_LokasiFakesKlojen_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LokasiFakesKlojen_13, 
                style: style_LokasiFakesKlojen_13,
                popuplayertitle: 'Lokasi Fakes Klojen',
                interactive: true,
                title: '<img src="styles/legend/LokasiFakesKlojen_13.png" /> Lokasi Fakes Klojen'
            });
var group_model_output = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'model_output'});

lyr_OSMStandard_0.setVisible(true);lyr_BatasKelurahanKlojen_1.setVisible(true);lyr_PemukimanKlojen_2.setVisible(true);lyr_LahanTerbukaHijauKlojen_3.setVisible(true);lyr_FasilitasIbadahKlojen_4.setVisible(true);lyr_FasilitasPendidikanKlojen_5.setVisible(true);lyr_FasilitasUmumKlojen_6.setVisible(true);lyr_JalanGangKlojen_7.setVisible(true);lyr_JalanDesaKlojen_8.setVisible(true);lyr_SungaiBrantas_9.setVisible(true);lyr_JalanRayaKlojen_10.setVisible(true);lyr_RelKeretaApi_11.setVisible(true);lyr_JalanProvinsi_12.setVisible(true);lyr_LokasiFakesKlojen_13.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_BatasKelurahanKlojen_1,lyr_PemukimanKlojen_2,lyr_LahanTerbukaHijauKlojen_3,lyr_FasilitasIbadahKlojen_4,lyr_FasilitasPendidikanKlojen_5,lyr_FasilitasUmumKlojen_6,lyr_JalanGangKlojen_7,lyr_JalanDesaKlojen_8,lyr_SungaiBrantas_9,lyr_JalanRayaKlojen_10,lyr_RelKeretaApi_11,lyr_JalanProvinsi_12,lyr_LokasiFakesKlojen_13];
lyr_BatasKelurahanKlojen_1.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Kode Pos': 'Kode Pos', 'Penduduk': 'Penduduk', 'Luas_M': 'Luas_M', 'Luas_Ha': 'Luas_Ha', });
lyr_PemukimanKlojen_2.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Keterangan': 'Keterangan', 'Luas_M': 'Luas_M', 'Luas_Ha': 'Luas_Ha', });
lyr_LahanTerbukaHijauKlojen_3.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas_M': 'Luas_M', 'Luas_Ha': 'Luas_Ha', });
lyr_FasilitasIbadahKlojen_4.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas_M': 'Luas_M', 'Luas_Ha': 'Luas_Ha', });
lyr_FasilitasPendidikanKlojen_5.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas_M': 'Luas_M', 'Luan_Ha': 'Luan_Ha', });
lyr_FasilitasUmumKlojen_6.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas_M': 'Luas_M', 'Luas_Ha': 'Luas_Ha', });
lyr_JalanGangKlojen_7.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Panjang_M': 'Panjang_M', 'Panjang_KM': 'Panjang_KM', });
lyr_JalanDesaKlojen_8.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Panjang_M': 'Panjang_M', 'Panjang_KM': 'Panjang_KM', });
lyr_SungaiBrantas_9.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Panjang_M': 'Panjang_M', 'Panjang_KM': 'Panjang_KM', });
lyr_JalanRayaKlojen_10.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Panjang_M': 'Panjang_M', 'Panjang_KM': 'Panjang_KM', });
lyr_RelKeretaApi_11.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Panjang_M': 'Panjang_M', 'Panjang_KM': 'Panjang_KM', });
lyr_JalanProvinsi_12.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Panjang_M': 'Panjang_M', 'Panjang_KM': 'Panjang_KM', });
lyr_LokasiFakesKlojen_13.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Alamat': 'Alamat', 'No Telp': 'No Telp', });
lyr_BatasKelurahanKlojen_1.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Kode Pos': 'TextEdit', 'Penduduk': 'TextEdit', 'Luas_M': 'TextEdit', 'Luas_Ha': 'TextEdit', });
lyr_PemukimanKlojen_2.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Keterangan': 'TextEdit', 'Luas_M': 'TextEdit', 'Luas_Ha': 'TextEdit', });
lyr_LahanTerbukaHijauKlojen_3.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Luas_M': 'TextEdit', 'Luas_Ha': 'TextEdit', });
lyr_FasilitasIbadahKlojen_4.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Luas_M': 'TextEdit', 'Luas_Ha': 'TextEdit', });
lyr_FasilitasPendidikanKlojen_5.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Luas_M': 'TextEdit', 'Luan_Ha': 'TextEdit', });
lyr_FasilitasUmumKlojen_6.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Luas_M': 'TextEdit', 'Luas_Ha': 'TextEdit', });
lyr_JalanGangKlojen_7.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Panjang_M': 'TextEdit', 'Panjang_KM': 'TextEdit', });
lyr_JalanDesaKlojen_8.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Panjang_M': 'TextEdit', 'Panjang_KM': 'TextEdit', });
lyr_SungaiBrantas_9.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Panjang_M': 'TextEdit', 'Panjang_KM': 'TextEdit', });
lyr_JalanRayaKlojen_10.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Panjang_M': 'TextEdit', 'Panjang_KM': 'TextEdit', });
lyr_RelKeretaApi_11.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Panjang_M': 'TextEdit', 'Panjang_KM': 'TextEdit', });
lyr_JalanProvinsi_12.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Panjang_M': 'TextEdit', 'Panjang_KM': 'TextEdit', });
lyr_LokasiFakesKlojen_13.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Alamat': 'TextEdit', 'No Telp': 'TextEdit', });
lyr_BatasKelurahanKlojen_1.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Kode Pos': 'no label', 'Penduduk': 'no label', 'Luas_M': 'no label', 'Luas_Ha': 'no label', });
lyr_PemukimanKlojen_2.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Keterangan': 'no label', 'Luas_M': 'no label', 'Luas_Ha': 'no label', });
lyr_LahanTerbukaHijauKlojen_3.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Luas_M': 'no label', 'Luas_Ha': 'no label', });
lyr_FasilitasIbadahKlojen_4.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Luas_M': 'no label', 'Luas_Ha': 'no label', });
lyr_FasilitasPendidikanKlojen_5.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Luas_M': 'no label', 'Luan_Ha': 'no label', });
lyr_FasilitasUmumKlojen_6.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Luas_M': 'no label', 'Luas_Ha': 'no label', });
lyr_JalanGangKlojen_7.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Panjang_M': 'no label', 'Panjang_KM': 'no label', });
lyr_JalanDesaKlojen_8.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Panjang_M': 'no label', 'Panjang_KM': 'no label', });
lyr_SungaiBrantas_9.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Panjang_M': 'no label', 'Panjang_KM': 'no label', });
lyr_JalanRayaKlojen_10.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Panjang_M': 'no label', 'Panjang_KM': 'no label', });
lyr_RelKeretaApi_11.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Panjang_M': 'no label', 'Panjang_KM': 'no label', });
lyr_JalanProvinsi_12.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Panjang_M': 'no label', 'Panjang_KM': 'no label', });
lyr_LokasiFakesKlojen_13.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Alamat': 'no label', 'No Telp': 'no label', });
lyr_LokasiFakesKlojen_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});