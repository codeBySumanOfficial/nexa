import { createNexaTemplate } from "../nexa/nexa-renderer/index.js";
import { nexaDomTags, renderer } from "../index.js";

const { div, h1, p, a, small } = nexaDomTags;

export default function Page() {
    const template = createNexaTemplate(
        div({
            className: "fallback-page page"
        },
            h1("Nexa Counter App"),
            p("Page Not Found"),
            a({
                href: "/home",
                "data-link": "/home",
            }, "Go to home page"),
            small("Built using Nexa Framework")
        )
    );

    renderer.renderND(template())
}