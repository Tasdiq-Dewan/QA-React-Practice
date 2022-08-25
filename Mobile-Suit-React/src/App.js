import troll_face from './troll_face.png';
import './App.css';

const me = {
  name: "Tasdiq Dewan",
  address: "221b Baker Street",
  hobbies: "sleeping, eating, and sleeping"
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={troll_face} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="https://github.com/Tasdiq-Dewan/QA-React-Practice"
          target="_blank"
          rel="noopener noreferrer"
        >
          My GitHub
        </a>
        <div class="my-details">
          <label for="name"><b>My Name</b></label>
          <textarea id="name" class="text-area" name="name">{me.name}</textarea>
          <label for="addres"><b>My Address</b></label>
          <textarea id="addres" class="text-area" name="addres">{me.address}</textarea>
          <label for="hobby"><b>My Hobbies</b></label>
          <textarea id="hobbies" class="text-area" name="hobbies" >{me.hobbies}</textarea>
        </div>
      </header>
     
    </div>
  );
}

export default App;
