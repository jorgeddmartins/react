import React from 'react';

import $ from 'jquery';

import Chatkeypad from '../chatkeypad/chatkeypad';

class Chat extends React.Component {

	componentDidMount() {

		$(document).on('click', '.teamBlk', function() {

			$('.ch_Fl_01').addClass('chatLeft');
		});

		$(document).keypress(function(event){
		    var keycode = (event.keyCode ? event.keyCode : event.which);
		    if(keycode == '13') {

		    	let temp = '<span class="temp thisOne"><div class="msgBy"><img src="assets/img/teamImg.jpg" /><span class="msgRec"></span></div></span>';

		    	$('.receive').append(temp);

		    	$('.thisOne .msgRec').html( $('.inp_02').val() );

		    	$('.thisOne .msgRec').html( $('.inp_01').html() );
		    	
		    	$('.receive .temp').removeClass('thisOne');

		    	$('.inp_02').val('');

		    	$('.inp_01').html('');


		 //    	$('.typeText').removeClass('chatUp');

			// $('.chatkeypad .letterPad_Row').removeClass('padUp');

			// $('.receive').removeClass('recUp');


		    	$('.inp_01 .keyNum').detach();

		    	//$('.receive').animate({scrollTop:$(document).height()}, 100);
    			//$('.receive').scrollTop($(document).height());
    			$('.receive').scrollTop($('.receive')[0].scrollHeight);
		    }
		});
	
		 $(".inp_02").keyup(function() {

			if (!this.value) {

			    $('.receive .temp').removeClass('thisOne');
			}
		});
	
		let status = '<span class="status"></span>';

		$('.Top_Header img').before(status);


		$(document).on('click', '.inp_01', function() {

			$('.typeText').addClass('chatUp');

			$('.chatkeypad .letterPad_Row').addClass('padUp');

			$('.receive').addClass('recUp');

		});		

		$(document).on('click', '.chatkeypad .keyNum', function() {

			$('.inp_01 .Input_Msg').hide();

	        $(this).clone().appendTo('.inp_01');

	        $('.inp_02').val( $('.inp_01 .keyNum').text() );
	    });

	    



	 //  	let s_height = document.getElementById('note').scrollHeight;
		// document.getElementById('note').setAttribute('style','height:'+s_height+'px');


		$(document).on('change', '#myinput', function() {

		  	encode();
		});


		function encode() {
	        var selectedfile = document.getElementById("myinput").files;
	        if (selectedfile.length > 0) {
	          var imageFile = selectedfile[0];
	          var fileReader = new FileReader();
	          fileReader.onload = function(fileLoadedEvent) {
	            var srcData = fileLoadedEvent.target.result;
	            var newImage = document.createElement('img');
	            newImage.src = srcData;
	            document.getElementById("msg").innerHTML = newImage.outerHTML;
	            document.getElementById("note").value = document.getElementById("msg").innerHTML;
	          }
	          fileReader.readAsDataURL(imageFile);
	        }
	    }

	}

	render() {

		return(

			<div className="ChatApp">

				<div className="teamBlk">Chat with your Team</div>


				<div className="ch_Fl_01">

					<div className="Top_Header">
						<img src="assets/img/teamImg.jpg" />
						<span className="_Title_Top">Team A</span>
						<span className="_SubTitle_Top">See 10 Members</span>
					</div>

					<div className="receive" id="receive"></div>

					<div className="typeText">
						<span className="typ_Fl_01 inp_01" id="msg" style={{ display: 'block'}}><span className="Input_Msg">Message To Team_</span></span>
						{/*<input type="text" className="typ_Fl_01 istyle={{ display: 'block'}}np_02" placeholder="Message To Team" />*/}

						<textarea className="typ_Fl_01 inp_02" id="note" placeholder="Message To Team" style={{ display: 'none'}}></textarea>

						<input id="myinput" type="file" style={{ width: '70px', float: 'right'}}/>
					</div>

					<Chatkeypad/>

				</div>

			</div>
		);
	}
}

export default Chat; 