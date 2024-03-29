import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
import logo from "../assets/svg/logo-white.svg";
import visibilityIcon from "../assets/svg/visibility.svg";

function SignUp() {
  const [showPassword, setShowPassword] = useState();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { email, password, name } = formData;
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
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      updateProfile(auth.currentUser, {
        displayName: name,
      });

      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, "users", user.uid), { formDataCopy });

      navigate("/");
    } catch (error) {
      console.log(error);
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
              <p className="title">Join us</p>
            </header>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input type="text" id="name" value={name} onChange={onChange} />
                <label htmlFor="text">Name:</label>
              </div>
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

              <button className="btn btn-main">Sign up</button>
            </form>

            {/* Google OAuth */}
            <div className="sign-up">
              <p>
                Already registered?{" "}
                <Link to="/sign-in" className="link register-link">
                  Sign in then!
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
