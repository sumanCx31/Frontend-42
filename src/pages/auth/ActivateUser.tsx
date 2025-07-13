import { useEffect } from "react";
import { Spinner } from "../../components/loading/spinner";
import authSvc from "../../service/auth.service";
import { useNavigate, useParams } from "react-router";
import { toast } from "sonner";
import type { SuccessResponse } from "../../config/axios.config";

const ActivateUser = () => {
    const params = useParams();
     const navigate = useNavigate();

    const ActivateUserProfile = async () => {
        try {
            const token = params.token
            const response = await authSvc.activateUserProfile(token as string) as unknown as SuccessResponse;
            toast.success("Account activated successfully!", {description: response.message});
            navigate("/");
        } catch (exception: any) {
            toast.error("Account activation failed!", {description: exception?.message});
            navigate("/");
        }
    }

    useEffect(() => {
        ActivateUserProfile()
    }, [])
    return (
        <>
        <div className="flex w-full h-16 justify-center items-center">
           <Spinner />
        </div>
        </>
    )
}

export default ActivateUser;