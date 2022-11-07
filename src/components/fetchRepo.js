import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Pagination from './pagination';

function FetchRepo() {
  const [repo, setRepo] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    setLoading(true)
    fetch('https://api.github.com/users/pelzmagic/repos')
      .then(res => res.json())
      .then(data => setRepo(data))
      setLoading(false)
  }, [])
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = repo.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <ul className="rep">
        {currentPosts.map(repo => (
          <li className="list" key={repo.id}>{repo.name}</li>
        ))}
      </ul>
      <Pagination 
      postsPerPage={postsPerPage} 
      totalPosts={repo.length} 
      paginate={paginate} 
    />
    </div>
  )
}

export default FetchRepo;