/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAuth } from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userProfile } from "@/services/user";
import { UserProfileInputs, userProfileSchema } from "@/validates/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { InputField } from "@/components/form/general/InputField";
import { FileUploader } from "@/components/form/general/FileUploader";
import { ButtonSubmit } from "@/components/form/general/ButtonSubmit";
import { QUERY_KEY } from "@/constants/queryKey";
import { UserProfileSkeleton } from "@/components/skeleton/UserProfileSkeleton";

export const FormProfile = () => {
  const { infoUser } = useAuth();
  const [avatars, setAvatars] = useState<any[]>([]);
  const queryClient = useQueryClient();

  useEffect(() => {
    if (infoUser && infoUser.avatar) {
      setAvatars([
        {
          source: infoUser.avatar,
        },
      ]);
    }
  }, [infoUser]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserProfileInputs>({
    resolver: zodResolver(userProfileSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: userProfile,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.CHECK_AUTH] });
    },
    onError: (errors: any) => {
      toast.error(errors?.response?.data?.message);
    },
  });

  const handleUserProfileForm: SubmitHandler<UserProfileInputs> = (data) => {
    data.avatar = null;
    if (avatars.length > 0 && avatars[0].file instanceof File) {
      data.avatar = avatars[0].file;
    }

    const formData = new FormData();
    formData.append("fullName", data.fullName);
    formData.append("email", data.email);
    formData.append("phone", data.phone || "");
    formData.append("avatar", data.avatar);

    mutate(formData);
  };

  return (
    <>
      {infoUser ? (
        <form
          onSubmit={handleSubmit(handleUserProfileForm)}
          className="grid grid-cols-1 gap-x-5 gap-y-[15px] sm:grid-cols-2"
        >
          <InputField
            id="fullName"
            label="Họ tên"
            register={register("fullName")}
            required
            defaultValue={infoUser.fullName}
            error={errors.fullName}
          />

          <InputField
            id="email"
            label="Email"
            register={register("email")}
            required
            defaultValue={infoUser.email}
            error={errors.email}
            type="email"
          />

          <InputField
            id="phone"
            label="Số điện thoại"
            register={register("phone")}
            defaultValue={infoUser.phone}
            error={errors.phone}
          />

          <FileUploader
            id="avatar"
            label="Avatar"
            files={avatars}
            setFiles={setAvatars}
          />

          <ButtonSubmit isPending={isPending} text="Cập nhật" />
        </form>
      ) : (
        <UserProfileSkeleton />
      )}
    </>
  );
};
