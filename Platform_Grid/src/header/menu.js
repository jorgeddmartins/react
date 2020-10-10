import React from 'react';

//import { Link } from 'react-router-dom';

//import axios from 'axios';

import $ from 'jquery';


const users = [

	{ url: '#', class: 'li-User Manager', id: 'id-158', name: 'User Manager', icon: 'fa fa-plus-circle' },
	{ url: '#', class: 'li-Users Settings', id: 'id-62', name: 'Users Settings', icon: 'fd fi-torsos-female-male' },
	{ url: '#', class: 'li-Users Qinex Last Login', id: 'id-132', name: 'Users Qinex Last Login', icon: 'fa fa-user-circle-o' },
	{ url: '#', class: 'li-Telesale Users Settings', id: 'id-144', name: 'Telesale Users Settings', icon: 'fas fa-user-cog' }
];

const menus = [
	
	{ url: '#', class: 'li-Menu Order', id: 'id-115', name: 'Menu Order', icon: 'fa fa-pencil-square-o' },
	{ url: '#', class: 'li-Menu List', id: 'id-109', name: 'Menu List', icon: 'fa fa-list-alt' }
];

const mfeedbacks = [

	{ url: '#', class: 'li-Feedback Status', id: 'id-65', name: 'Feedback Status', icon: 'fa fa-comment-o' },
	{ url: '#', class: 'li-Feedback Status Details', id: 'id-66', name: 'Feedback Status Details', icon: 'fa fa-comments-o' },
	{ url: '#', class: 'li-Feedback Status Mapping', id: 'id-67', name: 'Feedback Status Mapping', icon: 'fa fa-commenting-o' },
	{ url: '#', class: 'li-Feedback Status Details Mapping', id: 'id-89', name: 'Feedback Status Details Mapping', icon: 'fa fa-commenting' }
];

const caprestblacklists = [
	
	{ url: '#', class: 'li-Restrictions', id: 'id-97', name: 'Restrictions', icon: 'fa fa-exclamation-triangle' },
	{ url: '#', class: 'li-Blacklistings', id: 'id-98', name: 'Blacklistings', icon: 'fa fa-remove' },
	{ url: '#', class: 'li-Merchant Restrictions', id: 'id-136', name: 'Merchant Restrictions', icon: 'fas fa-user-lock' }
];

const maffiliates = [
	{ url: '#', class: 'li-Affiliate List', id: 'id-91', name: 'Affiliate List', icon: 'fad fa-users' },
	{ url: '#', class: 'li-Offer List', id: 'id-117', name: 'Offer List', icon: 'fad fa-tags' },
	{ url: '#', class: 'li-Affiliate Cap', id: 'id-118', name: 'Affiliate Cap', icon: 'fad fa-thermometer-half' }
];

const msearches = [
	{ url: '#', class: 'li-Platform Management', id: 'id-93', name: 'Platform Management', icon: 'fd fi-thumbnails' }
];

const mnactives = [
	{ url: '#', class: 'li-Platform Management', id: 'id-94', name: 'Platform Management', icon: 'fa fa-newspaper-o' }
];

const msocials = [
	{ url: '#', class: 'li-Platform Management', id: 'id-96', name: 'Platform Management', icon: 'fa fa-envelope-o' }
];

const memails = [
	{ url: '#', class: 'li-Platform Management', id: 'id-95', name: 'Platform Management', icon: 'fa fa-facebook-official' }
]


class Menu extends React.Component {

	componentDidMount() {

		const __MData = (options) => {

			$.getJSON('assets/js/data/nav.json', function(data) {
		        $('#ItemsMenu').empty();

		        let shItems = '#id-133 .replSub, #id-108 .replSub, #id-44 .replSub, #id-61 .replSub, #id-47 .replSub, #id-48 .replSub, #id-49 .replSub, #id-50 .replSub, #id-51 .replSub';

		        let remov = '#id-133 a.subSect, #id-108 a.subSect, #id-44 a.subSect, #id-61 a.subSect, #id-47 a.subSect, #id-48 a.subSect, #id-49 a.subSect, #id-50 a.subSect, #id-51 a.subSect';

		        let items = []

		        $.each(data, function(index, value) {
		            items.push('<li class="' + value.class + '" id="id-' + value.id + '">' +
		            			'<span class="toggle new-left-nav-item newleft-nav-back leads paddout subclick linkUrl" id="id_' + value.id + '">'+
		            				'<span class="new-top-item">' + value.name + '</span>' +
		            				'<span class="new-top-item-second">' + value.subname + '</span>' +
		            				'<i class="fa fa-chevron-down"></i>' +
		            				'<span class="new-right-ico-floor" style="background: "rgba(239, 239, 239, 0.45)">' +
		            					'<i class="' + value.icon + '"></i>' +
		            				'</span>' +
		            			'</span>' +
		            			'<div class="new-drop-qx subMenu inner" id="open-id_' + value.id + '">' +
		            				'<ul class="new-sub-items" id="new-sub-items">'
		            			)

		            $.each(value.subm, function(index, value) { 
		               items.push('<li class="' + value.class + '" id="id-' + value.id +'">' +
	               					'<a href="' + value.url + '" class="showspn new-sub-url subnav-' + value.id + ' ' + value.urlclass + '">' + value.name+ '' +
	               						'<span class="new-right-ico-floor">' + 
	               							'<i class="' + value.icon + '"></i>' +
	               						'</span>' +
	               					'</a>' +
	               					'<span class="replSub showspn new-sub-url subnav-' + value.id + ' ' + value.urlclass + '">' + value.name+ '' +
	               						'<i class="fa fa-angle-down"></i>' +
	               						'<span class="new-right-ico-floor">' + 
	               							'<i class="' + value.icon + '"></i>' +
	               						'</span>' +
	               					'</span>' +

	               					'<div class="new-drop-sub SubsubMenu"></div>' +
	               				'</li>')
		            });

		            $.each(data, function(index, value) { items.push('</ul></div></li>') });
			        
		        });
 
		      
		        if (items.length === 0) { $('#ItemsMenu').html('<h2>NO DATA TO DISPLAY</h2>') }

		        else { $('#ItemsMenu').html('' + items.join('') + '') }

		        $("li.Reporting.li-Lead").before($('<div>', { class: "separate-nav li_Reporting" })
					.append($('<span>', {class: "separ-title" }).html("Reporting"))); 


		    	$('.replSub').hide();

		    	$(shItems).show();

		    	$(remov).detach();

		    
		    	$('#usersId').clone().appendTo('#id-133 .new-drop-sub');

		    	$('#menusId').clone().appendTo('#id-108 .new-drop-sub');

		    	$('#mfeedbackId').clone().appendTo('#id-44 .new-drop-sub');

		    	$('#caprestblacklists').clone().appendTo('#id-61 .new-drop-sub');

		    	$('#maffiliates').clone().appendTo('#id-47 .new-drop-sub');

		    	$('#msearches').clone().appendTo('#id-48 .new-drop-sub');

		    	$('#mnactives').clone().appendTo('#id-49 .new-drop-sub');

		    	$('#msocials').clone().appendTo('#id-50 .new-drop-sub');

		    	$('#memails').clone().appendTo('#id-51 .new-drop-sub');

		    	$('.subItemsM').detach();

		    });
		}

		__MData();

	}

	render() {
		
		return(

			<>
				<div id="ItemsMenu"></div>


				<div className="subItemsM" style={{ position: 'absolute', left: '-9999px' }}>

					<ul className="new-sub-items" id="usersId">
						{users.map( item => (
							<li className={item.class} id={item.id}>
								<a href={item.url} className="showspn new-sub-url SublinkUrl">{item.name}
									<span className="new-right-ico-floor" style={{background: 'rgba(239, 239, 239, 0.45)'}}>
										<i className={item.icon}></i>
									</span>
								</a>
							</li>
						))}
					</ul>

					<ul className="new-sub-items" id="menusId">
						{menus.map( item => (
							<li className={item.class} id={item.id}>
								<a href={item.url} className="showspn new-sub-url SublinkUrl">{item.name}
									<span className="new-right-ico-floor" style={{background: 'rgba(239, 239, 239, 0.45)'}}>
										<i className={item.icon}></i>
									</span>
								</a>
							</li>
						))}
					</ul>

					<ul className="new-sub-items" id="mfeedbackId">
						{mfeedbacks.map( item => (
							<li className={item.class} id={item.id}>
								<a href={item.url} className="showspn new-sub-url SublinkUrl">{item.name}
									<span className="new-right-ico-floor" style={{background: 'rgba(239, 239, 239, 0.45)'}}>
										<i className={item.icon}></i>
									</span>
								</a>
							</li>
						))}
					</ul>

					<ul className="new-sub-items" id="caprestblacklists">
						{caprestblacklists.map( item => (
							<li className={item.class} id={item.id}>
								<a href={item.url} className="showspn new-sub-url SublinkUrl">{item.name}
									<span className="new-right-ico-floor" style={{background: 'rgba(239, 239, 239, 0.45)'}}>
										<i className={item.icon}></i>
									</span>
								</a>
							</li>
						))}
					</ul>

					<ul className="new-sub-items" id="maffiliates">
						{maffiliates.map( item => (
							<li className={item.class} id={item.id}>
								<a href={item.url} className="showspn new-sub-url SublinkUrl">{item.name}
									<span className="new-right-ico-floor" style={{background: 'rgba(239, 239, 239, 0.45)'}}>
										<i className={item.icon}></i>
									</span>
								</a>
							</li>
						))}
					</ul>

					<ul className="new-sub-items" id="msearches">
						{msearches.map( item => (
							<li className={item.class} id={item.id}>
								<a href={item.url} className="showspn new-sub-url SublinkUrl">{item.name}
									<span className="new-right-ico-floor" style={{background: 'rgba(239, 239, 239, 0.45)'}}>
										<i className={item.icon}></i>
									</span>
								</a>
							</li>
						))}
					</ul>

					<ul className="new-sub-items" id="mnactives">
						{mnactives.map( item => (
							<li className={item.class} id={item.id}>
								<a href={item.url} className="showspn new-sub-url SublinkUrl">{item.name}
									<span className="new-right-ico-floor" style={{background: 'rgba(239, 239, 239, 0.45)'}}>
										<i className={item.icon}></i>
									</span>
								</a>
							</li>
						))}
					</ul>

					<ul className="new-sub-items" id="msocials">
						{msocials.map( item => (
							<li className={item.class} id={item.id}>
								<a href={item.url} className="showspn new-sub-url SublinkUrl">{item.name}
									<span className="new-right-ico-floor" style={{background: 'rgba(239, 239, 239, 0.45)'}}>
										<i className={item.icon}></i>
									</span>
								</a>
							</li>
						))}
					</ul>

					<ul className="new-sub-items" id="memails">
						{memails.map( item => (
							<li className={item.class} id={item.id}>
								<a href={item.url} className="showspn new-sub-url SublinkUrl">{item.name}
									<span className="new-right-ico-floor" style={{background: 'rgba(239, 239, 239, 0.45)'}}>
										<i className={item.icon}></i>
									</span>
								</a>
							</li>
						))}
					</ul>


				</div>

			</>
		);
	}
}

export default Menu;