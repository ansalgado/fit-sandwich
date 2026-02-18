// JavaScript for Fatty McFatFace • Recomp Dashboard
// Extracted from inline script and moved into a standalone module.

// Immediately Invoked Function Expression (IIFE) to avoid polluting the global scope
(() => {
  // ---------- Data ----------
  const workouts = {
    "Upper A": {
      focus: "Chest & Back",
      list: [
        { name: "Dumbbell Bench Press", sets: "4×8", link: "https://www.youtube.com/watch?v=VmB1G1K7v94" },
        { name: "One-Arm Dumbbell Row", sets: "4×8/side", link: "https://www.youtube.com/watch?v=pYcpY20QaE8" },
        { name: "Dumbbell Incline Press (home variation)", sets: "3×10", link: "https://www.youtube.com/watch?v=8iPEnn-ltC8" },
        { name: "Push-Ups", sets: "3×12–15", link: "https://www.youtube.com/watch?v=IODxDxX7oi4" },
        { name: "Dumbbell Lateral Raise", sets: "3×12–15", link: "https://www.youtube.com/watch?v=kDqklk1ZESo" },
        { name: "Plank", sets: "3×45s", link: "https://www.youtube.com/watch?v=pSHjTRCQxIw" },
      ],
    },
    "Lower A": {
      focus: "Quads & Posterior Chain",
      list: [
        { name: "Goblet Squat", sets: "4×8", link: "https://www.youtube.com/watch?v=MeIiIdhvXT4" },
        { name: "Dumbbell Romanian Deadlift", sets: "3×10", link: "https://www.youtube.com/watch?v=JLVrIPnmm5A" },
        { name: "Walking Lunges", sets: "3×10/leg", link: "https://www.youtube.com/watch?v=wrwwXE_x-pQ" },
        { name: "Glute Bridge (weighted optional)", sets: "3×12", link: "https://www.youtube.com/watch?v=m2Zx-57cSok" },
        { name: "Side Plank", sets: "3×30s/side", link: "https://www.youtube.com/watch?v=K2VljzCC16g" },
      ],
    },
    "Upper B": {
      focus: "Shoulders & Arms",
      list: [
        { name: "Dumbbell Overhead Press", sets: "4×8", link: "https://www.youtube.com/watch?v=B-aVuyhvLHU" },
        { name: "Bent-Over Dumbbell Row", sets: "4×8", link: "https://www.youtube.com/watch?v=roCP6wCXPqo" },
        { name: "Dumbbell Floor Press", sets: "3×10", link: "https://www.youtube.com/watch?v=t1bUjzg4YwI" },
        { name: "Front + Lateral Raises (alternate)", sets: "3×12–15", link: "https://www.youtube.com/watch?v=kDqklk1ZESo" },
        { name: "Bicep Curls", sets: "3×12", link: "https://www.youtube.com/watch?v=ykJmrZ5v0Oo" },
        { name: "Overhead DB Triceps Extension", sets: "3×12", link: "https://www.youtube.com/watch?v=_gsUck-7M74" },
      ],
    },
    "Lower B": {
      focus: "Posterior & Glutes",
      list: [
        { name: "Dumbbell Deadlift", sets: "4×6–8", link: "https://www.youtube.com/watch?v=6TSP1TRMUzs" },
        { name: "Bulgarian Split Squat", sets: "3×8/leg", link: "https://www.youtube.com/watch?v=2C-uNgKwPLE" },
        { name: "Hip Thrust (weighted optional)", sets: "3×12", link: "https://www.youtube.com/watch?v=SEdqd1n0cvg" },
        { name: "Calf Raises", sets: "3×15–20", link: "https://www.youtube.com/watch?v=YMmgqO8Jo-k" },
        { name: "Plank Shoulder Taps", sets: "3×30–45s", link: "https://www.youtube.com/watch?v=gbyM0bQ2Cys" },
      ],
    },
  };

  // 14-day plan (meals + workout tag)
  const plan = [
    { day: 1, tag: "T", workout: "Upper A", meals: [
      "Breakfast: 3 eggs, ½ avocado, toast, berries",
      "Lunch: Chicken salad + sweet potato",
      "Snack: Greek yogurt + walnuts",
      "Dinner: Steak + vegetables + small potato",
    ] },
    { day: 2, tag: "R", workout: "Rest / Walk", meals: [
      "Breakfast: Greek yogurt, blueberries, chia, almonds",
      "Lunch: Turkey lettuce wraps + cucumber/tomato",
      "Snack: Protein shake + apple",
      "Dinner: Chicken thighs + broccoli + cauliflower mash",
    ] },
    { day: 3, tag: "T", workout: "Lower A", meals: [
      "Breakfast: Protein smoothie (whey, banana, spinach, almond milk, PB)",
      "Lunch: Ground beef + rice + vegetables",
      "Snack: Cottage cheese + pineapple",
      "Dinner: Pork tenderloin + asparagus + potatoes",
    ] },
    { day: 4, tag: "R", workout: "Rest / Walk", meals: [
      "Breakfast: Eggs + spinach + avocado",
      "Lunch: Chicken salad + almonds",
      "Snack: 2 hard-boiled eggs",
      "Dinner: Ground turkey + zucchini noodles + tomato sauce",
    ] },
    { day: 5, tag: "T", workout: "Upper B", meals: [
      "Breakfast: (repeat Day 1) eggs + avocado + toast + berries",
      "Lunch: Chicken salad + sweet potato",
      "Snack: Greek yogurt + walnuts",
      "Dinner: Steak + vegetables + small potato",
    ] },
    { day: 6, tag: "AR", workout: "Lower B", meals: [
      "Breakfast: (repeat Day 3) protein smoothie",
      "Lunch: Ground beef + rice + vegetables",
      "Snack: Cottage cheese + pineapple",
      "Dinner: Pork tenderloin + asparagus + potatoes",
    ] },
    { day: 7, tag: "R", workout: "Rest / Mobility", meals: [
      "Breakfast: Eggs + avocado",
      "Lunch: Chicken salad (olive oil)",
      "Snack: Greek yogurt",
      "Dinner: Steak + vegetables (lower carb)",
    ] },
    { day: 8, tag: "T", workout: "Upper A", meals: [
      "Breakfast: Eggs + berries",
      "Lunch: Chicken + quinoa (½ cup) + vegetables",
      "Snack: Protein shake",
      "Dinner: Steak + vegetables",
    ] },
    { day: 9, tag: "R", workout: "Rest / Walk", meals: [
      "Breakfast: Greek yogurt + nuts",
      "Lunch: Turkey burger (no bun) + sweet potato",
      "Snack: Cottage cheese",
      "Dinner: Chicken thighs + broccoli",
    ] },
    { day: 10, tag: "T", workout: "Lower A", meals: [
      "Breakfast: Protein smoothie",
      "Lunch: Ground beef + rice + vegetables",
      "Snack: 2 hard-boiled eggs",
      "Dinner: Pork + vegetables",
    ] },
    { day: 11, tag: "R", workout: "Rest / Walk", meals: [
      "Breakfast: Eggs + avocado",
      "Lunch: Chicken salad",
      "Snack: Protein shake",
      "Dinner: Ground turkey + roasted carrots",
    ] },
    { day: 12, tag: "T", workout: "Upper B", meals: [
      "Breakfast: (repeat Day 8) eggs + berries",
      "Lunch: Chicken + quinoa + vegetables",
      "Snack: Protein shake",
      "Dinner: Steak + vegetables",
    ] },
    { day: 13, tag: "R", workout: "Rest / Walk", meals: [
      "Breakfast: (repeat Day 9) greek yogurt + nuts",
      "Lunch: Turkey burger + sweet potato",
      "Snack: Cottage cheese",
      "Dinner: Chicken thighs + broccoli",
    ] },
    { day: 14, tag: "R", workout: "Rest / Mobility", meals: [
      "Breakfast: Eggs + spinach + avocado",
      "Lunch: Chicken salad",
      "Snack: Greek yogurt",
      "Dinner: Steak + vegetables (lower carb)",
    ] },
  ];

  const badgeMap = {
    T: { cls: "t", text: "Training day" },
    R: { cls: "r", text: "Rest day" },
    AR: { cls: "ar", text: "Active recovery" },
  };

  // ---------- State / Storage ----------
  const LS = {
    start: "antonio_startDate_v1",
    checks: "antonio_checks_v1",
    progress: "antonio_progress_v1",
  };

  function $(id) {
    return document.getElementById(id);
  }

  function setStatus(msg) {
    $("status").textContent = msg;
    setTimeout(() => {
      $("status").textContent = "";
    }, 2500);
  }

  function getStartDate() {
    const v = localStorage.getItem(LS.start);
    return v ? new Date(v + "T00:00:00") : null;
  }
  function setStartDate(dateStr) {
    localStorage.setItem(LS.start, dateStr);
  }

  function daysBetween(d1, d2) {
    const ms = 24 * 60 * 60 * 1000;
    return Math.floor((d2 - d1) / ms);
  }

  function loadChecks() {
    try {
      return JSON.parse(localStorage.getItem(LS.checks) || "{}");
    } catch (e) {
      return {};
    }
  }
  function saveChecks(obj) {
    localStorage.setItem(LS.checks, JSON.stringify(obj));
  }

  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem(LS.progress) || "[]");
    } catch (e) {
      return [];
    }
  }
  function saveProgress(arr) {
    localStorage.setItem(LS.progress, JSON.stringify(arr));
  }

  // ---------- UI ----------
  let currentDayIndex = 0;

  function initDayPicker() {
    const sel = $("dayPick");
    sel.innerHTML = "";
    plan.forEach((p, idx) => {
      const opt = document.createElement("option");
      opt.value = idx;
      opt.textContent = `Day ${p.day}`;
      sel.appendChild(opt);
    });
    sel.addEventListener("change", () => {
      currentDayIndex = parseInt(sel.value, 10);
      renderDay();
    });
  }

  function computeTodayIndex() {
    const start = getStartDate();
    if (!start) return 0;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const diff = daysBetween(start, today);
    if (diff < 0) return 0;
    if (diff > 13) return 13;
    return diff;
  }

  function renderWorkoutTabs(activeName) {
    const tabs = $("workoutTabs");
    tabs.innerHTML = "";
    ["Upper A", "Lower A", "Upper B", "Lower B"].forEach((name) => {
      const b = document.createElement("button");
      b.className = "tab" + (name === activeName ? " active" : "");
      b.textContent = name;
      b.addEventListener("click", () => {
        renderWorkoutDetail(name);
        [...tabs.children].forEach((x) => x.classList.remove("active"));
        b.classList.add("active");
      });
      tabs.appendChild(b);
    });
  }

  function renderWorkoutDetail(name) {
    const w = workouts[name];
    const el = $("workoutDetail");
    if (!w) {
      el.innerHTML = `<div class="muted">Rest day. Optional walk/row/bike.</div>`;
      return;
    }

    const items = w.list
      .map(
        (ex) =>
          `<li><strong>${ex.name}</strong> — ${ex.sets} • <a href="${ex.link}" target="_blank" rel="noreferrer">video</a></li>`
      )
      .join("");

    el.innerHTML = `
      <div class="badge ${name.includes("Upper") ? "t" : "ar"}" style="display:inline-block;">${name} • ${
      w.focus
    }</div>
      <div class="hr"></div>
      <ul class="list">${items}</ul>
      <div class="hr"></div>
      <div class="muted">
        <strong>Progression:</strong> when you hit the top end of reps with good form, increase dumbbell weight next session.
        If you can’t add weight, add 1 rep per set until you can.
      </div>
    `;
  }

  function renderDay() {
    const p = plan[currentDayIndex];
    $("dayPick").value = String(currentDayIndex);

    $("dayHeader").textContent = `Day ${p.day}`;
    const start = getStartDate();
    const dateStr = start
      ? new Date(start.getTime() + (p.day - 1) * 24 * 60 * 60 * 1000).toLocaleDateString()
      : "Set a start date";
    $("dayMeta").textContent = `Date: ${dateStr} • Focus: ${p.workout}`;

    const badge = badgeMap[p.tag];
    const b = $("dayBadge");
    b.className = `badge ${badge.cls}`;
    b.textContent = badge.text;

    // Meals
    const ul = $("mealsList");
    ul.innerHTML = p.meals.map((m) => `<li>${m}</li>`).join("");

    // Workout summary + tabs/detail
    const ws = $("workoutSummary");
    if (workouts[p.workout]) {
      ws.innerHTML = `<strong>${p.workout}</strong> — ${workouts[p.workout].focus} • <span class="muted">45–60 min</span>`;
      renderWorkoutTabs(p.workout);
      renderWorkoutDetail(p.workout);
      // mark selected tab
      [...$("workoutTabs").children].forEach((btn) => {
        if (btn.textContent === p.workout) btn.classList.add("active");
      });
    } else {
      ws.innerHTML = `<strong>${p.workout}</strong> • Optional walk/row/bike`;
      renderWorkoutTabs("Upper A");
      renderWorkoutDetail(null);
      [...$("workoutTabs").children].forEach((btn) => btn.classList.remove("active"));
    }

    // Checklist: meals + workout
    const checks = loadChecks();
    const keyBase = `day${p.day}`;
    const items = [
      { id: `${keyBase}_breakfast`, label: "Breakfast complete" },
      { id: `${keyBase}_lunch`, label: "Lunch complete" },
      { id: `${keyBase}_snack`, label: "Snack complete" },
      { id: `${keyBase}_dinner`, label: "Dinner complete" },
      { id: `${keyBase}_water`, label: "Water + electrolytes" },
      { id: `${keyBase}_supps`, label: "Omega-3 + Creatine" },
      {
        id: `${keyBase}_workout`,
        label: workouts[p.workout] ? `${p.workout} workout done` : "Movement / walk / mobility",
      },
    ];

    const box = $("checks");
    box.innerHTML = "";
    items.forEach((it) => {
      const row = document.createElement("div");
      row.className = "check";
      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.checked = !!checks[it.id];
      cb.addEventListener("change", () => {
        const c = loadChecks();
        c[it.id] = cb.checked;
        saveChecks(c);
      });
      const txt = document.createElement("div");
      txt.className = "txt";
      txt.innerHTML = `<div>${it.label}</div><div class="small">${
        p.tag === "T" ? "Training day carbs OK" : "Lower carbs / keep protein high"
      }</div>`;
      row.appendChild(cb);
      row.appendChild(txt);
      box.appendChild(row);
    });
  }

  function initStartDate() {
    const input = $("startDate");
    const stored = localStorage.getItem(LS.start);
    if (stored) input.value = stored;
    input.addEventListener("change", () => {
      if (input.value) {
        setStartDate(input.value);
        currentDayIndex = computeTodayIndex();
        renderDay();
        setStatus("Start date saved.");
      }
    });
  }

  function saveProgressEntry() {
    const weight = $("weight").value ? parseFloat($("weight").value) : "";
    const waist = $("waist").value ? parseFloat($("waist").value) : "";
    const notes = $("notes").value || "";
    if (weight === "" && waist === "" && notes.trim() === "") {
      setStatus("Add weight, waist, or notes first.");
      return;
    }
    const p = plan[currentDayIndex];
    const start = getStartDate();
    const date = start
      ? new Date(start.getTime() + (p.day - 1) * 24 * 60 * 60 * 1000).toISOString().slice(0, 10)
      : new Date().toISOString().slice(0, 10);

    const arr = loadProgress();
    arr.push({ date, day: p.day, weight, waist, notes });
    saveProgress(arr);

    $("notes").value = "";
    setStatus("Progress saved.");
    renderHistory();
    renderCharts();
  }

  function exportProgressCSV() {
    const arr = loadProgress();
    const header = ["date", "day", "weight_lb", "waist_in", "notes"];
    const rows = arr.map((x) => [
      x.date,
      x.day,
      x.weight ?? "",
      x.waist ?? "",
      (x.notes || "").replaceAll('"', '""'),
    ]);
    const csv = [header.join(","), ...rows.map((r) => `${r[0]},${r[1]},${r[2]},${r[3]},"${r[4]}"`)].join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "antonio_progress.csv";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  function renderHistory() {
    const body = $("historyBody");
    if (!body) return;

    const arr = loadProgress().slice().reverse(); // most recent first
    if (arr.length === 0) {
      body.innerHTML = `<tr><td colspan="4" style="padding:10px; color:var(--muted);">No entries yet. Use “Save entry” to start tracking.</td></tr>`;
      return;
    }

    const rows = arr.slice(0, 30).map((x) => {
      const w = x.weight === "" || x.weight == null ? "" : `${x.weight} lb`;
      const wa = x.waist === "" || x.waist == null ? "" : `${x.waist} in`;
      return `
        <tr>
            <td style="padding:8px; border-bottom:1px solid rgba(36,49,79,.35);">${x.date}</td>
            <td style="padding:8px; border-bottom:1px solid rgba(36,49,79,.35);">${x.day}</td>
            <td style="padding:8px; border-bottom:1px solid rgba(36,49,79,.35);">${w}</td>
            <td style="padding:8px; border-bottom:1px solid rgba(36,49,79,.35);">${wa}</td>
        </tr>
      `;
    }).join("");

    body.innerHTML = rows;
  }

  let weightChart = null;
  let waistChart = null;

  function renderCharts() {
    const statusEl = document.getElementById("chartsStatus");
    if (statusEl) statusEl.textContent = "";

    if (typeof Chart === "undefined") {
      if (statusEl) statusEl.textContent = "Charts unavailable (Chart.js failed to load). Try refreshing.";
      return;
    }

    const entries = loadProgress().slice(); // oldest -> newest
    const points = entries
      .filter((x) => x && (x.weight !== "" || x.waist !== ""))
      .map((x) => ({
        date: x.date,
        weight: x.weight === "" || x.weight == null ? null : Number(x.weight),
        waist: x.waist === "" || x.waist == null ? null : Number(x.waist),
      }));

    const wCanvas = document.getElementById("weightChart");
    const waCanvas = document.getElementById("waistChart");
    if (!wCanvas || !waCanvas) return;

    if (points.length === 0) {
      if (weightChart) weightChart.destroy();
      if (waistChart) waistChart.destroy();
      weightChart = null;
      waistChart = null;
      if (statusEl) statusEl.textContent = "No measurements yet. Save a weight and/or waist entry to see charts.";
      return;
    }

    const labels = points.map((p) => p.date);
    const wData = points.map((p) => p.weight);
    const waData = points.map((p) => p.waist);

    if (weightChart) weightChart.destroy();
    if (waistChart) waistChart.destroy();

    const commonOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { color: "rgba(36,49,79,.25)" } },
        y: { grid: { color: "rgba(36,49,79,.25)" } },
      },
    };

    weightChart = new Chart(wCanvas.getContext("2d"), {
      type: "line",
      data: { labels, datasets: [{ data: wData, borderWidth: 2, tension: 0.3 }] },
      options: {
        ...commonOptions,
        plugins: { ...commonOptions.plugins, title: { display: true, text: "Weight (lb)" } },
      },
    });

    waistChart = new Chart(waCanvas.getContext("2d"), {
      type: "line",
      data: { labels, datasets: [{ data: waData, borderWidth: 2, tension: 0.3 }] },
      options: {
        ...commonOptions,
        plugins: { ...commonOptions.plugins, title: { display: true, text: "Waist (in)" } },
      },
    });
  }

  function resetAll() {
    if (!confirm("This clears your saved checklists, progress, and start date. Continue?")) return;
    localStorage.removeItem(LS.start);
    localStorage.removeItem(LS.checks);
    localStorage.removeItem(LS.progress);
    $("startDate").value = "";
    currentDayIndex = 0;
    renderDay();
    setStatus("Reset complete.");
    renderHistory();
    renderCharts();
  }

  // ---------- Init ----------
  initDayPicker();
  initStartDate();

  $("prevBtn").addEventListener("click", () => {
    currentDayIndex = Math.max(0, currentDayIndex - 1);
    renderDay();
  });
  $("nextBtn").addEventListener("click", () => {
    currentDayIndex = Math.min(13, currentDayIndex + 1);
    renderDay();
  });
  $("todayBtn").addEventListener("click", () => {
    currentDayIndex = computeTodayIndex();
    renderDay();
  });

  $("saveProgress").addEventListener("click", saveProgressEntry);
  $("exportProgress").addEventListener("click", exportProgressCSV);
  $("resetAll").addEventListener("click", resetAll);

  // Default to today's day if start date is set; otherwise Day 1
  currentDayIndex = computeTodayIndex();
  renderDay();
  renderHistory();
  renderCharts();
})();