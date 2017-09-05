package com.intuit.karate.testng;

import com.intuit.karate.cucumber.CucumberRunner;
import com.intuit.karate.cucumber.KarateStats;
import cucumber.api.testng.CucumberExceptionWrapper;
import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.CucumberFeatureWrapperImpl;
import cucumber.api.testng.FeatureResultListener;
import cucumber.api.testng.TestNgReporter;
import cucumber.runtime.CucumberException;
import cucumber.runtime.Runtime;
import cucumber.runtime.RuntimeOptions;
import cucumber.runtime.model.CucumberFeature;

import java.io.File;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import net.masterthought.cucumber.ReportBuilder;
import net.masterthought.cucumber.Configuration;
import org.apache.commons.io.FileUtils;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;


/**
 * adapted from cucumber.api.testng.AbstractTestNGCucumberTests
 *
 * @author pthomas3
 */
public abstract class KarateRunner {

    private CucumberRunner runner;
    private FeatureResultListener resultListener;

    @BeforeClass(alwaysRun = true)
    public void setUpClass() throws Exception {
        runner = new CucumberRunner(getClass());
        TestNgReporter reporter = new TestNgReporter(System.out);
        RuntimeOptions ro = runner.getRuntimeOptions();
        resultListener = new FeatureResultListener(ro.reporter(runner.getClassLoader()), ro.isStrict());
    }

    @AfterClass(alwaysRun = true)
    public void tearDownClass() throws Exception {
        runner.finish();
    }

    @Test(groups = "cucumber", description = "Runs Cucumber Feature", dataProvider = "features")
    public void feature(CucumberFeatureWrapper wrapper) {
        CucumberFeature feature = wrapper.getCucumberFeature();
        Runtime runtime = runner.getRuntime(feature);
        resultListener.startFeature();
        RuntimeOptions ro = runner.getRuntimeOptions();
        feature.run(ro.formatter(runner.getClassLoader()), resultListener, runtime);
        if (!resultListener.isPassed()) {
            throw new CucumberException(resultListener.getFirstError());
        }
        runtime.printSummary();
    }

    @Test
    public void testParallel() {
        String karateOutputPath = "target/surefire-reports";
        KarateStats stats = CucumberRunner.parallel(getClass(), 5, karateOutputPath);
        generateReport(karateOutputPath);
        Assert.assertEquals("there are scenario failures", stats.getFailCount() == 0);
    }

    private static void generateReport(String karateOutputPath) {
        Collection<File> jsonFiles = FileUtils.listFiles(new File(karateOutputPath), new String[]{"json"}, true);
        List<String> jsonPaths = new ArrayList(jsonFiles.size());
        for (File file : jsonFiles) {
            jsonPaths.add(file.getAbsolutePath());
        }
        Configuration config = new Configuration(new File("target"), "demo");
        ReportBuilder reportBuilder = new ReportBuilder(jsonPaths, config);
        reportBuilder.generateReports();
    }

    @DataProvider
    public Object[][] features() {
        try {
            List<CucumberFeature> features = runner.getFeatures();
            List<Object[]> featuresList = new ArrayList<Object[]>(features.size());
            for (CucumberFeature feature : features) {
                featuresList.add(new Object[]{new CucumberFeatureWrapperImpl(feature)});
            }
            return featuresList.toArray(new Object[][]{});
        } catch (CucumberException e) {
            return new Object[][]{new Object[]{new CucumberExceptionWrapper(e)}};
        }
    }

}
