/*!
 * m_tayea Analytics — عدّاد زيارات مواقع محمد طايع
 * التركيب: <script src="https://m-tayea.mtayea.com/signature/mtayea-track.js" data-site="اسم_الموقع" defer></script>
 */
(function () {
  var script = document.currentScript || (function () {
    var s = document.getElementsByTagName('script');
    return s[s.length - 1];
  })();
  var site = (script && script.getAttribute('data-site')) || 'unknown';
  var NS = 'mtayea-sites';

  // عد مرة واحدة بس في الجلسة لكل موقع
  try {
    if (sessionStorage.getItem('mtayea_hit_' + site)) return;
    sessionStorage.setItem('mtayea_hit_' + site, '1');
  } catch (e) { /* private mode */ }

  var today = new Date();
  var day = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0') + '-' + String(today.getDate()).padStart(2, '0');

  function ping(name) {
    var url = 'https://api.counterapi.dev/v1/' + NS + '/' + encodeURIComponent(name) + '/up';
    if (navigator.sendBeacon) {
      navigator.sendBeacon(url);
    } else {
      fetch(url, { method: 'POST', keepalive: true }).catch(function () {});
    }
  }

  ping(site);              // الإجمالي
  ping(site + '@' + day);  // زيارات اليوم
})();
