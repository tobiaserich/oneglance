import React from "react";
import LoginButton from "../components/LoginButton";
import LoginInput from "../components/LoginInput";

export default {
  title: "Login Page"
};

export function LoginButtonEventManager() {
  return (
    <>
      <LoginButton>Login as event manager</LoginButton>
    </>
  );
}

export function LoginButtonUser() {
  return (
    <>
      <LoginButton>Login as User</LoginButton>
    </>
  );
}

export function LoginInputUsername() {
  return (
    <>
      <LoginInput type="text" placeholder="Username" id="UserName" />
    </>
  );
}

export function LoginInputPassword() {
  return (
    <>
      <LoginInput type="password" placeholder="Password" id="UserName" />
    </>
  );
}
