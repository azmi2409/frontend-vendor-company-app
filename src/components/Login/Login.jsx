import { Col } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import { useState, useEffect, useContext } from "react";
import { login } from "../../lib/helper";
import { CompanyContext } from "../../context/companyContext";
import { loginAction } from "../../stores/companyStores";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { company, dispatch } = useContext(CompanyContext);
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const [loginType, setLoginType] = useState("company");

  useEffect(() => {
    const title = `${loginType} Login Form`;
    document.title = title;
  }, [loginType]);

  useEffect(() => {
    if (company.isLoggedIn) {
      navigate("/dashboard");
    }
  }, [company.isLoggedIn]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await login(loginType, form);
      if (res.token) {
        dispatch(loginAction(res));
        console.log("login success", res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const switchType = () => {
    if (loginType === "company") {
      setLoginType("vendor");
    } else {
      setLoginType("company");
    }
  };
  return (
    <Col className="px-5 mx-5 w-50">
      <div className="d-flex justify-content-center align-self-center mb-5">
        <h1 className="fw-bold text-uppercase">Event Management System</h1>
      </div>
      <div className="d-flex justify-content-center">
        <Form className="w-50" onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="fw-bold">Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              onChange={handleChange}
              name="username"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="fw-bold">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={handleChange}
              name="password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>
              Login as{" "}
              <span className="fw-bold text-capitalize">{loginType}</span>
            </Form.Label>
            <Form.Check
              type="switch"
              onChange={switchType}
              label="Switch Login Type"
              name="switch"
            />
          </Form.Group>
          <div className="d-flex justify-content-center mt-2">
            <Button size="lg" className="py-2" variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </Col>
  );
};

export default Login;
