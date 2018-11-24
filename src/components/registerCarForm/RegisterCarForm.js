import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

export default class RegisterCarForm extends PureComponent {

  static propTypes = {
    registerCar: PropTypes.func
  };

  state = {
    make: '',
    model: '',
    plate: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  onSubmit = event => {
    const { registerCar } = this.props;
    const { make, model, plate } = this.state;
    
    event.preventDefault();
    registerCar(make, model, plate);
    this.props.history.push(`/cars/${plate}`);
  };

  render() {


    return (
      <Fragment>
        <h1>Register a New Car</h1>
        <form>
          <label htmlFor='make'>Make</label>
          <input id='make' type='text' name='make' onChange={this.handleChange}/>

          <label htmlFor='model'>Model</label>
          <input id='model' type='text' name='model' onChange={this.handleChange}/>

          <label htmlFor='plate'>Plate Info</label>
          <input id='plate' type='text' name='plate' onChange={this.handleChange}/>

          <button onClick={this.onSubmit}>Register</button>
        </form>
      </Fragment>
    );
  }
}
