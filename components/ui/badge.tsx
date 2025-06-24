import type React from "react";

interface BadgeProps {
<<<<<<< HEAD
<<<<<<< HEAD
	children: React.ReactNode;
	variant?: "default" | "secondary" | "outline";
	className?: string;
}

export function Badge({
	children,
	variant = "default",
	className = "",
}: BadgeProps) {
	const variants = {
		default: "bg-blue-600 text-white",
		secondary: "bg-gray-700 text-gray-300",
		outline: "border border-gray-600 text-gray-300",
	};

	return (
		<span
			className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${variants[variant]} ${className}`}
		>
			{children}
		</span>
	);
=======
  children: React.ReactNode;
  variant?: "default" | "secondary" | "outline";
  className?: string;
=======
	children: React.ReactNode;
	variant?: "default" | "secondary" | "outline";
	className?: string;
>>>>>>> 8b3931a (chore: lint)
}

export function Badge({
	children,
	variant = "default",
	className = "",
}: BadgeProps) {
	const variants = {
		default: "bg-blue-600 text-white",
		secondary: "bg-gray-700 text-gray-300",
		outline: "border border-gray-600 text-gray-300",
	};

<<<<<<< HEAD
  return (
    <span
      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
>>>>>>> c33a7d3 (initial commit)
=======
	return (
		<span
			className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${variants[variant]} ${className}`}
		>
			{children}
		</span>
	);
>>>>>>> 8b3931a (chore: lint)
}
