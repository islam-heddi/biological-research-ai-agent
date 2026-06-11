import { useEffect } from "react"
import { api } from "../api/api"
import { GET_CHANNELS } from "../api/endpoints.constants"

function MyChannels() {

    useEffect(() => {
        api.get(GET_CHANNELS)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    },[])

  return (
    <div>MyChannels</div>
  )
}

export default MyChannels