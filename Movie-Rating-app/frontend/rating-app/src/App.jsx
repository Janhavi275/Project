import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter,Routes,Route ,Link} from 'react-router-dom'
import ReviewList from './components/ReviewList'
import EditReview from './components/EditReview'
import AddReview from './components/AddReview'


function App() {
  return (
    <>
      <BrowserRouter>
        <nav className='container mb-2 border'>
            <Link to="/" className='btn btn-primary m-2'>Home</Link>
            {/* <Link to="/edit" className='btn btn-danger m-2'>EditReview</Link> */}
            {/* <Link to="/delete" className='btn btn-success m-2'>DeleteReview</Link> */}
            <Link to="/add" className='btn btn-warning m-2'>AddReview</Link>
        </nav>
        <Routes>
          <Route path="/" element={<ReviewList/>}/>
          <Route path="/edit/:id" element={<EditReview/>}/>
          <Route path="/delete" element={<ReviewList/>}/>
          <Route path="/add" element={<AddReview/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
