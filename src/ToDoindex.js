import { TodoList } from './TodoList';
import { View } from './View';
import { ToDoController } from './ToDoController';

import "./style.css";

const list = new TodoList();
const view = new View();

const controller = new ToDoController(list, view);


