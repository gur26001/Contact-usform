import './Response.css';
import Submitted from './Submitted';
import { useNavigate } from 'react-router-dom';
import Form from './Form';

// function getFullName(item) {
// 	return (
// 		<div>
// 			[ {item.a}, {item.b},{item.c},{item.d}].join(' ')
// 		</div>
// 	);
// }

export default function Response() {
	let history = useNavigate();
	history('/');

	return (
		<div className="container2">
			<header className="resHead">
				<h2>Your response we recieved :</h2>
			</header>
			<Form
				head="Contact us form"
				firstname={Submitted.firstname}
				secondname={Submitted.secondname}
				contact={Submitted.contact}
				query={Submitted.query}
				isDisabled={true}
				show={false}
			/>
		</div>
	);
}
