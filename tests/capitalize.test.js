import { capitalize } from "../functions/capitalize";

test('capitalise function should capitalize the first letter of the string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });
  