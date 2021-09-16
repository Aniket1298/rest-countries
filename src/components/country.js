import React from "react";
import color from "./colors";
import "./country.css";
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
export default function Country(props) {
  return (
    <div
      className="Country"
      onClick={() => props.changecountry(props.name)}
      style={{
        backgroundColor: props.mode == "dark" ? color.darkitem : "white",
      }}
    >
      <img
        src={props.flag}
        style={{ width: "100%", height: "40%", objectFit: "cover" }}
      />
      <div className="detail">
        <h
          style={{
            fontSize: "120%",
            fontWeight: "800",
            marginBottom: "-20px",
            color: props.mode == "light" ? "black" : "white",
          }}
        >
          {props.name}
        </h>
        <Item tag={"Population"} value={props.population} mode={props.mode} />
        <Item tag={"Region"} value={props.region} mode={props.mode} />
        <Item tag={"Capital"} value={props.capital} mode={props.mode} />
      </div>
    </div>
  );
}