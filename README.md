# CrimeLens AI

> **"Beyond Detection. Towards Investigation."**

[![MIT License](https://img.shields.io/badge/License-MIT-amber.svg)](LICENSE)
[![Build](https://img.shields.io/badge/Build-Passing-green.svg)](#)
[![Tests](https://img.shields.io/badge/Tests-15%2F15%20Passing-green.svg)](#)
[![React](https://img.shields.io/badge/React-18-blue.svg)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue.svg)](#)

CrimeLens AI is an AI-powered **visual crime investigation decision-support platform** that helps forensic analysts, detectives, and security teams move beyond basic object detection into genuine multi-evidence reasoning. Instead of handing investigators a single AI verdict, it generates exactly **three competing hypothetical scenarios** and ranks them transparently based on the strength of the collected physical evidence.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Problem Statement](#2-problem-statement)
3. [Proposed Solution](#3-proposed-solution)
4. [Key Features](#4-key-features)
5. [How It Works — Six-Stage Workflow](#5-how-it-works--six-stage-workflow)
6. [Technology Stack](#6-technology-stack)
7. [Project Structure](#7-project-structure)
8. [Prerequisites](#8-prerequisites)
9. [Installation](#9-installation)
10. [Environment Variables](#10-environment-variables)
11. [Available Scripts](#11-available-scripts)
12. [Exploring the Sample Investigation](#12-exploring-the-sample-investigation)
13. [Using CrimeLens AI](#13-using-crimelens-ai)
14. [Three-Scenario Analysis Explained](#14-three-scenario-analysis-explained)
15. [Screenshots](#15-screenshots)
16. [Testing](#16-testing)
17. [Known Limitations](#17-known-limitations)
18. [Privacy and Responsible Use](#18-privacy-and-responsible-use)
19. [Future Improvements](#19-future-improvements)
20. [Contributing](#20-contributing)
21. [License](#21-license)
22. [Contact](#22-contact)

---

## 1. Project Overview

CrimeLens AI is a browser-based forensic investigation workspace. It lets analysts upload crime-scene images, annotate physical clues, draw connections between pieces of evidence, and then evaluate three different possible explanations for what happened — all without sending any data to an external server.

The central insight is that responsible forensic analysis should **never collapse prematurely to a single conclusion**. By comparing three scenarios side by side, CrimeLens AI helps investigators identify what evidence supports each theory, what contradicts it, and what follow-up work is needed to distinguish the possibilities.

**Repository:** https://github.com/Nithinvishnu24/CrimeLens_AI

---

## 2. Problem Statement

Forensic investigators and security analysts regularly face these challenges:

| Problem | Impact |
|---|---|
| Manually reviewing large volumes of visual evidence | Hours of work; analyst fatigue |
| Small details and anomalies missed in dense scenes | Critical clues overlooked |
| Object detection tools that label objects but ignore context | No understanding of what the scene means |
| Difficulty linking multiple clues into a coherent picture | Evidence silos; no relational view |
| Pressure to reach a single quick conclusion | Confirmation bias; premature verdicts |
| No record of which findings are facts vs. assumptions | Weak courtroom testimony |

---

## 3. Proposed Solution

CrimeLens AI addresses each of these problems through a structured, six-stage workflow:

- **Systematic capture** of scene imagery with zone metadata.
- **Annotated clue detection** (simulated detection overlays + manual analyst pins).
- **Relational graph** connecting clues with strict source labelling (observed fact / analyst-provided / hypothesis).
- **Dynamic evidence ingestion** — new forensic findings update all downstream analysis.
- **Three competing scenarios** generated from the evidence graph, each with supporting clues, contradictions, required assumptions, and a transparent scoring formula.
- **Printable court-ready report** preserving the full audit trail.

The system runs entirely in the browser. No evidence is uploaded to any cloud service.

---

## 4. Key Features

### Tri-Hypothesis Forensic Framework
The core differentiator. For every case, CrimeLens AI simultaneously evaluates **three distinct event hypotheses** rather than committing to one. Each scenario card shows:
- A narrative reconstruction of events.
- Every supporting physical clue.
- Every contradicting or anomalous clue.
- The required assumptions.
- A transparent **Relative Evidence Support Index** with its formula.
- Actionable follow-up checks to scientifically discriminate between scenarios.

### High-Resolution Visual Evidence Canvas
- Interactive scene images with pan and zoom (75 % – 350 %).
- Numbered evidence placards (#1, #2, #3 …) and bounding boxes overlaid on images.
- **Manual Pin Drop Mode** — click anywhere on an image to place a new clue marker at exact coordinates.
- Bidirectional selection — clicking a pin highlights the side-panel record and vice versa.

### Evidence Relational Graph
- Visual node-and-edge graph or structured table view (responsive).
- Three relationship natures: **Observed Fact** (solid green), **Analyst Provided** (dashed blue), **Inferred Hypothesis** (dotted amber).
- Five relational types: Mechanical Impact, Spatial Proximity, Temporal Sequence, Material Consistency, Inferred Causality.

### Dynamic Reanalysis Engine
- Introduce lab reports, witness statements, digital logs, or assumption corrections at any stage.
- Scores update immediately and delta changes are recorded (e.g. `Scenario A: +14%`).
- Full version history with audit trail (`v1.0`, `v1.1`, …).

### Printable Case Report
- Clean white-paper layout for printing or saving as PDF.
- Includes case metadata, evidence inventory table, scene image exhibits, relational matrix, three-scenario evaluation, follow-up checklist, and analyst sign-off.
- JSON export of the full case record.

### Local-First Privacy
- All data stored in the browser (LocalStorage + IndexedDB).
- No images or case notes leave the device.
- Zero external API calls required for core functionality.

### Responsible-Use Design
- No facial recognition or biometric processing.
- Simulated detections and scores are explicitly labelled throughout.
- Strict separation of observed facts, analyst-provided data, and inferred hypotheses.

---

## 5. How It Works — Six-Stage Workflow

```
Capture → Detect → Connect → Add Evidence → Generate 3 Scenarios → Rank
```

| Stage | Name | What Happens |
|---|---|---|
| 01 | **Capture** | Register case metadata and upload crime-scene images (JPG, PNG, WEBP). |
| 02 | **Detect** | Review simulated clue overlays; add manual pins; triage evidence as Confirmed / Unverified / Dismissed. |
| 03 | **Connect** | Build the evidence relational graph, classifying each link as Observed, Analyst-Provided, or Inferred. |
| 04 | **Add Evidence** | Ingest follow-up findings (lab reports, witness statements, digital records) that update the clue set. |
| 05 | **Three Scenarios** | The rule-weighted engine evaluates three scenarios from the evidence graph with transparent scoring. |
| 06 | **Rank** | Compare scenarios side by side; the highest-scoring scenario is labelled "Leading Support" (never "confirmed"). |

---

## 6. Technology Stack

| Category | Technology | Version |
|---|---|---|
| UI Framework | React | 18.3 |
| Language | TypeScript | 5.7 |
| Build Tool | Vite | 6.x |
| Styling | Tailwind CSS | 3.4 |
| Icons | Lucide React | 1.16 |
| Data Visualization | Recharts | 2.15 |
| Persistence | Browser LocalStorage + IndexedDB | — |
| Testing | Vitest | 5.0 |
| Package Manager | npm | 10+ |

No backend framework, database, or external API is used in the current implementation.

---

## 7. Project Structure

```
CrimeLens AI/
├── dist/                        # Production build output (git-ignored)
├── docs/
│   ├── ARCHITECTURE.md          # System architecture and Mermaid diagrams
│   ├── SAMPLE_DATA.md           # How to use the demo dataset
│   └── TESTING.md               # Testing guide and instructions
├── sample-data/
│   ├── sample-case.json         # Fictional demo case metadata
│   ├── sample-evidence.json     # Demo clues and relationships
│   └── sample-scenarios.json    # Three hypothetical scenario definitions
├── src/
│   ├── components/
│   │   ├── DisclosureModal.tsx  # Forensic ethics & system disclosure overlay
│   │   ├── Navbar.tsx           # Top navigation with case switcher
│   │   ├── Sidebar.tsx          # Navigation sidebar (desktop fixed / mobile drawer)
│   │   └── ToastContainer.tsx   # Toast notification system
│   ├── context/
│   │   └── InvestigationContext.tsx  # Global state + all case/clue/scenario actions
│   ├── data/
│   │   ├── demoCase.ts          # Pre-built fictional sample investigation CL-2026-089
│   │   └── forensicImages.ts    # High-fidelity SVG forensic scene schematics
│   ├── test/
│   │   └── investigation.test.ts  # 15-scenario Vitest unit test suite
│   ├── types/
│   │   └── investigation.ts     # All TypeScript interfaces and type definitions
│   ├── utils/
│   │   ├── scenarioEngine.ts    # Rule-weighted scenario evaluation engine
│   │   └── storage.ts           # LocalStorage + IndexedDB persistence helpers
│   ├── views/
│   │   ├── AnalysisView.tsx     # Visual evidence canvas and clue triage workspace
│   │   ├── CaptureView.tsx      # Case creation and image upload
│   │   ├── DashboardView.tsx    # Investigation portfolio and case list
│   │   ├── GraphView.tsx        # Evidence relational graph
│   │   ├── ReanalyseView.tsx    # Post-analysis evidence ingestion and delta tracking
│   │   ├── ReportView.tsx       # Printable case report
│   │   └── ScenariosView.tsx    # Three-scenario comparison view
│   ├── App.tsx                  # Root component and layout
│   ├── index.css                # Tailwind directives and print/scrollbar styles
│   └── main.tsx                 # React entry point
├── .env.example                 # Safe environment variable template
├── .gitignore
├── index.html                   # Vite HTML entry point
├── LICENSE                      # MIT License
├── package.json
├── postcss.config.js
├── README.md                    # This file
├── tailwind.config.js
├── tsconfig.json
├── vitest.config.ts             # Vitest configuration (separate from vite.config.js)
└── vite.config.js               # Vite dev/build configuration
```

---

## 8. Prerequisites

| Requirement | Minimum Version | Check Command |
|---|---|---|
| Node.js | 18.x | `node -v` |
| npm | 9.x | `npm -v` |
| Modern browser | Chrome 110+, Firefox 112+, Edge 110+, Safari 16.4+ | — |

No global installations (Vite, TypeScript) are required — the project uses local dev dependencies.

---

## 9. Installation

### Windows, macOS, and Linux

```bash
# 1. Clone the repository
git clone https://github.com/Nithinvishnu24/CrimeLens_AI.git

# 2. Move into the project directory
cd CrimeLens_AI

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open **http://localhost:3000** in your browser.

> **Note for Windows users:** If you see an `EPERM` error related to `node_modules\.vite-temp` when running commands from a restricted shell, run the command with administrator privileges or use a separate terminal.

---

## 10. Environment Variables

CrimeLens AI works with no environment configuration. All forensic analysis runs offline using built-in heuristics.

If you want to adjust developer settings, copy the example file:

```bash
cp .env.example .env
```

| Variable | Default | Purpose |
|---|---|---|
| `VITE_PORT` | `3000` | Local dev server port |
| `VITE_APP_ENV` | `development` | Application environment |
| `VITE_SIMULATED_ANALYSIS_LATENCY_MS` | `800` | Simulated processing delay (ms) |
| `VITE_ENABLE_VERBOSE_LOGS` | `false` | Enable console debug output |

The external vision API variables in `.env.example` are **placeholders for future integrations** and are not used in the current build.

---

## 11. Available Scripts

```bash
# Start development server at http://localhost:3000
npm run dev

# Run all 15 unit tests once
npm test

# Run tests in watch mode (re-runs on file change)
npm run test:watch

# Type-check and build production bundle into dist/
npm run build

# Preview the production build locally
npm run preview
```

---

## 12. Exploring the Sample Investigation

When you open CrimeLens AI for the first time, a fictional sample investigation is automatically loaded:

> **Demo Case CL-2026-089 — Apex Logistics Distribution Center Vault Room Disturbance**

This case includes:
- **3 scene images** (rendered as crisp SVG schematics): exterior window sill, access corridor, and vault locker room.
- **6 physical clues**: inward glass fracture, dual 18 mm mullion tool impressions, displaced chair in CCTV blind spot, dropped contractor RFID badge, pried vault deadbolt hasp, and Vibram lug footwear impression in construction dust.
- **5 evidence relationships** spanning mechanical impact, spatial proximity, temporal sequence, material consistency, and inferred causality.
- **3 competing scenarios** with pre-scored evidence support indices.
- **1 analysis history record** showing the baseline evaluation.

Use this case to explore every workflow stage without creating any data yourself.

To reset the sample at any time, click **Reset Demo** in the top navigation bar or in the dashboard.

---

## 13. Using CrimeLens AI

### Creating a New Case
1. Click **New Investigation** on the dashboard.
2. Fill in the case title, reference ID (or click **Auto-Generate**), incident date and time, location, and lead investigator.
3. Write a brief incident summary.
4. Upload images (JPG, PNG, WEBP; max 20 MB each) or click **Load 3 Forensic Sample Scenes** to use the built-in demo images.
5. Add a zone label and optional notes to each image.
6. Click **Proceed to Visual Evidence Analysis**.

### Uploading and Managing Images
- Drag files onto the upload zone or click to open the file picker.
- Files must be JPG, PNG, or WEBP and under 20 MB.
- SVG images are also accepted (the demo scenes use SVG).
- Remove an image by clicking the trash icon on its thumbnail before submitting.

### Adding and Managing Evidence
1. Open **Visual Clue Analysis** from the sidebar.
2. Click **Add Pin** to activate Pin Drop Mode, then click anywhere on the scene image.
3. Fill in the clue title, category (e.g. Tool Mark, Impression), measurements, and analyst notes.
4. Set the verification status: **Confirmed** (green), **Unverified** (amber), or **Dismissed** (grey).
5. Edit any clue by clicking it in the side panel and modifying its text fields.
6. Delete a clue by clicking the trash icon on its panel card.

### Connecting Evidence
1. Open **Evidence Graph** from the sidebar.
2. Select a **Source Clue** and a **Target Clue** from the dropdowns.
3. Choose a relational type (Mechanical Impact, Spatial Proximity, etc.).
4. Choose the evidentiary nature: **Observed**, **Analyst Provided**, or **Inferred**.
5. Write a short rationale and set the confidence strength (1 – 5).
6. Click **Map Relationship Edge**.
7. Edit or delete connections from the card list beneath the graph.

### Generating Three Scenarios
Open **Three Scenarios** from the sidebar. The scoring engine runs automatically. Click **Recalculate Scores** after making any evidence changes to refresh the index.

### Adding Evidence After the Initial Analysis
1. Open **Add & Reanalyse** from the sidebar.
2. Use one of the **Quick Demonstration Events** for instant one-click scenario shifts, or fill in the **Log New Investigative Finding** form.
3. Select which existing clue is affected and what its new verification status should be.
4. Click **Ingest Finding & Recalculate Three Scenarios**.
5. The **Audit History** panel on the right records the version, timestamp, scores, and delta summary.

### Exporting a Report
1. Open **Case Report** from the sidebar.
2. Edit the **Lead Investigator Evaluative Conclusions** text field if needed.
3. Click **Print / Save as PDF** to open the browser print dialog (select "Save as PDF" as the destination).
4. Click **Export Case JSON** to download the complete case record as a JSON file.

---

## 14. Three-Scenario Analysis Explained

### How Scores Are Calculated

The scoring engine (`src/utils/scenarioEngine.ts`) uses a rule-weighted formula:

```
Relative Support Index = Support Base + Relationship Coherence – Contradiction Penalty
```

| Component | How It Is Calculated |
|---|---|
| **Support Base** | Each confirmed supporting clue contributes up to 16 points (scaled by its confidence %). Unverified clues contribute up to 7 points. Dismissed clues reduce the score by 12. |
| **Relationship Coherence** | When two supporting clues are connected by an observed-fact relationship, extra points are added proportional to the relationship strength (1–5). Analyst-provided links add slightly less; inferred links add the least. |
| **Contradiction Penalty** | Each confirmed conflicting clue deducts up to 18 points. Dismissed conflicting clues give a small relief bonus. |

All scores are clamped between **8 % and 92 %** — never 0 % or 100 % — because forensic reasoning never reaches absolute certainty from physical evidence alone.

### How to Read the Scores

| Score Range | Label | Meaning |
|---|---|---|
| 65 – 92 % | **Leading Support** | This scenario has the strongest corroboration from confirmed physical evidence in the current clue set. |
| 45 – 64 % | **Moderate Support** | Plausible but requiring either more evidence or resolution of identified contradictions. |
| 25 – 44 % | **Constrained** | Significant physical contradictions limit this theory's current viability. |
| 8 – 24 % | **Low Support** | Very little confirmed evidence supports this explanation. |

> **Important:** A "Leading Support" score does **not** mean the scenario is true. It means the available confirmed physical evidence currently weighs more in its favour. Scores change when new evidence is introduced.

---

## 15. Screenshots

*Screenshots are to be added. To add them, place PNG files in `docs/screenshots/` and update the paths below.*

| View | Screenshot |
|---|---|
| Investigation Desk (Dashboard) | `docs/screenshots/dashboard.png` |
| Evidence Capture | `docs/screenshots/capture.png` |
| Visual Clue Analysis Canvas | `docs/screenshots/analysis.png` |
| Evidence Relational Graph | `docs/screenshots/graph.png` |
| Three-Scenario Comparison | `docs/screenshots/scenarios.png` |
| Add & Reanalyse | `docs/screenshots/reanalyse.png` |
| Printable Case Report | `docs/screenshots/report.png` |

---

## 16. Testing

See [`docs/TESTING.md`](docs/TESTING.md) for the complete testing guide.

Quick start:

```bash
# Run the 15-test unit suite
npm test

# Expected output:
# ✓ src/test/investigation.test.ts (15 tests) 18ms
# Test Files  1 passed (1)
#      Tests  15 passed (15)
```

---

## 17. Known Limitations

- **No real computer-vision model.** All detections in the demo case are hand-authored. The system does not currently run any neural network on uploaded images. This is explicitly labelled throughout the UI as "Simulated Analysis."
- **LocalStorage size limit.** Browsers limit LocalStorage to roughly 5–10 MB. Very large base64-encoded images may exceed this. The app uses IndexedDB for heavy image data where possible, but users uploading dozens of high-resolution RAW-converted images may hit limits.
- **Single user, single device.** There is no backend, so cases cannot be shared between users or devices without exporting the JSON and reimporting manually.
- **No real-time collaboration.** Multiple analysts cannot work on the same case simultaneously.
- **No authentication.** All case data is visible to anyone with access to the browser and the device.
- **Scenario scoring is rule-based.** The confidence index uses forensic domain heuristics, not a trained statistical model. It is a reasoning aid, not a probability estimate.

---

## 18. Privacy and Responsible Use

- **No data leaves your device.** Images, clues, and case records are stored only in your browser's LocalStorage and IndexedDB.
- **No facial recognition.** The platform does not perform biometric processing of any kind.
- **No automated guilt determination.** Scenario scores are decision-support indices. They do not determine guilt, criminal intent, or legal liability.
- **Separation of facts and hypotheses.** The system enforces a strict distinction between observed physical evidence, analyst-provided data, and inferred hypotheses at every step.
- **Demo data is fictional.** The built-in sample case (CL-2026-089) uses entirely invented names, locations, and events. It does not reference any real incident, victim, or suspect.
- **Simulated analysis is labelled.** Every score, detection, and scenario generated by the offline heuristic engine is identified as "Simulated Analysis" in the UI.

CrimeLens AI is a forensic **decision-support prototype**. It is not a certified forensic system and should not be used as the sole basis for any legal or enforcement action.

---

## 19. Future Improvements

- **Real vision API integration.** Connect an optional external vision model (e.g. Google Cloud Vision, Azure Computer Vision) for actual object detection on uploaded images when an API key is configured.
- **Backend and multi-user support.** A lightweight Node.js or Python backend for case sharing across analysts.
- **Authentication.** Role-based access for investigators, supervisors, and read-only reviewers.
- **Map integration.** Link incident locations to a map view for geographic analysis.
- **Evidence chain of custody.** Digital signing of evidence records for court submission.
- **Export to DOCX / PDF directly.** Generate formatted reports without relying on the browser print dialog.
- **Video frame analysis.** Extract keyframes from CCTV footage for annotation.

---

## 20. Contributing

Contributions are welcome for bug fixes, documentation improvements, and new features.

```bash
# 1. Fork the repository on GitHub
# 2. Clone your fork
git clone https://github.com/YOUR_USERNAME/CrimeLens_AI.git
cd CrimeLens_AI

# 3. Create a feature branch
git checkout -b feature/your-feature-name

# 4. Make your changes and run the test suite
npm test

# 5. Commit with a descriptive message
git commit -m "feat: add timeline visualization to scenario cards"

# 6. Push and open a pull request
git push origin feature/your-feature-name
```

**Guidelines:**
- Keep pull requests focused on a single concern.
- Add or update tests for any logic changes in `src/utils/` or `src/context/`.
- Do not add external API calls that would break the offline-first design without making them clearly optional via environment variables.
- Do not include real case data, personal information, or genuine police records.

---

## 21. License

This project is licensed under the [MIT License](LICENSE).

```
MIT License

Copyright (c) 2026 Nithinvishnu V L

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

See [LICENSE](LICENSE) for the full legal text.

---

## 22. Contact

| Detail | Value |
|---|---|
| **Author** | Nithinvishnu V L |
| **Email** | sec25ad235@sairamtap.edu.in |
| **GitHub** | https://github.com/Nithinvishnu24 |
| **Repository** | https://github.com/Nithinvishnu24/CrimeLens_AI |

---

*CrimeLens AI is an academic and hackathon prototype. It is not a certified forensic product. All sample investigation data is entirely fictional.*
