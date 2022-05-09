/**
 * Separate Write Types on Properties
 */
type Props = {
    size: number;
}

function fn1(p: Props) {
    p.size = '1';
}

type Params = {
    get size(): number;
    set size(val: string | number);
}

function fn2(p: Params) {
    p.size = '1';
}

/**
 * override and the -noImplicitOverride Flag
 */

class SomeComponent {
    show() {
        // ...
    }

    hide() {
        // ...
    } 
}

 class OneComponent extends SomeComponent {
    override show() {
        // ...
    }

    override hide() {
        // ...
    }
}

/**
 * ECMAScript #private Class Elements
 */
class PrivateTest {
    #word = 'hello,'

    private word = 'world!';

    fn = () => {
        console.log(this.#word, this.word)
    }
}

console.log(new PrivateTest);
