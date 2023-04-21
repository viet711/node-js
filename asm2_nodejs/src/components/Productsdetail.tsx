import { useEffect, useState } from "react"
import {useParams} from 'react-router-dom'

import { IProduct } from "../models"
import { getById } from "../api/product"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';


const Productsdetail = () => {
    const [product, setProduct] = useState<IProduct>({} as IProduct)
    const {id} = useParams()
    const [visible, setVisible] = useState(false);

    const fetchProductById = async () => {
        const {data} = await getById( id! )
        setProduct (data)
        // console.log(data);
        
    }
    useEffect(()=>{
        fetchProductById()
    },[])
    
    return (    
        <>
            <h2 className="text-lg ml-24 py-4 font-semibold text-gray-800">
                {product.name}
            </h2>
            <hr className="" />
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="lg:flex  lg:justify-between">
                    <div className="flex-1 min-w-0">
                        <img
                            className=" w-[358px] object-cover lg:h-full lg:w-96"
                            src= {product.images?.[0]?.base_url}
                            alt="Product Image"
                        />
           
                    </div>
                    <div className=" flex lg:mt-0 lg:ml-10 ">
                        <div className="max-w-2xl flex flex-col justify-between">
                            <div className="mt-4">
                                <span className="mt-1 text-2xl  font-semibold text-red-500">
                                    {product.price}
                                </span>{" "}
                                <span className="mt-1 ml-1 text-sm font-semibold text-gray-500">
                                    {product.price}
                                </span>
                                <p className=" text-sm font-sans text-gray-600">
                                    {product.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-10 ml-24 flex">
                    <div className="flex -mx-2">
                        <div className="w-1/12 h-12 ">
                            <img
                                className=" w-full object-cover cursor-pointer"
                                src={product.images?.[0]?.base_url}
                                alt="Thumbnail 1"
                            />
                        </div>
                        <div className="w-1/12 h-12">
                            <img
                                className=" w-full  object-cover cursor-pointer"
                                src={product.images?.[0]?.base_url}
                                alt="Thumbnail 2"
                            />
                        </div>
                        <div className="w-1/12 h-12 ">
                            <img
                                className=" w-full object-cover cursor-pointer"
                                src={product.images?.[0]?.base_url}
                                alt="Thumbnail 3"
                            />
                        </div>
                        <div className="w-1/12 h-12 ">
                            <img
                                className=" w-full object-cover cursor-pointer"
                                src={product.images?.[0]?.base_url}
                                alt="Thumbnail 4"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 w-96 m-auto">
                    <div className="">

                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold text-sm py-2 px-14 rounded">
                            Mua ngay
                        </button>
                    </div>

                 

                </div>
                </div>
                <div className="flex flex-col mt-10 items-center justify-start  bg-gray-100 p-4">
                    <h1 className="text-red-500 text-lg font-bold mb-4">
                        ĐẶC ĐIỂM NỔI BẬT
                    </h1>
                    <p className=" mb-2">
                    Camera chất lượng, bắt trọn từng khoảng khắc - Cụm 4 camera với cảm biến chính lên đến 108 MP
                    </p>
                    <p className="mb-2">
                    Thưởng thức không gian giải trí cực đỉnh - Màn hình lớn 6.7 inch, độ phân giải Full HD+, 120Hz mượt mà                    </p>
                </div>
            </div>
        </>
    );
};

export default Productsdetail;
