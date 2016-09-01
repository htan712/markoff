(function() {
    function TodoCtrl(TodoFactory) {
        var self = this;
        this.todoFactory = TodoFactory;
        this.todos = TodoFactory.getAllTodos();

        this.submitTodoForm = function(form) {
            form.complete = false;
            form.status = 'active';
            form.userId = firebase.auth().currentUser.email;
            TodoFactory.createTodo(angular.copy(form), this.todo);
        };
        this.currentUser;
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                self.currentUser = firebase.auth().currentUser.email;
                console.log(firebase.auth().currentUser.email + " has signed In");
            } else {
                console.log("User not signed in: Calling from todoCtrl");
            }
        });
    }
        angular
            .module('markOff')
            .controller('TodoCtrl', ['TodoFactory', TodoCtrl]);
})();
