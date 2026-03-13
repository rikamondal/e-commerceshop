import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Rating = ({ rating, reviews }) => {

const stars = [];

for (let i = 1; i <= 5; i++) {

if (rating >= i) {
stars.push(<FaStar key={i} color="gold" />);
}

else if (rating >= i - 0.5) {
stars.push(<FaStarHalfAlt key={i} color="gold" />);
}

else {
stars.push(<FaRegStar key={i} color="gold" />);
}

}

return (
<div style={{display:"flex",alignItems:"center",gap:"6px"}}>
{stars}
<span style={{color:"#555"}}>({reviews})</span>
</div>
);

};

export default Rating;