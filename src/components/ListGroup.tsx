import { useState } from "react";


function ListGroup() {
  let cities = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  //cities = [];
  //let selectedIndex = 0; //You can set it to -1, which means no city is selected.
  
  /**
   * Note: Here we are trying to change "selectedIndex" variable, upon button click.
   * Which means, we are trying to change data (also called as state) in this function.
   * 
   * But "selectedIndex" variable is a local variable to this "ListGroup" component.
   * So react is not aware of this variable.
   * 
   * Whenever we are trying to change data within a component, we should tell react that
   * this component is going to have data(or state) that might change over time.
   * 
   * To do that we need to use one of built-in functions in react called "useState"
   * 
   */

  //Hook : It's a function that allows us to tap into built-in functions in react.
  //Here useState is called "stateHook"
  //Here selectedIndex is called stateVariable
  const [selectedIndex, setSelectedIndex]=useState(-1); //-1 is the index, we are initializing to select no city.
  /*where 
    arr[0] //variable (selectedIndex) and 
    arr[1] //updater function
  Example: const [name, setName] = useState('');*/


  return (
    <>
      <h1>List</h1>
      {cities.length == 0 ? <p>No cities found</p> : null}
      {/*
          But this is much cleaner way.
          {cities.length === 0 && <p>No cities found</p>}

          Watch https://www.youtube.com/watch?v=SqcY0GlETPk&t=154s @ 36:56 to understand how following statement works
        */}
      <ul className="list-group">
        {cities.map((city,index) => (
          <li
            className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
            key={city}
            onClick={()=> setSelectedIndex(index)}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
