// The global scope object
app = {};

// Entry point of the application
$(document).ready(function() {
    
    // Initiating the randomBackground module
    app.randomBackground.init();
    
    // Initiating the addMessage module
    app.addMessage.init();
    
    // Initiating the resetMessages module
    app.resetMessages.init();
    
    // Initiating the topBarAdjustments module
    app.topBarAdjustments.init();
    
    // Initiating the takeScreenshot module
    app.takeScreenshot.init();

    
});