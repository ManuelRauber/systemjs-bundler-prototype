import {Module1} from './module1';

export class Module2 {
    public bar() {
        var mod1 = new Module1();
        mod1.foo();
    }
}
