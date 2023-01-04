var wms_layers = [];

var lyr_OrientacinYunqueras_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Orientación Yunqueras",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/OrientacinYunqueras_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-557272.275247, 4397512.314550, -549536.241379, 4404901.907803]
                            })
                        });
var lyr_DensidadPinpasoYunqueras_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Densidad Pinpaso Yunqueras",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DensidadPinpasoYunqueras_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-557266.679823, 4397513.057746, -549543.104538, 4404902.394302]
                            })
                        });
var lyr_DistanciasCanalesYunqueras_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Distancias Canales Yunqueras",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DistanciasCanalesYunqueras_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-557262.993075, 4397515.638018, -549539.418203, 4404904.973921]
                            })
                        });
var lyr_ndicedeSannonYunqueras_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Índice de Sannon Yunqueras",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ndicedeSannonYunqueras_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-557272.460337, 4397517.983312, -549536.683167, 4404895.062977]
                            })
                        });
var lyr_Rastervirtual_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Raster virtual",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Rastervirtual_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-557272.668336, 4397510.744061, -549536.537497, 4404905.030617]
                            })
                        });
var format_SegmentacionYunqueras_5 = new ol.format.GeoJSON();
var features_SegmentacionYunqueras_5 = format_SegmentacionYunqueras_5.readFeatures(json_SegmentacionYunqueras_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SegmentacionYunqueras_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SegmentacionYunqueras_5.addFeatures(features_SegmentacionYunqueras_5);
var lyr_SegmentacionYunqueras_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SegmentacionYunqueras_5, 
                style: style_SegmentacionYunqueras_5,
                interactive: true,
                title: '<img src="styles/legend/SegmentacionYunqueras_5.png" /> Segmentacion Yunqueras'
            });

lyr_OrientacinYunqueras_0.setVisible(false);lyr_DensidadPinpasoYunqueras_1.setVisible(false);lyr_DistanciasCanalesYunqueras_2.setVisible(false);lyr_ndicedeSannonYunqueras_3.setVisible(false);lyr_Rastervirtual_4.setVisible(true);lyr_SegmentacionYunqueras_5.setVisible(true);
var layersList = [lyr_OrientacinYunqueras_0,lyr_DensidadPinpasoYunqueras_1,lyr_DistanciasCanalesYunqueras_2,lyr_ndicedeSannonYunqueras_3,lyr_Rastervirtual_4,lyr_SegmentacionYunqueras_5];
lyr_SegmentacionYunqueras_5.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_SegmentacionYunqueras_5.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', });
lyr_SegmentacionYunqueras_5.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_SegmentacionYunqueras_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});