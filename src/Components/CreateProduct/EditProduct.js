import React, { Component} from 'react';
import { Form, Button } from "react-bootstrap"
import {  Link } from 'react-router-dom';
import { db } from "../../firebase";


    class EditProduct extends Component {
        constructor(props) {
            super(props);
          this.state = {
            pid: '',
            pname: '',
            price: '',
            description: ''
          };
        }
        componentDidMount() {
       db.collection('products').doc(this.props.match.params.id).get().then((doc) => {
            if (doc.exists) {
              const product = doc.data();
              this.setState({
                pid: doc.id,
                pname: product.pname,
                price: product.price,
                description: product.description
              });
            } else {
              console.log("No such document!");
            }
          });
        }
        onChange = (e) => {
          const state = this.state
          state[e.target.name] = e.target.value;
          this.setState({product:state});
        }
      
        onSubmit = (e) => {
          e.preventDefault();
          const { pname, price, description } = this.state;
          const update = db.collection('products').doc(this.state.pid);
          update.set({
            pname,
            price,
            description
          }).then((doc) => {
            console.log(doc);
            this.setState({
              pid: '',
              pname: '',
              description: ''
              
            });
            this.props.history.push("/productdetail")
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });
        }
      
        render() {
          return (
         
             <>    
            <div className="container mt-4">
                <h3 > EDIT Product </h3>
                <Form  onSubmit={this.onSubmit} className="mb-3" controlId="formBasicEmail">
                     <Form.Label>Product Name</Form.Label>
                     <Form.Control name="pname" value={this.state.pname} onChange={this.onChange} type="text" placeholder="enter your product name" />
                     <Form.Label>Product Price</Form.Label>
                     <Form.Control name="price" value={this.state.price} onChange={this.onChange} type="text" placeholder="price" />
                     <Form.Label>Description</Form.Label>
                     <Form.Control name="description" value={this.state.description} onChange={this.onChange} type="text" placeholder="description" />

                     <Button    className={'ms-5'} variant="primary" type="submit"> Submit</Button>
                 </Form>
              
             </div>
                
             </>
          );
        }

} 
 export default EditProduct ;



 






// import React, { useState,  useEffect } from 'react';
// import { Form, Button } from "react-bootstrap"
// import { useLocation, Link, useHistory  } from 'react-router-dom';

// import { db } from "../../firebase";

// const EditProduct = () => {

//     let location = useLocation();
//     const pathName = location.pathname;
//     const [pname, setPname] = useState()
//     const [price, setPrice] = useState()
//     const [description, setDescription] = useState()
//     const history = useHistory()
//     const [loading, setLoading] = useState(false)
//     const [productinfo, setProductInfo] = useState([])
 
//     const getpname = (e) => {
//         setPname(e.target.value)

//     }
//     const getprice = (e) => {
//         setPrice(e.target.value)

//     }
//     const getdescription = (e) => {
//         setDescription(e.target.value)

//     }


//    // get all user
//    useEffect(() => {
//     let productinfo = [];
//     db.collection('products').get()
//         .then((res) => {
//             res.forEach(action => {
//                 productinfo.push({ ...action.data(), id: action.id });
//                 console.log(action.data())
//             })
//             setProductInfo(productinfo);
//         })
// }, [productinfo.id])

//  const updateProduct = (e) => {
//         let pid = e.target.id
//         db.collection('products').doc(pid).update({
//             pname: pname,
//             price: price,
//             description: description
    
//         })
//             .then(() => {
//                 console.log('edit successfully')
//             })
//             .cath((error) => { console.log(error) })
//     }

//     return (

//         <>
//             <div className={"container mt-4"}>
               
//                 <Form  onSubmit={updateProduct} className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>Product Name</Form.Label>
//                     <Form.Control name="pname" onChange={getpname} value={pname} type="text" placeholder="enter your product name" />
//                     <Form.Label>Product Price</Form.Label>
//                     <Form.Control name="price" onChange={getprice} value={price} type="text" placeholder="price" />
//                     <Form.Label>Description</Form.Label>
//                     <Form.Control name="description" onChange={getdescription} value={description} type="text" placeholder="description" />
//                     <Form.Text className="text-muted">
//                         We'll never share your email with anyone else.
//                     </Form.Text>
//                     <Button disabled={loading}    className='ms-5' variant="primary" type="submit"> AddProduct</Button>
//                 </Form>
//                 <Link
//                 className={pathName === '/productdetail' }
//                 to='/productdetail'>Products</Link>
            
//             <Button className='ms-2'  variant="primary">Edit Product</Button>
//             </div>
//         </>

//     );

// }



// export default EditProduct;

// import React, { useState } from 'react';
// import { Form } from "react-bootstrap"
// import {  Link, useHistory  } from 'react-router-dom';




// import { db } from "../../firebase";
// import React, { useState, useEffect } from "react";
// import { Form, Alert, InputGroup, Button } from "react-bootstrap";
// const EditProduct = ({ id, setProductId }) => {
//   const [pname, setPname] = useState()
//   const [price, setPrice] = useState()
//   const [description, setDescription] = useState()
//   const [message, setMessage] = useState({ error: false, msg: "" });


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");
//     if (pname === "" || price === "" || description === "") {
//       setMessage({ error: true, msg: "All fields are mandatory!" });
//       return;
//     }
//     const newProduct = {
//       pname,
//       price,
//       description,
//     };
//     console.log(newProduct);

//     try {
//       if (id !== undefined && id !== "") {
//         await db.collection('products').update(id, newProduct);
//         setProductId("");
//         setMessage({ error: false, msg: "Updated successfully!" });
//       } else {
//         await db.collection('products').add(newProduct);
//         setMessage({ error: false, msg: "New Book added successfully!" });
//       }
//     } catch (err) {
//       setMessage({ error: true, msg: err.message });
//     }

//     setPname("");
//     setPrice("");
//     setDescription("");
//   };

  
//   const editHandler = async () => {
//     setMessage("");
//     try {
//       const docSnap = await db.collection.get(id);
//       console.log("the record is :", docSnap.data());
//       setPname(docSnap.data().pname);
//       setPrice(docSnap.data().price);
//       setDescription(docSnap.data().description);
//     } catch (err) {
//       setMessage({ error: true, msg: err.message });
//     }
//   };

//   useEffect(() => {
//     console.log("The id here is : ", id);
//     if (id !== undefined && id !== "") {
//       editHandler();
//     }
  
//   }, [id]);

  
//   return (
//     <>
//       <div className="p-4 box">
//         {message?.msg && (
//           <Alert
//             variant={message?.error ? "danger" : "success"}
//             dismissible
//             onClose={() => setMessage("")}
//           >
//             {message?.msg}
//           </Alert>
//         )}

//         <Form onSubmit={handleSubmit}>
//           <Form.Group className="mb-3" >
//             <InputGroup>
//               <InputGroup.Text id="pname">Name</InputGroup.Text>
//               <Form.Control
//                 type="text"
//                 placeholder="product"
//                 value={pname}
//                 onChange={(e) => setPname(e.target.value)}
//               />
//             </InputGroup>
//           </Form.Group>

//           <Form.Group className="mb-3" >
//             <InputGroup>
//               <InputGroup.Text id="price"> Price</InputGroup.Text>
//               <Form.Control
//                 type="text"
//                 placeholder="price"
//                 value={price}
//                 onChange={(e) => setPrice(e.target.value)}
//               />
//             </InputGroup>
//           </Form.Group>

//           <Form.Group className="mb-3" >
//             <InputGroup>
//               <InputGroup.Text id="description">Description</InputGroup.Text>
//               <Form.Control
//                 type="text"
//                 placeholder="description"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//               />
//             </InputGroup>
//           </Form.Group>
          
//           <div className="d-grid gap-2">
//             <Button variant="primary" type="Submit">
//               Update
//             </Button>
//           </div>
//         </Form>
//       </div>
//     </>
//   );
// };

// export default EditProduct ;































    // const EditProduct =(id) =>{
    //   const [pname, setPname] = useState()
    //   const [price, setPrice] = useState()
    //   const [description, setDescription] = useState()
    //   const history = useHistory();

    //   const handleSubmit = (e) => {
    //     let pid = e.target.id
    //     e.preventDefault();
       
    //       db.collection('products').doc(pid).update({
    //         pname: pname,
    //         price: price,
    //         description: description,
            
    //       })
    //       .then(function () {
    //         console.log("product successfully updated!");
    //         history.push("/createProduct")
    //       });
    //   }
    
    //   return (
    //     <div>
    //       <Form onSubmit={handleSubmit} className="mb-3">
    //         <label>product Name:
    //         <input type="text" value={pname}  onChange={getpname} />
    //         </label>
    //         <label>
    //           Price:
    //           <input
    //             type="text"
    //             value={price}
    //             onChange={getprice}
    //           />
    //         </label>
    //         <label>
    //           Description:
    //           <input
    //             type="text"
    //             value={description}
    //             onChange={getdescription}
    //           />
    //         </label>
    //         <input className='ms-5' type="submit" value="Submit" />
    //         <h4><Link to={`/productdetail`} className="btn btn-primary">Board List</Link></h4>
    //       </Form>
    //     </div>
    //   )
    // }
