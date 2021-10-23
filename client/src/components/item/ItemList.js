import React, { useContext } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { Square, CheckSquare, Trash } from "react-bootstrap-icons";
import { DELETE_ITEM, TOGGLE_STATUS } from "../../context/action-types";
import ItemContext from "../../context/item-context";

function CheckBox({ done, toggleItemStatus }) {
  return done ? (
    <CheckSquare onClick={toggleItemStatus} className="mr-2" />
  ) : (
    <Square onClick={toggleItemStatus} className="mr-2" />
  );
}

function ItemText({ done, title }) {
  return done ? (
    <del className="align-middle">{title}</del>
  ) : (
    <span className="align-middle">{title}</span>
  );
}

function Item({ title, done, toggleItemStatus, deleteItem }) {
  return (
    <ListGroup.Item>
      <CheckBox toggleItemStatus={toggleItemStatus} done={done} />
      <ItemText done={done} title={title} />{" "}
      <Button className="float-right" variant="danger" onClick={deleteItem}>
        <Trash />
      </Button>
    </ListGroup.Item>
  );
}

export default function ItemList() {
  const { items, dispatch } = useContext(ItemContext);

  function toggleStatus (id) {
      dispatch({type: TOGGLE_STATUS, payload: {id}})
  }

  function deleteItem(id) {
    dispatch({type: DELETE_ITEM, payload: {id}})
  }

  return (
    <ListGroup>
      {items.map((item) => (
        <Item
          key={item.id}
          {...item}
          toggleItemStatus={() => toggleStatus(item.id)}
          deleteItem={() => deleteItem(item.id)}
        />
      ))}
    </ListGroup>
  );
}
