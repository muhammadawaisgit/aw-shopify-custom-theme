function backgroundSchema(item, prefix, breakpointLabels){
    return [
        // Background Settings
        {
            "type": "header",
            "content": "Background",
            "visible_if": `{{ ${item}.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
        },
        {
            "type": "select",
            "label": "Background Type",
            "id": `${prefix}background_type`,
            "options": [
            ...(prefix !== "" ? [{ label: "Off", value: "off" }] : []),
            { "label": "Classic", "value": "classic" },
            { "label": "Gradient", "value": "gradient" }
            ],
            "visible_if": `{{ ${item}.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
        },

        // Classic Background Settings
        {
            "type": "color",
            "label": "Background Color",
            "id": `${prefix}background_color`,
            "default": "transparent",
            "visible_if": `{{ ${item}.settings.${prefix}background_type == 'classic' and ${item}.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
        },
        {
            "type": "checkbox",
            "label": "Background Image",
            "id": `${prefix}background_image_enabled`,
            "default": false,
            "visible_if": `{{ ${item}.settings.${prefix}background_type == 'classic' and ${item}.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
        },
        {
            "type": "image_picker",
            "label": "Background Image",
            "id": `${prefix}background_image`,
            "visible_if": `{{ ${item}.settings.${prefix}background_image_enabled == true and ${item}.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
        },
        {
            "type": "select",
            "label": "Position",
            "id": `${prefix}background_position`,
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
            "visible_if": `{{ ${item}.settings.${prefix}background_image_enabled == true and ${item}.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
        },
        {
            "type": "select",
            "label": "Attachement",
            "id": `${prefix}background_attachment`,
            "options": [
            { "label": "Scroll", "value": "scroll" },
            { "label": "Fixed", "value": "fixed" }
            ],
            "default": "scroll",
            "visible_if": `{{ ${item}.settings.${prefix}background_image_enabled == true and ${item}.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
        },
        {
            "type": "select",
            "label": "Repeat",
            "id": `${prefix}background_repeat`,
            "options": [
            { "label": "No Repeat", "value": "no-repeat" },
            { "label": "Repeat", "value": "repeat" },
            { "label": "Repeat X", "value": "repeat-x" },
            { "label": "Repeat Y", "value": "repeat-y" }
            ],
            "default": "no-repeat",
            "visible_if": `{{ ${item}.settings.${prefix}background_image_enabled == true and ${item}.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
        },
        {
            "type": "select",
            "label": "Display Size",
            "id": `${prefix}background_size`,
            "options": [
            { "label": "Auto", "value": "auto" },
            { "label": "Cover", "value": "cover" },
            { "label": "Contain", "value": "contain" }
            ],
            "default": "cover",
            "visible_if": `{{ ${item}.settings.${prefix}background_image_enabled == true and ${item}.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
        },

        // Gradient Background Settings
        {
            "type": "color",
            "label": "First Color",
            "id": `${prefix}gradient_first_color`,
            "default": "#000000",
            "visible_if": `{{ ${item}.settings.${prefix}background_type == 'gradient' and ${item}.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
        },
        {
            "type": "range",
            "label": "Location",
            "id": `${prefix}first_gradient_location`,
            "min": 0,
            "max": 100,
            "unit": "%",
            "default": 0,
            "visible_if": `{{ ${item}.settings.${prefix}background_type == 'gradient' and ${item}.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
        },
        {
            "type": "color",
            "label": "Second Color",
            "id": `${prefix}gradient_second_color`,
            "default": "#ffffff",
            "visible_if": `{{ ${item}.settings.${prefix}background_type == 'gradient' and ${item}.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
        },
        {
            "type": "range",
            "label": "Location",
            "id": `${prefix}second_gradient_location`,
            "min": 0,
            "max": 100,
            "unit": "%",
            "default": 100,
            "visible_if": `{{ ${item}.settings.${prefix}background_type == 'gradient' and ${item}.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
        },
        {
            "type": "select",
            "label": "Gradient Type",
            "id": `${prefix}gradient_type`,
            "options": [
            { "label": "Linear", "value": "linear" },
            { "label": "Radial", "value": "radial" }
            ],
            "default": "linear",
            "visible_if": `{{ ${item}.settings.${prefix}background_type == 'gradient' and ${item}.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
        },
        {
            "type": "number",
            "label": "Angle (degrees)",
            "id": `${prefix}gradient_angle`,
            "default": 90,
            "visible_if": `{{ ${item}.settings.${prefix}background_type == 'gradient' and ${item}.settings.${prefix}gradient_type == 'linear' and ${item}.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
        },
    ]
}

export default backgroundSchema;