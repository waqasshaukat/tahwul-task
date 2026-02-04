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
    <div className="card overflow-hidden">
      <div className="overflow-x-auto scrollbar-hidden">
        <table className="min-w-full text-left text-xs">
          <thead className="bg-slateblue-50 text-slateblue-500">
            <tr>
              {[
                "Document Number",
                "Document Name",
                "Document Lead",
                "Document Preparer",
                "Date",
                "Due Date",
                "Status",
              ].map((header) => (
                <th key={header} className="px-4 py-3 font-semibold">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.number} className="border-t border-slateblue-100">
                <td className="px-4 py-3 font-semibold text-ink-900">{row.number}</td>
                <td className="px-4 py-3 text-slateblue-700">{row.name}</td>
                <td className="px-4 py-3">{row.lead}</td>
                <td className="px-4 py-3">{row.preparer}</td>
                <td className="px-4 py-3">{row.date}</td>
                <td className="px-4 py-3">{row.due}</td>
                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-3 py-1 text-[11px] font-semibold ${
                      row.status === "Approved"
                        ? "bg-emerald-500/10 text-emerald-600"
                        : "bg-amber-500/10 text-amber-600"
                    }`}
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
