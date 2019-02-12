import { compose } from './compose';
import { formatName } from './utils';

describe('functions', () => {

  it('arbitary number of parameters', () => {
    // Rest operator.
    function add(a: number, b: number, ...rest: number[]): number {
      const firstTwo = a + b;
      return rest.reduce((prev, next) => prev + next, firstTwo);
    }

    expect(add(2, 2)).toBe(4);
    expect(add(2, 2, 2)).toBe(6);
    expect(add(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45);

  });

  describe('function literals', () => {
    it('has a few kinds', () => {

      // Named Function
      function add(a: number, b: number): number {
        return a + b;
      }
      // Anonymous Function
      // Immediately Invoked Function Expression IIFE
      expect(add(3, 2)).toBe(5);
      // An anonymous function with a vaiable referring to it;
      const multiply = (function(a: number, b: number) { return a * b; });
      expect(multiply(3, 5)).toBe(15);
      const divide = (a: number, b: number) => a / b;
      expect(divide(10, 5)).toBe(2);

    });


  });
});

describe('higher order functions', () => {
  it('an example', () => {
    expect(formatName('Han', 'Solo')).toBe('Solo, Han');
    const makeNameUpper = (s: string) => s.toUpperCase();
    expect(
      // formatName('Han', 'Solo', (x) => x.toUpperCase())).toBe('SOLO, HAN');
      formatName('Han', 'Solo', makeNameUpper)).toBe('SOLO, HAN');

    const makeFlashy = (s: string) => `***${s}***`;
    expect(formatName('Han', 'Solo', makeFlashy)).toBe('***Solo, Han***');
    // const doBoth = (s: string) => makeFlashy(makeNameUpper(s));
    const doBoth = compose(makeNameUpper, makeFlashy);
    expect(formatName('Han', 'Solo', doBoth)).toBe('***SOLO, HAN***');

  });
});

describe('practical', () => {
  interface Payments {
    date: string;
    amount: number;
    customer: string;
  }
  const payments: Payments[] = [
    { date: '1/1/2018', amount: 300, customer: 'Bob' },
    { date: '1/8/2018', amount: 615.23, customer: 'Bob' },
    { date: '1/19/2018', amount: 10082, customer: 'Sue' },
    { date: '2/2/2018', amount: 12, customer: 'Bob' },
  ];
  it('Your practice', () => {
    // write some code here that gives me the answer
    // the total of all the payments by just bob.
    // answer:

    const bobsInfo = payments.filter(p => p.customer === 'Bob');
    // const answer: { total: number } =[];
    // = bobsInfo;
    // get array of all amounts that Bob has paid
    // let total: number = 0;
   // const answer: { total: number } = bobsInfo.map((b => b.amount,): total);

    // const answer: { total: number } = bobsInfo.[];
    // const answer: number = bobsInfo.reduce((a, b)=> a.amount + b.amount);
    // expect(answer.total).toBe(927.23);
    // expect(answer).toBe(927.33);
  });

});

