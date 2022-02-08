import React, { useContext } from 'react';
// import { render } from 'react-dom';
import { db } from "../../firebase";
const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
  }

export function AuthsProvider({ children }, state) {

 state = {
        users: []
    }


    
    const prevUsers = this.state.users;
        db.collection('users').onSnapshot(snapshot => {
            let changes = snapshot.docChanges();
            changes.forEach(change => {
                if (change.type === 'added') {
                    prevUsers.push({
                        UserID: change.doc.id,
                        FirstName: change.doc.data().FirstName,
                        LastName: change.doc.data().LastName,
                        Contact: change.doc.data().Contact
                    })
                }
                this.setState({
                    users: prevUsers
                })
            })
        })
    

  

    
        return (
            <AuthContext.Provider render value={{ users: [...this.state.users] }}>
                {this.props.children}
            </AuthContext.Provider>
        );
    
}


