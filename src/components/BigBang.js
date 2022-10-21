import React from "react"

import "./style/BigBang.scss"
import bgPentagon from "../img/bg-pentagon.svg"

export default function BigBang({ pickOptions, selectOption }) {
	return (
		<div className="💄" style={{ backgroundImage: `url(${bgPentagon})` }} >
			{ pickOptions.map( option => {
				return (
					<div key={option.name} className={"🍬 " + option.style } >
						<button onClick={ () => selectOption(option.name) } className="🍪" > <img src={option.icon} alt={option.name} /> </button>
					</div>
				)
			}) }
		</div>
	)
}
