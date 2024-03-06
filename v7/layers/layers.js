var wms_layers = [];


        var lyr__0 = new ol.layer.Tile({
            'title': '地图',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://webrd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__1, 
                style: style__1,
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> 其他品牌'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__2, 
                style: style__2,
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> 道达尔'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__3, 
                style: style__3,
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> 壳牌'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__4, 
                style: style__4,
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> 中国石化'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);cluster__5 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource__5
});
var lyr__5 = new ol.layer.Vector({
                declutter: true,
                source:cluster__5, 
                style: style__5,
                interactive: true,
                title: '<img src="styles/legend/_5.png" /> 中国石油'
            });
var format__6 = new ol.format.GeoJSON();
var features__6 = format__6.readFeatures(json__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__6.addFeatures(features__6);
var lyr__6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__6, 
                style: style__6,
                interactive: true,
                title: '<img src="styles/legend/_6.png" /> 中石油油库'
            });
var format__7 = new ol.format.GeoJSON();
var features__7 = format__7.readFeatures(json__7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__7.addFeatures(features__7);
var lyr__7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__7, 
                style: style__7,
                interactive: true,
                title: '<img src="styles/legend/_7.png" /> 其他油库'
            });

lyr__0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);lyr__6.setVisible(true);lyr__7.setVisible(true);
var layersList = [lyr__0,lyr__1,lyr__2,lyr__3,lyr__4,lyr__5,lyr__6,lyr__7];
lyr__1.set('fieldAliases', {'fid': 'fid', '站点名': '站点名', '地址': '地址', 'gcj02_lng': 'gcj02_lng', 'gcj02_lat': 'gcj02_lat', 'wgs84_lng': 'wgs84_lng', 'wgs84_lat': 'wgs84_lat', '电话': '电话', '区县': '区县', });
lyr__2.set('fieldAliases', {'fid': 'fid', '站点名': '站点名', '地址': '地址', 'gcj02_lng': 'gcj02_lng', 'gcj02_lat': 'gcj02_lat', 'wgs84_lng': 'wgs84_lng', 'wgs84_lat': 'wgs84_lat', '电话': '电话', '区县': '区县', });
lyr__3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'name': 'name', 'address': 'address', 'gcj02_lng': 'gcj02_lng', 'gcj02_lat': 'gcj02_lat', 'wgs84_lng': 'wgs84_lng', 'wgs84_lat': 'wgs84_lat', 'tel': 'tel', 'adName': 'adName', });
lyr__4.set('fieldAliases', {'fid': 'fid', '站点名': '站点名', '地址': '地址', 'gcj02_lng': 'gcj02_lng', 'gcj02_lat': 'gcj02_lat', 'wgs84_lng': 'wgs84_lng', 'wgs84_lat': 'wgs84_lat', '电话': '电话', '区县': '区县', });
lyr__5.set('fieldAliases', {'fid': 'fid', '站点代码': '站点代码', '经度': '经度', '纬度': '纬度', '站点名': '站点名', '公司': '公司', '性质': '性质', });
lyr__6.set('fieldAliases', {'序号': '序号', '省份': '省份', '企业名称': '企业名称', '详细地址': '详细地址', '库容基本情况': '库容基本情况', '备注': '备注', 'Longitude': 'Longitude', 'Latitude': 'Latitude', '简称': '简称', '基本情况': '基本情况', '运输方式': '运输方式', '备注_1': '备注_1', });
lyr__7.set('fieldAliases', {'序号': '序号', '省份': '省份', '企业名称': '企业名称', '详细地址': '详细地址', '库容基本情况': '库容基本情况', '备注': '备注', 'Longitude': 'Longitude', 'Latitude': 'Latitude', '简称': '简称', '基本情况': '基本情况', '运输方式': '运输方式', '备注_1': '备注_1', });
lyr__1.set('fieldImages', {'fid': 'TextEdit', '站点名': 'TextEdit', '地址': 'TextEdit', 'gcj02_lng': 'TextEdit', 'gcj02_lat': 'TextEdit', 'wgs84_lng': 'TextEdit', 'wgs84_lat': 'TextEdit', '电话': 'TextEdit', '区县': 'TextEdit', });
lyr__2.set('fieldImages', {'fid': 'TextEdit', '站点名': '', '地址': '', 'gcj02_lng': 'TextEdit', 'gcj02_lat': 'TextEdit', 'wgs84_lng': 'TextEdit', 'wgs84_lat': 'TextEdit', '电话': '', '区县': '', });
lyr__3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'address': 'TextEdit', 'gcj02_lng': 'TextEdit', 'gcj02_lat': 'TextEdit', 'wgs84_lng': 'TextEdit', 'wgs84_lat': 'TextEdit', 'tel': 'TextEdit', 'adName': 'TextEdit', });
lyr__4.set('fieldImages', {'fid': 'TextEdit', '站点名': '', '地址': '', 'gcj02_lng': 'TextEdit', 'gcj02_lat': 'TextEdit', 'wgs84_lng': 'TextEdit', 'wgs84_lat': 'TextEdit', '电话': '', '区县': '', });
lyr__5.set('fieldImages', {'fid': 'Hidden', '站点代码': 'TextEdit', '经度': 'TextEdit', '纬度': 'TextEdit', '站点名': 'TextEdit', '公司': 'TextEdit', '性质': 'TextEdit', });
lyr__6.set('fieldImages', {'序号': 'Range', '省份': 'TextEdit', '企业名称': 'TextEdit', '详细地址': 'TextEdit', '库容基本情况': 'TextEdit', '备注': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', '简称': 'TextEdit', '基本情况': 'TextEdit', '运输方式': 'TextEdit', '备注_1': 'TextEdit', });
lyr__7.set('fieldImages', {'序号': 'Range', '省份': 'TextEdit', '企业名称': 'TextEdit', '详细地址': 'TextEdit', '库容基本情况': 'TextEdit', '备注': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', '简称': 'TextEdit', '基本情况': 'TextEdit', '运输方式': 'TextEdit', '备注_1': 'TextEdit', });
lyr__1.set('fieldLabels', {'fid': 'inline label', '站点名': 'inline label', '地址': 'inline label', 'gcj02_lng': 'inline label', 'gcj02_lat': 'inline label', 'wgs84_lng': 'inline label', 'wgs84_lat': 'inline label', '电话': 'inline label', '区县': 'inline label', });
lyr__2.set('fieldLabels', {'fid': 'no label', '站点名': 'inline label', '地址': 'inline label', 'gcj02_lng': 'no label', 'gcj02_lat': 'no label', 'wgs84_lng': 'no label', 'wgs84_lat': 'no label', '电话': 'inline label', '区县': 'inline label', });
lyr__3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'name': 'inline label', 'address': 'inline label', 'gcj02_lng': 'inline label', 'gcj02_lat': 'inline label', 'wgs84_lng': 'inline label', 'wgs84_lat': 'inline label', 'tel': 'inline label', 'adName': 'inline label', });
lyr__4.set('fieldLabels', {'fid': 'inline label', '站点名': 'inline label', '地址': 'inline label', 'gcj02_lng': 'inline label', 'gcj02_lat': 'inline label', 'wgs84_lng': 'inline label', 'wgs84_lat': 'inline label', '电话': 'inline label', '区县': 'inline label', });
lyr__5.set('fieldLabels', {'站点代码': 'inline label', '经度': 'inline label', '纬度': 'inline label', '站点名': 'inline label', '公司': 'inline label', '性质': 'inline label', });
lyr__6.set('fieldLabels', {'序号': 'inline label', '省份': 'inline label', '企业名称': 'inline label', '详细地址': 'inline label', '库容基本情况': 'inline label', '备注': 'inline label', 'Longitude': 'inline label', 'Latitude': 'inline label', '简称': 'inline label', '基本情况': 'inline label', '运输方式': 'inline label', '备注_1': 'inline label', });
lyr__7.set('fieldLabels', {'序号': 'inline label', '省份': 'inline label', '企业名称': 'inline label', '详细地址': 'inline label', '库容基本情况': 'inline label', '备注': 'inline label', 'Longitude': 'inline label', 'Latitude': 'inline label', '简称': 'inline label', '基本情况': 'inline label', '运输方式': 'inline label', '备注_1': 'inline label', });
lyr__7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});