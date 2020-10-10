import React  from 'react';

import axios from 'axios';

import { Link } from 'react-router-dom';

import $ from 'jquery';


class TeamSrequest extends React.Component {

    state = {
        teams: []
    }

    // Element Remove Function
    btnRemove = (e) => {
        
        e.preventDefault();

        // Child Id to be Removed
        let elem = document.getElementById("rTeam");

        // Removes Child's Id From Dom
        elem.parentElement.removeChild(elem);

        let elemin = document.getElementById('rModal_in');

        let elemModal = document.getElementById('removeModal');

        elemin.classList.add('tRemoved');

        elemModal.classList.remove('aModalNone');

        setTimeout( () => {

            elemin.classList.remove('tRemoved');
            elemModal.classList.add('aModalNone');

        }, 1300);
    }

    // Element Accepted Function
    btnAccept = (event) => {

        event.preventDefault();

        let eleme = document.getElementById("rTeam");

        let elemin = document.getElementById('aModal_in');

        let elemModal = document.getElementById('acceptModal');

        elemin.classList.add('tAccepted');

        elemModal.classList.remove('aModalNone');

        setTimeout( () => {

            elemin.classList.remove('tAccepted');
            elemModal.classList.add('aModalNone');
            eleme.parentElement.removeChild(eleme);

        }, 1300);
    }

    componentDidMount() {

        $.getScript('assets/js/routing.js');

        // axios.get(`https://jsonplaceholder.typicode.com/users`)
        axios.get(`assets/js/data/teams.json`)
          .then(res => {
            const teams = res.data;
            this.setState({ teams });
        })
    }

    render() {
        return (
            <>
                { this.state.teams.map(team => 
                    <div className="r_Team" id="rTeam">
                        <span className="close_Team" id="CTeam" onClick={this.btnRemove}>+</span>

                        <div className="img_F"><img src={team.img} /></div>
                        <div className="t_info">
                            <span className="t_info_Title">{team.title}</span>
                            <p className="t_info_parag">{team.desc}</p>

                            <span className="actBtn" id="actBtn" onClick={this.btnAccept}>Accept Team</span>
                        </div>
                    </div>
                )}

                
            </>
        )
    }
}

export default TeamSrequest;