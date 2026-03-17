import type { Task } from "../types/task";

export default function tasksReducer( state :Task[] , action : { type : string, payload? : any } ) {
      switch (action.type) {
    case 'add':
      return [...state, { id: Date.now(), title: action.payload, completed: false }];
    case 'delete':
      return state.filter(task => task.id !== action.payload);
    case 'toggle':
      return state.map(task =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
    default:
      return state;
  }
}