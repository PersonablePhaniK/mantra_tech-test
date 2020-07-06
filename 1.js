/**
 *  We need to parse the json data before performing below task using 'JSON.parse' to parse a string and return JavaScript Object
 */

const json = [
  { id: 1, type: "external" },
  { id: 2 },
  { id: 3, type: "internal" },
];

const filteredRec = {};

for (let i = 0; i < json.length; i++) {
  if (json[i]["type"] == "external") {
    filteredRec.type = json[i]["type"];
    console.log("Json data: ", json[i]);
    console.log("Filtered Record", filteredRec);
  }
}
