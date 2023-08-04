import Message from "./Message";
import Alert from "./components/Alert";
import CustomButton from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let cities = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        cities={cities}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />

      <Alert>
        Hello <span>World</span>
      </Alert>

      <CustomButton onClick={()=>console.log("click")} color="warning">My Button</CustomButton>
    </div>
  );
}

export default App;
