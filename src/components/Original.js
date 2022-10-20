import React from "react"

import "./style/Original.scss"
import bgTriangle from "../img/bg-triangle.svg"

export default function Original({ selectOption }) {
	return (
		<div className="💋" style={{ backgroundImage: `url(${bgTriangle})` }} >
			<div className="🍬 🕐" >
				<button onClick={ () => selectOption("paper") } className="🍪" > P </button>
			</div>
			<div className="🍬 🕑" >
			<button onClick={ () => selectOption("scissors") } className="🍪" > S </button>
			</div>
			<div className="🍬 🕒" >
			<button onClick={ () => selectOption("rock") } className="🍪" > R </button>
			</div>
		</div>
	)
}
