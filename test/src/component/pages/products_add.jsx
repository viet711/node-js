import { useEffect } from "react"
import Container from "../Content"

const Products_add = () => {
    useEffect(() => {

    })
    return <>
        <Container></Container>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" for="name">
                    Name
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter name" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" for="price">
                    Price
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="price" type="text" placeholder="Enter price" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" for="desc">
                    Description
                </label>
                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="desc" type="text" placeholder="Enter description"></textarea>
            </div>
            <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Add
                </button>
            </div>
        </form>
    </>
}

export default Products_add