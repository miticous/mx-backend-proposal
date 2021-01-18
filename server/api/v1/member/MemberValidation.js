import { Joi } from 'express-validation';

export default {
  get: {
    params: {
      id: Joi.string().required(),
    },
  },
};
