import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import { Component } from 'react';

/*
function App() {
  return (
    <Customer/>
  );
}
*/

/*
class App extends Component {
  render () {
    return (
      <Customer/>
    ); 
  }
}
*/
 
const customers = [
  {
    'id': 1
  , 'image': 'https://placeimg.com/64/64/1'
  , 'name': '김중선'
  , 'birthday': '781117'
  , 'gender': '남자'
  , 'job': '직장인'
  },
  {
    'id': 2
  , 'image': 'https://placeimg.com/64/64/2'
  , 'name': '김중선2'
  , 'birthday': '7811172'
  , 'gender': '남자2'
  , 'job': '직장인2'
  },
  {
    'id': 3
  , 'image': 'https://placeimg.com/64/64/3'
  , 'name': '김중선3'
  , 'birthday': '7811173'
  , 'gender': '남자3'
  , 'job': '직장인3'
  }
]

class App extends Component {
  render () {
    return (
      <div>
        {
          //한줄로 만들어서 사용하면 좋음
          //customers.map(c => {            return (              <Customer                key={c.id}                id={c.id}                image={c.image}                name={c.name}                birthday={c.birthday}                gender={c.gender}                job={c.job}              />            )          })          
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            )
          })
        }
      </div>
    ); 
  }
}

export default App;
