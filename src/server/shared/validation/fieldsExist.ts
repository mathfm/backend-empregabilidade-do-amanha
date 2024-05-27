import { Model, FindOptions } from "sequelize";

export const fieldExistValidation = async <T extends Model>(
  entity: { findOne(options?: FindOptions): Promise<T | null> },
  fieldName: string,
  value: any
): Promise<T | null> => {
  const exist = await entity.findOne({
    where: {
      [fieldName]: value,
    },
  });
  return exist;
};
