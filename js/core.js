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

  return {
    entryDateForPlanDay,
    upsertProgressEntry,
  };
});
