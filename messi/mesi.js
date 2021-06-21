function ima(x) {
	x.style.filter="grayscale(0%)"
	x.style.width="25%"
}
function im(x) {
	x.style.filter="grayscale(80%)"
	x.style.width="22%"
}
 /*$(window).scroll(function() {
    $('#vdo').each(function(){
        if ($(this).is(":in-viewport")) {
            $(this)[0].play();
        } else {
            $(this)[0].pause();
        }
    })
});*/
 var k=1;
 function image(){document.getElementById('vdo').style.display="none";
     if(k==1){
         document.getElementById('slide').src="meon.jpg";
         
           document.getElementById('slide').style.display="block";
         k++;
   console.log(k);  }
     else if(k==2){  document.getElementById('slide').src="1581.jpg";
                k++;}
         else  if(k==3){document.getElementById('slide').src="ali.jpg";k++;
           
}
else { document.getElementById('vdo').style.display="block";k=1;
 document.getElementById('slide').style.display="none";}

 }
 setInterval(image,5000);

 