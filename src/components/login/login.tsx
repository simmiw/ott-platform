import { useState } from "react";
import Header from "../header/header";
import LoginViaEmail from "./login-via-email-fb";
import LoginViaMobile from "./login-via-mobile";

const Login = () => {
  const [loginType, setLoginType] = useState<"MOBILE" | "EMAIL">("MOBILE");

  const toggleLoginType = () => {
    if (loginType === "MOBILE") {
      setLoginType("EMAIL");
    } else {
      setLoginType("MOBILE");
    }
  };

  return (
    <>
      <Header />
      {loginType === "MOBILE" ? (
        <LoginViaMobile toggleLoginType={toggleLoginType} />
      ) : (
        <LoginViaEmail toggleLoginType={toggleLoginType} />
      )}
    </>
  );
};
export default Login;
