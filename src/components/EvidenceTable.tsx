type Row = {
  number: string;
  name: string;
  lead: string;
  preparer: string;
  date: string;
  due: string;
  status: string;
};

type Props = {
  rows: Row[];
};

export default function EvidenceTable({ rows }: Props) {
  return (
    <div className="h-[259px] w-full rounded-[10px] border border-[#E0E8ED] bg-white overflow-hidden">
      <div className="pt-[14px] pr-[16px] pl-[17px] overflow-hidden">
        <table className="w-full table-fixed border-separate border-spacing-0 text-left text-xs">
          <colgroup>
            <col style={{ width: 120 }} />
            <col style={{ width: 20 }} />
            <col style={{ width: 109 }} />
            <col style={{ width: 124 }} />
            <col style={{ width: 103 }} />
            <col style={{ width: 38 }} />
            <col style={{ width: 123 }} />
            <col style={{ width: 51 }} />
            <col style={{ width: 45 }} />
            <col style={{ width: 89 }} />
            <col style={{ width: 69 }} />
            <col style={{ width: 61 }} />
            <col style={{ width: 121 }} />
          </colgroup>
          <thead className="bg-[#F5F8FB] text-slateblue-500 rounded-[10px] overflow-hidden">
            <tr className="h-[40px] overflow-hidden rounded-[10px]">
              <th className="px-4 py-2 font-normal text-[#1D3557]">
                <span className="inline-flex h-[22px] w-[120px] items-center justify-center gap-[8px] whitespace-nowrap text-[12px] leading-[12px] tracking-[0.02em] text-center">
                  Document Number
                  <img src="/icons/sort.svg" alt="" className="h-3 w-3" />
                </span>
              </th>
              <th />
              <th className="px-0 py-2 font-normal text-[#1D3557]">
                <span className="inline-flex h-[22px] w-[109px] items-center justify-center gap-[8px] whitespace-nowrap text-[12px] leading-[12px] tracking-[0.02em] text-center">
                  Document Name
                  <img src="/icons/sort.svg" alt="" className="h-3 w-3" />
                </span>
              </th>
              <th />
              <th className="px-0 py-2 font-normal text-[#1D3557]">
                <span className="inline-flex h-[22px] w-[103px] items-center justify-center gap-[8px] whitespace-nowrap text-[12px] leading-[12px] tracking-[0.02em] text-center">
                  Document Lead
                  <img src="/icons/sort.svg" alt="" className="h-3 w-3" />
                </span>
              </th>
              <th />
              <th className="px-0 py-2 font-normal text-[#1D3557]">
                <span className="inline-flex h-[22px] w-[123px] items-center justify-center gap-[8px] whitespace-nowrap text-[12px] leading-[12px] tracking-[0.02em] text-center">
                  Document Preparer
                  <img src="/icons/sort.svg" alt="" className="h-3 w-3" />
                </span>
              </th>
              <th />
              <th className="px-0 py-2 font-normal text-[#1D3557]">
                <span className="inline-flex h-[22px] w-[45px] items-center justify-center gap-[8px] whitespace-nowrap text-[12px] leading-[12px] tracking-[0.02em] text-center">
                  Date
                  <img src="/icons/sort.svg" alt="" className="h-3 w-3" />
                </span>
              </th>
              <th />
              <th className="px-0 py-2 font-normal text-[#1D3557]">
                <span className="inline-flex h-[22px] w-[69px] items-center justify-center gap-[8px] whitespace-nowrap text-[12px] leading-[12px] tracking-[0.02em] text-center">
                  Due Date
                  <img src="/icons/sort.svg" alt="" className="h-3 w-3" />
                </span>
              </th>
              <th />
              <th className="px-0 py-2 text-center font-normal text-[#1D3557]">
                <span className="inline-flex h-[22px] w-[54px] items-center justify-center gap-[8px] whitespace-nowrap text-[12px] leading-[12px] tracking-[0.02em] text-center">
                  Status
                  <img src="/icons/sort.svg" alt="" className="h-3 w-3" />
                </span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E0E8ED]">
            {rows.map((row) => (
              <tr key={row.number}>
                <td className="px-4 py-4 text-[14px] font-normal leading-[20px] text-[#1D3557]">
                  {row.number}
                </td>
                <td />
                <td className="px-0 py-4 text-[14px] font-normal leading-[20px] text-[#1D3557] whitespace-nowrap">
                  {row.name}
                </td>
                <td />
                <td className="px-0 py-4 text-[14px] font-normal leading-[20px] text-[#1D3557] whitespace-nowrap">
                  {row.lead}
                </td>
                <td />
                <td className="px-0 py-4 text-[14px] font-normal leading-[20px] text-[#1D3557] whitespace-nowrap">
                  {row.preparer}
                </td>
                <td />
                <td className="px-0 py-4 text-[14px] font-normal leading-[20px] text-[#1D3557] whitespace-nowrap">
                  {row.date}
                </td>
                <td />
                <td className="px-0 py-4 text-[14px] font-normal leading-[20px] text-[#1D3557] whitespace-nowrap">
                  {row.due}
                </td>
                <td />
                <td className="px-0 py-4 text-center">
                  <span
                    className={`inline-flex items-center justify-center rounded-[30px] px-[10px] text-center text-[14px] font-normal leading-[20px] ${
                      row.status === "Approved"
                        ? "w-[77px] bg-[#34C759]/10 text-[#34C759]"
                        : "min-w-[115px] bg-[#FFCC00]/10 text-[#FFCC00]"
                    }`}
                    style={{ height: 30 }}
                  >
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
