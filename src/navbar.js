import { useState } from "react";
import images from "./images";
import { BsCheck2All, BsCurrencyBitcoin, BsSearch } from "react-icons/bs";
const Navbar = ({ text, setText }) => {
  const [nav, setNav] = useState("");
  return (
    <div className="navbar">
      {images.map((e) => {
        return <img className="buggy" src={e}></img>;
      })}
      <BsCheck2All className="mark"></BsCheck2All>
      <button className="bounty-btn" type="button">
        <p>Claim Bounty</p>
      </button>
      <BsCurrencyBitcoin className="mark"></BsCurrencyBitcoin>
      <button className="bounty-btn" type="button">
        <p>Donation</p>
      </button>
      <BsSearch className="mark"></BsSearch>
      <button className="bounty-btn" type="button">
        <p>Search</p>
      </button>
      <input
        type="text"
        placeholder="Type here... "
        className="searchBar"
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></input>
    </div>
  );
};

export default Navbar;
