import React from 'react';

import $ from 'jquery';


const prods = [

	{ clas: 'delivLi backDeleveFocus', icon: 'fad fa-life-ring', name: 'Life Insurance'},
	{ clas: 'delivLi', icon: 'fad fa-heartbeat', name: 'Health Insurance'},
	{ clas: 'delivLi', icon: 'fad fa-home-lg', name: 'Mortgages'},
	{ clas: 'delivLi', icon: 'fad fa-coins', name: 'Equity Release'},
	{ clas: 'delivLi', icon: 'fad fa-hospital-alt', name: 'Business PMI'},
	{ clas: 'delivLi', icon: 'fad fa-coffin', name: 'Funeral Plan'},
	{ clas: 'delivLi', icon: 'fad fa-window-restore', name: 'Windows'},
	{ clas: 'delivLi', icon: 'fad fa-skull', name: 'Funeral Insurance'},
	{ clas: 'delivLi', icon: 'fa fa-tripadvisor', name: 'Life Insurance 50+'},
	{ clas: 'delivLi', icon: 'fad fa-file-invoice-dollar', name: 'Home For Cash'},
	{ clas: 'delivLi', icon: 'fad fa-ear', name: 'Hearing Aids'},
	{ clas: 'delivLi', icon: 'fad fa-walker', name: 'Stair Lifts'},
	{ clas: 'delivLi', icon: 'fad fa-bell-school', name: 'Home Alarms'},
	{ clas: 'delivLi', icon: 'fad fa-walker', name: 'Stair Lifts DE'},
	{ clas: 'delivLi', icon: 'fad fa-life-ring', name: 'Life DMS'}
];

const logs = [

	{ date: '02/09/2020 11:58:07', content: 'Shane Ho changed WED rotation for Life Insurance: SmarterCover. Changed daily limit from 50 to 85.'},
	{ date: '02/09/2020 11:58:07', content: 'Jorge changed WED rotation for Life Insurance: SmarterCover. Changed daily limit from 50 to 85.'},
	{ date: '02/09/2020 11:58:07', content: 'David changed WED rotation for Life Insurance: SmarterCover. Changed daily limit from 50 to 85.'},
	{ date: '02/09/2020 11:58:07', content: 'Shane Ho changed WED rotation for Life Insurance: SmarterCover. Changed daily limit from 50 to 85.'},
	{ date: '02/09/2020 11:58:07', content: 'Shane Ho changed WED rotation for Life Insurance: SmarterCover. Changed daily limit from 50 to 85.'},
	{ date: '02/09/2020 11:58:07', content: 'David changed WED rotation for Life Insurance: SmarterCover. Changed daily limit from 50 to 85.'},
	{ date: '02/09/2020 11:58:07', content: 'Shane Ho changed WED rotation for Life Insurance: SmarterCover. Changed daily limit from 50 to 85.'},
	{ date: '02/09/2020 11:58:07', content: 'Jorge changed WED rotation for Life Insurance: SmarterCover. Changed daily limit from 50 to 85.'},
	{ date: '02/09/2020 11:58:07', content: 'David changed WED rotation for Life Insurance: SmarterCover. Changed daily limit from 50 to 85.'},
	{ date: '02/09/2020 11:58:07', content: 'Shane Ho changed WED rotation for Life Insurance: SmarterCover. Changed daily limit from 50 to 85.'},
	{ date: '02/09/2020 11:58:07', content: 'Shane Ho changed WED rotation for Life Insurance: SmarterCover. Changed daily limit from 50 to 85.'},
	{ date: '02/09/2020 11:58:07', content: 'David changed WED rotation for Life Insurance: SmarterCover. Changed daily limit from 50 to 85.'}
]


class Accordion extends React.Component {

	componentDidMount() {

		const __accorRotation = (e) => {

	        var a = {

	                staticBorder: $("<span>", { class: "static-ico-sm" }),

	                // Accordion Toggle Speed
	                speedS: 120
	            }

	        // Accordion Border appends to the main Element
	        $(a.staticBorder).appendTo(".aditional-info-rotation .accor-link");

	        // Global Click Event
	        $.fn.GlobalCl = function() {
	        	return this.on('click', '*', function() {

	        		let clas = $(this)[0].className;

	        		if(clas.indexOf('openAccor') !== -1) {

	        			$('.openAccor').removeClass('borderGreen');
		   				$(this).addClass('borderGreen');

		   				// Accordion Toggle
						$(this).next('div').slideToggle(a.speedS).siblings('div:visible').slideUp(a.speedS);
	        		}

	        		else if(clas.indexOf('delivLi') !== -1) {

						$('.delivLi').removeClass('backDeleveFocus');
	   					$(this).addClass('backDeleveFocus');
	        		}

	        	});
	        }

	        $(document).GlobalCl();



	        var __Search = $('.auto-search');

		    $.fn.extend({

		        autoThisSearch: function() {
		            return this.keyup(function() {
		                const valThis = this.value;
		                const length = this.value.length;

		                $.fn.extend({
		                    thisLogs: function() {
		                        return this.each(function() {

		                            const text = $(this).text();
		                            const textL = text.toLowerCase();
		                            const position = textL.indexOf(valThis.toLowerCase());

		                            if (position !== -1) {

		                                const matches = text.substring(position, (valThis.length + position));
		                                const regex = new RegExp(matches, 'ig');
		                                const highlighted = text.replace(regex, `<span class="mHighl">${matches}</span>`);

		                                $(this).html(highlighted).show();

		                            } else {
		                                $(this).text(text);
		                                $(this).hide();
		                            }
		                        });
		                    }
		                });

		                $('.objType').thisLogs();

		                if (!this.value) { $('.mHighl').remove(); }
		            });
		        }
		    });

		    __Search.autoThisSearch();

	    }

	    __accorRotation();


		// const elem = document.querySelectorAll('._aTag');

		// elem.forEach(el => el.addEventListener('click', event => {

		// 	alert("Works Fine");
		// 	// elem.classList.remove('yup');
		// 	//this.classList.add('yup');
		// }))


	}


	render() {

		return(

			<div className="aditional-info aditional-info-rotation">
				<div id="aditional-info-rotation">

        			<span className="accor-link drop borderGreen fal openAccor" id="loghist">Log History</span>
        			<div id="loghistsecond" className="content">

        				<span className="Search_Fl fal" id="search_Fl">
        					<input type="text" className="auto-search" placeholder="Search for Logs..." />
        				</span>

        				{ logs.map ( log => (

	        				<div className="form-article full-width margin-r-null">
	        					<span className="label">{ log.date }</span>
	        					<p className="objType">{ log.content }</p>
	        				</div>

						))}

        			</div>

			       	<span className="accor-link drop fal openAccor" id="deliveryRot">Product</span>
			       	<div id="deliveryFloor" className="content">
			       		
			       		<ul className="deliveryIn">

			       			{ prods.map ( item => (

								<li className={item.clas}>
				       				<i className={item.icon}></i>
				       				<span className="_aTag">{item.name}</span>
				       			</li>

			       			))}

			       		</ul>
			       	</div>


        		</div>

			</div>
		)
	}
}


export default Accordion;