const test = require("node:test");
const assert = require("node:assert/strict");

const core = require("../js/core.js");

test("removeLatestProgressEntry removes final stored row", () => {
  const current = [
    { date: "2026-02-10", day: 1, weight: 186, waist: 34, notes: "a" },
    { date: "2026-02-11", day: 2, weight: 185.8, waist: 34, notes: "b" },
  ];

  const result = core.removeLatestProgressEntry(current);
  assert.equal(result.entries.length, 1);
  assert.deepEqual(result.removed, { date: "2026-02-11", day: 2, weight: 185.8, waist: 34, notes: "b" });
});

test("removeProgressEntryByDateDay removes matching row", () => {
  const current = [
    { date: "2026-02-10", day: 1, weight: 186, waist: 34, notes: "a" },
    { date: "2026-02-11", day: 2, weight: 185.8, waist: 34, notes: "b" },
  ];

  const result = core.removeProgressEntryByDateDay(current, "2026-02-10", 1);
  assert.equal(result.removed, true);
  assert.equal(result.entries.length, 1);
  assert.equal(result.entries[0].day, 2);
});

test("removeProgressEntryByDateDay returns unchanged data when no match", () => {
  const current = [{ date: "2026-02-10", day: 1, weight: 186, waist: 34, notes: "a" }];
  const result = core.removeProgressEntryByDateDay(current, "2026-02-12", 3);

  assert.equal(result.removed, false);
  assert.equal(result.entries.length, 1);
});
