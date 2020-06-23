

var $doc = jQuery(document);

$doc.ready(function(){


    ftResize();

    var screen_widthInit = jQuery(window).width();
    if (screen_widthInit >= 400) {

	    jQuery(window).resize(function() {
			ftResize();
		});

	}

	jQuery(".inputfirst input").first().focus();
    

	function ftResize(){
	    // All height calc
        var $window = jQuery(window);
        var screen_width = $window.width();
        var tomheight = $window.height();
        var windowheight = $window.height();
        jQuery(".screen_height").css("height",tomheight);
        jQuery(".buzz_section").css("height",tomheight);
    }

    // var audio1 = document.getElementsByTagName('audio')[0];
    // audio1.volume =0;

    $(this).mousemove(mouseMoveCallback);
    function init(){


    
    this.$angle = 0;
    this.window_height = 0,window_width=0;
    this.window_height = $(window).height();
    this.window_width = $(window).width();
    this.$hair = $('.hair');
    this.$hairX = $hair.offset().left;
    this.$hairY = window_height/2;//$hair.offset().top;
    
    this.hidimg = document.getElementById('hidbg');
    this.img_height = hidimg.naturalHeight;
    this.img_width = hidimg.naturalWidth;
    this.factorY = (img_height - window_height) / window_height;
    this.factorX = (img_width - window_width) / window_width;
    console.log(factorX , factorY);
    this.avatar = document.getElementsByClassName("big_bg")[0];
    this.n=0;
    this.bgX =0;
    this.bgY = 0;
    this.mulFactX = 5*window_width/100;
    this.mulFactY = 2*window_height/100;
    this.deltaX = mulFactX;
    this.deltaY = mulFactY;
    this.limY = (img_height-window_height)/2;
}
init.call(window);

    function mouseMoveCallback(e){
        
         //$angle = 180*(Math.atan($hairY-e.pageY/$hairX-e.pageX));
         $angle = (e.pageY-$hairY)/80;
        /// console.log($angle);
         
         if($hairX<e.pageX){
            $('.hairwrap').addClass('reverse');

         }else{
             $('.hairwrap').removeClass('reverse');
         }
         $('.hair').css({
            'transform':'rotateZ('+$angle+'deg)',
            '-webkit-transform':'rotateZ('+$angle+'deg)',
            '-moz-transform':'rotateZ('+$angle+'deg)',
            '-o-transform':'rotateZ('+$angle+'deg)'
         });

         window.deltaX = mulFactX*($hairX-e.pageX)/$hairX;
         window.deltaY = mulFactY*($hairY-e.pageY)/$hairY;


    
    
    


    /*if(factor < 1) {
      factor = 1;
    }*/

    
    var yheight = parseInt(e.clientY);
    var ywidth = parseInt(e.clientX);
    //var newheight = '-'+(yheight * factorY) + "px";
    //avatar.style.backgroundPosition = "-"+(3*(ywidth * factorX)) + "px -"+(yheight * factorY) + "px"; 
    }


    hairint = setInterval(  function(){
        $('.hair').hide();
        n++;
        //if(n==4){clearInterval(hairint);}
        n=(n==4)?1:n;
        $('.hair'+n).show();
        bgX += deltaX;
        bgY += deltaY;
        if(window.bgY>window.limY){
            window.bgY =window.limY;
         }else if(window.bgY<-window.limY){
            window.bgY = -window.limY;
        }
        avatar.style.backgroundPosition = bgX+"px "+bgY+"px";    
        
    },60);
});
