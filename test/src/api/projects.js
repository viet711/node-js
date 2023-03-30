import instance from "./config";
const getProjects = () => {
    return instance.get("/products")
}
const RemoveProjects = (id) => {
    return instance.delete("/products/" + id)
}
const AddProjects = (products) => {
    return instance.post("/products", products)
}
export { getProjects, RemoveProjects, AddProjects } 