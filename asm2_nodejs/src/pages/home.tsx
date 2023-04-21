
import { getAll } from "../api/product"
import { IProduct } from "../models"
import { useEffect, useState } from "react"
import Slider from "../components/slider"
import Products from "../components/Products"


const Home = () => {

    const [products, setProducts] = useState<IProduct[]>([])

    const fetchProduct = async () => {
        try {
            const { data } = await getAll()
            setProducts(data)

        } catch (err) {

        }
    }

    useEffect(() => {
        fetchProduct()
    }, [])


    return <>
     <Slider/>
        <h1>Điện thoại nổi bật</h1>
        <div className="grid grid-cols-7 gap-5">
        {products.map(product => <Products
                data={product}
                key={product.id} />)}
        
        
 

        </div>
        

    </>
}

export default Home

