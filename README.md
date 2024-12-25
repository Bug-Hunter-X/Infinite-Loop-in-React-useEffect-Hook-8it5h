# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by incorrectly specifying the dependency array. 

The `bug.js` file contains code that results in an infinite loop because the effect runs after every render. The solution, provided in `bugSolution.js`, correctly uses the dependency array to avoid the infinite loop.