import { Option } from '../Option'
import { ExtractNested } from '../types'

/** Creates an empty array. Alternative for `const xs = [] as ReadonlyArray<A>`. */

export declare function makeEmpty<A>(): ReadonlyArray<A>

/** Returns a new array of size `n` populated by `mapFn(index)`, or an empty array if `n` is negative. */

export declare function makeWithIndex<A>(
  n: number,
  mapFn: (_1: number) => A,
): ReadonlyArray<A>

export declare function makeWithIndex<A>(
  mapFn: (_1: number) => A,
): (n: number) => ReadonlyArray<A>

/** Returns a new array of size `n` populated by `element`, or an empty array if `n` is negative. */

export declare function make<A>(n: number, element: A): ReadonlyArray<A>

export declare function make<A>(element: A): (n: number) => ReadonlyArray<A>

/** Alias for `make`. */

export declare function repeat<A>(n: number, element: A): ReadonlyArray<A>

export declare function repeat<A>(element: A): (n: number) => ReadonlyArray<A>

/** Returns the size of the provided array. */

export declare function length<A>(xs: ReadonlyArray<A>): number

/** Determines whether the array is empty. */

export declare function isEmpty<A>(xs: ReadonlyArray<A>): boolean

/** Determines whether the array is not empty. */

export declare function isNotEmpty<A>(xs: ReadonlyArray<A>): boolean

/** Returns a new array with the elements of the provided array in reverse order. */

export declare function reverse<A>(xs: ReadonlyArray<A>): ReadonlyArray<A>

/** Adds a single element to the end of an array. */

export declare function append<A>(
  xs: ReadonlyArray<A>,
  element: A,
): ReadonlyArray<A>

export declare function append<A>(
  element: A,
): (xs: ReadonlyArray<A>) => ReadonlyArray<A>

/** Prepends a single element to the start of the given array. */

export declare function prepend<A>(
  xs: ReadonlyArray<A>,
  element: A,
): ReadonlyArray<A>

export declare function prepend<A>(
  element: A,
): (xs: ReadonlyArray<A>) => ReadonlyArray<A>

/** Returns a new array which contains the given delimiter inserted before every element in the provided array. */

export declare function prependToAll<A>(
  xs: ReadonlyArray<A>,
  delimiter: A,
): ReadonlyArray<A>

export declare function prependToAll<A>(
  delimiter: A,
): (xs: ReadonlyArray<A>) => ReadonlyArray<A>

/** Creates a new array with the separator interposed between elements. */

export declare function intersperse<A>(
  xs: ReadonlyArray<A>,
  delimiter: A,
): ReadonlyArray<A>

export declare function intersperse<A>(
  delimiter: A,
): (xs: ReadonlyArray<A>) => ReadonlyArray<A>

/** Returns `Some(value)` at the given index, or `None` if the given index is out of range. */

export declare function get<A>(xs: ReadonlyArray<A>, index: number): Option<A>

export declare function get<A>(
  index: number,
): (xs: ReadonlyArray<A>) => Option<A>

/** Alias for `get`. */

export declare function at<A>(xs: ReadonlyArray<A>, index: number): Option<A>

export declare function at<A>(
  index: number,
): (xs: ReadonlyArray<A>) => Option<A>

/** Returns `value` at the given index (use only if you're entirely sure that a value exists at the given index). */

export declare function getUnsafe<A>(xs: ReadonlyArray<A>, index: number): A

export declare function getUnsafe<A>(index: number): (xs: ReadonlyArray<A>) => A

/** Returns `value` at the given index, or `undefined` if the given index is out of range. */

export declare function getUndefined<A>(
  xs: ReadonlyArray<A>,
  index: number,
): A | undefined

export declare function getUndefined<A>(
  index: number,
): (xs: ReadonlyArray<A>) => A | undefined

/** Returns `Some(value)` for the first element in the array that satisifies the given predicate function, or `None` if no element satisifies the predicate. */

export declare function getBy<A>(
  xs: ReadonlyArray<A>,
  predicateFn: (_1: A) => boolean,
): Option<A>

export declare function getBy<A>(
  predicateFn: (_1: A) => boolean,
): (xs: ReadonlyArray<A>) => Option<A>

/** Alias for `getBy`. */

export declare function find<A>(
  xs: ReadonlyArray<A>,
  predicateFn: (_1: A) => boolean,
): Option<A>

export declare function find<A>(
  predicateFn: (_1: A) => boolean,
): (xs: ReadonlyArray<A>) => Option<A>

/** Returns `Some(value)` where `value` is the first element of the array, or `None` if the given array is empty. */

export declare function head<A>(xs: ReadonlyArray<A>): Option<A>

/** Returns the last element (`Some(value)`) in the array, or `None` if the given array is empty. */

export declare function last<A>(xs: ReadonlyArray<A>): Option<A>

/** Returns a new array containing all but the the first element of the provided array, or `None` if the given array is empty (has no tail). */

export declare function tail<A>(xs: ReadonlyArray<A>): Option<ReadonlyArray<A>>

/** Returns a new array containing all but the first element of the provided array, or an empty array if the given array is empty (has no tail). */

export declare function tailOrEmpty<A>(xs: ReadonlyArray<A>): ReadonlyArray<A>

/** Returns a new array (`Some(xs)`) with all elements except the last of the provided array. */

export declare function init<A>(xs: ReadonlyArray<A>): Option<ReadonlyArray<A>>

/** Returns a new array with all elements except the last of the provided array, or an empty array if the given array is empty. */

export declare function initOrEmpty<A>(xs: ReadonlyArray<A>): ReadonlyArray<A>

/** Returns a new array including the first `n` elements of the provided array, or an empty array if `n` is either negative or greater than the length of the provided array. */

export declare function take<A>(
  xs: ReadonlyArray<A>,
  n: number,
): ReadonlyArray<A>

export declare function take<A>(
  n: number,
): (xs: ReadonlyArray<A>) => ReadonlyArray<A>

/** Returns a new array (`Some(xs)`) with the first `n` elements of the provided array, or `None` if `n` is either negative or greater than the length of the provided array. */

export declare function takeExactly<A>(
  xs: ReadonlyArray<A>,
  n: number,
): Option<ReadonlyArray<A>>

export declare function takeExactly<A>(
  n: number,
): (xs: ReadonlyArray<A>) => Option<ReadonlyArray<A>>

/** Returns a new array, filled with elements from the provided array until an element doesn't pass the provided predicate. */

export declare function takeWhile<A>(
  xs: ReadonlyArray<A>,
  predicateFn: (_1: A) => boolean,
): ReadonlyArray<A>

export declare function takeWhile<A>(
  predicateFn: (_1: A) => boolean,
): (xs: ReadonlyArray<A>) => ReadonlyArray<A>

/** Returns a new array that does not contain the first `n` elements of the provided array, or an empty array if `n` is either less than `0` or greater than the length of the provided array. */

export declare function drop<A>(
  xs: ReadonlyArray<A>,
  n: number,
): ReadonlyArray<A>

export declare function drop<A>(
  n: number,
): (xs: ReadonlyArray<A>) => ReadonlyArray<A>

/** Returns a new array (`Some(xs)`) that does not contain the first `n` elements of the provided array, or `None` if `n` is either less than `0` or greater than the length of the provided array. */

export declare function dropExactly<A>(
  xs: ReadonlyArray<A>,
  n: number,
): Option<ReadonlyArray<A>>

export declare function dropExactly<A>(
  n: number,
): (xs: ReadonlyArray<A>) => Option<ReadonlyArray<A>>

/** Drops elements from the beginning of the array until an element is reached which does not satisfy the given predicate. */

export declare function dropWhile<A>(
  xs: ReadonlyArray<A>,
  predicateFn: (_1: A) => boolean,
): ReadonlyArray<A>

export declare function dropWhile<A>(
  predicateFn: (_1: A) => boolean,
): (xs: ReadonlyArray<A>) => ReadonlyArray<A>

/** Splits the provided array into head and tail parts (as a tuple), but only if the array is not empty. */

export declare function uncons<A>(
  xs: ReadonlyArray<A>,
): Option<[A, ReadonlyArray<A>]>

/** Returns a new array by calling `mapFn` for each element of the provided array. */

export declare function map<A, B>(
  xs: ReadonlyArray<A>,
  mapFn: (_1: A) => B,
): ReadonlyArray<B>

export declare function map<A, B>(
  mapFn: (_1: A) => B,
): (xs: ReadonlyArray<A>) => ReadonlyArray<B>

/** Returns a new array by calling `mapFn` (which takes two arguments: the element from array and its index) for each element of the provided array. */

export declare function mapWithIndex<A, B>(
  xs: ReadonlyArray<A>,
  mapFn: (_1: number, _2: A) => B,
): ReadonlyArray<B>

export declare function mapWithIndex<A, B>(
  mapFn: (_1: number, _2: A) => B,
): (xs: ReadonlyArray<A>) => ReadonlyArray<B>

/** Returns a new array that keep all elements satisfy the given predicate. */

export declare function filter<A>(
  xs: ReadonlyArray<A>,
  predicateFn: (_1: A) => boolean,
): ReadonlyArray<A>

export declare function filter<A>(
  predicateFn: (_1: A) => boolean,
): (xs: ReadonlyArray<A>) => ReadonlyArray<A>

/** Returns a new array that keep all elements satisfy the given predicate (which take two arguments: the element for the array and its index). */

export declare function filterWithIndex<A>(
  xs: ReadonlyArray<A>,
  predicateFn: (_1: number, _2: A) => boolean,
): ReadonlyArray<A>

export declare function filterWithIndex<A>(
  predicateFn: (_1: number, _2: A) => boolean,
): (xs: ReadonlyArray<A>) => ReadonlyArray<A>

/** Returns a new array of elements from the provided array which do not satisfy the given predicate. */

export declare function reject<A>(
  xs: ReadonlyArray<A>,
  predicateFn: (_1: A) => boolean,
): ReadonlyArray<A>

export declare function reject<A>(
  predicateFn: (_1: A) => boolean,
): (xs: ReadonlyArray<A>) => ReadonlyArray<A>

/** Returns a new array of elements from the provided array which do not satisfy the given predicate (which take two arguments: the element for the array and its index). */

export declare function rejectWithIndex<A>(
  xs: ReadonlyArray<A>,
  predicateFn: (_1: number, _2: A) => boolean,
): ReadonlyArray<A>

export declare function rejectWithIndex<A>(
  predicateFn: (_1: number, _2: A) => boolean,
): (xs: ReadonlyArray<A>) => ReadonlyArray<A>

/** Applies `reduceFn` (which has two parameters: an `accumulator` which starts with a value of `initialValue` and the next value from the array) to each element of the provided array, and eventually it returns the final value of the accumulator. */

export declare function reduce<A, B>(
  xs: ReadonlyArray<A>,
  initialValue: B,
  reduceFn: (_1: B, _2: A) => B,
): B

export declare function reduce<A, B>(
  initialValue: B,
  reduceFn: (_1: B, _2: A) => B,
): (xs: ReadonlyArray<A>) => B

/** Applies `reduceFn` (which has three parameters: an `accumulator` which starts with a value of `initialValue`, the next value from the array and its index) to each element of the provided array, and eventually it returns the final value of the accumulator. */

export declare function reduceWithIndex<A, B>(
  xs: ReadonlyArray<A>,
  initialValue: B,
  reduceFn: (_1: B, _2: A, _3: number) => B,
): B

export declare function reduceWithIndex<A, B>(
  initialValue: B,
  reduceFn: (_1: B, _2: A, _3: number) => B,
): (xs: ReadonlyArray<A>) => B

/** Returns two arrays (`Some([xs, ys])`), with the original array divided at the given index, or `None` if the index is out of range. */

export declare function splitAt<A>(
  xs: ReadonlyArray<A>,
  offset: number,
): Option<[ReadonlyArray<A>, ReadonlyArray<A>]>

export declare function splitAt<A>(
  offset: number,
): (xs: ReadonlyArray<A>) => Option<[ReadonlyArray<A>, ReadonlyArray<A>]>

/** Returns an array of arrays, where each of the inner arrays has length equal to the provided `size` parameter. */

export declare function splitEvery<A>(
  xs: ReadonlyArray<A>,
  size: number,
): ReadonlyArray<ReadonlyArray<A>>

export declare function splitEvery<A>(
  size: number,
): (xs: ReadonlyArray<A>) => ReadonlyArray<ReadonlyArray<A>>

/** Returns a new array with elements in the original array randomly shuffled. */

export declare function shuffle<A>(xs: ReadonlyArray<A>): ReadonlyArray<A>

/** Splits the provided array into two separate arrays - one containing elements which satisfy the predicate, and the other array containing the elements which do not satisfy the predicate. */

export declare function partition<A>(
  xs: ReadonlyArray<A>,
  fn: (_1: A) => boolean,
): [ReadonlyArray<A>, ReadonlyArray<A>]

export declare function partition<A>(
  fn: (_1: A) => boolean,
): (xs: ReadonlyArray<A>) => [ReadonlyArray<A>, ReadonlyArray<A>]

/** Returns a new array containing the concatenation of two provided arrays. */

export declare function concat<A>(
  xs0: ReadonlyArray<A>,
  xs1: ReadonlyArray<A>,
): ReadonlyArray<A>

export declare function concat<A>(
  xs1: ReadonlyArray<A>,
): (xs0: ReadonlyArray<A>) => ReadonlyArray<A>

/** Returns a new array as the concatenation of the provided array of arrays. */

export declare function concatMany<A>(
  xs: ReadonlyArray<ReadonlyArray<A>>,
): ReadonlyArray<A>

/** Returns `true`` if all elements satisfy the given predicate. */

export declare function every<A>(
  xs: ReadonlyArray<A>,
  fn: (_1: A) => boolean,
): boolean

export declare function every<A>(
  fn: (_1: A) => boolean,
): (xs: ReadonlyArray<A>) => boolean

/** Returns `true` if at least one of the elements in the given array satifies the predicate. */

export declare function some<A>(
  xs: ReadonlyArray<A>,
  fn: (_1: A) => boolean,
): boolean

export declare function some<A>(
  fn: (_1: A) => boolean,
): (xs: ReadonlyArray<A>) => boolean

/** Returns a new array with the `len` elements of the given array starting at `offset` (offset can be negative). */

export declare function slice<A>(
  xs: ReadonlyArray<A>,
  offset: number,
  len: number,
): ReadonlyArray<A>

export declare function slice<A>(
  offset: number,
  len: number,
): (xs: ReadonlyArray<A>) => ReadonlyArray<A>

/** Returns a new array with the elements of the given array starting at `offset` (offset can be negative). */

export declare function sliceToEnd<A>(
  xs: ReadonlyArray<A>,
  offset: number,
): ReadonlyArray<A>

export declare function sliceToEnd<A>(
  offset: number,
): (xs: ReadonlyArray<A>) => ReadonlyArray<A>

/** Returns `false` if length of both arrays is not the same, otherwise compares elements one by one using the comparator. */

export declare function eq<A>(
  xs0: ReadonlyArray<A>,
  xs1: ReadonlyArray<A>,
  comparatorFn: (_1: A, _2: A) => boolean,
): boolean

export declare function eq<A>(
  xs1: ReadonlyArray<A>,
  comparatorFn: (_1: A, _2: A) => boolean,
): (xs0: ReadonlyArray<A>) => boolean

/** Returns a new array of numbers from `start` (inclusive) to `finish` (exclusive). */

export declare function range(
  start: number,
  finish: number,
): ReadonlyArray<number>

export declare function range(
  finish: number,
): (start: number) => ReadonlyArray<number>

/** Returns a new array of numbers from `start` (inclusive) to `finish` (exclusive). */

export declare function rangeBy(
  start: number,
  finish: number,
  step: number,
): ReadonlyArray<number>

export declare function rangeBy(
  finish: number,
  step: number,
): (start: number) => ReadonlyArray<number>

/** Returns a copy of the provided array. */

export declare function copy<A>(xs: ReadonlyArray<A>): ReadonlyArray<A>

/** Creates a new array of pairs from corresponding elements of two provided arrays. */

export declare function zip<A, B>(
  xs0: ReadonlyArray<A>,
  xs1: ReadonlyArray<B>,
): ReadonlyArray<[A, B]>

export declare function zip<A, B>(
  xs1: ReadonlyArray<B>,
): (xs0: ReadonlyArray<A>) => ReadonlyArray<[A, B]>

/** Creates a new array by applying `zipFn` to corresponding elements of two provided arrays. */

export declare function zipWith<A, B, C>(
  xs0: ReadonlyArray<A>,
  xs1: ReadonlyArray<B>,
  zipFn: (_1: A, _2: B) => C,
): ReadonlyArray<C>

export declare function zipWith<A, B, C>(
  xs1: ReadonlyArray<B>,
  zipFn: (_1: A, _2: B) => C,
): (xs0: ReadonlyArray<A>) => ReadonlyArray<C>

/** Takes an array of pairs and creates a pair of arrays. The first array contains all the first elements of the pairs and the other one contains all the second elements. */

export declare function unzip<A, B>(
  xs: ReadonlyArray<[A, B]>,
): [ReadonlyArray<A>, ReadonlyArray<B>]

/** Creates a new array by replacing the value at the given index with the given value (no replacement is made if the index is out of range). */

export declare function replaceAt<A>(
  xs: ReadonlyArray<A>,
  targetIndex: number,
  element: A,
): ReadonlyArray<A>

export declare function replaceAt<A>(
  targetIndex: number,
  element: A,
): (xs: ReadonlyArray<A>) => ReadonlyArray<A>

/** Creates a new array that inserts the given value at the given index (no insertion is made if the index is out of range). */

export declare function insertAt<A>(
  xs: ReadonlyArray<A>,
  targetIndex: number,
  element: A,
): ReadonlyArray<A>

export declare function insertAt<A>(
  targetIndex: number,
  element: A,
): (xs: ReadonlyArray<A>) => ReadonlyArray<A>

/** Creates a new array that replaces the value at the given index with the value returned by the provided function (the original array if the index is out of range). */

export declare function updateAt<A>(
  xs: ReadonlyArray<A>,
  targetIndex: number,
  fn: (_1: A) => A,
): ReadonlyArray<A>

export declare function updateAt<A>(
  targetIndex: number,
  fn: (_1: A) => A,
): (xs: ReadonlyArray<A>) => ReadonlyArray<A>

/** Creates a new array with the elements at the two given indexes swapped (the original array if the index is out of range). */

export declare function swapAt<A>(
  xs: ReadonlyArray<A>,
  targetIndex: number,
  swapIndex: number,
): ReadonlyArray<A>

export declare function swapAt<A>(
  targetIndex: number,
  swapIndex: number,
): (xs: ReadonlyArray<A>) => ReadonlyArray<A>

/** Creates a new array without the element at the given index (the original array if the index is out of range). */

export declare function removeAt<A>(
  xs: ReadonlyArray<A>,
  targetIndex: number,
): ReadonlyArray<A>

export declare function removeAt<A>(
  targetIndex: number,
): (xs: ReadonlyArray<A>) => ReadonlyArray<A>

/** Returns a new array containing only one copy of each element in the provided array, based upon the value returned by applying the function to each element. */

export declare function uniqBy<A, B>(
  xs: ReadonlyArray<A>,
  uniqFn: (_1: A) => B,
): ReadonlyArray<A>

export declare function uniqBy<A, B>(
  uniqFn: (_1: A) => B,
): (xs: ReadonlyArray<A>) => ReadonlyArray<A>

/** Returns a new array containing only one copy of each element in the provided array. */

export declare function uniq<A>(xs: ReadonlyArray<A>): ReadonlyArray<A>

/** Calls `fn` on each element of the provided array. */

export declare function forEach<A>(
  xs: ReadonlyArray<A>,
  fn: (_1: A) => void,
): void

export declare function forEach<A>(
  fn: (_1: A) => void,
): (xs: ReadonlyArray<A>) => void

/** Calls `fn` (which takes two arguments: the element from array and its index) on each element of the provided array. */

export declare function forEachWithIndex<A>(
  xs: ReadonlyArray<A>,
  fn: (_1: number, _2: A) => void,
): void

export declare function forEachWithIndex<A>(
  fn: (_1: number, _2: A) => void,
): (xs: ReadonlyArray<A>) => void

/** Returns `Some(index)` for the first value in the provided array that satisifies the predicate function. */

export declare function getIndexBy<A>(
  xs: ReadonlyArray<A>,
  predicateFn: (_1: A) => boolean,
): Option<number>

export declare function getIndexBy<A>(
  predicateFn: (_1: A) => boolean,
): (xs: ReadonlyArray<A>) => Option<number>

/** Returns `true` if the provided value is equal to at least one element of the given array. */

export declare function includes<A>(xs: ReadonlyArray<A>, value: A): boolean

export declare function includes<A>(value: A): (xs: ReadonlyArray<A>) => boolean

/** Converts each element of the array to a string and concatenates them, separated by the given string. */

export declare function join<A>(xs: ReadonlyArray<A>, delimiter: string): string

export declare function join<A>(
  delimiter: string,
): (xs: ReadonlyArray<A>) => string

/** Returns a new array, sorted according to the comparator function. */

export declare function sort<A>(
  xs: ReadonlyArray<A>,
  sortFn: (_1: A, _2: A) => number,
): ReadonlyArray<A>

export declare function sort<A>(
  sortFn: (_1: A, _2: A) => number,
): (xs: ReadonlyArray<A>) => ReadonlyArray<A>

/** Returns a new array, sorted according to the provided function. */

export declare function sortBy<A, B>(
  xs: ReadonlyArray<A>,
  sortFn: (_1: A) => B,
): ReadonlyArray<A>

export declare function sortBy<A, B>(
  sortFn: (_1: A) => B,
): (xs: ReadonlyArray<A>) => ReadonlyArray<A>

/** Splits the given array into sub-arrays in an object, grouped by the result of running each value through the provided function. */

export declare function groupBy<A, B extends PropertyKey>(
  xs: ReadonlyArray<A>,
  groupFn: (item: A) => B,
): Partial<Record<B, readonly [A, ...A[]]>>

export declare function groupBy<A, B extends PropertyKey>(
  groupFn: (item: A) => B,
): (xs: ReadonlyArray<A>) => Partial<Record<B, readonly [A, ...A[]]>>

/** Creates a new array with all sub-array elements concatenated into it (the single level depth). */

export declare function flat<A>(
  xs: ReadonlyArray<A>,
): ReadonlyArray<A extends ReadonlyArray<infer B> ? B : A>

/** Creates a new array with all sub-array elements concatenated into it recursively up to the `Infinite` depth. */

export declare function deepFlat<A>(
  xs: ReadonlyArray<A>,
): ReadonlyArray<ExtractNested<A>>

/** Converts the given array to the TypeScript's tuple. */

export declare function toTuple<T extends ReadonlyArray<any>>(
  xs: [...T],
): [...T]
