import express from 'express';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/data',
    routes: "something"
  }
];

// moduleRoutes.forEach((route) => {
//   router.use(route.path, route.routes);
// });

export default router;
