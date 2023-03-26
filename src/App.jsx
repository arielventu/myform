import { Form } from './components/Form'
import { Toaster } from 'sonner'

function App () {
  return (
    <div className='flex p-8 justify-center min-h-screen bg-slate-700'>
      <Toaster theme='dark' toastOptions={{ style: { background: 'rgb(31 41 55)', borderColor: 'rgb(71 85 105' } }} />

      <Form />
    </div>
  )
}

export default App
