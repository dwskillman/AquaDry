jQuery(document).ready(function ($) {
    /* ===================================
     Loading Timeout
     ====================================== */

    setTimeout(function () {
        $("#loader").fadeOut("slow");
    }, 1000);

    let $flickParent = $('#kool-carousel');
    $flickParent.on('select.flickity', function() {
      $flickParent.flickity('playPlayer');
    });

    setInterval(function() {
      $("#callBtn").toggleClass("waggMe");
    }, 5000);

});
