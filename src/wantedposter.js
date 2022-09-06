import React from "react";
const Wantedposter = ({
  id,
  id2,
  image,
  name,
  marine_name,
  bounty,
  setThis,
  ch,
}) => {
  if (id >= id2) {
    return (
      <div className="w-container">
        <img
          src="https://i.pinimg.com/originals/1b/bb/a5/1bbba506c60ee11a61ba0ad97db37f18.png"
          className="wanted"
          loading="lazy"
        ></img>
        <img src={image} className="posterImage" loading="lazy"></img>
        <div className="wanted-text">
          {marine_name === "Unknown"
            ? name.toUpperCase()
            : marine_name.toUpperCase()}
          <p>{bounty}</p>
        </div>
      </div>
    );
  } else return "";
};
export default Wantedposter;
