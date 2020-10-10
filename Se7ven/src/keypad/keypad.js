import React from 'react';


const bubbs = [1, 2, 3, 4, 5, 6, 7];

const keyNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const keyUppers = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','@','Z','Z','Z','.'];

const keyLowers = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','@','z','z','z','.'];

const signpads = ['@', '/', '%', '$', '£', '-', '_', '.', '=', '+', '{', '}', '(', ')', '*', '&', '?', '!', '[', ']', '>', '<', ':', ';', ',', '|', '#', '~'];

function Keypad() {
	return (

		<div className="KeypadApp">

			<div className="keyPad_Row">
        		<div className="padBubbs">
        			<div className="addBubbs">
        				<div className="addBubbs_In"></div>
        			</div>
        			<div className="bubbs_in">

	        			{ bubbs.map( bub => (

	        				<span className="bubble"></span>
	        			))}

        			</div>
        		</div>

        		<div id="KeyPad">

        			{keyNums.map( keynum => (
        				
        				<span className="keyNum">{ keynum }</span>
        			))}
        			<span className="del">Delete</span>
        			<span className="Alphabet">A</span>

        		</div>

        		<span className="tkeyPad">Use the Keypad above to Login</span>
        	</div>

        	<div className="letterPad_Row"> 

        		{keyLowers.map( keylower => (

        		  <span className="keyNum lowers">{ keylower }</span>
        		))}

        		{keyUppers.map( keyupper => (

        			<span className="keyNum uppers">{ keyupper }</span>
        			
        		))}
                <span className="atSign">@</span>
        		<span className="numeric">1/2</span>
        		<span className="lowercase upper">A/B</span>
        		<span className="del">Delete</span>

                <div className="signPad_Row">

                    {signpads.map ( signpad => (
                      <span className="keyNum">{ signpad }</span>  
                    ))}
                    <span className="lowercase">a/b</span>
                    <span className="del">Delete</span>
                </div>
        	</div>

            <form action="" method="POST">
        	   <input type="text" className="keyNumVal" />
            </form>
		</div>

	);
}

export default Keypad;

