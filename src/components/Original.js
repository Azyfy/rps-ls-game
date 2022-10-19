import React from "react"

export default function Original({ selectOption }) {
	return (
		<div>
			<button onClick={ () => selectOption("paper") } > Paper </button>
			<button onClick={ () => selectOption("scissors") } > Scissors </button>
			<button onClick={ () => selectOption("rock") } > Rock </button>
		</div>
	)
}
