import { useState } from 'react'

type Method = 'POST' | 'GET';

export const useFetch = (type:Method, url:string, data:any = null) => {

  const MAIN_URL = 'http://localhost:3000'
  const COMPLETE_URL = `${MAIN_URL}${url}`

  const [loading, setLoading] = useState<Boolean>(false)
  const [response, setResponse] = useState<any>({})

  const useLazyFetch = async () => {
    setLoading(true);
    if(type === 'GET') {
      const resp = await fetch(COMPLETE_URL)
      const data = resp.json()
      setResponse(data)
      setLoading(false);
      return data
    }

    // Proccess to make if the method is 'POST'
    const resp = await fetch(COMPLETE_URL, {
      method: type,
      body: data
    })
    const dataPost = resp.json()
    setLoading(false);
    setResponse(dataPost)
    return dataPost
  }

  return [loading, response, useLazyFetch]
}
