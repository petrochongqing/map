var wms_layers = [];


        var lyr_AMAP_0 = new ol.layer.Tile({
            'title': 'AMAP',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://webrd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}'
            })
        });
var format_Reprojectedcopy_1 = new ol.format.GeoJSON();
var features_Reprojectedcopy_1 = format_Reprojectedcopy_1.readFeatures(json_Reprojectedcopy_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reprojectedcopy_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reprojectedcopy_1.addFeatures(features_Reprojectedcopy_1);
var lyr_Reprojectedcopy_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Reprojectedcopy_1, 
                style: style_Reprojectedcopy_1,
                interactive: true,
                title: '<img src="styles/legend/Reprojectedcopy_1.png" /> Reprojected copy'
            });

lyr_AMAP_0.setVisible(true);lyr_Reprojectedcopy_1.setVisible(true);
var layersList = [lyr_AMAP_0,lyr_Reprojectedcopy_1];
lyr_Reprojectedcopy_1.set('fieldAliases', {'省公司�': '省公司�', '省公司': '省公司', '地市公�': '地市公�', '地市��_1': '地市��_1', '站全名': '站全名', '站编码': '站编码', '站经度': '站经度', '站纬度': '站纬度', '地理位�': '地理位�', '地标建�': '地标建�', });
lyr_Reprojectedcopy_1.set('fieldImages', {'省公司�': '', '省公司': '', '地市公�': '', '地市��_1': '', '站全名': '', '站编码': '', '站经度': '', '站纬度': '', '地理位�': '', '地标建�': '', });
lyr_Reprojectedcopy_1.set('fieldLabels', {'省公司�': 'no label', '省公司': 'no label', '地市公�': 'no label', '地市��_1': 'no label', '站全名': 'no label', '站编码': 'no label', '站经度': 'no label', '站纬度': 'no label', '地理位�': 'no label', '地标建�': 'no label', });
lyr_Reprojectedcopy_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});