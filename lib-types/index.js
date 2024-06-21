import testSVG from './test.svg';
export class TestClass {
    constructor() {
        Object.defineProperty(this, "_testMember", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._testMember = 'Test';
    }
    toString() {
        return this._testMember;
    }
}
export const test = () => {
    const test = new TestClass();
    console.log('Class: ' + test);
    console.log('SVG: ', testSVG);
};
