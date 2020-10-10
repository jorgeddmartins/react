import React from 'react';



const keyNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '@', '/', '%', '$', '£', '-', '_', '.', '=', '+', '{', '}', '(', ')', '*', '&', '?', '!', '[', ']', '>', '<', ':', ';', ',', '|', '#', '~'];

const keyUppers = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','@','Z','Z','Z','.'];

const keyLowers = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','@','z','z','z','.'];

// const signpads = ['@', '/', '%', '$', '£', '-', '_', '.', '=', '+', '{', '}', '(', ')', '*', '&', '?', '!', '[', ']', '>', '<', ':', ';', ',', '|', '#', '~'];



function Chatkeypad() {

	return (

		<div className="KeypadApp chatkeypad">

			<div className="keyPad_Row">

        		

        		<div id="KeyPad">

        			{keyNums.map( keynum => (
        				
        				<span className="keyNum">{ keynum }</span>
        			))}
        			<span className="Alphabet">A</span>

        		</div>

        	</div>

        	<div className="letterPad_Row"> 

        		{keyLowers.map( keylower => (

        		  <span className="keyNum lowers">{ keylower }</span>
        		))}


        		{keyUppers.map( keyupper => (

        			<span className="keyNum uppers">{ keyupper }</span>
        			
        		))}
               
        		<span className="numeric">1/2</span>
        		<span className="lowercase upper">A/B</span>
        		<span className="del">Delete</span>

        	</div>

            <form action="" method="POST">
        	   <input type="text" className="keyNumVal" />
            </form>
		</div>

	);
}

export default Chatkeypad;

