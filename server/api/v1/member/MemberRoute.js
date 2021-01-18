import * as express from 'express';
import { validate } from 'express-validation';
import MemberController from './MemberController';
import MemberValidation from './MemberValidation';

export default express
  .Router()
  .post('/:id', validate(MemberValidation.post), MemberController.post);
