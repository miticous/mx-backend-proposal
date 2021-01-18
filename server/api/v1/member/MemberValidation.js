import { Joi } from 'express-validation';

export default {
  post: {
    params: Joi.object({ id: Joi.string().required() }),
  },
  get: {
    params: {
      id: Joi.string().required(),
    },
  },
};
