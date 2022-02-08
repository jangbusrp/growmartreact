import React, { useState } from 'react';
import { Form, Button } from "react-bootstrap"
import { useLocation, Link, useHistory  } from 'react-router-dom';

import { db, auth } from "../../firebase";

const CreateProduct = () => {

    let location = useLocation();
    const pathName = location.pathname;
    const [pname, setPname] = useState()
    const [price, setPrice] = useState()
    const [description, setDescription] = useState()
    const history = useHistory()
    const [loading, setLoading] = useState(false)
    const getpname = (e) => {
        setPname(e.target.value)

    }
    const getprice = (e) => {
        setPrice(e.target.value)
    }
    const getdescription = (e) => {
        setDescription(e.target.value)

    }

    const getuser=()=>{
        console.log('user');
    }

    getuser();

    const createProd = (e) => {
        e.preventDefault();
        db.collection('products').add({
            pname: pname,
            price: price,
            description: description,
            authuser: { email: auth.currentUser.email, id: auth.currentUser.uid },

        })
        .then(() => { 
            setLoading(true)
            console.log("Product successfully created!");
            history.push("/createProduct")
          })
        .catch((error) => { 
            console.log(error) 
        })
    }


    //get all user
    // useEffect(() => {
    //     let userinfo = [];
    //     db.collection('products').get()
    //         .then((res) => {
    //             res.forEach(action => {
                 //           pid: doc.id,
        // //                 pname: product.pname,
        // //                 price: product.price,
        // //                 description: product.description
    //                 userinfo.push({ ...action.data(), id: action.id });
    //                 console.log(action.data())
    //             })
    //             setProducts(userinfo);
    //         })
    // }, [])

    // const updateProduct = (e) => {
    //     let pid = e.target.id
    //     db.collection('products').doc(pid).update({
    //         pname: pname,
    //         price: price,
    //         description: description
    
    //     })
    //         .then(() => {
    //             console.log('edit successfully')
    //         })
    //         .cath((error) => { console.log(error) })
    // }

    return (

        <>
            <div className={"container mt-4"}>
               
                <Form onSubmit={createProd} className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control name="pname" onChange={getpname} type="text" placeholder="enter your product name" />
                    <Form.Label>Product Price</Form.Label>
                    <Form.Control name="price" onChange={getprice} type="text" placeholder="price" />
                    <Form.Label>Description</Form.Label>
                    <Form.Control name="description" onChange={getdescription} type="text" placeholder="description" />
                    <Button disabled={loading} className={'ms-5'} variant="primary" type="submit"> AddProduct</Button>
                    <h4><Link to={`/productdetail`}  class="btn btn-primary">View All</Link></h4>
                </Form>
            </div>
        </>

    );

}

export default CreateProduct;