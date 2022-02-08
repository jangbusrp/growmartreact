import React, { useEffect, useState } from 'react'
// import ProductDetail from '../CreateProduct/ProductDetail'
import 'bootstrap/dist/css/bootstrap.css';
// import { useAuth } from './AuthContext'
import { Table,Button } from "react-bootstrap"
import { db } from "../../firebase";

const UsersDetails = () => {
  
  const [usersinfo, setUsersInfo] = useState([])


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


    return (
        <>
          <h4>Users List</h4> 
      <Table  striped bordered variant="primary" size="sm">
                        <thead>
                          <tr>
                          <th>SN.</th>
                            <th> ID</th>
                            <th>First Name</th>
                            <th>Last Nmae</th>
                            <th>Contact Number</th>
                            <th></th>
                            <th></th>
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
                      <td>
            <Button className={'ms-2'} id={ action.id }  variant="danger">Delete</Button>
            </td>
            <td>
            <Button className={'ms-2'} id={ action.id }  variant="primary">Edit Product</Button>
            </td>
                    </tr>
                  </tbody>


          
                ) )
                
                }
                </Table> 

                {/* <h4>Product List</h4> 
                <ProductDetail/>  */}
        </>
    );
}
export default UsersDetails;