var regex_hostport = /^([^:]+)(:([0-9]+))?$/;

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
   'ads.qs2tgy.ru',
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
   'klcheck.com', // censor ?
   'kolobok.ua',
   'leokross.com',
   'linden.kiev.ua',
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
   'vk.me',
   'alexametrics.com',
   'neteye.ru',
   'l-stat.livejournal.net',
   'vir7on.news',
   'virt0n.news',
   'franecki.net',
   'protovid.com',
   'iqoption.com',
   'rotatemediajoin.win',
   'ad4xh85llhcbfis8.com',
   'greedseed.world',
   'reyden-x.com',
   'aj1058.online',
   'jmk5uut.online',
   'iwqzrm.com',
   'liveinternet.ru',
   'crossmetrix.com',
   'sendpulse.com',
   '4game.com',
   'mgid.com',
   'pinterest.com',
   'stakanchiki.com.ua',
   'phosphorus.wwww.kinogo.cc',
   'creativecdn.com',
   'esputnik.com',
   'advarkads.com',
   'beroll.ru',
   'buzzoola.com',
   'adnxs.com',
   'tyt.me',
   'beeline.ru',
   'mts.ru',
   'adspeed.net',
   'digitaltarget.ru',
   'aidata.io',
   'taboola.com',
   'gtarcade.com',
   'adhigh.net',
   'jeu5erxhov.site',
   'bongacams.com'
  ];

exports.getHostPortFromString = function (hostString, defaultPort) {
  let host = hostString;
  let port = defaultPort;

  let result = regex_hostport.exec(hostString);
  if (result != null) {
    host = result[1];
    if (result[2] != null) {
      port = result[3];
    }
  }

  return ( [host, port] );
};

function rejected0 (hostDomain) {
  return false;
}

function rejected1 (hostDomain) {

  let host = hostDomain;

  function findRejected(u) {
    let p = host.lastIndexOf(u); 
    return (p > -1) && (p == host.length - u.length) && ((p == 0) || (host.substring(p - 1, p) === '.'));
  };

  return rejectedUrls.findIndex(findRejected) > -1;
};

exports.isRejected = rejected1;