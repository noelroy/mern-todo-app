import React, {useState} from 'react';
import {Button, InputGroup, FormControl, Container, ListGroup} from 'react-bootstrap';
import {Square, CheckSquare,Trash} from 'react-bootstrap-icons'

function AddItemForm({addItem, items}) {

    const [text, setText] = useState("");

    return (
        <InputGroup>
            <FormControl onChange={(e)=>setText(e.target.value)} value={text} placeholder="Add new todo item"/>
            <InputGroup.Append>
                <Button onClick={()=>{addItem(text);setText("");}}>Add Item</Button>
            </InputGroup.Append>
        </InputGroup>
    );
}

function CheckBox({done, toggleItemStatus, id}){
    return (
        done ? <CheckSquare onClick={toggleItemStatus} className="mr-2"/>:<Square  onClick={toggleItemStatus} className="mr-2"/>
    );
}

function ItemText({done, title}){
    return (
        done ? <del className="align-middle">{title}</del>:<span className="align-middle">{title}</span>
    );
}

function Item({title, done, toggleItemStatus, deleteItem}){
    return (
        <ListGroup.Item>
            <CheckBox toggleItemStatus={toggleItemStatus} done={done}/><ItemText done={done} title={title} /> <Button className="float-right" variant="danger" onClick={deleteItem}><Trash/></Button>
        </ListGroup.Item>
    )
}

export default function ItemList() {

    const [ items, setItems ] = useState([{id : 1, title : "Title 1", done: true},{id : 2, title : "Title 2", done:false}])

    function addItem(title) {
        setItems([...items,{id:items[items.length-1].id+1, title:title, done:false}])
    }

    function toggleItemStatus(id) {
        setItems(items.map(x => x.id!==id ? x : {...x,done: !x.done}))
    }

    function deleteItem(id) {
        setItems(items.filter(x => x.id!==id))
    }

    return (
        <Container>
            <AddItemForm addItem={addItem} />
            <br/>
            <ListGroup>
                {items.map((item) => (
                    <Item key={item.id} {...item} toggleItemStatus={() => toggleItemStatus(item.id)} deleteItem={()=>deleteItem(item.id)}/>
                ))}
            </ListGroup>
        </Container>
    );

}