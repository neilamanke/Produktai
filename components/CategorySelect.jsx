import './UpdateStyle.css'

export function CategorySelect(props) {
  return (
    <>
      <option className='update-select' value={`${props.id}`}>{props.categoryType}</option>
    </>
  );
}
