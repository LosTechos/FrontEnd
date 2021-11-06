import Login from './Login';
import Register from './RegUserHouse';
import axios from "axios";
import { Component } from 'react';

const url="https://los-techos.herokuapp.com/api/users"

class App extends Component{

state={
  data:[]
}

peticionGet=()=>{
  axios.get(url).then(response=>{
    console.log(response.data)
  })
}
componentDidMount(){
this.peticionGet();
}

render(){
  return (
    <div>
      <Register/>
    </div>
  );

}
}
export default App;

