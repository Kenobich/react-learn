import React from "react";
import s from "./FriendsListGrid.module.css";
import PersonCard from "../PersonCard/PersonCard";
const FriendsListGrid = (props) => {
  const Andrii = {
    name: "Andrii",
    surname: "Kirchei",
    age: 20,
    hobby: ["Js ", "Beer ", "Music "],
  };
  const Arsen = {
    name: "Arsen",
    surname: "Debil",
    age: 21,
    hobby: ["Smite ", "Pivo "],
  };
  const Max = {
    name: "Max",
    surname: "Baby",
    age: 20,
    hobby: ["3D", "Vodka "],
  };
  const Orest = {
    name: "Ores",
    surname: "Xz",
    age: 21,
    hobby: ["Lazeti ", "Vodka "],
  };

  const persons = [
    Andrii,
    Arsen,
    Max,
    Orest,
    Arsen,
    Andrii,
    Max,
    Orest,
    Andrii,
    Andrii,
    Max,
    Max,
    Max,
    Max,
  ];

  return (
    <div className={s.cardContainer}>
      {persons.map((person) => {
        return <PersonCard person={person} />;
      })}
      <br />
    </div>
  );
};
export default FriendsListGrid;
