

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
            

             var $hair = $('.hair');
             $hairX = $hair.offset().left;
             $hairY = $hair.offset().top;

             var $girl = $('.girl');
             $girlX = $girl.offset().left;
             $girlY = $girl.offset().top;

             var $bgImage = $('.big_bg');
             $bgImageX = $bgImage.offset().left;
             $bgImageY = $bgImage.offset().top;



             var xint;
             var yint;

             var $angle = 0;
             var x = 0;
             var y = 0;

          $(document).ready(function() {    
            /* $('.big_bg').mousemove(function(e){
            var window_height = 0;
            var window_height = $(window).height();   console.log(window_height);
            var img_height = $('.big_bg').height();
            
            //var pageCoords = "( " + e.pageX + ", " + e.pageY + " )";//var clientCoords = "( " + e.clientX + ", " + e.clientY + " )"; 
            
            var factor = (img_height - window_height) / window_height;
            if(factor < 1) {
               factor = 1;
            }
            
            var bigImageVar = document.getElementById('.big_bg');
            var yheight = parseInt(e.clientY);
            var newheight = '-'+(yheight * factor) + "px";
            //avatar.style.top = '-'+(yheight * factor) + "px";      
            $(.big_bg).css("top", newheight);
             // $("#avatar").css(top:newheight);   
               
            //console.log(yheight);
   
    });*/


            $("body").mousemove(function(e){
               var window_height = 0;
               var window_height = $(window).height();   console.log(window_height);
               var img_height = $('#avatar').height();
               
               //var pageCoords = "( " + e.pageX + ", " + e.pageY + " )";//var clientCoords = "( " + e.clientX + ", " + e.clientY + " )"; 
               
               var factor = (img_height - window_height) / window_height;
               /*if(factor < 1) {
                  factor = 1;
               }*/
               
               var avatar = document.getElementById("avatar");
               var yheight = parseInt(e.clientY);
               var ywidth = parseInt(e.clientX);
               var newheight = '-'+(yheight * factor) + "px";
               avatar.style.top = '-'+(yheight * factor) + "px"; 
               avatar.style.left = '-'+(ywidth * factor) + "px"; 

               //$("#avatar").css("top", newheight);
                // $("#avatar").css(top:newheight);   
                  
               //console.log(yheight);
                  // $("#oheight").html(img_height);
                  // $("#yheight").html((yheight * factor));
            });
          });
             var img_width = $('#avatar').height();
             function mouseMoveCallback(e){

                  //$angle = 180*(Math.atan($hairY-e.pageY/$hairX-e.pageX));
                  $angle = (e.pageY-$hairY)/80;
                 /// console.log($angle);

                 if($hairX<e.pageX){

                    $('.hairwrap').addClass('reverse');
                 }else{
                    $('.hairwrap').removeClass('reverse');
                 }
                 var window_height = 0;
               var window_height = $(window).height();   console.log(window_height);
               var img_height = $('#avatar img').height();
               
               //var pageCoords = "( " + e.pageX + ", " + e.pageY + " )";//var clientCoords = "( " + e.clientX + ", " + e.clientY + " )"; 
               
               var factor = (img_height - window_height) / window_height;
               /*if(factor < 1) {
                  factor = 1;
               }*/
               
               var avatar = document.getElementById("avatar");
               var yheight = parseInt(e.clientY);
               var ywidth = parseInt(e.clientX);
               var newheight = '-'+(yheight * factor) + "px";
               avatar.style.top = '-'+(yheight * factor) + "px"; 
               avatar.style.left = '-'+(ywidth * factor) + "px"; 
                
                 clearInterval(xint);
                 xint = setInterval(function(){

                  if($hairX<e.pageX){
                     x-=20;
                  }else{
                     x+=20;
                  }
                  //$('.big_bg').css('background-position', x + 'px 0');
                  var xx = x+'px';

                // $("#avatar").css("left",xx);
               }, 5);



                 //var backgroundPos = $('.big_bg').css('backgroundPosition').split(" ");
      //now contains an array like ["0%", "50px"]

     // var xPos = backgroundPos[0],
        //  yPos = backgroundPos[1];

         // console.log(parseInt(yPos, 10));
        // console.log(window.innerWidth);
         //console.log(window.innerHeight);

                 //clearInterval(yint);
               //   yint = setInterval(function(){          
               //   var bottom = $('.big_bg').offset().top + $('.big_bg').innerHeight(true);

               //  // console.log(parseInt(yPos, 10));

               //    if(e.pageY>$girlY){ 
               //       console.log(e.pageY);
               //        y-=5;
               //       if(parseInt(yPos, 10)>-510){
                                             
               //       }
               //    }else{   
               //        y+=5;        
               //       if(parseInt(yPos, 10)<1250){
                                            
               //       }            
               //    }
                 
               //    $('.big_bg').css('background-position', x + 'px '+ y +'px ');
               // }, 5);



                 
              }

              $('.hair').css({
               'transform':'rotateZ('+$angle+'deg)',
               '-webkit-transform':'rotateZ('+$angle+'deg)',
               '-moz-transform':'rotateZ('+$angle+'deg)',
               '-o-transform':'rotateZ('+$angle+'deg)'
            });

           n=0;

           hairint = setInterval(  function(){
             $('.hair').hide();
             n++;
                 //if(n==4){clearInterval(hairint);}
                 n=(n==4)?1:n;
                 $('.hair'+n).show();
                 
              },60);


         });
