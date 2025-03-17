var Student = /** @class */ (function () {
    // constructor
    function Student() {
        console.log("student object is created");
    }
    // instance methods
    Student.prototype.setDetails = function (i, n) {
        this.id = i;
        this.name = n;
        this.showDetails();
    };
    Student.prototype.showDetails = function () {
        console.log("Student id:".concat(this.id, ", Name:").concat(this.name));
    };
    return Student;
}());
var s1 = new Student();
s1.setDetails(101, "Amit");
