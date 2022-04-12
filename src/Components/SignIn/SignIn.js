import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const SignIn = () => {

    /* use state  */
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    /* firebase hooks use state and update section */
    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
     /* google hooks */
     const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    /* handle email section */
    const handleEmail = (event) => {
        setEmail(event.target.value);

    }
    /* handle password section */
    const handlePassword = (event) => {
        setPassword(event.target.value);

    }
    /* handle Confirm Password section */
    const handleConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);

    }
    /* handle Submit button  */
    const handleSubmit = event => {
        event.preventDefault();
        console.log("i am clicked")
        console.log("eamil:", email);
        console.log("password:", password);

        createUserWithEmailAndPassword(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
    }


    return (
        <div className='container'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <br />
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <br />
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <br />
                    <Form.Control onBlur={handleConfirmPassword} type="password" placeholder="Confirm Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Button onClick={()=>signInWithGoogle()}> google</Button>
            </Form>

        </div>
    );
};

export default SignIn;