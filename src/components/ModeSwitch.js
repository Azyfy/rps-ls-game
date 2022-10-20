import React from "react"

import "./style/ModeSwitch.scss"

export default function ModeSwitch({ switchMode, mode }) {
	return (
		<div className="🔄" >
			<span>Original</span>
			<button onClick={ switchMode } className="🧶" > 
				{ (mode == "Original") ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
							<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
							</svg>
						: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
							<path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
							</svg>	  
				}
			</button>
			<span>BigBang</span>
		</div>
	)
}
