
import './ProfileCard.css'
import { useNavigate } from 'react-router-dom'



export function ProfileCard(props) {

    const navigate = useNavigate()

    function handleOnClick(){
      
    }   
    
    return(

         <div className="col profileCard profileCard-form" onClick={handleOnClick}>
             <div className="profileCard-group">
               <img src={props.thumb} className="card-img-top" alt={props.title}  />
               <div className="card-body">
                 <h5 className="card-title">{props.title}</h5>
                 <p className="card-text">Years: {props.year}</p>
               </div>
             </div>
           </div>
    )

}