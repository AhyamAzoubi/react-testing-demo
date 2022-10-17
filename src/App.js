import Haustier from './components/Haustier.js';
import './App.css';

const haustierArray = [
  {
    name: "Aristoteles",
    animal: "Meerschweinchen",
    breed: "Glatthaar",
    id: 1,
    images: [
      "https://i.imgur.com/ZUbUAIN.jpeg",
      "https://i.imgur.com/y0KKYJE.jpeg",
      "https://i.imgur.com/Bohfz1o.jpeg"
    ]
  },
  {
    name: "Leo",
    animal: "Katze",
    breed: "British",
    id: 2,
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/e/e1/British_blue_2009_%28cropped%29.jpg"
    ]
  },
  {
    name: "Lady",
    animal: "Hund",
    breed: "Dackel",
    id: 3,
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/0/03/Kurzhaardackel.jpg"
    ]
  },
  {
    name: "Tiramisu",
    animal: "Meerschweinchen",
    breed: "Rosette",
    images: []
  }
];

function App() {
  return (
    <div className="App">
      <h1>Lustige Tiere!</h1>
      {haustierArray.map((haustier) => {
        return (
          <Haustier
            name={haustier.name}
            animal={haustier.animal}
            breed={haustier.breed}
            key={haustier.id}
            images={haustier.images}
          />
        );
      })}
    </div>
  );
}

export default App;
