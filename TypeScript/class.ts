window.onload = function () {
    //构造函数
    function Cat(name, age) {
        this.name = name;
        this.age = age;
    };
    Cat.prototype.type = "动物";
    Cat.prototype.eat = function () {
        console.log('吃鱼');
    };

    var cat = new Cat('Tom', 12);

    // 类的定义
    class Cat2 {
        name: string;
        age: number;
        constructor(name, age) {
            this.name = name;
            this.age = age
        };
        eat() {
            console.log('吃鱼');
        }
    };
    let cat2 = new Cat2('jack', 2);


    // 继承
    class Animal {
        type: string;
        constructor(type) {
            this.type = type;
        }
        eat() {
            return "恰饭"
        };
        say() {
            return "吼一声"
        }
    }

    class Cat3 extends Animal {
        name: string;
        age: number;
        constructor(type, name, age) {
            super(type);
            this.name = name;
            this.age = age;
        };
        action() {
            console.log('你猜');
        }
    }

    let cat3 = new Cat3('猫', 'Tom', 4);
    //cat3.eat();

    // 修饰符 static  静态方法不需要实例化，可以通过方法直接调用
    // abstract表示不能实例化
    abstract class Obj {
        static str: string = '22';
        static action() {
            console.log(".....")
        }
    }
    Obj.action();
    Obj.str;

}