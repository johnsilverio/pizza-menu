import React from "react";

export default function Order({ closeHour, openHour }) {
	return (
		<div className="order">
			<p>
				We're open from {openHour}:00 until {closeHour}:00. Come visit us or
				order online.
			</p>
			<button className="btn">Order Now</button>
		</div>
	);
}
