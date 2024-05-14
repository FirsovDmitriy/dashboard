import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import GoodsTable from './goodsTable'
import query from '@/services'

const ListGoods = () => {

  const { data, isLoading } = useQuery({
    queryKey: ['goods'],
    queryFn: query.get,
  })

  return (
    <React.Fragment>
      <div className="flex justify-between">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Goods
        </h2>
        <Button asChild>
          <Link to="/add">Add goods</Link>
        </Button>
      </div>

      {isLoading ? (
        <div className="flex-auto grid">
          <p className="place-self-center scroll-m-20 text-xl font-semibold tracking-tight">
            Loading...
          </p>
        </div>
      ) : (
        <Card className="flex-auto flex flex-col">
          {data?.length
            ? <CardContent className="flex-auto flex flex-col">
                <GoodsTable
                  goods={data}
                />
              </CardContent>
            : <CardHeader className='items-center'>
                <CardTitle>
                  Empty
                </CardTitle>
              </CardHeader>}
        </Card>
      )}
    </React.Fragment>
  )
}

export default ListGoods
