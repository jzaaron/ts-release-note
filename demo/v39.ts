/**
 * ts-expect-error
 */

function calc(num: number) {
    console.log(1 + num);
}

// @ts-expect-error
calc('1');

/**
 * getters-setters-are-no-longer-enumerable
 */
class A {
    get words() {
        return 'hello!';
    }
}

const a = new A();

console.log(Object.getOwnPropertyDescriptor(A.prototype, 'words'));

/**
 * type-parameters-that-extend-any-no-longer-act-as-any.ts
 */

function fn<T extends any>(t: T) {
    console.log(t.props)
}
