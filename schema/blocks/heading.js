import { defineBlockSchema } from "shopify-schema-utils";
import { breakpoints, breakpointLabels } from "../breakpoints";
import typographySchema from "../typography-schema";
import backgroundSchema from '../background-schema';
import borderSchema from '../border-schema';
import marginSchema from '../margin-schema';
import paddingSchema from '../padding-schema';
import alignSelfSchema from "../align-self-schema";
import customWidthSchema from "../custom-width-schema";

const name = 'heading';

export default defineBlockSchema({
    "name": "Heading",
    "class": `pb-${name}-block`,
    "settings": [
        {
            "type": "select",
            "label": "Breakpoint",
            "id": "breakpoint-selector",
            "options": [
                { "label": "Desktop", "value": "desktop" },
                { "label": "Tablet", "value": "tablet" },
                { "label": "Mobile", "value": "mobile" },
            ],
            "default": "desktop",
        },
        {
            "type": "text",
            "id": "heading_text",
            "label": "Heading Text",
            "default": "Add Your Heading Text Here",
            "visible_if": "{{ block.settings.breakpoint-selector == 'desktop' }}"
        },
        {
            "type": "checkbox",
            "label": "Link Enable",
            "id": "link_enable",
            "default": false,
            "visible_if": "{{ block.settings.breakpoint-selector == 'desktop' }}"
        },
        {
            "type": "url",
            "id": "heading_link",
            "label": "Link",
            "info": "This link will be applied if 'Link Enable' is checked.",
            "visible_if": "{{ block.settings.link_enable == true and block.settings.breakpoint-selector == 'desktop' }}"
        },
        {
            "type": "checkbox",
            "label": "Open Link in New Tab",
            "id": "link_new_tab",
            "default": false,
            "visible_if": "{{ block.settings.link_enable == true and block.settings.breakpoint-selector == 'desktop' }}",
        },
        {
            "type": "select",
            "id": "html_tag",
            "label": "HTML Tag",
            "options": [
                {
                    "value": "h1",
                    "label": "H1"
                },
                {
                    "value": "h2",
                    "label": "H2"
                },
                {
                    "value": "h3",
                    "label": "H3"
                },
                {
                    "value": "h4",
                    "label": "H4"
                },
                {
                    "value": "h5",
                    "label": "H5"
                },
                {
                    "value": "h6",
                    "label": "H6"
                },
                {
                    "value": "p",
                    "label": "Paragraph"
                },
                {
                    "value": "div",
                    "label": "Div"
                },
                {
                    "value": "span",
                    "label": "Span"
                }
            ],
            "default": "h2",
            "visible_if": "{{ block.settings.breakpoint-selector == 'desktop' }}"
        },
        ...breakpoints.flatMap(prefix => ([
            // Color
            {
                "type": "header",
                "content": "Color",
                "visible_if": `{{ block.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
            },
            {
                "type": "color",
                "id": `${prefix}text_color`,
                "label": "Text Color",
                "default": "#000000",
                "visible_if": `{{ block.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
            },
            // Alignment Settings
            {
                "type": "header",
                "content": "Alignment",
                "visible_if": `{{ block.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
            },
            {
                "type": "select",
                "id": `${prefix}text_alignment`,
                "label": "Text Alignment",
                "options": [
                    ...(prefix !== "" ? [{ label: "Off", value: "off" }] : []),
                    {
                        "value": "left",
                        "label": "Left"
                    },
                    {
                        "value": "center",
                        "label": "Center"
                    },
                    {
                        "value": "right",
                        "label": "Right"
                    },
                    {
                        "value": "justify",
                        "label": "Justified"
                    }
                ],
                "default": "left",
                "visible_if": `{{ block.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
            },

            ...typographySchema('block' ,prefix, breakpointLabels[prefix]),

            ...backgroundSchema('block' ,prefix, breakpointLabels[prefix]),

            ...borderSchema('block' ,prefix, breakpointLabels[prefix]),
            
            ...marginSchema('block' ,prefix, breakpointLabels[prefix]),
            
            ...paddingSchema('block' ,prefix, breakpointLabels[prefix]),
            
            ...alignSelfSchema('block' ,prefix, breakpointLabels[prefix]),

            ...customWidthSchema('block' ,prefix, breakpointLabels[prefix]),

        ]))
    ],
    presets:[{name:'Heading', category:'t:general.layout'}]
})