import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import logo from "../assets/svg/logo-white.svg";
import visibilityIcon from "../assets/svg/visibility.svg";

function SignIn() {
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCredential.user) {
        navigate("/");
      }
    } catch (error) {
      setErrorMessage("Incorrect email address or password");
    }
  };

  return (
    <>
      <div className="container card-container">
        <div className="card">
          <div className="card-image">
            <img src={logo} width="277px" height="78px" />
            <span className="attribute">Image attribute</span>
          </div>
          <div className="card-form">
            <header>
              <p className="title">Wecome back</p>
            </header>
            <form onSubmit={onSubmit}>
              {errorMessage && (
                <div className="error-box">
                  <h1>{errorMessage}</h1>
                </div>
              )}
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={onChange}
                />
                <label htmlFor="email">Email:</label>
              </div>

              <div className="form-group password-input">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={onChange}
                />
                <label htmlFor="password">Password:</label>
                <img
                  src={visibilityIcon}
                  alt="show password"
                  className="show-password"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              </div>

              <Link to="/forgot-password" className="link forgot-password-link">
                Forgot password
              </Link>
              <button className="btn btn-main">Login</button>
            </form>

            {/* Google OAuth */}
            <div className="sign-up">
              <p>
                Not registered?{" "}
                <Link to="/sign-up" className="link register-link">
                  Sign up then!
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
