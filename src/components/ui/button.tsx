import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-display text-sm tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 focus-visible:ring-offset-bone disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        solid:
          "bg-ink text-bone hover:bg-stone shadow-soft",
        outline:
          "border border-ink/25 text-ink hover:border-ink hover:bg-ink/[0.03]",
        ghost: "text-ink hover:text-stone",
      },
      size: {
        md: "h-11 px-6",
        lg: "h-12 px-8",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "md",
    },
  }
);

type ButtonProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
} & VariantProps<typeof buttonVariants>;

export function Button({
  href,
  variant,
  size,
  className,
  children,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(buttonVariants({ variant, size }), className)}
    >
      {children}
    </Link>
  );
}
