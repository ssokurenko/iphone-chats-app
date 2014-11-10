// Module for taking screenshots

app.takeScreenshot = {
    init: function() {
    
        // EVENTS
        
        // Clicking the Send button
        $( "div.camera-button" ).bind( "click", this.takeScreenshot);
        
        // Clicking the Close button
        $( "div.close-button" ).bind( "click", this.closeScreenshot);
        
    },
    
    // Adding a message to the message board
    takeScreenshot: function() {
        
        // Flushing the container
        $('.screenshot-container').empty();
        
        // Using the library to convert DOM to Canvas
        html2canvas($('#iphone'), {
          // On success
          onrendered: function(canvas) {
          
            // Hiding the phone
            $('#iphone').css('visibility', 'hidden');
            
            // Appending the canvas to the container
            $('.screenshot-container').append(canvas);
            
            // Converting the canvas to data
            var canvasData = canvas.toDataURL("image/png");
            
            // Appending image to the scene
            $('.image-container').append("</div><img class='screenshot' src='" + canvasData + "' alt='Generated Screenshot'/>");
            
            // Displaying the image container and the image
            $('.screenshot-image-container').fadeIn(500);
            $('.image-container img').delay(500).slideDown();
            $('.close-button').delay(1000).show();
            
            // Adding dark background to the body
            $('body').addClass('dark');
            
            // Alerting the user about the screenshot
            if (typeof localStorage.displayedScreenshotAlert == 'undefined') {
            
                alert(app.config.savingScreenshotAlert);
                
                // Storing the value in LS to avoid bothering the user again
                localStorage.displayedScreenshotAlert = 'showed the alert';
                
            }
          }
        });
    },
    
    // Closing the screenshot
    closeScreenshot: function(){
            
        // Hiding the image container and the image
        $('.close-button').hide();
        $('.screenshot-image-container').delay(500).fadeOut(500);
        $('.image-container img').fadeOut(500);
            
        // Removing the screenshot image
        $('.image-container img').remove();
        
        // Displaying the phone
        $('#iphone').css('visibility', 'visible');
        
        // Adding dark background to the body
        $('body').removeClass('dark');
    }
}