import { useParams } from "react-router-dom"
import data from '../data/data.json'
export default function () {
    const { productId, category } = useParams()
    
    console.log(productId)
    const product = data.find(item => item.category === category && item.id === Number(productId))
    return(
    <section>
        <img src={product?.gallery.first.mobile} alt="" />
    </section>
    )
}