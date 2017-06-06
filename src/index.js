import React, {Component} from "react";
import ReactDom from "react-dom";

class App extends Component {
	render() {
		return (
			<div>Hello React, App...</div>
		);
	}
}

ReactDom.render(
	<App />,
	document.querySelector(".container")
)