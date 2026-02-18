const test = require("node:test");
const assert = require("node:assert/strict");

const core = require("../js/core.js");

test("parseStoredChecks returns empty object for invalid JSON", () => {
  assert.deepEqual(core.parseStoredChecks("not-json"), {});
});

test("parseStoredChecks returns empty object for wrong JSON shape", () => {
  assert.deepEqual(core.parseStoredChecks("[]"), {});
  assert.deepEqual(core.parseStoredChecks("42"), {});
});

test("parseStoredChecks returns object for valid check payload", () => {
  assert.deepEqual(core.parseStoredChecks('{"day1_breakfast":true}'), { day1_breakfast: true });
});

test("parseStoredProgress returns empty array for invalid or wrong-shape payload", () => {
  assert.deepEqual(core.parseStoredProgress("not-json"), []);
  assert.deepEqual(core.parseStoredProgress('{"date":"2026-02-10"}'), []);
});

test("parseStoredProgress filters out non-object rows", () => {
  const result = core.parseStoredProgress('[{"date":"2026-02-10","day":1},null,3,"x",[]]');
  assert.deepEqual(result, [{ date: "2026-02-10", day: 1 }]);
});
