import { useState, useEffect } from "react";

async function createDeck(){
    const resp = await fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    const deck = await resp.json();
    return deck.deck_id;
}

async function getCards (deckId){
    const resp = await fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`);
    return await resp.json();
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


    return(
        <section>
            <ul>
                {
                    deck.cards.map((card, index) => {
                        return(
                            <li key={index}>
                                <img src={card.image} alt={card.value}/>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default DeckOfCards;