import Axios from 'axios'


export const fetch = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_MARVEL_BASE_URL,
  params: {
    ts: 1,
    apikey: process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY,
    hash: process.env.NEXT_PUBLIC_MARVEL_HASH,
  },
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})
