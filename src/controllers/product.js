
import axios from "axios";
const API_URI = "http://localhost:3001/products/";

export const getAll = async (req, res) => {
  try {
    const { data: products } = await axios.get(API_URI);
    if (products.length === 0) {
      return res.send({
        message: "Danh sách sản phẩm trống",
      });
    }
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getDetail = async (req, res) => {
  try {
    const { data: product } = await axios.get(`${API_URI}${req.params.id}`);
    if (!product) {
      return res.send({
        message: "Không tìm thấy sản phẩm",
      });
    }
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const create = async (req, res) => {
  try {
    if (
      !req.body.name ||
      !req.body.price ||
      !req.body.description ||
      !req.body.image
    ) {
      return res.status(400).json({
        message: "Vui lòng cung cấp đầy đủ thông tin sản phẩm",
      });
    }
    const { data: product } = await axios.post(API_URI, req.body);
    if (!product) {
      return res.send({
        message: "Thêm sản phẩm không thành công",
      });
    }
    return res.json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    await axios.delete(`${API_URI}${req.params.id}`);
    return res.status(200).json({
      message: "Sản phẩm đã được xóa thành công",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const { data: product } = await axios.put(
      `${API_URI}${req.params.id}`,
      req.body
    );
    if (!product) {
      return res.send({
        message: "Update sản phẩm không thành công",
      });
    }
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const PATCH  = async (req, res) => {
  try {
    const { data: product } = await axios.patch(
      `${API_URI}${req.params.id}`,
      req.body
    );
    // console.log( product);
    if (!product) {
      return res.send({
        message: "Cập nhật sản phẩm không thành công",
      });
    }
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
