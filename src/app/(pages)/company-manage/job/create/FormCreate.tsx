/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useRef, useState } from "react";
import { EditorMCE } from "@/components/editor/EditorMCE";
import { ButtonSubmit } from "@/components/form/general/ButtonSubmit";
import { FileMultiUploader } from "@/components/form/general/FileMultiUploader";
import { InputField } from "@/components/form/general/InputField";
import { SelectField } from "@/components/form/general/SelectField";
import { positionList, workingFormList } from "@/constants/options";
import { settingTechnologies } from "@/libs/tagify";
import { CreateJobInputs, createJobSchema } from "@/validates/company";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import Tags from "@yaireo/tagify/dist/react.tagify";
import "@yaireo/tagify/dist/tagify.css";
import { useMutation } from "@tanstack/react-query";
import { createJob } from "@/services/company";
import { toast } from "sonner";

export const FormCreate = () => {
  const editorRef = useRef<any>(null);
  const tagifyRef = useRef<any>(null);
  const [images, setImages] = useState<any[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateJobInputs>({
    resolver: zodResolver(createJobSchema) as any,
  });

  const { mutate, isPending } = useMutation({
    mutationFn: createJob,
    onSuccess: (data) => {
      if (data.code === "error") toast.error(data.message);

      if (data.code === "success") {
        toast.success(data.message);
        reset();
        setImages([]);
        if (tagifyRef.current) tagifyRef.current.removeAllTags();
        if (editorRef.current) editorRef.current.setContent("");
      }
      console.log(data);
    },
    onError: (errors) => {
      console.log(errors.message);
    },
  });

  const handleCreateJobForm: SubmitHandler<CreateJobInputs> = (data) => {
    data.technologies = [];
    if (tagifyRef.current) {
      data.technologies = tagifyRef.current.value.map((tag: any) => tag.value);
    }

    data.description = "";
    if (editorRef.current) {
      data.description = editorRef.current.getContent();
    }

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("salaryMin", data.salaryMin?.toString() ?? "");
    formData.append("salaryMax", data.salaryMax?.toString() ?? "");
    formData.append("position", data.position || "");
    formData.append("workingForm", data.workingForm || "");
    formData.append("technologies", JSON.stringify(data.technologies));
    formData.append("description", data.description || "");
    if (images.length > 0) {
      for (const image of images) {
        formData.append("images", image.file);
      }
    }

    mutate(formData);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleCreateJobForm)}
        className="grid grid-cols-1 gap-x-[20px] gap-y-[15px] sm:grid-cols-2"
      >
        <InputField
          id="title"
          label="Tên công việc"
          register={register("title")}
          className="sm:col-span-2"
          error={errors.title}
          required
        />

        <InputField
          id="salaryMin"
          label="Mức lương tối thiểu ($)"
          register={register("salaryMin")}
          error={errors.salaryMin}
          type="number"
        />

        <InputField
          id="salaryMax"
          label="Mức lương tối đa ($)"
          register={register("salaryMax")}
          error={errors.salaryMax}
          type="number"
        />

        <SelectField
          id="position"
          label="Cấp bậc"
          options={positionList}
          register={register("position")}
        />

        <SelectField
          id="workingForm"
          label="Hình thức làm việc"
          options={workingFormList}
          register={register("workingForm")}
        />

        <div className="sm:col-span-2">
          <label
            htmlFor="technologies"
            className="mb-[5px] block text-sm font-medium text-black"
          >
            Các công nghệ
          </label>
          <Tags
            tagifyRef={tagifyRef}
            settings={settingTechnologies}
            id="technologies"
            name="technologies"
            className="border-job-gray h-[46px] w-full rounded-sm border px-5 text-sm font-medium text-black"
          />
        </div>

        <FileMultiUploader
          id="images"
          files={images}
          setFiles={setImages}
          label="Danh sách ảnh"
        />

        <div className="sm:col-span-2">
          <label
            htmlFor="description"
            className="mb-[5px] block text-sm font-medium text-black"
          >
            Mô tả chi tiết
          </label>
          <EditorMCE editorRef={editorRef} value="" id="description" />
        </div>

        <ButtonSubmit text="Tạo mới" isPending={isPending} />
      </form>
    </>
  );
};
