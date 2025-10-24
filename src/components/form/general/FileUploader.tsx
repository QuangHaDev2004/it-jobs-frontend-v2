/* eslint-disable @typescript-eslint/no-explicit-any */
import { FilePond } from "react-filepond";
import "@/libs/filepond";

export const FileUploader = ({
  files,
  setFiles,
}: {
  files: any[];
  setFiles: React.Dispatch<React.SetStateAction<any[]>>;
}) => {
  return (
    <>
      <div className="sm:col-span-2">
        <label
          htmlFor="avatar"
          className="mb-[5px] block text-sm font-medium text-black"
        >
          Avatar
        </label>
        <FilePond
          name="avatar"
          allowMultiple={false} // Chỉ chọn 1 ảnh
          allowRemove={true} // Cho phép xóa ảnh
          labelIdle="+"
          acceptedFileTypes={["image/*"]}
          files={files}
          onupdatefiles={setFiles}
        />
      </div>
    </>
  );
};
