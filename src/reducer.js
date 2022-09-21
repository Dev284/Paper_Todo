const initialState = {
    todos:[],
    status:"All",
    data:"Chills Sceens."
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        case 'CLEAR_ALL':
            return {
                todos: [],
            };


        case 'CHANGE_STATUS':
            const indexRecover = state.todos.findIndex((iteam) => iteam.id === action.payload.todo_id)
                if (state.todos[indexRecover].status){
                state.todos[indexRecover].status = false
                }else{
                    state.todos[indexRecover].status = true
                }
                console.log(...state.todos)
            return {
                ...state,
                todos:state.todos,
            };


        case 'FILTER':
            console.log(1)
            const temp = state.todos.filter(todo => todo.status === action.payload.status)
            console.log(state.temp)
            return {
                ...state.arr,
                temp,
            };

        default :
        return state;
    }
}

export default reducer;