# Arxitektura

**RecruitUZ** — yagona HTML fayl asosidagi bir sahifali ilova (SPA). Tashqi kutubxona ishlatilmaydi: uslublar `<style>`, mantiq esa `<script>` blokida joylashgan. Ma’lumotlar `localStorage` xotirasida JSON hujjat sifatida saqlanadi, CV fayllari `base64` ko‘rinishida shu hujjatga qo‘shiladi.

## Qatlamlar

```
┌───────────────────────────────────────────────┐
│  Ko'rinish (view) — render() + HTML shablon    │
│  dashboard · vacancies · candidates · ...      │
├───────────────────────────────────────────────┤
│  Router — location.hash (#/route)              │
│  Ruxsat tekshiruvi: navAllowed(route)          │
├───────────────────────────────────────────────┤
│  Domen mantiqi — CRUD, holatlar, validatsiya   │
│  can(), changeStatus(), logHistory()           │
├───────────────────────────────────────────────┤
│  Saqlash — save() / load() → localStorage      │
│  Kalit: recruituz_db_v1                        │
└───────────────────────────────────────────────┘
```

## Hujjat modeli

| Kolleksiya | Maydonlar (asosiy) |
|---|---|
| `users` | `id`, `name`, `email`, `passwordHash`, `role`, `active`, `createdAt` |
| `candidates` | `id`, `userId`, `firstName`, `lastName`, `specialty`, `education`, `experienceYears`, `skills[]`, `summary` |
| `vacancies` | `id`, `code`, `title`, `position`, `direction`, `description`, `requirements`, `salaryFrom`, `salaryTo`, `workType`, `deadline`, `status` |
| `resumes` | `id`, `candidateId`, `fileName`, `fileType`, `fileSize`, `dataUrl`, `uploadedAt` |
| `applications` | `id`, `vacancyId`, `candidateId`, `resumeId`, `cover`, `status`, `hrComment`, `createdAt` |
| `interviews` | `id`, `applicationId`, `stage`, `date`, `time`, `type`, `place`, `link`, `interviewer`, `status`, `score`, `result` |
| `offers` | `id`, `applicationId`, `position`, `salary`, `status`, `hireDate`, `startDate` |
| `notifications` | `id`, `userId`, `title`, `text`, `kind`, `read`, `createdAt` |
| `history` | `id`, `applicationId`, `from`, `to`, `by`, `at`, `note` |
| `interviewFeedback` | `id`, `interviewId`, `score`, `result`, `comment`, `by`, `createdAt` |
| `settings` | `systemName`, `company`, `maxCvMb`, `defaultDeadlineDays`, `notifications` |
| `logs` | `id`, `at`, `userId`, `userName`, `level`, `action`, `detail` |

### Bog‘lanishlar

```
users 1───0..1 candidates
candidates 1───* resumes
candidates 1───* applications *───1 vacancies
applications 1───* interviews
applications 1───0..1 offers
applications 1───* history
interviews 1───* interviewFeedback
users 1───* notifications
```

## Holatlar

**Vakansiya:** `draft` (Qoralama) → `active` (Faol) → `closed` (Yopilgan)

**Ariza:** `yangi` → `korib` → `saralangan` → `suhbat` → `qabul` | `rad`

**Suhbat:** `reja` → `otkaz` | `bekor`

**Taklif:** `yuborilgan` → `qabul` | `rad`

## Rollar va ruxsatlar

| Bo‘lim | Admin | HR | Nomzod |
|---|:---:|:---:|:---:|
| Boshqaruv paneli | ✓ | ✓ | ✓ |
| Vakansiyalar (CRUD) | ✓ | ✓ | faqat ko‘rish |
| Nomzodlar bazasi | ✓ | ✓ | — |
| Arizalar | ✓ | ✓ | o‘ziniki |
| Suhbatlar | ✓ | ✓ | o‘ziniki |
| Ishga qabul | ✓ | ✓ | — |
| Hisobotlar | ✓ | ✓ | — |
| Foydalanuvchilar | ✓ | — | — |
| Tizim testlari | ✓ | ✓ | — |

## Xavfsizlik choralari

1. Parollar `SHA-256` + tuz bilan xeshlanadi, ochiq matn saqlanmaydi.
2. Foydalanuvchi matni `esc()` orqali ekranlanadi (XSS).
3. CV faylining kengaytmasi va hajmi (2 MB) ikki bosqichda tekshiriladi.
4. Har bir marshrut rol bo‘yicha tekshiriladi; ruxsatsiz urinish bloklanadi.
5. Ariza holati o‘zgarganda yozuv `history` kolleksiyasiga qo‘shiladi — audit izi saqlanadi.

## CI pipeline

`.github/workflows/ci.yml` uchta tekshiruvni bajaradi:

1. `scripts/extract-js.js` JS blokini ajratadi → `node --check` sintaksisni tekshiradi;
2. HTML tuzilmasi (DOCTYPE, `lang="uz"`, viewport, app konteyner) mavjudligi;
3. tashqi CDN bog‘liqliklari yo‘qligi (ilova mustaqil ishlashi kerak).

GitHub Pages `main` tarmog‘i ildizidan avtomatik nashr etiladi, shu sababli alohida deploy job talab qilinmaydi.
