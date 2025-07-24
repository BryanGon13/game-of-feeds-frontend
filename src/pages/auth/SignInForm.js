import React from "react";

import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

import { Link } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

function SignInForm() {
    //   Add your component logic here

    return (
        <Row className={styles.Row}>
            <Col className="my-auto py-2 p-md-2" md={6}>
                <Container className={styles.FormCard}>
                    <h1 className={`${styles.Header} text-muted`}>Sign in</h1>
                    <hr />
                    <Form.Text><h5>Welcome to Game of Feeds</h5></Form.Text>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="username">
                            <Form.Label className="d-none">username</Form.Label>
                            <Form.Control
                                className={styles.InputFields}
                                type="text"
                                placeholder="Username"
                                name="username"
                                value={username}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        {errors.username?.map((msg, idx) => (
                            <Alert key={idx} variant="warning">{msg}</Alert>
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
                        {errors.password1?.map((msg, idx) => (
                            <Alert key={idx} variant="warning">{msg}</Alert>
                        ))}

                        <Button className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`} type="submit">
                            Sign In
                        </Button>
                        {errors.non_field_errors?.map((msg, idx) => (
                            <Alert key={idx} variant="warning" className="mt-3">{msg}</Alert>
                        ))}
                    </Form>

                    <hr />
                    <h1 className={`${styles.Header} text-muted`}>Or</h1>

                    <Container className={`mt-3 ${appStyles.Content}`}>
                        <Link className={styles.Link} to="/signup">
                            Don't have an account? <span>Sign up now!</span>
                        </Link>
                    </Container>
                </Container>
            </Col>

            <Col md={6} className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}>
                <Image
                    className={appStyles.FillerImage}
                    src="https://res.cloudinary.com/dctqmaht5/image/upload/v1752106178/game-of-feeds-cover_nwqesa.png"
                />
            </Col>
        </Row>
    );
}

export default SignInForm;