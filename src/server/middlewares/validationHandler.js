/* eslint-disable no-restricted-syntax */
/* eslint-disable no-prototype-builtins */
exports.validationHandler = async (errors) => {
  const errorFields = [];
  for (const key in errors) {
    if (errors.hasOwnProperty(key)) {
      const element = errors[key];
      errorFields.push({ field: element.path, message: element.message });
    }
  }
  return errorFields;
};

exports.upsert = async (Model, values, condition) => {
  return Model
    .findOne({ where: condition })
    .then(async (obj) => {
      // update
      if (obj) return obj.update(values, { where: condition })
      // inserts
      const res = await Model.create(values);
      console.log(res)
      return res
    })
}
