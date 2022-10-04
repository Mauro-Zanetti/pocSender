@requires: 'authenticated-user'
service SenderService {
    @requires: 'viewer'
    @readonly entity DummyEntity {
        key dummyID : Integer;
    }
    function SendMessage(id : String) returns String;
}