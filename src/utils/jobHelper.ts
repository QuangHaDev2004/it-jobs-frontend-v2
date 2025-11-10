import { positionList, workingFormList } from "@/constants/options";

export const getJobInfo = (item: { position: string; workingForm: string }) => {
  const position = positionList.find((pos) => pos.value === item.position);
  const workingForm = workingFormList.find(
    (work) => work.value === item.workingForm,
  );

  return {
    positionLabel: position?.label || "",
    workingFormLabel: workingForm?.label || "",
  };
};
