import testSVG from './test.svg';
import typia from 'typia';
export class TestClass {
    _testMember;
    constructor() {
        this._testMember = 'Test';
    }
    toString() {
        return this._testMember;
    }
}
/** Just a simple example method that creates a test class,
 * prints it and also prints the content of a svg as string */
export const test = () => {
    const test = new TestClass();
    console.log('Class: ' + test);
    console.log('SVG: ', testSVG);
};
const checkUserData = (() => { const _io0 = input => "number" === typeof input.id && "string" === typeof input.name && "string" === typeof input.surname && (null === input.nick || undefined === input.nick || "string" === typeof input.nick) && (null === input.age || undefined === input.age || "number" === typeof input.age) && (null === input.friends || undefined === input.friends || "string" === typeof input.friends); return input => "object" === typeof input && null !== input && _io0(input); })();
/** Another simple example method that validates the content of an unknown user
 * object using Typie
 */
export const isValidUserData = (user) => {
    if (checkUserData(user)) {
        console.log('Valid User Data');
    }
    else {
        console.log('Invalid User Data');
    }
};
