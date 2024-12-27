export declare class TestClass {
    private _testMember;
    constructor();
    toString(): string;
}
/** Just a simple example method that creates a test class,
 * prints it and also prints the content of a svg as string */
export declare const test: () => void;
export type TUserData = {
    id: number;
    name: string;
    surname: string;
    nick?: string | null;
    age?: number | null;
    friends?: string | null;
};
/** Another simple example method that validates the content of an unknown user
 * object using Typie
 */
export declare const isValidUserData: (user: unknown) => void;
