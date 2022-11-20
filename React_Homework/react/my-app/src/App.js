
function App() {
  const handleChangeCheckBox = (event) => {
    console.log(`
      name:${event.target.name}
      value:${event.target.value}
      check:${event.target.checked}
    `)
  }
  return (
  <div style={{margin: '3rem'}}>
    <input 
      type="checkbox" 
      id="Apple" 
      name="Apple" 
      value="iPhone14Pro" 
      onChange={handleChangeCheckBox}
    />
    <label htmlFor="apple">iPhone14Pro</label><br></br>
    <input 
      type="checkbox" 
      id="Samsung" name="Samsung" 
      value="S44UltraMaxPlus" 
      onChange={handleChangeCheckBox}
    />
    <label htmlFor="Samsung">SamsungS44UltraMaxPlus</label><br></br>
    <input 
      type="checkbox" 
      id="Mi" 
      name="Mi" 
      value="Mi999ProMaxExtraUltraPlusTurbo" 
      onChange={handleChangeCheckBox}
    />
    <label htmlFor="Mi">Mi999ProMaxExtraUltraPlusTurbo</label>
  </div>
  
)};

export default App;

