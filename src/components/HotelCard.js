import BulletRating from "./BulletRating";
import CustomButton from "./CustomButton";
import "./HotelCard.css";
import HotelImg from "./HotelImg";

export default function HotelCard({
  title = "title",
  name = "name",
  address = "address",
  rating = 0,
  price = 0,
  image = "",
}) {
  return (
    <div>
      <HotelImg src={image} />
      <p className="title">{title}</p>
      <p className="name">{name}</p>
      <div className="informationsrow">
        <div className="address">
          <img src="/icons/pin.svg" />
          <p className="text-address">{address}</p>
        </div>
        <hr className="separator" />
        <BulletRating rating={rating} />
        <p className="rating">{String(rating).replace(".", ",")}</p>
      </div>
      <div className="actionsrow">
        <div>
          <p className="price">
            {price.toLocaleString("en", { useGrouping: true })}pts
          </p>
          <div className="numberofnightrow">
            <p>Par nuits</p>
            <div className="dot" />
            <p>2 Adultes</p>
          </div>
        </div>
        <div className="buttonsrow">
          <CustomButton variant="filled">Utiliser mes points</CustomButton>
          <CustomButton variant="outlined">Voir plus</CustomButton>
        </div>
      </div>
    </div>
  );
}
