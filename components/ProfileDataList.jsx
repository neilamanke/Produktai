import axios from 'axios';
import { useEffect, useState } from 'react';
import { ProfileCard } from './ProfileCard';

export function ProfileDataList() {
  const [profileData, setProfileData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/profile')
      .then((res) => {
        setProfileData(res.data.data);
      })
      .catch((error) => console.error(error));
  }, []);

  if(!profileData){
    return <div>Loading data...</div>
  }

  return (
    <>
       <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4  g-4">
     { profileData.map((profile) => (
        <ProfileCard 
        key={profile.title} 
        id={profile.id}
        title={profile.title}
        description={profile.description}
        img={profile.img_url}
        category={profile.categoryid}
        price={profile.price}
         />
      ))}
      </div> 
    </>
  );
}
