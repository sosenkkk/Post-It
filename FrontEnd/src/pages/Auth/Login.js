import React, { Component } from "react";

import Input from "../../components/Form/Input/Input";
import Button from "../../components/Button/Button";
import { required, length, email } from "../../util/validators";
import Auth from "./Auth";

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
          <div style={{textAlign: "center" , color: "white"}}>
            <h1>Welcome</h1>
            <h3>Login if you have an account</h3>
          </div>
        </div>
        <div className="righthalf">
      <Auth>
        <h1 className="title__">Login</h1>
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
          <div className="centeredDiv">
            <Button design="raised" type="submit" loading={this.props.loading}>
              Login
            </Button>
          </div>
        </form>
      </Auth>
      </div>
      </div>
    );
  }
}

export default Login;
