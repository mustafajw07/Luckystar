import React from "react";

function Form() {
return (
<div id="form" className="container">
	<div className="row">
			<h1 className="text-center">Get in touch</h1>
	</div>
	<div className="row input-container">
			<div className="col-xs-12">
				<div className="styled-input wide">
					<input type="text" required />
					<label>Name</label> 
				</div>
			</div>
			<div className="col-md-6 col-sm-12">
				<div className="styled-input">
					<input type="text" required />
					<label>Email</label> 
				</div>
			</div>
			<div className="col-md-6 col-sm-12">
				<div className="styled-input" style={{float:"right"}}>
					<input type="text" required />
					<label>Phone Number</label> 
				</div>
			</div>
			<div className="col-xs-12">
				<div className="styled-input wide">
					<textarea required></textarea>
					<label>Message</label>
				</div>
			</div>
			<div className="form-group">
        <div className="wrap">
          <button className="button">Submit</button>
        </div>
      </div>
	</div>
</div>	
);
}

export default Form;