/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useRef, useState } from "react";
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
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { editJob, getJobEditData } from "@/services/company";
import { toast } from "sonner";
import { EditJobSkeleton } from "@/components/skeleton/EditJobSkeleton";

export const FormEdit = ({ id }: { id: string }) => {
  const queryClient = useQueryClient();
  const editorRef = useRef<any>(null);
  const tagifyRef = useRef<any>(null);
  const [images, setImages] = useState<any[]>([]);

  const { data, isLoading } = useQuery({
    queryKey: ["jobEdit", id],
    queryFn: () => getJobEditData(id),
  });

  const jobDetail = data?.jobDetail ?? null;

  // Hiển thị ảnh mặc định
  useEffect(() => {
    if (jobDetail?.images && jobDetail?.images.length > 0) {
      const listImage = jobDetail.images.map((url: string) => ({
        source: url,
      }));
      setImages(listImage);
    }
  }, [jobDetail]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateJobInputs>({
    resolver: zodResolver(createJobSchema) as any,
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (formData: FormData) => editJob(id, formData),
    onSuccess: (data) => {
      if (data.code === "error") toast.error(data.message);
      if (data.code === "success") {
        toast.success(data.message);
        queryClient.invalidateQueries({ queryKey: ["jobList"], exact: false });
      }
    },
    onError: (errors) => {
      console.log(errors.message);
    },
  });

  const handleEditJobForm: SubmitHandler<CreateJobInputs> = (data) => {
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
        if (image.file instanceof File) {
          formData.append("images", image.file);
        } else {
          formData.append("images", image.source);
        }
      }
    }

    mutate(formData);
  };

  return (
    <>
      {jobDetail ? (
        <form
          onSubmit={handleSubmit(handleEditJobForm)}
          className="grid grid-cols-1 gap-x-[20px] gap-y-[15px] sm:grid-cols-2"
        >
          <InputField
            id="title"
            label="Tên công việc"
            register={register("title")}
            className="sm:col-span-2"
            error={errors.title}
            required
            defaultValue={jobDetail.title}
          />

          <InputField
            id="salaryMin"
            label="Mức lương tối thiểu ($)"
            register={register("salaryMin")}
            error={errors.salaryMin}
            type="number"
            defaultValue={jobDetail.salaryMin}
          />

          <InputField
            id="salaryMax"
            label="Mức lương tối đa ($)"
            register={register("salaryMax")}
            error={errors.salaryMax}
            type="number"
            defaultValue={jobDetail.salaryMax}
          />

          <SelectField
            id="position"
            label="Cấp bậc"
            options={positionList}
            register={register("position")}
            defaultValue={jobDetail.position}
          />

          <SelectField
            id="workingForm"
            label="Hình thức làm việc"
            options={workingFormList}
            register={register("workingForm")}
            defaultValue={jobDetail.workingForm}
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
              value={jobDetail.technologies.join(",")}
              id="technologies"
              name="technologies"
              className="border-job-gray-100 h-auto w-full rounded-sm border px-5 text-sm font-medium text-black"
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
            <EditorMCE
              editorRef={editorRef}
              value={jobDetail.description}
              id="description"
            />
          </div>

          <ButtonSubmit text="Cập nhật" isPending={isPending} />
        </form>
      ) : (
        <EditJobSkeleton />
      )}
    </>
  );
};
