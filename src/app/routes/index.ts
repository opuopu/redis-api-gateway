import express from 'express';
import { academicSemesterRoute } from '../modules/academicsemester/academicsemester.routes';
import { academicdepartmentRoutes } from '../modules/academiDepartment/academicdepartment.routes';
import { userRoutes } from '../modules/user/user.routes';
import { authenticationRoutes } from '../modules/auth/auth.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/academic-semester',
    routes: academicSemesterRoute
  },
  {
    path: '/academic-departments',
    routes: academicdepartmentRoutes
  },
  {
    path: '/users',
    routes: userRoutes
  },
  {
    path: '/auth',
    routes: authenticationRoutes
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
