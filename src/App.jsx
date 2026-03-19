
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/blog/Home'
import Login from './pages/auth/Login'
import AddBlog from './pages/blog/AddBlog'
import EditBlog from './pages/blog/EditBlog'
import {Provider} from 'react-redux'
import store from '../store/store'
import Protected from './Protected'
import {lazy, Suspense} from 'react'
import Hook from './pages/hookPage/Hook'
import { ErrorBoundary } from 'react-error-boundary'
const SingleBlog=lazy(() => import('./pages/blog/SingleBlog'))
const Register=lazy(() =>import( './pages/auth/Register'))

function ErrorFallback({error}){
  return(
    <div>
      <h2>Somethong went wrong</h2>
      <p>{error.message}</p>
    </div>
  )
}

function App() {
  // const[name, setName] = useState('akriti')
  return (
    <Provider store={store}>
    <BrowserRouter>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<h1>Loading ... </h1>}>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path = '/blog/add' element={<Protected><AddBlog /></Protected>} />
        <Route path='/blog/edit/:id' element={<Protected><EditBlog /></Protected>} />
        <Route path='/blog/:id' element={<SingleBlog />} />
        <Route path='/hook' element={<Hook/>} />
      </Routes>
      </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
    </Provider>
  )
}

export default App
