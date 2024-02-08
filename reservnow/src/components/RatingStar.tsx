import { BsStarHalf, BsStarFill, BsStar } from "react-icons/bs";

export function RatingStar(props: any) {
  const maxRating = 5;
  const filledStars = Math.floor(props.value);
  let hasHalfStar = props.value % 1 !== 0;

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < maxRating; i++) {
      if (i < filledStars) {
        stars.push(
          <BsStarFill
            key={i}
            style={{ marginRight: "2px", color: "black" }}
            fontSize={10}
          />
        );
      } else if (hasHalfStar) {
        stars.push(
          <BsStarHalf
            key={i}
            style={{ marginRight: "2px", color: "black" }}
            fontSize={10}
          />
        );
        hasHalfStar = false; // Render only one half star
      } else {
        stars.push(
          <BsStar
            key={i}
            style={{ marginRight: "2px", color: "black" }}
            fontSize={10}
          />
        );
      }
    }
    return stars;
  };

  return <div>{renderStars()}</div>;
}
