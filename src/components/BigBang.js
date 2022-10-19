import React from "react"

export default function BigBang({ selectOption }) {
	return (
		<div>
			<button onClick={ () => selectOption("paper") } > Paper </button>
			<button onClick={ () => selectOption("scissors") } > Scissors </button>
			<button onClick={ () => selectOption("rock") } > Rock </button>
			<button onClick={ () => selectOption("lizard") } > Lizard </button>
			<button onClick={ () => selectOption("spock") } > Spock </button>
		</div>
	)
}
