import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "Smiling",
  "😂": "Face with Tears of Joy",
  "😪": "Sleepy Face",
  "😎": " Smiling Face with Sunglasses",
  "😯": "Hushed Face",
  "😢": "Crying Face",
  "❤️": " Heart/love",
  "🗻": "Mount Fuji",
  "🚣": "Person Rowing Boat",
  "🔥": "Fire / Lit ",
  "👏": "Clapping Hands",
  "💌": "Love Letter",
  "🎉": "Party Popper",
  "🎓": "Graduation Cap",
  "🍆": "Eggplant",
  "🍟": "French Fries",
  "🍳": "Cooking",
  "🐣": "Hatching Chick",
  "🍗": "Poultry / chicken leg",
  "🍤": "Fried Shrimp",
  "🍣": "Sushi",
  "🍠": " Roasted Sweet Potato ",
  "💨": " Dashing Away",
  "💥": "Collision / Explosion"
};

var emojiWeHave = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("Translation will appear here:");

  function inputEmojiHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our DataBase";
    }

    setMeaning(meaning);
  }

  function emojiClickHancler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1> Emoji Interpretor </h1>
      <input
        onChange={inputEmojiHandler}
        placeholder="Put an Emoji over here to know the meaning !"
      ></input>
      <h2> {meaning} </h2>
      <hr></hr>
      <h3 style={{ color: "green" }}> Emoji We Know</h3>
      {emojiWeHave.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHancler(emoji)}
            style={{
              fontSize: "2.2rem",
              padding: "1em",
              cursor: "pointer"
            }}
            key={emoji}
          >
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
