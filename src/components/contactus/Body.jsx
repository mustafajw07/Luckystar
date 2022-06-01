import { useForm } from '@formspree/react';

function Body() {
  const API = process.env.REACT_APP_EMAIL_KEY 
  const [state, handleSubmit] = useForm(API);
  if (state.succeeded) {
	  return <Body />
  }
return (
<>
<form onSubmit={handleSubmit}>
<div className="py-5 my-5 background">
  <div id="container-cu">
    <div className="screen">
      <div className="screen-body">
        <div className="screen-body-item left">
          <div className="app-title">
            <span>CONTACT</span>
            <span>US</span>
          </div>
        </div>
        <div className="screen-body-item">
          <div className="app-form">
            <div className="app-form-group">
              <input className="app-form-control" placeholder="NAME" name='name'/>
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="EMAIL" name='email' required = {true}/>
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="CONTACT NO" name='number' required = {true}/>
            </div>
            <div className="app-form-group message">
              <input className="app-form-control" placeholder="MESSAGE" name='messeage' required = {true}/>
            </div>
            <div className="app-form-group buttons">
              <button type='submit' disabled={state.submitting} className="app-form-button">SEND</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</form>
</>
);
}

export default Body;