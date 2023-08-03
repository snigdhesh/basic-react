import Message from "./Message";
import Alert from "./components/Alert";
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
      <Alert/>
    </div>
  );
}

export default App;
