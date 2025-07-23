import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import { Form, Button, Image, Col, Row, Container, Alert } from "react-bootstrap";
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "https://game-of-feeds-backend.herokuapp.com";

const SignUpForm = () => {
    const [signUpData, setSignUpData] = useState({
        username: '',
        password1: '',
        password2: '',
    });

    const { username, password1, password2 } = signUpData;
    const [errors, setErrors] = useState({});
    const history = useHistory();

    const handleChange = (event) => {
        setSignUpData({
            ...signUpData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("/dj-rest-auth/registration/", signUpData);
            history.push("/signin");
        } catch (err) {
            setErrors(err.response?.data || {});
            console.log("🚨 Error response:", err.response?.data);
        }
    };

    return (
        <Row className={styles.Row}>
            <Col className="my-auto py-2 p-md-2" md={6}>
                <Container className={styles.FormCard}>
                    <h1 className={`${styles.Header} text-muted`}>Sign up</h1>
                    <hr />
                    <Form.Text>
                        <h5>Welcome to Game of Feeds</h5>
                    </Form.Text>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="username">
                            <Form.Label className="d-none">Username</Form.Label>
                            <Form.Control
                                className={styles.InputFields}
                                type="text"
                                placeholder="Username"
                                name="username"
                                value={username}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        {errors.username?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>{message}</Alert>
                        ))}

                        <Form.Group controlId="password1">
                            <Form.Label className="d-none">Password</Form.Label>
                            <Form.Control
                                className={`${styles.InputFields} text-muted`}
                                type="password"
                                placeholder="Password"
                                name="password1"
                                value={password1}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        {errors.password1?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>{message}</Alert>
                        ))}

                        <Form.Group controlId="password2">
                            <Form.Label className="d-none">Confirm password</Form.Label>
                            <Form.Control
                                className={`${styles.InputFields} text-muted`}
                                type="password"
                                placeholder="Confirm password"
                                name="password2"
                                value={password2}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        {errors.password2?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>{message}</Alert>
                        ))}

                        <Button className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`} type="submit">
                            Continue
                        </Button>

                        {errors.non_field_errors?.map((message, idx) => (
                            <Alert variant="warning" key={idx} className="mt-3">
                                {message}
                            </Alert>
                        ))}
                    </Form>

                    <hr />
                    <h1 className={`${styles.Header} text-muted`}>Or</h1>
                    <Container className={`mt-3 ${appStyles.Content}`}>
                        <Link className={styles.Link} to="/signin">
                            Already have an account? <span>Sign in here</span>
                        </Link>
                    </Container>
                </Container>
            </Col>

            <Col
                md={6}
                className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}
            >
                <Image
                    className={appStyles.FillerImage}
                    src="https://codeinstitute.s3.amazonaws.com/AdvancedReact/hero2.jpg"
                    alt="Signup Visual"
                />
            </Col>
        </Row>
    );
};

export default SignUpForm;