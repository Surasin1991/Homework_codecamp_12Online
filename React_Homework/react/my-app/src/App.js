
function App() {
  return (
  <select onChange={(event) => console.log(event.target.value)}>
    <option value="Thailand">Thailand</option>
    <option value="Malasia">Malasia</option>
    <option value="Taiwan">Taiwan</option>
    <option value="USA">USA</option>    
    <option value="Japan">Japan</option>
  </select>
)};

export default App;

