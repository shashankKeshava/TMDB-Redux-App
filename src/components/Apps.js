import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import tmdbVisibility from "../containers/tmdbVisibility";
const App = () =>
    <div>
		<AddTodo />
		<VisibleTodoList />
		<Footer />
		<tmdbVisibility/>
	</div>;

export default App;