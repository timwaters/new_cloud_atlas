// New Cloud Atlas iD custom presets
//
// Custom Defaults
//
iD.data.presets.defaults["line"] =   ["telecoms/telephone_line", "telecoms/underground_cable", "telecoms/submarine_cable", "power/line"];
iD.data.presets.defaults["point"] =  ["data_center", "telephone_exchange", "telecoms/telephone_pole", "telecoms/street_cabinet",
                                     "manhole", "mast", "tower", "communications_tower",  "office/telecommunication"];
iD.data.presets.defaults["area"] =   ["data_center","telephone_exchange", "office/telecommunication", "tower", "communications_tower" ];
iD.data.presets.defaults["vertex"] = ["telecoms/telephone_pole", "telecoms/street_cabinet",
                                     "manhole", "mast", "antenna", "tower", "communications_tower", "telephone_exchange"];
 //
 // Custom Presets
 //
iD.data.presets.presets["telecoms/telephone_line"] = {
  "name": "Telephone Line",
  "terms": [
    "phone line",
    "line"
  ],
  "geometry": ["line"],
  "icon": "power-line",
  "fields": [
    "location",
    "operator",
    "ref",
    "cables",
    "telecom:medium"
  ],
  "tags": {
    "communication": "line"
  }
}

iD.data.presets.presets["telecoms/underground_cable"] = {
  "name": "Underground Cable",
  "terms": ["fibre optic"],
  "geometry": ["line"],
  "fields": [
    "operator",
    "ref",
    "cables",
    "telecom:medium"
  ],
  "tags": {
    "location": "undergound",
    "communication": "line"
  }
}

iD.data.presets.presets["telecoms/submarine_cable"] = {
  "name": "Submarine Cable",
  "terms": ["fibre optic", "submarine", "underwater", "ocean", "sea"],
  "geometry": ["line"],
  "fields": [
    "seamark:cable_submarine:category",
    "operator",
    "ref",
    "cables",
    "telecom:medium"
  ],
  "tags": {
    "location": "underwater",
    "communication": "line",
    "submarine":"yes",
    "seamark:type":"cable_submarine"

  }
}

iD.data.presets.presets["telecoms/telephone_pole"] = {
  "name": "Telephone Pole",
  "terms": ["telegraph", "telephone", "pole"],
  "geometry": ["point","vertex"],
  "fields": [
    "operator",
    "ref",
    "cables"
  ],
  "tags": {
    "communication": "pole",
    "telephone":"pole"
  }
}

iD.data.presets.presets["telecoms/street_cabinet"] = {
  "name": "Street Cabinet",
  "terms": ["box","broadband","telephone","metal","green"],
  "geometry": ["point","vertex", "area"],
  "icon": "square",
  "fields": [
    "operator",
    "street_cabinet",
    "communication_dslam",
    "ref",
    "colour",
    "sound",
    "heat",
    "texture"
  ],
  "tags": {
    "man_made": "street_cabinet",
    "street_cabinet":"telecom"
  }
}

iD.data.presets.presets["manhole"] = {
  "name": "Manhole Cover",
  "icon": "circle",
  "terms": ["manhole"],
  "geometry": ["point","vertex", "area"],
  "fields": [
    "label",
    "manhole",
    "operator",
    "ref"
  ],
  "tags": {
    "manhole": "telecom"
  }
}

iD.data.presets.presets["antenna"] = {
  "name": "Antenna",
  "terms": ["mast","tower","mobile", "cell","communication"],
  "geometry": ["point","vertex", "area"],
  "fields": [
    "mobile_phone",
    "operator",
    "ref",
    "location",
    "height"
  ],
  "tags": {
    "telecom": "antenna"
  }
}

iD.data.presets.presets["mast"] = {
  "name": "Mast",
  "terms": ["mast","tower", "antenna", "mobile", "cell", "communication"],
  "geometry": ["point","vertex", "area"],
  "fields": [
    "mobile_phone",
    "radio",
    "microwave",
    "television",
    "operator",
    "ref",
    "location",
    "height"
  ],
  "tags": {
    "man_made": "mast",
    "mast:type": "communicaton"
  }
}


iD.data.presets.presets["tower"] = {
  "name": "Telecoms Tower",
  "icon": "triangle",
  "terms": ["mast","tower", "antenna", "mobile", "cell", "communication"],
  "geometry": ["point","vertex", "area"],
  "fields": [
    "mobile_phone",
    "radio",
    "microwave",
    "television",
    "operator",
    "ref",
    "location",
    "height"
  ],
  "tags": {
    "man_made": "tower",
    "tower:type": "communicaton"
  }
}

iD.data.presets.presets["communications_tower"] = {
  "name": "Large Communications Tower",
  "icon": "triangle",
  "terms": ["mast","tower", "antenna", "mobile", "cell", "communication"],
  "geometry": ["point","vertex", "area"],
  "fields": [
    "mobile_phone",
    "radio",
    "microwave",
    "television",
    "operator",
    "ref",
    "location",
    "height"
  ],
  "tags": {
    "man_made": "communications_tower",
    "tower:type": "communicaton"
  }
}
iD.data.presets.presets["telephone_exchange"] = {
  "name": "Telephone Exchanage / Central Office",
  "terms": ["data", "data centre", "center", "centre", "telecom", "telephone"],
  "icon": "commercial",
  "geometry": ["point","vertex", "area"],
  "fields": [
    "name",
    "operator",
    "address",
    "building"
  ],
  "tags": {
    "telecom": "central_office",
    "building": "central_office"
  }
}

iD.data.presets.presets["data_center"] = {
  "name": "Data Center",
  "terms": ["data", "data centre", "center", "centre"],
  "icon": "warehouse",
  "geometry": ["point","area"],
  "fields": [
    "name",
    "operator",
    "address",
    "building",
    "note"
  ],
  "tags": {
    "telecom": "data_center",
    "building": "data_center"
  }
}

iD.data.presets.presets["office/telecommunication"] =  {
    "icon": "warehouse",
    "fields": [
        "name",
        "operator",
        "address",
        "building_area"
    ],
    "geometry": [
        "point",
        "vertex",
        "area"
    ],
    "tags": {
        "office": "telecommunication"
    },
    "terms": ["telephone", "center", "centre"],
    "name": "Telecom Office"
},

//
// Custom Fields
//
iD.data.presets.fields["height"] = {
  "key": "height",
  "type": "text",
  "label": "Height"
}

iD.data.presets.fields["mobile_phone"] = {
  "key": "communicaton:mobile_phone",
  "type": "check",
  "label": "Mobile Phone"
}

iD.data.presets.fields["radio"] = {
  "key": "communicaton:radio",
  "type": "check",
  "label": "Radio"
}
iD.data.presets.fields["microwave"] = {
  "key": "communicaton:microwave",
  "type": "check",
  "label": "Microwave"
}

iD.data.presets.fields["television"] = {
  "key": "communicaton:television",
  "type": "check",
  "label": "Television"
}

iD.data.presets.fields["manhole"] = {
  "key": "manhole",
  "label": "Manhole Type",
  "type": "combo",
  "placeholder": "",
  "strings": {
    "options": {
      "telecom": "Telecoms",
      "plain":  "Plain, no marking",
      "water": "Water",
      "sewer": "Sewer",
      "gas"  : "Gas",
      "power" : "Power"
    }
  }
}

iD.data.presets.fields["label"] = {
    "key": "label",
    "type": "text",
    "label": "Label displayed",
    "placeholder": "Labels visbile"
}

iD.data.presets.fields["street_cabinet"] = {
  "key": "street_cabinet",
  "label": "Cabinet Type",
  "type": "combo",
  "placeholder": "telecom, cable_tv, traffic_control...",
  "strings": {
    "options": {
      "telecom": "Telecoms",
      "cable_tv": "Cable Television",
      "traffic_control": "Traffic Control",
      "power": "Electical Power",
      "postal_service": "Postal Service",
      "street_lighting": "Street Lighting"
    }
  }
}

iD.data.presets.fields["communication_dslam"] = {
  "key": "communication",
  "label": "DSLAM type",
  "type": "combo",
  "placeholder": "dslam, outdoor_dslam...",
  "strings": {
    "options": {
      "outdoor_dslam": "Outdoor DSLAM",
      "remote_terminal": "Remote Terminal",
      "bts" : "BTS"
    }
  }
}
iD.data.presets.fields["heat"] = {
    "key": "heat",
    "type": "check",
    "label": "Heat (feeling of warmth)"
}

iD.data.presets.fields["sound"] = {
    "key": "sound",
    "type": "check",
    "label": "Sound (does it make a sound?)"
}

iD.data.presets.fields["texture"] = {
    "key": "texture",
    "type": "text",
    "label": "Texture of surface"
}

iD.data.presets.fields["colour"] = {
    "key": "colout",
    "type": "text",
    "label": "Colour",
    "placeholder": "green, white ..."
}


iD.data.presets.fields["cables"] = {
  "key": "cables",
  "type": "number",
  "label": "Number of Cables",
  "placeholder": "1, 2, 3..."
}

//fields
iD.data.presets.fields["cables"] = {
  "key": "cables",
  "type": "number",
  "label": "Number of Cables",
  "placeholder": "1, 2, 3..."
}


iD.data.presets.fields["seamark:cable_submarine:category"] = {
  "key": "seamark:cable_submarine:category",
  "label": "Category",
  "type": "combo",
  "placeholder": "Telephone, Fibre Optic...",
  "strings": {
    "options": {
      "telephone": "Telephone",
      "fibre_optic": "Fibre Optic",
      "power": "Power",
      "transmission": "Transmission"
    }
  }
}

iD.data.presets.fields["telecom:medium"] = {
  "key": "telecom:medium",
  "label": "Medium",
  "type": "combo",
  "placeholder": "Copper, Fibre Optic...",
  "strings": {
    "options": {
      "copper": "Copper",
      "fibre_optic": "Fibre Optic"
    }
  }
}
