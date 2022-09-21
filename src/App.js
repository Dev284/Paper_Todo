import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  MainDiv,
  Button,
  ParentDiv,
  ChildDiv,
  StyleUl,
  StyleLi,
  StyleP,
  StyleInput,
  Styledh1,
  StyledSelect,
  StyledLabel,
  StyledOption,
} from "./style_components/style";





const Todo = () => {

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  let status = useSelector((state) => state.status);
  let data = useSelector((state) => state.data);


  const todoMap = (todo) => {
    if (todo.status === false && status==='Completed'){
      return(
      <StyleLi onClick={() => changeStatus(todo.id)} key={todo.id}>
        {todo.lable}
      </StyleLi>)
      }else if (todo.status === true && status==='Active'){
        return(
          <StyleLi onClick={() => changeStatus(todo.id)} key={todo.id}>
            {todo.lable}
          </StyleLi>)
        }
  }





  const changeStatus = (id) =>
    dispatch({
      type: "CHANGE_STATUS",
      payload:{
      todo_id : id,
      }
    });


    const clearAll = () => {
      dispatch({
        type: "CLEAR_ALL",
      })
    }

    const handelSubmit = (e) => {
      console.log(e)
      status = e

    }
      
    
  if (!todos || !todos.length) {

    if (status === "Active"){
      data = "Nothing to be completed."
    } else if (status === "Completed"){
      data = "Nothing completed yet."
    }

      return (
        <>
        <br/> <br/>
          <StyleP>{data}</StyleP>
  
          <ChildDiv>
            <Button onClick={() => clearAll()}>Clear</Button> <br></br>
  
            <br/> <br/>
          <StyledLabel htmlfor="todo">Show: </StyledLabel>
          <StyledSelect  id="todo" >
          <StyledOption onClick={() => handelSubmit('All')}>All</StyledOption>
          <StyledOption onClick={() => handelSubmit('Active')}>Active</StyledOption>
          <StyledOption onClick={() => handelSubmit('Completed')}>Completed</StyledOption>
        </StyledSelect>
  
          </ChildDiv>
        </>
      );
  } else if (status === 'All'){

  return (
    <>
    <ChildDiv>
    <StyleUl>
      {todos.map((todo) => (
        <StyleLi onClick={() => changeStatus(todo.id)} key={todo.id}>
          {todo.lable}
        </StyleLi>
      ))}
    </StyleUl>
    </ChildDiv>

<ChildDiv>
    <Button onClick={() => clearAll()}>Clear</Button> <br></br>


    <StyledLabel htmlfor="todo">Show: </StyledLabel>
        <StyledSelect  id="todo" >
          <StyledOption onClick={() => handelSubmit('All')}>All</StyledOption>
          <StyledOption onClick={() => handelSubmit('Active')}>Active</StyledOption>
          <StyledOption onClick={() => handelSubmit('Completed')}>Completed</StyledOption>
        </StyledSelect>
        </ChildDiv>
      </>
  );
  }else if (status === 'Active'){
    return (
      <>
      <ChildDiv>
      <StyleUl>
        {todos.map(todoMap)}
      </StyleUl>
      </ChildDiv>
  
  <ChildDiv>
      <Button onClick={() => clearAll()}>Clear</Button> <br></br>
  
  
      <StyledLabel htmlfor="todo">Show: </StyledLabel>
          <StyledSelect  id="todo" >
            <StyledOption onClick={() => handelSubmit('All')}>All</StyledOption>
            <StyledOption onClick={() => handelSubmit('Active')}>Active</StyledOption>
            <StyledOption onClick={() => handelSubmit('Completed')}>Completed</StyledOption>
          </StyledSelect>
          </ChildDiv>
        </>
    );
  }else if (status === 'Completed'){
    return (
      <>
      <ChildDiv>
      <StyleUl>
        {todos.map(todoMap)}
      </StyleUl>
      </ChildDiv>
  
  <ChildDiv>
      <Button onClick={() => clearAll()}>Clear</Button> <br></br>
  
  
      <StyledLabel htmlfor="todo">Show: </StyledLabel>
          <StyledSelect  id="todo" >
            <StyledOption onClick={() => handelSubmit('All')}>All</StyledOption>
            <StyledOption onClick={() => handelSubmit('Avtive')}>Active</StyledOption>
            <StyledOption onClick={() => handelSubmit('Completed')}>Completed</StyledOption>
          </StyledSelect>
          </ChildDiv>
        </>
    );
  }
};





const TodoInput = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState('');

  const handeChange = (event) => {
    setNewTodo(event.target.value)};

  const handeClick = () =>{
    if (newTodo !== '') {
      dispatch({
        type: "ADD_TODO",
        payload: {
          status: true,
          lable: newTodo,
          id: Math.ceil(Math.random() * 100),
        },
      });
    }else {
      alert("Please Add Something")
    }
  }
    

  return (
    <>
    <ChildDiv>
      <StyleInput
        placeholder="New Todo"
        value={newTodo}
        onChange={handeChange}
        type="text"
      />
      <Button onClick={handeClick}>Add</Button>
      </ChildDiv>
    </>
  );
};





function App() {
  return (
    <>
      <MainDiv>
        <ParentDiv>
          <Styledh1>Paper Todo</Styledh1>
            <TodoInput />
            <Todo />
        </ParentDiv>
      </MainDiv>
    </>
  );
}

export default App;
