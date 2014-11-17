// Module for adjusting the top bar

app.randomBackground = {

    init: function() {
    
    // Getting a random index
    var randomIndex = this.getRandomNumber(0, app.config.backgroundColors.length-1);
    
    // Setting the background color
    $('body').css('background-color', app.config.backgroundColors[randomIndex]);

    },
    
    // Generating a random number in range
    getRandomNumber: function(min, max) {
    
        return Math.floor(Math.random() * (max - min + 1)) + min;
        
    }
}