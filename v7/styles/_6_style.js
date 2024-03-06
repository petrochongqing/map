var size = 0;
var placement = 'point';

var style__6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "3.9000000000000004px \'DengXian\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 0.1;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("企业名称") !== null) {
        labelText = String(feature.get("企业名称"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [1000, 1000],
                  scale: 0.022,
                  anchor: [11, 11],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/中石油油库.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
