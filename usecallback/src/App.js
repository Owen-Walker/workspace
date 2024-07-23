import { useState, useCallback } from 'react'
import Content from './Content';

// 1. memo() -> Higher Order Conponent (HOC)
// 2. useCallback()
// - Reference types
// - React memo()

// Hooks
// HOC
// Render props

function App() {

  const [count, setCount] = useState(0);

  const handleInsrease = useCallback(() => {
    setCount(prevCount => prevCount + 1)
  }, [])

  return (
    <div style = {{ padding: '10px 32px' }}>
      <Content onIncrease={handleInsrease} />
      <h1>{count}</h1>
    </div>
  );
}

export default App;
