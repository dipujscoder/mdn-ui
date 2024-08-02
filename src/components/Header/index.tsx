import React from "react";
import { Link } from "react-router-dom";
import Container from "../Container";

type Props = {};

function Header({}: Props) {
  return (
    <Container center>
      <div className="border-stone-200  border-b">
        <div className="flex py-4">
          <div>
            <Link to="/">Logo</Link>
          </div>
          <div className="ml-auto">
            <ul className="flex ">
              <li className="px-2">
                <Link to="/home">Home</Link>
              </li>
              <li className="px-2">
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Header;
