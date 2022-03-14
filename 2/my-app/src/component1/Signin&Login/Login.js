import { React, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modals } from '../Modal/Modal';

const Login = ({parentCallback} ) => {
    const [value, setValue] = useState({
        email: '',
        password: ''
    })
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
                <Form.Group className="mb-3" >
                    <Form.Control
                        className="text-end"
                        type="password"
                        value={value.password}
                        placeholder="کلمه عبور"
                        onChange={(e) => setValue(prev => ({ ...prev, password: e.target.value }))}
                        required
                    />
                </Form.Group>
                <Button className="col-12" variant="primary" type="submit">
                    ورود
                </Button>
            </Form>
        </div>
    )
}

export default Login