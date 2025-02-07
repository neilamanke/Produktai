import { useState } from 'react';
import { SearchProductData } from './SearchProductData';

export function ProductSearch() {
  const [searchData, setSearchData] = useState('');
  const [reload, setReload] = useState('');

  function handleSearch() {
    setReload(searchData);
  }

  return (
    <>
      <div className="input-group mb-3">
        <input
          onChange={(e) => setSearchData(e.target.value)}
          className="form-control form-control-lg"
          type="search"
          placeholder="Search for Movies"
          aria-label="Search"
        />
        <button onClick={handleSearch} className="btn btn-secondary px-4" type="submit">
          <i className="bi bi-search">search</i>
        </button>
      </div>
      <SearchProductData search={reload} />
    </>
  );
}
