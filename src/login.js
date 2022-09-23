import { useState } from "react";
import { BsEye } from "react-icons/bs";
const Login = () => {
  const [show, setShow] = useState(0);
  const [show2, setShow2] = useState(0);
  return (
    <div className="mainComp">
      <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/51158316-fd7e-48ca-b5fe-8542e9dfe357/dcos1ix-7b78c25b-bfb7-46cd-8cbc-e85f4facbe21.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUxMTU4MzE2LWZkN2UtNDhjYS1iNWZlLTg1NDJlOWRmZTM1N1wvZGNvczFpeC03Yjc4YzI1Yi1iZmI3LTQ2Y2QtOGNiYy1lODVmNGZhY2JlMjEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.wKuxMCZwesaknaYMAljg0ucxe3VwxPtEmjgbwiANn6I"></img>
      <div className="credentials">
        <div className="register">
          <form className="form-1">
            <div className="go">
              <label className="register-label"> Phone Number </label>
              <input
                id="phone-number"
                type="text"
                placeholder="Type Here..."
                className="register-input phoneNumber"
                name="phone-number"
              ></input>
              <label className="register-label"> Email Address</label>
              <input
                id="phone-number"
                type="text"
                placeholder="Type Here..."
                className="register-input email"
                name="email-adress"
              ></input>
              <label className="register-label"> Birth Date </label>
              <input
                id="M"
                type="date"
                placeholder="Type Here..."
                className="register-input"
                name="birth-date"
              ></input>
              <label className="register-label"> Sex </label>
              <div>
                <input
                  type="radio"
                  id="huey"
                  name="genderM"
                  value="huey"
                  className="lb"
                ></input>
                <label for="huey" className="register-label lb2">
                  M
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="dewey"
                  name="genderF"
                  value="dewey"
                  className="lb"
                ></input>
                <label for="dewey" className="register-label lb2">
                  F
                </label>
              </div>
            </div>
            <div className="separator"></div>
            <div className="separator2"></div>
            <div className="go go2">
              <label className="register-label"> Username </label>
              <input
                id="phone-number"
                type="text"
                placeholder="Type Here..."
                className="register-input username"
                name="username"
              ></input>
              <label className="register-label"> Password </label>
              <BsEye
                className="bseye"
                onClick={() => {
                  setShow(1 - show);
                }}
              ></BsEye>
              <input
                id="phone-number"
                type={`${show ? "text" : "password"}`}
                placeholder="Type Here..."
                className="register-input password"
              ></input>
              <label className="register-label"> Confirm Password</label>
              <BsEye
                className="bseye"
                onClick={() => {
                  setShow2(1 - show2);
                }}
              ></BsEye>
              <input
                id="M"
                type={`${show2 ? "text" : "password"}`}
                placeholder="Type Here..."
                className="register-input"
              ></input>
            </div>
            <input type="submit" value="Submit" className="btn-submit"></input>
          </form>
        </div>
        <div className="login">
          <form className="form-2" action="connection.php" method="post">
            <label for="username" className="register-label2">
              Username:
            </label>
            <input
              id="phone-number"
              type="text"
              placeholder="Type Here..."
              className="register-input2 username"
              name="reg-usermanem"
            ></input>
            <label for="username" className="register-label2">
              Password:
            </label>
            <input
              id="phone-number"
              type="password"
              placeholder="Type Here..."
              className="register-input2 username"
              name="reg-password"
            ></input>
            <label for="username" className="register-label2">
              Confirm Password:
            </label>
            <input
              id="phone-number"
              type="password"
              placeholder="Type Here..."
              className="register-input2 username"
              name="reg-newpassword"
            ></input>
            <button className="login-btn" type="submit">
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
