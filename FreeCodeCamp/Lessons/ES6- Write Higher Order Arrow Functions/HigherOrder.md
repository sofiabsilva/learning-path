# ES6: Write Higher Order Arrow Functions

It's time we see how powerful arrow functions are when processing data.

Arrow functions work really well with higher order functions, such as map(), filter(), and reduce(), that take other functions as arguments for processing collections of data.

Read the following code:
```
FBPosts.filter(function(post) {
  return post.thumbnail !== null && post.shares > 100 && post.likes > 500;
})
```
We have written this with filter() to at least make it somewhat readable. Now compare it to the following code which uses arrow function syntax instead:

```
FBPosts.filter((post) => post.thumbnail !== null && post.shares > 100 && post.likes > 500)
```
This code is more succinct and accomplishes the same task with fewer lines of code.
### JS Challenge:
Use arrow function syntax to compute the square of only the positive integers (fractions are not integers) in the array **realNumberArray** and store the new array in the variable **squaredIntegers**
