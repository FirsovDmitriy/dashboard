import ConnectForm from '@/components/connectForm'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import InvalidFeedback from './invalidFeedback'

const GeneralInfo = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>General information</CardTitle>
      </CardHeader>
      <ConnectForm>
        {/* @ts-ignore */}
        {({ register, formState: { errors } }) => (
          <CardContent>
            <label className='relative'>
              <p className="block mb-2">Goods name <span className='text-[#EE4222]'>*</span></p>
              <Input
                placeholder="Type goods name here..."
                type="text"
                {...register('name', { required: true })}
                autoComplete='off'
              />
              {errors.name && <InvalidFeedback message='This field is required.' />}
            </label>
          </CardContent>
        )}
      </ConnectForm>
    </Card>
  )
}

export default GeneralInfo
