import { Route } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Todo from "../pages/Todo";
import EditTodo from "../pages/EditTodo";

function AllRoutes() {
  return (
    <div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/todo">
        <Todo />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/todo/:id">
        <EditTodo />
      </Route>
    </div>
  );
}

export default AllRoutes;
