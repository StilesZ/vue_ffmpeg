import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/**  各个模块 */
export default new Router({
  routes: [
    {
      path: "/",
      name: "Layout",
      component: () => import("@/pages/layout"),
      redirect: { name: "Home" },
      children: [
        {
          path: "home",
          name: "Home",
          component: () => import("@/pages/home/index"),
          redirect: { name: "pageList" },
          children: [
            {
              path: "page-list",
              name: "pageList",
              component: () => import("@/pages/home/page-list")
            },
			{
			  path: "my-template",
			  name: "myTemplate",
			  component: () => import("@/pages/home/my-template")
			},
			{
			  path: "template-list",
			  name: "templateList",
			  component: () => import("@/pages/home/template-list")
			}
          ]
        },
        {
          path: "/editor",
          name: "Editor",
          component: () => import("@/pages/editor/index")
        }
      ]
    }
  ]
});
