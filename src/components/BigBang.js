import React from "react"

import "./style/BigBang.scss"
import bgPentagon from "../img/bg-pentagon.svg"

export default function BigBang({ selectOption }) {
	console.log(bgPentagon)
	return (
		<div className="💄" style={{ backgroundImage: `url(${bgPentagon})` }} >
			<div className="🍬 🕐" >
				<button onClick={ () => selectOption("paper") } className="🍪" > P </button>
			</div>
			<div className="🍬 🕑" >
				<button onClick={ () => selectOption("scissors") } className="🍪" > S </button>
			</div>
			<div className="🍬 🕒" >
				<button onClick={ () => selectOption("rock") } className="🍪" > R </button>
			</div>
			<div className="🍬 🕓" >
				<button onClick={ () => selectOption("lizard") } className="🍪" > L </button>
			</div>
			<div className="🍬 🕔" >
				<button onClick={ () => selectOption("spock") } className="🍪" > Sp </button>
			</div>
		</div>
	)
}
