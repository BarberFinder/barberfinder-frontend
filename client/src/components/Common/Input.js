import React from 'react';

const Input = (props) => {
	const { className, type, placeholder, name, required } = props.input;
	return (
		<div className={className}>
			<input type={type} name={name} className="form-control" placeholder={placeholder} required={required} />
		</div>
	);
};

export default Input;
