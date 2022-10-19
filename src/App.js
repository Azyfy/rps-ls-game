import { hot } from "react-hot-loader/root" // import before react and react-dom
import { setConfig } from "react-hot-loader"
import React from "react"
import "./App.scss"

import Game from "./Game.js"

function App() {
	return (
		<div className="App" >
			<Game />
		</div>
	)
}

setConfig({
	showReactDomPatchNotification: false
}) /*  Dont show warning in console:
React-Hot-Loader: react-🔥-dom patch is not detected. React 16.6+ features may not work.

@hot-loader/react-dom would solve the warning but it replaces react-dom
*/

export default hot(App)
