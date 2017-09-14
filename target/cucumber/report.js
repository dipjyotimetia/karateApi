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
  "duration": 1921317996,
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
  "duration": 158284005,
  "status": "passed"
});
formatter.uri("com/intuit/karate/testng/demos/call-once.feature");
formatter.feature({
  "line": 1,
  "name": "",
  "description": "",
  "id": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "generate random string",
  "description": "",
  "id": ";generate-random-string",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "def fun \u003d function(){ return Math.random().toString(36).substr(2, 10) }",
  "keyword": "* "
});
formatter.step({
  "line": 9,
  "name": "def result \u003d callonce fun",
  "keyword": "* "
});
formatter.step({
  "line": 10,
  "name": "print \u0027\u003cexample\u003e: \u0027 + result",
  "keyword": "* "
});
formatter.step({
  "line": 11,
  "name": "assert helper.isEqualToPrevious(result)",
  "keyword": "* "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": ";generate-random-string;",
  "rows": [
    {
      "cells": [
        "example"
      ],
      "line": 14,
      "id": ";generate-random-string;;1"
    },
    {
      "cells": [
        "first"
      ],
      "line": 15,
      "id": ";generate-random-string;;2"
    },
    {
      "cells": [
        "second"
      ],
      "line": 16,
      "id": ";generate-random-string;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "def helper \u003d Java.type(\u0027com.intuit.karate.junit4.demos.CallOnceHelper\u0027)",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "helper",
      "offset": 4
    },
    {
      "val": "Java.type(\u0027com.intuit.karate.junit4.demos.CallOnceHelper\u0027)",
      "offset": 13
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 112390137,
  "error_message": "java.lang.RuntimeException: javascript evaluation failed: Java.type(\u0027com.intuit.karate.junit4.demos.CallOnceHelper\u0027)\r\n\tat com.intuit.karate.Script.evalInNashorn(Script.java:383)\r\n\tat com.intuit.karate.Script.evalInNashorn(Script.java:358)\r\n\tat com.intuit.karate.Script.eval(Script.java:269)\r\n\tat com.intuit.karate.Script.eval(Script.java:182)\r\n\tat com.intuit.karate.Script.assign(Script.java:606)\r\n\tat com.intuit.karate.Script.assign(Script.java:537)\r\n\tat com.intuit.karate.StepDefs.def(StepDefs.java:268)\r\n\tat ✽.* def helper \u003d Java.type(\u0027com.intuit.karate.junit4.demos.CallOnceHelper\u0027)(com/intuit/karate/testng/demos/call-once.feature:4)\r\nCaused by: java.lang.RuntimeException: java.lang.ClassNotFoundException: com.intuit.karate.junit4.demos.CallOnceHelper\r\n\tat jdk.nashorn.internal.runtime.ScriptRuntime.apply(ScriptRuntime.java:397)\r\n\tat jdk.nashorn.api.scripting.NashornScriptEngine.evalImpl(NashornScriptEngine.java:446)\r\n\tat jdk.nashorn.api.scripting.NashornScriptEngine.evalImpl(NashornScriptEngine.java:403)\r\n\tat jdk.nashorn.api.scripting.NashornScriptEngine.evalImpl(NashornScriptEngine.java:399)\r\n\tat jdk.nashorn.api.scripting.NashornScriptEngine.eval(NashornScriptEngine.java:155)\r\n\tat javax.script.AbstractScriptEngine.eval(AbstractScriptEngine.java:264)\r\n\tat com.intuit.karate.Script.evalInNashorn(Script.java:379)\r\n\tat com.intuit.karate.Script.evalInNashorn(Script.java:358)\r\n\tat com.intuit.karate.Script.eval(Script.java:269)\r\n\tat com.intuit.karate.Script.eval(Script.java:182)\r\n\tat com.intuit.karate.Script.assign(Script.java:606)\r\n\tat com.intuit.karate.Script.assign(Script.java:537)\r\n\tat com.intuit.karate.StepDefs.def(StepDefs.java:268)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.runBackground(CucumberScenario.java:59)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:42)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat com.intuit.karate.testng.KarateRunner.feature(KarateRunner.java:59)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:70)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeMulti(TestNGDirectoryTestSuite.java:158)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:98)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:111)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:164)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:110)\r\n\tat org.apache.maven.surefire.booter.SurefireStarter.invokeProvider(SurefireStarter.java:175)\r\n\tat org.apache.maven.surefire.booter.SurefireStarter.runSuitesInProcessWhenForked(SurefireStarter.java:107)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:68)\r\nCaused by: java.lang.ClassNotFoundException: com.intuit.karate.junit4.demos.CallOnceHelper\r\n\tat java.net.URLClassLoader.findClass(URLClassLoader.java:381)\r\n\tat java.lang.ClassLoader.loadClass(ClassLoader.java:424)\r\n\tat sun.misc.Launcher$AppClassLoader.loadClass(Launcher.java:331)\r\n\tat java.lang.ClassLoader.loadClass(ClassLoader.java:357)\r\n\tat java.lang.Class.forName0(Native Method)\r\n\tat java.lang.Class.forName(Class.java:348)\r\n\tat jdk.nashorn.internal.runtime.Context.findClass(Context.java:1057)\r\n\tat jdk.nashorn.internal.objects.NativeJava.simpleType(NativeJava.java:498)\r\n\tat jdk.nashorn.internal.objects.NativeJava.type(NativeJava.java:322)\r\n\tat jdk.nashorn.internal.objects.NativeJava.type(NativeJava.java:314)\r\n\tat jdk.nashorn.internal.objects.NativeJava.type(NativeJava.java:310)\r\n\tat jdk.nashorn.internal.scripts.Script$20$\\^eval\\_.:program(\u003ceval\u003e:1)\r\n\tat jdk.nashorn.internal.runtime.ScriptFunctionData.invoke(ScriptFunctionData.java:637)\r\n\tat jdk.nashorn.internal.runtime.ScriptFunction.invoke(ScriptFunction.java:494)\r\n\tat jdk.nashorn.internal.runtime.ScriptRuntime.apply(ScriptRuntime.java:393)\r\n\t... 63 more\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 15,
  "name": "generate random string",
  "description": "",
  "id": ";generate-random-string;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "def fun \u003d function(){ return Math.random().toString(36).substr(2, 10) }",
  "keyword": "* "
});
formatter.step({
  "line": 9,
  "name": "def result \u003d callonce fun",
  "keyword": "* "
});
formatter.step({
  "line": 10,
  "name": "print \u0027first: \u0027 + result",
  "matchedColumns": [
    0
  ],
  "keyword": "* "
});
formatter.step({
  "line": 11,
  "name": "assert helper.isEqualToPrevious(result)",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "fun",
      "offset": 4
    },
    {
      "val": "function(){ return Math.random().toString(36).substr(2, 10) }",
      "offset": 10
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "result",
      "offset": 4
    },
    {
      "val": "callonce fun",
      "offset": 13
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "\u0027first: \u0027 + result",
      "offset": 6
    }
  ],
  "location": "StepDefs.print(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "helper.isEqualToPrevious(result)",
      "offset": 7
    }
  ],
  "location": "StepDefs.asssertBoolean(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "def helper \u003d Java.type(\u0027com.intuit.karate.junit4.demos.CallOnceHelper\u0027)",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "helper",
      "offset": 4
    },
    {
      "val": "Java.type(\u0027com.intuit.karate.junit4.demos.CallOnceHelper\u0027)",
      "offset": 13
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 127154405,
  "error_message": "java.lang.RuntimeException: javascript evaluation failed: Java.type(\u0027com.intuit.karate.junit4.demos.CallOnceHelper\u0027)\r\n\tat com.intuit.karate.Script.evalInNashorn(Script.java:383)\r\n\tat com.intuit.karate.Script.evalInNashorn(Script.java:358)\r\n\tat com.intuit.karate.Script.eval(Script.java:269)\r\n\tat com.intuit.karate.Script.eval(Script.java:182)\r\n\tat com.intuit.karate.Script.assign(Script.java:606)\r\n\tat com.intuit.karate.Script.assign(Script.java:537)\r\n\tat com.intuit.karate.StepDefs.def(StepDefs.java:268)\r\n\tat ✽.* def helper \u003d Java.type(\u0027com.intuit.karate.junit4.demos.CallOnceHelper\u0027)(com/intuit/karate/testng/demos/call-once.feature:4)\r\nCaused by: java.lang.RuntimeException: java.lang.ClassNotFoundException: com.intuit.karate.junit4.demos.CallOnceHelper\r\n\tat jdk.nashorn.internal.runtime.ScriptRuntime.apply(ScriptRuntime.java:397)\r\n\tat jdk.nashorn.api.scripting.NashornScriptEngine.evalImpl(NashornScriptEngine.java:446)\r\n\tat jdk.nashorn.api.scripting.NashornScriptEngine.evalImpl(NashornScriptEngine.java:403)\r\n\tat jdk.nashorn.api.scripting.NashornScriptEngine.evalImpl(NashornScriptEngine.java:399)\r\n\tat jdk.nashorn.api.scripting.NashornScriptEngine.eval(NashornScriptEngine.java:155)\r\n\tat javax.script.AbstractScriptEngine.eval(AbstractScriptEngine.java:264)\r\n\tat com.intuit.karate.Script.evalInNashorn(Script.java:379)\r\n\tat com.intuit.karate.Script.evalInNashorn(Script.java:358)\r\n\tat com.intuit.karate.Script.eval(Script.java:269)\r\n\tat com.intuit.karate.Script.eval(Script.java:182)\r\n\tat com.intuit.karate.Script.assign(Script.java:606)\r\n\tat com.intuit.karate.Script.assign(Script.java:537)\r\n\tat com.intuit.karate.StepDefs.def(StepDefs.java:268)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.runBackground(CucumberScenario.java:59)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:42)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat com.intuit.karate.testng.KarateRunner.feature(KarateRunner.java:59)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:70)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeMulti(TestNGDirectoryTestSuite.java:158)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:98)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:111)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:164)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:110)\r\n\tat org.apache.maven.surefire.booter.SurefireStarter.invokeProvider(SurefireStarter.java:175)\r\n\tat org.apache.maven.surefire.booter.SurefireStarter.runSuitesInProcessWhenForked(SurefireStarter.java:107)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:68)\r\nCaused by: java.lang.ClassNotFoundException: com.intuit.karate.junit4.demos.CallOnceHelper\r\n\tat java.net.URLClassLoader.findClass(URLClassLoader.java:381)\r\n\tat java.lang.ClassLoader.loadClass(ClassLoader.java:424)\r\n\tat sun.misc.Launcher$AppClassLoader.loadClass(Launcher.java:331)\r\n\tat java.lang.ClassLoader.loadClass(ClassLoader.java:357)\r\n\tat java.lang.Class.forName0(Native Method)\r\n\tat java.lang.Class.forName(Class.java:348)\r\n\tat jdk.nashorn.internal.runtime.Context.findClass(Context.java:1057)\r\n\tat jdk.nashorn.internal.objects.NativeJava.simpleType(NativeJava.java:498)\r\n\tat jdk.nashorn.internal.objects.NativeJava.type(NativeJava.java:322)\r\n\tat jdk.nashorn.internal.objects.NativeJava.type(NativeJava.java:314)\r\n\tat jdk.nashorn.internal.objects.NativeJava.type(NativeJava.java:310)\r\n\tat jdk.nashorn.internal.scripts.Script$27$\\^eval\\_.:program(\u003ceval\u003e:1)\r\n\tat jdk.nashorn.internal.runtime.ScriptFunctionData.invoke(ScriptFunctionData.java:637)\r\n\tat jdk.nashorn.internal.runtime.ScriptFunction.invoke(ScriptFunction.java:494)\r\n\tat jdk.nashorn.internal.runtime.ScriptRuntime.apply(ScriptRuntime.java:393)\r\n\t... 63 more\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 16,
  "name": "generate random string",
  "description": "",
  "id": ";generate-random-string;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "def fun \u003d function(){ return Math.random().toString(36).substr(2, 10) }",
  "keyword": "* "
});
formatter.step({
  "line": 9,
  "name": "def result \u003d callonce fun",
  "keyword": "* "
});
formatter.step({
  "line": 10,
  "name": "print \u0027second: \u0027 + result",
  "matchedColumns": [
    0
  ],
  "keyword": "* "
});
formatter.step({
  "line": 11,
  "name": "assert helper.isEqualToPrevious(result)",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "fun",
      "offset": 4
    },
    {
      "val": "function(){ return Math.random().toString(36).substr(2, 10) }",
      "offset": 10
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "result",
      "offset": 4
    },
    {
      "val": "callonce fun",
      "offset": 13
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "\u0027second: \u0027 + result",
      "offset": 6
    }
  ],
  "location": "StepDefs.print(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "helper.isEqualToPrevious(result)",
      "offset": 7
    }
  ],
  "location": "StepDefs.asssertBoolean(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("com/intuit/karate/testng/demos/each-predicate-dollar.feature");
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
  "name": "def temperature \u003d { celsius: 100, fahrenheit: 212 }",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "match temperature contains { fahrenheit: \u0027#? _ \u003d\u003d $.celsius * 1.8 + 32\u0027 }",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "# using embedded expressions"
    }
  ],
  "line": 8,
  "name": "match temperature \u003d\u003d { celsius: \u0027#number\u0027, fahrenheit: \u0027#($.celsius * 1.8 + 32)\u0027 }",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "def json \u003d",
  "keyword": "Given ",
  "doc_string": {
    "content_type": "",
    "line": 11,
    "value": "{\n  \"hotels\": [\n    { \"roomInformation\": [{ \"roomPrice\": 618.4 }], \"totalPrice\": 618.4  },\n    { \"roomInformation\": [{ \"roomPrice\": 679.79}], \"totalPrice\": 679.79 }\n  ]\n}"
  }
});
formatter.step({
  "line": 19,
  "name": "match each json.hotels contains { totalPrice: \u0027#? _ \u003d\u003d $.roomInformation[0].roomPrice\u0027 }",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 20,
      "value": "# using embedded expressions"
    }
  ],
  "line": 21,
  "name": "match each json.hotels \u003d\u003d { roomInformation: \u0027#array\u0027, totalPrice: \u0027#($.roomInformation[0].roomPrice)\u0027 }",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "temperature",
      "offset": 4
    },
    {
      "val": "{ celsius: 100, fahrenheit: 212 }",
      "offset": 18
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 210945445,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "temperature",
      "offset": 6
    },
    {},
    {},
    {},
    {
      "val": " { fahrenheit: \u0027#? _ \u003d\u003d $.celsius * 1.8 + 32\u0027 }",
      "offset": 26
    }
  ],
  "location": "StepDefs.matchContains(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 54272766,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "temperature",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 18
    },
    {
      "val": "{ celsius: \u0027#number\u0027, fahrenheit: \u0027#($.celsius * 1.8 + 32)\u0027 }",
      "offset": 21
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 106233843,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "json",
      "offset": 4
    }
  ],
  "location": "StepDefs.defDocString(String,String)"
});
formatter.result({
  "duration": 1397852,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "each ",
      "offset": 6
    },
    {
      "val": "json.hotels",
      "offset": 11
    },
    {},
    {},
    {},
    {
      "val": " { totalPrice: \u0027#? _ \u003d\u003d $.roomInformation[0].roomPrice\u0027 }",
      "offset": 31
    }
  ],
  "location": "StepDefs.matchContains(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 236199552,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "each ",
      "offset": 6
    },
    {
      "val": "json.hotels",
      "offset": 11
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 23
    },
    {
      "val": "{ roomInformation: \u0027#array\u0027, totalPrice: \u0027#($.roomInformation[0].roomPrice)\u0027 }",
      "offset": 26
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 68494314,
  "status": "passed"
});
formatter.uri("com/intuit/karate/testng/demos/examples.feature");
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
  "name": "def cat \u003d",
  "keyword": "Given ",
  "doc_string": {
    "content_type": "",
    "line": 6,
    "value": "{\n  name: \u0027Billie\u0027,\n  kittens: [\n      { id: 23, name: \u0027Bob\u0027 },\n      { id: 42, name: \u0027Wild\u0027 }\n  ]\n}"
  }
});
formatter.step({
  "line": 16,
  "name": "match cat.kittens[*].id \u003d\u003d [23, 42]",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "match cat.kittens[*].id contains 23",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "match cat.kittens[*].id contains [42, 23]",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "match each cat.kittens contains { id: \u0027#number\u0027 }",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "match each cat.kittens \u003d\u003d { id: \u0027#notnull\u0027, name: \u0027#regex [A-Z][a-z]+\u0027 }",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "def isLessThanFifty \u003d function(x) { return x \u003c 50 } // \u003e",
  "keyword": "* "
});
formatter.step({
  "line": 23,
  "name": "match each cat.kittens contains { id: \u0027#? isLessThanFifty(_)\u0027 }",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "def foo \u003d 42",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "def bar \u003d { hello: \u0027world\u0027 }",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "def temp \u003d { id: \u0027#(foo)\u0027, value: \u0027#(bar.hello)\u0027 }",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "match temp \u003d\u003d { id: 42, value: \u0027world\u0027 }",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "def temperature \u003d { celsius: 100, fahrenheit: 212 }",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "match temperature contains { fahrenheit: \u0027#($.celsius * 1.8 + 32)\u0027 }",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "cat",
      "offset": 4
    }
  ],
  "location": "StepDefs.defDocString(String,String)"
});
formatter.result({
  "duration": 73802866,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "cat.kittens[*].id",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 24
    },
    {
      "val": "[23, 42]",
      "offset": 27
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 887974,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "cat.kittens[*].id",
      "offset": 6
    },
    {},
    {},
    {},
    {
      "val": " 23",
      "offset": 32
    }
  ],
  "location": "StepDefs.matchContains(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 12655791,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "cat.kittens[*].id",
      "offset": 6
    },
    {},
    {},
    {},
    {
      "val": " [42, 23]",
      "offset": 32
    }
  ],
  "location": "StepDefs.matchContains(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 806690,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "each ",
      "offset": 6
    },
    {
      "val": "cat.kittens",
      "offset": 11
    },
    {},
    {},
    {},
    {
      "val": " { id: \u0027#number\u0027 }",
      "offset": 31
    }
  ],
  "location": "StepDefs.matchContains(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 959407,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "each ",
      "offset": 6
    },
    {
      "val": "cat.kittens",
      "offset": 11
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 23
    },
    {
      "val": "{ id: \u0027#notnull\u0027, name: \u0027#regex [A-Z][a-z]+\u0027 }",
      "offset": 26
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 1991477,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "isLessThanFifty",
      "offset": 4
    },
    {
      "val": "function(x) { return x \u003c 50 } // \u003e",
      "offset": 22
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 12543716,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "each ",
      "offset": 6
    },
    {
      "val": "cat.kittens",
      "offset": 11
    },
    {},
    {},
    {},
    {
      "val": " { id: \u0027#? isLessThanFifty(_)\u0027 }",
      "offset": 31
    }
  ],
  "location": "StepDefs.matchContains(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 45233326,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "foo",
      "offset": 4
    },
    {
      "val": "42",
      "offset": 10
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 17690109,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bar",
      "offset": 4
    },
    {
      "val": "{ hello: \u0027world\u0027 }",
      "offset": 10
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 492225,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "temp",
      "offset": 4
    },
    {
      "val": "{ id: \u0027#(foo)\u0027, value: \u0027#(bar.hello)\u0027 }",
      "offset": 11
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 44360541,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "temp",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 11
    },
    {
      "val": "{ id: 42, value: \u0027world\u0027 }",
      "offset": 14
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 835016,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "temperature",
      "offset": 4
    },
    {
      "val": "{ celsius: 100, fahrenheit: 212 }",
      "offset": 18
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 380150,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "temperature",
      "offset": 6
    },
    {},
    {},
    {},
    {
      "val": " { fahrenheit: \u0027#($.celsius * 1.8 + 32)\u0027 }",
      "offset": 26
    }
  ],
  "location": "StepDefs.matchContains(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 88025236,
  "status": "passed"
});
formatter.uri("com/intuit/karate/testng/demos/js-arrays.feature");
formatter.feature({
  "line": 1,
  "name": "various javascript tests",
  "description": "",
  "id": "various-javascript-tests",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "arrays returned from js can be used in match",
  "description": "",
  "id": "various-javascript-tests;arrays-returned-from-js-can-be-used-in-match",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "def fun \u003d function(){ return [\u0027foo\u0027, \u0027bar\u0027, \u0027baz\u0027] }",
  "keyword": "* "
});
formatter.step({
  "line": 5,
  "name": "def json \u003d [\u0027foo\u0027, \u0027bar\u0027, \u0027baz\u0027]",
  "keyword": "* "
});
formatter.step({
  "line": 6,
  "name": "match json \u003d\u003d fun()",
  "keyword": "* "
});
formatter.step({
  "line": 7,
  "name": "def expected \u003d fun()",
  "keyword": "* "
});
formatter.step({
  "line": 8,
  "name": "match json \u003d\u003d expected",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "fun",
      "offset": 4
    },
    {
      "val": "function(){ return [\u0027foo\u0027, \u0027bar\u0027, \u0027baz\u0027] }",
      "offset": 10
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 155970263,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "json",
      "offset": 4
    },
    {
      "val": "[\u0027foo\u0027, \u0027bar\u0027, \u0027baz\u0027]",
      "offset": 11
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 400676,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "json",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 11
    },
    {
      "val": "fun()",
      "offset": 14
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 28398760,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "expected",
      "offset": 4
    },
    {
      "val": "fun()",
      "offset": 15
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 16740144,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "json",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 11
    },
    {
      "val": "expected",
      "offset": 14
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 17491002,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "json-path can be performed in js",
  "description": "",
  "id": "various-javascript-tests;json-path-can-be-performed-in-js",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "def json \u003d [{foo: 1}, {foo: 2}]",
  "keyword": "* "
});
formatter.step({
  "line": 12,
  "name": "def fun \u003d function(arg) { return karate.jsonPath(arg, \u0027$[*].foo\u0027) }",
  "keyword": "* "
});
formatter.step({
  "line": 13,
  "name": "def res \u003d call fun json",
  "keyword": "* "
});
formatter.step({
  "line": 14,
  "name": "match res \u003d\u003d [1, 2]",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "json",
      "offset": 4
    },
    {
      "val": "[{foo: 1}, {foo: 2}]",
      "offset": 11
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 95993196,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fun",
      "offset": 4
    },
    {
      "val": "function(arg) { return karate.jsonPath(arg, \u0027$[*].foo\u0027) }",
      "offset": 10
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 16598101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "res",
      "offset": 4
    },
    {
      "val": "call fun json",
      "offset": 10
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 49356681,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "res",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 10
    },
    {
      "val": "[1, 2]",
      "offset": 13
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 767279,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "table to json with expressions evaluated",
  "description": "",
  "id": "various-javascript-tests;table-to-json-with-expressions-evaluated",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "def one \u003d \u0027hello\u0027",
  "keyword": "* "
});
formatter.step({
  "line": 18,
  "name": "def two \u003d { baz: \u0027world\u0027 }",
  "keyword": "* "
});
formatter.step({
  "line": 19,
  "name": "table json \u003d",
  "rows": [
    {
      "cells": [
        "foo",
        "bar"
      ],
      "line": 20
    },
    {
      "cells": [
        "one",
        "1"
      ],
      "line": 21
    },
    {
      "cells": [
        "two.baz",
        "2"
      ],
      "line": 22
    }
  ],
  "keyword": "* "
});
formatter.step({
  "line": 23,
  "name": "match json \u003d\u003d [{ foo: \u0027hello\u0027, bar: 1 }, { foo: \u0027world\u0027, bar: 2 }]",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "one",
      "offset": 4
    },
    {
      "val": "\u0027hello\u0027",
      "offset": 10
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 103132296,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "two",
      "offset": 4
    },
    {
      "val": "{ baz: \u0027world\u0027 }",
      "offset": 10
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 1416735,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "json",
      "offset": 6
    }
  ],
  "location": "StepDefs.table(String,DataTable)"
});
formatter.result({
  "duration": 59553813,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "json",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 11
    },
    {
      "val": "[{ foo: \u0027hello\u0027, bar: 1 }, { foo: \u0027world\u0027, bar: 2 }]",
      "offset": 14
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 28468960,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "json path with keys with spaces or other troublesome characters",
  "description": "",
  "id": "various-javascript-tests;json-path-with-keys-with-spaces-or-other-troublesome-characters",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "def json \u003d { \u0027sp ace\u0027: \u0027foo\u0027, \u0027hy-phen\u0027: \u0027bar\u0027, \u0027full.stop\u0027: \u0027baz\u0027 }",
  "keyword": "* "
});
formatter.step({
  "line": 27,
  "name": "string jsonString \u003d json",
  "keyword": "* "
});
formatter.step({
  "line": 28,
  "name": "match jsonString \u003d\u003d \u0027{\"sp ace\":\"foo\",\"hy-phen\":\"bar\",\"full.stop\":\"baz\"}\u0027",
  "keyword": "* "
});
formatter.step({
  "comments": [
    {
      "line": 29,
      "value": "# get comes to the rescue because spaces are a problem on the LHS"
    }
  ],
  "line": 30,
  "name": "def val1 \u003d get json $[\u0027sp ace\u0027]",
  "keyword": "* "
});
formatter.step({
  "line": 31,
  "name": "match val1 \u003d\u003d \u0027foo\u0027",
  "keyword": "* "
});
formatter.step({
  "line": 32,
  "name": "match json[\u0027hy-phen\u0027] \u003d\u003d \u0027bar\u0027",
  "keyword": "* "
});
formatter.step({
  "line": 33,
  "name": "match json[\u0027full.stop\u0027] \u003d\u003d \u0027baz\u0027",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "json",
      "offset": 4
    },
    {
      "val": "{ \u0027sp ace\u0027: \u0027foo\u0027, \u0027hy-phen\u0027: \u0027bar\u0027, \u0027full.stop\u0027: \u0027baz\u0027 }",
      "offset": 11
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 87163125,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jsonString",
      "offset": 7
    },
    {
      "val": "json",
      "offset": 20
    }
  ],
  "location": "StepDefs.castToString(String,String)"
});
formatter.result({
  "duration": 16317710,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "jsonString",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 17
    },
    {
      "val": "\u0027{\"sp ace\":\"foo\",\"hy-phen\":\"bar\",\"full.stop\":\"baz\"}\u0027",
      "offset": 20
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 15216260,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "val1",
      "offset": 4
    },
    {
      "val": "get json $[\u0027sp ace\u0027]",
      "offset": 11
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 392876,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "val1",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 11
    },
    {
      "val": "\u0027foo\u0027",
      "offset": 14
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 12081461,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "json[\u0027hy-phen\u0027]",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 22
    },
    {
      "val": "\u0027bar\u0027",
      "offset": 25
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 16562386,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "json[\u0027full.stop\u0027]",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 24
    },
    {
      "val": "\u0027baz\u0027",
      "offset": 27
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 15959728,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "pass json var (becomes a map) to a function",
  "description": "",
  "id": "various-javascript-tests;pass-json-var-(becomes-a-map)-to-a-function",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 36,
  "name": "def json \u003d { foo: \u0027bar\u0027, hello: \u0027world\u0027 }",
  "keyword": "* "
});
formatter.step({
  "line": 37,
  "name": "def fun \u003d function(o){ return o }",
  "keyword": "* "
});
formatter.step({
  "line": 38,
  "name": "def result \u003d call fun json",
  "keyword": "* "
});
formatter.step({
  "line": 39,
  "name": "match result \u003d\u003d json",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "json",
      "offset": 4
    },
    {
      "val": "{ foo: \u0027bar\u0027, hello: \u0027world\u0027 }",
      "offset": 11
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 114460025,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fun",
      "offset": 4
    },
    {
      "val": "function(o){ return o }",
      "offset": 10
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 17526307,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "result",
      "offset": 4
    },
    {
      "val": "call fun json",
      "offset": 13
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 43766506,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "result",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 13
    },
    {
      "val": "json",
      "offset": 16
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 14543814,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "remove json key from js",
  "description": "",
  "id": "various-javascript-tests;remove-json-key-from-js",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 42,
  "name": "def json \u003d { foo: \u0027bar\u0027, hello: \u0027world\u0027 }",
  "keyword": "* "
});
formatter.step({
  "line": 43,
  "name": "def fun \u003d function(){ karate.remove(\u0027json\u0027, \u0027$.foo\u0027) }",
  "keyword": "* "
});
formatter.step({
  "line": 44,
  "name": "call fun",
  "keyword": "* "
});
formatter.step({
  "line": 45,
  "name": "match json \u003d\u003d { hello: \u0027world\u0027 }",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "json",
      "offset": 4
    },
    {
      "val": "{ foo: \u0027bar\u0027, hello: \u0027world\u0027 }",
      "offset": 11
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 74592724,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fun",
      "offset": 4
    },
    {
      "val": "function(){ karate.remove(\u0027json\u0027, \u0027$.foo\u0027) }",
      "offset": 10
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 15233913,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fun",
      "offset": 5
    },
    {}
  ],
  "location": "StepDefs.callAndUpdateConfigAndVars(String,String)"
});
formatter.result({
  "duration": 31454329,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "json",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 11
    },
    {
      "val": "{ hello: \u0027world\u0027 }",
      "offset": 14
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 754553,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "remove json value",
  "description": "",
  "id": "various-javascript-tests;remove-json-value",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 48,
  "name": "def data \u003d { a: \u0027hello\u0027, b: null, c: null }",
  "keyword": "* "
});
formatter.step({
  "line": 49,
  "name": "def json \u003d { foo: \u0027#(data.a)\u0027, bar: \u0027#(data.b)\u0027, baz: \u0027##(data.c)\u0027 }",
  "keyword": "* "
});
formatter.step({
  "line": 50,
  "name": "match json \u003d\u003d { foo: \u0027hello\u0027, bar: null }",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "data",
      "offset": 4
    },
    {
      "val": "{ a: \u0027hello\u0027, b: null, c: null }",
      "offset": 11
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 82133733,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "json",
      "offset": 4
    },
    {
      "val": "{ foo: \u0027#(data.a)\u0027, bar: \u0027#(data.b)\u0027, baz: \u0027##(data.c)\u0027 }",
      "offset": 11
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 58192498,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "json",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 11
    },
    {
      "val": "{ foo: \u0027hello\u0027, bar: null }",
      "offset": 14
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 1783749,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "optional json values",
  "description": "",
  "id": "various-javascript-tests;optional-json-values",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 53,
  "name": "def response \u003d [{a: \u0027one\u0027, b: \u0027two\u0027}, { a: \u0027one\u0027 }]",
  "keyword": "* "
});
formatter.step({
  "line": 54,
  "name": "match each response contains { a: \u0027one\u0027, b: \u0027##(\"two\")\u0027 }",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "response",
      "offset": 4
    },
    {
      "val": "[{a: \u0027one\u0027, b: \u0027two\u0027}, { a: \u0027one\u0027 }]",
      "offset": 15
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 69175793,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "each ",
      "offset": 6
    },
    {
      "val": "response",
      "offset": 11
    },
    {},
    {},
    {},
    {
      "val": " { a: \u0027one\u0027, b: \u0027##(\"two\")\u0027 }",
      "offset": 28
    }
  ],
  "location": "StepDefs.matchContains(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 24044689,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "get and json path",
  "description": "",
  "id": "various-javascript-tests;get-and-json-path",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 57,
  "name": "def foo \u003d { bar: { baz: \u0027ban\u0027 } }",
  "keyword": "* "
});
formatter.step({
  "line": 58,
  "name": "def res \u003d get foo $..bar[?(@.baz)]",
  "keyword": "* "
});
formatter.step({
  "line": 59,
  "name": "match res contains { baz: \u0027ban\u0027 }",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "foo",
      "offset": 4
    },
    {
      "val": "{ bar: { baz: \u0027ban\u0027 } }",
      "offset": 10
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 63817568,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "res",
      "offset": 4
    },
    {
      "val": "get foo $..bar[?(@.baz)]",
      "offset": 10
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 43847791,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "res",
      "offset": 6
    },
    {},
    {},
    {},
    {
      "val": " { baz: \u0027ban\u0027 }",
      "offset": 18
    }
  ],
  "location": "StepDefs.matchContains(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 788626,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "comparing 2 payloads",
  "description": "",
  "id": "various-javascript-tests;comparing-2-payloads",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 62,
  "name": "def foo \u003d { hello: \u0027world\u0027, baz: \u0027ban\u0027 }",
  "keyword": "* "
});
formatter.step({
  "line": 63,
  "name": "def bar \u003d { baz: \u0027ban\u0027, hello: \u0027world\u0027 }",
  "keyword": "* "
});
formatter.step({
  "line": 64,
  "name": "match foo \u003d\u003d bar",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "foo",
      "offset": 4
    },
    {
      "val": "{ hello: \u0027world\u0027, baz: \u0027ban\u0027 }",
      "offset": 10
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 73907551,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bar",
      "offset": 4
    },
    {
      "val": "{ baz: \u0027ban\u0027, hello: \u0027world\u0027 }",
      "offset": 10
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 314466,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "foo",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 10
    },
    {
      "val": "bar",
      "offset": 13
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 13542123,
  "status": "passed"
});
formatter.uri("com/intuit/karate/testng/demos/random-jsonpath.feature");
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
  "name": "def data \u003d read(\u0027data.json\u0027)",
  "keyword": "* "
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "# wrapping in parantheses forces evaluation as a JS expression"
    }
  ],
  "line": 7,
  "name": "def size1 \u003d (data.Contents.Contents.length)",
  "keyword": "* "
});
formatter.step({
  "comments": [
    {
      "line": 8,
      "value": "# the \u0027get\u0027 keyword forces pure json path"
    }
  ],
  "line": 9,
  "name": "def size2 \u003d get data.Contents.Contents.length()",
  "keyword": "* "
});
formatter.step({
  "line": 10,
  "name": "assert size1 \u003d\u003d size2",
  "keyword": "* "
});
formatter.step({
  "line": 11,
  "name": "def index \u003d Math.floor(Math.random() * size1)",
  "keyword": "* "
});
formatter.step({
  "line": 12,
  "name": "print \u0027selected index: \u0027 + index",
  "keyword": "* "
});
formatter.step({
  "line": 13,
  "name": "def item \u003d (data.Contents.Contents[index])",
  "keyword": "* "
});
formatter.step({
  "line": 14,
  "name": "def children_uuids \u003d item.children_uuids",
  "keyword": "* "
});
formatter.step({
  "line": 15,
  "name": "match children_uuids \u003d\u003d { item: [\u0027item1_uuid\u0027, \u0027item2_uuid\u0027] }",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "data",
      "offset": 4
    },
    {
      "val": "read(\u0027data.json\u0027)",
      "offset": 11
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 122643512,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "size1",
      "offset": 4
    },
    {
      "val": "(data.Contents.Contents.length)",
      "offset": 12
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 21411965,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "size2",
      "offset": 4
    },
    {
      "val": "get data.Contents.Contents.length()",
      "offset": 12
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 10551008,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "size1 \u003d\u003d size2",
      "offset": 7
    }
  ],
  "location": "StepDefs.asssertBoolean(String)"
});
formatter.result({
  "duration": 13838935,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "index",
      "offset": 4
    },
    {
      "val": "Math.floor(Math.random() * size1)",
      "offset": 12
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 32378018,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u0027selected index: \u0027 + index",
      "offset": 6
    }
  ],
  "location": "StepDefs.print(String)"
});
formatter.result({
  "duration": 33819797,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "item",
      "offset": 4
    },
    {
      "val": "(data.Contents.Contents[index])",
      "offset": 11
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 21895159,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "children_uuids",
      "offset": 4
    },
    {
      "val": "item.children_uuids",
      "offset": 21
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 482371,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "children_uuids",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 21
    },
    {
      "val": "{ item: [\u0027item1_uuid\u0027, \u0027item2_uuid\u0027] }",
      "offset": 24
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 2168004,
  "status": "passed"
});
formatter.uri("com/intuit/karate/testng/demos/read-from-relative-path.feature");
formatter.feature({
  "line": 1,
  "name": "reading files",
  "description": "",
  "id": "reading-files",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "from a relative path",
  "description": "",
  "id": "reading-files;from-a-relative-path",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "def fun \u003d read(\u0027../syntax/for-demos.js\u0027)",
  "keyword": "* "
});
formatter.step({
  "line": 6,
  "name": "assert fun() \u003d\u003d \u0027foo\u0027",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "fun",
      "offset": 4
    },
    {
      "val": "read(\u0027../syntax/for-demos.js\u0027)",
      "offset": 10
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 84426949,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fun() \u003d\u003d \u0027foo\u0027",
      "offset": 7
    }
  ],
  "location": "StepDefs.asssertBoolean(String)"
});
formatter.result({
  "duration": 12705875,
  "status": "passed"
});
formatter.uri("com/intuit/karate/testng/demos/replace.feature");
formatter.feature({
  "line": 1,
  "name": "replace keyword",
  "description": "",
  "id": "replace-keyword",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "one-line default placeholder",
  "description": "",
  "id": "replace-keyword;one-line-default-placeholder",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "def text \u003d \u0027hello \u003cfoo\u003e world\u0027",
  "keyword": "* "
});
formatter.step({
  "line": 6,
  "name": "replace text.foo \u003d \u0027bar\u0027",
  "keyword": "* "
});
formatter.step({
  "line": 7,
  "name": "match text \u003d\u003d \u0027hello bar world\u0027",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "text",
      "offset": 4
    },
    {
      "val": "\u0027hello \u003cfoo\u003e world\u0027",
      "offset": 11
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 65229377,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "text",
      "offset": 8
    },
    {
      "val": "foo",
      "offset": 13
    },
    {
      "val": "\u0027bar\u0027",
      "offset": 19
    }
  ],
  "location": "StepDefs.replace(String,String,String)"
});
formatter.result({
  "duration": 9839150,
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
      "val": "\u0027hello bar world\u0027",
      "offset": 14
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 13175110,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "one-line non-default placeholder 1",
  "description": "",
  "id": "replace-keyword;one-line-non-default-placeholder-1",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "def text \u003d \u0027hello ${foo} world\u0027",
  "keyword": "* "
});
formatter.step({
  "line": 13,
  "name": "replace text.${foo} \u003d \u0027bar\u0027",
  "keyword": "* "
});
formatter.step({
  "line": 14,
  "name": "match text \u003d\u003d \u0027hello bar world\u0027",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "text",
      "offset": 4
    },
    {
      "val": "\u0027hello ${foo} world\u0027",
      "offset": 11
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 59045987,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "text",
      "offset": 8
    },
    {
      "val": "${foo}",
      "offset": 13
    },
    {
      "val": "\u0027bar\u0027",
      "offset": 22
    }
  ],
  "location": "StepDefs.replace(String,String,String)"
});
formatter.result({
  "duration": 8854291,
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
      "val": "\u0027hello bar world\u0027",
      "offset": 14
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 19902861,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "one-line non-default placeholder 2",
  "description": "",
  "id": "replace-keyword;one-line-non-default-placeholder-2",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "def text \u003d \u0027hello @@foo@@ world\u0027",
  "keyword": "* "
});
formatter.step({
  "line": 20,
  "name": "replace text.@@foo@@ \u003d \u0027bar\u0027",
  "keyword": "* "
});
formatter.step({
  "line": 21,
  "name": "match text \u003d\u003d \u0027hello bar world\u0027",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "text",
      "offset": 4
    },
    {
      "val": "\u0027hello @@foo@@ world\u0027",
      "offset": 11
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 60332586,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "text",
      "offset": 8
    },
    {
      "val": "@@foo@@",
      "offset": 13
    },
    {
      "val": "\u0027bar\u0027",
      "offset": 23
    }
  ],
  "location": "StepDefs.replace(String,String,String)"
});
formatter.result({
  "duration": 9000440,
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
      "val": "\u0027hello bar world\u0027",
      "offset": 14
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 10016089,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "table default placeholder",
  "description": "",
  "id": "replace-keyword;table-default-placeholder",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "def text \u003d \u0027hello \u003cone\u003e world \u003ctwo\u003e bye\u0027",
  "keyword": "* "
});
formatter.step({
  "line": 28,
  "name": "replace text",
  "rows": [
    {
      "cells": [
        "token",
        "value"
      ],
      "line": 29
    },
    {
      "cells": [
        "one",
        "\u0027cruel\u0027"
      ],
      "line": 30
    },
    {
      "cells": [
        "two",
        "\u0027good\u0027"
      ],
      "line": 31
    }
  ],
  "keyword": "* "
});
formatter.step({
  "line": 33,
  "name": "match text \u003d\u003d \u0027hello cruel world good bye\u0027",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "text",
      "offset": 4
    },
    {
      "val": "\u0027hello \u003cone\u003e world \u003ctwo\u003e bye\u0027",
      "offset": 11
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 59829688,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "text",
      "offset": 8
    }
  ],
  "location": "StepDefs.replace(String,DataTable)"
});
formatter.result({
  "duration": 19169656,
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
      "val": "\u0027hello cruel world good bye\u0027",
      "offset": 14
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 9494306,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "table non-default placeholder",
  "description": "",
  "id": "replace-keyword;table-non-default-placeholder",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 38,
  "name": "def text \u003d \u0027hello ${one} world @@two@@ bye\u0027",
  "keyword": "* "
});
formatter.step({
  "line": 40,
  "name": "replace text",
  "rows": [
    {
      "cells": [
        "token",
        "value"
      ],
      "line": 41
    },
    {
      "cells": [
        "${one}",
        "\u0027cruel\u0027"
      ],
      "line": 42
    },
    {
      "cells": [
        "@@two@@",
        "\u0027good\u0027"
      ],
      "line": 43
    }
  ],
  "keyword": "* "
});
formatter.step({
  "line": 45,
  "name": "match text \u003d\u003d \u0027hello cruel world good bye\u0027",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "text",
      "offset": 4
    },
    {
      "val": "\u0027hello ${one} world @@two@@ bye\u0027",
      "offset": 11
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 50685974,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "text",
      "offset": 8
    }
  ],
  "location": "StepDefs.replace(String,DataTable)"
});
formatter.result({
  "duration": 18778832,
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
      "val": "\u0027hello cruel world good bye\u0027",
      "offset": 14
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 9301358,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "table with expression evaluation",
  "description": "",
  "id": "replace-keyword;table-with-expression-evaluation",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 50,
  "name": "def text \u003d \u0027hello \u003cone\u003e world \u003ctwo\u003e bye\u0027",
  "keyword": "* "
});
formatter.step({
  "line": 51,
  "name": "def first \u003d \u0027cruel\u0027",
  "keyword": "* "
});
formatter.step({
  "line": 52,
  "name": "def second \u003d \u0027good\u0027",
  "keyword": "* "
});
formatter.step({
  "line": 54,
  "name": "replace text",
  "rows": [
    {
      "cells": [
        "token",
        "value"
      ],
      "line": 55
    },
    {
      "cells": [
        "one",
        "first"
      ],
      "line": 56
    },
    {
      "cells": [
        "two",
        "second"
      ],
      "line": 57
    }
  ],
  "keyword": "* "
});
formatter.step({
  "line": 59,
  "name": "match text \u003d\u003d \u0027hello cruel world good bye\u0027",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "text",
      "offset": 4
    },
    {
      "val": "\u0027hello \u003cone\u003e world \u003ctwo\u003e bye\u0027",
      "offset": 11
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 58185109,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "first",
      "offset": 4
    },
    {
      "val": "\u0027cruel\u0027",
      "offset": 12
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 7433040,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "second",
      "offset": 4
    },
    {
      "val": "\u0027good\u0027",
      "offset": 13
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 7665810,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "text",
      "offset": 8
    }
  ],
  "location": "StepDefs.replace(String,DataTable)"
});
formatter.result({
  "duration": 15959318,
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
      "val": "\u0027hello cruel world good bye\u0027",
      "offset": 14
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 7738063,
  "status": "passed"
});
formatter.scenario({
  "line": 62,
  "name": "table with complex expression evaluation",
  "description": "",
  "id": "replace-keyword;table-with-complex-expression-evaluation",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 64,
  "name": "def text \u003d \u0027hello \u003cone\u003e world \u003ctwo\u003e bye\u0027",
  "keyword": "* "
});
formatter.step({
  "line": 65,
  "name": "def json \u003d { first: \u0027cruel\u0027, second: \u0027good\u0027 }",
  "keyword": "* "
});
formatter.step({
  "line": 67,
  "name": "replace text",
  "rows": [
    {
      "cells": [
        "token",
        "value"
      ],
      "line": 68
    },
    {
      "cells": [
        "one",
        "json.first"
      ],
      "line": 69
    },
    {
      "cells": [
        "two",
        "json.second"
      ],
      "line": 70
    }
  ],
  "keyword": "* "
});
formatter.step({
  "line": 72,
  "name": "match text \u003d\u003d \u0027hello cruel world good bye\u0027",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "text",
      "offset": 4
    },
    {
      "val": "\u0027hello \u003cone\u003e world \u003ctwo\u003e bye\u0027",
      "offset": 11
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 46960833,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "json",
      "offset": 4
    },
    {
      "val": "{ first: \u0027cruel\u0027, second: \u0027good\u0027 }",
      "offset": 11
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 291476,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "text",
      "offset": 8
    }
  ],
  "location": "StepDefs.replace(String,DataTable)"
});
formatter.result({
  "duration": 583361,
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
      "val": "\u0027hello cruel world good bye\u0027",
      "offset": 14
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 7700294,
  "status": "passed"
});
formatter.uri("com/intuit/karate/testng/demos/scenario-variable-scope.feature");
formatter.feature({
  "line": 1,
  "name": "",
  "description": "",
  "id": "",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "def a \u003d 1",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "a",
      "offset": 4
    },
    {
      "val": "1",
      "offset": 8
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 55781871,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "",
  "description": "",
  "id": ";",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "assert a \u003d\u003d 1",
  "keyword": "* "
});
formatter.step({
  "line": 8,
  "name": "def a \u003d 2",
  "keyword": "* "
});
formatter.step({
  "line": 9,
  "name": "def b \u003d 3",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "a \u003d\u003d 1",
      "offset": 7
    }
  ],
  "location": "StepDefs.asssertBoolean(String)"
});
formatter.result({
  "duration": 8037339,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "a",
      "offset": 4
    },
    {
      "val": "2",
      "offset": 8
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 12407421,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "b",
      "offset": 4
    },
    {
      "val": "3",
      "offset": 8
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 14854174,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "def a \u003d 1",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "a",
      "offset": 4
    },
    {
      "val": "1",
      "offset": 8
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 48280683,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "",
  "description": "",
  "id": ";",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "assert a \u003d\u003d 1",
  "keyword": "* "
});
formatter.step({
  "line": 13,
  "name": "assert typeof b \u003d\u003d \u0027undefined\u0027",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "a \u003d\u003d 1",
      "offset": 7
    }
  ],
  "location": "StepDefs.asssertBoolean(String)"
});
formatter.result({
  "duration": 10142121,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "typeof b \u003d\u003d \u0027undefined\u0027",
      "offset": 7
    }
  ],
  "location": "StepDefs.asssertBoolean(String)"
});
formatter.result({
  "duration": 22426793,
  "status": "passed"
});
formatter.uri("com/intuit/karate/testng/demos/schema-like.feature");
formatter.feature({
  "line": 1,
  "name": "json-schema like validation",
  "description": "",
  "id": "json-schema-like-validation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "but simpler and more powerful",
  "description": "",
  "id": "json-schema-like-validation;but-simpler-and-more-powerful",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "def response \u003d read(\u0027odds.json\u0027)",
  "keyword": "* "
});
formatter.step({
  "line": 7,
  "name": "def oddSchema \u003d { price: \u0027#string\u0027, status: \u0027#? _ \u003c 3\u0027, ck: \u0027##number\u0027, name: \u0027#regex[0-9X]\u0027 }",
  "keyword": "* "
});
formatter.step({
  "line": 8,
  "name": "def isValidTime \u003d read(\u0027time-validator.js\u0027)",
  "keyword": "* "
});
formatter.step({
  "line": 10,
  "name": "match response \u003d\u003d",
  "keyword": "Then ",
  "doc_string": {
    "content_type": "",
    "line": 11,
    "value": "{ \n  id: \u0027#regex[0-9]+\u0027,\n  count: \u0027#number\u0027,\n  odd: \u0027#(oddSchema)\u0027,\n  data: { \n    countryId: \u0027#number\u0027, \n    countryName: \u0027#string\u0027, \n    leagueName: \u0027##string\u0027, \n    status: \u0027#number? _ \u003e\u003d 0\u0027, \n    sportName: \u0027#string\u0027,\n    time: \u0027#? isValidTime(_)\u0027\n  },\n  odds: \u0027#[] oddSchema\u0027  \n}"
  }
});
formatter.step({
  "comments": [
    {
      "line": 27,
      "value": "# other examples"
    },
    {
      "line": 29,
      "value": "# should be an array"
    }
  ],
  "line": 30,
  "name": "match $.odds \u003d\u003d \u0027#[]\u0027",
  "keyword": "* "
});
formatter.step({
  "comments": [
    {
      "line": 32,
      "value": "# should be an array of size 4"
    }
  ],
  "line": 33,
  "name": "match $.odds \u003d\u003d \u0027#[4]\u0027",
  "keyword": "* "
});
formatter.step({
  "comments": [
    {
      "line": 35,
      "value": "# optionally present (or null) and should be an array of size greater than zero"
    }
  ],
  "line": 36,
  "name": "match $.odds \u003d\u003d \u0027##[_ \u003e 0]\u0027",
  "keyword": "* "
});
formatter.step({
  "comments": [
    {
      "line": 38,
      "value": "# should be an array of size equal to $.count"
    }
  ],
  "line": 39,
  "name": "match $.odds \u003d\u003d \u0027#[$.count]\u0027",
  "keyword": "* "
});
formatter.step({
  "comments": [
    {
      "line": 41,
      "value": "# use a predicate function to validate each array element"
    }
  ],
  "line": 42,
  "name": "def isValidOdd \u003d function(o){ return o.name.length \u003d\u003d 1 }",
  "keyword": "* "
});
formatter.step({
  "line": 43,
  "name": "match $.odds \u003d\u003d \u0027#[]? isValidOdd(_)\u0027",
  "keyword": "* "
});
formatter.step({
  "comments": [
    {
      "line": 45,
      "value": "# for simple arrays, types can be \u0027in-line\u0027"
    }
  ],
  "line": 46,
  "name": "def foo \u003d [\u0027bar\u0027, \u0027baz\u0027]",
  "keyword": "* "
});
formatter.step({
  "comments": [
    {
      "line": 48,
      "value": "# should be an array"
    }
  ],
  "line": 49,
  "name": "match foo \u003d\u003d \u0027#[]\u0027",
  "keyword": "* "
});
formatter.step({
  "comments": [
    {
      "line": 51,
      "value": "# should be an array of size 2"
    }
  ],
  "line": 52,
  "name": "match foo \u003d\u003d \u0027#[2]\u0027",
  "keyword": "* "
});
formatter.step({
  "comments": [
    {
      "line": 54,
      "value": "# should be an array of strings with size 2"
    }
  ],
  "line": 55,
  "name": "match foo \u003d\u003d \u0027#[2] #string\u0027",
  "keyword": "* "
});
formatter.step({
  "comments": [
    {
      "line": 57,
      "value": "# should be an array of strings each of length 3"
    }
  ],
  "line": 58,
  "name": "match foo \u003d\u003d \u0027#[] #string? _.length \u003d\u003d 3\u0027",
  "keyword": "* "
});
formatter.step({
  "comments": [
    {
      "line": 60,
      "value": "# should be null or an array of strings"
    }
  ],
  "line": 61,
  "name": "match foo \u003d\u003d \u0027##[] #string\u0027",
  "keyword": "* "
});
formatter.step({
  "comments": [
    {
      "line": 63,
      "value": "# contains"
    }
  ],
  "line": 64,
  "name": "def foo \u003d [{ a: 1, b: 2 }, { a: 3, b: 4 }]",
  "keyword": "* "
});
formatter.step({
  "line": 65,
  "name": "def exact \u003d { a: \u0027#number\u0027, b: \u0027#number\u0027 }",
  "keyword": "* "
});
formatter.step({
  "line": 66,
  "name": "def partial \u003d { b: \u0027#number\u0027 }",
  "keyword": "* "
});
formatter.step({
  "line": 67,
  "name": "def nope \u003d { c: \u0027#number\u0027 }",
  "keyword": "* "
});
formatter.step({
  "line": 69,
  "name": "match foo[0] \u003d\u003d \u0027#(exact)\u0027",
  "keyword": "* "
});
formatter.step({
  "line": 70,
  "name": "match foo[0] \u003d\u003d \u0027#(^partial)\u0027",
  "keyword": "* "
});
formatter.step({
  "line": 71,
  "name": "match foo[0] \u003d\u003d \u0027#(!^nope)\u0027",
  "keyword": "* "
});
formatter.step({
  "line": 73,
  "name": "match foo \u003d\u003d \u0027#[] exact\u0027",
  "keyword": "* "
});
formatter.step({
  "line": 74,
  "name": "match foo \u003d\u003d \u0027#[] ^partial\u0027",
  "keyword": "* "
});
formatter.step({
  "line": 75,
  "name": "match foo \u003d\u003d \u0027#[] !^nope\u0027",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "response",
      "offset": 4
    },
    {
      "val": "read(\u0027odds.json\u0027)",
      "offset": 15
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 70447202,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "oddSchema",
      "offset": 4
    },
    {
      "val": "{ price: \u0027#string\u0027, status: \u0027#? _ \u003c 3\u0027, ck: \u0027##number\u0027, name: \u0027#regex[0-9X]\u0027 }",
      "offset": 16
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 276697,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "isValidTime",
      "offset": 4
    },
    {
      "val": "read(\u0027time-validator.js\u0027)",
      "offset": 18
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 32171522,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "response",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 15
    }
  ],
  "location": "StepDefs.matchEqualsDocString(String,String,String,String,String)"
});
formatter.result({
  "duration": 186381436,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "$.odds",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 13
    },
    {
      "val": "\u0027#[]\u0027",
      "offset": 16
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 6740888,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "$.odds",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 13
    },
    {
      "val": "\u0027#[4]\u0027",
      "offset": 16
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 12434105,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "$.odds",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 13
    },
    {
      "val": "\u0027##[_ \u003e 0]\u0027",
      "offset": 16
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 14248233,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "$.odds",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 13
    },
    {
      "val": "\u0027#[$.count]\u0027",
      "offset": 16
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 14509329,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "isValidOdd",
      "offset": 4
    },
    {
      "val": "function(o){ return o.name.length \u003d\u003d 1 }",
      "offset": 17
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 7405124,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "$.odds",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 13
    },
    {
      "val": "\u0027#[]? isValidOdd(_)\u0027",
      "offset": 16
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 69906535,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "foo",
      "offset": 4
    },
    {
      "val": "[\u0027bar\u0027, \u0027baz\u0027]",
      "offset": 10
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 201570,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "foo",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 10
    },
    {
      "val": "\u0027#[]\u0027",
      "offset": 13
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 6446538,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "foo",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 10
    },
    {
      "val": "\u0027#[2]\u0027",
      "offset": 13
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 13331111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "foo",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 10
    },
    {
      "val": "\u0027#[2] #string\u0027",
      "offset": 13
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 19753838,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "foo",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 10
    },
    {
      "val": "\u0027#[] #string? _.length \u003d\u003d 3\u0027",
      "offset": 13
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 27257490,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "foo",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 10
    },
    {
      "val": "\u0027##[] #string\u0027",
      "offset": 13
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 14297086,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "foo",
      "offset": 4
    },
    {
      "val": "[{ a: 1, b: 2 }, { a: 3, b: 4 }]",
      "offset": 10
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 256170,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "exact",
      "offset": 4
    },
    {
      "val": "{ a: \u0027#number\u0027, b: \u0027#number\u0027 }",
      "offset": 12
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 195002,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "partial",
      "offset": 4
    },
    {
      "val": "{ b: \u0027#number\u0027 }",
      "offset": 14
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 198696,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nope",
      "offset": 4
    },
    {
      "val": "{ c: \u0027#number\u0027 }",
      "offset": 11
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 215939,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "foo[0]",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 13
    },
    {
      "val": "\u0027#(exact)\u0027",
      "offset": 16
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 14050769,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "foo[0]",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 13
    },
    {
      "val": "\u0027#(^partial)\u0027",
      "offset": 16
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 15526621,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "foo[0]",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 13
    },
    {
      "val": "\u0027#(!^nope)\u0027",
      "offset": 16
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 15635001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "foo",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 10
    },
    {
      "val": "\u0027#[] exact\u0027",
      "offset": 13
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 13118457,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "foo",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 10
    },
    {
      "val": "\u0027#[] ^partial\u0027",
      "offset": 13
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 13803219,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "foo",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 10
    },
    {
      "val": "\u0027#[] !^nope\u0027",
      "offset": 13
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 13501891,
  "status": "passed"
});
formatter.scenario({
  "line": 77,
  "name": "pretty print json",
  "description": "",
  "id": "json-schema-like-validation;pretty-print-json",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 78,
  "name": "def json \u003d read(\u0027odds.json\u0027)",
  "keyword": "* "
});
formatter.step({
  "line": 79,
  "name": "print \u0027pretty print:\\n\u0027 + karate.pretty(json)",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "json",
      "offset": 4
    },
    {
      "val": "read(\u0027odds.json\u0027)",
      "offset": 11
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 41034024,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u0027pretty print:\\n\u0027 + karate.pretty(json)",
      "offset": 6
    }
  ],
  "location": "StepDefs.print(String)"
});
formatter.result({
  "duration": 7146080,
  "status": "passed"
});
formatter.scenario({
  "line": 81,
  "name": "more pretty print",
  "description": "",
  "id": "json-schema-like-validation;more-pretty-print",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 82,
  "name": "def myJson \u003d { foo: \u0027bar\u0027, baz: [1, 2, 3]}",
  "keyword": "* "
});
formatter.step({
  "line": 83,
  "name": "print \u0027pretty print:\\n\u0027 + karate.pretty(myJson)",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "myJson",
      "offset": 4
    },
    {
      "val": "{ foo: \u0027bar\u0027, baz: [1, 2, 3]}",
      "offset": 13
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 32929769,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u0027pretty print:\\n\u0027 + karate.pretty(myJson)",
      "offset": 6
    }
  ],
  "location": "StepDefs.print(String)"
});
formatter.result({
  "duration": 9278368,
  "status": "passed"
});
formatter.uri("com/intuit/karate/testng/demos/type-conv.feature");
formatter.feature({
  "line": 1,
  "name": "convert between json, xml and string",
  "description": "",
  "id": "convert-between-json,-xml-and-string",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "string to json",
  "description": "",
  "id": "convert-between-json,-xml-and-string;string-to-json",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 4,
      "value": "# this would be of type string (not JSON)"
    }
  ],
  "line": 5,
  "name": "def strVar \u003d \u0027{ \"foo\": \"bar\" }\u0027",
  "keyword": "* "
});
formatter.step({
  "line": 6,
  "name": "json jsonVar \u003d strVar",
  "keyword": "* "
});
formatter.step({
  "line": 7,
  "name": "match jsonVar \u003d\u003d { foo: \u0027bar\u0027 }",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "strVar",
      "offset": 4
    },
    {
      "val": "\u0027{ \"foo\": \"bar\" }\u0027",
      "offset": 13
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 47288845,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jsonVar",
      "offset": 5
    },
    {
      "val": "strVar",
      "offset": 15
    }
  ],
  "location": "StepDefs.castToJson(String,String)"
});
formatter.result({
  "duration": 7123911,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "jsonVar",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 14
    },
    {
      "val": "{ foo: \u0027bar\u0027 }",
      "offset": 17
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 302560,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "json to string",
  "description": "",
  "id": "convert-between-json,-xml-and-string;json-to-string",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "def jsonVar \u003d { foo: \u0027bar\u0027 }",
  "keyword": "* "
});
formatter.step({
  "line": 11,
  "name": "string strVar \u003d jsonVar",
  "keyword": "* "
});
formatter.step({
  "line": 12,
  "name": "assert strVar \u003d\u003d \u0027{\"foo\":\"bar\"}\u0027",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "jsonVar",
      "offset": 4
    },
    {
      "val": "{ foo: \u0027bar\u0027 }",
      "offset": 14
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 32154690,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "strVar",
      "offset": 7
    },
    {
      "val": "jsonVar",
      "offset": 16
    }
  ],
  "location": "StepDefs.castToString(String,String)"
});
formatter.result({
  "duration": 6316401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "strVar \u003d\u003d \u0027{\"foo\":\"bar\"}\u0027",
      "offset": 7
    }
  ],
  "location": "StepDefs.asssertBoolean(String)"
});
formatter.result({
  "duration": 7206017,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "string to xml",
  "description": "",
  "id": "convert-between-json,-xml-and-string;string-to-xml",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "def strVar \u003d \u0027\u003croot\u003e\u003cfoo\u003ebar\u003c/foo\u003e\u003c/root\u003e\u0027",
  "keyword": "* "
});
formatter.step({
  "line": 16,
  "name": "xml xmlVar \u003d strVar",
  "keyword": "* "
});
formatter.step({
  "line": 17,
  "name": "match xmlVar \u003d\u003d \u003croot\u003e\u003cfoo\u003ebar\u003c/foo\u003e\u003c/root\u003e",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "strVar",
      "offset": 4
    },
    {
      "val": "\u0027\u003croot\u003e\u003cfoo\u003ebar\u003c/foo\u003e\u003c/root\u003e\u0027",
      "offset": 13
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 46592588,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xmlVar",
      "offset": 4
    },
    {
      "val": "strVar",
      "offset": 13
    }
  ],
  "location": "StepDefs.castToXml(String,String)"
});
formatter.result({
  "duration": 24201100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "xmlVar",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 13
    },
    {
      "val": "\u003croot\u003e\u003cfoo\u003ebar\u003c/foo\u003e\u003c/root\u003e",
      "offset": 16
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 30170603,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "xml to string (incorrect)",
  "description": "",
  "id": "convert-between-json,-xml-and-string;xml-to-string-(incorrect)",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "def xmlVar \u003d \u003croot\u003e\u003cfoo\u003ebar\u003c/foo\u003e\u003c/root\u003e",
  "keyword": "* "
});
formatter.step({
  "line": 21,
  "name": "string strVar \u003d xmlVar",
  "keyword": "* "
});
formatter.step({
  "comments": [
    {
      "line": 22,
      "value": "# because of karate\u0027s internal map-like default representation, this happens. see \u0027xmlstring\u0027 below"
    }
  ],
  "line": 23,
  "name": "match strVar \u003d\u003d \u0027{\"root\":{\"foo\":\"bar\"}}\u0027",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "xmlVar",
      "offset": 4
    },
    {
      "val": "\u003croot\u003e\u003cfoo\u003ebar\u003c/foo\u003e\u003c/root\u003e",
      "offset": 13
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 28216896,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "strVar",
      "offset": 7
    },
    {
      "val": "xmlVar",
      "offset": 16
    }
  ],
  "location": "StepDefs.castToString(String,String)"
});
formatter.result({
  "duration": 8558711,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "strVar",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 13
    },
    {
      "val": "\u0027{\"root\":{\"foo\":\"bar\"}}\u0027",
      "offset": 16
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 6870204,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "xml to string",
  "description": "",
  "id": "convert-between-json,-xml-and-string;xml-to-string",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "def xmlVar \u003d \u003croot\u003e\u003cfoo\u003ebar\u003c/foo\u003e\u003c/root\u003e",
  "keyword": "* "
});
formatter.step({
  "comments": [
    {
      "line": 27,
      "value": "# note that the keyword here is \u0027xmlstring\u0027 not \u0027string\u0027"
    }
  ],
  "line": 28,
  "name": "xmlstring strVar \u003d xmlVar",
  "keyword": "* "
});
formatter.step({
  "line": 29,
  "name": "match strVar \u003d\u003d \u0027\u003croot\u003e\u003cfoo\u003ebar\u003c/foo\u003e\u003c/root\u003e\u0027",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "xmlVar",
      "offset": 4
    },
    {
      "val": "\u003croot\u003e\u003cfoo\u003ebar\u003c/foo\u003e\u003c/root\u003e",
      "offset": 13
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 32766379,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "strVar",
      "offset": 10
    },
    {
      "val": "xmlVar",
      "offset": 19
    }
  ],
  "location": "StepDefs.castToXmlString(String,String)"
});
formatter.result({
  "duration": 71715326,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "strVar",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 13
    },
    {
      "val": "\u0027\u003croot\u003e\u003cfoo\u003ebar\u003c/foo\u003e\u003c/root\u003e\u0027",
      "offset": 16
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 4232144,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "xml to json",
  "description": "",
  "id": "convert-between-json,-xml-and-string;xml-to-json",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "def xmlVar \u003d \u003croot\u003e\u003cfoo\u003ebar\u003c/foo\u003e\u003c/root\u003e",
  "keyword": "* "
});
formatter.step({
  "line": 33,
  "name": "json jsonVar \u003d xmlVar",
  "keyword": "* "
});
formatter.step({
  "line": 34,
  "name": "match jsonVar \u003d\u003d { root: { foo: \u0027bar\u0027 } }",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "xmlVar",
      "offset": 4
    },
    {
      "val": "\u003croot\u003e\u003cfoo\u003ebar\u003c/foo\u003e\u003c/root\u003e",
      "offset": 13
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 35095721,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jsonVar",
      "offset": 5
    },
    {
      "val": "xmlVar",
      "offset": 15
    }
  ],
  "location": "StepDefs.castToJson(String,String)"
});
formatter.result({
  "duration": 6577908,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "jsonVar",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 14
    },
    {
      "val": "{ root: { foo: \u0027bar\u0027 } }",
      "offset": 17
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 283265,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "json to xml",
  "description": "",
  "id": "convert-between-json,-xml-and-string;json-to-xml",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 37,
  "name": "def jsonVar \u003d { root: { foo: \u0027bar\u0027 } }",
  "keyword": "* "
});
formatter.step({
  "line": 38,
  "name": "xml xmlVar \u003d jsonVar",
  "keyword": "* "
});
formatter.step({
  "line": 39,
  "name": "match xmlVar \u003d\u003d \u003croot\u003e\u003cfoo\u003ebar\u003c/foo\u003e\u003c/root\u003e",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "jsonVar",
      "offset": 4
    },
    {
      "val": "{ root: { foo: \u0027bar\u0027 } }",
      "offset": 14
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 26547684,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xmlVar",
      "offset": 4
    },
    {
      "val": "jsonVar",
      "offset": 13
    }
  ],
  "location": "StepDefs.castToXml(String,String)"
});
formatter.result({
  "duration": 19566227,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "xmlVar",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 13
    },
    {
      "val": "\u003croot\u003e\u003cfoo\u003ebar\u003c/foo\u003e\u003c/root\u003e",
      "offset": 16
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 4884885,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "xml with attributes",
  "description": "",
  "id": "convert-between-json,-xml-and-string;xml-with-attributes",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 42,
  "name": "def xmlVar \u003d \u003croot\u003e\u003cfoo fizz\u003d\"buzz\"\u003ebar\u003c/foo\u003e\u003c/root\u003e",
  "keyword": "* "
});
formatter.step({
  "line": 43,
  "name": "json jsonVar \u003d xmlVar",
  "keyword": "* "
});
formatter.step({
  "comments": [
    {
      "line": 44,
      "value": "# it ain\u0027t pretty but this is how karate converts xml to a map-like object internally for parity with json"
    }
  ],
  "line": 45,
  "name": "match jsonVar \u003d\u003d { root: { foo: { _ : \u0027bar\u0027, @: { fizz: \u0027buzz\u0027 }}}}",
  "keyword": "* "
});
formatter.step({
  "comments": [
    {
      "line": 46,
      "value": "# which means that json can be used instead of xpath"
    }
  ],
  "line": 47,
  "name": "match jsonVar $.root.foo._ \u003d\u003d \u0027bar\u0027",
  "keyword": "* "
});
formatter.step({
  "line": 48,
  "name": "match jsonVar $.root.foo.@ \u003d\u003d { fizz: \u0027buzz\u0027 }",
  "keyword": "* "
});
formatter.step({
  "line": 49,
  "name": "match jsonVar $.root.foo.@.fizz \u003d\u003d \u0027buzz\u0027",
  "keyword": "* "
});
formatter.step({
  "line": 50,
  "name": "match jsonVar $..foo.@.fizz \u003d\u003d [\u0027buzz\u0027]",
  "keyword": "* "
});
formatter.step({
  "line": 51,
  "name": "match jsonVar $..@.fizz contains \u0027buzz\u0027",
  "keyword": "* "
});
formatter.step({
  "line": 52,
  "name": "match jsonVar $..foo.@ contains { fizz: \u0027buzz\u0027 }",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "xmlVar",
      "offset": 4
    },
    {
      "val": "\u003croot\u003e\u003cfoo fizz\u003d\"buzz\"\u003ebar\u003c/foo\u003e\u003c/root\u003e",
      "offset": 13
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 58492185,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jsonVar",
      "offset": 5
    },
    {
      "val": "xmlVar",
      "offset": 15
    }
  ],
  "location": "StepDefs.castToJson(String,String)"
});
formatter.result({
  "duration": 6458034,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "jsonVar",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 14
    },
    {
      "val": "{ root: { foo: { _ : \u0027bar\u0027, @: { fizz: \u0027buzz\u0027 }}}}",
      "offset": 17
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 314465,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "jsonVar",
      "offset": 6
    },
    {
      "val": " $.root.foo._",
      "offset": 13
    },
    {
      "val": "\u003d\u003d",
      "offset": 27
    },
    {
      "val": "\u0027bar\u0027",
      "offset": 30
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 5819250,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "jsonVar",
      "offset": 6
    },
    {
      "val": " $.root.foo.@",
      "offset": 13
    },
    {
      "val": "\u003d\u003d",
      "offset": 27
    },
    {
      "val": "{ fizz: \u0027buzz\u0027 }",
      "offset": 30
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 353876,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "jsonVar",
      "offset": 6
    },
    {
      "val": " $.root.foo.@.fizz",
      "offset": 13
    },
    {
      "val": "\u003d\u003d",
      "offset": 32
    },
    {
      "val": "\u0027buzz\u0027",
      "offset": 35
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 6534802,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "jsonVar",
      "offset": 6
    },
    {
      "val": " $..foo.@.fizz",
      "offset": 13
    },
    {
      "val": "\u003d\u003d",
      "offset": 28
    },
    {
      "val": "[\u0027buzz\u0027]",
      "offset": 31
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 405603,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "jsonVar",
      "offset": 6
    },
    {
      "val": " $..@.fizz",
      "offset": 13
    },
    {},
    {},
    {
      "val": " \u0027buzz\u0027",
      "offset": 32
    }
  ],
  "location": "StepDefs.matchContains(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 5660375,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "jsonVar",
      "offset": 6
    },
    {
      "val": " $..foo.@",
      "offset": 13
    },
    {},
    {},
    {
      "val": " { fizz: \u0027buzz\u0027 }",
      "offset": 31
    }
  ],
  "location": "StepDefs.matchContains(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 3506739,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "xml with namespaces",
  "description": "",
  "id": "convert-between-json,-xml-and-string;xml-with-namespaces",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 55,
  "name": "def xmlVar \u003d \u003cns1:root xmlns:ns1\u003d\"http://foo.com\" xmlns:ns2\u003d\"http://bar.com\"\u003e\u003cns2:foo fizz\u003d\"buzz\" ping\u003d\"pong\"\u003ebar\u003c/ns2:foo\u003e\u003c/ns1:root\u003e",
  "keyword": "* "
});
formatter.step({
  "line": 56,
  "name": "json jsonVar \u003d xmlVar",
  "keyword": "* "
});
formatter.step({
  "line": 57,
  "name": "match jsonVar \u003d\u003d",
  "keyword": "* ",
  "doc_string": {
    "content_type": "",
    "line": 58,
    "value": "{ \n  \"ns1:root\": {\n    \"@\": { \"xmlns:ns1\": \"http://foo.com\", \"xmlns:ns2\": \"http://bar.com\" },\n    \"_\": { \n      \"ns2:foo\": { \n        \"_\": \"bar\", \n        \"@\": { \"fizz\": \"buzz\", \"ping\": \"pong\" } \n      } \n    }     \n  }\n}"
  }
});
formatter.step({
  "line": 71,
  "name": "match jsonVar $.ns1:root..ns2:foo.@ \u003d\u003d [{ fizz: \u0027buzz\u0027, ping: \u0027pong\u0027 }]",
  "keyword": "* "
});
formatter.step({
  "line": 72,
  "name": "match jsonVar $..ns2:foo.@ \u003d\u003d [{ fizz: \u0027buzz\u0027, ping: \u0027pong\u0027 }]",
  "keyword": "* "
});
formatter.step({
  "line": 73,
  "name": "match jsonVar $..ns2:foo.@ contains { fizz: \u0027buzz\u0027, ping: \u0027pong\u0027 }",
  "keyword": "* "
});
formatter.step({
  "line": 74,
  "name": "match jsonVar $..ns2:foo.@ contains only { fizz: \u0027buzz\u0027, ping: \u0027pong\u0027 }",
  "keyword": "* "
});
formatter.step({
  "line": 75,
  "name": "match each jsonVar $..ns2:foo.@ contains { ping: \u0027pong\u0027 }",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "xmlVar",
      "offset": 4
    },
    {
      "val": "\u003cns1:root xmlns:ns1\u003d\"http://foo.com\" xmlns:ns2\u003d\"http://bar.com\"\u003e\u003cns2:foo fizz\u003d\"buzz\" ping\u003d\"pong\"\u003ebar\u003c/ns2:foo\u003e\u003c/ns1:root\u003e",
      "offset": 13
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 56584045,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jsonVar",
      "offset": 5
    },
    {
      "val": "xmlVar",
      "offset": 15
    }
  ],
  "location": "StepDefs.castToJson(String,String)"
});
formatter.result({
  "duration": 5948977,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "jsonVar",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 14
    }
  ],
  "location": "StepDefs.matchEqualsDocString(String,String,String,String,String)"
});
formatter.result({
  "duration": 323086,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "jsonVar",
      "offset": 6
    },
    {
      "val": " $.ns1:root..ns2:foo.@",
      "offset": 13
    },
    {
      "val": "\u003d\u003d",
      "offset": 36
    },
    {
      "val": "[{ fizz: \u0027buzz\u0027, ping: \u0027pong\u0027 }]",
      "offset": 39
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 369886,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "jsonVar",
      "offset": 6
    },
    {
      "val": " $..ns2:foo.@",
      "offset": 13
    },
    {
      "val": "\u003d\u003d",
      "offset": 27
    },
    {
      "val": "[{ fizz: \u0027buzz\u0027, ping: \u0027pong\u0027 }]",
      "offset": 30
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 403961,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "jsonVar",
      "offset": 6
    },
    {
      "val": " $..ns2:foo.@",
      "offset": 13
    },
    {},
    {},
    {
      "val": " { fizz: \u0027buzz\u0027, ping: \u0027pong\u0027 }",
      "offset": 35
    }
  ],
  "location": "StepDefs.matchContains(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 355929,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "jsonVar",
      "offset": 6
    },
    {
      "val": " $..ns2:foo.@",
      "offset": 13
    },
    {},
    {
      "val": " only",
      "offset": 35
    },
    {
      "val": " { fizz: \u0027buzz\u0027, ping: \u0027pong\u0027 }",
      "offset": 40
    }
  ],
  "location": "StepDefs.matchContains(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 311181,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "each ",
      "offset": 6
    },
    {
      "val": "jsonVar",
      "offset": 11
    },
    {
      "val": " $..ns2:foo.@",
      "offset": 18
    },
    {},
    {},
    {
      "val": " { ping: \u0027pong\u0027 }",
      "offset": 40
    }
  ],
  "location": "StepDefs.matchContains(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 344434,
  "status": "passed"
});
formatter.scenario({
  "line": 77,
  "name": "java pojo to json",
  "description": "",
  "id": "convert-between-json,-xml-and-string;java-pojo-to-json",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 78,
  "name": "def className \u003d \u0027com.intuit.karate.junit4.demos.SimplePojo\u0027",
  "keyword": "* "
});
formatter.step({
  "line": 79,
  "name": "def Pojo \u003d Java.type(className)",
  "keyword": "* "
});
formatter.step({
  "line": 80,
  "name": "def pojo \u003d new Pojo()",
  "keyword": "* "
});
formatter.step({
  "line": 81,
  "name": "json jsonVar \u003d pojo",
  "keyword": "* "
});
formatter.step({
  "line": 82,
  "name": "match jsonVar \u003d\u003d { foo: null, bar: 0 }",
  "keyword": "* "
});
formatter.step({
  "line": 83,
  "name": "def testJson \u003d { foo: \u0027hello\u0027, bar: 5 }",
  "keyword": "* "
});
formatter.step({
  "line": 84,
  "name": "def testPojo \u003d karate.toBean(testJson, className)",
  "keyword": "* "
});
formatter.step({
  "line": 85,
  "name": "assert testPojo.foo \u003d\u003d \u0027hello\u0027",
  "keyword": "* "
});
formatter.step({
  "line": 86,
  "name": "assert testPojo.bar \u003d\u003d 5",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "className",
      "offset": 4
    },
    {
      "val": "\u0027com.intuit.karate.junit4.demos.SimplePojo\u0027",
      "offset": 16
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 44444289,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pojo",
      "offset": 4
    },
    {
      "val": "Java.type(className)",
      "offset": 11
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 17740604,
  "error_message": "java.lang.RuntimeException: javascript evaluation failed: Java.type(className)\r\n\tat com.intuit.karate.Script.evalInNashorn(Script.java:383)\r\n\tat com.intuit.karate.Script.evalInNashorn(Script.java:358)\r\n\tat com.intuit.karate.Script.eval(Script.java:269)\r\n\tat com.intuit.karate.Script.eval(Script.java:182)\r\n\tat com.intuit.karate.Script.assign(Script.java:606)\r\n\tat com.intuit.karate.Script.assign(Script.java:537)\r\n\tat com.intuit.karate.StepDefs.def(StepDefs.java:268)\r\n\tat ✽.* def Pojo \u003d Java.type(className)(com/intuit/karate/testng/demos/type-conv.feature:79)\r\nCaused by: java.lang.RuntimeException: java.lang.ClassNotFoundException: com.intuit.karate.junit4.demos.SimplePojo\r\n\tat jdk.nashorn.internal.runtime.ScriptRuntime.apply(ScriptRuntime.java:397)\r\n\tat jdk.nashorn.api.scripting.NashornScriptEngine.evalImpl(NashornScriptEngine.java:446)\r\n\tat jdk.nashorn.api.scripting.NashornScriptEngine.evalImpl(NashornScriptEngine.java:403)\r\n\tat jdk.nashorn.api.scripting.NashornScriptEngine.evalImpl(NashornScriptEngine.java:399)\r\n\tat jdk.nashorn.api.scripting.NashornScriptEngine.eval(NashornScriptEngine.java:155)\r\n\tat javax.script.AbstractScriptEngine.eval(AbstractScriptEngine.java:264)\r\n\tat com.intuit.karate.Script.evalInNashorn(Script.java:379)\r\n\tat com.intuit.karate.Script.evalInNashorn(Script.java:358)\r\n\tat com.intuit.karate.Script.eval(Script.java:269)\r\n\tat com.intuit.karate.Script.eval(Script.java:182)\r\n\tat com.intuit.karate.Script.assign(Script.java:606)\r\n\tat com.intuit.karate.Script.assign(Script.java:537)\r\n\tat com.intuit.karate.StepDefs.def(StepDefs.java:268)\r\n\tat sun.reflect.GeneratedMethodAccessor9.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat com.intuit.karate.testng.KarateRunner.feature(KarateRunner.java:59)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:70)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeMulti(TestNGDirectoryTestSuite.java:158)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:98)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:111)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:164)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:110)\r\n\tat org.apache.maven.surefire.booter.SurefireStarter.invokeProvider(SurefireStarter.java:175)\r\n\tat org.apache.maven.surefire.booter.SurefireStarter.runSuitesInProcessWhenForked(SurefireStarter.java:107)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:68)\r\nCaused by: java.lang.ClassNotFoundException: com.intuit.karate.junit4.demos.SimplePojo\r\n\tat java.net.URLClassLoader.findClass(URLClassLoader.java:381)\r\n\tat java.lang.ClassLoader.loadClass(ClassLoader.java:424)\r\n\tat sun.misc.Launcher$AppClassLoader.loadClass(Launcher.java:331)\r\n\tat java.lang.ClassLoader.loadClass(ClassLoader.java:357)\r\n\tat java.lang.Class.forName0(Native Method)\r\n\tat java.lang.Class.forName(Class.java:348)\r\n\tat jdk.nashorn.internal.runtime.Context.findClass(Context.java:1057)\r\n\tat jdk.nashorn.internal.objects.NativeJava.simpleType(NativeJava.java:498)\r\n\tat jdk.nashorn.internal.objects.NativeJava.type(NativeJava.java:322)\r\n\tat jdk.nashorn.internal.objects.NativeJava.type(NativeJava.java:314)\r\n\tat jdk.nashorn.internal.objects.NativeJava.type(NativeJava.java:310)\r\n\tat jdk.nashorn.internal.scripts.Script$416$\\^eval\\_.:program(\u003ceval\u003e:1)\r\n\tat jdk.nashorn.internal.runtime.ScriptFunctionData.invoke(ScriptFunctionData.java:637)\r\n\tat jdk.nashorn.internal.runtime.ScriptFunction.invoke(ScriptFunction.java:494)\r\n\tat jdk.nashorn.internal.runtime.ScriptRuntime.apply(ScriptRuntime.java:393)\r\n\t... 60 more\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "pojo",
      "offset": 4
    },
    {
      "val": "new Pojo()",
      "offset": 11
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "jsonVar",
      "offset": 5
    },
    {
      "val": "pojo",
      "offset": 15
    }
  ],
  "location": "StepDefs.castToJson(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "jsonVar",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 14
    },
    {
      "val": "{ foo: null, bar: 0 }",
      "offset": 17
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "testJson",
      "offset": 4
    },
    {
      "val": "{ foo: \u0027hello\u0027, bar: 5 }",
      "offset": 15
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "testPojo",
      "offset": 4
    },
    {
      "val": "karate.toBean(testJson, className)",
      "offset": 15
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "testPojo.foo \u003d\u003d \u0027hello\u0027",
      "offset": 7
    }
  ],
  "location": "StepDefs.asssertBoolean(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "testPojo.bar \u003d\u003d 5",
      "offset": 7
    }
  ],
  "location": "StepDefs.asssertBoolean(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 88,
  "name": "java pojo to xml",
  "description": "",
  "id": "convert-between-json,-xml-and-string;java-pojo-to-xml",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 89,
  "name": "def Pojo \u003d Java.type(\u0027com.intuit.karate.junit4.demos.SimplePojo\u0027)",
  "keyword": "* "
});
formatter.step({
  "line": 90,
  "name": "def pojo \u003d new Pojo()",
  "keyword": "* "
});
formatter.step({
  "line": 91,
  "name": "xml xmlVar \u003d pojo",
  "keyword": "* "
});
formatter.step({
  "line": 92,
  "name": "match xmlVar \u003d\u003d \u003croot\u003e\u003cfoo\u003e\u003c/foo\u003e\u003cbar\u003e0\u003c/bar\u003e\u003c/root\u003e",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "Pojo",
      "offset": 4
    },
    {
      "val": "Java.type(\u0027com.intuit.karate.junit4.demos.SimplePojo\u0027)",
      "offset": 11
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 45929173,
  "error_message": "java.lang.RuntimeException: javascript evaluation failed: Java.type(\u0027com.intuit.karate.junit4.demos.SimplePojo\u0027)\r\n\tat com.intuit.karate.Script.evalInNashorn(Script.java:383)\r\n\tat com.intuit.karate.Script.evalInNashorn(Script.java:358)\r\n\tat com.intuit.karate.Script.eval(Script.java:269)\r\n\tat com.intuit.karate.Script.eval(Script.java:182)\r\n\tat com.intuit.karate.Script.assign(Script.java:606)\r\n\tat com.intuit.karate.Script.assign(Script.java:537)\r\n\tat com.intuit.karate.StepDefs.def(StepDefs.java:268)\r\n\tat ✽.* def Pojo \u003d Java.type(\u0027com.intuit.karate.junit4.demos.SimplePojo\u0027)(com/intuit/karate/testng/demos/type-conv.feature:89)\r\nCaused by: java.lang.RuntimeException: java.lang.ClassNotFoundException: com.intuit.karate.junit4.demos.SimplePojo\r\n\tat jdk.nashorn.internal.runtime.ScriptRuntime.apply(ScriptRuntime.java:397)\r\n\tat jdk.nashorn.api.scripting.NashornScriptEngine.evalImpl(NashornScriptEngine.java:446)\r\n\tat jdk.nashorn.api.scripting.NashornScriptEngine.evalImpl(NashornScriptEngine.java:403)\r\n\tat jdk.nashorn.api.scripting.NashornScriptEngine.evalImpl(NashornScriptEngine.java:399)\r\n\tat jdk.nashorn.api.scripting.NashornScriptEngine.eval(NashornScriptEngine.java:155)\r\n\tat javax.script.AbstractScriptEngine.eval(AbstractScriptEngine.java:264)\r\n\tat com.intuit.karate.Script.evalInNashorn(Script.java:379)\r\n\tat com.intuit.karate.Script.evalInNashorn(Script.java:358)\r\n\tat com.intuit.karate.Script.eval(Script.java:269)\r\n\tat com.intuit.karate.Script.eval(Script.java:182)\r\n\tat com.intuit.karate.Script.assign(Script.java:606)\r\n\tat com.intuit.karate.Script.assign(Script.java:537)\r\n\tat com.intuit.karate.StepDefs.def(StepDefs.java:268)\r\n\tat sun.reflect.GeneratedMethodAccessor9.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat com.intuit.karate.testng.KarateRunner.feature(KarateRunner.java:59)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:70)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeMulti(TestNGDirectoryTestSuite.java:158)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:98)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:111)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:164)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:110)\r\n\tat org.apache.maven.surefire.booter.SurefireStarter.invokeProvider(SurefireStarter.java:175)\r\n\tat org.apache.maven.surefire.booter.SurefireStarter.runSuitesInProcessWhenForked(SurefireStarter.java:107)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:68)\r\nCaused by: java.lang.ClassNotFoundException: com.intuit.karate.junit4.demos.SimplePojo\r\n\tat java.net.URLClassLoader.findClass(URLClassLoader.java:381)\r\n\tat java.lang.ClassLoader.loadClass(ClassLoader.java:424)\r\n\tat sun.misc.Launcher$AppClassLoader.loadClass(Launcher.java:331)\r\n\tat java.lang.ClassLoader.loadClass(ClassLoader.java:357)\r\n\tat java.lang.Class.forName0(Native Method)\r\n\tat java.lang.Class.forName(Class.java:348)\r\n\tat jdk.nashorn.internal.runtime.Context.findClass(Context.java:1057)\r\n\tat jdk.nashorn.internal.objects.NativeJava.simpleType(NativeJava.java:498)\r\n\tat jdk.nashorn.internal.objects.NativeJava.type(NativeJava.java:322)\r\n\tat jdk.nashorn.internal.objects.NativeJava.type(NativeJava.java:314)\r\n\tat jdk.nashorn.internal.objects.NativeJava.type(NativeJava.java:310)\r\n\tat jdk.nashorn.internal.scripts.Script$423$\\^eval\\_.:program(\u003ceval\u003e:1)\r\n\tat jdk.nashorn.internal.runtime.ScriptFunctionData.invoke(ScriptFunctionData.java:637)\r\n\tat jdk.nashorn.internal.runtime.ScriptFunction.invoke(ScriptFunction.java:494)\r\n\tat jdk.nashorn.internal.runtime.ScriptRuntime.apply(ScriptRuntime.java:393)\r\n\t... 60 more\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "pojo",
      "offset": 4
    },
    {
      "val": "new Pojo()",
      "offset": 11
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "xmlVar",
      "offset": 4
    },
    {
      "val": "pojo",
      "offset": 13
    }
  ],
  "location": "StepDefs.castToXml(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "xmlVar",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 13
    },
    {
      "val": "\u003croot\u003e\u003cfoo\u003e\u003c/foo\u003e\u003cbar\u003e0\u003c/bar\u003e\u003c/root\u003e",
      "offset": 16
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("com/intuit/karate/testng/demos/users.feature");
formatter.feature({
  "line": 1,
  "name": "sample karate script that calls a live www web-service",
  "description": "",
  "id": "sample-karate-script-that-calls-a-live-www-web-service",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "url \u0027https://jsonplaceholder.typicode.com\u0027",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "\u0027https://jsonplaceholder.typicode.com\u0027",
      "offset": 4
    }
  ],
  "location": "StepDefs.url(String)"
});
formatter.result({
  "duration": 59224568,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "get users and then get first by id",
  "description": "",
  "id": "sample-karate-script-that-calls-a-live-www-web-service;get-users-and-then-get-first-by-id",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "path \u0027users\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "method get",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "status 200",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "def first \u003d response[0]",
  "keyword": "* "
});
formatter.step({
  "line": 14,
  "name": "path \u0027users\u0027, first.id",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "method get",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "status 200",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "\u0027users\u0027",
      "offset": 5
    }
  ],
  "location": "StepDefs.path(String\u003e)"
});
formatter.result({
  "duration": 5579501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "get",
      "offset": 7
    }
  ],
  "location": "StepDefs.method(String)"
});
formatter.result({
  "duration": 3240749446,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 7
    }
  ],
  "location": "StepDefs.status(int)"
});
formatter.result({
  "duration": 1508694,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "first",
      "offset": 4
    },
    {
      "val": "response[0]",
      "offset": 12
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 17083347,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u0027users\u0027, first.id",
      "offset": 5
    }
  ],
  "location": "StepDefs.path(String\u003e)"
});
formatter.result({
  "duration": 37371694,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "get",
      "offset": 7
    }
  ],
  "location": "StepDefs.method(String)"
});
formatter.result({
  "duration": 984910182,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 7
    }
  ],
  "location": "StepDefs.status(int)"
});
formatter.result({
  "duration": 118643,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "url \u0027https://jsonplaceholder.typicode.com\u0027",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "\u0027https://jsonplaceholder.typicode.com\u0027",
      "offset": 4
    }
  ],
  "location": "StepDefs.url(String)"
});
formatter.result({
  "duration": 62419715,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "create a user and then get it by id",
  "description": "",
  "id": "sample-karate-script-that-calls-a-live-www-web-service;create-a-user-and-then-get-it-by-id",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "def user \u003d",
  "keyword": "* ",
  "doc_string": {
    "content_type": "",
    "line": 21,
    "value": "{\n    \"name\": \"Test User\",\n    \"username\": \"testuser\",\n    \"email\": \"test@user.com\",\n    \"address\": {\n      \"street\": \"Has No Name\",\n      \"suite\": \"Apt. 123\",\n      \"city\": \"Electri\",\n      \"zipcode\": \"54321-6789\"\n    }\n}"
  }
});
formatter.step({
  "line": 35,
  "name": "url \u0027https://jsonplaceholder.typicode.com/users\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "request user",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "method post",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "status 201",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "def id \u003d response.id",
  "keyword": "* "
});
formatter.step({
  "line": 41,
  "name": "print \u0027created id is: \u0027 + id",
  "keyword": "* "
});
formatter.step({
  "line": 43,
  "name": "path id",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "user",
      "offset": 4
    }
  ],
  "location": "StepDefs.defDocString(String,String)"
});
formatter.result({
  "duration": 302560,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u0027https://jsonplaceholder.typicode.com/users\u0027",
      "offset": 4
    }
  ],
  "location": "StepDefs.url(String)"
});
formatter.result({
  "duration": 7992591,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user",
      "offset": 8
    }
  ],
  "location": "StepDefs.request(String)"
});
formatter.result({
  "duration": 9724202,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "post",
      "offset": 7
    }
  ],
  "location": "StepDefs.method(String)"
});
formatter.result({
  "duration": 1466405379,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 7
    }
  ],
  "location": "StepDefs.status(int)"
});
formatter.result({
  "duration": 150664,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "id",
      "offset": 4
    },
    {
      "val": "response.id",
      "offset": 9
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 415045,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u0027created id is: \u0027 + id",
      "offset": 6
    }
  ],
  "location": "StepDefs.print(String)"
});
formatter.result({
  "duration": 8897396,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "id",
      "offset": 5
    }
  ],
  "location": "StepDefs.path(String\u003e)"
});
formatter.result({
  "duration": 10592061,
  "status": "passed"
});
formatter.uri("com/intuit/karate/testng/demos/xml-and-xpath.feature");
formatter.feature({
  "line": 1,
  "name": "xml and xpath demos",
  "description": "",
  "id": "xml-and-xpath-demos",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "get for complex things such as xpath functions",
  "description": "",
  "id": "xml-and-xpath-demos;get-for-complex-things-such-as-xpath-functions",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "def foo \u003d",
  "keyword": "* ",
  "doc_string": {
    "content_type": "",
    "line": 6,
    "value": "\u003crecords\u003e\n  \u003crecord index\u003d\"1\"\u003ea\u003c/record\u003e\n  \u003crecord index\u003d\"2\"\u003eb\u003c/record\u003e\n  \u003crecord index\u003d\"3\" foo\u003d\"bar\"\u003ec\u003c/record\u003e\n\u003c/records\u003e"
  }
});
formatter.step({
  "line": 13,
  "name": "assert foo.records.record.length \u003d\u003d 3",
  "keyword": "* "
});
formatter.step({
  "line": 15,
  "name": "def count \u003d get foo count(/records//record)",
  "keyword": "* "
});
formatter.step({
  "line": 16,
  "name": "assert count \u003d\u003d 3",
  "keyword": "* "
});
formatter.step({
  "line": 18,
  "name": "def second \u003d get foo //record[@index\u003d2]",
  "keyword": "* "
});
formatter.step({
  "line": 19,
  "name": "assert second \u003d\u003d \u0027b\u0027",
  "keyword": "* "
});
formatter.step({
  "line": 21,
  "name": "match foo //record[@foo\u003d\u0027bar\u0027] \u003d\u003d \u0027c\u0027",
  "keyword": "* "
});
formatter.step({
  "line": 23,
  "name": "match foo \u003d\u003d \u003crecords\u003e\u003crecord index\u003d\"1\"\u003ea\u003c/record\u003e\u003crecord index\u003d\"#? _ \u0026gt; 1\"\u003eb\u003c/record\u003e\u003crecord index\u003d\"3\" foo\u003d\"bar\"\u003e#string\u003c/record\u003e\u003c/records\u003e",
  "keyword": "* "
});
formatter.step({
  "line": 25,
  "name": "def xml \u003d \u003c?xml version\u003d\"1.0\" encoding\u003d\"UTF-8\"?\u003e \u003cresponse\u003e \u003cresult\u003esucceed\u003c/result\u003e \u003crecords\u003e \u003crecord\u003e \u003cbrowser_port\u003e8008\u003c/browser_port\u003e \u003ccurrent_date_time\u003e2017-04-03 20:29:58 CDT\u003c/current_date_time\u003e \u003cdate_time_server_started\u003e2017-03-21 12:23:55 CDT\u003c/date_time_server_started\u003e \u003cos_version\u003eRed Hat Enterprise Linux 6 2.6.32-573.12.1.el6.x86_64, 64 Bit, x86_64\u003c/os_version\u003e \u003cproduct_version\u003eR04M001170316\u003c/product_version\u003e \u003cproduct_database_version\u003e20170131131718\u003c/product_database_version\u003e \u003creplication_heartbeat_timestamp\u003e2017-04-03 20:25:00 CDT\u003c/replication_heartbeat_timestamp\u003e \u003c/record\u003e \u003c/records\u003e \u003c/response\u003e",
  "keyword": "* "
});
formatter.step({
  "line": 26,
  "name": "def count \u003d get xml count(/response/records//record)",
  "keyword": "* "
});
formatter.step({
  "line": 27,
  "name": "assert count \u003d\u003d 1",
  "keyword": "* "
});
formatter.step({
  "line": 28,
  "name": "match xml/response/result \u003d\u003d \u0027succeed\u0027",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "foo",
      "offset": 4
    }
  ],
  "location": "StepDefs.defDocString(String,String)"
});
formatter.result({
  "duration": 120049378,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "foo.records.record.length \u003d\u003d 3",
      "offset": 7
    }
  ],
  "location": "StepDefs.asssertBoolean(String)"
});
formatter.result({
  "duration": 16098077,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "count",
      "offset": 4
    },
    {
      "val": "get foo count(/records//record)",
      "offset": 12
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 15277019,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "count \u003d\u003d 3",
      "offset": 7
    }
  ],
  "location": "StepDefs.asssertBoolean(String)"
});
formatter.result({
  "duration": 7682231,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "second",
      "offset": 4
    },
    {
      "val": "get foo //record[@index\u003d2]",
      "offset": 13
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 7729853,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "second \u003d\u003d \u0027b\u0027",
      "offset": 7
    }
  ],
  "location": "StepDefs.asssertBoolean(String)"
});
formatter.result({
  "duration": 6619782,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "foo",
      "offset": 6
    },
    {
      "val": " //record[@foo\u003d\u0027bar\u0027]",
      "offset": 9
    },
    {
      "val": "\u003d\u003d",
      "offset": 31
    },
    {
      "val": "\u0027c\u0027",
      "offset": 34
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 8770543,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "foo",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 10
    },
    {
      "val": "\u003crecords\u003e\u003crecord index\u003d\"1\"\u003ea\u003c/record\u003e\u003crecord index\u003d\"#? _ \u0026gt; 1\"\u003eb\u003c/record\u003e\u003crecord index\u003d\"3\" foo\u003d\"bar\"\u003e#string\u003c/record\u003e\u003c/records\u003e",
      "offset": 13
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 11864701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xml",
      "offset": 4
    },
    {
      "val": "\u003c?xml version\u003d\"1.0\" encoding\u003d\"UTF-8\"?\u003e \u003cresponse\u003e \u003cresult\u003esucceed\u003c/result\u003e \u003crecords\u003e \u003crecord\u003e \u003cbrowser_port\u003e8008\u003c/browser_port\u003e \u003ccurrent_date_time\u003e2017-04-03 20:29:58 CDT\u003c/current_date_time\u003e \u003cdate_time_server_started\u003e2017-03-21 12:23:55 CDT\u003c/date_time_server_started\u003e \u003cos_version\u003eRed Hat Enterprise Linux 6 2.6.32-573.12.1.el6.x86_64, 64 Bit, x86_64\u003c/os_version\u003e \u003cproduct_version\u003eR04M001170316\u003c/product_version\u003e \u003cproduct_database_version\u003e20170131131718\u003c/product_database_version\u003e \u003creplication_heartbeat_timestamp\u003e2017-04-03 20:25:00 CDT\u003c/replication_heartbeat_timestamp\u003e \u003c/record\u003e \u003c/records\u003e \u003c/response\u003e",
      "offset": 10
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 3532603,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "count",
      "offset": 4
    },
    {
      "val": "get xml count(/response/records//record)",
      "offset": 12
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 5134898,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "count \u003d\u003d 1",
      "offset": 7
    }
  ],
  "location": "StepDefs.asssertBoolean(String)"
});
formatter.result({
  "duration": 8949534,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "xml/response/result",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 26
    },
    {
      "val": "\u0027succeed\u0027",
      "offset": 29
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 9277547,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "when xpath exressions return xml chunks (or node lists)",
  "description": "",
  "id": "xml-and-xpath-demos;when-xpath-exressions-return-xml-chunks-(or-node-lists)",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "def response \u003d",
  "keyword": "* ",
  "doc_string": {
    "content_type": "",
    "line": 33,
    "value": "\u003cteachers\u003e\n\t\u003cteacher department\u003d\"science\" id\u003d\"309\"\u003e\n\t\t\u003csubject\u003emath\u003c/subject\u003e\n\t\t\u003csubject\u003ephysics\u003c/subject\u003e\n\t\u003c/teacher\u003e\n\t\u003cteacher department\u003d\"arts\" id\u003d\"310\"\u003e\n\t\t\u003csubject\u003epolitical education\u003c/subject\u003e\n\t\t\u003csubject\u003eenglish\u003c/subject\u003e\n\t\u003c/teacher\u003e\n\u003c/teachers\u003e"
  }
});
formatter.step({
  "line": 45,
  "name": "def expected \u003d \u003cteacher department\u003d\"science\" id\u003d\"309\"\u003e\u003csubject\u003emath\u003c/subject\u003e\u003csubject\u003ephysics\u003c/subject\u003e\u003c/teacher\u003e",
  "keyword": "* "
});
formatter.step({
  "line": 46,
  "name": "def teacher \u003d //teacher[@department\u003d\u0027science\u0027]",
  "keyword": "* "
});
formatter.step({
  "line": 47,
  "name": "match teacher \u003d\u003d expected",
  "keyword": "* "
});
formatter.step({
  "line": 48,
  "name": "def teacher \u003d get response //teacher[@department\u003d\u0027science\u0027]",
  "keyword": "* "
});
formatter.step({
  "line": 49,
  "name": "match teacher \u003d\u003d expected",
  "keyword": "* "
});
formatter.step({
  "line": 50,
  "name": "match //teacher[@department\u003d\u0027science\u0027] \u003d\u003d expected",
  "keyword": "* "
});
formatter.step({
  "line": 52,
  "name": "def expected \u003d [\u0027math\u0027, \u0027physics\u0027]",
  "keyword": "* "
});
formatter.step({
  "line": 53,
  "name": "def subjects \u003d //teacher[@department\u003d\u0027science\u0027]/subject",
  "keyword": "* "
});
formatter.step({
  "line": 54,
  "name": "match subjects \u003d\u003d expected",
  "keyword": "* "
});
formatter.step({
  "line": 55,
  "name": "def subjects \u003d get response //teacher[@department\u003d\u0027science\u0027]/subject",
  "keyword": "* "
});
formatter.step({
  "line": 56,
  "name": "match subjects \u003d\u003d expected",
  "keyword": "* "
});
formatter.step({
  "line": 57,
  "name": "match //teacher[@department\u003d\u0027science\u0027]/subject \u003d\u003d expected",
  "keyword": "* "
});
formatter.step({
  "line": 58,
  "name": "match //teacher[@department\u003d\u0027science\u0027]/subject \u003d\u003d [\u0027math\u0027, \u0027physics\u0027]",
  "keyword": "* "
});
formatter.step({
  "line": 59,
  "name": "match //teacher[@department\u003d\u0027science\u0027]/subject contains [\u0027physics\u0027, \u0027math\u0027]",
  "keyword": "* "
});
formatter.step({
  "line": 61,
  "name": "def teachers \u003d response",
  "keyword": "* "
});
formatter.step({
  "line": 62,
  "name": "def subjects \u003d get teachers //teacher[@department\u003d\u0027science\u0027]/subject",
  "keyword": "* "
});
formatter.step({
  "line": 63,
  "name": "match subjects contains [\u0027physics\u0027, \u0027math\u0027]",
  "keyword": "* "
});
formatter.step({
  "line": 64,
  "name": "match teachers //teacher[@department\u003d\u0027science\u0027]/subject \u003d\u003d [\u0027math\u0027, \u0027physics\u0027]",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "response",
      "offset": 4
    }
  ],
  "location": "StepDefs.defDocString(String,String)"
});
formatter.result({
  "duration": 77479154,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "expected",
      "offset": 4
    },
    {
      "val": "\u003cteacher department\u003d\"science\" id\u003d\"309\"\u003e\u003csubject\u003emath\u003c/subject\u003e\u003csubject\u003ephysics\u003c/subject\u003e\u003c/teacher\u003e",
      "offset": 15
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 3681625,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "teacher",
      "offset": 4
    },
    {
      "val": "//teacher[@department\u003d\u0027science\u0027]",
      "offset": 14
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 7242144,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "teacher",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 14
    },
    {
      "val": "expected",
      "offset": 17
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 11728816,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "teacher",
      "offset": 4
    },
    {
      "val": "get response //teacher[@department\u003d\u0027science\u0027]",
      "offset": 14
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 15299598,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "teacher",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 14
    },
    {
      "val": "expected",
      "offset": 17
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 17220874,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "//teacher[@department\u003d\u0027science\u0027]",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 39
    },
    {
      "val": "expected",
      "offset": 42
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 14249054,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "expected",
      "offset": 4
    },
    {
      "val": "[\u0027math\u0027, \u0027physics\u0027]",
      "offset": 15
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 424487,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "subjects",
      "offset": 4
    },
    {
      "val": "//teacher[@department\u003d\u0027science\u0027]/subject",
      "offset": 15
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 4072859,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "subjects",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 15
    },
    {
      "val": "expected",
      "offset": 18
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 11821185,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "subjects",
      "offset": 4
    },
    {
      "val": "get response //teacher[@department\u003d\u0027science\u0027]/subject",
      "offset": 15
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 3315023,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "subjects",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 15
    },
    {
      "val": "expected",
      "offset": 18
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 9519759,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "//teacher[@department\u003d\u0027science\u0027]/subject",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 47
    },
    {
      "val": "expected",
      "offset": 50
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 12575738,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "//teacher[@department\u003d\u0027science\u0027]/subject",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 47
    },
    {
      "val": "[\u0027math\u0027, \u0027physics\u0027]",
      "offset": 50
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 3634825,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "//teacher[@department\u003d\u0027science\u0027]/subject",
      "offset": 6
    },
    {},
    {},
    {},
    {
      "val": " [\u0027physics\u0027, \u0027math\u0027]",
      "offset": 55
    }
  ],
  "location": "StepDefs.matchContains(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 2917630,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "teachers",
      "offset": 4
    },
    {
      "val": "response",
      "offset": 15
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 7990128,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "subjects",
      "offset": 4
    },
    {
      "val": "get teachers //teacher[@department\u003d\u0027science\u0027]/subject",
      "offset": 15
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 4007584,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "subjects",
      "offset": 6
    },
    {},
    {},
    {},
    {
      "val": " [\u0027physics\u0027, \u0027math\u0027]",
      "offset": 23
    }
  ],
  "location": "StepDefs.matchContains(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1188071,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "teachers",
      "offset": 6
    },
    {
      "val": " //teacher[@department\u003d\u0027science\u0027]/subject",
      "offset": 14
    },
    {
      "val": "\u003d\u003d",
      "offset": 56
    },
    {
      "val": "[\u0027math\u0027, \u0027physics\u0027]",
      "offset": 59
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 4104470,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 66,
  "name": "conditionally build xml from scenario-outline and examples",
  "description": "",
  "id": "xml-and-xpath-demos;conditionally-build-xml-from-scenario-outline-and-examples",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "comments": [
    {
      "line": 68,
      "value": "# this is an extreme example, you normally will never need to do this"
    }
  ],
  "line": 70,
  "name": "def base \u003d \u003cquery\u003e\u003cname\u003e\u003c/name\u003e\u003c/query\u003e",
  "keyword": "* "
});
formatter.step({
  "line": 71,
  "name": "def firstName \u003d \u0027\u003c_firstName\u003e\u0027",
  "keyword": "* "
});
formatter.step({
  "line": 72,
  "name": "def lastName \u003d \u0027\u003c_lastName\u003e\u0027",
  "keyword": "* "
});
formatter.step({
  "line": 73,
  "name": "def age \u003d \u0027\u003c_age\u003e\u0027",
  "keyword": "* "
});
formatter.step({
  "line": 75,
  "name": "def builder \u003d",
  "keyword": "* ",
  "doc_string": {
    "content_type": "",
    "line": 76,
    "value": "function() {\n  if (firstName) karate.set(\u0027base\u0027, \u0027/query/name\u0027, \u0027\u003cfirstName\u003e#(firstName)\u003c/firstName\u003e\u0027);\n  if (lastName) karate.set(\u0027base\u0027, \u0027/query/name\u0027, \u0027\u003clastName\u003e#(lastName)\u003c/lastName\u003e\u0027);\n  if (age) karate.set(\u0027base\u0027, \u0027/query\u0027, \u0027\u003cage\u003e#(age)\u003c/age\u003e\u0027);  \n}"
  }
});
formatter.step({
  "line": 84,
  "name": "call builder",
  "keyword": "* "
});
formatter.step({
  "line": 85,
  "name": "print base",
  "keyword": "* "
});
formatter.examples({
  "line": 87,
  "name": "",
  "description": "",
  "id": "xml-and-xpath-demos;conditionally-build-xml-from-scenario-outline-and-examples;",
  "rows": [
    {
      "cells": [
        "_firstName",
        "_lastName",
        "_age"
      ],
      "line": 88,
      "id": "xml-and-xpath-demos;conditionally-build-xml-from-scenario-outline-and-examples;;1"
    },
    {
      "cells": [
        "John",
        "Smith",
        "20"
      ],
      "line": 89,
      "id": "xml-and-xpath-demos;conditionally-build-xml-from-scenario-outline-and-examples;;2"
    },
    {
      "cells": [
        "Jane",
        "Doe",
        ""
      ],
      "line": 90,
      "id": "xml-and-xpath-demos;conditionally-build-xml-from-scenario-outline-and-examples;;3"
    },
    {
      "cells": [
        "",
        "Waldo",
        ""
      ],
      "line": 91,
      "id": "xml-and-xpath-demos;conditionally-build-xml-from-scenario-outline-and-examples;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 89,
  "name": "conditionally build xml from scenario-outline and examples",
  "description": "",
  "id": "xml-and-xpath-demos;conditionally-build-xml-from-scenario-outline-and-examples;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "comments": [
    {
      "line": 68,
      "value": "# this is an extreme example, you normally will never need to do this"
    }
  ],
  "line": 70,
  "name": "def base \u003d \u003cquery\u003e\u003cname\u003e\u003c/name\u003e\u003c/query\u003e",
  "keyword": "* "
});
formatter.step({
  "line": 71,
  "name": "def firstName \u003d \u0027John\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "* "
});
formatter.step({
  "line": 72,
  "name": "def lastName \u003d \u0027Smith\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "* "
});
formatter.step({
  "line": 73,
  "name": "def age \u003d \u002720\u0027",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.step({
  "line": 75,
  "name": "def builder \u003d",
  "keyword": "* ",
  "doc_string": {
    "content_type": "",
    "line": 76,
    "value": "function() {\n  if (firstName) karate.set(\u0027base\u0027, \u0027/query/name\u0027, \u0027\u003cfirstName\u003e#(firstName)\u003c/firstName\u003e\u0027);\n  if (lastName) karate.set(\u0027base\u0027, \u0027/query/name\u0027, \u0027\u003clastName\u003e#(lastName)\u003c/lastName\u003e\u0027);\n  if (age) karate.set(\u0027base\u0027, \u0027/query\u0027, \u0027\u003cage\u003e#(age)\u003c/age\u003e\u0027);  \n}"
  }
});
formatter.step({
  "line": 84,
  "name": "call builder",
  "keyword": "* "
});
formatter.step({
  "line": 85,
  "name": "print base",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "base",
      "offset": 4
    },
    {
      "val": "\u003cquery\u003e\u003cname\u003e\u003c/name\u003e\u003c/query\u003e",
      "offset": 11
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 54787159,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstName",
      "offset": 4
    },
    {
      "val": "\u0027John\u0027",
      "offset": 16
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 8656827,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lastName",
      "offset": 4
    },
    {
      "val": "\u0027Smith\u0027",
      "offset": 15
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 6881699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "age",
      "offset": 4
    },
    {
      "val": "\u002720\u0027",
      "offset": 10
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 10521039,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "builder",
      "offset": 4
    }
  ],
  "location": "StepDefs.defDocString(String,String)"
});
formatter.result({
  "duration": 9829298,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "builder",
      "offset": 5
    },
    {}
  ],
  "location": "StepDefs.callAndUpdateConfigAndVars(String,String)"
});
formatter.result({
  "duration": 68118270,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "base",
      "offset": 6
    }
  ],
  "location": "StepDefs.print(String)"
});
formatter.result({
  "duration": 9463927,
  "status": "passed"
});
formatter.scenario({
  "line": 90,
  "name": "conditionally build xml from scenario-outline and examples",
  "description": "",
  "id": "xml-and-xpath-demos;conditionally-build-xml-from-scenario-outline-and-examples;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "comments": [
    {
      "line": 68,
      "value": "# this is an extreme example, you normally will never need to do this"
    }
  ],
  "line": 70,
  "name": "def base \u003d \u003cquery\u003e\u003cname\u003e\u003c/name\u003e\u003c/query\u003e",
  "keyword": "* "
});
formatter.step({
  "line": 71,
  "name": "def firstName \u003d \u0027Jane\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "* "
});
formatter.step({
  "line": 72,
  "name": "def lastName \u003d \u0027Doe\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "* "
});
formatter.step({
  "line": 73,
  "name": "def age \u003d \u0027\u0027",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.step({
  "line": 75,
  "name": "def builder \u003d",
  "keyword": "* ",
  "doc_string": {
    "content_type": "",
    "line": 76,
    "value": "function() {\n  if (firstName) karate.set(\u0027base\u0027, \u0027/query/name\u0027, \u0027\u003cfirstName\u003e#(firstName)\u003c/firstName\u003e\u0027);\n  if (lastName) karate.set(\u0027base\u0027, \u0027/query/name\u0027, \u0027\u003clastName\u003e#(lastName)\u003c/lastName\u003e\u0027);\n  if (age) karate.set(\u0027base\u0027, \u0027/query\u0027, \u0027\u003cage\u003e#(age)\u003c/age\u003e\u0027);  \n}"
  }
});
formatter.step({
  "line": 84,
  "name": "call builder",
  "keyword": "* "
});
formatter.step({
  "line": 85,
  "name": "print base",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "base",
      "offset": 4
    },
    {
      "val": "\u003cquery\u003e\u003cname\u003e\u003c/name\u003e\u003c/query\u003e",
      "offset": 11
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 42473749,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstName",
      "offset": 4
    },
    {
      "val": "\u0027Jane\u0027",
      "offset": 16
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 6519612,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lastName",
      "offset": 4
    },
    {
      "val": "\u0027Doe\u0027",
      "offset": 15
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 8554194,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "age",
      "offset": 4
    },
    {
      "val": "\u0027\u0027",
      "offset": 10
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 7955644,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "builder",
      "offset": 4
    }
  ],
  "location": "StepDefs.defDocString(String,String)"
});
formatter.result({
  "duration": 7804979,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "builder",
      "offset": 5
    },
    {}
  ],
  "location": "StepDefs.callAndUpdateConfigAndVars(String,String)"
});
formatter.result({
  "duration": 36544889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "base",
      "offset": 6
    }
  ],
  "location": "StepDefs.print(String)"
});
formatter.result({
  "duration": 7544704,
  "status": "passed"
});
formatter.scenario({
  "line": 91,
  "name": "conditionally build xml from scenario-outline and examples",
  "description": "",
  "id": "xml-and-xpath-demos;conditionally-build-xml-from-scenario-outline-and-examples;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "comments": [
    {
      "line": 68,
      "value": "# this is an extreme example, you normally will never need to do this"
    }
  ],
  "line": 70,
  "name": "def base \u003d \u003cquery\u003e\u003cname\u003e\u003c/name\u003e\u003c/query\u003e",
  "keyword": "* "
});
formatter.step({
  "line": 71,
  "name": "def firstName \u003d \u0027\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "* "
});
formatter.step({
  "line": 72,
  "name": "def lastName \u003d \u0027Waldo\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "* "
});
formatter.step({
  "line": 73,
  "name": "def age \u003d \u0027\u0027",
  "matchedColumns": [
    2
  ],
  "keyword": "* "
});
formatter.step({
  "line": 75,
  "name": "def builder \u003d",
  "keyword": "* ",
  "doc_string": {
    "content_type": "",
    "line": 76,
    "value": "function() {\n  if (firstName) karate.set(\u0027base\u0027, \u0027/query/name\u0027, \u0027\u003cfirstName\u003e#(firstName)\u003c/firstName\u003e\u0027);\n  if (lastName) karate.set(\u0027base\u0027, \u0027/query/name\u0027, \u0027\u003clastName\u003e#(lastName)\u003c/lastName\u003e\u0027);\n  if (age) karate.set(\u0027base\u0027, \u0027/query\u0027, \u0027\u003cage\u003e#(age)\u003c/age\u003e\u0027);  \n}"
  }
});
formatter.step({
  "line": 84,
  "name": "call builder",
  "keyword": "* "
});
formatter.step({
  "line": 85,
  "name": "print base",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "base",
      "offset": 4
    },
    {
      "val": "\u003cquery\u003e\u003cname\u003e\u003c/name\u003e\u003c/query\u003e",
      "offset": 11
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 40096786,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "firstName",
      "offset": 4
    },
    {
      "val": "\u0027\u0027",
      "offset": 16
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 8379720,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lastName",
      "offset": 4
    },
    {
      "val": "\u0027Waldo\u0027",
      "offset": 15
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 21572893,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "age",
      "offset": 4
    },
    {
      "val": "\u0027\u0027",
      "offset": 10
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 6191600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "builder",
      "offset": 4
    }
  ],
  "location": "StepDefs.defDocString(String,String)"
});
formatter.result({
  "duration": 9759098,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "builder",
      "offset": 5
    },
    {}
  ],
  "location": "StepDefs.callAndUpdateConfigAndVars(String,String)"
});
formatter.result({
  "duration": 29916486,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "base",
      "offset": 6
    }
  ],
  "location": "StepDefs.print(String)"
});
formatter.result({
  "duration": 12761707,
  "status": "passed"
});
formatter.scenario({
  "line": 94,
  "name": "test removing elements from xml from js",
  "description": "",
  "id": "xml-and-xpath-demos;test-removing-elements-from-xml-from-js",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 96,
  "name": "def base \u003d \u003cquery\u003e\u003cname\u003efoo\u003c/name\u003e\u003c/query\u003e",
  "keyword": "* "
});
formatter.step({
  "line": 97,
  "name": "def fun \u003d function(){ karate.remove(\u0027base\u0027, \u0027/query/name\u0027) }",
  "keyword": "* "
});
formatter.step({
  "line": 98,
  "name": "call fun",
  "keyword": "* "
});
formatter.step({
  "line": 99,
  "name": "match base \u003d\u003d \u003cquery/\u003e",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "base",
      "offset": 4
    },
    {
      "val": "\u003cquery\u003e\u003cname\u003efoo\u003c/name\u003e\u003c/query\u003e",
      "offset": 11
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 51557116,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fun",
      "offset": 4
    },
    {
      "val": "function(){ karate.remove(\u0027base\u0027, \u0027/query/name\u0027) }",
      "offset": 10
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 7483535,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fun",
      "offset": 5
    },
    {}
  ],
  "location": "StepDefs.callAndUpdateConfigAndVars(String,String)"
});
formatter.result({
  "duration": 16725776,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "base",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 11
    },
    {
      "val": "\u003cquery/\u003e",
      "offset": 14
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 5117245,
  "status": "passed"
});
formatter.uri("com/intuit/karate/testng/files/working-dir.feature");
formatter.feature({
  "line": 1,
  "name": "test working directory edge cases",
  "description": "",
  "id": "test-working-directory-edge-cases",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "a called script still knows what the working directory is",
  "description": "",
  "id": "test-working-directory-edge-cases;a-called-script-still-knows-what-the-working-directory-is",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "def text \u003d call read(\u0027classpath:file-utils.js\u0027) \u0027relative.txt\u0027",
  "keyword": "* "
});
formatter.step({
  "line": 6,
  "name": "match text \u003d\u003d \u0027hello world\u0027",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "text",
      "offset": 4
    },
    {
      "val": "call read(\u0027classpath:file-utils.js\u0027) \u0027relative.txt\u0027",
      "offset": 11
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 65530295,
  "error_message": "java.lang.RuntimeException: javascript evaluation failed: read(\u0027classpath:file-utils.js\u0027)\r\n\tat com.intuit.karate.Script.evalInNashorn(Script.java:383)\r\n\tat com.intuit.karate.Script.evalInNashorn(Script.java:358)\r\n\tat com.intuit.karate.Script.eval(Script.java:269)\r\n\tat com.intuit.karate.Script.eval(Script.java:182)\r\n\tat com.intuit.karate.Script.call(Script.java:1254)\r\n\tat com.intuit.karate.Script.eval(Script.java:223)\r\n\tat com.intuit.karate.Script.eval(Script.java:182)\r\n\tat com.intuit.karate.Script.assign(Script.java:606)\r\n\tat com.intuit.karate.Script.assign(Script.java:537)\r\n\tat com.intuit.karate.StepDefs.def(StepDefs.java:268)\r\n\tat ✽.* def text \u003d call read(\u0027classpath:file-utils.js\u0027) \u0027relative.txt\u0027(com/intuit/karate/testng/files/working-dir.feature:5)\r\nCaused by: com.intuit.karate.exception.KarateFileNotFoundException: file not found: file-utils.js, classpath: true\r\n\tat com.intuit.karate.FileUtils.readFileAsString(FileUtils.java:89)\r\n\tat com.intuit.karate.FileUtils.readFile(FileUtils.java:65)\r\n\tat jdk.nashorn.internal.scripts.Script$Recompilation$531$15A$\\^eval\\_.L:1(\u003ceval\u003e:3)\r\n\tat jdk.nashorn.internal.runtime.ScriptFunctionData.invoke(ScriptFunctionData.java:639)\r\n\tat jdk.nashorn.internal.runtime.ScriptFunction.invoke(ScriptFunction.java:494)\r\n\tat jdk.nashorn.internal.runtime.ScriptRuntime.apply(ScriptRuntime.java:393)\r\n\tat jdk.nashorn.api.scripting.ScriptObjectMirror.call(ScriptObjectMirror.java:117)\r\n\tat jdk.nashorn.internal.scripts.Script$536$\\^eval\\_.:program(\u003ceval\u003e:1)\r\n\tat jdk.nashorn.internal.runtime.ScriptFunctionData.invoke(ScriptFunctionData.java:637)\r\n\tat jdk.nashorn.internal.runtime.ScriptFunction.invoke(ScriptFunction.java:494)\r\n\tat jdk.nashorn.internal.runtime.ScriptRuntime.apply(ScriptRuntime.java:393)\r\n\tat jdk.nashorn.api.scripting.NashornScriptEngine.evalImpl(NashornScriptEngine.java:446)\r\n\tat jdk.nashorn.api.scripting.NashornScriptEngine.evalImpl(NashornScriptEngine.java:403)\r\n\tat jdk.nashorn.api.scripting.NashornScriptEngine.evalImpl(NashornScriptEngine.java:399)\r\n\tat jdk.nashorn.api.scripting.NashornScriptEngine.eval(NashornScriptEngine.java:155)\r\n\tat javax.script.AbstractScriptEngine.eval(AbstractScriptEngine.java:264)\r\n\tat com.intuit.karate.Script.evalInNashorn(Script.java:379)\r\n\tat com.intuit.karate.Script.evalInNashorn(Script.java:358)\r\n\tat com.intuit.karate.Script.eval(Script.java:269)\r\n\tat com.intuit.karate.Script.eval(Script.java:182)\r\n\tat com.intuit.karate.Script.call(Script.java:1254)\r\n\tat com.intuit.karate.Script.eval(Script.java:223)\r\n\tat com.intuit.karate.Script.eval(Script.java:182)\r\n\tat com.intuit.karate.Script.assign(Script.java:606)\r\n\tat com.intuit.karate.Script.assign(Script.java:537)\r\n\tat com.intuit.karate.StepDefs.def(StepDefs.java:268)\r\n\tat sun.reflect.GeneratedMethodAccessor9.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat com.intuit.karate.testng.KarateRunner.feature(KarateRunner.java:59)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:70)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.executeMulti(TestNGDirectoryTestSuite.java:158)\r\n\tat org.apache.maven.surefire.testng.TestNGDirectoryTestSuite.execute(TestNGDirectoryTestSuite.java:98)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:111)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:164)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:110)\r\n\tat org.apache.maven.surefire.booter.SurefireStarter.invokeProvider(SurefireStarter.java:175)\r\n\tat org.apache.maven.surefire.booter.SurefireStarter.runSuitesInProcessWhenForked(SurefireStarter.java:107)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:68)\r\n",
  "status": "failed"
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
      "val": "\u0027hello world\u0027",
      "offset": 14
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("com/intuit/karate/testng/http/dummy-http-client.feature");
formatter.feature({
  "line": 1,
  "name": "swapping an http client on the fly",
  "description": "",
  "id": "swapping-an-http-client-on-the-fly",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "configure http client class",
  "description": "",
  "id": "swapping-an-http-client-on-the-fly;configure-http-client-class",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "configure httpClientClass \u003d \u0027com.intuit.karate.junit4.http.DummyHttpClient\u0027",
  "keyword": "* "
});
formatter.step({
  "line": 5,
  "name": "configure userDefined \u003d { name: \u0027Smith\u0027 }",
  "keyword": "* "
});
formatter.step({
  "line": 6,
  "name": "url \u0027http://foo.bar\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "method get",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "match response \u003d\u003d \u0027hello Smith\u0027",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "httpClientClass",
      "offset": 10
    },
    {
      "val": "\u0027com.intuit.karate.junit4.http.DummyHttpClient\u0027",
      "offset": 28
    }
  ],
  "location": "StepDefs.configure(String,String)"
});
formatter.result({
  "duration": 89063874,
  "error_message": "java.lang.RuntimeException: failed to construct class by name: java.lang.ClassNotFoundException: com.intuit.karate.junit4.http.DummyHttpClient, aborting\r\n\tat com.intuit.karate.http.HttpClient.construct(HttpClient.java:261)\r\n\tat com.intuit.karate.ScriptContext.configure(ScriptContext.java:172)\r\n\tat com.intuit.karate.ScriptContext.configure(ScriptContext.java:144)\r\n\tat com.intuit.karate.StepDefs.configure(StepDefs.java:102)\r\n\tat ✽.* configure httpClientClass \u003d \u0027com.intuit.karate.junit4.http.DummyHttpClient\u0027(com/intuit/karate/testng/http/dummy-http-client.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "userDefined",
      "offset": 10
    },
    {
      "val": "{ name: \u0027Smith\u0027 }",
      "offset": 24
    }
  ],
  "location": "StepDefs.configure(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "\u0027http://foo.bar\u0027",
      "offset": 4
    }
  ],
  "location": "StepDefs.url(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "get",
      "offset": 7
    }
  ],
  "location": "StepDefs.method(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "response",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 15
    },
    {
      "val": "\u0027hello Smith\u0027",
      "offset": 18
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
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
  "duration": 138488703,
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
  "duration": 9027945,
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
  "duration": 28247685,
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
  "duration": 385898,
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
  "duration": 12517852,
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
  "duration": 9283295,
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
  "duration": 15098849,
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
  "duration": 8281193,
  "status": "passed"
});
formatter.uri("com/intuit/karate/testng/xml/xml.feature");
formatter.feature({
  "line": 1,
  "name": "xml samples and tests",
  "description": "",
  "id": "xml-samples-and-tests",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "placeholders using xml embedded expressions",
  "description": "",
  "id": "xml-samples-and-tests;placeholders-using-xml-embedded-expressions",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "def search \u003d { number: \u0027123456\u0027, wireless: true, voip: false, tollFree: false }",
  "keyword": "* "
});
formatter.step({
  "line": 5,
  "name": "def req \u003d read(\u0027soap1.xml\u0027)",
  "keyword": "* "
});
formatter.step({
  "line": 6,
  "name": "def phone \u003d req/Envelope/Body/getAccountByPhoneNumber",
  "keyword": "* "
});
formatter.step({
  "line": 7,
  "name": "match phone /getAccountByPhoneNumber/phoneNumber \u003d\u003d \u0027123456\u0027",
  "keyword": "* "
});
formatter.step({
  "line": 8,
  "name": "match phone \u003d\u003d",
  "keyword": "* ",
  "doc_string": {
    "content_type": "",
    "line": 9,
    "value": "\u003cacc:getAccountByPhoneNumber\u003e\n    \u003cacc:phoneNumber\u003e123456\u003c/acc:phoneNumber\u003e\n    \u003cacc:phoneNumberSearchOption\u003e\n        \u003cacc:searchWirelessInd\u003etrue\u003c/acc:searchWirelessInd\u003e\n        \u003cacc:searchVoipInd\u003efalse\u003c/acc:searchVoipInd\u003e\n        \u003cacc:searchTollFreeInd\u003efalse\u003c/acc:searchTollFreeInd\u003e\n    \u003c/acc:phoneNumberSearchOption\u003e\n\u003c/acc:getAccountByPhoneNumber\u003e"
  }
});
formatter.step({
  "comments": [
    {
      "line": 19,
      "value": "# string comparisons may be simpler than xpath in some cases"
    }
  ],
  "line": 20,
  "name": "xmlstring reqString \u003d req",
  "keyword": "* "
});
formatter.step({
  "line": 21,
  "name": "match reqString contains \u0027\u003cacc:phoneNumber\u003e123456\u003c/acc:phoneNumber\u003e\u0027",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "search",
      "offset": 4
    },
    {
      "val": "{ number: \u0027123456\u0027, wireless: true, voip: false, tollFree: false }",
      "offset": 13
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 79604053,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "req",
      "offset": 4
    },
    {
      "val": "read(\u0027soap1.xml\u0027)",
      "offset": 10
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 50233571,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "phone",
      "offset": 4
    },
    {
      "val": "req/Envelope/Body/getAccountByPhoneNumber",
      "offset": 12
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 3036684,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "phone",
      "offset": 6
    },
    {
      "val": " /getAccountByPhoneNumber/phoneNumber",
      "offset": 11
    },
    {
      "val": "\u003d\u003d",
      "offset": 49
    },
    {
      "val": "\u0027123456\u0027",
      "offset": 52
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 6953132,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "phone",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 12
    }
  ],
  "location": "StepDefs.matchEqualsDocString(String,String,String,String,String)"
});
formatter.result({
  "duration": 5182930,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "reqString",
      "offset": 10
    },
    {
      "val": "req",
      "offset": 22
    }
  ],
  "location": "StepDefs.castToXmlString(String,String)"
});
formatter.result({
  "duration": 12743233,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "reqString",
      "offset": 6
    },
    {},
    {},
    {},
    {
      "val": " \u0027\u003cacc:phoneNumber\u003e123456\u003c/acc:phoneNumber\u003e\u0027",
      "offset": 24
    }
  ],
  "location": "StepDefs.matchContains(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 6588582,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "placeholders using string replace",
  "description": "",
  "id": "xml-samples-and-tests;placeholders-using-string-replace",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "def req \u003d read(\u0027soap2.xml\u0027)",
  "keyword": "* "
});
formatter.step({
  "line": 25,
  "name": "replace req",
  "rows": [
    {
      "cells": [
        "token",
        "value"
      ],
      "line": 26
    },
    {
      "cells": [
        "@@number@@",
        "\u0027123456\u0027"
      ],
      "line": 27
    },
    {
      "cells": [
        "@@wireless@@",
        "\u0027true\u0027"
      ],
      "line": 28
    },
    {
      "cells": [
        "@@voip@@",
        "\u0027false\u0027"
      ],
      "line": 29
    },
    {
      "cells": [
        "@@tollFree@@",
        "\u0027false\u0027"
      ],
      "line": 30
    }
  ],
  "keyword": "* "
});
formatter.step({
  "comments": [
    {
      "line": 31,
      "value": "# convert back to xml after a string replace"
    }
  ],
  "line": 32,
  "name": "xml req \u003d req",
  "keyword": "* "
});
formatter.step({
  "line": 33,
  "name": "match req /Envelope/Body/getAccountByPhoneNumber/phoneNumber \u003d\u003d \u0027123456\u0027",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "req",
      "offset": 4
    },
    {
      "val": "read(\u0027soap2.xml\u0027)",
      "offset": 10
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 54235408,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "req",
      "offset": 8
    }
  ],
  "location": "StepDefs.replace(String,DataTable)"
});
formatter.result({
  "duration": 31668214,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "req",
      "offset": 4
    },
    {
      "val": "req",
      "offset": 10
    }
  ],
  "location": "StepDefs.castToXml(String,String)"
});
formatter.result({
  "duration": 10707010,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "req",
      "offset": 6
    },
    {
      "val": " /Envelope/Body/getAccountByPhoneNumber/phoneNumber",
      "offset": 9
    },
    {
      "val": "\u003d\u003d",
      "offset": 61
    },
    {
      "val": "\u0027123456\u0027",
      "offset": 64
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 8930649,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "set xml chunks using xpath",
  "description": "",
  "id": "xml-samples-and-tests;set-xml-chunks-using-xpath",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 37,
  "name": "def req \u003d read(\u0027envelope1.xml\u0027)",
  "keyword": "* "
});
formatter.step({
  "line": 38,
  "name": "def phone \u003d \u0027123456\u0027",
  "keyword": "* "
});
formatter.step({
  "line": 39,
  "name": "def search \u003d",
  "keyword": "* ",
  "doc_string": {
    "content_type": "",
    "line": 40,
    "value": "\u003cacc:getAccountByPhoneNumber\u003e\n    \u003cacc:phoneNumber\u003e#(phone)\u003c/acc:phoneNumber\u003e\n\u003c/acc:getAccountByPhoneNumber\u003e"
  }
});
formatter.step({
  "line": 45,
  "name": "set req /Envelope/Body \u003d search",
  "keyword": "* "
});
formatter.step({
  "line": 46,
  "name": "match req \u003d\u003d",
  "keyword": "* ",
  "doc_string": {
    "content_type": "",
    "line": 47,
    "value": "\u003csoapenv:Envelope xmlns:soapenv\u003d\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:acc\u003d\"http://foo/bar\"\u003e\n    \u003csoapenv:Header /\u003e\n    \u003csoapenv:Body\u003e\n        \u003cacc:getAccountByPhoneNumber\u003e\n            \u003cacc:phoneNumber\u003e123456\u003c/acc:phoneNumber\u003e\n        \u003c/acc:getAccountByPhoneNumber\u003e\n    \u003c/soapenv:Body\u003e\n\u003c/soapenv:Envelope\u003e"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "req",
      "offset": 4
    },
    {
      "val": "read(\u0027envelope1.xml\u0027)",
      "offset": 10
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 53044052,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "phone",
      "offset": 4
    },
    {
      "val": "\u0027123456\u0027",
      "offset": 12
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 7563999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "search",
      "offset": 4
    }
  ],
  "location": "StepDefs.defDocString(String,String)"
});
formatter.result({
  "duration": 8211403,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "req",
      "offset": 4
    },
    {
      "val": " /Envelope/Body",
      "offset": 7
    },
    {
      "val": "search",
      "offset": 25
    }
  ],
  "location": "StepDefs.setByPath(String,String,String)"
});
formatter.result({
  "duration": 9089935,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "req",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 10
    }
  ],
  "location": "StepDefs.matchEqualsDocString(String,String,String,String,String)"
});
formatter.result({
  "duration": 6427654,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "set xml chunks using embedded expressions",
  "description": "",
  "id": "xml-samples-and-tests;set-xml-chunks-using-embedded-expressions",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 59,
  "name": "def phone \u003d \u0027123456\u0027",
  "keyword": "* "
});
formatter.step({
  "comments": [
    {
      "line": 60,
      "value": "# this will remove the \u003cacc:phoneNumberSearchOption\u003e element"
    }
  ],
  "line": 61,
  "name": "def searchOption \u003d null",
  "keyword": "* "
});
formatter.step({
  "line": 62,
  "name": "def search \u003d",
  "keyword": "* ",
  "doc_string": {
    "content_type": "",
    "line": 63,
    "value": "\u003cacc:getAccountByPhoneNumber\u003e\n    \u003cacc:phoneNumber\u003e#(phone)\u003c/acc:phoneNumber\u003e\n    \u003cacc:phoneNumberSearchOption\u003e##(searchOption)\u003c/acc:phoneNumberSearchOption\u003e        \n\u003c/acc:getAccountByPhoneNumber\u003e"
  }
});
formatter.step({
  "line": 69,
  "name": "def req \u003d read(\u0027envelope2.xml\u0027)",
  "keyword": "* "
});
formatter.step({
  "line": 70,
  "name": "match req \u003d\u003d",
  "keyword": "* ",
  "doc_string": {
    "content_type": "",
    "line": 71,
    "value": "\u003csoapenv:Envelope xmlns:soapenv\u003d\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:acc\u003d\"http://foo/bar\"\u003e\n    \u003csoapenv:Header /\u003e\n    \u003csoapenv:Body\u003e\n        \u003cacc:getAccountByPhoneNumber\u003e\n            \u003cacc:phoneNumber\u003e123456\u003c/acc:phoneNumber\u003e\n        \u003c/acc:getAccountByPhoneNumber\u003e\n    \u003c/soapenv:Body\u003e\n\u003c/soapenv:Envelope\u003e"
  }
});
formatter.match({
  "arguments": [
    {
      "val": "phone",
      "offset": 4
    },
    {
      "val": "\u0027123456\u0027",
      "offset": 12
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 50575952,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "searchOption",
      "offset": 4
    },
    {
      "val": "null",
      "offset": 19
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 5855787,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "search",
      "offset": 4
    }
  ],
  "location": "StepDefs.defDocString(String,String)"
});
formatter.result({
  "duration": 15288103,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "req",
      "offset": 4
    },
    {
      "val": "read(\u0027envelope2.xml\u0027)",
      "offset": 10
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 24676082,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "req",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 10
    }
  ],
  "location": "StepDefs.matchEqualsDocString(String,String,String,String,String)"
});
formatter.result({
  "duration": 4626662,
  "status": "passed"
});
formatter.scenario({
  "line": 82,
  "name": "pretty print xml",
  "description": "",
  "id": "xml-samples-and-tests;pretty-print-xml",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 83,
  "name": "def search \u003d { number: \u0027123456\u0027, wireless: true, voip: false, tollFree: false }",
  "keyword": "* "
});
formatter.step({
  "line": 84,
  "name": "def xml \u003d read(\u0027soap1.xml\u0027)",
  "keyword": "* "
});
formatter.step({
  "line": 85,
  "name": "print \u0027pretty print:\\n\u0027 + karate.prettyXml(xml)",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "search",
      "offset": 4
    },
    {
      "val": "{ number: \u0027123456\u0027, wireless: true, voip: false, tollFree: false }",
      "offset": 13
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 39640689,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xml",
      "offset": 4
    },
    {
      "val": "read(\u0027soap1.xml\u0027)",
      "offset": 10
    }
  ],
  "location": "StepDefs.def(String,String)"
});
formatter.result({
  "duration": 50977450,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u0027pretty print:\\n\u0027 + karate.prettyXml(xml)",
      "offset": 6
    }
  ],
  "location": "StepDefs.print(String)"
});
formatter.result({
  "duration": 17377286,
  "status": "passed"
});
});