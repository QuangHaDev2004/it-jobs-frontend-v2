/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import JustValidate from "just-validate";
import { useEffect, useRef } from "react";
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import { EditorMCE } from "@/app/components/editor/EditorMCE";

// Đăng ký plugin
registerPlugin(
  FilePondPluginImagePreview,
  FilePondPluginFileValidateType
)

export const FormCreate = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    const validator = new JustValidate("#formCreate");

    validator
      .addField("#title", [
        {
          rule: "required",
          errorMessage: "Vui lòng nhập tên công việc!"
        }
      ])
      .addField("#salaryMin", [
        {
          rule: "minNumber",
          value: 0,
          errorMessage: "Vui lòng nhập mức lương >= 0!"
        }
      ])
      .addField("#salaryMax", [
        {
          rule: "minNumber",
          value: 0,
          errorMessage: "Vui lòng nhập mức lương >= 0!"
        }
      ])
      .onSuccess((event: any) => {
        const title = event.target.title.value;
        const salaryMin = event.target.salaryMin.value;
        const salaryMax = event.target.salaryMax.value;

        console.log(title);
        console.log(salaryMin);
        console.log(salaryMax);
      })
  }, [])

  return (
    <>
      <form
        action=""
        id="formCreate"
        className="grid sm:grid-cols-2 grid-cols-1 gap-x-[20px] gap-y-[15px]"
      >
        <div className="sm:col-span-2">
          <label htmlFor="title" className="font-[500] text-[14px] text-black mb-[5px] block">
            Tên công việc *
          </label>
          <input
            id="title"
            name="title"
            type="text"
            className="w-full border border-[#DEDEDE] rounded-[4px] px-[20px] h-[46px] font-[500] text-[14px] text-black"
          />
        </div>
        <div className="">
          <label htmlFor="salaryMin" className="font-[500] text-[14px] text-black mb-[5px] block">
            Mức lương tối thiểu ($)
          </label>
          <input
            id="salaryMin"
            type="number"
            name="salaryMin"
            className="w-full border border-[#DEDEDE] rounded-[4px] px-[20px] h-[46px] font-[500] text-[14px] text-black"
          />
        </div>
        <div className="">
          <label htmlFor="salaryMax" className="font-[500] text-[14px] text-black mb-[5px] block">
            Mức lương tối đa ($)
          </label>
          <input
            id="salaryMax"
            type="number"
            name="salaryMax"
            className="w-full border border-[#DEDEDE] rounded-[4px] px-[20px] h-[46px] font-[500] text-[14px] text-black"
          />
        </div>
        <div className="">
          <label htmlFor="position" className="font-[500] text-[14px] text-black mb-[5px] block">
            Cấp bậc
          </label>
          <div className="custom-select">
            <select
              name="position"
              id="position"
              className="w-full border border-[#DEDEDE] rounded-[4px] px-[20px] h-[46px] font-[500] text-[14px] text-black"
            >
              <option value="">Intern</option>
              <option value="">Fresher</option>
              <option value="">Junior</option>
              <option value="">Middle</option>
              <option value="">Senior</option>
              <option value="">Manager</option>
            </select>
          </div>
        </div>
        <div className="">
          <label htmlFor="workingForm" className="font-[500] text-[14px] text-black mb-[5px] block">
            Hình thức làm việc
          </label>
          <div className="custom-select">
            <select
              name="workingForm"
              id="workingForm"
              className="w-full border border-[#DEDEDE] rounded-[4px] px-[20px] h-[46px] font-[500] text-[14px] text-black"
            >
              <option value="">Tại văn phòng</option>
              <option value="">Làm việc tại nhà</option>
              <option value="">Linh hoạt</option>
            </select>
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="technologies" className="font-[500] text-[14px] text-black mb-[5px] block">
            Các công nghệ
          </label>
          <input
            id="technologies"
            name="technologies"
            type="text"
            className="w-full border border-[#DEDEDE] rounded-[4px] px-[20px] h-[46px] font-[500] text-[14px] text-black"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="images" className="font-[500] text-[14px] text-black mb-[5px] block">
            Danh sách ảnh
          </label>
          <FilePond
            name="images"
            allowMultiple={true} // Cho phép chọn nhiều file
            allowRemove={true} // Cho phép xóa ảnh
            labelIdle="+"
            acceptedFileTypes={['image/*']}
            // files={images}
            // onupdatefiles={setImages}
            maxFiles={8}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="description" className="font-[500] text-[14px] text-black mb-[5px] block">
            Mô tả chi tiết
          </label>
          <EditorMCE editorRef={editorRef} id="description" />
        </div>
        <div className="sm:col-span-2">
          <button className="bg-[#0088FF] px-[20px] rounded-[4px] h-[48px] font-[700] text-[16px] text-white cursor-pointer">
            Tạo mới
          </button>
        </div>
      </form>
    </>
  )
}