import React from "react"

export default function ModeSwitch({ switchMode }) {
	return (
		<div>
			<div>
				<span>Original</span>
				<button onClick={ switchMode } > Mode trigger </button>
				<span>BigBang</span>
			</div>
		</div>
	)
}
