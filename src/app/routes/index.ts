import express from 'express';
import { academicSemesterRoute } from '../modules/academicsemester/academicsemester.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/academic-semester',
    routes: academicSemesterRoute
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
