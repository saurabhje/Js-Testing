import { caesarCipher } from "../functions/caesarCipher";


test('Testing text wrapping from z to a',()=>{
    expect(caesarCipher('xyz',1)).toBe('yza');
});

test('Works with Uppercase charcters',()=>{
    expect(caesarCipher('AbC',1)).toBe('BcD');
});

test('Works with Punctuation',()=>{
    expect(caesarCipher('Hello, World!', 5)).toBe('Mjqqt, Btwqi!')
});

test('Works with negative shift',()=>{
    expect(caesarCipher('def', -1)).toBe('cde')
});