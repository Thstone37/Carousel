function getStyle(dom,attrName){
	if(dom.currentStyle){
		return dom.currentStyle[attrName];
	}
	else{
		return document.defaultView.getComputedStyle(dom,null)[attrName];
	}
}
function getAllStyle(dom){
  if(dom.currentStyle){
    return dom.currentStyle;
  }
  else{
    return document.defaultView.getComputedStyle(dom,null);
  }
}
function setStyle(dom,attrName,attrvalue){
   dom.style[attrName]=attrvalue;
}
function animate(dom,props,duration,callback){
    clearInterval(dom.timer);
    dom.timer=setInterval(function(){
       var count=0;
       var propsLength=0;
      for(var attrName in props){
      	var str=props[attrName].slice(-2);  
      	if(str=="px"){
      	     var attr=parseInt(getStyle(dom,attrName));
             var step=(parseInt(props[attrName])-attr)/5;
             step=step>0?Math.ceil(step):Math.floor(step);
             dom.style[attrName]=attr+step+"px";
      	}
      	else{ 
          attr=getStyle(dom,"opacity");
          step=Math.floor(props[attrName]/times);
          value=attr+step;
          setStyle(dom,attrName,value);
      	}
        var finalvalue=getStyle(dom,attrName);
        var animationvalue=parseInt(props[attrName])+"px";
        if(finalvalue==animationvalue){
          count++;
        }
        propsLength++;

      }
        if(count==propsLength){
        clearInterval(dom.timer);
         if(callback){
         callback();
     }
      }
    },17);
}