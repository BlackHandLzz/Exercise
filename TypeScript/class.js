var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
window.onload = function () {
    //构造函数
    function Cat(name, age) {
        this.name = name;
        this.age = age;
    }
    ;
    Cat.prototype.type = "动物";
    Cat.prototype.eat = function () {
        console.log('吃鱼');
    };
    var cat = new Cat('Tom', 12);
    // 类的定义
    var Cat2 = /** @class */ (function () {
        function Cat2(name, age) {
            this.name = name;
            this.age = age;
        }
        ;
        Cat2.prototype.eat = function () {
            console.log('吃鱼');
        };
        return Cat2;
    }());
    ;
    var cat2 = new Cat2('jack', 2);
    // 继承
    var Animal = /** @class */ (function () {
        function Animal(type) {
            this.type = type;
        }
        Animal.prototype.eat = function () {
            return "恰饭";
        };
        ;
        Animal.prototype.say = function () {
            return "吼一声";
        };
        return Animal;
    }());
    var Cat3 = /** @class */ (function (_super) {
        __extends(Cat3, _super);
        function Cat3(type, name, age) {
            var _this = _super.call(this, type) || this;
            _this.name = name;
            _this.age = age;
            return _this;
        }
        ;
        Cat3.prototype.action = function () {
            console.log('你猜');
        };
        return Cat3;
    }(Animal));
    var cat3 = new Cat3('猫', 'Tom', 4);
    cat3.eat();
    // 修饰符 static  静态方法不需要实例化，可以通过方法直接调用
    var Obj = /** @class */ (function () {
        function Obj() {
        }
        Obj.action = function () {
            console.log(".....");
        };
        Obj.str = '22';
        return Obj;
    }());
    Obj.action();
    Obj.str;
};
