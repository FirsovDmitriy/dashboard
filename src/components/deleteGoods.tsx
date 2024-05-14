import { Dialog, DialogClose, DialogContent, DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'
import { Trash } from 'lucide-react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import query from '@/services'
import { useToast } from './ui/use-toast'
import { deleteImages } from '@/services/supabase'

type Props = {
  previewImage: string
  id: number
  images: string[]
}

const DeleteGoods = ({ id, previewImage, images }: Props) => {
  const { toast } = useToast()
  const queryClient = useQueryClient()
  const keys: string[] = []

  const getKey = (path: string): string => {
    return path?.split('storage/v1/object/public/goods/')[1]
  }

  keys.push(getKey(previewImage))

  images?.forEach(path => {
    const key = getKey(path)
    keys.push(key)
  })

  const { mutate } = useMutation({
    mutationFn: query.delete,
    
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['goods'] })
      toast({
        title: 'The goods deleted'
      })
    },
    onError: () => {
      toast({
        title: 'Semething went wrong!'
      })
    }
  })

  function handleDelete() {
    deleteImages(keys)
    mutate(id)
  }

  return <Dialog>
    <DialogTrigger>
      <Trash
        size={20}
        color='#EE4222'
      />
    </DialogTrigger>
    <DialogContent>
      <div className='flex flex-col items-center gap-3'>
        <span className='flex items-center justify-center rounded-full w-16 h-16'>
          <Trash color='#EE4222' />
        </span>
        <h4 className='scroll-m-20 text-xl font-semibold tracking-tight'>
          Delete Goods
        </h4>
        <p className='flex max-w-80 text-center'>
          Do you want to delete this goods? This action can`t be undone
        </p>
        <div className='flex justify-between w-full'>
          <DialogClose asChild>
            <Button type='button' variant='outline'>
              Cancel
            </Button>
          </DialogClose>
          <Button
            className='bg-[#EE4222] flex hover:bg-[#EE4222CC]'
            onClick={handleDelete}
          >
            Delete
          </Button>
        </div>
      </div>
    </DialogContent>
  </Dialog>
}

export default DeleteGoods
