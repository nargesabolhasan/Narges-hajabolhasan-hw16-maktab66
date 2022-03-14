import { React, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Signin = () => {
    const [user, setUser] = useState(
        {
            firstName: ' ',
            lastName: '',
            email: '',
            pasword: ' ',
            education: ' ',
            locOfEducation: ' ',
            city: ' ',
            locOfBirth: ' '
        }
    )
    return (
        <div>
            <Form>
                <div className="d-flex flex-row">
                    <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="نام خانوادگی" />
                    </Form.Group>
                    <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="نام" />
                    </Form.Group>
                </div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="پست الکترونیک" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="password" placeholder="کلمه عبور" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Select >
                        <option>محل سکونت</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Select >
                        <option>محل تولد</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Select >
                        <option>مدرک تحصیلی</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Select >
                        <option>محل تحصیل</option>
                    </Form.Select>
                </Form.Group>

                <Button variant="primary" type="submit">
                    ثبت نام
                </Button>
            </Form>
        </div>
    )
}

export default Signin