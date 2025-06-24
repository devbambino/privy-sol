import type React from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import { useId } from "react";

interface TextareaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	label?: string;
}

export function Textarea({ label, className = "", ...props }: TextareaProps) {
	const id = useId();

	return (
		<div className="space-y-1">
			{label && (
				<label htmlFor={id} className="block text-sm font-medium text-gray-300">
					{label}
				</label>
			)}
			<textarea
				id={id}
				className={`w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${className}`}
				rows={4}
				{...props}
			/>
		</div>
	);
=======
=======
import { useId } from "react";
>>>>>>> 8b3931a (chore: lint)

interface TextareaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	label?: string;
}

export function Textarea({ label, className = "", ...props }: TextareaProps) {
<<<<<<< HEAD
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-300">
          {label}
        </label>
      )}
      <textarea
        className={`w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${className}`}
        rows={4}
        {...props}
      />
    </div>
  );
>>>>>>> c33a7d3 (initial commit)
=======
	const id = useId();

	return (
		<div className="space-y-1">
			{label && (
				<label htmlFor={id} className="block text-sm font-medium text-gray-300">
					{label}
				</label>
			)}
			<textarea
				id={id}
				className={`w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${className}`}
				rows={4}
				{...props}
			/>
		</div>
	);
>>>>>>> 8b3931a (chore: lint)
}
