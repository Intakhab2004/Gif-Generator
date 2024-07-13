import './App.css';
import InputGif from './InputGif';
import RandomGif from './RandomGif';



function App() {

  return (
    <div className='wrapper'>
      <h2>Random Gifs</h2>
      <RandomGif/>
      <InputGif/>
    </div>
  );
  
}

export default App;
