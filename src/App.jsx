import { useEffect, useState } from 'react'
import uniqid from "uniqid";
import './styles/main.css'
import Card from './components/card'

function App() {
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    console.log("Use effect");
    Cards(setCardList);
  }, []);

  useEffect(() => {
    console.log("CardList updated:", cardList);
  }, [cardList]);

  function ShuffleCards() {
    console.log(cardList);
    const shuffledCards = [...cardList].sort(() => Math.random() - 0.5);
    setCardList(shuffledCards);
  }

  return (
    <>
      <h1>Memory card</h1>
      <button onClick={ShuffleCards}>Shuffle</button>

      <div className='card-container'>
        <DisplayCards cardList={cardList} />
      </div>
    </>
  )
}

function DisplayCards({ cardList }) {
  return (
    <>
      {cardList && cardList.length > 0 ? (
        cardList.map((card) => (
          <div className='card'>
            {card.Visual()}
          </div>
        ))
      ) : (
        <p>Loading cards</p>
      )}
    </>
  );
}

async function Cards(updateList) {
  let cards = [];
  for (let i = 0; i < 12; i++) {
    const generatedGIF = await GenerateRandomGif();
    const newCard = new Card(uniqid(), generatedGIF);
    cards.push(newCard);
  }
  cards.sort(() => Math.random() - 0.5);
  updateList(cards);
}

async function GenerateRandomGif() {
  const key = "4OyEIhRKI8sUnp4mS3Qk51iXgaedO7nc";

  const apiLink = `https://api.giphy.com/v1/gifs/random?api_key=${key}&tag=&rating=g`
  return await fetch(apiLink)
    .then(response => {
      return response.json();
    })
    .then(json => {
      console.log(json.data.images.original.url);
      return json.data.images.original.url;
    })
}

export default App
