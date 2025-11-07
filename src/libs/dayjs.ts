import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import "dayjs/locale/vi";

dayjs.extend(relativeTime); // hiển thị "x phút trước" - để dùng được fromNow()
dayjs.extend(utc); 
dayjs.extend(timezone); // chuyển đổi múi giờ
dayjs.locale("vi");

export default dayjs;
