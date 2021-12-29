import React from "react";
import "../components/pagenotfound.css";
import { TextField } from "@material-ui/core";


function Pagenotfound() {
  return (
    <div className="main">
      <nav>
        <div className="logo">HIPB2b</div>
        <ul>
          <li>
            <a href="#"></a>Company
          </li>
          <li>
            <a href="#"></a>Solution
          </li>
          <li>
            <a href="#"></a>Resources
          </li>
          <li>
            <a href="#"></a>contact
          </li>
        </ul>
      </nav>
      <h1>404</h1><br />
      <h2>Page not found</h2><br />
      <h6>
        which page you are looking for might have been removed had its named
        changed or is tempoarial unavailable</h6>
        <div className="search">
        {/* <TextField type="text" placeholder="Search..." className="search11"  */}
        <TextField id="outlined-basic"type="text" placeholder="Search..." className="search11"  variant="outlined"
        InputProps={{
          classes:{
            root:"classname",
            input:"classname",
            notchedOutline:"hide-outline",
          },
        }}/>
</div>

    </div>
  );
}

export default Pagenotfound;
