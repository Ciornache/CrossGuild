import { useState, useEffect } from "react";
import marine from "./marines";
import logo from "./logo.jpg";
import members from "./members";
import Navbar from "./navbar";
import {
  BsChevronBarExpand,
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
  BsArrowDownUp,
  BsFillEmojiFrownFill,
} from "react-icons/bs";
import Wantedposter from "./wantedposter";

const IniPage = () => {
  const [show, setShow] = useState([]);
  const [curr, setCurr] = useState(0);
  const [lol, setLol] = useState(12);
  const [out, setout] = useState([]);
  const [out2, setout2] = useState([]);
  const [sort, setSort] = useState(0);
  const [marines, setMarines] = useState(marine);
  const [type, setType] = useState(0);
  const [input, setInput] = useState("");
  const [trigger, setTrigger] = useState(0);
  const GoodClass = (e, e2) => {
    const z = (e2 - 1 + members.length) % members.length;
    const t = [];
    if (e === (e2 - 1 + members.length) % members.length) t.push("lastSlide");
    else t.push("allSlides");
    if (e2 === 0 && e === 6) return "lastSlide";
    if (e === (e2 - 1 + members.length) % members.length) return "lastSlide";
    else return "allSlides";
  };
  function ChangeSort() {
    var selectedValue = document.getElementById("sortb");
    if (selectedValue) {
    }
  }
  function InitialMarines() {
    const z = [];
    for (let i = 0; i < marines.length; ++i) {
      z.push(0);
    }
    return z;
  }
  const parseInt = (a) => {
    var bt = 0;
    for (let i = 0; i < a.length; ++i) {
      if (a[i] >= "0" && a[i] <= "9") bt = bt * 10 + a[i] - "0";
    }
    return bt;
  };
  useEffect(() => {
    console.log(sort);
    if (sort === "1") {
      console.log(type);
      let y = [...marine];
      for (let i = 0; i < y.length; ++i) {
        for (let j = i + 1; j < y.length; ++j) {
          const x =
            y[i].marine_name === "Unknown" ? y[i].name : y[i].marine_name;
          const h =
            y[j].marine_name === "Unknown" ? y[j].name : y[j].marine_name;

          if (x > h && type === 0) [y[i], y[j]] = [y[j], y[i]];
          if (x < h && type === 1) [y[i], y[j]] = [y[j], y[i]];
        }
      }
      for (let i = 0; i < y.length; ++i) {
        y[i].id = i + 1;
      }
      setMarines(y);
    }
    if (sort === "2") {
      let y = [...marine];
      for (let i = 0; i < y.length; ++i) {
        for (let j = i + 1; j < y.length; ++j) {
          const x = y[i].difficulty;
          const h = y[j].difficulty;
          if (x < h && type === 1) [y[i], y[j]] = [y[j], y[i]];
          if (x > h && type === 0) [y[i], y[j]] = [y[j], y[i]];
        }
      }
      for (let i = 0; i < y.length; ++i) {
        y[i].id = i + 1;
      }
      setMarines(y);
    }
    if (sort === "3") {
      let y = [...marine];
      for (let i = 0; i < y.length; ++i) {
        for (let j = i + 1; j < y.length; ++j) {
          const x = parseInt(y[i].bounty);
          const h = parseInt(y[j].bounty);
          if (x < h && type === 1) [y[i], y[j]] = [y[j], y[i]];
          if (x > h && type === 0) [y[i], y[j]] = [y[j], y[i]];
        }
      }
      for (let i = 0; i < y.length; ++i) {
        y[i].id = i + 1;
      }
      setMarines(y);
    }
    if (sort === "0") {
      setMarines(marine);
    }
  }, [sort, type]);

  useEffect(() => {
    setShow(InitialMarines());
    document.body.style.zoom = "80%";
  }, []);
  console.log(input);
  useEffect(() => {
    let u = setInterval(() => {
      let x = (curr - 1 + members.length) % members.length;
      setCurr(x);
    }, 5000);
    return () => clearInterval(u);
  }, [curr]);
  useEffect(() => {
    let h = [...marines];
    let z = marines[marines.length - 1];
    for (let i = 0; i < 8; ++i) {
      h.push(z);
    }
    setMarines(h);
  }, [lol]);
  useEffect(() => {
    let x = (curr - 1 + members.length) % members.length;
    let u = setTimeout(() => {
      setCurr(x);
    }, 1000);
  }, [out]);
  useEffect(() => {
    let x = (curr + 1) % members.length;
    let u = setTimeout(() => {
      setCurr(x);
    }, 1000);
  }, [out2]);
  useEffect(() => {
    console.log(marines);
    setMarines(
      marine.filter((e) => {
        if (e.marine_name !== "Unknown") {
          const hh = e.marine_name.toUpperCase();
          if (hh.includes(input.toUpperCase())) return 1;
        }
        if (e.name !== "Unknown") {
          const hh = e.name.toUpperCase();
          if (hh.includes(input.toUpperCase())) return 1;
        }
        return 0;
      })
    );
    setTrigger(trigger + 1);
  }, [input]);
  useEffect(() => {
    let y = [...marines];
    for (let i = 0; i < y.length; ++i) {
      y[i].id = i + 1;
    }
    if (y !== marines) setMarines(y);
  }, [trigger]);
  console.log(marines);
  return (
    <>
      <Navbar text={input} setText={setInput}></Navbar>
      <div className="members">
        {members.map((f) => {
          return (
            <img
              src={f.image}
              className={`${f.id === curr ? "size" : GoodClass(f.id, curr)}`}
              loading="lazy"
            ></img>
          );
        })}

        <div className="s-size">
          <button
            className="chevron-button"
            onClick={() => {
              setout2(out2 + 1);
            }}
          >
            <BsChevronDoubleLeft className="chevron"></BsChevronDoubleLeft>
          </button>
        </div>
        <div className="s-size2">
          <button
            className="chevron-button"
            onClick={() => {
              setout(out + 1);
            }}
          >
            <BsChevronDoubleRight className="chevron"></BsChevronDoubleRight>
          </button>
        </div>
        <p className="m-text">{members[curr].name} </p>
      </div>
      <div className="line-5"></div>
      <div className="line-5"></div>
      <div className="line-5"></div>
      <form className="sortby">
        <label for="sortBy">Sort by : </label>
        <select
          id="sortb"
          className="select"
          onChange={(e) => {
            let y = e.target.value;
            setType(0);
            setSort(e.target.value);
          }}
        >
          <option value="0" selected="selected">
            None
          </option>
          <option value="1">Alphabetic</option>

          <option value="2">Difficulty</option>
          <option value="3">Bounty</option>
        </select>
        <BsArrowDownUp
          className="bsArrow"
          onClick={() => {
            setType(1 - type);
          }}
        ></BsArrowDownUp>
      </form>
      <div className="postersCont">
        {marines.map((e) => {
          return (
            <Wantedposter
              id={lol}
              id2={e.id}
              image={e.image}
              name={e.name}
              marine_name={e.marine_name}
              bounty={e.bounty}
              setThis={setMarines}
              ch={input}
            ></Wantedposter>
          );
        })}
      </div>
      <div className="spp">
        <button
          className="loadMore"
          onClick={() => {
            setLol(lol + 8);
          }}
        >
          LOAD MORE
        </button>
      </div>
    </>
  );
};

export default IniPage;
