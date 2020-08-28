import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alerts = () => {
	const alertContext = useContext(AlertContext);
	return (
		alertContext.alerts.length > 0 &&
		alertContext.alerts.map((alert) => (
			<div key={alert.id} className={`m-3 alert alert-${alert.type}`}>
				<i className='fa fa-info circle' /> {alert.msg}
			</div>
		))
	);
};

export default Alerts;
