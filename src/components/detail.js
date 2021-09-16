import { useState, useEffect } from "react";
import color from "./colors";
import "./detail.css";
function Item(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "inherit",
      }}
    >
      <p
        style={{
          marginBottom: "0px",
          fontWeight: "550",
          fontSize: "100%",
          color: "hsl(200, 15%, 8%)",
          color: props.mode == "dark" ? "white" : "black",
        }}
      >
        {props.tag}:{"  "}
      </p>
      <p
        style={{
          marginBottom: "0px",
          fontWeight: "300",
          fontSize: "100%",
          color: props.mode == "dark" ? "white" : "hsl(200, 15%, 8%)",
        }}
      >
        {props.value}
      </p>
    </div>
  );
}
export default function Detail(props) {

  const [borders, setBorders] = useState([]);
  var url = "https://restcountries.eu/rest/v2/alpha/";
  useEffect(() => {
    setBorders([]);
    props.borders.forEach((element) => {
      fetch(url + element).then((response) =>
        response
          .json()
          .then((res) => setBorders((borders) => [...borders, res.name]))
      );
    });
  }, []);
  return (
    <div className="Detail">
      <div className="back">
        <button
          type="button"
          class="btn"
          style={{
            color: props.mode == "light" ? "black" : "white",
            backgroundColor:
              props.mode == "light" ? color.lightitem : color.darkitem,
          }}
          onClick={() => props.changecountry(false)}
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>{" "}
            back
          </div>
        </button>
      </div>
      <div className="country">
        <div className="flag">
          <img
            src={props.flag}
            style={{ width: "100%", height: "100%", objectFit: "fit" }}
          />
        </div>
        <div className="detail-section">
          <h2 style={{ color: props.mode == "dark" ? "white" : "black" }}>
            {props.name}
          </h2>
          <div className="details">
            <div className="row1">
              <Item
                tag={"Native Name"}
                value={props.nativeName}
                mode={props.mode}
              />
              <Item
                tag={"Population"}
                value={props.population}
                mode={props.mode}
              />
              <Item tag={"Region"} value={props.region} mode={props.mode} />
              <Item
                tag={"Sub Region"}
                value={props.subregion}
                mode={props.mode}
              />
              <Item tag={"Capital"} value={props.capital} mode={props.mode} />
            </div>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <div className="row2">
              <Item
                tag={"Top Level Domain"}
                value={props.topleveldomain}
                mode={props.mode}
              />
              <Item
                tag={"Currencies"}
                value={props.currencies}
                mode={props.mode}
              />
              <Item
                tag={"Languages"}
                value={props.languages}
                mode={props.mode}
              />
            </div>
          </div>
          &nbsp;
          <div className="bordercountries">
            <p
              style={{
                color: props.mode == "dark" ? color.lightitem : color.darkitem,
              }}
            >
              Border Countries :{" "}
              {borders.map((name) => (
                <button
                  type="button"
                  class="btn btn-sm"
                  style={{
                    marginRight: "4px",
                    color: props.mode == "light" ? "black" : "white",
                    backgroundColor:
                      props.mode == "light" ? color.lightitem : color.darkitem,
                  }}
                >
                  {name}
                </button>
              ))}
            </p>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
