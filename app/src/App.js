import logo from './logo.svg';
import './App.css';

function App() {
  const elem = <h1>Sad to see you</h1>

  const user = {
    'name': 'Samer', 'ID': '2191099'
  }
  const number = [1, 2, 3, 4, 5]
  return (
    /*<div className="App">
    <p>Hello {user.name}:{user.ID}</p>
    {elem}
    </div>*/
    <select>
      {number.map((em)=>{
        return(
          <option>{em}</option>
        )
      })
      }
    </select>
  );
}

export default App;
