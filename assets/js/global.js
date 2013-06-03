var App = {};

function debug(s) {
	if (typeof console === "undefined") {
		console = { log: function(s){ alert(s); } }
	} else {
		console.log(s);
	}
}




App.global = (function($, Modernizr, App) {
	
	// Module variables. Use for local tracking
	var data = {
	}
	
	// Runs inline
	var instant = function() {
		debug("global.instant()");
	
	}
	
	// Runs on doc ready
	var onready = function() {
		debug("global.onready()");
		
		// Set the controller and action names
		var module = $("body").data("module");

		// Global mdule
		this.init();

		if (typeof App[module] !== 'undefined') {
			if (typeof App[module].init !== 'undefined') {
				App[module].init();
			}
		}
	};	
	
/* REGULAR METHODS */
	
	// Module init; This will run during onready if module is defined in the <body> data attribute
	var init = function() {
		debug("global.init()");
	}
	
	
	// Local methods
	var local = {

	}
	
	
	
	// Module bindings
	var bind = {
	
	
	}
	
	
    return {
		init: init,
        instant: instant,
		onready: onready
        data: data
    };

}(jQuery, Modernizr, App));

// END module

App.global.instant();

$(document).ready(function() {
    App.global.onready();
});