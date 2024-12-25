```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: updates count only once on mount
    setCount(count + 1);
  }, []); // Empty array ensures the effect runs only once on mount

  return <div>Count: {count}</div>;
}
```