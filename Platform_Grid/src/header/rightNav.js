import React from 'react';

import $ from 'jquery';


const rnavtabs = ['Products', 'Merchants'];


//const rProducts = ['Life', 'Health', 'Mortgages', 'Equity', 'BusinessPMI', 'Funeralplan'];

//const lifeblks = ['ALC', 'ALL', 'ALLPQ', 'COR', 'FIR', 'FIRPQ'];


class Rightnav extends React.Component {

	componentDidMount() {

		$.fn.NavRight = () => {

			$.fn.nRightGcl = function() {

				return this.on('click', '*', function() {

					let clas = $(this)[0].className;

					let id = $(this).attr('id');

					if(id === 'button-nav-right') {

						$(this).toggleClass('goRight');
						$('.right-nav').toggleClass('goRightNav');
					}

					if(clas.indexOf('Btn-Prod') !== -1) {
						$('.Btn-Prod').removeClass('m-bt-active');
						$(this).addClass('m-bt-active');
					}

					if(id === 'Merchants') {

						$('.Merchants_floor').removeClass('content_none');
						$('.Products_floor').addClass('content_none');
					}

					else if(id === 'Products') {

						$('.Products_floor').removeClass('content_none');
						$('.Merchants_floor').addClass('content_none');
					}
				});
			}
			$(document).nRightGcl();

			$('.RightNav_Btn_Floor .Btn-Prod:nth-of-type(1)').addClass('m-bt-active');

			$('.Merchants_floor').addClass('content_none');


			$.getJSON( 'assets/js/data/navRightProd.json', function(data) {

				$('#gridproducts').empty();

				let items = [];

				$.each( data, function(index, value) {
					items.push('<div class="conv-grid-item ">' +
									'<section class="conv-large-A20 marchants-blk">' +
										'<span class="product-name">' + value.name + '</span>' +
										'<div class="marchants-commands conv-large-A20">'
								)

					$.each(value.prods, function(index, value) {
						items.push('<div class="rights-blk">' +
										'<label class="switch"><input type="checkbox" /><span class="slider round"></span></label>' +
										'<span class="right_title">' + value.name + '</span>' +
										'<hr/>' +
										'<span class="ProdTooTip">' + value.tool + '</span>' +
									'</div>')

					});

					$.each(data, function(index, value) { items.push('</div></section></div>') });

				});

				$('#gridproducts').html('' + items.join("") + "");

				// Products Mouseover Function
				$.fn.rBlkOver = function() {
					return this.on('mouseover', '.rights-blk', function() {

							// Hides the Tooltip
							$('.ProdTooTip').hide();

							// Shows up this ToolTip
							$('.ProdTooTip', this).show();
					});
				}
				$(document).rBlkOver();

				// Products MouseLeave Function
				$.fn.rBlkLeave = function() {
					return this.on('mouseleave', '.rights-blk', function() {

						// Hides the Tooltip
						$('.ProdTooTip').hide();
					});
				}
				$(document).rBlkLeave();
			});


			$.getJSON('assets/js/data/navRightMerch.json', function(mdata) {

				$('#gridmerchants').empty();

				let itemsm = [];

				$.each(mdata, function(index, value) {

					itemsm.push('<div class="conv-grid-item ">' +
									'<section class="conv-large-A20 marchants-blk">' +
										'<span class="product-name">' + value.name + '</span>' +
										'<div class="marchants-commands conv-large-A20">'
								)

					$.each(value.merch, function(index, value) {
						itemsm.push('<div class="rights-blk">' +
										'<label class="switch"><input type="checkbox" /><span class="slider round"></span></label>' +
										'<span class="right_title">' + value.name + '</span>' +
										'<hr/>' +
									'</div>')

					});

					$.each(mdata, function(indxe, value) { itemsm.push('</div></section></div>') });

				});


				$('#gridmerchants').html('' + itemsm.join('') + '');

			});


		}
		$(document).NavRight();
	}

	render() {

		return(

			<>
				<div id="nav-right">
					<span id="button-nav-right">
						<span className="rtBtn-Icon"></span>
					</span>

					<div className="right-nav">

						<div className="RightNav_Btn_Floor">

							{ rnavtabs.map( rnavtab => ( <span className="Btn-Prod" id={rnavtab}>{ rnavtab }</span> ))}

						</div>

						<div className="RightNav_Container_floor">

							<div className="content_F Products_floor">
								<div className="gridRightN" id="gridproducts">

									
									{/*<div className="conv-grid-item ">
										<section className="conv-large-A20 marchants-blk">
											<span className="product-name">Life</span>
											<div className="marchants-commands conv-large-A20">

												<div className="rights-blk">
													<label className="switch">
													  	<input type="checkbox" />
													  	<span className="slider round"></span>
													</label>
													<span className="right_title">ALC</span>
													<hr/>
												</div>

											</div>
										</section>
									</div>*/}

							
								</div>
							</div>

							<div className="content_F Merchants_floor">

								<div className="gridRightN" id="gridmerchants"></div>

							</div>

						</div>

					</div>

				</div>


				{/*{ lifeblks.map( (value, index) => (

					<div className="rights-blk">
						<label className="switch">
						  	<input type="checkbox" />
						  	<span className="slider round"></span>
						</label>
						<span className="right_title" key="{index}">{ value }</span>
						<hr/>
					</div>

				))}*/}

			</>
		);
	}
}


export default Rightnav;