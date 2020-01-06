import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";
import "./Profile.css";

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div></div>;
  }

  return (
      <div className="col-12 col-lg-5 d-flex justify-content-center">
    <Fragment >
      <span className="box">  
      <img className="rounded-circle pic" src={user.picture} alt="Profile" />
      <h4>{user.name}</h4>
      {/* <p>{user.email}</p> */}
      </span>
    
      {/* <code>{JSON.stringify(user, null, 2)}</code> */}
    </Fragment>
    </div>
  );
};

export default Profile;
