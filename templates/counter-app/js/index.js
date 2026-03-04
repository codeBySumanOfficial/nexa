import { createNexaRouter, interceptLinks, lazyLoad, createSafeLoader} from './nexa/nexa-router/index.js';
import { createNexaRenderer, createNexaDomTags } from "./nexa/nexa-renderer/index.js";
import { getCurrentFullPath } from './nexa/nexa-static-helpers/index.js';

export const router = createNexaRouter();
export const nexaDomTags = createNexaDomTags();
export const renderer = createNexaRenderer();
export const safeLoad = createSafeLoader(lazyLoad(() => import("./pages/error-page.js")));

const root = document.getElementById("root");

renderer.setView(root);

router.setRoute(["/home", "/", "/index.html"], safeLoad(lazyLoad(() => import("./pages/home-page.js"))));
router.setRoute("*", safeLoad(lazyLoad(() => import("./pages/fallback-page.js"))));

router.setBase("nexa");
router.navigate(getCurrentFullPath(), true);

interceptLinks([root], router);

window.addEventListener("popstate", e => router.navigate(getCurrentFullPath(), true));