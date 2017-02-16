angular.module('todoApp', [])
    .controller('TodoListController', function() {
        var todoList = this;
        todoList.todos = [];

        todoList.addTodo = function() {
            todoList.todos.push({
                id: todoList.id,
                subject: todoList.subject,
                ifcompleted: todoList.ifcompleted,
                done:false
            });
        };

        todoList.completed = function() {
            var count = 0;
            angular.forEach(todoList.todos, function(todo) {
                count += todo.done ? 1 : 0;
            });
            return count;
        };

        todoList.remove = function(index) {
            todoList.todos[index].done = true;
        };
    });