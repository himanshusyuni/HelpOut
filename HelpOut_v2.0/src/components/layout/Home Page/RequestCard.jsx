import * as React from "react";
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import MyPagination from "./MyPagination";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

// Dummy data
const data = [
  {
    id: "m5gr84i9",
    amount: 316,
    name: "success",
    email: "ken99@yahoo.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    name: "success",
    email: "Abe45@gmail.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    name: "processing",
    email: "Monserrat44@gmail.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    name: "success",
    email: "Silas22@gmail.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    name: "failed",
    email: "carmella@hotmail.com",
  },
];

// Dummy column definition
const columns = [
  {
    id: "select",

    cell: ({ row }) => (
      <div className="pl-3">
        <Avatar>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: () => {
      return (
        <div className="flex pb-3 justify-center md:text-xl lg:text-2xl">
          Name
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize md:text-xl lg:text-2xl">
        {row.getValue("name")}
      </div>
    ),
  },
  {
    accessorKey: "email",
    header: () => {
      return (
        <div className="flex pb-3 justify-center md:text-xl lg:text-2xl">
          Description
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase md:text-xl lg:text-2xl">
        {row.getValue("email")}
      </div>
    ),
  },
  {
    accessorKey: "amount",
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="flex pb-3 justify-center md:text-xl lg:text-2xl"
          >
            Comission
            <CaretSortIcon className="ml-2 md:size-4 lg:size-7" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "INR",
      }).format(amount);

      return (
        <div className="text-center rounded-lg font-medium md:text-xl lg:text-2xl">
          <Button
            size="lg"
            variant="outline"
            className="font-md md:text-xl lg:text-2xl hover:bg-white hover:cursor-auto border-none"
          >
            {formatted}
          </Button>
        </div>
      );
    },
  },
  {
    id: "actions",
    header: () => {
      return (
        <div className="flex pb-3 justify-center md:text-xl lg:text-2xl">
          Details
        </div>
      );
    },
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original; //to use as a copy

      return (
        <div className="flex justify-center">
          <Button
            className="font-normal md:text-xl lg:text-2xl bg-purple-500 hover:bg-green-500"
            size="lg"
          >
            HelpOut
          </Button>
        </div>
      );
    },
  },
];

// Component using the dummy data and columns
export function RequestCard() {
  const [sorting, setSorting] = React.useState([]);
  const [columnFilters, setColumnFilters] = React.useState([]);
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full md:max-w-3xl lg:max-w-5xl p-4">
      <div className="w-full flex justify-evenly items-center pt-4 pb-6 bg-white rounded-t-lg">
        <Input
          placeholder="Filter emails..."
          value={
            (table.getColumn("email") &&
              table.getColumn("email").getFilterValue()) ||
            ""
          }
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="grow border-2 border-indigo-500 md:text-xl lg:text-2xl"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="rounded-lg md:text-xl lg:text-2xl font-normal"
            >
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-b-lg shadow-xl bg-white">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  className="hover:bg-gray-100 cursor-auto"
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <MyPagination table={table} />
      </div>
    </div>
  );
}
