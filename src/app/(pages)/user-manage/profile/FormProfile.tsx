/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import JustValidate from "just-validate";
import { useEffect } from "react";
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';

// Đăng ký plugin
registerPlugin(
  FilePondPluginImagePreview,
  FilePondPluginFileValidateType
)

export const FormProfile = () => {
  useEffect(() => {
    const validator = new JustValidate("#profileForm");

    validator
      .addField('#fullName', [
        {
          rule: 'required',
          errorMessage: 'Vui lòng nhập họ tên!'
        },
        {
          rule: 'minLength',
          value: 5,
          errorMessage: 'Họ tên phải có ít nhất 5 ký tự!',
        },
        {
          rule: 'maxLength',
          value: 50,
          errorMessage: 'Họ tên không được vượt quá 50 ký tự!',
        },
      ])
      .addField('#email', [
        {
          rule: 'required',
          errorMessage: 'Vui lòng nhập email của bạn!',
        },
        {
          rule: 'email',
          errorMessage: 'Email không đúng định dạng!',
        },
      ])
      .onSuccess((event: any) => {
        const fullName = event.target.fullName.value;
        const email = event.target.email.value;

        console.log(fullName);
        console.log(email);
      })
  }, []);

  return (
    <>
      <form
        action=""
        id="profileForm"
        className="grid sm:grid-cols-2 grid-cols-1 gap-x-[20px] gap-y-[15px]"
      >
        <div className="sm:col-span-2">
          <label htmlFor="fullName" className="font-[500] text-[14px] text-black mb-[5px] block">
            Họ tên *
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            className="w-full border border-[#DEDEDE] rounded-[4px] px-[20px] h-[46px] font-[500] text-[14px] text-black"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="avatar" className="font-[500] text-[14px] text-black mb-[5px] block">
            Avatar
          </label>
          <FilePond
            name="avatar"
            allowMultiple={false} // Chỉ chọn 1 ảnh
            allowRemove={true} // Cho phép xóa ảnh
            labelIdle="+"
            acceptedFileTypes={['image/*']}
            // files={avatars}
            // onupdatefiles={setAvatars}
          />
          {/* <input
            id="avatar"
            name="avatar"
            type="file"
            accept="image/*"
            className="file:py-[12px] w-full border border-[#DEDEDE] rounded-[4px] px-[20px] h-[46px] font-[500] text-[14px] text-black"
          /> */}
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
          <button className="bg-[#0088FF] px-[20px] rounded-[4px] h-[48px] font-[700] text-[16px] text-white cursor-pointer">
            Cập nhật
          </button>
        </div>
      </form>
    </>
  )
}