import React from "react";
import App from "../App";
import { useAuth0 } from "../react-auth0-spa";

function Home() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Home">
      
        <App />
    
    </div>
  );
}

export default Home;