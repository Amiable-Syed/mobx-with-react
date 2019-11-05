import { computed, observable } from "mobx"

class Instructors {
    @observable name
    @observable college
    @observable review
  
    constructor(name,college,review) {
      this.value = name
      this.college = college
      this.complete = review
    }
  }
  
  export class AppStore {
    @observable instructors = []
    @observable filter = ""
    @computed get filteredTodos() {
      var matchesFilter = new RegExp(this.filter, "i")
      return this.todos.filter(todo => !this.filter || matchesFilter.test(todo.value))
    }
  
    createTodo(value) {
      this.todos.push(new Todo(value))
    }
  
    clearComplete = () => {
      const incompleteTodos = this.todos.filter(todo => !todo.complete)
      this.todos.replace(incompleteTodos)
    }
  }
  
  export default new AppStore;