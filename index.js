var distanceTop;
var distanceLeft;
var arrayOfPoint=new Array();

$(document).ready(function(){
    function calculateDistance(){
        var canvasPos=$("#myCanvas").offset();
        distanceTop=parseInt(canvasPos.top);
        distanceLeft=parseInt(canvasPos.left);
    }
    setInterval(calculateDistance,100);
});    

var valueCheckBox=document.getElementById("checkpoint");

let pointInCanvas=document.getElementById("myCanvas");
pointInCanvas.onmousedown=function(e){
    if(valueCheckBox.checked==false){
        var cursorX = e.pageX;
        var cursorY = e.pageY;
        let coordinatesOfEachPoint=document.createElement("span");
        let cardContainingCoordinates=document.getElementById("coordinates");
        coordinatesOfEachPoint.innerHTML="("+(cursorX-distanceLeft)+","+(cursorY-distanceTop)+"), ";
        cardContainingCoordinates.appendChild(coordinatesOfEachPoint);
        var canVas=document.getElementById("myCanvas");
        var ctx=canVas.getContext("2d");
        ctx.moveTo((cursorX-distanceLeft),(cursorY-distanceTop));
        ctx.lineTo((cursorX-distanceLeft)+1,(cursorY-distanceTop)+1);
        ctx.strokeStyle="red";
        ctx.lineWidth=2;
        ctx.stroke();
        //Hàm khởi tạo đối tượng
        var point=new Object();
        point.x=cursorX-distanceLeft;
        point.y=cursorY-distanceTop;
        //Thêm đối tượng điểm vào mảng các điểm
        arrayOfPoint.push(point);
    }
    else{
        alert("Thêm hàm kiểm tra điểm thuộc đa giác nữa nha :))");
    }
}

function drawPolygons(){
    var canVas=document.getElementById("myCanvas");
    var ctx=canVas.getContext("2d");
    for(let i=0; i<arrayOfPoint.length-1; i++){ 
        ctx.moveTo(arrayOfPoint[i].x,arrayOfPoint[i].y);
        ctx.lineTo(arrayOfPoint[i+1].x,arrayOfPoint[i+1].y);
        ctx.strokeStyle="red";
        ctx.lineWidth=2;
        ctx.stroke();
    }
    let endPoint=arrayOfPoint[arrayOfPoint.length-1];
    let startPoint=arrayOfPoint[0];
    ctx.moveTo(endPoint.x,endPoint.y);
    ctx.lineTo(startPoint.x,startPoint.y);
    ctx.strokeStyle="red";
    ctx.lineWidth=2;
    ctx.stroke();
}




