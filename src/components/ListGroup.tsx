import { useState } from "react";

//Interface here is like a model in java.
interface ListGroupProps {
  cities: string[];
  heading: string;
  //functionName: type of input => what it returns;
  onSelectItem: (item:string) => void;
}

/*You can also use this 
  function ListGroup(props: ListGroupProps) {  
  but you should do props.cities and props.heading within the function code.*/
function ListGroup({ cities, heading, onSelectItem }: ListGroupProps) {
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
  const [selectedIndex, setSelectedIndex] = useState(-1); //-1 is the index, we are initializing to select no city.
  /*where 
    arr[0] //variable (selectedIndex) and 
    arr[1] //updater function
  Example: const [name, setName] = useState('');*/

  return (
    <div className="container">
      <h1>{heading}</h1>
      {cities.length == 0 ? <p>No cities found</p> : null}
      {/*
          But this is much cleaner way.
          {cities.length === 0 && <p>No cities found</p>}

          Watch https://www.youtube.com/watch?v=SqcY0GlETPk&t=154s @ 36:56 to understand how following statement works
        */}
      <ul className="list-group">
        {cities.map((city, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={city}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(city);
            }}
          >
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
