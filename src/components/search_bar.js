import React, {Component} from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchWord: ''
		};
		this.searchNews = this.searchNews.bind(this);
	}

	handleChange(value) {
		this.setState({
			searchWord: value
		})
	}

	searchNews(e) {
		e.preventDefault();
		const searchWord = this.state.searchWord;
		this.props.onInputChange(searchWord);
		this.setState({
			searchWord: ""
		});
	}
	
	render() {
		return (
			<div className="">
				<form onSubmit={this.searchNews} className="form-inline">
					<div className="input-group">
						<input
						type="text"
						className="form-control"
						placeholder=""
						onChange={ e => this.handleChange(e.target.value) }
						value={this.state.searchWord}>
						</input>
					</div>
					<span className="input-group-btn">
						<button type="submit" className="btn btn-primary">Search</button>
					</span>
				</form>
			</div>
		);
	}
}

export default SearchBar;