import { Controller, useController } from "react-hook-form";
import { Button, Input, Radio, Select, Upload } from "antd";
import UploadOutlined from "@ant-design/icons/lib/icons/UploadOutlined";

export interface IInputProps {
  control: any;
  name: string;
  errMsg?: string;
}

export interface ISingleSelectOptions {
  label:string,
  value: string
}

export interface ISelectOptionsProps {
  control: any;
  name: string;
  errMsg?: string;
  options: Array<ISingleSelectOptions>;
}

export const EmailInput = ({ control, name, errMsg="" }: IInputProps) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={{
          required: true,
        }}
        render={({ field,  }) => (
          <>
            <Input type="email" autoComplete={name} id={name} {...field} />
            <span className="text-sm text-red-700 italic">
              {errMsg}
            </span>
          </>
        )}
      />
    </>
  );
};


export const PasswordInput = ({control, name, errMsg=""}: Readonly<IInputProps>) => {
   const {field} = useController({
    name: name, 
    control: control, 
    });
    return (
      <>
        <Input.Password
          autoComplete={name}
          id={name}
          {...field}
        />
        <span className="text-sm text-red-700 italic">
          {errMsg}
        </span>
      </>
    )
}

export const TextInput = ({control, name, errMsg=""}: Readonly<IInputProps>) => {
   const {field} = useController({
    name: name, 
    control: control, 
    });
    return (
      <>
        <Input
          autoComplete={name}
          id={name}
          {...field}
        />
        <span className="text-sm text-red-700 italic">
          {errMsg}
        </span>
      </>
    )
}

export const SelectOptionsField = ({name, control, errMsg="", options}: Readonly<ISelectOptionsProps>) => {
  const {field} = useController({
    name: name,
    control: control,
  })

  const onSearch = () => {
    //console.log("Search:", value);
  }

  return <>
   <Select
    {...field}
    showSearch
    placeholder="Select any one"
    optionFilterProp="label"
    onSearch={onSearch}
    options={options}
    className="w-full"
   />
   <span className="text-sm text-red-700 italic">
          {errMsg}
        </span>
  </>
}

export const RadioButtonField = ({name, control, errMsg="", options}: Readonly<ISelectOptionsProps>) => {
  const {field} = useController({
    name: name,
    control: control,
  })
  return (
    <>
      <Radio.Group
       {...field}
       options={options}
     />
     <span className="text-sm text-red-700 italic">
          {errMsg}
        </span>
    </>
  )
}

export const SingleFileUpload = ({control, name, errMsg=""}: Readonly<IInputProps>) => {
  return (
    <>
     <Controller
       name={name}
       control={control}
       render={({ field }) => {
        return (
          <>
          <Upload
          className="w-full"
            beforeUpload={(file) => {
              field.onChange(file);
              return false;
            }}
          >
            <Button icon={<UploadOutlined />}>Select A File</Button>
          </Upload>
           <span className="text-sm text-red-700 italic">
          {errMsg}
        </span>
          </>
        )
       }}
     />
    </>
  )
}