import { createBrowserRouter } from 'react-router-dom'
import ListGoods from '@/views/listGoods/listGoods'
import Layout from '@/components/layout'
import AddGoods from '@/views/addGoods/addGoods'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ListGoods />
      },
      {
        path: '/add',
        element: <AddGoods />
      }
    ]
  }
])

export default appRouter