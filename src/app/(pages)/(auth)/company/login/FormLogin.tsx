/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useEffect } from "react";
import JustValidate from "just-validate";

export const FormLogin = () => {
  useEffect(() => {
    const validator = new JustValidate("#loginForm");

    validator
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
      .addField("#password", [
        {
          rule: "required",
          errorMessage: "Vui lòng nhập mật khẩu!"
        },
        {
          rule: 'minLength',
          value: 8,
          errorMessage: "Mật khẩu phải chứa ít nhất 8 ký tự!"
        },
        {
          validator: (value: string) => /[A-Z]/.test(value),
          errorMessage: "Mật khẩu phải chứa ít nhất một chữ cái in hoa!"
        },
        {
          validator: (value: string) => /[a-z]/.test(value),
          errorMessage: "Mật khẩu phải chứa ít nhất một chữ cái in thường!"
        },
        {
          validator: (value: string) => /\d/.test(value),
          errorMessage: "Mật khẩu phải chứa ít nhất một chữ số!"
        },
        {
          validator: (value: string) => /[@$!%*?&]/.test(value),
          errorMessage: "Mật khẩu phải chứa ít nhất một ký tự đặc biệt!"
        }
      ])
      .onSuccess((event: any) => {
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(email);
        console.log(password);
        
      })
  }, []);

  return (
    <>
      <form id="loginForm" action="" className="grid grid-cols-1 gap-[15px]">
        <div className="">
          <label htmlFor="email" className="font-[500] text-[14px] block mb-[5px]">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border border-[#DEDEDE] rounded-[4px] w-full h-[46px] px-[20px] font-[500] text-[14px]"
          />
        </div>
        <div className="">
          <label htmlFor="password" className="font-[500] text-[14px] block mb-[5px]">
            Mật khẩu *
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="border border-[#DEDEDE] rounded-[4px] w-full h-[46px] px-[20px] font-[500] text-[14px]"
          />
        </div>
        <button className="bg-[#0088FF] rounded-[4px] h-[48px] font-[700] text-[16px] text-white cursor-pointer">
          Đăng nhập
        </button>
      </form>
    </>
  )
}