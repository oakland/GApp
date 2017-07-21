import React, {Component} from "react";
import ReactDom from "react-dom";
import axios from "axios";

import SearchBar from "./components/search_bar";
import NewsPosts from "./components/news_posts";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newsPosts: []
		};
		this.onInputChange = this.onInputChange.bind(this);
	}

	componentDidMount() {
		// rootURL: https://content.guardianapis.com/search
		// Example: http://content.guardianapis.com/search?order-by=newest&page=1&q=china&api-key=yourownapikey
		const url = 'http://content.guardianapis.com/search?api-key=test';
		axios.get(url).then((data) => {
			this.setState({
				newsPosts: [...data.data.response.results]
			});
		})
	}

	onInputChange(query) {
		const APIKEY = '563fc939-8ee4-40c1-bc6e-90bf63c58133';
		const url = `http://content.guardianapis.com/search?q=${query}&api-key=${APIKEY}`;
		axios.get(url).then((data) => {
			this.setState({
				newsPosts: [...data.data.response.results]
			});
		})
	}

	render() {
		return (
			<div>
				<SearchBar onInputChange={this.onInputChange} />
				<hr />
				<h2>
					Top Ten News Today!
				</h2>
				<NewsPosts newsPosts={this.state.newsPosts} />
			</div>
		);
	}
}

ReactDom.render(
	<App />,
	document.querySelector(".container")
)