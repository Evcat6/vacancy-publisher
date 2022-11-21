import { Layout, ProtectedRoute } from './components';
import { AuthPage, HomePage, NotFoundPage, JobBoard } from './pages'
import { Route, Routes, Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getJobList } from './asyncActions/jobs'


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getJobList())
  }, [])

  return (
    <Routes>
    <Route path='/' element={<Layout/>}>
      <Route path="/auth" element={ <AuthPage/> } />
      <Route path='vacancy-form' element={ <ProtectedRoute><HomePage/></ProtectedRoute> }/>
      <Route index element={ <JobBoard/> } />
      <Route path='*' element={ <Navigate to='/404'/> }/>
      <Route path='/404' element={ <NotFoundPage/> }/>
    </Route>
    </Routes>
  )
}

export default App
