// Пример процедурного программирования
var firstName = "Иван";
var lastName = "Иванов";
function getFullName(firstName, lastName) {
    return firstName + " " + lastName;
}
var fullName = getFullName(firstName, lastName);
console.log(fullName);
// Пример простого класса
var User = /** @class */ (function () {
    function User(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    User.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    User.prototype.isAdult = function () {
        if (this.age >= 18) {
            return true;
        }
    };
    return User;
}());
// Создаем конкретный объект
var vasya = new User("Василий", "Ямщиков", 28);
var vasyaFullName = vasya.getFullName();
var vasyaIsAdult = vasya.isAdult();
console.log(vasyaFullName, vasyaIsAdult);
// Инкапсуляция
var Box = /** @class */ (function () {
    function Box(width, length, height) {
        this._width = width;
        this._length = length;
        this._height = height;
    }
    Object.defineProperty(Box.prototype, "volume", {
        get: function () {
            return this._width * this._length * this._height;
        },
        enumerable: false,
        configurable: true
    });
    return Box;
}());
