$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/intuit/karate/testng/cukeoptions/first.feature");
formatter.feature({
  "line": 1,
  "name": "first",
  "description": "",
  "id": "first",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "run first feature file",
  "description": "",
  "id": "first;run-first-feature-file",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "assert 1 \u003d\u003d 1",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1 \u003d\u003d 1",
      "offset": 7
    }
  ],
  "location": "StepDefs.asssertBoolean(String)"
});
formatter.result({
  "duration": 1865140485,
  "status": "passed"
});
formatter.uri("com/intuit/karate/testng/cukeoptions/second.feature");
formatter.feature({
  "line": 1,
  "name": "second",
  "description": "",
  "id": "second",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "run second feature file",
  "description": "",
  "id": "second;run-second-feature-file",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "assert 2 \u003d\u003d 2",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2 \u003d\u003d 2",
      "offset": 7
    }
  ],
  "location": "StepDefs.asssertBoolean(String)"
});
formatter.result({
  "duration": 134218269,
  "status": "passed"
});
formatter.uri("com/intuit/karate/testng/smoke/smoke.feature");
formatter.feature({
  "line": 1,
  "name": "",
  "description": "",
  "id": "",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "",
  "description": "",
  "id": ";",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "assert someConfig \u003d\u003d \u0027someValue\u0027",
  "keyword": "* "
});
formatter.step({
  "line": 7,
  "name": "def reader \u003d function() { return karate.read(\u0027demo-json.json\u0027) }",
  "keyword": "* "
});
formatter.step({
  "line": 8,
  "name": "def fromFile \u003d call reader",
  "keyword": "* "
});
formatter.step({
  "line": 9,
  "name": "match fromFile \u003d\u003d { from: \u0027file\u0027 }",
  "keyword": "* "
});
formatter.step({
  "line": 11,
  "name": "def text \u003d read(\u0027demo-text.txt\u0027)",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "match text \u003d\u003d \u0027Hello World!\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "assert text \u003d\u003d \u0027Hello World!\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "match text contains \u0027World\u0027",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "someConfig \u003d\u003d \u0027someValue\u0027",
      "offset": 7
    }
  ],
  "location": "StepDefs.asssertBoolean(String)"
});
formatter.result({
  "duration": 115375410,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "reader",
      "offset": 4
    },
    {
      "val": "function() { return karate.read(\u0027demo-json.json\u0027) }",
      "offset": 13
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 17157638,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fromFile",
      "offset": 4
    },
    {
      "val": "call reader",
      "offset": 15
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 228171058,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "fromFile",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 15
    },
    {
      "val": "{ from: \u0027file\u0027 }",
      "offset": 18
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 2631900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "text",
      "offset": 4
    },
    {
      "val": "read(\u0027demo-text.txt\u0027)",
      "offset": 11
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 24644861,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "text",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 11
    },
    {
      "val": "\u0027Hello World!\u0027",
      "offset": 14
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 23232643,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "text \u003d\u003d \u0027Hello World!\u0027",
      "offset": 7
    }
  ],
  "location": "StepDefs.asssertBoolean(String)"
});
formatter.result({
  "duration": 17223734,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "text",
      "offset": 6
    },
    {},
    {},
    {},
    {
      "val": " \u0027World\u0027",
      "offset": 19
    }
  ],
  "location": "StepDefs.matchContains(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 15173963,
  "status": "passed"
});
});