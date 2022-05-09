/**
 * Control Flow Analysis of Aliased Conditions and Discriminants
 */
type Cat = {
    type: 'cat';
    name: string;
}

type Dog = {
    type: 'dog';
    name: number;
}

function test(p: Cat | Dog) {
    const isCat = p.type === 'cat';

    if (isCat) {
        const a: string = p.name;
    }
}

/**
 * `static` Blocks in Classes
 */
function asyncFn() {
    return Promise.resolve(Math.random());
}

class Foo {
    private static count = 0;
 
    // This is a static block:
    static {
        asyncFn().then((res) => {
            this.count = res;
        });
    }
}
