
import { ProfileDataList } from "../components/ProfileDataList";
import "./UserProfile.css"


export function UserProfile() {
  return (
    <>
     <div className="container UserProfile-container row">

      <h4>Trending </h4>
      
      <h4>Recomended for You</h4>
      
      <ProfileDataList />

     </div>

    </>
  );
}

