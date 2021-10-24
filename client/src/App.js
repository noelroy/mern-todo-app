import "./App.css";
// import AppNavBar from "./components/AppNavBar";
import ItemList from "./components/item/ItemList";
import AddItemForm from "./components/item/AddItemForm";
import { Container } from "react-bootstrap";
import { ItemState } from './context/ItemState';

function App() {
  return (
    <>
      {/* <AppNavBar /> */}
      <br/>
      <br/>
      <Container>
      <h1>ToDo List</h1>
      <hr/>
        <ItemState>
          <AddItemForm />
          <br/>
          <ItemList />
        </ItemState>
      </Container>
    </>
  );
}

export default App;
