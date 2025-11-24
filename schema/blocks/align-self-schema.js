function alignSelfSchema(item, prefix, breakpointLabels){
    return [
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
            "visible_if": `{{ ${item}.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
        }
    ]
}

export default alignSelfSchema;