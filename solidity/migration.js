const taskContract = artifacts.require("TaskContract");

module.exports = function(migration) {
    migration.deploy(taskContract);
};


