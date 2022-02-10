import logo from './Holberton_Logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img className="App-logo" alt="logo" src={logo}/>
	    <h1>School dashboard</h1>
	  </div>

      <div className="App-body">
	    <p>Login to access the full dashboard</p>
        <label htmlFor="email">
	      Email:
	      <input type="text" id="email" name="email"/>
	    </label>
        <label htmlFor="password">
	      Password:
	      <input type="text" id="password" name="password"/>
	    </label>
        <button>OK</button>
	  </div>

      <div className="App-footer">
	    <p>Copyright 2020 - holberton School</p>
	  </div>

	</div>
  );
}

export default App;
