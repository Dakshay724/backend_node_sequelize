import Role from "../../models/role";
import { IRole } from "../../utils/interfaces/role";

const createRole = async (request: any): Promise<Role> => {
  return await Role.create({ ...request.body });
};
const editRole = async (request: any): Promise<IRole | any> => {
  console.log(request.params.id, "ser");
  return await Role.update(
    { ...request.body },
    {
      where: { id: parseInt(request.params.id) },

      returning: true,
    }
  );
};
const getRole = async (request: any): Promise<IRole[] | any> => {
  return await Role.findAndCountAll({ ...request.body });
};
const deleteRole = async (request: any): Promise<IRole | any> => {
  return await Role.destroy(request.param.id);
};

export default { createRole, deleteRole, getRole, editRole };
