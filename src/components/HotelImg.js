import CustomButton from "./CustomButton";
import "./HotelImg.css";
export default function HotelImg({ src }) {
  return (
    <div className="imagebox">
      <div className="absoluteleft">
        <CustomButton variant="round28">
          <img src="/icons/angleleft.svg" />
        </CustomButton>
      </div>
      <div className="absoluteright">
        <CustomButton variant="round28">
          <img src="/icons/angleright.svg" />
        </CustomButton>
      </div>
      <div className="absolutetopright">
        <CustomButton variant="round24">
          <img src="/icons/heart.svg" />
        </CustomButton>
      </div>
      <img src={src} width="100%" />
    </div>
  );
}
