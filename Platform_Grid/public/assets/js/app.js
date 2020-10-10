
$(function() {
	
	"use strict";
	
	$.fn.QinexApp = (sOption) => {

		let QinexPlugin = 'QinexApp';

		let win = $(window);

		let qsetts = $.extend({

			wheight: win.height(),

			wwidth: win.width(),

			dropTip: $('<span/>', { class: 'dropToolTip'}),

			toolTip: $('<span/>', { class: 'searchTip' }),

			valTip: true

		}, sOption);


		function RunQinex() {

			this._name = QinexPlugin;

			this.GoQinex();

			this.KendoTips();
		}

		$.extend( RunQinex.prototype, {

			GoQinex: () => {

				let WinResol = () => {
				
					$('html').addClass('h_' + qsetts.wheight);
					$('html').addClass('w_' + qsetts.wwidth);
				};
				$(document).ready(WinResol); 
				$(window).resize(WinResol);

				// Runs on Load Functions 'mobileCheck & browserCheck'
				$(window).ready(function() { mobileCheck(); browserCheck(); });
			},

			KendoTips: () => {

				// Creates ToolTips for each DropDown
				$(qsetts.dropTip).appendTo('.inp_Tl .k-widget .k-state-default').append(qsetts.toolTip);

				$(qsetts.toolTip).html('Test It');

				if(qsetts.valTip == true) {

					$('.periStatH .dropToolTip').addClass('periStat fad');

					$('.periStat .searchTip').addClass('periTip').html('Period').css({ left: '-11px'});
				}
			}

		});

		let Rs7 =  new RunQinex();
	}

	$(document).QinexApp();

	// Clears Cache
	console.clear();
	
});

// Device Check Function
function mobileCheck() {

	let ua = navigator.userAgent;
	
	// Check For Android Device
    if (ua.match(/Android/)) { $('html').addClass('Android'); } 
	
	// Check For Iphone Device
	else if (ua.match(/Phone/)) { $('html').addClass('Iphone'); } 
	
	// Check For Ipad Device
	else if (ua.match(/iPad/)) { $('html').addClass('Ipad'); } 
	
	// Check For Ipod Device
	else if (ua.match(/iPod/)) { $('html').addClass('Ipod'); } 
	
	// Check For BlackBerry Device
	else if (ua.match(/BlackBerry/)) { $('html').addClass('BlackBerry'); } 
	
	// Check For DeskTop Device
	else { $('html').addClass('Desktop'); }
}

// Browser Check Function
function browserCheck() { 
	
	// Check For Opera Browser
    if((navigator.userAgent.indexOf('Opera') 
		
		|| navigator.userAgent.indexOf('OPR')) != -1 ) { $('html').addClass('Opera'); } 
	
	// Check For Chrome Browser
	else if(navigator.userAgent.indexOf('Chrome') != -1 ) { $('html').addClass('Chrome'); } 
	
	// Check For Safari Browser
	else if(navigator.userAgent.indexOf('Safari') != -1) { $('html').addClass('Safari'); } 
	
	// Check For FireFox Browser
	else if(navigator.userAgent.indexOf('Firefox') != -1 ) { $('html').addClass('Firefox'); } 
}








// <div id="scase"></div>

// function Switchcase() {
// 	let case = "";
// 	let i = 0;

// 	while (i < 5) {
// 	    i++;
// 	    if (i === 3) { continue; } // Step 3 is ignored

// 	  	case += "The case is " + i;
// 	}
// 	document.getElementById("scase").innerHTML = case;
// }



// API Injection

// $( document ).ready(function() {

// 	var api_url = 'https://api.bla.com';
// 	var key = '908uyhgbbbbtyr465887fgfg'; 

// 	$( ".content a" ).each(function( index, element ) {

// 	    $.ajax({
// 	        url: api_url + "?key=" + key + " &q=" + $(this).text(),
// 	        contentType: "application/json",
// 	        dataType: 'json',
// 	        success: function(data){

// 	            console.log(data);
// 	        }
// 	    })
// 	});

// });

// // Json
// {
//     "title":"Google",
//     "description":"Search webpages, images, videos and more.",
//     "image":"https//:www.google.com/images/logo.png",
//     "url":"https://www.google.com/"
// }


// $( document ).ready(function() {
//   	var api_url = 'https://api.bla.com';
// 	var key = '908uyhgbbbbtyr465887fgfg';

//   	$( ".content a" ).each(function(index, element) {
// 	    $.ajax({
// 	        url: api_url + "?key=" + key + " &q=" + $(this).text(),
// 	        contentType: "application/json",
// 	        dataType: 'json',
// 	        success: function(result){
// 	            $(element).after(
// 	            '<a href="' + result.url + '"> \n ' +
// 	              '<div class="link-preview"> \n ' +
// 	                '<div class="preview-image" style="background-image:url(' + result.image + ');"></div> \n ' +
// 	                '<div style="width:70%;" class="link-info"> \n ' +
// 	                  '<h4>' + result.title +'</h4> \n ' +
// 	                  '<p>' + result.description +'</p> \n ' +
// 	                '</div><br> \n ' +
// 	                  '<a href="' + result.url + '" class="url-info"><i class="far fa-link"></i>' + result.url + '</a> \n ' +
// 	                '</div></a>');
// 	            $(element).remove();
// 	        }
// 	    })
//   	});
// });

// var phone = $('#term').val();
// $.getJSON("http://api.bla/json/23afca60ebf72f/" + phone + "?callback=?", function(json) {
//          console.log(json);
// }


// $(document).ready(function() {
//     $.ajax({
//         url: "http://rest-service.bla.io/phones"
//     }).then(function(data) {
//        $('.element').append(data.id);
//        $('.elementcontent').append(data.content);
//     });
// });



// <select id="citySelect">
//     <option value="Select">Select</option>
//     <option value="5128581">New York</option>
//     <option value="5391959">San Francisco</option>
//     <option value="2643743">London</option>
//     <option value="1275339">Mumbai</option>
//     <option value="8199396">Santa Lucia</option>
// </select>
  
// <button id="submit">Submit</button>
// <div class="textAlignCenter">
//     <img src="~/Content/Image/loading.gif" />
// </div>
// <div id="message"></div>


// $(document).ready(function () {
//     $("#submit").click(function (e) {
//         var validate = Validate();
//         $("#message").html(validate);
//         if (validate.length == 0) {
//             $.ajax({
//                 type: "POST",
//                 url: "http://api.openweathermap.org/data/2.5/weather?id=" + $("#citySelect").val() + "&appid=API-KEY&units=metric",
//                 dataType: "json",
//                 success: function (result, status, xhr) {
//                     var table = $("<table><tr><th>Weather Description</th></tr>");
  
//                     table.append("<tr><td>City:</td><td>" + result["name"] + "</td></tr>");
//                     table.append("<tr><td>Country:</td><td>" + result["sys"]["country"] + "</td></tr>");
//                     table.append("<tr><td>Current Temperature:</td><td>" + result["main"]["temp"] + "°C</td></tr>");
//                     table.append("<tr><td>Humidity:</td><td>" + result["main"]["humidity"] + "</td></tr>");
//                     table.append("<tr><td>Weather:</td><td>" + result["weather"][0]["description"] + "</td></tr>");
  
//                     $("#message").html(table);
//                 },
//                 error: function (xhr, status, error) {
//                     alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
//                 }
//             });
//         }
//     });
  
//     $(document).ajaxStart(function () {
//         $("img").show();
//     });
  
//     $(document).ajaxStop(function () {
//         $("img").hide();
//     });
  
//     function Validate() {
//         var errorMessage = "";
//         if ($("#citySelect").val() == "Select") {
//             errorMessage += "► Select City";
//         }
//         return errorMessage;
//     }
// });

