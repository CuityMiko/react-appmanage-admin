/**
 * 路由映射
 */
import Loadable from 'react-loadable';
import Loading from '@/components/Loading'
const Home = Loadable({loader: () => import(/*webpackChunkName:'Home'*/'@/views/home'),loading: Loading});
const Excel = Loadable({loader: () => import(/*webpackChunkName:'ExportExcel'*/'@/views/demo/excel'),loading: Loading});
const Table = Loadable({loader: () => import(/*webpackChunkName:'Table'*/'@/views/demo/table'),loading: Loading});
const User = Loadable({loader: () => import(/*webpackChunkName:'User'*/'@/views/demo/table/user'),loading: Loading});
const Error404 = Loadable({loader: () => import(/*webpackChunkName:'Error404'*/'@/views/error/404'),loading: Loading});

export default [
  { path: "/home", component: Home, roles: ["admin","editor","guest"] },
  { path: "/excel", component: Excel, roles: ["admin","editor"] },
  { path: "/table/base", component: Table, roles: ["admin","editor"] },
  { path: "/table/curd", component: User, roles: ["admin"] },
  { path: "/error/404", component: Error404 },
];
