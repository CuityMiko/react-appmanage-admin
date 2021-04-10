/**
 * icon:菜单项图标
 * roles:标明当前菜单项在何种角色下可以显示，如果不写此选项，表示该菜单项完全公开，在任何角色下都显示
 */
const menuList = [
  {
    title: "首页",
    path: "/home",
    icon: "home",
    roles:["admin","editor","guest"]
  },
  // {
  //   title: "路由嵌套",
  //   path: "/nested",
  //   icon: "cluster",
  //   roles:["admin","editor"],
  //   children: [
  //     {
  //       title: "菜单1",
  //       path: "/nested/menu1",
  //       children: [
  //         {
  //           title: "菜单1-1",
  //           path: "/nested/menu1/menu1-1",
  //           roles:["admin","editor"],
  //         },
  //         {
  //           title: "菜单1-2",
  //           path: "/nested/menu1/menu1-2",
  //           children: [
  //             {
  //               title: "菜单1-2-1",
  //               path: "/nested/menu1/menu1-2/menu1-2-1",
  //               roles:["admin","editor"],
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    title: "表格",
    path: "/table",
    icon: "table",
    roles:["admin","editor"]
  },
  {
    title: "Excel",
    path: "/excel",
    icon: "file-excel",
    roles:["admin","editor"],
    children: [
      {
        title: "导出Excel",
        path: "/excel/export",
        roles:["admin","editor"]
      },
      {
        title: "上传Excel",
        path: "/excel/upload",
        roles:["admin","editor"]
      }
    ],
  },
  {
    title: "用户管理",
    path: "/user",
    icon: "usergroup-add",
    roles:["admin"]
  }
];
export default menuList;
