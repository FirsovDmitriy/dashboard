import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import Media from '@/components/media'
import GoodsCategory from '@/components/goodsCategory'
import Pricing from '@/components/pricing'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { uploadFile } from '@/services/supabase'
import StatusSelection from '@/components/statusSelection'
import query from '@/services'
import GeneralInfo from '@/components/generalInfo'
import { useToast } from '@/components/ui/use-toast'
import React from 'react'

interface FormState {
  name: string
  previewImage: FileList
  images: FileList
  discount: number
  status: boolean
}

const AddGoods = () => {
  const methods = useForm<FormState>()
  const navigate = useNavigate()
  const { toast } = useToast()

  const { mutate, isPending } = useMutation({
    mutationFn: query.add,
  })

  const onSubmit: SubmitHandler<FormState> = async data => {
    const slug = data.name
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')

    const preloadImages = Array.from(data.images).map(item =>
      uploadFile(slug, item)
    )

    const previewImage = data.previewImage[0]

    try {
      const previewImageUpload = await uploadFile(slug, previewImage)
      const allImagesUpload = await Promise.all(preloadImages)

      mutate({
        ...data,
        images: allImagesUpload,
        previewImage: previewImageUpload,
        slug,
      })

      navigate('/')
    } catch (error) {
      toast({
        title: 'Error...',
      })
    }
  }

  return (
    <React.Fragment>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} action="#">
          <div className="flex justify-between">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              Add goods
            </h2>
            <div className="flex gap-2">
              <Button asChild variant="ghost">
                <Link to="/">Cancel</Link>
              </Button>
              <Button>Add goods</Button>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            <div className="flex flex-col gap-6 col-span-8">
              <GeneralInfo />
              <Media />
              <Pricing />
            </div>
            <div className="flex flex-col gap-6 col-span-4">
              <GoodsCategory />
              <StatusSelection />
            </div>
          </div>
        </form>
      </FormProvider>

      {isPending && (
        <div className="grid absolute w-full h-full top-0 left-0 z-20 bg-black/50">
          <p className="place-self-center scroll-m-20 text-xl font-semibold tracking-tight text-slate-100">
            Loading...
          </p>
        </div>
      )}
    </React.Fragment>
  )
}

export default AddGoods
