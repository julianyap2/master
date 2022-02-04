import React,{useEffect,useState} from 'react'
import { NavLink } from './ProfileHeader.styled'
import image from '../../images/settings.png'
import profileImg from '../../images/blank.png'
import axios from 'axios'


const ProfileHeader = () => {
    const [member, setMember] = useState({});
    const [loading, setIsLoading] = useState(true)
  const getUser= async() => {
        try {
          let tes = JSON.parse(localStorage.getItem("user"))
          // console.log(tes.id);
        const response = await axios.get(`https://server-kopana.herokuapp.com/api/v1/member/${tes.id}`);
          console.log(response.data);
          setMember(response.data)
          setIsLoading(false)
        } catch (error) {
          console.error(error);
        }
    }
    useEffect(()=>{
        getUser()
      },[])
    return loading? "Loading": (
      <div style={{display:'inline-block',width:'100%',marginTop:'20px',}}>
        <img
          src={profileImg}
          alt="profileBlank"
          style={{
            width: "200px",
            height: "200px",
            marginLeft:'20px',
            display: "inline-block",
            verticalAlign: "middle",
          }}
        />
        <h2
          className="profile"
          style={{
            display: "inline-block",
            width: "50%",
            marginLeft:'20px',
            verticalAlign: "middle",
          }}
        >
          {member.nama}
        </h2>
        <NavLink to="/profile-setting">
          <img
            src={image}
            alt={"Logo"}
            style={{
              height: "70px",
              display: "inline-block",
              top: "0",
              verticalAlign: "middle",
            }}
          />
        </NavLink>
      </div>
    );
}

export default ProfileHeader
