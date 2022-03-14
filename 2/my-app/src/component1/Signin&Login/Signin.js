import { React, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modals } from '../Modal/Modal';


const Signin = ({parentCallback}) => {
    //**state for inputs **//
    const [user, setUser] = useState(
        {
            firstName: '',
            lastName: '',
            email: '',
            pasword: '',
            education: '',
            locOfEducation: '',
            city: '',
            locOfBirth: ''
        }
    )
    //**state for validation form **//
    const [validated, setValidated] = useState(false);
    //**state for modal **//
    const [show, setShow] = useState(false);

    //-----show & clouse modal-------
    const handleShow = () => setShow(true);
    const handleClose = () => {
        setShow(false)
        // window.location.reload(false);
    };

    //------handleSubmit------
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            handleShow()
            parentCallback(user)
            setUser(
                {
                    firstName: '',
                    lastName: '',
                    email: '',
                    pasword: '',
                    education: '',
                    locOfEducation: '',
                    city: '',
                    locOfBirth: ''
                }
            )
            
        }
        setValidated(true);
    };

    return (
        <div className="col-10 mx-auto">
            <h1 className="text-center">رایگان ثبت نام کنید  </h1>
            <Form
                className='text-end'
                noValidate
                validated={validated}
                onSubmit={(e) => handleSubmit(e)}
            >
                <div className="d-flex flex-row justify-content-center">
                    <Form.Group className="mb-3 me-1 col-6" >
                        <Form.Control
                            className="text-end"
                            type="text"
                            placeholder="نام خانوادگی"
                            value={user.lastName}
                            onChange={(e) => setUser(prev => ({ ...prev, lastName: e.target.value }))}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 col-6" >
                        <Form.Control
                            className="text-end"
                            type="text"
                            placeholder="نام "
                            value={user.firstName}
                            onChange={(e) => setUser(prev => ({ ...prev, firstName: e.target.value }))}
                            required
                        />
                    </Form.Group>
                </div>
                <Form.Group className="mb-3" >
                    <Form.Control
                        className="text-end"
                        type="email"
                        placeholder="پست الکترونیک"
                        value={user.email}
                        onChange={(e) => setUser(prev => ({ ...prev, email: e.target.value }))}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Control
                        className="text-end"
                        type="password"
                        value={user.pasword}
                        placeholder="کلمه عبور"
                        onChange={(e) => setUser(prev => ({ ...prev, pasword: e.target.value }))}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>محل سکونت</Form.Label>
                    <Form.Select
                        className="text-end"
                        required
                        onChange={(e) => setUser(prev => ({ ...prev, city: e.target.value }))}
                    >
                        <option ></option>
                        <option >محل تحصیل</option>
                        <option>م تحصیل</option>
                    </Form.Select >
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>محل تولد</Form.Label>
                    <Form.Select
                        className="text-end"
                        onChange={(e) => setUser(prev => ({ ...prev, locOfBirth: e.target.value }))}
                        required
                    >
                        <option ></option>
                        <option>محل تحصیل</option>
                        <option>م تحصیل</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>مدرک تحصیلی</Form.Label>
                    <Form.Select
                        className="text-end"
                        onChange={(e) => setUser(prev => ({ ...prev, education: e.target.value }))} >
                        <option>محل تحصیل</option>
                        <option>م تحصیل</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>محل تحصیل</Form.Label>
                    <Form.Select
                        className="text-end"
                        onChange={(e) => setUser(prev => ({ ...prev, locOfEducation: e.target.value }))}
                        required>
                        <option ></option>
                        <option>محل تحصیل</option>
                        <option>م تحصیل</option>
                    </Form.Select>
                </Form.Group>

                <Button className="col-12" variant="primary" type="submit">
                    ثبت نام
                </Button>
            </Form>
            <Modals
                handleShow={() => handleShow()}
                handleClose={() => handleClose()}
                show={show}
                massages="ثبت نام با موفقیت انجام شد"
            />
        </div>
    )
}

export default Signin