"use client";

import { fontWeight } from "pine-design-system";

const TEXT_WEIGHTS = [
	"regular",
	"medium",
	"semibold",
	"bold",
] satisfies ReadonlyArray<keyof typeof fontWeight>;

const SAMPLE = "The quick brown fox jumps over the lazy dog.";

export function FontWeightPreview() {
	return (
		<div className="my-6">
			<div className="overflow-x-auto">
				<table className="w-full border-collapse min-w-[400px]">
					<thead>
						<tr>
							<th className="py-2.5 px-3 border-b border-gray-200 dark:border-gray-700 text-left font-semibold text-sm text-gray-700 dark:text-gray-300 w-[100px]">
								Token
							</th>
							<th className="py-2.5 px-3 border-b border-gray-200 dark:border-gray-700 text-left font-semibold text-sm text-gray-700 dark:text-gray-300 w-[60px]">
								Value
							</th>
							<th className="py-2.5 px-3 border-b border-gray-200 dark:border-gray-700 text-left font-semibold text-sm text-gray-700 dark:text-gray-300">
								Preview
							</th>
						</tr>
					</thead>
					<tbody>
						{TEXT_WEIGHTS.map((token) => {
							const value = fontWeight[token];
							return (
								<tr key={token}>
									<td className="py-3 px-3 border-b border-gray-100 dark:border-gray-800 font-mono text-sm text-gray-700 dark:text-gray-300">
										{token}
									</td>
									<td className="py-3 px-3 border-b border-gray-100 dark:border-gray-800 text-sm text-gray-500 dark:text-gray-400">
										{value}
									</td>
									<td className="py-3 px-3 border-b border-gray-100 dark:border-gray-800">
										<span
											className="text-base leading-relaxed text-gray-900 dark:text-gray-100"
											style={{ fontWeight: value }}
										>
											{SAMPLE}
										</span>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
}
