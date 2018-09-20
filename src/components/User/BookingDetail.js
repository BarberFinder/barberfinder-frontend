import React from 'react';
import moment from 'moment';

const BookingDetail = (props) => {
	const { detail } = props;
	const { barbershop } = detail;
	return (
		<tr>
			<td>{moment(new Date(detail.reservation_date).toString()).format('DD-MM-YYYY')}</td>
			<td>{moment(new Date(detail.reservation_date).toString()).format('HH:mm')}</td>
			<td>{barbershop.name}</td>
		</tr>
	);
};

export default BookingDetail;
