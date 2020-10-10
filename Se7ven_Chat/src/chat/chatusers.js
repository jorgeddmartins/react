import React from 'react';

import {Link} from "react-router-dom";

const chats = [
	 { url: '/gochat', img: 'assets/img/avatarfemale.jpg', name: 'Ange Micaela', time: 'Yesterday', status: 'status online', desc: 'Hi Guys, I was searching for news, but could not find anything yet. Sorry...'},
	 { url: '/gochat', img: 'assets/img/avatar2.jpg', name: 'Mr Martins', time: '10/05/2020', status: 'status', desc: 'Hi Guys, I was searching for news, but could not find anything yet. Sorry...'},
	 { url: '/gochat', img: 'assets/img/avatarfemale.jpg', name: 'Ange Micaela', time: '20 mins ago', status: 'status online', desc: 'Hi Guys, I was searching for news, but could not find anything yet. Sorry...'},
];

const recents = [
	{ url: '/gochat', img: 'assets/img/avatar.jpg', name: 'Jorge Martins', time: 'Yesterday', status: 'status online', desc: 'Hi Guys, I was searching for news, but could not find anything yet. Sorry...'},
	{ url: '/gochat', img: 'assets/img/avatarfemale.jpg', name: 'Ange Micaela', time: '30 mins ago', status: 'status', desc: 'Hi Guys, I was searching for news, but could not find anything yet. Sorry...'},
	{ url: '/gochat', img: 'assets/img/avatar2.jpg', name: 'The Team', time: 'Yesterday', status: 'status online', desc: 'Hi Guys, I was searching for news, but could not find anything yet. Sorry...'}
];

class Chatusers extends React.Component {

	render() {

		return(
			<>
				<section className="SectionChat WChat" id="SChat">

					<div className="bChat_B">
						<div className="bChat_BIn">

							{chats.map( item => (
								<div className="Blk_InChat">
									<Link to={ item.url }>
										<div className="top_avatar">
											<span className="avat">
												<img src={item.img} alt=""/>
												<span className={item.status} style={{ display: 'none'}}></span>
											</span>
											<span className="avatName">{item.name}</span>
											<span className={item.status}></span>
											<span className="timeChat">{item.time}</span>
										</div>
										<div className="bottom_avatar">
											<p>{item.desc}</p>
										</div>
									</Link>
								</div>
							))}

						</div>
					</div>

					<span className="recent_Chats">RECENT</span>

					<div className="sChat">

						{recents.map ( item => (
							<div className="Blk_InChat">
								<Link to={item.url}>
									<div className="top_avatar">
										<span className="avat">
											<img src={item.img} alt=""/>
											<span className={item.status} style={{ display: 'none'}}></span>
										</span>
										<span className="avatName">{item.name}</span>
										<span className={item.status}></span>
										<span className="timeChat">{item.time}</span>
									</div>

									<div className="bottom_avatar">
										<p>{item.desc}</p>
									</div>
								</Link>
							</div>
						))}
					
					</div>
				</section>
			</>
		)
	}
}

export default Chatusers;