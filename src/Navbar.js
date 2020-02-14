import React from "react";

function Navbar(props) {
  return (
    <div>
      <label for="pet-select">Choose a project based on Technology</label>

      <select className="TechSelect">
        <option value="">--Please choose an option--</option>
        <option value="React">React</option>
        <option value="React-Native">React-Native</option>
        <option value="Spring Boot">Spring Boot</option>
      </select>
    </div>
  );
}

export default Navbar;
