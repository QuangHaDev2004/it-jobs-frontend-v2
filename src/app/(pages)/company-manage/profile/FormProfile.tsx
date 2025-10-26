/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { toast } from "sonner";
import { useEffect, useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { ButtonSubmit } from "@/components/form/general/ButtonSubmit";
import { FileUploader } from "@/components/form/general/FileUploader";
import { InputField } from "@/components/form/general/InputField";
import { useAuth } from "@/hooks/useAuth";
import { companyProfile } from "@/services/company";
import { getCityList } from "@/services/city";
import { CitySelect } from "./CitySelect";
import { EditorMCE } from "@/components/editor/EditorMCE";
import {
  CompanyProfileInputs,
  companyProfileSchema,
} from "@/validates/company";

export const FormProfile = () => {
  const { infoCompany } = useAuth();
  const [logos, setLogos] = useState<any[]>([]);
  const editorRef = useRef<any>(null);

  const queryClient = useQueryClient();

  useEffect(() => {
    if (infoCompany && infoCompany.logo) {
      setLogos([
        {
          source: infoCompany.logo,
        },
      ]);
    }
  }, [infoCompany]);

  const { data } = useQuery({
    queryKey: ["city-list"],
    queryFn: getCityList,
  });

  const cityList = data?.cityList || [];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CompanyProfileInputs>({
    resolver: zodResolver(companyProfileSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: companyProfile,
    onSuccess: (data) => {
      if (data.code === "error") {
        toast.error(data.message);
      }

      if (data.code === "success") {
        toast.success(data.message);

        queryClient.invalidateQueries({
          predicate: (query) => query.queryKey[0] === "check-auth",
        });
      }
    },
    onError: (errors) => {
      console.log(errors.message);
    },
  });

  const handleCompanyProfileForm: SubmitHandler<CompanyProfileInputs> = (
    data,
  ) => {
    data.logo = null;
    if (logos.length > 0 && logos[0].file instanceof File) {
      data.logo = logos[0].file;
    }

    data.description = "";
    if (editorRef.current) {
      data.description = editorRef.current.getContent();
    }

    const formData = new FormData();
    formData.append("companyName", data.companyName);
    formData.append("email", data.email);
    formData.append("phone", data.phone || "");
    formData.append("city", data.city || "");
    formData.append("address", data.address || "");
    formData.append("companyModel", data.companyModel || "");
    formData.append("companyEmployees", data.companyEmployees || "");
    formData.append("workingTime", data.workingTime || "");
    formData.append("workOverTime", data.workOverTime || "");
    formData.append("logo", data.logo);
    formData.append("description", data.description || "");

    mutate(formData);
  };

  return (
    <>
      {infoCompany && (
        <form
          onSubmit={handleSubmit(handleCompanyProfileForm)}
          className="grid grid-cols-1 gap-x-[20px] gap-y-[15px] sm:grid-cols-2"
        >
          <InputField
            id="companyName"
            label="Tên công ty"
            register={register("companyName")}
            defaultValue={infoCompany.companyName}
            required
            error={errors.companyName}
            className="sm:col-span-2"
          />

          <InputField
            id="email"
            label="Email"
            register={register("email")}
            defaultValue={infoCompany.email}
            required
            error={errors.email}
            type="email"
          />

          <InputField
            id="phone"
            label="Số điện thoại"
            register={register("phone")}
            defaultValue={infoCompany.phone}
            error={errors.phone}
          />

          <CitySelect
            register={register("city")}
            cityList={cityList}
            defaultValue={infoCompany.city}
          />

          <InputField
            id="address"
            label="Địa chỉ"
            register={register("address")}
            defaultValue={infoCompany.address}
            error={errors.address}
          />

          <InputField
            id="companyModel"
            label="Mô hình công ty"
            register={register("companyModel")}
            defaultValue={infoCompany.companyModel}
            error={errors.companyModel}
          />

          <InputField
            id="companyEmployee"
            label="Quy mô công ty"
            register={register("companyEmployees")}
            defaultValue={infoCompany.companyEmployees}
            error={errors.companyEmployees}
          />

          <InputField
            id="workTime"
            label="Thời gian làm việc"
            register={register("workingTime")}
            defaultValue={infoCompany.workingTime}
            error={errors.workingTime}
          />

          <InputField
            id="workOverTime"
            label="Làm việc ngoài giờ"
            register={register("workOverTime")}
            defaultValue={infoCompany.workOverTime}
            error={errors.workOverTime}
          />

          <FileUploader
            id="logo"
            label="Logo"
            files={logos}
            setFiles={setLogos}
          />

          <div className="sm:col-span-2">
            <label
              htmlFor="description"
              className="mb-[5px] block text-sm font-medium text-black"
            >
              Mô tả chi tiết
            </label>
            <EditorMCE
              editorRef={editorRef}
              value={infoCompany.description}
              id="description"
            />
          </div>

          <ButtonSubmit isPending={isPending} text="Cập nhật" />
        </form>
      )}
    </>
  );
};
