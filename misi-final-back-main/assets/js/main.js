window._wpemojiSettings = {
    baseUrl: "https://s.w.org/images/core/emoji/2.2.1/72x72/",
    ext: ".png",
    svgUrl: "https://s.w.org/images/core/emoji/2.2.1/svg/",
    svgExt: ".svg",
    source: { concatemoji: "http://wp1.themexlab.com/old/greenture/wp-includes/js/wp-emoji-release.min.js?ver=4.7.23" },
};
!(function (t, a, e) {
    var r,
        n,
        i,
        o = a.createElement("canvas"),
        l = o.getContext && o.getContext("2d");
    function c(t) {
        var e = a.createElement("script");
        (e.src = t), (e.defer = e.type = "text/javascript"), a.getElementsByTagName("head")[0].appendChild(e);
    }
    for (i = Array("flag", "emoji4"), e.supports = { everything: !0, everythingExceptFlag: !0 }, n = 0; n < i.length; n++)
        (e.supports[i[n]] = (function (t) {
            var e,
                a = String.fromCharCode;
            if (!l || !l.fillText) return !1;
            switch ((l.clearRect(0, 0, o.width, o.height), (l.textBaseline = "top"), (l.font = "600 32px Arial"), t)) {
                case "flag":
                    return (l.fillText(a(55356, 56826, 55356, 56819), 0, 0), o.toDataURL().length < 3e3)
                        ? !1
                        : (l.clearRect(0, 0, o.width, o.height),
                            l.fillText(a(55356, 57331, 65039, 8205, 55356, 57096), 0, 0),
                            (e = o.toDataURL()),
                            l.clearRect(0, 0, o.width, o.height),
                            l.fillText(a(55356, 57331, 55356, 57096), 0, 0),
                            e !== o.toDataURL());
                case "emoji4":
                    return l.fillText(a(55357, 56425, 55356, 57341, 8205, 55357, 56507), 0, 0), (e = o.toDataURL()), l.clearRect(0, 0, o.width, o.height), l.fillText(a(55357, 56425, 55356, 57341, 55357, 56507), 0, 0), e !== o.toDataURL();
            }
            return !1;
        })(i[n])),
            (e.supports.everything = e.supports.everything && e.supports[i[n]]),
            "flag" !== i[n] && (e.supports.everythingExceptFlag = e.supports.everythingExceptFlag && e.supports[i[n]]);
    (e.supports.everythingExceptFlag = e.supports.everythingExceptFlag && !e.supports.flag),
        (e.DOMReady = !1),
        (e.readyCallback = function () {
            e.DOMReady = !0;
        }),
        e.supports.everything ||
        ((r = function () {
            e.readyCallback();
        }),
            a.addEventListener
                ? (a.addEventListener("DOMContentLoaded", r, !1), t.addEventListener("load", r, !1))
                : (t.attachEvent("onload", r),
                    a.attachEvent("onreadystatechange", function () {
                        "complete" === a.readyState && e.readyCallback();
                    })),
            (r = e.source || {}).concatemoji ? c(r.concatemoji) : r.wpemoji && r.twemoji && (c(r.twemoji), c(r.wpemoji)));
})(window, document, window._wpemojiSettings);
