import Product from "../../models/product";

const createProduct = async (request: any): Promise<Product> => {
  return await Product.create({ ...request.body });
};

const editProduct = async (request: any): Promise<Product | any> => {
  return await Product.update(
    { ...request.body },
    {
      where: { id: parseInt(request.params.id) },
      returning: true,
    }
  );
};

const deleteProduct = async (request: any): Promise<void> => {
  await Product.destroy({ where: { id: parseInt(request.params.id) } });
};

const getProductById = async (id: number): Promise<Product | null> => {
  return await Product.findByPk(id, { include: ["category"] });
};

const getAllProducts = async (): Promise<Product[]> => {
  return await Product.findAll({ include: ["category"] });
};

export default {
  createProduct,
  editProduct,
  deleteProduct,
  getProductById,
  getAllProducts,
};
