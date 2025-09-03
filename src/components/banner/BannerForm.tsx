import { useEffect, useState } from "react";
import type { IBannerCreateData } from "../../pages/banners/BannerCreatePage";
import { useForm } from "react-hook-form";
import { Status, InputType } from "../../config/constants";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextInput, SelectOptionsField,SingleFileUpload } from "../form/FormInput";
import { CancleButton, SubmitButton  } from "../button/FormButton";
import type { IBannerData } from "../../pages/banners/BannerListPage";

export interface IBannerFormProps {
  submitForm: (data: IBannerCreateData) => Promise<void>,
  DTO: any,
  bannerDetail?: IBannerData | null
}

const BannerForm = ({submitForm, DTO, bannerDetail=null}: Readonly<IBannerFormProps>) => {
    const [thumbUrl, setThumbUrl] = useState<string>("https://placehold.co/300x100");
     const {
           handleSubmit,
        control,
        formState: { errors, isSubmitting },
        setValue
         } = useForm<IBannerCreateData>({
        defaultValues: {
          title: "",
          status: Status.INACTIVE,
          link: "",
          image: null,
        },
        resolver: yupResolver(DTO) as any,
      });

    useEffect(() => {
      if (bannerDetail) {
        setValue("title", bannerDetail.title);
        setValue("status", bannerDetail.status);
        setValue("link", bannerDetail.link as string);
        setThumbUrl(bannerDetail.image.optimizedUrl);
      }
    }, [bannerDetail]);

  return (
    <>
      <form
        onSubmit={handleSubmit(submitForm)}
        className="w-full flex flex-col gap-5"
      >
        {/* Title */}
        <div className="flex w-full">
          <label htmlFor="title" className="w-1/3">
            Title:
          </label>
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
          <label htmlFor="link" className="w-1/3">
            Link:
          </label>
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
          <label htmlFor="status" className="w-1/3">
            Status:
          </label>
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
          <label htmlFor="image" className="w-1/3">
            Image:
          </label>
          <div className="flex w-2/3">
            <div className="flex w-3/4 flex-col">
              <SingleFileUpload
                name="image"
                control={control}
                setThumbUrl={setThumbUrl}
                errMsg={errors?.image?.message as string}
              />
            </div>
            <div className="flex w-1/4">
              <img src={thumbUrl} alt="Thumbnail" />
            </div>
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
    </>
  );
};

export default BannerForm;
