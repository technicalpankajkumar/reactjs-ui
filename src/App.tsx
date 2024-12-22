
// import { Button } from '../lib/components/button/Button'
import { Button } from 'libraricals-ui'
import "../dist/libraricals-ui.css"


function App() {

  return (
    <>
     <Button value="Button" size='small'/>
     <Button value="Hello" isLoading size='medium'/>
     <Button value="Hello" isLoading size='large'/>
    </>
  )
}

export default App
