export let obj = {
  New_Request: {
    id: 1,
    type: "top",
    navigationText: "Next",
    children: {
      Service_Request: {
        id: "2",
        parent: "1",
        type: "button",
        navigationText: "Next",
        children: {
          Emergency__After_Hours: {
            id: "158",
            parent: "2",
            type: "button",
            navigationText: "Next",
            children: {
              Message: {
                id: "160",
                parent: "158",
                navigationText: "Finish",
                text: "1. Call BRE Emergency Response\\nfor Water/Fire/Property Restoration\\n\\n2. Call Vendor directly and submit\\ninvoice through CAPEX Request Feature",
                type: "message",
              },
            },
          },
          Non_Emergency: {
            id: "159",
            parent: "2",
            type: "button",
            navigationText: "Next",
            children: {
              Common_Area: {
                id: "161",
                parent: "159",
                type: "button",
                navigationText: "Next",
                children: {
                  Other: {
                    id: "163",
                    parent: "161",
                    type: "button",
                    navigationText: "Next",
                    children: {
                      Message: {
                        id: "173",
                        parent: "163",
                        navigationText: "Finish",
                        text: "Call vendor directly and submit invoice through CAPEX Request.",
                        type: "message",
                      },
                    },
                  },
                  Plumbing: {
                    id: "164",
                    parent: "161",
                    type: "button",
                    navigationText: "Next",
                    children: {
                      Boiler__Hot_Water_Heater: {
                        id: "174",
                        parent: "164",
                        type: "button",
                        navigationText: "Next",
                        children: {
                          Form: {
                            id: "178",
                            parent: "174",
                            navigationText: "Submit",
                            requestCategory: "ServiceRequest",
                            type: "form",
                            upload: "files,photos",
                            children: {
                              Message: {
                                id: "179",
                                parent: "178",
                                navigationText: "Finish",
                                text: "Service Request Submitted\\n\\nNGage will dispatch a technician and notify you prior to arrival.",
                                type: "message",
                              },
                            },
                          },
                        },
                      },
                      Water_Softener: {
                        id: "175",
                        parent: "164",
                        type: "button",
                        navigationText: "Next",
                        children: {
                          Form: {
                            id: "184",
                            parent: "175",
                            navigationText: "Submit",
                            requestCategory: "ServiceRequest",
                            type: "form",
                            upload: "files,photos",
                            children: {
                              Message: {
                                id: "185",
                                parent: "184",
                                navigationText: "Finish",
                                text: "Service Request Submitted\\n\\nNGage will dispatch a technician and notify you prior to arrival.",
                                type: "message",
                              },
                            },
                          },
                        },
                      },
                      Circulation_Pump: {
                        id: "176",
                        parent: "164",
                        type: "button",
                        navigationText: "Next",
                        children: {
                          Form: {
                            id: "180",
                            parent: "176",
                            navigationText: "Submit",
                            requestCategory: "ServiceRequest",
                            type: "form",
                            upload: "files,photos",
                            children: {
                              Message: {
                                id: "181",
                                parent: "180",
                                navigationText: "Finish",
                                text: "Service Request Submitted\\n\\nNGage will dispatch a technician and notify you prior to arrival.",
                                type: "message",
                              },
                            },
                          },
                        },
                      },
                      Pipe_Repair: {
                        id: "177",
                        parent: "164",
                        type: "button",
                        navigationText: "Next",
                        children: {
                          Form: {
                            id: "182",
                            parent: "177",
                            navigationText: "Submit",
                            requestCategory: "ServiceRequest",
                            type: "form",
                            upload: "files,photos",
                            children: {
                              Message: {
                                id: "183",
                                parent: "182",
                                navigationText: "Finish",
                                text: "Service Request Submitted\\n\\nNGage will dispatch a technician and notify you prior to arrival.",
                                type: "message",
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                  HVAC: {
                    id: "165",
                    parent: "161",
                    type: "button",
                    navigationText: "Next",
                    children: {
                      Equipment_List: {
                        id: "167",
                        parent: "165",
                        type: "list",
                        navigationText: "Next",
                        query: 'apiGetEquipments("hvac")',
                        children: {
                          Form: {
                            id: "169",
                            parent: "167",
                            navigationText: "Submit",
                            requestCategory: "ServiceRequest",
                            type: "form",
                            upload: "files,photos",
                            children: {
                              Message: {
                                id: "170",
                                parent: "169",
                                navigationText: "Finish",
                                text: "Service Request Submitted\\n\\nNGage will dispatch a technician and notify you prior to arrival.",
                                type: "message",
                              },
                            },
                          },
                        },
                      },
                      Other: {
                        id: "168",
                        parent: "165",
                        type: "button",
                        navigationText: "Next",
                        children: {
                          Form: {
                            id: "171",
                            parent: "168",
                            navigationText: "Submit",
                            requestCategory: "ServiceRequest",
                            type: "form",
                            upload: "files,photos",
                            children: {
                              Message: {
                                id: "172",
                                parent: "171",
                                navigationText: "Finish",
                                text: "Service Request Submitted\\n\\nNGage will dispatch a technician and notify you prior to arrival.",
                                type: "message",
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                  Refrigeration: {
                    id: "166",
                    parent: "161",
                    type: "button",
                    navigationText: "Next",
                    children: {
                      Other: {
                        id: "186",
                        parent: "166",
                        type: "button",
                        navigationText: "Next",
                        children: {
                          Form: {
                            id: "190",
                            parent: "186",
                            navigationText: "Submit",
                            requestCategory: "ServiceRequest",
                            type: "form",
                            upload: "files,photos",
                            children: {
                              Message: {
                                id: "191",
                                parent: "190",
                                navigationText: "Finish",
                                text: "Service Request Submitted\\n\\nNGage will dispatch a technician and notify you prior to arrival.",
                                type: "message",
                              },
                            },
                          },
                        },
                      },
                      Equipment_List: {
                        id: "187",
                        parent: "166",
                        type: "list",
                        query: 'apiGetEquipments("refrigeration")',
                        navigationText: "Next",
                        children: {
                          Form: {
                            id: "188",
                            parent: "187",
                            navigationText: "Submit",
                            requestCategory: "ServiceRequest",
                            type: "form",
                            upload: "files,photos",
                            children: {
                              Message: {
                                id: "189",
                                parent: "188",
                                navigationText: "Finish",
                                text: "Service Request Submitted\\n\\nNGage will dispatch a technician and notify you prior to arrival.",
                                type: "message",
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
              In_Room: {
                id: "162",
                parent: "159",
                type: "button",
                navigationText: "Next",
                children: {
                  Other: {
                    id: "192",
                    parent: "162",
                    navigationText: "Next",
                    type: "button",
                    children: {
                      Message: {
                        id: "196",
                        parent: "192",
                        navigationText: "Finish",
                        text: "Call vendor directly and submit invoice through CAPEX Request.",
                        type: "message",
                      },
                    },
                  },
                  HVAC: {
                    id: "193",
                    parent: "162",
                    navigationText: "Next",
                    type: "button",
                    children: {
                      Form: {
                        id: "194",
                        parent: "193",
                        navigationText: "Submit",
                        requestCategory: "ServiceRequest",
                        type: "form",
                        upload: "files,photos",
                        children: {
                          Message: {
                            id: "195",
                            parent: "194",
                            navigationText: "Finish",
                            text: "Service Request Submitted\\n\\nNGage will dispatch a technician and notify you prior to arrival.",
                            type: "message",
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      CAPEX_Request: {
        id: "3",
        parent: "1",
        navigationText: "Next",
        type: "button",
        children: {
          More_than_500: {
            id: "4",
            parent: "3",
            navigationText: "Next",
            type: "button",
            children: {
              Project_Proposed: {
                id: "7",
                parent: "4",
                navigationText: "Next",
                type: "button",
                children: {
                  Attic_Stock: {
                    id: "80",
                    parent: "7",
                    navigationText: "Next",
                    type: "button",
                    children: {
                      Other: {
                        id: "82",
                        parent: "80",
                        navigationText: "Next",
                        type: "button",
                        children: {
                          Message: {
                            id: "84",
                            parent: "82",
                            navigationText: "Finish",
                            text: "Does not qualify for NGage.\\n\\nPlease go through the standard CapEx process.",
                            type: "message",
                          },
                        },
                      },
                      PTAC_VTAC: {
                        id: "83",
                        parent: "80",
                        navigationText: "Next",
                        type: "button",
                        children: {
                          Form: {
                            id: "85",
                            parent: "83",
                            navigationText: "Submit",
                            requestCategory: "ProjectProposed",
                            type: "form",
                            upload: "proposal,photos",
                            children: {
                              Message: {
                                id: "86",
                                parent: "85",
                                navigationText: "Finish",
                                text: "Attic Stock Request Submitted.\\nNGage will forward a P.O. # to order equipment upon approval.\\n\\nPlease forward subsequent invoice to invoices@optecllc.com to process for payment.",
                                type: "message",
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                  Equipment_Replacement__Repair: {
                    id: "81",
                    parent: "7",
                    navigationText: "Next",
                    type: "button",
                    children: {
                      In_Room: {
                        id: "87",
                        parent: "81",
                        navigationText: "Next",
                        type: "button",
                        children: {
                          Plumbing: {
                            id: "125",
                            parent: "87",
                            navigationText: "Next",
                            type: "button",
                            children: {
                              Boiler__Hot_Water_Heater: {
                                id: "137",
                                parent: "125",
                                navigationText: "Next",
                                type: "button",
                                children: {
                                  Form: {
                                    id: "142",
                                    parent: "137",
                                    navigationText: "Submit",
                                    requestCategory: "ProjectProposed",
                                    type: "form",
                                    upload: "proposal,photos",
                                    children: {
                                      Message: {
                                        id: "143",
                                        parent: "142",
                                        navigationText: "Finish",
                                        text: "Equipment Replacement/Repair Request Submitted.\\n\\nNGage will review and P.O.# will be forwarded to you upon approval for project execution",
                                        type: "message",
                                      },
                                    },
                                  },
                                },
                              },
                              Circulation_Pump: {
                                id: "138",
                                parent: "125",
                                navigationText: "Next",
                                type: "button",
                                children: {
                                  Form: {
                                    id: "144",
                                    parent: "138",
                                    navigationText: "Submit",
                                    requestCategory: "ProjectProposed",
                                    type: "form",
                                    upload: "proposal,photos",
                                    children: {
                                      Message: {
                                        id: "145",
                                        parent: "144",
                                        navigationText: "Finish",
                                        text: "Equipment Replacement/Repair Request Submitted.\\n\\nNGage will review and P.O.# will be forwarded to you upon approval for project execution",
                                        type: "message",
                                      },
                                    },
                                  },
                                },
                              },
                              Water_Softener: {
                                id: "139",
                                parent: "125",
                                navigationText: "Next",
                                type: "button",
                                children: {
                                  Form: {
                                    id: "150",
                                    parent: "139",
                                    navigationText: "Submit",
                                    requestCategory: "ProjectProposed",
                                    type: "form",
                                    upload: "proposal,photos",
                                    children: {
                                      Message: {
                                        id: "151",
                                        parent: "150",
                                        navigationText: "Finish",
                                        text: "Equipment Replacement/Repair Request Submitted.\\n\\nNGage will review and P.O.# will be forwarded to you upon approval for project execution",
                                        type: "message",
                                      },
                                    },
                                  },
                                },
                              },
                              Other: {
                                id: "140",
                                parent: "125",
                                navigationText: "Next",
                                type: "button",
                                children: {
                                  Form: {
                                    id: "146",
                                    parent: "140",
                                    navigationText: "Submit",
                                    requestCategory: "ProjectProposed",
                                    type: "form",
                                    upload: "proposal,photos",
                                    children: {
                                      Message: {
                                        id: "147",
                                        parent: "146",
                                        navigationText: "Finish",
                                        text: "Equipment Replacement/Repair Request Submitted.\\n\\nNGage will review and P.O.# will be forwarded to you upon approval for project execution",
                                        type: "message",
                                      },
                                    },
                                  },
                                },
                              },
                              Pipe_Repair: {
                                id: "141",
                                parent: "125",
                                navigationText: "Next",
                                type: "button",
                                children: {
                                  Form: {
                                    id: "148",
                                    parent: "141",
                                    navigationText: "Submit",
                                    requestCategory: "ProjectProposed",
                                    type: "form",
                                    upload: "proposal,photos",
                                    children: {
                                      Message: {
                                        id: "149",
                                        parent: "148",
                                        navigationText: "Finish",
                                        text: "Equipment Replacement/Repair Request Submitted.\\n\\nNGage will review and P.O.# will be forwarded to you upon approval for project execution",
                                        type: "message",
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          Electrical: {
                            id: "126",
                            parent: "87",
                            navigationText: "Next",
                            type: "button",
                            children: {
                              Form: {
                                id: "129",
                                parent: "126",
                                navigationText: "Submit",
                                requestCategory: "ProjectProposed",
                                type: "form",
                                upload: "proposal,photos",
                                children: {
                                  Message: {
                                    id: "130",
                                    parent: "129",
                                    navigationText: "Finish",
                                    text: "Equipment Replacement/Repair Request Submitted.\\n\\nNGage will review and P.O.# will be forwarded to you upon approval for project execution.",
                                    type: "message",
                                  },
                                },
                              },
                            },
                          },
                          Refrigeration: {
                            id: "127",
                            parent: "87",
                            navigationText: "Next",
                            type: "button",
                            children: {
                              Equipment_List: {
                                id: "153",
                                parent: "127",
                                navigationText: "Next",
                                query: 'apiGetEquipments("refrigeration")',
                                type: "list",
                                children: {
                                  Form: {
                                    id: "154",
                                    parent: "153",
                                    navigationText: "Submit",
                                    requestCategory: "ProjectProposed",
                                    type: "form",
                                    upload: "proposal,photos",
                                    children: {
                                      Message: {
                                        id: "155",
                                        parent: "154",
                                        navigationText: "Finish",
                                        text: "Equipment Replacement/Repair Request Submitted.\\n\\nNGage will review and P.O.# will be forwarded to you upon approval for project execution",
                                        type: "message",
                                        children: {},
                                      },
                                    },
                                  },
                                },
                              },
                              Other: {
                                id: "152",
                                parent: "127",
                                navigationText: "Next",
                                type: "button",
                                children: {
                                  Form: {
                                    id: "156",
                                    parent: "152",
                                    navigationText: "Submit",
                                    requestCategory: "ProjectProposed",
                                    type: "form",
                                    upload: "proposal,photos",
                                    children: {
                                      Message: {
                                        id: "157",
                                        parent: "156",
                                        navigationText: "Finish",
                                        text: "Equipment Replacement/Repair Request Submitted.\\n\\nNGage will review and P.O.# will be forwarded to you upon approval for project execution",
                                        type: "message",
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          HVAC: {
                            id: "128",
                            parent: "87",
                            navigationText: "Next",
                            type: "button",
                            children: {
                              Equipment_List: {
                                id: "132",
                                parent: "128",
                                navigationText: "Next",
                                query: 'apiGetEquipments("hvac")',
                                type: "list",
                                children: {
                                  Form: {
                                    id: "133",
                                    parent: "132",
                                    navigationText: "Submit",
                                    requestCategory: "ProjectProposed",
                                    type: "form",
                                    upload: "proposal,photos",
                                    children: {
                                      Message: {
                                        id: "134",
                                        parent: "133",
                                        navigationText: "Finish",
                                        text: "Equipment Replacement/Repair Request Submitted.\\n\\nNGage will review and P.O.# will be forwarded to you upon approval for project execution",
                                        type: "message",
                                        children: {},
                                      },
                                    },
                                  },
                                },
                              },
                              Other: {
                                id: "131",
                                parent: "128",
                                navigationText: "Next",
                                type: "button",
                                children: {
                                  Form: {
                                    id: "135",
                                    parent: "131",
                                    navigationText: "Submit",
                                    requestCategory: "ProjectProposed",
                                    type: "form",
                                    upload: "proposal,photos",
                                    children: {
                                      Message: {
                                        id: "136",
                                        parent: "135",
                                        navigationText: "Finish",
                                        text: "Equipment Replacement/Repair Request Submitted.\\n\\nNGage will review and P.O.# will be forwarded to you upon approval for project execution",
                                        type: "message",
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                      Common_Area: {
                        id: "88",
                        parent: "81",
                        navigationText: "Next",
                        type: "button",
                        children: {
                          Electrical: {
                            id: "89",
                            parent: "88",
                            navigationText: "Next",
                            type: "button",
                            children: {
                              Form: {
                                id: "94",
                                parent: "89",
                                navigationText: "Submit",
                                requestCategory: "ProjectProposed",
                                type: "form",
                                upload: "proposal,photos",
                                children: {
                                  Message: {
                                    id: "95",
                                    parent: "94",
                                    navigationText: "Finish",
                                    text: "Equipment Replacement/Repair Request Submitted.\\n\\nNGage will review and P.O.# will be forwarded to you upon approval for project execution.",
                                    type: "message",
                                    children: {},
                                  },
                                },
                              },
                            },
                          },
                          Plumbing: {
                            id: "90",
                            parent: "88",
                            navigationText: "Next",
                            type: "button",
                            children: {
                              Circulation_Pump: {
                                id: "102",
                                parent: "90",
                                navigationText: "Next",
                                type: "button",
                                children: {
                                  Form: {
                                    id: "109",
                                    parent: "102",
                                    navigationText: "Submit",
                                    requestCategory: "ProjectProposed",
                                    type: "form",
                                    upload: "proposal,photos",
                                    children: {
                                      Message: {
                                        id: "110",
                                        parent: "109",
                                        navigationText: "Finish",
                                        text: "Equipment Replacement/Repair Request Submitted.\\n\\nNGage will review and P.O.# will be forwarded to you upon approval for project execution.",
                                        type: "message",
                                        children: {},
                                      },
                                    },
                                  },
                                },
                              },
                              Boiler__Hot_Water_Heater: {
                                id: "103",
                                parent: "90",
                                navigationText: "Next",
                                type: "button",
                                children: {
                                  Form: {
                                    id: "107",
                                    parent: "103",
                                    navigationText: "Submit",
                                    requestCategory: "ProjectProposed",
                                    type: "form",
                                    upload: "proposal,photos",
                                    children: {
                                      Message: {
                                        id: "108",
                                        parent: "107",
                                        navigationText: "Finish",
                                        text: "Equipment Replacement/Repair Request Submitted.\\n\\nNGage will review and P.O.# will be forwarded to you upon approval for project execution.",
                                        type: "message",
                                        children: {},
                                      },
                                    },
                                  },
                                },
                              },
                              Pipe_Repair: {
                                id: "104",
                                parent: "90",
                                navigationText: "Next",
                                type: "button",
                                children: {
                                  Form: {
                                    id: "113",
                                    parent: "104",
                                    navigationText: "Submit",
                                    requestCategory: "ProjectProposed",
                                    type: "form",
                                    upload: "proposal,photos",
                                    children: {
                                      Message: {
                                        id: "114",
                                        parent: "113",
                                        navigationText: "Finish",
                                        text: "Equipment Replacement/Repair Request Submitted.\\n\\nNGage will review and P.O.# will be forwarded to you upon approval for project execution.",
                                        type: "message",
                                        children: {},
                                      },
                                    },
                                  },
                                },
                              },
                              Water_Softener: {
                                id: "105",
                                parent: "90",
                                navigationText: "Next",
                                type: "button",
                                children: {
                                  Form: {
                                    id: "115",
                                    parent: "105",
                                    navigationText: "Submit",
                                    requestCategory: "ProjectProposed",
                                    type: "form",
                                    upload: "proposal,photos",
                                    children: {
                                      Message: {
                                        id: "116",
                                        parent: "115",
                                        navigationText: "Finish",
                                        text: "Equipment Replacement/Repair Request Submitted.\\n\\nNGage will review and P.O.# will be forwarded to you upon approval for project execution.",
                                        type: "message",
                                        children: {},
                                      },
                                    },
                                  },
                                },
                              },
                              Other: {
                                id: "106",
                                parent: "90",
                                navigationText: "Next",
                                type: "button",
                                children: {
                                  Form: {
                                    id: "111",
                                    parent: "106",
                                    navigationText: "Submit",
                                    requestCategory: "ProjectProposed",
                                    type: "form",
                                    upload: "proposal,photos",
                                    children: {
                                      Message: {
                                        id: "112",
                                        parent: "111",
                                        navigationText: "Finish",
                                        text: "Equipment Replacement/Repair Request Submitted.\\n\\nNGage will review and P.O.# will be forwarded to you upon approval for project execution.",
                                        type: "message",
                                        children: {},
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          Pool: {
                            id: "91",
                            parent: "88",
                            navigationText: "Next",
                            type: "button",
                            children: {
                              Form: {
                                id: "117",
                                parent: "91",
                                navigationText: "Submit",
                                requestCategory: "ProjectProposed",
                                type: "form",
                                upload: "proposal,photos",
                                children: {
                                  Message: {
                                    id: "118",
                                    parent: "117",
                                    navigationText: "Finish",
                                    text: "Equipment Replacement/Repair Request Submitted.\\n\\nNGage will review and P.O.# will be forwarded to you upon approval for project execution.",
                                    type: "message",
                                    children: {},
                                  },
                                },
                              },
                            },
                          },
                          Refrigeration: {
                            id: "92",
                            parent: "88",
                            navigationText: "Next",
                            type: "button",
                            children: {
                              Equipment_List: {
                                id: "119",
                                parent: "92",
                                navigationText: "Next",
                                query: 'apiGetEquipments("refrigeration")',
                                type: "list",
                                children: {
                                  Form: {
                                    id: "121",
                                    parent: "119",
                                    navigationText: "Submit",
                                    requestCategory: "ProjectProposed",
                                    type: "form",
                                    upload: "proposal,photos",
                                    children: {
                                      Message: {
                                        id: "122",
                                        parent: "121",
                                        navigationText: "Finish",
                                        text: "Equipment Replacement/Repair Request Submitted.\\n\\nNGage will review and P.O.# will be forwarded to you upon approval for project execution",
                                        type: "message",
                                        children: {},
                                      },
                                    },
                                  },
                                },
                              },
                              Other: {
                                id: "120",
                                parent: "92",
                                navigationText: "Next",
                                type: "button",
                                children: {
                                  Form: {
                                    id: "123",
                                    parent: "120",
                                    navigationText: "Submit",
                                    requestCategory: "ProjectProposed",
                                    type: "form",
                                    upload: "proposal,photos",
                                    children: {
                                      Message: {
                                        id: "124",
                                        parent: "123",
                                        navigationText: "Finish",
                                        text: "Equipment Replacement/Repair Request Submitted.\\n\\nNGage will review and P.O.# will be forwarded to you upon approval for project execution",
                                        type: "message",
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                          HVAC: {
                            id: "93",
                            parent: "88",
                            navigationText: "Next",
                            type: "button",
                            children: {
                              Equipment_List: {
                                id: "97",
                                parent: "93",
                                navigationText: "Next",
                                query: 'apiGetEquipments("hvac")',
                                type: "list",
                                children: {
                                  Form: {
                                    id: "98",
                                    parent: "97",
                                    navigationText: "Submit",
                                    requestCategory: "ProjectProposed",
                                    type: "form",
                                    upload: "proposal,photos",
                                    children: {
                                      Message: {
                                        id: "99",
                                        parent: "98",
                                        navigationText: "Finish",
                                        text: "Equipment Replacement/Repair Request Submitted.\\n\\nNGage will review and P.O.# will be forwarded to you upon approval for project execution",
                                        type: "message",
                                        children: {},
                                      },
                                    },
                                  },
                                },
                              },
                              Other: {
                                id: "96",
                                parent: "93",
                                navigationText: "Next",
                                type: "button",
                                children: {
                                  Form: {
                                    id: "100",
                                    parent: "93",
                                    navigationText: "Submit",
                                    requestCategory: "ProjectCompleted",
                                    type: "form",
                                    upload: "proposal,photos",
                                    children: {
                                      Message: {
                                        id: "101",
                                        parent: "100",
                                        navigationText: "Finish",
                                        text: "Equipment Replacement/Repair Request Submitted.\\n\\nNGage will review and P.O.# will be forwarded to you upon approval for project execution",
                                        type: "message",
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
              Project_Completed: {
                id: "8",
                parent: "4",
                navigationText: "Next",
                type: "button",
                children: {
                  Common_Area: {
                    id: "9",
                    parent: "8",
                    navigationText: "Next",
                    type: "button",
                    children: {
                      Electrical: {
                        id: "11",
                        parent: "9",
                        navigationText: "Next",
                        type: "button",
                        children: {
                          Form: {
                            id: "16",
                            parent: "11",
                            navigationText: "Submit",
                            requestCategory: "ProjectCompleted",
                            type: "form",
                            upload: "invoices,photos",
                            children: {
                              Message: {
                                id: "17",
                                parent: "16",
                                navigationText: "Finish",
                                text: "CAPEX Request Submitted.\\n\\nNGage will review and process for payment",
                                type: "message",
                              },
                            },
                          },
                        },
                      },
                      HVAC: {
                        id: "12",
                        parent: "9",
                        navigationText: "Next",
                        type: "button",
                        children: {
                          Equipment_List: {
                            id: "19",
                            parent: "12",
                            navigationText: "Next",
                            query: 'apiGetEquipments("hvac")',
                            type: "list",
                            children: {
                              Form: {
                                id: "20",
                                parent: "19",
                                navigationText: "Submit",
                                requestCategory: "ProjectCompleted",
                                type: "form",
                                upload: "invoices,photos",
                                children: {
                                  Message: {
                                    id: "21",
                                    parent: "20",
                                    navigationText: "Finish",
                                    text: "CAPEX Request Submitted.\\n\\nNGage will review and process for payment",
                                    type: "message",
                                  },
                                },
                              },
                            },
                          },
                          Other: {
                            id: "18",
                            parent: "12",
                            navigationText: "Next",
                            type: "button",
                            children: {
                              Form: {
                                id: "22",
                                parent: "18",
                                navigationText: "Submit",
                                requestCategory: "ProjectCompleted",
                                type: "form",
                                upload: "invoices,photos",
                                children: {
                                  Message: {
                                    id: "23",
                                    parent: "22",
                                    navigationText: "Finish",
                                    text: "CAPEX Request Submitted.\\n\\nNGage will review and process for payment",
                                    type: "message",
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                      Plumbing: {
                        id: "13",
                        parent: "9",
                        navigationText: "Next",
                        type: "button",
                        children: {
                          Circulation_Pump: {
                            id: "24",
                            parent: "13",
                            navigationText: "Next",
                            type: "button",
                            children: {
                              Form: {
                                id: "31",
                                parent: "24",
                                navigationText: "Submit",
                                requestCategory: "ProjectCompleted",
                                type: "form",
                                upload: "invoices,photos",
                                children: {
                                  Message: {
                                    id: "32",
                                    parent: "31",
                                    navigationText: "Finish",
                                    text: "CAPEX Request Submitted.\\n\\nNGage will review and process for payment",
                                    type: "message",
                                  },
                                },
                              },
                            },
                          },
                          Water_Softener: {
                            id: "25",
                            parent: "13",
                            navigationText: "Next",
                            type: "button",
                            children: {
                              Form: {
                                id: "37",
                                parent: "25",
                                navigationText: "Submit",
                                requestCategory: "ProjectCompleted",
                                type: "form",
                                upload: "invoices,photos",
                                children: {
                                  Message: {
                                    id: "38",
                                    parent: "37",
                                    navigationText: "Finish",
                                    text: "CAPEX Request Submitted.\\n\\nNGage will review and process for payment",
                                    type: "message",
                                  },
                                },
                              },
                            },
                          },
                          Pipe_Repair: {
                            id: "26",
                            parent: "13",
                            navigationText: "Next",
                            type: "button",
                            children: {
                              Form: {
                                id: "35",
                                parent: "26",
                                navigationText: "Submit",
                                requestCategory: "ProjectCompleted",
                                type: "form",
                                upload: "invoices,photos",
                                children: {
                                  Message: {
                                    id: "36",
                                    parent: "35",
                                    navigationText: "Finish",
                                    text: "CAPEX Request Submitted.\\n\\nNGage will review and process for payment",
                                    type: "message",
                                  },
                                },
                              },
                            },
                          },
                          Boiler__Hot_Water_Heater: {
                            id: "27",
                            parent: "13",
                            navigationText: "Next",
                            type: "button",
                            children: {
                              Form: {
                                id: "29",
                                parent: "27",
                                navigationText: "Submit",
                                requestCategory: "ProjectCompleted",
                                type: "form",
                                upload: "invoices,photos",
                                children: {
                                  Message: {
                                    id: "30",
                                    parent: "29",
                                    navigationText: "Finish",
                                    text: "CAPEX Request Submitted.\\n\\nNGage will review and process for payment",
                                    type: "message",
                                  },
                                },
                              },
                            },
                          },
                          Other: {
                            id: "28",
                            parent: "13",
                            navigationText: "Next",
                            type: "button",
                            children: {
                              Form: {
                                id: "33",
                                parent: "28",
                                navigationText: "Submit",
                                requestCategory: "ProjectCompleted",
                                type: "form",
                                upload: "invoices,photos",
                                children: {
                                  Message: {
                                    id: "34",
                                    parent: "33",
                                    navigationText: "Finish",
                                    text: "CAPEX Request Submitted.\\n\\nNGage will review and process for payment",
                                    type: "message",
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                      Refrigeration: {
                        id: "14",
                        parent: "9",
                        navigationText: "Next",
                        type: "button",
                        children: {
                          Equipment_List: {
                            id: "41",
                            parent: "14",
                            navigationText: "Next",
                            type: "list",
                            query: 'apiGetEquipments("refrigeration")',
                            children: {
                              Form: {
                                id: "43",
                                parent: "41",
                                navigationText: "Submit",
                                requestCategory: "ProjectCompleted",
                                type: "form",
                                upload: "invoices,photos",
                                children: {
                                  Message: {
                                    id: "34",
                                    parent: "33",
                                    navigationText: "Finish",
                                    text: "CAPEX Request Submitted.\\n\\nNGage will review and process for payment",
                                    type: "message",
                                  },
                                },
                              },
                            },
                          },
                        },
                        Other: {
                          id: "42",
                          parent: "14",
                          navigationText: "Next",
                          type: "button",
                          children: {
                            Form: {
                              id: "45",
                              parent: "42",
                              navigationText: "Submit",
                              requestCategory: "ProjectCompleted",
                              type: "form",
                              upload: "invoices,photos",
                              children: {
                                Message: {
                                  id: "46",
                                  parent: "45",
                                  navigationText: "Finish",
                                  text: "CAPEX Request Submitted.\\n\\nNGage will review and process for payment",
                                  type: "message",
                                },
                              },
                            },
                          },
                        },
                      },
                      Pool: {
                        id: "15",
                        parent: "9",
                        navigationText: "Next",
                        type: "button",
                        children: {
                          Form: {
                            id: "39",
                            parent: "15",
                            navigationText: "Submit",
                            requestCategory: "ProjectCompleted",
                            type: "form",
                            upload: "invoices,photos",
                            children: {
                              Message: {
                                id: "40",
                                parent: "39",
                                navigationText: "Finish",
                                text: "CAPEX Request Submitted.\\n\\nNGage will review and process for payment",
                                type: "message",
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                  In_Room: {
                    id: "10",
                    parent: "8",
                    navigationText: "Next",
                    type: "button",
                    children: {
                      Plumbing: {
                        id: "47",
                        parent: "10",
                        navigationText: "Next",
                        type: "button",
                        children: {
                          Boiler__Hot_Water_Heater: {
                            id: "59",
                            parent: "47",
                            navigationText: "Next",
                            type: "button",
                            children: {
                              Form: {
                                id: "64",
                                parent: "59",
                                navigationText: "Submit",
                                requestCategory: "ProjectCompleted",
                                type: "form",
                                upload: "invoices,photos",
                                children: {
                                  Message: {
                                    id: "65",
                                    parent: "64",
                                    navigationText: "Finish",
                                    text: "CAPEX Request Submitted.\\n\\nNGage will review and process for payment",
                                    type: "message",
                                  },
                                },
                              },
                            },
                          },
                          Water_Softener: {
                            id: "60",
                            parent: "47",
                            navigationText: "Next",
                            type: "button",
                            children: {
                              Form: {
                                id: "72",
                                parent: "60",
                                navigationText: "Submit",
                                requestCategory: "ProjectCompleted",
                                type: "form",
                                upload: "invoices,photos",
                                children: {
                                  Message: {
                                    id: "73",
                                    parent: "72",
                                    navigationText: "Finish",
                                    text: "CAPEX Request Submitted.\\n\\nNGage will review and process for payment",
                                    type: "message",
                                  },
                                },
                              },
                            },
                          },
                          Other: {
                            id: "61",
                            parent: "47",
                            navigationText: "Next",
                            type: "button",
                            children: {
                              Form: {
                                id: "68",
                                parent: "61",
                                navigationText: "Submit",
                                requestCategory: "ProjectCompleted",
                                type: "form",
                                upload: "invoices,photos",
                                children: {
                                  Message: {
                                    id: "69",
                                    parent: "68",
                                    navigationText: "Finish",
                                    text: "CAPEX Request Submitted.\\n\\nNGage will review and process for payment",
                                    type: "message",
                                  },
                                },
                              },
                            },
                          },
                          Circulation_Pump: {
                            id: "62",
                            parent: "47",
                            navigationText: "Next",
                            type: "button",
                            children: {
                              Form: {
                                id: "66",
                                parent: "62",
                                navigationText: "Submit",
                                requestCategory: "ProjectCompleted",
                                type: "form",
                                upload: "invoices,photos",
                                children: {
                                  Message: {
                                    id: "67",
                                    parent: "66",
                                    navigationText: "Finish",
                                    text: "CAPEX Request Submitted.\\n\\nNGage will review and process for payment",
                                    type: "message",
                                  },
                                },
                              },
                            },
                          },
                          Pipe_Repair: {
                            id: "63",
                            parent: "47",
                            navigationText: "Next",
                            type: "button",
                            children: {
                              Form: {
                                id: "70",
                                parent: "63",
                                navigationText: "Submit",
                                requestCategory: "ProjectCompleted",
                                type: "form",
                                upload: "invoices,photos",
                                children: {
                                  Message: {
                                    id: "71",
                                    parent: "70",
                                    navigationText: "Finish",
                                    text: "CAPEX Request Submitted.\\n\\nNGage will review and process for payment",
                                    type: "message",
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                    HVAC: {
                      id: "48",
                      parent: "10",
                      navigationText: "Next",
                      type: "button",
                      children: {
                        Equipment_List: {
                          id: "54",
                          parent: "48",
                          navigationText: "Next",
                          query: 'apiGetEquipments("hvac")',
                          type: "list",
                          children: {
                            Form: {
                              id: "55",
                              parent: "54",
                              navigationText: "Submit",
                              requestCategory: "ProjectCompleted",
                              type: "form",
                              upload: "invoices,photos",
                              children: {
                                Message: {
                                  id: "56",
                                  parent: "55",
                                  navigationText: "Finish",
                                  text: "CAPEX Request Submitted.\\n\\nNGage will review and process for payment",
                                  type: "message",
                                },
                              },
                            },
                          },
                        },
                      },
                      Other: {
                        id: "53",
                        parent: "48",
                        navigationText: "Next",
                        type: "button",
                        children: {
                          Form: {
                            id: "57",
                            parent: "53",
                            navigationText: "Submit",
                            requestCategory: "ProjectCompleted",
                            type: "form",
                            upload: "invoices,photos",
                            children: {
                              Message: {
                                id: "58",
                                parent: "57",
                                navigationText: "Finish",
                                text: "CAPEX Request Submitted.\\n\\nNGage will review and process for payment",
                                type: "message",
                              },
                            },
                          },
                        },
                      },
                    },
                    Refrigeration: {
                      id: "49",
                      parent: "10",
                      navigationText: "Next",
                      type: "button",
                      children: {
                        Equipment_List: {
                          id: "75",
                          parent: "49",
                          navigationText: "Next",
                          query: 'apiGetEquipments("refrigeration")',
                          type: "list",
                          children: {
                            Form: {
                              id: "76",
                              parent: "75",
                              navigationText: "Submit",
                              requestCategory: "ProjectCompleted",
                              type: "form",
                              upload: "invoices,photos",
                              children: {
                                Message: {
                                  id: "77",
                                  parent: "76",
                                  navigationText: "Finish",
                                  text: "CAPEX Request Submitted.\\n\\nNGage will review and process for payment",
                                  type: "message",
                                },
                              },
                            },
                          },
                        },
                        Other: {
                          id: "74",
                          parent: "49",
                          navigationText: "Next",
                          type: "button",
                          children: {
                            Form: {
                              id: "78",
                              parent: "74",
                              navigationText: "Submit",
                              requestCategory: "ProjectCompleted",
                              type: "form",
                              upload: "invoices,photos",
                              children: {
                                Message: {
                                  id: "79",
                                  parent: "78",
                                  navigationText: "Finish",
                                  text: "CAPEX Request Submitted.\\n\\nNGage will review and process for payment",
                                  type: "message",
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                    Electrical: {
                      id: "50",
                      parent: "10",
                      navigationText: "Next",
                      type: "button",
                      children: {
                        Form: {
                          id: "51",
                          parent: "50",
                          navigationText: "Submit",
                          requestCategory: "ProjectCompleted",
                          type: "form",
                          upload: "invoices,photos",
                          children: {
                            Message: {
                              id: "52",
                              parent: "51",
                              navigationText: "Finish",
                              text: "CAPEX Request Submitted.\\n\\nNGage will review and process for payment",
                              type: "message",
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          Less_than_500: {
            id: "5",
            parent: "3",
            navigationText: "Next",
            type: "button",
            children: {
              Message: {
                id: "6",
                parent: "4",
                navigationText: "Finish",
                text: "Doesn't qualify for NGage.\\n\\nPlease pay through operations budget",
                type: "message",
              },
            },
          },
        },
      },
    },
  },
};
