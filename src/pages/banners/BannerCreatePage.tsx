
import { Status } from "../../config/constants";
import * as Yup from "yup";
import { toast } from "sonner";
import bannerService from "../../service/banner.service";
import { useNavigate } from "react-router";
import BannerForm from "../../components/banner/BannerForm";

export interface IBannerCreateData {
  title: string;
  status: RTCStatsType;
  link: string;
  image: File | null;
}

const BannerCreateDTO = Yup.object({
  title: Yup.string().min(3).max(100).required("Title is required"),
  status: Yup.string()
    .matches(/^(active|inactive)$/)
    .default(Status.INACTIVE),
  link: Yup.string().nullable().optional(),
  image: Yup.mixed().required("Image is required"),
});

const BannerCreatePage = () => {
  const navigate = useNavigate();

  const submitForm = async (data: IBannerCreateData) => {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("status", data.status);
      formData.append("link", data.link || "");
      if (data.image) {
        formData.append("image", data.image);
      }

      await bannerService.postRequest("banner", formData, {
        headers: {
          // "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("access_token") || ""}`,
        },
      });

      toast.success("Congratulations", {
        description: "Banner created successfully.",
      });
      navigate("/admin/banners");
    } catch (exception: any) {
      if (exception?.error) {
        Object.keys(exception.error).forEach((field) => {
          setError(field as keyof IBannerCreateData, {
            message: exception.error[field],
          });
        });
      }
      toast.error("Cannot create banner right now.", {
        description:
          "Something went wrong with the server. Please try again later.",
      });
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between border-b border-b-gray-400 pb-3">
        <h1 className="text-4xl font-semibold text-teal-900">Banner Create</h1>
      </div>

      <div className="flex">
        <BannerForm
        submitForm={submitForm}
        DTO={BannerCreateDTO}
        />
      </div>
    </div>
  );
};

export default BannerCreatePage;

function setError(arg0: string, arg1: { message: any; }) {
  throw new Error("Function not implemented.");
}
