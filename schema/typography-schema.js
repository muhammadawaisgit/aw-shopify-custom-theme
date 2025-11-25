function typographySchema(item, prefix, breakpointLabels){

    return [
        // Typography Settings
        {
            "type": "header",
            "content": "Typography",
            "visible_if": `{{ ${item}.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
        },
        {
            "type": "select",
            "id": `${prefix}font_family`,
            "label": "Font Family",
            "options": [
                {
                    "value": "'Work Sans', sans-serif",
                    "label": "Default"
                },
                {
                    "value": "Montserrat ,'Work Sans', sans-serif",
                    "label": "Montserrat"
                },
                {
                    "value": "Satoshi,sans-serif",
                    "label": "Satoshi"
                },
                {
                    "value": "serif",
                    "label": "Serif"
                },
                {
                    "value": "sans-serif",
                    "label": "Sans Serif"
                },
                {
                    "value": "monospace",
                    "label": "Monospace"
                },
            ],
            "visible_if": `{{ ${item}.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
        },
        {
            "type": "select",
            "label": "Unit",
            "id": `${prefix}font_unit`,
            "options": [
                ...(prefix !== "" ? [{ label: "Off", value: "off" }] : []),
                {
                    "value": "px",
                    "label": "px"
                },
                {
                    "value": "em",
                    "label": "em"
                },
                {
                    "value": "rem",
                    "label": "rem"
                },
                {
                    "value": "vw",
                    "label": "vw"
                }
            ],
            "visible_if": `{{ ${item}.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
        },
        {
            "type": "range",
            "id": `${prefix}font_size`,
            "label": "Font Size",
            "min": 10,
            "max": 100,
            "step": 1,
            "default": 24,
            "visible_if": `{{ ${item}.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
        },
        {
            "type": "select",
            "id": `${prefix}font_weight`,
            "label": "Weight",
            "options": [
                ...(prefix !== "" ? [{ label: "Off", value: "off" }] : []),
                {
                    "value": "100",
                    "label": "Thin"
                },
                {
                    "value": "200",
                    "label": "Extra Light"
                },
                {
                    "value": "300",
                    "label": "Light"
                },
                {
                    "value": "400",
                    "label": "Normal"
                },
                {
                    "value": "500",
                    "label": "Medium"
                },
                {
                    "value": "600",
                    "label": "Semi Bold"
                },
                {
                    "value": "700",
                    "label": "Bold"
                },
                {
                    "value": "800",
                    "label": "Extra Bold"
                },
                {
                    "value": "900",
                    "label": "Black"
                }
            ],
            "default": "400",
            "visible_if": `{{ ${item}.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
        },
        {
            "type": "select",
            "id": `${prefix}text_transform`,
            "label": "Transform",
            "options": [
                ...(prefix !== "" ? [{ label: "Off", value: "off" }] : []),
                {
                    "value": "none",
                    "label": "Normal"
                },
                {
                    "value": "uppercase",
                    "label": "Uppercase"
                },
                {
                    "value": "lowercase",
                    "label": "Lowercase"
                },
                {
                    "value": "capitalize",
                    "label": "Capitalize"
                }
            ],
            "default": "none",
            "visible_if": `{{ ${item}.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
        },
        {
            "type": "select",
            "id": `${prefix}font_style`,
            "label": "Style",
            "options": [
                ...(prefix !== "" ? [{ label: "Off", value: "off" }] : []),
                {
                    "value": "normal",
                    "label": "Normal"
                },
                {
                    "value": "italic",
                    "label": "Italic"
                },
                {
                    "value": "oblique",
                    "label": "Oblique"
                }
            ],
            "default": "normal",
            "visible_if": `{{ ${item}.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
        },
        {
            "type": "select",
            "id": `${prefix}text_decoration`,
            "label": "Decoration",
            "options": [
                ...(prefix !== "" ? [{ label: "Off", value: "off" }] : []),
                {
                    "value": "none",
                    "label": "None"
                },
                {
                    "value": "underline",
                    "label": "Underline"
                },
                {
                    "value": "overline",
                    "label": "Overline"
                },
                {
                    "value": "line-through",
                    "label": "Line Through"
                }
            ],
            "visible_if": `{{ ${item}.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
        },
        {
            "type": "range",
            "id": `${prefix}line_height`,
            "label": "Line Height",
            "min": 1,
            "max": 5,
            "step": 0.1,
            "default": 1.2,
            "visible_if": `{{ ${item}.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
        },
        {
            "type": "range",
            "id": `${prefix}letter_spacing`,
            "label": "Letter Spacing",
            "min": 0,
            "max": 10,
            "step": 0.1,
            "default": 0,
            "visible_if": `{{ ${item}.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
        },
    ]
}

export default typographySchema