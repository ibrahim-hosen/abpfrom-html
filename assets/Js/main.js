(function($){
  ////Add New...
      $(".ab-add-button").on('click', function(){
        $(".ab-add-address").addClass('opener');
        $(".ab-update-address").removeClass('opener-from');
         $(".ab-add-button").addClass('ab-add-bton');
      });
//////Edit..
     $(".pencil").on('click', function(){
        $(".ab-update-address").addClass('opener-from');
        $(".ab-add-address").removeClass('opener');
        $(".ab-add-button").addClass('ab-add-bton');
        $('html, body').animate({
            scrollTop: $(".ab-header-section").offset().top
        }, 500);
      });
})(jQuery);
