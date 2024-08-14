import User from "../../models/user";
import bcrypt from "bcrypt";
import appError from "../../utils/helpers/appError";
import status from "../../utils/helpers/status.json";
import Role from "../../models/role";
import constant from "../../utils/helpers/constant";

const registerUser = async (request: any): Promise<User> => {
  try {
    const {
      firstName,
      lastName,
      email,
      profileImage,
      mobile,
      password,
      roleId,
    }: User = request.body;
    // if(roleId != 1 && )
    const existing = await User.findOne({ where: { email: email } });
    if (existing) {
      throw new appError(
        status.CONFLICT,
        `User ${existing.email} already exists`
      );
    }

    const customerRole = await Role.findOne({
      where: { name: constant.ROLES.CUSTOMER },
    });
    if (!customerRole) {
      throw new appError(status.NOT_FOUND, "Customer role not found");
    }

    if (roleId !== customerRole.id) {
      throw new appError(
        status.FORBIDDEN,
        "Only Customer role is allowed for new users"
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    return await User.create({
      firstName,
      lastName,
      email,
      profileImage,
      mobile,
      password: hashedPassword,
      roleId: customerRole.id,
    });
  } catch (error: any) {
    throw new appError(error.status, error.message);
  }
};
const loginUser = async (request: any): Promise<User[] | any> => {
  try {
    const { email, password } = request.body;

    const user = await User.findOne({ where: { email: email } });

    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    } else {
      throw new appError(status.NOT_FOUND, "User not found");
    }
  } catch (error: any) {
    throw new appError(error.status, error.message);
  }
};

const findOne = async (request: any): Promise<User[] | any> => {
  try {
    const { email, password } = request.body;

    const user = await User.findOne({ where: { email: email } });

    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    } else {
      throw new appError(status.NOT_FOUND, "User not found");
    }
  } catch (error: any) {
    throw new appError(error.status, error.message);
  }
};

const approveRequest = async (request: any): Promise<User[] | any> => {
  try {
    const { email, password } = request.body;

    const user = await User.findOne({ where: { email: email } });

    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    } else {
      throw new appError(status.NOT_FOUND, "User not found");
    }
  } catch (error: any) {
    throw new appError(error.status, error.message);
  }
};
export default { registerUser, loginUser, findOne, approveRequest };
