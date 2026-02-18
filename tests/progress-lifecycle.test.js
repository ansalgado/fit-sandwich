const test = require("node:test");
const assert = require("node:assert/strict");

const core = require("../js/core.js");

test("progress lifecycle: save new, edit existing, delete row, delete latest", () => {
  let entries = [];

  const save1 = core.upsertProgressEntry(entries, {
    date: "2026-02-10",
    day: 1,
    weight: 186,
    waist: 34,
    notes: "start",
  });
  entries = save1.entries;
  assert.equal(save1.replaced, false);
  assert.equal(entries.length, 1);

  const save2 = core.upsertProgressEntry(entries, {
    date: "2026-02-11",
    day: 2,
    weight: 185.5,
    waist: 33.9,
    notes: "day 2",
  });
  entries = save2.entries;
  assert.equal(save2.replaced, false);
  assert.equal(entries.length, 2);

  const editDay2 = core.upsertProgressEntry(entries, {
    date: "2026-02-11",
    day: 2,
    weight: 185.2,
    waist: 33.8,
    notes: "day 2 updated",
  });
  entries = editDay2.entries;
  assert.equal(editDay2.replaced, true);
  assert.equal(entries.length, 2);
  assert.equal(entries[1].weight, 185.2);

  const deleteDay1 = core.removeProgressEntryByDateDay(entries, "2026-02-10", 1);
  entries = deleteDay1.entries;
  assert.equal(deleteDay1.removed, true);
  assert.equal(entries.length, 1);
  assert.equal(entries[0].day, 2);

  const deleteLatest = core.removeLatestProgressEntry(entries);
  entries = deleteLatest.entries;
  assert.ok(deleteLatest.removed);
  assert.equal(entries.length, 0);
});
