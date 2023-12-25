import { useParams } from 'react-router-dom'

export const UserDetail = () => {
    const { id } = useParams();
  return (
    <div>UserDetail {id}</div>
  )
}
