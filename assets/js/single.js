/*
    JS Standalone Module Template
    Replace MYCLASS with your desired class name

    Anything declared using MYCLASS will be public

*/
(function() {
    var self = this;
    var MYCLASS;

    // Export gluten if exports are available
    if(typeof exports !== 'undefined') {
        MYCLASS = exports;
    } else {
        MYCLASS = root.MYCLASS = {};
    }

    MYCLASS.version = "1.0";


    // Module settings, to be configured by user init
    var settings = MYCLASS.settings = {
        debug: true,
    };

    // Module cache variables used for logging and state tracking; not user-defineable
    var cache = {
    };    


    // Generic debug function, dependent on settings
    var debug = function(s) {
        if (settings.debug) { console.log(s); }
    };    



    // Init function; kicks off module
    // MYCLASS.init()
    var init = MYCLASS.init = function(customSettings) {
        helpers.extend(self.settings, customSettings); // Merges default and custom settings

    }




    // Helper functions
    var helpers = {
        extend: function(obj) {
            each.call(slice.call(args, 1), function(source) {
                if(source) {
                    for(var prop in source) {
                        obj[prop] = source[prop];
                    }
                }
            });
            return(obj);
        }
    }        
}).call(this);    