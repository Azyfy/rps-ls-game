import {hot} from "react-hot-loader/root"; // import before react and react-dom
import { setConfig } from 'react-hot-loader';
import React from "react";
import "./App.css"

function App() {
    return (
        <div className="App" >
            <h1>Invoice App</h1>
        </div>
    )
}

setConfig({
    showReactDomPatchNotification: false
}) /*  Dont show warning in console:
React-Hot-Loader: react-🔥-dom patch is not detected. React 16.6+ features may not work.

@hot-loader/react-dom would solve the warning but it replaces react-dom
*/

export default hot(App);
