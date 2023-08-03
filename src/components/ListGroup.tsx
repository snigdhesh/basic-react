function ListGroup() {
  let cities = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  cities = [];
  if (cities.length === 0)
    return (
      <>
        <h1>List</h1>
        <p>No cities found</p>
      </>
    );
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {cities.map((city) => (
          <li className="list-group-item" key={city}>
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
