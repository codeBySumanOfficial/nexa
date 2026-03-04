import { createNexaTemplate } from "../nexa/nexa-renderer/index.js";
import { nexaDomTags, renderer } from "../index.js";

const { div, h1, h3, p, a, small, placeholder, mark, pre } = nexaDomTags;

export default function Page({ error, ...rest }) {
    const template = createNexaTemplate(
        div({
            className: "error-page page"
        },
            h1("Nexa Counter App"),
            p("Page Crashed!"),
            h3("Error:"),
            p(placeholder("msg")),
            h3("Context:"),
            pre(placeholder("status")),
            p(small("Built using Nexa Framework"))
        )
    );

    ;
    

    renderer.renderND(template({
        msg: error,
        status: JSON.stringify(rest, null, 2)
    }))
}