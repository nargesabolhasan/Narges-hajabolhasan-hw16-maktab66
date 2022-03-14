import React from 'react'
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Forms = () => {
    const { onSubmit } = this.props
    return (
        <div>
            <Form.Group className="mb-3 me-1 col-6" >
                <Form.Control
                    className="text-end"
                    type={type}
                    placeholder={placeholder}
                    value={user.lastName}
                    onChange={onChange}
                    required
                />
            </Form.Group>
        </div>
    )
}

export default Forms