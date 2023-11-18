import "../components/UserDetails.css";

const UserDetails = ({user,users})=>{
    console.log("userDetails",user)
    return (
        <div className="profile_container">
            <div className="profile_container_header">
                <button className="back_btn">back</button>
                <h4 className="dropdown">Country Dropdown</h4>
                <button className="pause_start_btn">Pause/Start</button>
            </div>
            <h3 className="profile_heading">Profile Page</h3>
            <div className="profile_body_top">
                Name: {user.name}
                Address: {}
            </div>
            <div className="profile_body_bottom">
                Username: {user.name}
            </div>
        </div>
    )
}
export default UserDetails;