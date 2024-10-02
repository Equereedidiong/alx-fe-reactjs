import { useContext } from "react";

function UserDetails() {

    const userData = useContext(UserContext);

    return (
      <div>
        <p>Name: {userData}</p>
        <p>Email: {userData}</p>
      </div>
    );
  }
  
  export default UserDetails;