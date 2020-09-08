import React,{ useEffect, useState } from 'react';
import './App.css';
import Repo from './comps/Repo'

const App = () => {

  const [pageNumber, setPageNumber] = useState(1)

  const [mostStarred, setMostStarred] = useState([])

  const [isLoading, setIsLoading] = useState(true) 


  useEffect(() => {
    fetch(`https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${pageNumber}`)
      .then((response) => response.json())
      .then((repos) => {
          setMostStarred(repos.items)
          setIsLoading(false)
      })
      .catch((error) => {
          console.error(error);
      });
  }, [pageNumber])

  const nextPage = (e) => {
      e.preventDefault();
      setIsLoading(true)
      setPageNumber(pageNumber + 1)
  }

  return (
    <div className="App">
        <header className="App-header">
            <p> Most starred Github repos in the last 30 days , page : {pageNumber}</p>
        </header>
        <div>
            {
              isLoading ? ( <p className="loading">Loading ...</p> ) : mostStarred.map(item => <Repo item={item} />)
            }
        </div>
        <div>
            <button className="button" href="#" onClick={nextPage}> Next </button>
        </div>
    </div>
  );

}

export default App;
