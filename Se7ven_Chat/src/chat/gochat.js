import React from 'react';

import {Link} from "react-router-dom";

import $ from 'jquery';



class Gochat extends React.Component {

	componentDidMount() {

		$.fn.RunCUsers = () => {


			$(document).on('click', '.Blk_InChat', function() {

				$('.goChatApp .userN').html( $('.avatName', this).text());

				$('.goChatApp .Avatar').html( $('.avat', this).html());

				$('.goChatApp .Avatar .status').removeAttr('style');
			});

			let NullH = function(e) { const NulNumber = e < 10 ? e = '0' + e : e = '' + e; return e; }

			let temp = '<span class="tempChat thisOne"><div class="msgBy"><img src="assets/img/avatar.jpg" /><span class="timeChat"></span><p class="msgRec"></p></div></span>';


			$.fn.sendFunc = function() {

				return this.on('click', '.SendTo', () => {

					let date = new Date();

			    	$('.receive').append(temp);

			    	$('.thisOne .msgRec').html( $('#sendCont').val() );

			    	$('.thisOne .timeChat').html(NullH(date.getHours()) + ':' + NullH(date.getMinutes()));

			    	$('.receive .tempChat').removeClass('thisOne');

			    	$('#sendCont').val('');

	    			$('.receive').scrollTop($('.receive')[0].scrollHeight);

				});
			}
			$(document).sendFunc();



			// $(document).on('click', '.footerGoChat', function() {

			// 	$(this).animate({ bottom: '224px'}, 200);

			// 	$('.chatBody').animate({ bottom: '270px'}, 200);
			// });

			// let NullH = function(e) { const NulNumber = e < 10 ? e = '0' + e : e = '' + e; return e; }

			// let temp = '<span class="tempChat thisOne"><div class="msgBy"><img src="assets/img/avatar.jpg" /><span class="timeChat"></span><p class="msgRec"></p></div></span>';

			$(document).keypress(function(event) {

			    var keycode = (event.keyCode ? event.keyCode : event.which);
			    if(keycode == '13') {

			    	let date = new Date();

			    	$('.receive').append(temp);

			    	$('.thisOne .msgRec').html( $('#sendCont').val() );

			    	$('.thisOne .timeChat').html(NullH(date.getHours()) + ':' + NullH(date.getMinutes()));
			    	
			    	$('.receive .tempChat').removeClass('thisOne');

			    	$('#sendCont').val('');

	    			$('.receive').scrollTop($('.receive')[0].scrollHeight);
			    }
			});


			// $(document).on('click', '.SendTo', function() {

			// 	let date = new Date();

		 //    	$('.receive').append(temp);

		 //    	$('.thisOne .msgRec').html( $('#sendCont').val() );

		 //    	$('.thisOne .timeChat').html(NullH(date.getHours()) + ':' + NullH(date.getMinutes()));

		 //    	$('.receive .tempChat').removeClass('thisOne');

		 //    	$('#sendCont').val('');

   //  			$('.receive').scrollTop($('.receive')[0].scrollHeight);
			// });


			// let s_height = document.getElementById('sendCont').scrollHeight;
			// document.getElementById('sendCont').setAttribute('style','height:'+s_height+'px');

		}
		$(document).RunCUsers();
	}

	render() {

		return(
			<div className="goChatApp">

				<header className="HeaderChat WChat" id="Hchat">

					<Link to="/chat"><i className="lnr lnr-arrow-left"></i></Link>
					<span className="mTxt userN">User</span>
					<span className="plus">+</span>

					<div className="Avatar">
						<img src="assets/img/avatarfemale.jpg" alt="" />
						<span className="status online"></span>
					</div>

				</header>


				<section className="chatBody receive"></section>


				<div className="footerGoChat">
					<span className="lnr lnr-upload Ooptions"></span>
					<textarea className="typ_Fl_01 inp_02" id="sendCont" placeholder="Type a Message" ></textarea>

					{/*<input type="text" className="inpSend typ_Fl_01" id="sendCont" placeholder="Type a Message" />*/}
					<span className="lnr lnr-arrow-right SendTo"></span>
				</div>

			</div>
		);
	}
}

export default Gochat;