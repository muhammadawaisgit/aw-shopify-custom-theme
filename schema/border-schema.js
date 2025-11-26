function borderSchema(item, prefix, breakpointLabels){
    return [
        // Border Settings
        {
            "type": "header",
            "content": "Border",
            "visible_if": `{{ ${item}.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
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
            "visible_if": `{{ ${item}.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
        },
        {
            "type": "color",
            "label": "Border Color",
            "id": prefix + "border_color",
            "default": "#000000",
            "visible_if": `{{ ${item}.settings.${prefix}border_type != 'none' and ${item}.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
        },
        {
            "type": "checkbox",
            "label": "Custom Borders",
            "id": prefix + "custom_borders",
            "default": false,
            "visible_if": `{{ ${item}.settings.${prefix}border_type != 'none' and ${item}.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
        },
        {
            "type": "range",
            "label": "Border",
            "id": prefix + "border_all",
            "min": 0,
            "max": 20,
            "unit": "px",
            "default": 0,
            "visible_if": `{{ ${item}.settings.${prefix}border_type != 'none' and ${item}.settings.${prefix}custom_borders != true and ${item}.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
        },
        {
            "type": "range",
            "label": "Border Top",
            "id": prefix + "border_top",
            "min": 0,
            "max": 20,
            "unit": "px",
            "default": 0,
            "visible_if": `{{ ${item}.settings.${prefix}custom_borders == true and ${item}.settings.${prefix}border_type != 'none' and ${item}.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
        },
        {
            "type": "range",
            "label": "Border Right",
            "id": prefix + "border_right",
            "min": 0,
            "max": 20,
            "unit": "px",
            "default": 0,
            "visible_if": `{{ ${item}.settings.${prefix}custom_borders == true and ${item}.settings.${prefix}border_type != 'none' and ${item}.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
        },
        {
            "type": "range",
            "label": "Border Bottom",
            "id": prefix + "border_bottom",
            "min": 0,
            "max": 20,
            "unit": "px",
            "default": 0,
            "visible_if": `{{ ${item}.settings.${prefix}custom_borders == true and ${item}.settings.${prefix}border_type != 'none' and ${item}.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
        },
        {
            "type": "range",
            "label": "Border Left",
            "id": prefix + "border_left",
            "min": 0,
            "max": 20,
            "unit": "px",
            "default": 0,
            "visible_if": `{{ ${item}.settings.${prefix}custom_borders == true and ${item}.settings.${prefix}border_type != 'none' and ${item}.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
        },

        // Border Radius Settings
        {
            "type": "header",
            "content": "Border Radius",
            "visible_if": `{{ ${item}.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
        },
        {
            "type": "checkbox",
            "label": "Custom Border Radius",
            "id": prefix + "custom_border_radius",
            "default": false,
            "visible_if": `{{ ${item}.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
        },
        {
            "type": "range",
            "label": "Radius",
            "id": prefix + "border_radius_all",
            "min": 0,
            "max": 100,
            "unit": "px",
            "default": 0,
            "visible_if": `{{ ${item}.settings.${prefix}custom_border_radius == false and ${item}.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
        },
        {
            "type": "range",
            "label": "Radius Top",
            "id": prefix + "radius_top",
            "min": 0,
            "max": 100,
            "unit": "px",
            "default": 0,
            "visible_if": `{{ ${item}.settings.${prefix}custom_border_radius == true and ${item}.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
        },
        {
            "type": "range",
            "label": "Radius Right",
            "id": prefix + "radius_right",
            "min": 0,
            "max": 100,
            "unit": "px",
            "default": 0,
            "visible_if": `{{ ${item}.settings.${prefix}custom_border_radius == true and ${item}.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
        },
        {
            "type": "range",
            "label": "Radius Bottom",
            "id": prefix + "radius_bottom",
            "min": 0,
            "max": 100,
            "unit": "px",
            "default": 0,
            "visible_if": `{{ ${item}.settings.${prefix}custom_border_radius == true and ${item}.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
        },
        {
            "type": "range",
            "label": "Radius Left",
            "id": prefix + "radius_left",
            "min": 0,
            "max": 100,
            "unit": "px",
            "default": 0,
            "visible_if": `{{ ${item}.settings.${prefix}custom_border_radius == true and ${item}.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
        },

        // Box Shadow Settings
        {
            "type": "header",
            "content": "Box Shadow",
            "visible_if": `{{ ${item}.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
        },
        {
            "type": "checkbox",
            "label": "Enable Box Shadow",
            "id": prefix + "box_shadow_enabled",
            "default": false,
            "visible_if": `{{ ${item}.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
        },
        {
            "type": "color",
            "label": "Box Shadow Color",
            "id": prefix + "box_shadow_color",
            "default": "#000000",
            "visible_if": `{{ ${item}.settings.${prefix}box_shadow_enabled == true and ${item}.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
        },
        {
            "type": "number",
            "label": "Horizontal Offset (px)",
            "id": prefix + "box_shadow_h_offset",
            "default": 0,
            "visible_if": `{{ ${item}.settings.${prefix}box_shadow_enabled == true and ${item}.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
        },
        {
            "type": "number",
            "label": "Vertical Offset (px)",
            "id": prefix + "box_shadow_v_offset",
            "default": 0,
            "visible_if": `{{ ${item}.settings.${prefix}box_shadow_enabled == true and ${item}.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
        },
        {
            "type": "number",
            "label": "Blur Radius (px)",
            "id": prefix + "box_shadow_blur",
            "default": 0,
            "visible_if": `{{ ${item}.settings.${prefix}box_shadow_enabled == true and ${item}.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
        },
        {
            "type": "number",
            "label": "Spread Radius (px)",
            "id": prefix + "box_shadow_spread",
            "default": 0,
            "visible_if": `{{ ${item}.settings.${prefix}box_shadow_enabled == true and ${item}.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
        },
        {
            "type": "select",
            "label": "Position",
            "id": prefix + "box_shadow_position",
            "options": [
            { "label": "Outside", "value": "outset" },
            { "label": "Inside", "value": "inset" }
            ],
            "visible_if": `{{ ${item}.settings.${prefix}box_shadow_enabled == true and ${item}.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
        },
    ]
}

export default borderSchema;