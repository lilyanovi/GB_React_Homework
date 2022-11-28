import Message from "./components/massage";

function App() {
  return (
    <div className="center">
      <header className="App-header">  
        <h1>Massages</h1>
      </header>
      <main>
          <Message text='Some text' />
          <Message text='Another text' />
          <Message text='Third text' />
      </main>
    </div>
  );
}

export default App;
