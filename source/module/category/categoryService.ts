import Category from "../../models/category";

const createCategory = async (request: any): Promise<Category> => {
  return await Category.create({ ...request.body });
};

const editCategory = async (request: any): Promise<Category | any> => {
  return await Category.update(
    { ...request.body },
    {
      where: { id: parseInt(request.params.id) },
      returning: true,
    }
  );
};

const deleteCategory = async (request: any): Promise<void> => {
  await Category.destroy({ where: { id: parseInt(request.params.id) } });
};

const getCategoryById = async (id: number): Promise<Category | null> => {
  return await Category.findByPk(id);
};

const getAllCategories = async (): Promise<Category[]> => {
  return await Category.findAll();
};

export default {
  createCategory,
  editCategory,
  deleteCategory,
  getCategoryById,
  getAllCategories,
};
