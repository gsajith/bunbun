import React, { Component } from 'react';
import TextField from './TextField';

/* the main page for the catering route of this app */
export default class Catering extends Component {
  constructor(props) {
    super(props);
    this.validate = this.validate.bind(this);
    this.form = React.createRef();
  }

  validate() {
    this.form.current.reportValidity();
  }

  render() {
    return (
      <form
        id="catering-form-container"
        className="flex"
        ref={this.form}
        onSubmit={(e) => e.preventDefault()}
      >
        <h1>Have our buns at your next event.</h1>

        <div id="catering-form-image">
          <img
            alt="Catering form"
            src="/assets/bunbuncatering.jpeg"
          />
        </div>
        <div id="catering-form-fields">
          <TextField header="What's your name?" type="text" name="input-name" placeholder="Your name here" required="true" />
          <TextField header="And your email?" type="email" name="input-email" placeholder="Email" required="true" />
          <TextField header="What kind of event are you hosting?" type="text" name="input-event" placeholder="Event type" required="true" />
          <TextField header="Guests?" type="number" name="input-people" placeholder="# of people" required="true" />
          <TextField header="On what day?" type="date" name="input-day" placeholder="Date" required="true" />

          <div className="button" onClick={this.validate} onKeyPress={this.validate} role="button" tabIndex={0}>
            Send us a catering request
          </div>
        </div>
      </form>
    );
  }
}
