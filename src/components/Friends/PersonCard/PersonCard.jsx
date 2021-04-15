import React from "react";
import s from "./PersonCard.module.css";
const PersonCard = (props) => {
  return (
    <div className={s.card}>
      <div className={s.cardHeader}>
        <div className={s.cardTitle}>
          <span>{props.person.name} </span>
          <span>{props.person.surname}</span>
        </div>
      </div>
      <div className={s.subtitle}>
        <span>{props.person.age} years old</span>
      </div>
      <div className={s.interests}>Interests:</div>
      <ul className={s.ul}>
        {props.person.hobby.map((hob) => {
          return <li className={s.hobby}>{hob}</li>;
        })}
      </ul>
    </div>
  );
};
export default PersonCard;
