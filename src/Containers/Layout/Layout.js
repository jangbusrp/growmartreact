import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import classes from './Layout.module.scss';
import Header from '../../Components/Header/Header';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Dashboard from '../../Components/Dashboard/Dashboard';
import Users from '../../Components/Users/Users';
import Products from '../../Components/Products/Products';
import Orders from '../../Components/Orders/Orders';
// import Login from '../../Components/Auth/Login/Login';
import Signup from '../../Components/Signup/Signup';
import Login from '../../Components/Login/Login';
import CreateUser from '../../Components/Users/CreateUser/CreateUser';
import EditProdct from '../../Components/Products/UpdateProduct/EditProduct';
import CreateProdct from '../../Components/Products/CreateProduct/CreateProduct';
import SettingsComponent from '../../Components/SettingsComponent/SettingsComponent';
import PrivateRoute from '../../Components/PrivateRoute/PrivateRoute';
import { AuthProvider } from "../../contexts/AuthContext";
// import { AuthsProvider }  from "../../Components/AuthUsers/AuthContext"
import CreateProduct from '../../Components/CreateProduct/CreateProduct';
import AuthUser from '../../Components/Authuser/Authuser';
import Authlogin from '../../Components/Authlogin/Authlogin';
import AuthUsers from '../../Components/AuthUsers/AuthUsers';
import UsersDetails from '../../Components/AuthUsers/UsersDetails'
import ProductDetail from '../../Components/CreateProduct/ProductDetail'
import EditProduct from '../../Components/CreateProduct/EditProduct'
import AllusersProduct from '../../Components/CreateProduct/AllusersProduct'
import { useState } from "react";

const Layout = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  return (
  
    <Router>
      <div className={classes.Layout} id='layout'>
      <Sidebar/>
     
        <div className={classes.Container}>
          <Header/>
          
         
     


      <AuthProvider>
   

        <Switch>

          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          {/* <PrivateRoute exact path="/header" component={Header} />
          <PrivateRoute exact path="/sidebar" component={Sidebar} /> */}
          <Route path='/users/create' component={CreateUser}  />
            <Route path='/products/edit/:id' component={EditProdct}  />
            <Route path='/products/create/' component={CreateProdct}  />
            <Route path='/users/page/:pageNumber?' component={Users} />
            <Route path='/users/' component={Users} exact />
            <Route path='/products/page/:pageNumber?' component={Products}  />
            <Route path='/products/' component={Products} exact />
            <Route path='/settings/' component={SettingsComponent}  />
            <Route path='/orders' component={Orders} />


      
          <Route exact path="/" component={Signup} />

          <Route path="/login" component={Login} />
          <Route path="/productdetail" component={ProductDetail } />




          {/* <Route path="/login" component={Login} /> */}
          <Route path="/Authlogin"  component={Authlogin}/>
         
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/authuser" component={AuthUser} />
          <Route exact path="/createProduct" component={CreateProduct} />
          <Route exact path="/authusers"   component={AuthUsers}/>
          <Route exact path="/usersdetails" component={UsersDetails}/>
          {/* <Route exact path="/productdetail"  component={ProductDetail}/> */}
          <Route exact path="/editproduct/:id"   component={ EditProduct}/>
          <Route exact path="/usersproduct" component={AllusersProduct}/>




        </Switch>
      
      </AuthProvider>






      </div>
      </div>


    </Router>
  );
};

export default Layout;
