import type React from "react";
<<<<<<< HEAD
import { useId } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
}

export function Input({ label, className = "", ...props }: InputProps) {
	const id = useId();

	return (
		<div className="space-y-1">
			{label && (
				<label htmlFor={id} className="block text-sm font-medium text-gray-300">
					{label}
				</label>
			)}
			<input
				id={id}
				className={`w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
				{...props}
			/>
		</div>
	);
=======

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, className = "", ...props }: InputProps) {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-300">
          {label}
        </label>
      )}
      <input
        className={`w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
        {...props}
      />
    </div>
  );
>>>>>>> c33a7d3 (initial commit)
}
