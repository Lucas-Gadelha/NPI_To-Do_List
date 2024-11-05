import { TodoStatus, type Todo } from "@/types";
import { reactive, computed } from "vue";

interface TodoStore {
    [TodoStatus.Pending]: Todo[];
    [TodoStatus.Inprogress]: Todo[];
    [TodoStatus.Completed]: Todo[];
}

const defaultVal = {
    [TodoStatus.Pending]: [
        {
            id: 1,
            title: "Learn Vuejs",
            description: "Watch videos",
            status: TodoStatus.Pending,
        },
    ],
    [TodoStatus.Inprogress]: [
        {
            id: 2,
            title: "making the code",
            description: "Watch videos",
            status: TodoStatus.Inprogress,
        },
        {
            id: 3,
            title: "ver o espaçamento",
            description: "Watch videos",
            status: TodoStatus.Inprogress,
        },
    ],
    [TodoStatus.Completed]: [
        {
            id: 4,
            title: "nice",
            description: "Watch videos",
            status: TodoStatus.Completed,
        },
    ],
};

const TodoStore = reactive<TodoStore>(defaultVal);

export default () => {
    const getTodoByStatus = (todoStatus: TodoStatus) => {
        return computed(()=> TodoStore[todoStatus]);
    };

    const addNewTodo = (todo:Todo) => {
        TodoStore[todo.status].push(todo);
    };
    const deleteTodo = (todoToDelete:Todo) => {
        TodoStore[todoToDelete.status] = TodoStore[todoToDelete.status].filter(
            todo => todo.id !== todoToDelete.id
        );
    };
   
    return { getTodoByStatus , addNewTodo , deleteTodo }
}