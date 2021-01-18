import * as express from 'express';
// import { validate } from 'express-validation';
import MemberTypesController from './MemberTypesController';
// import MemberTypesValidation from './MemberTypesValidation';

const Router = express.Router();

Router
  .route('/')
  .get(
    // validate(MemberTypesValidation.get),
    MemberTypesController.get,
  );

export default Router;
