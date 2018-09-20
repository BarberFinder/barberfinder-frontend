import React, { Component } from 'react';
import SignupForm from './SignupForm';
import { Link } from 'react-router-dom';

class Signup extends Component {
	render() {
		return (
			<div className="form-wrapper">
				<section className="book_section padding">
					<div className="container book_form">
						<div className="col-sm-6">
							<div className="section_heading mb-20">
								<h2>Sign up</h2>
								<p>Create an account and get your favourite barbershop</p>
							</div>
							<SignupForm />
						</div>
						<div className="col-sm-6">
							<div className="login-anchor align-center section_heading mb-20">
								<h2>Login</h2>
								<p>
									<span>Already have an account ?</span>
									<span>
										&nbsp;Please login
										<span>
											&nbsp;
											<Link className="anchor" to="/login">
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

export default Signup;
