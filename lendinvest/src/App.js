import { useState, useEffect } from 'react';

import './App.css';

import axios from 'axios';

import Popup from './Popup';


function App() {

    const [ data, setData ] = useState({ loans: [] });

    useEffect( async () => {

        const result = await axios('https://raw.githubusercontent.com/jorgeddmartins/react/master/data/current-loans.json');

        setData(result.data);

    }, []);

    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {

        setIsOpen(!isOpen);
    }

    console.clear();

    return (

        <section>
            <div className="loans_Blk">
                <h1>Current loans</h1>

                <ul>
                    {data.loans.map( item => (
                        <li id={ item.id }>
                            <h3>Loan Name { item.id }</h3>

                            <p>Tranche: { item.tranche }, Available: £{ item.available }, Annualised Return: £{ item.annualised_return }, Term Remaining: { item.term_remaining }, Ltv: £{ item.ltv }, Amount: £{ item.amount } </p>

                            <button onClick={togglePopup}>INVEST</button>
                        </li>
                    ))}
                </ul>

                <span className="t_Footer">Total amount available for investments: <b>£238,456</b></span>

            </div>

            {isOpen && <Popup
              content = { <div className="pop_In">

                <h3>Invest in Loan</h3>
                <p className="L_title">Title Name</p>
               
                <span>Amount available: £12.362</span>
                <span>Loan ends in: 1 month 10 days</span>

                <div className="am_Inp">
                    <label>Investment Amount (£)</label>
                    <input type="text" />
                </div>
                
                <button className="am_Btn" onClick={ togglePopup }>INVEST</button>

              </div> }
              handleClose={ togglePopup }
            />}

        </section>
    );
}

export default App;