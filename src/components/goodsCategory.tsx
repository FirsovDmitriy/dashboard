import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import ConnectForm from './connectForm'
import { FormField } from './ui/form'
import InvalidFeedback from './invalidFeedback'

const GoodsCategory = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Category</CardTitle>
      </CardHeader>
      <ConnectForm>
        {({ control, formState: { errors } }) => (
          <CardContent>
            <FormField
              control={control}
              rules={{ required: true }}
              name="category"
              render={({ field }) => (
                <label className='relative'>
                  <p className="block mb-2">Goods Category <span className='text-[#EE4222]'>*</span></p>
                  <Select onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bags">
                        Bags
                      </SelectItem>
                      <SelectItem value="shoes">
                        Shoes
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.category && <InvalidFeedback message='This field is required.' />}
                </label>
              )} />
          </CardContent>
        )}
      </ConnectForm>
    </Card>
  )
}

export default GoodsCategory
