
$(function() {

    "use strict";

    $.fn.LoginApp = function(options) {

        let defaults = $.extend({}, options);

        function lApp(options) { 

            this.runLogin(); 

            //$(document).logApp();

            $(document).lgFocus();
        }

        $.extend( lApp.prototype, {

            runLogin: function() {

                $.fn.logApp = function() {
                    return this.on('click', '*', function() {

                        let cl = $(this)[0].className;

                        if(cl.indexOf('lg-btn-bx') != -1) {

                            if($('#username').val() != 'jmartins' && $('#password').val() != 'password') {

                                $('.topMsg').show();

                                $(this).css({ opacity: '0.3', 'pointer-events': 'none'});

                            } else {

                                $('.topMsg').hide();

                                $(this).removeAttr('style');
                            }
                        }
                    });
                }

                $.fn.lgFocus = function() {
                    return this.on('focus', '*', function() {

                        let cl = $(this)[0].className;
                        
                        if(cl.indexOf('in-pass') != -1) {

                            $('.pass-login').addClass('user-login-sc');
                        }

                        else if(cl.indexOf('in-user') != -1) {

                            $('#u-login').addClass('user-login-sc');
                        }
                    });
                }

                $('.lg-btn-bx').on('mouseover', function() { $('.fc-submit').addClass('fc-submit-op');

                }).on('mouseout', function() { $('.fc-submit').removeClass('fc-submit-op'); });


                $('.in-user, .in-pass').on('input', function() {

                    $('.user-login, .pass-login').addClass('user-login-sc');
                });
            }
        });

        let rlg = new lApp();


        // $.ajax({

        //     type: 'GET',
        //     url: 'assets/js/login/js/loginApp.json',

        //     success: function(data) { $(document).DataImages(data) }

        // });

        $.when($.ajax({ 
            type: "GET",
            async: true,
            cache: true,
            url: "assets/js/login/js/loginApp.json",
            dataType: 'json'        
        }))
     
        .then(
            // success callback
            function(data) { $(document).DataImages(data) }
        ) 

        $.fn.DataImages = function(data) {

            let dtImg = '<div id="imgselection">';

            for( let i in data.imagesData ) {

                dtImg += '<img src="' + data.imagesData[i].image + '"/>';
            }

            dtImg += '</div>';

            $(dtImg).appendTo('.overlay_back');

            let images = Array();
            let indexImages = Array();

            $("#imgselection img").each(function(index) {

                images.push($(this).attr('src'));
                indexImages.push(index);
                $(this).hide();

            });

            let selectedImage = images[Math.floor(Math.random() * images.length)];

            $('.overlay_back').append('<img src="' + selectedImage + '" >');

            $('#imgselection').detach();
        }
    }

    $(document).LoginApp();



    //alert('Yepppsss');



    /*let images = Array();
    let indexImages = Array();

    $("#imgselection img").each(function(index) {
        images.push($(this).attr('src'));
        indexImages.push(index);
        $(this).hide();
    });

    let selectedImage = images[Math.floor(Math.random() * images.length)];

    $('.overlay_back').append('<img src="' + selectedImage + '" >')*/

  // // OR Show one image
  //  var selectedIndexImage = indexImages[Math.floor(Math.random() * indexImages.length)];
  //  $('#imgselection img').eq(selectedIndexImage).show();


});