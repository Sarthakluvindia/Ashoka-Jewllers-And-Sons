$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '14664201017',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '14664201017.0b2b5ba.72baa2207d2348e8a4ad00773ac1312b',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});