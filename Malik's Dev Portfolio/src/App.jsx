import React from "react";

//Data for Skills
const App = () => {
  const mySkills = [
    {
      name: "HTML",
      comfort: 9,
      frontEnd: true,
      backend: true,
    },
    {
      name: "CSS",
      comfort: 7,
      frontEnd: true,
      backend: true,
    },
    {
      name: "Javascript",
      comfort: 9,
      frontEnd: true,
      backend: true,
    },
    {
      name: "MEN Stack",
      comfort: 8,
      frontEnd: true,
      backEnd: true,
    },
    {
      name: "AWS",
      comfort: 6,
      frontEnd: true,
      backEnd: true,
    },
  ];

//Mapping for Skills List
  const skillElements = mySkills.map((skill, index) => (
    <li key={index}>
      <h2>{skill.name}</h2>
      <p>Comfort Level: {skill.comfort}/10</p>
      <p>
        Used in:
        {skill.frontEnd && <span> Front-End</span>}
        {skill.backEnd && <span> Back-End</span>}
        {!skill.frontEnd && !skill.backEnd && <span> Not Applicable</span>}
      </p>
    </li>
  ));

//Main Return Block
  return (
    <div>
      <h1 className="headerOne">Malik Creese</h1>
      <h4>
        <i>Your next Full-Stack Developer</i>
      </h4>
      <hr />
      <ul>{skillElements}</ul>
    </div>
  );
};

export default App;
