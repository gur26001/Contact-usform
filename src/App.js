
import './App.css';
import Form from './Form';




function App() {


  return (
		<div className="App">
			<body>
				<div className="container">
					<header className="fillRes"></header>
					<Form
						indicator="purple"
						
						show={true}
						isDisabled={false}
						
					/>
				</div>
			</body>
		</div>
  );
}

export default App;
