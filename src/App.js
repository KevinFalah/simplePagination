import axios from 'axios';
import {useState, useEffect} from 'react'
import Posts from './components/Posts';
import Pagination from './components/Pagination';

function App() {

  const [post, setPost] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(8)

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true)
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPost(response.data)
      setLoading(false)
    }
    fetchPost();
  }, [])

  // get current post
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = post.slice(indexOfFirstPost, indexOfLastPost)

  // Change page
  const changePage = pageNumber => setCurrentPage(pageNumber) 

  return (
    <div className='container mt-2'>
      <h1 className='text-primary'>My Blog</h1>
      <Posts post={currentPost} loading={loading} />
      <Pagination postPerPage={postPerPage} totalPost={post.length} changePage={changePage} />
    </div>
  );
}

export default App;
