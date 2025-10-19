import React from "react";
import { Link } from "react-router-dom";
import accessibilityImage from "../assets/images/lighthouse.png";

export const AccessibilityPage: React.FC = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto" dir="rtl">
        <Link
          to="/"
          className="inline-block mb-8 text-sm text-blue-600 hover:underline">
          &larr; חזרה לעמוד הראשי
        </Link>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
          הצהרת נגישות
        </h1>
        <div className="prose prose-lg text-gray-700">
          <p>האתר הונגש באופן הבא: התאמת האתר לכל סוגי הדפדפנים המודרניים</p>
          <p>התאמת האתר לכל סוגי הפלטפורמות – מובייל, טבלטים ודסקטופים.</p>
          <p>התאמת האתר מבחינת שימוש במקלדת בלבד.</p>
          <p>התאמת האתר לאנשים עם לקות ראיה חלקית או מלאה.</p>
          <p>התאמת האתר והתכנים באתר לאנשים עם לקות שמיעתית חלקית או מלאה.</p>
          <p>על מנת להנגיש את האתר ותכניו, נעשו השינויים הבאים:</p>
          <p>
            שינויים ובדיקות באתר על מנת שיתאים לכל הדפדפנים ולכל הפלטפורמות
            (ריספונסיביות).
          </p>
          <p>
            בדיקת ניגודיות בצבעים, הוספת טקסט הסבר לכל תמונה באתר כולל במדריכים
            השונים, הוספת label בטפסים שונים.
          </p>
          <p>הכלים בהם השתמשתי לבדיקת הנגישות הם:</p>
          תקן הנגישות עצמו כפי שמפורט באתר ה-{" "}
          <a
            href="https://www.w3.org/WAI/test-evaluate/preliminary/"
            className="text-blue-600 hover:underline">
            {" "}
            W3C.
          </a>
          <a href="http://www.aisrael.org/?CategoryID=2764&ArticleID=45083">
            <p className="text-blue-600 hover:underline">
              קריטריוני הבדיקה כפי שמופיעים באתר הנגישות הישראלי .
            </p>
          </a>
          <p>סריקה ידנית של קוד המקור של האתר.</p>
          <p>שימוש בכלים חצי אוטומטיים כמו google lighthouse</p>
          <p>מצ״ב תמונת מסך של אחת מהבדיקות</p>
          <img src={accessibilityImage} alt="Accessibility Image" />
          <p>
            כפי שניתן לראות, בהנגשת האתר הושקעו זמן ומאמצים מרובים. ייתכן שיש בו
            בעיות נגישות בחלק קטן מהדפים.
          </p>
          <p>
            במידה ויש בעיות נגישות, אשמח מאוד אם יפנו אלי. ניתן לפנות אלי
            באמצעות המייל:nadavg@retailskillz.online
          </p>
        </div>
      </div>
    </div>
  );
};
