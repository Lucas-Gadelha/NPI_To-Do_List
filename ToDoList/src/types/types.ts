// export enum TodoStatus {
//     Pending = "pending",
//     Inprogress = "inProgress",
//     Completed = "completed",
// };

export interface Todo {
    id: number,
    title: string;
    description: string;
    completed: boolean;
    // status: TodoStatus;
};