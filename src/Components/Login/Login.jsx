import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom'

//Styling
import { Container, Button } from 'react-bootstrap';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

//components 

import Register from '../Register/Register'


const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger m-2" role="alert">
                This field is required!
            </div>
        );
    }
};

const Login = (props) => {

    const form = useRef();
    const checkBtn = useRef();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        setMessage("");
        setLoading(true);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            console.log("no errors!")
        } else {
            setLoading(false);
    }};

    return (
        <div className="col-md-12 login">
          <div className="card card-container m-2 p-3">
                <Form  ref={form} onChange={handleLogin}>
                    <div className="">
                    <label htmlFor="username">Username</label>
                        <Input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={username}
                            onChange={onChangeUsername}
                            validations={[required]}
                        />
                    </div>
                    <div className="pt-3">
                    <label htmlFor="email">Email</label>
                        <Input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={onChangePassword}
                            validations={[required]}
                        />
                    </div>
                    <div className="form-group pt-3">
                        <Link to="/MainPage">
                        <button className="btn btn-primary btn-block" disabled={!loading}>
                            {/* {loading && (
                                <span className="spinner-border spinner-border-sm"></span>
                            )} */}
                            <span>Login</span>
                        </button>
                        </Link>
                    </div>
                    <div className="form-group">
                        <Link to="/Register">
                        <button className="btn btn-primary btn-block" >
                            <span>Register</span>
                        </button>
                        </Link>
                    </div>
                    {message && (
                        <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                                {message}
                            </div>
                        </div>
                    )}
                    <CheckButton style={{ display: "none" }} ref={checkBtn}/>          
                </Form>
            </div>
        </div>
    );
}

export default Login