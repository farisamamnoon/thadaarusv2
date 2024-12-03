type TableColumn<Entry> = {
  title: string;
} & (
  | {
      Cell: ({ entry }: { entry: Entry }) => React.ReactElement;
      field?: never;
    }
  | {
      Cell?: never;
      field: Extract<keyof Entry, string>;
    }
);

type TableProps<Entry> = {
  data: Entry[];
  columns: TableColumn<Entry>[];
};

export const Table = <Entry extends { id: string }>({
  data,
  columns,
}: TableProps<Entry>) => {
  return (
    <table className="w-full caption-bottom mt-10">
      <thead className="[&_tr]:border-b">
        <tr>
          {columns.map((heading, index) => (
            <th
              className="font-semibold px-2 py-4 text-center  mb-10"
              key={heading.title + index}
            >
              {heading.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="[&_tr]:border-b [&_tr:last-child]:border-0">
        {data.map((row) => (
          <tr key={row.id}>
            {columns.map(({ field, Cell }, colIndex) => (
              <td
                className="px-2 py-4 text-center max-w-4 text-wrap"
                key={`${colIndex}${row.id}`}
              >
                {Cell ? <Cell entry={row} /> : String(row[field])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
