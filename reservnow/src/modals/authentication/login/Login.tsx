import "./login.css";
import { AiOutlineClose } from "react-icons/ai";
import AuthenticationButton from "@/components/authenticationBtn/AuthenticationButton";

function Login(props: any) {
  return props.login ? (
    <div className="loginRoot">
      <div className="logincontainer">
        <div className="loginHeader">
          <div
            className="cancelBtn"
            onClick={() => {
              props.setLogin(false);
            }}
          >
            <AiOutlineClose />
          </div>
        </div>
        <div className="title">Welcome back John Smith</div>
        <div className="formItem">
          <input type="password" className="formInput" placeholder="Password" />
        </div>
        <div className="forgotPassword">forgot password?</div>
        <AuthenticationButton text="Login" />
      </div>
    </div>
  ) : (
    ""
  );
}

export default Login;
