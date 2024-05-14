import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import ConnectForm from './connectForm'
import InvalidFeedback from './invalidFeedback'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'

const Pricing = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Pricing</CardTitle>
      </CardHeader>
      <ConnectForm>
        {/* @ts-ignore */}
        {({ register, formState: { errors } }) => (
          <CardContent>
            <label className="relative mb-3 block">
              <p className="block mb-2">Base Price <span className='text-[#EE4222]'>*</span></p>
              <Input
                placeholder="Type base price here..."
                {...register('price', { required: true })}
              />
              {errors.price && <InvalidFeedback message='This field is required.' />}
            </label>
            <div className="grid grid-cols-2 grid-rows-2 gap-3">
              <label>
                <span className="block mb-2">Discount Type</span>
                <Select disabled={true}>
                  <SelectTrigger>
                    <SelectValue placeholder='Select...' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='test'>Test</SelectItem>
                  </SelectContent>
                </Select>
              </label>
              <label>
                <span className="block mb-2">Tax Class</span>
                <Select disabled={true}>
                  <SelectTrigger>
                    <SelectValue placeholder='Select...' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='test'>Test</SelectItem>
                  </SelectContent>
                </Select>
              </label>
              <label>
                <span className="block mb-2">Discount Precentage (%)</span>
                <Input
                  placeholder="Type dicount precentage..."
                  { ...register('discount') }
                />
              </label>
              <label>
                <span className="block mb-2">VAT Amount (%)</span>
                <Input placeholder="Type VAT Amount..." disabled={true} />
              </label>
            </div>
          </CardContent>
        )}
      </ConnectForm>
    </Card>
  )
}

export default Pricing
