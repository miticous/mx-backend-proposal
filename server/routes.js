import * as express from 'express';
import MemberRoute from './api/v1/member/MemberRoute';
import MemberTypesRoute from './api/v1/member-types/MemberTypesRoute';
import healthCheck from './common/health-check';

export default function routes(app) {
  app.use('/api',
    express.Router()
      .use('/v1/members', MemberRoute)
      .use('/v1/member-types', MemberTypesRoute));

  app.get('/health', healthCheck);
}
