type Item = {
  label: string;
  status: number;
};

type Segment = {
  title: string;
  items: Item[];
};

type Column = {
  title: string;
  score: string;
  segments: Segment[];
};

type Props = {
  columns: Column[];
};

const statuses = ["Not Started", "In Progress", "Completed", "Partially Uploaded", "Fully Uploaded", "Delayed"];

const statusDotColors = [
  "bg-[#8597A8]", // Not Started
  "bg-[#F59F0A]", // In Progress
  "bg-[#1EA54E]", // Completed
  "bg-[#0078D7]", // Partially Uploaded
  "bg-[#0078D7]", // Fully Uploaded
  "bg-[#F50A0A]", // Delayed
];

const getBallColumns = (count: number) => {
  if (count <= 2) return count;
  if (count === 3) return 3;
  if (count === 4) return 2;
  return 3;
};

export default function ProgressMatrix({ columns }: Props) {
  return (
    <div className="flex min-h-[529px] flex-col rounded-[10px] border border-[#E0E8ED] bg-white p-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-[16px] font-bold leading-4 text-[#1D3557]">
          Progress Status
        </h3>
        <div className="flex flex-wrap items-center gap-[18px] text-[14px] font-normal leading-4 text-[#1D3557]">
          {statuses.map((label, index) => (
            <span key={label} className="flex items-center gap-1">
              <span className={`h-2 w-2 rounded-full ${statusDotColors[index]}`} />
              {label}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-4 grid flex-1 items-stretch gap-4 md:grid-cols-5 xl:grid-cols-10">
        {columns.map((column) => (
          <div
            key={column.title}
            className="flex h-full flex-col gap-2"
          >
            <div className="flex h-[90px] w-full flex-col items-center justify-center rounded-[10px] bg-[#1D3557] px-2 py-2 text-white">
              <p className="text-center text-[12px] font-bold leading-4 text-white">
                {column.title}
              </p>
              <span className="mt-2 flex h-[22px] items-center justify-center rounded-[10px] bg-white/10 px-[10px] text-[11px] font-normal text-white">
                {column.score}
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-2 min-h-0">
              {column.segments.map((segment) => (
                <div
                  key={`${column.title}-${segment.title}`}
                  className="flex flex-1 flex-col rounded-[10px] border border-[#E0E8ED] bg-[#F5F8FB] p-2"
                >
                  <p className="text-center text-[10px] font-normal leading-4 text-[#1D3557]">
                    {segment.title}
                  </p>
                  <div className="flex flex-1 items-center justify-center">
                    <div
                      className="grid justify-center gap-[10px]"
                      style={{
                        gridTemplateColumns: `repeat(${getBallColumns(
                          segment.items.length
                        )}, 24px)`,
                      }}
                    >
                      {segment.items.map((item) => (
                        <span
                          key={`${segment.title}-${item.label}`}
                          className={`flex h-6 w-6 items-center justify-center rounded-full text-[9px] font-semibold text-white ${statusDotColors[item.status]}`}
                        >
                          {item.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
