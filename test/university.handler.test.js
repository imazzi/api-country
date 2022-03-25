const expect = require("chai").expect;
const { afterEach } = require("mocha");
const nock = require("nock");

const universityService = require("../service/universitiesService");
const universityMock = require("./mocks/university");

describe("test University Service", function() {
    after(function() {
        nock.restore();
    });

    afterEach(function() {
        nock.cleanAll();
    });

    // it("should be error", async function() {
    //     const universitiesScope = nock("http://universities.hipolabs.com")
    //         .get("/search")
    //         .reply(
    //             404, { message: "Not found" }, { "Content-Type": "application/json" },
    //         );

    //     try {
    //         await universityService.getAllUnivirsities();

    //     } catch (e) {
    //         expect(e.response.status).to.equal(404);
    //         expect(e.response.data.message).to.equal("Not found");
    //     }

    //     universitiesScope.done();
    // });

});