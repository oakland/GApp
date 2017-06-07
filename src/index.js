import React, {Component} from "react";
import ReactDom from "react-dom";
import axios from "axios";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newsPosts: []
		};
	}

	componentDidMount() {
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

	render() {
		return (
 			<ul>
 				{this.state.newsPosts.length === 0 ? 'Loading...' : this.renderPosts()}
 			</ul>
		);
	}
}

ReactDom.render(
	<App />,
	document.querySelector(".container")
)