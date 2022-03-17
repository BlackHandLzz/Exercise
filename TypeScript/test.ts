window.onload = function () {
    let s: number = 12;
    let a: number | string = 'www';

    let b: Array<number | string> = ['www', 12];

    interface Parson {
        age: number, // 必填属性
        name?: string,   // 可选属性
        [propName: string]: any // 任意属性，一旦定义了任意属性，那么必填属性和可选属性必须是它的子属性
    }
    // obj必须需与接口一致
    let obj: Parson = {
        age: 11,
        name: 'terry',
        a: function () {

        },
        o: {

        }
    }
    //输入  输出类型   void：无返回   可以添加参数默认值
    function f(t: number = 2, y?: number): number {
        return t
    }

    // 接口在函数中的应用
    interface Obj {
        id: number,
        name: string
    }

    function f2(obj: Obj) {
        return obj.id
    }

    //  泛型<T> 泛型变量T  表示任何类型
    function f3<T>(a: T, b: T): T[] {
        return [a, b]
    }

    f3<number>(1, 2);

    // 函数声明
    function f4<T>(a: T): T {
        return a
    }
    f4<string>(a)
    // 函数表达式
    var ccc = function f4<T>(a: T): T {
        return a
    }
    ccc<number>(22);
    // 箭头函数
    let f5 = <T>(a: T): T => a;
    f5<string>('sss');

    // 泛型约束
    interface Length {
        length: number;
    }
    function f6<T extends Length>(a: T): void {
        console.log(a.length)
    }
    f6("111");


    interface SearchFun1 {
        (a: string, b: string): boolean
    }
    //定义一个函数，判断传入的第二个参数是否在第一个参数里面,前面添加相当于函数类型检查是否正确
    var f8: SearchFun1 = function f8(str: string, ste: string): boolean {
        var a = str.search(ste);
        return a != -1
    };
    f8("abc", "a");

    interface SearchFun2 {
        <T>(a: T, b: T): boolean
    }
    var f9: SearchFun2 = function f8<T>(str: T, ste: T): boolean {
        return str == ste
    };
    f9<string>("abc", "a");

    interface SearchFun3<T> {
        (a: T, b: T): boolean
    }
    var f8: SearchFun3<string> = function f8<T>(str: T, ste: T): boolean {
        return str == ste
    };
    f8("abc", "a");

    // 练习
    // 定义一个函数根据传入的数字和值返回一个数组
    interface created2 {
        <T>(a: number, b: T): Array<T>
    }

    let c4: created2;
    c4 = function <T>(a: number, b: T): Array<T> {
        var c: T[] = [];
        for (let i = 0; i < a; i++) {
            c[i] = b;
        }
        return c
    }
    c4<string>(4, 'abc');

    //扩展
    interface Length4 {
        length: number
    }
    interface created3<N, S extends Length4> {
        (a: N, b: S): [N, S]
    }

    let c5: created3<number, string>;
    c5 = function <N, S>(a: N, b: S): [N, S] {
        return [a, b]
    }
    c5(4, 'abc');

    // 枚举是对js标准数据类型的一个补充(赋值的尽量往后面写，否则写在赋值后面未赋值的都会因为无初始值而报错)
    var s8 = 123
    enum color { blue, red, white = 2, green = <any>s8, black = 'any'.length }
    let cs: color = color.red;
    let cs2: string = color[0];

    // 元组合并了不同类型的对象
    let arr: [number, string];
    arr = [1, 'ass']

}