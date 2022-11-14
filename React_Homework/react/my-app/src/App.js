// import './App.css';

function App() {
  // const style = {
  //   margin: "12px",
  //   border: "1px solid black",
  //   padding: '16px',
  //   backgroundColor: '#ccc'
  // }
  // return (
  // <div style={style}>
  //   Hello React
  // </div>
  // );

  // const ano = (a, b) => {
  //   return event => {
  //     console.log(event);
  //     console.log(a + b);
  //   };
  // };

  return (
//   <div style={{
//     margin: "12px", 
//     color: 'blue',
//     fontSize: '23px',
//     border: "1px solid black",
//     backgroundColor: 'yellow',
//     borderRadius: '8px'
//   }}
//   className="text-center"
//   >
//     Hello React App</div>
// }
    
    // <button value="111" onClick={event => console.log(event)}> Click </button>
  // <input 
  //   name="username" 
  //   placeholder="Username" 
  //   onChange={(event) => console.log(event)}
  // />
  <a href="https://shopee.co.th" onClick={(event) => {
    event.preventDefault();
    console.log(event)
  }}>Navigate</a>
)};
export default App;

