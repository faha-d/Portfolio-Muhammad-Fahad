export default function SectionLabel({
  number,
  title,
  centered = false,
}: {
  number: string;
  title: string;
  centered?: boolean;
}) {
  return (
    <div
      className={`mono flex items-center gap-2 text-[11px] tracking-[0.2em] text-[#5cff9a] ${centered ? "justify-center" : ""}`}
    >
      <span className="text-slate-700">{number}</span>
      <span>/</span>
      <span>{title}</span>
    </div>
  );
}
