import days from './days';

const barber = {
	getOperationHours: (operationHours) => {
		let newOperationHours = [];
		if (operationHours) {
			operationHours.map((hour, index) => {
				if (hour.open_hour.toString() !== '00:00:00' && hour.close_hour.toString() !== '00:00:00') {
					const day = days.find((day) => day.number === hour.day.toString());
					hour.open_hour = hour.open_hour.substr(0, 5);
					hour.close_hour = hour.close_hour.substr(0, 5);
					newOperationHours.push({
						hour: hour,
						day: day
					});
				}
			});
		}

		return newOperationHours;
	}
};

export default barber;
