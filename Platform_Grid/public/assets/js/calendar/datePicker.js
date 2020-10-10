
// New Date Event
let ddt = new Date();

// Months Content
let content = 'January February March April May June July August September October November December'.split(' ');

// Months Numeric Content
let contentNum = ['/01/', '/02/', '/03/', '/04/', '/05/', '/06/', '/07/', '/08/', '/09/', '/10/', '/11/', '/12/'];

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

    // Top Months Numeric Content
    let $mbxNum = $('<span/>', { class: 'MonthNum'});

    // Top Year Content
    let ybx = $('<span/>', { class: 'ThisYearTop' });

    $mbx.html(content[month] + '').attr({ 'data-month': content[month]}).append($mbxNum);
    $mbxNum.html(contentNum[month] + '').css({ display: 'none'});

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

			TeleCalenGr: '.TeleSalesGridCalendar',

			CalGrid: '.CGrid_',

			DateTPick: 'datepicker',
			
			YTop: '.ThisYearTop'
		};

		// Propreties Setitngs / Propreties Override
		let settingsCal = $.extend( true, {
			
			// Running Calendar True / False
			runCalendar: true,

			closeBt: '<span class="closeC fa">' + '<span class="closeC_Tip">' + STip + '</span>' + '</span>',

			timeTemp: '<div class="MandY_Floor" style="float: left"></div><div class="Time_Floor"></div>',

			NullHeader: function(e) { const NulNumber = e < 10 ? e = '0' + e : e = '' + e; return e; }

		}, DefaultOptions, CalendarOPtions );
		
		function RunCalen() { if(settingsCal.runCalendar == true ) { this.calendarType(); }}
		
		$.extend( RunCalen.prototype, {

			calendarType: () => {
				
				//.telSHourPicker
				// Calendar Hour Elements Injection
				let TeleSalesGridCalendar = $(settingsCal.tags.divTag, { class: 'TeleSalesGridCalendar' }).appendTo('.telSHourPicker')
						.append($(settingsCal.tags.divTag, { class: 'TeleGridDays', id: 'Ts1' }))
						.append($(settingsCal.tags.divTag, { class: 'TeleGridHour', id: 'Ts2' }))

				// Dynamical Classes for TeleGridCalendar
				$.fn.TeleCalMult = function(dataGrid) {
					return this.each(function() {

						$(this).addClass(dataGrid + settingsCal.value.GridCVal);
						settingsCal.value.GridCVal++;
					});
				}
				$(settingsCal.TeleCalenGr).TeleCalMult('CGrid_');


				$.fn.RunTeleGridcalendar = function() {
					
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
					$(document).calenOver();

					// Adding Class 'closeCalend' on mouseleave
					$.fn.calenLeave = function() {
						return this.on('mouseleave', settingsCal.TeleCalenGr, function() {
							settingsCal.tags.goHtml.addClass('closeCalend')
						});
					}
					$(document).calenLeave();

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
					$.fn.GridGlTele = () => {
						return this.on('click', '*', function() {

							let fClass = $(this)[0].className;
							
							// Runs Previous Month
							const prevMonth = fClass.indexOf('prev-month') != -1 ? navigationHandler(-1) : '';
							
							// Runs Next Month
							const nextMonth = fClass.indexOf('next-month') != -1 ? navigationHandler(1) && $('tr').removeClass('CurrentRow') : '';
						});
					}
					$(document).GridGlTele();

					$.when($.ajax({
						type: 'GET',
						cache: false,
						url: 'assets/js/data/GridTeleSalesCalendar.json',
						datatype: 'json',

					})).then(function(data) { $(document).GlCalendar(data) })

					// Data Injection Calendar
					$.fn.GlCalendar = (data) => {

						let hourSet = '';
						for( let i in data.GirdHour ) {

							hourSet += '<div class="HItemF"><span class="hourItem" data-hour="' + data.GirdHour[i].hourSet + '">' + data.GirdHour[i].hourSet + '</span></div>';
						}
						$(hourSet).appendTo('.TeleGridHour');
						
						$('.HItemF:first-of-type').addClass('FHour');

						let HourTitle = $(settingsCal.tags.divTag, { class: 'HourTitle' })
							.append( $(settingsCal.tags.spanTag, { class: 'hourTitle_p' }).html('Hours'))
							.append( $(settingsCal.tags.spanTag, { class: 'hour_pBtt'}).html('h: am / h: pm'));

						$('.FHour').before(HourTitle);
					}

					HeadGCalendar();

					// Start TeleSales Calendars
					$.fn.OpenCalendGl = () => {
						return this.on('click', '*', function() {
							
							// This Id to Click On
							let id = $(this).attr('id');

							// This Class to Click On
							let cls = $(this)[0].className;
							
							// Opens TeleSales Hour Calendar == 1.Top, 2.Left, 3.Right
							const input2 = cls == settingsCal.DateTPick ? datetimepicker2Cal('103%', 'auto', '-2px') : '';

							// Click Event For Day Items
							if(cls.indexOf('dyItem') != -1) {

								// New Date
								let date = new Date();

								// Gets Hours
								let hour = date.getHours();

								// Gets Minutes
								let minutes = date.getMinutes();

								// Span Element to set a '0' before a number when less than 10
								let tSpan = $('<span/>').html(0).css({ float: 'left'});

								$('.dyItem').removeClass('setDay');
								$(this).addClass('setDay');

								$('.TeleSalesGridCalendar .TeleGridHour').css({ position: 'initial'});

								if($('.datepicker .dyItem').length == 0) {

									$(this).clone().appendTo('.datepicker').removeClass('CalenTd today setDay Day-Saturday').css({ border: '', float: 'left'});

									$('.datepicker').append(settingsCal.timeTemp);

									$('.datepicker .MandY_Floor').append($('.ThisMonthTop .MonthNum').text() + $('.ThisYearTop').text()).css({ border: '', float: 'left'});
								}

								else if($('.datepicker .dyItem').length == 1) {

									$('.datepicker .dyItem').remove();

									$(this).clone().appendTo('.datepicker').removeClass('CalenTd today setDay').css({ border: '', float: 'left'});
									
									$('.MandY_Floor, .Time_Floor').remove();

									$('.datepicker').append(settingsCal.timeTemp);

									$('.datepicker .MandY_Floor').append($('.ThisMonthTop .MonthNum').text() + $('.ThisYearTop').text()).css({ border: '', float: 'left'});
								}

								$('.datepicker .Time_Floor').append(settingsCal.NullHeader(hour) + ':' + settingsCal.NullHeader(minutes));

								if($('.hourItem').hasClass('setHour')) {

									$('.Time_Floor').remove();
									$('.datepicker').append(settingsCal.timeTemp);
									
									$('.Time_Floor').text( $('.setHour').html() );
								}			

								if($(this).text() === '1' || $(this).text() === '2' 
									|| $(this).text() === '3' || $(this).text() === '4' 
									|| $(this).text() === '5' || $(this).text() === '6' 
									|| $(this).text() === '7' || $(this).text() === '8' 
									|| $(this).text() === '9') { 
										
									$('.datepicker span').remove();
									$('.datepicker .dyItem').before(tSpan);

								} else { $('.datepicker span').remove(); }


								//  Back End Development
								$('#datetimepicker_Top').val( settingsCal.NullHeader($(this).text()) + $('.ThisMonthTop .MonthNum').text() + $('.ThisYearTop').text() + ' ' + settingsCal.NullHeader(hour) + ':' + settingsCal.NullHeader(minutes));

								if($('.hourItem').hasClass('setHour')) {

									$('#datetimepicker_Top').val( settingsCal.NullHeader($(this).text()) + $('.ThisMonthTop .MonthNum').text() + $('.ThisYearTop').text() + ' ' + $('.setHour').text());
								}
							}

							// Click Event For HourItems
							else if(cls.indexOf('hourItem') != -1) {

								$('.hourItem').removeClass('setHour');
								$(this).addClass('setHour');

								$('.Time_Floor').html( $(this).text());


								// Back End Development
								$('#datetimepicker_Top').val( settingsCal.NullHeader($('.setDay').html()) + $('.ThisMonthTop .MonthNum').text() + $('.ThisYearTop').text() + ' ' + $('.setHour').html());
							}
							
						});
					}
					$(document).OpenCalendGl();
					
					// Dragging Calendar DateTimePicker Global Function
					function datetimepicker2Cal(tops, lefts, rights) {
						$(settingsCal.CalGrid + 0).show().css({ top: tops, left: lefts, right: rights });
					}
					// End TeleSales Calendar

					EmptyItem();
					$(document).on('click', '.next-month, .prev-month', function() { 

						EmptyItem(); 

						$('.dyItem').each(function() { 

							if($(this).html() != '') { $(this).attr({ 'data-date': $(this).html()}) 

							} else { $(this).removeAttr('data-date')}

						});
					});

				}
				$(document).RunTeleGridcalendar();
			}
		});
		
		let RunCalenTop = new RunCalen();
	}
	$(document).GridDefaultCalendar();

});