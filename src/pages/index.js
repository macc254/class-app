import React, { useState, useEffect }  from 'react';
import List from './List';
import withListLoading from './withListLoading';
import './index.css';

const Home = (props) => {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://class-schedule-app00.herokuapp.com/api/announcements/`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((announcements) => {
        setAppState({ loading: false, announcements: announcements });
      });
  }, [setAppState]);
    return (
     
      <footer>
        <div className='footer'>
          Built with {' '}
          <span role='img' aria-label='love'>
            💚
          </span>{' '}
           by Mercy Bore
        </div>
      </footer>
    );
  };
export default Home;