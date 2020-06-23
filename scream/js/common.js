

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

   // $(this).mousemove(mouseMoveCallback);

    var $hair = $('.hair');
    $hairX = $hair.offset().left;
    $hairY = $hair.offset().top;

    var $angle = 0;
    function mouseMoveCallback(e){
        
        $angle = 180*(1-Math.atan($hairY-e.pageY/$hairX-e.pageX));
        console.log($angle);
        $('.hair').css('transform','rotateZ('+$angle+'deg)');

    }
    n=0;
    hairint = setInterval(function(){
        $('.hair').hide();
        n++;
        //if(n==4){clearInterval(hairint);}
        n=(n==4)?1:n;
        
        
        $('.hair'+n).show();
    },60);
    
    

});
