import { Metadata } from "next";
import { headers } from "next/headers";
import { api } from "@/libs/axios";
import { CVDetail, JobDetail } from "@/types";
import Link from "next/link";
import { getJobInfo } from "@/utils/jobHelper";

export const metadata: Metadata = {
  title: "Chi tiết CV",
  description: "Mô tả trang chi tiết CV...",
};

export default async function CompanyManageCVDetailPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { id } = await params;
  const headerList = await headers();
  const cookie = headerList.get("cookie");

  let cvDetail: CVDetail | null = null;
  let jobDetail: JobDetail | null = null;
  try {
    const res = await api.get(`/company/cv/detail/${id}`, {
      headers: {
        cookie: cookie,
      },
    });
    cvDetail = res.data.cvDetail;
    jobDetail = res.data.jobDetail;
  } catch (error) {
    console.log(error);
  }

  let positionLabel = "";
  let workingFormLabel = "";
  if (jobDetail) {
    const result = getJobInfo(jobDetail);
    positionLabel = result.positionLabel;
    workingFormLabel = result.workingFormLabel;
  }

  return (
    <>
      <div className="py-[60px]">
        <div className="container">
          {/* CV Info */}
          <div className="rounded-lg bg-white p-5 shadow-md">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-5">
              <h1 className="w-full text-[20px] font-bold sm:w-auto">
                Thông tin CV
              </h1>
              <Link
                href="/company-manage/cv/list"
                className="text-job-blue text-sm font-normal underline"
              >
                Quay lại danh sách
              </Link>
            </div>
            <div className="mb-2.5 text-[16px] font-normal">
              Họ tên: <span className="font-bold">{cvDetail?.fullName}</span>
            </div>
            <div className="mb-2.5 text-[16px] font-normal">
              Email: <span className="font-bold">{cvDetail?.email}</span>
            </div>
            <div className="mb-2.5 text-[16px] font-normal">
              Số điện thoại:{" "}
              <span className="font-bold">{cvDetail?.phone}</span>
            </div>
            <div className="mb-2.5 text-[16px] font-normal">File CV:</div>
            <div className="h-[736px] bg-[#D9D9D9]">
              {/* Preview CV */}
              <iframe
                src={cvDetail?.fileCV}
                className="h-full w-full"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Job Info */}
          <div className="mt-[20px] rounded-lg bg-white p-5 shadow-md">
            <h2 className="mb-5 text-[20px] font-bold">Thông tin công việc</h2>
            <div className="mb-2.5 text-[16px] font-normal">
              Tên công việc:{" "}
              <span className="font-bold">{jobDetail?.title}</span>
            </div>
            <div className="mb-2.5 text-[16px] font-normal">
              Mức lương:{" "}
              <span className="font-bold">
                {jobDetail?.salaryMin && jobDetail.salaryMax ? (
                  <>
                    {jobDetail?.salaryMin.toLocaleString()}$ -{" "}
                    {jobDetail?.salaryMax.toLocaleString()}$
                  </>
                ) : (
                  "Thỏa thuận"
                )}
              </span>
            </div>
            <div className="mb-2.5 text-[16px] font-normal">
              Cấp bậc: <span className="font-bold">{positionLabel} </span>
            </div>
            <div className="mb-2.5 text-[16px] font-normal">
              Hình thức làm việc:{" "}
              <span className="font-bold">{workingFormLabel}</span>
            </div>
            <div className="mb-2.5 text-[16px] font-normal">
              Công nghệ:{" "}
              <span className="font-bold">
                {jobDetail?.technologies.join(", ")}
              </span>
            </div>
            <Link
              href={`/job/detail/${jobDetail?.id}`}
              className="text-job-blue text-sm font-normal underline"
            >
              Xem chi tiết công việc
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
