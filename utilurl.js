var regex_hostport = /^([^:]+)(:([0-9]+))?$/;

var whiteUrls = [
  'lostfilm.top',
  'uakino.club'
];

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
   'bongacams.com',
   'top',
   'club',
   'smi2.ru',
   'metrika-informer.com',
   'interdevochka.org',
   'ree16.tech',
   'jmu1bpt0.org',
   'syndication.twitter.com',
   'shop',
   'pcpro100.info',
   'xakplant.ru',
   'rcvlink.com',
   'v1r70n.news',
   'detoxic',
   'blockadeuro',
   'geniusmarketing.me',
   'ftd.agency',
   'exosrv.com',
   'twister.porn',
   'bongacams5.com',
   'rus-putana.com',
   'track-mixer.ru',
   'prostituki-pitera-spb.com',
   'ridge1.com',
   'yastatic.net',
   'nativeroll.tv',
   'seedr.com',
   'traffic-media.co.uk',
   'rcvlinks.com',
   'wwbizsrv.alibaba.com',
   'multikland.net',
   'andylongshot.com',
   'dmpkit.1dmp.io',
   'api.stiven-king.com',
   'kinogram.best',
   'actlz.github.io',
   'intravideo.net',
   'dsa.hybrid.ai',
   'ftd.agency',
   'all-tcod.com',
   'pp.userapi.com',
   'aj2208.online',
   'trafficbass.com',
   'franeski.net',
   'b2b.ainews.kz',
   'adtelligent.com',
   'realsrv.com',
   'favoritua.com',
   'interdevochka.site',
   'citilink.ru',
   'prostitutki-pitera-spb.net',
   'theonlygames.com',
   'webert-easylift.it',
   'histats.com',
   'kiski-spb.net',
   'moevideo.biz',
   'spylees.com',
   'logger.moviead55.ru',
   '8245.digital',
   //'noembed.com',
   'laim.tv',
   //'youtube-nocookie.com',
   'yandex.st',
   'kinomans.website',
   'filmskino.site',
   'tsyndicate.com',
   'samochki-spb.org',
   'ads.pubmatic.com',
   'presstarschool.com.ua',
   'adghndou0sdh.ru',
   'j1oxqq05ry.ru',
   'adxzqk.com',
   'pusher.com',
   'hit.gemius.pl',
   'coe.int',
   'znctrack.net',
   'gogletagmanager.com',
   'vbetua.com',
   'servetraff.com',
   'stat.net.ixbt.com',
   'track.adpod.in',
   'srv224.com',
   'pjstat.com',
   'd.trading',
   'metinvestholding.com',
   'residenceseeingstanding.com',
   'retiva-bet777.com',
   'drift.com',
   'patriot-coffee.com.ua',
   // popup
   'umh.ua',
   'bmcdn3.com',
   'adform.net',
   'rubiconproject.com',
   'pubmatic.com',
   'biz.ua',
   'clarity.ms',
   'unrulymedia.com',
   'stripchat.com',
   'xlirdr.com',
   'clarity.ms',
   'twitter.com',
   't.co',
   'ads-twitter.com',
   'sharethrough.com',
   'nitropay.com',
   'ingest.sentry.io',
   'favbet.ua',
   'pu020ev.com',
   'luxeprofit.pro',
   'poker-bet.com',
   'plerdy.com',
   'antillephone.com',
   'pkmpartner.com',
   'youradexchange.com',
   'systeme-business.online',
   'getpocket.com',
   'theepsie.com',
   'enchroe.com',
   'datatechone.com',
   'datatechonert.com',
   'rd09uvxpoe.kyiv.ua',
   'softfilesavesite.com',
   'cosmolot.ua',
   'worldoftanks.eu',
   'popvalcom.com',
   'googlesyndication.com',
   'google-analytics.com',
   'wabungasodaic.digital',
   'boozifyprays.space',
   'mediabrama.com',
   'oovaufty.com',
   'slotslights.net',
   'livejasmin.com',
   'condipexpredical.com',
   'jwpltx.com',
   'gnicirp.com',
   'happydtng.online',
   'elkazoc.online',
   'jd01ertboake.org',
   'arwobaton.com',
   'condipexpredical.com',
   'pu707ev.com',
   'ipchanger.live'
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

  if (whiteUrls.findIndex(findRejected) > -1) {
    return false;
  };
  return rejectedUrls.findIndex(findRejected) > -1;
};

exports.isRejected = rejected1;
