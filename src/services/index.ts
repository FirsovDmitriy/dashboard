import instance from './api'

const query = {
  get: async () => {
    try {
      const resp = await instance.get(`/goods`)
      return resp.data
    } catch (error) {
      console.log('Error...')
    }
    finally {
      console.log('You are offline')
    }
  },

  add: async (data: object) => {
    try {
      const resp = await instance.post('/goods', {
        ...data
      })
      return resp
    } catch (error) {
      console.log('Error...')
    }
  },

  update: async (arg: { id:number; data: any }) => {
    console.log('id', arg.id)
    try {
      const resp = await instance.patch(`/goods/${ arg.id }`, arg.data)
      return resp.data
    } catch (error) {
      console.log('Error update')
    }
  },

  delete: async (id: number) => {
    try {
      const resp = await instance.delete(`/goods/${ id }`)
      return resp.data

    } catch (error) {
      console.log('Error delete...')
    }
  },
}

export default query
