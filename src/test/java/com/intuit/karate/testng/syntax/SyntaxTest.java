package com.intuit.karate.testng.syntax;

import org.testng.annotations.BeforeClass;

/**
 *
 * @author pthomas3
 */

public class SyntaxTest {   
    
    @BeforeClass
    public static void before() {
        System.setProperty("karate.env", "foo");
    }

}
