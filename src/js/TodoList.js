// react
import React from "react"
// ob
import { observer } from "mobx-react"


// the entire react class become observer
// what does it listen to?
@observer
// export the todo list
// extent react_component
export default class TodoList extends React.Component {
  // create new todo
  createNew(e) {
    // if entered
    if (e.which === 13) {
      // store has a method call create_todo
      // e.target.value
      this.props.store.createTodo(e.target.value)
      // clean up straight away
      e.target.value = ""
    }
  }

  // when we type, on change, we also change the store filter
  filter(e) {
    this.props.store.filter = e.target.value
  }

  // checkout todo.complete
  // toggle both
  toggleComplete(todo) {
    todo.complete = !todo.complete
  }

  // render
  render() {
    // clearComplete is method from store
    // filter is var
    // filter is computed
    // todos is var
    const { clearComplete, filter, filteredTodos, todos } = this.props.store

    // display each todo
    // li key
    // input checkbox
    // this.toggleComplete.bind
    // bind(this, var1, var2, var3, var4, var5.......)
    // value checkbox tick
    // checked or not
    // todo.value
    // no return because is (), {}
    const todoLis = filteredTodos.map(todo => (
      <li key={todo.id}>
       <input type="checkbox" onChange={this.toggleComplete.bind(this, todo)} value={todo.complete} checked={todo.complete} />
       <span>{todo.value}</span>
      </li>
    ))

    // div
    // todos title
    // input on key press, then a new todo is created
    // we have filter as well
    // we list all todos
    // clearComplete is from store, basically uses array.filter(true|false), then do a replace
    return <div>
      <h2>todos</h2>
      <h4>create new todo</h4>
      <input className="new" onKeyPress={this.createNew.bind(this)} /><br/>
      <h4>filter</h4>
      <input className="filter" value={filter} onChange={this.filter.bind(this)} />
      <ul>{todoLis}</ul>
      <a href="#" onClick={clearComplete}>Clear Complete</a>
    </div>
  }
}
