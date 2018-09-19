import days from '../helper/days';
import type from '../actions/types';
import defaultImage from '../assets/default-barbershop.jpg';

let operation_hours = [];
days.map((day) => {
	return (operation_hours = [
		...operation_hours,
		{
			day: day.number,
			open_hour: '',
			close_hour: '',
			name: day.name
		}
	]);
});

const initialState = {
	services: [ { service_name: '', price: '' } ],
	name: '',
	tagline: '',
	phone: '',
	address: '',
	city: '',
	operation_hours: operation_hours,
	barbershop: '',
	id: '',
	image: defaultImage,
	barbershopList: [],
	isLoading: true
};

const barber = (state = initialState, action) => {
	switch (action.type) {
		case type.CREATE_BARBER:
			return {
				...state,
				barbershop: action.payload.barber
			};
		case type.EDIT_BARBER:
			return {
				...state,
				barbershop: action.payload.barber,
				isLoading: false
			};
		case type.GET_BARBER:
			return {
				...state,
				barbershop: action.payload.data
			};
		case type.GET_BARBER_LIST:
			return {
				...state,
				barbershopList: action.payload.data
			};
		case type.GET_BARBER_BY_ID:
			return {
				...state,
				barbershop: action.payload.data
			};
		default:
			return state;
	}
};

export default barber;
