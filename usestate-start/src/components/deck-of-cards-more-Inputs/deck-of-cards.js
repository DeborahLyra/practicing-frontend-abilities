import { useState, useEffect } from "react";
import Form from "../forms-more-inputs/form";

async function createDeck(){
    const resp = await fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    const deck = await resp.json();
    return deck.deck_id;
}

async function getCards (deckId){
    const resp = await fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
    return await resp.json();
}

const CardsList = (props) => {
    return(
        <ul>
        {
            props.cards.map((card, index) => {
                return(
                    <li key={index}>
                        <img src={card.image} alt={card.value}/>
                        <p>
                            {card.name} {card.suit}
                        </p>
                    </li>
                )
            })
        }
    </ul>
    )
}


const DeckOfCards = () => {

    // define um estado inicial
   const [deck, setDeck] = useState({
        cards: [],
    }) 

     useEffect(() => {
         async function fetchData (){
            const deckId = await createDeck();
            const cardData = await getCards(deckId);

            setDeck({
                cards: cardData.cards
            })
        }
        fetchData ()
     }, []) //para carregar só uma vez, se não fica um loop infinito
     
     
    //  precisa estar dentro do componente
     const addCard = (newCard) =>{
        console.log(newCard)
        setDeck({
            cards: [...deck.cards, newCard]
        })
        console.log(deck)
     }
        
    return(
        <section>
            <Form addCard = {addCard}/>
          {deck.cards.length > 0 ? <CardsList cards = {deck.cards}/> : "sem cartas"}
        </section>
    )
}

export default DeckOfCards;