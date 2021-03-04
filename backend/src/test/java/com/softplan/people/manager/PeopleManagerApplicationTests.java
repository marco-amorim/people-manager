package com.softplan.people.manager;

import com.softplan.people.manager.controller.PersonControllerTest;
import com.softplan.people.manager.controller.SourceCodeControllerTest;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Suite;

@RunWith(Suite.class)
@Suite.SuiteClasses({
        PersonControllerTest.class,
        SourceCodeControllerTest.class
})
public class PeopleManagerApplicationTests {

    @Test
    void contextLoads() {
    }

}
