import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from './ui/card'
import { Input } from './ui/input'
import ConnectForm from './connectForm'
import InvalidFeedback from './invalidFeedback'

const Media: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Media</CardTitle>
      </CardHeader>
      <ConnectForm>
        {({ register, formState: { errors } }) => (
          <CardContent>
            <div className="flex flex-col gap-4">
              <label className='relative'>
                <p className="block mb-2">Add preview image <span className='text-[#EE4222]'>*</span></p>
                <Input
                  placeholder="Add preview image"
                  type="file"
                  accept='image/*'
                  { ...register('previewImage', { required: true }) }
                />
                {errors.previewImage && <InvalidFeedback message='This field is required.' />}
              </label>

              <label className='relative'>
                <p className="block mb-2">Add images <span className='text-[#EE4222]'>*</span></p>
                <Input
                    multiple
                    type="file"
                    accept='image/*'
                    { ...register('images', { required: true }) }
                  />
                  {errors.images && <InvalidFeedback message='This field is required.' />}
              </label>

            </div>
          </CardContent>
        )}
      </ConnectForm>
    </Card>
  )
}

export default Media
