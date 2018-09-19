import React, { Component } from 'react';

class SideBar extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="col-sm-4 xs-padding">
				<div className="sidebar_box">
					<div className="sidebar_widget mb-30">
						<h3 className="mb-20" />
					</div>
				</div>
			</div>
		);
	}
}

export default SideBar;
