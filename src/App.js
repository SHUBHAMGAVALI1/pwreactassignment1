
import './App.css';
import Person from './components/Person';
import Button from './components/Button';
import Header from './components/Header';
import List from './components/List';
function App() {

  const onClick=()=>{
    console.log("clicked");
}

const items=["shubham","sanjay","gavali","smart","wealthy","happy","brave"];


  return (
    <div >
     <Person name="shubham" age="14"/>
     <Button text="click here" onClick={onClick}/>
     <Header title="shubham gavali"/>
     <List items={items}/>
    </div>
  );
}

export default App;
