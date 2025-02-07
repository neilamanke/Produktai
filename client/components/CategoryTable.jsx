import './GenreTable.css';
import { UpdateCategory } from './UpdateCategory';
import { DeleteCategory } from './DeleteCategory';

export function CategoryTable(props) {
  return (
    <>
      <table className="GenreTable-container">
        <tbody>
          <tr className="table-tr">
            <th className="tableform1">
              {props.id}
            </th>
            <th className="tableform2">
              {props.genreType}
            </th>
            <th className="tableform3">
              <UpdateCategory id={props.id} categoryType={props.categoryType} />
              <DeleteCategory id={props.id} />
            </th>
          </tr>
        </tbody>
      </table>
    </>
  );
}
