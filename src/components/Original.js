import React from "react"

import "./style/Original.scss"
import bgTriangle from "../img/bg-triangle.svg"

export default function Original({ pickOptions, selectOption }) {
	return (
		<div className="💋" style={{ backgroundImage: `url(${bgTriangle})` }} >
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
