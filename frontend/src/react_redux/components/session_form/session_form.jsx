import React from 'react';
import { func, instanceOf, oneOf } from 'prop-types';

import './session_form.css';

class SessionForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      password2: '',
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { errors } = nextProps;
    this.setState({
      username: '',
      password: '',
      password2: '',
      errors,
    });
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { processForm, formType } = this.props;
    const { username, password, password2 } = this.state;

    let user;
    if (formType === 'LOG IN') {
      user = { username, password };
    } else {
      user = { username, password, password2 };
    }

    processForm(user);
  }

  renderErrors() {
    const { errors } = this.state;

    return (
      <ul>
        {Object.keys(errors).map(errorType => (
          <li key={errorType}>
            {errors[errorType]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { formType } = this.props;
    const { username, password, password2 } = this.state;

    const confirmPassword = formType === 'SIGN UP' ? (
      <>
        <input type="password" placeholder="Confirm Password" value={password2} onChange={this.update('password2')} />
        <br />
      </>
    ) : null;

    return (
      <div className="session-form-container">
        <form className="session-form" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Username" value={username} onChange={this.update('username')} />
          <br />
          <input type="password" placeholder="Password" value={password} onChange={this.update('password')} />
          <br />
          {confirmPassword}
          <button type="submit">{formType}</button>
        </form>
      </div>
    );
  }
}

SessionForm.propTypes = {
  formType: oneOf(['LOG IN', 'SIGN UP']).isRequired,
  errors: instanceOf(Object).isRequired,
  processForm: func.isRequired,
};

export default SessionForm;
