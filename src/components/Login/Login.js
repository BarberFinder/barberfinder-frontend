import React, { Component } from 'react';
import LoginForm from './LoginForm';
import { Link } from 'react-router-dom';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="form-wrapper">
				<section className="book_section padding">
					<div className="container book_form">
						<div className="col-sm-6">
							<div className="section_heading mb-20">
								<h2>Login</h2>
							</div>
							<LoginForm />
						</div>
						<div className="col-sm-6">
							<div className="login-anchor align-center section_heading mb-20">
								<h2>Signup </h2>
								<p>
									<span>New to Barber Finder ? </span>
									<span>
										&nbsp;Please sign up
										<span>
											&nbsp;
											<Link className="anchor" to="/signup">
												here
											</Link>
										</span>
									</span>
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Login;
