import {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination";

const MyPagination = ({
  activePage,
  count,
  rowsPerPage,
  totalPages,
  setActivePage,
}) => {
  const beginning = activePage === 1 ? 1 : rowsPerPage * (activePage - 1) + 1;
  const end = activePage === totalPages ? count : beginning + rowsPerPage - 1;

  return (
    <>
      <div className="w-full items-center justify-center">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                disabled={activePage === 1}
                onClick={() => setActivePage(1)}
              >
                First
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                onClick={() => setActivePage(activePage - 1)}
                isActive={activePage === 1}
              >
                {activePage}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">
                {activePage + 1}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                onClick={() => setActivePage(activePage + 1)}
              >
                {activePage + 2}
              </PaginationLink>
            </PaginationItem>
            <PaginationEllipsis />
            <PaginationItem>
              <PaginationNext
                disabled={activePage === totalPages}
                onClick={() => setActivePage(activePage + 1)}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      {/* <p>
        Page {activePage} of {totalPages}
      </p>
      <p>
        Rows: {beginning === end ? end : `${beginning} - ${end}`} of {count}
      </p> */}
    </>
  );
};

export default MyPagination;
