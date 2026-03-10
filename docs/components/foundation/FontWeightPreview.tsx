"use client";

const WEIGHTS: { token: string; value: number }[] = [
  { token: "regular", value: 400 },
  { token: "medium", value: 500 },
  { token: "semibold", value: 600 },
  { token: "bold", value: 700 },
];

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
            {WEIGHTS.map(({ token, value }) => (
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
