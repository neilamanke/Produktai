
import { useNavigate } from "react-router-dom";
import { DeleteProduct } from "./DeleteProduct";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import "./MovieDataList.css"



export function ProductCard(props) {
  const navigate = useNavigate();

  const ctx = useContext(UserContext);

  const handleUpdateClick = () => {
    navigate(`/updateProduct/${props.id}`);
  };

  function handleOnClick() {
    navigate(`/productcardinfo/${props.id}`);
  }

  return (
    <div className="col ">
      <div className="card ProductDataList-card">
        <img src={props.thumb} className="card-img-top" alt={props.title} onClick={handleOnClick} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">Title: {props.categoryType}</p>
          <p className="card-text">Description: {props.rating}</p>
          <p className="card-text">Price: {props.year}</p>
          {ctx.user.user_role === 'admin' && (
            <button onClick={handleUpdateClick} className="btn btn-primary ProductDataList-btn">
              Update
            </button>
          )}
          {ctx.user.user_role === 'admin' && <DeleteProduct id={props.id} />}
        </div>
      </div>
    </div>
  );
}
