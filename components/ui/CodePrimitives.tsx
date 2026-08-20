export function CodeLine({
  n,
  children,
}: {
  n: string;
  children: React.ReactNode;
}) {
  return (
    <p className="code-line font-mono text-[11px] leading-6 sm:text-xs">
      <span className="mr-4 inline-block w-3 text-right text-slate-800">
        {n}
      </span>
      {children}
    </p>
  );
}
export function Keyword({ children }: { children: React.ReactNode }) {
  return <span className="text-fuchsia-300">{children}</span>;
}
export function Blue({ children }: { children: React.ReactNode }) {
  return <span className="text-sky-300">{children}</span>;
}
export function Orange({ children }: { children: React.ReactNode }) {
  return <span className="text-orange-300">{children}</span>;
}
export function Green({ children }: { children: React.ReactNode }) {
  return <span className="text-green-300">{children}</span>;
}
