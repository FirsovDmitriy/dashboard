import React from 'react'
import {
  PaginationState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'
import TableColumns from './tableColumns'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useSearchParams } from 'react-router-dom'
import { MoveLeft, MoveRight } from 'lucide-react'
import { Goods } from '@/types/Goods'

interface GoodsTableProps {
  goods: Goods[]
}

const GoodsTable = ({ goods }: GoodsTableProps) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const page = searchParams.get('page') ?? 1

  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: Number(page) - 1,
    pageSize: 10,
  })

  const table = useReactTable({
    data: goods,
    columns: TableColumns,
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,

    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      pagination
    }
  })

  React.useEffect(() => {
    const currentPage = pagination.pageIndex + 1
    setSearchParams({
      page: currentPage.toLocaleString()
    })
  }, [pagination, setSearchParams])

  return (
    <React.Fragment>

      <div className="flex items-center py-4">
        <Input
          placeholder="Search..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div>

      <Table>
        <TableHeader>
          {table.getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map(row => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              {/* <TableCell colSpan={columns?.length} className="h-24 text-center">
                No results.
              </TableCell> */}
            </TableRow>
          )}
        </TableBody>
      </Table>

      <div className="flex items-center justify-end space-x-2 py-4 mt-auto">
        <div className="space-x-2">
          <Button
            disabled={!table.getCanPreviousPage()}
            variant="ghost"
            size="sm"
            onClick={() => table.previousPage()}
          >
            <MoveLeft />
          </Button>
          <Button
            onClick={() => table.nextPage()}
            variant="ghost"
            disabled={!table.getCanNextPage()}
            size="sm"
          >
            <MoveRight />
          </Button>
        </div>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount().toLocaleString()}
          </strong>
        </span>
      </div>
    </React.Fragment>
  )
}

export default GoodsTable
