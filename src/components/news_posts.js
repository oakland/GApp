import React, { Component } from "react";

class NewsPosts extends Component {
	constructor(props) {
		super(props);
		this.renderPosts.bind(this);
	}

	renderPosts() {
		return (
			this.props.newsPosts.map((news) => {
				return (
					<li key={news.id}><a href={news.webUrl}>{news.webTitle}</a></li>
				);
			})
		);
	}

	render() {
		return(
			<ul>
				{this.renderPosts()}
			</ul>
		);
	}
}

export default NewsPosts;