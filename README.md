# Skill-Tree-Maker

RPG Skill Tree Maker

[![Skill Tree Maker](img/background/Skill%20Tree%20Maker%20Image.png)](https://www.rpgskilltreegenerator.com)

# Try it Free

[www.rpgskilltreegenerator.com](https://www.rpgskilltreegenerator.com)

# Feedback is Welcome

Feel free to join the Discord for feedback, feature requests, and support.
[Join the Discord](https://discord.gg/VQy45jAhFP)

# Quick Local Dev

Run a local server. No build step, no npm needed.

Works with any static file server, like VSCode Live Server extension.
Root directory should have index.html.

if you have npx and browser-sync:

`npx browser-sync start --server --files "index.html"`

# Tests

Using default playwright.

### Install Tests

`npm install`
then ` npx playwright install` to install browsers.

### Run Tests

`npx playwright test` to run tests.
make sure `http://127.0.0.1:5500/` is on when running tests.

###

`npx playwright show-report`

`npx playwright test --headed` to see browser ui.

# Open Contribution Ideas - Anyone can contribute

| Feature            | Implementation  | Test Status         |
| ------------------ | --------------- | ------------------- |
| Node Creation      | ✅ Complete     | ⚠️ Partial Coverage |
| Node Connection    | ✅ Complete     | ❌ Needs Tests      |
| Save/Load          | ✅ Complete     | ❌ Needs Tests      |
| Export JSON        | ✅ Complete     | ❌ Needs Tests      |
| Undo/Redo          | ✅ Complete     | ❌ Needs Tests      |
| Background Upload  | ✅ Complete     | ❌ Needs Tests      |
| Custom Skill Image | ✅ Complete     | ❌ Needs Tests      |
| Skill Stats        | ✅ Complete     | ❌ Needs Tests      |
| Background Image   | ✅ Complete     | ❌ Needs Tests      |
| Tree Merging       | ✅ Complete     | ❌ Needs Tests      |
| Prerequsite Skills | ✅ Complete     | ❌ Needs Tests      |
| Multi-Skill Select | ✅ Complete     | ❌ Needs Tests      |
| Multi-Skill Move   | ✅ Complete     | ❌ Needs Tests      |
| Multi-Skill Delete | ✅ Complete     | ❌ Needs Tests      |
| Multi-Skill Edit   | ✅ Complete     | ❌ Needs Tests      |
| Node Styling       | ⚠️ Not Finished | ❌ Needs Tests      |
| Active or Passive  | ⚠️ Not Finished | ❌ Needs Tests      |
| Zoom Scaling Fix   | ✅ Complete     | ❌ Needs Tests      |
| Grid System        | ✅ Complete     | ⚠️ Partial Coverage |
| Mobile Support     | ⚠️ Not Finished | ⚠️ Partial Coverage |

Legend:

- ✅ Complete/Full Coverage
- ⚠️ Not Finished/Partial Coverage
- ❌ Not Started/Needs Tests

# Happy to merge any PRs
