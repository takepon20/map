let map;

function GetMap(){
    map = new Microsoft.Maps.Map('#myMap',{
        center: new Microsoft.Maps.Location(35.66655,139.70828),
        mapTypeId: Microsoft.Maps.MapTypeId.load,
        zoom: 16
    });
}

document.getElementById("move").onclick = function(){
    map.setView({
        mapTypeId: Microsoft.Maps.MapTypeId.load,
        center: new Microsoft.Maps.Location(35.66655,139.70828),
        zoom: 16
    });
}
