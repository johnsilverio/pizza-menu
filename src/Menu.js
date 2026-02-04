import Pizza from "./Pizza";
import pizzaData from "./data.js";

export default function Menu() {
	const pizzas = pizzaData;
	// const pizzas = [];
	const numPizzas = pizzas.length;

	return (
		<main className="menu">
			<h2>Our menu</h2>

			{numPizzas > 0 ? (
				<>
					<p>
						Authentic Italian cuisine. {numPizzas} creative dishes to choose
						from. All from our stone oven, all organic, all deliciou	s.
					</p>
					<ul className="pizzas">
						{pizzaData.map((pizza) => (
							<Pizza key={pizza.name} pizza={pizza} />
						))}
					</ul>
				</>
			) : (
				<p>We're still working on our menu. Please come back later :)</p>
			)}
		</main>
	);
}
