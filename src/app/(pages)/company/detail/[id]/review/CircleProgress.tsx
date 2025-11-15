export const CircleProgress = ({ percent }: { percent: number }) => {
  const size = 88;
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const dashArray = 2 * Math.PI * radius; // chu vi
  const dashOffset = dashArray - (percent / 100) * dashArray; // phần còn lại chưa fill

  return (
    <div className="relative flex items-center justify-center">
      <svg width={size} height={size}>
        <circle
          cx={size / 2} // tâm vòng tròn
          cy={size / 2}
          r={radius}
          stroke="#F0FDF4"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#00C950"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={dashArray} // tổng chiều dài đường tròn
          strokeDashoffset={dashOffset} // ẩn đi phần chưa fill, tạo hiệu ứng progress.
          strokeLinecap="round" // hai đầu vòng tròn - tròn
          transform={`rotate(-90 44 44)`}
        />
      </svg>
      <div className="absolute text-2xl font-bold text-[#00C950]">
        {percent.toFixed(0)}
        <span className="text-sm">%</span>
      </div>
    </div>
  );
};
