import * as express from 'express';
// import { validate } from 'express-validation';
import MemberController from './MemberController';
// import MemberValidation from './MemberValidation';

const Router = express.Router();

Router
  .route('/')
  .get(
    // validate(MemberValidation.get),
    MemberController.get,
  );

export default Router;
