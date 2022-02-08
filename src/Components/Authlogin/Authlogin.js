import React, {useState,  useEffect } from 'react';
// import { Table  } from "react-bootstrap"
import { app } from "../../firebase";
// import firebase from "firebase";

const Authlogin = ()=>{
    const [ currentUser, setCurrentUser] = useState();
    // const provider = new firebase.auth.GoogleAuthProvider();


    useEffect(()=> {
        let userinfo = [];
        app.auth().onAuthStateChanged((user)=>{
            setCurrentUser(user);
        });
        setCurrentUser(userinfo);
    }, []);

    

    // const authWithGoogle =()=>{
    //     firebase.auth().signInWithPopup(provider);
    // };

    
        return (
            <>
           
        
              { currentUser && (
                  <>
                      {/* <img
            src={currentUser.photoURL}
            width="100"
            height="100"
            alt="avatar"
          /> */}
               <p>{currentUser.displayName}</p>
                <p>{currentUser.email}</p>
                </>
              )}
              {/* <Button variant="danger" onClick={authWithGoogle}>Login</Button>   */}



              {/* <Table  striped bordered variant="primary" size="sm">
                        <thead>
                          <tr>
                          <th>SN.</th>
                            <th>Product ID</th>
                            <th>product Name</th>
                          
                          </tr>
                        </thead>


                {
                    user.map((action, index ) => (
   
                        <tbody>
                          <tr key={ action.id }>
                            <th > {index + 1} </th>
                            <p>{action.displayName}</p>
                            <p>{action.email}</p>

                          </tr>
                        </tbody>
                      
                        
                    ))

                }
                </Table> */}
            </>


        );
    
}
 
export default Authlogin;