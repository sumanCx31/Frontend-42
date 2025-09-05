import { useAuth } from "../../context/authContext"


const AdminDashboard =()=>{
    const {loggedInUser} = useAuth();

    return (<>
       {loggedInUser?.name}
       <h1>hello</h1>
    </>)
}

export default AdminDashboard;