import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import AdminPanel from './AdminPanel.js'; 
import LoginForm from './LoginForm';


//Creating and nesting components
function MyButton(){
  return(
    <button>
      I'm a button
    </button>
  )
}

//Writing markup with JSX
function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}

//Adding styles
function Styles(){
  return(
    <div className='style'>
      <img className='avatar' src='https://th.bing.com/th/id/R.e2f5db47fbc98d2efd37eede287e14be?rik=7Ewhy1S%2b5FrKYg&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fquYHEGK.jpg&ehk=hMMa2tBtezgbqyWPVrAXhMkmy5zoYg%2bV3B3tgOTcGsI%3d&risl=&pid=ImgRaw&r=0' alt='LOGO'>
      </img>
    </div>
  );
}

//Displaying data
const username = { user: "Pooja" };

function UsernameComponent() {
  return (
    <div>
      {username.user}
    </div>
  );
}

const user = {
  name : 'Hedy Lamarr',
  imageUrl : 'https://th.bing.com/th/id/R.e2f5db47fbc98d2efd37eede287e14be?rik=7Ewhy1S%2b5FrKYg&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fquYHEGK.jpg&ehk=hMMa2tBtezgbqyWPVrAXhMkmy5zoYg%2bV3B3tgOTcGsI%3d&risl=&pid=ImgRaw&r=0',
  imageSize : 100,
};
function Profile(){
  return(
    <>
    <h1>{user.name}</h1>
    <img 
    className='avatar1'
    src={user.imageUrl}
    alt={'Photo of ' + user.name}
    style={{width:user.imageSize,height:user.imageSize}}
    />
    </>
  )
}

//Conditional rendering
function rendering(isLoggedIn) {
  let content;
  
  if (isLoggedIn) {
    content = <AdminPanel />;
  } else {
    content = <LoginForm />;
  }

  return (
    <div>{content}</div>
  );
}

//Rendering Lists
const products = [
  {title : 'Cabbage' , isFruit : false , id:1},
  {title : 'Garlic' , isFruit : false, id:2},
  {title : 'Apple' , isFruit : true, id : 3},
];
function ShoppingList(){
  const listItems = products.map(product =>
    <li 
    key = {product.id}
    style = {{
      color : product.isFruit ? 'magenta' : 'darkgreen'
    }}
    >
      {product.title}
    </li>
  );
  return(
    <ul>{listItems}</ul>
  )
}

//Rendering Events
function MyButton1(){
  function handleClick(){
    alert('You Clicked me!');
  }
  return(
    <button onClick={handleClick}>Click Me</button>
  );
}

function MyButton2(){
  const[count,setCount] = useState(0);
  function handleClick1(){
    setCount(count+1);
  }
  return(
    <button onClick={handleClick1}>Clickec {count} timess</button>
  )
}
 function MyButton3({count,onClick}){
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}
 

export default function MyApp(){
  const [count,setCount] = useState(0);
      function handleClick2(){
        setCount(count + 1); }
  return(
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
      <AboutPage />
      <Styles />
      <UsernameComponent/>
      <Profile/>
      <isLoggedIn/>
      <ShoppingList/>
      <MyButton1/>
      <MyButton2/>
      <div>
          <h1>Counters that update together</h1>
          <MyButton3 count={count} onClick={handleClick2}/>
          <MyButton3 count={count} onClick={handleClick2}/>       
          </div>
    </div>
    
  );
}
