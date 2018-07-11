import React from 'react';

const Stepform = () => (
  
	<section>
		
		<form id="stepForm" action="" method="post" className="YourCarLowStepForm"> 
		    
		    <h2></h2>
		    <section data-step="0">
		        <span className="heading">How Much would you like to borrow?</span>
		        <div className="stages-modern-inner">
		        
		            <div className="sliderBox">
		            	<input id="ex1" data-slider-id='ex1Slider' type="text" data-slider-min="3" data-slider-max="50" data-slider-step="1" data-slider-value="4"/>
		            </div>

		        </div>
		    </section>
		    
		    <h2></h2>
		    <section data-step="1">
		        <span className="heading">Driving license type?</span>
		        <div className="stages-modern-inner">
		            <div className="form-group has-feedback">
		                <select name="licenceTyp" id="" className="form-control required">
		                    <option value="Please">Please Select</option>
		                    <option value="fullUKDrivingLicence">Full UK Driving Licence</option>
		                    <option value="provisionalUKDrivingLicence">Provisional UK Driving Licence</option>
		                    <option value="CBT">CBT</option>
		                    <option value="A2">A2</option>
		                    <option value="fullAclassName">Full A className</option>
		                    <option value="europeanLicence">European Licence</option>
		                    <option value="internationalLicence">International Licence</option>
		                    <option value="noLicence">No Licence</option>
		                </select>
		            </div>
		        </div>
		    </section>
		  
		    <h2></h2>
		    <section data-step="2">
		        <span className="heading">Date of birth?</span>
		        <div className="stages-modern-inner">
		            <div className="form-group dateOfBirth">
		                <div className="col-xs-4">
		                    <select name="dd_dob_da" id="dd_dob_day" className="form-control">
		                        <option value="0">Day</option>
		                        <option value="01">01</option>
		                        <option value="02">02</option>
		                        <option value="03">03</option>
		                        <option value="04">04</option>
		                        <option value="05">05</option>
		                        <option value="06">06</option>
		                        <option value="07">07</option>
		                        <option value="08">08</option>
		                        <option value="09">09</option>
		                        <option value="10">10</option>
		                        <option value="11">11</option>
		                        <option value="12">12</option>
		                        <option value="13">13</option>
		                        <option value="14">14</option>
		                        <option value="15">15</option>
		                        <option value="16">16</option>
		                        <option value="17">17</option>
		                        <option value="18">18</option>
		                        <option value="19">19</option>
		                        <option value="20">20</option>
		                        <option value="21">21</option>
		                        <option value="22">22</option>
		                        <option value="23">23</option>
		                        <option value="24">24</option>
		                        <option value="25">25</option>
		                        <option value="26">26</option>
		                        <option value="27">27</option>
		                        <option value="28">28</option>
		                        <option value="29">29</option>
		                        <option value="30">30</option>
		                        <option value="31">31</option>
		                    </select>
		                    <span className="mobileSelectArrow"></span>
		                </div>
		                <div className="col-xs-4">
		                    <select name="dd_dob_mont" id="dd_dob_month" className="form-control">
		                        <option value="0">Month</option>
		                        <option value="01">01</option>
		                        <option value="02">02</option>
		                        <option value="03">03</option>
		                        <option value="04">04</option>
		                        <option value="05">05</option>
		                        <option value="06">06</option>
		                        <option value="07">07</option>
		                        <option value="08">08</option>
		                        <option value="09">09</option>
		                        <option value="10">10</option>
		                        <option value="11">11</option>
		                        <option value="12">12</option>
		                    </select>
		                    <span className="mobileSelectArrow"></span>
		                </div>
		                <div className="col-xs-4">
		                    <select name="dd_dob_yea" id="dd_dob_year" className="form-control">
		                        <option value="0">Year</option>
		                        <option value="1997">1997</option>
		                        <option value="1996">1996</option>
		                        <option value="1995">1995</option>
		                        <option value="1994">1994</option>
		                        <option value="1993">1993</option>
		                        <option value="1992">1992</option>
		                        <option value="1991">1991</option>
		                        <option value="1990">1990</option>
		                        <option value="1989">1989</option>
		                        <option value="1988">1988</option>
		                        <option value="1987">1987</option>
		                        <option value="1986">1986</option>
		                        <option value="1985">1985</option>
		                        <option value="1984">1984</option>
		                        <option value="1983">1983</option>
		                        <option value="1982">1982</option>
		                        <option value="1981">1981</option>
		                        <option value="1980">1980</option>
		                        <option value="1979">1979</option>
		                        <option value="1978">1978</option>
		                        <option value="1977">1977</option>
		                        <option value="1976">1976</option>
		                        <option value="1975">1975</option>
		                        <option value="1974">1974</option>
		                        <option value="1973">1973</option>
		                        <option value="1972">1972</option>
		                        <option value="1971">1971</option>
		                        <option value="1970">1970</option>
		                        <option value="1969">1969</option>
		                        <option value="1968">1968</option>
		                        <option value="1967">1967</option>
		                        <option value="1966">1966</option>
		                        <option value="1965">1965</option>
		                        <option value="1964">1964</option>
		                        <option value="1963">1963</option>
		                        <option value="1962">1962</option>
		                        <option value="1961">1961</option>
		                        <option value="1960">1960</option>
		                        <option value="1959">1959</option>
		                        <option value="1958">1958</option>
		                        <option value="1957">1957</option>
		                        <option value="1956">1956</option>
		                        <option value="1955">1955</option>
		                        <option value="1954">1954</option>
		                        <option value="1953">1953</option>
		                        <option value="1952">1952</option>
		                        <option value="1951">1951</option>
		                        <option value="1950">1950</option>
		                        <option value="1949">1949</option>
		                        <option value="1948">1948</option>
		                        <option value="1947">1947</option>
		                        <option value="1946">1946</option>
		                        <option value="1945">1945</option>
		                        <option value="1944">1944</option>
		                        <option value="1943">1943</option>
		                        <option value="1942">1942</option>
		                        <option value="1941">1941</option>
		                        <option value="1940">1940</option>
		                        <option value="1939">1939</option>
		                        <option value="1938">1938</option>
		                        <option value="1937">1937</option>
		                        <option value="1936">1936</option>
		                        <option value="1935">1935</option>
		                        <option value="1934">1934</option>
		                        <option value="1933">1933</option>
		                        <option value="1932">1932</option>
		                        <option value="1931">1931</option>
		                        <option value="1930">1930</option>
		                        <option value="1929">1929</option>
		                        <option value="1928">1928</option>
		                        <option value="1927">1927</option>
		                        <option value="1926">1926</option>
		                        <option value="1925">1925</option>
		                        <option value="1924">1924</option>
		                        <option value="1923">1923</option>
		                        <option value="1922">1922</option>
		                        <option value="1921">1921</option>
		                        <option value="1920">1920</option>
		                        <option value="1919">1919</option>
		                        <option value="1918">1918</option>
		                        <option value="1917">1917</option>
		                        <option value="1916">1916</option>
		                        <option value="1915">1915</option>
		                    </select>
		                    <span className="mobileSelectArrow"></span>
		                </div>
		                <div className="clearfix"></div>
		            </div>
		        </div>
		    </section>

		    <h2></h2>
		    <section data-step="3">
		        <span className="heading"></span>
		        <div className="stages-modern-inner">
		            <div className="form-group has-feedback">
		                <label className="long">Title</label>
		                <select name="titl" className="form-control">
		                    <option value="Please">Please Select</option>
		                    <option value="Mr">Mr</option>
		                    <option value="Mrs">Mrs</option>
		                    <option value="Miss">Miss</option>
		                    <option value="Ms">Ms</option>
		                    <option value="Other">Other</option>
		                </select>
		            </div>
		            <div className="form-group has-feedback">
		                <label>First Name</label>
		                <input name="firstNam" type="text" id="firstName" className="form-control required" placeholder="First Name" autoComplete="name" />
		                <span className="glyphicon form-control-feedback" aria-hidden="true"></span>
		            </div>
		            <div className="form-group has-feedback">
		                <label>Last Name</label>
		                <input name="lastNam" type="text" id="lastName" className="form-control required" placeholder="Last Name" autoComplete="family-name" />
		                <span className="glyphicon form-control-feedback" aria-hidden="true"></span>
		            </div>
		        </div>
		    </section>

		</form>


		<p>We are here to provide you with a craloan service. We will not send you any unsolicited email. We use lateste encryption technology available for commercial use to pass your information between our system and our lender Network. Security of your personal information is very impoerant to us and our Car Loan partners.</p>
		<img className="safeImg tada" src="img/safe.png"/><img className="audiImg zoomInright" src="img/audi.png" />
    

	</section>

	
);

export default Stepform;
