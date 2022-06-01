import { useForm } from '@formspree/react';


function Form() {
	const API = process.env.REACT_APP_EMAIL_KEY 
	const [state, handleSubmit] = useForm(API);
  if (state.succeeded) {
	  return <Form />
  }


return (
	<form onSubmit={handleSubmit}>
<div id="form" className="container">
	<div className="row">
			<h1 className="text-center">Get in touch</h1>
	</div>
	<div className="row input-container">
			<div className="col-xs-12">
				<div className="styled-input wide">
					<input type="text" required={true} name="name"/>
					<label>Name</label> 
				</div>
			</div>
			<div className="col-md-6 col-sm-12">
				<div className="styled-input">
					<input type="text" required={true} name="email"/>
					<label>Email</label> 
				</div>
			</div>
			<div className="col-md-6 col-sm-12">
				<div className="styled-input" style={{float:"right"}}>
					<input type="text" required={true} name="number"/>
					<label>Phone Number</label> 
				</div>
			</div>
			<div className="col-xs-12">
				<div className="styled-input wide">
					<textarea required={true} name="messeage"></textarea>
					<label>Message</label>
				</div>
			</div>
			<div className="form-group">
        <div className="wrap">
          <button type="submit" disabled={state.submitting} className="button">Submit</button>
        </div>
      </div>
	</div>
</div>	
</form>
);
}

export default Form;