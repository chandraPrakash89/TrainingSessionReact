import './App.css';

function App() {
  const date = new Date();
  return (
    <div>
      <h1>Name: Chandra Prakash</h1>
      <h2>Today Date: {date.getDate()}</h2>
      <h3>Institute: UTU</h3>
      <h4>JS Operation: {2+3}</h4>
    </div>
  
  );
}

export default App;
