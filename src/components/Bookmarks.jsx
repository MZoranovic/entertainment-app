import React, {useEffect, useState} from 'react';
import {getBookmarks} from '../api';
import Search from './Search';
import MovieCard from './MovieCard';

export default function Bookmarks() {
  const [bookmarks, setbookmarks] = useState({bookmarkedMovies: [], bookmarkedTvSeries: []});

  const getData = async (ids) => {
    const results = await getBookmarks(ids);
    const tempMovies = {bookmarkedMovies: [], bookmarkedTvSeries: []};
    for (const result of results) {
      if (result.category === 'Movie') tempMovies.bookmarkedMovies.push(result);
      else tempMovies.bookmarkedTvSeries.push(result);
    }
    setbookmarks(tempMovies);
  };
  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    getData(bookmarks);
  }, []);

  return (
    <>
      <Search placeholder="Search for bookmared shows" setData={getData} />
      <MovieCard placeholder="Movies" cardDetails={bookmarks.bookmarkedMovies} />
      <MovieCard placeholder="TV Series" cardDetails={bookmarks.bookmarkedTvSeries} />
    </>
  );
}
