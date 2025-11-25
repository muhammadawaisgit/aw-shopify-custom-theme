function marginSchema(item, prefix, breakpointLabels){
    return [
        // Margin Settings
        {
            "type": "header",
            "content": "Layout",
            "visible_if": `{{ ${item}.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
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
            "visible_if": `{{ ${item}.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
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
            "visible_if": `{{ ${item}.settings.breakpoint-selector == 'desktop' and ${item}.settings.margin_type == 'auto' }}`
        },
        {
            "type": "range",
            "label": "Margin",
            "id": prefix + "margin_all",
            "min": 0,
            "max": 100,
            "unit": "px",
            "default": 0,
            "visible_if": `{{ ${item}.settings.margin_type == 'custom' and ${item}.settings.breakpoint-selector == 'desktop' }}`
        },
        {
            "type": "range",
            "label": "Margin Top",
            "id": prefix + "margin_top",
            "min": 0,
            "max": 100,
            "unit": "px",
            "default": 0,
            "visible_if": `{{ ${item}.settings.margin_type == 'separate' and ${item}.settings.breakpoint-selector == 'desktop' }}`
        },
        {
            "type": "range",
            "label": "Margin Right",
            "id": prefix + "margin_right",
            "min": 0,
            "max": 100,
            "unit": "px",
            "default": 0,
            "visible_if": `{{ ${item}.settings.margin_type == 'separate' and ${item}.settings.breakpoint-selector == 'desktop' }}`
        },
        {
            "type": "range",
            "label": "Margin Bottom",
            "id": prefix + "margin_bottom",
            "min": 0,
            "max": 100,
            "unit": "px",
            "default": 0,
            "visible_if": `{{ ${item}.settings.margin_type == 'separate' and ${item}.settings.breakpoint-selector == 'desktop' }}`
        },
        {
            "type": "range",
            "label": "Margin Left",
            "id": prefix + "margin_left",
            "min": 0,
            "max": 100,
            "unit": "px",
            "default": 0,
            "visible_if": `{{ ${item}.settings.margin_type == 'separate' and ${item}.settings.breakpoint-selector == 'desktop' }}`
        },
    ]
}

export default marginSchema;