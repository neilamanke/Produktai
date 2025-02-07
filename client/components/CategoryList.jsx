import axios from 'axios';
import { useEffect, useState } from 'react';
import { CreateCategory } from './CreateCategory';
import { CategoryTable } from './CategoryTable';
import './CreateCardForm.css';
import { CategorySelect } from './CategorySelect';
import './CreateCategory.css';

export function CategoryList() {
  const [CategoryList, setCategoryList] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/category/')
      .then((response) => {
        setCategoryList(response.data.data);
      })
      .catch((error) => console.error('Fetching category list failed:', error));
  }, []);

  return (
    <div className="container">
      <CreateCategory />

      <table className="tableform5">
        <thead>
          <tr>
            <th className="tableform1">Id</th>
            <th className="tableform2">Category Type</th>
            <th className="tableform3">Functions</th>
          </tr>
        </thead>
      </table>
      {CategoryList.length === 0 ? (
        <p>Loading...</p>
      ) : (
        CategoryList.map((category) => <CategoryTable key={category.id} id={category.id} categoryType={category.category_type} />)
      )}
    </div>
  );
}
