var wms_layers = [];


        var lyr__0 = new ol.layer.Tile({
            'title': '地图',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
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
                interactive: false,
                title: '<img src="styles/legend/_1.png" /> 主城边界'
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
                interactive: false,
                title: '<img src="styles/legend/_2.png" /> 重庆边界'
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
                title: '<img src="styles/legend/_3.png" /> 其他品牌'
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
                title: '<img src="styles/legend/_4.png" /> 道达尔'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__5, 
                style: style__5,
                interactive: true,
                title: '<img src="styles/legend/_5.png" /> 壳牌'
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
                title: '<img src="styles/legend/_6.png" /> 中国石化'
            });
var format__7 = new ol.format.GeoJSON();
var features__7 = format__7.readFeatures(json__7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__7.addFeatures(features__7);cluster__7 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource__7
});
var lyr__7 = new ol.layer.Vector({
                declutter: true,
                source:cluster__7, 
                style: style__7,
                interactive: true,
                title: '<img src="styles/legend/_7.png" /> 中国石油'
            });

lyr__0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);lyr__6.setVisible(true);lyr__7.setVisible(true);
var layersList = [lyr__0,lyr__1,lyr__2,lyr__3,lyr__4,lyr__5,lyr__6,lyr__7];
lyr__1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'name': 'name', 'site': 'site', });
lyr__2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'boundary': 'boundary', 'leisure': 'leisure', 'gns:UNI': 'gns:UNI', 'gns:UFI': 'gns:UFI', 'gns:DSG': 'gns:DSG', 'gns:ADM1': 'gns:ADM1', 'source:name': 'source:name', 'name:ast': 'name:ast', 'old_name:cs': 'old_name:cs', 'name:sl': 'name:sl', 'name:sco': 'name:sco', 'divison_code': 'divison_code', 'official_name:lt': 'official_name:lt', 'name:vep': 'name:vep', 'official_name:uk': 'official_name:uk', 'official_name:tr': 'official_name:tr', 'official_name:ru': 'official_name:ru', 'official_name:nl': 'official_name:nl', 'official_name:nan': 'official_name:nan', 'official_name:it': 'official_name:it', 'official_name:fr': 'official_name:fr', 'official_name:eu': 'official_name:eu', 'official_name:es': 'official_name:es', 'official_name:en': 'official_name:en', 'official_name:de': 'official_name:de', 'official_name:da': 'official_name:da', 'official_name:cs': 'official_name:cs', 'official_name:ceb': 'official_name:ceb', 'official_name:ca': 'official_name:ca', 'date': 'date', 'place': 'place', 'alt_name:zh-Hant': 'alt_name:zh-Hant', 'alt_name:zh-Hans': 'alt_name:zh-Hans', 'wikipedia:de': 'wikipedia:de', 'old_division_code': 'old_division_code', 'postal_code': 'postal_code', 'name:war': 'name:war', 'name:pam': 'name:pam', 'name:ceb': 'name:ceb', 'wikimedia_commons': 'wikimedia_commons', 'nickname': 'nickname', 'old_name:zh': 'old_name:zh', 'alt_name:uk': 'alt_name:uk', 'alt_name:vi': 'alt_name:vi', 'alt_name:ru': 'alt_name:ru', 'old_name': 'old_name', 'source:population': 'source:population', 'old_name:en': 'old_name:en', 'name:zh-Latn-pinyin': 'name:zh-Latn-pinyin', 'alt_name:zh': 'alt_name:zh', 'name:sm': 'name:sm', 'name:bs': 'name:bs', 'note:population': 'note:population', 'name:xmf': 'name:xmf', 'name:wuu': 'name:wuu', 'name:wo': 'name:wo', 'name:tn': 'name:tn', 'name:sq': 'name:sq', 'name:sat': 'name:sat', 'name:sah': 'name:sah', 'name:pnb': 'name:pnb', 'name:pa': 'name:pa', 'name:ny': 'name:ny', 'name:my': 'name:my', 'name:mi': 'name:mi', 'name:lzh': 'name:lzh', 'name:ky': 'name:ky', 'name:kw': 'name:kw', 'name:ko_hanja': 'name:ko_hanja', 'name:kl': 'name:kl', 'name:ki': 'name:ki', 'name:ie': 'name:ie', 'name:hak': 'name:hak', 'name:ha': 'name:ha', 'name:chy': 'name:chy', 'name:cdo': 'name:cdo', 'name:bm': 'name:bm', 'name:ba': 'name:ba', 'name:arz': 'name:arz', 'name:am': 'name:am', 'alt_name:eo': 'alt_name:eo', 'alt_name:en': 'alt_name:en', 'name:tt': 'name:tt', 'name:nan': 'name:nan', 'name:ml': 'name:ml', 'name:kn': 'name:kn', 'name:kk': 'name:kk', 'name:is': 'name:is', 'name:gl': 'name:gl', 'name:bh': 'name:bh', 'name:az': 'name:az', 'alt_name:hr': 'alt_name:hr', 'alt_name:cs': 'alt_name:cs', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'type': 'type', 'short_name': 'short_name', 'ref:zh-Hant': 'ref:zh-Hant', 'ref:zh-Hans': 'ref:zh-Hans', 'ref:zh': 'ref:zh', 'ref:en': 'ref:en', 'ref': 'ref', 'population:date': 'population:date', 'population': 'population', 'official_name': 'official_name', 'name:zh_pinyin': 'name:zh_pinyin', 'name:zh-Hant': 'name:zh-Hant', 'name:zh-Hans': 'name:zh-Hans', 'name:zh': 'name:zh', 'name:za': 'name:za', 'name:yue': 'name:yue', 'name:wa': 'name:wa', 'name:vi': 'name:vi', 'name:uz': 'name:uz', 'name:ur': 'name:ur', 'name:uk': 'name:uk', 'name:ug': 'name:ug', 'name:tr': 'name:tr', 'name:tl': 'name:tl', 'name:th': 'name:th', 'name:tg': 'name:tg', 'name:ta': 'name:ta', 'name:sw': 'name:sw', 'name:sv': 'name:sv', 'name:sr': 'name:sr', 'name:sk': 'name:sk', 'name:ru': 'name:ru', 'name:ro': 'name:ro', 'name:qu': 'name:qu', 'name:pt': 'name:pt', 'name:pl': 'name:pl', 'name:os': 'name:os', 'name:oc': 'name:oc', 'name:no': 'name:no', 'name:nn': 'name:nn', 'name:nl': 'name:nl', 'name:ms': 'name:ms', 'name:mr': 'name:mr', 'name:mn': 'name:mn', 'name:mg': 'name:mg', 'name:lv': 'name:lv', 'name:lt': 'name:lt', 'name:la': 'name:la', 'name:ko': 'name:ko', 'name:kg': 'name:kg', 'name:ka': 'name:ka', 'name:ja': 'name:ja', 'name:it': 'name:it', 'name:id': 'name:id', 'name:ia': 'name:ia', 'name:hy': 'name:hy', 'name:hu': 'name:hu', 'name:hr': 'name:hr', 'name:hi': 'name:hi', 'name:he': 'name:he', 'name:gv': 'name:gv', 'name:ga': 'name:ga', 'name:fr': 'name:fr', 'name:fi': 'name:fi', 'name:fa': 'name:fa', 'name:eu': 'name:eu', 'name:et': 'name:et', 'name:es': 'name:es', 'name:eo': 'name:eo', 'name:en': 'name:en', 'name:el': 'name:el', 'name:de': 'name:de', 'name:da': 'name:da', 'name:cy': 'name:cy', 'name:cs': 'name:cs', 'name:ce': 'name:ce', 'name:ca': 'name:ca', 'name:br': 'name:br', 'name:bo': 'name:bo', 'name:bn': 'name:bn', 'name:bg': 'name:bg', 'name:be': 'name:be', 'name:ar': 'name:ar', 'name:af': 'name:af', 'name': 'name', 'is_in:country_code': 'is_in:country_code', 'int_name': 'int_name', 'division_code': 'division_code', 'alt_ref': 'alt_ref', 'alt_name': 'alt_name', 'admin_level': 'admin_level', 'ISO3166-2': 'ISO3166-2', });
lyr__3.set('fieldAliases', {'id': 'id', 'name': 'name', 'type': 'type', 'typeCode': 'typeCode', 'bizType': 'bizType', 'address': 'address', 'gcj02_lng': 'gcj02_lng', 'gcj02_lat': 'gcj02_lat', 'wgs84_lng': 'wgs84_lng', 'wgs84_lat': 'wgs84_lat', 'tel': 'tel', 'provinceName': 'provinceName', 'cityName': 'cityName', 'adName': 'adName', });
lyr__4.set('fieldAliases', {'id': 'id', 'name': 'name', 'type': 'type', 'typeCode': 'typeCode', 'bizType': 'bizType', 'address': 'address', 'gcj02_lng': 'gcj02_lng', 'gcj02_lat': 'gcj02_lat', 'wgs84_lng': 'wgs84_lng', 'wgs84_lat': 'wgs84_lat', 'tel': 'tel', 'provinceName': 'provinceName', 'cityName': 'cityName', 'adName': 'adName', });
lyr__5.set('fieldAliases', {'id': 'id', 'name': 'name', 'type': 'type', 'typeCode': 'typeCode', 'bizType': 'bizType', 'address': 'address', 'gcj02_lng': 'gcj02_lng', 'gcj02_lat': 'gcj02_lat', 'wgs84_lng': 'wgs84_lng', 'wgs84_lat': 'wgs84_lat', 'tel': 'tel', 'provinceName': 'provinceName', 'cityName': 'cityName', 'adName': 'adName', });
lyr__6.set('fieldAliases', {'id': 'id', 'name': 'name', 'type': 'type', 'typeCode': 'typeCode', 'bizType': 'bizType', 'address': 'address', 'gcj02_lng': 'gcj02_lng', 'gcj02_lat': 'gcj02_lat', 'wgs84_lng': 'wgs84_lng', 'wgs84_lat': 'wgs84_lat', 'tel': 'tel', 'provinceName': 'provinceName', 'cityName': 'cityName', 'adName': 'adName', });
lyr__7.set('fieldAliases', {'fid': 'fid', 'field_1': 'field_1', 'field_2': 'field_2', 'field_3': 'field_3', 'field_4': 'field_4', });
lyr__1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'site': 'TextEdit', });
lyr__2.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'boundary': 'TextEdit', 'leisure': 'TextEdit', 'gns:UNI': 'TextEdit', 'gns:UFI': 'TextEdit', 'gns:DSG': 'TextEdit', 'gns:ADM1': 'TextEdit', 'source:name': 'TextEdit', 'name:ast': 'TextEdit', 'old_name:cs': 'TextEdit', 'name:sl': 'TextEdit', 'name:sco': 'TextEdit', 'divison_code': 'TextEdit', 'official_name:lt': 'TextEdit', 'name:vep': 'TextEdit', 'official_name:uk': 'TextEdit', 'official_name:tr': 'TextEdit', 'official_name:ru': 'TextEdit', 'official_name:nl': 'TextEdit', 'official_name:nan': 'TextEdit', 'official_name:it': 'TextEdit', 'official_name:fr': 'TextEdit', 'official_name:eu': 'TextEdit', 'official_name:es': 'TextEdit', 'official_name:en': 'TextEdit', 'official_name:de': 'TextEdit', 'official_name:da': 'TextEdit', 'official_name:cs': 'TextEdit', 'official_name:ceb': 'TextEdit', 'official_name:ca': 'TextEdit', 'date': 'TextEdit', 'place': 'TextEdit', 'alt_name:zh-Hant': 'TextEdit', 'alt_name:zh-Hans': 'TextEdit', 'wikipedia:de': 'TextEdit', 'old_division_code': 'TextEdit', 'postal_code': 'TextEdit', 'name:war': 'TextEdit', 'name:pam': 'TextEdit', 'name:ceb': 'TextEdit', 'wikimedia_commons': 'TextEdit', 'nickname': 'TextEdit', 'old_name:zh': 'TextEdit', 'alt_name:uk': 'TextEdit', 'alt_name:vi': 'TextEdit', 'alt_name:ru': 'TextEdit', 'old_name': 'TextEdit', 'source:population': 'TextEdit', 'old_name:en': 'TextEdit', 'name:zh-Latn-pinyin': 'TextEdit', 'alt_name:zh': 'TextEdit', 'name:sm': 'TextEdit', 'name:bs': 'TextEdit', 'note:population': 'TextEdit', 'name:xmf': 'TextEdit', 'name:wuu': 'TextEdit', 'name:wo': 'TextEdit', 'name:tn': 'TextEdit', 'name:sq': 'TextEdit', 'name:sat': 'TextEdit', 'name:sah': 'TextEdit', 'name:pnb': 'TextEdit', 'name:pa': 'TextEdit', 'name:ny': 'TextEdit', 'name:my': 'TextEdit', 'name:mi': 'TextEdit', 'name:lzh': 'TextEdit', 'name:ky': 'TextEdit', 'name:kw': 'TextEdit', 'name:ko_hanja': 'TextEdit', 'name:kl': 'TextEdit', 'name:ki': 'TextEdit', 'name:ie': 'TextEdit', 'name:hak': 'TextEdit', 'name:ha': 'TextEdit', 'name:chy': 'TextEdit', 'name:cdo': 'TextEdit', 'name:bm': 'TextEdit', 'name:ba': 'TextEdit', 'name:arz': 'TextEdit', 'name:am': 'TextEdit', 'alt_name:eo': 'TextEdit', 'alt_name:en': 'TextEdit', 'name:tt': 'TextEdit', 'name:nan': 'TextEdit', 'name:ml': 'TextEdit', 'name:kn': 'TextEdit', 'name:kk': 'TextEdit', 'name:is': 'TextEdit', 'name:gl': 'TextEdit', 'name:bh': 'TextEdit', 'name:az': 'TextEdit', 'alt_name:hr': 'TextEdit', 'alt_name:cs': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'type': 'TextEdit', 'short_name': 'TextEdit', 'ref:zh-Hant': 'TextEdit', 'ref:zh-Hans': 'TextEdit', 'ref:zh': 'TextEdit', 'ref:en': 'TextEdit', 'ref': 'TextEdit', 'population:date': 'TextEdit', 'population': 'TextEdit', 'official_name': 'TextEdit', 'name:zh_pinyin': 'TextEdit', 'name:zh-Hant': 'TextEdit', 'name:zh-Hans': 'TextEdit', 'name:zh': 'TextEdit', 'name:za': 'TextEdit', 'name:yue': 'TextEdit', 'name:wa': 'TextEdit', 'name:vi': 'TextEdit', 'name:uz': 'TextEdit', 'name:ur': 'TextEdit', 'name:uk': 'TextEdit', 'name:ug': 'TextEdit', 'name:tr': 'TextEdit', 'name:tl': 'TextEdit', 'name:th': 'TextEdit', 'name:tg': 'TextEdit', 'name:ta': 'TextEdit', 'name:sw': 'TextEdit', 'name:sv': 'TextEdit', 'name:sr': 'TextEdit', 'name:sk': 'TextEdit', 'name:ru': 'TextEdit', 'name:ro': 'TextEdit', 'name:qu': 'TextEdit', 'name:pt': 'TextEdit', 'name:pl': 'TextEdit', 'name:os': 'TextEdit', 'name:oc': 'TextEdit', 'name:no': 'TextEdit', 'name:nn': 'TextEdit', 'name:nl': 'TextEdit', 'name:ms': 'TextEdit', 'name:mr': 'TextEdit', 'name:mn': 'TextEdit', 'name:mg': 'TextEdit', 'name:lv': 'TextEdit', 'name:lt': 'TextEdit', 'name:la': 'TextEdit', 'name:ko': 'TextEdit', 'name:kg': 'TextEdit', 'name:ka': 'TextEdit', 'name:ja': 'TextEdit', 'name:it': 'TextEdit', 'name:id': 'TextEdit', 'name:ia': 'TextEdit', 'name:hy': 'TextEdit', 'name:hu': 'TextEdit', 'name:hr': 'TextEdit', 'name:hi': 'TextEdit', 'name:he': 'TextEdit', 'name:gv': 'TextEdit', 'name:ga': 'TextEdit', 'name:fr': 'TextEdit', 'name:fi': 'TextEdit', 'name:fa': 'TextEdit', 'name:eu': 'TextEdit', 'name:et': 'TextEdit', 'name:es': 'TextEdit', 'name:eo': 'TextEdit', 'name:en': 'TextEdit', 'name:el': 'TextEdit', 'name:de': 'TextEdit', 'name:da': 'TextEdit', 'name:cy': 'TextEdit', 'name:cs': 'TextEdit', 'name:ce': 'TextEdit', 'name:ca': 'TextEdit', 'name:br': 'TextEdit', 'name:bo': 'TextEdit', 'name:bn': 'TextEdit', 'name:bg': 'TextEdit', 'name:be': 'TextEdit', 'name:ar': 'TextEdit', 'name:af': 'TextEdit', 'name': 'TextEdit', 'is_in:country_code': 'TextEdit', 'int_name': 'TextEdit', 'division_code': 'TextEdit', 'alt_ref': 'TextEdit', 'alt_name': 'TextEdit', 'admin_level': 'TextEdit', 'ISO3166-2': 'TextEdit', });
lyr__3.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'typeCode': 'TextEdit', 'bizType': 'TextEdit', 'address': 'TextEdit', 'gcj02_lng': 'TextEdit', 'gcj02_lat': 'TextEdit', 'wgs84_lng': 'TextEdit', 'wgs84_lat': 'TextEdit', 'tel': 'TextEdit', 'provinceName': 'TextEdit', 'cityName': 'TextEdit', 'adName': 'TextEdit', });
lyr__4.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'typeCode': 'Range', 'bizType': 'TextEdit', 'address': 'TextEdit', 'gcj02_lng': 'TextEdit', 'gcj02_lat': 'TextEdit', 'wgs84_lng': 'TextEdit', 'wgs84_lat': 'TextEdit', 'tel': 'TextEdit', 'provinceName': 'TextEdit', 'cityName': 'TextEdit', 'adName': 'TextEdit', });
lyr__5.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'typeCode': 'Range', 'bizType': 'TextEdit', 'address': 'TextEdit', 'gcj02_lng': 'TextEdit', 'gcj02_lat': 'TextEdit', 'wgs84_lng': 'TextEdit', 'wgs84_lat': 'TextEdit', 'tel': 'TextEdit', 'provinceName': 'TextEdit', 'cityName': 'TextEdit', 'adName': 'TextEdit', });
lyr__6.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'typeCode': 'TextEdit', 'bizType': 'TextEdit', 'address': 'TextEdit', 'gcj02_lng': 'TextEdit', 'gcj02_lat': 'TextEdit', 'wgs84_lng': 'TextEdit', 'wgs84_lat': 'TextEdit', 'tel': 'TextEdit', 'provinceName': 'TextEdit', 'cityName': 'TextEdit', 'adName': 'TextEdit', });
lyr__7.set('fieldImages', {'fid': 'TextEdit', 'field_1': 'TextEdit', 'field_2': 'TextEdit', 'field_3': 'TextEdit', 'field_4': 'TextEdit', });
lyr__1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'name': 'no label', 'site': 'no label', });
lyr__2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'boundary': 'no label', 'leisure': 'no label', 'gns:UNI': 'no label', 'gns:UFI': 'no label', 'gns:DSG': 'no label', 'gns:ADM1': 'no label', 'source:name': 'no label', 'name:ast': 'no label', 'old_name:cs': 'no label', 'name:sl': 'no label', 'name:sco': 'no label', 'divison_code': 'no label', 'official_name:lt': 'no label', 'name:vep': 'no label', 'official_name:uk': 'no label', 'official_name:tr': 'no label', 'official_name:ru': 'no label', 'official_name:nl': 'no label', 'official_name:nan': 'no label', 'official_name:it': 'no label', 'official_name:fr': 'no label', 'official_name:eu': 'no label', 'official_name:es': 'no label', 'official_name:en': 'no label', 'official_name:de': 'no label', 'official_name:da': 'no label', 'official_name:cs': 'no label', 'official_name:ceb': 'no label', 'official_name:ca': 'no label', 'date': 'no label', 'place': 'no label', 'alt_name:zh-Hant': 'no label', 'alt_name:zh-Hans': 'no label', 'wikipedia:de': 'no label', 'old_division_code': 'no label', 'postal_code': 'no label', 'name:war': 'no label', 'name:pam': 'no label', 'name:ceb': 'no label', 'wikimedia_commons': 'no label', 'nickname': 'no label', 'old_name:zh': 'no label', 'alt_name:uk': 'no label', 'alt_name:vi': 'no label', 'alt_name:ru': 'no label', 'old_name': 'no label', 'source:population': 'no label', 'old_name:en': 'no label', 'name:zh-Latn-pinyin': 'no label', 'alt_name:zh': 'no label', 'name:sm': 'no label', 'name:bs': 'no label', 'note:population': 'no label', 'name:xmf': 'no label', 'name:wuu': 'no label', 'name:wo': 'no label', 'name:tn': 'no label', 'name:sq': 'no label', 'name:sat': 'no label', 'name:sah': 'no label', 'name:pnb': 'no label', 'name:pa': 'no label', 'name:ny': 'no label', 'name:my': 'no label', 'name:mi': 'no label', 'name:lzh': 'no label', 'name:ky': 'no label', 'name:kw': 'no label', 'name:ko_hanja': 'no label', 'name:kl': 'no label', 'name:ki': 'no label', 'name:ie': 'no label', 'name:hak': 'no label', 'name:ha': 'no label', 'name:chy': 'no label', 'name:cdo': 'no label', 'name:bm': 'no label', 'name:ba': 'no label', 'name:arz': 'no label', 'name:am': 'no label', 'alt_name:eo': 'no label', 'alt_name:en': 'no label', 'name:tt': 'no label', 'name:nan': 'no label', 'name:ml': 'no label', 'name:kn': 'no label', 'name:kk': 'no label', 'name:is': 'no label', 'name:gl': 'no label', 'name:bh': 'no label', 'name:az': 'no label', 'alt_name:hr': 'no label', 'alt_name:cs': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'type': 'no label', 'short_name': 'no label', 'ref:zh-Hant': 'no label', 'ref:zh-Hans': 'no label', 'ref:zh': 'no label', 'ref:en': 'no label', 'ref': 'no label', 'population:date': 'no label', 'population': 'no label', 'official_name': 'no label', 'name:zh_pinyin': 'no label', 'name:zh-Hant': 'no label', 'name:zh-Hans': 'no label', 'name:zh': 'no label', 'name:za': 'no label', 'name:yue': 'no label', 'name:wa': 'no label', 'name:vi': 'no label', 'name:uz': 'no label', 'name:ur': 'no label', 'name:uk': 'no label', 'name:ug': 'no label', 'name:tr': 'no label', 'name:tl': 'no label', 'name:th': 'no label', 'name:tg': 'no label', 'name:ta': 'no label', 'name:sw': 'no label', 'name:sv': 'no label', 'name:sr': 'no label', 'name:sk': 'no label', 'name:ru': 'no label', 'name:ro': 'no label', 'name:qu': 'no label', 'name:pt': 'no label', 'name:pl': 'no label', 'name:os': 'no label', 'name:oc': 'no label', 'name:no': 'no label', 'name:nn': 'no label', 'name:nl': 'no label', 'name:ms': 'no label', 'name:mr': 'no label', 'name:mn': 'no label', 'name:mg': 'no label', 'name:lv': 'no label', 'name:lt': 'no label', 'name:la': 'no label', 'name:ko': 'no label', 'name:kg': 'no label', 'name:ka': 'no label', 'name:ja': 'no label', 'name:it': 'no label', 'name:id': 'no label', 'name:ia': 'no label', 'name:hy': 'no label', 'name:hu': 'no label', 'name:hr': 'no label', 'name:hi': 'no label', 'name:he': 'no label', 'name:gv': 'no label', 'name:ga': 'no label', 'name:fr': 'no label', 'name:fi': 'no label', 'name:fa': 'no label', 'name:eu': 'no label', 'name:et': 'no label', 'name:es': 'no label', 'name:eo': 'no label', 'name:en': 'no label', 'name:el': 'no label', 'name:de': 'no label', 'name:da': 'no label', 'name:cy': 'no label', 'name:cs': 'no label', 'name:ce': 'no label', 'name:ca': 'no label', 'name:br': 'no label', 'name:bo': 'no label', 'name:bn': 'no label', 'name:bg': 'no label', 'name:be': 'no label', 'name:ar': 'no label', 'name:af': 'no label', 'name': 'no label', 'is_in:country_code': 'no label', 'int_name': 'no label', 'division_code': 'no label', 'alt_ref': 'no label', 'alt_name': 'no label', 'admin_level': 'no label', 'ISO3166-2': 'no label', });
lyr__3.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'type': 'no label', 'typeCode': 'no label', 'bizType': 'no label', 'address': 'no label', 'gcj02_lng': 'no label', 'gcj02_lat': 'no label', 'wgs84_lng': 'no label', 'wgs84_lat': 'no label', 'tel': 'no label', 'provinceName': 'no label', 'cityName': 'no label', 'adName': 'no label', });
lyr__4.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'type': 'no label', 'typeCode': 'no label', 'bizType': 'no label', 'address': 'no label', 'gcj02_lng': 'no label', 'gcj02_lat': 'no label', 'wgs84_lng': 'no label', 'wgs84_lat': 'no label', 'tel': 'no label', 'provinceName': 'no label', 'cityName': 'no label', 'adName': 'no label', });
lyr__5.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'type': 'no label', 'typeCode': 'no label', 'bizType': 'no label', 'address': 'no label', 'gcj02_lng': 'no label', 'gcj02_lat': 'no label', 'wgs84_lng': 'no label', 'wgs84_lat': 'no label', 'tel': 'no label', 'provinceName': 'no label', 'cityName': 'no label', 'adName': 'no label', });
lyr__6.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'type': 'no label', 'typeCode': 'no label', 'bizType': 'no label', 'address': 'no label', 'gcj02_lng': 'no label', 'gcj02_lat': 'no label', 'wgs84_lng': 'no label', 'wgs84_lat': 'no label', 'tel': 'no label', 'provinceName': 'no label', 'cityName': 'no label', 'adName': 'no label', });
lyr__7.set('fieldLabels', {'fid': 'no label', 'field_1': 'no label', 'field_2': 'no label', 'field_3': 'no label', 'field_4': 'no label', });
lyr__7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});