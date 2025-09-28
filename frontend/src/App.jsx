import { useSelector } from 'react-redux'

function App() {

  const user = useSelector(state => state.auth.user)
  console.log(user);

  const token = useSelector(state => state.auth.token)
  console.log(token);

  return (
    <>
      <h1>Hello world</h1>
    </>
  )
}

export default App
