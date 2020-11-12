!(function (e) {
  function t(t) {
    for (
      var r, c, i = t[0], s = t[1], l = t[2], m = 0, g = [];
      m < i.length;
      m++
    )
      (c = i[m]),
        Object.prototype.hasOwnProperty.call(n, c) && n[c] && g.push(n[c][0]),
        (n[c] = 0);
    for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r]);
    for (u && u(t); g.length; ) g.shift()();
    return a.push.apply(a, l || []), o();
  }
  function o() {
    for (var e, t = 0; t < a.length; t++) {
      for (var o = a[t], r = !0, i = 1; i < o.length; i++) {
        var s = o[i];
        0 !== n[s] && (r = !1);
      }
      r && (a.splice(t--, 1), (e = c((c.s = o[0]))));
    }
    return e;
  }
  var r = {},
    n = { 0: 0 },
    a = [];
  function c(t) {
    if (r[t]) return r[t].exports;
    var o = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(o.exports, o, o.exports, c), (o.l = !0), o.exports;
  }
  (c.m = e),
    (c.c = r),
    (c.d = function (e, t, o) {
      c.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
    }),
    (c.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (c.t = function (e, t) {
      if ((1 & t && (e = c(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var o = Object.create(null);
      if (
        (c.r(o),
        Object.defineProperty(o, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var r in e)
          c.d(
            o,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return o;
    }),
    (c.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return c.d(t, 'a', t), t;
    }),
    (c.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (c.p = '/');
  var i = (window.webpackJsonp = window.webpackJsonp || []),
    s = i.push.bind(i);
  (i.push = t), (i = i.slice());
  for (var l = 0; l < i.length; l++) t(i[l]);
  var u = s;
  a.push([3, 2]), o();
})([
  ,
  ,
  ,
  function (e, t, o) {
    'use strict';
    o.r(t),
      o.d(t, 'API_BASE', function () {
        return c;
      });
    o(4);
    var r = o(0),
      n = o(1);
    r.a.registerPlugin(n.a);
    const a = r.a.timeline();
    r.a.from('.who, .what', {
      scrollTrigger: {
        trigger: '.who, .what',
        toggleActions: 'play none none none',
        start: 'top 90%',
      },
      duration: 1,
      opacity: 0,
      y: 200,
      stagger: 0.3,
    }),
      r.a.from('.project_image, .project_desc', {
        scrollTrigger: {
          trigger: '.project_image, .project_desc',
          toggleActions: 'play none none none',
          start: 'top 95%',
        },
        duration: 1,
        opacity: 0,
        y: 200,
        stagger: 0.3,
      }),
      r.a.from('.anim_ideas', {
        scrollTrigger: {
          trigger: '.anim_ideas',
          toggleActions: 'play none none none',
          start: 'top 95%',
        },
        duration: 1,
        opacity: 0,
        y: 80,
        stagger: 0.3,
      }),
      r.a.from('.anim_reachout', {
        scrollTrigger: {
          trigger: '.anim_reachout',
          toggleActions: 'play none none none',
          start: 'top 95%',
        },
        duration: 1,
        opacity: 0,
        y: 80,
        stagger: 0.3,
      }),
      r.a.from('.anim_form', {
        scrollTrigger: {
          trigger: '.anim_form',
          toggleActions: 'play none none none',
          start: 'top 95%',
        },
        duration: 1,
        opacity: 0,
        y: 100,
        stagger: 0.3,
      }),
      a
        .from('.brand_logo', {
          duration: 1,
          opacity: 0,
          scale: -1,
          ease: 'back',
        })
        .from('.nav-link', {
          duration: 0.3,
          opacity: 0,
          y: -30,
          ease: 'back',
          stagger: 0.12,
        })
        .from('.intro-text,.lead-text', {
          duration: 0.8,
          opacity: 0,
          x: -100,
          ease: 'back',
          stagger: 0.2,
        })
        .from(
          '.hero-img',
          { duration: 1, opacity: 0, scale: -0.2, ease: 'back' },
          0.8
        );
    // contact animation, etc
  },
  function (e, t, o) {},
]);
