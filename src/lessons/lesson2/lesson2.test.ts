// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9
test('Task 01', () => {
  function sum(a: number) {
    return (b: number) => {
      return a + b
    }
  }

  expect(sum(3)(6)).toBe(9)
})


// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
test('Task 02', () => {
  function makeCounter() {
    let count = 0
    return () => {
      return ++count
    }
  }

  const counter = makeCounter();
  expect(counter()).toBe(1)
  expect(counter()).toBe(2)
  const counter2 = makeCounter();
  expect(counter2()).toBe(1)
  expect(counter()).toBe(3)
})


// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;
test('Task 03', () => {
  function makeCounter(startCounter: number) {
    return {
      count: startCounter,
      increase() {
        return this.count + 1
      },
      decrease() {
        return this.count - 1
      },
      reset() {
        return this.count = 0
      },
      set() {
        return this.count = startCounter
      },
    }
  }

  expect(makeCounter(1).increase()).toBe(2)
  expect(makeCounter(1).decrease()).toBe(0)
  expect(makeCounter(1).reset()).toBe(0)
  expect(makeCounter(5).set()).toBe(5)
})

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10
// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore
// test('Task 04', () => {
//   let sum = 0
//   function superSum(args: number) {
//     if (args === 0) {
//       return sum
//     } else {
//       return () => {
//
//         return superSum(args - 1)
//       }
//     }
//   }
//
//   //@ts-ignore
//   expect(superSum(0)).toBe(0)
//   //@ts-ignore
//   expect(superSum(3)(2)(5)(3)).toBe(10)
//   //@ts-ignore
//   expect(superSum(3)(2)(5, 3)).toBe(10)
//
//
// })
// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

// just a plug
export default () => {
};