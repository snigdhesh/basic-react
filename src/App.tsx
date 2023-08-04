import Message from "./Message";
import { useState } from "react";
import Alert from "./components/Alert";
import CustomButton from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let cities = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };


  const [alertVisible, setAlertVisibility]= useState(false);

  return (
    <div>
      <ListGroup
        cities={cities}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />

      {alertVisible && <Alert onClose={()=>setAlertVisibility(false)}>My Alert</Alert>}
 

      <CustomButton onClick={()=>setAlertVisibility(true)} color="warning">My Button</CustomButton>
    </div>
  );
}

export default App;
