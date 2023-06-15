import React, { useContext, useState } from "react";
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const success = await register(username, email, password);
    if (success) {
      alert("Register berhasil!");
      navigate("/login");
      return;
    }
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <MDBInput
        wrapperClass="mb-4"
        label="Username"
        value={username}
        id="form1"
        type="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <MDBInput
        wrapperClass="mb-4"
        label="Email address"
        value={email}
        id="form2"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <MDBInput
        wrapperClass="mb-4"
        label="Password"
        value={password}
        id="form3"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <MDBBtn className="mb-4" onClick={handleSubmit}>
        Register
      </MDBBtn>

      <div className="text-center">
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </MDBContainer>
  );
}

export default Register;
