import React, { useContext  } from 'react';
// import {Table  } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"

const AuthUser = () => {
    const currentUser = useContext(useAuth);


//     return (

//         <>
//             <div className={"container mt-4"}>
//             {/* {error && <Alert variant="danger">{error}</Alert>} */}
                
//                 <Table  striped bordered variant="primary" size="sm">
//                         <thead>
//                           <tr>
//                           <th>SN.</th>
                         
//                             <th>Email</th>
                            
//                           </tr>
//                         </thead>

// {/* 
//                 {
//                     useAuth.map((action, index ) => (                       */}
//                         <tbody>
//                           <tr>
                            
//                             <td>{currentUser.email}</td>
//                             <td>
//                             {/* <Button className={'ms-2'} id={ action.id } onClick={ deleteProduct } variant="danger">Delete</Button>
//                             <Button className={'ms-2'} id={ action.id } onClick={ updateProduct } variant="primary">Edit Product</Button> */}
//                             </td>
//                           </tr>
//                         </tbody>
                      
                        
//                      {/* ))

//                 } */}
//                 </Table>
//             </div>
//         </>

//     );


return (
    <>
    <p> vonrgblndem;blmd'mnb dfnbvpodjnmg;</p>

      { currentUser && (
          <p>{currentUser.email}</p>
      )}
    </>
  );


}

export default AuthUser;