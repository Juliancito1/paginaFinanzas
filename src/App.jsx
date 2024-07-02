import AppRouter from './router/AppRouter'
import {store} from './redux/store/store'
import { Provider } from 'react-redux'
import './App.css'
import './Index.css'
function App() {
  

  return (
    <>
    <Provider store={store}>
      <AppRouter/>
    </Provider>
    </>
  )
}

export default App
