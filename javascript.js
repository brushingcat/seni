/* $(document).ready(function() {
    var lastScrollTop = 0;
    console.log("x");
    $(window).scroll(function(event){
     var st = $(this).scrollTop();
     console.log("2");
        if (st > lastScrollTop){
            var height = $(window).height();
            var target = $("#sec2");
            if( target.length ) {
                
                $('html, body').stop().animate({
                    scrollTop: target.offset().top
                }, 700);
                event.preventDefault();
            }
        } else {
            // upscroll code
        }
        lastScrollTop = st;
    });
}); */


$(document).ready(function() {
    $('html, body').stop().animate({
        scrollTop: 0
    }, 700);
    var section_actual = "0";
    var target = "";
    var scroll_flag = false;

    $( "#audio__logo-sec1" ).click(function() {
        var elem = document.getElementById("audio__sec1");
        if($("#audio__sec1").get(0).paused)
        {
            $('#audio__sec1').trigger("play");
            $('#audio__sec1').animate({volume: 1}, 1000);
        } else {
            $('#audio__sec1').animate({volume: 0}, 1000);
            setTimeout(function () {
                $('#audio__sec1').trigger("pause");
                elem.currentTime = 0;
            }, 1000);
           
            
        }
        
    });

    $( "#audio__logo-sec2" ).click(function() {
        var elem = document.getElementById("audio__sec2");
        if($("#audio__sec2").get(0).paused)
        {
            $('#audio__sec2').trigger("play");
            $('#audio__sec2').animate({volume: 1}, 1000);
        } else {
            $('#audio__sec2').animate({volume: 0}, 1000);
            setTimeout(function () {
                $('#audio__sec2').trigger("pause");
                elem.currentTime = 0;
            }, 1000);
        }
        
    });


    $(window).bind('mousewheel', function(e){
        event.preventDefault();
        if(!scroll_flag)
        {
            scroll_flag=true;
            if(e.originalEvent.wheelDelta > 0)
            {
                if(section_actual=="sec1")
                {
                    target = $("#sec0");
                    section_actual = "sec0";
                    $('#audio__sec0').trigger("play");
                    $('#audio__sec0').animate({volume: 1}, 1000);
                }else{
                    var number_section = section_actual.substring(3,4);
                    console.log("first part");
                    console.log(section_actual.substring(0,3));
                    console.log("second part");
                    console.log(number_section);
                    section_actual = section_actual.substring(0,3)+(parseInt(number_section, 10)-1);
                    console.log(section_actual);
                }
            
                if(parseInt(number_section)<1)
                {
                    section_actual="sec0";
                } else {
                    target = $("#"+section_actual);
                    if( target.length ) {
                        
                        var elem = document.getElementById("audio__sec1");
                        $('#audio__sec1').animate({volume: 0}, 1000);
                        setTimeout(function () {
                            $('#audio__sec1').trigger("pause");
                            elem.currentTime=0;
                        }, 1000);
                        var elem = document.getElementById("audio__sec2");
                        $('#audio__sec2').animate({volume: 0}, 1000);
                        setTimeout(function () {
                            $('#audio__sec2').trigger("pause");
                            elem.currentTime=0;
                        }, 1000);
                        

                        $('html, body').stop().animate({
                            scrollTop: target.offset().top
                        }, 700);
                        event.preventDefault();
                    }
                }
            }
            else
            {
                console.log("down");

                if(section_actual=="0")
                {
                    target = $("#sec1");
                    section_actual = "sec1";
                }else{
                    var number_section = section_actual.substring(3,4);
                    console.log("first part");
                    console.log(section_actual.substring(0,3));
                    console.log("second part");
                    console.log(number_section);
                    section_actual = section_actual.substring(0,3)+(parseInt(number_section, 10)+1);
                    console.log(section_actual);
                }

                if(parseInt(number_section)>3)
                {
                    section_actual="sec3";
                } else {
                    target = $("#"+section_actual);
                    if( target.length ) {
                        
                        
                        $('#audio__sec0').animate({volume: 0}, 1000);
                        setTimeout(function () {
                            var elem = document.getElementById("audio__sec0");
                            $('#audio__sec0').trigger("pause");
                            elem.currentTime=0;
                        }, 1000);
                        
                        $('#audio__sec1').animate({volume: 0}, 1000);
                        setTimeout(function () {
                            var elem = document.getElementById("audio__sec1");
                            $('#audio__sec1').trigger("pause");
                            elem.currentTime=0;
                        }, 1000);
                        
                        $('#audio__sec2').animate({volume: 0}, 1000);
                        setTimeout(function () {
                            var elem = document.getElementById("audio__sec2");
                            $('#audio__sec2').trigger("pause");
                            elem.currentTime=0;
                        }, 1000);

                        $('html, body').stop().animate({
                            scrollTop: target.offset().top
                        }, 700);
                        console.log("ola");
                        event.preventDefault();
                    }
                }

                
            }
            setTimeout(function () {
                scroll_flag=false;
                console.log("flag=false");
            }, 1000);

            
        } else {
            console.log("não entrou flag era true");
        }
        
    });


});