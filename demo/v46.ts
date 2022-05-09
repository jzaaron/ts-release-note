/**
 * Allowing Code in Constructors Before super()
 */
class Base {
    // ...
}

class Derived extends Base {
    someProperty = true;

    constructor() {
        console.log('Derived');
        super();
    }
}

/**
 * Object Rests Drop Unspreadable Members from Generic Objects
 */
class Test{
    value = 1;

    method() {
        console.log(this.value)
    }
}

function func<T extends Test>(t: T) {
    let { value, ...rest } = t;

    rest.method();
}