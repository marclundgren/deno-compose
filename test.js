import { assertEqual } from "https://deno.land/std@0.125.0/testing/asserts.ts";
import compose from "../compose.js";

Deno.test("multiplyNumbers", () => {
  const multiplyNumbers = (a, b) => {
    console.table({ a, b });
    return a * b;
  };

  const doubleNumbers = (a) => {
    console.table({ a });
    return 2 * a;
  };

  const result1 = compose(doubleNumbers, multiplyNumbers)(3, 7); // 42

  assertEqual(result1, 42);
});
