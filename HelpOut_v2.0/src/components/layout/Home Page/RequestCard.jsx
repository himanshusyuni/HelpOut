import * as React from "react";
import { useState, useEffect } from "react";
import { Filter } from "lucide-react";
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
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Skeleton } from "@/components/ui/skeleton"

const calculateRemainingTime = (deadline) => {
  const deadlineDate = new Date(deadline);
  const currentDate = new Date();
  const timeDifference = deadlineDate - currentDate;

  const remainingDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const remainingHours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const remainingMinutes = Math.floor(
    (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
  );
  const remainingSeconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  return `${remainingDays} days, ${remainingHours} hours, ${remainingMinutes} minutes, ${remainingSeconds} seconds`;
};

// ...

const RemainingTime = ({ deadline }) => {
  const [remainingTime, setRemainingTime] = useState(
    calculateRemainingTime(deadline)
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime(calculateRemainingTime(deadline));
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [deadline]);

  return <div>Remaining time is {remainingTime}</div>;
};

// Dummy data
const data = [
  {
    id: "m5gr84i9",
    amount: 316,
    name: "success",
    email: "ken99@yahoo.com",
    deadline: "9:15 2024.10.01",
  },
  {
    id: "m5gr84i9",
    amount: 316,
    name: "success",
    email: "ken99@yahoo.com",
    deadline: "9:05 2024.10.01",
  },
  {
    id: "m5gr84i9",
    amount: 316,
    name: "success",
    email: "ken99@yahoo.com",
    deadline: "9:05 2024.10.01",
  },
  {
    id: "m5gr84i9",
    amount: 316,
    name: "success",
    email: "ken99@yahoo.com",
    deadline: "9:05 2024.10.01",
  },
  {
    id: "m5gr84i9",
    amount: 316,
    name: "success",
    email: "ken99@yahoo.com",
    deadline: "9:05 2024.10.01",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    name: "success",
    email: "Abe45@gmail.com",
    deadline: "9:10 2024.10.01",
  },
  {
    id: "derv1ws0",
    amount: 837,
    name: "processing",
    email: "Monserrat44@gmail.com",
    deadline: "9:15 2024.10.01",
  },
  {
    id: "5kma53ae",
    amount: 874,
    name: "success",
    email: "Silas22@gmail.com",
    deadline: "9:20 2024.10.01",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    name: "failed",
    email: "carmella@hotmail.com",
    deadline: "9:25 2024.10.01",
  },
];

// Dummy column definition
const columns = [
  {
    id: "select",

    cell: ({ row }) => (
      <div className="pl-3">
        <Avatar className="lg:size-15 outline outline-1 ring-offset-2">
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
          Request
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
    accessorKey: "deadline",
    header: ({column}) => {
      return (
        <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="flex pb-5 justify-center md:text-xl lg:text-2xl hover:bg-white"
          >
            Deadline
            <CaretSortIcon className="ml-2 md:size-4 lg:size-7" />
          </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize md:text-xl lg:text-2xl text-center">
        <HoverCard>
          <HoverCardTrigger>
            <div className="flex flex-col">
              {row
                .getValue("deadline")
                .split(" ")
                .map((value, index) => (
                  <div key={index}>{value}</div>
                ))}
            </div>
          </HoverCardTrigger>
          <HoverCardContent>
            <div>
              <RemainingTime deadline={row.getValue("deadline")} />
            </div>
          </HoverCardContent>
        </HoverCard>
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
            className="flex pb-5 justify-center md:text-xl lg:text-2xl hover:bg-white"
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
        <div className="text-center rounded-lg font-normal md:text-xl lg:text-2xl">
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
            variant="outline"
            className="font-normal hover:text-white md:text-xl lg:text-2xl hover:bg-purple-5008ym"
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
    <div className="w-full p-4">
      <div className="w-full flex justify-evenly items-center pt-6 pb-6 bg-white rounded-t-lg items-center ">
        <Input
          size="lg"
          placeholder="Filter Requests"
          value={
            (table.getColumn("email") &&
              table.getColumn("email").getFilterValue()) ||
            ""
          }
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="grow md:text-xl lg:text-2xl" 
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="rounded-lg md:text-xl lg:text-2xl font-normal"
              size="lg"
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
      </div>
    </div>
  );
}
