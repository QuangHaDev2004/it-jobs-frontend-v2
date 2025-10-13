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

export const FormProfile = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    const validator = new JustValidate("#formProfile");

    validator
      .addField("#companyName", [
        {
          rule: "required",
          errorMessage: "Vui lòng nhập tên công ty!"
        },
        {
          rule: "maxLength",
          value: 200,
          errorMessage: "Tên công ty không được vượt quá 200 ký tự!"
        }
      ])
      .addField("#email", [
        {
          rule: "required",
          errorMessage: "Vui lòng nhập email của bạn!"
        },
        {
          rule: "email",
          errorMessage: "Email không đúng định dạng!"
        }
      ])
      .onSuccess((event: any) => {
        const companyName = event.target.companyName.value;
        const email = event.target.email.value;

        console.log(companyName);
        console.log(email);
      })
  }, []);

  return (
    <>
      <form
        action=""
        id="formProfile"
        className="grid sm:grid-cols-2 grid-cols-1 gap-x-[20px] gap-y-[15px]"
      >
        <div className="sm:col-span-2">
          <label htmlFor="companyName" className="font-[500] text-[14px] text-black mb-[5px] block">
            Tên công ty *
          </label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            className="w-full border border-[#DEDEDE] rounded-[4px] px-[20px] h-[46px] font-[500] text-[14px] text-black"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="logo" className="font-[500] text-[14px] text-black mb-[5px] block">
            Logo
          </label>
          <FilePond
            name="logo"
            allowMultiple={false} // Chỉ chọn 1 ảnh
            allowRemove={true} // Cho phép xóa ảnh
            labelIdle="+"
            acceptedFileTypes={['image/*']}
            // files={logos}
            // onupdatefiles={setLogos}
          />
        </div>
        <div className="">
          <label htmlFor="city" className="font-[500] text-[14px] text-black mb-[5px] block">
            Thành phố
          </label>
          <div className="custom-select">
            <select
              name="city"
              id="city"
              className="w-full border border-[#DEDEDE] rounded-[4px] px-[20px] h-[46px] font-[500] text-[14px] text-black"
            >
              <option value="">Hà Nội</option>
              <option value="">Đà Nẵng</option>
              <option value="">Hồ Chí Minh</option>
            </select>
          </div>
        </div>
        <div className="">
          <label htmlFor="address" className="font-[500] text-[14px] text-black mb-[5px] block">
            Địa chỉ
          </label>
          <input
            id="address"
            name="address"
            type="text"
            className="w-full border border-[#DEDEDE] rounded-[4px] px-[20px] h-[46px] font-[500] text-[14px] text-black"
          />
        </div>
        <div className="">
          <label htmlFor="companyModel" className="font-[500] text-[14px] text-black mb-[5px] block">
            Mô hình công ty
          </label>
          <input
            id="companyModel"
            name="companyModel"
            type="text"
            className="w-full border border-[#DEDEDE] rounded-[4px] px-[20px] h-[46px] font-[500] text-[14px] text-black"
          />
        </div>
        <div className="">
          <label htmlFor="companyEmployee" className="font-[500] text-[14px] text-black mb-[5px] block">
            Quy mô công ty
          </label>
          <input
            id="companyEmployee"
            name="companyEmployee"
            type="text"
            className="w-full border border-[#DEDEDE] rounded-[4px] px-[20px] h-[46px] font-[500] text-[14px] text-black"
          />
        </div>
        <div className="">
          <label htmlFor="workTime" className="font-[500] text-[14px] text-black mb-[5px] block">
            Thời gian làm việc
          </label>
          <input
            id="workTime"
            name="workTime"
            type="text"
            className="w-full border border-[#DEDEDE] rounded-[4px] px-[20px] h-[46px] font-[500] text-[14px] text-black"
          />
        </div>
        <div className="">
          <label htmlFor="workOverTime" className="font-[500] text-[14px] text-black mb-[5px] block">
            Làm việc ngoài giờ
          </label>
          <input
            id="workOverTime"
            name="workOverTime"
            type="text"
            className="w-full border border-[#DEDEDE] rounded-[4px] px-[20px] h-[46px] font-[500] text-[14px] text-black"
          />
        </div>
        <div className="">
          <label htmlFor="email" className="font-[500] text-[14px] text-black mb-[5px] block">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full border border-[#DEDEDE] rounded-[4px] px-[20px] h-[46px] font-[500] text-[14px] text-black"
          />
        </div>
        <div className="">
          <label htmlFor="phone" className="font-[500] text-[14px] text-black mb-[5px] block">
            Số điện thoại
          </label>
          <input
            id="phone"
            name="phone"
            type="text"
            className="w-full border border-[#DEDEDE] rounded-[4px] px-[20px] h-[46px] font-[500] text-[14px] text-black"
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
            Cập nhật
          </button>
        </div>
      </form>
    </>
  )
}