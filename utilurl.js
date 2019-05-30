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

exports.isRejected = function (hostDomain) {
  var rejectedUrls = [
   'tt.onthe.io',
   'recreativ.ru',
   'st5.recreativ.ru',
   'cdn.onthe.io',
   'informer.yandex.ru',
   'm.mixadvert.com',
   'servicer.idealmedia.io',
   'autocounter.idealmedia.io',
   's-img.idealmedia.io',
   'cm.idealmedia.io',
   'file.adpartner.pro',
   'a4p.adpartner.pro',
   'i.mediatraffic.com.ua',
   's.zmctrack.net',
   'ad.mox.tv',
   'jsc.mgid.com',
   'servicer.mgid.com',
   's-img.mgid.com',
   'cm.mgid.com',
   'c.mgid.com',
   'n2.mixadvert.com',
   'wsp.marketgid.com',
   'h.cackle.me',
   'j.cackle.me',
   'i.cackle.me',
   'rt5.cackle.me',
   'cackle.me',
   'connect.ok.ru',
   'cdnstats.ru',
   'rg.yottos.com',
   'cdn.yottos.com',
   'source.mmi.bemobile.ua',
   'sslpagestat.mmi.bemobile.ua',
   'do.traffim.com',
   'ad.3dnews.ru',
   'aflt.market.yandex.ru',
   'bs.yandex.ru',
   'zen.yandex.ru',
   'ads.betweendigital.com',
   'adfox-c2s-ams.creativecdn.com',
   'relap.io',
   'mc.webvisor.org',
   'securepubads.g.doubleclick.net',
   'sale-big-shoes.com',
   'inv-nets-eu.admixer.net',
   'inv-nets.admixer.net',
   'x.magnet.kiev.ua',
   'cdn.admixer.net',
   'st.top100.ru',
   'markhor.organicfruitapps.com',
//   'b.klcheck.com',  // censor checks adblock
   'g4p.redtram.com',
   'img3.redtram.com',
   'leokross.com',
   'w.uptolike.com',
   'ssp.c8.net.ua',
   'match.c8.net.ua',
   'r.c8.net.ua',
   'defaultadprovider2.azurewebsites.net',
   'c.bigmir.net',
   'counter.yadro.ru',
   'csm.nl.eu.criteo.net',
   'googleads.g.doubleclick.net',
   'mc.yandex.ru',
   'adservice.google.com',
   'adservice.google.com.ua',
   '200baliv.org',
   'static.criteo.net',
   'bidder.criteo.com',
   'gum.criteo.com',
   'ag.gbc.criteo.com',
   'gem.gbc.criteo.com',
   'cdn.mgid.com',
   'servicer-eu.mgid.com',
   'stats.g.doubleclick.net',
   'cdn.marketgid.com',
   'yt3.ggpht.com',
   'static.doubleclick.net',
   'www.google-analytics.com', 
   'jsc.marketgid.com',
   'js-goods.redtram.com',
   'counter.yadro.ru',
   'anketnik1.xyz',
   'zen.yandex.ru',
   'ad.adriver.ru',
   'rtb.am15.net',
   'adswrapme.click',
   'turbotraff.com',
   'cdn.n161adserv.com',
   's-img.adskeeper.co.uk',
   'cm.adskeeper.co.uk',
   'litnet.com',
   'et-cod.com',
   'am15.net',
   'gdeua.hit.gemius.pl',
   'www.favorit.com.ua',
   'top-fwz1.mail.ru',
   'www.yandex.ru',
   'vk.com',
   'm.addthis.com',
   'www.odnoklassniki.ru',
   'n1.cdn.adbetnet.com',
   'z.cdn.adbetnet.com',
   'm.addthisedge.com',
   's7.addthis.com',
   'an.yandex.ru',
   'click.zmctrack.net',
   'aax-us-east.amazon-adsystem.com',
   'ir-na.amazon-adsystem.com',
   'z-na.amazon-adsystem.com',
   'fls-na.amazon-adsystem.com',
   'content.adriver.ru',
   'ecmchat.com',
   'm.loadercdn.net',
   'm.loadercdn.com',
   'autolinkmaker.itunes.apple.com',
   'ad.mail.ru',
   'www.acint.net',
   'ua1xbet.com',
   'web.redhelper.ru',
   'edge13.streamformular.cc',
   'edge05.streamformular.cc',
   'unmuncong.com',
   'refpaumckl.top',
   '1xredwaoi.world',
   'bm-az-2.irsdn.net',
   'cdn.irsdn.net',
   'z.cdn.braun634.com',
   'analyticsq.com',
   'scontent.fhrk3-1.fna.fbcdn.net',
   'staticxx.facebook.com' 
  ];
  return rejectedUrls.indexOf(hostDomain) > -1;
};
