import "./BulletRating.css";
export default function BulletRating({ rating }) {
  return (
    <div className="bulletrating">
      {[...Array(5)].map((_, index) => {
        if (rating > index + 1) {
          return <div className="filleddot" key={index}></div>;
        } else {
          return <div className="blankdot" key={index}></div>;
        }
      })}
    </div>
  );
}
