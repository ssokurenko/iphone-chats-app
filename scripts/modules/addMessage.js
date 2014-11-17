// Module for adding messages to the message board

app.addMessage = {
    init: function() {
    
        // EVENTS
        
        // Clicking the Send button
        $( "div.send-button" ).bind( "click", this.addMessage);
        
        // Handling the Enter keypress
        $( "input.message-field" ).keypress(function( event ) {
          if ( event.which == 13 ) {
             event.preventDefault();
             
             // Adding a message 
             app.addMessage.addMessage();
          }
        }); 
    },
    
    // Value for defining on which side shoul we display a new message
    side: 0,
    
    // Counter for tracking the number of messages
    messagesNumber: 7,
    
    // Adding an inormational box, if there are now messages
    addInfoBox: function() {
        if (this.messagesNumber == 0) {
            
            // HTML that should be appended
            messageHTML = "<div class='no-messages'>" + app.config.noMessagesText + "</div>";
            
            // Appending with animation 
            $('<div></div>').appendTo("div.message-board").hide().append(messageHTML).fadeIn();
        }
    },
    
    // Adding a message to the message board
    addMessage: function() {
        // Declaring the vars
        var message, sideClass, messageHTML;
        
        // Checking if the message input field isn't empty
        if ($("input.message-field").val() != "") {
        
            // Reseting the message board before adding the first message
            if (app.addMessage.messagesNumber == 0) {
                $("div.message-board").empty();
            }
        
            // Getting the message field value
            message = $("input.message-field").val();
            
            // Reseting the input field value
            $("input.message-field").val("");
            
            // Defining on which side should we display the message
            if (app.addMessage.side) {   
                sideClass = "left"   
            } else {
                sideClass = "right" 
            }
            
            // Reversing the counter value
            app.addMessage.side = !app.addMessage.side;
            
            // HTML that should be appended
            messageHTML = "<div class='message " + sideClass +"-side'><p>" + message + "</p><div class='tail'></div></div>";
            
            // Appending with animation 
            $('<div></div>').appendTo("div.message-board").hide().append(messageHTML).fadeIn();
            
            // Tracking the message
            app.addMessage.messagesNumber++;
                        
        }        
    }
}