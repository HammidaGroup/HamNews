(function() {
  // gtag script load
  var script = document.createElement('script');
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-GM64RSQL4S";
  document.head.appendChild(script);

  // dataLayer setup
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', 'G-GM64RSQL4S');
})();