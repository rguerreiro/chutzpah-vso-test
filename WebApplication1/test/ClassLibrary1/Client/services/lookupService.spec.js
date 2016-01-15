var assert = chai.assert,
    expect = chai.expect,
    should = chai.should();

describe('lookup service tests', function () {
    var $httpBackend, lookupService;

    beforeEach(function () {
        // removing the parts I don't need
        angular.module('blocks.confirm', []);
        angular.module('app.layout', []);
        angular.module('app.dashboard', []);
    });

    beforeEach(function () {
        module(function ($provide) {
            // mocks
            $provide.constant('toastr', { options: {} });
            $provide.constant('moment', {});
        });
    });

    beforeEach(module('app'));

    beforeEach(function () {
        inject(function (_$httpBackend_) {
            $httpBackend = _$httpBackend_;
        });
    });

    beforeEach(function () {
        inject(function (_lookupService_) {
            lookupService = _lookupService_;
        });
    });

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    describe('getAppointments method', function () {

        it('should exist', function () {
            expect(lookupService.getAppointments).to.exist;
        });

        it('should call api and return array', function () {
            // arranje
            $httpBackend.expectGET('/api/lookup/appointments').respond([{ Id: 1, Name: 'Test 1' }, { Id: 2, Name: 'Test 2' }]);

            // act
            var result = lookupService.getAppointments();

            // assert
            result.should.eventually.be.length(2);

            $httpBackend.flush();
        });

        it('should call api only once when menthod is called multiple times', function () {
            // arranje
            $httpBackend.whenGET('/api/lookup/appointments').respond([{ Id: 1, Name: 'Test 1' }, { Id: 2, Name: 'Test 2' }]);

            // act
            lookupService.getAppointments();
            lookupService.getAppointments();
            lookupService.getAppointments();
            lookupService.getAppointments();
            lookupService.getAppointments();

            // assert
            $httpBackend.flush(1);
        });
    });
});