# ÉCLAT Shop — React + Tailwind CSS

صفحة الـShop الأصلية من مشروع `eclat-tailwind`، متحوّلة لمشروع React مستقل باستخدام JavaScript وJSX وCSS وTailwind CSS مع Vite.

## التشغيل

من داخل فولدر المشروع:

```sh
npm install
npm run dev
```

افتح الرابط اللي هيظهر في الـTerminal، غالبًا `http://127.0.0.1:5173/`.
المكتبات متثبتة بالفعل في النسخة الحالية، فتقدر تبدأ بـ`npm run dev` مباشرة.
المشروع يحتاج Node.js 20.19+ أو 22.12+.

لتجهيز نسخة الإنتاج وتشغيل معاينتها:

```sh
npm run build
npm run preview
```

نسخة الإنتاج بتكون داخل `dist/`. افتح المشروع من سيرفر Vite، مش بفتح `index.html` مباشرة.

## ترتيب الملفات

```text
shop-page/
├── index.html                     HTML entry point
├── package.json                   Dependencies and run commands
├── vite.config.js                 React and Tailwind setup
├── public/
│   └── assets/
│       ├── fonts/                 Original local fonts and license
│       └── images/reference/      Original ÉCLAT product photographs
└── src/
    ├── main.jsx                   Mounts the React app
    ├── App.jsx                    Renders the Shop page
    ├── styles/
    │   ├── index.css              Tailwind, shared styles and colors
    │   └── fonts.css              Local font definitions
    └── shop/
        ├── Shop.jsx               Assembles the whole page
        ├── Shop.css               Page layout and responsive rules
        ├── components/
        │   ├── Header/
        │   │   ├── Header.jsx
        │   │   └── Header.css
        │   ├── Filters/
        │   │   ├── Filters.jsx
        │   │   └── Filters.css
        │   ├── ShopHeading/
        │   │   ├── ShopHeading.jsx
        │   │   └── ShopHeading.css
        │   ├── CategoryTabs/
        │   │   ├── CategoryTabs.jsx
        │   │   └── CategoryTabs.css
        │   ├── ShopToolbar/
        │   │   ├── ShopToolbar.jsx
        │   │   └── ShopToolbar.css
        │   ├── ProductGrid/
        │   │   ├── ProductGrid.jsx
        │   │   └── ProductGrid.css
        │   ├── ProductCard/
        │   │   ├── ProductCard.jsx
        │   │   └── ProductCard.css
        │   ├── ProductPreview/
        │   │   ├── ProductPreview.jsx
        │   │   └── ProductPreview.css
        │   ├── Footer/
        │   │   ├── Footer.jsx
        │   │   └── Footer.css
        │   ├── Artwork/Artwork.jsx
        │   ├── Icon/Icon.jsx
        │   └── Logo/Logo.jsx
        ├── data/
        │   ├── products.js        Original 14 products and image crops
        │   └── shopOptions.js     Categories, brands, colors and sort options
        ├── hooks/
        │   ├── useShopFilters.js  Filter state
        │   └── useFavorites.js    Favorites and localStorage
        └── utils/
            └── filterProducts.js Search, filter and sort logic
```

## المكونات والتعديل

- `Shop.jsx` بيربط المكونات ببعض وبيمرر البيانات والأحداث عن طريق props.
- كل جزء في فولدر باسمه، وملف الـCSS بتاعه جنبه.
- Tailwind مستخدم في توزيع العناصر والـgrid والـflex والمسافات. ملفات CSS مسؤولة عن تفاصيل تصميم ÉCLAT والـresponsive styles.
- لتعديل المنتجات والأسعار والصور، عدّل `src/shop/data/products.js`.
- لتعديل اختيارات الفلاتر أو الترتيب، عدّل `src/shop/data/shopOptions.js`.
- لتعديل الألوان العامة أو الخط، عدّل `src/styles/index.css` و`src/styles/fonts.css`.
- `Artwork.jsx` بيستخدم نفس قصّات الصور الموجودة في مشروع ÉCLAT الأصلي.

## الوظائف الموجودة

- البحث باسم المنتج أو البراند أو التصنيف أو اللون.
- الفلترة بالتصنيف والبراند والسعر واللون والتقييم، مع إمكانية جمع أكتر من فلتر.
- ترتيب المنتجات بالسعر أو الأحدث أو التقييم، والترتيب الأصلي للمجموعة.
- إضافة وإزالة المفضلة، وعرضها من الهيدر أو شريط الموبايل. المفضلة بتتحفظ في نفس المتصفح.
- معاينة بيانات المنتج في نافذة بتتقفل بزر الإغلاق أو Escape أو الضغط خارجها.
- تصميم متجاوب مع الموبايل والتابلت والديسكتوب، وقائمة فلاتر للموبايل.
- دعم روابط البداية مثل `/?category=Glasses` و`/?search=rose`.

المشروع بيحتوي على صفحة الـShop فقط. `Try On` و`My Looks` ظاهرين في الهيدر للحفاظ على شكل ÉCLAT، ومتاحين في المشروع الكامل. زر `Virtual Try-On` بيفتح معاينة المنتج هنا؛ تجربة الكاميرا مش جزء من هذه النسخة.

الصور والخطوط محلية ومأخوذة من مشروع `eclat-tailwind`. بعد تثبيت المكتبات، الصفحة نفسها لا تحتاج CDN أو اتصالًا بخدمة خارجية.

## التحقق

تم تشغيل build الإنتاج بنجاح، واجتياز 14 فحصًا لمنطق الكتالوج، تشمل دمج الفلاتر والبحث والترتيب والمفضلة وعدم تغيير بيانات المنتجات الأصلية. وتمت مراجعة الصفحة في المتصفح على الديسكتوب وعرضي 390 و320 بكسل، مع تجربة البحث الفارغ والفلاتر المشتركة ومعاينة المنتج وزر Escape وحفظ المفضلة بعد إعادة التحميل وفلاتر الموبايل. لم تظهر أخطاء أو تحذيرات في console أثناء المراجعة.
