import React, {Component} from "react";
import ReactDom from "react-dom";
import axios from "axios";

import SearchBar from "./components/searchBar";

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

	renderPosts() {
		return (
			this.state.newsPosts.map((news) => {
				return (
					<li key={news.id}><a href={news.webUrl}>{news.webTitle}</a></li>
				);
			})
		);
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
				<h2>
					Top Ten News Today!
				</h2>
				<ul>
	 				{this.state.newsPosts.length === 0 ? 'Loading...' : this.renderPosts()}
	 			</ul>
			</div>
 			
		);
	}
}

ReactDom.render(
	<App />,
	document.querySelector(".container")
)