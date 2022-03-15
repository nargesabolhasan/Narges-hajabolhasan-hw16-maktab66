import { React, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const Login = ({ parentCallback }) => {
    const [value, setValue] = useState({
        email: '',
        password: ''
    })
    const [passwordShown, setPasswordShown] = useState(false);
    //
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    //
    return (
        <div className="col-10 mx-auto">
            <h1 className="text-center">خوش آمدید</h1>
            <Form
                onSubmit={(e) => {
                    e.preventDefault()
                    parentCallback(value);
                }}
            >
                <Form.Group className="mb-3" >
                    <Form.Control
                        className="text-end"
                        type="email"
                        placeholder="پست الکترونیک"
                        value={value.email}
                        onChange={(e) => setValue(prev => ({ ...prev, email: e.target.value }))}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3 d-flex flex-row" >
                    <Form.Control
                        className="text-end"
                        type={passwordShown ? "text" : "password"}
                        value={value.password}
                        placeholder="کلمه عبور"
                        onChange={(e) => setValue(prev => ({ ...prev, password: e.target.value }))}
                        required
                    />
                    <span 
                    className="p-2 border border-secondary fs-5"
                    onClick={togglePassword}>
                        {!passwordShown && <IoEyeOffOutline onClick={togglePassword}/>}
                        {passwordShown && <IoEyeOutline onClick={togglePassword}/>}
                    </span>

                </Form.Group>
                <Button className="col-12" variant="primary" type="submit">
                    ورود
                </Button>
            </Form>
        </div>
    )
}
//BsEyeFill

export default Login