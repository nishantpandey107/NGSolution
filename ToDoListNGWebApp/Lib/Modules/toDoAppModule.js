var toDoApp = angular.module("toDoApp", []);

toDoApp.run(function ($http) {
    $http.get("/Data/ToDoList.json")
        .success(function (data) {
            model.items = data;
        })
        .error(function (error) {
            alert("Error\n" + error);
        });
})
