const test = require("node:test");
const assert = require("node:assert/strict");

const core = require("../js/core.js");

test("validateProgressInput rejects empty payload", () => {
  assert.deepEqual(core.validateProgressInput("", "", "   "), {
    ok: false,
    message: "Add weight, waist, or notes first.",
  });
});

test("validateProgressInput rejects out-of-range weight", () => {
  assert.deepEqual(core.validateProgressInput(59, "", ""), {
    ok: false,
    message: "Weight looks out of range (60-600 lb).",
  });
});

test("validateProgressInput rejects out-of-range waist", () => {
  assert.deepEqual(core.validateProgressInput("", 101, ""), {
    ok: false,
    message: "Waist looks out of range (15-100 in).",
  });
});

test("validateProgressInput accepts valid numeric and note values", () => {
  assert.deepEqual(core.validateProgressInput(186.4, 34.2, "solid workout"), {
    ok: true,
    message: "",
  });
});
