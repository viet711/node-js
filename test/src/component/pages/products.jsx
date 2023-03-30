import { useEffect, useState } from "react";
import { RemoveProjects, getProjects } from "../../api/projects";
import Container from "../Content";
import { Link, Outlet } from "react-router-dom"
const Products = () => {

    const [data, setdata] = useState([])

    useEffect(() => {
        getProjects().then(({ data }) => setdata(data))
    }, [])
    const handleRemove = (id, name) => {
        if (window.confirm(`Bạn có chắc muốn xóa dự án ${name}?`)) {
            RemoveProjects(id).then(() => {
                setdata(data.filter((projects) => projects.id != id));
            }).catch(error => console.log(error));
        }

    }

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
                            <td className="py-3 px-6 text-center">  <button onClick={() => handleRemove(data._id)} data-name={data.name} data-id={data.id} className="bg-danger "> Remove</button>
                                {/* <a href=""> <button data-name={data.name} className="bg-success btn-update border-0 p-2 text-lime-50 rounded-md "> Update</button></a> */}
                            </td>
                        </tr>
                    </>
                )}
            </tbody>
        </table >
    </>
}

export default Products