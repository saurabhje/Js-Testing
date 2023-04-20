import { analyzeArray } from "../functions/analyzeArray";


test('returning an object with following property max, min, sum , avarage, lenght',()=>{
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({ max: 8, min: 1, sum: 24, average:4 ,length:6});
})