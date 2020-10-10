
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
    let $table = $('.SingleCalendar .table');
    let $week = getCalendarRow();
    let month = ddt.getUTCMonth();
    let $day;
    let i = 1;

    for(; i <= totalDays; i++) {

    	$('.SingleCalendar .table span').addClass('CalenTd');

        $day = $week.find('.CalenTd').eq(currentDay);
        $day.text(i);
       
        const CurrentDat = i === currentDate ? $day.addClass('today') : '';

        let $today = $('.today');

        currentDay = ++currentDay % 7;

        if (currentDay === 0 && (i + 1 <= totalDays)) {
            $week = getCalendarRow();
            currentRow++;
        } 
    }
}

// Clear generated calendar
function clearCalendar() {
    let $trs = $('.table div').not(':eq(0)');
    $trs.remove();
    $('.month-year').empty();
}

// Generates table row used when rendering Calendar
function getCalendarRow() {
    let $table = $('.SingleCalendar .table');
    let $tr = $('<div/>');
    for (let i = 0, len = 7; i < len; i++) {
		
		$tr.append($('<span/>').addClass('dyItem'));
		
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

  //   let Tsp = '<span>';

  //   let ThisMonthTopFloor = $('<div/>', { class: 'ThisMonthTopfloor'}).appendTo($h3)
  //   	.append($(Tsp, { class: 'dropMth janDrop'}).html('January'))
		// .append($(Tsp, { class: 'dropMth fabDrop'}).html('February'))
		// .append($(Tsp, { class: 'dropMth marchDrop'}).html('March'))
		// .append($(Tsp, { class: 'dropMth aprilDrop'}).html('April'))
		// .append($(Tsp, { class: 'dropMth mayDrop'}).html('May'))
		// .append($(Tsp, { class: 'dropMth juneDrop'}).html('June'))
		// .append($(Tsp, { class: 'dropMth julyDrop'}).html('July'))
		// .append($(Tsp, { class: 'dropMth augDrop'}).html('August'))
		// .append($(Tsp, { class: 'dropMth sepDrop'}).html('September'))
		// .append($(Tsp, { class: 'dropMth octDrop'}).html('October'))
		// .append($(Tsp, { class: 'dropMth novDrop'}).html('November'))
		// .append($(Tsp, { class: 'dropMth decDrop'}).html('December'));

  //   let ThisYearTopFloor = $('<div/>', { class: 'ThisYearTopfloor'}).appendTo($h3);
    
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

	let HeadGr = $('.SingleCalendar');

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
				thTag: '<span>',

				// Icon Tag
				icontag: '<i>'
			},

			TeleCalenGr: '.SingleCalendar',

			CalGrid: '.CGrid_',

			DateTPick: 'datepickerFrom',

			DateTPickTo: 'datepickerTo',
			
			YTop: '.ThisYearTop',

			hourItem: '<div class="HItemF"><span class="hourItem"></span></div>'
		};

		// Propreties Setitngs / Propreties Override
		let settingsCal = $.extend( true, {
			
			// Running Calendar True / False
			runCalendar: true,

			closeBt: '<span class="closeC fa">' + '<span class="closeC_Tip">' + STip + '</span>' + '</span>',

			hTem: '<div class="gethours"></div>',

			htemp: '<div class="hourNow"></div>',

			NullHeader: function(e) { const NulNumber = e < 10 ? e = '0' + e : e = '' + e; return e; }

		}, DefaultOptions, CalendarOPtions );
		
		function RunCalen() { if(settingsCal.runCalendar == true ) { this.calendarType(); }}
		
		$.extend( RunCalen.prototype, {

			calendarType: () => {
				
				//.telSHourPicker
				// Calendar Hour Elements Injection
				let SingleCalendar = $(settingsCal.tags.divTag, { class: 'SingleCalendar' }).appendTo('.injectCalend')
						.append($(settingsCal.tags.divTag, { class: 'SingleDays', id: 'Ts1' }))
						.append($(settingsCal.tags.divTag, { class: 'SingleHours', id: 'Ts2' })
							.append($('<div>', { class: 'hourFl'})))


				for(let i = 0; i < 24; i++) {

					$(settingsCal.hourItem).appendTo('.SingleHours .hourFl');
				}


				let valH = 0;

				let NullHeader = function(e) { const NulNumber = e < 10 ? e = '0' + e : e = '' + e; return e; }

				$('.HItemF .hourItem').each(function() {

					$(this).html('<span class="numH">'+ NullHeader(valH) +'</span>' + ':00');
					valH++;
				});

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
							$('.calenPicker .fa-calendar, .inputPicker_mini_top .fa-calendar').removeAttr('style'); 
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
					let CalenNavigation = $(settingsCal.tags.divTag, { class: 'TpNav' }).appendTo('.SingleDays')
						.append($(settingsCal.tags.icontag, { class: 'prev-month haveDate fad fa-chevron-left fa-3x' }))
						.append($(settingsCal.tags.icontag, { class: 'next-month haveDate fad fa-chevron-right fa-3x' }))
						.append($(settingsCal.tags.divTag, { class: 'month-year text-center TopHeadC' }));

					let CalTable = $(settingsCal.tags.divTag, { class: 'CalenFloor'}).appendTo('.SingleDays')
						.append($('<section>', { class: 'table table-bordered' })
							.append($('<div>')
								.append($(settingsCal.tags.thTag).html('Sun'))
								.append($(settingsCal.tags.thTag).html('Mon'))
								.append($(settingsCal.tags.thTag).html('Tue'))
								.append($(settingsCal.tags.thTag).html('Wed'))
								.append($(settingsCal.tags.thTag).html('Thu'))
								.append($(settingsCal.tags.thTag).html('Fri'))
								.append($(settingsCal.tags.thTag).html('Sat'))
							)
						);

					// $('.dateTop .SingleCalendar .dyItem').addClass('dyItemTop');
					
					// Prev Month Arrow Style
					$('.prev-month').css({ left: '3px', width: '14.3px', top: '5px', cursor: 'pointer', color: '#2796c6' });
					
					// Next Month Arrow Style
					$('.next-month').css({ top: '5px',  width: '14.3px', right: '3px', cursor: 'pointer', color: '#2796c6' });
					
					// Table Margin Style
					$('.table').css({ 'margin-bottom': '0'});

					// Global Check Click For Prev & next Months(Top Arrows)
					$.fn.GridGl = () => {
						return this.on('click', '*', function() {

							let fClass = $(this)[0].className;
							
							// Runs Previous Month
							const prevMonth = fClass.indexOf('prev-month') != -1 ? navigationHandler(-1) : '';
							
							// Runs Next Month
							const nextMonth = fClass.indexOf('next-month') != -1 ? navigationHandler(1) && $('tr').removeClass('CurrentRow') : '';
						});
					}
					$(document).GridGl();

					HeadGCalendar();

					let fullDate = new Date();

					let NullHeader = function(e) { const NulNumber = e < 10 ? e = '0' + e : e = '' + e; return e; }
					 
					//convert month to 2 digits
					let twoDigitMonth = ((fullDate.getMonth().length+1) === 1) ? (fullDate.getMonth() +1) : '0' + (fullDate.getMonth() +1);
					
					// Full Current Date
					let currentDate = NullHeader(fullDate.getDate()) + "/" + twoDigitMonth + "/" + fullDate.getFullYear();

					// Add current Date for Front End Inputs
					$('.datepickerFrom, .datepickerTo').html(currentDate);

					// Add current Date for Back end Inputs
					$('#datetimepicker_From, #datetimepicker_To').val(currentDate);


					// Start TeleSales Calendars
					$.fn.OpenCalendGl = () => {
						return this.on('click', '*', function(e, event) {
							
							// This Id to Click On
							let id = $(this).attr('id');

							// This Class to Click On
							let cls = $(this)[0].className;

							// Opens TeleSales Hour Calendar == 1.Top, 2.Left, 3.Right
							//const input2 = cls == settingsCal.DateTPick ? datetimepicker('100%', '0', 'auto') : '';

							//const input3 = cls == settingsCal.DateTPickTo ? datetimepicker('100%', '167px', 'auto') : '';

							// Click Event for Calendar Date From
							if(id == 'datetimepicker5') {

								$('.SingleCalendar').show().css({left: '-202px', top: '356px'});
								$('.SmallScreen .SingleCalendar').show().css({left: '-202px', top: '311px'});
								
								$('#datetimepicker6').removeClass('popInput');
								$(this).addClass('popInput');


								// Open Calendar Date From
								// $('.SingleCalendar').show();
								// $('.SingleCalendar').addClass('topTop').removeClass('topBtt');

								// Removes Attribute Id
								// $('.datepickerTo').removeAttr('id');

								// // Adds Attribute Id
								// $(this).attr({ id: 'datepicker'});

								// // Removes Class From BackEnd Input
								// $('#datetimepicker_To').removeClass('datepicker');

								// // Adds Class To BackEnd Input
								// $('#i').addClass('datepicker');
							}

							else if(id == 'datetimepicker6') {

								$('.SingleCalendar').show().css({left: '-202px', top: '407px'});
								$('.SmallScreen .SingleCalendar').show().css({left: '-202px', top: '359px'});
								
								$('#datetimepicker5').removeClass('popInput');
								$(this).addClass('popInput');

								// $('.SingleCalendar').show();
								// $('.SingleCalendar').addClass('topBtt').removeClass('topTop');
							}

							// Click Event For Day Items
							if(cls.indexOf('dyItem') != -1) {

								// New Date
								let date = new Date();

								$('.dyItem').removeClass('setDay');
								$(this).addClass('setDay');

								//$('#datepicker').append('<span class="dayH"></span>');

								$('.popInput .taskPicker .placeholder').hide();

								$('.popInput .taskPicker').html('');

								$('.popInput .taskPicker').html( NullHeader($(this).html()) + $('.ThisMonthTop .MonthNum').text() + $('.ThisYearTop').text()).append(settingsCal.hTem);

								$('.popInput .taskPicker .gethours').text(NullHeader(date.getHours()) + ':' + NullHeader(date.getMinutes())).css({position: 'absolute', left: '90px', top: '14px'});
							
								//backEndInpFrom($(this));

								//$('.SingleCalendar').hide();
							}

							if(cls.indexOf('hourItem') != -1) {

								$('.popInput .taskPicker .gethours').html($(this).html());
							} 

							
						});
					}
					$(document).OpenCalendGl();

					
					// function datetimepicker(lefts, rights) {

					// 	// $('.SingleCalendar').show().css({left: lefts, right: rights });
					// 	$('.SingleCalendar').show();
					// 	settingsCal.tags.goHtml.addClass('closeCalend');
					// }

					// function datetimepickerBottom(leftsBtt, rightsBtt) {

					// 	$('.SingleCalendar').show().css({left: leftsBtt, right: rightsBtt });
					// 	settingsCal.tags.goHtml.addClass('closeCalend');
					// }

					// function backEndInpFrom(elem) {

					// 	$('.datepicker').val( settingsCal.NullHeader(elem.text()) + $('.ThisMonthTop .MonthNum').text() + $('.ThisYearTop').text());
					// }

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



	// var fullDate = new Date()
	// console.log(fullDate);
	// //Thu May 19 2011 17:25:38 GMT+1000 {}

	// let NullHeader = function(e) { const NulNumber = e < 10 ? e = '0' + e : e = '' + e; return e; }
	 
	// //convert month to 2 digits
	// var twoDigitMonth = ((fullDate.getMonth().length+1) === 1) ? (fullDate.getMonth() +1) : '0' + (fullDate.getMonth() +1);
	 
	// var currentDate = NullHeader(fullDate.getDate()) + "/" + twoDigitMonth + "/" + fullDate.getFullYear();
	// console.log(currentDate);
	// //19/05/2011

});