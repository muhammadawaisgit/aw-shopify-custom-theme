import { defineSectionSchema } from 'shopify-schema-utils';

const name = 'container';

let breakpoints = ['','tablet_', 'mobile_'];

const breakpointLabels = {
    "": "desktop",
    "tablet_": "tablet",
    "mobile_": "mobile"
};

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

            // Background Settings
            {
                "type": "header",
                "content": "Background",
                "visible_if": `{{ block.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
            },
            {
                "type": "select",
                "label": "Background Type",
                "id": prefix + "background_type",
                "options": [
                ...(prefix !== "" ? [{ label: "Off", value: "off" }] : []),
                { "label": "Classic", "value": "classic" },
                { "label": "Gradient", "value": "gradient" }
                ],
                "visible_if": `{{ block.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
            },

            // Classic Background Settings
            {
                "type": "color",
                "label": "Background Color",
                "id": prefix + "background_color",
                "default": "transparent",
                "visible_if": "{{ block.settings.background_type == 'classic' and block.settings.breakpoint-selector == 'desktop' }}"
            },
            {
                "type": "checkbox",
                "label": "Background Image",
                "id": prefix + "background_image_enabled",
                "default": false,
                "visible_if": "{{ block.settings.background_type == 'classic' and block.settings.breakpoint-selector == 'desktop' }}"
            },
            {
                "type": "image_picker",
                "label": "Background Image",
                "id": prefix + "background_image",
                "visible_if": "{{ block.settings.background_image_enabled == true and block.settings.breakpoint-selector == 'desktop' }}"
            },
            {
                "type": "select",
                "label": "Position",
                "id": prefix + "background_position",
                "options": [
                { "label": "Center Center", "value": "center center" },
                { "label": "Center Left", "value": "center left" },
                { "label": "Center Right", "value": "center right" },
                { "label": "Top Center", "value": "top center" },
                { "label": "Top Left", "value": "top left" },
                { "label": "Top Right", "value": "top right" },
                { "label": "Bottom Center", "value": "bottom center" },
                { "label": "Bottom Left", "value": "bottom left" },
                { "label": "Bottom Right", "value": "bottom right" }
                ],
                "default": "center center",
                "visible_if": "{{ block.settings.background_image_enabled == true and block.settings.breakpoint-selector == 'desktop' }}"
            },
            {
                "type": "select",
                "label": "Attachement",
                "id": prefix + "background_attachment",
                "options": [
                { "label": "Scroll", "value": "scroll" },
                { "label": "Fixed", "value": "fixed" }
                ],
                "default": "scroll",
                "visible_if": "{{ block.settings.background_image_enabled == true and block.settings.breakpoint-selector == 'desktop' }}"
            },
            {
                "type": "select",
                "label": "Repeat",
                "id": prefix + "background_repeat",
                "options": [
                { "label": "No Repeat", "value": "no-repeat" },
                { "label": "Repeat", "value": "repeat" },
                { "label": "Repeat X", "value": "repeat-x" },
                { "label": "Repeat Y", "value": "repeat-y" }
                ],
                "default": "no-repeat",
                "visible_if": "{{ block.settings.background_image_enabled == true and block.settings.breakpoint-selector == 'desktop' }}"
            },
            {
                "type": "select",
                "label": "Display Size",
                "id": prefix + "background_size",
                "options": [
                { "label": "Auto", "value": "auto" },
                { "label": "Cover", "value": "cover" },
                { "label": "Contain", "value": "contain" }
                ],
                "default": "cover",
                "visible_if": "{{ block.settings.background_image_enabled == true and block.settings.breakpoint-selector == 'desktop' }}"
            },

            // Gradient Background Settings
            {
                "type": "color",
                "label": "First Color",
                "id": prefix + "gradient_first_color",
                "default": "#000000",
                "visible_if": "{{ block.settings.background_type == 'gradient' and block.settings.breakpoint-selector == 'desktop' }}"
            },
            {
                "type": "range",
                "label": "Location",
                "id": prefix + "first_gradient_location",
                "min": 0,
                "max": 100,
                "unit": "%",
                "default": 0,
                "visible_if": "{{ block.settings.background_type == 'gradient' and block.settings.breakpoint-selector == 'desktop' }}"
            },
            {
                "type": "color",
                "label": "Second Color",
                "id": prefix + "gradient_second_color",
                "default": "#ffffff",
                "visible_if": "{{ block.settings.background_type == 'gradient' and block.settings.breakpoint-selector == 'desktop' }}"
            },
            {
                "type": "range",
                "label": "Location",
                "id": prefix + "second_gradient_location",
                "min": 0,
                "max": 100,
                "unit": "%",
                "default": 100,
                "visible_if": "{{ block.settings.background_type == 'gradient' and block.settings.breakpoint-selector == 'desktop' }}"
            },
            {
                "type": "select",
                "label": "Gradient Type",
                "id": prefix + "gradient_type",
                "options": [
                { "label": "Linear", "value": "linear" },
                { "label": "Radial", "value": "radial" }
                ],
                "default": "linear",
                "visible_if": "{{ block.settings.background_type == 'gradient' and block.settings.breakpoint-selector == 'desktop' }}"
            },
            {
                "type": "number",
                "label": "Angle (degrees)",
                "id": prefix + "gradient_angle",
                "default": 90,
                "visible_if": "{{ block.settings.background_type == 'gradient' and block.settings.gradient_type == 'linear' and block.settings.breakpoint-selector == 'desktop' }}"
            },
            // Border Settings
            {
                "type": "header",
                "content": "Border",
                "visible_if": `{{ block.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
            },
            {
                "type": "select",
                "label": "Border Type",
                "id": prefix + "border_type",
                "options": [
                ...(prefix !== "" ? [{ label: "Off", value: "off" }] : []),
                { "label": "None", "value": "none" },
                { "label": "Solid", "value": "solid" },
                { "label": "Double", "value": "double" },
                { "label": "Dotted", "value": "dotted" },
                { "label": "Dashed", "value": "dashed" },
                { "label": "Groove", "value": "groove" }
                ],
                "default": "none",
                "visible_if": `{{ block.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
            },
            {
                "type": "color",
                "label": "Border Color",
                "id": prefix + "border_color",
                "default": "#000000",
                "visible_if": "{{ block.settings.border_type != 'none' and block.settings.breakpoint-selector == 'desktop' }}"
            },
            {
                "type": "checkbox",
                "label": "Custom Borders",
                "id": prefix + "custom_borders",
                "default": false,
                "visible_if": "{{ block.settings.border_type != 'none' and block.settings.breakpoint-selector == 'desktop' }}"
            },
            {
                "type": "range",
                "label": "Border",
                "id": prefix + "border_all",
                "min": 0,
                "max": 20,
                "unit": "px",
                "default": 0,
                "visible_if": "{{ block.settings.border_type != 'none' and block.settings.custom_borders != true and block.settings.breakpoint-selector == 'desktop' }}"
            },
            {
                "type": "range",
                "label": "Border Top",
                "id": prefix + "border_top",
                "min": 0,
                "max": 20,
                "unit": "px",
                "default": 0,
                "visible_if": "{{ block.settings.custom_borders == true and block.settings.border_type != 'none' and block.settings.breakpoint-selector == 'desktop' }}"
            },
            {
                "type": "range",
                "label": "Border Right",
                "id": prefix + "border_right",
                "min": 0,
                "max": 20,
                "unit": "px",
                "default": 0,
                "visible_if": "{{ block.settings.custom_borders == true and block.settings.border_type != 'none' and block.settings.breakpoint-selector == 'desktop' }}"
            },
            {
                "type": "range",
                "label": "Border Bottom",
                "id": prefix + "border_bottom",
                "min": 0,
                "max": 20,
                "unit": "px",
                "default": 0,
                "visible_if": "{{ block.settings.custom_borders == true and block.settings.border_type != 'none' and block.settings.breakpoint-selector == 'desktop' }}"
            },
            {
                "type": "range",
                "label": "Border Left",
                "id": prefix + "border_left",
                "min": 0,
                "max": 20,
                "unit": "px",
                "default": 0,
                "visible_if": "{{ block.settings.custom_borders == true and block.settings.border_type != 'none' and block.settings.breakpoint-selector == 'desktop' }}"
            },

            // Border Radius Settings
            {
                "type": "header",
                "content": "Border Radius",
                "visible_if": `{{ block.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
            },
            {
                "type": "checkbox",
                "label": "Custom Border Radius",
                "id": prefix + "custom_border_radius",
                "default": false,
                "visible_if": `{{ block.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
            },
            {
                "type": "range",
                "label": "Radius",
                "id": prefix + "border_radius_all",
                "min": 0,
                "max": 100,
                "unit": "px",
                "default": 0,
                "visible_if": "{{ block.settings.custom_border_radius == false and block.settings.breakpoint-selector == 'desktop' }}"
            },
            {
                "type": "range",
                "label": "Radius Top",
                "id": prefix + "radius_top",
                "min": 0,
                "max": 100,
                "unit": "px",
                "default": 0,
                "visible_if": "{{ block.settings.custom_border_radius == true and block.settings.breakpoint-selector == 'desktop' }}"
            },
            {
                "type": "range",
                "label": "Radius Right",
                "id": prefix + "radius_right",
                "min": 0,
                "max": 100,
                "unit": "px",
                "default": 0,
                "visible_if": "{{ block.settings.custom_border_radius == true and block.settings.breakpoint-selector == 'desktop' }}"
            },
            {
                "type": "range",
                "label": "Radius Bottom",
                "id": prefix + "radius_bottom",
                "min": 0,
                "max": 100,
                "unit": "px",
                "default": 0,
                "visible_if": "{{ block.settings.custom_border_radius == true and block.settings.breakpoint-selector == 'desktop' }}"
            },
            {
                "type": "range",
                "label": "Radius Left",
                "id": prefix + "radius_left",
                "min": 0,
                "max": 100,
                "unit": "px",
                "default": 0,
                "visible_if": "{{ block.settings.custom_border_radius == true and block.settings.breakpoint-selector == 'desktop' }}"
            },

            // Box Shadow Settings
            {
                "type": "header",
                "content": "Box Shadow",
                "visible_if": `{{ block.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
            },
            {
                "type": "checkbox",
                "label": "Enable Box Shadow",
                "id": prefix + "box_shadow_enabled",
                "default": false,
                "visible_if": `{{ block.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
            },
            {
                "type": "color",
                "label": "Box Shadow Color",
                "id": prefix + "box_shadow_color",
                "default": "#000000",
                "visible_if": "{{ block.settings.box_shadow_enabled == true and block.settings.breakpoint-selector == 'desktop' }}"
            },
            {
                "type": "number",
                "label": "Horizontal Offset (px)",
                "id": prefix + "box_shadow_h_offset",
                "default": 0,
                "visible_if": "{{ block.settings.box_shadow_enabled == true and block.settings.breakpoint-selector == 'desktop' }}"
            },
            {
                "type": "number",
                "label": "Vertical Offset (px)",
                "id": prefix + "box_shadow_v_offset",
                "default": 0,
                "visible_if": "{{ block.settings.box_shadow_enabled == true and block.settings.breakpoint-selector == 'desktop' }}"
            },
            {
                "type": "number",
                "label": "Blur Radius (px)",
                "id": prefix + "box_shadow_blur",
                "default": 0,
                "visible_if": "{{ block.settings.box_shadow_enabled == true and block.settings.breakpoint-selector == 'desktop' }}"
            },
            {
                "type": "number",
                "label": "Spread Radius (px)",
                "id": prefix + "box_shadow_spread",
                "default": 0,
                "visible_if": "{{ block.settings.box_shadow_enabled == true and block.settings.breakpoint-selector == 'desktop' }}"
            },
            {
                "type": "select",
                "label": "Position",
                "id": prefix + "box_shadow_position",
                "options": [
                { "label": "Outside", "value": "outset" },
                { "label": "Inside", "value": "inset" }
                ],
                "visible_if": "{{ block.settings.box_shadow_enabled == true and block.settings.breakpoint-selector == 'desktop' }}"
            },

            // Margin & Padding Settings
            {
                "type": "header",
                "content": "Layout",
                "visible_if": `{{ block.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
            },
            {
                "type": "select",
                "label": "Margin",
                "id": prefix + "margin_type",
                "options": [
                ...(prefix !== "" ? [{ label: "Off", value: "off" }] : []),
                { "label": "Auto", "value": "auto" },
                { "label": "Custom", "value": "custom" },
                { "label": "Separate", "value": "separate" }
                ],
                "visible_if": `{{ block.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
            },
            {
                "type": "select",
                "label": "Auto",
                "id": prefix + "auto_margin_position",
                "options": [
                { "label": "All", "value": "all" },
                { "label": "Top", "value": "top" },
                { "label": "Bottom", "value": "bottom" },
                { "label": "Left", "value": "left" },
                { "label": "Right", "value": "right" },
                { "label": "Horzontal", "value": "horzontal" },
                { "label": "Vertical", "value": "vertical" }
                ],
                "visible_if": "{{ block.settings.breakpoint-selector == 'desktop' and block.settings.margin_type == 'auto' }}"
            },
            {
                "type": "range",
                "label": "Margin",
                "id": prefix + "margin_all",
                "min": 0,
                "max": 100,
                "unit": "px",
                "default": 0,
                "visible_if": "{{ block.settings.margin_type == 'custom' and block.settings.breakpoint-selector == 'desktop' }}"
            },
            {
                "type": "range",
                "label": "Margin Top",
                "id": prefix + "margin_top",
                "min": 0,
                "max": 100,
                "unit": "px",
                "default": 0,
                "visible_if": "{{ block.settings.margin_type == 'separate' and block.settings.breakpoint-selector == 'desktop' }}"
            },
            {
                "type": "range",
                "label": "Margin Right",
                "id": prefix + "margin_right",
                "min": 0,
                "max": 100,
                "unit": "px",
                "default": 0,
                "visible_if": "{{ block.settings.margin_type == 'separate' and block.settings.breakpoint-selector == 'desktop' }}"
            },
            {
                "type": "range",
                "label": "Margin Bottom",
                "id": prefix + "margin_bottom",
                "min": 0,
                "max": 100,
                "unit": "px",
                "default": 0,
                "visible_if": "{{ block.settings.margin_type == 'separate' and block.settings.breakpoint-selector == 'desktop' }}"
            },
            {
                "type": "range",
                "label": "Margin Left",
                "id": prefix + "margin_left",
                "min": 0,
                "max": 100,
                "unit": "px",
                "default": 0,
                "visible_if": "{{ block.settings.margin_type == 'separate' and block.settings.breakpoint-selector == 'desktop' }}"
            },

            // Padding
            {
                "type": "select",
                "label": "Padding",
                "id": prefix + "padding_type",
                "options": [
                { "label": "Auto", "value": "auto" },
                { "label": "Custom", "value": "custom" },
                { "label": "Separate", "value": "separate" }
                ],
                "visible_if": `{{ block.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
            },
            {
                "type": "range",
                "label": "Padding",
                "id": prefix + "padding_all",
                "min": 0,
                "max": 100,
                "unit": "px",
                "default": 0,
                "visible_if": "{{ block.settings.padding_type == 'custom' and block.settings.breakpoint-selector == 'desktop' }}"
            },
            {
                "type": "range",
                "label": "Padding Top",
                "id": prefix + "padding_top",
                "min": 0,
                "max": 100,
                "unit": "px",
                "default": 20,
                "visible_if": "{{ block.settings.padding_type == 'separate' and block.settings.breakpoint-selector == 'desktop' }}"
            },
            {
                "type": "range",
                "label": "Padding Right",
                "id": prefix + "padding_right",
                "min": 0,
                "max": 100,
                "unit": "px",
                "default": 20,
                "visible_if": "{{ block.settings.padding_type == 'separate' and block.settings.breakpoint-selector == 'desktop' }}"
            },
            {
                "type": "range",
                "label": "Padding Bottom",
                "id": prefix + "padding_bottom",
                "min": 0,
                "max": 100,
                "unit": "px",
                "default": 20,
                "visible_if": "{{ block.settings.padding_type == 'separate' and block.settings.breakpoint-selector == 'desktop' }}"
            },
            {
                "type": "range",
                "label": "Padding Left",
                "id": prefix + "padding_left",
                "min": 0,
                "max": 100,
                "unit": "px",
                "default": 20,
                "visible_if": "{{ block.settings.padding_type == 'separate' and block.settings.breakpoint-selector == 'desktop' }}"
            },
            {
                "type": "select",
                "label": "Align Self",
                "id": prefix + "align_self",
                "options": [
                { "label": "Auto", "value": "auto" },
                { "label": "Start", "value": "flex-start" },
                { "label": "Center", "value": "center" },
                { "label": "End", "value": "flex-end" },
                { "label": "Stretch", "value": "stretch" },
                { "label": "Baseline", "value": "baseline" }
                ],
                "visible_if": `{{ block.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
            }
        ])),
    ],
    presets:[{name:'Container', category:'t:general.layout'}]
})