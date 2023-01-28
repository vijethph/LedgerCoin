import mongoose, { Model, Schema } from "mongoose";
import bcrypt from "bcryptjs";

export interface IUser {
  email: string;
  username: string;
  password: string;
  creationDate: Date;
}

export interface IUserMethods {
  isValid(hashedPassword: string): boolean;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export interface IUserModel extends Model<IUser, {}, IUserMethods> {
  hashPassword(password: string): string;
}

export const userSchema = new Schema<IUser, IUserModel, IUserMethods>({
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  creationDate: {
    type: Date,
    required: true,
  },
});

userSchema.static("hashPassword", function hashPassword(password: string) {
  return bcrypt.hashSync(password, 10);
});
userSchema.method("isValid", function isValid(hashedPassword: string): boolean {
  return bcrypt.compareSync(hashedPassword, this.password);
});

export const isPasswordValid = (plainPassword: string, hashedPassword: string) => {
  return bcrypt.compareSync(plainPassword, hashedPassword);
};

export const hashUserPassword = (password: string) => bcrypt.hashSync(password, 10);

export const User = mongoose.model<IUser, IUserModel>("User", userSchema);
