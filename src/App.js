import './App.css';

function App() {
  return (
    <div className="App">
      <h1 id="title">Buttons</h1>
      <div id="button-container">
        <div className="button-pair">
          <code>{"<Button />"}</code>
          <code>{"&:hover, &:focus"}</code>
          <button className="default">Default</button>
          <button className="default default-hover">Default</button>
        </div>
      </div>
      <footer>
        <p>Created by: Greg Rutherford</p>
      </footer>
    </div>
  );
}

export default App;
