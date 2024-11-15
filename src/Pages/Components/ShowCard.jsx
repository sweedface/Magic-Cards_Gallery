import {useState,useEffect } from 'react';
import './ShowCard.css';

const ShowCard = () => {
    const [cards, setCards] = useState ([]);

    // const getallCards = async () => {
    //     const response = await axios.get('https://api.magicthegathering.io/v1/cards');
    //     console.log(response.data.results);
    //     setCards(response.data.results);
    // };

    function getallCards() {
        fetch("https://api.magicthegathering.io/v1/cards")
            .then(response => response.json())
            .then(data => {
                setCards(data.cards); 
                console.log(data.cards);
            })
    }

    useEffect(() => {
        getallCards()
    },[] );

    return (
         <>
             {cards.map((card) => (
             <div key={card.id} className="container-Cards">
                <img src={card.imageUrl} alt={card.name} />
                <p>Nombre: {card.name}</p>
                <p>Tipo: {card.type}</p>
                <p>Artista: {card.artist}</p>
                <p>NombreSet: {card.setName}</p>
                <p>Texto: {card.text}</p>
             </div>
         ))}
         </>
    )

}

export default ShowCard