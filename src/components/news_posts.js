import React, { Component } from "react";

class NewsPosts extends Component {
	constructor(props) {
		super(props);
		this.renderPosts.bind(this);
	}

	renderPosts() {
		const keyword = this.props.keyword;
		if(!keyword) {
			return (
				this.props.newsPosts.map((news) => {
					return (
						<li key={news.id}><a href={news.webUrl}>{news.webTitle}</a> <small className="text-muted">{news.sectionName}</small></li>
					);
				})
			);
		} else {
			const keyword = this.props.keyword;
			return (
				this.props.newsPosts.map((news) => {
					const titleArr = news.webTitle.split(keyword);
					const prevPart = titleArr[0];
					const nextPart = titleArr[1];
					return (
						<li key={news.id}><a href={news.webUrl}>{`${prevPart}**${this.props.keyword}**${nextPart}`}</a> <small className="text-muted">{news.sectionName}</small></li>
					);
				})
			);
		}
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