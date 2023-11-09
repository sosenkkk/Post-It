import React, { Component } from "react";

import Input from "../../components/Form/Input/Input";
import "./Auth.css"
import { required, length, email } from "../../util/validators";
import Auth from "./Auth";
import AuthButton from "../../components/Button/AuthButton";
import { NavLink } from "react-router-dom";
class Login extends Component {
  state = {
    loginForm: {
      email: {
        value: "",
        valid: false,
        touched: false,
        validators: [required, email],
      },
      password: {
        value: "",
        valid: false,
        touched: false,
        validators: [required, length({ min: 5 })],
      },
      formIsValid: false,
    },
  };

  inputChangeHandler = (input, value) => {
    this.setState((prevState) => {
      let isValid = true;
      for (const validator of prevState.loginForm[input].validators) {
        isValid = isValid && validator(value);
      }
      const updatedForm = {
        ...prevState.loginForm,
        [input]: {
          ...prevState.loginForm[input],
          valid: isValid,
          value: value,
        },
      };
      let formIsValid = true;
      for (const inputName in updatedForm) {
        formIsValid = formIsValid && updatedForm[inputName].valid;
      }
      return {
        loginForm: updatedForm,
        formIsValid: formIsValid,
      };
    });
  };

  inputBlurHandler = (input) => {
    this.setState((prevState) => {
      return {
        loginForm: {
          ...prevState.loginForm,
          [input]: {
            ...prevState.loginForm[input],
            touched: true,
          },
        },
      };
    });
  };

  render() {
    return (
      <div className="container__auth">
        <div className="lefthalf ">
          <div style={{textAlign: "center" , color: "#E5B8F4"}}>
            <h1>Welcome Back!</h1>
            <dotlottie-player src="https://lottie.host/85ad37f9-077d-49f1-a218-f8a888d27315/3WwpeaABEr.json" background="transparent" speed="1" style={{width: "300px", height: "300px", margin:"0 auto"}}  autoplay></dotlottie-player>

          </div>
        </div>

        <div className="righthalf">
      <Auth>
        <h1 className="title__">Welcome Back</h1>
        <form
          onSubmit={(e) =>
            this.props.onLogin(e, {
              email: this.state.loginForm.email.value,
              password: this.state.loginForm.password.value,
            })
          }
        >
          <Input
            id="email"
            placeholder="Email"
            type="email"
            control="input"
            onChange={this.inputChangeHandler}
            onBlur={this.inputBlurHandler.bind(this, "email")}
            value={this.state.loginForm["email"].value}
            valid={this.state.loginForm["email"].valid}
            touched={this.state.loginForm["email"].touched}
          />
          <Input
            id="password"
            placeholder="Password"
            type="password"
            control="input"
            onChange={this.inputChangeHandler}
            onBlur={this.inputBlurHandler.bind(this, "password")}
            value={this.state.loginForm["password"].value}
            valid={this.state.loginForm["password"].valid}
            touched={this.state.loginForm["password"].touched}
          />
          <NavLink  to="/signup" className="auth_sublink" >Don't have an account? Sign up</NavLink>
          <div className="centeredDiv authButtonCon">
            <AuthButton design="raised" type="submit" loading={this.props.loading}>
              Login
            </AuthButton>
          </div>
        </form>
      </Auth>
      </div>
      </div>
    );
  }
}

export default Login;
