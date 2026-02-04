import type { ReactNode } from "react";

type Props = {
  title: string;
  action?: ReactNode;
};

export default function SectionHeader({ title, action }: Props) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h2 className="text-sm font-semibold text-ink-800">{title}</h2>
      {action}
    </div>
  );
}
