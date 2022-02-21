$(document).ready(function(){
    //jquery for toggle sub manus   
    $('.sub-btn').click(function(){
     $(this).next('.sub-manu').slideToggle();
     $(this).find('.dropdown').toggleClass('rotate');
     });
     $('.second-sub-manu').click(function(){
     $(this).find('.dropdown').toggleClass('rotate');
     });
   
   
     //jquery for and collapse the sidebar
     $('.manu-btn').click(function(){
         $('.side-bar').addClass('active');
        $('.manu-btn').css("visibility","hidden");
        $('#search-icon').css("visibility","hidden");
        $('#search-closer').css("visibility","hidden");
        $('.search-form').css("visibility","hidden");
        $('#featured').css("visibility","hidden");
     });
     $('.close-btn').click(function(){
         $('.side-bar').removeClass('active');
         $('.manu-btn').css("visibility","visible");
         $('#search-icon').css("visibility","visible");
         $('.search-form').css("visibility","visible");
         $('#featured').css("visibility","visible");
     });
     //search icons
     $('#search-icon').click(function(){
         $('.search-form').addClass('active');
        $('#search-icon').css("visibility","hidden"); 
        $('#search-closer').css("visibility","visible"); 
       
     });

     
     $('#search-closer').click(function(){
         $('.search-form').removeClass('active');
        $('#search-closer').css("visibility","hidden"); 
        $('#search-icon').css("visibility","visible"); 
        
     });
     $('.seemore-button').click(function(){
        $('.div-hidden').show();
        $('.seemore').hide();
        $('.showall').show();
    });
    $('.showall-button').click(function(){
        $('.div-hidden1').show();
        $('.showall').hide();
        $('.angle').show();
    });
    $('.angle-button').click(function(){
        $('.div-hidden').hide();
        $('.div-hidden1').hide();
        $('.seemore').show();
        $('.angle').hide();
    });
   });

   window.addEventListener('DOMContentLoaded', function() {
    $(function() {
        var clipboard = new ClipboardJS('.copybutton');   
         $(".copybutton").click(function() { 
                 $(this).html('Copied'); 
                  var that = $(this);
                  var intrvrl =  setInterval(function(){  
                  that.html('Copy'); 
                  clearInterval(intrvrl); }, 
                10000);
         });
    });
        });

     