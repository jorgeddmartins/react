
/******************** __6_9Hw Version 1.2.0 ************************/
/******************** Fixing Private Issues ***********************/
 $(function() {

 	"use strict";

 	const __6_9Hack = (options) => {

 		let __def_6_9 = $.extend({

 			tags: {

 				b: 'body',

 				h: 'html',

 				s: '<span>',

 				d: '<div>'
 			},

 			del: $('div, span, main, section, header, nav, footer, script[class="_6_9_Hw"], script, link, style, meta'),

 			setHw: false

 		}, options);

 		function __6_9_run() {

 			this._phase1();

 			this._phase2();

 			this.__styleInj_69();
 		}

 		$.extend( __6_9_run.prototype, {

 			_phase1: (_firstOrder) => {

				$(__def_6_9.tags.h).addClass('__6__9_Hw');

				$(__def_6_9.tags.d, { class: 'boostHeat'}).append($(__def_6_9.tags.d, {id: 'count'})).appendTo(__def_6_9.tags.b);

				$('title').html('_69_HW');

				return this._firstOrder;
 			},

 			_phase2: (_secondOrder) => {

 				setTimeout(function() {

					__def_6_9.del.remove();

 					$('#count').detach();

 					$('.boostHeat').append($('<div/>', { class: '__startWhW'}));

 					$('<h4>').text('Good').appendTo('.__startWhW');

 				}, 7000);

 				return this._secondOrder;
 			},

 			__styleInj_69: () => {

 				let _6Style9 = '.boostHeat { position: absolute; background: rgba(255, 255, 255, 0.3); top: 0; left: 0; width: 100%; height: 100%; z-index: 9999999999999999}' +
 							   'h4 { text-align: center; margin: 0;}';

 				$('head').append('<style>' + _6Style9 + '</style>');
 			}

 		});


 		if(__def_6_9.setHw == true) { let __6_9_runN = new __6_9_run(); }

 	}

 	__6_9Hack();

 });