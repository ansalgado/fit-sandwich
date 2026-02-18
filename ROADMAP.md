# Fit Sandwich Roadmap

## Planning assumptions
- Baseline quality gate exists and should pass every iteration: `npm run verify`.
- Scope is a static browser app with local-first data storage.
- Estimates are rough engineering effort for one developer.

## Milestone 0: Quality Baseline (Done)
Target: Completed before Iteration 1.

Stories
- [x] Add reusable test suite with Node test runner.
- [x] Add verification command (`npm run verify`) for syntax + tests.
- [x] Add CI workflow to run verification on push and PR.

Exit criteria
- `npm run verify` is green locally.
- GitHub Actions CI is green on default branch.

## Iteration 1: Stability and Data Integrity (1-2 days)
Goal: Prevent data mistakes and improve reliability of existing flows.

Stories
- [ ] I1-001: Progress upsert by day/date instead of duplicate append. (4h)
- [ ] I1-002: Add stricter validation and user-facing status messages for invalid entries. (2h)
- [ ] I1-003: Add delete controls for progress entries (single-row + delete latest). (4h)
- [ ] I1-004: Add regression tests for save/edit/delete progress behavior. (3h)
- [ ] I1-005: Add recovery behavior for malformed localStorage payloads. (2h)

Exit criteria
- No duplicate entries for the same day/date unless explicitly allowed.
- Users can remove mistaken entries without reset.
- New and existing tests pass in CI.

## Iteration 2: Insights and Usability (2-3 days)
Goal: Make progress trends clearer and daily completion easier to interpret.

Stories
- [ ] I2-001: Weekly averages for weight and waist. (4h)
- [ ] I2-002: 7-day trend delta indicators with clear labels. (3h)
- [ ] I2-003: Daily checklist completion percentage + visual status. (3h)
- [ ] I2-004: Handle day 15+ with explicit cycle behavior (loop/new cycle). (3h)
- [ ] I2-005: Improve chart legibility (colors, legends, tooltip formatting). (3h)
- [ ] I2-006: Add tests for trend calculations and cycle handling. (4h)

Exit criteria
- Dashboard shows trend metrics derived from saved entries.
- Day navigation behavior after day 14 is predictable and tested.
- CI remains fully green.

## Iteration 3: Personalization and Durability (3-5 days)
Goal: Reduce hardcoded content and improve long-term usage.

Stories
- [ ] I3-001: Settings UI for targets (calories/protein) and unit preferences. (6h)
- [ ] I3-002: Editable meal/workout templates persisted locally. (8h)
- [ ] I3-003: Import progress from CSV/JSON with validation and preview. (6h)
- [ ] I3-004: Service worker for offline caching of core assets. (5h)
- [ ] I3-005: Tests for settings persistence, import validation, and migration safety. (6h)

Exit criteria
- Users can customize key plan values from the UI.
- Export/import roundtrip works for typical data.
- App is usable offline after initial load.

## Cross-iteration release checklist
- [ ] `npm run verify` passes locally.
- [ ] CI passes on PR.
- [ ] Manual smoke test covers start date, day nav, save/edit/delete entry, export.
- [ ] Release notes updated with user-visible changes.

## Risks and mitigations
- Risk: LocalStorage schema drift can break old data.
Mitigation: Use explicit versioned schema and migration tests.

- Risk: Date handling can vary by timezone.
Mitigation: Keep date math at local midnight and cover with deterministic tests.

- Risk: UI growth can make `app.js` harder to maintain.
Mitigation: Continue extracting pure logic into `js/core.js` and test there first.
