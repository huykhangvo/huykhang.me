document.onkeydown=function(){
    var e = window.event||arguments[0];
    if(e.keyCode==123){
    	alert('Cấm F12！lấy code à không dễ đâu');
            return false;
    }else if((e.ctrlKey)&&(e.shiftKey)&&(e.keyCode==73)){
    	alert('Cấm luôn Ctrl + Shift + i！lấy code à không dễ đâu');
            return false;
    }else if((e.ctrlKey)&&(e.keyCode==85)){
            alert('Cấm luôn Ctrl + U！lấy code à không dễ đâu');
            return false;
    }else if((e.ctrlKey)&&(e.keyCode==83)){
           alert('Tính Save à không dễ đâu');
           return false;
    }
}
document.oncontextmenu=function(){
	alert('Cấm Nhấn Phím chuột phải！lấy code à không dễ đâu');
    return false;
}