"use client";

import { useEffect, useMemo, useState } from "react";

type Lang = "id" | "en";

const content = {
  id: {
    nav: ["Profil", "Pengalaman", "Proyek", "Skill", "Kontak"],
    availability: "Bandung, Jawa Barat",
    role: "Software QA Engineer",
    eyebrow: "D-4 Teknik Informatika",
    headline: "Membangun kualitas produk lewat automation, API, dan performance testing.",
    summary:
      "Software QA Engineer dengan pengalaman lebih dari 3 tahun dalam automation testing, functional testing, API testing, dan performance testing. Terbiasa menyusun test case dari requirement, menjalankan negative case, memantau Kubernetes pods dan logs, serta bekerja dalam Agile/Scrum dengan Jira.",
    primaryCta: "Hubungi Saya",
    secondaryCta: "Unduh CV",
    stats: [
      ["3+", "Tahun pengalaman QA"],
      ["7+", "Project sistem nasional & enterprise"],
      ["2027", "Sertifikasi Software Analysis valid hingga"],
    ],
    sections: {
      experience: "Pengalaman",
      projects: "Proyek Pilihan",
      skills: "Keahlian",
      education: "Pendidikan & Sertifikasi",
      contact: "Kontak",
    },
    experience: [
      {
        title: "Software QA Engineer",
        company: "Torche Indonesia",
        period: "Agu 2022 - Sekarang",
        points: [
          "Mengembangkan dan menjalankan automation testing menggunakan Pytest dan Selenium.",
          "Menguji functional flow, negative case, API, dan performance menggunakan JMeter, K6, serta Gatling.",
          "Memantau Kubernetes pods dan logs untuk membantu menjaga stabilitas sistem.",
          "Berkolaborasi dalam Agile/Scrum dan mengelola task serta bug tracking menggunakan Jira.",
          "Menggunakan Codex sebagai AI coding assistant untuk pembuatan test script, debugging, analisis kode, dan workflow QA.",
        ],
      },
      {
        title: "IT Support Specialist Intern",
        company: "Kementerian Hukum dan HAM RI",
        period: "Mar 2019 - Des 2019",
        points: [
          "Melakukan troubleshooting perangkat keras, perangkat lunak, dan jaringan.",
          "Mengelola konfigurasi serta maintenance Mikrotik.",
          "Membantu pengembangan aplikasi pendaftaran kunjungan online.",
        ],
      },
    ],
    projects: [
      ["SDP", "Sistem Database Pemasyarakatan", "Automation testing dan pengujian fungsional pada modul utama sistem."],
      ["SIPPT - BSKJI", "Sistem Informasi Pelayanan Publik Terpadu", "End-to-end testing untuk memastikan alur layanan sesuai requirement."],
      ["MBG Dashboard", "Dashboard operasional", "Validasi fitur dashboard, alur data, dan output sistem."],
      ["MBG AI Chatbot", "AI Chatbot & Text-to-SQL", "Pengujian output chatbot dan hasil generate query."],
      ["SIPSN", "Sistem Informasi Pengelolaan Sampah Nasional", "Mendukung pengujian sistem dan validasi alur fungsional."],
      ["IKN Registration", "Sistem registrasi", "Testing alur pengguna pada sistem registrasi."],
      ["IKD", "Identitas Kependudukan Digital", "Pengujian fitur identitas digital dan validasi terkait."],
      [
        "PRODUCT",
        "Sistem Perencanaan Daerah Berbasis AI",
        "System analysis untuk requirement gathering, pemetaan proses bisnis, use case, role pengguna, dokumentasi fungsional, database design, dan validasi berbantuan AI atas dokumen perencanaan daerah.",
      ],
    ],
    skills: [
      ["Testing & QA", "Software Quality Assurance, Manual Testing, Functional Testing, Regression Testing, Smoke Testing, Sanity Testing, Integration Testing, End-to-End Testing, Exploratory Testing, Negative Testing, UAT, Test Cases, Test Scenario, Defect Reporting"],
      ["Automation", "Pytest, Selenium, Selenium WebDriver, Python Selenium, Page Object Model, Test Automation Framework, Selenium SIDE"],
      ["API & Performance", "Postman, REST API Testing, Swagger / OpenAPI, JMeter, Locust, K6, Gatling, Performance Testing, Load Testing, Stress Testing"],
      ["Programming & Database", "Python, PHP, SQL, MySQL, PostgreSQL"],
      ["Monitoring & DevOps", "Kubernetes pods monitoring, Kubernetes logs monitoring, Docker basic, Linux basic, GitHub Actions"],
      ["Kolaborasi", "Jira, Confluence, Git, GitHub, Browser DevTools, Codex, Agile/Scrum, Critical Thinking, Problem Solving, Teamwork"],
    ],
    education:
      "D4 Information Technology / Informatics Engineering, Politeknik Pos Indonesia, Sep 2016 - Sep 2020",
    certification: "Certificate of Completion - Software Analysis, BNSP, valid Mei 2024 - Mei 2027",
    language: "Bahasa Indonesia native, English basic",
    contactLead: "Terbuka untuk kolaborasi QA, automation testing, API testing, dan penguatan workflow release.",
    email: "Kirim Email",
    linkedin: "LinkedIn",
    portfolio: "Folder Portfolio",
    certificateCta: "Unduh Sertifikat",
  },
  en: {
    nav: ["Profile", "Experience", "Projects", "Skills", "Contact"],
    availability: "Bandung, West Java",
    role: "Software QA Engineer",
    eyebrow: "D-4 Informatics Engineering",
    headline: "Building product quality through automation, API, and performance testing.",
    summary:
      "Software QA Engineer with 3+ years of experience across automation testing, functional testing, API testing, and performance testing. Skilled in translating requirements into test cases, validating negative scenarios, monitoring Kubernetes pods and logs, and working in Agile/Scrum teams with Jira.",
    primaryCta: "Contact Me",
    secondaryCta: "Download CV",
    stats: [
      ["3+", "Years of QA experience"],
      ["7+", "National & enterprise system projects"],
      ["2027", "Software Analysis certificate valid until"],
    ],
    sections: {
      experience: "Experience",
      projects: "Selected Projects",
      skills: "Skills",
      education: "Education & Certification",
      contact: "Contact",
    },
    experience: [
      {
        title: "Software QA Engineer",
        company: "Torche Indonesia",
        period: "Aug 2022 - Present",
        points: [
          "Developed and executed automation testing with Pytest and Selenium.",
          "Tested functional flows, negative cases, APIs, and performance using JMeter, K6, and Gatling.",
          "Monitored Kubernetes pods and logs to support system reliability.",
          "Collaborated in Agile/Scrum and managed tasks and bug tracking through Jira.",
          "Used Codex as an AI coding assistant for test script creation, debugging, code analysis, and QA workflow productivity.",
        ],
      },
      {
        title: "IT Support Specialist Intern",
        company: "Ministry of Law and Human Rights, Republic of Indonesia",
        period: "Mar 2019 - Dec 2019",
        points: [
          "Troubleshot hardware, software, and network issues.",
          "Managed Mikrotik configuration and maintenance.",
          "Supported development of an online visit registration application.",
        ],
      },
    ],
    projects: [
      ["SDP", "Correctional Database System", "Automation and functional testing for core system modules."],
      ["SIPPT - BSKJI", "Integrated Public Service Information System", "End-to-end testing to ensure service flows met requirements."],
      ["MBG Dashboard", "Operational dashboard", "Feature, data flow, and system output validation."],
      ["MBG AI Chatbot", "AI Chatbot & Text-to-SQL", "Testing chatbot responses and generated query outputs."],
      ["SIPSN", "National Waste Management Information System", "Supported system testing and functional flow validation."],
      ["IKN Registration", "Registration system", "Tested user flows across the registration system."],
      ["IKD", "Digital Population Identity", "Supported digital identity testing and related feature validation."],
      [
        "PRODUCT",
        "AI-based regional planning system",
        "System analysis for requirement gathering, business process mapping, use case design, user roles, functional documentation, database design, and AI-assisted validation of regional planning documents.",
      ],
    ],
    skills: [
      ["Testing & QA", "Software Quality Assurance, Manual Testing, Functional Testing, Regression Testing, Smoke Testing, Sanity Testing, Integration Testing, End-to-End Testing, Exploratory Testing, Negative Testing, UAT, Test Cases, Test Scenario, Defect Reporting"],
      ["Automation", "Pytest, Selenium, Selenium WebDriver, Python Selenium, Page Object Model, Test Automation Framework, Selenium SIDE"],
      ["API & Performance", "Postman, REST API Testing, Swagger / OpenAPI, JMeter, Locust, K6, Gatling, Performance Testing, Load Testing, Stress Testing"],
      ["Programming & Database", "Python, PHP, SQL, MySQL, PostgreSQL"],
      ["Monitoring & DevOps", "Kubernetes pods monitoring, Kubernetes logs monitoring, Docker basic, Linux basic, GitHub Actions"],
      ["Collaboration", "Jira, Confluence, Git, GitHub, Browser DevTools, Codex, Agile/Scrum, Critical Thinking, Problem Solving, Teamwork"],
    ],
    education:
      "D4 Information Technology / Informatics Engineering, Politeknik Pos Indonesia, Sep 2016 - Sep 2020",
    certification: "Certificate of Completion - Software Analysis, BNSP, valid May 2024 - May 2027",
    language: "Bahasa Indonesia native, English basic",
    contactLead: "Available for QA collaboration, automation testing, API testing, and release workflow improvement.",
    email: "Send Email",
    linkedin: "LinkedIn",
    portfolio: "Portfolio Folder",
    certificateCta: "Download Certificate",
  },
} as const;

const contact = {
  name: "Wildan Khaustara W",
  phone: "083116993234",
  email: "wkhaustara@gmail.com",
  linkedin: "https://www.linkedin.com/in/wildankhaustarawijaksana/",
  drive: "https://drive.google.com/drive/folders/1WOIIVjauFa1ssXkAn4BEKyfIqztEsWv-",
  cv: `${process.env.NEXT_PUBLIC_BASE_PATH ?? "."}/CV_Software_QA_Engineer.pdf`,
  cvEn: `${process.env.NEXT_PUBLIC_BASE_PATH ?? "."}/CV_Software_QA_Engineer_EN.pdf`,
  cvQa: "/CV-Software-QA-Engineer.pdf",
  certificate: `${process.env.NEXT_PUBLIC_BASE_PATH ?? "."}/sertifikat_System_Analyst_Wildan_KW.pdf`,
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const [showLanguagePrompt, setShowLanguagePrompt] = useState(false);
  const copy = content[lang];

  useEffect(() => {
    const stored = window.localStorage.getItem("portfolio-lang") as Lang | null;
    if (stored === "id" || stored === "en") {
      setLang(stored);
      return;
    }

    const preferred = navigator.language.toLowerCase().startsWith("id") ? "id" : "en";
    setLang(preferred);
    setShowLanguagePrompt(true);
  }, []);

  const initials = useMemo(
    () =>
      contact.name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 3),
    []
  );

  function changeLang(next: Lang) {
    setLang(next);
    window.localStorage.setItem("portfolio-lang", next);
    setShowLanguagePrompt(false);
  }

  return (
    <main>
      {showLanguagePrompt ? (
        <div className="language-modal" role="dialog" aria-modal="true" aria-labelledby="language-title">
          <div className="language-card">
            <p className="eyebrow">Language</p>
            <h2 id="language-title">Pilih bahasa / Choose language</h2>
            <div className="language-helper">
              <p>Konten website dan file CV akan mengikuti bahasa yang dipilih.</p>
              <p>Website content and CV download will follow your selected language.</p>
            </div>
            <div className="language-choice">
              <button type="button" onClick={() => changeLang("id")}>
                Indonesia
              </button>
              <button type="button" onClick={() => changeLang("en")}>
                English
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <header className="site-header">
        <a className="brand" href="#top" aria-label={contact.name}>
          <span>
            <img src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? "."}/wildan-profile.jpg`} alt="" />
          </span>
          <strong>{contact.name}</strong>
        </a>
        <nav aria-label="Primary navigation">
          {copy.nav.map((item, index) => (
            <a key={item} href={["#profile", "#experience", "#projects", "#skills", "#contact"][index]}>
              {item}
            </a>
          ))}
        </nav>
        <div className="language" aria-label="Language selector">
          <button className={lang === "id" ? "active" : ""} onClick={() => changeLang("id")} type="button">
            ID
          </button>
          <button className={lang === "en" ? "active" : ""} onClick={() => changeLang("en")} type="button">
            EN
          </button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy" id="profile">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1>{contact.name}</h1>
          <p className="role">{copy.role}</p>
          <h2>{copy.headline}</h2>
          <p className="summary">{copy.summary}</p>
          <div className="actions">
            <a className="button primary" href={`mailto:${contact.email}`}>
              {copy.primaryCta}
            </a>
            <a className="button" href={lang === "id" ? contact.cv : contact.cvEn} target="_blank" rel="noreferrer">
              {copy.secondaryCta}
            </a>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Profile highlight">
          <div className="portrait">
            <img src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? "."}/wildan-profile.jpg`} alt={contact.name} />
          </div>
          <p>{copy.availability}</p>
          <a href={`tel:${contact.phone}`}>{contact.phone}</a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <div className="tool-cloud" aria-label="Core tools">
            {[
              "Pytest",
              "Selenium",
              "Postman",
              "JMeter",
              "Locust",
              "K6",
              "Gatling",
              "Kubernetes",
              "Jira",
              "Codex",
              "UAT",
              "Test Cases",
              "SQL",
              "GitHub Actions",
            ].map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </aside>
      </section>

      <section className="stats-band" aria-label="Portfolio stats">
        {copy.stats.map(([value, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="section split" id="experience">
        <div>
          <p className="section-kicker">01</p>
          <h2>{copy.sections.experience}</h2>
        </div>
        <div className="timeline">
          {copy.experience.map((job) => (
            <article key={`${job.title}-${job.company}`} className="timeline-item">
              <div>
                <h3>{job.title}</h3>
                <p>{job.company}</p>
              </div>
              <span>{job.period}</span>
              <ul>
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section-heading">
          <p className="section-kicker">02</p>
          <h2>{copy.sections.projects}</h2>
        </div>
        <div className="project-grid">
          {copy.projects.map(([name, type, desc]) => (
            <article key={name} className="project-card">
              <span>{type}</span>
              <h3>{name}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split" id="skills">
        <div>
          <p className="section-kicker">03</p>
          <h2>{copy.sections.skills}</h2>
        </div>
        <div className="skill-list">
          {copy.skills.map(([group, skills]) => (
            <article key={group}>
              <h3>{group}</h3>
              <p>{skills}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section education">
        <div>
          <p className="section-kicker">04</p>
          <h2>{copy.sections.education}</h2>
        </div>
        <div className="education-grid">
          <article>
            <h3>Education</h3>
            <p>{copy.education}</p>
          </article>
          <article>
            <h3>Certification</h3>
            <p>{copy.certification}</p>
            <a className="text-link" href={contact.certificate} target="_blank" rel="noreferrer">
              {copy.certificateCta}
            </a>
          </article>
          <article>
            <h3>Language</h3>
            <p>{copy.language}</p>
          </article>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="section-kicker">05</p>
          <h2>{copy.sections.contact}</h2>
          <p>{copy.contactLead}</p>
        </div>
        <div className="contact-actions">
          <a href={`mailto:${contact.email}`}>{copy.email}</a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer">
            {copy.linkedin}
          </a>
          <a href={contact.drive} target="_blank" rel="noreferrer">
            {copy.portfolio}
          </a>
          <a href={lang === "id" ? contact.cv : contact.cvEn} target="_blank" rel="noreferrer">
            {copy.secondaryCta}
          </a>
          <a href={contact.certificate} target="_blank" rel="noreferrer">
            {copy.certificateCta}
          </a>
        </div>
      </section>
    </main>
  );
}
