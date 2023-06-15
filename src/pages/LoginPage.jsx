import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
  MDBCol,
} from "mdb-react-ui-kit";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const success = await login(email, password);
    if (success) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your successful login",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
      return;
    }
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <MDBCol className="d-flex justify-content-center">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="img-fluid"
          alt="Sample image"
          style={{ width: "400px", height: "auto", paddingBottom: "1.5rem" }}
        />
      </MDBCol>

      <MDBInput
        wrapperClass="mb-4"
        label="Email address"
        value={email}
        id="form1"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <MDBInput
        wrapperClass="mb-4"
        label="Password"
        value={password}
        id="form2"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <MDBBtn className="mb-4" onClick={handleSubmit}>
        Sign in
      </MDBBtn>

      <div className="text-center">
        <p>
          Not a member? <Link to="/register">Register</Link>
        </p>
      </div>
    </MDBContainer>
  );
}

export default LoginPage;
