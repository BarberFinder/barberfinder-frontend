import days from '../helper/days';
import type from '../actions/types';

let operation_hours = [];
days.map((day) => {
	return (operation_hours = [
		...operation_hours,
		{
			day: day.number,
			open_time: '',
			close_time: '',
			name: day.name
		}
	]);
});

const initialState = {
	services: [ { service_name: '', service_price: '' } ],
	name: '',
	tagline: '',
	phone: '',
	address: '',
	city: '',
	operation_hours: operation_hours,
	barbershop: {}
};

const barber = (state = initialState, action) => {
	switch (action.type) {
		case type.CREATE_BARBER:
			return {
				...state,
				barbershop: action.payload.barber
			};
		case type.GET_BARBER:
			return {
				...state,
				barbershop: action.payload.data
			};
		default:
			return state;
	}
};

export default barber;
