import { defineSectionSchema } from 'shopify-schema-utils';
import { breakpoints, breakpointLabels } from './breakpoints';
import backgroundSchema from './background-schema';
import borderSchema from './border-schema';
import marginSchema from './margin-schema';
import paddingSchema from './padding-schema';
import alignSelfSchema from './align-self-schema';

const name = 'container';

export default defineSectionSchema({
    name,
    class: `child-${name}`,
    blocks:[{type:'@theme'}],
    settings: [
        // Container Settings
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
            "type": "header",
            "content": "Container"
        },
        ...breakpoints.flatMap(prefix => ([
            {
                "type": "select",
                "label": "Container Layout",
                "id": prefix + "container_layout",
                "options": [
                    ...(prefix !== "" ? [{ label: "Off", value: "off" }] : []),
                    { "label": "Flexbox", "value": "flex" },
                    { "label": "Grid", "value": "grid" }
                ],
                "visible_if": `{{ block.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
            },
            {
                "type": "select",
                "label": "Content Width",
                "id": prefix + "content_width",
                "options": [
                ...(prefix !== "" ? [{ label: "Off", value: "off" }] : []),
                { "label": "Boxed", "value": "boxed" },
                { "label": "Full Width", "value": "full-width" }
                ],
                "visible_if": `{{ block.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
            },
            {
                "type": "select",
                "label": "Width Unit",
                "id": prefix + "width_unit",
                "options": [
                ...(prefix !== "" ? [{ label: "Off", value: "off" }] : []),
                { "label": "px", "value": "px" },
                { "label": "%", "value": "%" },
                { "label": "vw", "value": "vw" },
                { "label": "mc", "value": "max-content" }
                ],
                "default": "px",
                "visible_if": "{{ block.settings.content_width == 'boxed' and block.settings.breakpoint-selector == 'desktop' }}"
            },
            {
                "type": "number",
                "label": "Width",
                "id": prefix + "width",
                "placeholder": "1140",
                "visible_if": "{{ block.settings.content_width == 'boxed' and block.settings.width_unit != 'max-content' and block.settings.breakpoint-selector == 'desktop' }}"
            },
            {
                "type": "checkbox",
                "label": "Custom Height",
                "id": prefix + "custom_height",
                "default": false,
                "visible_if": `{{ block.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
            },
            {
                "type": "text",
                "label": "height (px)",
                "id": prefix + "height",
                "default": "auto",
                "visible_if": "{{ block.settings.custom_height == true and block.settings.breakpoint-selector == 'desktop' }}"
            },
            {
                "type": "number",
                "label": "Min Height (px)",
                "id": prefix + "min_height",
                "default": 0,
                "visible_if": `{{ block.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
            },

            // Flexbox Items Settings
            {
                "type": "header",
                "content": "Items",
                "visible_if": `{{ block.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
            },
            {
                "type": "select",
                "label": "Direction",
                "id": prefix + "direction",
                "options": [
                ...(prefix !== "" ? [{ label: "Off", value: "off" }] : []),
                { "label": "Row", "value": "row" },
                { "label": "Column", "value": "column" },
                { "label": "Row Reverse", "value": "row-reverse" },
                { "label": "Column Reverse", "value": "column-reverse" }
                ],
                "default": "row",
                "visible_if": "{{ block.settings.container_layout == 'flex' and block.settings.breakpoint-selector == 'desktop' }}"
            },
            {
                "type": "select",
                "label": "Justify Content",
                "id": prefix + "justify",
                "options": [
                ...(prefix !== "" ? [{ label: "Off", value: "off" }] : []),
                { "label": "Start", "value": "flex-start" },
                { "label": "Center", "value": "center" },
                { "label": "End", "value": "flex-end" },
                { "label": "Space Between", "value": "space-between" },
                { "label": "Space Around", "value": "space-around" },
                { "label": "Space Evenly", "value": "space-evenly" }
                ],
                "default": "flex-start",
                "visible_if": "{{ block.settings.container_layout == 'flex' and block.settings.breakpoint-selector == 'desktop' }}"
            },
            {
                "type": "select",
                "label": "Align Items",
                "id": prefix + "align",
                "options": [
                ...(prefix !== "" ? [{ label: "Off", value: "off" }] : []),
                { "label": "Start", "value": "flex-start" },
                { "label": "Center", "value": "center" },
                { "label": "End", "value": "flex-end" },
                { "label": "Stretch", "value": "stretch" }
                ],
                "default": "flex-start",
                "visible_if": "{{ block.settings.container_layout == 'flex' and block.settings.breakpoint-selector == 'desktop' }}"
            },

            // Grid Items Settings
            {
                "type": "range",
                "label": "Columns",
                "id": prefix + "grid_columns",
                "min": 1,
                "max": 12,
                "step": 1,
                "default": 3,
                "visible_if": "{{ block.settings.container_layout == 'grid' and block.settings.breakpoint-selector == 'desktop' }}"
            },
            {
                "type": "range",
                "label": "Rows",
                "id": prefix + "grid_rows",
                "min": 1,
                "max": 12,
                "step": 1,
                "default": 1,
                "visible_if": "{{ block.settings.container_layout == 'grid' and block.settings.breakpoint-selector == 'desktop' }}"
            },
            {
                "type": "text",
                "label": "Grid Gap (px)",
                "id": prefix + "grid_gap",
                "default": "0px",
                "visible_if": "{{ block.settings.container_layout == 'grid' and block.settings.breakpoint-selector == 'desktop' }}"
            },

            // Gap Settings
            {
                "type": "header",
                "content": "Gap",
                "visible_if": `{{ block.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
            },
            {
                "type": "range",
                "label": "Column Gap (px)",
                "id": prefix + "column_gap",
                "min": 0,
                "max": 100,
                "step": 1,
                "default": 0,
                "visible_if": `{{ block.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
            },
            {
                "type": "range",
                "label": "Row Gap (px)",
                "id": prefix + "row_gap",
                "min": 0,
                "max": 100,
                "step": 1,
                "default": 0,
                "visible_if": `{{ block.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
            },

            // Wrap Settings
            {
                "type": "header",
                "content": "Wrap",
                "visible_if": `{{ block.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
            },
            {
                "type": "select",
                "label": "Wrap",
                "id": prefix + "flex_wrap",
                "options": [
                ...(prefix !== "" ? [{ label: "Off", value: "off" }] : []),
                { "label": "No Wrap", "value": "nowrap" },
                { "label": "Wrap", "value": "wrap" },
                { "label": "Wrap Reverse", "value": "wrap-reverse" }
                ],
                "default": "nowrap",
                "visible_if": `{{ block.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
            },

            ...backgroundSchema(prefix, breakpointLabels),
            
            ...borderSchema(prefix, breakpointLabels),
            
            ...marginSchema(prefix, breakpointLabels),
            
            ...paddingSchema(prefix, breakpointLabels),
            
            ...alignSelfSchema(prefix, breakpointLabels),
            
        ])),
    ],
    presets:[{name:'Container', category:'t:general.layout'}]
})