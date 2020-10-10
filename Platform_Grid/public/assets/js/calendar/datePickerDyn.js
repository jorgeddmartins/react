
// Drag Event
let drag = 'drag';

// New Date Event
let ddt = new Date();

// Months Content
let content = 'January February March April May June July August September October November December'.split(' ');

// Days Content
let daysOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function getCalendarStart(dayOfWeek, currentDate) {
    let date = currentDate - 1;
    let startOffset = (date % 7) - dayOfWeek;

    if (startOffset > 0) { startOffset -= 7; }
    return Math.abs(startOffset);
}

// Render Calendar
function renderCalendar(startDay, totalDays, currentDate) {
    let currentRow = 1;
    let currentDay = startDay;
    let $table = $('.TeleSalesGridCalendar .table');
    let $week = getCalendarRow();
    let month = ddt.getUTCMonth();
    let $day;
    let i = 1;

    for(; i <= totalDays; i++) {

    	$('.TeleSalesGridCalendar .table td').addClass('CalenTd');

        $day = $week.find('.CalenTd').eq(currentDay);
        $day.text(i);
       
        const CurrentDat = i === currentDate ? $day.addClass('today') : '';

        let $today = $('.today');

        currentDay = ++currentDay % 7;

        if (currentDay === 0 && (i + 1 <= totalDays)) {
            $week = getCalendarRow();
            currentRow++;
        } 
		
		if(totalDays > currentDay) {

			$today.prevAll('.dyItem').addClass('PrevDays');

			$today.siblings().closest('tr').addClass('CurrentRow');

			$('.CurrentRow').prevAll().addClass('all');

			$('.all .dyItem').addClass('PrevDays');
        }

        $.fn.monthTouch = function() {
        	return this.on('click', '*', function() {

        		let cls = $(this)[0].className;

        		if( cls.indexOf('next-month') !== -1) {

        			if(ddt.getUTCMonth() != month) { 

			    		$('.dyItem').removeClass('today PrevDays'); 

						$('tr').removeClass('CurrentRow');

						$('.CurrentRow').removeClass('all');

						$('.all .dyItem').removeClass('PrevDays');
			    	} 
        		}

        		else if(cls.indexOf('prev-month') !== -1) {

        			if(ddt.getUTCMonth() != month) { 

			    		$('.dyItem').removeClass('today PrevDays'); 

						$('tr').addClass('CurrentRow');

						$('.CurrentRow').addClass('all');

						$('.all .dyItem').addClass('PrevDays');
			    	} 
        		}

        	});
        }
        $(document).monthTouch();
    }
}

// Clear generated calendar
function clearCalendar() {
    let $trs = $('.table tr').not(':eq(0)');
    $trs.remove();
    $('.month-year').empty();
}

// Generates table row used when rendering Calendar
function getCalendarRow() {
    let $table = $('.TeleSalesGridCalendar .table');
    let $tr = $('<tr/>');
    for (let i = 0, len = 7; i < len; i++) {
		
		$tr.append($('<td/>').addClass('dyItem').css({ border: '1px solid #fff'}));
		
        $('.dyItem:nth-child(7)').addClass('Day-Saturday');
		$('.dyItem:nth-child(1)').addClass('Day-Sunday');
    }
    $table.append($tr);
    return $tr;
}

// Calendar Header
function HeadGCalendar() {
    let month = ddt.getUTCMonth();
    let day = ddt.getUTCDay();
    let year = ddt.getUTCFullYear();
    let date = ddt.getUTCDate();
    let totalDaysOfMonth = daysOfMonth[month];
    let counter = 1;

    // Top Calendar main Content
    let $h3 = $('<div/>', { class: 'TopHContent' });

    // Top Month Content
    let $mbx = $('<span/>', { class: 'ThisMonthTop' });

    // Top Year Content
    let ybx = $('<span/>', { class: 'ThisYearTop' });

    $mbx.html(content[month] + '').attr({ 'data-month': content[month]});
    ybx.html(year).attr({ 'data-year': year});

    $h3.appendTo('.month-year');
    $mbx.add(ybx).appendTo('.TopHContent');

    let Tsp = '<span>';

    let ThisMonthTopFloor = $('<div/>', { class: 'ThisMonthTopfloor'}).appendTo($h3)
    	.append($(Tsp, { class: 'dropMth janDrop'}).html('January'))
		.append($(Tsp, { class: 'dropMth fabDrop'}).html('February'))
		.append($(Tsp, { class: 'dropMth marchDrop'}).html('March'))
		.append($(Tsp, { class: 'dropMth aprilDrop'}).html('April'))
		.append($(Tsp, { class: 'dropMth mayDrop'}).html('May'))
		.append($(Tsp, { class: 'dropMth juneDrop'}).html('June'))
		.append($(Tsp, { class: 'dropMth julyDrop'}).html('July'))
		.append($(Tsp, { class: 'dropMth augDrop'}).html('August'))
		.append($(Tsp, { class: 'dropMth sepDrop'}).html('September'))
		.append($(Tsp, { class: 'dropMth octDrop'}).html('October'))
		.append($(Tsp, { class: 'dropMth novDrop'}).html('November'))
		.append($(Tsp, { class: 'dropMth decDrop'}).html('December'));

    let ThisYearTopFloor = $('<div/>', { class: 'ThisYearTopfloor'}).appendTo($h3);
    
    let dateToHighlight = 0;

    if (ddt.getUTCMonth() === month && ddt.getUTCFullYear() === year) {
        dateToHighlight = date;
    }

    if(month === 1) {
        if ((year % 100 !== 0) && (year % 4 === 0) || (year % 400 === 0)) {
            totalDaysOfMonth = 29;
        }
    }
    renderCalendar(getCalendarStart(day, date), totalDaysOfMonth, dateToHighlight);
};

function navigationHandler(dir) {
    ddt.setUTCMonth(ddt.getUTCMonth() + dir);
    clearCalendar();
    HeadGCalendar();
}

// Last and Next Months Items
function EmptyItem(EmpElm) {

	let HeadGr = $('.TeleSalesGridCalendar');

	$('.dyItem').each(function() {
		const dyEmpty = $(this).html() == '' ? $(this).addClass('empty') : '';
		const removeDataDate = $(this).hasClass('empty') ? $(this).removeAttr('data-date') : '';
	});

	$('.Day-Saturday').each(function() {
		const DaySat = $(this).html().indexOf('30') >= 0 || $(this).html().indexOf('29') >= 0 ? HeadGr.addClass('day30') : HeadGr.removeClass('day30');
	});
}

function actMonths() {
	let Tmt = $('.ThisMonthTop');
	let dm = $('.dateMonth');

	const MatchJan = Tmt.html().match('January') ? dm.html('Jan') : '';
	const MatchFab = Tmt.html().match('February') ? dm.html('Feb') : '';
	const MatchMar = Tmt.html().match('March') ? dm.html('Mar') : '';
	const MatchApr = Tmt.html().match('April') ? dm.html('Apr') : '';
	const MatchMay = Tmt.html().match('May') ? dm.html('May') : '';
	const MatchJune = Tmt.html().match('June') ? dm.html('Jun') : '';
	const MatchJuly = Tmt.html().match('July') ? dm.html('Jul') : '';
	const MatchAug = Tmt.html().match('August') ? dm.html('Aug') : '';
	const MatchSep = Tmt.html().match('September') ? dm.html('Sep') : '';
	const MatchOct = Tmt.html().match('October') ? dm.html('Oct') : '';
	const MatchNov = Tmt.html().match('November') ? dm.html('Nov') : '';
	const MatchDec = Tmt.html().match('December') ? dm.html('Dec') : '';
}

$(function() {

	"use strict";

	// Propreties Main Function
	$.fn.GridDefaultCalendar = (CalendarOPtions) => {
		
		let STip = 'Save';
		
		let DefaultOptions = {

			// Dynamical Values
			value: {
				GridCVal: 0,
				
				// teleCTop: 454.140625
				teleCTop: 427.140625
			},

			// Element Tags
			tags: {

				// Div Tag
				divTag: '<div>',

				// Span Tag
				spanTag: '<span>',

				// Html Element
				goHtml: $('html'),

				// Body Tag
				bodyTag: 'body',

				// Input Element
				inputTag: '<input>',

				// Th Element
				thTag: '<th>',

				// Icon Tag
				icontag: '<i>',

				// Table Tag
				tableTag: '<table>',

				// Tr Tag
				trTag: '<tr>'
			},

			// All Propreties
			calenDrop: 'DatePickerDrop',

			avaiformHidden: 'AvailableFromidden',

			dObHidden: 'PdOb',

			zcalndClass: 'z_Calendar',

			TeleCalenGr: '.TeleSalesGridCalendar',

			CalGrid: '.CGrid_',

			OptCalend: 'datetimepicker3',

			DateTPick: 'datetimepicker2',

			hiidenId: '#hiddenId',
			
			YTop: '.ThisYearTop'
		};

		// Propreties Setitngs / Propreties Override
		let settingsCal = $.extend( true, {

			// Dragging Calendar False/True
			dragg: false,
			
			// Running Calendar True / False
			runCalendar: true,
			
			// Years Limit
			yearLimit: 9,
			
			// Hours Title
			HTitle: 'Hours',

			// Hours Sub Title
			HSTitle: 'h: am / h: pm',

			// Minutes Title
			MTitle: 'Minutes',

			// Minutes Sub title
			MSTitle: ':min',
							
			closeBt: '<span class="closeC fa">' + '<span class="closeC_Tip">' + STip + '</span>' + '</span>'

		}, DefaultOptions, CalendarOPtions );
		
		function RunCalen() { if(settingsCal.runCalendar == true ) { this.calendarType(); }}
		
		$.extend( RunCalen.prototype, {

			calendarType: () => {
				
				//.telSHourPicker
				// Calendar Hour Elements Injection
				let TeleSalesGridCalendar = $(settingsCal.tags.divTag, { class: 'TeleSalesGridCalendar' }).appendTo('.telSHourPicker')
						.append($(settingsCal.tags.divTag, { class: 'TeleGridDays', id: 'Ts1' }))
						.append($(settingsCal.tags.divTag, { class: 'TeleGridHour', id: 'Ts2' }))
						.append($(settingsCal.tags.divTag, { class: 'TeleGridSecd', id: 'Ts3' }))
						
				// calendar Months & Years Drop Down
				let leadCalen = $(settingsCal.tags.divTag, { class: 'TeleGridDays' }).appendTo('#DropPicker_' + 0);  
				let leadHour = $(settingsCal.tags.divTag, { class: 'TeleGridHour' }).appendTo('#DropPicker_' + 0);

				// Dynamical Classes for TeleGridCalendar
				$.fn.TeleCalMult = function(dataGrid) {
					return this.each(function() {

						$(this).addClass(dataGrid + settingsCal.value.GridCVal);
						settingsCal.value.GridCVal++;
					});
				}
				$(settingsCal.TeleCalenGr).TeleCalMult('CGrid_');

				// Start Dragging LeadScreen Calendar
				$.fn.LeadCalen = function() {
					return this.bind(drag, function() {

						let offset = $(this).offset().top;
						let offsetLeft = $(this).offset().left;

						$('#' + settingsCal.avaiformHidden).val(offsetLeft);
						$('#' + settingsCal.avaiformHidden).each(function() {

							if($(this).val() >= 550) {

								$('.AvailableCalendar').removeClass(settingsCal.zcalndClass);
								$('.TeleGridHour').hide();
								$('.' + settingsCal.calenDrop).css({ width: 'auto' });
								$('.TeleGridDays').css({ 'margin-right': 0 });

								// Hilights sdob
								const sdobV = ($(this).val() >= 707) ? $('.sdob').addClass(settingsCal.zcalndClass) : $('.sdob, .pdob').removeClass(settingsCal.zcalndClass);

							} else { 

								$('.AvailableCalendar').addClass(settingsCal.zcalndClass);
								$('.TeleGridHour').show();
								$('.' + settingsCal.calenDrop).css({ width: '609px' });
								$('.TeleGridDays').css({ 'margin-right': '7px' }); 
							}
						});
					
						$('#' + settingsCal.dObHidden).val(offset);
						$('#' + settingsCal.dObHidden).each(function() {

							// Hilights pdob
							if($(this).val() >= 554.71875) { 

								$('.pdob').addClass(settingsCal.zcalndClass) ;
								$('.sdob').removeClass(settingsCal.zcalndClass);
							}

							// Remove Hilight from pdob
							const pdob1 = ($(this).val() < 534.71875) ? $('.pdob').removeClass(settingsCal.zcalndClass) : '';
						});
					});
				}
				$('.' + settingsCal.calenDrop).LeadCalen();
				// End Dragging LeadScreen Calendar

				$.fn.RunTeleGridcalendar = function() {

					let NullHeader = function(e) { const NulNumber = e < 10 ? e = '0' + e : e = '' + e; return e; }

					let getHeaderDate = new Date();
					let getTime = ' ' + '/' + ' ' + NullHeader(getHeaderDate.getMonth()) + ' ' + '/' + ' ' + getHeaderDate.getFullYear();
					let getMonth = getHeaderDate.getMonth();

					let getMonthM = getHeaderDate.getMonth() - 1;

					let getYear = getHeaderDate.getFullYear();
					let getDay = NullHeader(getHeaderDate.getDate());
					let nowMinute = NullHeader(getHeaderDate.getMinutes());
					let nowHour = NullHeader(getHeaderDate.getHours());

					let ThisDate = getDay + '/' + getMonth + '/' + getYear;

					$('#datetimepicker2').attr({ readonly: 'readonly' });
					
					// Closes Calendar when click outside
					$.fn.cLca = function() {
						return this.on('click', '.closeCalend', function() {

							$(settingsCal.TeleCalenGr).hide();
							settingsCal.tags.goHtml.removeClass('closeCalend');
							$('.ThisMonthTopfloor, .ThisYearTopfloor').hide();
							$('.telSHourPicker .fa-calendar, .inputPicker_mini_top .fa-calendar').removeAttr('style'); 
						});
					}
					$(document).cLca();

					// Removing Class 'closeCalend' on mouseover
					$.fn.calenOver = function() {
						return this.on('mouseover', settingsCal.TeleCalenGr, function() {

							settingsCal.tags.goHtml.removeClass('closeCalend')
						});
					}

					// Adding Class 'closeCalend' on mouseleave
					$.fn.calenLeave = function() {
						return this.on('mouseleave', settingsCal.TeleCalenGr, function() {
							settingsCal.tags.goHtml.addClass('closeCalend')
						});
					}
					$(document).calenOver().calenLeave();

					// Append Calendar Navigation
					let CalenNavigation = $(settingsCal.tags.divTag, { class: 'TpNav' }).appendTo('.TeleGridDays')
						.append($(settingsCal.tags.icontag, { class: 'prev-month haveDate fad fa-chevron-left fa-3x' }))
						.append($(settingsCal.tags.icontag, { class: 'next-month haveDate fad fa-chevron-right fa-3x' }))
						.append($(settingsCal.tags.divTag, { class: 'month-year text-center TopHeadC' }));

					// AppendTo Calendar Table
					let CalTable = $(settingsCal.tags.divTag, { class: 'CalenFloor'}).appendTo('.TeleGridDays')
						.append($('<table>', { class: 'table table-bordered' })
							.append($('<tr>')
								.append($(settingsCal.tags.thTag).html('Sun'))
								.append($(settingsCal.tags.thTag).html('Mon'))
								.append($(settingsCal.tags.thTag).html('Tue'))
								.append($(settingsCal.tags.thTag).html('Wed'))
								.append($(settingsCal.tags.thTag).html('Thu'))
								.append($(settingsCal.tags.thTag).html('Fri'))
								.append($(settingsCal.tags.thTag).html('Sat'))
							)
						);
					
					// Prev Month Arrow Style
					$('.prev-month').css({ left: '3px', width: '14.3px', top: '5px', cursor: 'pointer', color: '#2796c6' });
					
					// Next Month Arrow Style
					$('.next-month').css({ top: '5px',  width: '14.3px', right: '3px', cursor: 'pointer', color: '#2796c6' });
					
					// Table Margin Style
					$('.table').css({ 'margin-bottom': '0'});

					// Global Check Click For Prev & next Months(Top Arrows)
					$.fn.GridGlTele = function() {
						return this.on('click', '*', function() {

							let fClass = $(this)[0].className;
							
							// Runs Previous Month
							const prevMonth = fClass.indexOf('prev-month') != -1 ? navigationHandler(-1) : '';
							
							// Runs Next Month
							const nextMonth = fClass.indexOf('next-month') != -1 ? navigationHandler(1) && $('tr').removeClass('CurrentRow') : '';
						});
					}
					$(document).GridGlTele();

					let dateHourPick = '.valTh';
					let datesUp = '/' + getYear + ' ' + nowHour + ':' + nowMinute;

					$(dateHourPick).val(getDay + '/' + getMonth + datesUp);

					// Janaury Month Injection
					const JanFull = getMonth == 0  ? $(dateHourPick).val(getDay + '/' + '01' + datesUp) : '';

					// February Month Injection
					const FabFull = getMonth == 1  ? $(dateHourPick).val(getDay + '/' + '02' + datesUp) : '';

					// March Month Injection
					const MarFull = getMonth == 2  ? $(dateHourPick).val(getDay + '/' + '03' + datesUp) : '';

					// April Month Injection
					const AprFull = getMonth == 3  ? $(dateHourPick).val(getDay + '/' + '04' + datesUp) : '';

					// May Month Injection
					const MayFull = getMonth == 4  ? $(dateHourPick).val(getDay + '/' + '05' + datesUp) : '';

					// June Month Injection
					const JunFull = getMonth == 5  ? $(dateHourPick).val(getDay + '/' + '06' + datesUp) : '';

					// July Month Injection
					const JulFull = getMonth == 6  ? $(dateHourPick).val(getDay + '/' + '07' + datesUp) : '';

					// August Month Injection
					const AugFull = getMonth == 7  ? $(dateHourPick).val(getDay + '/' + '08' + datesUp) : '';

					// September Month Injection
					const SepFull = getMonth == 8  ? $(dateHourPick).val(getDay + '/' + '09' + datesUp) : '';

					// October Month Injection
					const OctFull = getMonth == 9  ? $(dateHourPick).val(getDay + '/' + '10' + datesUp) : '';

					// November Month Injection
					const NovFull = getMonth == 10 ? $(dateHourPick).val(getDay + '/' + '11' + datesUp) : '';

					// December Month Injection
					const DecFull = getMonth == 11 ? $(dateHourPick).val(getDay + '/' + '12' + datesUp) : '';

					// Promise Ajax Call
					$.ajax({
						type: 'GET',
						cache: false,
						url: 'assets/js/calendar/GridTeleSalesCalendar.json',
						datatype: 'json',

						success: function(gridtelecalendata) { $(document).GlCalendar(gridtelecalendata) }
					});

					// Data Injection Calendar
					$.fn.GlCalendar = function(gridtelecalendata) {

						let hourSet = '';
						for( let i in gridtelecalendata.GirdHour ) {

							hourSet += '<div class="HItemF"><span class="HBack"></span><span class="hourItem" data-hour="' + gridtelecalendata.GirdHour[i].hourSet + '">' + gridtelecalendata.GirdHour[i].hourSet + '</span></div>';
						}
						$(hourSet).appendTo('.TeleGridHour');

						//$('.hourItem:first-of-type').addClass('FHour');
						
						$('.HItemF:first-of-type').addClass('FHour');

						let HourTitle = $(settingsCal.tags.divTag, { class: 'HourTitle' })
							.append( $(settingsCal.tags.spanTag, { class: 'hourTitle_p' }).html(settingsCal.HTitle))
							.append( $(settingsCal.tags.spanTag, { class: 'hour_pBtt'}).html(settingsCal.HSTitle));

						$('.FHour').before(HourTitle);

						let SecondsSet = '';
						for( let s in gridtelecalendata.secSet ) {

							SecondsSet += '<div class="SItemF"><span class="SBack"></span><span class="secondItem" data-second="' + gridtelecalendata.secSet[s].secondsSet + '">' + gridtelecalendata.secSet[s].secondsSet + '</span></div>';
						}
						$(SecondsSet).appendTo('.TeleGridSecd');

						//$('.secondItem:first-of-type').addClass('FSecond');
						
						$('.SItemF:first-of-type').addClass('FSecond');

						let SecondTitle = $(settingsCal.tags.divTag, { class: 'SecondfTitle' })
							.append( $(settingsCal.tags.spanTag, { class: 'secondTitle_p' } ).html(settingsCal.MTitle))
							.append( $(settingsCal.tags.spanTag, { class: 'second_pBtt'}).html(settingsCal.MSTitle));
						$('.FSecond').before(SecondTitle);
						
						
						//$('<span class="CalItemOpa"></span>').appendTo('.hourItem');
					}
					HeadGCalendar();

					// Start TeleSales Calendars
					$.fn.OpenCalendGl = function() {
						return this.on('click', '*', function() {
							
							let id = $(this).attr('id');
							
							// OPens PopUp TeleSales Calendar == 1.Top, 2.Left, 3.Right
							const input1 = id == settingsCal.OptCalend ? telSHourPickerCal('45px', 'auto', '-110px') : '';
							//const input1 = id == settingsCal.OptCalend ? telSHourPickerCal('473px', 'auto', '74px') : '';
							
							// Opens TeleSales Hour Calendar == 1.Top, 2.Left, 3.Right
							const input2 = id == settingsCal.DateTPick ? datetimepicker2Cal('103%', 'auto', '-2px') : '';
							//const input2 = id == settingsCal.DateTPick ? datetimepicker2Cal('421px', 'auto', '154px') : '';
							
						});
					}
					$(document).OpenCalendGl();
					
					// Dragging Calendar HourPicker Global Functions
					function telSHourPickerCal(tops, lefts, rights) {
						$(settingsCal.CalGrid + 0).show().css({ top: tops, left: lefts, right: rights });
						$('.TeleGridSecd').show();
						$('.TeleGridHour').css({ 'margin-right': '7px' });
						settingsCal.tags.goHtml.addClass('closeCalend');
						$('#' + settingsCal.OptCalend).addClass('valTh');
						$('#' + settingsCal.DateTPick).removeClass('valTh');
						$(settingsCal.TeleCalenGr).addClass('bigCalend').removeClass('lessHeight smallCalend');
						$('.telSHourPicker .fa-calendar').css({ color: '#0A9A7A' }); 
						$('.inputPicker_mini_top .fa-calendar').removeAttr('style'); 
						
						// DateTimePopUp Injection
						$(settingsCal.dateTpop).appendTo('.TeleSalesGridCalendar .table');
						
						// Clean DateTimePopUp
						$('.dateTimepopUp:nth(+1)').remove();
						
						// Hidden Id1 Value
						$(settingsCal.hiidenId + 1).val('');

						// Hidden Id2 Value
						$(settingsCal.hiidenId + 2).val('');

						// Hidden Id3 value
						$(settingsCal.hiidenId + 3).val('');
						
						$('.dyItem').removeClass('addDayValue getday');
					
						$('.hourItem').removeClass('addHourValue');
						
						$('.BThDay').css({ background: '#0080ff', color: '#fff', 'font-size': '10px', 'padding-top': '5px', 'padding-left': '5px', 'text-align': 'left', position: 'relative'});
						
						$('.SThDay').css({ background: '', color: '', 'font-size': '', 'padding-top': '', 'padding-left': '', 'text-align': '', position: ''});
							
						$('.BThHour').css({ background: '#0080ff', color: '#fff', 'font-size': '10px', 'padding-top': '5px', 'padding-left': '5px', 'text-align': 'left', position: 'relative'});
						
						$('.SThHour').css({ background: '', color: '', 'font-size': '', 'padding-top': '', 'padding-left': '', 'text-align': '', position: ''});
						
						// When Both Calendars have the Same Day
						if($('.bigCalend .dyItem').is('.BThDay, .SThDay')) {
							$('.BThDay.SThDay').addClass('sameD');
							$('.sameD').css({ background: '#0080ff', color: '#fff', 'font-size': '10px', 'padding-top': '5px', 'padding-left': '5px', 'text-align': 'left', position: 'relative'});
						}
						else if(!$('.bigCalend .dyItem').is('.BThDay, .SThDay')) {
							$('.BThDay').removeClass('sameD');
							$('.sameD').css({ background: '', color: '', 'font-size': '', 'padding-top': '', 'padding-left': '', 'text-align': '', position: ''});
						}
						
						// When Both Calendars have the Same Hour
						if($('.bigCalend .hourItem').is('.BThHour, .SThHour')) {
							$('.BThHour.SThHour').addClass('sameH');
							$('.sameH').css({ background: '#0080ff', color: '#fff', 'font-size': '10px', 'padding-top': '5px', 'padding-left': '5px', 'text-align': 'left', position: 'relative'});
						}
						else if(!$('.bigCalend .hourItem').is('.BThHour, .SThHour')) {
							$('.BThHour').removeClass('sameH');
							$('.sameH').css({ background: '', color: '', 'font-size': '', 'padding-top': '', 'padding-left': '', 'text-align': '', position: ''});
						}
					}

					// Dragging Calendar DateTimePicker Global Function
					function datetimepicker2Cal(tops, lefts, rights) {
						$(settingsCal.CalGrid + 0).show().css({ top: tops, left: lefts, right: rights });
						$('.TeleGridSecd').hide();
						$('.TeleGridHour').css({ 'margin-right': 0 });
						$('.dateTimepopUp').detach();
						settingsCal.tags.goHtml.addClass('closeCalend');
						$('#' + settingsCal.OptCalend).removeClass('valTh');
						$('#' + settingsCal.DateTPick).addClass('valTh');
						$(settingsCal.TeleCalenGr).removeClass('lessHeight bigCalend').addClass('smallCalend');
						$(settingsCal.TeleCalenGr).removeClass('lessHeight bigCalend').addClass('smallCalend');
						$('.inputPicker_mini_top .fa-calendar').css({ color: '#0A9A7A' }); 
						$('.telSHourPicker .fa-calendar').removeAttr('style'); 
						
						$('.dyItem').removeClass('addDayValue getday');
						
						$('.hourItem').removeClass('addHourValue');
						
						$('.BThDay').css({ background: '', color: '', 'font-size': '', 'padding-top': '', 'padding-left': '', 'text-align': '', position: ''});
						
						$('.BThHour').css({ background: '', color: '', 'font-size': '', 'padding-top': '', 'padding-left': '', 'text-align': '', position: ''});
							
						$('.SThDay').css({ background: '#0080ff', color: '#fff', 'font-size': '10px', 'padding-top': '5px', 'padding-left': '5px', 'text-align': 'left', position: 'relative'});
						
						$('.SThHour').css({ background: '#0080ff', color: '#fff', 'font-size': '10px', 'padding-top': '5px', 'padding-left': '5px', 'text-align': 'left', position: 'relative'});
						
						// When Both Calendars have the Same Day
						if($('.smallCalend .dyItem').is('.BThDay, .SThDay')) {
							$('.BThDay.SThDay').addClass('sameD');
							$('.sameD').css({ background: '#0080ff', color: '#fff', 'font-size': '10px', 'padding-top': '5px', 'padding-left': '5px', 'text-align': 'left', position: 'relative'});
						}
						else if(!$('.smallCalend .dyItem').is('.BThDay, .SThDay')){
							$('.SThDay').removeClass('sameD');
							$('.sameD').css({ background: '', color: '', 'font-size': '', 'padding-top': '', 'padding-left': '', 'text-align': '', position: ''});
						}
						
						// When Both Calendars have the Same Hour
						if($('.smallCalend .hourItem').is('.BThHour, .SThHour')) {
							$('.BThHour.SThHour').addClass('sameH');
							$('.sameH').css({ background: '#0080ff', color: '#fff', 'font-size': '10px', 'padding-top': '5px', 'padding-left': '5px', 'text-align': 'left', position: 'relative'});
						}
						else if(!$('.smallCalend .hourItem').is('.BThHour, .SThHour')) {
							$('.BThHour').removeClass('sameH');
							$('.sameH').css({ background: '', color: '', 'font-size': '', 'padding-top': '', 'padding-left': '', 'text-align': '', position: ''});
						}
					}
					// End TeleSales Calendar

					// Dragging The Calendar
					if(settingsCal.dragg == true) { CalenDragg(); }

					function CalenDragg() {

						$(settingsCal.CalGrid + 0).draggable();
						$.fn.DragTelCal = function(dataHideH, bodyTop) {

							return this.bind(drag, function() {

								let offLeft = $(this).offset().left;
								let offTop = $(this).offset().top;

								dataHideH.val(offTop);
								dataHideH.each(function() {

									// Moving The Calendar Around
									if($(this).val() <= settingsCal.value.teleCTop) { 

										datetimepicker2Cal();
										$('.inputPicker_mini_top .fa-calendar').css({ color: '#0A9A7A' }); 
										$('.telSHourPicker .fa-calendar').removeAttr('style'); 
										$('.CGrid_' + 0).addClass('DatePickerVal');

										$('.dyItem').removeClass('addDayValue'); 
										$('.hourItem').removeClass('addHourValue'); 
										$('.secondItem').removeClass('addMinuteValue');
										
										// Removes Padding Style
										$(settingsCal.TeleCalenGr).css({ padding: '' });

									} else { 

										telSHourPickerCal();
										$('.telSHourPicker .fa-calendar').css({ color: '#0A9A7A' }); 
										$('.inputPicker_mini_top .fa-calendar').removeAttr('style');
										$('.CGrid_' + 0).removeClass('DatePickerVal'); 

										$('.dyItem').removeClass('addDayValue'); 
										$('.hourItem').removeClass('addHourValue');
										
										// Removes Padding Style
										$(settingsCal.TeleCalenGr).css({ padding: '' });
										
										// DateTimePopUp Injection
										$(settingsCal.dateTpop).appendTo('.TeleSalesGridCalendar .table');
										
										// Clean DateTimePopUp
										$('.dateTimepopUp:nth(+1)').remove();
									}

									if($(this).val() >= bodyTop ) {

										$(settingsCal.tags.bodyTag).addClass('scrollHiden');
										$('.TeleSalesGridCalendar').addClass('lessHeight');
										$('.telSHourPicker .fa-calendar, .inputPicker_mini_top .fa-calendar').removeAttr('style');
										
										$('.dyItem').removeClass('addDayValue'); 
										$('.hourItem').removeClass('addHourValue'); 
										$('.secondItem').removeClass('addMinuteValue'); 
										
										// Adds Padding Style
										$(settingsCal.TeleCalenGr).css({ padding: '0' });

									} else {

										$(settingsCal.tags.bodyTag).removeClass('scrollHiden');
										$(settingsCal.TeleCalenGr).removeClass('lessHeight');
									}
								});
							});
						}
						$(settingsCal.CalGrid + 0).DragTelCal($('#hidePickHour'), 480.140625); // 535.140625
					}
					

					// Day Item to Big Calendar Click Event 
					$.fn.dyItemAction = function() {
						return this.on('click', '.bigCalend .dyItem', function(currentDateTime) {
							
							$('#datetimepicker3').val(NullHeader($(this).text().slice(0, -2)) + '/' + $('.ThisMonthTop').text() + '/' + $('.ThisYearTop').text() + ' ' + nowHour + ':' + nowMinute);

							if($('.hourItem').hasClass('addHourValue') && !$('.secondItem').hasClass('addMinuteValue')) {

								$('#datetimepicker3').val(NullHeader($(this).text().slice(0, -2)) + '/' + $('.ThisMonthTop').text() + '/' + $('.ThisYearTop').text() + ' ' + $('.addHourValue').text());

							} else if($('.secondItem').hasClass('addMinuteValue') && !$('.hourItem').hasClass('addHourValue')) {

								$('#datetimepicker3').val(NullHeader($(this).text().slice(0, -2)) + '/' + $('.ThisMonthTop').text() + '/' + $('.ThisYearTop').text() + ' ' + nowHour + ':' + $('.addMinuteValue').text());

							} else if($('.hourItem').hasClass('addHourValue') && $('.secondItem').hasClass('addMinuteValue')) {

								$('#datetimepicker3').val(NullHeader($(this).text().slice(0, -2)) + '/' + $('.ThisMonthTop').text() + '/' + $('.ThisYearTop').text() + ' ' + $('.addHourValue').text().slice(0, -2) + $('.addMinuteValue').text());
							}
							
							MonthTransf();
							
							$('.bigCalend .dyItem').removeClass('BThDay').css({ background: '', color: '', 'font-size': '', 'padding-top': '', 'padding-left': '', 'text-align': '', position: ''});
							
							$(this).addClass('BThDay').css({ background: '#0080ff', color: '#fff', 'font-size': '10px', 'padding-top': '5px', 'padding-left': '5px', 'text-align': 'left', position: 'relative'});
							
							var myDay = NullHeader($(this).text());
							var myYear = $('.ThisYearTop').text();
							var myMonth = GetNumericMonth($('.ThisMonthTop').text());

							$('.dateDay').text(myDay);
							$('.dateMonth').text(myMonth);
							$('.dateYear').text(myYear);

							currentDateTime = new Date(myYear + "-" + myMonth + "-" + myDay);
							// console.debug(myYear + "-" + myMonth + "-" + myDay);

							if (currentDateTime != null) {

								GeTelesalesQuota(currentDateTime);
							}
							
							actMonths();

							$('.dyItem').removeClass('addDayValue getday BlockItem sameD');
							$(this).addClass('addDayValue getday');

							// Rotation Limit Logic When the two are Igual or the First number is Greater then the Second One
							if($('#manuallyQueueLimit').html() >= $('#rotationLimit').html()) { 
							
								RotationLimit($(this));

							} else {

								$(this).removeClass('BlockItem').addClass('addDayValue');
								$('.manuallyQueueLimit, .rotationLimit').removeClass('Limit');
				    		}

							function RotationLimit(tLimit) {

								$('.dyItem').removeClass('BlockItem');

								tLimit.addClass('BlockItem').removeClass('addDayValue');
								
								$('.manuallyQueueLimit, .rotationLimit').addClass('Limit')
							}
						});
					}
					//$(document).dyItemAction();
					
					// Day Item to Small Calendar Click Event
					$.fn.dyItemActionSmall = function() {
						return this.on('click', '.smallCalend .dyItem', function() {
							
							$('#datetimepicker2').val(NullHeader($(this).text()) + '/' + $('.ThisMonthTop').text() + '/' + $('.ThisYearTop').text() + ' ' + nowHour + ':' + nowMinute);

							if($('.hourItem').hasClass('SThHour') && !$('.secondItem').hasClass('addMinuteValue')) {

								$('#datetimepicker2').val( NullHeader($(this).text()) + '/' + $('.ThisMonthTop').text() + '/' + $('.ThisYearTop').text() + ' ' + $('.SThHour').text() );

							} else if($('.secondItem').hasClass('addMinuteValue') && !$('.hourItem').hasClass('SThHour')) {

								$('#datetimepicker2').val(NullHeader($(this).text()) + '/' + $('.ThisMonthTop').text() + '/' + $('.ThisYearTop').text() + ' ' + nowHour + ':' + '00');

							} else if($('.hourItem').hasClass('SThHour') && $('.secondItem').hasClass('addMinuteValue')) {

								$('#datetimepicker2').val(NullHeader($(this).text()) + '/' + $('.ThisMonthTop').text() + '/' + $('.ThisYearTop').text() + ' ' + $('.SThHour').text());
							}
							
							MonthTransf();
							
							var myDay = NullHeader($(this).text());
							var myYear = $('.ThisYearTop').text();
							var myMonth = GetNumericMonth($('.ThisMonthTop').text());

							$('.dateDay').text(myDay);
							$('.dateMonth').text(myMonth);
							$('.dateYear').text(myYear);

							actMonths();
							
							$('.smallCalend .dyItem').removeClass('SThDay').css({ background: '', color: '', 'font-size': '', 'padding-top': '', 'padding-left': '', 'text-align': '', position: ''});
							
							$(this).addClass('SThDay').css({ background: '#0080ff', color: '#fff', 'font-size': '10px', 'padding-top': '5px', 'padding-left': '5px', 'text-align': 'left', position: 'relative'});

							$('.dyItem').removeClass('addDayValue getday BlockItem');
							$(this).addClass('addDayValue getday');

							// Ebables The Flag Button
							$('.flagBtn').removeClass('DisableElement');
							
							$('.dyItem').removeClass('addDayValue getday BlockItem sameD');
							$(this).addClass('addDayValue getday');
						});
					}
					$(document).dyItemActionSmall();
					
					// Hours Click Event Big Calendar
					$.fn.hourItemAction = function(hItm) {
						return this.on('click', '.bigCalend .hourItem', function() {

							$(hItm).removeClass('addHourValue sameH');
							$(this).addClass('addHourValue');
							
							if(!$('.secondItem').hasClass('addMinuteValue')) { $('.FSecond .secondItem').addClass('addMinuteValue'); }

							if(!$('.dyItem').hasClass('BThDay') && $('.secondItem').hasClass('addMinuteValue')) {

								$('#datetimepicker3').val(getDay + '/' + $('.ThisMonthTop').text() + '/' + $('.ThisYearTop').text() + ' ' + $(this).text().slice(0, -2) + $('.addMinuteValue').text());
								
							} else if($('.dyItem').hasClass('BThDay') && !$('.secondItem').hasClass('addMinuteValue')) {

								$('#datetimepicker3').val(NullHeader($('.BThDay').text().slice(0, -2)) + '/' + $('.ThisMonthTop').text() + '/' + $('.ThisYearTop').text() + ' ' + $(this).text());
								
							} else if(!$('.dyItem').hasClass('BThDay') && !$('.secondItem').hasClass('addMinuteValue')) {

								$('#datetimepicker3').val(getDay + '/' + $('.ThisMonthTop').text() + '/' + $('.ThisYearTop').text() + ' ' + $(this).text());

							} else if($('.dyItem').hasClass('BThDay') && $('.secondItem').hasClass('addMinuteValue')) {

								$('#datetimepicker3').val(NullHeader($('.BThDay').text().slice(0, -2)) + '/' + $('.ThisMonthTop').text() + '/' + $('.ThisYearTop').text() + ' ' + $(this).text().slice(0, -2) + $('.addMinuteValue').text());
							}
							MonthTransf();
							
							$('.bigCalend .hourItem').removeClass('BThHour').css({ background: '', color: '', 'font-size': '', 'padding-top': '', 'padding-left': '', 'text-align': '', position: ''});
							
							$(this).addClass('BThHour').css({ background: '#0080ff', color: '#fff', 'font-size': '10px', 'padding-top': '5px', 'padding-left': '5px', 'text-align': 'left', position: 'relative'});
						});
					}
					//$(document).hourItemAction('.hourItem');
					
					//  Hours Click Event Small Calendar
					$.fn.hourItemAction2 = function(hItm) {
						return this.on('click', '.smallCalend .hourItem', function() {

							$(hItm).removeClass('addHourValue sameH');
							$(this).addClass('addHourValue');

							if(!$('.dyItem').hasClass('SThDay') && $('.secondItem').hasClass('addMinuteValue')) {

								$('#datetimepicker2').val(getDay + '/' + $('.ThisMonthTop').text() + '/' + $('.ThisYearTop').text() + ' ' + $(this).text());

							} else if($('.dyItem').hasClass('SThDay') && !$('.secondItem').hasClass('addMinuteValue')) {

								$('#datetimepicker2').val(NullHeader($('.SThDay').text().slice(0, -2)) + '/' + $('.ThisMonthTop').text() + '/' + $('.ThisYearTop').text() + ' ' + $(this).text());
							} 
							
							else if(!$('.dyItem').hasClass('SThDay') && !$('.secondItem').hasClass('addMinuteValue')) {

								$('#datetimepicker2').val(getDay + '/' + $('.ThisMonthTop').text() + '/' + $('.ThisYearTop').text() + ' ' + $(this).text());
							} 
							
							else if($('.dyItem').hasClass('SThDay') && $('.secondItem').hasClass('addMinuteValue')) {
								
								$('#datetimepicker2').val(NullHeader($('.SThDay').text().slice(0, -2)) + '/' + $('.ThisMonthTop').text() + '/' + $('.ThisYearTop').text() + ' ' + $(this).text());
							}
							MonthTransf();
							
							$('.smallCalend .hourItem').removeClass('SThHour').css({ background: '', color: '', 'font-size': '', 'padding-top': '', 'padding-left': '', 'text-align': '', position: ''});
							
							$(this).addClass('SThHour').css({ background: '#0080ff', color: '#fff', 'font-size': '10px', 'padding-top': '5px', 'padding-left': '5px', 'text-align': 'left', position: 'relative'});
						});
					}
					$(document).hourItemAction2('.hourItem');
					
					// Minutes Click Event Big Calendar
					$.fn.minuteItemAction = function() {
						return this.on('click', '.secondItem', function() {

							$('.secondItem').removeClass('addMinuteValue');
							$(this).addClass('addMinuteValue');

							if(!$('.hourItem').hasClass('BThHour') && !$('.dyItem').hasClass('BThDay')) {

								$(dateHourPick).val(getDay + '/' + $('.ThisMonthTop').text() + '/' + $('.ThisYearTop').text() + ' ' + nowHour + ':' + $(this).text());

							} else if($('.hourItem').hasClass('BThHour') && !$('.dyItem').hasClass('BThDay')) {

								$(dateHourPick).val(getDay + '/' + $('.ThisMonthTop').text() + '/' + $('.ThisYearTop').text() + ' ' + $('.BThHour').text().slice(0, -2) + $(this).text());

							} else if($('.hourItem').hasClass('BThHour') && $('.dyItem').hasClass('BThDay')) {

								$(dateHourPick).val(NullHeader($('.BThDay').text().slice(0, -2)) + '/' + $('.ThisMonthTop').text() + '/' + $('.ThisYearTop').text() + ' ' + $('.BThHour').text().slice(0, -2) + $(this).text());
							}
							
							MonthTransf();
						});
					}
					$(document).minuteItemAction();

					EmptyItem();
					$(document).on('click', '.next-month, .prev-month', function() { 

						EmptyItem(); 

						$('.dyItem').each(function() { 

							if($(this).html() != '') { $(this).attr({ 'data-date': $(this).html()}) 

							} else { $(this).removeAttr('data-date')}

						});
						//trPopUps();
					});
					//trPopUps();

					// Mouseover Calendar Mini-PopUp Day Item Tr and Td
					$.fn.TrOver = function() {
						return this.on('mouseover', '*', function() {

							daysOver($(this), $('.dateTimepopUp'));
						});
					}
					$(document).TrOver();

					// MouseLeave Calendar Mini-PopUp Day Item Tr and Td
					$.fn.TrLeave = function() {
						return this.on('mouseleave', '*', function() {

							daysLeave($(this), $('.dateTimepopUp'));
						});
					}
					$(document).TrLeave();

					// Css Injectoion for Calendar Mini-PopUp
					let colStyle = '<style type="text/css">' + settingsCal.cssInject + '</style>';
					$(colStyle).appendTo(document.head);
				}
				$(document).RunTeleGridcalendar();

				$.fn.MonthTop = function() {
					return this.on('click', '.ThisMonthTop', function() {

						$('.ThisMonthTopfloor').slideToggle(100); 
						$('.ThisYearTopfloor').hide();
					});
				}
				$(document).MonthTop();

				// Drop Month Global Click Event
				$.fn.dropMonth = function() {
					return this.on('click', '*', function() {

						let Macth = $('.ThisMonthTop').html();

						let Mbh = 'MonthBehind';
						let aMt = 'aHeadMonth';

						// Ckeck For a Class
						let findClass = $(this)[0].className;

						switch(Macth) {

							// Month of January
							case 'January':
								$('.decDrop').addClass(Mbh);
								$('.fabDrop').addClass(aMt);
								$('.janDrop').addClass('desabledM');
								if($(this).hasClass('marchDrop')) { overCalendar(2) }
								else if($(this).hasClass('aprilDrop')) { overCalendar(3) }
								else if($(this).hasClass('mayDrop')) { overCalendar(4) }
								else if($(this).hasClass('juneDrop')) { overCalendar(5) }
								else if($(this).hasClass('julyDrop')) { overCalendar(6) }
								else if($(this).hasClass('augDrop')) { overCalendar(7) }	
								else if($(this).hasClass('sepDrop')) { overCalendar(8) }
								else if($(this).hasClass('octDrop')) { overCalendar(9) }
								else if($(this).hasClass('novDrop')) { overCalendar(10) }
								break;

							// Month of February
							case 'February':
								$('.janDrop').addClass(Mbh);
								$('.marchDrop').addClass(aMt);
								$('.fabDrop').addClass('desabledM');
								if($(this).hasClass('aprilDrop')) { overCalendar(2) }
								else if($(this).hasClass('mayDrop')) { overCalendar(3) }
								else if($(this).hasClass('juneDrop')) { overCalendar(4) }
								else if($(this).hasClass('julyDrop')) { overCalendar(5) }
								else if($(this).hasClass('augDrop')) { overCalendar(6) }
								else if($(this).hasClass('sepDrop')) { overCalendar(7) }	
								else if($(this).hasClass('octDrop')) { overCalendar(8) }
								else if($(this).hasClass('novDrop')) { overCalendar(9) }
								else if($(this).hasClass('decDrop')) { overCalendar(10) }	
								break;

							// Month of March
							case 'March':
								$('.fabDrop').addClass(Mbh);
								$('.aprilDrop').addClass(aMt);
								$('.marchDrop').addClass('desabledM');
								if($(this).hasClass('mayDrop')) { overCalendar(2) }
								else if($(this).hasClass('juneDrop')) { overCalendar(3) }
								else if($(this).hasClass('julyDrop')) { overCalendar(4) }
								else if($(this).hasClass('augDrop')) { overCalendar(5) }
								else if($(this).hasClass('sepDrop')) { overCalendar(6) }
								else if($(this).hasClass('octDrop')) { overCalendar(7) }	
								else if($(this).hasClass('novDrop')) { overCalendar(8) }
								else if($(this).hasClass('decDrop')) { overCalendar(9) }
								else if($(this).hasClass('janDrop')) { overCalendar(-2) }
								break;

							// Month of April
							case 'April':
								$('.marchDrop').addClass(Mbh);
								$('.mayDrop').addClass(aMt);
								$('.aprilDrop').addClass('desabledM');
								if($(this).hasClass('juneDrop')) { overCalendar(2) }
								else if($(this).hasClass('julyDrop')) { overCalendar(3) }
								else if($(this).hasClass('augDrop')) { overCalendar(4) }
								else if($(this).hasClass('sepDrop')) { overCalendar(5) }
								else if($(this).hasClass('octDrop')) { overCalendar(6) }
								else if($(this).hasClass('novDrop')) { overCalendar(7) }	
								else if($(this).hasClass('decDrop')) { overCalendar(8) }
								else if($(this).hasClass('janDrop')) { overCalendar(-3) }
								else if($(this).hasClass('fabDrop')) { overCalendar(-2) }
								break;

							// Month of May
							case 'May':
								$('.aprilDrop').addClass(Mbh);
								$('.juneDrop').addClass(aMt);
								$('.mayDrop').addClass('desabledM');
								if($(this).hasClass('julyDrop')) { overCalendar(2) }
								else if($(this).hasClass('augDrop')) { overCalendar(3) }
								else if($(this).hasClass('sepDrop')) { overCalendar(4) }
								else if($(this).hasClass('octDrop')) { overCalendar(5) }
								else if($(this).hasClass('sepDrop')) { overCalendar(6) }
								else if($(this).hasClass('novDrop')) { overCalendar(7) }	
								else if($(this).hasClass('decDrop')) { overCalendar(8) }
								else if($(this).hasClass('janDrop')) { overCalendar(-4) }
								else if($(this).hasClass('fabDrop')) { overCalendar(-3) }
								else if($(this).hasClass('marchDrop')) { overCalendar(-2) }	
								break;

							// Month of June
							case 'June':
								$('.mayDrop').addClass(Mbh);
								$('.julyDrop').addClass(aMt);
								$('.juneDrop').addClass('desabledM');
								if($(this).hasClass('augDrop')) { overCalendar(2) }
								else if($(this).hasClass('sepDrop')) { overCalendar(3) }
								else if($(this).hasClass('octDrop')) { overCalendar(4) }
								else if($(this).hasClass('novDrop')) { overCalendar(5) }
								else if($(this).hasClass('decDrop')) { overCalendar(6) }
								else if($(this).hasClass('janDrop')) { overCalendar(-5) }	
								else if($(this).hasClass('fabDrop')) { overCalendar(-4) }
								else if($(this).hasClass('marchDrop')) { overCalendar(-3) }
								else if($(this).hasClass('aprilDrop')) { overCalendar(-2) }
								break;

							// Month of July
							case 'July':
								$('.juneDrop').addClass(Mbh);
								$('.augDrop').addClass(aMt);
								$('.julyDrop').addClass('desabledM');
								if($(this).hasClass('sepDrop')) { overCalendar(2) }
								else if($(this).hasClass('octDrop')) { overCalendar(3) }
								else if($(this).hasClass('novDrop')) { overCalendar(4) }
								else if($(this).hasClass('decDrop')) { overCalendar(5) }
								else if($(this).hasClass('janDrop')) { overCalendar(-6) }
								else if($(this).hasClass('fabDrop')) { overCalendar(-5) }	
								else if($(this).hasClass('marchDrop')) { overCalendar(-4) }
								else if($(this).hasClass('aprilDrop')) { overCalendar(-3) }
								else if($(this).hasClass('mayDrop')) { overCalendar(-2) }
								break;

							// Month of August
							case 'August':
								$('.julyDrop').addClass(Mbh);
								$('.sepDrop').addClass(aMt);
								$('.augDrop').addClass('desabledM');
								if($(this).hasClass('octDrop')) { overCalendar(2) }
								else if($(this).hasClass('novDrop')) { overCalendar(3) }
								else if($(this).hasClass('decDrop')) { overCalendar(4) }
								else if($(this).hasClass('janDrop')) { overCalendar(-7) }
								else if($(this).hasClass('fabDrop')) { overCalendar(-6) }
								else if($(this).hasClass('marchDrop')) { overCalendar(-5) }	
								else if($(this).hasClass('aprilDrop')) { overCalendar(-4) }
								else if($(this).hasClass('mayDrop')) { overCalendar(-3) }
								else if($(this).hasClass('juneDrop')) { overCalendar(-2) }
								break;

							// Month of September
							case 'September':
								$('.augDrop').addClass(Mbh);
								$('.octDrop').addClass(aMt);
								$('.sepDrop').addClass('desabledM');
								if($(this).hasClass('novDrop')) { overCalendar(2) }
								else if($(this).hasClass('decDrop')) { overCalendar(3) }
								else if($(this).hasClass('janDrop')) { overCalendar(-8) }
								else if($(this).hasClass('fabDrop')) { overCalendar(-7) }
								else if($(this).hasClass('marchDrop')) { overCalendar(-6) }
								else if($(this).hasClass('aprilDrop')) { overCalendar(-5) }	
								else if($(this).hasClass('mayDrop')) { overCalendar(-4) }
								else if($(this).hasClass('juneDrop')) { overCalendar(-3) }
								else if($(this).hasClass('julyDrop')) { overCalendar(-2) }
								break;

							// Month of October
							case 'October':
								$('.sepDrop').addClass(Mbh);
								$('.novDrop').addClass(aMt);
								$('.octDrop').addClass('desabledM');
								if($(this).hasClass('decDrop')) { overCalendar(2) }
								else if($(this).hasClass('janDrop')) { overCalendar(-9) }
								else if($(this).hasClass('fabDrop')) { overCalendar(-8) }
								else if($(this).hasClass('marchDrop')) { overCalendar(-7) }
								else if($(this).hasClass('aprilDrop')) { overCalendar(-6) }
								else if($(this).hasClass('mayDrop')) { overCalendar(-5) }	
								else if($(this).hasClass('juneDrop')) { overCalendar(-4) }
								else if($(this).hasClass('julyDrop')) { overCalendar(-3) }
								else if($(this).hasClass('augDrop')) { overCalendar(-2) }
								break;

							// Month of November
							case 'November':
								$('.octDrop').addClass(Mbh);
								$('.decDrop').addClass(aMt);
								$('.novDrop').addClass('desabledM');
								if($(this).hasClass('janDrop')) { overCalendar(-10) }
								else if($(this).hasClass('fabDrop')) { overCalendar(-9) }
								else if($(this).hasClass('marchDrop')) { overCalendar(-8) }
								else if($(this).hasClass('aprilDrop')) { overCalendar(-7) }
								else if($(this).hasClass('mayDrop')) { overCalendar(-6) }
								else if($(this).hasClass('juneDrop')) { overCalendar(-5) }	
								else if($(this).hasClass('julyDrop')) { overCalendar(-4) }
								else if($(this).hasClass('augDrop')) { overCalendar(-3) }
								else if($(this).hasClass('sepDrop')) { overCalendar(-2) }
								break;

							// Month of December
							case 'December':
								$('.novDrop').addClass(Mbh);
								$('.janDrop').addClass(aMt);
								$('.decDrop').addClass('desabledM');
								if($(this).hasClass('fabDrop')) { overCalendar(-10) }
								else if($(this).hasClass('marchDrop')) { overCalendar(-9) }
								else if($(this).hasClass('aprilDrop')) { overCalendar(-8) }
								else if($(this).hasClass('mayDrop')) { overCalendar(-7) }
								else if($(this).hasClass('juneDrop')) { overCalendar(-6) }
								else if($(this).hasClass('julyDrop')) { overCalendar(-5) }	
								else if($(this).hasClass('augDrop')) { overCalendar(-4) }
								else if($(this).hasClass('sepDrop')) { overCalendar(-3) }
								else if($(this).hasClass('octDrop')) { overCalendar(-2) }
								break;
						}

						// Goes To the Month Ahead
						if(findClass.indexOf('aHeadMonth') != -1) { overCalendar(1) } 
						
						// Goes To the Month Behind	
						if(findClass.indexOf('MonthBehind') != -1) { overCalendar(-1) }
						// Ends Months Floor

						// Start Years Floor
						if($(this).hasClass('ThisYearTop')) {
							$('.ThisYearTopfloor').slideToggle(100);
							$('.ThisMonthTopfloor').hide();

							// Promise Ajax Call
							$.ajax({
								type: 'GET',
								cache: false,
								url: '/assets/js/Telesales/GridTeleSalesCalendar.json',
								datatype: 'json',

								success: function(gridtelecalendataM) { $(document).InjeYearM(gridtelecalendataM) }
							});

							// Years Data Injection
							$.fn.InjeYearM = function(gridtelecalendataM) {

								let TMFYear = '';
								for( let i in gridtelecalendataM.baseYears) {

									TMFYear += '<span class="dropYrM yr-' + gridtelecalendataM.baseYears[i].year + '" id="yr-' + gridtelecalendataM.baseYears[i].year + '">' + gridtelecalendataM.baseYears[i].year + '</span>';
								}
								$(TMFYear).appendTo('.ThisYearTopfloor');

								$('.dropYrM').each(function() { $('.dropYrM:nth-child(+n' + settingsCal.yearLimit + ')').detach() });

								let selctTemp = $('<span/>', { class: 'YearCatch' }).html($('.ThisYearTop').html()).appendTo('.selectedYM');
								$('.selectedYM .YearCatch:nth-child(+n2)').detach();
							}
						}
						// Ends Years Floor

						// Check For an Id
						let ThisId = $(this).attr('id');
						let tYr = 'yr-';

						// Reset Years 2000
						const idyr2000 = ThisId == tYr + 2000 ? AddPlusYear(2000, 2000, 0) : '';

						// Reset Years 2010
						const idyr2010 = ThisId == tYr + 2010 ? AddPlusYear(2010, 2010, 0) : '';

						// Reset Years 2020
						const idyr2020 = ThisId == tYr + 2020 ? AddPlusYear(2020, 2020, 0) : '';

						// Reset Years 2030
						const idyr2030 = ThisId == tYr + 2030 ? AddPlusYear(2030, 2030, 0) : '';

						// Reset Years 2040
						const idyr2040 = ThisId == tYr + 2040 ? AddPlusYear(2040, 2040, 0) : '';

						// Reset Years 2050
						const idyr2050 = ThisId == tYr + 2050 ? AddPlusYear(2050, 2050, 0) : '';

						// Reset Years 2060
						const idyr2060 = ThisId == tYr + 2060 ? AddPlusYear(2060, 2060, 0) : '';

						// Reset Years 2070
						const idyr2070 = ThisId == tYr + 2070 ? AddPlusYear(2070, 2070, 0) : '';

					});
				}
				$(document).dropMonth();
				
				
				$(document).on('click', '.dropMth', function() {

					$('.ThisMonthTop').text( $(this).text());

					$('.dyItem').removeClass('today PrevDays'); 

					$('tr').removeClass('CurrentRow');

					$('.CurrentRow').removeClass('all');

					$('.all .dyItem').removeClass('PrevDays');

				});
				
				$.fn.yearTCk = function() {
				    return this.on('click', '*', function() {

				    	let id = $(this).attr('id');
						
						// Year 2000 On Change
				    	if(id == 'yr-2000') {

				    		const y2000 = $(settingsCal.YTop).html().match(2010) ? runYears(-10 * 12, $(this)) : '';

				    		const y2000A = $(settingsCal.YTop).html().match(2020) ? runYears(-20 * 12, $(this)) : '';

				    		const y2000B = $(settingsCal.YTop).html().match(2030) ? runYears(-30 * 12, $(this)) : '';

				    		const y2000C = $(settingsCal.YTop).html().match(2040) ? runYears(-40 * 12, $(this)) : '';

				    		const y2000D = $(settingsCal.YTop).html().match(2050) ? runYears(-50 * 12, $(this)) : '';

				    		const y2000E = $(settingsCal.YTop).html().match(2060) ? runYears(-60 * 12, $(this)) : '';

				    		const y2000F = $(settingsCal.YTop).html().match(2070) ? runYears(-70 * 12, $(this)) : '';
				    	}
						
						// Year 2010 On Change
				    	if(id == 'yr-2010') {

				    		const y2010 = $(settingsCal.YTop).html().match(2000) ? runYears(10 * 12, $(this)) : '';

							const y2010A = $(settingsCal.YTop).html().match(2020) ? runYears(-10 * 12, $(this)) : '';

							const y2010B = $(settingsCal.YTop).html().match(2030) ? runYears(-20 * 12, $(this)) : '';

				   			const y2010C = $(settingsCal.YTop).html().match(2040) ? runYears(-30 * 12, $(this)) : '';

				    		const y2010D = $(settingsCal.YTop).html().match(2050) ? runYears(-40 * 12, $(this)) : '';

				    		const y2010E = $(settingsCal.YTop).html().match(2060) ? runYears(-50 * 12, $(this)) : '';

				    		const y2010F = $(settingsCal.YTop).html().match(2070) ? runYears(-60 * 12, $(this)) : '';
				    	}
						
						// Year 2020 On Change
				    	if(id == 'yr-2020') { 

				    		const y2020 = $(settingsCal.YTop).html().match(2000) ? runYears(20 * 12, $(this)) : '';

				    		const y2020A = $(settingsCal.YTop).html().match(2010) ? runYears(10 * 12, $(this)) : '';

				    		const y2020B = $(settingsCal.YTop).html().match(2030) ? runYears(-10 * 12, $(this)) : '';

				    		const y2020C = $(settingsCal.YTop).html().match(2040) ? runYears(-20 * 12, $(this)) : '';

				    		const y2020D = $(settingsCal.YTop).html().match(2050) ? runYears(-30 * 12, $(this)) : '';

				    		const y2020E = $(settingsCal.YTop).html().match(2060) ? runYears(-40 * 12, $(this)) : '';

				    		const y2020F = $(settingsCal.YTop).html().match(2070) ? runYears(-50 * 12, $(this)) : '';
				    	}
						
						// Year 2030 On Change
				    	if(id == 'yr-2030') {

				    		const y2030 = $(settingsCal.YTop).html().match(2000) ? runYears(30 * 12, $(this)) : '';

							const y2030A = $(settingsCal.YTop).html().match(2010) ? runYears(20 * 12, $(this)) : '';

				    		const y2030B = $(settingsCal.YTop).html().match(2020) ? runYears(10 * 12, $(this)) : '';

				    		const y2030C = $(settingsCal.YTop).html().match(2040) ? runYears(-10 * 12, $(this)) : '';

				    		const y2030D = $(settingsCal.YTop).html().match(2050) ? runYears(-20 * 12, $(this)) : '';

				    		const y2030E = $(settingsCal.YTop).html().match(2060) ? runYears(-30 * 12, $(this)) : '';

				    		const y2030F = $(settingsCal.YTop).html().match(2070) ? runYears(-40 * 12, $(this)) : '';
				    	}
						
						// Year 2040 On Change
				    	if(id == 'yr-2040') {

				    		const y2040 = $(settingsCal.YTop).html().match(2000) ? runYears(40 * 12, $(this)) : '';

							const y2040A = $(settingsCal.YTop).html().match(2010) ? runYears(30 * 12, $(this)) : '';

				    		const y2040B = $(settingsCal.YTop).html().match(2020) ? runYears(20 * 12, $(this)) : '';

				    		const y2040C = $(settingsCal.YTop).html().match(2030) ? runYears(10 * 12, $(this)) : '';

				    		const y2040D = $(settingsCal.YTop).html().match(2050) ? runYears(-10 * 12, $(this)) : '';

				    		const y2040E = $(settingsCal.YTop).html().match(2060) ? runYears(-20 * 12, $(this)) : '';

				    		const y2040F = $(settingsCal.YTop).html().match(2070) ? runYears(-30 * 12, $(this)) : '';
				    	}
						
						// Year 2050 On Change
				    	if(id == 'yr-2050') {

				    		const y2050 = $(settingsCal.YTop).html().match(2000) ? runYears(50 * 12, $(this)) : '';

							const y2050A = $(settingsCal.YTop).html().match(2010) ? runYears(40 * 12, $(this)) : '';

				    		const y2050B = $(settingsCal.YTop).html().match(2020) ? runYears(30 * 12, $(this)) : '';

				    		const y2050C = $(settingsCal.YTop).html().match(2030) ? runYears(20 * 12, $(this)) : '';

				    		const y2050D = $(settingsCal.YTop).html().match(2040) ? runYears(10 * 12, $(this)) : '';

				    		const y2050E = $(settingsCal.YTop).html().match(2060) ? runYears(-10 * 12, $(this)) : '';

				    		const y2050F = $(settingsCal.YTop).html().match(2070) ? runYears(-20 * 12, $(this)) : '';
				    	}
						
						// Year 2060 On Change
				    	if(id == 'yr-2060') {

				    		const y2060 = $(settingsCal.YTop).html().match(2000) ? runYears(60 * 12, $(this)) : '';

							const y2060A = $(settingsCal.YTop).html().match(2010) ? runYears(50 * 12, $(this)) : '';

				    		const y2060B = $(settingsCal.YTop).html().match(2020) ? runYears(40 * 12, $(this)) : '';

				    		const y2060C = $(settingsCal.YTop).html().match(2030) ? runYears(30 * 12, $(this)) : '';

				    		const y2060D = $(settingsCal.YTop).html().match(2040) ? runYears(20 * 12, $(this)) : '';

				    		const y2060E = $(settingsCal.YTop).html().match(2050) ? runYears(10 * 12, $(this)) : '';

				    		const y2060F = $(settingsCal.YTop).html().match(2070) ? runYears(-10 * 12, $(this)) : '';
				    	}
						
						// Year 2070 On Change
				    	if(id == 'yr-2070') {

				    		const y2070 = $(settingsCal.YTop).html().match(2000) ? runYears(70 * 12, $(this)) : '';

							const y2070A = $(settingsCal.YTop).html().match(2010) ? runYears(60 * 12, $(this)) : '';

				    		const y2070B = $(settingsCal.YTop).html().match(2020) ? runYears(50 * 12, $(this)) : '';

				    		const y2070C = $(settingsCal.YTop).html().match(2030) ? runYears(40 * 12, $(this)) : '';

				    		const y2070D = $(settingsCal.YTop).html().match(2040) ? runYears(30 * 12, $(this)) : '';

				    		const y2070E = $(settingsCal.YTop).html().match(2050) ? runYears(20 * 12, $(this)) : '';

				    		const y2070F = $(settingsCal.YTop).html().match(2060) ? runYears(10 * 12, $(this)) : '';
				    	}
				    });
				}
				$(document).yearTCk();

				// On Change Years Span
				//$(document).on('DOMSubtreeModified', '.ThisYearTop', function() { trPopUps(); });

				function runYears(num, tText) {
					navigationHandler(num);
					EmptyItem();
					$('.ThisYearTop').html(tText.html());
				}
				
				// Global Check Click
				$.fn.DropsMany = function() {
					return this.on('click', '*', function() {

						let findClass = $(this)[0].className;

						if(findClass.indexOf('dropYrM') != -1) {

							$('.dropYrM').removeClass('BckYear');
							$(this).addClass('BckYear');
							$('.ThisYearTop').html($(this).html()).addClass('FromYr');

						} else if(findClass.indexOf('BckYear') != -1) {
							$('.dropYr').detach()
							$('.dropYrM').removeClass('BckYear')

						} else if(findClass.indexOf('FromYr') != -1) {

							if($('.ThisYearTop').html().match('2020')) { overCalendar(12) }
							$('.ThisYearTop').removeClass('FromYr')

						} else if(findClass.indexOf('dropYr') != -1) {

							$('.ThisYearTop').html($(this).html()).removeClass('FromYr');
							$('.dropYr').detach();
							$('.ThisYearTopfloor').slideUp(100);
						}
					});
				}
				$(document).DropsMany();

				// Removes popUp Date Time 
				$('#DropPicker_0, #DropPicker_1, #DropPicker_2').find('.dateTimepopUp').remove();

				// Add Class on Date Picker Drop Down
				$('.DatePickerDrop').addClass('caleLeads');

				$('#hidePickHour, #hiddenId1, #hiddenId2, #hiddenId3').remove();
				
				// Close Button Injection
				//$('.TeleSalesGridCalendar .TeleGridDays').before(settingsCal.closeBt);

				$(document).on('click', '.closeC', function() { 
				
					$(settingsCal.TeleCalenGr).hide(); 
				});
				
				// Save Button ToolTip MouseOver
				$(document).on('mouseover', '.closeC, .closeCsave', function() {$('.closeC_Tip').css({ display: 'flex' }); });
				
				// Save Button TooTip MouseLeave
				$(document).on('mouseleave', '.closeC, .closeCsave', function() { $('.closeC_Tip').hide(); });
				
				// Save Button ToolTip MouseOver
				$(document).on('mouseover', '.closeCsave', function() { $('.closeC_TipSave').css({ display: 'flex' }); });
				
				// Save Button TooTip MouseLeave
				$(document).on('mouseleave', '.closeCsave', function() { $('.closeC_TipSave').hide(); });
				
				$(document).on('mouseover', '#datetimepicker3, #datetimepicker2', function() { $('html').removeClass('closeCalend'); }); 
				
				
				dayInject();
				
				$.fn.dayInject = function() {
					
					return this.on('click', '.next-month, .prev-month, .dropMth, .dropYrM', function() { dayInject(); });
				}
				$(document).dayInject();

				function dayInject(telem) {
					
					//$('<span class="DItBack"></span><span class="DItem"></span>').appendTo('.dyItem');

					//$('<span class="DItem"></span>').appendTo('.dyItem');
				
					$('.dyItem').each(function() { $('.DItem', this).text( $(this).text() ); });
				}
				
			}
		});
		
		let RunCalenTop = new RunCalen();

	}
	$(document).GridDefaultCalendar();

});

function daysOver(content, dateTpoup) {
	// Trs
	const trSVal = content.hasClass('trS') ? dateTpoup.addClass('trchild2') : '';
	const trTVal = content.hasClass('trT') ? dateTpoup.addClass('trchild3') : '';
	const trFVal = content.hasClass('trF') ? dateTpoup.addClass('trchild4') : '';
	const trFiVal = content.hasClass('trFi') ? dateTpoup.addClass('trchild5') : '';
	const trStVal = content.hasClass('trSt') ? dateTpoup.addClass('trchild6') : '';
	const trSevVal = content.hasClass('trSev') ? dateTpoup.addClass('trchild7') : '';
	// Tds
	const tdFVal = content.hasClass('tdF') ? dateTpoup.addClass('TdFirstChild') : '';
	const tdSVal = content.hasClass('tdS') ? dateTpoup.addClass('TdSecondChild') : '';
	const tdTVal = content.hasClass('tdT') ? dateTpoup.addClass('TdThirdChild') : '';
	const tdFtVal = content.hasClass('tdFt') ? dateTpoup.addClass('TdFourthChild') : '';
	const tdFiVal = content.hasClass('tdFi') ? dateTpoup.addClass('TdFithChild') : '';
	const tdSixVal = content.hasClass('tdSix') ? dateTpoup.addClass('TdSixChild') : '';
	const tdSeVal = content.hasClass('tdSev') ? dateTpoup.addClass('TdSevenChild') : '';
}

function daysLeave(content, dateTpoup) {
	// Tds
	const trSVal = content.hasClass('trS') ? dateTpoup.removeClass('trchild2') : '';
	const trTVal = content.hasClass('trT') ? dateTpoup.removeClass('trchild3') : '';
	const trFVal = content.hasClass('trF') ? dateTpoup.removeClass('trchild4') : '';
	const trFiVal = content.hasClass('trFi') ? dateTpoup.removeClass('trchild5') : '';
	const trStVal = content.hasClass('trSt') ? dateTpoup.removeClass('trchild6') : '';
	const trSevVal = content.hasClass('trSev') ? dateTpoup.removeClass('trchild7') : '';
	// Trs
	const tdFVal = content.hasClass('tdF') ? dateTpoup.removeClass('TdFirstChild').hide() : '';
	const tdSVal = content.hasClass('tdS') ? dateTpoup.removeClass('TdSecondChild').hide() : '';
	const tdTVal = content.hasClass('tdT') ? dateTpoup.removeClass('TdThirdChild').hide() : '';
	const tdFtVal = content.hasClass('tdFt') ? dateTpoup.removeClass('TdFourthChild').hide() : '';
	const tdFiVal = content.hasClass('tdFi') ? dateTpoup.removeClass('TdFithChild').hide() : '';
	const tdSixVal = content.hasClass('tdSix') ? dateTpoup.removeClass('TdSixChild').hide() : '';
	const tdSeVal = content.hasClass('tdSev') ? dateTpoup.removeClass('TdSevenChild').hide() : '';
}

function MonthTransf() {

	// let dateHourPick = '#datetimepicker3';
	let dateHourPick = '.valTh';

	$(dateHourPick).val(function() { 
		return $(this).val()
			.replace('January', '01')
			.replace('February', '02')
			.replace('March', '03')
			.replace('April', '04')
			.replace('May', '05')
			.replace('June', '06')
			.replace('July', '07')
			.replace('August', '08')
			.replace('September', '09')
			.replace('October', '10')
			.replace('November', '11')
			.replace('December', '12');
	});
}

// ToDo: Hack: I don't think there is a number version of month, so will translate string month to 'number' month
function GetNumericMonth(myMonth) {
    switch (myMonth) {
        case 'January':
            return '01';
			
        case 'February':
            return '02';
			
        case 'March':
            return '03';
			
        case 'April':
            return '04';
			
        case 'May':
            return '05';
			
        case 'June':
            return '06';
			
        case 'July':
            return '07';
			
        case 'August':
            return '08';
			
        case 'September':
            return '09';
			
        case 'October':
            return '10';
			
        case 'November':
            return '11';
			
        case 'December':
            return '12';
    }
}

function MonthDrop() {

	$('.ThisMonthTopfloor').hide();
	$('.dyItem').each(function() { 

		if($(this).html() != '') { $(this).attr({ 'data-date': $(this).html() }) 

		} else { $(this).removeAttr('data-date')}

	});
}

function overCalendar(loop) {
	navigationHandler(loop) // Runs Month Ahead or Behind
	EmptyItem(); 
	//trPopUps();
	MonthDrop();
}

function AddPlusYear(year, toYear, nItems) {

	$('.dropYrM').nextAll('.dropYr').detach();

	let TMFYearVal = year;
	let TMFYearId = TMFYearVal;

	for( let y = 0; y < 11; y++ ) { $('.yr-' + toYear).after('<span class="dropYr Y' + toYear + '"></span>') }

	$('.dropYr').each(function() {

		$(this).html(TMFYearVal).attr({ id: 'Yr_' + TMFYearId }); 
		TMFYearVal++; TMFYearId++;

		$('.dropYr:nth-child(n+' + nItems + ')').remove();

		MatchYear('selctedDY', $('.ThisYearTop'));

	});
}

function MatchYear(thisYSel, TopYt) {

	let sYc = thisYSel;
	let TopY = TopYt;

	// Year 2019
	const Y2019 = TopY.html().match('2019') ? $('#Yr_2019').addClass(sYc) : '';

	// Year 2021
	const Y2021 = TopY.html().match('2021') ? $('#Yr_2021').addClass(sYc) : '';
}