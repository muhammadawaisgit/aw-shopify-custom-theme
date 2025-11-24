// schemas/blocks/test.js

import { defineSectionSchema } from 'shopify-schema-utils';

const name = 'Test-block';

let breakpoints = ['','tablet_', 'mobile_'];

export default defineSectionSchema({
    name,
    blocks: [
        { type: '@theme' }
    ],
    settings: [
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
        // Spread the dynamically generated settings
        ...breakpoints.flatMap(prefix => (
            [
                {
                    type: "select",
                    label: "Container Layout",
                    id: `${prefix}container_layout`,
                    options: [
                        ...(prefix !== "" ? [{ label: "Off", value: "off" }] : []),
                        { label: "Flexbox", value: "flex" },
                        { label: "Grid", value: "grid" }
                    ]
                },
                {
                    type: "select",
                    label: "Test Layout",
                    id: `${prefix}container_layout`,
                    options: [
                        { label: "Flexbox", value: "flex" },
                        { label: "Grid", value: "grid" }
                    ]
                }
            ]
        )),
    ],
    presets: [
        { name, category: 'layout' }
    ], 
}); 