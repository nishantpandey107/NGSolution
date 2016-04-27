toDoApp.controller("toDoController", toDoController);

function toDoController($scope) {
    $scope.Greet = "Welcome to Angular JS.....";
    $scope.toDo = model;


    //This is for Count
    $scope.incompleteCount = function () {
        var count = 0;
        angular.forEach($scope.toDo.items, function (item) {
            if (!item.done) { count++; }
        });
        return count;
    }

    //warningLevel
    $scope.warningLevel = function () {
        return $scope.incompleteCount() < 3 ? "label-success" : "label-warning";
    }


    $scope.addNewItem = function (actionText) {
        $scope.toDo.items.push({ "action": actionText, "done": false });
    }
}