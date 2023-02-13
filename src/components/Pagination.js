import CustomButton from "./CustomButton";
import "./Pagination.css";

function AngleLeft({ stroke = "#003C7F" }) {
  return (
    <svg
      width="8"
      height="15"
      viewBox="0 0 8 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 1L1 7.5L7 14" stroke={stroke} />
    </svg>
  );
}

export default function Pagination() {
  return (
    <div className="paginationrow">
      <CustomButton variant="round40">
        <AngleLeft stroke="#99b1cc" />
      </CustomButton>

      <CustomButton variant="round40 isactive">1</CustomButton>
      <CustomButton variant="round40">2</CustomButton>
      <CustomButton variant="round40">3</CustomButton>
      <CustomButton variant="round40">4</CustomButton>
      <CustomButton variant="round40">
        <span className="elipse">...</span>
      </CustomButton>
      <CustomButton variant="round40">
        <img src="/icons/angleright.svg" />
      </CustomButton>
    </div>
  );
}
