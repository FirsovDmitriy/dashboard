import supabase from '@/supabaseClient'

const STORAGE_URL =
  'https://pbdiaentiohjckbhjqml.supabase.co/storage/v1/object/public/goods/'

export function uploadFile(name: string, picture: File) {
  const file: string = `${ name }/${ picture.name }`
  return new Promise((resolve, reject) => {
    supabase.storage
      .from('goods')
      .upload(file, picture)
      .then(({ data, error }) => {
        if (error) reject(error)

        const url = `${ STORAGE_URL }${ data?.path }`
        resolve(url)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export async function deleteImages(key: string[]) {
  try {
    const { data, error } = await supabase.storage.from('goods').remove(key)

    if(error) throw error
    console.log('delete', data)
  } catch (error) {
    console.log('Supabase. Delelete object')
  }
}
