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
        <div className="button-pair">
          <code>{"<Button disabled />"}</code>
          <code>{"<Button variant=\"text\" disabled />"}</code>
          <button className="disabled">Default</button>
          <button className="disabled-text">Default</button>
        </div>
        <div className="button-pair">
          <code>{"<Button startIcon=\"local_store\" />"}</code>
          <code>{"<Button endIcon=\"local_store\" />"}</code>
          <button className="icon-button-left"> 
          <span className="material-icons">shopping_cart</span> 
          Default
          </button>
          <button className="icon-button-right">
          Default
          <span className="material-icons">shopping_cart</span>
          </button>
        </div>
        <div className="button-three">
          <code>{"<Button size=\"sm\""}</code>
          <code>{"<Button size=\"md\""}</code>
          <code>{"<Button size=\"lg\""}</code>
          <button className="default-sm">Default</button>
          <button className="default-md">Default</button>
          <button className="default-lg">Default</button>
        </div>
      </div>
      <footer>
        <p>Created by: Greg Rutherford</p>
      </footer>
    </div>
  );
}

export default App;
