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
        <div className="button-pair">
          <code>{"<Button variant=\"outline\" />"}</code>
          <code>{"&:hover, &:focus"}</code>
          <button className="outline">Default</button>
          <button className="outline outline-hover">Default</button>
        </div>
        <div className="button-pair">
          <code>{"<Button variant=\"text\" />"}</code>
          <code>{"&:hover, &:focus"}</code>
          <button className="text">Default</button>
          <button className="text text-hover">Default</button>
        </div>
        <div className="button-single">
          <code>{"<Button disableShadow />"}</code>
          <button className="disableShadow">Default</button>
        </div>
      </div>
      <footer>
        <p>Created by: Greg Rutherford</p>
      </footer>
    </div>
  );
}

export default App;
