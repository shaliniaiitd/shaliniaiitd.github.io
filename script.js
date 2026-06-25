Now the JavaScript with project case study data and modal logic:
Action: file_editor create /tmp/portfolio/script.js --file-text "/* =========================================================
   Shalini Agarwal — Portfolio JS
   - Header scroll state
   - Mobile menu
   - Reveal on scroll (IntersectionObserver)
   - Employer / project modal popouts
   ========================================================= */

(function () {
  \"use strict\";

  /* ---------- Project Case Studies ---------- */
  const projects = {
    teksystems: {
      employer: \"TekSystems · ScienceLogic\",
      year: \"2025 — Present\",
      role: \"Lead SDET\",
      title: \"Schema-Agnostic API & Data Validation Framework\",
      summary:
        \"Architected a Pytest-first data validation framework for ScienceLogic's SL1 platform that adapts to evolving telemetry schemas without rewriting tests — every check is configuration-driven and reproducible across environments.\",
      challenge: [
        \"Telemetry schemas from hundreds of monitored devices change frequently, breaking brittle, hand-coded assertions.\",
        \"Validations needed live access to ClickHouse via SSH-tunneled connections with secure credentials.\",
        \"Test outputs needed to map cleanly into XRAY + Jira for an enterprise QA process.\"
      ],
      approach: [
        \"Designed factory fixtures that load JSON schema contracts at runtime, so adding a new device or metric is a config change.\",
        \"Built reusable ClickHouse + SSH connection layer with per-environment credential handling via env vars and vault.\",
        \"Wired Allure + XRAY reporting so every Pytest run produces traceable evidence for compliance and release sign-off.\"
      ],
      stack: [\"Python\", \"Pytest\", \"ClickHouse\", \"Paramiko/SSH\", \"Allure\", \"XRAY\", \"Jira\", \"JSON Schema\"],
      metrics: [
        { num: \"100%\", lbl: \"schema coverage across new device types\" },
        { num: \"0 rewrites\", lbl: \"when telemetry contracts evolve\" },
        { num: \"1-click\", lbl: \"Allure + XRAY traceability per release\" }
      ],
      links: [
        { label: \"ScienceLogic SL1\", href: \"https://sciencelogic.com\", primary: true },
        { label: \"GitHub Profile ↗\", href: \"https://github.com/shaliniaiitd\" }
      ]
    },

    ness: {
      employer: \"Ness Digital Engineering · S&P Global\",
      year: \"2024 — 2025\",
      role: \"Engineering Lead\",
      title: \"RMBS Multi-Service QA Programme\",
      summary:
        \"Led end-to-end QA for S&P Global's RMBS (Residential Mortgage-Backed Securities) workflow — multiple back-end services, an analyst-facing UI, and orchestration across teams. UI + API + integration coverage, plus UAT support to ship on time.\",
      challenge: [
        \"Tightly coupled microservices with shared state — bugs surfaced only in long, multi-step analyst journeys.\",
        \"Manual regression had become a release bottleneck; analysts demanded zero-defect production releases.\",
        \"QA needed to live inside Azure DevOps test plans for auditability.\"
      ],
      approach: [
        \"Built Selenium + Pytest UI automation for analyst journeys with page-object discipline and data-driven scenarios.\",
        \"Layered API tests (Requests + Pytest) to catch integration breakage before the UI is even touched.\",
        \"Synchronised test cases, results and traceability into Azure DevOps to give product + leadership a single source of truth.\",
        \"Owned UAT cycles end-to-end — defect triage, root-cause analysis, sign-off coordination.\"
      ],
      stack: [\"Selenium\", \"Pytest\", \"Requests\", \"Python\", \"Azure DevOps\", \"REST APIs\", \"RMBS Domain\"],
      metrics: [
        { num: \"Multi-service\", lbl: \"RMBS workflow end-to-end coverage\" },
        { num: \"↓ Cycle Time\", lbl: \"regression collapsed into CI runs\" },
        { num: \"Zero\", lbl: \"blocker defects shipped to prod\" }
      ],
      links: [
        { label: \"S&P Global\", href: \"https://www.spglobal.com\", primary: true },
        { label: \"LinkedIn ↗\", href: \"https://www.linkedin.com/in/shalini-agarwal-5a680461/\" }
      ]
    },

    epam: {
      employer: \"EPAM Systems · Altrata & Uber\",
      year: \"2023 — 2024\",
      role: \"Senior Test Automation Engineer\",
      title: \"Big-Data Validation + LLM Evaluation\",
      summary:
        \"Two flagship streams at EPAM: (1) validating a 300M+ record migration for Altrata's data platform with PySpark and contract-first schema checks, and (2) designing LLM prompt-evaluation rubrics for Uber's GenAI initiatives. Recognized as 'a powerhouse who energizes the team.'\",
      challenge: [
        \"Migrating 300M+ records across heterogeneous sources — schemas drifting on both ends.\",
        \"Need to detect missing rows, value mismatches and contract violations at scale.\",
        \"On the GenAI side: how do you objectively grade an LLM response? Prompts changed weekly.\"
      ],
      approach: [
        \"Wrote PySpark validation jobs that ran on Databricks, comparing source vs target by aggregate checksums, partition hashing and surgical row-level diffs only where partitions broke.\",
        \"Layered Great-Expectations-style schema contracts in Git so business rules became code review artefacts.\",
        \"Orchestrated validation runs through Airflow with email + Slack alerting on contract violation.\",
        \"For GenAI: authored evaluation rubrics scoring prompt clarity, accuracy, context, safety, hallucination risk, consistency and comparative LLM response quality — published as internal QA gates.\"
      ],
      stack: [\"PySpark\", \"Databricks\", \"AWS Glue/S3/Athena\", \"Airflow\", \"Python\", \"OpenAI API\", \"LangChain\", \"Chispa\"],
      metrics: [
        { num: \"300M+\", lbl: \"records validated end-to-end\" },
        { num: \"9\", lbl: \"pipelines unified on contract-first FW\" },
        { num: \"★ Recognition\", lbl: \"EPAM appreciation badges\" }
      ],
      links: [
        { label: \"Altrata\", href: \"https://altrata.com\", primary: true },
        { label: \"Uber\", href: \"https://www.uber.com\" },
        { label: \"GitHub ↗\", href: \"https://github.com/shaliniaiitd\" }
      ]
    },

    vtest: {
      employer: \"VTest Software · Sentient.io\",
      year: \"2022 — 2023\",
      role: \"Consultant\",
      title: \"BDD Regression Framework for a Multilingual AI Portal\",
      summary:
        \"Designed and delivered a Behave + Selenium framework for Sentient.io's multilingual AI portal — 100+ web services, cross-device coverage, and an automated dead-link / localization watch tower.\",
      challenge: [
        \"Portal served 5+ languages; UI strings, RTL layouts and CTAs had to stay valid across regional rollouts.\",
        \"100+ web services and partner integrations meant link rot and broken endpoints were a constant risk.\",
        \"Stakeholders were non-technical — they needed Gherkin scenarios to read like product specs.\"
      ],
      approach: [
        \"Built a Selenium POM + Behave framework with data-driven feature files that any PM could read.\",
        \"Added BrowserStack cross-device runs into the nightly pipeline for iOS, Android and major desktop browsers.\",
        \"Wrote a dead-link crawler integrated into the suite so 100+ external links were verified each run.\",
        \"Layered localization checks — Unicode integrity, RTL rendering, currency/date formats per locale.\"
      ],
      stack: [\"Selenium\", \"Behave (BDD)\", \"Python\", \"BrowserStack\", \"Gherkin\", \"Allure\", \"Robot Framework\"],
      metrics: [
        { num: \"100+\", lbl: \"web services covered by link integrity\" },
        { num: \"5+\", lbl: \"languages with localization validation\" },
        { num: \"Cross-device\", lbl: \"iOS, Android, desktop browsers\" }
      ],
      links: [
        { label: \"Sentient.io\", href: \"https://sentient.io\", primary: true },
        { label: \"LinkedIn ↗\", href: \"https://www.linkedin.com/in/shalini-agarwal-5a680461/\" }
      ]
    }
  };

  /* ---------- DOM refs ---------- */
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  const header = $(\".site-header\");
  const menuButton = $(\".menu-button\");
  const nav = $(\".nav\");
  const yearEl = $(\"#year\");

  const modal = $(\"#project-modal\");
  const modalArticle = modal && $(\".modal\", modal);
  const modalEmployer = $(\"#modal-employer\");
  const modalYear = $(\"#modal-year\");
  const modalRole = $(\"#modal-role\");
  const modalTitle = $(\"#modal-title\");
  const modalSummary = $(\"#modal-summary\");
  const modalChallenge = $(\"#modal-challenge\");
  const modalApproach = $(\"#modal-approach\");
  const modalStack = $(\"#modal-stack\");
  const modalMetrics = $(\"#modal-metrics\");
  const modalFooter = $(\"#modal-footer\");
  const modalClose = $(\".modal-close\", modal);

  /* ---------- Year ---------- */
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Header scroll state ---------- */
  const onScroll = () => {
    if (!header) return;
    header.classList.toggle(\"scrolled\", window.scrollY > 24);
  };
  window.addEventListener(\"scroll\", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  if (menuButton && nav) {
    menuButton.addEventListener(\"click\", () => {
      const isOpen = nav.classList.toggle(\"open\");
      menuButton.setAttribute(\"aria-expanded\", String(isOpen));
    });
    nav.addEventListener(\"click\", (e) => {
      if (e.target instanceof HTMLAnchorElement) {
        nav.classList.remove(\"open\");
        menuButton.setAttribute(\"aria-expanded\", \"false\");
      }
    });
  }

  /* ---------- Reveal on scroll ---------- */
  if (\"IntersectionObserver\" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(\"in\");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: \"0px 0px -8% 0px\" }
    );
    $$(\"[data-reveal]\").forEach((el) => io.observe(el));
  } else {
    $$(\"[data-reveal]\").forEach((el) => el.classList.add(\"in\"));
  }

  /* ---------- Modal ---------- */
  let lastFocused = null;

  function fillList(ul, items) {
    if (!ul) return;
    ul.innerHTML = \"\";
    items.forEach((item) => {
      const li = document.createElement(\"li\");
      li.textContent = item;
      ul.appendChild(li);
    });
  }

  function fillStack(container, items) {
    if (!container) return;
    container.innerHTML = \"\";
    items.forEach((t) => {
      const s = document.createElement(\"span\");
      s.textContent = t;
      container.appendChild(s);
    });
  }

  function fillMetrics(container, items) {
    if (!container) return;
    container.innerHTML = \"\";
    items.forEach((m) => {
      const wrap = document.createElement(\"div\");
      const num = document.createElement(\"span\");
      num.className = \"num\";
      num.textContent = m.num;
      const lbl = document.createElement(\"span\");
      lbl.className = \"lbl\";
      lbl.textContent = m.lbl;
      wrap.appendChild(num);
      wrap.appendChild(lbl);
      container.appendChild(wrap);
    });
  }

  function fillFooter(container, links) {
    if (!container) return;
    container.innerHTML = \"\";
    if (!links || !links.length) return;
    links.forEach((l) => {
      const a = document.createElement(\"a\");
      a.href = l.href;
      a.target = \"_blank\";
      a.rel = \"noopener\";
      a.className = \"button \" + (l.primary ? \"primary\" : \"ghost\");
      a.innerHTML = `${l.label} <span class=\"arrow\">→</span>`;
      container.appendChild(a);
    });
  }

  function openModal(key) {
    const data = projects[key];
    if (!data || !modal) return;

    lastFocused = document.activeElement;

    modalEmployer.textContent = data.employer;
    modalYear.textContent = \"· \" + data.year;
    modalRole.textContent = data.role;
    modalTitle.textContent = data.title;
    modalSummary.textContent = data.summary;
    fillList(modalChallenge, data.challenge);
    fillList(modalApproach, data.approach);
    fillStack(modalStack, data.stack);
    fillMetrics(modalMetrics, data.metrics);
    fillFooter(modalFooter, data.links);

    modal.classList.add(\"open\");
    document.body.style.overflow = \"hidden\";
    // a11y focus
    setTimeout(() => modalArticle && modalArticle.focus(), 60);

    // Highlight the matching project card (in case the user later scrolls)
    const card = document.querySelector(`#project-${key}`);
    if (card) {
      card.classList.remove(\"highlight\");
      // force reflow
      void card.offsetWidth;
      card.classList.add(\"highlight\");
    }
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove(\"open\");
    document.body.style.overflow = \"\";
    if (lastFocused && typeof lastFocused.focus === \"function\") {
      lastFocused.focus();
    }
  }

  // Bind triggers (timeline + project cards)
  $$(\"[data-project]\").forEach((el) => {
    el.addEventListener(\"click\", () => openModal(el.dataset.project));
    el.addEventListener(\"keydown\", (e) => {
      if (e.key === \"Enter\" || e.key === \" \") {
        e.preventDefault();
        openModal(el.dataset.project);
      }
    });
  });

  if (modalClose) modalClose.addEventListener(\"click\", closeModal);
  if (modal) {
    modal.addEventListener(\"click\", (e) => {
      if (e.target === modal) closeModal();
    });
  }
  document.addEventListener(\"keydown\", (e) => {
    if (e.key === \"Escape\" && modal && modal.classList.contains(\"open\")) closeModal();
  });

  /* ---------- Open via hash (e.g., #project-epam) ---------- */
  function handleHash() {
    const m = (location.hash || \"\").match(/^#project-(\w+)$/);
    if (m && projects[m[1]]) {
      openModal(m[1]);
    }
  }
  window.addEventListener(\"hashchange\", handleHash);
  handleHash();
})();
"
Observation: Overwrite successful: /tmp/portfolio/script.js
