import React from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

// const User = ({match}) =>{
//     return(
//         <>
//         <h1> This is User {match.params.name} Page</h1>

//         </>
//     )
// }

const User = () =>{

    const {fname, lname} = useParams();

    const location = useLocation();

    const history = useHistory();
    return(
        <>
        <h1>user {fname} {lname} page</h1>
        <p>my current location is {location.pathname}</p>
        {location.pathname === `/user/deepak/yadav` ? (
            <button onClick={() => history.goBack()}>Go Back</button>
        ) : null}
        
        </>
    )
}

export default User;