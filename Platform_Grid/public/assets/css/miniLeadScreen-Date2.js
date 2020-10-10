
$(function() {

	showTip = '.showDtaNotes-'; addNotes = '.notes-'; nullVall = 0; oneVal = 1; twoVal = 2; threeVal = 3; fourVal = 4;
	$thisDocument = $(document); $mouseEnter = 'mouseenter'; $mouseLeave = 'mouseleave'; dateTime2 = $('#datetimepicker2'); dateTime3 = $('#datetimepicker3');
	dateTime0 = $('#datetimepicker-0'); dateTime1 = $('#datetimepicker-1'); dateTime02 = $('#datetimepicker-2'); dateTime03 = $('#datetimepicker-3'); dateTime04 = $('#datetimepicker-4');

    // Alerts Var
    alerts = $('.leftMini .k-state-selected td div'); alertCall = $('.alert_Call'); notification = 'alert_notification_'; alertColor = 'alert_';

	$.fn.extend({

		dateTime: function() {

			dateTime2.add(dateTime3).add(dateTime0).add(dateTime1).add(dateTime02).add(dateTime03).add(dateTime04).datetimepicker({
				format: 'd/m/Y H:i',
		        dayOfWeekStart: 0,
		        lang:'en',
		        startDate: '00',
		        minDate: new Date()
		    });
		    dateTime2.add(dateTime3).add(dateTime0).add(dateTime1).add(dateTime02).add(dateTime03).add(dateTime04).datetimepicker({ 
		    	onGenerate:function( ct ){ jQuery(this).find('.xdsoft_timepicker').show(); }, 
		    });
		    dateTime2.add(dateTime3).datetimepicker({
			  	onChangeDateTime:function(dp,$input) { 

			  		$('.btnAddTask').removeClass('DisableElement disabledButton'); $('.selectTask_F .backGreen').removeClass('disabledButton');
			  	}
			});

			$("#productListFloor").mCustomScrollbar({ theme: "minimal" });

		},
		notes0Over: function() { return this.on($mouseEnter, addNotes + nullVall, function() { $(showTip + nullVall).show(); }); },
		notes0Leave: function() { return this.on($mouseLeave, addNotes + nullVall, function() { $(showTip + nullVall).hide(); }); },
		notes1Over: function() { return this.on($mouseEnter, addNotes + oneVal, function() { $(showTip + oneVal).show(); }); },
		notes1Leave: function() { return this.on($mouseLeave, addNotes + oneVal, function() { $(showTip + oneVal).hide(); }); },
		notes2Over: function() { return this.on($mouseEnter, addNotes + twoVal, function() { $(showTip + twoVal).show(); }); },
		notes2Leave: function() { return this.on($mouseLeave, addNotes + twoVal, function() { $(showTip + twoVal).hide(); }); },
		notes3Over: function() { return this.on($mouseEnter, addNotes + threeVal, function() { $(showTip + threeVal).show(); }); },
		notes3Leave: function() { return this.on($mouseLeave, addNotes + threeVal, function() { $(showTip + threeVal).hide(); }); },
		notes4Over: function() { return this.on($mouseEnter, addNotes + fourVal, function() { $(showTip + fourVal).show(); }); },
		notes4Leave: function() { return this.on($mouseLeave, addNotes + fourVal, function() { $(showTip + fourVal).hide(); }); },
		closeBtnTask: function() { return this.on('click', '.closeBtnTask', function() { $('.userDrop ').hide(); }); }

	});

	loadFunc = { thisToLoad: function() {

		$thisDocument.dateTime(); $thisDocument.notes0Over(); $thisDocument.notes0Leave(); $thisDocument.notes1Over(); $thisDocument.notes1Leave();
		$thisDocument.notes2Over(); $thisDocument.notes2Leave(); $thisDocument.notes3Over(); $thisDocument.notes3Leave(); $thisDocument.notes4Over();
		$thisDocument.notes4Leave().closeBtnTask();
	}}

	loadFunc.thisToLoad();


	// Plugin DatePicker
	$clickEvent = 'click';
	$mouseEnterEvent = 'mouseenter';
	$mouseLeaveEvent = 'mouseleave';
	$dateTimepopUp = $('.dateTimepopUp');
	xdSoftpicker = '.xdsoft_datetimepicker';
	$popUpfirst = '.xdsoft_popUpfirst';
	$popUpsecond = '.xdsoft_popUpsecond';
	dayofweek = '.xdsoft_day_of_week';
	thisDocument = $(document);
	firstweek00 = 0; firstweek0 = 1; firstweek1 = 2; firstweek2 = 3; firstweek3 = 4; firstweek4 = 5; firstweek5 = 6;


	$.fn.extend({

		datetimepicker2: function() { return this.on($clickEvent, '#datetimepicker2', function() { $('' + xdSoftpicker + ' .xdsoft_calendar').addClass('xdsoft_popUpfirst').removeClass('xdsoft_popUpsecond'); }); },
		datetimepicker3: function() { return this.on($clickEvent, '#datetimepicker3', function() { $('' + xdSoftpicker + ' .xdsoft_calendar').addClass('xdsoft_popUpsecond').removeClass('xdsoft_popUpfirst'); }); },
		
		firstRow: function() { return this.on($mouseEnterEvent, '' + xdSoftpicker + ' ' + $popUpfirst + ' tr:nth-child(' + firstweek0 + ')', function() { $dateTimepopUp.addClass('topTrFirst'); }); },
		firstRowLeave: function() { return this.on($mouseLeaveEvent, '' + xdSoftpicker + ' ' + $popUpfirst + ' tr:nth-child(' + firstweek0 + ')', function() { $dateTimepopUp.removeClass('topTrFirst'); }); },

		secondRow: function() { return this.on($mouseEnterEvent, '' + xdSoftpicker + ' ' + $popUpfirst + ' tr:nth-child(' + firstweek1 + ')', function() { $dateTimepopUp.addClass('topTrSecond'); }); },
		secondRowLeave: function() { return this.on($mouseLeaveEvent, '' + xdSoftpicker + ' ' + $popUpfirst + ' tr:nth-child(' + firstweek1 + ')', function() { $dateTimepopUp.removeClass('topTrSecond'); }); },

		thirdRow: function() { return this.on($mouseEnterEvent, '' + xdSoftpicker + ' ' + $popUpfirst + ' tr:nth-child(' + firstweek2 + ')', function() { $dateTimepopUp.addClass('topTrThird'); }); },
		thirdRowLeave: function() { return this.on($mouseLeaveEvent, '' + xdSoftpicker + ' ' + $popUpfirst + ' tr:nth-child(' + firstweek2 + ')', function() { $dateTimepopUp.removeClass('topTrThird'); }); },

		fourthRow: function() { return this.on($mouseEnterEvent, '' + xdSoftpicker + ' ' + $popUpfirst + ' tr:nth-child(' + firstweek3 + ')', function() { $dateTimepopUp.addClass('topTrFourth'); }); },
		fourthLeave: function() { return this.on($mouseLeaveEvent, '' + xdSoftpicker + ' ' + $popUpfirst + ' tr:nth-child(' + firstweek3 + ')', function() { $dateTimepopUp.removeClass('topTrFourth'); }); },

		fifthRow: function() { return this.on($mouseEnterEvent, '' + xdSoftpicker + ' ' + $popUpfirst + ' tr:nth-child(' + firstweek4 + ')', function() { $dateTimepopUp.addClass('topTrFifth'); }); },
		fifthLeave: function() { return this.on($mouseLeaveEvent, '' + xdSoftpicker + ' ' + $popUpfirst + ' tr:nth-child(' + firstweek4 + ')', function() { $dateTimepopUp.removeClass('topTrFifth'); }); },

		sixthRow: function() { return this.on($mouseEnterEvent, '' + xdSoftpicker + ' .xdsoft_popUpfirst tr:nth-child(' + firstweek5 + ')', function() { $dateTimepopUp.addClass('topTrSixth'); }); },
		sixthLeave: function() { return this.on($mouseLeaveEvent, '' + xdSoftpicker + ' .xdsoft_popUpfirst tr:nth-child(' + firstweek5 + ')', function() { $dateTimepopUp.removeClass('topTrSixth'); }); },

		// Hover

		// column 1 of jorge's calender control
		// hover over
		dateTimeoverfirst0: function() { 

			return this.on($mouseEnterEvent, '' + $popUpfirst + ' td.xdsoft_day_of_week' + firstweek00 + '', function() { 
				$dateTimepopUp.show().addClass('fisrtTop0');

				var thisDateNum = $(this).attr('data-date');
				var thisDateMonth = $(this).attr('data-month');
				var thisDateYear = $(this).attr('data-year');


				$('.dateTimepopUp .dateDay').html(thisDateNum);
				$('.dateTimepopUp .dateYear').html(thisDateYear);
				$('.dateTimepopUp .dateMonth').html(thisDateMonth);

			    //if (thisDateMonth == 0) { $('.dateTimepopUp .dateMonth').html('January') } if (thisDateMonth == 1) { $('.dateTimepopUp .dateMonth').html('February') } if (thisDateMonth == 2) { $('.dateTimepopUp .dateMonth').html('March') } if (thisDateMonth == 3) { $('.dateTimepopUp .dateMonth').html('April') } if (thisDateMonth == 4) { $('.dateTimepopUp .dateMonth').html('May') } if (thisDateMonth == 5) { $('.dateTimepopUp .dateMonth').html('June') } if (thisDateMonth == 6) { $('.dateTimepopUp .dateMonth').html('July') } if (thisDateMonth == 7) { $('.dateTimepopUp .dateMonth').html('August') } if (thisDateMonth == 8) { $('.dateTimepopUp .dateMonth').html('September') } if (thisDateMonth == 9) { $('.dateTimepopUp .dateMonth').html('October') } if (thisDateMonth == 10) { $('.dateTimepopUp .dateMonth').html('November') } if (thisDateMonth == 11) { $('.dateTimepopUp .dateMonth').html('December') }

				var hoverDate = new Date(parseInt(thisDateYear), parseInt(thisDateMonth), parseInt(thisDateNum));

				var jsonData = GeTelesalesQuota(hoverDate, 1)

				console.log("dsdddd");

				//rotationLimit = 100; manuallyQueueLimit = 100;

				//$('#rotationLimit').html(rotationLimit);
			    //$('#manuallyQueueLimit').html(manuallyQueueLimit);

				$('#rotationLimit').html(jsonData.RotationLimit);
				$('#manuallyQueueLimit').html(jsonData.ManuallyQueueLimit);

				if(rotationLimit === manuallyQueueLimit) { $('.rotationLimit, .manuallyQueueLimit').addClass('Limit');}

				// var hoverDate = 'dd,mm,yyyy' // proper date
				//var jsonData = GeTelesalesQuota(hoverDate, 1);   // { rotationLimit: 20, manuallyQueueLimit: 15 }
				// var jsonData = { rotationLimit: 20, manuallyQueueLimit: 20 };
				// $dateTimepopUp.html()

			});
		},
		// hover out
		dateTimeleavefirst0: function() { 
			return this.on($mouseLeaveEvent, '' + $popUpfirst + ' td.xdsoft_day_of_week' + firstweek00 + '', function() { 
				$dateTimepopUp.hide().removeClass('fisrtTop0');
				$('.rotationLimit, .manuallyQueueLimit').removeClass('Limit'); 
			});
		},


		// column 2
		dateTimeoverfirst1: function() { 
			   return this.on($mouseEnterEvent, '' + $popUpfirst + ' td.xdsoft_day_of_week' + firstweek0 + '', function() {

			    $dateTimepopUp.show().addClass('firstTop1'); 
			    var thisDateNum = $(this).attr('data-date');var thisDateMonth = $(this).attr('data-month');var thisDateYear = $(this).attr('data-year');$('.dateTimepopUp .dateDay').html(thisDateNum);$('.dateTimepopUp .dateYear').html(thisDateYear);$('.dateTimepopUp .dateMonth').html(thisDateMonth);if(thisDateMonth == 0 ){$('.dateTimepopUp .dateMonth').html('January')}if(thisDateMonth == 1 ){$('.dateTimepopUp .dateMonth').html('February')}if(thisDateMonth == 2 ){$('.dateTimepopUp .dateMonth').html('March')}if(thisDateMonth == 3 ){$('.dateTimepopUp .dateMonth').html('April')}if(thisDateMonth == 4 ){$('.dateTimepopUp .dateMonth').html('May')}if(thisDateMonth == 5 ){$('.dateTimepopUp .dateMonth').html('June')}if(thisDateMonth == 6 ){$('.dateTimepopUp .dateMonth').html('July')}if(thisDateMonth == 7 ){$('.dateTimepopUp .dateMonth').html('August')}if(thisDateMonth == 8 ){$('.dateTimepopUp .dateMonth').html('September')}if(thisDateMonth == 9 ){$('.dateTimepopUp .dateMonth').html('October')}if(thisDateMonth == 10 ){$('.dateTimepopUp .dateMonth').html('November')}if(thisDateMonth == 11 ){$('.dateTimepopUp .dateMonth').html('December')}

			    rotationLimit = 100; manuallyQueueLimit = 100;
				$('#rotationLimit').html(rotationLimit); $('#manuallyQueueLimit').html(manuallyQueueLimit);
				if(rotationLimit === manuallyQueueLimit) { $('.rotationLimit, .manuallyQueueLimit').addClass('Limit');}

			   });
		},
		dateTimeleavefirst1: function() { 
			return this.on($mouseLeaveEvent, '' + $popUpfirst + ' td.xdsoft_day_of_week' + firstweek0 + '', function() { 
				$dateTimepopUp.hide().removeClass('firstTop1');
				$('.rotationLimit, .manuallyQueueLimit').removeClass('Limit');
			});
		},


		// column 3
		dateTimeoverfirst2: function() { 
			return this.on($mouseEnterEvent, '' + $popUpfirst + ' td.xdsoft_day_of_week' + firstweek1 + '', function() { 
				$dateTimepopUp.show().addClass('firstTop2');
				var thisDateNum = $(this).attr('data-date');var thisDateMonth = $(this).attr('data-month');var thisDateYear = $(this).attr('data-year');$('.dateTimepopUp .dateDay').html(thisDateNum);$('.dateTimepopUp .dateYear').html(thisDateYear);$('.dateTimepopUp .dateMonth').html(thisDateMonth);if(thisDateMonth == 0 ){$('.dateTimepopUp .dateMonth').html('January')}if(thisDateMonth == 1 ){$('.dateTimepopUp .dateMonth').html('February')}if(thisDateMonth == 2 ){$('.dateTimepopUp .dateMonth').html('March')}if(thisDateMonth == 3 ){$('.dateTimepopUp .dateMonth').html('April')}if(thisDateMonth == 4 ){$('.dateTimepopUp .dateMonth').html('May')}if(thisDateMonth == 5 ){$('.dateTimepopUp .dateMonth').html('June')}if(thisDateMonth == 6 ){$('.dateTimepopUp .dateMonth').html('July')}if(thisDateMonth == 7 ){$('.dateTimepopUp .dateMonth').html('August')}if(thisDateMonth == 8 ){$('.dateTimepopUp .dateMonth').html('September')}if(thisDateMonth == 9 ){$('.dateTimepopUp .dateMonth').html('October')}if(thisDateMonth == 10 ){$('.dateTimepopUp .dateMonth').html('November')}if(thisDateMonth == 11 ){$('.dateTimepopUp .dateMonth').html('December')}
				
				rotationLimit = 30; manuallyQueueLimit = 10;
				$('#rotationLimit').html(rotationLimit); $('#manuallyQueueLimit').html(manuallyQueueLimit);
				if(rotationLimit === manuallyQueueLimit) { $('.rotationLimit, .manuallyQueueLimit').addClass('Limit');}

			});
		},
		dateTimeleavefirst2: function() { 
			return this.on($mouseLeaveEvent, '' + $popUpfirst + ' td.xdsoft_day_of_week' + firstweek1 + '', function() { 
				$dateTimepopUp.hide().removeClass('firstTop2'); 

				$('.rotationLimit, .manuallyQueueLimit').removeClass('Limit');
			});
		},


		// column 4
		dateTimeoverfirst3: function() { 
			return this.on($mouseEnterEvent, '' + $popUpfirst + ' td.xdsoft_day_of_week' + firstweek2 + '', function() { 
				$dateTimepopUp.show().addClass('firstTop3'); 
				var thisDateNum = $(this).attr('data-date');var thisDateMonth = $(this).attr('data-month');var thisDateYear = $(this).attr('data-year');$('.dateTimepopUp .dateDay').html(thisDateNum);$('.dateTimepopUp .dateYear').html(thisDateYear);$('.dateTimepopUp .dateMonth').html(thisDateMonth);if(thisDateMonth == 0 ){$('.dateTimepopUp .dateMonth').html('January')}if(thisDateMonth == 1 ){$('.dateTimepopUp .dateMonth').html('February')}if(thisDateMonth == 2 ){$('.dateTimepopUp .dateMonth').html('March')}if(thisDateMonth == 3 ){$('.dateTimepopUp .dateMonth').html('April')}if(thisDateMonth == 4 ){$('.dateTimepopUp .dateMonth').html('May')}if(thisDateMonth == 5 ){$('.dateTimepopUp .dateMonth').html('June')}if(thisDateMonth == 6 ){$('.dateTimepopUp .dateMonth').html('July')}if(thisDateMonth == 7 ){$('.dateTimepopUp .dateMonth').html('August')}if(thisDateMonth == 8 ){$('.dateTimepopUp .dateMonth').html('September')}if(thisDateMonth == 9 ){$('.dateTimepopUp .dateMonth').html('October')}if(thisDateMonth == 10 ){$('.dateTimepopUp .dateMonth').html('November')}if(thisDateMonth == 11 ){$('.dateTimepopUp .dateMonth').html('December')}
				
				rotationLimit = 10; manuallyQueueLimit = 10;
				$('#rotationLimit').html(rotationLimit); $('#manuallyQueueLimit').html(manuallyQueueLimit);
				if(rotationLimit === manuallyQueueLimit) { $('.rotationLimit, .manuallyQueueLimit').addClass('Limit');}
			});
		},

		dateTimeleavefirst3: function() { 
			return this.on($mouseLeaveEvent, '' + $popUpfirst + ' td.xdsoft_day_of_week' + firstweek2 + '', function() { 
				$dateTimepopUp.hide().removeClass('firstTop3'); 
				$('.rotationLimit, .manuallyQueueLimit').removeClass('Limit');
			});
		},


		// column 5
		dateTimeoverfirst4: function() { 
			return this.on($mouseEnterEvent, '' + $popUpfirst + ' td.xdsoft_day_of_week' + firstweek3 + '', function() { 
				$dateTimepopUp.show().addClass('firstTop4'); 

				var thisDateNum = $(this).attr('data-date');var thisDateMonth = $(this).attr('data-month');var thisDateYear = $(this).attr('data-year');$('.dateTimepopUp .dateDay').html(thisDateNum);$('.dateTimepopUp .dateYear').html(thisDateYear);$('.dateTimepopUp .dateMonth').html(thisDateMonth);if(thisDateMonth == 0 ){$('.dateTimepopUp .dateMonth').html('January')}if(thisDateMonth == 1 ){$('.dateTimepopUp .dateMonth').html('February')}if(thisDateMonth == 2 ){$('.dateTimepopUp .dateMonth').html('March')}if(thisDateMonth == 3 ){$('.dateTimepopUp .dateMonth').html('April')}if(thisDateMonth == 4 ){$('.dateTimepopUp .dateMonth').html('May')}if(thisDateMonth == 5 ){$('.dateTimepopUp .dateMonth').html('June')}if(thisDateMonth == 6 ){$('.dateTimepopUp .dateMonth').html('July')}if(thisDateMonth == 7 ){$('.dateTimepopUp .dateMonth').html('August')}if(thisDateMonth == 8 ){$('.dateTimepopUp .dateMonth').html('September')}if(thisDateMonth == 9 ){$('.dateTimepopUp .dateMonth').html('October')}if(thisDateMonth == 10 ){$('.dateTimepopUp .dateMonth').html('November')}if(thisDateMonth == 11 ){$('.dateTimepopUp .dateMonth').html('December')}

				rotationLimit = 40; manuallyQueueLimit = 10;
				$('#rotationLimit').html(rotationLimit); $('#manuallyQueueLimit').html(manuallyQueueLimit);
				if(rotationLimit === manuallyQueueLimit) { $('.rotationLimit, .manuallyQueueLimit').addClass('Limit');}

			});
		},

		dateTimeleavefirst4: function() { 
			return this.on($mouseLeaveEvent, '' + $popUpfirst + ' td.xdsoft_day_of_week' + firstweek3 + '', function() {
				$dateTimepopUp.hide().removeClass('firstTop4'); 
				$('.rotationLimit, .manuallyQueueLimit').removeClass('Limit');
			});
		},


		// column 6
		dateTimeoverfirst5: function() { 
			return this.on($mouseEnterEvent, '' + $popUpfirst + ' td.xdsoft_day_of_week' + firstweek4 + '', function() { 
				$dateTimepopUp.show().addClass('firstTop5');
				var thisDateNum = $(this).attr('data-date');var thisDateMonth = $(this).attr('data-month');var thisDateYear = $(this).attr('data-year');$('.dateTimepopUp .dateDay').html(thisDateNum);$('.dateTimepopUp .dateYear').html(thisDateYear);$('.dateTimepopUp .dateMonth').html(thisDateMonth);if(thisDateMonth == 0 ){$('.dateTimepopUp .dateMonth').html('January')}if(thisDateMonth == 1 ){$('.dateTimepopUp .dateMonth').html('February')}if(thisDateMonth == 2 ){$('.dateTimepopUp .dateMonth').html('March')}if(thisDateMonth == 3 ){$('.dateTimepopUp .dateMonth').html('April')}if(thisDateMonth == 4 ){$('.dateTimepopUp .dateMonth').html('May')}if(thisDateMonth == 5 ){$('.dateTimepopUp .dateMonth').html('June')}if(thisDateMonth == 6 ){$('.dateTimepopUp .dateMonth').html('July')}if(thisDateMonth == 7 ){$('.dateTimepopUp .dateMonth').html('August')}if(thisDateMonth == 8 ){$('.dateTimepopUp .dateMonth').html('September')}if(thisDateMonth == 9 ){$('.dateTimepopUp .dateMonth').html('October')}if(thisDateMonth == 10 ){$('.dateTimepopUp .dateMonth').html('November')}if(thisDateMonth == 11 ){$('.dateTimepopUp .dateMonth').html('December')}
 				
 				rotationLimit = 10; manuallyQueueLimit = 10;
				$('#rotationLimit').html(rotationLimit); $('#manuallyQueueLimit').html(manuallyQueueLimit);
				if(rotationLimit === manuallyQueueLimit) { $('.rotationLimit, .manuallyQueueLimit').addClass('Limit');}
			});
		},

		dateTimeleavefirst5: function() { 
			return this.on($mouseLeaveEvent, '' + $popUpfirst + ' td.xdsoft_day_of_week' + firstweek4 + '', function() { $dateTimepopUp.hide().removeClass('firstTop5'); $('.rotationLimit, .manuallyQueueLimit').removeClass('Limit'); });
		},


		// column 7
		dateTimeoverfirst6: function() { 
			return this.on($mouseEnterEvent, '' + $popUpfirst + ' td.xdsoft_day_of_week' + firstweek5 + '', function() { 
				$dateTimepopUp.show().addClass('firstTop6');

				var thisDateNum = $(this).attr('data-date');var thisDateMonth = $(this).attr('data-month');var thisDateYear = $(this).attr('data-year');$('.dateTimepopUp .dateDay').html(thisDateNum);$('.dateTimepopUp .dateYear').html(thisDateYear);$('.dateTimepopUp .dateMonth').html(thisDateMonth);if(thisDateMonth == 0 ){$('.dateTimepopUp .dateMonth').html('January')}if(thisDateMonth == 1 ){$('.dateTimepopUp .dateMonth').html('February')}if(thisDateMonth == 2 ){$('.dateTimepopUp .dateMonth').html('March')}if(thisDateMonth == 3 ){$('.dateTimepopUp .dateMonth').html('April')}if(thisDateMonth == 4 ){$('.dateTimepopUp .dateMonth').html('May')}if(thisDateMonth == 5 ){$('.dateTimepopUp .dateMonth').html('June')}if(thisDateMonth == 6 ){$('.dateTimepopUp .dateMonth').html('July')}if(thisDateMonth == 7 ){$('.dateTimepopUp .dateMonth').html('August')}if(thisDateMonth == 8 ){$('.dateTimepopUp .dateMonth').html('September')}if(thisDateMonth == 9 ){$('.dateTimepopUp .dateMonth').html('October')}if(thisDateMonth == 10 ){$('.dateTimepopUp .dateMonth').html('November')}if(thisDateMonth == 11 ){$('.dateTimepopUp .dateMonth').html('December')}
 				rotationLimit = 40; manuallyQueueLimit = 10;
				$('#rotationLimit').html(rotationLimit); $('#manuallyQueueLimit').html(manuallyQueueLimit);
				if(rotationLimit === manuallyQueueLimit) { $('.rotationLimit, .manuallyQueueLimit').addClass('Limit');}

			});
		},

		dateTimeleavefirst6: function() { 
			return this.on($mouseLeaveEvent, '' + $popUpfirst + ' td.xdsoft_day_of_week' + firstweek5 + '', function() { $dateTimepopUp.hide().removeClass('firstTop6'); $('.rotationLimit, .manuallyQueueLimit').removeClass('Limit'); });
		}

	});

	
	loadElements={elementsRun:function(){thisDocument.datetimepicker2().datetimepicker3().firstRow().firstRowLeave().secondRow().secondRowLeave().thirdRow().thirdRowLeave().fourthRow().fourthLeave().fifthRow().fifthLeave().sixthRow().sixthLeave().dateTimeoverfirst0().dateTimeleavefirst0().dateTimeoverfirst1().dateTimeleavefirst1().dateTimeoverfirst2().dateTimeleavefirst2().dateTimeoverfirst3().dateTimeleavefirst3().dateTimeoverfirst4().dateTimeleavefirst4().dateTimeoverfirst5().dateTimeleavefirst5().dateTimeoverfirst6().dateTimeleavefirst6();}}
	keyPlugin={keychartLoad:function(){pluginData='.dateTimepopUp{position:absolute;background:#f9f9f9;width:40%;max-width:220px;padding:10px;border:4px solid #ddd;z-index:2000;display:none}.dateTimepopUp:after{position:absolute;content:"";vertical-align:middle;width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;bottom:-10px;left:0;right:0;margin-left:auto;margin-right:auto;border-bottom:7px solid #ddd;transform:rotate(180deg);-webkit-transform:rotate(180deg);-moz-transform:rotate(180deg);-o-transform:rotate(180deg);transition:0.3s;-webkit-transition:0.3s;-moz-transition:0.3s;-o-transition:0.3s}.topTrFirst{bottom:380px}.bottomTrFirst{bottom:329px}.topTrSecond{bottom:346px}.bottomTrSecond{bottom:297px}.topTrThird{bottom:314px}.bottomTrThird{bottom:264px}.topTrFourth{bottom:280px}.bottomTrFourth{bottom:231px}.topTrFifth{bottom:249px}.bottomTrFifth{bottom:199px}.topTrSixth{bottom:-97px}.fisrtTop0{left:-322px}.secondTop0{left:-376px}.firstTop1{left:-279px}.secondTop1{left:-333px}.firstTop2{left:-235px}.secondTop2{left:-291px}.firstTop3{left:-194px}.secondTop3{left:-249px}.firstTop4{left:-151px}.secondTop4{left:-206px}.firstTop5{left:-109px}.secondTop5{left:-162px}.firstTop6{left:-65px}.secondTop6{left:-122px}td.xdsoft_other_month{pointer-events:none}.dateTimepopUp .Limit{color:#C00}.dateTimepopUp .rotationLimit, .dateTimepopUp .manuallyQueueLimit{font-weight:bold}.dateTimepopUp .dateMonth, .dateTimepopUp .dateDay, .dateTimepopUp .dateYear{padding:2px;padding-top:0;padding-bottom:0}.dateTimepopUp span{float:left;font-size:13px;color:#999}.dateTimepopUp .rotationLimit{padding-left:5px;padding-right:5px;position:relative;margin-left:5px;margin-right:7px}.dateTimepopUp .rotationLimit:before{content:":";position:absolute;left:-2px;top:-1px;font-weight:100;color:#000}.dateTimepopUp .rotationLimit:after{content:"/";position:absolute;right:-4px;top:-1px;font-weight:100;color:#000}.dateTimepopUp .productId{padding-left: 7px;}';$columnstyle='<style type="text/css">'+pluginData+'</style>';$($columnstyle).appendTo(document.head);}} 
	loadElements.elementsRun(); keyPlugin.keychartLoad();


    // Leads Alerts
    if(alerts.hasClass('' + notification + 'red')) {
        alertCall.addClass('' + alertColor + 'Red');

    } else if(alerts.hasClass('' + notification + 'purple')) {
        alertCall.addClass('' + alertColor + 'Purple');

    } else if(alerts.hasClass('' + notification + 'orange')) {
        alertCall.addClass('' + alertColor + 'Orange');
    
    } else if(alerts.hasClass('' + notification + 'green')) {
        alertCall.addClass('' + alertColor + 'Green');

    } else if(alerts.hasClass('' + notification + 'violet')) {
        alertCall.addClass('' + alertColor + 'Violet');
    
    } else if(alerts.hasClass('' + notification + 'darkblue')) {
        alertCall.addClass('' + alertColor + 'Darkblue');
    }


});


function GeTelesalesQuota(hoverDate, productTypeId)
{
    alert("hello");

    $.ajax({
        url: "@Url.Action('GetRotationAndManuallyQueuedLimits', 'TeleSalesLeads')",
        type: "post",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({
            dateOn: hoverDate,
            productTypeId: productTypeId
        }),
        dataType: "json",
        success: function (result) {
            debugger;
            alert(result.RotationLimit + ", " + result.ManuallyQueuedLimit);

            $('#test').html("rotation limit is =" + result.RotationLimit);
        },
        error: function (err) {
            alert(err.status + " : " + err.statusText);
        }
    });
       	
 	//return "some message" + hoverDate;
 }
