import { createNexaTemplate } from "../nexa/nexa-renderer/index.js";
import { createNexaState } from "../nexa/nexa-state/index.js";
import { nexaDomTags, renderer } from "../index.js";

const { div, h1, placeholder, button, p, mark, b, small } = nexaDomTags;

export default async function Page(){
    let [getCount, setCount, subCount] = createNexaState(0);

    const template = createNexaTemplate(
        div({
            className: "home-page page"
        },
            h1("Nexa Counter App"),
            b("Counter: ", placeholder("count")),
            button(
                {
                    onClick: () => {
                        setCount(getCount() + 1)
                    }
                },
                "Click me"
            ),
            small("Built using Nexa Framework")
        )
    );

    const unsub = subCount(() => renderer.renderND(template({
        count: getCount()
    })));
}