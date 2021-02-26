import { useState } from 'react'

type Method = 'POST' | 'GET' | 'post' | 'get';

export const useFetch = (type:Method, url:string, requestData:object = {}) => {

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
    setLoading(true)
    const formData = new FormData()
    for (let key in requestData) {
      formData.append(key, requestData[key])
    }

    const resp = await fetch(COMPLETE_URL, {
      method: type,
      body: formData
    })
    const dataPost = resp.json()
    setLoading(false);
    setResponse(dataPost)
    return dataPost
  }

  return [loading, response, useLazyFetch]
}
