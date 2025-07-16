import { useAuth } from "../../context/AuthContext"


const AdminDashboard =()=>{
    const {loggedInUser} = useAuth();

    return (<>
       {loggedInUser?.name}
    </>)
}

export default AdminDashboard;