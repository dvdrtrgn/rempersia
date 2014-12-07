/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
var W = window;
var C = W.console;
var drt = W.drt || {};

C = C || {
    debug: function () {},
    error: function () {},
    log: function () {},
    warn: function () {},
    O:0
};

drt.eles = {};
drt.issu = {
    refs: [
        { num: 9682675,  nom: 'new-year'       },
        { num: 9785998,  nom: 'nomadic-life'   },
        { num: 9786028,  nom: 'the-bakery'     },
        { num: 9786039,  nom: 'drinking-water' },
        { num: 9786141,  nom: 'last-refuge'    },
        { num: 10470798, nom: 'the-bazaar'     },
        { num: 10470813, nom: 'the-struggle'   }
    ],
    attr: 'width="W" height="H" frameborder="0" allowfullscreen src=http://e.issuu.com/embed.html#0/',
    read: 'http://rememberingpersia.com/articles/PAGE.html',
    O:0
};

function makeLink(url, text) {
    return '<a href="' + url + '">' + text + '</a>';
}

drt.issu.addFeature = function (cf) {
    var O = drt.issu;
    var data = O.refs;
    var atrs = O.attr;
    var link = O.read;

    cf = $.extend({
        div: $('<div class="drtdiv"></div>'),
        index: new Date().valueOf() % data.length,
        size: [888, 633], /* [950, 550] */
        parent: null,
        page: null,
        O:0
    }, cf);

    cf.page = data[cf.index];
    if (cf.parent) {
        cf.div = $(cf.parent);
    } else if ($.isReady) {
        cf.div.appendTo('body');
    } else {
        document.write('<div class="drtdiv"></div>');
        cf.div = $('.drtdiv').last();
    }

    link = link.replace('PAGE', cf.page.nom);
    atrs = atrs.replace('W', cf.size[0]).replace('H', cf.size[1]);

    cf.str1 = 'Featured Diorama (' + makeLink(link, cf.page.nom) + ')';
    cf.str2 = 'Browse this photobook and ' + makeLink(link, 'read the article') + '.';

    cf.div.append('<h4>' + cf.str1 + '</h4>');
    cf.div.append('<iframe '+ atrs + cf.page.num  + '></iframe>');
    cf.div.append('<h3 style="top: -0.8em; position: relative;">' + cf.str2 + '</h3>');

    O.last = cf;
    C.debug('drt.issu.addFeature', O);
};

drt.tweakSplash = function () {
    var eles = drt.eles;

    eles.cW = document.getElementById('contentWrapper');
    eles.bAW = document.getElementById('bannerAreaWrapper');

    eles.cW.style.marginTop='-66px';
    eles.bAW.style.visibility='hidden';
    eles.bAW.style.padding='0';

    C.debug('drt.tweakSplash');
};

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

