import User from "../../models/user";
import bcrypt from "bcrypt";
import appError from "../../utils/helpers/appError";
import status from "../../utils/helpers/status.json";

const registerUser = async (request: any): Promise<User[] | any> => {
  try {
    const {
      email,
      name,
      roleId,
      password,
    }: { email: string; password: string; name: string; roleId: number } =
      request.body;
    // if(roleId != 1 && )
    const existing = await User.findOne({ where: { email: email } });
    if (existing) {
      throw new appError(
        status.CONFLICT,
        `User ${existing.email} already exists`
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    return await User.create({
      email,
      password: hashedPassword,
      roleId,
      name,
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
export default { registerUser, loginUser, findOne };
