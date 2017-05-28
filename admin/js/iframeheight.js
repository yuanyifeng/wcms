//让iframe自适应高度
function dyniframesize(obj)   
{
  var cwin=obj;
  //var bcgd=document.getElementById("main_left_bcgd");
  if (document.getElementById)
  {
    
	if (cwin && !window.opera)
    {
      if (cwin.contentDocument && cwin.contentDocument.body.offsetHeight){
        cwin.height = cwin.contentDocument.body.offsetHeight + 20; //FF NS
		//bcgd.style.height=(cwin.height-370)+"px";
	  }
      else if(cwin.Document && cwin.Document.body.scrollHeight){
        cwin.height = cwin.Document.body.scrollHeight + 10;//IE
		//bcgd.style.height=(cwin.height-370)+"px";
	  }
    }
    else
    {
        if(cwin.contentWindow.document && cwin.contentWindow.document.body.scrollHeight){
            cwin.height = cwin.contentWindow.document.body.scrollHeight;//Opera
			//bcgd.style.height=(cwin.height-370)+"px";
		}
    }
	if(cwin.height<400){cwin.height=400;}
	document.getElementById("main").style.height= (parseInt(cwin.height)+ 40) + "px" ; 
  }
}