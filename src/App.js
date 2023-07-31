import logo from './logo.svg';
import './App.css';
import Person from './Person.js'
import Button from './Button';
import Header from './Header';
import List from './List';

function App() {
  return (
    <div >
      <Person name="Leena" age="20" />
      <Person name="Anjali" age="21" />
     
      <Button text="Click me!" onClick={() => console.log("Button clicked")} />


      <Header title="Welcome to learn React"/>

      <List items={['Chocolate', 'Lays', 'Biscuits','Kurkure','Muffins','Pastries']} />

    </div>
  );
}

export default App;

//Create a component named "Person" that takes two props - "name" and "age". The component should display the person's name and age in a paragraph element.
