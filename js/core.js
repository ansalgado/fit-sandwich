(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.FitSandwichCore = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  function entryDateForPlanDay(startDateStr, dayNumber, fallbackDate) {
    if (startDateStr) {
      const start = new Date(startDateStr + "T00:00:00");
      return new Date(start.getTime() + (dayNumber - 1) * 24 * 60 * 60 * 1000)
        .toISOString()
        .slice(0, 10);
    }

    const base = fallbackDate instanceof Date ? fallbackDate : new Date();
    return base.toISOString().slice(0, 10);
  }

  function upsertProgressEntry(entries, nextEntry) {
    const arr = Array.isArray(entries) ? entries.slice() : [];
    const idx = arr.findIndex((item) => item && item.date === nextEntry.date && item.day === nextEntry.day);

    if (idx >= 0) {
      arr[idx] = nextEntry;
      return { entries: arr, replaced: true };
    }

    arr.push(nextEntry);
    return { entries: arr, replaced: false };
  }

  function validateProgressInput(weight, waist, notes) {
    const hasWeight = weight !== "" && weight != null;
    const hasWaist = waist !== "" && waist != null;
    const hasNotes = !!String(notes || "").trim();

    if (!hasWeight && !hasWaist && !hasNotes) {
      return { ok: false, message: "Add weight, waist, or notes first." };
    }

    if (hasWeight && (Number.isNaN(weight) || weight < 60 || weight > 600)) {
      return { ok: false, message: "Weight looks out of range (60-600 lb)." };
    }

    if (hasWaist && (Number.isNaN(waist) || waist < 15 || waist > 100)) {
      return { ok: false, message: "Waist looks out of range (15-100 in)." };
    }

    return { ok: true, message: "" };
  }

  return {
    entryDateForPlanDay,
    upsertProgressEntry,
    validateProgressInput,
  };
});
