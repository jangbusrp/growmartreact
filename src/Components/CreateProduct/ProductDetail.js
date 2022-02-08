import React, { useEffect, useState } from 'react'
// import { useAuth } from './AuthContext'
import { Button, Card } from "react-bootstrap"
import { db, auth } from "../../firebase";
import { Link } from 'react-router-dom';
import '../../product.css';

const ProductDetail = () => {
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
      <div className="homePage inline">
        <h3>{auth.currentUser.email}</h3>
        {productinfo.map((post) => {
          return (
            <div className="post">
              <div className="postHeader">
                <div className="title">


                </div>
                
                  {post.authuser.id === auth.currentUser.uid && (

                    // <div className="style={{display:'inline'  }}">
                    //   <Card style={{ width: '25rem' , background:'green', margin:'20px'  }}>
                    //     <Card.Img variant="top" src="https://source.unsplash.com/user/wsanter/100px180" />
                    //     <Card.Body>
                    //       <Card.Text>{post.pname.toUpperCase()}</Card.Text>
                    //       <Card.Title>$ {post.price}</Card.Title>
                    //       <Card.Title>{post.description}</Card.Title>
                    //       <Card.Title>By {post.authuser.email}</Card.Title>
                    //       <Button className={'ms-2'} id={post.id} onClick={deleteProduct} variant="danger">Delete</Button>
                    //       <Link to={`/editproduct/${post.id}`}  className="btn btn-primary ms-2">Edit</Link>
                    //     </Card.Body>
                    //   </Card>

                    <div className="deletePost display-inline">
    <section class="menu" id="menu">

    <h1 class="heading"> our <span>menu</span> </h1>

    <div class="box-container">

        <div class="box">
            <img src="https://source.unsplash.com/user/wsanter/100px180" alt=""/>
            <h3>{post.pname.toUpperCase()}</h3>
            <div class="price"> {post.description}</div>
            <div class="price">${post.price} <span>20.99</span></div>
            <div class="price">By {post.authuser.email}</div>
            <a href="#" class="btn">add to cart</a>
        </div>
        </div>
</section>

                    </div>

                  )}
                </div>
              </div>
// </div>

           
          );
        })}
      </div>


    </>
  );
}
export default ProductDetail;