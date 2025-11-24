function paddingSchema(prefix, breakpointLabels){
    return [
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
    ]
}

export default paddingSchema;