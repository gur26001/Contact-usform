import './Form.css';
import Submitted from './Submitted.js';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Form(props) {
	const [firstname, setFirst] = useState('');
	const [secondname, setLast] = useState('');
	const [contact, setContact] = useState('');
	const [query, setQuery] = useState('');
    

	let history = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		let a = firstname,
			b = secondname,
			c = contact,
			d = query;
		Submitted.firstname = a;
		Submitted.secondname = b;
		Submitted.contact = c;
		Submitted.query = d;

		// console.log(Submitted);
		history('/submitted');
        
	};

	return (
		<form>
			<div className="row headerC">
				<div
					style={{
						backgroundColor: 'purple',
						width: '100%',
						height: '14%',
						borderRadius: '10px 10px 0 0',
					}}
				></div>
				<div style={{ padding: '15px' }}>
					<h1 style={{ margin: '10px' }}>Contact us Form</h1>
					<p>
						<span className="star">* Required</span>
					</p>
				</div>
			</div>
			<div className="row">
				<div className="col-25">
					<label for="fname">
						First Name
						<span className="star">*</span>
					</label>
				</div>
				<div className="col-75">
					<input
						type="text"
						required
						className="fname"
						name="firstname"
						placeholder={props.firstname || 'Your name..'}
						onChange={(e) => setFirst(e.target.value)}
						disabled={props.isDisabled}
					/>
				</div>
			</div>
			<div className="row">
				<div className="col-25">
					<label for="lname">Last Name</label>
				</div>
				<div className="col-75">
					<input
						type="text"
						className="lname"
						name="lastname"
						placeholder={props.secondname || 'Your last name..'}
						onChange={(e) => setLast(e.target.value)}
						disabled={props.isDisabled}
					/>
				</div>
			</div>
			<div className="row">
				<div className="col-25">
					<label for="lname">
						Contact Number
						<span className="star">*</span>
					</label>
				</div>
				<div className="col-75">
					<input
						type="number"
						maxlength="10"
						required
						className="lname"
						name="contactnumber"
						onChange={(e) => setContact('+91' + e.target.value)}
						placeholder={props.contact || '12345678910'}
						disabled={props.isDisabled}
					/>
				</div>
			</div>

			<div className="row">
				<div className="col-25">
					<label for="subject">Your issue</label>
				</div>
				<div className="col-75">
					<textarea
						className="subject"
						name="subject"
						placeholder={props.query || 'Write something..'}
						style={{ width: '100%' }}
						onChange={(e) => setQuery(e.target.value)}
						disabled={props.isDisabled}
					></textarea>
				</div>
			</div>
			<br />

			{props.show && (
				<div className="submit">
					<Link to="/submitted">
						<button type="submit" onClick={handleSubmit}>
							Submit
						</button>
					</Link>
				</div>
			)}
		</form>
	);
}
