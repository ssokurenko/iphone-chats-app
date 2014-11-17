// Module for adjusting the top bar

app.topBarAdjustments = {

    init: function() {
    
        // Getting the initial values    
        var initContactName = this.getInitValue('contactName');
        var initCarrierName = this.getInitValue('carrierName');
        
        // Displaying the initial contact name 
        $('div.contactName').html(initContactName);
        
        // Getting the default value for the carrier name from the config
        $('div.carrierName').html(initCarrierName);
        
        // Setting the current time
        $('div.current-time').html(this.getCurrentTime());
        
        // EVENTS
        // Clicking the Contact name
        $('div.contactName').bind( "click", this.updateField);
        
        // Clicking the Carrier name
        $('div.carrierName').bind( "click", this.updateField);

    },
    
    // Getting the initial value
    getInitValue: function(field) {
    
        // Checking if we have the value in LS
        if (typeof localStorage.getItem(field) != 'undefined' && localStorage.getItem(field) != null ) {
        
            return localStorage.getItem(field);
            
        } else {
        
            // Or getting the value from the config
            return app.config[field];
            
        }
    },
    
    // Getting current time
    getCurrentTime: function() {
    
        date = new Date();
      
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        
        return strTime;
    },
    
    // Updating the contact name
    updateField: function(){
    
        // Getting the field value from user input
        var promtName = prompt("Update the title?", $(this).html());
        
        if (promtName != null) {
        
            // Updating the value
            $(this).html(promtName);
        }
        
        // Storing the value in LS
        localStorage.setItem($(this).attr('class'), $(this).html());
    }
}