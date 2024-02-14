import React from "react";

const Navbar = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-around'}}>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          color: "black",
          alignItems: "center",
          justifyContent: "space-evenly",
          backgroundColor:"gray"
        }}
      >
        <img src="react-2.svg" alt="image" height={30} />  
        <input type="text" name="input" id="text" style={{ width: "20rem" }} />
      </div>


      <div
        style={{
          display: "flex",
          color: "black",
          backgroundColor: "black",
          // justifyContent: 'space-around',
          backgroundColor:'greenyellow'
        }}
      >
        <a href="https://apple.com" target="_blank" rel="noopener noreferrer">
          Apple
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Home
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          About
        </a>
      </div>

    </div>
  );
};

export default Navbar;
