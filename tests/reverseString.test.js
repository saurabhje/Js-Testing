import { reverseString } from "../functions/reverseString";

test('Reversing the string',()=>{
    expect(reverseString('hello my')).toBe('ym olleh');
}) ;