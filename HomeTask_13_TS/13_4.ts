type MapperFunction<T, U> = (value: T, index: number, array: T[]) => U;

/**
 * 2 arguments passed: returns a new array
 * which is a result of input being mapped using
 * the specified mapper.
 *
 * 1 argument passed: returns a function which accepts
 * an input and returns a new array which is a result
 * of input being mapped using original mapper.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Function} mapper
 * @param {Array} input
 * @return {Array | Function}
 */
export function map<T, U>(mapper: MapperFunction<T, U>, input: T[]): U[];
export function map<T, U>(mapper: MapperFunction<T, U>): (input: T[]) => U[];
export function map<T, U>(mapper: MapperFunction<T, U>, input?: T[]) {
    if (arguments.length === 0) {
        return map as (mapper: MapperFunction<T, U>, input: T[]) => U[];
    }
    if (arguments.length === 1) {
        return function subFunction(subInput: T[]) {
            if (arguments.length === 0) {
                return subFunction as (subInput: T[]) => U[];
            }
            return subInput.map(mapper);
        } as (subInput: T[]) => U[];
    }
    return input!.map(mapper);
}

type FiltererFunction<T> = (value: T, index: number, array: T[]) => boolean;

/**
 * 2 arguments passed: returns a new array
 * which is a result of input being filtered using
 * the specified filter function.
 *
 * 1 argument passed: returns a function which accepts
 * an input and returns a new array which is a result
 * of input being filtered using original filter
 * function.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Function} filterer
 * @param {Array} input
 * @return {Array | Function}
 */
export function filter<T>(filterer: FiltererFunction<T>, input: T[]): T[];
export function filter<T>(filterer: FiltererFunction<T>): (input: T[]) => T[];
export function filter<T>(filterer: FiltererFunction<T>, input?: T[]) {
    if (arguments.length === 0) {
        return filter as (filterer: FiltererFunction<T>, input: T[]) => T[];
    }
    if (arguments.length === 1) {
        return function subFunction(subInput: T[]) {
            if (arguments.length === 0) {
                return subFunction as (subInput: T[]) => T[];
            }
            return subInput.filter(filterer);
        } as (subInput: T[]) => T[];
    }
    return input!.filter(filterer);
}

/**
 * 2 arguments passed: returns sum of a and b.
 *
 * 1 argument passed: returns a function which expects
 * b and returns sum of a and b.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Number} a
 * @param {Number} b
 * @return {Number | Function}
 */
export function add(a: number, b: number): number;
export function add(a: number): (b: number) => number;
export function add(): () => number;
export function add(a?: number, b?: number) {
    if (arguments.length === 0) {
        return () => 0;
    }
    if (arguments.length === 1) {
        return function subFunction(subB: number) {
            if (arguments.length === 0) {
                return subFunction as unknown as () => typeof subFunction;
            }
            return a! + subB;
        } as (subB: number) => number;
    }
    return a! + b!;
}