<<<<<<< HEAD:src/index.ts
import testSVG from './test.svg';
import typia from 'typia';

export class TestClass {
  private _testMember: string;

  constructor() {
    this._testMember = 'Test';
  }

  public toString(): string {
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

export type TUserData = {
  id: number;
  name: string;
  surname: string;
  nick?: string | null;
  age?: number | null;
  friends?: string | null;
};

const checkUserData = typia.createIs<TUserData>();

/** Another simple example method that validates the content of an unknown user
 * object using Typie
 */
export const isValidUserData = (user: unknown) => {
  if (checkUserData(user)) {
    console.log('Valid User Data');
  } else {
    console.log('Invalid User Data');
  }
};
=======
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
>>>>>>> f718e8d (added cookiecutter module):{{cookiecutter.project_slug}}/src/index.ts
