import { useEffect, useState } from 'react'
import './App.css'
import uniqid from "uniqid";

import Card from './components/card'

function App() {
  const [cardList, setCardList] = useState(Cards());

  function ShuffleCards(){
    const shuffledCards = [...cardList].sort(() => Math.random() - 0.5); 
    setCardList(shuffledCards);
  }

  return (
    <>
      <h1>Memory card</h1>
      <button onClick={ShuffleCards}>Shuffle</button>

      {cardList.map((card) =>{
        return <p id={card.id}>{card.id}</p>
      })}
    </>
  )
}

function Cards(){
  let cards = [];
  for(let i = 0; i < 12; i++){
      const newCard = new Card(uniqid());
      cards.push(newCard); 
  }
  cards.sort(() => Math.random() - 0.5);
  return cards;
}

export default App
