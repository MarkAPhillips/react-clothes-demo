import React from 'react';
import PropTypes from 'prop-types';
import Hypergrid from 'fin-hypergrid';

class Datagrid extends React.Component {
	constructor(props) {
		super(props);
        this.grid = null;
	}
	componentDidMount() {
		const element = document.getElementById('datagrid');
		this.grid = new Hypergrid(element);
	}
	componentDidUpdate() {
		this.grid.setData(this.props.data);
	}
	render() {
		return <div id="datagrid" />;
	}
}

Datagrid.propTypes = {
	data: PropTypes.array
};

export default Datagrid;
