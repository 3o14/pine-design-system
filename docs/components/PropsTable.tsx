"use client";

import { Table } from "nextra/components";

export interface PropDefinition {
  name: string;
  type: string;
  description?: string;
  default?: string;
  required?: boolean;
}

interface PropsTableProps {
  props: PropDefinition[];
}

function toAnchorId(name: string) {
  return name.replace(/\./g, "").toLowerCase();
}

export function PropsTable({ props: propList }: PropsTableProps) {
  return (
    <Table>
      <thead>
        <Table.Tr>
          <Table.Th>Name</Table.Th>
          <Table.Th>Type</Table.Th>
          <Table.Th>Default</Table.Th>
        </Table.Tr>
      </thead>
      <tbody>
        {propList.map((prop) => (
          <Table.Tr key={prop.name} id={toAnchorId(prop.name)}>
            <Table.Td>
              <code className="rounded bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 font-mono text-xs">
                {prop.name}
                {!prop.required && "?"}
              </code>
            </Table.Td>
            <Table.Td>
              <code className="rounded bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 font-mono text-xs">
                {prop.type}
              </code>
              {prop.description && (
                <p className="mt-1.5 text-gray-600 dark:text-gray-400 text-xs leading-relaxed">
                  {prop.description}
                </p>
              )}
            </Table.Td>
            <Table.Td>
              {prop.default !== undefined ? (
                <code className="rounded bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 font-mono text-xs">
                  {prop.default}
                </code>
              ) : (
                <span className="text-gray-400 dark:text-gray-500">–</span>
              )}
            </Table.Td>
          </Table.Tr>
        ))}
      </tbody>
    </Table>
  );
}
