import React from 'react';

import $ from 'jquery';

import Header from '../header/header';

import Nav from '../header/nav';

import Rightnav from '../header/rightNav';

import Searchbar from '../searchbar/searchbar';

import Accordion from '../deliveryrotation/accordion';

import Delgrid from '../deliveryrotation/mon/mongrid';

import Tuedelgrid from '../deliveryrotation/tue/tuegrid';

import Weddelgrid from '../deliveryrotation/wed/wedgrid';

import Thurdelgrid from '../deliveryrotation/thur/thurgrid';

import Fridelgrid from '../deliveryrotation/fri/frigrid';

import Satdelgrid from '../deliveryrotation/sat/satgrid';

import Sundelgrid from '../deliveryrotation/sun/sungrid';


const dchecks = [
	
	{ id: 'CopyTo', value: 'All Week', check: 'checked' },
	{ id: 'CopyTo2', value: 'Week days only', check: '' },
	{ id: 'CopyTo3', value: 'Weekend only', check: '' }
];

const tabdays = [

	{ class: 'tab mon', name: 'Mon'  },
	{ class: 'tab tue', name: 'Tue'  },
	{ class: 'tab wed', name: 'Wed'  },
	{ class: 'tab thur', name: 'Thur'  },
	{ class: 'tab fri', name: 'Fri'  },
	{ class: 'tab sat', name: 'Sat'  },
	{ class: 'tab sun', name: 'Sun'  }
];

const tabgrids = [

	{ class: 'Dgrid monGrid dispN', id: 'monGrid', name: ''  },
	{ class: 'Dgrid tueGrid dispN', id: 'tueGrid', name: ''  },
	{ class: 'Dgrid wedGrid dispN', id: 'wedGrid', name: ''  },
	{ class: 'Dgrid thurGrid dispN', id: 'thurdGrid', name: ''  },
	{ class: 'Dgrid friGrid dispN', id: 'friGrid', name: ''  },
	{ class: 'Dgrid satGrid dispN', id: 'satGrid', name: ''  },
	{ class: 'Dgrid sunGrid dispN', id: 'sunGrid', name: ''  }
];

const hourdays = [

	{ id: 'chkOutOfHoursIncludeMon', name: 'Mon' },
	{ id: 'chkOutOfHoursIncludeTue', name: 'Tue' },
	{ id: 'chkOutOfHoursIncludeWed', name: 'Wed' },
	{ id: 'chkOutOfHoursIncludeThur', name: 'Thur' },
	{ id: 'chkOutOfHoursIncludeFri', name: 'Fri' },
	{ id: 'chkOutOfHoursIncludeSat', name: 'Sat' },
	{ id: 'chkOutOfHoursIncludeSun', name: 'Mon' }
];

const timesH = [

	{ time: '00:00'}, { time: '00:30'}, { time: '01:00'}, { time: '01:30'}, { time: '02:00'}, { time: '02:30'}, { time: '03:00'}, { time: '03:30'}, { time: '04:00'}, { time: '04:30'},
	{ time: '05:00'}, { time: '05:30'}, { time: '06:00'}, { time: '06:30'}, { time: '07:00'}, { time: '07:30'}, { time: '08:00'}, { time: '08:30'}, { time: '09:00'}, { time: '09:30'},
	{ time: '10:00'}, { time: '10:30'}, { time: '11:00'}, { time: '11:30'}, { time: '12:00'}, { time: '12:30'}, { time: '13:00'}, { time: '13:30'}, { time: '14:00'}, { time: '14:30'},
	{ time: '15:00'}, { time: '15:30'}, { time: '16:00'}, { time: '16:30'}, { time: '17:00'}, { time: '17:30'}, { time: '18:00'}, { time: '18:30'}, { time: '19:00'}, { time: '19:30'},
	{ time: '20:00'}, { time: '20:30'}, { time: '21:00'}, { time: '21:30'}, { time: '22:00'}, { time: '22:30'}, { time: '23:00'}, { time: '23:30'}

];

const timeDrops = [

	{ label: 'Sweep Time:', clsDrop: 'DOInput Swtime', time: '08:42', dropcls: 'droppnlOut RandomDistributeSweepTime_timeview', id: 'RandomDistributeSweepTime_timeview' },
	{ label: 'Start Time:', clsDrop: 'DOInput Sttime', time: '08:48', dropcls: 'droppnlOut RandomDistributeStartTime', id: 'RandomDistributeStartTime' },
	{ label: 'End Time:', clsDrop: 'DOInput Entime', time: '11:30', dropcls: 'droppnlOut RandomDistributeEndTime_timeview', id: 'RandomDistributeEndTime_timeview' }
]

class Deliveryrotation extends React.Component {

	componentDidMount() {

		const delivRot = (settings) => {

			// New Date
			var date = new Date();

			var delDefault = $.extend({

				d: date.getDay(),

				selCl: 'selected',

				dispNcl: 'dispN',

				dMon: '.tueGrid, .wedGrid, .thurGrid, .friGrid, .satGrid, .sunGrid',

				dTue: '.monGrid, .wedGrid, .thurGrid, .friGrid, .satGrid, .sunGrid',

				dWed: '.monGrid, .tueGrid, .thurGrid, .friGrid, .satGrid, .sunGrid',

				dThur: '.monGrid, .tueGrid, .wedGrid, .friGrid, .satGrid, .sunGrid',

				dFri: '.monGrid, .tueGrid, .wedGrid, .thurGrid, .satGrid, .sunGrid',

				dSat: '.monGrid, .tueGrid, .wedGrid, .thurGrid, .friGrid, .sunGrid',

				dSun: '.monGrid, .tueGrid, .wedGrid, .thurGrid, .friGrid, .satGrid',

				sDrop: '.DDLOutOfHoursOperations_Fl, .RandomDistributeSweepTime_timeview, .RandomDistributeStartTime'

			}, settings);

			// Tab Monday
			const mon = delDefault.d === 1 ? $('.mon').addClass(delDefault.selCl) && $('.monGrid').removeClass(delDefault.dispNcl) : $('.mon').removeClass(delDefault.selCl);

			// Tab Tuesday
			const tue = delDefault.d === 2 ? $('.tue').addClass(delDefault.selCl) && $('.tueGrid').removeClass(delDefault.dispNcl) : $('.tue').removeClass(delDefault.selCl);

			// Tab Wednesday
			const wed = delDefault.d === 3 ? $('.wed').addClass(delDefault.selCl) && $('.wedGrid').removeClass(delDefault.dispNcl) : $('.wed').removeClass(delDefault.selCl);

			// Tab Thursday
			const thur = delDefault.d === 4 ? $('.thur').addClass(delDefault.selCl) && $('.thurGrid').removeClass(delDefault.dispNcl) : $('.thur').removeClass(delDefault.selCl);

			// Tab Friday
			const fri = delDefault.d === 5 ? $('.fri').addClass(delDefault.selCl) && $('friGrid').removeClass(delDefault.dispNcl) : $('.fri').removeClass(delDefault.selCl);

			// Tab Saturday
			const sat = delDefault.d === 6 ? $('.sat').addClass(delDefault.selCl) && $('.satGrid').removeClass(delDefault.dispNcl) : $('.sat').removeClass(delDefault.selCl);

			// Tab Sunday
			const sun = delDefault.d === 0 ? $('.sun').addClass(delDefault.selCl) && $('.sunGrid').removeClass(delDefault.dispNcl) : $('.sun').removeClass(delDefault.selCl);

			// Grid Monday
			const Gmon = delDefault.d === 1 ? $('.monGrid').css({ display: 'block'}) && $(delDefault.dMon).css({ display: 'none'}) : '';

			//Grid Tuesday
			const Gtue = delDefault.d === 2 ? $('.tueGrid').css({ display: 'block'}) && $(delDefault.dTue).css({ display: 'none'}) : '';

			// Grid Wednsday
			const Gwed = delDefault.d === 3 ? $('.wedGrid').css({ display: 'block'}) && $(delDefault.dWed).css({ display: 'none'}) : '';

			// Grid Thursday
			const Gthur = delDefault.d === 4 ? $('.thurGrid').css({ display: 'block'}) && $(delDefault.dThur).css({ display: 'none'}) : '';

			// Grid Friday
			const Gfri = delDefault.d === 5 ? $('.friGrid').css({ display: 'block'}) && $(delDefault.dFri).css({ display: 'none'}) : '';

			// Grid Saturday
			const Gsat = delDefault.d === 6 ? $('.satGrid').css({ display: 'block'}) && $(delDefault.dSat).css({ display: 'none'}) : '';

			// Grid Sunday
			const Gsun = delDefault.d === 0 ? $('.sunGrid').css({ display: 'block'}) && $(delDefault.dSun).css({ display: 'none'}) : '';

			// Global Click Event
			$.fn.globCl = function() {
				return this.on('click', '*', function(event) {

					// Check for the class Name
					let cls =  $(this)[0].className;

					// Tabs Click Event
					if(cls.indexOf('tab') !== -1) {

						$('.tab').removeClass(delDefault.selCl);
						$(this).addClass(delDefault.selCl);
					}

					else if(cls.indexOf('ddlOut') !== -1) {

						event.stopPropagation();

						$('.DDLOutOfHoursOperations_Fl').slideToggle(100);

						$('html').toggleClass('closeDrop');
					}

					else if (cls.indexOf('liDrop') !== -1) {

						$('.DOInput').html( $(this).html() );

						$('.DDLOutOfHoursOperations_Fl li').removeClass('optselect');
						$(this).addClass('optselect');
					}

					else if(cls.indexOf('closeDrop') !== -1) {

						$(delDefault.sDrop).slideUp(100);
						$('html').removeClass('closeDrop');
					}

					if(cls.indexOf('Swtime') !== -1) {

						event.stopPropagation();

						$('.RandomDistributeSweepTime_timeview').slideToggle(100);
						$('html').toggleClass('closeDrop');
					}

					else if(cls.indexOf('Sttime') !== -1) {

						event.stopPropagation();

						$('.RandomDistributeStartTime').slideToggle(100);
						$('html').toggleClass('closeDrop');
					}

					else if(cls.indexOf('Entime') !== -1) {

						event.stopPropagation();

						$('.RandomDistributeEndTime_timeview').slideToggle(100);
						$('html').toggleClass('closeDrop');
					}

					// Monday Grid
					const tMon = cls.indexOf('mon') !== -1 ? $('.monGrid').css({ display: 'block'}) && $(delDefault.dMon).css({ display: 'none'}) : '';

					// Tuesday Grid
					const tTue = cls.indexOf('tue') !== -1 ? $('.tueGrid').css({ display: 'block'}) && $(delDefault.dTue).css({ display: 'none'}) : '';

					// Wednesday Grid
					const tWed = cls.indexOf('wed') !== -1 ? $('.wedGrid').css({ display: 'block'}) && $(delDefault.dWed).css({ display: 'none'}) : '';

					// Thursday Grid
					const tThur = cls.indexOf('thur') !== -1 ? $('.thurGrid').css({ display: 'block'}) && $(delDefault.dThur).css({ display: 'none'}) : '';

					// Friday Grid
					const tFri = cls.indexOf('fri') !== -1 ? $('.friGrid').css({ display: 'block'}) && $(delDefault.dFri).css({ display: 'none'}) : '';

					// Saturday Grid
					const tSat = cls.indexOf('sat') !== -1 ? $('.satGrid').css({ display: 'block'}) && $(delDefault.dSat).css({ display: 'none'}) : '';

					// Sunday Grid
					const tSun = cls.indexOf('sun') !== -1 ? $('.sunGrid').css({ display: 'block'}) && $(delDefault.dSun).css({ display: 'none'}) : '';

				});
			}
			$(document).globCl();


			$('.tGridnames .MondayG').clone().appendTo('#monGrid');

			$('.tGridnames .TuesdayG').clone().appendTo('#tueGrid');

			$('.tGridnames .WednesdayG').clone().appendTo('#wedGrid');

			$('.tGridnames .ThursdayG').clone().appendTo('#thurdGrid');

			$('.tGridnames .FridayG').clone().appendTo('#friGrid');

			$('.tGridnames .SatdayG').clone().appendTo('#satGrid');

			$('.tGridnames .SundayG').clone().appendTo('#sunGrid');

			$('.tGridnames .sweetTime-item').clone().appendTo('#RandomDistributeSweepTime_timeview, #RandomDistributeStartTime, #RandomDistributeEndTime_timeview');

			$('.tGridnames').detach();
		}

		delivRot();
	}

	render() {

		return (

			<div className="DeliveryrotationApp">

				<Header/>

                <Nav/>

                <Rightnav/>

                <div className="main">

                	<Searchbar/>

                	<div style={{ width: '100%', float: 'left', background: '#fff', paddingLeft: '15px', paddingRight: '15px' }}>
						<hr style={{ margin: '0', 'margin-top': '8px', 'margin-bottom': '7px' }} />
					</div>

                	<div id="page-content-wrapper" className="page-content-wrapper-rotation">

                		<div className="top-body">
							<div className="titlenavg">

								<h4 className="pull-left">Copy settings to:</h4>

								{ dchecks.map ( item => (
									<div className="drotCheck">
										<input checked={ item.check } id={item.id} name={ item.id } type="radio" value={ item.value } /> All week
									</div>
								))}

							</div>

							<div className="drotCheck">

								<div className="OverLayBtn" style={{ width: '135px'}}>
									<span className="oLayer" style={{ background: 'rgba(39, 150, 198, 0.5)'}}></span>
									<button id="btnSubmit" type="submit" className="MlBtn k-button" style={{display: 'block', color: '#fff', background: 'transparent'}}>Submit</button>
								</div>

							</div>
						</div>

						<div className="panel panel-delDefault gridBody">
							<div className="panel-heading" style={{ background: '#f5f5f5' }}>
								<h4 style={{ 'border-right': '0', 'font-weight': '700' }}><i className="fad fa-life-ring" style={{ 'margin-right': '10px', color: '#2796c6'}}></i> Life Insurance</h4>
							</div>

							<div className="panel-body">
								<div id="DeliveryTabGrid">

									<div className="DelTab">

										{ tabdays.map ( item => (

											<span className={ item.class }>{ item.name }</span>

										))}

									</div>

									<div id="grid">

										{ tabgrids.map ( item => (

											<div className={ item.class } id={ item.id }>{ item.name }</div>
										))}

									</div>

									<span style={{color: '#999', 'font-size': '11px', width: '100%', float: 'left', 'padding-top': '5px' }}>* PQ Merchants does not use Cycle Every setting</span>



									<div className="bttBlock" style={{ width: '100%', display: 'inline-block', 'margin-top': '30px'}}>

										<button className="OutOfHoursSave k-button k-button-icontext">Save out of hours settings
											<span className="k-icon k-i-save"></span>
										</button>

										<p style={{ 'margin-top': '20px' }}><b>Daily Out of Hour Operations:</b></p>

										<span style={{ width: '100%', display: 'inline-block', 'margin-bottom': '10px' }}>Include Days:</span>

										<div id="OutOfHoursDays">

											<p style={{ color: '#999', 'font-size': '13px'}}>Uncheck to exclude the day from out of hour operations.  Lead will then remain queued on that day.</p>

											{ hourdays.map ( item => (
												<span className="outofhours_day">
													<input checked="checked" className="k-checkbox" id={ item.id } name={ item.id } type="checkbox" value="true" style={{ margin: '0' }} />
													<label className="k-checkbox-label" for={ item.id }>{ item.name }</label>
												</span>
											))}

										</div>

										<div style={{ position: 'relative', float: 'left' }}>
											<div className="DDLOutOfHoursOperations">
												<span className="DOInput ddlOut">Random Distribute</span>
												<span className="k-select select">
													<span className="k-icon k-i-arrow-60-down"></span>
												</span>
											</div>

											<div className="DDLOutOfHoursOperations_Fl">

												<ul>
													<li className="liDrop optselect">Random Distribute</li>
													<li className="liDrop">Restrict</li>
												</ul>
											</div>
										</div>


										<div id="pnlOutOfHoursRandomDistribute">

											<span style={{ 'margin-bottom': '25px' }}>Automically 'sweeps' leads for random distribution between specified start and end times.</span>


											<div style={{ width: '500px', float: 'left' }}>

												{ timeDrops.map ( ditem => (
													<div className="form-group">
														<label className="control-label width40">{ ditem.label }</label>
														<div className="drop-form width60">
															<div className="formWidget">
																<span className={ ditem.clsDrop }>{ ditem.time }</span>
															    <span className="k-select select">
															        <span className="k-icon k-i-clock"></span>
															    </span>

															    <div className={ ditem.dropcls }>
															    	<ul tabindex="-1" role="listbox" aria-hidden="true" unselectable="on" className="k-list k-reset" id={ ditem.id }></ul>
															    </div>

															</div>
														</div>
													</div>
												))}


												<div className="form-group">
													<label className="control-label width40">On Day :</label>
													<div className="drop-form width60">
														<div className="formWidget">
															<span className="DOInput">Same Day</span>
															<span className="k-select select">
																<span className="k-icon k-i-arrow-60-down"></span>
															</span>
														</div>
													</div>
												</div>

												<div className="form-group">
													<label className="control-label width40">Transfer method :</label>
													<div className="drop-form width60">
														<div className="formWidget">
															<span className="DOInput">Transfer to Merchant</span>
															<span className="k-select select">
																<span className="k-icon k-i-arrow-60-down"></span>
															</span>
														</div>
													</div>
												</div>

												<div className="form-group">
													<label className="control-label width40">All to Merchant :</label>
													<div className="drop-form width60">
														<div className="formWidget">
															<span className="DOInput">SmarterCover</span>
															<span className="k-select select">
																<span className="k-icon k-i-arrow-60-down"></span>
															</span>
														</div>
													</div>
												</div>

												<div className="form-group" style={{ 'margin-top': '20px' }}>
													<label className="control-label width40">Distribution Options :</label>
													<div className="drop-form width60">
														<div className="formWidget">
															<span className="DOInput">QueueOut</span>
															<span className="k-select select">
																<span className="k-icon k-i-arrow-60-down"></span>
															</span>
														</div>
													</div>
												</div>

											</div>

										</div>

									</div>

								</div>
							</div>

						</div>

                	</div>

                	<Accordion/>
           
                </div>


                <div className="tGridnames">

                	<Delgrid/>
                	<Tuedelgrid/>
                	<Weddelgrid/>

                	<Thurdelgrid/>

                	<Fridelgrid/>

                	<Satdelgrid/>

                	<Sundelgrid/>


                	{ timesH.map ( item => (
		    			<li tabindex="-1" role="option" className="k-item sweetTime-item">{ item.time }</li>
		    		))}

                </div>

			</div>
		)
	}
}

export default Deliveryrotation;