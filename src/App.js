import logo from "./logo.svg";
import "./App.css";
import HotelCard from "./components/HotelCard";
import FilterDropDown from "./components/FilterDropDown";
import Pagination from "./components/Pagination";

const hotelData = [
  {
    title: "Super Hôtel Collection",
    name: "Hôtel Apolonia Paris Montmartre",
    address: "Saint-Remy-en-Bouzemont-Saint-Genest-et-Isson",
    rating: 4.7,
    price: 20000,
    image: "/images/image_1.png",
  },
  {
    title: "Super Hôtel Collection",
    name: "Hôtel Apolonia Paris Montmartre",
    address: "Saint-Remy-en-Bouzemont-Saint-Genest-et-Isson",
    rating: 4.7,
    price: 20000,
    image: "/images/image_2.png",
  },
  {
    title: "Super Hôtel Collection",
    name: "Hôtel Apolonia Paris Montmartre",
    address: "Saint-Remy-en-Bouzemont-Saint-Genest-et-Isson",
    rating: 4.7,
    price: 20000,
    image: "/images/image_3.jpg",
  },
  {
    title: "Super Hôtel Collection",
    name: "Hôtel Apolonia Paris Montmartre",
    address: "Saint-Remy-en-Bouzemont-Saint-Genest-et-Isson",
    rating: 4.7,
    price: 20000,
    image: "/images/image_4.jpg",
  },
  {
    title: "Super Hôtel Collection",
    name: "Hôtel Apolonia Paris Montmartre",
    address: "Saint-Remy-en-Bouzemont-Saint-Genest-et-Isson",
    rating: 4.7,
    price: 20000,
    image: "/images/image_5.jpg",
  },
  {
    title: "Super Hôtel Collection",
    name: "Hôtel Apolonia Paris Montmartre",
    address: "Saint-Remy-en-Bouzemont-Saint-Genest-et-Isson",
    rating: 4.7,
    price: 20000,
    image: "/images/image_6.png",
  },
  {
    title: "Super Hôtel Collection",
    name: "Hôtel Apolonia Paris Montmartre",
    address: "Saint-Remy-en-Bouzemont-Saint-Genest-et-Isson",
    rating: 4.7,
    price: 20000,
    image: "/images/image_7.png",
  },
  {
    title: "Super Hôtel Collection",
    name: "Hôtel Apolonia Paris Montmartre",
    address: "Saint-Remy-en-Bouzemont-Saint-Genest-et-Isson",
    rating: 4.7,
    price: 20000,
    image: "/images/image_8.png",
  },
  {
    title: "Super Hôtel Collection",
    name: "Hôtel Apolonia Paris Montmartre",
    address: "Saint-Remy-en-Bouzemont-Saint-Genest-et-Isson",
    rating: 4.7,
    price: 20000,
    image: "/images/image_9.png",
  },
];

function App() {
  return (
    <div className="App">
      <div className="filter">
        <FilterDropDown />
      </div>
      <div className="hotel-list">
        {hotelData.map((hotel, index) => (
          <HotelCard
            key={index}
            title={hotel.title}
            name={hotel.name}
            address={hotel.address}
            rating={hotel.rating}
            price={hotel.price}
            image={hotel.image}
          />
        ))}
      </div>
      <div className="pagination">
        <Pagination />
      </div>
    </div>
  );
}

export default App;
