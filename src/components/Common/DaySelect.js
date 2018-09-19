import React from 'react';

const DaySelect = (props) => {
	return (
		<select className="form-control readonly" name={`operation_${props.day.name}`}>
			<option value={props.day.number}>{props.day.name}</option>
		</select>
	);
};

export default DaySelect;
