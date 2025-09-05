import { useAuth } from "../../context/authContext"


const AdminDashboard =()=>{
    const {loggedInUser} = useAuth();

    return (<>
       {loggedInUser?.name}
    </>)
}

export default AdminDashboard;