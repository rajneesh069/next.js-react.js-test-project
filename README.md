## This is a test Next.js/React.js project to showcase and record whatever I am learning from Harkirat's 0-100 cohort

1. `children` is a special variable that lets you access the children inside a component.
2. if you create custom hooks like
   `useTodo` or `useSomeName` then they will behave like hooks only and work inside a React component which needs to have the first letter capital(I mean the function name of the React Component), that's how a react component is identified by libraries.
3. `useMemo` is used to memoize some value between re-renders.
4. `useCallback` is used to memoize a function between re-renders. As each time a re-render occurs function is re-defined, i,e., there is a referential inequality resulting in React thinking that the new function is not the same as previous one hence triggering a re-render

#### value = useMemo(), function = useCallback()

5. `memo` is NOT a hook. `useMemo` is a hook! `memo` is used to memoize the whole child component and it will only re-render if the input parameters of it change, while `useMemo` hook is used to memoize a function and returns a function and it basically tells React to NOT re-define it on every re-render until something in the dependancy array changes, so un-necessary referential inequality could be avoided in case of functions.
6. `useRef` hook is used to overwrite the changes in DOM done by React. Changing a ref does not trigger a re-render.
