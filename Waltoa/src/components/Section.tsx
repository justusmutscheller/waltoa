import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

export function Section({
  id,
  tone = "bone",
  className,
  containerClassName,
  children,
}: {
  id?: string;
  tone?: "bone" | "linen";
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-24 md:py-32",
        tone === "linen" ? "bg-linen" : "bg-bone",
        className
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow mb-5">{children}</p>;
}
