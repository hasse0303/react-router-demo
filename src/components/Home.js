import { useNavigate } from "react-router-dom"
export const Home = () => {
    const navigate = useNavigate()
  return (
    <>
        <div>Home</div>
        <button onClick={() => navigate('order-summary')}>Order Summary</button>
    </>
  )
}
