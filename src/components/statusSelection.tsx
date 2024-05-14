import ConnectForm from '@/components/connectForm'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FormField } from '@/components/ui/form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import InvalidFeedback from './invalidFeedback'

const StatusSelection = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Status</CardTitle>
      </CardHeader>
      <ConnectForm>
      {/* @ts-ignore */}
        {({ control, formState: { errors } }) => (
          <CardContent>
            <FormField
              control={control}
              rules={{ required: true }}
              name='status'
              render={({ field }) => (
                <label className='relative'>
                  <p className="block mb-2">Goods Status <span className='text-[#EE4222]'>*</span></p>
                  <Select onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder='Select...' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem
                        value='active'
                      >
                          Active
                        </SelectItem>
                      <SelectItem
                        value='not active'
                      >
                        Not active
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.status && <InvalidFeedback message='This field is required.'/>}
                </label>
              )}
            />
          </CardContent>
        )}
      </ConnectForm>
    </Card>
  )
}

export default StatusSelection