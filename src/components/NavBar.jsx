import React from "react";
function Navbar() {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          <h1>Trajes</h1>

          <ul className="itemsNav">
            <li>saco</li>
            <li>camisa</li>
            <li>pantalones</li>
            <li>chaleco</li>
            <li>corbata</li>
            <li>zapatos</li>
          </ul>
          <Cartwidget />
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
