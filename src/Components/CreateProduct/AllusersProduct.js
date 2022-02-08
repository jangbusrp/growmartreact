import React, { useEffect, useState } from 'react'
// import { useAuth } from './AuthContext'
import { Table, Button, Card } from "react-bootstrap"
import { db, auth } from "../../firebase";
import { Link } from 'react-router-dom';

const AllusersProduct = () => {
  const [productinfo, setProductInfo] = useState([])

  //get all products
  useEffect(() => {
    let productinfo = [];
    db.collection('products').get()
      .then((res) => {
        res.forEach(post => {
          productinfo.push({ ...post.data(), id: post.id });
          console.log(post.data())
        })
        setProductInfo(productinfo);
      })
  }, [])

  const deleteProduct = (e) => {
    let pid = e.target.id
    db.collection('products').doc(pid).delete().then(() => {
      console.log("Product successfully deleted!");
      setProductInfo();
      // history.push("/productdetail")

    }).catch((error) => {
      console.log(error)
    })

  }

  return (
    <>
      <div className="homePage">
        {productinfo.map((post) => {
          return (
            <div className="post">
              <div className="postHeader">
                <div className="title">


                </div>
                <div className="deletePost">
                    <div className="right-container">
                      <Card style={{ width: '25rem',display:'block' }}>
                        <Card.Img variant="top" src="https://source.unsplash.com/random/200x200" />
                        <Card.Body>
                          <Card.Text>{post.pname}</Card.Text>
                          <Card.Title>$ {post.price}</Card.Title>
                          <Card.Title>{post.description}</Card.Title>
                          <Card.Title>By {post.authuser.email}</Card.Title>
                          <Button className={'ms-2'} id={post.id} onClick={deleteProduct} variant="danger">Delete</Button>
                          <Link to={`/editproduct/${post.id}`} class="btn btn-primary ms-2">Edit</Link>
                        </Card.Body>
                      </Card>


                    </div>

                </div>
              </div>


            </div>
          );
        })}
      </div>


    </>
  );
}
export default AllusersProduct;