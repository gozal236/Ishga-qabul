# Texnik topshiriq (Technical specification)

**Ishga qabul qilish (Recruitment) tizimi** — 23-mavzu

## 1. LOYIHA HAQIDA UMUMIY MA’LUMOT
Universitet: Abu Rayhon Beruniy nomidagi Urganch davlat Universiteti
Fakultet: Kompyuter injiniring fakulteti
Yo‘nalish: KIDT
Guruh: Masofaviy 236-guruh
Talaba: XAYITOVA GO‘ZAL RAJABOVNA
Qabul qiluvchi: Xusainov Shixnazar
Loyiha mavzusi: 23-mavzu — Ishga qabul qilish (Recruitment) tizimi
Platforma: Web ilova

## 2. LOYIHANING MAQSADI
Ishga qabul qilish jarayonini avtomatlashtirish, korxona va tashkilotlarda mavjud vakansiyalarni boshqarish, ishga da’vogar nomzodlarning ma’lumotlarini saqlash, CV (rezyume) fayllarini yuklash, suhbatlarni rejalashtirish va nomzodlarning ishga qabul qilinish jarayonini nazorat qilish imkonini beruvchi web tizim yaratish.

Tizim HR (Human Resources) xodimlari va administratorlar uchun qulay boshqaruv muhitini taqdim etishi kerak.

## 3. FOYDALANUVCHI ROLLARI
**Tizimda quyidagi foydalanuvchi rollari mavjud bo‘ladi:**

### 3.1. Administrator
Foydalanuvchilarni boshqarish.
Tizim sozlamalarini o‘zgartirish.
Barcha ma’lumotlarni ko‘rish va boshqarish.
### 3.2. HR menejer
Vakansiyalar yaratish va boshqarish.
Nomzodlarni ro‘yxatga olish.
CV fayllarini ko‘rish.
Suhbatlarni tashkil qilish.
Nomzodlarning holatini o‘zgartirish.
### 3.3. Nomzod
Ro‘yxatdan o‘tish va tizimga kirish.
Ochiq vakansiyalarni ko‘rish.
Ish o‘rinlariga ariza yuborish.
CV yuklash.
Ariza holatini kuzatish.

## 4. LOYIHANI AMALGA OSHIRISHNING 7 TA BOSQICHI
1-BOSQICH. LOYIHA ASOSINI YARATISH VA FOYDALANUVCHILARNI BOSHQARISH
Maqsad: Web ilovaning boshlang‘ich arxitekturasini yaratish va foydalanuvchilarni autentifikatsiya qilish tizimini ishlab chiqish.

**Topshiriqlar:**
Web loyihaning boshlang‘ich strukturasini yaratish.
Frontend va backend qismlarini tashkil qilish.
Ma’lumotlar bazasini yaratish va ulash.
Ro‘yxatdan o‘tish (Registration) funksiyasini ishlab chiqish.
Tizimga kirish (Login) va chiqish (Logout) funksiyalarini yaratish.
Foydalanuvchi rollarini (Admin, HR, Candidate) tashkil qilish.
Rollarga qarab sahifalar va funksiyalarga kirishni cheklash.
Foydalanuvchi profilini ko‘rish va tahrirlash imkoniyatini yaratish.
Parolni xavfsiz saqlash va autentifikatsiyani himoyalash.
**Kutilayotgan natija:**
Foydalanuvchilar ro‘yxatdan o‘tishi, tizimga kirishi va o‘z roliga mos boshqaruv panelidan foydalanishi mumkin bo‘lgan ishlaydigan web ilova.

2-BOSQICH. VAKANSIYALARNI BOSHQARISH MODULI
Maqsad: Korxonadagi mavjud ish o‘rinlarini yaratish va boshqarish tizimini ishlab chiqish.

**Topshiriqlar:**
Vakansiyalar ro‘yxatini ko‘rsatish.
Yangi vakansiya yaratish.
Vakansiya nomi, lavozimi va yo‘nalishini kiritish.
Ish joyining tavsifi va talablarini yozish.
Ish haqi miqdorini belgilash.
Ish joyi turini tanlash (Ofis, Masofaviy, Gibrid).
Ish tajribasi va ta’lim talablarini belgilash.
Vakansiya uchun ariza topshirish muddatini belgilash.
Vakansiyani tahrirlash va o‘chirish.
Vakansiya holatini boshqarish (Faol, Yopilgan, Qoralama).
Nomzodlar uchun ochiq vakansiyalarni alohida sahifada ko‘rsatish.
Vakansiyalarni lavozim va holat bo‘yicha qidirish hamda filtrlash.
**Kutilayotgan natija:**
HR menejer vakansiyalarni yaratishi, tahrirlashi va yopishi, nomzodlar esa ochiq ish o‘rinlarini ko‘rishi mumkin bo‘ladi.

3-BOSQICH. NOMZODLARNI RO‘YXATGA OLISH VA CV BOSHQARUVI
Maqsad: Ishga da’vogarlar haqidagi ma’lumotlarni yig‘ish, saqlash va ularning rezyumelarini boshqarish.

**Topshiriqlar:**
Nomzodlar ro‘yxatini yaratish.
Nomzodning ism-familiyasi va aloqa ma’lumotlarini saqlash.
Telefon raqami va elektron pochta manzilini kiritish.
Ta’lim darajasi va mutaxassisligini saqlash.
Ish tajribasi va oldingi ish joylarini kiritish.
Nomzodning ko‘nikmalari (Skills) ro‘yxatini shakllantirish.
CV (PDF, DOC, DOCX) fayllarini yuklash imkoniyatini yaratish.
Yuklangan CV fayllarini saqlash va ko‘rish.
Nomzod profilini tahrirlash va yangilash.
Nomzodlarni ism, mutaxassislik va ko‘nikmalar bo‘yicha qidirish.
Bir nomzodning bir nechta vakansiyaga ariza topshirishiga imkon yaratish.
Takroriy arizalarni nazorat qilish.
**Kutilayotgan natija:**
Nomzodlar haqidagi barcha ma’lumotlar va CV fayllari tizimda saqlanadi. HR menejer nomzodlarni qidirishi va ularning rezyumelarini ko‘rishi mumkin bo‘ladi.

4-BOSQICH. ISHGA ARIZA TOPSHIRISH VA SARALASH JARAYONI
Maqsad: Nomzodlarning vakansiyalarga ariza yuborishi va HR menejer tomonidan saralanishini avtomatlashtirish.

**Topshiriqlar:**
Nomzodga vakansiya bo‘yicha ariza yuborish imkoniyatini yaratish.
Ariza topshirish vaqtini avtomatik qayd etish.
Arizaga nomzodning CV faylini biriktirish.
HR menejer uchun barcha arizalarni ko‘rsatish.
Arizalarni vakansiya bo‘yicha filtrlash.
Nomzod arizasining holatini boshqarish.
**Quyidagi ariza holatlarini yaratish:**

Yangi (New).
Ko‘rib chiqilmoqda (Under Review).
Saralangan (Shortlisted).
Suhbatga taklif qilingan (Interview).
Qabul qilingan (Accepted).
Rad etilgan (Rejected).
Ariza holati o‘zgarganda nomzodga xabar berish.
Har bir ariza bo‘yicha HR menejer izohlarini saqlash.
Arizalar tarixini yuritish.
**Kutilayotgan natija:**
Nomzodlar onlayn ariza topshiradi. HR menejer barcha arizalarni ko‘radi, saralaydi va ularning holatini boshqaradi.

5-BOSQICH. SUHBATLARNI REJALASHTIRISH VA BOSHQARISH
Maqsad: Ishga qabul qilish jarayonidagi suhbatlarni tashkil qilish va ularning natijalarini saqlash.

**Topshiriqlar:**
Nomzod bilan suhbat belgilash funksiyasini yaratish.
Suhbat sanasi va vaqtini belgilash.
Suhbat turini tanlash (Online yoki Offline).
Suhbat joyi yoki videokonferensiya havolasini kiritish.
Suhbatni o'tkazuvchi HR yoki mas’ul xodimni belgilash.
Suhbatlar ro‘yxatini kalendar yoki jadval shaklida ko‘rsatish.
Suhbat vaqtini o‘zgartirish yoki bekor qilish.
Nomzodga suhbat haqida xabarnoma yuborish.
Suhbat natijasini kiritish.
Suhbat bo‘yicha baho va izohlarni saqlash.
Suhbat natijasiga qarab nomzod holatini yangilash.
Bir nomzod uchun bir nechta suhbat bosqichlarini tashkil qilish.
**Kutilayotgan natija:**
HR menejer suhbatlarni rejalashtiradi, nomzodlarni taklif qiladi va suhbat natijalarini tizimda saqlaydi.

6-BOSQICH. ISHGA QABUL QILISH VA HISOBOTLAR MODULI
Maqsad: Saralashdan muvaffaqiyatli o'tgan nomzodlarni ishga qabul qilish va tizim faoliyati bo‘yicha statistik ma’lumotlarni shakllantirish.

**Topshiriqlar:**
Ishga qabul qilingan nomzodlar ro‘yxatini yaratish.
Nomzodning ishga qabul qilingan sanasini belgilash.
Ishga qabul qilingan lavozimni qayd etish.
Ish boshlash sanasini belgilash.
Ish taklifi (Job Offer) holatini boshqarish.
Taklif yuborilgan, qabul qilingan va rad etilgan holatlarni saqlash.
Nomzodning ishga qabul qilish tarixini yuritish.
Umumiy vakansiyalar sonini ko‘rsatish.
Jami nomzodlar sonini hisoblash.
Yangi arizalar va suhbatlar sonini ko‘rsatish.
Ishga qabul qilingan va rad etilgan nomzodlar statistikasini chiqarish.
Vakansiyalar samaradorligi bo‘yicha hisobot yaratish.
Hisobotlarni PDF yoki Excel formatida eksport qilish.
**Kutilayotgan natija:**
HR menejer ishga qabul qilish jarayonini yakunlaydi va tizim orqali umumiy statistika hamda hisobotlarni oladi.

7-BOSQICH. YAKUNIY INTEGRATSIYA, TESTLASH VA ISHGA TUSHIRISH
Maqsad: Barcha modullarni birlashtirish, tizimni sinovdan o'tkazish va foydalanishga tayyor holatga keltirish.

**Topshiriqlar:**
Oldingi 6 bosqichda yaratilgan modullarni birlashtirish.
Frontend va backend o‘rtasidagi barcha bog‘lanishlarni tekshirish.
Ma’lumotlar bazasidagi bog‘lanishlarni tekshirish.
Administrator, HR menejer va nomzod rollarini alohida testlash.
Ro‘yxatdan o‘tish va tizimga kirishni tekshirish.
Vakansiya yaratish va tahrirlashni sinash.
CV yuklash va yuklab olishni tekshirish.
Ariza yuborish va saralash jarayonini testlash.
Suhbatlarni rejalashtirishni sinash.
Ishga qabul qilish va hisobotlarni tekshirish.
Xavfsizlik va ruxsatlarni tekshirish.
Mobil qurilmalar va kompyuterlarda responsiv dizaynni tekshirish.
Aniqlangan xatolarni tuzatish.
Loyihani serverga joylashtirish (Deployment).
Loyiha uchun foydalanish bo‘yicha qisqacha qo‘llanma tayyorlash.
**Kutilayotgan natija:**
Barcha asosiy funksiyalari ishlaydigan, sinovdan o'tgan, xavfsiz va internet orqali foydalanish mumkin bo‘lgan Recruitment web ilovasi.

## 5. MA’LUMOTLAR BAZASI STRUKTURASI
**Loyihada quyidagi asosiy jadvallar (Tables) bo‘lishi tavsiya etiladi:**

Jadval nomi
Vazifasi
Users
Foydalanuvchilar va ularning rollari
Candidates
Nomzodlarning shaxsiy ma’lumotlari
Vacancies
Ish o‘rinlari
Resumes
CV va rezyume fayllari
Applications
Vakansiyalarga yuborilgan arizalar
Interviews
Suhbatlar
InterviewFeedback
Suhbat natijalari va baholar
JobOffers
Ish takliflari
Notifications
Xabarnomalar
ApplicationHistory
Arizalar holati tarixi
Jadvallar o‘rtasida Primary Key va Foreign Key bog‘lanishlari to‘g‘ri tashkil qilinishi kerak.

## 6. TEXNOLOGIK TALABLAR
**Quyidagi texnologiyalardan foydalanish tavsiya etiladi:**

Qism
Texnologiya
Frontend
HTML5, CSS3, JavaScript, Bootstrap
Backend
ASP.NET Core Web API
Database
PostgreSQL
ORM
Entity Framework Core
Authentication
JWT Authentication
File Storage
Server fayl tizimi
Version Control
Git va GitHub
Deployment
Linux Server va Nginx
Texnologiyalarni ishlab chiqish davomida o‘zgartirish mumkin, ammo frontend, backend va ma’lumotlar bazasi bir-biri bilan to‘g‘ri integratsiya qilinishi shart.

## 7. UMUMIY FUNKSIONAL VA XAVFSIZLIK TALABLARI
Tizim o‘zbek tilidagi interfeysga ega bo‘lishi kerak.
Interfeys sodda, tushunarli va zamonaviy dizaynda bo‘lishi kerak.
Web ilova kompyuter, planshet va mobil qurilmalarda ishlashi kerak.
Foydalanuvchilar faqat o‘zlariga ruxsat etilgan funksiyalardan foydalanishi kerak.
Parollar ochiq matn shaklida saqlanmasligi kerak.
CV fayllarini yuklashda fayl turi va hajmi tekshirilishi kerak.
Foydalanuvchilarning shaxsiy ma’lumotlari himoyalanishi kerak.
Ma’lumotlar bazasida ma’lumotlarning yaxlitligi ta’minlanishi kerak.
Muhim amallar bo‘yicha xatoliklar qayd etilishi kerak.
Tizimda ma’lumotlarni qidirish, saralash va filtrlash imkoniyati bo‘lishi kerak.

## 8. YAKUNIY LOYIHA NATIJASI
Loyiha yakunida quyidagi imkoniyatlarga ega to‘liq Recruitment Management System yaratilishi kerak:

Foydalanuvchilarni ro‘yxatdan o‘tkazish va boshqarish.
Vakansiyalarni yaratish va boshqarish.
Nomzodlarni ro‘yxatga olish.
CV fayllarini yuklash va ko‘rish.
Ish o‘rinlariga ariza yuborish.
Nomzodlarni saralash.
Suhbatlarni rejalashtirish.
Suhbat natijalarini saqlash.
Nomzodlarni ishga qabul qilish.
Statistika va hisobotlarni shakllantirish.
Asosiy talab: Loyihani 7 ta bosqich asosida ketma-ket ishlab chiqish. Har bir bosqich yakunida uning funksiyalari to‘liq ishlashi, testdan o‘tishi va keyingi bosqich uchun tayyor bo‘lishi kerak.