/*!
 * m_tayea Analytics — عدّاد زيارات مواقع محمد طايع (visitor-badge)
 * التركيب: <script src="https://m-tayea.mtayea.com/signature/mtayea-track.js" data-site="اسم_الموقع" defer></script>
 */
(function () {
  var script = document.currentScript || (function () {
    var s = document.getElementsByTagName('script');
    return s[s.length - 1];
  })();
  var site = (script && script.getAttribute('data-site')) || 'unknown';

  // عد مرة واحدة بس في الجلسة لكل موقع
  try {
    if (sessionStorage.getItem('mtayea_hit_' + site)) return;
    sessionStorage.setItem('mtayea_hit_' + site, '1');
  } catch (e) { /* private mode */ }

  var d = new Date();
  var day = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  var base = 'https://visitor-badge.laobi.icu/badge?page_id=mtayea.';

  // تحميل الصورة = زيادة العدّاد (مش محتاج CORS)
  new Image().src = base + site + '&left_text=%D8%B2%D9%8A%D8%A7%D8%B1%D8%A9';              // الإجمالي
  new Image().src = base + site + '.' + day;                                                  // زيارات اليوم
})();
