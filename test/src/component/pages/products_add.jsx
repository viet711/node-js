

// export default Products_add
import { useEffect, useState } from "react";
import Container from "../Content";
import { AddProjects } from "../../api/projects";

const Products_add = () => {
  const [data, setdata] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = (event) => {
    event.preventDefault();
    const newProject = {
      name: name,
      price: price,
      description: description,
    };
    AddProjects(newProject)
    .then(({ data }) => {
        setdata([...data, newProject]);
        setName("");
        setPrice("");
        setDescription("");
    }).then((alert("Thêm thành công"))).then(window.location.href = "/")
    .catch(error => console.log(error));
  };

  return (
    <>
      <Container />
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="price"
          >
            Price
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            type="text"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="desc"
          >
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="desc"
            type="text"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default Products_add;
