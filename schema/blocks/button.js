import { defineBlockSchema } from "shopify-schema-utils";
import { breakpoints, breakpointLabels } from "../breakpoints";
import typographySchema from "../typography-schema";
import borderSchema from '../border-schema';
import marginSchema from '../margin-schema';
import paddingSchema from '../padding-schema';
import alignSelfSchema from "../align-self-schema";
import customWidthSchema from "../custom-width-schema";

const name = 'button';

export default defineBlockSchema({
    "name": "Button",
    "class": `pb-${name}-block`,
    "settings": [
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
            "type": "text",
            "id": `button_text`,
            "label": "Button Text",
            "default": "Click Me",
            "visible_if": `{{ block.settings.breakpoint-selector == 'desktop' }}`
        },
        {
            "type": "checkbox",
            "label": "Enable Link",
            "id": `enable_link`,
            "default": false,
            "visible_if": `{{ block.settings.breakpoint-selector == 'desktop' }}`
        },
        {
            "type": "url",
            "id": `button_link`,
            "label": "Link",
            "visible_if": `{{ block.settings.enable_link == true and block.settings.breakpoint-selector == 'desktop' }}`
        },
        {
            "type": "checkbox",
            "label": "Open in New Tab",
            "id": `open_in_new_tab`,
            "default": false,
            "visible_if": `{{ block.settings.enable_link == true and block.settings.breakpoint-selector == 'desktop' }}`
        },
        {
            "type": "checkbox",
            "label": "Add Nofollow",
            "id": `add_nofollow`,
            "default": false,
            "visible_if": `{{ block.settings.enable_link == true and block.settings.breakpoint-selector == 'desktop' }}`
        },
        {
            "type": "header",
            "content": "Icon Settings",
            "visible_if": `{{ block.settings.breakpoint-selector == 'desktop' }}`
        },
        {
            "type": "checkbox",
            "label": "Enable Icon",
            "id": `enable_icon`,
            "default": false,
            "visible_if": `{{ block.settings.breakpoint-selector == 'desktop' }}`
        },
        {
            "type": "image_picker",
            "id": `button_icon`,
            "label": "Button Icon",
            "visible_if": `{{ block.settings.enable_icon == true and block.settings.breakpoint-selector == 'desktop' }}`
        },
        {
            "type": "select",
            "id": `icon_position`,
            "label": "Icon Position",
            "options": [
                {
                    "value": "left",
                    "label": "Left"
                },
                {
                    "value": "right",
                    "label": "Right"
                }
            ],
            "default": "left",
            "visible_if": `{{ block.settings.enable_icon == true and block.settings.breakpoint-selector == 'desktop' }}`
        },
        {
            "type": "range",
            "label": "Icon Spacing",
            "id": `icon_spacing`,
            "min": 0,
            "max": 50,
            "step": 1,
            "default": 8,
            "unit": "px",
            "visible_if": `{{ block.settings.enable_icon == true and block.settings.breakpoint-selector == 'desktop' }}`
        },
        // Button Styles
        {
            "type": "header",
            "content": "Button Styles",
        },
        ...breakpoints.flatMap(prefix => ([
            // Button Alignment
            {
                "type": "select",
                "label": "Alignment",
                "id": `${prefix}button_alignment`,
                "options": [
                    ...(prefix !== "" ? [{ label: "Off", value: "off" }] : []),
                    {
                        "value": "left",
                        "label": "Left"
                    },
                    {
                        "value": "center",
                        "label": "Center"
                    },
                    {
                        "value": "right",
                        "label": "Right"
                    },
                    {
                        "value": "justify",
                        "label": "Justified"
                    }
                ],  
                "visible_if": `{{ block.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
            },
            // Color Settings
            {
                "type": "header",
                "content": "Color",
                "visible_if": `{{ block.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
            },
            {
                "type": "color",
                "id": `${prefix}text_color`,
                "label": "Text Color",
                "default": "#000000",
                "visible_if": `{{ block.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
            },
            {
                "type": "color",
                "id": `${prefix}background_color`,
                "label": "Background Color",
                "default": "#ffffff",
                "visible_if": `{{ block.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
            },

            // Hover Color Settings
            {
                "type": "checkbox",
                "label": "Hover Enable",
                "id": `${prefix}hover_color_enable`,
                "visible_if": `{{ block.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
            },
            {
                "type": "header",
                "content": "Hover Color",
                "visible_if": `{{ block.settings.hover_color_enable == true and block.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
            },
            {
                "type": "range",
                "id": `${prefix}color_transition_duration`,
                "label": "Duration",
                "max": 3,
                "min": 0,
                "step": 0.1,
                "default": 0.3,
                "unit": "s",
                "visible_if": `{{ block.settings.hover_color_enable == true and block.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
            },
            {
                "type": "color",
                "id": `${prefix}hover_text_color`,
                "label": "Text Color",
                "default": "#000000",
                "visible_if": `{{ block.settings.hover_color_enable == true and block.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
            },
            {
                "type": "color",
                "id": `${prefix}hover_background_color`,
                "label": "Background Color",
                "default": "#ffffff",
                "visible_if": `{{ block.settings.hover_color_enable == true and block.settings.breakpoint-selector == '${breakpointLabels[prefix]}' }}`
            },

            ...typographySchema('block' ,prefix, breakpointLabels),

            ...borderSchema('block' ,prefix, breakpointLabels),
            
            ...marginSchema('block' ,prefix, breakpointLabels),
            
            ...paddingSchema('block' ,prefix, breakpointLabels),
            
            ...alignSelfSchema('block' ,prefix, breakpointLabels),

            ...customWidthSchema('block' ,prefix, breakpointLabels),
        ]))
    ],
    "presets": [
        {
            "name": "Button",
            "category": "Builder Elements",
            "settings": {
            "breakpoint-selector": "tablet",
            "button_text": "Shop Now",
            "enable_link": true,
            "button_link": "shopify://collections/all",
            "open_in_new_tab": false,
            "add_nofollow": false,
            "enable_icon": false,
            "icon_position": "left",
            "icon_spacing": 8,
            "button_alignment": "left",
            "text_color": "#FFFFFF",
            "background_color": "#000000",
            "hover_color_enable": false,
            "color_transition_duration": 0.3,
            "hover_text_color": "#000000",
            "hover_background_color": "#ffffff",
            "font_family": "'Work Sans', sans-serif",
            "font_unit": "px",
            "font_size": 16,
            "font_weight": "500",
            "text_transform": "none",
            "font_style": "normal",
            "text_decoration": "none",
            "line_height": 1.2,
            "letter_spacing": 0,
            "border_type": "none",
            "border_color": "#000000",
            "custom_borders": false,
            "border_all": 0,
            "border_top": 0,
            "border_right": 0,
            "border_bottom": 0,
            "border_left": 0,
            "custom_border_radius": false,
            "border_radius_all": 100,
            "radius_top": 0,
            "radius_right": 0,
            "radius_bottom": 0,
            "radius_left": 0,
            "box_shadow_enabled": false,
            "box_shadow_color": "#000000",
            "box_shadow_h_offset": 0,
            "box_shadow_v_offset": 0,
            "box_shadow_blur": 0,
            "box_shadow_spread": 0,
            "box_shadow_position": "outset",
            "margin_type": "auto",
            "auto_margin_position": "all",
            "margin_all": 0,
            "margin_top": 0,
            "margin_right": 0,
            "margin_bottom": 0,
            "margin_left": 0,
            "padding_type": "separate",
            "padding_all": 0,
            "padding_top": 15,
            "padding_right": 68,
            "padding_bottom": 15,
            "padding_left": 68,
            "align_self": "auto",
            "custom_width_enable": false,
            "custom_width_unit": "px",
            "tablet_button_alignment": "off",
            "tablet_text_color": "transparent",
            "tablet_background_color": "transparent",
            "tablet_hover_color_enable": false,
            "tablet_color_transition_duration": 0,
            "tablet_hover_text_color": "transparent",
            "tablet_hover_background_color": "transparent",
            "tablet_font_unit": "off",
            "tablet_font_size": 10,
            "tablet_font_weight": "off",
            "tablet_text_transform": "off",
            "tablet_font_style": "off",
            "tablet_text_decoration": "off",
            "tablet_line_height": 0.5,
            "tablet_letter_spacing": 0,
            "tablet_border_type": "off",
            "tablet_border_color": "#000000",
            "tablet_custom_borders": false,
            "tablet_border_all": 0,
            "tablet_border_top": 0,
            "tablet_border_right": 0,
            "tablet_border_bottom": 0,
            "tablet_border_left": 0,
            "tablet_custom_border_radius": false,
            "tablet_border_radius_all": 0,
            "tablet_radius_top": 0,
            "tablet_radius_right": 0,
            "tablet_radius_bottom": 0,
            "tablet_radius_left": 0,
            "tablet_box_shadow_enabled": false,
            "tablet_box_shadow_color": "#000000",
            "tablet_box_shadow_h_offset": 0,
            "tablet_box_shadow_v_offset": 0,
            "tablet_box_shadow_blur": 0,
            "tablet_box_shadow_spread": 0,
            "tablet_box_shadow_position": "outset",
            "tablet_margin_type": "off",
            "tablet_auto_margin_position": "all",
            "tablet_margin_all": 0,
            "tablet_margin_top": 0,
            "tablet_margin_right": 0,
            "tablet_margin_bottom": 0,
            "tablet_margin_left": 0,
            "tablet_padding_type": "auto",
            "tablet_padding_all": 0,
            "tablet_padding_top": 20,
            "tablet_padding_right": 20,
            "tablet_padding_bottom": 20,
            "tablet_padding_left": 20,
            "tablet_align_self": "auto",
            "tablet_custom_width_enable": false,
            "tablet_custom_width_unit": "off"
            },
        }
    ]
});