import React, { Component } from 'react';
import { Grid, Segment, Divider, Image, Container } from 'semantic-ui-react';

class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<Grid columns={3} relaxed>
				<Grid.Column>
					<Segment basic>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.</Segment>
				</Grid.Column>
				<Divider vertical>Or</Divider>
				<Grid.Column>
					<Segment basic>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.</Segment>
				</Grid.Column>
				<Divider vertical>And</Divider>
				<Grid.Column>
					<Segment basic>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.</Segment>
				</Grid.Column>
			</Grid>
		);
	}
}

export default Signup;
