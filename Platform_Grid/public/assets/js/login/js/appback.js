
// App for Login Background Images

$(window).load(function() {

    $(function() {

        $.randomQinex = {
            defaults: {

                // Set the Folder images path
                loginqxpath: 'img/Login/slider/', 

                // Images to Run on the Background of the path folder
                qinexImages: ['r1.jpg', 'r2.jpg', 'r3.jpg', 'r4.jpg', 'r5.jpg', 'r6.jpg', 'r7.jpg', 'r8.jpg', 'r9.jpg', 'r10.jpg'] 
            }
        };
        
        $.fn.extend({
            loginQinex: function (data) {
                var dataconfig = $.extend({}, $.randomQinex.defaults, dataconfig);
                
                return this.each(function() {
                    var imageNames = dataconfig.qinexImages,
                    
                    imageNamesSize = imageNames.length,
                    
                    quinexback = Math.floor(Math.random()*imageNamesSize),
                    imagesbackQinex = imageNames[quinexback],
                    qinexPath = dataconfig.loginqxpath + imagesbackQinex;
                    
                    $(this).attr({ src: qinexPath, alt: imagesbackQinex });
                }); 
            }
        });

    });

    $('.overlay_back').append('<img/>')

    //$('img').loginQinex();

});