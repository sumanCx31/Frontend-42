import { useForm } from "react-hook-form";
import { InputType, Status, type StatusType } from "../../config/constants";
import * as Yup from "yup";

import {
  SelectOptionsField,
  SingleFileUpload,
  TextInput,
} from "../../components/form/FormInput";
import {
  CancleButton,
  SubmitButton,
} from "../../components/button/FormButton";
import { toast } from "sonner";
import bannerService from "../../service/banner.service";
import { useNavigate } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";

export interface IBannerCreateData {
  title: string;
  status: StatusType;
  link: string;
  image: File | null;
}

const BannerCreateDTO = Yup.object({
  title: Yup.string().min(3).max(100).required("Title is required"),
  status: Yup.string()
    .matches(/^(active|inactive)$/, "Invalid status")
    .required("Status is required"),
  link: Yup.string().nullable().optional(),
  image: Yup.mixed().required("Image is required"),
});

const BannerCreatePage = () => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<IBannerCreateData>({
    defaultValues: {
      title: "",
      status: Status.INACTIVE,
      link: "",
      image: null,
    },
    resolver: yupResolver(BannerCreateDTO) as any,
  });

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
        <form
          onSubmit={handleSubmit(submitForm)}
          className="w-full flex flex-col gap-5"
        >
          {/* Title */}
          <div className="flex w-full">
            <label htmlFor="title" className="w-1/3">Title:</label>
            <div className="flex w-2/3 flex-col">
              <TextInput
                control={control}
                name="title"
                errMsg={errors?.title?.message}
              />
            </div>
          </div>

          {/* Link */}
          <div className="flex w-full">
            <label htmlFor="link" className="w-1/3">Link:</label>
            <div className="flex w-2/3 flex-col">
              <TextInput
                control={control}
                name="link"
                type={InputType.URL}
                errMsg={errors?.link?.message}
              />
            </div>
          </div>

          {/* Status */}
          <div className="flex w-full">
            <label htmlFor="status" className="w-1/3">Status:</label>
            <div className="flex w-2/3 flex-col">
              <SelectOptionsField
                control={control}
                name="status"
                errMsg={errors?.status?.message}
                options={[
                  { label: "Publish", value: "active" },
                  { label: "Un-Publish", value: "inactive" },
                ]}
              />
            </div>
          </div>

          {/* Image Upload */}
          <div className="flex w-full">
            <label htmlFor="image" className="w-1/3">Image:</label>
            <div className="flex w-2/3 flex-col">
              <SingleFileUpload
                name="image"
                control={control}
                errMsg={errors?.image?.message as string}
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex w-full">
            <div className="w-1/3" />
            <div className="flex w-2/3 gap-5">
              <CancleButton btnTxt="Cancel" isSubmitting={isSubmitting} />
              <SubmitButton btnTxt="Submit" isSubmitting={isSubmitting} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BannerCreatePage;
