var regex_hostport = /^([^:]+)(:([0-9]+))?$/;

exports.getHostPortFromString = function (hostString, defaultPort) {
  var host = hostString;
  var port = defaultPort;

  var result = regex_hostport.exec(hostString);
  if (result != null) {
    host = result[1];
    if (result[2] != null) {
      port = result[3];
    }
  }

  return ( [host, port] );
};

// censor checks adblock
// 'b.klcheck.com',  

function rejected0 (hostDomain) {
  return false;
}

function rejected1 (hostDomain) {
  var rejectedUrls = [
   '200baliv.org',
   'acint.net',
   'ad.3dnews.ru',
   'ad.mox.tv',
   'ad.360yield.com',
   'adbetnet.com',
   'addthis.com',
   'addthisedge.com',
   'adfox-c2s-ams.creativecdn.com',
   'admixer.net',
   'adpartner.pro',
   'adriver.ru',
   'advertur.ru',
   'ads.betweendigital.com',
   'ads.adfox.ru',
   'adservice.google.com',
   'adservice.google.com.ua',
   'adskeeper.co.uk',
   'adswrapme.click',
   'adx.com.ru',
   'am15.net',
   'amazon-adsystem.com',
   'analyticsq.com',
   'anketnik1.xyz',
   'autolinkmaker.itunes.apple.com',
   'bemobile.ua',
   'bigmir.net',
   'bne16a3c.top',
   'c8.net.ua',
   'cackle.me',
   'cdnstats.ru',
   'connect.ok.ru',
   'criteo.com',
   'criteo.net',
   'defaultadprovider2.azurewebsites.net',
   'doubleclick.net',
   'ecmchat.com',
   'et-cod.com',
   'exchange.informer.ua',
   'favorit.com.ua',
   'gdeua.hit.gemius.pl',
   'ggpht.com',
   'googlesyndication.com',
   'holder.com.ua',
   'google-analytics.com', 
   'idealmedia.io',
   'jnu1euxhneku.top',
//   'klcheck.com', // censor ?
   'kolobok.ua',
   'leokross.com',
   'litnet.com',
   'loadercdn.com',
   'loadercdn.net',
   'speedcurve.com',
   'mail.ru',
   'marketgid.com',
   'markhor.organicfruitapps.com',
   'mediatraffic.com.ua',
   'mgid.com',
   'mixadvert.com',
   'mixgoods.com',
   'n161adserv.com',
   'odnoklassniki.ru',
   'onthe.io',
   'pushlat.com',
   'rambler.ru',
   'recreativ.ru',
   'redtram.com',
   'relap.io',
   'rontar.com',
   'rtmark.net',
   'rutarget.ru',
   'sale-big-shoes.com',
   'savemart.com.ua',
   'st.top100.ru',
   'stat.media',
   'tns-counter.ru',
   'traffim.com',
   'turbotraff.com',
   'uptolike.com',
   'vk.com',
   'webvisor.org',
   'x.magnet.kiev.ua',
   'yadro.ru',
   'yandex.ru',
   'yandex.ocsp-responder.com',
   'yandex.net',
   'yottos.com',
   'zmctrack.net',
   'braun634.com',
   'irsdn.net',
   'myfastcdn.com',
   'virtualworldsland.com',
   'alexametrics.com',
   'neteye.ru',
   'l-stat.livejournal.net'
  ];

  var host = hostDomain;

  function findRejected(u) {
    var p = host.lastIndexOf(u); 
    return (p > -1) && (p == host.length - u.length) && ((p == 0) || (host.substring(p - 1, p) === '.'));
  };

  return rejectedUrls.findIndex(findRejected) > -1;
};

exports.isRejected = rejected1;