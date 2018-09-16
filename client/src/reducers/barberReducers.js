import days from '../helper/days';

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
	operation_hours: operation_hours
};

const barber = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default barber;
