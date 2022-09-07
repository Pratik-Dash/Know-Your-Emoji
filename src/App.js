import { useState } from "react";
import "./styles.css";

export default function App() {
  var EmojiDictionary = {
    "😎": "Smiling Face with Sunglasses",
    "😀": "Grinning Face",
    "😊": "Smiling Face with Smiling Eyes",
    "😢": "Crying Face",
    "😍": "Smiling Face with Heart-Eyes",
    "😉": "Winking Face",
    "🤢": "Nauseated Face",
    "❤": "Red Heart",
    "😒": "Unamused Face",
    "😁": "Beaming Face with Smiling Eyes",
    "🤑": "Money-Mouth Face",
    "🤗": "Smiling Face with Open Hands",
    "😪": "Sleepy Face",
    "😭": "Loudly Crying Face",
    "😈": "Smiling Face with Horns",
    "😖": "Confounded Face",
    "🦨": "Skunk",
    "🦥": "Sloth",
    "🦎": "Lizard",
    "🐳": "Spouting Whale",
    "🦕": "Sauropod",
    "🐻": "Brown Bear",
    "🐼": "Panda",
    "🐰": "Rabbit Face",
    "🐸": "Frog",
    "🐆": "Leopard",
    "🦅": "Eagle",
    "🍕": "Pizza Slice",
    "🍗": "Poultry Leg",
    "🍞": "Bread",
    "🍿": "Popcorn",
    "🍦": "Soft Ice Cream",
    "🍫": "Chocolate Bar",
    "🍺": "Beer Mug",
    "🍒": "Cherries",
    "🌳": "Deciduous Tree",
    "🥕": "Carrot",
    "🌶": "Hot Pepper",
    "🥀": "Wilted Flower",
    "⚽": "Soccer Ball",
    "💎": "Gem Stone",
    "": ""
  };
  var emojiList = Object.keys(EmojiDictionary);
  var [value, setvalue] = useState("");
  function inputEventHandler(event) {
    var userInput = event.target.value;
    var meaning = "";

    if (userInput in EmojiDictionary) {
      meaning = EmojiDictionary[userInput];
    } else {
      meaning = "We do not have this emoji in our Database.";
    }
    setvalue(meaning);
  }
  function clickEventHandler(emoji) {
    var userClicked = emoji;
    console.log(userClicked);
    var meaning = "";
    if (userClicked in EmojiDictionary) {
      meaning = EmojiDictionary[userClicked];
    } else {
      meaning = "We do not have this emoji in our Database.";
    }
    setvalue(meaning);
  }

  return (
    <div className="App">
      <h1>Know your Emojis</h1>
      <input
        style={{
          width: "80%",
          height: "3rem",
          border: "2px solid purple",
          textAlign: "center",
          fontSize: "1.5rem"
        }}
        onChange={inputEventHandler}
      />
      <h2>{value}</h2>
      <h3>Emoji's we Know </h3>

      <ul className="emojilist">
        {emojiList.map((emoji) => (
          <li
            className="emojilistitem"
            onClick={() => clickEventHandler(emoji)}
            key={emoji}
          >
            {emoji}
          </li>
        ))}
      </ul>
      <footer>
        <div>
          {" "}
          Made by{" "}
          <a href="https://pratik-dash-portfolio.netlify.app/" class="credit">
            Pratik
          </a>
        </div>
        <ul>
          <li>
            <a href="https://twitter.com/Prateek24675372"><ion-icon name="logo-twitter"></ion-icon></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/pratik-dash-5a7217134/"><ion-icon name="logo-linkedin"></ion-icon></a>
          </li>
          <li>
            <a href="https://github.com/Pratik-Dash"><ion-icon name="logo-github"></ion-icon></a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
