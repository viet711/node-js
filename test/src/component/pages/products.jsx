import { useEffect, useState } from "react";
import { RemoveProjects, getProjects } from "../../api/projects";
import Container from "../Content";
import { Link } from "react-router-dom"
const Products = () => {

    const [data, setdata] = useState([])

    useEffect(() => {
        getProjects().then(({ data }) => setdata(data))
    }, [data])
    const handleRemove = (id, name) => {
        if (window.confirm(`Bạn có chắc muốn xóa dự án ${name}?`)) {
            RemoveProjects(id).then(() => {
                setdata(data.filter((projects) => projects.id != id));
            }).catch(error => console.log(error));
        }

    }
    const handleEdit = (id) => {
        window.location.href = "/ProductsEdit" + id;
      };


    return <>

        <Container></Container>
        <table className="min-w-max w-full table-auto" >
            <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">ID</th>
                    <th className="py-3 px-6 text-left">Name</th>
                    <th className="py-3 px-6 text-center">Price</th>
                    <th className="py-3 px-6 text-center">Description</th>
                    <th className="py-3 px-6 text-center">Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map((data, index) =>
                    <>

                        <tr className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="py-3 px-6 text-left whitespace-nowrap">{index + 1}</td>
                            <td className="py-3 px-6 text-left">
                                <div className="flex items-center">
                                    <div className="mr-2">

                                    </div>
                                    <span>{data.name}</span>
                                </div>
                            </td>
                            <td className="py-3 px-6 text-center">{data.price}</td>
                            <td className="py-3 px-6 text-center">{data.description}</td>
                            <td classNameName="py-3 px-6 text-center">  <button onClick={() => handleRemove(data._id)} data-name={data.name} data-id={data._id} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-2"> Remove</button>
                                <button onClick={() => handleEdit(data._id)} data-name={data.name} data-id={data._id} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-2">   Update
                                </button>

                            </td>
                        </tr>
                    </>
                )}
            </tbody>
        </table >
    </>
}

export default Products