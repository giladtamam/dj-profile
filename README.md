# DJ ארז דלל — Link-in-Bio

עמוד נחיתה אישי בסגנון "תקליט" (vinyl) ל-DJ **ארז דלל**.
מסך אחד, רספונסיבי, בעברית עם תמיכה מלאה ב-RTL.

## מבנה העמוד
- **כותרת** — `D J` באדום, `EREZ` בלבן + `DALAL` בגרדיאנט זהב, וסלוגן `הקצב מתחיל כאן`.
- **תקליט** — דיסק מסתובב עם תמונה מרכזית (טבעת אדומה) ו-6 תמונות עגולות מסביב (טבעות זהב זוהרות).
- **כפתורי קישור** — Instagram, Facebook, Gmail, Spotify בעיצוב גלולה עם זוהר אדום ואייקונים.

## הרצה מקומית
```bash
python3 -m http.server 8000
# גלשו אל http://localhost:8000
```

## התאמה אישית

### תמונות
כרגע התמונות נטענות משירות תמונות זמני ([picsum.photos](https://picsum.photos)) רק לצורך הדגמה.
להחלפה בתמונות אמיתיות:
1. הוסיפו את הקבצים לתיקיית `assets/` (למשל `center.jpg`, `p1.jpg` … `p6.jpg`).
2. ב-`index.html`, החליפו בכל `figure` את ערך ה-`--img`:
   ```html
   style="--img:url('assets/p1.jpg'); --x:33%; --y:22%;"
   ```
   התמונה המרכזית: `--img:url('assets/center.jpg')`.

המשתנים `--x` / `--y` קובעים את מיקום כל עיגול (% מתוך התקליט) — אפשר לכוונן לפי הטעם.

### קישורי רשתות
ב-`index.html`, החליפו את ה-`href="#"` בכתובות האמיתיות, ואת ה-`mailto:` של Gmail:
```html
<a class="link" href="https://instagram.com/USERNAME" ...>
<a class="link" href="mailto:your@email.com"> ... Gmail ...
```

### צבעים
משתני העיצוב (אדום, זהב, רקע) נמצאים בראש `styles.css` תחת `:root`.

## פריסה
האתר סטטי ומתארח ב-**GitHub Pages**:
https://giladtamam.github.io/dj-profile/
כל push לענף `master` מפעיל בנייה מחדש אוטומטית.

## מבנה הקבצים
```
dj-profile/
├── index.html
├── styles.css
├── script.js
├── assets/
└── README.md
```
