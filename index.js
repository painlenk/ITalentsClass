var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(person) {
        var _this = this;
        this.getPersonData = function () {
            return {
                name: _this.name,
                gender: _this.gender,
                lastName: _this.lastName,
                age: _this.age
            };
        };
        this.name = person.name;
        this.gender = person.gender;
        this.lastName = person.lastName;
        this.age = person.age;
    }
    return Person;
}());
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(person, user) {
        var _this = _super.call(this, person) || this;
        _this.getNickname = function () {
            return _this.nickname;
        };
        _this.getPassword = function () {
            return _this.password;
        };
        _this.setNickname = function (nickname) {
            _this.nickname = nickname;
        };
        _this.resetPassword = function (newPassword) {
            _this.password = newPassword;
        };
        _this.nickname = user.nickname,
            _this.password = user.password;
        return _this;
    }
    return User;
}(Person));
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(person, user, privilege) {
        var _this = _super.call(this, person, user) || this;
        _this.hasPermission = function (role) {
            return _this.privilege === role;
        };
        _this.getPrivilege = function () {
            return _this.privilege;
        };
        _this.setPrivilege = function (privilege) {
            _this.privilege = privilege;
        };
        _this.getData = function () {
            var data = {
                name: _this.name,
                lastName: _this.lastName,
                gender: _this.gender,
                age: _this.age,
                nickname: _this.getNickname(),
                password: _this.getPassword()
            };
            return data;
        };
        _this.privilege = privilege;
        return _this;
    }
    return Admin;
}(User));
var person = {
    name: 'Jhon',
    lastName: 'Doe',
    age: 25,
    gender: 'M'
};
var user = {
    nickname: 'JhonDoe123',
    password: '123456'
};
var admin = new Admin(person, user, 'master');
console.log(admin.getData());
