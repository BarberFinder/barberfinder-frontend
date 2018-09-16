import React from 'react';
import { Icon } from 'semantic-ui-react';

const BarberService = (props) => {
	return (
		<React.Fragment>
			<div className="form-group">
				<div className="col-xs-5">
					<input
						type="text"
						value={props.service.service_name}
						name="service_name"
						className="form-control"
						placeholder="Service Name"
						onChange={props.onServiceNameChangeHandler(props.index)}
					/>
				</div>
				<div className="col-xs-5">
					<input
						type="text"
						value={props.service.service_price}
						name="service_price"
						className="form-control"
						placeholder="Price"
						onChange={props.onServicePriceChangeHandler(props.index)}
					/>
				</div>
				<div className="col-xs-2">
					<a>
						<Icon onClick={props.onRemoveServiceHandler(props.index)} className="remove" />
					</a>
				</div>
			</div>
		</React.Fragment>
	);
};

export default BarberService;
