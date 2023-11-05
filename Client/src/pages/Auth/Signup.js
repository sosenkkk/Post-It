import React, { Component } from 'react';

import Input from '../../components/Form/Input/Input';
import Button from '../../components/Button/Button';
import { required, length, email } from '../../util/validators';
import Auth from './Auth';
import AuthButton from '../../components/Button/AuthButton';
import { NavLink } from 'react-router-dom';

class Signup extends Component {
  state = {
    signupForm: {
      email: {
        value: '',
        valid: false,
        touched: false,
        validators: [required, email]
      },
      password: {
        value: '',
        valid: false,
        touched: false,
        validators: [required, length({ min: 5 })]
      },
      name: {
        value: '',
        valid: false,
        touched: false,
        validators: [required]
      },
      formIsValid: false
    }
  };

  inputChangeHandler = (input, value) => {
    this.setState(prevState => {
      let isValid = true;
      for (const validator of prevState.signupForm[input].validators) {
        isValid = isValid && validator(value);
      }
      const updatedForm = {
        ...prevState.signupForm,
        [input]: {
          ...prevState.signupForm[input],
          valid: isValid,
          value: value
        }
      };
      let formIsValid = true;
      for (const inputName in updatedForm) {
        formIsValid = formIsValid && updatedForm[inputName].valid;
      }
      return {
        signupForm: updatedForm,
        formIsValid: formIsValid
      };
    });
  };

  inputBlurHandler = input => {
    this.setState(prevState => {
      return {
        signupForm: {
          ...prevState.signupForm,
          [input]: {
            ...prevState.signupForm[input],
            touched: true
          }
        }
      };
    });
  };

  render() {
    return (
      <div className="container__auth">
      <div className="lefthalf ">
      <div style={{textAlign: "center" , color: "#E5B8F4"}}>

          <h1>Hello there,</h1>
          <h3>Register if you don't have an account</h3>
          <dotlottie-player src="https://lottie.host/d7748d3c-194e-4428-97c1-8d9a8d7d5114/8viuSckMWA.json" background="transparent" speed="1" style={{width: "350px", height: "400px", margin:"0 auto"}} autoplay></dotlottie-player>
        </div>
      </div>
      <div className="righthalf">
      <Auth>
        <h1 className='title__'>Sign Up</h1>

        <form onSubmit={e => this.props.onSignup(e, this.state)}>
          <Input
            id="email"
            placeholder="Email"
            type="email"
            control="input"
            onChange={this.inputChangeHandler}
            onBlur={this.inputBlurHandler.bind(this, 'email')}
            value={this.state.signupForm['email'].value}
            valid={this.state.signupForm['email'].valid}
            touched={this.state.signupForm['email'].touched}
          />
          <Input
            id="name"
            placeholder="Username"
            type="text"
            control="input"
            onChange={this.inputChangeHandler}
            onBlur={this.inputBlurHandler.bind(this, 'name')}
            value={this.state.signupForm['name'].value}
            valid={this.state.signupForm['name'].valid}
            touched={this.state.signupForm['name'].touched}
          />
          <Input
            id="password"
            placeholder="Password"
            type="password"
            control="input"
            onChange={this.inputChangeHandler}
            onBlur={this.inputBlurHandler.bind(this, 'password')}
            value={this.state.signupForm['password'].value}
            valid={this.state.signupForm['password'].valid}
            touched={this.state.signupForm['password'].touched}
          />
          <NavLink  to="/login" className="auth_sublink" >Have an account? Sign In</NavLink>

          <div className='centeredDiv authButtonCon'>
          <AuthButton design="raised" type="submit" loading={this.props.loading}>
            Signup
          </AuthButton>
          </div>
          
        </form>
      </Auth>
      </div>
      </div>
    );
  }
}

export default Signup;
