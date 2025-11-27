import { defineBlockSchema } from "shopify-schema-utils";
import { breakpointLabels } from "../breakpoints";
import customWidthSchema from "../custom-width-schema";
import typographySchema from "../typography-schema";
import backgroundSchema from '../background-schema';
import borderSchema from '../border-schema';
import marginSchema from '../margin-schema';
import paddingSchema from '../padding-schema';

const breakpoints = ['','tablet_'];

const name = 'menu';

export default defineBlockSchema({
    "name": "Menu",
    "class": `pb-${name}-block`,
    "settings": [
        {
            "type": "select",
            "label": "Breakpoint",
            "id": "breakpoint-selector",
            "options": [
                { "label": "Desktop", "value": "desktop" },
                { "label": "Tablet", "value": "tablet" },
            ],
            "default": "desktop",
        },
        {
            "type": "link_list",
            "id": "menu",
            "label": "Menu",
            "default": "main-menu"
        },
        ...breakpoints.flatMap(prefix => ([
            ...customWidthSchema('block',prefix,breakpointLabels[prefix]),
            {
                "type": "range",
                "label": "Min Gap",
                "id": `${prefix}min_item_gap`,
                "min": 0,
                "max": 50,
                "unit": "px",
                "default": 10,
                "visible_if": `{{ block.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
            },
            ...typographySchema('block',prefix,breakpointLabels[prefix]),
            ...borderSchema('block' ,prefix, breakpointLabels[prefix]),
            ...marginSchema('block' ,prefix, breakpointLabels[prefix]),
            ...paddingSchema('block' ,prefix, breakpointLabels[prefix]),
            // Dropdown Schema
            {
                "type": "header",
                "content": "Dropdown Settings",
                "visible_if": `{{ block.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
            },
            // Classic Background Settings
            {
                "type": "color",
                "label": "Background Color",
                "id": `${prefix}dropdown_background_color`,
                "default": "transparent",
                "visible_if": `{{ block.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
            },
            ...borderSchema('block' ,'dropdown_'+prefix, breakpointLabels[prefix]),
            ...paddingSchema('block','dropdown_'+prefix, breakpointLabels[prefix]),
        ])),
    ],
    "presets": [
        {
        "name": "Menu",
        "category": "t:general.header"
        }
    ]
});