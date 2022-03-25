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

    describe("test fetch universities", function() {
        it("should succeed", async function() {
            const universitiesScope = nock("http://universities.hipolabs.com")
                .get("/search")
                .reply(200, universityMock, { 'Content-Type': 'application/json' });

            const universities = await universityService.getAllUnivirsities();
            console.log(universities.data)
            expect(universities.data).to.have.lengthOf(3);
            expect(universities.data).to.deep.equal(universityMock);
            expect(universities.data[0].country).to.equal("United States");
            universitiesScope.done();
        });
    });

});