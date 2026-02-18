const test = require("node:test");
const assert = require("node:assert/strict");

const core = require("../js/core.js");

test("upsertProgressEntry appends when date/day key is new", () => {
  const current = [{ date: "2026-02-10", day: 1, weight: 186, waist: 34, notes: "start" }];
  const result = core.upsertProgressEntry(current, {
    date: "2026-02-11",
    day: 2,
    weight: 185.5,
    waist: 34,
    notes: "good",
  });

  assert.equal(result.replaced, false);
  assert.equal(result.entries.length, 2);
  assert.deepEqual(result.entries[1], {
    date: "2026-02-11",
    day: 2,
    weight: 185.5,
    waist: 34,
    notes: "good",
  });
});

test("upsertProgressEntry replaces existing row with same date/day", () => {
  const current = [{ date: "2026-02-10", day: 1, weight: 186, waist: 34, notes: "start" }];
  const result = core.upsertProgressEntry(current, {
    date: "2026-02-10",
    day: 1,
    weight: 185.8,
    waist: 33.9,
    notes: "updated",
  });

  assert.equal(result.replaced, true);
  assert.equal(result.entries.length, 1);
  assert.deepEqual(result.entries[0], {
    date: "2026-02-10",
    day: 1,
    weight: 185.8,
    waist: 33.9,
    notes: "updated",
  });
});
