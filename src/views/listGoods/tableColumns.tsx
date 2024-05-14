import DeleteGoods from "@/components/deleteGoods"
import { Checkbox } from "@/components/ui/checkbox"
import { ColumnDef } from "@tanstack/react-table"
import ToggleStatus from "./ToggleStatus"
import { Goods } from "@/types/Goods"

type Table = Goods

const TableColumns: ColumnDef<Table>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
      />
    ),
    cell: ({ row }) => (
      <span className="flex">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      </span>
    ),
  },
  {
    accessorKey: 'previewImage',
    header: 'Image',
    cell: ({ row }) => (
      <img
        src={row.getValue('previewImage')}
        width={40}
        height={40}
        alt="Picture"
      />
    )
  },
  {
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row }) => (
      <p>
        { row.getValue('name') }
      </p>
    )
  },
  {
    accessorKey: 'price',
    header: 'Price',
    cell: ({ row }) => (
      <p>
        { row.getValue('price') }
      </p>
    )
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => (
      <ToggleStatus
        value={row.getValue('status')}
        id={row.original.id}
      />
    )
  },
  {
    accessorKey: 'action',
    header: () => (
      <span className="flex justify-end">Action</span>
    ),
    cell: ({ row }) => (
      <span className='flex justify-end'>
        <DeleteGoods
          id={row.original.id}
          previewImage={row.original.previewImage}
          images={row.original.images}
        />
      </span>
    )
  }
]

export default TableColumns