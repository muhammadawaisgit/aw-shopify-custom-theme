function customWidthSchema(item, prefix, breakpointLabels){
    return [
        {
            "type": "checkbox",
            "label": "Custom Width",
            "id": `${prefix}custom_width_enable`,
            "default": false,
            "visible_if": `{{ ${item}.settings.breakpoint-selector == '${breakpointLabels}' }}`
        },
        {
            "type": "select",
            "label": "Unit",
            "id": `${prefix}custom_width_unit`,
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
            "visible_if": `{{ ${item}.settings.${prefix}custom_width_enable == true and ${item}.settings.breakpoint-selector == '${breakpointLabels}' }}`,
        },
        {
            "type": "number",
            "label": "Width (px)",
            "id": `${prefix}custom_width`,
            "visible_if": `{{ ${item}.settings.${prefix}custom_width_enable == true and ${item}.settings.breakpoint-selector == '${breakpointLabels}' }}`,
        },
    ]
}

export default customWidthSchema