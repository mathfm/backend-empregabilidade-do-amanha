export const fieldExistValidation = async (entity, fieldName, value) => {
  const exist = await entity.findOne({
    where: {
      [fieldName]: value,
    },
  });
  return exist;
};
