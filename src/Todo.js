import React from 'react';
import './Todo.css';
import { ListItem,List, ListItemText } from '@material-ui/core';

function Todo(props) {
    return (
        <List>
            <ListItem className = "todo_list">
                <ListItemText primary={props.text} secondary = "Deadline"/>
            </ListItem>
        </List>
    )
}

export default Todo
