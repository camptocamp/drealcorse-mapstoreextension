export const mockSchemas = [
    {
        "id": "12345678-1234-5678-1234-567812345678",
        "name": "model1",
        "layer_id": "espub_mob:gev_ajeu",
        "readOnly":	false,
        "JSONSchema": {
            "$schema": "http://json-schema.org/draft-07/schema#",
            "definitions": {
                "Model1CustomFieldsSchema": {
                    "type": "object",
                    "readOnly":	false,
                    "required": [
                        "boolean",
                        "category",
                        "date",
                        "number"
                    ],
                    "properties": {
                        "boolean": {
                            "title": "boolean",
                            "type": "boolean"
                        },
                        "category": {
                            "title": "category",
                            "type": "string",
                            "enum": [
                                "category1",
                                "category2"
                            ]
                        },
                        "commentaire": {
                            "title": "commentaire",
                            "type": "string"
                        },
                        "date": {
                            "title": "date",
                            "type": "string",
                            "format": "date"
                        },
                        "file": {
                            "format": "data-url",
                            "title": "file",
                            "type": "string"
                        },
                        "number": {
                            "title": "number",
                            "type": "number",
                            "format": "decimal"
                        }
                    },
                    "additionalProperties": false
                },
                "Model1ReportSchema": {
                    "type": "object",
                    "readOnly":	false,
                    "required": [
                        "feature_id",
                        "report_model_id"
                    ],
                    "properties": {
                        "custom_field_values": {
                            "title": "",
                            "type": "object",
                            "$ref": "#/definitions/Model1CustomFieldsSchema",
                            "ui:order": [
                                "category",
                                "date",
                                "number",
                                "boolean",
                                "file",
                                "commentaire"
                            ]
                        },
                        "feature_id": {
                            "title": "feature_id",
                            "type": "string",
                            "ui:widget": "hidden"
                        },
                        "id": {
                            "title": "id",
                            "type": "string",
                            "ui:widget": "hidden"
                        },
                        "report_model_id": {
                            "title": "report_model_id",
                            "type": "string",
                            "default": "12345678-1234-5678-1234-567812345678",
                            "ui:widget": "hidden"
                        }
                    },
                    "additionalProperties": false
                }
            },
            "$ref": "#/definitions/Model1ReportSchema"
        },
        "UISchema": {
            "ui:order": [
                "id",
                "feature_id",
                "report_model_id",
                "custom_field_values"
            ],
            "report_model_id": {
                "ui:widget": "hidden"
            },
            "custom_field_values": {
                "ui:order": [
                    "category",
                    "date",
                    "number",
                    "boolean",
                    "file",
                    "commentaire"
                ]
            },
            "feature_id": {
                "ui:widget": "hidden"
            },
            "id": {
                "ui:widget": "hidden"
            }
        }
    },
    {
        "id": "12345678-1234-5678-1234-567812345679",
        "name": "model2",
        "layer_id": "espub_mob:gev_jeu",
        "readOnly":	true,
        "JSONSchema": {
            "$schema": "http://json-schema.org/draft-07/schema#",
            "definitions": {
                "Model2CustomFieldsSchema": {
                    "type": "object",
                    "readOnly":	false,
                    "properties": {
                        "commentaire": {
                            "title": "commentaire",
                            "type": "string"
                        }
                    },
                    "additionalProperties": false
                },
                "Model2ReportSchema": {
                    "type": "object",
                    "readOnly":	false,
                    "required": [
                        "feature_id",
                        "report_model_id"
                    ],
                    "properties": {
                        "custom_field_values": {
                            "title": "",
                            "type": "object",
                            "$ref": "#/definitions/Model2CustomFieldsSchema",
                            "ui:order": [
                                "commentaire"
                            ]
                        },
                        "feature_id": {
                            "title": "feature_id",
                            "type": "string",
                            "ui:widget": "hidden"
                        },
                        "id": {
                            "title": "id",
                            "type": "string",
                            "ui:widget": "hidden"
                        },
                        "report_model_id": {
                            "title": "report_model_id",
                            "type": "string",
                            "default": "12345678-1234-5678-1234-567812345679",
                            "ui:widget": "hidden"
                        }
                    },
                    "additionalProperties": false
                }
            },
            "$ref": "#/definitions/Model2ReportSchema"
        },
        "UISchema": {
            "ui:order": [
                "id",
                "feature_id",
                "report_model_id",
                "custom_field_values"
            ],
            "report_model_id": {
                "ui:widget": "hidden"
            },
            "custom_field_values": {
                "ui:order": [
                    "commentaire"
                ]
            },
            "feature_id": {
                "ui:widget": "hidden"
            },
            "id": {
                "ui:widget": "hidden"
            }
        }
    }
]