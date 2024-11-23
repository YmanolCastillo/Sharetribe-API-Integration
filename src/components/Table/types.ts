export interface TableProps<T> {
  data: T[];
  columns: {
    header: string;
    accessor: keyof T;
    render?: (value: any) => React.ReactNode;
  }[];
}
