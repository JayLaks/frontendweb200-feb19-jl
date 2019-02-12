export type NameDecorator = (x: string) => string;
export function formatName(first: string, last: string, fn: NameDecorator = identity): string {
  const fullName =  `${last}, ${first}`;
  return fn(fullName);
}
//named anonymous function
const identity: NameDecorator = (n) => n;
