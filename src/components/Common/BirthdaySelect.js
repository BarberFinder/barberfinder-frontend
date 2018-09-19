import React, { Component } from 'react';
import months from '../../helper/month';

class BirthdaySelect extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		let dates = [];
		for (let i = 1; i <= 31; i++) {
			dates.push(i);
		}

		let thisYear = new Date().getFullYear();
		let years = [];
		for (let i = thisYear; i >= thisYear - 60; i--) {
			years.push(i);
		}

		return (
			<React.Fragment>
				<label htmlFor="birthday">Birthday</label>
				<div className="form-group">
					<div className="col-xs-4">
						<select
							onChange={(e) => this.props.onHandleBirthday(e)}
							className="form-control"
							id="birthday-date"
							name="date"
						>
							<option value="0">Date</option>
							{dates.map((date, index) => (
								<option value={date} key={index}>
									{date}
								</option>
							))}
						</select>
					</div>
					<div className="col-xs-4">
						<select
							onChange={(e) => this.props.onHandleBirthday(e)}
							className="form-control"
							id="birthday-month"
							name="month"
						>
							<option value="0">Month</option>
							{months.map((month, index) => (
								<option key={index} value={month.number}>
									{month.name}
								</option>
							))}
						</select>
					</div>
					<div className="col-xs-4">
						<select
							onChange={(e) => this.props.onHandleBirthday(e)}
							className="form-control"
							id="birthday-year"
							name="year"
						>
							<option value="0">Year</option>
							{years.map((year, index) => (
								<option key={index} value={year}>
									{year}
								</option>
							))}
						</select>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default BirthdaySelect;
