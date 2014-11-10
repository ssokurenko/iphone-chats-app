// Module for adding messages to the message board

app.resetMessages = {
    init: function() {
    
        // EVENTS
        
        // Clicking the Send button
        $( "div.reset-button" ).bind( "click", this.resetMessages);
        
    },
    
    // Adding a message to the message board
    resetMessages: function() {
    
        // Checking if we have any messages on the board
        if (app.addMessage.messagesNumber) {
        
            // Asking if the user wants to reset the messages
            if (confirm('Reset the Messages?')) {
            
                // Fading out the messages
                $("div.message-board").children().fadeOut('fast');
                
                // Setting the timeut to wait for the faid in animation completion
                setTimeout (function(){
                    
                    // Deliting all messages
                    $("div.message-board").empty();
                    
                    // Reseting the messages counters
                    app.addMessage.messagesNumber = 0;
                    app.addMessage.side = 0;
                    
                    // Displaying an info box on the message board
                    app.addMessage.addInfoBox();
                    
                }, 1000);
                
            }
        }
    }
}