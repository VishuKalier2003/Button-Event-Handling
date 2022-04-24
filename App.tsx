import './App.css';
// { App component } present in components folder
// Retrieving the required component by the folder identity
import { Button } from './components/Button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button click={(event, id) => {
          console.log("Button Clicked !!", event, id)
        }}></Button>
        </header>
    </div>
  );
}

export default App;
