import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";


//i can also have nested functions
//this is a component
//have independent state, meaning that when clicked, the button will update its own state
//Example: if I have two buttons, each button will have its own state 
// function MyButton() {
//   //this is a hook, used to store state, update state, and access state
//   //useState is a function that returns an array with two elements
//   //the first element is the state, and the second element is a function that updates the state
//   //for in-depth explaination, see deconstructing arrays in JS and the useState hook in React
//   const [count, setCount] = useState(0);
//   //a nested function handling the click event
//   function handleClick() {
//     setCount(count + 1);
//   }
//   return <button onClick={handleClick}>Clicked {count} times</button>;
// }

//user object with a name: string, imageUrl: string, and imageSize: int
const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

//ui component using the user object
function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        className="avatar"
        style={{ height: user.imageSize, width: user.imageSize }}
      />
    </>
  );
}

//array of objects with a title: string, isFruit: boolean, and id: int
const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

const listItems = products.map((product) => (
  <li key={product.id} style={{color:product.isFruit ? "magenta" : "darkgreen"}}>{product.title}</li>
));

//inline styles are not recommended, but they are possible
//the reason it is in double curly braces is because the first set of curly braces
//is to indicate that we are using JS, and the second set is to indicate that we are
//using an object


//this is the same as the above, but with the styles in a variable
//now if we want to use the styles in multiple places, we can just use the variable
const customStyles = {
  listStyleType: "none",
  padding: 0,
  margin: 0
};





function ShoppingList() {
  return (
    <ul style={customStyles}>
      {listItems}
    </ul>
  );
}


interface MyButtonProps{
  count: number;
  onClick: () => void;
}

function MyButton(props: MyButtonProps) {
  return (
    <button onClick={props.onClick}>Clicked {props.count} times</button>
  )
}


function App() {
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count + 1);
  }

  return (
    <>
      <h1>Welcome to my app</h1>
      <MyButton count={count} onClick={handleClick}/>
      <MyButton count={count} onClick={handleClick}/>
      <Profile />
      <ShoppingList />
    </>
  );
}

export default App;
