import React, { useState } from "react";
import "./Todo.css";
import {
  Button,
  IconButton,
  Input,
  List,
  ListItem,
  ListItemText,
  Modal,
} from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import DeleteIcon from "@material-ui/icons/Delete";
import db from "./firebase";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const updateTodo = () => {
    db.collection("todos").doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
    setOpen(false);
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className={classes.paper}>
          <h1>Update Your Todo</h1>
          <Input
            placeholder={props.todo.todo}
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            onClick={() => updateTodo()}
          >
            {" "}
            Update
          </Button>
        </div>
      </Modal>

      <Grid
        container
        spacing={3}
        justify="center"
        style={{ paddingTop: "20px" }}
      >
        <List className="todo_list">
          <ListItem>
            <ListItemText
              primary={props.todo.todo}
              secondary="Dummy Deadline 🕰️"
            />
          </ListItem>{" "}
        </List>

        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            size="medium"
            onClick={(e) => setOpen(true)}
          >
            {" "}
            Edit
          </Button>
          <IconButton aria-label="delete" className={classes.margin}>
            <DeleteIcon
              fontSize="large"
              onClick={() => db.collection("todos").doc(props.todo.id).delete()}
            />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
}

export default Todo;
