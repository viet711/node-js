
import {useForm} from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import {useParams, useNavigate} from 'react-router-dom'
import { getById,update } from '../../../api/product';

import { useEffect } from 'react';
import { updateForm, updateSchema } from '../../../models';


const edit = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const { register, watch, handleSubmit, formState: { errors } } = useForm<updateForm>({
    resolver: yupResolver(updateSchema),
    defaultValues: async () => {
        if (id) {
            return await fetchProductById(id)
        }
    }

})


  const onSubmit = async (data: updateForm) => {
      try {
          if (id) {
              const response = await update(id, data)
              console.log(response);
              navigate('/admin')
          }
      }catch(err) {
          console.log(err);
          
      }
      
  }

  const fetchProductById = async (id: string) => {
      const {data} = await getById(id)
      return data
      
  }
  return <>
  {/* <section className="bg-gray-100">
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg border:px-8">
      <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg border:grid-cols-5">
        <div className="lg border:col-span-2 lg border:py-12">
          
        </div>
  
        <div className="rounded-lg border bg-white p-8 shadow-lg border lg border:col-span-3 lg border:p-12">
          <form action="" className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label>Name</label>
              <input
                className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                {...register("name")}
              />
              <p className='text-red-600 text-[10px]'>
                {errors.name && errors.name.message}
              </p>
            </div>
  
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label>Gía</label>
                <input
                  className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                  {...register("price")}
                  type="number"
                />
                <p className='text-red-600 text-[10px]'>
                {errors.price && errors.price.message}
              </p>
              </div>
  
              <div>
                <label>Giảm giá</label>
                <input
                  className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                  {...register("original_price")}
                  type="number"
                />
                <p className='text-red-600 text-[10px]'>
                {errors.original_price && errors.original_price.message}
              </p>
              </div>
            </div>
  
  
            <div>
              <label>Mô tả</label>
  
              <textarea
                className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                {...register("description")}
              ></textarea>
              <p className='text-red-600 text-[10px]'>
                {errors.description && errors.description.message}
              </p>
            </div>
  
            <div className="mt-4">
              <button
                type="submit"
                className="inline-block w-full rounded-lg border bg-black px-5 py-3 font-medium text-white sm:w-auto"
              >
                Cập nhật
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section> */}
<form action="" className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col md:flex-row w-full" >

                <div className="md:w-2/5 p-4">
                    <h2 className="text-xl font-bold mb-4">Update ảnh sản phẩm</h2>
                    <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                     
                        <img width={250} src={watch(`images.${0}.base_url`)} alt="Product image" />
                       
                    </div>
                    <span>Link img</span>
                    <input type="text" {...register(`images.${0}.base_url`)} className="mt-4 p-2 rounded-lg border border-gray-300 w-full" />

                </div>

                <div className="w-full">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="product-name">
                            Tên sản phẩm
                        </label>
                        <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="product-name" type="text"  {...register("name")} />
                        <p className='text-red-600 text-[10px]'>
                            {errors.name && errors.name.message}
                        </p>
                    </div>
                    <div className="price flex">
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="product-price">
                                Giá gốc sản phẩm
                            </label>
                            <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="product-price" type="number"  {...register("original_price")} />
                            <p className='text-red-600 text-[10px]'>
                                {errors.original_price && errors.original_price.message}
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="product-price">
                                Giá Khuyến Mãi
                            </label>
                            <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="product-price" type="number"  {...register("price")} />
                            <p className='text-red-600 text-[10px]'>
                                {errors.price && errors.price.message}
                            </p>
                        </div>
                    </div>
                    
                    <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="product-description">
                            Đặc Điểm Nổi Bật
                        </label>
                        <textarea rows={4} className="appearance-none block w-full   text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="product-description"  {...register("description")} ></textarea>
                        <p className='text-red-600 text-[10px]'>
                            {errors.description && errors.description.message}
                        </p>
                    </div>
                    <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="product-description">
                            Mô tả dài
                        </label>
                        <textarea rows={4} className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="product-description" ></textarea>
                    </div>
                    <button className="bg-[#00B0D7] hover:bg-blue-400 p-2 rounded-md">Cập nhật</button>
                </div>

            </div >
        </form>

  
  </>
}

export default edit