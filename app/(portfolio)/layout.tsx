import { ExLibrisNav } from "@/components/ExLibrisNav";
import { CustomCursor } from "@/components/CustomCursor";

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CustomCursor />
      <ExLibrisNav />
      {children}
    </>
  );
}
