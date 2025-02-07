
import { Link } from "react-router-dom";
import { ProductDataList } from "../components/ProductDataList";

import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import "./HomePage.css"

export function HomePage() {

    const ctx = useContext(UserContext)
       
    return(

      <div className="container"> 
     <h4 className="mb-3 HomePage-formMov"> Product list </h4> 
    {ctx.user.user_role === 'admin' && <Link to='/addcardmov' type="button" className="btn btn-danger mb-3 me-2 HomePage-btn">Create Product </Link> }
    {ctx.user.user_role === 'admin' && <Link to='/category' type="button" className="btn btn-danger mb-3 me-2 HomePage-btn">Configure Category</Link> }
     <div className="container">
     <ProductDataList /> 
     </div>

 
   
    </div>
   
   
    )
}