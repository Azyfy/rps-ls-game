import React from "react"

import "./style/Rules.scss"
import rpsRules from "../img/rps-rules.svg"
import rpslsRules from "../img/rpsls-rules.svg"

export default function Rules({ mode, toggelRules }) {
	return (
		<div className="👻" >
			<div className="📜" >
				<div>
					<p> Rules </p>
				</div>
				<img src={ (mode == "Original") ? rpsRules : rpslsRules } />
				<div onClick={ toggelRules } >
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
				</div>
			</div>
		</div>
	)
}
