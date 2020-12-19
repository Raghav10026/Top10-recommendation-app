import React, { useState } from "react";
import "./styles.css";
const youtubeGenres = {
  Music: [
    { name: "Despacito", views: "7 billion" },
    { name: "Shape of You", views: "5 billion" },
    { name: "See You Again", views: "4.7 billion" },
    { name: "Uptown Funk", views: "3.9 billion" },
    { name: "Gangnam Style", views: "3.8 billion" }
  ],

  Gaming: [
    { name: "Minecraft", views: "102 Billion" },
    { name: "Fortnite", views: "60 Billion" },
    { name: "Grand Theft Auto V", views: "40 Billion" },
    { name: "Garena Free Fire", views: "32 Billion" },
    { name: "Roblox", views: "30 Billion" }
  ],

  News: [
    { name: "Aaj Tak", views: "13 Billion" },
    { name: "ABP News", views: "7 Billion" },
    { name: "ABP News Hindi", views: "5.5 Billion" },
    { name: "DLS News", views: "1.5 Billion" },
    { name: " Raffy Tulfo in Action", views: "81 Million" }
  ],
  Films: [
    { name: "Avengers Endgame", views: "289 Million" },
    { name: "Avenger Infinity War", views: "230 Million" },
    { name: "Lion King", views: "224 Million" },
    { name: "IT", views: "197 Million" },
    { name: "Mulan", views: "175 Million" }
  ],
  Fashion: [
    { name: "Kylie Jenner: A Day in the Life", views: "51 Million" },
    {
      name: "Kylie Skin Review with Shane Dawson Jeffree Star",
      views: "32 Million"
    },
    { name: "Foundation Routine For Acne by Cassandra", views: "29 Million" },
    {
      name: "The Beautiful World of Jeffree Star by Shane",
      views: "28 Million"
    },
    { name: "Makeup Tutorial en Español by James Charles", views: "27 Million" }
  ]
};
var youtube = Object.keys(youtubeGenres);

export default function App() {
  const [userGenre, setgenre] = useState("Music");

  function OnClickHandler(item) {
    setgenre(item);
  }

  return (
    <div className="App">
      <h2 className="head">
        <b>Youtube RECOMMENDATIONS FOR YOU</b>
      </h2>
      <hr />
      <div className="one">
        <h4 style={{ color: "white" }}>
          <b> Check Top 5 Youtube videos in each Genre.</b>
          <em> Select a genre to check out the best videos. </em>
        </h4>
        <div>
          {youtube.map((item) => (
            <button className="btn" onClick={() => OnClickHandler(item)}>
              {item}
            </button>
          ))}
        </div>
      </div>

      <hr />

      <div className="two">
        <div className="body">
          <ul style={{ paddingInlineStart: "0" }}>
            {youtubeGenres[userGenre].map((youtube) => (
              <li className="li">
                <div className="div1" key={youtube.name}>
                  <b> {youtube.name}</b>
                </div>
                <div className="div2" key={youtube.views}>
                  <strong> views: {youtube.views} </strong>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
