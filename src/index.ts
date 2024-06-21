import testSVG from './test.svg';

export class TestClass {
  private _testMember: string;

  constructor() {
    this._testMember = 'Test';
  }

  public toString(): string {
    return this._testMember;
  }
}

export const test = () => {
  const test = new TestClass();
  console.log('Class: ' + test);

  console.log('SVG: ', testSVG);
};
