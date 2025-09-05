import { Spin } from "antd";
import { Status } from "../../config/constants";
import * as Yup from "yup";
import { toast } from "sonner";
import bannerService from "../../service/banner.service";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import BannerForm from "../../components/banner/BannerForm";
import type { IBannerCreateData } from "./BannerCreatePage";
import type { IBannerData } from "./BannerListPage";

// ✅ Validation Schema
const BannerEditDTO = Yup.object({
  title: Yup.string().min(3).max(100).required("Title is required"),
  status: Yup.mixed<Status>().oneOf([Status.ACTIVE, Status.INACTIVE]),
  link: Yup.string().nullable().optional(),
  image: Yup.mixed().nullable().optional(),
});

const BannerEditPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [bannerDetail, setBannerDetail] = useState<IBannerData>();

  // ✅ Submit form (use PUT instead of POST for update)
  const submitForm = async (data: IBannerCreateData, setError: any) => {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("status", data.status);
      formData.append("link", data.link || "");
      if (data.image) {
        formData.append("image", data.image);
      }

      await bannerService.postRequest(`/banner/${params.id}`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token") || ""}`,
        },
      });

      toast.success("Congratulations", {
        description: "Banner updated successfully.",
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
      toast.error("Cannot update banner right now.", {
        description:
          "Something went wrong with the server. Please try again later.",
      });
    }
  };

  // ✅ Get banner detail
  const getBannerDetail = async () => {
    try {
      const response = await bannerService.getRequest(`/banner/${params.id}`);
      setBannerDetail(response.data); // <-- Save fetched data
    } catch {
      toast.error("Error!!!!", {
        description: "Error while fetching banner data...",
      });
      navigate("/admin/banners");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBannerDetail();
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between border-b border-b-gray-400 pb-3">
        <h1 className="text-4xl font-semibold text-teal-900">Banner Edit</h1>
      </div>

      <div className="flex">
        {loading ? (
          <div className="flex h-96 w-full justify-center items-center">
            <Spin />
          </div>
        ) : (
          <BannerForm
            submitForm={submitForm}
            DTO={BannerEditDTO}
            bannerDetail={bannerDetail}
          />
        )}
      </div>
    </div>
  );
};

export default BannerEditPage;
