import React, {Component} from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		}
	}

	handleChange(value) {
		this.setState({
			value: value
		})
		this.props.onInputChange(value);
	}
	
	render() {
		return (
			<div className="form-group">
				<input
				type="text"
				className="form-control"
				placeholder="search..."
				onChange={ e => this.handleChange(e.target.value) }>
				</input>
			</div>
		);
	}
}

export default SearchBar;