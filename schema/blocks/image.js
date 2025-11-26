import { defineBlockSchema } from "shopify-schema-utils";
import { breakpoints, breakpointLabels } from "../breakpoints";
import borderSchema from '../border-schema';
import marginSchema from '../margin-schema';
import paddingSchema from '../padding-schema';
import alignSelfSchema from "../align-self-schema";
import customWidthSchema from "../custom-width-schema";

const name = 'image';

export default defineBlockSchema({
    "name": "Image",
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
            "type": "image_picker",
            "id": `image`,
            "label": "Image",
            "info": "Select an image to display.",
            "visible_if": `{{ block.settings.breakpoint-selector == 'desktop' }}`
        },
        {
            "type": "checkbox",
            "label": "Enable Link",
            "id": `enable_link`,
            "default": false,
            "visible_if": `{{ block.settings.breakpoint-selector == 'desktop' }}`
        },
        {
            "type": "url",
            "id": `image_link`,
            "label": "Link",
            "visible_if": "{{ block.settings.enable_link == true and block.settings.breakpoint-selector == 'desktop' }}"
        },
        {
            "type": "checkbox",
            "label": "Open in New Tab",
            "id": `open_in_new_tab`,
            "default": false,
            "visible_if": "{{ block.settings.enable_link == true and block.settings.breakpoint-selector == 'desktop' }}"
        },
        {
            "type": "checkbox",
            "label": "Add Nofollow",
            "id": `add_nofollow`,
            "default": false,
            "visible_if": "{{ block.settings.enable_link == true and block.settings.breakpoint-selector == 'desktop' }}"
        },
        ...breakpoints.flatMap(prefix => ([
            // Image Alignment
            {
                "type": "select",
                "label": "Alignment",
                "id": `${prefix}image_alignment`,
                "options": [
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
                    }
                ],  
                "visible_if": `{{ block.settings.breakpoint-selector == 'desktop' }}`
            },

            // Image Styles
            {
                "type": "header",
                "content": "Image Styles",
                "visible_if": `{{ block.settings.breakpoint-selector == 'desktop' }}`
            },

            // Width
            {
                "type": "select",
                "label": "Unit",
                "id": `${prefix}width_unit`,
                "options": [
                    {
                        "value": "px",
                        "label": "px"
                    },
                    {
                        "value": "%",
                        "label": "%"
                    },
                    {
                        "value": "em",
                        "label": "em"
                    },
                    {
                        "value": "rem",
                        "label": "rem"
                    }
                ],
                "visible_if": `{{ block.settings.breakpoint-selector == 'desktop' }}`
            },
            {
                "type": "number",
                "label": "Width",
                "id": `${prefix}width`,
                "placeholder": "auto",
                "visible_if": `{{ block.settings.breakpoint-selector == 'desktop' }}`
            },

            // Max Width
            {
                "type": "select",
                "label": "Unit",
                "id": `${prefix}max_width_unit`,
                "options": [
                    {
                        "value": "px",
                        "label": "px"
                    },
                    {
                        "value": "%",
                        "label": "%"
                    },
                    {
                        "value": "em",
                        "label": "em"
                    },
                    {
                        "value": "rem",
                        "label": "rem"
                    }
                ],
                "visible_if": `{{ block.settings.breakpoint-selector == 'desktop' }}`
            },
            {
                "type": "number",
                "label": "Max Width",
                "id": `${prefix}max_width`,
                "placeholder": "auto",
                "visible_if": `{{ block.settings.breakpoint-selector == 'desktop' }}`
            },

            // Height
            {
                "type": "select",
                "label": "Unit",
                "id": `${prefix}height_unit`,
                "options": [
                    {
                        "value": "px",
                        "label": "px"
                    },
                    {
                        "value": "%",
                        "label": "%"
                    },
                    {
                        "value": "em",
                        "label": "em"
                    },
                    {
                        "value": "rem",
                        "label": "rem"
                    }
                ],
                "visible_if": `{{ block.settings.breakpoint-selector == 'desktop' }}`
            },
            {
                "type": "number",
                "label": "Height",
                "id": `${prefix}height`,
                "placeholder": "auto",
                "visible_if": `{{ block.settings.breakpoint-selector == 'desktop' }}`
            },
            {
                "type": "select",
                "label": "Object Fit",
                "id": `${prefix}object_fit`,
                "options": [
                    {
                        "value": "contain",
                        "label": "Contain"
                    },
                    {
                        "value": "cover",
                        "label": "Cover"
                    },
                    {
                        "value": "fill",
                        "label": "Fill"
                    }
                ],
                "visible_if": `{{ block.settings.height != blank and block.settings.breakpoint-selector == 'desktop' }}`
            },
            ...borderSchema('block' ,prefix, breakpointLabels),
            
            ...marginSchema('block' ,prefix, breakpointLabels),
            
            ...paddingSchema('block' ,prefix, breakpointLabels),
            
            ...alignSelfSchema('block' ,prefix, breakpointLabels),
            
            ...customWidthSchema('block' ,prefix, breakpointLabels),
        ])),
    ],
    "presets": [
        {
            "name": "Image",
            "category": "Builder Elements"
        }
    ]
});