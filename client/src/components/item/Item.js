import React, { useContext } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { Square, CheckSquare, Trash } from "react-bootstrap-icons";
import { ItemContext } from "../../context/ItemState";

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
export default function Item({ title, done, _id }) {
  const { deleteItem, toggleStatus } = useContext(ItemContext);

  return (
    <ListGroup.Item>
      <CheckBox toggleItemStatus={() => toggleStatus(_id, !done)} done={done} />
      <ItemText done={done} title={title} />
      <Button
        className="float-right"
        variant="danger"
        onClick={() => deleteItem(_id)}
      >
        <Trash />
      </Button>
    </ListGroup.Item>
  );
}
