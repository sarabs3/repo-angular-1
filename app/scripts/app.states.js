// app.states.js

"use strict";

const appBlog = {
  name: "blog",
  url: "/blog",
  templateUrl: './app/views/chapter.html',
  component: "blogComponent",
  // lazyLoad: ($transition$) => {
  //   const $ocLazyLoad = $transition$.injector().get("$ocLazyLoad");

  //   return import(/* webpackChunkName: "blog.module" */ "./pages/blog/blog.module")
  //     .then(mod => $ocLazyLoad.load(mod.BLOG_MODULE))
  //     .catch(err => {
  //       throw new Error("Ooops, something went wrong, " + err);
  //     });
  // }
  lazyLoad: ($transition$) => {
    const $ocLazyLoad = $transition$.injector().get("$ocLazyLoad");

    return require.ensure([], () => {
      // load whole module
      require("./controllers/ChapterController");

      $ocLazyLoad.load(module.default);
    }, "chapter.module");
  }
};

export { appBlog };