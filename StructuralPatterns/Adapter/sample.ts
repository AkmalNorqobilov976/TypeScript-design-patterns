interface IA {
    methodA(): void;
}

class ClassA implements IA {
    methodA(): void {
        console.log('Method A');
    }
}

interface IB {
    methodB(): void;
}

class ClassB implements IB {
    methodB(): void {
        console.log('method B');
    }
}

class ClassBAdapter implements IA {
    #classB: ClassB;

    constructor() {
        this.#classB = new ClassB();
    }

    methodA(): void {
        this.#classB.methodB();
    }
}

const ITEMS = [new ClassA(), new ClassB()];

ITEMS.forEach((item) => {
    if(item instanceof ClassB) {
        item.methodB();
    } else {
        item.methodA();
    }
});

const ADAPTED = [new ClassA(), new ClassBAdapter()];

ADAPTED.forEach(item => {
    item.methodA();
}) 