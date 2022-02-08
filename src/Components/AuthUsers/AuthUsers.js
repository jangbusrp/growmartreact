import React, { useState, useEffect } from 'react';
import { Form, Button, Card, Table} from "react-bootstrap"
import { useLocation, Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

import { db } from "../../firebase";
import { app } from "../../firebase";

const AuthUsers = () => {
    const [firstname, setFirstName] = useState()
    const [lastname, setLastName] = useState()
    const [ contact, setContact] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    
    let location = useLocation();
    const pathName = location.pathname;
    const [usersinfo, setUsersInfo] = useState([])

    const getfirstname = (e) => {
        setFirstName(e.target.value)
    }
    const getlastname = (e) => {
        setLastName(e.target.value)

    }

    const getcontact =(e)=>{
        setContact(e.target.value)
    }
    const getemail = (e) => {
        setEmail(e.target.value)

    }
    const getpassword = (e) => {
        setPassword(e.target.value)

    }




    //   const signupForm = document.querySelector('#signup-form');
    //   signupForm.addEventListener('submit', (e)=>{
    //     e.preventDefault();
    //   }

    //     auth.createUserWithEmailAndPassword(email, password).then(details => {
    //       return  db.collection('users').doc(details.user.uid).set({
    //             firstname: signupForm.firstname.value
    //         });

        // }

    const handleSubmit = (e)=> {
        e.preventDefault();
        // if ( e.target.value === null) {
        //   return console.log("form values are empty");

        // }else{
        
       app.auth().createUserWithEmailAndPassword(email, password).then(async details => {
           const res = await db.collection('users').doc(details.user.uid).set({
               FirstName: firstname,
               LastName: lastname,
               Contact: contact
           });
           console.log(res)
           console.log("signup successfuly");

      });
    }

 


    useEffect(() => {
        let userinfo = [];
        db.collection('users').get()
            .then((res) => {
                res.forEach(action => {
                    userinfo.push({ ...action.data(), id: action.id });
                    console.log(action.data())
                })
                setUsersInfo(userinfo);
            })
    }, [])



    //     document.addEventListener('DOMContentLoaded', function(){
    //         var modals = document.querySelectorAll('.modal');
    //         M.Modal.init(modals);
    //     })

    // const signupForm = document.querySelector('#signup-form');
    // signupForm.addEventListener('submit', (e)=>{
    //     e.preventDefault();

    //     const email = signupForm['signup-email'].value;
    //     const password = signupForm['signup-password'].value;
    //    auth.createUserWithEmailAndPassword(email, password).then(details => {
    //       return  db.collection('users').doc(details.user.uid).set({
    //             firstname: signupForm['signup-firstname'].value
    //         });
    //     })
    // .then(()=>{
    //     const modal = document.querySelector('#modal-signup');
    //     modal.getInstance(modal).close();
    //     signupForm.reset();
    // });
    // });



    // .then((res) => { setError("product created")  })
    // .catch((error) => { console.log(error) })


    return (

        <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
         
          <Form onSubmit={handleSubmit}>

          <Form.Group id="firstname">
          <Form.Label>First Name</Form.Label>
              <Form.Control type="text"   onClick={getfirstname} id="firstname"  required />
            </Form.Group>

            <Form.Group id="lastname">
            <Form.Label>Last Name</Form.Label>
              <Form.Control type="text"  onClick={getlastname} id="firstname" required />        
            </Form.Group>

            <Form.Group id="Contact">
            <Form.Label>Contact No.</Form.Label>
              <Form.Control type="number"  onClick={getcontact} id="contact" required />        
            </Form.Group>

            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" onClick={getemail} id="email" required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" onClick={getpassword}  id="password" required />
            </Form.Group>
          
            <Button  className="w-100" type="submit">
              Sign Up
            </Button>

            <Link
                className={pathName === '/usersdetails' }
                to='/usersdetails'>Users Details</Link>
          </Form>
        </Card.Body>
      </Card>


      <Table  striped bordered variant="primary" size="sm">
                        <thead>
                          <tr>
                          <th>SN.</th>
                            <th> ID</th>
                            <th>First Name</th>
                            <th>Last Nmae</th>
                            <th>Contact Number</th>
                          </tr>
                        </thead>
           
                {
                usersinfo.map((action, index) => (
                      
                    <tbody>
                    <tr key={ action.id }>
                      <th > {index + 1} </th>
                      <td>{action.id}</td>
                      <td>{action.FirstName}</td>
                      <td>{action.LastName}</td>
                      <td>{action.Contact}</td>
            
                    </tr>
                  </tbody>
          
                ) )
                
                }
                </Table> 
          
        </>

    );

}

export default AuthUsers;