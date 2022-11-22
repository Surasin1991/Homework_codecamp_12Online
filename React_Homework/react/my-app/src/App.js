
function App() {
  return (
  <a 
    href="https://google.com"
    onClick={event => {
      event.preventDefault();
      const response = window.confirm('Leave for google?')
      if (response == true) {
        window.location.assign('https://google.com')
      } 
    }}
  >
    google
  </a>
  )
};

export default App;

