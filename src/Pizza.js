import React from "react";

export default function Pizza({ pizza }) {
	const { name, ingredients, photoName, price, soldOut } = pizza;

	return (
		<li className={`pizza ${soldOut ? "sold-out" : ""}`}>
			<img src={photoName} alt="Spinaci Pizza Photo" />
			<div>
				<h3>{name}</h3>
				<p>{ingredients}</p>
				<span>{soldOut ? "SOLD OUT" : price}</span>
			</div>
		</li>
	);
}
