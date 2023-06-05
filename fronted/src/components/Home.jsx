import React from "react";
import Navbar from "./navbar";
//import NavLink from "react-bootstrap/esm/NavLink";
//import { route } from '../../../Project---Books-Management/src/routes/router';


function Home() {
  return (
    <>
     <Navbar/>
      <div className='contain' style={{
        height:"70vh",
        marginTop:"5px"
    }}>
        content
      </div>
      <footer>
      <div className='footer' style={{
        display:"flex"
      }}>
            <h4>Social Media</h4>
            <div href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </div>
            <div href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </div>
            <div href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </div>
            <div href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </div>
          </div>
      </footer>
    </>
  );
}

export default Home;