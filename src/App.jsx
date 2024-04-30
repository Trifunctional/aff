import { useCallback, useState, useEffect } from "react";
import "./App.css";

const affirmations = [
  "I believe in myself.",
  "I'm a powerful dumptruck!",
  "There is no one better to be than myself.",
  "I am enough.",
  "I get better every single day.",
  "I am an amazing person.",
  "All of my problems have solutions.",
  "Today I am a leader.",
  "I forgive myself for my mistakes.",
  "My challenges help me grow.",
  "I am perfect just the way I am.",
  "My mistakes help me learn and grow.",
  "Today is going to be a great day.",
  "I have courage and confidence.",
  "I can control my own happiness.",
  "I have people who love and respect me.",
  "I stand up for what I believe in.",
  "I believe in my goals and dreams.",
  "It's okay not to know everything.",
  "Today I choose to think positive."
];

function App() {

  const [aff, setAff] = useState("");

  const shuffle = useCallback(() => {
    const i = Math.floor(Math.random() * affirmations.length);
    setAff(affirmations[i]);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 10000);
    return () => clearInterval(intervalID);
}, [shuffle])

  return (
    <div className="container">
      <h1>{aff}</h1>
    </div>
  );

}

export default App;
