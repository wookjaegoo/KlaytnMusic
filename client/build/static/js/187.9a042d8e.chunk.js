(self.webpackChunktruffle_client = self.webpackChunktruffle_client || []).push([
  [187],
  {
    76759: function (e, r, t) {
      "use strict";
      var n = t(16314);
      e.exports = function (e) {
        return "function" === typeof e.stream
          ? n(e.stream())
          : n(new Response(e).body);
      };
    },
    88460: function (e, r, t) {
      var n = t(74704).default;
      function a(e) {
        var r = new globalThis.AbortController();
        function t() {
          r.abort();
          var a,
            u = n(e);
          try {
            for (u.s(); !(a = u.n()).done; ) {
              var s = a.value;
              s && s.removeEventListener && s.removeEventListener("abort", t);
            }
          } catch (i) {
            u.e(i);
          } finally {
            u.f();
          }
        }
        var a,
          u = n(e);
        try {
          for (u.s(); !(a = u.n()).done; ) {
            var s = a.value;
            if (s && s.addEventListener) {
              if (s.aborted) {
                t();
                break;
              }
              s.addEventListener("abort", t);
            }
          }
        } catch (i) {
          u.e(i);
        } finally {
          u.f();
        }
        return r.signal;
      }
      (e.exports = a), (e.exports.anySignal = a);
    },
    5942: function (e, r, t) {
      "use strict";
      var n = t(1426),
        a = t(82193),
        u =
          "object" === typeof window &&
          "object" === typeof document &&
          9 === document.nodeType,
        s = a(),
        i = u && !s,
        o = s && !u,
        c = s && u,
        f =
          "undefined" !== typeof n &&
          "undefined" !== typeof n.release &&
          "node" === n.release.name &&
          !s,
        p =
          "function" === typeof importScripts &&
          "undefined" !== typeof self &&
          "undefined" !== typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope,
        h = "undefined" !== typeof n && !1,
        l =
          "undefined" !== typeof navigator &&
          "ReactNative" === navigator.product;
      e.exports = {
        isTest: h,
        isElectron: s,
        isElectronMain: o,
        isElectronRenderer: c,
        isNode: f,
        isBrowser: i,
        isWebWorker: p,
        isEnvWithDom: u,
        isReactNative: l,
      };
    },
    47202: function (e, r, t) {
      "use strict";
      e.exports = t(1900);
    },
    52586: function (e, r, t) {
      "use strict";
      var n = t(17061).default,
        a = t(18186).default,
        u = t(16737).default,
        s = t(28131).default,
        i = t(18237).default,
        o = t(80450);
      function c(e, r) {
        return f.apply(this, arguments);
      }
      function f() {
        return (f = a(
          n().mark(function e(r, t) {
            var a, c;
            return n().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (a = new o()), (e.next = 3), u(a.get(r, t));
                  case 3:
                    return (
                      (c = e.sent),
                      e.delegateYield(s(i(c.iterator()), u), "t0", 5)
                    );
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      e.exports = function (e, r) {
        return {
          path: decodeURIComponent(new URL(e).pathname.split("/").pop() || ""),
          content: c(e, r),
        };
      };
    },
    80450: function (e, r, t) {
      "use strict";
      var n = t(38416).default,
        a = t(17061).default,
        u = t(42122).default,
        s = t(17156).default,
        i = t(56690).default,
        o = t(89728).default,
        c = t(18186).default,
        f = t(16737).default,
        p = t(28131).default,
        h = t(18237).default,
        l = t(65796),
        d = l.fetch,
        v = l.Request,
        y = l.Headers,
        b = t(63408),
        g = b.TimeoutError,
        m = b.HTTPError,
        w = t(89842).bind({ ignoreUndefined: !0 }),
        D = t(16791),
        x = D.URL,
        k = D.URLSearchParams,
        E = t(88460),
        Z = t(16314),
        A = t(5942),
        C = A.isBrowser,
        F = A.isWebWorker,
        B = t(50464),
        P = function (e, r, t) {
          if (void 0 === r) return e;
          var n = Date.now(),
            a = function () {
              return Date.now() - n >= r;
            };
          return new Promise(function (n, u) {
            var s = setTimeout(function () {
                a() && (u(new g()), t.abort());
              }, r),
              i = function (e) {
                return function (r) {
                  clearTimeout(s), a() ? u(new g()) : e(r);
                };
              };
            e.then(i(n), i(u));
          });
        },
        S = { throwHttpErrors: !0, credentials: "same-origin" },
        I = (function () {
          function e() {
            var r =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            i(this, e), (this.opts = w(S, r));
          }
          return (
            o(e, [
              {
                key: "fetch",
                value: (function () {
                  var e = s(
                    a().mark(function e(r) {
                      var t,
                        n,
                        s,
                        i,
                        o,
                        l,
                        b,
                        g,
                        D,
                        A,
                        S = arguments;
                      return a().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((t =
                                    S.length > 1 && void 0 !== S[1]
                                      ? S[1]
                                      : {}),
                                  (n = w(this.opts, t)),
                                  (s = new y(n.headers)),
                                  "string" === typeof r ||
                                    r instanceof x ||
                                    r instanceof v)
                                ) {
                                  e.next = 5;
                                  break;
                                }
                                throw new TypeError(
                                  "`resource` must be a string, URL, or Request",
                                );
                              case 5:
                                if (
                                  ((i = new x(r.toString(), n.base)),
                                  (o = n.searchParams),
                                  (l = n.transformSearchParams),
                                  (b = n.json),
                                  o &&
                                    (i.search =
                                      "function" === typeof l
                                        ? l(new k(n.searchParams))
                                        : new k(n.searchParams)),
                                  b &&
                                    ((n.body = JSON.stringify(n.json)),
                                    s.set("content-type", "application/json")),
                                  (g = new AbortController()),
                                  (D = E([g.signal, n.signal])),
                                  !(
                                    null != globalThis.ReadableStream &&
                                    n.body instanceof
                                      globalThis.ReadableStream &&
                                    (C || F)
                                  ))
                                ) {
                                  e.next = 17;
                                  break;
                                }
                                return (
                                  (e.t0 = Blob), (e.next = 15), B(Z(n.body))
                                );
                              case 15:
                                (e.t1 = e.sent), (n.body = new e.t0(e.t1));
                              case 17:
                                return (
                                  (e.next = 19),
                                  P(
                                    d(
                                      i.toString(),
                                      u(
                                        u({}, n),
                                        {},
                                        {
                                          signal: D,
                                          timeout: void 0,
                                          headers: s,
                                          duplex: "half",
                                        },
                                      ),
                                    ),
                                    n.timeout,
                                    g,
                                  )
                                );
                              case 19:
                                if ((A = e.sent).ok || !n.throwHttpErrors) {
                                  e.next = 25;
                                  break;
                                }
                                if (!n.handleError) {
                                  e.next = 24;
                                  break;
                                }
                                return (e.next = 24), n.handleError(A);
                              case 24:
                                throw new m(A);
                              case 25:
                                return (
                                  (A.iterator = c(
                                    a().mark(function e() {
                                      return a().wrap(function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return e.delegateYield(
                                                p(h(U(A.body)), f),
                                                "t0",
                                                1,
                                              );
                                            case 1:
                                            case "end":
                                              return e.stop();
                                          }
                                      }, e);
                                    }),
                                  )),
                                  (A.ndjson = c(
                                    a().mark(function e() {
                                      var r, n, u, s, i, o;
                                      return a().wrap(
                                        function (e) {
                                          for (;;)
                                            switch ((e.prev = e.next)) {
                                              case 0:
                                                (r = !1),
                                                  (n = !1),
                                                  (e.prev = 2),
                                                  (s = h(j(A.iterator())));
                                              case 4:
                                                return (
                                                  (e.next = 6), f(s.next())
                                                );
                                              case 6:
                                                if (!(r = !(i = e.sent).done)) {
                                                  e.next = 18;
                                                  break;
                                                }
                                                if (
                                                  ((o = i.value), !t.transform)
                                                ) {
                                                  e.next = 13;
                                                  break;
                                                }
                                                return (
                                                  (e.next = 11), t.transform(o)
                                                );
                                              case 11:
                                                e.next = 15;
                                                break;
                                              case 13:
                                                return (e.next = 15), o;
                                              case 15:
                                                (r = !1), (e.next = 4);
                                                break;
                                              case 18:
                                                e.next = 24;
                                                break;
                                              case 20:
                                                (e.prev = 20),
                                                  (e.t0 = e.catch(2)),
                                                  (n = !0),
                                                  (u = e.t0);
                                              case 24:
                                                if (
                                                  ((e.prev = 24),
                                                  (e.prev = 25),
                                                  !r || null == s.return)
                                                ) {
                                                  e.next = 29;
                                                  break;
                                                }
                                                return (
                                                  (e.next = 29), f(s.return())
                                                );
                                              case 29:
                                                if (((e.prev = 29), !n)) {
                                                  e.next = 32;
                                                  break;
                                                }
                                                throw u;
                                              case 32:
                                                return e.finish(29);
                                              case 33:
                                                return e.finish(24);
                                              case 34:
                                              case "end":
                                                return e.stop();
                                            }
                                        },
                                        e,
                                        null,
                                        [
                                          [2, 20, 24, 34],
                                          [25, , 29, 33],
                                        ],
                                      );
                                    }),
                                  )),
                                  e.abrupt("return", A)
                                );
                              case 28:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  return function (r) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "post",
                value: function (e) {
                  var r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  return this.fetch(e, u(u({}, r), {}, { method: "POST" }));
                },
              },
              {
                key: "get",
                value: function (e) {
                  var r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  return this.fetch(e, u(u({}, r), {}, { method: "GET" }));
                },
              },
              {
                key: "put",
                value: function (e) {
                  var r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  return this.fetch(e, u(u({}, r), {}, { method: "PUT" }));
                },
              },
              {
                key: "delete",
                value: function (e) {
                  var r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  return this.fetch(e, u(u({}, r), {}, { method: "DELETE" }));
                },
              },
              {
                key: "options",
                value: function (e) {
                  var r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  return this.fetch(e, u(u({}, r), {}, { method: "OPTIONS" }));
                },
              },
            ]),
            e
          );
        })(),
        j = (function () {
          var e = c(
            a().mark(function e(r) {
              var t, n, u, s, i, o, c, p, l, d, v;
              return a().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (t = new TextDecoder()),
                          (n = ""),
                          (u = !1),
                          (s = !1),
                          (e.prev = 4),
                          (o = h(r));
                      case 6:
                        return (e.next = 8), f(o.next());
                      case 8:
                        if (!(u = !(c = e.sent).done)) {
                          e.next = 25;
                          break;
                        }
                        (p = c.value),
                          (n += t.decode(p, { stream: !0 })),
                          (l = n.split(/\r?\n/)),
                          (d = 0);
                      case 13:
                        if (!(d < l.length - 1)) {
                          e.next = 21;
                          break;
                        }
                        if (!((v = l[d].trim()).length > 0)) {
                          e.next = 18;
                          break;
                        }
                        return (e.next = 18), JSON.parse(v);
                      case 18:
                        d++, (e.next = 13);
                        break;
                      case 21:
                        n = l[l.length - 1];
                      case 22:
                        (u = !1), (e.next = 6);
                        break;
                      case 25:
                        e.next = 31;
                        break;
                      case 27:
                        (e.prev = 27),
                          (e.t0 = e.catch(4)),
                          (s = !0),
                          (i = e.t0);
                      case 31:
                        if (
                          ((e.prev = 31), (e.prev = 32), !u || null == o.return)
                        ) {
                          e.next = 36;
                          break;
                        }
                        return (e.next = 36), f(o.return());
                      case 36:
                        if (((e.prev = 36), !s)) {
                          e.next = 39;
                          break;
                        }
                        throw i;
                      case 39:
                        return e.finish(36);
                      case 40:
                        return e.finish(31);
                      case 41:
                        if (0 === (n = (n += t.decode()).trim()).length) {
                          e.next = 46;
                          break;
                        }
                        return (e.next = 46), JSON.parse(n);
                      case 46:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [
                  [4, 27, 31, 41],
                  [32, , 36, 40],
                ],
              );
            }),
          );
          return function (r) {
            return e.apply(this, arguments);
          };
        })(),
        U = function (e) {
          if (T(e)) return e;
          if (R(e)) {
            var r = e[Symbol.asyncIterator]();
            return n({}, Symbol.asyncIterator, function () {
              return {
                next: r.next.bind(r),
                return: function (t) {
                  return (
                    e.destroy(),
                    "function" === typeof r.return
                      ? r.return()
                      : Promise.resolve({ done: !0, value: t })
                  );
                },
              };
            });
          }
          if (N(e)) {
            var t = e.getReader();
            return c(
              a().mark(function e() {
                var r, n, u;
                return a().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          e.prev = 0;
                        case 1:
                          return (e.next = 4), f(t.read());
                        case 4:
                          if (((r = e.sent), (n = r.done), (u = r.value), !n)) {
                            e.next = 9;
                            break;
                          }
                          return e.abrupt("return");
                        case 9:
                          if (!u) {
                            e.next = 12;
                            break;
                          }
                          return (e.next = 12), u;
                        case 12:
                          e.next = 1;
                          break;
                        case 14:
                          return (e.prev = 14), t.releaseLock(), e.finish(14);
                        case 17:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, , 14, 17]],
                );
              }),
            )();
          }
          throw new TypeError("Body can't be converted to AsyncIterable");
        },
        T = function (e) {
          return (
            "object" === typeof e &&
            null !== e &&
            "function" === typeof e[Symbol.asyncIterator]
          );
        },
        N = function (e) {
          return e && "function" === typeof e.getReader;
        },
        R = function (e) {
          return (
            Object.prototype.hasOwnProperty.call(e, "readable") &&
            Object.prototype.hasOwnProperty.call(e, "writable")
          );
        };
      (I.HTTPError = m),
        (I.TimeoutError = g),
        (I.streamToAsyncIterator = U),
        (I.post = function (e, r) {
          return new I(r).post(e, r);
        }),
        (I.get = function (e, r) {
          return new I(r).get(e, r);
        }),
        (I.put = function (e, r) {
          return new I(r).put(e, r);
        }),
        (I.delete = function (e, r) {
          return new I(r).delete(e, r);
        }),
        (I.options = function (e, r) {
          return new I(r).options(e, r);
        }),
        (e.exports = I);
    },
    63408: function (e, r, t) {
      "use strict";
      var n = t(89728).default,
        a = t(56690).default,
        u = t(61655).default,
        s = t(26389).default,
        i = t(33496).default,
        o = (function (e) {
          u(t, e);
          var r = s(t);
          function t() {
            var e,
              n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "Request timed out";
            return a(this, t), ((e = r.call(this, n)).name = "TimeoutError"), e;
          }
          return n(t);
        })(i(Error));
      r.TimeoutError = o;
      var c = (function (e) {
        u(t, e);
        var r = s(t);
        function t() {
          var e,
            n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "The operation was aborted.";
          return a(this, t), ((e = r.call(this, n)).name = "AbortError"), e;
        }
        return n(t);
      })(i(Error));
      r.AbortError = c;
      var f = (function (e) {
        u(t, e);
        var r = s(t);
        function t(e) {
          var n;
          return (
            a(this, t),
            ((n = r.call(this, e.statusText)).name = "HTTPError"),
            (n.response = e),
            n
          );
        }
        return n(t);
      })(i(Error));
      r.HTTPError = f;
    },
    65796: function (e, r, t) {
      "use strict";
      var n = t(89728).default,
        a = t(56690).default,
        u = t(66115).default,
        s = t(61655).default,
        i = t(26389).default,
        o = t(27424).default,
        c = t(74704).default,
        f = t(63408),
        p = f.TimeoutError,
        h = f.AbortError,
        l = t(47202),
        d = l.Response,
        v = l.Request,
        y = l.Headers,
        b = l.default,
        g = function (e) {
          var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            t = new XMLHttpRequest();
          t.open(r.method || "GET", e.toString(), !0);
          var n = r.timeout,
            a = r.headers;
          if (
            (n && n > 0 && n < 1 / 0 && (t.timeout = n),
            null != r.overrideMimeType &&
              t.overrideMimeType(r.overrideMimeType),
            a)
          ) {
            var u,
              s = c(new y(a));
            try {
              for (s.s(); !(u = s.n()).done; ) {
                var i = o(u.value, 2),
                  f = i[0],
                  l = i[1];
                t.setRequestHeader(f, l);
              }
            } catch (v) {
              s.e(v);
            } finally {
              s.f();
            }
          }
          return (
            r.signal &&
              (r.signal.onabort = function () {
                return t.abort();
              }),
            r.onUploadProgress && (t.upload.onprogress = r.onUploadProgress),
            (t.responseType = "arraybuffer"),
            new Promise(function (e, n) {
              var a = function (r) {
                switch (r.type) {
                  case "error":
                    e(d.error());
                    break;
                  case "load":
                    e(
                      new D(t.responseURL, t.response, {
                        status: t.status,
                        statusText: t.statusText,
                        headers: w(t.getAllResponseHeaders()),
                      }),
                    );
                    break;
                  case "timeout":
                    n(new p());
                    break;
                  case "abort":
                    n(new h());
                }
              };
              (t.onerror = a),
                (t.onload = a),
                (t.ontimeout = a),
                (t.onabort = a),
                t.send(r.body);
            })
          );
        },
        m = b,
        w = function (e) {
          var r,
            t = new y(),
            n = c(e.trim().split(/[\r\n]+/));
          try {
            for (n.s(); !(r = n.n()).done; ) {
              var a = r.value,
                u = a.indexOf(": ");
              u > 0 && t.set(a.slice(0, u), a.slice(u + 1));
            }
          } catch (s) {
            n.e(s);
          } finally {
            n.f();
          }
          return t;
        },
        D = (function (e) {
          s(t, e);
          var r = i(t);
          function t(e, n, s) {
            var i;
            return (
              a(this, t),
              (i = r.call(this, n, s)),
              Object.defineProperty(u(i), "url", { value: e }),
              i
            );
          }
          return n(t);
        })(d);
      e.exports = {
        fetch: function (e) {
          var r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return null != r.onUploadProgress ? g(e, r) : m(e, r);
        },
        Request: v,
        Headers: y,
      };
    },
    18296: function (e, r, t) {
      "use strict";
      var n = t(27424).default;
      Object.defineProperty(r, "__esModule", { value: !0 });
      var a = t(30229);
      function u(e) {
        var r = {};
        return (
          e.encrypted_key &&
            (r.encrypted_key = a.fromBase64url(e.encrypted_key)),
          e.header && (r.header = e.header),
          r
        );
      }
      function s(e) {
        var r = {};
        return (
          e.encrypted_key && (r.encrypted_key = a.toBase64url(e.encrypted_key)),
          e.header && (r.header = e.header),
          r
        );
      }
      r.default = {
        fromSplit: function (e) {
          var r = n(e, 5),
            t = r[0],
            a = r[1],
            u = r[2],
            s = { ciphertext: r[3], iv: u, protected: t, tag: r[4] };
          return a && (s.recipients = [{ encrypted_key: a }]), s;
        },
        decode: function (e) {
          var r = {
            ciphertext: a.toBase64url(e.ciphertext),
            protected: a.toBase64url(e.protected),
            iv: a.toBase64url(e.iv),
            tag: a.toBase64url(e.tag),
          };
          return (
            e.aad && (r.aad = a.toBase64url(e.aad)),
            e.recipients && (r.recipients = e.recipients.map(s)),
            e.unprotected && (r.unprotected = e.unprotected),
            r
          );
        },
        encode: function (e) {
          var r = {
            ciphertext: a.fromBase64url(e.ciphertext),
            protected: a.fromBase64url(e.protected),
            iv: a.fromBase64url(e.iv),
            tag: a.fromBase64url(e.tag),
          };
          return (
            e.aad && (r.aad = a.fromBase64url(e.aad)),
            e.recipients && (r.recipients = e.recipients.map(u)),
            e.unprotected && (r.unprotected = e.unprotected),
            r
          );
        },
      };
    },
    8990: function (e, r, t) {
      "use strict";
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, r, t, n) {
                void 0 === n && (n = t),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return r[t];
                    },
                  });
              }
            : function (e, r, t, n) {
                void 0 === n && (n = t), (e[n] = r[t]);
              }),
        a =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, r) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: r,
                });
              }
            : function (e, r) {
                e.default = r;
              }),
        u =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var r = {};
            if (null != e)
              for (var t in e)
                "default" !== t &&
                  Object.prototype.hasOwnProperty.call(e, t) &&
                  n(r, e, t);
            return a(r, e), r;
          },
        s =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.decode = r.encode = r.toGeneral = r.code = r.name = void 0);
      var i = s(t(53744)),
        o = s(t(18296)),
        c = u(t(13446));
      function f(e) {
        return (
          "payload" in e &&
          "string" === typeof e.payload &&
          "signatures" in e &&
          Array.isArray(e.signatures)
        );
      }
      function p(e) {
        return (
          "ciphertext" in e &&
          "string" === typeof e.ciphertext &&
          "iv" in e &&
          "string" === typeof e.iv &&
          "protected" in e &&
          "string" === typeof e.protected &&
          "tag" in e &&
          "string" === typeof e.tag
        );
      }
      function h(e) {
        if ("string" === typeof e) {
          var r = e.split(".");
          if (3 === r.length) return i.default.fromSplit(r);
          if (5 === r.length) return o.default.fromSplit(r);
          throw new Error("Not a valid JOSE string");
        }
        if (f(e) || p(e)) return e;
        throw new Error("Not a valid unencoded JOSE object");
      }
      (r.name = "dag-jose"),
        (r.code = 133),
        (r.toGeneral = h),
        (r.encode = function (e) {
          var r;
          if (("string" === typeof e && (e = h(e)), f(e)))
            r = i.default.encode(e);
          else {
            if (!p(e)) throw new Error("Not a valid JOSE object");
            r = o.default.encode(e);
          }
          return new Uint8Array(c.encode(r));
        }),
        (r.decode = function (e) {
          var r, t;
          try {
            r = c.decode(e);
          } catch (n) {
            throw new Error("Not a valid DAG-JOSE object");
          }
          if (
            "payload" in (t = r) &&
            t.payload instanceof Uint8Array &&
            "signatures" in t &&
            Array.isArray(t.signatures)
          )
            return i.default.decode(r);
          if (
            (function (e) {
              return (
                "ciphertext" in e &&
                e.ciphertext instanceof Uint8Array &&
                "iv" in e &&
                e.iv instanceof Uint8Array &&
                "protected" in e &&
                e.protected instanceof Uint8Array &&
                "tag" in e &&
                e.tag instanceof Uint8Array
              );
            })(r)
          )
            return o.default.decode(r);
          throw new Error("Not a valid DAG-JOSE object");
        });
    },
    53744: function (e, r, t) {
      "use strict";
      var n = t(27424).default;
      Object.defineProperty(r, "__esModule", { value: !0 });
      var a = t(30229),
        u = t(16629);
      function s(e) {
        var r = { signature: a.fromBase64url(e.signature) };
        return (
          e.header && (r.header = e.header),
          e.protected && (r.protected = a.fromBase64url(e.protected)),
          r
        );
      }
      function i(e) {
        var r = { signature: a.toBase64url(e.signature) };
        return (
          e.header && (r.header = e.header),
          e.protected && (r.protected = a.toBase64url(e.protected)),
          r
        );
      }
      r.default = {
        fromSplit: function (e) {
          var r = n(e, 3),
            t = r[0],
            s = r[1];
          return {
            payload: s,
            signatures: [{ protected: t, signature: r[2] }],
            link: u.CID.decode(a.fromBase64url(s)),
          };
        },
        encode: function (e) {
          var r = a.fromBase64url(e.payload);
          try {
            u.CID.decode(r);
          } catch (t) {
            throw new Error("Not a valid DagJWS");
          }
          return { payload: r, signatures: e.signatures.map(s) };
        },
        decode: function (e) {
          var r = {
            payload: a.toBase64url(e.payload),
            signatures: e.signatures.map(i),
          };
          return (r.link = u.CID.decode(new Uint8Array(e.payload))), r;
        },
      };
    },
    30229: function (e, r, t) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.fromBase64url = r.toBase64url = void 0);
      var n = t(24426);
      (r.toBase64url = function (e) {
        return n.base64url.encode(e).slice(1);
      }),
        (r.fromBase64url = function (e) {
          return n.base64url.decode("u".concat(e));
        });
    },
    42187: function (e, r, t) {
      "use strict";
      t.r(r),
        t.d(r, {
          CID: function () {
            return q.CID;
          },
          create: function () {
            return ep;
          },
          globSource: function () {
            return rp;
          },
          multiaddr: function () {
            return Or;
          },
          urlSource: function () {
            return $f;
          },
        });
      var n = {};
      t.r(n),
        t.d(n, {
          code: function () {
            return Q;
          },
          decode: function () {
            return $;
          },
          encode: function () {
            return X;
          },
          name: function () {
            return Y;
          },
        });
      var a = {};
      t.r(a),
        t.d(a, {
          code: function () {
            return De;
          },
          decode: function () {
            return ke;
          },
          encode: function () {
            return xe;
          },
          name: function () {
            return we;
          },
        });
      var u = {};
      t.r(u),
        t.d(u, {
          identity: function () {
            return ht;
          },
        });
      var s = {};
      t.r(s),
        t.d(s, {
          base2: function () {
            return lt;
          },
        });
      var i = {};
      t.r(i),
        t.d(i, {
          base8: function () {
            return dt;
          },
        });
      var o = {};
      t.r(o),
        t.d(o, {
          base10: function () {
            return vt;
          },
        });
      var c = {};
      t.r(c),
        t.d(c, {
          base16: function () {
            return yt;
          },
          base16upper: function () {
            return bt;
          },
        });
      var f = {};
      t.r(f),
        t.d(f, {
          base32: function () {
            return gt;
          },
          base32hex: function () {
            return xt;
          },
          base32hexpad: function () {
            return Et;
          },
          base32hexpadupper: function () {
            return Zt;
          },
          base32hexupper: function () {
            return kt;
          },
          base32pad: function () {
            return wt;
          },
          base32padupper: function () {
            return Dt;
          },
          base32upper: function () {
            return mt;
          },
          base32z: function () {
            return At;
          },
        });
      var p = {};
      t.r(p),
        t.d(p, {
          base36: function () {
            return Ct;
          },
          base36upper: function () {
            return Ft;
          },
        });
      var h = {};
      t.r(h),
        t.d(h, {
          base58btc: function () {
            return Bt;
          },
          base58flickr: function () {
            return Pt;
          },
        });
      var l = {};
      t.r(l),
        t.d(l, {
          base64: function () {
            return St;
          },
          base64pad: function () {
            return It;
          },
          base64url: function () {
            return jt;
          },
          base64urlpad: function () {
            return Ut;
          },
        });
      var d = {};
      t.r(d),
        t.d(d, {
          base256emoji: function () {
            return Ot;
          },
        });
      var v = {};
      t.r(v),
        t.d(v, {
          sha256: function () {
            return hn;
          },
          sha512: function () {
            return ln;
          },
        });
      var y = {};
      t.r(y),
        t.d(y, {
          identity: function () {
            return vn;
          },
        });
      var b = {};
      t.r(b),
        t.d(b, {
          code: function () {
            return bn;
          },
          decode: function () {
            return mn;
          },
          encode: function () {
            return gn;
          },
          name: function () {
            return yn;
          },
        });
      var g = {};
      t.r(g),
        t.d(g, {
          code: function () {
            return kn;
          },
          decode: function () {
            return Zn;
          },
          encode: function () {
            return En;
          },
          name: function () {
            return xn;
          },
        });
      var m = {};
      t.r(m),
        t.d(m, {
          base58btc: function () {
            return _u;
          },
          base58flickr: function () {
            return Mu;
          },
        });
      var w = {};
      t.r(w),
        t.d(w, {
          base32: function () {
            return Lu;
          },
          base32hex: function () {
            return Hu;
          },
          base32hexpad: function () {
            return Ju;
          },
          base32hexpadupper: function () {
            return Ku;
          },
          base32hexupper: function () {
            return qu;
          },
          base32pad: function () {
            return Wu;
          },
          base32padupper: function () {
            return Vu;
          },
          base32upper: function () {
            return zu;
          },
          base32z: function () {
            return Gu;
          },
        });
      var D = {};
      t.r(D),
        t.d(D, {
          identity: function () {
            return ss;
          },
        });
      var x = {};
      t.r(x),
        t.d(x, {
          base2: function () {
            return is;
          },
        });
      var k = {};
      t.r(k),
        t.d(k, {
          base8: function () {
            return os;
          },
        });
      var E = {};
      t.r(E),
        t.d(E, {
          base10: function () {
            return cs;
          },
        });
      var Z = {};
      t.r(Z),
        t.d(Z, {
          base16: function () {
            return fs;
          },
          base16upper: function () {
            return ps;
          },
        });
      var A = {};
      t.r(A),
        t.d(A, {
          base36: function () {
            return hs;
          },
          base36upper: function () {
            return ls;
          },
        });
      var C = {};
      t.r(C),
        t.d(C, {
          base64: function () {
            return ds;
          },
          base64pad: function () {
            return vs;
          },
          base64url: function () {
            return ys;
          },
          base64urlpad: function () {
            return bs;
          },
        });
      var F = {};
      t.r(F),
        t.d(F, {
          base256emoji: function () {
            return Ds;
          },
        });
      var B = {};
      t.r(B),
        t.d(B, {
          sha256: function () {
            return Zs;
          },
          sha512: function () {
            return As;
          },
        });
      var P = {};
      t.r(P),
        t.d(P, {
          identity: function () {
            return Fs;
          },
        });
      var S = {};
      t.r(S),
        t.d(S, {
          code: function () {
            return Ps;
          },
          decode: function () {
            return Is;
          },
          encode: function () {
            return Ss;
          },
          name: function () {
            return Bs;
          },
        });
      var I = {};
      t.r(I),
        t.d(I, {
          code: function () {
            return Ns;
          },
          decode: function () {
            return Os;
          },
          encode: function () {
            return Rs;
          },
          name: function () {
            return Ts;
          },
        });
      var j = t(74165),
        U = t(15861),
        T = t(37762),
        N = t(15671),
        R = t(43144),
        O = function (e) {
          return Promise.reject(
            new Error('No base found for "'.concat(e, '"')),
          );
        },
        _ = (function () {
          function e(r) {
            (0, N.Z)(this, e),
              (this._basesByName = {}),
              (this._basesByPrefix = {}),
              (this._loadBase = r.loadBase || O);
            var t,
              n = (0, T.Z)(r.bases);
            try {
              for (n.s(); !(t = n.n()).done; ) {
                var a = t.value;
                this.addBase(a);
              }
            } catch (u) {
              n.e(u);
            } finally {
              n.f();
            }
          }
          return (
            (0, R.Z)(e, [
              {
                key: "addBase",
                value: function (e) {
                  if (
                    this._basesByName[e.name] ||
                    this._basesByPrefix[e.prefix]
                  )
                    throw new Error(
                      'Codec already exists for codec "'.concat(e.name, '"'),
                    );
                  (this._basesByName[e.name] = e),
                    (this._basesByPrefix[e.prefix] = e);
                },
              },
              {
                key: "removeBase",
                value: function (e) {
                  delete this._basesByName[e.name],
                    delete this._basesByPrefix[e.prefix];
                },
              },
              {
                key: "getBase",
                value: (function () {
                  var e = (0, U.Z)(
                    (0, j.Z)().mark(function e(r) {
                      var t;
                      return (0, j.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!this._basesByName[r]) {
                                  e.next = 2;
                                  break;
                                }
                                return e.abrupt("return", this._basesByName[r]);
                              case 2:
                                if (!this._basesByPrefix[r]) {
                                  e.next = 4;
                                  break;
                                }
                                return e.abrupt(
                                  "return",
                                  this._basesByPrefix[r],
                                );
                              case 4:
                                return (e.next = 6), this._loadBase(r);
                              case 6:
                                return (
                                  (t = e.sent),
                                  null == this._basesByName[t.name] &&
                                    null == this._basesByPrefix[t.prefix] &&
                                    this.addBase(t),
                                  e.abrupt("return", t)
                                );
                              case 9:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  return function (r) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "listBases",
                value: function () {
                  return Object.values(this._basesByName);
                },
              },
            ]),
            e
          );
        })(),
        M = function (e) {
          return Promise.reject(
            new Error('No codec found for "'.concat(e, '"')),
          );
        },
        L = (function () {
          function e(r) {
            (0, N.Z)(this, e),
              (this._codecsByName = {}),
              (this._codecsByCode = {}),
              (this._loadCodec = r.loadCodec || M);
            var t,
              n = (0, T.Z)(r.codecs);
            try {
              for (n.s(); !(t = n.n()).done; ) {
                var a = t.value;
                this.addCodec(a);
              }
            } catch (u) {
              n.e(u);
            } finally {
              n.f();
            }
          }
          return (
            (0, R.Z)(e, [
              {
                key: "addCodec",
                value: function (e) {
                  if (this._codecsByName[e.name] || this._codecsByCode[e.code])
                    throw new Error(
                      'Resolver already exists for codec "'.concat(e.name, '"'),
                    );
                  (this._codecsByName[e.name] = e),
                    (this._codecsByCode[e.code] = e);
                },
              },
              {
                key: "removeCodec",
                value: function (e) {
                  delete this._codecsByName[e.name],
                    delete this._codecsByCode[e.code];
                },
              },
              {
                key: "getCodec",
                value: (function () {
                  var e = (0, U.Z)(
                    (0, j.Z)().mark(function e(r) {
                      var t, n;
                      return (0, j.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  !(t =
                                    "string" === typeof r
                                      ? this._codecsByName
                                      : this._codecsByCode)[r]
                                ) {
                                  e.next = 3;
                                  break;
                                }
                                return e.abrupt("return", t[r]);
                              case 3:
                                return (e.next = 5), this._loadCodec(r);
                              case 5:
                                return (
                                  (n = e.sent),
                                  null == t[r] && this.addCodec(n),
                                  e.abrupt("return", n)
                                );
                              case 8:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  return function (r) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "listCodecs",
                value: function () {
                  return Object.values(this._codecsByName);
                },
              },
            ]),
            e
          );
        })(),
        z = function (e) {
          return Promise.reject(
            new Error('No hasher found for "'.concat(e, '"')),
          );
        },
        W = (function () {
          function e(r) {
            (0, N.Z)(this, e),
              (this._hashersByName = {}),
              (this._hashersByCode = {}),
              (this._loadHasher = r.loadHasher || z);
            var t,
              n = (0, T.Z)(r.hashers);
            try {
              for (n.s(); !(t = n.n()).done; ) {
                var a = t.value;
                this.addHasher(a);
              }
            } catch (u) {
              n.e(u);
            } finally {
              n.f();
            }
          }
          return (
            (0, R.Z)(e, [
              {
                key: "addHasher",
                value: function (e) {
                  if (
                    this._hashersByName[e.name] ||
                    this._hashersByCode[e.code]
                  )
                    throw new Error(
                      'Resolver already exists for codec "'.concat(e.name, '"'),
                    );
                  (this._hashersByName[e.name] = e),
                    (this._hashersByCode[e.code] = e);
                },
              },
              {
                key: "removeHasher",
                value: function (e) {
                  delete this._hashersByName[e.name],
                    delete this._hashersByCode[e.code];
                },
              },
              {
                key: "getHasher",
                value: (function () {
                  var e = (0, U.Z)(
                    (0, j.Z)().mark(function e(r) {
                      var t, n;
                      return (0, j.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  !(t =
                                    "string" === typeof r
                                      ? this._hashersByName
                                      : this._hashersByCode)[r]
                                ) {
                                  e.next = 3;
                                  break;
                                }
                                return e.abrupt("return", t[r]);
                              case 3:
                                return (e.next = 5), this._loadHasher(r);
                              case 5:
                                return (
                                  (n = e.sent),
                                  null == t[r] && this.addHasher(n),
                                  e.abrupt("return", n)
                                );
                              case 8:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  return function (r) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "listHashers",
                value: function () {
                  return Object.values(this._hashersByName);
                },
              },
            ]),
            e
          );
        })(),
        V = t(18530),
        H = t(31149),
        q = t(16629),
        J = 42;
      var K = {
        float64: !0,
        typeEncoders: {
          Object: function (e) {
            if (e.asCID !== e) return null;
            var r = q.CID.asCID(e);
            if (!r) return null;
            var t = new Uint8Array(r.bytes.byteLength + 1);
            return (
              t.set(r.bytes, 1),
              [new H.WU(H.Dy.tag, J), new H.WU(H.Dy.bytes, t)]
            );
          },
          undefined: function () {
            throw new Error(
              "`undefined` is not supported by the IPLD Data Model and cannot be encoded",
            );
          },
          number: function (e) {
            if (Number.isNaN(e))
              throw new Error(
                "`NaN` is not supported by the IPLD Data Model and cannot be encoded",
              );
            if (e === 1 / 0 || e === -1 / 0)
              throw new Error(
                "`Infinity` and `-Infinity` is not supported by the IPLD Data Model and cannot be encoded",
              );
            return null;
          },
        },
      };
      var G = {
        allowIndefinite: !1,
        coerceUndefinedToNull: !0,
        allowNaN: !1,
        allowInfinity: !1,
        allowBigInt: !0,
        strict: !0,
        useMaps: !1,
        tags: [],
      };
      G.tags[J] = function (e) {
        if (0 !== e[0])
          throw new Error("Invalid CID for CBOR tag 42; expected leading 0x00");
        return q.CID.decode(e.subarray(1));
      };
      var Y = "dag-cbor",
        Q = 113,
        X = function (e) {
          return H.cv(e, K);
        },
        $ = function (e) {
          return H.Jx(e, G);
        },
        ee = t(11752),
        re = t(61120),
        te = t(60136),
        ne = t(27277),
        ae = t(53545),
        ue = t(24426),
        se = t(98737),
        ie = t(82651),
        oe = t(40310),
        ce = t(98912),
        fe = t(12741),
        pe = (function (e, r, t, n, a, u, s, i, o) {
          (0, te.Z)(f, e);
          var c = (0, ne.Z)(f);
          function f() {
            var e;
            return (0, N.Z)(this, f), ((e = c.call(this)).inRecursive = []), e;
          }
          return (
            (0, R.Z)(f, [
              {
                key: "prefix",
                value: function (e) {
                  var r = this.inRecursive[this.inRecursive.length - 1];
                  r &&
                    (r.type === ie.D.array &&
                      (r.elements++, 1 !== r.elements && e.push([44])),
                    r.type === ie.D.map &&
                      (r.elements++,
                      1 !== r.elements &&
                        (r.elements % 2 === 1 ? e.push([44]) : e.push([58]))));
                },
              },
              {
                key: r,
                value: function (e, r) {
                  this.prefix(e);
                  for (
                    var t = String(r.value), n = [], a = 0;
                    a < t.length;
                    a++
                  )
                    n[a] = t.charCodeAt(a);
                  e.push(n);
                },
              },
              {
                key: t,
                value: function (e, r) {
                  this[ie.D.uint.major](e, r);
                },
              },
              {
                key: n,
                value: function (e, r) {
                  throw new Error(
                    "".concat(ce.OO, " unsupported type: Uint8Array"),
                  );
                },
              },
              {
                key: a,
                value: function (e, r) {
                  this.prefix(e);
                  var t = (0, fe.mL)(JSON.stringify(r.value));
                  e.push(t.length > 32 ? (0, fe.Dz)(t) : t);
                },
              },
              {
                key: u,
                value: function (e, r) {
                  this.prefix(e),
                    this.inRecursive.push({ type: ie.D.array, elements: 0 }),
                    e.push([91]);
                },
              },
              {
                key: s,
                value: function (e, r) {
                  this.prefix(e),
                    this.inRecursive.push({ type: ie.D.map, elements: 0 }),
                    e.push([123]);
                },
              },
              { key: i, value: function (e, r) {} },
              {
                key: o,
                value: function (e, r) {
                  if ("break" === r.type.name) {
                    var t = this.inRecursive.pop();
                    if (t) {
                      if (t.type === ie.D.array) e.push([93]);
                      else {
                        if (t.type !== ie.D.map)
                          throw new Error(
                            "Unexpected recursive type; this should not happen!",
                          );
                        e.push([125]);
                      }
                      return;
                    }
                    throw new Error(
                      "Unexpected break; this should not happen!",
                    );
                  }
                  if (void 0 === r.value)
                    throw new Error(
                      "".concat(ce.OO, " unsupported type: undefined"),
                    );
                  if ((this.prefix(e), "true" !== r.type.name))
                    if ("false" !== r.type.name)
                      if ("null" !== r.type.name) {
                        for (
                          var n = String(r.value), a = [], u = !1, s = 0;
                          s < n.length;
                          s++
                        )
                          (a[s] = n.charCodeAt(s)),
                            u ||
                              (46 !== a[s] && 101 !== a[s] && 69 !== a[s]) ||
                              (u = !0);
                        u || (a.push(46), a.push(48)), e.push(a);
                      } else e.push([110, 117, 108, 108]);
                    else e.push([102, 97, 108, 115, 101]);
                  else e.push([116, 114, 117, 101]);
                },
              },
            ]),
            f
          );
        })(
          (0, se.Z)(Array),
          ie.D.uint.major,
          ie.D.negint.major,
          ie.D.bytes.major,
          ie.D.string.major,
          ie.D.array.major,
          ie.D.map.major,
          ie.D.tag.major,
          ie.D.float.major,
        );
      var he = {
        addBreakTokens: !0,
        mapSorter: function (e, r) {
          if (Array.isArray(e[0]) || Array.isArray(r[0]))
            throw new Error(
              "".concat(ce.OO, " complex map keys are not supported"),
            );
          var t = e[0],
            n = r[0];
          if (t.type !== ie.D.string || n.type !== ie.D.string)
            throw new Error(
              "".concat(ce.OO, " non-string map keys are not supported"),
            );
          if (t < n) return -1;
          if (t > n) return 1;
          throw new Error(
            "".concat(
              ce.OO,
              " unexpected duplicate map keys, this is not supported",
            ),
          );
        },
      };
      var le = t(93433),
        de = t(22548),
        ve = (function () {
          function e(r) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            (0, N.Z)(this, e),
              (this.pos = 0),
              (this.data = r),
              (this.options = t),
              (this.modeStack = ["value"]),
              (this.lastToken = "");
          }
          return (
            (0, R.Z)(e, [
              {
                key: "done",
                value: function () {
                  return this.pos >= this.data.length;
                },
              },
              {
                key: "ch",
                value: function () {
                  return this.data[this.pos];
                },
              },
              {
                key: "currentMode",
                value: function () {
                  return this.modeStack[this.modeStack.length - 1];
                },
              },
              {
                key: "skipWhitespace",
                value: function () {
                  for (
                    var e = this.ch();
                    32 === e || 9 === e || 13 === e || 10 === e;

                  )
                    e = this.data[++this.pos];
                },
              },
              {
                key: "expect",
                value: function (e) {
                  if (this.data.length - this.pos < e.length)
                    throw new Error(
                      ""
                        .concat(ce.IR, " unexpected end of input at position ")
                        .concat(this.pos),
                    );
                  for (var r = 0; r < e.length; r++)
                    if (this.data[this.pos++] !== e[r])
                      throw new Error(
                        ""
                          .concat(ce.IR, " unexpected token at position ")
                          .concat(this.pos, ", expected to find '")
                          .concat(
                            String.fromCharCode.apply(String, (0, le.Z)(e)),
                            "'",
                          ),
                      );
                },
              },
              {
                key: "parseNumber",
                value: function () {
                  var e = this,
                    r = this.pos,
                    t = !1,
                    n = !1,
                    a = function (r) {
                      for (; !e.done(); ) {
                        var t = e.ch();
                        if (!r.includes(t)) break;
                        e.pos++;
                      }
                    };
                  if (
                    (45 === this.ch() && ((t = !0), this.pos++),
                    48 === this.ch())
                  ) {
                    if ((this.pos++, 46 !== this.ch()))
                      return new ie.W(ie.D.uint, 0, this.pos - r);
                    this.pos++, (n = !0);
                  }
                  if (
                    (a([48, 49, 50, 51, 52, 53, 54, 55, 56, 57]),
                    t && this.pos === r + 1)
                  )
                    throw new Error(
                      ""
                        .concat(ce.IR, " unexpected token at position ")
                        .concat(this.pos),
                    );
                  if (!this.done() && 46 === this.ch()) {
                    if (n)
                      throw new Error(
                        ""
                          .concat(ce.IR, " unexpected token at position ")
                          .concat(this.pos),
                      );
                    (n = !0),
                      this.pos++,
                      a([48, 49, 50, 51, 52, 53, 54, 55, 56, 57]);
                  }
                  this.done() ||
                    (101 !== this.ch() && 69 !== this.ch()) ||
                    ((n = !0),
                    this.pos++,
                    this.done() ||
                      (43 !== this.ch() && 45 !== this.ch()) ||
                      this.pos++,
                    a([48, 49, 50, 51, 52, 53, 54, 55, 56, 57]));
                  var u = String.fromCharCode.apply(
                      null,
                      this.data.subarray(r, this.pos),
                    ),
                    s = parseFloat(u);
                  return n
                    ? new ie.W(ie.D.float, s, this.pos - r)
                    : !0 !== this.options.allowBigInt || Number.isSafeInteger(s)
                      ? new ie.W(
                          s >= 0 ? ie.D.uint : ie.D.negint,
                          s,
                          this.pos - r,
                        )
                      : new ie.W(
                          s >= 0 ? ie.D.uint : ie.D.negint,
                          BigInt(u),
                          this.pos - r,
                        );
                },
              },
              {
                key: "parseString",
                value: function () {
                  var e = this;
                  if (34 !== this.ch())
                    throw new Error(
                      ""
                        .concat(ce.IR, " unexpected character at position ")
                        .concat(this.pos, "; this shouldn't happen"),
                    );
                  this.pos++;
                  for (
                    var r = this.pos, t = 0;
                    r < this.data.length && t < 65536;
                    r++, t++
                  ) {
                    var n = this.data[r];
                    if (92 === n || n < 32 || n >= 128) break;
                    if (34 === n) {
                      var a = String.fromCharCode.apply(
                        null,
                        this.data.subarray(this.pos, r),
                      );
                      return (this.pos = r + 1), new ie.W(ie.D.string, a, t);
                    }
                  }
                  for (
                    var u = this.pos,
                      s = [],
                      i = function () {
                        if (e.pos + 4 >= e.data.length)
                          throw new Error(
                            ""
                              .concat(
                                ce.IR,
                                " unexpected end of unicode escape sequence at position ",
                              )
                              .concat(e.pos),
                          );
                        for (var r = 0, t = 0; t < 4; t++) {
                          var n = e.ch();
                          if (n >= 48 && n <= 57) n -= 48;
                          else if (n >= 97 && n <= 102) n = n - 97 + 10;
                          else {
                            if (!(n >= 65 && n <= 70))
                              throw new Error(
                                ""
                                  .concat(
                                    ce.IR,
                                    " unexpected unicode escape character at position ",
                                  )
                                  .concat(e.pos),
                              );
                            n = n - 65 + 10;
                          }
                          (r = 16 * r + n), e.pos++;
                        }
                        return r;
                      },
                      o = function () {
                        var r,
                          t,
                          n,
                          a,
                          u = e.ch(),
                          i = null,
                          o = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                        if (e.pos + o > e.data.length)
                          throw new Error(
                            ""
                              .concat(
                                ce.IR,
                                " unexpected unicode sequence at position ",
                              )
                              .concat(e.pos),
                          );
                        switch (o) {
                          case 1:
                            u < 128 && (i = u);
                            break;
                          case 2:
                            128 === (192 & (r = e.data[e.pos + 1])) &&
                              (a = ((31 & u) << 6) | (63 & r)) > 127 &&
                              (i = a);
                            break;
                          case 3:
                            (r = e.data[e.pos + 1]),
                              (t = e.data[e.pos + 2]),
                              128 === (192 & r) &&
                                128 === (192 & t) &&
                                (a =
                                  ((15 & u) << 12) |
                                  ((63 & r) << 6) |
                                  (63 & t)) > 2047 &&
                                (a < 55296 || a > 57343) &&
                                (i = a);
                            break;
                          case 4:
                            (r = e.data[e.pos + 1]),
                              (t = e.data[e.pos + 2]),
                              (n = e.data[e.pos + 3]),
                              128 === (192 & r) &&
                                128 === (192 & t) &&
                                128 === (192 & n) &&
                                (a =
                                  ((15 & u) << 18) |
                                  ((63 & r) << 12) |
                                  ((63 & t) << 6) |
                                  (63 & n)) > 65535 &&
                                a < 1114112 &&
                                (i = a);
                        }
                        null === i
                          ? ((i = 65533), (o = 1))
                          : i > 65535 &&
                            ((i -= 65536),
                            s.push(((i >>> 10) & 1023) | 55296),
                            (i = 56320 | (1023 & i))),
                          s.push(i),
                          (e.pos += o);
                      };
                    !this.done();

                  ) {
                    var c = this.ch(),
                      f = void 0;
                    switch (c) {
                      case 92:
                        if ((this.pos++, this.done()))
                          throw new Error(
                            ""
                              .concat(
                                ce.IR,
                                " unexpected string termination at position ",
                              )
                              .concat(this.pos),
                          );
                        switch (((f = this.ch()), this.pos++, f)) {
                          case 34:
                          case 39:
                          case 92:
                          case 47:
                            s.push(f);
                            break;
                          case 98:
                            s.push(8);
                            break;
                          case 116:
                            s.push(9);
                            break;
                          case 110:
                            s.push(10);
                            break;
                          case 102:
                            s.push(12);
                            break;
                          case 114:
                            s.push(13);
                            break;
                          case 117:
                            s.push(i());
                            break;
                          default:
                            throw new Error(
                              ""
                                .concat(
                                  ce.IR,
                                  " unexpected string escape character at position ",
                                )
                                .concat(this.pos),
                            );
                        }
                        break;
                      case 34:
                        return (
                          this.pos++,
                          new ie.W(ie.D.string, (0, fe.Pu)(s), this.pos - u)
                        );
                      default:
                        if (c < 32)
                          throw new Error(
                            ""
                              .concat(
                                ce.IR,
                                " invalid control character at position ",
                              )
                              .concat(this.pos),
                          );
                        c < 128 ? (s.push(c), this.pos++) : o();
                    }
                  }
                  throw new Error(
                    ""
                      .concat(ce.IR, " unexpected end of string at position ")
                      .concat(this.pos),
                  );
                },
              },
              {
                key: "parseValue",
                value: function () {
                  switch (this.ch()) {
                    case 123:
                      return (
                        this.modeStack.push("obj-start"),
                        this.pos++,
                        new ie.W(ie.D.map, 1 / 0, 1)
                      );
                    case 91:
                      return (
                        this.modeStack.push("array-start"),
                        this.pos++,
                        new ie.W(ie.D.array, 1 / 0, 1)
                      );
                    case 34:
                      return this.parseString();
                    case 110:
                      return (
                        this.expect([110, 117, 108, 108]),
                        new ie.W(ie.D.null, null, 4)
                      );
                    case 102:
                      return (
                        this.expect([102, 97, 108, 115, 101]),
                        new ie.W(ie.D.false, !1, 5)
                      );
                    case 116:
                      return (
                        this.expect([116, 114, 117, 101]),
                        new ie.W(ie.D.true, !0, 4)
                      );
                    case 45:
                    case 48:
                    case 49:
                    case 50:
                    case 51:
                    case 52:
                    case 53:
                    case 54:
                    case 55:
                    case 56:
                    case 57:
                      return this.parseNumber();
                    default:
                      throw new Error(
                        ""
                          .concat(ce.IR, " unexpected character at position ")
                          .concat(this.pos),
                      );
                  }
                },
              },
              {
                key: "next",
                value: function () {
                  switch ((this.skipWhitespace(), this.currentMode())) {
                    case "value":
                      return this.modeStack.pop(), this.parseValue();
                    case "array-value":
                      if ((this.modeStack.pop(), 93 === this.ch()))
                        return (
                          this.pos++,
                          this.skipWhitespace(),
                          new ie.W(ie.D.break, void 0, 1)
                        );
                      if (44 !== this.ch())
                        throw new Error(
                          ""
                            .concat(ce.IR, " unexpected character at position ")
                            .concat(
                              this.pos,
                              ", was expecting array delimiter but found '",
                            )
                            .concat(String.fromCharCode(this.ch()), "'"),
                        );
                      return (
                        this.pos++,
                        this.modeStack.push("array-value"),
                        this.skipWhitespace(),
                        this.parseValue()
                      );
                    case "array-start":
                      return (
                        this.modeStack.pop(),
                        93 === this.ch()
                          ? (this.pos++,
                            this.skipWhitespace(),
                            new ie.W(ie.D.break, void 0, 1))
                          : (this.modeStack.push("array-value"),
                            this.skipWhitespace(),
                            this.parseValue())
                      );
                    case "obj-key":
                      if (125 === this.ch())
                        return (
                          this.modeStack.pop(),
                          this.pos++,
                          this.skipWhitespace(),
                          new ie.W(ie.D.break, void 0, 1)
                        );
                      if (44 !== this.ch())
                        throw new Error(
                          ""
                            .concat(ce.IR, " unexpected character at position ")
                            .concat(
                              this.pos,
                              ", was expecting object delimiter but found '",
                            )
                            .concat(String.fromCharCode(this.ch()), "'"),
                        );
                      this.pos++, this.skipWhitespace();
                    case "obj-start":
                      if ((this.modeStack.pop(), 125 === this.ch()))
                        return (
                          this.pos++,
                          this.skipWhitespace(),
                          new ie.W(ie.D.break, void 0, 1)
                        );
                      var e = this.parseString();
                      if ((this.skipWhitespace(), 58 !== this.ch()))
                        throw new Error(
                          ""
                            .concat(ce.IR, " unexpected character at position ")
                            .concat(
                              this.pos,
                              ", was expecting key/value delimiter ':' but found '",
                            )
                            .concat(String.fromCharCode(this.ch()), "'"),
                        );
                      return this.pos++, this.modeStack.push("obj-value"), e;
                    case "obj-value":
                      return (
                        this.modeStack.pop(),
                        this.modeStack.push("obj-key"),
                        this.skipWhitespace(),
                        this.parseValue()
                      );
                    default:
                      throw new Error(
                        ""
                          .concat(ce.IR, " unexpected parse state at position ")
                          .concat(this.pos, "; this shouldn't happen"),
                      );
                  }
                },
              },
            ]),
            e
          );
        })();
      function ye(e) {
        var r = ue.base64.encode(e).slice(1);
        return [
          new H.WU(H.Dy.map, 1 / 0, 1),
          new H.WU(H.Dy.string, "/", 1),
          new H.WU(H.Dy.map, 1 / 0, 1),
          new H.WU(H.Dy.string, "bytes", 5),
          new H.WU(H.Dy.string, r, r.length),
          new H.WU(H.Dy.break, void 0, 1),
          new H.WU(H.Dy.break, void 0, 1),
        ];
      }
      var be = {
          typeEncoders: {
            Object: function (e) {
              if (e.asCID !== e) return null;
              var r = ae.k0.asCID(e);
              if (!r) return null;
              var t = r.toString();
              return [
                new H.WU(H.Dy.map, 1 / 0, 1),
                new H.WU(H.Dy.string, "/", 1),
                new H.WU(H.Dy.string, t, t.length),
                new H.WU(H.Dy.break, void 0, 1),
              ];
            },
            Uint8Array: ye,
            Buffer: ye,
            undefined: function () {
              throw new Error(
                "`undefined` is not supported by the IPLD Data Model and cannot be encoded",
              );
            },
            number: function (e) {
              if (Number.isNaN(e))
                throw new Error(
                  "`NaN` is not supported by the IPLD Data Model and cannot be encoded",
                );
              if (e === 1 / 0 || e === -1 / 0)
                throw new Error(
                  "`Infinity` and `-Infinity` is not supported by the IPLD Data Model and cannot be encoded",
                );
              return null;
            },
          },
        },
        ge = (function (e) {
          (0, te.Z)(t, e);
          var r = (0, ne.Z)(t);
          function t(e, n) {
            var a;
            return (
              (0, N.Z)(this, t), ((a = r.call(this, e, n)).tokenBuffer = []), a
            );
          }
          return (
            (0, R.Z)(t, [
              {
                key: "done",
                value: function () {
                  return (
                    0 === this.tokenBuffer.length &&
                    (0, ee.Z)((0, re.Z)(t.prototype), "done", this).call(this)
                  );
                },
              },
              {
                key: "_next",
                value: function () {
                  return this.tokenBuffer.length > 0
                    ? this.tokenBuffer.pop()
                    : (0, ee.Z)((0, re.Z)(t.prototype), "next", this).call(
                        this,
                      );
                },
              },
              {
                key: "next",
                value: function () {
                  var e = this._next();
                  if (e.type === H.Dy.map) {
                    var r = this._next();
                    if (r.type === H.Dy.string && "/" === r.value) {
                      var t = this._next();
                      if (t.type === H.Dy.string) {
                        if (this._next().type !== H.Dy.break)
                          throw new Error("Invalid encoded CID form");
                        return (
                          this.tokenBuffer.push(t), new H.WU(H.Dy.tag, 42, 0)
                        );
                      }
                      if (t.type === H.Dy.map) {
                        var n = this._next();
                        if (n.type === H.Dy.string && "bytes" === n.value) {
                          var a = this._next();
                          if (a.type === H.Dy.string) {
                            for (var u = 0; u < 2; u++) {
                              if (this._next().type !== H.Dy.break)
                                throw new Error("Invalid encoded Bytes form");
                            }
                            var s = ue.base64.decode("m".concat(a.value));
                            return new H.WU(H.Dy.bytes, s, a.value.length);
                          }
                          this.tokenBuffer.push(a);
                        }
                        this.tokenBuffer.push(n);
                      }
                      this.tokenBuffer.push(t);
                    }
                    this.tokenBuffer.push(r);
                  }
                  return e;
                },
              },
            ]),
            t
          );
        })(ve),
        me = {
          allowIndefinite: !1,
          allowUndefined: !1,
          allowNaN: !1,
          allowInfinity: !1,
          allowBigInt: !0,
          strict: !0,
          useMaps: !1,
          tags: [],
        };
      me.tags[42] = ae.k0.parse;
      var we = "dag-json",
        De = 297,
        xe = function (e) {
          return (function (e, r) {
            return (r = Object.assign({}, he, r)), (0, oe.w$)(e, new pe(), r);
          })(e, be);
        },
        ke = function (e) {
          return (function (e, r) {
            return (
              (r = Object.assign({ tokenizer: new ve(e, r) }, r)),
              (0, de.Jx)(e, r)
            );
          })(e, Object.assign(me, { tokenizer: new ge(e, me) }));
        },
        Ee = t(8990),
        Ze = t.t(Ee, 2),
        Ae = t(60173),
        Ce = t(15273),
        Fe = t(29439),
        Be = t(97326),
        Pe = t(1413),
        Se = "[a-fA-F\\d:]",
        Ie = function (e) {
          return e && e.includeBoundaries
            ? "(?:(?<=\\s|^)(?=".concat(Se, ")|(?<=").concat(Se, ")(?=\\s|$))")
            : "";
        },
        je =
          "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",
        Ue = "[a-fA-F\\d]{1,4}",
        Te = "\n(?:\n(?:"
          .concat(Ue, ":){7}(?:")
          .concat(
            Ue,
            "|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:",
          )
          .concat(Ue, ":){6}(?:")
          .concat(je, "|:")
          .concat(
            Ue,
            "|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:",
          )
          .concat(Ue, ":){5}(?::")
          .concat(je, "|(?::")
          .concat(
            Ue,
            "){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:",
          )
          .concat(Ue, ":){4}(?:(?::")
          .concat(Ue, "){0,1}:")
          .concat(je, "|(?::")
          .concat(
            Ue,
            "){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:",
          )
          .concat(Ue, ":){3}(?:(?::")
          .concat(Ue, "){0,2}:")
          .concat(je, "|(?::")
          .concat(
            Ue,
            "){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:",
          )
          .concat(Ue, ":){2}(?:(?::")
          .concat(Ue, "){0,3}:")
          .concat(je, "|(?::")
          .concat(
            Ue,
            "){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:",
          )
          .concat(Ue, ":){1}(?:(?::")
          .concat(Ue, "){0,4}:")
          .concat(je, "|(?::")
          .concat(
            Ue,
            "){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::",
          )
          .concat(Ue, "){0,5}:")
          .concat(je, "|(?::")
          .concat(
            Ue,
            "){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n",
          )
          .replace(/\s*\/\/.*$/gm, "")
          .replace(/\n/g, "")
          .trim(),
        Ne = new RegExp("(?:^".concat(je, "$)|(?:^").concat(Te, "$)")),
        Re = new RegExp("^".concat(je, "$")),
        Oe = new RegExp("^".concat(Te, "$")),
        _e = function (e) {
          return e && e.exact
            ? Ne
            : new RegExp(
                "(?:"
                  .concat(Ie(e))
                  .concat(je)
                  .concat(Ie(e), ")|(?:")
                  .concat(Ie(e))
                  .concat(Te)
                  .concat(Ie(e), ")"),
                "g",
              );
        };
      (_e.v4 = function (e) {
        return e && e.exact
          ? Re
          : new RegExp("".concat(Ie(e)).concat(je).concat(Ie(e)), "g");
      }),
        (_e.v6 = function (e) {
          return e && e.exact
            ? Oe
            : new RegExp("".concat(Ie(e)).concat(Te).concat(Ie(e)), "g");
        });
      var Me = _e;
      var Le = Object.prototype.toString;
      var ze = {
        global: "g",
        ignoreCase: "i",
        multiline: "m",
        dotAll: "s",
        sticky: "y",
        unicode: "u",
      };
      function We(e) {
        var r,
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (((r = e), "[object RegExp]" !== Le.call(r)))
          throw new TypeError("Expected a RegExp instance");
        var n = Object.keys(ze)
            .map(function (r) {
              return ("boolean" === typeof t[r] ? t[r] : e[r]) ? ze[r] : "";
            })
            .join(""),
          a = new RegExp(t.source || e.source, n);
        return (
          (a.lastIndex =
            "number" === typeof t.lastIndex ? t.lastIndex : e.lastIndex),
          a
        );
      }
      function Ve(e, r) {
        (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
          .timeout;
        try {
          return (function (e) {
            var r = function () {
              return e.apply(void 0, arguments);
            };
            return (
              Object.defineProperty(r, "name", {
                value: "functionTimeout(".concat(e.name || "<anonymous>", ")"),
                configurable: !0,
              }),
              r
            );
          })(function () {
            return We(e).test(r);
          })();
        } catch (t) {
          throw t;
        }
      }
      var He = 15,
        qe = 45,
        Je = { timeout: 400 };
      function Ke(e) {
        return Ve(Me({ exact: !0 }), e.slice(0, qe), Je);
      }
      function Ge(e) {
        return Ve(Me.v6({ exact: !0 }), e.slice(0, qe), Je);
      }
      var Ye = t(82051),
        Qe = function (e) {
          return Ve(Me.v4({ exact: !0 }), e.slice(0, He), Je);
        },
        Xe = Ge,
        $e = function e(r) {
          var t,
            n = 0;
          if (((r = r.trim()), Qe(r)))
            (t = new Uint8Array(n + 4)),
              r.split(/\./g).forEach(function (e) {
                t[n++] = 255 & parseInt(e, 10);
              });
          else if (Xe(r)) {
            var a,
              u = r.split(":", 8);
            for (a = 0; a < u.length; a++) {
              var s = void 0;
              Qe(u[a]) &&
                ((s = e(u[a])),
                (u[a] = (0, Ye.toString)(s.slice(0, 2), "base16"))),
                null != s &&
                  ++a < 8 &&
                  u.splice(a, 0, (0, Ye.toString)(s.slice(2, 4), "base16"));
            }
            if ("" === u[0]) for (; u.length < 8; ) u.unshift("0");
            else if ("" === u[u.length - 1]) for (; u.length < 8; ) u.push("0");
            else if (u.length < 8) {
              for (a = 0; a < u.length && "" !== u[a]; a++);
              var i = [a, 1];
              for (a = 9 - u.length; a > 0; a--) i.push("0");
              u.splice.apply(u, i);
            }
            for (t = new Uint8Array(n + 16), a = 0; a < u.length; a++) {
              var o = parseInt(u[a], 16);
              (t[n++] = (o >> 8) & 255), (t[n++] = 255 & o);
            }
          }
          if (null == t) throw new Error('invalid ip address "'.concat(r, '"'));
          return t;
        },
        er = function (e) {
          var r,
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n = arguments.length > 2 ? arguments[2] : void 0;
          (t = ~~t), (n = null !== (r = n) && void 0 !== r ? r : e.length - t);
          var a = [],
            u = "",
            s = new DataView(e.buffer);
          if (4 === n) {
            for (var i = 0; i < n; i++) a.push(e[t + i]);
            u = a.join(".");
          } else if (16 === n) {
            for (var o = 0; o < n; o += 2)
              a.push(s.getUint16(t + o).toString(16));
            u = (u = (u = a.join(":")).replace(
              /(^|:)0(:0)*:0(:|$)/,
              "$1::$3",
            )).replace(/:{3,4}/, "::");
          }
          return u;
        },
        rr = -1,
        tr = {},
        nr = {};
      function ar(e, r, t, n, a) {
        return {
          code: e,
          size: r,
          name: t,
          resolvable: Boolean(n),
          path: Boolean(a),
        };
      }
      function ur(e) {
        if ("number" === typeof e) {
          if (null != nr[e]) return nr[e];
          throw new Error("no protocol with code: ".concat(e));
        }
        if ("string" === typeof e) {
          if (null != tr[e]) return tr[e];
          throw new Error("no protocol with name: ".concat(e));
        }
        throw new Error("invalid protocol id type: ".concat(typeof e));
      }
      [
        [4, 32, "ip4"],
        [6, 16, "tcp"],
        [33, 16, "dccp"],
        [41, 128, "ip6"],
        [42, rr, "ip6zone"],
        [53, rr, "dns", !0],
        [54, rr, "dns4", !0],
        [55, rr, "dns6", !0],
        [56, rr, "dnsaddr", !0],
        [132, 16, "sctp"],
        [273, 16, "udp"],
        [275, 0, "p2p-webrtc-star"],
        [276, 0, "p2p-webrtc-direct"],
        [277, 0, "p2p-stardust"],
        [280, 0, "webrtc"],
        [290, 0, "p2p-circuit"],
        [301, 0, "udt"],
        [302, 0, "utp"],
        [400, rr, "unix", !1, !0],
        [421, rr, "ipfs"],
        [421, rr, "p2p"],
        [443, 0, "https"],
        [444, 96, "onion"],
        [445, 296, "onion3"],
        [446, rr, "garlic64"],
        [460, 0, "quic"],
        [465, 0, "webtransport"],
        [466, rr, "certhash"],
        [477, 0, "ws"],
        [478, 0, "wss"],
        [479, 0, "p2p-websocket-star"],
        [480, 0, "http"],
        [777, rr, "memory"],
      ].forEach(function (e) {
        var r = ar.apply(void 0, (0, le.Z)(e));
        (nr[r.code] = r), (tr[r.name] = r);
      });
      var sr = t(71128),
        ir = t(86898),
        or = t(8315),
        cr = t(74561),
        fr = t(46765),
        pr = t(83466);
      function hr(e, r) {
        switch (ur(e).code) {
          case 4:
          case 41:
            return (function (e) {
              var r = er(e, 0, e.length);
              if (null == r) throw new Error("ipBuff is required");
              if (!Ke(r))
                throw new Error('invalid ip address "'.concat(r, '"'));
              return r;
            })(r);
          case 6:
          case 273:
          case 33:
          case 132:
            return gr(r).toString();
          case 53:
          case 54:
          case 55:
          case 56:
          case 400:
          case 777:
            return (function (e) {
              var r = cr.decode(e);
              if (((e = e.slice(cr.decode.bytes)), e.length !== r))
                throw new Error("inconsistent lengths");
              return (0, Ye.toString)(e);
            })(r);
          case 421:
            return (function (e) {
              var r = cr.decode(e),
                t = e.slice(cr.decode.bytes);
              if (t.length !== r) throw new Error("inconsistent lengths");
              return (0, Ye.toString)(t, "base58btc");
            })(r);
          case 444:
          case 445:
            return mr(r);
          case 466:
            return (function (e) {
              var r = cr.decode(e),
                t = e.slice(cr.decode.bytes);
              if (t.length !== r) throw new Error("inconsistent lengths");
              return "u" + (0, Ye.toString)(t, "base64url");
            })(r);
          default:
            return (0, Ye.toString)(r, "base16");
        }
      }
      function lr(e, r) {
        switch (ur(e).code) {
          case 4:
          case 41:
            return yr(r);
          case 6:
          case 273:
          case 33:
          case 132:
            return br(parseInt(r, 10));
          case 53:
          case 54:
          case 55:
          case 56:
          case 400:
          case 777:
            return (function (e) {
              var r = (0, fr.fromString)(e),
                t = Uint8Array.from(cr.encode(r.length));
              return (0, pr.concat)([t, r], t.length + r.length);
            })(r);
          case 421:
            return (function (e) {
              var r;
              r =
                "Q" === e[0] || "1" === e[0]
                  ? or.decode(ir.base58btc.decode("z".concat(e))).bytes
                  : q.CID.parse(e).multihash.bytes;
              var t = Uint8Array.from(cr.encode(r.length));
              return (0, pr.concat)([t, r], t.length + r.length);
            })(r);
          case 444:
            return (function (e) {
              var r = e.split(":");
              if (2 !== r.length)
                throw new Error(
                  "failed to parse onion addr: [\"'".concat(
                    r.join('", "'),
                    "'\"]' does not contain a port number",
                  ),
                );
              if (16 !== r[0].length)
                throw new Error(
                  "failed to parse onion addr: ".concat(
                    r[0],
                    " not a Tor onion address.",
                  ),
                );
              var t = sr.base32.decode("b" + r[0]),
                n = parseInt(r[1], 10);
              if (n < 1 || n > 65536)
                throw new Error("Port number is not in range(1, 65536)");
              var a = br(n);
              return (0, pr.concat)([t, a], t.length + a.length);
            })(r);
          case 445:
            return (function (e) {
              var r = e.split(":");
              if (2 !== r.length)
                throw new Error(
                  "failed to parse onion addr: [\"'".concat(
                    r.join('", "'),
                    "'\"]' does not contain a port number",
                  ),
                );
              if (56 !== r[0].length)
                throw new Error(
                  "failed to parse onion addr: ".concat(
                    r[0],
                    " not a Tor onion3 address.",
                  ),
                );
              var t = sr.base32.decode("b".concat(r[0])),
                n = parseInt(r[1], 10);
              if (n < 1 || n > 65536)
                throw new Error("Port number is not in range(1, 65536)");
              var a = br(n);
              return (0, pr.concat)([t, a], t.length + a.length);
            })(r);
          case 466:
            return (function (e) {
              var r = vr.decode(e),
                t = Uint8Array.from(cr.encode(r.length));
              return (0, pr.concat)([t, r], t.length + r.length);
            })(r);
          default:
            return (0, fr.fromString)(r, "base16");
        }
      }
      var dr = Object.values(Ce.bases).map(function (e) {
          return e.decoder;
        }),
        vr = (function () {
          var e = dr[0].or(dr[1]);
          return (
            dr.slice(2).forEach(function (r) {
              return (e = e.or(r));
            }),
            e
          );
        })();
      function yr(e) {
        if (!Ke(e)) throw new Error('invalid ip address "'.concat(e, '"'));
        return $e(e);
      }
      function br(e) {
        var r = new ArrayBuffer(2);
        return new DataView(r).setUint16(0, e), new Uint8Array(r);
      }
      function gr(e) {
        return new DataView(e.buffer).getUint16(e.byteOffset);
      }
      function mr(e) {
        var r = e.slice(0, e.length - 2),
          t = e.slice(e.length - 2),
          n = (0, Ye.toString)(r, "base32"),
          a = gr(t);
        return "".concat(n, ":").concat(a);
      }
      function wr(e) {
        return e.map(function (e) {
          var r = Pr(e);
          return null != e[1] ? [r.code, hr(r.code, e[1])] : [r.code];
        });
      }
      function Dr(e) {
        return Ar(
          (0, pr.concat)(
            e.map(function (e) {
              var r = Pr(e),
                t = Uint8Array.from(cr.encode(r.code));
              return (
                e.length > 1 && null != e[1] && (t = (0, pr.concat)([t, e[1]])),
                t
              );
            }),
          ),
        );
      }
      function xr(e, r) {
        return e.size > 0
          ? e.size / 8
          : 0 === e.size
            ? 0
            : cr.decode(r) + cr.decode.bytes;
      }
      function kr(e) {
        for (var r = [], t = 0; t < e.length; ) {
          var n = cr.decode(e, t),
            a = cr.decode.bytes,
            u = xr(ur(n), e.slice(t + a));
          if (0 !== u) {
            var s = e.slice(t + a, t + a + u);
            if ((t += u + a) > e.length)
              throw Br(
                "Invalid address Uint8Array: " + (0, Ye.toString)(e, "base16"),
              );
            r.push([n, s]);
          } else r.push([n]), (t += a);
        }
        return r;
      }
      function Er(e) {
        return (function (e) {
          var r = [];
          return (
            e.map(function (e) {
              var t = Pr(e);
              return (
                r.push(t.name),
                e.length > 1 && null != e[1] && r.push(e[1]),
                null
              );
            }),
            Fr(r.join("/"))
          );
        })(wr(kr(e)));
      }
      function Zr(e) {
        var r = (function (e) {
          var r = [],
            t = e.split("/").slice(1);
          if (1 === t.length && "" === t[0]) return [];
          for (var n = 0; n < t.length; n++) {
            var a = t[n],
              u = ur(a);
            if (0 !== u.size) {
              if (++n >= t.length) throw Br("invalid address: " + e);
              if (!0 === u.path) {
                r.push([a, Fr(t.slice(n).join("/"))]);
                break;
              }
              r.push([a, t[n]]);
            } else r.push([a]);
          }
          return r;
        })((e = Fr(e)));
        return Dr(
          r.map(function (e) {
            Array.isArray(e) || (e = [e]);
            var r = Pr(e);
            return e.length > 1 ? [r.code, lr(r.code, e[1])] : [r.code];
          }),
        );
      }
      function Ar(e) {
        var r = Cr(e);
        if (null != r) throw r;
        return Uint8Array.from(e);
      }
      function Cr(e) {
        try {
          kr(e);
        } catch (r) {
          return r;
        }
      }
      function Fr(e) {
        return (
          "/" +
          e
            .trim()
            .split("/")
            .filter(function (e) {
              return e;
            })
            .join("/")
        );
      }
      function Br(e) {
        return new Error("Error parsing address: " + e);
      }
      function Pr(e) {
        return ur(e[0]);
      }
      var Sr = t(67963),
        Ir = t(98779),
        jr = Symbol.for("nodejs.util.inspect.custom"),
        Ur = [
          ur("dns").code,
          ur("dns4").code,
          ur("dns6").code,
          ur("dnsaddr").code,
        ],
        Tr = [ur("p2p").code, ur("ipfs").code],
        Nr = new Map(),
        Rr = Symbol.for("@multiformats/js-multiaddr/multiaddr"),
        Or = (function () {
          function e(r) {
            if (
              ((0, N.Z)(this, e),
              null == r && (r = ""),
              Object.defineProperty(this, Rr, { value: !0 }),
              r instanceof Uint8Array)
            )
              this.bytes = Ar(r);
            else if ("string" === typeof r) {
              if (r.length > 0 && "/" !== r.charAt(0))
                throw new Error(
                  'multiaddr "'.concat(r, '" must start with a "/"'),
                );
              this.bytes = Zr(r);
            } else {
              if (!e.isMultiaddr(r))
                throw new Error(
                  "addr must be a string, Buffer, or another Multiaddr",
                );
              this.bytes = Ar(r.bytes);
            }
          }
          return (
            (0, R.Z)(
              e,
              [
                {
                  key: "toString",
                  value: function () {
                    return Er(this.bytes);
                  },
                },
                {
                  key: "toJSON",
                  value: function () {
                    return this.toString();
                  },
                },
                {
                  key: "toOptions",
                  value: function () {
                    var e,
                      r,
                      t = this.protoCodes(),
                      n = this.toString().split("/").slice(1);
                    if (n.length > 2)
                      Ur.includes(t[0]) && Tr.includes(t[1])
                        ? ((e = ur("tcp").name), (r = 443))
                        : ((e = ur(n[2]).name), (r = parseInt(n[3])));
                    else {
                      if (!Ur.includes(t[0]))
                        throw new Error(
                          'multiaddr must have a valid format: "/{ip4, ip6, dns4, dns6, dnsaddr}/{address}/{tcp, udp}/{port}".',
                        );
                      (e = ur("tcp").name), (r = 443);
                    }
                    return {
                      family: 41 === t[0] || 55 === t[0] ? 6 : 4,
                      host: n[1],
                      transport: e,
                      port: r,
                    };
                  },
                },
                {
                  key: "protos",
                  value: function () {
                    return this.protoCodes().map(function (e) {
                      return Object.assign({}, ur(e));
                    });
                  },
                },
                {
                  key: "protoCodes",
                  value: function () {
                    for (var e = [], r = this.bytes, t = 0; t < r.length; ) {
                      var n = cr.decode(r, t),
                        a = cr.decode.bytes;
                      (t += xr(ur(n), r.slice(t + a)) + a), e.push(n);
                    }
                    return e;
                  },
                },
                {
                  key: "protoNames",
                  value: function () {
                    return this.protos().map(function (e) {
                      return e.name;
                    });
                  },
                },
                {
                  key: "tuples",
                  value: function () {
                    return kr(this.bytes);
                  },
                },
                {
                  key: "stringTuples",
                  value: function () {
                    return wr(kr(this.bytes));
                  },
                },
                {
                  key: "encapsulate",
                  value: function (r) {
                    return (
                      (r = new e(r)), new e(this.toString() + r.toString())
                    );
                  },
                },
                {
                  key: "decapsulate",
                  value: function (r) {
                    var t = r.toString(),
                      n = this.toString(),
                      a = n.lastIndexOf(t);
                    if (a < 0)
                      throw new Error(
                        "Address "
                          .concat(
                            this.toString(),
                            " does not contain subaddress: ",
                          )
                          .concat(r.toString()),
                      );
                    return new e(n.slice(0, a));
                  },
                },
                {
                  key: "decapsulateCode",
                  value: function (r) {
                    for (var t = this.tuples(), n = t.length - 1; n >= 0; n--)
                      if (t[n][0] === r) return new e(Dr(t.slice(0, n)));
                    return this;
                  },
                },
                {
                  key: "getPeerId",
                  value: function () {
                    try {
                      var e = this.stringTuples().filter(function (e) {
                          return e[0] === tr.ipfs.code;
                        }),
                        r = e.pop();
                      if (
                        null != (null === r || void 0 === r ? void 0 : r[1])
                      ) {
                        var t = r[1];
                        return "Q" === t[0] || "1" === t[0]
                          ? (0, Ye.toString)(
                              ir.base58btc.decode("z".concat(t)),
                              "base58btc",
                            )
                          : (0, Ye.toString)(
                              q.CID.parse(t).multihash.bytes,
                              "base58btc",
                            );
                      }
                      return null;
                    } catch (n) {
                      return null;
                    }
                  },
                },
                {
                  key: "getPath",
                  value: function () {
                    var e = null;
                    try {
                      null ==
                        (e = this.stringTuples().filter(function (e) {
                          return !0 === ur(e[0]).path;
                        })[0][1]) && (e = null);
                    } catch (r) {
                      e = null;
                    }
                    return e;
                  },
                },
                {
                  key: "equals",
                  value: function (e) {
                    return (0, Ir.equals)(this.bytes, e.bytes);
                  },
                },
                {
                  key: "resolve",
                  value: (function () {
                    var r = (0, U.Z)(
                      (0, j.Z)().mark(function r(t) {
                        var n, a, u;
                        return (0, j.Z)().wrap(
                          function (r) {
                            for (;;)
                              switch ((r.prev = r.next)) {
                                case 0:
                                  if (
                                    null !=
                                    (n = this.protos().find(function (e) {
                                      return e.resolvable;
                                    }))
                                  ) {
                                    r.next = 3;
                                    break;
                                  }
                                  return r.abrupt("return", [this]);
                                case 3:
                                  if (null != (a = Nr.get(n.name))) {
                                    r.next = 6;
                                    break;
                                  }
                                  throw Sr(
                                    new Error(
                                      "no available resolver for ".concat(
                                        n.name,
                                      ),
                                    ),
                                    "ERR_NO_AVAILABLE_RESOLVER",
                                  );
                                case 6:
                                  return (r.next = 8), a(this, t);
                                case 8:
                                  return (
                                    (u = r.sent),
                                    r.abrupt(
                                      "return",
                                      u.map(function (r) {
                                        return new e(r);
                                      }),
                                    )
                                  );
                                case 10:
                                case "end":
                                  return r.stop();
                              }
                          },
                          r,
                          this,
                        );
                      }),
                    );
                    return function (e) {
                      return r.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: "nodeAddress",
                  value: function () {
                    var e = this.toOptions();
                    if ("tcp" !== e.transport && "udp" !== e.transport)
                      throw new Error(
                        'multiaddr must have a valid format - no protocol with name: "'.concat(
                          e.transport,
                          '". Must have a valid transport protocol: "{tcp, udp}"',
                        ),
                      );
                    return { family: e.family, address: e.host, port: e.port };
                  },
                },
                {
                  key: "isThinWaistAddress",
                  value: function (e) {
                    var r = (null !== e && void 0 !== e ? e : this).protos();
                    return (
                      2 === r.length &&
                      (4 === r[0].code || 41 === r[0].code) &&
                      (6 === r[1].code || 273 === r[1].code)
                    );
                  },
                },
                {
                  key: jr,
                  value: function () {
                    return (
                      "<Multiaddr " +
                      (0, Ye.toString)(this.bytes, "base16") +
                      " - " +
                      Er(this.bytes) +
                      ">"
                    );
                  },
                },
                {
                  key: "inspect",
                  value: function () {
                    return (
                      "<Multiaddr " +
                      (0, Ye.toString)(this.bytes, "base16") +
                      " - " +
                      Er(this.bytes) +
                      ">"
                    );
                  },
                },
              ],
              [
                {
                  key: "fromNodeAddress",
                  value: function (r, t) {
                    if (null == r)
                      throw new Error("requires node address object");
                    if (null == t)
                      throw new Error("requires transport protocol");
                    var n;
                    switch (r.family) {
                      case 4:
                        n = "ip4";
                        break;
                      case 6:
                        n = "ip6";
                        break;
                      default:
                        throw Error("Invalid addr family, should be 4 or 6.");
                    }
                    return new e("/" + [n, r.address, t, r.port].join("/"));
                  },
                },
                {
                  key: "isName",
                  value: function (r) {
                    return (
                      !!e.isMultiaddr(r) &&
                      r.protos().some(function (e) {
                        return e.resolvable;
                      })
                    );
                  },
                },
                {
                  key: "isMultiaddr",
                  value: function (e) {
                    return Boolean(null === e || void 0 === e ? void 0 : e[Rr]);
                  },
                },
              ],
            ),
            e
          );
        })();
      Or.resolvers = Nr;
      var _r = t(5942),
        Mr =
          /(\x2D?(?:[0-9]+\.?[0-9]*|[0-9]*\.?[0-9]+)(?:e[\+\x2D]?[0-9]+)?)[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*((?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])*)/gi;
      function Lr() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          r =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "ms",
          t = null;
        return (
          (e = (e + "").replace(/(\d)[,_](\d)/g, "$1$2")).replace(
            Mr,
            function (e, r, n) {
              (n = zr(n)) && (t = (t || 0) + parseFloat(r, 10) * n);
            },
          ),
          t && t / (zr(r) || 1)
        );
      }
      function zr(e) {
        return Lr[e] || Lr[e.toLowerCase().replace(/s$/, "")];
      }
      (Lr.nanosecond = Lr.ns = 1e-6),
        (Lr["\xb5s"] = Lr["\u03bcs"] = Lr.us = Lr.microsecond = 0.001),
        (Lr.millisecond = Lr.ms = Lr[""] = 1),
        (Lr.second = Lr.sec = Lr.s = 1e3 * Lr.ms),
        (Lr.minute = Lr.min = Lr.m = 60 * Lr.s),
        (Lr.hour = Lr.hr = Lr.h = 60 * Lr.m),
        (Lr.day = Lr.d = 24 * Lr.h),
        (Lr.week = Lr.wk = Lr.w = 7 * Lr.d),
        (Lr.month = Lr.b = 30.4375 * Lr.d),
        (Lr.year = Lr.yr = Lr.y = 365.25 * Lr.d);
      var Wr = Lr,
        Vr = t(18392);
      function Hr(e) {
        return Object.assign(Vr(e), {
          error: Vr("".concat(e, ":error")),
          trace: Vr("".concat(e, ":trace")),
        });
      }
      (Vr.formatters.b = function (e) {
        return null == e ? "undefined" : ir.base58btc.baseEncode(e);
      }),
        (Vr.formatters.t = function (e) {
          return null == e ? "undefined" : sr.base32.baseEncode(e);
        }),
        (Vr.formatters.m = function (e) {
          return null == e ? "undefined" : ue.base64.baseEncode(e);
        }),
        (Vr.formatters.p = function (e) {
          return null == e ? "undefined" : e.toString();
        }),
        (Vr.formatters.c = function (e) {
          return null == e ? "undefined" : e.toString();
        }),
        (Vr.formatters.k = function (e) {
          return null == e ? "undefined" : e.toString();
        });
      var qr = t(80450),
        Jr = t(89842),
        Kr = t(4942),
        Gr = 45,
        Yr = 15,
        Qr = new ((function () {
          function e() {
            (0, N.Z)(this, e),
              (0, Kr.Z)(this, "index", 0),
              (0, Kr.Z)(this, "input", "");
          }
          return (
            (0, R.Z)(e, [
              {
                key: "new",
                value: function (e) {
                  return (this.index = 0), (this.input = e), this;
                },
              },
              {
                key: "readAtomically",
                value: function (e) {
                  var r = this.index,
                    t = e();
                  return void 0 === t && (this.index = r), t;
                },
              },
              {
                key: "parseWith",
                value: function (e) {
                  var r = e();
                  if (this.index === this.input.length) return r;
                },
              },
              {
                key: "peekChar",
                value: function () {
                  if (!(this.index >= this.input.length))
                    return this.input[this.index];
                },
              },
              {
                key: "readChar",
                value: function () {
                  if (!(this.index >= this.input.length))
                    return this.input[this.index++];
                },
              },
              {
                key: "readGivenChar",
                value: function (e) {
                  var r = this;
                  return this.readAtomically(function () {
                    var t = r.readChar();
                    if (t === e) return t;
                  });
                },
              },
              {
                key: "readSeparator",
                value: function (e, r, t) {
                  var n = this;
                  return this.readAtomically(function () {
                    if (!(r > 0 && void 0 === n.readGivenChar(e))) return t();
                  });
                },
              },
              {
                key: "readNumber",
                value: function (e, r, t, n) {
                  var a = this;
                  return this.readAtomically(function () {
                    var u = 0,
                      s = 0,
                      i = a.peekChar();
                    if (void 0 !== i) {
                      for (var o = "0" === i, c = Math.pow(2, 8 * n) - 1; ; ) {
                        var f = a.readAtomically(function () {
                          var r = a.readChar();
                          if (void 0 !== r) {
                            var t = Number.parseInt(r, e);
                            if (!Number.isNaN(t)) return t;
                          }
                        });
                        if (void 0 === f) break;
                        if (((u *= e), (u += f) > c)) return;
                        if (((s += 1), void 0 !== r && s > r)) return;
                      }
                      return 0 === s || (!t && o && s > 1) ? void 0 : u;
                    }
                  });
                },
              },
              {
                key: "readIPv4Addr",
                value: function () {
                  var e = this;
                  return this.readAtomically(function () {
                    for (var r = new Uint8Array(4), t = 0; t < r.length; t++) {
                      var n = e.readSeparator(".", t, function () {
                        return e.readNumber(10, 3, !1, 1);
                      });
                      if (void 0 === n) return;
                      r[t] = n;
                    }
                    return r;
                  });
                },
              },
              {
                key: "readIPv6Addr",
                value: function () {
                  var e = this,
                    r = function (r) {
                      for (var t = 0; t < r.length / 2; t++) {
                        var n = 2 * t;
                        if (t < r.length - 3) {
                          var a = e.readSeparator(":", t, function () {
                            return e.readIPv4Addr();
                          });
                          if (void 0 !== a)
                            return (
                              (r[n] = a[0]),
                              (r[n + 1] = a[1]),
                              (r[n + 2] = a[2]),
                              (r[n + 3] = a[3]),
                              [n + 4, !0]
                            );
                        }
                        var u = e.readSeparator(":", t, function () {
                          return e.readNumber(16, 4, !0, 2);
                        });
                        if (void 0 === u) return [n, !1];
                        (r[n] = u >> 8), (r[n + 1] = 255 & u);
                      }
                      return [r.length, !1];
                    };
                  return this.readAtomically(function () {
                    var t = new Uint8Array(16),
                      n = r(t),
                      a = (0, Fe.Z)(n, 2),
                      u = a[0],
                      s = a[1];
                    if (16 === u) return t;
                    if (
                      !s &&
                      void 0 !== e.readGivenChar(":") &&
                      void 0 !== e.readGivenChar(":")
                    ) {
                      var i = new Uint8Array(14),
                        o = 16 - (u + 2),
                        c = r(i.subarray(0, o)),
                        f = (0, Fe.Z)(c, 1)[0];
                      return t.set(i.subarray(0, f), 16 - f), t;
                    }
                  });
                },
              },
              {
                key: "readIPAddr",
                value: function () {
                  var e;
                  return null !== (e = this.readIPv4Addr()) && void 0 !== e
                    ? e
                    : this.readIPv6Addr();
                },
              },
            ]),
            e
          );
        })())();
      function Xr(e) {
        return Boolean(
          (function (e) {
            if (!(e.length > Yr))
              return Qr.new(e).parseWith(function () {
                return Qr.readIPv4Addr();
              });
          })(e),
        );
      }
      function $r(e) {
        return Boolean(
          (function (e) {
            if (!(e.length > Gr))
              return Qr.new(e).parseWith(function () {
                return Qr.readIPv6Addr();
              });
          })(e),
        );
      }
      function et(e) {
        return Boolean(
          (function (e) {
            if (!(e.length > Gr))
              return Qr.new(e).parseWith(function () {
                return Qr.readIPAddr();
              });
          })(e),
        );
      }
      var rt = function (e, r) {
          if (e.length >= 255) throw new TypeError("Alphabet too long");
          for (var t = new Uint8Array(256), n = 0; n < t.length; n++)
            t[n] = 255;
          for (var a = 0; a < e.length; a++) {
            var u = e.charAt(a),
              s = u.charCodeAt(0);
            if (255 !== t[s]) throw new TypeError(u + " is ambiguous");
            t[s] = a;
          }
          var i = e.length,
            o = e.charAt(0),
            c = Math.log(i) / Math.log(256),
            f = Math.log(256) / Math.log(i);
          function p(e) {
            if ("string" !== typeof e) throw new TypeError("Expected String");
            if (0 === e.length) return new Uint8Array();
            var r = 0;
            if (" " !== e[r]) {
              for (var n = 0, a = 0; e[r] === o; ) n++, r++;
              for (
                var u = ((e.length - r) * c + 1) >>> 0, s = new Uint8Array(u);
                e[r];

              ) {
                var f = t[e.charCodeAt(r)];
                if (255 === f) return;
                for (
                  var p = 0, h = u - 1;
                  (0 !== f || p < a) && -1 !== h;
                  h--, p++
                )
                  (f += (i * s[h]) >>> 0),
                    (s[h] = f % 256 >>> 0),
                    (f = (f / 256) >>> 0);
                if (0 !== f) throw new Error("Non-zero carry");
                (a = p), r++;
              }
              if (" " !== e[r]) {
                for (var l = u - a; l !== u && 0 === s[l]; ) l++;
                for (var d = new Uint8Array(n + (u - l)), v = n; l !== u; )
                  d[v++] = s[l++];
                return d;
              }
            }
          }
          return {
            encode: function (r) {
              if (
                (r instanceof Uint8Array ||
                  (ArrayBuffer.isView(r)
                    ? (r = new Uint8Array(r.buffer, r.byteOffset, r.byteLength))
                    : Array.isArray(r) && (r = Uint8Array.from(r))),
                !(r instanceof Uint8Array))
              )
                throw new TypeError("Expected Uint8Array");
              if (0 === r.length) return "";
              for (
                var t = 0, n = 0, a = 0, u = r.length;
                a !== u && 0 === r[a];

              )
                a++, t++;
              for (
                var s = ((u - a) * f + 1) >>> 0, c = new Uint8Array(s);
                a !== u;

              ) {
                for (
                  var p = r[a], h = 0, l = s - 1;
                  (0 !== p || h < n) && -1 !== l;
                  l--, h++
                )
                  (p += (256 * c[l]) >>> 0),
                    (c[l] = p % i >>> 0),
                    (p = (p / i) >>> 0);
                if (0 !== p) throw new Error("Non-zero carry");
                (n = h), a++;
              }
              for (var d = s - n; d !== s && 0 === c[d]; ) d++;
              for (var v = o.repeat(t); d < s; ++d) v += e.charAt(c[d]);
              return v;
            },
            decodeUnsafe: p,
            decode: function (e) {
              var t = p(e);
              if (t) return t;
              throw new Error("Non-".concat(r, " character"));
            },
          };
        },
        tt = rt,
        nt =
          (new Uint8Array(0),
          function (e) {
            if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name)
              return e;
            if (e instanceof ArrayBuffer) return new Uint8Array(e);
            if (ArrayBuffer.isView(e))
              return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
            throw new Error("Unknown type, must be binary type");
          }),
        at = (function () {
          function e(r, t, n) {
            (0, N.Z)(this, e),
              (this.name = r),
              (this.prefix = t),
              (this.baseEncode = n);
          }
          return (
            (0, R.Z)(e, [
              {
                key: "encode",
                value: function (e) {
                  if (e instanceof Uint8Array)
                    return "".concat(this.prefix).concat(this.baseEncode(e));
                  throw Error("Unknown type, must be binary type");
                },
              },
            ]),
            e
          );
        })(),
        ut = (function () {
          function e(r, t, n) {
            if (
              ((0, N.Z)(this, e),
              (this.name = r),
              (this.prefix = t),
              void 0 === t.codePointAt(0))
            )
              throw new Error("Invalid prefix character");
            (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = n);
          }
          return (
            (0, R.Z)(e, [
              {
                key: "decode",
                value: function (e) {
                  if ("string" === typeof e) {
                    if (e.codePointAt(0) !== this.prefixCodePoint)
                      throw Error(
                        "Unable to decode multibase string "
                          .concat(JSON.stringify(e), ", ")
                          .concat(
                            this.name,
                            " decoder only supports inputs prefixed with ",
                          )
                          .concat(this.prefix),
                      );
                    return this.baseDecode(e.slice(this.prefix.length));
                  }
                  throw Error("Can only multibase decode strings");
                },
              },
              {
                key: "or",
                value: function (e) {
                  return it(this, e);
                },
              },
            ]),
            e
          );
        })(),
        st = (function () {
          function e(r) {
            (0, N.Z)(this, e), (this.decoders = r);
          }
          return (
            (0, R.Z)(e, [
              {
                key: "or",
                value: function (e) {
                  return it(this, e);
                },
              },
              {
                key: "decode",
                value: function (e) {
                  var r = e[0],
                    t = this.decoders[r];
                  if (t) return t.decode(e);
                  throw RangeError(
                    "Unable to decode multibase string "
                      .concat(JSON.stringify(e), ", only inputs prefixed with ")
                      .concat(Object.keys(this.decoders), " are supported"),
                  );
                },
              },
            ]),
            e
          );
        })(),
        it = function (e, r) {
          return new st(
            (0, Pe.Z)(
              (0, Pe.Z)({}, e.decoders || (0, Kr.Z)({}, e.prefix, e)),
              r.decoders || (0, Kr.Z)({}, r.prefix, r),
            ),
          );
        },
        ot = (function () {
          function e(r, t, n, a) {
            (0, N.Z)(this, e),
              (this.name = r),
              (this.prefix = t),
              (this.baseEncode = n),
              (this.baseDecode = a),
              (this.encoder = new at(r, t, n)),
              (this.decoder = new ut(r, t, a));
          }
          return (
            (0, R.Z)(e, [
              {
                key: "encode",
                value: function (e) {
                  return this.encoder.encode(e);
                },
              },
              {
                key: "decode",
                value: function (e) {
                  return this.decoder.decode(e);
                },
              },
            ]),
            e
          );
        })(),
        ct = function (e) {
          var r = e.name,
            t = e.prefix,
            n = e.encode,
            a = e.decode;
          return new ot(r, t, n, a);
        },
        ft = function (e) {
          var r = e.prefix,
            t = e.name,
            n = e.alphabet,
            a = tt(n, t),
            u = a.encode,
            s = a.decode;
          return ct({
            prefix: r,
            name: t,
            encode: u,
            decode: function (e) {
              return nt(s(e));
            },
          });
        },
        pt = function (e) {
          var r = e.name,
            t = e.prefix,
            n = e.bitsPerChar,
            a = e.alphabet;
          return ct({
            prefix: t,
            name: r,
            encode: function (e) {
              return (function (e, r, t) {
                for (
                  var n = "=" === r[r.length - 1],
                    a = (1 << t) - 1,
                    u = "",
                    s = 0,
                    i = 0,
                    o = 0;
                  o < e.length;
                  ++o
                )
                  for (i = (i << 8) | e[o], s += 8; s > t; )
                    u += r[a & (i >> (s -= t))];
                if ((s && (u += r[a & (i << (t - s))]), n))
                  for (; (u.length * t) & 7; ) u += "=";
                return u;
              })(e, a, n);
            },
            decode: function (e) {
              return (function (e, r, t, n) {
                for (var a = {}, u = 0; u < r.length; ++u) a[r[u]] = u;
                for (var s = e.length; "=" === e[s - 1]; ) --s;
                for (
                  var i = new Uint8Array(((s * t) / 8) | 0),
                    o = 0,
                    c = 0,
                    f = 0,
                    p = 0;
                  p < s;
                  ++p
                ) {
                  var h = a[e[p]];
                  if (void 0 === h)
                    throw new SyntaxError("Non-".concat(n, " character"));
                  (c = (c << t) | h),
                    (o += t) >= 8 && ((o -= 8), (i[f++] = 255 & (c >> o)));
                }
                if (o >= t || 255 & (c << (8 - o)))
                  throw new SyntaxError("Unexpected end of data");
                return i;
              })(e, a, n, r);
            },
          });
        },
        ht = ct({
          prefix: "\0",
          name: "identity",
          encode: function (e) {
            return (r = e), new TextDecoder().decode(r);
            var r;
          },
          decode: function (e) {
            return (function (e) {
              return new TextEncoder().encode(e);
            })(e);
          },
        }),
        lt = pt({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 }),
        dt = pt({
          prefix: "7",
          name: "base8",
          alphabet: "01234567",
          bitsPerChar: 3,
        }),
        vt = ft({ prefix: "9", name: "base10", alphabet: "0123456789" }),
        yt = pt({
          prefix: "f",
          name: "base16",
          alphabet: "0123456789abcdef",
          bitsPerChar: 4,
        }),
        bt = pt({
          prefix: "F",
          name: "base16upper",
          alphabet: "0123456789ABCDEF",
          bitsPerChar: 4,
        }),
        gt = pt({
          prefix: "b",
          name: "base32",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567",
          bitsPerChar: 5,
        }),
        mt = pt({
          prefix: "B",
          name: "base32upper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
          bitsPerChar: 5,
        }),
        wt = pt({
          prefix: "c",
          name: "base32pad",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
          bitsPerChar: 5,
        }),
        Dt = pt({
          prefix: "C",
          name: "base32padupper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
          bitsPerChar: 5,
        }),
        xt = pt({
          prefix: "v",
          name: "base32hex",
          alphabet: "0123456789abcdefghijklmnopqrstuv",
          bitsPerChar: 5,
        }),
        kt = pt({
          prefix: "V",
          name: "base32hexupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
          bitsPerChar: 5,
        }),
        Et = pt({
          prefix: "t",
          name: "base32hexpad",
          alphabet: "0123456789abcdefghijklmnopqrstuv=",
          bitsPerChar: 5,
        }),
        Zt = pt({
          prefix: "T",
          name: "base32hexpadupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
          bitsPerChar: 5,
        }),
        At = pt({
          prefix: "h",
          name: "base32z",
          alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
          bitsPerChar: 5,
        }),
        Ct = ft({
          prefix: "k",
          name: "base36",
          alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
        }),
        Ft = ft({
          prefix: "K",
          name: "base36upper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        }),
        Bt = ft({
          name: "base58btc",
          prefix: "z",
          alphabet:
            "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
        }),
        Pt = ft({
          name: "base58flickr",
          prefix: "Z",
          alphabet:
            "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
        }),
        St = pt({
          prefix: "m",
          name: "base64",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          bitsPerChar: 6,
        }),
        It = pt({
          prefix: "M",
          name: "base64pad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          bitsPerChar: 6,
        }),
        jt = pt({
          prefix: "u",
          name: "base64url",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
          bitsPerChar: 6,
        }),
        Ut = pt({
          prefix: "U",
          name: "base64urlpad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
          bitsPerChar: 6,
        }),
        Tt = Array.from(
          "\ud83d\ude80\ud83e\ude90\u2604\ud83d\udef0\ud83c\udf0c\ud83c\udf11\ud83c\udf12\ud83c\udf13\ud83c\udf14\ud83c\udf15\ud83c\udf16\ud83c\udf17\ud83c\udf18\ud83c\udf0d\ud83c\udf0f\ud83c\udf0e\ud83d\udc09\u2600\ud83d\udcbb\ud83d\udda5\ud83d\udcbe\ud83d\udcbf\ud83d\ude02\u2764\ud83d\ude0d\ud83e\udd23\ud83d\ude0a\ud83d\ude4f\ud83d\udc95\ud83d\ude2d\ud83d\ude18\ud83d\udc4d\ud83d\ude05\ud83d\udc4f\ud83d\ude01\ud83d\udd25\ud83e\udd70\ud83d\udc94\ud83d\udc96\ud83d\udc99\ud83d\ude22\ud83e\udd14\ud83d\ude06\ud83d\ude44\ud83d\udcaa\ud83d\ude09\u263a\ud83d\udc4c\ud83e\udd17\ud83d\udc9c\ud83d\ude14\ud83d\ude0e\ud83d\ude07\ud83c\udf39\ud83e\udd26\ud83c\udf89\ud83d\udc9e\u270c\u2728\ud83e\udd37\ud83d\ude31\ud83d\ude0c\ud83c\udf38\ud83d\ude4c\ud83d\ude0b\ud83d\udc97\ud83d\udc9a\ud83d\ude0f\ud83d\udc9b\ud83d\ude42\ud83d\udc93\ud83e\udd29\ud83d\ude04\ud83d\ude00\ud83d\udda4\ud83d\ude03\ud83d\udcaf\ud83d\ude48\ud83d\udc47\ud83c\udfb6\ud83d\ude12\ud83e\udd2d\u2763\ud83d\ude1c\ud83d\udc8b\ud83d\udc40\ud83d\ude2a\ud83d\ude11\ud83d\udca5\ud83d\ude4b\ud83d\ude1e\ud83d\ude29\ud83d\ude21\ud83e\udd2a\ud83d\udc4a\ud83e\udd73\ud83d\ude25\ud83e\udd24\ud83d\udc49\ud83d\udc83\ud83d\ude33\u270b\ud83d\ude1a\ud83d\ude1d\ud83d\ude34\ud83c\udf1f\ud83d\ude2c\ud83d\ude43\ud83c\udf40\ud83c\udf37\ud83d\ude3b\ud83d\ude13\u2b50\u2705\ud83e\udd7a\ud83c\udf08\ud83d\ude08\ud83e\udd18\ud83d\udca6\u2714\ud83d\ude23\ud83c\udfc3\ud83d\udc90\u2639\ud83c\udf8a\ud83d\udc98\ud83d\ude20\u261d\ud83d\ude15\ud83c\udf3a\ud83c\udf82\ud83c\udf3b\ud83d\ude10\ud83d\udd95\ud83d\udc9d\ud83d\ude4a\ud83d\ude39\ud83d\udde3\ud83d\udcab\ud83d\udc80\ud83d\udc51\ud83c\udfb5\ud83e\udd1e\ud83d\ude1b\ud83d\udd34\ud83d\ude24\ud83c\udf3c\ud83d\ude2b\u26bd\ud83e\udd19\u2615\ud83c\udfc6\ud83e\udd2b\ud83d\udc48\ud83d\ude2e\ud83d\ude46\ud83c\udf7b\ud83c\udf43\ud83d\udc36\ud83d\udc81\ud83d\ude32\ud83c\udf3f\ud83e\udde1\ud83c\udf81\u26a1\ud83c\udf1e\ud83c\udf88\u274c\u270a\ud83d\udc4b\ud83d\ude30\ud83e\udd28\ud83d\ude36\ud83e\udd1d\ud83d\udeb6\ud83d\udcb0\ud83c\udf53\ud83d\udca2\ud83e\udd1f\ud83d\ude41\ud83d\udea8\ud83d\udca8\ud83e\udd2c\u2708\ud83c\udf80\ud83c\udf7a\ud83e\udd13\ud83d\ude19\ud83d\udc9f\ud83c\udf31\ud83d\ude16\ud83d\udc76\ud83e\udd74\u25b6\u27a1\u2753\ud83d\udc8e\ud83d\udcb8\u2b07\ud83d\ude28\ud83c\udf1a\ud83e\udd8b\ud83d\ude37\ud83d\udd7a\u26a0\ud83d\ude45\ud83d\ude1f\ud83d\ude35\ud83d\udc4e\ud83e\udd32\ud83e\udd20\ud83e\udd27\ud83d\udccc\ud83d\udd35\ud83d\udc85\ud83e\uddd0\ud83d\udc3e\ud83c\udf52\ud83d\ude17\ud83e\udd11\ud83c\udf0a\ud83e\udd2f\ud83d\udc37\u260e\ud83d\udca7\ud83d\ude2f\ud83d\udc86\ud83d\udc46\ud83c\udfa4\ud83d\ude47\ud83c\udf51\u2744\ud83c\udf34\ud83d\udca3\ud83d\udc38\ud83d\udc8c\ud83d\udccd\ud83e\udd40\ud83e\udd22\ud83d\udc45\ud83d\udca1\ud83d\udca9\ud83d\udc50\ud83d\udcf8\ud83d\udc7b\ud83e\udd10\ud83e\udd2e\ud83c\udfbc\ud83e\udd75\ud83d\udea9\ud83c\udf4e\ud83c\udf4a\ud83d\udc7c\ud83d\udc8d\ud83d\udce3\ud83e\udd42",
        ),
        Nt = Tt.reduce(function (e, r, t) {
          return (e[t] = r), e;
        }, []),
        Rt = Tt.reduce(function (e, r, t) {
          return (e[r.codePointAt(0)] = t), e;
        }, []);
      var Ot = ct({
          prefix: "\ud83d\ude80",
          name: "base256emoji",
          encode: function (e) {
            return e.reduce(function (e, r) {
              return (e += Nt[r]);
            }, "");
          },
          decode: function (e) {
            var r,
              t = [],
              n = (0, T.Z)(e);
            try {
              for (n.s(); !(r = n.n()).done; ) {
                var a = r.value,
                  u = Rt[a.codePointAt(0)];
                if (void 0 === u)
                  throw new Error("Non-base256emoji character: ".concat(a));
                t.push(u);
              }
            } catch (s) {
              n.e(s);
            } finally {
              n.f();
            }
            return new Uint8Array(t);
          },
        }),
        _t = function e(r, t, n) {
          t = t || [];
          var a = (n = n || 0);
          for (; r >= zt; ) (t[n++] = (255 & r) | Mt), (r /= 128);
          for (; r & Lt; ) (t[n++] = (255 & r) | Mt), (r >>>= 7);
          return (t[n] = 0 | r), (e.bytes = n - a + 1), t;
        },
        Mt = 128,
        Lt = -128,
        zt = Math.pow(2, 31);
      var Wt = function e(r, t) {
          var n,
            a = 0,
            u = 0,
            s = (t = t || 0),
            i = r.length;
          do {
            if (s >= i)
              throw ((e.bytes = 0), new RangeError("Could not decode varint"));
            (n = r[s++]),
              (a += u < 28 ? (n & Ht) << u : (n & Ht) * Math.pow(2, u)),
              (u += 7);
          } while (n >= Vt);
          return (e.bytes = s - t), a;
        },
        Vt = 128,
        Ht = 127;
      var qt = Math.pow(2, 7),
        Jt = Math.pow(2, 14),
        Kt = Math.pow(2, 21),
        Gt = Math.pow(2, 28),
        Yt = Math.pow(2, 35),
        Qt = Math.pow(2, 42),
        Xt = Math.pow(2, 49),
        $t = Math.pow(2, 56),
        en = Math.pow(2, 63),
        rn = {
          encode: _t,
          decode: Wt,
          encodingLength: function (e) {
            return e < qt
              ? 1
              : e < Jt
                ? 2
                : e < Kt
                  ? 3
                  : e < Gt
                    ? 4
                    : e < Yt
                      ? 5
                      : e < Qt
                        ? 6
                        : e < Xt
                          ? 7
                          : e < $t
                            ? 8
                            : e < en
                              ? 9
                              : 10;
          },
        },
        tn = function (e) {
          var r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return [rn.decode(e, r), rn.decode.bytes];
        },
        nn = function (e, r) {
          var t =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          return rn.encode(e, r, t), r;
        },
        an = function (e) {
          return rn.encodingLength(e);
        },
        un = function (e, r) {
          var t = r.byteLength,
            n = an(e),
            a = n + an(t),
            u = new Uint8Array(a + t);
          return nn(e, u, 0), nn(t, u, n), u.set(r, a), new on(e, t, r, u);
        },
        sn = function (e) {
          var r = nt(e),
            t = tn(r),
            n = (0, Fe.Z)(t, 2),
            a = n[0],
            u = n[1],
            s = tn(r.subarray(u)),
            i = (0, Fe.Z)(s, 2),
            o = i[0],
            c = i[1],
            f = r.subarray(u + c);
          if (f.byteLength !== o) throw new Error("Incorrect length");
          return new on(a, o, f, r);
        },
        on = (0, R.Z)(function e(r, t, n, a) {
          (0, N.Z)(this, e),
            (this.code = r),
            (this.size = t),
            (this.digest = n),
            (this.bytes = a);
        }),
        cn = function (e) {
          var r = e.name,
            t = e.code,
            n = e.encode;
          return new fn(r, t, n);
        },
        fn = (function () {
          function e(r, t, n) {
            (0, N.Z)(this, e),
              (this.name = r),
              (this.code = t),
              (this.encode = n);
          }
          return (
            (0, R.Z)(e, [
              {
                key: "digest",
                value: function (e) {
                  var r = this;
                  if (e instanceof Uint8Array) {
                    var t = this.encode(e);
                    return t instanceof Uint8Array
                      ? un(this.code, t)
                      : t.then(function (e) {
                          return un(r.code, e);
                        });
                  }
                  throw Error("Unknown type, must be binary type");
                },
              },
            ]),
            e
          );
        })(),
        pn = function (e) {
          return (function () {
            var r = (0, U.Z)(
              (0, j.Z)().mark(function r(t) {
                return (0, j.Z)().wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (r.t0 = Uint8Array),
                          (r.next = 3),
                          crypto.subtle.digest(e, t)
                        );
                      case 3:
                        return (
                          (r.t1 = r.sent), r.abrupt("return", new r.t0(r.t1))
                        );
                      case 5:
                      case "end":
                        return r.stop();
                    }
                }, r);
              }),
            );
            return function (e) {
              return r.apply(this, arguments);
            };
          })();
        },
        hn = cn({ name: "sha2-256", code: 18, encode: pn("SHA-256") }),
        ln = cn({ name: "sha2-512", code: 19, encode: pn("SHA-512") }),
        dn = nt,
        vn = {
          code: 0,
          name: "identity",
          encode: dn,
          digest: function (e) {
            return un(0, dn(e));
          },
        },
        yn = "raw",
        bn = 85,
        gn = function (e) {
          return nt(e);
        },
        mn = function (e) {
          return nt(e);
        },
        wn = new TextEncoder(),
        Dn = new TextDecoder(),
        xn = "json",
        kn = 512,
        En = function (e) {
          return wn.encode(JSON.stringify(e));
        },
        Zn = function (e) {
          return JSON.parse(Dn.decode(e));
        },
        An = function (e, r) {
          var t = e.bytes;
          return 0 === e.version
            ? Sn(t, Fn(e), r || Bt.encoder)
            : In(t, Fn(e), r || gt.encoder);
        },
        Cn = new WeakMap(),
        Fn = function (e) {
          var r = Cn.get(e);
          if (null == r) {
            var t = new Map();
            return Cn.set(e, t), t;
          }
          return r;
        },
        Bn = (function (e, r) {
          function t(e, r, n, a) {
            (0, N.Z)(this, t),
              (this.code = r),
              (this.version = e),
              (this.multihash = n),
              (this.bytes = a),
              (this["/"] = a);
          }
          return (
            (0, R.Z)(
              t,
              [
                {
                  key: "asCID",
                  get: function () {
                    return this;
                  },
                },
                {
                  key: "byteOffset",
                  get: function () {
                    return this.bytes.byteOffset;
                  },
                },
                {
                  key: "byteLength",
                  get: function () {
                    return this.bytes.byteLength;
                  },
                },
                {
                  key: "toV0",
                  value: function () {
                    switch (this.version) {
                      case 0:
                        return this;
                      case 1:
                        var e = this.code,
                          r = this.multihash;
                        if (e !== jn)
                          throw new Error(
                            "Cannot convert a non dag-pb CID to CIDv0",
                          );
                        if (r.code !== Un)
                          throw new Error(
                            "Cannot convert non sha2-256 multihash CID to CIDv0",
                          );
                        return t.createV0(r);
                      default:
                        throw Error(
                          "Can not convert CID version ".concat(
                            this.version,
                            " to version 0. This is a bug please report",
                          ),
                        );
                    }
                  },
                },
                {
                  key: "toV1",
                  value: function () {
                    switch (this.version) {
                      case 0:
                        var e = this.multihash,
                          r = e.code,
                          n = e.digest,
                          a = un(r, n);
                        return t.createV1(this.code, a);
                      case 1:
                        return this;
                      default:
                        throw Error(
                          "Can not convert CID version ".concat(
                            this.version,
                            " to version 1. This is a bug please report",
                          ),
                        );
                    }
                  },
                },
                {
                  key: "equals",
                  value: function (e) {
                    return t.equals(this, e);
                  },
                },
                {
                  key: "toString",
                  value: function (e) {
                    return An(this, e);
                  },
                },
                {
                  key: "toJSON",
                  value: function () {
                    return { "/": An(this) };
                  },
                },
                {
                  key: "link",
                  value: function () {
                    return this;
                  },
                },
                {
                  key: e,
                  get: function () {
                    return "CID";
                  },
                },
                {
                  key: r,
                  value: function () {
                    return "CID(".concat(this.toString(), ")");
                  },
                },
              ],
              [
                {
                  key: "equals",
                  value: function (e, r) {
                    var t = r;
                    return (
                      t &&
                      e.code === t.code &&
                      e.version === t.version &&
                      (function (e, r) {
                        if (e === r) return !0;
                        var t = r;
                        return (
                          e.code === t.code &&
                          e.size === t.size &&
                          t.bytes instanceof Uint8Array &&
                          (function (e, r) {
                            if (e === r) return !0;
                            if (e.byteLength !== r.byteLength) return !1;
                            for (var t = 0; t < e.byteLength; t++)
                              if (e[t] !== r[t]) return !1;
                            return !0;
                          })(e.bytes, t.bytes)
                        );
                      })(e.multihash, t.multihash)
                    );
                  },
                },
                {
                  key: "asCID",
                  value: function (e) {
                    if (null == e) return null;
                    var r = e;
                    if (r instanceof t) return r;
                    if (
                      (null != r["/"] && r["/"] === r.bytes) ||
                      r.asCID === r
                    ) {
                      var n = r.version,
                        a = r.code,
                        u = r.multihash;
                      return new t(n, a, u, r.bytes || Tn(n, a, u.bytes));
                    }
                    if (!0 === r[Nn]) {
                      var s = r.version,
                        i = r.multihash,
                        o = r.code,
                        c = sn(i);
                      return t.create(s, o, c);
                    }
                    return null;
                  },
                },
                {
                  key: "create",
                  value: function (e, r, n) {
                    if ("number" !== typeof r)
                      throw new Error("String codecs are no longer supported");
                    if (!(n.bytes instanceof Uint8Array))
                      throw new Error("Invalid digest");
                    switch (e) {
                      case 0:
                        if (r !== jn)
                          throw new Error(
                            "Version 0 CID must use dag-pb (code: ".concat(
                              jn,
                              ") block encoding",
                            ),
                          );
                        return new t(e, r, n, n.bytes);
                      case 1:
                        return new t(e, r, n, Tn(e, r, n.bytes));
                      default:
                        throw new Error("Invalid version");
                    }
                  },
                },
                {
                  key: "createV0",
                  value: function (e) {
                    return t.create(0, jn, e);
                  },
                },
                {
                  key: "createV1",
                  value: function (e, r) {
                    return t.create(1, e, r);
                  },
                },
                {
                  key: "decode",
                  value: function (e) {
                    var r = t.decodeFirst(e),
                      n = (0, Fe.Z)(r, 2),
                      a = n[0];
                    if (n[1].length) throw new Error("Incorrect length");
                    return a;
                  },
                },
                {
                  key: "decodeFirst",
                  value: function (e) {
                    var r = t.inspectBytes(e),
                      n = r.size - r.multihashSize,
                      a = nt(e.subarray(n, n + r.multihashSize));
                    if (a.byteLength !== r.multihashSize)
                      throw new Error("Incorrect length");
                    var u = a.subarray(r.multihashSize - r.digestSize),
                      s = new on(r.multihashCode, r.digestSize, u, a);
                    return [
                      0 === r.version ? t.createV0(s) : t.createV1(r.codec, s),
                      e.subarray(r.size),
                    ];
                  },
                },
                {
                  key: "inspectBytes",
                  value: function (e) {
                    var r = 0,
                      t = function () {
                        var t = tn(e.subarray(r)),
                          n = (0, Fe.Z)(t, 2),
                          a = n[0],
                          u = n[1];
                        return (r += u), a;
                      },
                      n = t(),
                      a = jn;
                    if (
                      (18 === n ? ((n = 0), (r = 0)) : (a = t()),
                      0 !== n && 1 !== n)
                    )
                      throw new RangeError("Invalid CID version ".concat(n));
                    var u = r,
                      s = t(),
                      i = t(),
                      o = r + i;
                    return {
                      version: n,
                      codec: a,
                      multihashCode: s,
                      digestSize: i,
                      multihashSize: o - u,
                      size: o,
                    };
                  },
                },
                {
                  key: "parse",
                  value: function (e, r) {
                    var n = Pn(e, r),
                      a = (0, Fe.Z)(n, 2),
                      u = a[0],
                      s = a[1],
                      i = t.decode(s);
                    if (0 === i.version && "Q" !== e[0])
                      throw Error(
                        "Version 0 CID string must not include multibase prefix",
                      );
                    return Fn(i).set(u, e), i;
                  },
                },
              ],
            ),
            t
          );
        })(Symbol.toStringTag, Symbol.for("nodejs.util.inspect.custom")),
        Pn = function (e, r) {
          switch (e[0]) {
            case "Q":
              var t = r || Bt;
              return [Bt.prefix, t.decode("".concat(Bt.prefix).concat(e))];
            case Bt.prefix:
              var n = r || Bt;
              return [Bt.prefix, n.decode(e)];
            case gt.prefix:
              var a = r || gt;
              return [gt.prefix, a.decode(e)];
            default:
              if (null == r)
                throw Error(
                  "To parse non base32 or base58btc encoded CID multibase decoder must be provided",
                );
              return [e[0], r.decode(e)];
          }
        },
        Sn = function (e, r, t) {
          var n = t.prefix;
          if (n !== Bt.prefix)
            throw Error(
              "Cannot string encode V0 in ".concat(t.name, " encoding"),
            );
          var a = r.get(n);
          if (null == a) {
            var u = t.encode(e).slice(1);
            return r.set(n, u), u;
          }
          return a;
        },
        In = function (e, r, t) {
          var n = t.prefix,
            a = r.get(n);
          if (null == a) {
            var u = t.encode(e);
            return r.set(n, u), u;
          }
          return a;
        },
        jn = 112,
        Un = 18,
        Tn = function (e, r, t) {
          var n = an(e),
            a = n + an(r),
            u = new Uint8Array(a + t.byteLength);
          return nn(e, u, 0), nn(r, u, n), u.set(t, a), u;
        },
        Nn = Symbol.for("@ipld/js-cid/CID"),
        Rn = (0, Pe.Z)(
          (0, Pe.Z)(
            (0, Pe.Z)(
              (0, Pe.Z)(
                (0, Pe.Z)(
                  (0, Pe.Z)(
                    (0, Pe.Z)((0, Pe.Z)((0, Pe.Z)((0, Pe.Z)({}, u), s), i), o),
                    c,
                  ),
                  f,
                ),
                p,
              ),
              h,
            ),
            l,
          ),
          d,
        );
      (0, Pe.Z)((0, Pe.Z)({}, v), y);
      function On(e) {
        return null != globalThis.Buffer
          ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
          : e;
      }
      function _n() {
        var e,
          r =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return null !=
          (null === (e = globalThis.Buffer) || void 0 === e
            ? void 0
            : e.allocUnsafe)
          ? On(globalThis.Buffer.allocUnsafe(r))
          : new Uint8Array(r);
      }
      function Mn(e, r, t, n) {
        return {
          name: e,
          prefix: r,
          encoder: { name: e, prefix: r, encode: t },
          decoder: { decode: n },
        };
      }
      var Ln = Mn(
          "utf8",
          "u",
          function (e) {
            return "u" + new TextDecoder("utf8").decode(e);
          },
          function (e) {
            return new TextEncoder().encode(e.substring(1));
          },
        ),
        zn = Mn(
          "ascii",
          "a",
          function (e) {
            for (var r = "a", t = 0; t < e.length; t++)
              r += String.fromCharCode(e[t]);
            return r;
          },
          function (e) {
            for (
              var r = _n((e = e.substring(1)).length), t = 0;
              t < e.length;
              t++
            )
              r[t] = e.charCodeAt(t);
            return r;
          },
        ),
        Wn = (0, Pe.Z)(
          {
            utf8: Ln,
            "utf-8": Ln,
            hex: Rn.base16,
            latin1: zn,
            ascii: zn,
            binary: zn,
          },
          Rn,
        );
      function Vn(e) {
        var r =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "utf8",
          t = Wn[r];
        if (null == t) throw new Error('Unsupported encoding "'.concat(r, '"'));
        return ("utf8" !== r && "utf-8" !== r) ||
          null == globalThis.Buffer ||
          null == globalThis.Buffer.from
          ? t.encoder.encode(e).substring(1)
          : globalThis.Buffer.from(
              e.buffer,
              e.byteOffset,
              e.byteLength,
            ).toString("utf8");
      }
      var Hn = Xr,
        qn = $r,
        Jn = function e(r) {
          var t = 0;
          if (((r = r.toString().trim()), Hn(r))) {
            var n = new Uint8Array(t + 4);
            return (
              r.split(/\./g).forEach(function (e) {
                n[t++] = 255 & parseInt(e, 10);
              }),
              n
            );
          }
          if (qn(r)) {
            var a,
              u = r.split(":", 8);
            for (a = 0; a < u.length; a++) {
              var s = void 0;
              Hn(u[a]) && ((s = e(u[a])), (u[a] = Vn(s.slice(0, 2), "base16"))),
                null != s &&
                  ++a < 8 &&
                  u.splice(a, 0, Vn(s.slice(2, 4), "base16"));
            }
            if ("" === u[0]) for (; u.length < 8; ) u.unshift("0");
            else if ("" === u[u.length - 1]) for (; u.length < 8; ) u.push("0");
            else if (u.length < 8) {
              for (a = 0; a < u.length && "" !== u[a]; a++);
              var i = [a, 1];
              for (a = 9 - u.length; a > 0; a--) i.push("0");
              u.splice.apply(u, i);
            }
            var o = new Uint8Array(t + 16);
            for (a = 0; a < u.length; a++) {
              var c = parseInt(u[a], 16);
              (o[t++] = (c >> 8) & 255), (o[t++] = 255 & c);
            }
            return o;
          }
          throw new Error("invalid ip address");
        },
        Kn = function (e) {
          var r,
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n = arguments.length > 2 ? arguments[2] : void 0;
          (t = ~~t), (n = null !== (r = n) && void 0 !== r ? r : e.length - t);
          var a = new DataView(e.buffer);
          if (4 === n) {
            for (var u = [], s = 0; s < n; s++) u.push(e[t + s]);
            return u.join(".");
          }
          if (16 === n) {
            for (var i = [], o = 0; o < n; o += 2)
              i.push(a.getUint16(t + o).toString(16));
            return i
              .join(":")
              .replace(/(^|:)0(:0)*:0(:|$)/, "$1::$3")
              .replace(/:{3,4}/, "::");
          }
          return "";
        },
        Gn = -1,
        Yn = {},
        Qn = {};
      function Xn(e, r, t, n, a) {
        return {
          code: e,
          size: r,
          name: t,
          resolvable: Boolean(n),
          path: Boolean(a),
        };
      }
      function $n(e) {
        if ("number" === typeof e) {
          if (null != Qn[e]) return Qn[e];
          throw new Error("no protocol with code: ".concat(e));
        }
        if ("string" === typeof e) {
          if (null != Yn[e]) return Yn[e];
          throw new Error("no protocol with name: ".concat(e));
        }
        throw new Error("invalid protocol id type: ".concat(typeof e));
      }
      function ea(e) {
        var r =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "utf8",
          t = Wn[r];
        if (null == t) throw new Error('Unsupported encoding "'.concat(r, '"'));
        return ("utf8" !== r && "utf-8" !== r) ||
          null == globalThis.Buffer ||
          null == globalThis.Buffer.from
          ? t.decoder.decode("".concat(t.prefix).concat(e))
          : On(globalThis.Buffer.from(e, "utf-8"));
      }
      function ra(e, r) {
        null == r &&
          (r = e.reduce(function (e, r) {
            return e + r.length;
          }, 0));
        var t,
          n = _n(r),
          a = 0,
          u = (0, T.Z)(e);
        try {
          for (u.s(); !(t = u.n()).done; ) {
            var s = t.value;
            n.set(s, a), (a += s.length);
          }
        } catch (i) {
          u.e(i);
        } finally {
          u.f();
        }
        return On(n);
      }
      function ta(e, r) {
        switch ($n(e).code) {
          case 4:
          case 41:
            return (function (e) {
              var r = Kn(e, 0, e.length);
              if (null == r) throw new Error("ipBuff is required");
              if (!et(r)) throw new Error("invalid ip address");
              return r;
            })(r);
          case 42:
          case 53:
          case 54:
          case 55:
          case 56:
          case 400:
          case 777:
            return fa(r);
          case 6:
          case 273:
          case 33:
          case 132:
            return oa(r).toString();
          case 421:
            return (function (e) {
              var r = cr.decode(e),
                t = e.slice(cr.decode.bytes);
              if (t.length !== r) throw new Error("inconsistent lengths");
              return Vn(t, "base58btc");
            })(r);
          case 444:
          case 445:
            return pa(r);
          case 466:
            return (function (e) {
              var r = cr.decode(e),
                t = e.slice(cr.decode.bytes);
              if (t.length !== r) throw new Error("inconsistent lengths");
              return "u" + Vn(t, "base64url");
            })(r);
          default:
            return Vn(r, "base16");
        }
      }
      function na(e, r) {
        switch ($n(e).code) {
          case 4:
          case 41:
            return sa(r);
          case 42:
          case 53:
          case 54:
          case 55:
          case 56:
          case 400:
          case 777:
            return ca(r);
          case 6:
          case 273:
          case 33:
          case 132:
            return ia(parseInt(r, 10));
          case 421:
            return (function (e) {
              var r;
              r =
                "Q" === e[0] || "1" === e[0]
                  ? sn(Bt.decode("z".concat(e))).bytes
                  : Bn.parse(e).multihash.bytes;
              var t = Uint8Array.from(cr.encode(r.length));
              return ra([t, r], t.length + r.length);
            })(r);
          case 444:
            return (function (e) {
              var r = e.split(":");
              if (2 !== r.length)
                throw new Error(
                  "failed to parse onion addr: [\"'".concat(
                    r.join('", "'),
                    "'\"]' does not contain a port number",
                  ),
                );
              if (16 !== r[0].length)
                throw new Error(
                  "failed to parse onion addr: ".concat(
                    r[0],
                    " not a Tor onion address.",
                  ),
                );
              var t = gt.decode("b" + r[0]),
                n = parseInt(r[1], 10);
              if (n < 1 || n > 65536)
                throw new Error("Port number is not in range(1, 65536)");
              var a = ia(n);
              return ra([t, a], t.length + a.length);
            })(r);
          case 445:
            return (function (e) {
              var r = e.split(":");
              if (2 !== r.length)
                throw new Error(
                  "failed to parse onion addr: [\"'".concat(
                    r.join('", "'),
                    "'\"]' does not contain a port number",
                  ),
                );
              if (56 !== r[0].length)
                throw new Error(
                  "failed to parse onion addr: ".concat(
                    r[0],
                    " not a Tor onion3 address.",
                  ),
                );
              var t = gt.decode("b".concat(r[0])),
                n = parseInt(r[1], 10);
              if (n < 1 || n > 65536)
                throw new Error("Port number is not in range(1, 65536)");
              var a = ia(n);
              return ra([t, a], t.length + a.length);
            })(r);
          case 466:
            return (function (e) {
              var r = ua.decode(e),
                t = Uint8Array.from(cr.encode(r.length));
              return ra([t, r], t.length + r.length);
            })(r);
          default:
            return ea(r, "base16");
        }
      }
      [
        [4, 32, "ip4"],
        [6, 16, "tcp"],
        [33, 16, "dccp"],
        [41, 128, "ip6"],
        [42, Gn, "ip6zone"],
        [43, 8, "ipcidr"],
        [53, Gn, "dns", !0],
        [54, Gn, "dns4", !0],
        [55, Gn, "dns6", !0],
        [56, Gn, "dnsaddr", !0],
        [132, 16, "sctp"],
        [273, 16, "udp"],
        [275, 0, "p2p-webrtc-star"],
        [276, 0, "p2p-webrtc-direct"],
        [277, 0, "p2p-stardust"],
        [280, 0, "webrtc"],
        [281, 0, "webrtc-w3c"],
        [290, 0, "p2p-circuit"],
        [301, 0, "udt"],
        [302, 0, "utp"],
        [400, Gn, "unix", !1, !0],
        [421, Gn, "ipfs"],
        [421, Gn, "p2p"],
        [443, 0, "https"],
        [444, 96, "onion"],
        [445, 296, "onion3"],
        [446, Gn, "garlic64"],
        [448, 0, "tls"],
        [460, 0, "quic"],
        [461, 0, "quic-v1"],
        [465, 0, "webtransport"],
        [466, Gn, "certhash"],
        [477, 0, "ws"],
        [478, 0, "wss"],
        [479, 0, "p2p-websocket-star"],
        [480, 0, "http"],
        [777, Gn, "memory"],
      ].forEach(function (e) {
        var r = Xn.apply(void 0, (0, le.Z)(e));
        (Qn[r.code] = r), (Yn[r.name] = r);
      });
      var aa = Object.values(Rn).map(function (e) {
          return e.decoder;
        }),
        ua = (function () {
          var e = aa[0].or(aa[1]);
          return (
            aa.slice(2).forEach(function (r) {
              return (e = e.or(r));
            }),
            e
          );
        })();
      function sa(e) {
        if (!et(e)) throw new Error("invalid ip address");
        return Jn(e);
      }
      function ia(e) {
        var r = new ArrayBuffer(2);
        return new DataView(r).setUint16(0, e), new Uint8Array(r);
      }
      function oa(e) {
        return new DataView(e.buffer).getUint16(e.byteOffset);
      }
      function ca(e) {
        var r = ea(e),
          t = Uint8Array.from(cr.encode(r.length));
        return ra([t, r], t.length + r.length);
      }
      function fa(e) {
        var r = cr.decode(e);
        if ((e = e.slice(cr.decode.bytes)).length !== r)
          throw new Error("inconsistent lengths");
        return Vn(e);
      }
      function pa(e) {
        var r = e.slice(0, e.length - 2),
          t = e.slice(e.length - 2),
          n = Vn(r, "base32"),
          a = oa(t);
        return "".concat(n, ":").concat(a);
      }
      function ha(e) {
        return e.map(function (e) {
          var r = xa(e);
          return null != e[1] ? [r.code, ta(r.code, e[1])] : [r.code];
        });
      }
      function la(e) {
        return ga(
          ra(
            e.map(function (e) {
              var r = xa(e),
                t = Uint8Array.from(cr.encode(r.code));
              return e.length > 1 && null != e[1] && (t = ra([t, e[1]])), t;
            }),
          ),
        );
      }
      function da(e, r) {
        return e.size > 0
          ? e.size / 8
          : 0 === e.size
            ? 0
            : cr.decode(r) +
              (null !== (t = cr.decode.bytes) && void 0 !== t ? t : 0);
        var t;
      }
      function va(e) {
        for (var r = [], t = 0; t < e.length; ) {
          var n,
            a = cr.decode(e, t),
            u = null !== (n = cr.decode.bytes) && void 0 !== n ? n : 0,
            s = da($n(a), e.slice(t + u));
          if (0 !== s) {
            var i = e.slice(t + u, t + u + s);
            if ((t += s + u) > e.length)
              throw Da("Invalid address Uint8Array: " + Vn(e, "base16"));
            r.push([a, i]);
          } else r.push([a]), (t += u);
        }
        return r;
      }
      function ya(e) {
        return (function (e) {
          var r = [];
          return (
            e.map(function (e) {
              var t = xa(e);
              return (
                r.push(t.name),
                e.length > 1 && null != e[1] && r.push(e[1]),
                null
              );
            }),
            wa(r.join("/"))
          );
        })(ha(va(e)));
      }
      function ba(e) {
        var r = (function (e) {
          var r = [],
            t = e.split("/").slice(1);
          if (1 === t.length && "" === t[0]) return [];
          for (var n = 0; n < t.length; n++) {
            var a = t[n],
              u = $n(a);
            if (0 !== u.size) {
              if (++n >= t.length) throw Da("invalid address: " + e);
              if (!0 === u.path) {
                r.push([a, wa(t.slice(n).join("/"))]);
                break;
              }
              r.push([a, t[n]]);
            } else r.push([a]);
          }
          return r;
        })((e = wa(e)));
        return la(
          r.map(function (e) {
            Array.isArray(e) || (e = [e]);
            var r = xa(e);
            return e.length > 1 ? [r.code, na(r.code, e[1])] : [r.code];
          }),
        );
      }
      function ga(e) {
        var r = ma(e);
        if (null != r) throw r;
        return Uint8Array.from(e);
      }
      function ma(e) {
        try {
          va(e);
        } catch (r) {
          return r;
        }
      }
      function wa(e) {
        return (
          "/" +
          e
            .trim()
            .split("/")
            .filter(function (e) {
              return e;
            })
            .join("/")
        );
      }
      function Da(e) {
        return new Error("Error parsing address: " + e);
      }
      function xa(e) {
        return $n(e[0]);
      }
      var ka,
        Ea,
        Za,
        Aa,
        Ca = function (e, r, t, n) {
          if ("a" === t && !n)
            throw new TypeError(
              "Private accessor was defined without a getter",
            );
          if ("function" === typeof r ? e !== r || !n : !r.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it",
            );
          return "m" === t ? n : "a" === t ? n.call(e) : n ? n.value : r.get(e);
        },
        Fa = function (e, r, t, n, a) {
          if ("m" === n) throw new TypeError("Private method is not writable");
          if ("a" === n && !a)
            throw new TypeError(
              "Private accessor was defined without a setter",
            );
          if ("function" === typeof r ? e !== r || !a : !r.has(e))
            throw new TypeError(
              "Cannot write private member to an object whose class did not declare it",
            );
          return "a" === n ? a.call(e, t) : a ? (a.value = t) : r.set(e, t), t;
        },
        Ba = Symbol.for("nodejs.util.inspect.custom"),
        Pa = [
          $n("dns").code,
          $n("dns4").code,
          $n("dns6").code,
          $n("dnsaddr").code,
        ],
        Sa = new Map(),
        Ia = Symbol.for("@multiformats/js-multiaddr/multiaddr");
      function ja(e) {
        return Boolean(null === e || void 0 === e ? void 0 : e[Ia]);
      }
      var Ua = (function (e) {
        function r(e) {
          if (
            ((0, N.Z)(this, r),
            ka.set(this, void 0),
            Ea.set(this, void 0),
            Za.set(this, void 0),
            (this[Aa] = !0),
            null == e && (e = ""),
            e instanceof Uint8Array)
          )
            this.bytes = ga(e);
          else if ("string" === typeof e) {
            if (e.length > 0 && "/" !== e.charAt(0))
              throw new Error(
                'multiaddr "'.concat(e, '" must start with a "/"'),
              );
            this.bytes = ba(e);
          } else {
            if (!ja(e))
              throw new Error(
                "addr must be a string, Buffer, or another Multiaddr",
              );
            this.bytes = ga(e.bytes);
          }
        }
        return (
          (0, R.Z)(r, [
            {
              key: "toString",
              value: function () {
                return (
                  null == Ca(this, ka, "f") &&
                    Fa(this, ka, ya(this.bytes), "f"),
                  Ca(this, ka, "f")
                );
              },
            },
            {
              key: "toJSON",
              value: function () {
                return this.toString();
              },
            },
            {
              key: "toOptions",
              value: function () {
                var e,
                  r,
                  t,
                  n,
                  a,
                  u = "",
                  s = $n("tcp"),
                  i = $n("udp"),
                  o = $n("ip4"),
                  c = $n("ip6"),
                  f = $n("dns6"),
                  p = $n("ip6zone"),
                  h = (0, T.Z)(this.stringTuples());
                try {
                  for (h.s(); !(a = h.n()).done; ) {
                    var l = (0, Fe.Z)(a.value, 2),
                      d = l[0],
                      v = l[1];
                    d === p.code &&
                      (u = "%".concat(null !== v && void 0 !== v ? v : "")),
                      Pa.includes(d) &&
                        ((r = s.name),
                        (n = 443),
                        (t = ""
                          .concat(null !== v && void 0 !== v ? v : "")
                          .concat(u)),
                        (e = d === f.code ? 6 : 4)),
                      (d !== s.code && d !== i.code) ||
                        ((r = $n(d).name),
                        (n = parseInt(null !== v && void 0 !== v ? v : ""))),
                      (d !== o.code && d !== c.code) ||
                        ((r = $n(d).name),
                        (t = ""
                          .concat(null !== v && void 0 !== v ? v : "")
                          .concat(u)),
                        (e = d === c.code ? 6 : 4));
                  }
                } catch (y) {
                  h.e(y);
                } finally {
                  h.f();
                }
                if (null == e || null == r || null == t || null == n)
                  throw new Error(
                    'multiaddr must have a valid format: "/{ip4, ip6, dns4, dns6, dnsaddr}/{address}/{tcp, udp}/{port}".',
                  );
                return { family: e, host: t, transport: r, port: n };
              },
            },
            {
              key: "protos",
              value: function () {
                return this.protoCodes().map(function (e) {
                  return Object.assign({}, $n(e));
                });
              },
            },
            {
              key: "protoCodes",
              value: function () {
                for (var e = [], r = this.bytes, t = 0; t < r.length; ) {
                  var n,
                    a = cr.decode(r, t),
                    u = null !== (n = cr.decode.bytes) && void 0 !== n ? n : 0;
                  (t += da($n(a), r.slice(t + u)) + u), e.push(a);
                }
                return e;
              },
            },
            {
              key: "protoNames",
              value: function () {
                return this.protos().map(function (e) {
                  return e.name;
                });
              },
            },
            {
              key: "tuples",
              value: function () {
                return (
                  null == Ca(this, Ea, "f") &&
                    Fa(this, Ea, va(this.bytes), "f"),
                  Ca(this, Ea, "f")
                );
              },
            },
            {
              key: "stringTuples",
              value: function () {
                return (
                  null == Ca(this, Za, "f") &&
                    Fa(this, Za, ha(this.tuples()), "f"),
                  Ca(this, Za, "f")
                );
              },
            },
            {
              key: "encapsulate",
              value: function (e) {
                return (e = new r(e)), new r(this.toString() + e.toString());
              },
            },
            {
              key: "decapsulate",
              value: function (e) {
                var t = e.toString(),
                  n = this.toString(),
                  a = n.lastIndexOf(t);
                if (a < 0)
                  throw new Error(
                    "Address "
                      .concat(this.toString(), " does not contain subaddress: ")
                      .concat(e.toString()),
                  );
                return new r(n.slice(0, a));
              },
            },
            {
              key: "decapsulateCode",
              value: function (e) {
                for (var t = this.tuples(), n = t.length - 1; n >= 0; n--)
                  if (t[n][0] === e) return new r(la(t.slice(0, n)));
                return this;
              },
            },
            {
              key: "getPeerId",
              value: function () {
                try {
                  var e = this.stringTuples().filter(function (e) {
                      return e[0] === Yn.ipfs.code;
                    }),
                    r = e.pop();
                  if (null != (null === r || void 0 === r ? void 0 : r[1])) {
                    var t = r[1];
                    return "Q" === t[0] || "1" === t[0]
                      ? Vn(Bt.decode("z".concat(t)), "base58btc")
                      : Vn(Bn.parse(t).multihash.bytes, "base58btc");
                  }
                  return null;
                } catch (n) {
                  return null;
                }
              },
            },
            {
              key: "getPath",
              value: function () {
                var e = null;
                try {
                  null ==
                    (e = this.stringTuples().filter(function (e) {
                      return !0 === $n(e[0]).path;
                    })[0][1]) && (e = null);
                } catch (r) {
                  e = null;
                }
                return e;
              },
            },
            {
              key: "equals",
              value: function (e) {
                return (function (e, r) {
                  if (e === r) return !0;
                  if (e.byteLength !== r.byteLength) return !1;
                  for (var t = 0; t < e.byteLength; t++)
                    if (e[t] !== r[t]) return !1;
                  return !0;
                })(this.bytes, e.bytes);
              },
            },
            {
              key: "resolve",
              value: (function () {
                var e = (0, U.Z)(
                  (0, j.Z)().mark(function e(t) {
                    var n, a, u;
                    return (0, j.Z)().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                null !=
                                (n = this.protos().find(function (e) {
                                  return e.resolvable;
                                }))
                              ) {
                                e.next = 3;
                                break;
                              }
                              return e.abrupt("return", [this]);
                            case 3:
                              if (null != (a = Sa.get(n.name))) {
                                e.next = 6;
                                break;
                              }
                              throw Sr(
                                new Error(
                                  "no available resolver for ".concat(n.name),
                                ),
                                "ERR_NO_AVAILABLE_RESOLVER",
                              );
                            case 6:
                              return (e.next = 8), a(this, t);
                            case 8:
                              return (
                                (u = e.sent),
                                e.abrupt(
                                  "return",
                                  u.map(function (e) {
                                    return new r(e);
                                  }),
                                )
                              );
                            case 10:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                    );
                  }),
                );
                return function (r) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "nodeAddress",
              value: function () {
                var e = this.toOptions();
                if ("tcp" !== e.transport && "udp" !== e.transport)
                  throw new Error(
                    'multiaddr must have a valid format - no protocol with name: "'.concat(
                      e.transport,
                      '". Must have a valid transport protocol: "{tcp, udp}"',
                    ),
                  );
                return { family: e.family, address: e.host, port: e.port };
              },
            },
            {
              key: "isThinWaistAddress",
              value: function (e) {
                var r = (null !== e && void 0 !== e ? e : this).protos();
                return (
                  2 === r.length &&
                  (4 === r[0].code || 41 === r[0].code) &&
                  (6 === r[1].code || 273 === r[1].code)
                );
              },
            },
            {
              key: e,
              value: function () {
                return "Multiaddr(".concat(ya(this.bytes), ")");
              },
            },
          ]),
          r
        );
      })(
        ((ka = new WeakMap()),
        (Ea = new WeakMap()),
        (Za = new WeakMap()),
        (Aa = Ia),
        Ba),
      );
      var Ta = function (e, r) {
          return r;
        },
        Na = {
          ip4: Ta,
          ip6: function (e, r, t, n) {
            return 1 === n.length && "ip6" === n[0].protocol
              ? r
              : "[".concat(r, "]");
          },
          tcp: function (e, r, t, n, a) {
            return n.some(function (e) {
              return ["http", "https", "ws", "wss"].includes(e.protocol);
            })
              ? "".concat(e, ":").concat(r)
              : (function (e, r, t, n) {
                  if (null != n && !1 === n.assumeHttp)
                    return "tcp://".concat(e, ":").concat(r);
                  var a = "tcp",
                    u = ":".concat(r);
                  return (
                    "tcp" === t[t.length - 1].protocol &&
                      ((a = "443" === r ? "https" : "http"),
                      (u = "443" === r || "80" === r ? "" : u)),
                    "".concat(a, "://").concat(e).concat(u)
                  );
                })(e, r, n, a);
          },
          udp: function (e, r) {
            return "udp://".concat(e, ":").concat(r);
          },
          dnsaddr: Ta,
          dns4: Ta,
          dns6: Ta,
          ipfs: function (e, r) {
            return "".concat(e, "/ipfs/").concat(r);
          },
          p2p: function (e, r) {
            return "".concat(e, "/p2p/").concat(r);
          },
          http: function (e) {
            return "http://".concat(e);
          },
          https: function (e) {
            return "https://".concat(e);
          },
          ws: function (e) {
            return "ws://".concat(e);
          },
          wss: function (e) {
            return "wss://".concat(e);
          },
          "p2p-websocket-star": function (e) {
            return "".concat(e, "/p2p-websocket-star");
          },
          "p2p-webrtc-star": function (e) {
            return "".concat(e, "/p2p-webrtc-star");
          },
          "p2p-webrtc-direct": function (e) {
            return "".concat(e, "/p2p-webrtc-direct");
          },
        };
      function Ra(e, r) {
        var t = new Ua(e),
          n = t.toString().split("/").slice(1);
        return t
          .tuples()
          .map(function (e) {
            var r, t;
            return {
              protocol: null !== (r = n.shift()) && void 0 !== r ? r : "",
              content:
                null != e[1] && null !== (t = n.shift()) && void 0 !== t
                  ? t
                  : "",
            };
          })
          .reduce(function (e, t, n, a) {
            var u = Na[t.protocol];
            if (null == u)
              throw new Error("Unsupported protocol ".concat(t.protocol));
            return u(e, t.content, n, a, r);
          }, "");
      }
      function Oa(e) {
        try {
          e = Ra(new Or(e));
        } catch (r) {}
        return (e = e.toString());
      }
      var _a = function () {},
        Ma = Hr("ipfs-http-client:lib:error-handler"),
        La = Jr.bind({ ignoreUndefined: !0 }),
        za = _r.isBrowser || _r.isWebWorker ? location.protocol : "http",
        Wa = _r.isBrowser || _r.isWebWorker ? location.hostname : "localhost",
        Va = _r.isBrowser || _r.isWebWorker ? location.port : "5001",
        Ha = function () {
          var e,
            r,
            t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = {};
          if ("string" === typeof t || Or.isMultiaddr(t)) e = new URL(Oa(t));
          else if (t instanceof URL) e = t;
          else if ("string" === typeof t.url || Or.isMultiaddr(t.url))
            (e = new URL(Oa(t.url))), (n = t);
          else if (t.url instanceof URL) (e = t.url), (n = t);
          else {
            var a = ((n = t || {}).protocol || za).replace(":", ""),
              u = (n.host || Wa).split(":")[0],
              s = n.port || Va;
            e = new URL("".concat(a, "://").concat(u, ":").concat(s));
          }
          if (
            (n.apiPath
              ? (e.pathname = n.apiPath)
              : ("/" !== e.pathname && void 0 !== e.pathname) ||
                (e.pathname = "api/v0"),
            _r.isNode)
          ) {
            var i = _a(e);
            r = n.agent || new i({ keepAlive: !0, maxSockets: 6 });
          }
          return (0, Pe.Z)(
            (0, Pe.Z)({}, n),
            {},
            {
              host: e.host,
              protocol: e.protocol.replace(":", ""),
              port: Number(e.port),
              apiPath: e.pathname,
              url: e,
              agent: r,
            },
          );
        },
        qa = (function () {
          var e = (0, U.Z)(
            (0, j.Z)().mark(function e(r) {
              var t, n, a;
              return (0, j.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((e.prev = 0),
                          !(r.headers.get("Content-Type") || "").startsWith(
                            "application/json",
                          ))
                        ) {
                          e.next = 9;
                          break;
                        }
                        return (e.next = 4), r.json();
                      case 4:
                        (n = e.sent),
                          Ma(n),
                          (t = n.Message || n.message),
                          (e.next = 12);
                        break;
                      case 9:
                        return (e.next = 11), r.text();
                      case 11:
                        t = e.sent;
                      case 12:
                        e.next = 18;
                        break;
                      case 14:
                        (e.prev = 14),
                          (e.t0 = e.catch(0)),
                          Ma("Failed to parse error response", e.t0),
                          (t = e.t0.message);
                      case 18:
                        throw (
                          ((a = new qr.HTTPError(r)),
                          t &&
                            (t.includes("deadline has elapsed") &&
                              (a = new qr.TimeoutError()),
                            t &&
                              t.includes("context deadline exceeded") &&
                              (a = new qr.TimeoutError())),
                          t &&
                            t.includes("request timed out") &&
                            (a = new qr.TimeoutError()),
                          t && (a.message = t),
                          a)
                        );
                      case 23:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 14]],
              );
            }),
          );
          return function (r) {
            return e.apply(this, arguments);
          };
        })(),
        Ja = /[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g,
        Ka = function (e) {
          return e.replace(Ja, function (e) {
            return "-" + e.toLowerCase();
          });
        },
        Ga = function (e) {
          return "string" === typeof e ? Wr(e) : e;
        },
        Ya = (function (e) {
          (0, te.Z)(t, e);
          var r = (0, ne.Z)(t);
          function t() {
            var e,
              n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
            (0, N.Z)(this, t);
            var a = Ha(n);
            delete (e = r.call(this, {
              timeout: Ga(a.timeout || 0) || void 0,
              headers: a.headers,
              base: "".concat(a.url),
              handleError: qa,
              transformSearchParams: function (e) {
                var r,
                  t = new URLSearchParams(),
                  n = (0, T.Z)(e);
                try {
                  for (n.s(); !(r = n.n()).done; ) {
                    var a = (0, Fe.Z)(r.value, 2),
                      u = a[0],
                      s = a[1];
                    "undefined" !== s &&
                      "null" !== s &&
                      "signal" !== u &&
                      t.append(Ka(u), s),
                      "timeout" !== u || isNaN(s) || t.append(Ka(u), s);
                  }
                } catch (i) {
                  n.e(i);
                } finally {
                  n.f();
                }
                return t;
              },
              agent: a.agent,
            })).get,
              delete e.put,
              delete e.delete,
              delete e.options;
            var u = e.fetch;
            return (
              (e.fetch = function (r) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                return (
                  "string" !== typeof r ||
                    r.startsWith("/") ||
                    (r = "".concat(a.url, "/").concat(r)),
                  u.call((0, Be.Z)(e), r, La(t, { method: "POST" }))
                );
              }),
              e
            );
          }
          return (0, R.Z)(t);
        })(qr),
        Qa =
          (qr.HTTPError,
          function (e) {
            return function (r) {
              return e(new Ya(r), r);
            };
          }),
        Xa = t(45987);
      function $a(e) {
        if (null != e)
          return "string" === typeof e ? e : e.toString(8).padStart(4, "0");
      }
      function eu(e) {
        if (null != e) {
          var r;
          if (
            (null != e.secs && (r = { secs: e.secs, nsecs: e.nsecs }),
            null != e.Seconds &&
              (r = { secs: e.Seconds, nsecs: e.FractionalNanoseconds }),
            Array.isArray(e) && (r = { secs: e[0], nsecs: e[1] }),
            e instanceof Date)
          ) {
            var t = e.getTime(),
              n = Math.floor(t / 1e3);
            r = { secs: n, nsecs: 1e3 * (t - 1e3 * n) };
          }
          if (Object.prototype.hasOwnProperty.call(r, "secs")) {
            if (
              null != r &&
              null != r.nsecs &&
              (r.nsecs < 0 || r.nsecs > 999999999)
            )
              throw Sr(
                new Error("mtime-nsecs must be within the range [0,999999999]"),
                "ERR_INVALID_MTIME_NSECS",
              );
            return r;
          }
        }
      }
      var ru = ["arg", "searchParams", "hashAlg", "mtime", "mode"];
      function tu() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          r = e.arg,
          t = e.searchParams,
          n = e.hashAlg,
          a = e.mtime,
          u = e.mode,
          s = (0, Xa.Z)(e, ru);
        t && (s = (0, Pe.Z)((0, Pe.Z)({}, s), t)),
          n && (s.hash = n),
          null != a &&
            ((a = eu(a)), (s.mtime = a.secs), (s.mtimeNsecs = a.nsecs)),
          null != u && (s.mode = $a(u)),
          s.timeout &&
            !isNaN(s.timeout) &&
            (s.timeout = "".concat(s.timeout, "ms")),
          void 0 === r || null === r ? (r = []) : Array.isArray(r) || (r = [r]);
        var i = new URLSearchParams(s);
        return (
          r.forEach(function (e) {
            return i.append("arg", e);
          }),
          i
        );
      }
      var nu = Qa(function (e) {
          function r() {
            return (
              (r = (0, U.Z)(
                (0, j.Z)().mark(function r() {
                  var t,
                    n,
                    a = arguments;
                  return (0, j.Z)().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (t = a.length > 0 && void 0 !== a[0] ? a[0] : {}),
                            (r.next = 3),
                            e.post("bitswap/wantlist", {
                              signal: t.signal,
                              searchParams: tu(t),
                              headers: t.headers,
                            })
                          );
                        case 3:
                          return (r.next = 5), r.sent.json();
                        case 5:
                          return (
                            (n = r.sent),
                            r.abrupt(
                              "return",
                              (n.Keys || []).map(function (e) {
                                return q.CID.parse(e["/"]);
                              }),
                            )
                          );
                        case 7:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )),
              r.apply(this, arguments)
            );
          }
          return function () {
            return r.apply(this, arguments);
          };
        }),
        au = Qa(function (e) {
          function r() {
            return (
              (r = (0, U.Z)(
                (0, j.Z)().mark(function r(t) {
                  var n,
                    a,
                    u = arguments;
                  return (0, j.Z)().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (n = u.length > 1 && void 0 !== u[1] ? u[1] : {}),
                            (r.next = 3),
                            e.post("bitswap/wantlist", {
                              signal: n.signal,
                              searchParams: tu(
                                (0, Pe.Z)(
                                  (0, Pe.Z)({}, n),
                                  {},
                                  { peer: t.toString() },
                                ),
                              ),
                              headers: n.headers,
                            })
                          );
                        case 3:
                          return (r.next = 5), r.sent.json();
                        case 5:
                          return (
                            (a = r.sent),
                            r.abrupt(
                              "return",
                              (a.Keys || []).map(function (e) {
                                return q.CID.parse(e["/"]);
                              }),
                            )
                          );
                        case 7:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )),
              r.apply(this, arguments)
            );
          }
          return function (e) {
            return r.apply(this, arguments);
          };
        }),
        uu = function e(r, t, n) {
          t = t || [];
          var a = (n = n || 0);
          for (; r >= ou; ) (t[n++] = (255 & r) | su), (r /= 128);
          for (; r & iu; ) (t[n++] = (255 & r) | su), (r >>>= 7);
          return (t[n] = 0 | r), (e.bytes = n - a + 1), t;
        },
        su = 128,
        iu = -128,
        ou = Math.pow(2, 31);
      var cu = function e(r, t) {
          var n,
            a = 0,
            u = 0,
            s = (t = t || 0),
            i = r.length;
          do {
            if (s >= i)
              throw ((e.bytes = 0), new RangeError("Could not decode varint"));
            (n = r[s++]),
              (a += u < 28 ? (n & pu) << u : (n & pu) * Math.pow(2, u)),
              (u += 7);
          } while (n >= fu);
          return (e.bytes = s - t), a;
        },
        fu = 128,
        pu = 127;
      var hu = Math.pow(2, 7),
        lu = Math.pow(2, 14),
        du = Math.pow(2, 21),
        vu = Math.pow(2, 28),
        yu = Math.pow(2, 35),
        bu = Math.pow(2, 42),
        gu = Math.pow(2, 49),
        mu = Math.pow(2, 56),
        wu = Math.pow(2, 63),
        Du = {
          encode: uu,
          decode: cu,
          encodingLength: function (e) {
            return e < hu
              ? 1
              : e < lu
                ? 2
                : e < du
                  ? 3
                  : e < vu
                    ? 4
                    : e < yu
                      ? 5
                      : e < bu
                        ? 6
                        : e < gu
                          ? 7
                          : e < mu
                            ? 8
                            : e < wu
                              ? 9
                              : 10;
          },
        },
        xu = function (e) {
          var r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return [Du.decode(e, r), Du.decode.bytes];
        },
        ku = function (e, r) {
          var t =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          return Du.encode(e, r, t), r;
        },
        Eu = function (e) {
          return Du.encodingLength(e);
        },
        Zu =
          (new Uint8Array(0),
          function (e) {
            if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name)
              return e;
            if (e instanceof ArrayBuffer) return new Uint8Array(e);
            if (ArrayBuffer.isView(e))
              return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
            throw new Error("Unknown type, must be binary type");
          }),
        Au = function (e, r) {
          var t = r.byteLength,
            n = Eu(e),
            a = n + Eu(t),
            u = new Uint8Array(a + t);
          return ku(e, u, 0), ku(t, u, n), u.set(r, a), new Fu(e, t, r, u);
        },
        Cu = function (e) {
          var r = Zu(e),
            t = xu(r),
            n = (0, Fe.Z)(t, 2),
            a = n[0],
            u = n[1],
            s = xu(r.subarray(u)),
            i = (0, Fe.Z)(s, 2),
            o = i[0],
            c = i[1],
            f = r.subarray(u + c);
          if (f.byteLength !== o) throw new Error("Incorrect length");
          return new Fu(a, o, f, r);
        },
        Fu = (0, R.Z)(function e(r, t, n, a) {
          (0, N.Z)(this, e),
            (this.code = r),
            (this.size = t),
            (this.digest = n),
            (this.bytes = a);
        });
      var Bu = function (e, r) {
          if (e.length >= 255) throw new TypeError("Alphabet too long");
          for (var t = new Uint8Array(256), n = 0; n < t.length; n++)
            t[n] = 255;
          for (var a = 0; a < e.length; a++) {
            var u = e.charAt(a),
              s = u.charCodeAt(0);
            if (255 !== t[s]) throw new TypeError(u + " is ambiguous");
            t[s] = a;
          }
          var i = e.length,
            o = e.charAt(0),
            c = Math.log(i) / Math.log(256),
            f = Math.log(256) / Math.log(i);
          function p(e) {
            if ("string" !== typeof e) throw new TypeError("Expected String");
            if (0 === e.length) return new Uint8Array();
            var r = 0;
            if (" " !== e[r]) {
              for (var n = 0, a = 0; e[r] === o; ) n++, r++;
              for (
                var u = ((e.length - r) * c + 1) >>> 0, s = new Uint8Array(u);
                e[r];

              ) {
                var f = t[e.charCodeAt(r)];
                if (255 === f) return;
                for (
                  var p = 0, h = u - 1;
                  (0 !== f || p < a) && -1 !== h;
                  h--, p++
                )
                  (f += (i * s[h]) >>> 0),
                    (s[h] = f % 256 >>> 0),
                    (f = (f / 256) >>> 0);
                if (0 !== f) throw new Error("Non-zero carry");
                (a = p), r++;
              }
              if (" " !== e[r]) {
                for (var l = u - a; l !== u && 0 === s[l]; ) l++;
                for (var d = new Uint8Array(n + (u - l)), v = n; l !== u; )
                  d[v++] = s[l++];
                return d;
              }
            }
          }
          return {
            encode: function (r) {
              if (
                (r instanceof Uint8Array ||
                  (ArrayBuffer.isView(r)
                    ? (r = new Uint8Array(r.buffer, r.byteOffset, r.byteLength))
                    : Array.isArray(r) && (r = Uint8Array.from(r))),
                !(r instanceof Uint8Array))
              )
                throw new TypeError("Expected Uint8Array");
              if (0 === r.length) return "";
              for (
                var t = 0, n = 0, a = 0, u = r.length;
                a !== u && 0 === r[a];

              )
                a++, t++;
              for (
                var s = ((u - a) * f + 1) >>> 0, c = new Uint8Array(s);
                a !== u;

              ) {
                for (
                  var p = r[a], h = 0, l = s - 1;
                  (0 !== p || h < n) && -1 !== l;
                  l--, h++
                )
                  (p += (256 * c[l]) >>> 0),
                    (c[l] = p % i >>> 0),
                    (p = (p / i) >>> 0);
                if (0 !== p) throw new Error("Non-zero carry");
                (n = h), a++;
              }
              for (var d = s - n; d !== s && 0 === c[d]; ) d++;
              for (var v = o.repeat(t); d < s; ++d) v += e.charAt(c[d]);
              return v;
            },
            decodeUnsafe: p,
            decode: function (e) {
              var t = p(e);
              if (t) return t;
              throw new Error("Non-".concat(r, " character"));
            },
          };
        },
        Pu = Bu,
        Su = (function () {
          function e(r, t, n) {
            (0, N.Z)(this, e),
              (this.name = r),
              (this.prefix = t),
              (this.baseEncode = n);
          }
          return (
            (0, R.Z)(e, [
              {
                key: "encode",
                value: function (e) {
                  if (e instanceof Uint8Array)
                    return "".concat(this.prefix).concat(this.baseEncode(e));
                  throw Error("Unknown type, must be binary type");
                },
              },
            ]),
            e
          );
        })(),
        Iu = (function () {
          function e(r, t, n) {
            if (
              ((0, N.Z)(this, e),
              (this.name = r),
              (this.prefix = t),
              void 0 === t.codePointAt(0))
            )
              throw new Error("Invalid prefix character");
            (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = n);
          }
          return (
            (0, R.Z)(e, [
              {
                key: "decode",
                value: function (e) {
                  if ("string" === typeof e) {
                    if (e.codePointAt(0) !== this.prefixCodePoint)
                      throw Error(
                        "Unable to decode multibase string "
                          .concat(JSON.stringify(e), ", ")
                          .concat(
                            this.name,
                            " decoder only supports inputs prefixed with ",
                          )
                          .concat(this.prefix),
                      );
                    return this.baseDecode(e.slice(this.prefix.length));
                  }
                  throw Error("Can only multibase decode strings");
                },
              },
              {
                key: "or",
                value: function (e) {
                  return Uu(this, e);
                },
              },
            ]),
            e
          );
        })(),
        ju = (function () {
          function e(r) {
            (0, N.Z)(this, e), (this.decoders = r);
          }
          return (
            (0, R.Z)(e, [
              {
                key: "or",
                value: function (e) {
                  return Uu(this, e);
                },
              },
              {
                key: "decode",
                value: function (e) {
                  var r = e[0],
                    t = this.decoders[r];
                  if (t) return t.decode(e);
                  throw RangeError(
                    "Unable to decode multibase string "
                      .concat(JSON.stringify(e), ", only inputs prefixed with ")
                      .concat(Object.keys(this.decoders), " are supported"),
                  );
                },
              },
            ]),
            e
          );
        })(),
        Uu = function (e, r) {
          return new ju(
            (0, Pe.Z)(
              (0, Pe.Z)({}, e.decoders || (0, Kr.Z)({}, e.prefix, e)),
              r.decoders || (0, Kr.Z)({}, r.prefix, r),
            ),
          );
        },
        Tu = (function () {
          function e(r, t, n, a) {
            (0, N.Z)(this, e),
              (this.name = r),
              (this.prefix = t),
              (this.baseEncode = n),
              (this.baseDecode = a),
              (this.encoder = new Su(r, t, n)),
              (this.decoder = new Iu(r, t, a));
          }
          return (
            (0, R.Z)(e, [
              {
                key: "encode",
                value: function (e) {
                  return this.encoder.encode(e);
                },
              },
              {
                key: "decode",
                value: function (e) {
                  return this.decoder.decode(e);
                },
              },
            ]),
            e
          );
        })(),
        Nu = function (e) {
          var r = e.name,
            t = e.prefix,
            n = e.encode,
            a = e.decode;
          return new Tu(r, t, n, a);
        },
        Ru = function (e) {
          var r = e.prefix,
            t = e.name,
            n = e.alphabet,
            a = Pu(n, t),
            u = a.encode,
            s = a.decode;
          return Nu({
            prefix: r,
            name: t,
            encode: u,
            decode: function (e) {
              return Zu(s(e));
            },
          });
        },
        Ou = function (e) {
          var r = e.name,
            t = e.prefix,
            n = e.bitsPerChar,
            a = e.alphabet;
          return Nu({
            prefix: t,
            name: r,
            encode: function (e) {
              return (function (e, r, t) {
                for (
                  var n = "=" === r[r.length - 1],
                    a = (1 << t) - 1,
                    u = "",
                    s = 0,
                    i = 0,
                    o = 0;
                  o < e.length;
                  ++o
                )
                  for (i = (i << 8) | e[o], s += 8; s > t; )
                    u += r[a & (i >> (s -= t))];
                if ((s && (u += r[a & (i << (t - s))]), n))
                  for (; (u.length * t) & 7; ) u += "=";
                return u;
              })(e, a, n);
            },
            decode: function (e) {
              return (function (e, r, t, n) {
                for (var a = {}, u = 0; u < r.length; ++u) a[r[u]] = u;
                for (var s = e.length; "=" === e[s - 1]; ) --s;
                for (
                  var i = new Uint8Array(((s * t) / 8) | 0),
                    o = 0,
                    c = 0,
                    f = 0,
                    p = 0;
                  p < s;
                  ++p
                ) {
                  var h = a[e[p]];
                  if (void 0 === h)
                    throw new SyntaxError("Non-".concat(n, " character"));
                  (c = (c << t) | h),
                    (o += t) >= 8 && ((o -= 8), (i[f++] = 255 & (c >> o)));
                }
                if (o >= t || 255 & (c << (8 - o)))
                  throw new SyntaxError("Unexpected end of data");
                return i;
              })(e, a, n, r);
            },
          });
        },
        _u = Ru({
          name: "base58btc",
          prefix: "z",
          alphabet:
            "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
        }),
        Mu = Ru({
          name: "base58flickr",
          prefix: "Z",
          alphabet:
            "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
        }),
        Lu = Ou({
          prefix: "b",
          name: "base32",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567",
          bitsPerChar: 5,
        }),
        zu = Ou({
          prefix: "B",
          name: "base32upper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
          bitsPerChar: 5,
        }),
        Wu = Ou({
          prefix: "c",
          name: "base32pad",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
          bitsPerChar: 5,
        }),
        Vu = Ou({
          prefix: "C",
          name: "base32padupper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
          bitsPerChar: 5,
        }),
        Hu = Ou({
          prefix: "v",
          name: "base32hex",
          alphabet: "0123456789abcdefghijklmnopqrstuv",
          bitsPerChar: 5,
        }),
        qu = Ou({
          prefix: "V",
          name: "base32hexupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
          bitsPerChar: 5,
        }),
        Ju = Ou({
          prefix: "t",
          name: "base32hexpad",
          alphabet: "0123456789abcdefghijklmnopqrstuv=",
          bitsPerChar: 5,
        }),
        Ku = Ou({
          prefix: "T",
          name: "base32hexpadupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
          bitsPerChar: 5,
        }),
        Gu = Ou({
          prefix: "h",
          name: "base32z",
          alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
          bitsPerChar: 5,
        }),
        Yu = new WeakMap(),
        Qu = function (e) {
          var r = Yu.get(e);
          if (null == r) {
            var t = new Map();
            return Yu.set(e, t), t;
          }
          return r;
        },
        Xu = (function (e, r) {
          function t(e, r, n, a) {
            (0, N.Z)(this, t),
              (this.code = r),
              (this.version = e),
              (this.multihash = n),
              (this.bytes = a),
              (this["/"] = a);
          }
          return (
            (0, R.Z)(
              t,
              [
                {
                  key: "asCID",
                  get: function () {
                    return this;
                  },
                },
                {
                  key: "byteOffset",
                  get: function () {
                    return this.bytes.byteOffset;
                  },
                },
                {
                  key: "byteLength",
                  get: function () {
                    return this.bytes.byteLength;
                  },
                },
                {
                  key: "toV0",
                  value: function () {
                    switch (this.version) {
                      case 0:
                        return this;
                      case 1:
                        var e = this.code,
                          r = this.multihash;
                        if (e !== ts)
                          throw new Error(
                            "Cannot convert a non dag-pb CID to CIDv0",
                          );
                        if (r.code !== ns)
                          throw new Error(
                            "Cannot convert non sha2-256 multihash CID to CIDv0",
                          );
                        return t.createV0(r);
                      default:
                        throw Error(
                          "Can not convert CID version ".concat(
                            this.version,
                            " to version 0. This is a bug please report",
                          ),
                        );
                    }
                  },
                },
                {
                  key: "toV1",
                  value: function () {
                    switch (this.version) {
                      case 0:
                        var e = this.multihash,
                          r = e.code,
                          n = e.digest,
                          a = Au(r, n);
                        return t.createV1(this.code, a);
                      case 1:
                        return this;
                      default:
                        throw Error(
                          "Can not convert CID version ".concat(
                            this.version,
                            " to version 1. This is a bug please report",
                          ),
                        );
                    }
                  },
                },
                {
                  key: "equals",
                  value: function (e) {
                    return t.equals(this, e);
                  },
                },
                {
                  key: "toString",
                  value: function (e) {
                    return (function (e, r) {
                      var t = e.bytes;
                      return 0 === e.version
                        ? es(t, Qu(e), r || _u.encoder)
                        : rs(t, Qu(e), r || Lu.encoder);
                    })(this, e);
                  },
                },
                {
                  key: "toJSON",
                  value: function () {
                    return {
                      code: this.code,
                      version: this.version,
                      hash: this.multihash.bytes,
                    };
                  },
                },
                {
                  key: "link",
                  value: function () {
                    return this;
                  },
                },
                {
                  key: e,
                  get: function () {
                    return "CID";
                  },
                },
                {
                  key: r,
                  value: function () {
                    return "CID(".concat(this.toString(), ")");
                  },
                },
              ],
              [
                {
                  key: "equals",
                  value: function (e, r) {
                    var t = r;
                    return (
                      t &&
                      e.code === t.code &&
                      e.version === t.version &&
                      (function (e, r) {
                        if (e === r) return !0;
                        var t = r;
                        return (
                          e.code === t.code &&
                          e.size === t.size &&
                          t.bytes instanceof Uint8Array &&
                          (function (e, r) {
                            if (e === r) return !0;
                            if (e.byteLength !== r.byteLength) return !1;
                            for (var t = 0; t < e.byteLength; t++)
                              if (e[t] !== r[t]) return !1;
                            return !0;
                          })(e.bytes, t.bytes)
                        );
                      })(e.multihash, t.multihash)
                    );
                  },
                },
                {
                  key: "asCID",
                  value: function (e) {
                    if (null == e) return null;
                    var r = e;
                    if (r instanceof t) return r;
                    if (
                      (null != r["/"] && r["/"] === r.bytes) ||
                      r.asCID === r
                    ) {
                      var n = r.version,
                        a = r.code,
                        u = r.multihash;
                      return new t(n, a, u, r.bytes || as(n, a, u.bytes));
                    }
                    if (!0 === r[us]) {
                      var s = r.version,
                        i = r.multihash,
                        o = r.code,
                        c = Cu(i);
                      return t.create(s, o, c);
                    }
                    return null;
                  },
                },
                {
                  key: "create",
                  value: function (e, r, n) {
                    if ("number" !== typeof r)
                      throw new Error("String codecs are no longer supported");
                    if (!(n.bytes instanceof Uint8Array))
                      throw new Error("Invalid digest");
                    switch (e) {
                      case 0:
                        if (r !== ts)
                          throw new Error(
                            "Version 0 CID must use dag-pb (code: ".concat(
                              ts,
                              ") block encoding",
                            ),
                          );
                        return new t(e, r, n, n.bytes);
                      case 1:
                        return new t(e, r, n, as(e, r, n.bytes));
                      default:
                        throw new Error("Invalid version");
                    }
                  },
                },
                {
                  key: "createV0",
                  value: function (e) {
                    return t.create(0, ts, e);
                  },
                },
                {
                  key: "createV1",
                  value: function (e, r) {
                    return t.create(1, e, r);
                  },
                },
                {
                  key: "decode",
                  value: function (e) {
                    var r = t.decodeFirst(e),
                      n = (0, Fe.Z)(r, 2),
                      a = n[0];
                    if (n[1].length) throw new Error("Incorrect length");
                    return a;
                  },
                },
                {
                  key: "decodeFirst",
                  value: function (e) {
                    var r = t.inspectBytes(e),
                      n = r.size - r.multihashSize,
                      a = Zu(e.subarray(n, n + r.multihashSize));
                    if (a.byteLength !== r.multihashSize)
                      throw new Error("Incorrect length");
                    var u = a.subarray(r.multihashSize - r.digestSize),
                      s = new Fu(r.multihashCode, r.digestSize, u, a);
                    return [
                      0 === r.version ? t.createV0(s) : t.createV1(r.codec, s),
                      e.subarray(r.size),
                    ];
                  },
                },
                {
                  key: "inspectBytes",
                  value: function (e) {
                    var r = 0,
                      t = function () {
                        var t = xu(e.subarray(r)),
                          n = (0, Fe.Z)(t, 2),
                          a = n[0],
                          u = n[1];
                        return (r += u), a;
                      },
                      n = t(),
                      a = ts;
                    if (
                      (18 === n ? ((n = 0), (r = 0)) : (a = t()),
                      0 !== n && 1 !== n)
                    )
                      throw new RangeError("Invalid CID version ".concat(n));
                    var u = r,
                      s = t(),
                      i = t(),
                      o = r + i;
                    return {
                      version: n,
                      codec: a,
                      multihashCode: s,
                      digestSize: i,
                      multihashSize: o - u,
                      size: o,
                    };
                  },
                },
                {
                  key: "parse",
                  value: function (e, r) {
                    var n = $u(e, r),
                      a = (0, Fe.Z)(n, 2),
                      u = a[0],
                      s = a[1],
                      i = t.decode(s);
                    return Qu(i).set(u, e), i;
                  },
                },
              ],
            ),
            t
          );
        })(Symbol.toStringTag, Symbol.for("nodejs.util.inspect.custom")),
        $u = function (e, r) {
          switch (e[0]) {
            case "Q":
              var t = r || _u;
              return [_u.prefix, t.decode("".concat(_u.prefix).concat(e))];
            case _u.prefix:
              var n = r || _u;
              return [_u.prefix, n.decode(e)];
            case Lu.prefix:
              var a = r || Lu;
              return [Lu.prefix, a.decode(e)];
            default:
              if (null == r)
                throw Error(
                  "To parse non base32 or base58btc encoded CID multibase decoder must be provided",
                );
              return [e[0], r.decode(e)];
          }
        },
        es = function (e, r, t) {
          var n = t.prefix;
          if (n !== _u.prefix)
            throw Error(
              "Cannot string encode V0 in ".concat(t.name, " encoding"),
            );
          var a = r.get(n);
          if (null == a) {
            var u = t.encode(e).slice(1);
            return r.set(n, u), u;
          }
          return a;
        },
        rs = function (e, r, t) {
          var n = t.prefix,
            a = r.get(n);
          if (null == a) {
            var u = t.encode(e);
            return r.set(n, u), u;
          }
          return a;
        },
        ts = 112,
        ns = 18,
        as = function (e, r, t) {
          var n = Eu(e),
            a = n + Eu(r),
            u = new Uint8Array(a + t.byteLength);
          return ku(e, u, 0), ku(r, u, n), u.set(t, a), u;
        },
        us = Symbol.for("@ipld/js-cid/CID"),
        ss = Nu({
          prefix: "\0",
          name: "identity",
          encode: function (e) {
            return (r = e), new TextDecoder().decode(r);
            var r;
          },
          decode: function (e) {
            return (function (e) {
              return new TextEncoder().encode(e);
            })(e);
          },
        }),
        is = Ou({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 }),
        os = Ou({
          prefix: "7",
          name: "base8",
          alphabet: "01234567",
          bitsPerChar: 3,
        }),
        cs = Ru({ prefix: "9", name: "base10", alphabet: "0123456789" }),
        fs = Ou({
          prefix: "f",
          name: "base16",
          alphabet: "0123456789abcdef",
          bitsPerChar: 4,
        }),
        ps = Ou({
          prefix: "F",
          name: "base16upper",
          alphabet: "0123456789ABCDEF",
          bitsPerChar: 4,
        }),
        hs = Ru({
          prefix: "k",
          name: "base36",
          alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
        }),
        ls = Ru({
          prefix: "K",
          name: "base36upper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        }),
        ds = Ou({
          prefix: "m",
          name: "base64",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          bitsPerChar: 6,
        }),
        vs = Ou({
          prefix: "M",
          name: "base64pad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          bitsPerChar: 6,
        }),
        ys = Ou({
          prefix: "u",
          name: "base64url",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
          bitsPerChar: 6,
        }),
        bs = Ou({
          prefix: "U",
          name: "base64urlpad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
          bitsPerChar: 6,
        }),
        gs = Array.from(
          "\ud83d\ude80\ud83e\ude90\u2604\ud83d\udef0\ud83c\udf0c\ud83c\udf11\ud83c\udf12\ud83c\udf13\ud83c\udf14\ud83c\udf15\ud83c\udf16\ud83c\udf17\ud83c\udf18\ud83c\udf0d\ud83c\udf0f\ud83c\udf0e\ud83d\udc09\u2600\ud83d\udcbb\ud83d\udda5\ud83d\udcbe\ud83d\udcbf\ud83d\ude02\u2764\ud83d\ude0d\ud83e\udd23\ud83d\ude0a\ud83d\ude4f\ud83d\udc95\ud83d\ude2d\ud83d\ude18\ud83d\udc4d\ud83d\ude05\ud83d\udc4f\ud83d\ude01\ud83d\udd25\ud83e\udd70\ud83d\udc94\ud83d\udc96\ud83d\udc99\ud83d\ude22\ud83e\udd14\ud83d\ude06\ud83d\ude44\ud83d\udcaa\ud83d\ude09\u263a\ud83d\udc4c\ud83e\udd17\ud83d\udc9c\ud83d\ude14\ud83d\ude0e\ud83d\ude07\ud83c\udf39\ud83e\udd26\ud83c\udf89\ud83d\udc9e\u270c\u2728\ud83e\udd37\ud83d\ude31\ud83d\ude0c\ud83c\udf38\ud83d\ude4c\ud83d\ude0b\ud83d\udc97\ud83d\udc9a\ud83d\ude0f\ud83d\udc9b\ud83d\ude42\ud83d\udc93\ud83e\udd29\ud83d\ude04\ud83d\ude00\ud83d\udda4\ud83d\ude03\ud83d\udcaf\ud83d\ude48\ud83d\udc47\ud83c\udfb6\ud83d\ude12\ud83e\udd2d\u2763\ud83d\ude1c\ud83d\udc8b\ud83d\udc40\ud83d\ude2a\ud83d\ude11\ud83d\udca5\ud83d\ude4b\ud83d\ude1e\ud83d\ude29\ud83d\ude21\ud83e\udd2a\ud83d\udc4a\ud83e\udd73\ud83d\ude25\ud83e\udd24\ud83d\udc49\ud83d\udc83\ud83d\ude33\u270b\ud83d\ude1a\ud83d\ude1d\ud83d\ude34\ud83c\udf1f\ud83d\ude2c\ud83d\ude43\ud83c\udf40\ud83c\udf37\ud83d\ude3b\ud83d\ude13\u2b50\u2705\ud83e\udd7a\ud83c\udf08\ud83d\ude08\ud83e\udd18\ud83d\udca6\u2714\ud83d\ude23\ud83c\udfc3\ud83d\udc90\u2639\ud83c\udf8a\ud83d\udc98\ud83d\ude20\u261d\ud83d\ude15\ud83c\udf3a\ud83c\udf82\ud83c\udf3b\ud83d\ude10\ud83d\udd95\ud83d\udc9d\ud83d\ude4a\ud83d\ude39\ud83d\udde3\ud83d\udcab\ud83d\udc80\ud83d\udc51\ud83c\udfb5\ud83e\udd1e\ud83d\ude1b\ud83d\udd34\ud83d\ude24\ud83c\udf3c\ud83d\ude2b\u26bd\ud83e\udd19\u2615\ud83c\udfc6\ud83e\udd2b\ud83d\udc48\ud83d\ude2e\ud83d\ude46\ud83c\udf7b\ud83c\udf43\ud83d\udc36\ud83d\udc81\ud83d\ude32\ud83c\udf3f\ud83e\udde1\ud83c\udf81\u26a1\ud83c\udf1e\ud83c\udf88\u274c\u270a\ud83d\udc4b\ud83d\ude30\ud83e\udd28\ud83d\ude36\ud83e\udd1d\ud83d\udeb6\ud83d\udcb0\ud83c\udf53\ud83d\udca2\ud83e\udd1f\ud83d\ude41\ud83d\udea8\ud83d\udca8\ud83e\udd2c\u2708\ud83c\udf80\ud83c\udf7a\ud83e\udd13\ud83d\ude19\ud83d\udc9f\ud83c\udf31\ud83d\ude16\ud83d\udc76\ud83e\udd74\u25b6\u27a1\u2753\ud83d\udc8e\ud83d\udcb8\u2b07\ud83d\ude28\ud83c\udf1a\ud83e\udd8b\ud83d\ude37\ud83d\udd7a\u26a0\ud83d\ude45\ud83d\ude1f\ud83d\ude35\ud83d\udc4e\ud83e\udd32\ud83e\udd20\ud83e\udd27\ud83d\udccc\ud83d\udd35\ud83d\udc85\ud83e\uddd0\ud83d\udc3e\ud83c\udf52\ud83d\ude17\ud83e\udd11\ud83c\udf0a\ud83e\udd2f\ud83d\udc37\u260e\ud83d\udca7\ud83d\ude2f\ud83d\udc86\ud83d\udc46\ud83c\udfa4\ud83d\ude47\ud83c\udf51\u2744\ud83c\udf34\ud83d\udca3\ud83d\udc38\ud83d\udc8c\ud83d\udccd\ud83e\udd40\ud83e\udd22\ud83d\udc45\ud83d\udca1\ud83d\udca9\ud83d\udc50\ud83d\udcf8\ud83d\udc7b\ud83e\udd10\ud83e\udd2e\ud83c\udfbc\ud83e\udd75\ud83d\udea9\ud83c\udf4e\ud83c\udf4a\ud83d\udc7c\ud83d\udc8d\ud83d\udce3\ud83e\udd42",
        ),
        ms = gs.reduce(function (e, r, t) {
          return (e[t] = r), e;
        }, []),
        ws = gs.reduce(function (e, r, t) {
          return (e[r.codePointAt(0)] = t), e;
        }, []);
      var Ds = Nu({
          prefix: "\ud83d\ude80",
          name: "base256emoji",
          encode: function (e) {
            return e.reduce(function (e, r) {
              return (e += ms[r]);
            }, "");
          },
          decode: function (e) {
            var r,
              t = [],
              n = (0, T.Z)(e);
            try {
              for (n.s(); !(r = n.n()).done; ) {
                var a = r.value,
                  u = ws[a.codePointAt(0)];
                if (void 0 === u)
                  throw new Error("Non-base256emoji character: ".concat(a));
                t.push(u);
              }
            } catch (s) {
              n.e(s);
            } finally {
              n.f();
            }
            return new Uint8Array(t);
          },
        }),
        xs = function (e) {
          var r = e.name,
            t = e.code,
            n = e.encode;
          return new ks(r, t, n);
        },
        ks = (function () {
          function e(r, t, n) {
            (0, N.Z)(this, e),
              (this.name = r),
              (this.code = t),
              (this.encode = n);
          }
          return (
            (0, R.Z)(e, [
              {
                key: "digest",
                value: function (e) {
                  var r = this;
                  if (e instanceof Uint8Array) {
                    var t = this.encode(e);
                    return t instanceof Uint8Array
                      ? Au(this.code, t)
                      : t.then(function (e) {
                          return Au(r.code, e);
                        });
                  }
                  throw Error("Unknown type, must be binary type");
                },
              },
            ]),
            e
          );
        })(),
        Es = function (e) {
          return (function () {
            var r = (0, U.Z)(
              (0, j.Z)().mark(function r(t) {
                return (0, j.Z)().wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (r.t0 = Uint8Array),
                          (r.next = 3),
                          crypto.subtle.digest(e, t)
                        );
                      case 3:
                        return (
                          (r.t1 = r.sent), r.abrupt("return", new r.t0(r.t1))
                        );
                      case 5:
                      case "end":
                        return r.stop();
                    }
                }, r);
              }),
            );
            return function (e) {
              return r.apply(this, arguments);
            };
          })();
        },
        Zs = xs({ name: "sha2-256", code: 18, encode: Es("SHA-256") }),
        As = xs({ name: "sha2-512", code: 19, encode: Es("SHA-512") }),
        Cs = Zu,
        Fs = {
          code: 0,
          name: "identity",
          encode: Cs,
          digest: function (e) {
            return Au(0, Cs(e));
          },
        },
        Bs = "raw",
        Ps = 85,
        Ss = function (e) {
          return Zu(e);
        },
        Is = function (e) {
          return Zu(e);
        },
        js = new TextEncoder(),
        Us = new TextDecoder(),
        Ts = "json",
        Ns = 512,
        Rs = function (e) {
          return js.encode(JSON.stringify(e));
        },
        Os = function (e) {
          return JSON.parse(Us.decode(e));
        },
        _s = (0, Pe.Z)(
          (0, Pe.Z)(
            (0, Pe.Z)(
              (0, Pe.Z)(
                (0, Pe.Z)(
                  (0, Pe.Z)(
                    (0, Pe.Z)((0, Pe.Z)((0, Pe.Z)((0, Pe.Z)({}, D), x), k), E),
                    Z,
                  ),
                  w,
                ),
                A,
              ),
              m,
            ),
            C,
          ),
          F,
        );
      (0, Pe.Z)((0, Pe.Z)({}, B), P);
      function Ms(e, r) {
        if (e === r) return !0;
        if (e.byteLength !== r.byteLength) return !1;
        for (var t = 0; t < e.byteLength; t++) if (e[t] !== r[t]) return !1;
        return !0;
      }
      var Ls = Symbol.for("@libp2p/peer-id");
      var zs = Symbol.for("nodejs.util.inspect.custom"),
        Ws = Object.values(_s)
          .map(function (e) {
            return e.decoder;
          })
          .reduce(function (e, r) {
            return e.or(r);
          }, _s.identity.decoder),
        Vs = 114,
        Hs = 36,
        qs = 37,
        Js = (function (e) {
          function r(e) {
            (0, N.Z)(this, r),
              (this.type = e.type),
              (this.multihash = e.multihash),
              (this.privateKey = e.privateKey),
              Object.defineProperty(this, "string", {
                enumerable: !1,
                writable: !0,
              });
          }
          return (
            (0, R.Z)(r, [
              {
                key: e,
                get: function () {
                  return "PeerId(".concat(this.toString(), ")");
                },
              },
              {
                key: Ls,
                get: function () {
                  return !0;
                },
              },
              {
                key: "toString",
                value: function () {
                  return (
                    null == this.string &&
                      (this.string = _u.encode(this.multihash.bytes).slice(1)),
                    this.string
                  );
                },
              },
              {
                key: "toCID",
                value: function () {
                  return Xu.createV1(Vs, this.multihash);
                },
              },
              {
                key: "toBytes",
                value: function () {
                  return this.multihash.bytes;
                },
              },
              {
                key: "toJSON",
                value: function () {
                  return this.toString();
                },
              },
              {
                key: "equals",
                value: function (e) {
                  var r;
                  if (e instanceof Uint8Array)
                    return Ms(this.multihash.bytes, e);
                  if ("string" === typeof e) return Qs(e).equals(this);
                  if (
                    null !=
                    (null === e ||
                    void 0 === e ||
                    null === (r = e.multihash) ||
                    void 0 === r
                      ? void 0
                      : r.bytes)
                  )
                    return Ms(this.multihash.bytes, e.multihash.bytes);
                  throw new Error("not valid Id");
                },
              },
              {
                key: zs,
                value: function () {
                  return "PeerId(".concat(this.toString(), ")");
                },
              },
            ]),
            r
          );
        })(Symbol.toStringTag),
        Ks = (function (e) {
          (0, te.Z)(t, e);
          var r = (0, ne.Z)(t);
          function t(e) {
            var n;
            return (
              (0, N.Z)(this, t),
              ((n = r.call(
                this,
                (0, Pe.Z)((0, Pe.Z)({}, e), {}, { type: "RSA" }),
              )).type = "RSA"),
              (n.publicKey = e.publicKey),
              n
            );
          }
          return (0, R.Z)(t);
        })(Js),
        Gs = (function (e) {
          (0, te.Z)(t, e);
          var r = (0, ne.Z)(t);
          function t(e) {
            var n;
            return (
              (0, N.Z)(this, t),
              ((n = r.call(
                this,
                (0, Pe.Z)((0, Pe.Z)({}, e), {}, { type: "Ed25519" }),
              )).type = "Ed25519"),
              (n.publicKey = e.multihash.digest),
              n
            );
          }
          return (0, R.Z)(t);
        })(Js),
        Ys = (function (e) {
          (0, te.Z)(t, e);
          var r = (0, ne.Z)(t);
          function t(e) {
            var n;
            return (
              (0, N.Z)(this, t),
              ((n = r.call(
                this,
                (0, Pe.Z)((0, Pe.Z)({}, e), {}, { type: "secp256k1" }),
              )).type = "secp256k1"),
              (n.publicKey = e.multihash.digest),
              n
            );
          }
          return (0, R.Z)(t);
        })(Js);
      function Qs(e, r) {
        var t;
        if (
          ((r = null !== (t = r) && void 0 !== t ? t : Ws),
          "1" === e.charAt(0) || "Q" === e.charAt(0))
        ) {
          var n = Cu(_u.decode("z".concat(e)));
          return e.startsWith("12D")
            ? new Gs({ multihash: n })
            : e.startsWith("16U")
              ? new Ys({ multihash: n })
              : new Ks({ multihash: n });
        }
        return (function (e) {
          try {
            var r = Cu(e);
            if (r.code === Fs.code) {
              if (r.digest.length === Hs) return new Gs({ multihash: r });
              if (r.digest.length === qs) return new Ys({ multihash: r });
            }
            if (r.code === Zs.code) return new Ks({ multihash: r });
          } catch (t) {
            return (function (e) {
              if (
                null == e ||
                null == e.multihash ||
                null == e.version ||
                (1 === e.version && e.code !== Vs)
              )
                throw new Error("Supplied PeerID CID is invalid");
              var r = e.multihash;
              if (r.code === Zs.code) return new Ks({ multihash: e.multihash });
              if (r.code === Fs.code) {
                if (r.digest.length === Hs)
                  return new Gs({ multihash: e.multihash });
                if (r.digest.length === qs)
                  return new Ys({ multihash: e.multihash });
              }
              throw new Error("Supplied PeerID CID is invalid");
            })(Xu.decode(e));
          }
          throw new Error("Supplied PeerID CID is invalid");
        })(Ws.decode(e));
      }
      var Xs = Qa(function (e) {
        function r() {
          return (
            (r = (0, U.Z)(
              (0, j.Z)().mark(function r() {
                var t,
                  n,
                  a = arguments;
                return (0, j.Z)().wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (t = a.length > 0 && void 0 !== a[0] ? a[0] : {}),
                          (r.next = 3),
                          e.post("bitswap/stat", {
                            searchParams: tu(t),
                            signal: t.signal,
                            headers: t.headers,
                          })
                        );
                      case 3:
                        return (
                          (n = r.sent), (r.t0 = $s), (r.next = 7), n.json()
                        );
                      case 7:
                        return (
                          (r.t1 = r.sent), r.abrupt("return", (0, r.t0)(r.t1))
                        );
                      case 9:
                      case "end":
                        return r.stop();
                    }
                }, r);
              }),
            )),
            r.apply(this, arguments)
          );
        }
        return function () {
          return r.apply(this, arguments);
        };
      });
      function $s(e) {
        return {
          provideBufLen: e.ProvideBufLen,
          wantlist: (e.Wantlist || []).map(function (e) {
            return q.CID.parse(e["/"]);
          }),
          peers: (e.Peers || []).map(function (e) {
            return Qs(e);
          }),
          blocksReceived: BigInt(e.BlocksReceived),
          dataReceived: BigInt(e.DataReceived),
          blocksSent: BigInt(e.BlocksSent),
          dataSent: BigInt(e.DataSent),
          dupBlksReceived: BigInt(e.DupBlksReceived),
          dupDataReceived: BigInt(e.DupDataReceived),
        };
      }
      var ei = Qa(function (e) {
        function r() {
          return (
            (r = (0, U.Z)(
              (0, j.Z)().mark(function r(t) {
                var n,
                  a,
                  u = arguments;
                return (0, j.Z)().wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (n = u.length > 1 && void 0 !== u[1] ? u[1] : {}),
                          (r.next = 3),
                          e.post("bitswap/unwant", {
                            signal: n.signal,
                            searchParams: tu(
                              (0, Pe.Z)({ arg: t.toString() }, n),
                            ),
                            headers: n.headers,
                          })
                        );
                      case 3:
                        return (a = r.sent), r.abrupt("return", a.json());
                      case 5:
                      case "end":
                        return r.stop();
                    }
                }, r);
              }),
            )),
            r.apply(this, arguments)
          );
        }
        return function (e) {
          return r.apply(this, arguments);
        };
      });
      var ri = Qa(function (e) {
        function r() {
          return (
            (r = (0, U.Z)(
              (0, j.Z)().mark(function r(t) {
                var n,
                  a,
                  u = arguments;
                return (0, j.Z)().wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (n = u.length > 1 && void 0 !== u[1] ? u[1] : {}),
                          (r.next = 3),
                          e.post("block/get", {
                            signal: n.signal,
                            searchParams: tu(
                              (0, Pe.Z)({ arg: t.toString() }, n),
                            ),
                            headers: n.headers,
                          })
                        );
                      case 3:
                        return (
                          (a = r.sent),
                          (r.t0 = Uint8Array),
                          (r.next = 7),
                          a.arrayBuffer()
                        );
                      case 7:
                        return (
                          (r.t1 = r.sent), r.abrupt("return", new r.t0(r.t1))
                        );
                      case 9:
                      case "end":
                        return r.stop();
                    }
                }, r);
              }),
            )),
            r.apply(this, arguments)
          );
        }
        return function (e) {
          return r.apply(this, arguments);
        };
      });
      function ti(e) {
        var r,
          t,
          n,
          a = 2;
        for (
          "undefined" != typeof Symbol &&
          ((t = Symbol.asyncIterator), (n = Symbol.iterator));
          a--;

        ) {
          if (t && null != (r = e[t])) return r.call(e);
          if (n && null != (r = e[n])) return new ni(r.call(e));
          (t = "@@asyncIterator"), (n = "@@iterator");
        }
        throw new TypeError("Object is not async iterable");
      }
      function ni(e) {
        function r(e) {
          if (Object(e) !== e)
            return Promise.reject(new TypeError(e + " is not an object."));
          var r = e.done;
          return Promise.resolve(e.value).then(function (e) {
            return { value: e, done: r };
          });
        }
        return (
          (ni = function (e) {
            (this.s = e), (this.n = e.next);
          }),
          (ni.prototype = {
            s: null,
            n: null,
            next: function () {
              return r(this.n.apply(this.s, arguments));
            },
            return: function (e) {
              var t = this.s.return;
              return void 0 === t
                ? Promise.resolve({ value: e, done: !0 })
                : r(t.apply(this.s, arguments));
            },
            throw: function (e) {
              var t = this.s.return;
              return void 0 === t
                ? Promise.reject(e)
                : r(t.apply(this.s, arguments));
            },
          }),
          new ni(e)
        );
      }
      var ai = t(78217),
        ui = t(16314),
        si = t(50464);
      function ii(e) {
        return ArrayBuffer.isView(e) || e instanceof ArrayBuffer;
      }
      function oi(e) {
        return (
          e.constructor &&
          ("Blob" === e.constructor.name || "File" === e.constructor.name) &&
          "function" === typeof e.stream
        );
      }
      function ci(e) {
        return "object" === typeof e && (e.path || e.content);
      }
      var fi = function (e) {
        return e && "function" === typeof e.getReader;
      };
      function pi(e) {
        return hi.apply(this, arguments);
      }
      function hi() {
        return (hi = (0, U.Z)(
          (0, j.Z)().mark(function e(r) {
            var t, n, a;
            return (0, j.Z)().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (!ii(r)) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return", new Blob([r]));
                  case 2:
                    if (!("string" === typeof r || r instanceof String)) {
                      e.next = 4;
                      break;
                    }
                    return e.abrupt("return", new Blob([r.toString()]));
                  case 4:
                    if (!oi(r)) {
                      e.next = 6;
                      break;
                    }
                    return e.abrupt("return", r);
                  case 6:
                    if (
                      (fi(r) && (r = ui(r)),
                      !(Symbol.iterator in r) && !(Symbol.asyncIterator in r))
                    ) {
                      e.next = 28;
                      break;
                    }
                    return (t = ai(r)), (e.next = 11), t.peek();
                  case 11:
                    if (((n = e.sent), (a = n.value), !n.done)) {
                      e.next = 16;
                      break;
                    }
                    return e.abrupt("return", li(t));
                  case 16:
                    if ((t.push(a), !Number.isInteger(a))) {
                      e.next = 26;
                      break;
                    }
                    return (
                      (e.t0 = Blob), (e.t1 = Uint8Array), (e.next = 22), si(t)
                    );
                  case 22:
                    return (
                      (e.t2 = e.sent),
                      (e.t3 = e.t1.from.call(e.t1, e.t2)),
                      (e.t4 = [e.t3]),
                      e.abrupt("return", new e.t0(e.t4))
                    );
                  case 26:
                    if (
                      !(ii(a) || "string" === typeof a || a instanceof String)
                    ) {
                      e.next = 28;
                      break;
                    }
                    return e.abrupt("return", li(t));
                  case 28:
                    throw Sr(
                      new Error("Unexpected input: ".concat(r)),
                      "ERR_UNEXPECTED_INPUT",
                    );
                  case 29:
                  case "end":
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      function li(e) {
        return di.apply(this, arguments);
      }
      function di() {
        return (di = (0, U.Z)(
          (0, j.Z)().mark(function e(r) {
            var t, n, a, u, s, i, o;
            return (0, j.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (t = []), (n = !1), (a = !1), (e.prev = 3), (s = ti(r));
                    case 5:
                      return (e.next = 7), s.next();
                    case 7:
                      if (!(n = !(i = e.sent).done)) {
                        e.next = 13;
                        break;
                      }
                      (o = i.value), t.push(o);
                    case 10:
                      (n = !1), (e.next = 5);
                      break;
                    case 13:
                      e.next = 19;
                      break;
                    case 15:
                      (e.prev = 15), (e.t0 = e.catch(3)), (a = !0), (u = e.t0);
                    case 19:
                      if (
                        ((e.prev = 19), (e.prev = 20), !n || null == s.return)
                      ) {
                        e.next = 24;
                        break;
                      }
                      return (e.next = 24), s.return();
                    case 24:
                      if (((e.prev = 24), !a)) {
                        e.next = 27;
                        break;
                      }
                      throw u;
                    case 27:
                      return e.finish(24);
                    case 28:
                      return e.finish(19);
                    case 29:
                      return e.abrupt("return", new Blob(t));
                    case 30:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [
                [3, 15, 19, 29],
                [20, , 24, 28],
              ],
            );
          }),
        )).apply(this, arguments);
      }
      function vi(e, r) {
        (this.v = e), (this.k = r);
      }
      function yi(e) {
        var r, t;
        function n(r, t) {
          try {
            var u = e[r](t),
              s = u.value,
              i = s instanceof vi;
            Promise.resolve(i ? s.v : s).then(
              function (t) {
                if (i) {
                  var o = "return" === r ? "return" : "next";
                  if (!s.k || t.done) return n(o, t);
                  t = e[o](t).value;
                }
                a(u.done ? "return" : "normal", t);
              },
              function (e) {
                n("throw", e);
              },
            );
          } catch (o) {
            a("throw", o);
          }
        }
        function a(e, a) {
          switch (e) {
            case "return":
              r.resolve({ value: a, done: !0 });
              break;
            case "throw":
              r.reject(a);
              break;
            default:
              r.resolve({ value: a, done: !1 });
          }
          (r = r.next) ? n(r.key, r.arg) : (t = null);
        }
        (this._invoke = function (e, a) {
          return new Promise(function (u, s) {
            var i = { key: e, arg: a, resolve: u, reject: s, next: null };
            t ? (t = t.next = i) : ((r = t = i), n(e, a));
          });
        }),
          "function" != typeof e.return && (this.return = void 0);
      }
      function bi(e) {
        return function () {
          return new yi(e.apply(this, arguments));
        };
      }
      function gi(e) {
        return new vi(e, 0);
      }
      function mi(e) {
        var r = {},
          t = !1;
        function n(r, n) {
          return (
            (t = !0),
            (n = new Promise(function (t) {
              t(e[r](n));
            })),
            { done: !1, value: new vi(n, 1) }
          );
        }
        return (
          (r[
            ("undefined" != typeof Symbol && Symbol.iterator) || "@@iterator"
          ] = function () {
            return this;
          }),
          (r.next = function (e) {
            return t ? ((t = !1), e) : n("next", e);
          }),
          "function" == typeof e.throw &&
            (r.throw = function (e) {
              if (t) throw ((t = !1), e);
              return n("throw", e);
            }),
          "function" == typeof e.return &&
            (r.return = function (e) {
              return t ? ((t = !1), e) : n("return", e);
            }),
          r
        );
      }
      (yi.prototype[
        ("function" == typeof Symbol && Symbol.asyncIterator) ||
          "@@asyncIterator"
      ] = function () {
        return this;
      }),
        (yi.prototype.next = function (e) {
          return this._invoke("next", e);
        }),
        (yi.prototype.throw = function (e) {
          return this._invoke("throw", e);
        }),
        (yi.prototype.return = function (e) {
          return this._invoke("return", e);
        });
      var wi = t(27889),
        Di = t(38726);
      function xi() {
        return (
          (xi = bi(
            (0, j.Z)().mark(function e(r, t) {
              var n, a, u;
              return (0, j.Z)().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        !(
                          "string" === typeof r ||
                          r instanceof String ||
                          ii(r) ||
                          oi(r) ||
                          r._readableState
                        )
                      ) {
                        e.next = 2;
                        break;
                      }
                      throw Sr(
                        new Error(
                          "Unexpected input: single item passed - if you are using ipfs.addAll, please use ipfs.add instead",
                        ),
                        "ERR_UNEXPECTED_INPUT",
                      );
                    case 2:
                      if (
                        (fi(r) && (r = ui(r)),
                        !(Symbol.iterator in r) && !(Symbol.asyncIterator in r))
                      ) {
                        e.next = 26;
                        break;
                      }
                      return (n = ai(r)), (e.next = 7), gi(n.peek());
                    case 7:
                      if (((a = e.sent), (u = a.value), !a.done)) {
                        e.next = 13;
                        break;
                      }
                      return e.delegateYield(mi(ti([])), "t0", 12);
                    case 12:
                    case 18:
                    case 22:
                    case 25:
                      return e.abrupt("return");
                    case 13:
                      if ((n.push(u), !Number.isInteger(u))) {
                        e.next = 16;
                        break;
                      }
                      throw Sr(
                        new Error(
                          "Unexpected input: single item passed - if you are using ipfs.addAll, please use ipfs.add instead",
                        ),
                        "ERR_UNEXPECTED_INPUT",
                      );
                    case 16:
                      if (!u._readableState) {
                        e.next = 19;
                        break;
                      }
                      return e.delegateYield(
                        mi(
                          ti(
                            wi(n, function (e) {
                              return ki({ content: e }, t);
                            }),
                          ),
                        ),
                        "t1",
                        18,
                      );
                    case 19:
                      if (!ii(u)) {
                        e.next = 23;
                        break;
                      }
                      return (e.next = 22), ki({ content: n }, t);
                    case 23:
                      if (
                        !(
                          ci(u) ||
                          u[Symbol.iterator] ||
                          u[Symbol.asyncIterator] ||
                          fi(u) ||
                          oi(u)
                        )
                      ) {
                        e.next = 26;
                        break;
                      }
                      return e.delegateYield(
                        mi(
                          ti(
                            wi(n, function (e) {
                              return ki(e, t);
                            }),
                          ),
                        ),
                        "t2",
                        25,
                      );
                    case 26:
                      if (!ci(r)) {
                        e.next = 28;
                        break;
                      }
                      throw Sr(
                        new Error(
                          "Unexpected input: single item passed - if you are using ipfs.addAll, please use ipfs.add instead",
                        ),
                        "ERR_UNEXPECTED_INPUT",
                      );
                    case 28:
                      throw Sr(
                        new Error("Unexpected input: " + typeof r),
                        "ERR_UNEXPECTED_INPUT",
                      );
                    case 29:
                    case "end":
                      return e.stop();
                  }
              }, e);
            }),
          )),
          xi.apply(this, arguments)
        );
      }
      function ki(e, r) {
        return Ei.apply(this, arguments);
      }
      function Ei() {
        return (
          (Ei = (0, U.Z)(
            (0, j.Z)().mark(function e(r, t) {
              var n, a, u, s, i;
              return (0, j.Z)().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((n = r.path),
                        (a = r.mode),
                        (u = r.mtime),
                        (s = r.content),
                        (i = {
                          path: n || "",
                          mode: (0, Di.parseMode)(a),
                          mtime: (0, Di.parseMtime)(u),
                        }),
                        !s)
                      ) {
                        e.next = 8;
                        break;
                      }
                      return (e.next = 5), t(s);
                    case 5:
                      (i.content = e.sent), (e.next = 12);
                      break;
                    case 8:
                      if (n) {
                        e.next = 12;
                        break;
                      }
                      return (e.next = 11), t(r);
                    case 11:
                      i.content = e.sent;
                    case 12:
                      return e.abrupt("return", i);
                    case 13:
                    case "end":
                      return e.stop();
                  }
              }, e);
            }),
          )),
          Ei.apply(this, arguments)
        );
      }
      function Zi(e) {
        return (function (e, r) {
          return xi.apply(this, arguments);
        })(e, pi, !0);
      }
      function Ai(e) {
        if (null != e)
          return "string" === typeof e ? e : e.toString(8).padStart(4, "0");
      }
      function Ci(e, r) {
        return Fi.apply(this, arguments);
      }
      function Fi() {
        return (
          (Fi = (0, U.Z)(
            (0, j.Z)().mark(function e(r, t) {
              var n,
                a,
                u,
                s,
                i,
                o,
                c,
                f,
                p,
                h,
                l,
                d,
                v,
                y,
                b,
                g,
                m,
                w,
                D,
                x,
                k,
                E,
                Z = arguments;
              return (0, j.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (n = Z.length > 2 && void 0 !== Z[2] ? Z[2] : {}),
                          (a = []),
                          (u = new FormData()),
                          (s = 0),
                          (i = 0),
                          (o = !1),
                          (c = !1),
                          (e.prev = 7),
                          (p = ti(Zi(r)));
                      case 9:
                        return (e.next = 11), p.next();
                      case 11:
                        if (!(o = !(h = e.sent).done)) {
                          e.next = 37;
                          break;
                        }
                        if (
                          ((l = h.value),
                          (d = l.content),
                          (v = l.path),
                          (y = l.mode),
                          (b = l.mtime),
                          (g = ""),
                          (m = d ? "file" : "dir"),
                          s > 0 && (g = "-".concat(s)),
                          (w = m + g),
                          (D = []),
                          null !== y &&
                            void 0 !== y &&
                            D.push("mode=".concat(Ai(y))),
                          null != b &&
                            ((x = b.secs),
                            (k = b.nsecs),
                            D.push("mtime=".concat(x)),
                            null != k && D.push("mtime-nsecs=".concat(k))),
                          D.length &&
                            (w = "".concat(w, "?").concat(D.join("&"))),
                          !d)
                        ) {
                          e.next = 28;
                          break;
                        }
                        u.set(w, d, null != v ? encodeURIComponent(v) : void 0),
                          (E = i + d.size),
                          a.push({ name: v, start: i, end: E }),
                          (i = E),
                          (e.next = 33);
                        break;
                      case 28:
                        if (null == v) {
                          e.next = 32;
                          break;
                        }
                        u.set(
                          w,
                          new File([""], encodeURIComponent(v), {
                            type: "application/x-directory",
                          }),
                        ),
                          (e.next = 33);
                        break;
                      case 32:
                        throw new Error("path or content or both must be set");
                      case 33:
                        s++;
                      case 34:
                        (o = !1), (e.next = 9);
                        break;
                      case 37:
                        e.next = 43;
                        break;
                      case 39:
                        (e.prev = 39),
                          (e.t0 = e.catch(7)),
                          (c = !0),
                          (f = e.t0);
                      case 43:
                        if (
                          ((e.prev = 43), (e.prev = 44), !o || null == p.return)
                        ) {
                          e.next = 48;
                          break;
                        }
                        return (e.next = 48), p.return();
                      case 48:
                        if (((e.prev = 48), !c)) {
                          e.next = 51;
                          break;
                        }
                        throw f;
                      case 51:
                        return e.finish(48);
                      case 52:
                        return e.finish(43);
                      case 53:
                        return e.abrupt("return", {
                          total: i,
                          parts: a,
                          headers: n,
                          body: u,
                        });
                      case 54:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [
                  [7, 39, 43, 53],
                  [44, , 48, 52],
                ],
              );
            }),
          )),
          Fi.apply(this, arguments)
        );
      }
      var Bi = t(88460);
      function Pi() {
        for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
          r[t] = arguments[t];
        return (0, Bi.anySignal)(
          (function (e) {
            return e.filter(Boolean);
          })(r),
        );
      }
      var Si = Qa(function (e) {
          function r(e) {
            return t.apply(this, arguments);
          }
          function t() {
            return (
              (t = (0, U.Z)(
                (0, j.Z)().mark(function t(n) {
                  var a,
                    u,
                    s,
                    i,
                    o,
                    c = arguments;
                  return (0, j.Z)().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (a = c.length > 1 && void 0 !== c[1] ? c[1] : {}),
                              (u = new AbortController()),
                              (s = Pi(u.signal, a.signal)),
                              (t.prev = 3),
                              (t.t0 = e),
                              (t.t1 = Pe.Z),
                              (t.t2 = { signal: s, searchParams: tu(a) }),
                              (t.next = 9),
                              Ci([n], u, a.headers)
                            );
                          case 9:
                            return (
                              (t.t3 = t.sent),
                              (t.t4 = (0, t.t1)(t.t2, t.t3)),
                              (t.next = 13),
                              t.t0.post.call(t.t0, "block/put", t.t4)
                            );
                          case 13:
                            return (o = t.sent), (t.next = 16), o.json();
                          case 16:
                            (i = t.sent), (t.next = 28);
                            break;
                          case 19:
                            if (
                              ((t.prev = 19),
                              (t.t5 = t.catch(3)),
                              "dag-pb" !== a.format)
                            ) {
                              t.next = 25;
                              break;
                            }
                            return t.abrupt(
                              "return",
                              r(
                                n,
                                (0, Pe.Z)(
                                  (0, Pe.Z)({}, a),
                                  {},
                                  { format: "protobuf" },
                                ),
                              ),
                            );
                          case 25:
                            if ("dag-cbor" !== a.format) {
                              t.next = 27;
                              break;
                            }
                            return t.abrupt(
                              "return",
                              r(
                                n,
                                (0, Pe.Z)(
                                  (0, Pe.Z)({}, a),
                                  {},
                                  { format: "cbor" },
                                ),
                              ),
                            );
                          case 27:
                            throw t.t5;
                          case 28:
                            return t.abrupt("return", q.CID.parse(i.Key));
                          case 29:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[3, 19]],
                  );
                }),
              )),
              t.apply(this, arguments)
            );
          }
          return r;
        }),
        Ii = Qa(function (e) {
          function r() {
            return (
              (r = bi(function (r) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                return (0, j.Z)().mark(function n() {
                  var a, u, s, i, o, c, f;
                  return (0, j.Z)().wrap(
                    function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              Array.isArray(r) || (r = [r]),
                              (n.next = 3),
                              gi(
                                e.post("block/rm", {
                                  signal: t.signal,
                                  searchParams: tu(
                                    (0, Pe.Z)(
                                      {
                                        arg: r.map(function (e) {
                                          return e.toString();
                                        }),
                                        "stream-channels": !0,
                                      },
                                      t,
                                    ),
                                  ),
                                  headers: t.headers,
                                }),
                              )
                            );
                          case 3:
                            (a = n.sent),
                              (u = !1),
                              (s = !1),
                              (n.prev = 6),
                              (o = ti(a.ndjson()));
                          case 8:
                            return (n.next = 10), gi(o.next());
                          case 10:
                            if (!(u = !(c = n.sent).done)) {
                              n.next = 17;
                              break;
                            }
                            return (f = c.value), (n.next = 14), ji(f);
                          case 14:
                            (u = !1), (n.next = 8);
                            break;
                          case 17:
                            n.next = 23;
                            break;
                          case 19:
                            (n.prev = 19),
                              (n.t0 = n.catch(6)),
                              (s = !0),
                              (i = n.t0);
                          case 23:
                            if (
                              ((n.prev = 23),
                              (n.prev = 24),
                              !u || null == o.return)
                            ) {
                              n.next = 28;
                              break;
                            }
                            return (n.next = 28), gi(o.return());
                          case 28:
                            if (((n.prev = 28), !s)) {
                              n.next = 31;
                              break;
                            }
                            throw i;
                          case 31:
                            return n.finish(28);
                          case 32:
                            return n.finish(23);
                          case 33:
                          case "end":
                            return n.stop();
                        }
                    },
                    n,
                    null,
                    [
                      [6, 19, 23, 33],
                      [24, , 28, 32],
                    ],
                  );
                })();
              })),
              r.apply(this, arguments)
            );
          }
          return function (e) {
            return r.apply(this, arguments);
          };
        });
      function ji(e) {
        var r = { cid: q.CID.parse(e.Hash) };
        return e.Error && (r.error = new Error(e.Error)), r;
      }
      var Ui = Qa(function (e) {
        function r() {
          return (
            (r = (0, U.Z)(
              (0, j.Z)().mark(function r(t) {
                var n,
                  a,
                  u,
                  s = arguments;
                return (0, j.Z)().wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (n = s.length > 1 && void 0 !== s[1] ? s[1] : {}),
                          (r.next = 3),
                          e.post("block/stat", {
                            signal: n.signal,
                            searchParams: tu(
                              (0, Pe.Z)({ arg: t.toString() }, n),
                            ),
                            headers: n.headers,
                          })
                        );
                      case 3:
                        return (a = r.sent), (r.next = 6), a.json();
                      case 6:
                        return (
                          (u = r.sent),
                          r.abrupt("return", {
                            cid: q.CID.parse(u.Key),
                            size: u.Size,
                          })
                        );
                      case 8:
                      case "end":
                        return r.stop();
                    }
                }, r);
              }),
            )),
            r.apply(this, arguments)
          );
        }
        return function (e) {
          return r.apply(this, arguments);
        };
      });
      function Ti(e) {
        return { get: ri(e), put: Si(e), rm: Ii(e), stat: Ui(e) };
      }
      var Ni = Qa(function (e) {
          function r() {
            return (
              (r = (0, U.Z)(
                (0, j.Z)().mark(function r(t) {
                  var n,
                    a,
                    u,
                    s,
                    i = arguments;
                  return (0, j.Z)().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (n = i.length > 1 && void 0 !== i[1] ? i[1] : {}),
                            (r.next = 3),
                            e.post("bootstrap/add", {
                              signal: n.signal,
                              searchParams: tu((0, Pe.Z)({ arg: t }, n)),
                              headers: n.headers,
                            })
                          );
                        case 3:
                          return (a = r.sent), (r.next = 6), a.json();
                        case 6:
                          return (
                            (u = r.sent),
                            (s = u.Peers),
                            r.abrupt("return", {
                              Peers: s.map(function (e) {
                                return new Or(e);
                              }),
                            })
                          );
                        case 9:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )),
              r.apply(this, arguments)
            );
          }
          return function (e) {
            return r.apply(this, arguments);
          };
        }),
        Ri = Qa(function (e) {
          function r() {
            return (
              (r = (0, U.Z)(
                (0, j.Z)().mark(function r() {
                  var t,
                    n,
                    a,
                    u,
                    s = arguments;
                  return (0, j.Z)().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (t = s.length > 0 && void 0 !== s[0] ? s[0] : {}),
                            (r.next = 3),
                            e.post("bootstrap/rm", {
                              signal: t.signal,
                              searchParams: tu(
                                (0, Pe.Z)((0, Pe.Z)({}, t), {}, { all: !0 }),
                              ),
                              headers: t.headers,
                            })
                          );
                        case 3:
                          return (n = r.sent), (r.next = 6), n.json();
                        case 6:
                          return (
                            (a = r.sent),
                            (u = a.Peers),
                            r.abrupt("return", {
                              Peers: u.map(function (e) {
                                return new Or(e);
                              }),
                            })
                          );
                        case 9:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )),
              r.apply(this, arguments)
            );
          }
          return function () {
            return r.apply(this, arguments);
          };
        }),
        Oi = Qa(function (e) {
          function r() {
            return (
              (r = (0, U.Z)(
                (0, j.Z)().mark(function r() {
                  var t,
                    n,
                    a,
                    u,
                    s = arguments;
                  return (0, j.Z)().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (t = s.length > 0 && void 0 !== s[0] ? s[0] : {}),
                            (r.next = 3),
                            e.post("bootstrap/list", {
                              signal: t.signal,
                              searchParams: tu(t),
                              headers: t.headers,
                            })
                          );
                        case 3:
                          return (n = r.sent), (r.next = 6), n.json();
                        case 6:
                          return (
                            (a = r.sent),
                            (u = a.Peers),
                            r.abrupt("return", {
                              Peers: u.map(function (e) {
                                return new Or(e);
                              }),
                            })
                          );
                        case 9:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )),
              r.apply(this, arguments)
            );
          }
          return function () {
            return r.apply(this, arguments);
          };
        }),
        _i = Qa(function (e) {
          function r() {
            return (
              (r = (0, U.Z)(
                (0, j.Z)().mark(function r() {
                  var t,
                    n,
                    a,
                    u,
                    s = arguments;
                  return (0, j.Z)().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (t = s.length > 0 && void 0 !== s[0] ? s[0] : {}),
                            (r.next = 3),
                            e.post("bootstrap/add", {
                              signal: t.signal,
                              searchParams: tu(
                                (0, Pe.Z)(
                                  (0, Pe.Z)({}, t),
                                  {},
                                  { default: !0 },
                                ),
                              ),
                              headers: t.headers,
                            })
                          );
                        case 3:
                          return (n = r.sent), (r.next = 6), n.json();
                        case 6:
                          return (
                            (a = r.sent),
                            (u = a.Peers),
                            r.abrupt("return", {
                              Peers: u.map(function (e) {
                                return new Or(e);
                              }),
                            })
                          );
                        case 9:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )),
              r.apply(this, arguments)
            );
          }
          return function () {
            return r.apply(this, arguments);
          };
        }),
        Mi = Qa(function (e) {
          function r() {
            return (
              (r = (0, U.Z)(
                (0, j.Z)().mark(function r(t) {
                  var n,
                    a,
                    u,
                    s,
                    i = arguments;
                  return (0, j.Z)().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (n = i.length > 1 && void 0 !== i[1] ? i[1] : {}),
                            (r.next = 3),
                            e.post("bootstrap/rm", {
                              signal: n.signal,
                              searchParams: tu((0, Pe.Z)({ arg: t }, n)),
                              headers: n.headers,
                            })
                          );
                        case 3:
                          return (a = r.sent), (r.next = 6), a.json();
                        case 6:
                          return (
                            (u = r.sent),
                            (s = u.Peers),
                            r.abrupt("return", {
                              Peers: s.map(function (e) {
                                return new Or(e);
                              }),
                            })
                          );
                        case 9:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )),
              r.apply(this, arguments)
            );
          }
          return function (e) {
            return r.apply(this, arguments);
          };
        });
      function Li(e) {
        return {
          add: Ni(e),
          clear: Ri(e),
          list: Oi(e),
          reset: _i(e),
          rm: Mi(e),
        };
      }
      var zi = Qa(function (e) {
        function r() {
          return (
            (r = (0, U.Z)(
              (0, j.Z)().mark(function r(t) {
                var n,
                  a,
                  u,
                  s = arguments;
                return (0, j.Z)().wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (n = s.length > 1 && void 0 !== s[1] ? s[1] : {}),
                          (r.next = 3),
                          e.post("config/profile/apply", {
                            signal: n.signal,
                            searchParams: tu((0, Pe.Z)({ arg: t }, n)),
                            headers: n.headers,
                          })
                        );
                      case 3:
                        return (a = r.sent), (r.next = 6), a.json();
                      case 6:
                        return (
                          (u = r.sent),
                          r.abrupt("return", {
                            original: u.OldCfg,
                            updated: u.NewCfg,
                          })
                        );
                      case 8:
                      case "end":
                        return r.stop();
                    }
                }, r);
              }),
            )),
            r.apply(this, arguments)
          );
        }
        return function (e) {
          return r.apply(this, arguments);
        };
      });
      function Wi(e) {
        if (null == e) return e;
        var r = /^[A-Z]+$/;
        return Object.keys(e).reduce(function (t, n) {
          return (
            r.test(n)
              ? (t[n.toLowerCase()] = e[n])
              : r.test(n[0])
                ? (t[n[0].toLowerCase() + n.slice(1)] = e[n])
                : (t[n] = e[n]),
            t
          );
        }, {});
      }
      var Vi = Qa(function (e) {
        function r() {
          return (
            (r = (0, U.Z)(
              (0, j.Z)().mark(function r() {
                var t,
                  n,
                  a,
                  u = arguments;
                return (0, j.Z)().wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (t = u.length > 0 && void 0 !== u[0] ? u[0] : {}),
                          (r.next = 3),
                          e.post("config/profile/list", {
                            signal: t.signal,
                            searchParams: tu(t),
                            headers: t.headers,
                          })
                        );
                      case 3:
                        return (n = r.sent), (r.next = 6), n.json();
                      case 6:
                        return (
                          (a = r.sent),
                          r.abrupt(
                            "return",
                            a.map(function (e) {
                              return Wi(e);
                            }),
                          )
                        );
                      case 8:
                      case "end":
                        return r.stop();
                    }
                }, r);
              }),
            )),
            r.apply(this, arguments)
          );
        }
        return function () {
          return r.apply(this, arguments);
        };
      });
      function Hi(e) {
        return { apply: zi(e), list: Vi(e) };
      }
      var qi = Qa(function (e) {
          var r = (function () {
            var r = (0, U.Z)(
              (0, j.Z)().mark(function r(t) {
                var n,
                  a,
                  u,
                  s = arguments;
                return (0, j.Z)().wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        if (
                          ((n = s.length > 1 && void 0 !== s[1] ? s[1] : {}), t)
                        ) {
                          r.next = 3;
                          break;
                        }
                        throw new Error("key argument is required");
                      case 3:
                        return (
                          (r.next = 5),
                          e.post("config", {
                            signal: n.signal,
                            searchParams: tu((0, Pe.Z)({ arg: t }, n)),
                            headers: n.headers,
                          })
                        );
                      case 5:
                        return (a = r.sent), (r.next = 8), a.json();
                      case 8:
                        return (u = r.sent), r.abrupt("return", u.Value);
                      case 10:
                      case "end":
                        return r.stop();
                    }
                }, r);
              }),
            );
            return function (e) {
              return r.apply(this, arguments);
            };
          })();
          return r;
        }),
        Ji = Qa(function (e) {
          var r = (function () {
            var r = (0, U.Z)(
              (0, j.Z)().mark(function r() {
                var t,
                  n,
                  a,
                  u = arguments;
                return (0, j.Z)().wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (t = u.length > 0 && void 0 !== u[0] ? u[0] : {}),
                          (r.next = 3),
                          e.post("config/show", {
                            signal: t.signal,
                            searchParams: tu((0, Pe.Z)({}, t)),
                            headers: t.headers,
                          })
                        );
                      case 3:
                        return (n = r.sent), (r.next = 6), n.json();
                      case 6:
                        return (a = r.sent), r.abrupt("return", a);
                      case 8:
                      case "end":
                        return r.stop();
                    }
                }, r);
              }),
            );
            return function () {
              return r.apply(this, arguments);
            };
          })();
          return r;
        }),
        Ki = Qa(function (e) {
          var r = (function () {
            var r = (0, U.Z)(
              (0, j.Z)().mark(function r(t) {
                var n,
                  a,
                  u,
                  s,
                  i = arguments;
                return (0, j.Z)().wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (n = i.length > 1 && void 0 !== i[1] ? i[1] : {}),
                          (a = new AbortController()),
                          (u = Pi(a.signal, n.signal)),
                          (r.t0 = e),
                          (r.t1 = Pe.Z),
                          (r.t2 = { signal: u, searchParams: tu(n) }),
                          (r.next = 8),
                          Ci(
                            [(0, fr.fromString)(JSON.stringify(t))],
                            a,
                            n.headers,
                          )
                        );
                      case 8:
                        return (
                          (r.t3 = r.sent),
                          (r.t4 = (0, r.t1)(r.t2, r.t3)),
                          (r.next = 12),
                          r.t0.post.call(r.t0, "config/replace", r.t4)
                        );
                      case 12:
                        return (s = r.sent), (r.next = 15), s.text();
                      case 15:
                      case "end":
                        return r.stop();
                    }
                }, r);
              }),
            );
            return function (e) {
              return r.apply(this, arguments);
            };
          })();
          return r;
        }),
        Gi = Qa(function (e) {
          var r = (function () {
            var r = (0, U.Z)(
              (0, j.Z)().mark(function r(t, n) {
                var a,
                  u,
                  s,
                  i = arguments;
                return (0, j.Z)().wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        if (
                          ((a = i.length > 2 && void 0 !== i[2] ? i[2] : {}),
                          "string" === typeof t)
                        ) {
                          r.next = 3;
                          break;
                        }
                        throw new Error("Invalid key type");
                      case 3:
                        return (
                          (u = (0, Pe.Z)((0, Pe.Z)({}, a), Yi(t, n))),
                          (r.next = 6),
                          e.post("config", {
                            signal: a.signal,
                            searchParams: tu(u),
                            headers: a.headers,
                          })
                        );
                      case 6:
                        return (s = r.sent), (r.next = 9), s.text();
                      case 9:
                      case "end":
                        return r.stop();
                    }
                }, r);
              }),
            );
            return function (e, t) {
              return r.apply(this, arguments);
            };
          })();
          return r;
        }),
        Yi = function (e, r) {
          switch (typeof r) {
            case "boolean":
              return { arg: [e, r.toString()], bool: !0 };
            case "string":
              return { arg: [e, r] };
            default:
              return { arg: [e, JSON.stringify(r)], json: !0 };
          }
        };
      function Qi(e) {
        return {
          getAll: Ji(e),
          get: qi(e),
          set: Gi(e),
          replace: Ki(e),
          profiles: Hi(e),
        };
      }
      var Xi = Qa(function (e) {
        function r() {
          return (
            (r = bi(function (r) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              return (0, j.Z)().mark(function n() {
                var a;
                return (0, j.Z)().wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (n.next = 2),
                          gi(
                            e.post("dag/export", {
                              signal: t.signal,
                              searchParams: tu({ arg: r.toString() }),
                              headers: t.headers,
                            }),
                          )
                        );
                      case 2:
                        return (
                          (a = n.sent),
                          n.delegateYield(mi(ti(a.iterator())), "t0", 4)
                        );
                      case 4:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })();
            })),
            r.apply(this, arguments)
          );
        }
        return function (e) {
          return r.apply(this, arguments);
        };
      });
      function $i(e, r, t, n, a) {
        return eo.apply(this, arguments);
      }
      function eo() {
        return (
          (eo = bi(
            (0, j.Z)().mark(function e(r, t, n, a, u) {
              var s, i, o, c, f, p;
              return (0, j.Z)().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (s = (function () {
                          var e = (0, U.Z)(
                            (0, j.Z)().mark(function e(r) {
                              var t, s;
                              return (0, j.Z)().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (e.next = 2), n.getCodec(r.code);
                                    case 2:
                                      return (
                                        (t = e.sent), (e.next = 5), a(r, u)
                                      );
                                    case 5:
                                      return (
                                        (s = e.sent),
                                        e.abrupt("return", t.decode(s))
                                      );
                                    case 7:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            }),
                          );
                          return function (r) {
                            return e.apply(this, arguments);
                          };
                        })()),
                        (i = t.split("/").filter(Boolean)),
                        (e.next = 4),
                        gi(s(r))
                      );
                    case 4:
                      (o = e.sent), (c = r);
                    case 6:
                      if (!i.length) {
                        e.next = 25;
                        break;
                      }
                      if ((f = i.shift())) {
                        e.next = 10;
                        break;
                      }
                      throw Sr(
                        new Error('Could not resolve path "'.concat(t, '"')),
                        "ERR_INVALID_PATH",
                      );
                    case 10:
                      if (!Object.prototype.hasOwnProperty.call(o, f)) {
                        e.next = 16;
                        break;
                      }
                      return (
                        (o = o[f]),
                        (e.next = 14),
                        { value: o, remainderPath: i.join("/") }
                      );
                    case 14:
                      e.next = 17;
                      break;
                    case 16:
                      throw Sr(
                        new Error(
                          'no link named "'.concat(f, '" under ').concat(c),
                        ),
                        "ERR_NO_LINK",
                      );
                    case 17:
                      if (!(p = q.CID.asCID(o))) {
                        e.next = 23;
                        break;
                      }
                      return (c = p), (e.next = 22), gi(s(o));
                    case 22:
                      o = e.sent;
                    case 23:
                      e.next = 6;
                      break;
                    case 25:
                      return (e.next = 27), { value: o, remainderPath: "" };
                    case 27:
                    case "end":
                      return e.stop();
                  }
              }, e);
            }),
          )),
          eo.apply(this, arguments)
        );
      }
      var ro = t(84744),
        to = t(26723),
        no = function (e, r) {
          var t = Qa(function (r, t) {
            var n = ri(t),
              a = (function () {
                var r = (0, U.Z)(
                  (0, j.Z)().mark(function r(t) {
                    var a,
                      u,
                      s,
                      i,
                      o,
                      c,
                      f = arguments;
                    return (0, j.Z)().wrap(function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            if (
                              !(a = f.length > 1 && void 0 !== f[1] ? f[1] : {})
                                .path
                            ) {
                              r.next = 16;
                              break;
                            }
                            if (!a.localResolve) {
                              r.next = 8;
                              break;
                            }
                            return (r.next = 5), ro($i(t, a.path, e, n, a));
                          case 5:
                            (r.t0 = r.sent), (r.next = 11);
                            break;
                          case 8:
                            return (r.next = 10), to($i(t, a.path, e, n, a));
                          case 10:
                            r.t0 = r.sent;
                          case 11:
                            if (((u = r.t0), (s = u))) {
                              r.next = 15;
                              break;
                            }
                            throw Sr(new Error("Not found"), "ERR_NOT_FOUND");
                          case 15:
                            return r.abrupt("return", s);
                          case 16:
                            return (r.next = 18), e.getCodec(t.code);
                          case 18:
                            return (i = r.sent), (r.next = 21), n(t, a);
                          case 21:
                            return (
                              (o = r.sent),
                              (c = i.decode(o)),
                              r.abrupt("return", {
                                value: c,
                                remainderPath: "",
                              })
                            );
                          case 24:
                          case "end":
                            return r.stop();
                        }
                    }, r);
                  }),
                );
                return function (e) {
                  return r.apply(this, arguments);
                };
              })();
            return a;
          });
          return t(r);
        },
        ao = Qa(function (e) {
          function r() {
            return (
              (r = bi(function (r) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                return (0, j.Z)().mark(function n() {
                  var a, u, s, i, o, c, f, p, h, l, d, v, y, b;
                  return (0, j.Z)().wrap(
                    function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (a = new AbortController()),
                              (u = Pi(a.signal, t.signal)),
                              (n.next = 4),
                              gi(Ci(r, a, t.headers))
                            );
                          case 4:
                            return (
                              (s = n.sent),
                              (i = s.headers),
                              (o = s.body),
                              (n.next = 9),
                              gi(
                                e.post("dag/import", {
                                  signal: u,
                                  headers: i,
                                  body: o,
                                  searchParams: tu({ "pin-roots": t.pinRoots }),
                                }),
                              )
                            );
                          case 9:
                            (c = n.sent),
                              (f = !1),
                              (p = !1),
                              (n.prev = 12),
                              (l = ti(c.ndjson()));
                          case 14:
                            return (n.next = 16), gi(l.next());
                          case 16:
                            if (!(f = !(d = n.sent).done)) {
                              n.next = 25;
                              break;
                            }
                            if (void 0 === (v = d.value.Root)) {
                              n.next = 22;
                              break;
                            }
                            return (
                              (y = v.Cid["/"]),
                              (b = v.PinErrorMsg),
                              (n.next = 22),
                              { root: { cid: q.CID.parse(y), pinErrorMsg: b } }
                            );
                          case 22:
                            (f = !1), (n.next = 14);
                            break;
                          case 25:
                            n.next = 31;
                            break;
                          case 27:
                            (n.prev = 27),
                              (n.t0 = n.catch(12)),
                              (p = !0),
                              (h = n.t0);
                          case 31:
                            if (
                              ((n.prev = 31),
                              (n.prev = 32),
                              !f || null == l.return)
                            ) {
                              n.next = 36;
                              break;
                            }
                            return (n.next = 36), gi(l.return());
                          case 36:
                            if (((n.prev = 36), !p)) {
                              n.next = 39;
                              break;
                            }
                            throw h;
                          case 39:
                            return n.finish(36);
                          case 40:
                            return n.finish(31);
                          case 41:
                          case "end":
                            return n.stop();
                        }
                    },
                    n,
                    null,
                    [
                      [12, 27, 31, 41],
                      [32, , 36, 40],
                    ],
                  );
                })();
              })),
              r.apply(this, arguments)
            );
          }
          return function (e) {
            return r.apply(this, arguments);
          };
        }),
        uo = function (e, r) {
          var t = Qa(function (r) {
            var t = (function () {
              var t = (0, U.Z)(
                (0, j.Z)().mark(function t(n) {
                  var a,
                    u,
                    s,
                    i,
                    o,
                    c,
                    f,
                    p,
                    h = arguments;
                  return (0, j.Z)().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((a = h.length > 1 && void 0 !== h[1] ? h[1] : {}),
                            !(u = (0, Pe.Z)(
                              { storeCodec: "dag-cbor", hashAlg: "sha2-256" },
                              a,
                            )).inputCodec)
                          ) {
                            t.next = 8;
                            break;
                          }
                          if (n instanceof Uint8Array) {
                            t.next = 5;
                            break;
                          }
                          throw new Error(
                            "Can only inputCodec on raw bytes that can be decoded",
                          );
                        case 5:
                          (s = n), (t.next = 13);
                          break;
                        case 8:
                          return (t.next = 10), e.getCodec(u.storeCodec);
                        case 10:
                          (i = t.sent),
                            (s = i.encode(n)),
                            (u.inputCodec = u.storeCodec);
                        case 13:
                          return (
                            (o = new AbortController()),
                            (c = Pi(o.signal, u.signal)),
                            (t.t0 = r),
                            (t.t1 = Pe.Z),
                            (t.t2 = {
                              timeout: u.timeout,
                              signal: c,
                              searchParams: tu(u),
                            }),
                            (t.next = 20),
                            Ci([s], o, u.headers)
                          );
                        case 20:
                          return (
                            (t.t3 = t.sent),
                            (t.t4 = (0, t.t1)(t.t2, t.t3)),
                            (t.next = 24),
                            t.t0.post.call(t.t0, "dag/put", t.t4)
                          );
                        case 24:
                          return (f = t.sent), (t.next = 27), f.json();
                        case 27:
                          return (
                            (p = t.sent),
                            t.abrupt("return", q.CID.parse(p.Cid["/"]))
                          );
                        case 29:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                }),
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })();
            return t;
          });
          return t(r);
        },
        so = Qa(function (e) {
          var r = (function () {
            var r = (0, U.Z)(
              (0, j.Z)().mark(function r(t) {
                var n,
                  a,
                  u,
                  s = arguments;
                return (0, j.Z)().wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (n = s.length > 1 && void 0 !== s[1] ? s[1] : {}),
                          (r.next = 3),
                          e.post("dag/resolve", {
                            signal: n.signal,
                            searchParams: tu(
                              (0, Pe.Z)(
                                {
                                  arg: ""
                                    .concat(t)
                                    .concat(
                                      n.path
                                        ? "/"
                                            .concat(n.path)
                                            .replace(/\/[/]+/g, "/")
                                        : "",
                                    ),
                                },
                                n,
                              ),
                            ),
                            headers: n.headers,
                          })
                        );
                      case 3:
                        return (a = r.sent), (r.next = 6), a.json();
                      case 6:
                        return (
                          (u = r.sent),
                          r.abrupt("return", {
                            cid: q.CID.parse(u.Cid["/"]),
                            remainderPath: u.RemPath,
                          })
                        );
                      case 8:
                      case "end":
                        return r.stop();
                    }
                }, r);
              }),
            );
            return function (e) {
              return r.apply(this, arguments);
            };
          })();
          return r;
        });
      function io(e, r) {
        return {
          export: Xi(r),
          get: no(e, r),
          import: ao(r),
          put: uo(e, r),
          resolve: so(r),
        };
      }
      var oo = function (e) {
          if (0 === e.Type) return { name: "SENDING_QUERY", type: e.Type };
          if (1 === e.Type)
            return {
              from: Qs(e.ID),
              name: "PEER_RESPONSE",
              type: e.Type,
              messageType: 0,
              messageName: "PUT_VALUE",
              closer: (e.Responses || []).map(function (e) {
                var r = e.ID,
                  t = e.Addrs;
                return {
                  id: Qs(r),
                  multiaddrs: t.map(function (e) {
                    return new Or(e);
                  }),
                  protocols: [],
                };
              }),
              providers: (e.Responses || []).map(function (e) {
                var r = e.ID,
                  t = e.Addrs;
                return {
                  id: Qs(r),
                  multiaddrs: t.map(function (e) {
                    return new Or(e);
                  }),
                  protocols: [],
                };
              }),
            };
          if (2 === e.Type) {
            var r,
              t = {
                id: null !== (r = e.ID) && void 0 !== r ? r : Qs(e.ID),
                multiaddrs: [],
                protocols: [],
              };
            return (
              e.Responses &&
                e.Responses.length &&
                (t = {
                  id: Qs(e.Responses[0].ID),
                  multiaddrs: e.Responses[0].Addrs.map(function (e) {
                    return new Or(e);
                  }),
                  protocols: [],
                }),
              { name: "FINAL_PEER", type: e.Type, peer: t }
            );
          }
          if (3 === e.Type)
            return {
              name: "QUERY_ERROR",
              type: e.Type,
              error: new Error(e.Extra),
            };
          if (4 === e.Type)
            return {
              name: "PROVIDER",
              type: e.Type,
              providers: e.Responses.map(function (e) {
                var r = e.ID,
                  t = e.Addrs;
                return {
                  id: Qs(r),
                  multiaddrs: t.map(function (e) {
                    return new Or(e);
                  }),
                  protocols: [],
                };
              }),
            };
          if (5 === e.Type)
            return {
              name: "VALUE",
              type: e.Type,
              value: (0, fr.fromString)(e.Extra, "base64pad"),
            };
          if (6 === e.Type) {
            var n = e.Responses.map(function (e) {
              return Qs(e.ID);
            });
            if (!n.length) throw new Error("No peer found");
            return { name: "ADDING_PEER", type: e.Type, peer: n[0] };
          }
          if (7 === e.Type)
            return { name: "DIALING_PEER", type: e.Type, peer: Qs(e.ID) };
          throw new Error("Unknown DHT event type");
        },
        co = Qa(function (e) {
          function r() {
            return (
              (r = bi(function (r) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                return (0, j.Z)().mark(function n() {
                  var a, u, s, i, o, c, f;
                  return (0, j.Z)().wrap(
                    function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (n.next = 2),
                              gi(
                                e.post("dht/findpeer", {
                                  signal: t.signal,
                                  searchParams: tu((0, Pe.Z)({ arg: r }, t)),
                                  headers: t.headers,
                                }),
                              )
                            );
                          case 2:
                            (a = n.sent),
                              (u = !1),
                              (s = !1),
                              (n.prev = 5),
                              (o = ti(a.ndjson()));
                          case 7:
                            return (n.next = 9), gi(o.next());
                          case 9:
                            if (!(u = !(c = n.sent).done)) {
                              n.next = 16;
                              break;
                            }
                            return (f = c.value), (n.next = 13), oo(f);
                          case 13:
                            (u = !1), (n.next = 7);
                            break;
                          case 16:
                            n.next = 22;
                            break;
                          case 18:
                            (n.prev = 18),
                              (n.t0 = n.catch(5)),
                              (s = !0),
                              (i = n.t0);
                          case 22:
                            if (
                              ((n.prev = 22),
                              (n.prev = 23),
                              !u || null == o.return)
                            ) {
                              n.next = 27;
                              break;
                            }
                            return (n.next = 27), gi(o.return());
                          case 27:
                            if (((n.prev = 27), !s)) {
                              n.next = 30;
                              break;
                            }
                            throw i;
                          case 30:
                            return n.finish(27);
                          case 31:
                            return n.finish(22);
                          case 32:
                          case "end":
                            return n.stop();
                        }
                    },
                    n,
                    null,
                    [
                      [5, 18, 22, 32],
                      [23, , 27, 31],
                    ],
                  );
                })();
              })),
              r.apply(this, arguments)
            );
          }
          return function (e) {
            return r.apply(this, arguments);
          };
        }),
        fo = Qa(function (e) {
          function r() {
            return (
              (r = bi(function (r) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                return (0, j.Z)().mark(function n() {
                  var a, u, s, i, o, c, f;
                  return (0, j.Z)().wrap(
                    function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (n.next = 2),
                              gi(
                                e.post("dht/findprovs", {
                                  signal: t.signal,
                                  searchParams: tu(
                                    (0, Pe.Z)({ arg: r.toString() }, t),
                                  ),
                                  headers: t.headers,
                                }),
                              )
                            );
                          case 2:
                            (a = n.sent),
                              (u = !1),
                              (s = !1),
                              (n.prev = 5),
                              (o = ti(a.ndjson()));
                          case 7:
                            return (n.next = 9), gi(o.next());
                          case 9:
                            if (!(u = !(c = n.sent).done)) {
                              n.next = 16;
                              break;
                            }
                            return (f = c.value), (n.next = 13), oo(f);
                          case 13:
                            (u = !1), (n.next = 7);
                            break;
                          case 16:
                            n.next = 22;
                            break;
                          case 18:
                            (n.prev = 18),
                              (n.t0 = n.catch(5)),
                              (s = !0),
                              (i = n.t0);
                          case 22:
                            if (
                              ((n.prev = 22),
                              (n.prev = 23),
                              !u || null == o.return)
                            ) {
                              n.next = 27;
                              break;
                            }
                            return (n.next = 27), gi(o.return());
                          case 27:
                            if (((n.prev = 27), !s)) {
                              n.next = 30;
                              break;
                            }
                            throw i;
                          case 30:
                            return n.finish(27);
                          case 31:
                            return n.finish(22);
                          case 32:
                          case "end":
                            return n.stop();
                        }
                    },
                    n,
                    null,
                    [
                      [5, 18, 22, 32],
                      [23, , 27, 31],
                    ],
                  );
                })();
              })),
              r.apply(this, arguments)
            );
          }
          return function (e) {
            return r.apply(this, arguments);
          };
        }),
        po = Qa(function (e) {
          function r() {
            return (
              (r = bi(function (r) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                return (0, j.Z)().mark(function n() {
                  var a, u, s, i, o, c, f;
                  return (0, j.Z)().wrap(
                    function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (n.next = 2),
                              gi(
                                e.post("dht/get", {
                                  signal: t.signal,
                                  searchParams: tu(
                                    (0, Pe.Z)(
                                      {
                                        arg:
                                          r instanceof Uint8Array
                                            ? (0, Ye.toString)(r)
                                            : r.toString(),
                                      },
                                      t,
                                    ),
                                  ),
                                  headers: t.headers,
                                }),
                              )
                            );
                          case 2:
                            (a = n.sent),
                              (u = !1),
                              (s = !1),
                              (n.prev = 5),
                              (o = ti(a.ndjson()));
                          case 7:
                            return (n.next = 9), gi(o.next());
                          case 9:
                            if (!(u = !(c = n.sent).done)) {
                              n.next = 16;
                              break;
                            }
                            return (f = c.value), (n.next = 13), oo(f);
                          case 13:
                            (u = !1), (n.next = 7);
                            break;
                          case 16:
                            n.next = 22;
                            break;
                          case 18:
                            (n.prev = 18),
                              (n.t0 = n.catch(5)),
                              (s = !0),
                              (i = n.t0);
                          case 22:
                            if (
                              ((n.prev = 22),
                              (n.prev = 23),
                              !u || null == o.return)
                            ) {
                              n.next = 27;
                              break;
                            }
                            return (n.next = 27), gi(o.return());
                          case 27:
                            if (((n.prev = 27), !s)) {
                              n.next = 30;
                              break;
                            }
                            throw i;
                          case 30:
                            return n.finish(27);
                          case 31:
                            return n.finish(22);
                          case 32:
                          case "end":
                            return n.stop();
                        }
                    },
                    n,
                    null,
                    [
                      [5, 18, 22, 32],
                      [23, , 27, 31],
                    ],
                  );
                })();
              })),
              r.apply(this, arguments)
            );
          }
          return function (e) {
            return r.apply(this, arguments);
          };
        }),
        ho = Qa(function (e) {
          function r() {
            return (
              (r = bi(function (r) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : { recursive: !1 };
                return (0, j.Z)().mark(function n() {
                  var a, u, s, i, o, c, f, p;
                  return (0, j.Z)().wrap(
                    function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (a = Array.isArray(r) ? r : [r]),
                              (n.next = 3),
                              gi(
                                e.post("dht/provide", {
                                  signal: t.signal,
                                  searchParams: tu(
                                    (0, Pe.Z)(
                                      {
                                        arg: a.map(function (e) {
                                          return e.toString();
                                        }),
                                      },
                                      t,
                                    ),
                                  ),
                                  headers: t.headers,
                                }),
                              )
                            );
                          case 3:
                            (u = n.sent),
                              (s = !1),
                              (i = !1),
                              (n.prev = 6),
                              (c = ti(u.ndjson()));
                          case 8:
                            return (n.next = 10), gi(c.next());
                          case 10:
                            if (!(s = !(f = n.sent).done)) {
                              n.next = 17;
                              break;
                            }
                            return (p = f.value), (n.next = 14), oo(p);
                          case 14:
                            (s = !1), (n.next = 8);
                            break;
                          case 17:
                            n.next = 23;
                            break;
                          case 19:
                            (n.prev = 19),
                              (n.t0 = n.catch(6)),
                              (i = !0),
                              (o = n.t0);
                          case 23:
                            if (
                              ((n.prev = 23),
                              (n.prev = 24),
                              !s || null == c.return)
                            ) {
                              n.next = 28;
                              break;
                            }
                            return (n.next = 28), gi(c.return());
                          case 28:
                            if (((n.prev = 28), !i)) {
                              n.next = 31;
                              break;
                            }
                            throw o;
                          case 31:
                            return n.finish(28);
                          case 32:
                            return n.finish(23);
                          case 33:
                          case "end":
                            return n.stop();
                        }
                    },
                    n,
                    null,
                    [
                      [6, 19, 23, 33],
                      [24, , 28, 32],
                    ],
                  );
                })();
              })),
              r.apply(this, arguments)
            );
          }
          return function (e) {
            return r.apply(this, arguments);
          };
        }),
        lo = Qa(function (e) {
          function r() {
            return (
              (r = bi(function (r, t) {
                var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
                return (0, j.Z)().mark(function a() {
                  var u, s, i, o, c, f, p, h, l;
                  return (0, j.Z)().wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (
                              (u = new AbortController()),
                              (s = Pi(u.signal, n.signal)),
                              (a.t0 = gi),
                              (a.t1 = e),
                              (a.t2 = Pe.Z),
                              (a.t3 = {
                                signal: s,
                                searchParams: tu(
                                  (0, Pe.Z)(
                                    {
                                      arg:
                                        r instanceof Uint8Array
                                          ? (0, Ye.toString)(r)
                                          : r.toString(),
                                    },
                                    n,
                                  ),
                                ),
                              }),
                              (a.next = 8),
                              gi(Ci([t], u, n.headers))
                            );
                          case 8:
                            return (
                              (a.t4 = a.sent),
                              (a.t5 = (0, a.t2)(a.t3, a.t4)),
                              (a.t6 = a.t1.post.call(a.t1, "dht/put", a.t5)),
                              (a.next = 13),
                              (0, a.t0)(a.t6)
                            );
                          case 13:
                            (i = a.sent),
                              (o = !1),
                              (c = !1),
                              (a.prev = 16),
                              (p = ti(i.ndjson()));
                          case 18:
                            return (a.next = 20), gi(p.next());
                          case 20:
                            if (!(o = !(h = a.sent).done)) {
                              a.next = 27;
                              break;
                            }
                            return (l = h.value), (a.next = 24), oo(l);
                          case 24:
                            (o = !1), (a.next = 18);
                            break;
                          case 27:
                            a.next = 33;
                            break;
                          case 29:
                            (a.prev = 29),
                              (a.t7 = a.catch(16)),
                              (c = !0),
                              (f = a.t7);
                          case 33:
                            if (
                              ((a.prev = 33),
                              (a.prev = 34),
                              !o || null == p.return)
                            ) {
                              a.next = 38;
                              break;
                            }
                            return (a.next = 38), gi(p.return());
                          case 38:
                            if (((a.prev = 38), !c)) {
                              a.next = 41;
                              break;
                            }
                            throw f;
                          case 41:
                            return a.finish(38);
                          case 42:
                            return a.finish(33);
                          case 43:
                          case "end":
                            return a.stop();
                        }
                    },
                    a,
                    null,
                    [
                      [16, 29, 33, 43],
                      [34, , 38, 42],
                    ],
                  );
                })();
              })),
              r.apply(this, arguments)
            );
          }
          return function (e, t) {
            return r.apply(this, arguments);
          };
        }),
        vo = Qa(function (e) {
          function r() {
            return (
              (r = bi(function (r) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                return (0, j.Z)().mark(function n() {
                  var a, u, s, i, o, c, f;
                  return (0, j.Z)().wrap(
                    function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (n.next = 2),
                              gi(
                                e.post("dht/query", {
                                  signal: t.signal,
                                  searchParams: tu(
                                    (0, Pe.Z)({ arg: r.toString() }, t),
                                  ),
                                  headers: t.headers,
                                }),
                              )
                            );
                          case 2:
                            (a = n.sent),
                              (u = !1),
                              (s = !1),
                              (n.prev = 5),
                              (o = ti(a.ndjson()));
                          case 7:
                            return (n.next = 9), gi(o.next());
                          case 9:
                            if (!(u = !(c = n.sent).done)) {
                              n.next = 16;
                              break;
                            }
                            return (f = c.value), (n.next = 13), oo(f);
                          case 13:
                            (u = !1), (n.next = 7);
                            break;
                          case 16:
                            n.next = 22;
                            break;
                          case 18:
                            (n.prev = 18),
                              (n.t0 = n.catch(5)),
                              (s = !0),
                              (i = n.t0);
                          case 22:
                            if (
                              ((n.prev = 22),
                              (n.prev = 23),
                              !u || null == o.return)
                            ) {
                              n.next = 27;
                              break;
                            }
                            return (n.next = 27), gi(o.return());
                          case 27:
                            if (((n.prev = 27), !s)) {
                              n.next = 30;
                              break;
                            }
                            throw i;
                          case 30:
                            return n.finish(27);
                          case 31:
                            return n.finish(22);
                          case 32:
                          case "end":
                            return n.stop();
                        }
                    },
                    n,
                    null,
                    [
                      [5, 18, 22, 32],
                      [23, , 27, 31],
                    ],
                  );
                })();
              })),
              r.apply(this, arguments)
            );
          }
          return function (e) {
            return r.apply(this, arguments);
          };
        });
      function yo(e) {
        return {
          findPeer: co(e),
          findProvs: fo(e),
          get: po(e),
          provide: ho(e),
          put: lo(e),
          query: vo(e),
        };
      }
      var bo = Qa(function (e) {
          function r() {
            return (
              (r = (0, U.Z)(
                (0, j.Z)().mark(function r() {
                  var t,
                    n,
                    a = arguments;
                  return (0, j.Z)().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (t = a.length > 0 && void 0 !== a[0] ? a[0] : {}),
                            (r.next = 3),
                            e.post("diag/cmds", {
                              signal: t.signal,
                              searchParams: tu(t),
                              headers: t.headers,
                            })
                          );
                        case 3:
                          return (n = r.sent), r.abrupt("return", n.json());
                        case 5:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )),
              r.apply(this, arguments)
            );
          }
          return function () {
            return r.apply(this, arguments);
          };
        }),
        go = Qa(function (e) {
          function r() {
            return (
              (r = (0, U.Z)(
                (0, j.Z)().mark(function r() {
                  var t,
                    n,
                    a = arguments;
                  return (0, j.Z)().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (t = a.length > 0 && void 0 !== a[0] ? a[0] : {}),
                            (r.next = 3),
                            e.post("diag/net", {
                              signal: t.signal,
                              searchParams: tu(t),
                              headers: t.headers,
                            })
                          );
                        case 3:
                          return (n = r.sent), r.abrupt("return", n.json());
                        case 5:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )),
              r.apply(this, arguments)
            );
          }
          return function () {
            return r.apply(this, arguments);
          };
        }),
        mo = Qa(function (e) {
          function r() {
            return (
              (r = (0, U.Z)(
                (0, j.Z)().mark(function r() {
                  var t,
                    n,
                    a = arguments;
                  return (0, j.Z)().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (t = a.length > 0 && void 0 !== a[0] ? a[0] : {}),
                            (r.next = 3),
                            e.post("diag/sys", {
                              signal: t.signal,
                              searchParams: tu(t),
                              headers: t.headers,
                            })
                          );
                        case 3:
                          return (n = r.sent), r.abrupt("return", n.json());
                        case 5:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )),
              r.apply(this, arguments)
            );
          }
          return function () {
            return r.apply(this, arguments);
          };
        });
      function wo(e) {
        return { cmds: bo(e), net: go(e), sys: mo(e) };
      }
      var Do = Qa(function (e) {
          function r() {
            return (
              (r = (0, U.Z)(
                (0, j.Z)().mark(function r(t, n) {
                  var a,
                    u,
                    s = arguments;
                  return (0, j.Z)().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (a = s.length > 2 && void 0 !== s[2] ? s[2] : {}),
                            (r.next = 3),
                            e.post("files/chmod", {
                              signal: a.signal,
                              searchParams: tu(
                                (0, Pe.Z)({ arg: t, mode: n }, a),
                              ),
                              headers: a.headers,
                            })
                          );
                        case 3:
                          return (u = r.sent), (r.next = 6), u.text();
                        case 6:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )),
              r.apply(this, arguments)
            );
          }
          return function (e, t) {
            return r.apply(this, arguments);
          };
        }),
        xo = Qa(function (e) {
          function r() {
            return (
              (r = (0, U.Z)(
                (0, j.Z)().mark(function r(t, n) {
                  var a,
                    u,
                    s,
                    i = arguments;
                  return (0, j.Z)().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (a = i.length > 2 && void 0 !== i[2] ? i[2] : {}),
                            (u = Array.isArray(t) ? t : [t]),
                            (r.next = 4),
                            e.post("files/cp", {
                              signal: a.signal,
                              searchParams: tu(
                                (0, Pe.Z)(
                                  {
                                    arg: u.concat(n).map(function (e) {
                                      return q.CID.asCID(e)
                                        ? "/ipfs/".concat(e)
                                        : e;
                                    }),
                                  },
                                  a,
                                ),
                              ),
                              headers: a.headers,
                            })
                          );
                        case 4:
                          return (s = r.sent), (r.next = 7), s.text();
                        case 7:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )),
              r.apply(this, arguments)
            );
          }
          return function (e, t) {
            return r.apply(this, arguments);
          };
        }),
        ko = Qa(function (e) {
          function r() {
            return (
              (r = (0, U.Z)(
                (0, j.Z)().mark(function r(t) {
                  var n,
                    a,
                    u,
                    s = arguments;
                  return (0, j.Z)().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          if (
                            ((n = s.length > 1 && void 0 !== s[1] ? s[1] : {}),
                            t && "string" === typeof t)
                          ) {
                            r.next = 3;
                            break;
                          }
                          throw new Error("ipfs.files.flush requires a path");
                        case 3:
                          return (
                            (r.next = 5),
                            e.post("files/flush", {
                              signal: n.signal,
                              searchParams: tu((0, Pe.Z)({ arg: t }, n)),
                              headers: n.headers,
                            })
                          );
                        case 5:
                          return (a = r.sent), (r.next = 8), a.json();
                        case 8:
                          return (
                            (u = r.sent), r.abrupt("return", q.CID.parse(u.Cid))
                          );
                        case 10:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )),
              r.apply(this, arguments)
            );
          }
          return function (e) {
            return r.apply(this, arguments);
          };
        });
      function Eo(e) {
        var r = Wi(e);
        return (
          Object.prototype.hasOwnProperty.call(r, "mode") &&
            (r.mode = parseInt(r.mode, 8)),
          Object.prototype.hasOwnProperty.call(r, "mtime") &&
            ((r.mtime = { secs: r.mtime, nsecs: r.mtimeNsecs || 0 }),
            delete r.mtimeNsecs),
          r
        );
      }
      var Zo = Qa(function (e) {
        function r() {
          return (
            (r = bi(function (r) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              return (0, j.Z)().mark(function n() {
                var a, u, s, i, o, c, f, p, h, l;
                return (0, j.Z)().wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          if (r) {
                            n.next = 2;
                            break;
                          }
                          throw new Error("ipfs.files.ls requires a path");
                        case 2:
                          return (
                            (n.next = 4),
                            gi(
                              e.post("files/ls", {
                                signal: t.signal,
                                searchParams: tu(
                                  (0, Pe.Z)(
                                    (0, Pe.Z)(
                                      {
                                        arg: q.CID.asCID(r)
                                          ? "/ipfs/".concat(r)
                                          : r,
                                        long: !0,
                                      },
                                      t,
                                    ),
                                    {},
                                    { stream: !0 },
                                  ),
                                ),
                                headers: t.headers,
                              }),
                            )
                          );
                        case 4:
                          (a = n.sent),
                            (u = !1),
                            (s = !1),
                            (n.prev = 7),
                            (o = ti(a.ndjson()));
                        case 9:
                          return (n.next = 11), gi(o.next());
                        case 11:
                          if (!(u = !(c = n.sent).done)) {
                            n.next = 38;
                            break;
                          }
                          if (!("Entries" in (f = c.value))) {
                            n.next = 33;
                            break;
                          }
                          (p = (0, T.Z)(f.Entries || [])), (n.prev = 15), p.s();
                        case 17:
                          if ((h = p.n()).done) {
                            n.next = 23;
                            break;
                          }
                          return (l = h.value), (n.next = 21), Ao(Eo(l));
                        case 21:
                          n.next = 17;
                          break;
                        case 23:
                          n.next = 28;
                          break;
                        case 25:
                          (n.prev = 25), (n.t0 = n.catch(15)), p.e(n.t0);
                        case 28:
                          return (n.prev = 28), p.f(), n.finish(28);
                        case 31:
                          n.next = 35;
                          break;
                        case 33:
                          return (n.next = 35), Ao(Eo(f));
                        case 35:
                          (u = !1), (n.next = 9);
                          break;
                        case 38:
                          n.next = 44;
                          break;
                        case 40:
                          (n.prev = 40),
                            (n.t1 = n.catch(7)),
                            (s = !0),
                            (i = n.t1);
                        case 44:
                          if (
                            ((n.prev = 44),
                            (n.prev = 45),
                            !u || null == o.return)
                          ) {
                            n.next = 49;
                            break;
                          }
                          return (n.next = 49), gi(o.return());
                        case 49:
                          if (((n.prev = 49), !s)) {
                            n.next = 52;
                            break;
                          }
                          throw i;
                        case 52:
                          return n.finish(49);
                        case 53:
                          return n.finish(44);
                        case 54:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [
                    [7, 40, 44, 54],
                    [15, 25, 28, 31],
                    [45, , 49, 53],
                  ],
                );
              })();
            })),
            r.apply(this, arguments)
          );
        }
        return function (e) {
          return r.apply(this, arguments);
        };
      });
      function Ao(e) {
        return (
          e.hash && (e.cid = q.CID.parse(e.hash)),
          delete e.hash,
          (e.type = 1 === e.type ? "directory" : "file"),
          e
        );
      }
      var Co = Qa(function (e) {
          function r() {
            return (
              (r = (0, U.Z)(
                (0, j.Z)().mark(function r(t) {
                  var n,
                    a,
                    u = arguments;
                  return (0, j.Z)().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (n = u.length > 1 && void 0 !== u[1] ? u[1] : {}),
                            (r.next = 3),
                            e.post("files/mkdir", {
                              signal: n.signal,
                              searchParams: tu((0, Pe.Z)({ arg: t }, n)),
                              headers: n.headers,
                            })
                          );
                        case 3:
                          return (a = r.sent), (r.next = 6), a.text();
                        case 6:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )),
              r.apply(this, arguments)
            );
          }
          return function (e) {
            return r.apply(this, arguments);
          };
        }),
        Fo = Qa(function (e) {
          function r() {
            return (
              (r = (0, U.Z)(
                (0, j.Z)().mark(function r(t, n) {
                  var a,
                    u,
                    s = arguments;
                  return (0, j.Z)().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (a = s.length > 2 && void 0 !== s[2] ? s[2] : {}),
                            Array.isArray(t) || (t = [t]),
                            (r.next = 4),
                            e.post("files/mv", {
                              signal: a.signal,
                              searchParams: tu(
                                (0, Pe.Z)({ arg: t.concat(n) }, a),
                              ),
                              headers: a.headers,
                            })
                          );
                        case 4:
                          return (u = r.sent), (r.next = 7), u.text();
                        case 7:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )),
              r.apply(this, arguments)
            );
          }
          return function (e, t) {
            return r.apply(this, arguments);
          };
        }),
        Bo = t(66662),
        Po = Qa(function (e) {
          function r() {
            return (
              (r = bi(function (r) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                return (0, j.Z)().mark(function n() {
                  var a;
                  return (0, j.Z)().wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.next = 2),
                            gi(
                              e.post("files/read", {
                                signal: t.signal,
                                searchParams: tu(
                                  (0, Pe.Z)({ arg: r, count: t.length }, t),
                                ),
                                headers: t.headers,
                              }),
                            )
                          );
                        case 2:
                          return (
                            (a = n.sent),
                            n.delegateYield(mi(ti(Bo(a.body))), "t0", 4)
                          );
                        case 4:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })();
              })),
              r.apply(this, arguments)
            );
          }
          return function (e) {
            return r.apply(this, arguments);
          };
        }),
        So = Qa(function (e) {
          function r() {
            return (
              (r = (0, U.Z)(
                (0, j.Z)().mark(function r(t) {
                  var n,
                    a,
                    u,
                    s,
                    i = arguments;
                  return (0, j.Z)().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (n = i.length > 1 && void 0 !== i[1] ? i[1] : {}),
                            (r.next = 3),
                            e.post("files/rm", {
                              signal: n.signal,
                              searchParams: tu((0, Pe.Z)({ arg: t }, n)),
                              headers: n.headers,
                            })
                          );
                        case 3:
                          return (a = r.sent), (r.next = 6), a.text();
                        case 6:
                          if ("" === (u = r.sent)) {
                            r.next = 11;
                            break;
                          }
                          throw (((s = new qr.HTTPError(a)).message = u), s);
                        case 11:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )),
              r.apply(this, arguments)
            );
          }
          return function (e) {
            return r.apply(this, arguments);
          };
        }),
        Io = Qa(function (e) {
          function r() {
            return (
              (r = (0, U.Z)(
                (0, j.Z)().mark(function r(t) {
                  var n,
                    a,
                    u,
                    s = arguments;
                  return (0, j.Z)().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (n = s.length > 1 && void 0 !== s[1] ? s[1] : {}),
                            (r.next = 3),
                            e.post("files/stat", {
                              signal: n.signal,
                              searchParams: tu((0, Pe.Z)({ arg: t }, n)),
                              headers: n.headers,
                            })
                          );
                        case 3:
                          return (a = r.sent), (r.next = 6), a.json();
                        case 6:
                          return (
                            ((u = r.sent).WithLocality = u.WithLocality || !1),
                            r.abrupt("return", jo(Eo(u)))
                          );
                        case 9:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )),
              r.apply(this, arguments)
            );
          }
          return function (e) {
            return r.apply(this, arguments);
          };
        });
      function jo(e) {
        return (e.cid = q.CID.parse(e.hash)), delete e.hash, e;
      }
      var Uo = Qa(function (e) {
          function r() {
            return (
              (r = (0, U.Z)(
                (0, j.Z)().mark(function r(t) {
                  var n,
                    a,
                    u = arguments;
                  return (0, j.Z)().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (n = u.length > 1 && void 0 !== u[1] ? u[1] : {}),
                            (r.next = 3),
                            e.post("files/touch", {
                              signal: n.signal,
                              searchParams: tu((0, Pe.Z)({ arg: t }, n)),
                              headers: n.headers,
                            })
                          );
                        case 3:
                          return (a = r.sent), (r.next = 6), a.text();
                        case 6:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )),
              r.apply(this, arguments)
            );
          }
          return function (e) {
            return r.apply(this, arguments);
          };
        }),
        To = Qa(function (e) {
          function r() {
            return (
              (r = (0, U.Z)(
                (0, j.Z)().mark(function r(t, n) {
                  var a,
                    u,
                    s,
                    i,
                    o = arguments;
                  return (0, j.Z)().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (a = o.length > 2 && void 0 !== o[2] ? o[2] : {}),
                            (u = new AbortController()),
                            (s = Pi(u.signal, a.signal)),
                            (r.t0 = e),
                            (r.t1 = Pe.Z),
                            (r.t2 = {
                              signal: s,
                              searchParams: tu(
                                (0, Pe.Z)(
                                  {
                                    arg: t,
                                    streamChannels: !0,
                                    count: a.length,
                                  },
                                  a,
                                ),
                              ),
                            }),
                            (r.next = 8),
                            Ci(
                              [
                                {
                                  content: n,
                                  path: "arg",
                                  mode: $a(a.mode),
                                  mtime: eu(a.mtime),
                                },
                              ],
                              u,
                              a.headers,
                            )
                          );
                        case 8:
                          return (
                            (r.t3 = r.sent),
                            (r.t4 = (0, r.t1)(r.t2, r.t3)),
                            (r.next = 12),
                            r.t0.post.call(r.t0, "files/write", r.t4)
                          );
                        case 12:
                          return (i = r.sent), (r.next = 15), i.text();
                        case 15:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )),
              r.apply(this, arguments)
            );
          }
          return function (e, t) {
            return r.apply(this, arguments);
          };
        });
      function No(e) {
        return {
          chmod: Do(e),
          cp: xo(e),
          flush: ko(e),
          ls: Zo(e),
          mkdir: Co(e),
          mv: Fo(e),
          read: Po(e),
          rm: So(e),
          stat: Io(e),
          touch: Uo(e),
          write: To(e),
        };
      }
      var Ro = Qa(function (e) {
          var r = (function () {
            var e = (0, U.Z)(
              (0, j.Z)().mark(function e(r, t) {
                var n = arguments;
                return (0, j.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        throw (
                          (n.length > 2 && void 0 !== n[2] ? n[2] : {},
                          Sr(
                            new Error("Not implemented"),
                            "ERR_NOT_IMPLEMENTED",
                          ))
                        );
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              }),
            );
            return function (r, t) {
              return e.apply(this, arguments);
            };
          })();
          return r;
        }),
        Oo = Qa(function (e) {
          function r() {
            return (
              (r = (0, U.Z)(
                (0, j.Z)().mark(function r(t) {
                  var n,
                    a,
                    u,
                    s = arguments;
                  return (0, j.Z)().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (n =
                              s.length > 1 && void 0 !== s[1]
                                ? s[1]
                                : { type: "Ed25519" }),
                            (r.next = 3),
                            e.post("key/gen", {
                              signal: n.signal,
                              searchParams: tu((0, Pe.Z)({ arg: t }, n)),
                              headers: n.headers,
                            })
                          );
                        case 3:
                          return (a = r.sent), (r.next = 6), a.json();
                        case 6:
                          return (u = r.sent), r.abrupt("return", Wi(u));
                        case 8:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )),
              r.apply(this, arguments)
            );
          }
          return function (e) {
            return r.apply(this, arguments);
          };
        }),
        _o = Qa(function (e) {
          function r() {
            return (
              (r = (0, U.Z)(
                (0, j.Z)().mark(function r(t, n, a) {
                  var u,
                    s,
                    i,
                    o = arguments;
                  return (0, j.Z)().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (u = o.length > 3 && void 0 !== o[3] ? o[3] : {}),
                            (r.next = 3),
                            e.post("key/import", {
                              signal: u.signal,
                              searchParams: tu(
                                (0, Pe.Z)({ arg: t, pem: n, password: a }, u),
                              ),
                              headers: u.headers,
                            })
                          );
                        case 3:
                          return (s = r.sent), (r.next = 6), s.json();
                        case 6:
                          return (i = r.sent), r.abrupt("return", Wi(i));
                        case 8:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )),
              r.apply(this, arguments)
            );
          }
          return function (e, t, n) {
            return r.apply(this, arguments);
          };
        }),
        Mo = Qa(function (e) {
          var r = (function () {
            var e = (0, U.Z)(
              (0, j.Z)().mark(function e(r) {
                var t = arguments;
                return (0, j.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        throw (
                          (t.length > 1 && void 0 !== t[1] ? t[1] : {},
                          Sr(
                            new Error("Not implemented"),
                            "ERR_NOT_IMPLEMENTED",
                          ))
                        );
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              }),
            );
            return function (r) {
              return e.apply(this, arguments);
            };
          })();
          return r;
        }),
        Lo = Qa(function (e) {
          function r() {
            return (
              (r = (0, U.Z)(
                (0, j.Z)().mark(function r() {
                  var t,
                    n,
                    a,
                    u = arguments;
                  return (0, j.Z)().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (t = u.length > 0 && void 0 !== u[0] ? u[0] : {}),
                            (r.next = 3),
                            e.post("key/list", {
                              signal: t.signal,
                              searchParams: tu(t),
                              headers: t.headers,
                            })
                          );
                        case 3:
                          return (n = r.sent), (r.next = 6), n.json();
                        case 6:
                          return (
                            (a = r.sent),
                            r.abrupt(
                              "return",
                              (a.Keys || []).map(function (e) {
                                return Wi(e);
                              }),
                            )
                          );
                        case 8:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )),
              r.apply(this, arguments)
            );
          }
          return function () {
            return r.apply(this, arguments);
          };
        }),
        zo = Qa(function (e) {
          function r() {
            return (
              (r = (0, U.Z)(
                (0, j.Z)().mark(function r(t, n) {
                  var a,
                    u,
                    s = arguments;
                  return (0, j.Z)().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (a = s.length > 2 && void 0 !== s[2] ? s[2] : {}),
                            (r.next = 3),
                            e.post("key/rename", {
                              signal: a.signal,
                              searchParams: tu((0, Pe.Z)({ arg: [t, n] }, a)),
                              headers: a.headers,
                            })
                          );
                        case 3:
                          return (
                            (u = r.sent), (r.t0 = Wi), (r.next = 7), u.json()
                          );
                        case 7:
                          return (
                            (r.t1 = r.sent), r.abrupt("return", (0, r.t0)(r.t1))
                          );
                        case 9:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )),
              r.apply(this, arguments)
            );
          }
          return function (e, t) {
            return r.apply(this, arguments);
          };
        }),
        Wo = Qa(function (e) {
          function r() {
            return (
              (r = (0, U.Z)(
                (0, j.Z)().mark(function r(t) {
                  var n,
                    a,
                    u,
                    s = arguments;
                  return (0, j.Z)().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (n = s.length > 1 && void 0 !== s[1] ? s[1] : {}),
                            (r.next = 3),
                            e.post("key/rm", {
                              signal: n.signal,
                              searchParams: tu((0, Pe.Z)({ arg: t }, n)),
                              headers: n.headers,
                            })
                          );
                        case 3:
                          return (a = r.sent), (r.next = 6), a.json();
                        case 6:
                          return (
                            (u = r.sent), r.abrupt("return", Wi(u.Keys[0]))
                          );
                        case 8:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )),
              r.apply(this, arguments)
            );
          }
          return function (e) {
            return r.apply(this, arguments);
          };
        });
      function Vo(e) {
        return {
          export: Ro(e),
          gen: Oo(e),
          import: _o(e),
          info: Mo(e),
          list: Lo(e),
          rename: zo(e),
          rm: Wo(e),
        };
      }
      var Ho = Qa(function (e) {
          function r() {
            return (
              (r = (0, U.Z)(
                (0, j.Z)().mark(function r(t, n) {
                  var a,
                    u,
                    s = arguments;
                  return (0, j.Z)().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (a = s.length > 2 && void 0 !== s[2] ? s[2] : {}),
                            (r.next = 3),
                            e.post("log/level", {
                              signal: a.signal,
                              searchParams: tu((0, Pe.Z)({ arg: [t, n] }, a)),
                              headers: a.headers,
                            })
                          );
                        case 3:
                          return (
                            (u = r.sent), (r.t0 = Wi), (r.next = 7), u.json()
                          );
                        case 7:
                          return (
                            (r.t1 = r.sent), r.abrupt("return", (0, r.t0)(r.t1))
                          );
                        case 9:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )),
              r.apply(this, arguments)
            );
          }
          return function (e, t) {
            return r.apply(this, arguments);
          };
        }),
        qo = Qa(function (e) {
          function r() {
            return (
              (r = (0, U.Z)(
                (0, j.Z)().mark(function r() {
                  var t,
                    n,
                    a,
                    u = arguments;
                  return (0, j.Z)().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (t = u.length > 0 && void 0 !== u[0] ? u[0] : {}),
                            (r.next = 3),
                            e.post("log/ls", {
                              signal: t.signal,
                              searchParams: tu(t),
                              headers: t.headers,
                            })
                          );
                        case 3:
                          return (n = r.sent), (r.next = 6), n.json();
                        case 6:
                          return (a = r.sent), r.abrupt("return", a.Strings);
                        case 8:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )),
              r.apply(this, arguments)
            );
          }
          return function () {
            return r.apply(this, arguments);
          };
        }),
        Jo = Qa(function (e) {
          function r() {
            return (
              (r = bi(function () {
                var r =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return (0, j.Z)().mark(function t() {
                  var n;
                  return (0, j.Z)().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.next = 2),
                            gi(
                              e.post("log/tail", {
                                signal: r.signal,
                                searchParams: tu(r),
                                headers: r.headers,
                              }),
                            )
                          );
                        case 2:
                          return (
                            (n = t.sent),
                            t.delegateYield(mi(ti(n.ndjson())), "t0", 4)
                          );
                        case 4:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })();
              })),
              r.apply(this, arguments)
            );
          }
          return function () {
            return r.apply(this, arguments);
          };
        });
      function Ko(e) {
        return { level: Ho(e), ls: qo(e), tail: Jo(e) };
      }
      var Go = Qa(function (e) {
          function r() {
            return (
              (r = (0, U.Z)(
                (0, j.Z)().mark(function r(t) {
                  var n,
                    a,
                    u = arguments;
                  return (0, j.Z)().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (n = u.length > 1 && void 0 !== u[1] ? u[1] : {}),
                            (r.next = 3),
                            e.post("name/publish", {
                              signal: n.signal,
                              searchParams: tu(
                                (0, Pe.Z)({ arg: "".concat(t) }, n),
                              ),
                              headers: n.headers,
                            })
                          );
                        case 3:
                          return (
                            (a = r.sent), (r.t0 = Wi), (r.next = 7), a.json()
                          );
                        case 7:
                          return (
                            (r.t1 = r.sent), r.abrupt("return", (0, r.t0)(r.t1))
                          );
                        case 9:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )),
              r.apply(this, arguments)
            );
          }
          return function (e) {
            return r.apply(this, arguments);
          };
        }),
        Yo = Qa(function (e) {
          function r() {
            return (
              (r = bi(function (r) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                return (0, j.Z)().mark(function n() {
                  var a, u, s, i, o, c, f;
                  return (0, j.Z)().wrap(
                    function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (n.next = 2),
                              gi(
                                e.post("name/resolve", {
                                  signal: t.signal,
                                  searchParams: tu(
                                    (0, Pe.Z)({ arg: r, stream: !0 }, t),
                                  ),
                                  headers: t.headers,
                                }),
                              )
                            );
                          case 2:
                            (a = n.sent),
                              (u = !1),
                              (s = !1),
                              (n.prev = 5),
                              (o = ti(a.ndjson()));
                          case 7:
                            return (n.next = 9), gi(o.next());
                          case 9:
                            if (!(u = !(c = n.sent).done)) {
                              n.next = 16;
                              break;
                            }
                            return (f = c.value), (n.next = 13), f.Path;
                          case 13:
                            (u = !1), (n.next = 7);
                            break;
                          case 16:
                            n.next = 22;
                            break;
                          case 18:
                            (n.prev = 18),
                              (n.t0 = n.catch(5)),
                              (s = !0),
                              (i = n.t0);
                          case 22:
                            if (
                              ((n.prev = 22),
                              (n.prev = 23),
                              !u || null == o.return)
                            ) {
                              n.next = 27;
                              break;
                            }
                            return (n.next = 27), gi(o.return());
                          case 27:
                            if (((n.prev = 27), !s)) {
                              n.next = 30;
                              break;
                            }
                            throw i;
                          case 30:
                            return n.finish(27);
                          case 31:
                            return n.finish(22);
                          case 32:
                          case "end":
                            return n.stop();
                        }
                    },
                    n,
                    null,
                    [
                      [5, 18, 22, 32],
                      [23, , 27, 31],
                    ],
                  );
                })();
              })),
              r.apply(this, arguments)
            );
          }
          return function (e) {
            return r.apply(this, arguments);
          };
        }),
        Qo = Qa(function (e) {
          function r() {
            return (
              (r = (0, U.Z)(
                (0, j.Z)().mark(function r(t) {
                  var n,
                    a,
                    u = arguments;
                  return (0, j.Z)().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (n = u.length > 1 && void 0 !== u[1] ? u[1] : {}),
                            (r.next = 3),
                            e.post("name/pubsub/cancel", {
                              signal: n.signal,
                              searchParams: tu((0, Pe.Z)({ arg: t }, n)),
                              headers: n.headers,
                            })
                          );
                        case 3:
                          return (
                            (a = r.sent), (r.t0 = Wi), (r.next = 7), a.json()
                          );
                        case 7:
                          return (
                            (r.t1 = r.sent), r.abrupt("return", (0, r.t0)(r.t1))
                          );
                        case 9:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )),
              r.apply(this, arguments)
            );
          }
          return function (e) {
            return r.apply(this, arguments);
          };
        }),
        Xo = Qa(function (e) {
          function r() {
            return (
              (r = (0, U.Z)(
                (0, j.Z)().mark(function r() {
                  var t,
                    n,
                    a = arguments;
                  return (0, j.Z)().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (t = a.length > 0 && void 0 !== a[0] ? a[0] : {}),
                            (r.next = 3),
                            e.post("name/pubsub/state", {
                              signal: t.signal,
                              searchParams: tu(t),
                              headers: t.headers,
                            })
                          );
                        case 3:
                          return (
                            (n = r.sent), (r.t0 = Wi), (r.next = 7), n.json()
                          );
                        case 7:
                          return (
                            (r.t1 = r.sent), r.abrupt("return", (0, r.t0)(r.t1))
                          );
                        case 9:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )),
              r.apply(this, arguments)
            );
          }
          return function () {
            return r.apply(this, arguments);
          };
        }),
        $o = Qa(function (e) {
          function r() {
            return (
              (r = (0, U.Z)(
                (0, j.Z)().mark(function r() {
                  var t,
                    n,
                    a,
                    u = arguments;
                  return (0, j.Z)().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (t = u.length > 0 && void 0 !== u[0] ? u[0] : {}),
                            (r.next = 3),
                            e.post("name/pubsub/subs", {
                              signal: t.signal,
                              searchParams: tu(t),
                              headers: t.headers,
                            })
                          );
                        case 3:
                          return (n = r.sent), (r.next = 6), n.json();
                        case 6:
                          return (
                            (a = r.sent), r.abrupt("return", a.Strings || [])
                          );
                        case 8:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )),
              r.apply(this, arguments)
            );
          }
          return function () {
            return r.apply(this, arguments);
          };
        });
      function ec(e) {
        return { cancel: Qo(e), state: Xo(e), subs: $o(e) };
      }
      function rc(e) {
        return { publish: Go(e), resolve: Yo(e), pubsub: ec(e) };
      }
      var tc = Qa(function (e) {
          function r() {
            return (
              (r = (0, U.Z)(
                (0, j.Z)().mark(function r(t) {
                  var n,
                    a,
                    u,
                    s = arguments;
                  return (0, j.Z)().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (n = s.length > 1 && void 0 !== s[1] ? s[1] : {}),
                            (r.next = 3),
                            e.post("object/data", {
                              signal: n.signal,
                              searchParams: tu(
                                (0, Pe.Z)(
                                  {
                                    arg: "".concat(
                                      t instanceof Uint8Array
                                        ? q.CID.decode(t)
                                        : t,
                                    ),
                                  },
                                  n,
                                ),
                              ),
                              headers: n.headers,
                            })
                          );
                        case 3:
                          return (a = r.sent), (r.next = 6), a.arrayBuffer();
                        case 6:
                          return (
                            (u = r.sent),
                            r.abrupt(
                              "return",
                              new Uint8Array(u, 0, u.byteLength),
                            )
                          );
                        case 8:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )),
              r.apply(this, arguments)
            );
          }
          return function (e) {
            return r.apply(this, arguments);
          };
        }),
        nc = Qa(function (e) {
          function r() {
            return (
              (r = (0, U.Z)(
                (0, j.Z)().mark(function r(t) {
                  var n,
                    a,
                    u,
                    s = arguments;
                  return (0, j.Z)().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (n = s.length > 1 && void 0 !== s[1] ? s[1] : {}),
                            (r.next = 3),
                            e.post("object/get", {
                              signal: n.signal,
                              searchParams: tu(
                                (0, Pe.Z)(
                                  {
                                    arg: "".concat(
                                      t instanceof Uint8Array
                                        ? q.CID.decode(t)
                                        : t,
                                    ),
                                    dataEncoding: "base64",
                                  },
                                  n,
                                ),
                              ),
                              headers: n.headers,
                            })
                          );
                        case 3:
                          return (a = r.sent), (r.next = 6), a.json();
                        case 6:
                          return (
                            (u = r.sent),
                            r.abrupt("return", {
                              Data: (0, fr.fromString)(u.Data, "base64pad"),
                              Links: (u.Links || []).map(function (e) {
                                return {
                                  Name: e.Name,
                                  Hash: q.CID.parse(e.Hash),
                                  Tsize: e.Size,
                                };
                              }),
                            })
                          );
                        case 8:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )),
              r.apply(this, arguments)
            );
          }
          return function (e) {
            return r.apply(this, arguments);
          };
        }),
        ac = Qa(function (e) {
          function r() {
            return (
              (r = (0, U.Z)(
                (0, j.Z)().mark(function r(t) {
                  var n,
                    a,
                    u,
                    s = arguments;
                  return (0, j.Z)().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (n = s.length > 1 && void 0 !== s[1] ? s[1] : {}),
                            (r.next = 3),
                            e.post("object/links", {
                              signal: n.signal,
                              searchParams: tu(
                                (0, Pe.Z)(
                                  {
                                    arg: "".concat(
                                      t instanceof Uint8Array
                                        ? q.CID.decode(t)
                                        : t,
                                    ),
                                  },
                                  n,
                                ),
                              ),
                              headers: n.headers,
                            })
                          );
                        case 3:
                          return (a = r.sent), (r.next = 6), a.json();
                        case 6:
                          return (
                            (u = r.sent),
                            r.abrupt(
                              "return",
                              (u.Links || []).map(function (e) {
                                return {
                                  Name: e.Name,
                                  Tsize: e.Size,
                                  Hash: q.CID.parse(e.Hash),
                                };
                              }),
                            )
                          );
                        case 8:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )),
              r.apply(this, arguments)
            );
          }
          return function (e) {
            return r.apply(this, arguments);
          };
        }),
        uc = Qa(function (e) {
          function r() {
            return (
              (r = (0, U.Z)(
                (0, j.Z)().mark(function r() {
                  var t,
                    n,
                    a,
                    u,
                    s = arguments;
                  return (0, j.Z)().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (t = s.length > 0 && void 0 !== s[0] ? s[0] : {}),
                            (r.next = 3),
                            e.post("object/new", {
                              signal: t.signal,
                              searchParams: tu(
                                (0, Pe.Z)({ arg: t.template }, t),
                              ),
                              headers: t.headers,
                            })
                          );
                        case 3:
                          return (n = r.sent), (r.next = 6), n.json();
                        case 6:
                          return (
                            (a = r.sent),
                            (u = a.Hash),
                            r.abrupt("return", q.CID.parse(u))
                          );
                        case 9:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )),
              r.apply(this, arguments)
            );
          }
          return function () {
            return r.apply(this, arguments);
          };
        }),
        sc = function (e, r) {
          var t = Qa(function (t) {
            var n = uo(e, r);
            function a() {
              return (
                (a = (0, U.Z)(
                  (0, j.Z)().mark(function e(r) {
                    var t,
                      a = arguments;
                    return (0, j.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t = a.length > 1 && void 0 !== a[1] ? a[1] : {}),
                              e.abrupt(
                                "return",
                                n(
                                  r,
                                  (0, Pe.Z)(
                                    (0, Pe.Z)({}, t),
                                    {},
                                    {
                                      storeCodec: "dag-pb",
                                      hashAlg: "sha2-256",
                                      version: 1,
                                    },
                                  ),
                                ),
                              )
                            );
                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                a.apply(this, arguments)
              );
            }
            return function (e) {
              return a.apply(this, arguments);
            };
          });
          return t(r);
        },
        ic = Qa(function (e) {
          function r() {
            return (
              (r = (0, U.Z)(
                (0, j.Z)().mark(function r(t) {
                  var n,
                    a,
                    u,
                    s = arguments;
                  return (0, j.Z)().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (n = s.length > 1 && void 0 !== s[1] ? s[1] : {}),
                            (r.next = 3),
                            e.post("object/stat", {
                              signal: n.signal,
                              searchParams: tu(
                                (0, Pe.Z)({ arg: "".concat(t) }, n),
                              ),
                              headers: n.headers,
                            })
                          );
                        case 3:
                          return (a = r.sent), (r.next = 6), a.json();
                        case 6:
                          return (
                            (u = r.sent),
                            r.abrupt(
                              "return",
                              (0, Pe.Z)(
                                (0, Pe.Z)({}, u),
                                {},
                                { Hash: q.CID.parse(u.Hash) },
                              ),
                            )
                          );
                        case 8:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )),
              r.apply(this, arguments)
            );
          }
          return function (e) {
            return r.apply(this, arguments);
          };
        }),
        oc = Qa(function (e) {
          function r() {
            return (
              (r = (0, U.Z)(
                (0, j.Z)().mark(function r(t, n) {
                  var a,
                    u,
                    s,
                    i,
                    o = arguments;
                  return (0, j.Z)().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (a = o.length > 2 && void 0 !== o[2] ? o[2] : {}),
                            (r.next = 3),
                            e.post("object/patch/add-link", {
                              signal: a.signal,
                              searchParams: tu(
                                (0, Pe.Z)(
                                  {
                                    arg: [
                                      "".concat(t),
                                      n.Name || n.name || "",
                                      (n.Hash || n.cid || "").toString() ||
                                        null,
                                    ],
                                  },
                                  a,
                                ),
                              ),
                              headers: a.headers,
                            })
                          );
                        case 3:
                          return (u = r.sent), (r.next = 6), u.json();
                        case 6:
                          return (
                            (s = r.sent),
                            (i = s.Hash),
                            r.abrupt("return", q.CID.parse(i))
                          );
                        case 9:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )),
              r.apply(this, arguments)
            );
          }
          return function (e, t) {
            return r.apply(this, arguments);
          };
        }),
        cc = Qa(function (e) {
          function r() {
            return (
              (r = (0, U.Z)(
                (0, j.Z)().mark(function r(t, n) {
                  var a,
                    u,
                    s,
                    i,
                    o,
                    c,
                    f = arguments;
                  return (0, j.Z)().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (a = f.length > 2 && void 0 !== f[2] ? f[2] : {}),
                            (u = new AbortController()),
                            (s = Pi(u.signal, a.signal)),
                            (r.t0 = e),
                            (r.t1 = Pe.Z),
                            (r.t2 = {
                              signal: s,
                              searchParams: tu(
                                (0, Pe.Z)({ arg: "".concat(t) }, a),
                              ),
                            }),
                            (r.next = 8),
                            Ci([n], u, a.headers)
                          );
                        case 8:
                          return (
                            (r.t3 = r.sent),
                            (r.t4 = (0, r.t1)(r.t2, r.t3)),
                            (r.next = 12),
                            r.t0.post.call(
                              r.t0,
                              "object/patch/append-data",
                              r.t4,
                            )
                          );
                        case 12:
                          return (i = r.sent), (r.next = 15), i.json();
                        case 15:
                          return (
                            (o = r.sent),
                            (c = o.Hash),
                            r.abrupt("return", q.CID.parse(c))
                          );
                        case 18:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )),
              r.apply(this, arguments)
            );
          }
          return function (e, t) {
            return r.apply(this, arguments);
          };
        }),
        fc = Qa(function (e) {
          function r() {
            return (
              (r = (0, U.Z)(
                (0, j.Z)().mark(function r(t, n) {
                  var a,
                    u,
                    s,
                    i,
                    o = arguments;
                  return (0, j.Z)().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (a = o.length > 2 && void 0 !== o[2] ? o[2] : {}),
                            (r.next = 3),
                            e.post("object/patch/rm-link", {
                              signal: a.signal,
                              searchParams: tu(
                                (0, Pe.Z)(
                                  {
                                    arg: [
                                      "".concat(t),
                                      n.Name || n.name || null,
                                    ],
                                  },
                                  a,
                                ),
                              ),
                              headers: a.headers,
                            })
                          );
                        case 3:
                          return (u = r.sent), (r.next = 6), u.json();
                        case 6:
                          return (
                            (s = r.sent),
                            (i = s.Hash),
                            r.abrupt("return", q.CID.parse(i))
                          );
                        case 9:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )),
              r.apply(this, arguments)
            );
          }
          return function (e, t) {
            return r.apply(this, arguments);
          };
        }),
        pc = Qa(function (e) {
          function r() {
            return (
              (r = (0, U.Z)(
                (0, j.Z)().mark(function r(t, n) {
                  var a,
                    u,
                    s,
                    i,
                    o,
                    c,
                    f = arguments;
                  return (0, j.Z)().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (a = f.length > 2 && void 0 !== f[2] ? f[2] : {}),
                            (u = new AbortController()),
                            (s = Pi(u.signal, a.signal)),
                            (r.t0 = e),
                            (r.t1 = Pe.Z),
                            (r.t2 = {
                              signal: s,
                              searchParams: tu(
                                (0, Pe.Z)({ arg: ["".concat(t)] }, a),
                              ),
                            }),
                            (r.next = 8),
                            Ci([n], u, a.headers)
                          );
                        case 8:
                          return (
                            (r.t3 = r.sent),
                            (r.t4 = (0, r.t1)(r.t2, r.t3)),
                            (r.next = 12),
                            r.t0.post.call(r.t0, "object/patch/set-data", r.t4)
                          );
                        case 12:
                          return (i = r.sent), (r.next = 15), i.json();
                        case 15:
                          return (
                            (o = r.sent),
                            (c = o.Hash),
                            r.abrupt("return", q.CID.parse(c))
                          );
                        case 18:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )),
              r.apply(this, arguments)
            );
          }
          return function (e, t) {
            return r.apply(this, arguments);
          };
        });
      function hc(e) {
        return {
          addLink: oc(e),
          appendData: cc(e),
          rmLink: fc(e),
          setData: pc(e),
        };
      }
      function lc(e, r) {
        return {
          data: tc(r),
          get: nc(r),
          links: ac(r),
          new: uc(r),
          put: sc(e, r),
          stat: ic(r),
          patch: hc(r),
        };
      }
      function dc(e) {
        return vc.apply(this, arguments);
      }
      function vc() {
        return (vc = bi(
          (0, j.Z)().mark(function e(r) {
            var t,
              n,
              a,
              u,
              s,
              i,
              o,
              c,
              f,
              p,
              h,
              l,
              d,
              v,
              y,
              b,
              g,
              m,
              w,
              D,
              x,
              k,
              E;
            return (0, j.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (null !== r && void 0 !== r) {
                        e.next = 2;
                        break;
                      }
                      throw Sr(
                        new Error("Unexpected input: ".concat(r)),
                        "ERR_UNEXPECTED_INPUT",
                      );
                    case 2:
                      if (!(t = q.CID.asCID(r))) {
                        e.next = 7;
                        break;
                      }
                      return (e.next = 6), yc({ cid: t });
                    case 6:
                      return e.abrupt("return");
                    case 7:
                      if (!(r instanceof String || "string" === typeof r)) {
                        e.next = 11;
                        break;
                      }
                      return (e.next = 10), yc({ path: r });
                    case 10:
                      return e.abrupt("return");
                    case 11:
                      if (null == r.cid && null == r.path) {
                        e.next = 15;
                        break;
                      }
                      return (e.next = 14), yc(r);
                    case 14:
                      return e.abrupt("return", e.sent);
                    case 15:
                      if (!(Symbol.iterator in r)) {
                        e.next = 63;
                        break;
                      }
                      if (((n = r[Symbol.iterator]()), !(a = n.next()).done)) {
                        e.next = 20;
                        break;
                      }
                      return e.abrupt("return", n);
                    case 20:
                      if (
                        !(
                          q.CID.asCID(a.value) ||
                          a.value instanceof String ||
                          "string" === typeof a.value
                        )
                      ) {
                        e.next = 41;
                        break;
                      }
                      return (e.next = 23), yc({ cid: a.value });
                    case 23:
                      (u = (0, T.Z)(n)), (e.prev = 24), u.s();
                    case 26:
                      if ((s = u.n()).done) {
                        e.next = 32;
                        break;
                      }
                      return (i = s.value), (e.next = 30), yc({ cid: i });
                    case 30:
                      e.next = 26;
                      break;
                    case 32:
                      e.next = 37;
                      break;
                    case 34:
                      (e.prev = 34), (e.t0 = e.catch(24)), u.e(e.t0);
                    case 37:
                      return (e.prev = 37), u.f(), e.finish(37);
                    case 40:
                      return e.abrupt("return");
                    case 41:
                      if (null == a.value.cid && null == a.value.path) {
                        e.next = 62;
                        break;
                      }
                      return (e.next = 44), yc(a.value);
                    case 44:
                      (o = (0, T.Z)(n)), (e.prev = 45), o.s();
                    case 47:
                      if ((c = o.n()).done) {
                        e.next = 53;
                        break;
                      }
                      return (f = c.value), (e.next = 51), yc(f);
                    case 51:
                      e.next = 47;
                      break;
                    case 53:
                      e.next = 58;
                      break;
                    case 55:
                      (e.prev = 55), (e.t1 = e.catch(45)), o.e(e.t1);
                    case 58:
                      return (e.prev = 58), o.f(), e.finish(58);
                    case 61:
                      return e.abrupt("return");
                    case 62:
                      throw Sr(
                        new Error("Unexpected input: " + typeof r),
                        "ERR_UNEXPECTED_INPUT",
                      );
                    case 63:
                      if (!(Symbol.asyncIterator in r)) {
                        e.next = 137;
                        break;
                      }
                      return (
                        (p = r[Symbol.asyncIterator]()),
                        (e.next = 67),
                        gi(p.next())
                      );
                    case 67:
                      if (!(h = e.sent).done) {
                        e.next = 70;
                        break;
                      }
                      return e.abrupt("return", p);
                    case 70:
                      if (
                        !(
                          q.CID.asCID(h.value) ||
                          h.value instanceof String ||
                          "string" === typeof h.value
                        )
                      ) {
                        e.next = 103;
                        break;
                      }
                      return (e.next = 73), yc({ cid: h.value });
                    case 73:
                      (l = !1), (d = !1), (e.prev = 75), (y = ti(p));
                    case 77:
                      return (e.next = 79), gi(y.next());
                    case 79:
                      if (!(l = !(b = e.sent).done)) {
                        e.next = 86;
                        break;
                      }
                      return (g = b.value), (e.next = 83), yc({ cid: g });
                    case 83:
                      (l = !1), (e.next = 77);
                      break;
                    case 86:
                      e.next = 92;
                      break;
                    case 88:
                      (e.prev = 88), (e.t2 = e.catch(75)), (d = !0), (v = e.t2);
                    case 92:
                      if (
                        ((e.prev = 92), (e.prev = 93), !l || null == y.return)
                      ) {
                        e.next = 97;
                        break;
                      }
                      return (e.next = 97), gi(y.return());
                    case 97:
                      if (((e.prev = 97), !d)) {
                        e.next = 100;
                        break;
                      }
                      throw v;
                    case 100:
                      return e.finish(97);
                    case 101:
                      return e.finish(92);
                    case 102:
                      return e.abrupt("return");
                    case 103:
                      if (null == h.value.cid && null == h.value.path) {
                        e.next = 136;
                        break;
                      }
                      return (e.next = 106), yc(h.value);
                    case 106:
                      (m = !1), (w = !1), (e.prev = 108), (x = ti(p));
                    case 110:
                      return (e.next = 112), gi(x.next());
                    case 112:
                      if (!(m = !(k = e.sent).done)) {
                        e.next = 119;
                        break;
                      }
                      return (E = k.value), (e.next = 116), yc(E);
                    case 116:
                      (m = !1), (e.next = 110);
                      break;
                    case 119:
                      e.next = 125;
                      break;
                    case 121:
                      (e.prev = 121),
                        (e.t3 = e.catch(108)),
                        (w = !0),
                        (D = e.t3);
                    case 125:
                      if (
                        ((e.prev = 125), (e.prev = 126), !m || null == x.return)
                      ) {
                        e.next = 130;
                        break;
                      }
                      return (e.next = 130), gi(x.return());
                    case 130:
                      if (((e.prev = 130), !w)) {
                        e.next = 133;
                        break;
                      }
                      throw D;
                    case 133:
                      return e.finish(130);
                    case 134:
                      return e.finish(125);
                    case 135:
                      return e.abrupt("return");
                    case 136:
                    case 137:
                      throw Sr(
                        new Error("Unexpected input: " + typeof r),
                        "ERR_UNEXPECTED_INPUT",
                      );
                    case 138:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [
                [24, 34, 37, 40],
                [45, 55, 58, 61],
                [75, 88, 92, 102],
                [93, , 97, 101],
                [108, 121, 125, 135],
                [126, , 130, 134],
              ],
            );
          }),
        )).apply(this, arguments);
      }
      function yc(e) {
        var r = e.cid || "".concat(e.path);
        if (!r)
          throw Sr(
            new Error(
              "Unexpected input: Please path either a CID or an IPFS path",
            ),
            "ERR_UNEXPECTED_INPUT",
          );
        var t = { path: r, recursive: !1 !== e.recursive };
        return null != e.metadata && (t.metadata = e.metadata), t;
      }
      var bc = Qa(function (e) {
        function r() {
          return (
            (r = bi(function (r) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              return (0, j.Z)().mark(function n() {
                var a, u, s, i, o, c, f, p, h, l, d, v, y, b, g, m, w, D, x;
                return (0, j.Z)().wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          (a = !1), (u = !1), (n.prev = 2), (i = ti(dc(r)));
                        case 4:
                          return (n.next = 6), gi(i.next());
                        case 6:
                          if (!(a = !(o = n.sent).done)) {
                            n.next = 62;
                            break;
                          }
                          return (
                            (c = o.value),
                            (f = c.path),
                            (p = c.recursive),
                            (h = c.metadata),
                            (n.next = 10),
                            gi(
                              e.post("pin/add", {
                                signal: t.signal,
                                searchParams: tu(
                                  (0, Pe.Z)(
                                    (0, Pe.Z)({}, t),
                                    {},
                                    {
                                      arg: f,
                                      recursive: p,
                                      metadata: h ? JSON.stringify(h) : void 0,
                                      stream: !0,
                                    },
                                  ),
                                ),
                                headers: t.headers,
                              }),
                            )
                          );
                        case 10:
                          (l = n.sent),
                            (d = !1),
                            (v = !1),
                            (n.prev = 13),
                            (b = ti(l.ndjson()));
                        case 15:
                          return (n.next = 17), gi(b.next());
                        case 17:
                          if (!(d = !(g = n.sent).done)) {
                            n.next = 43;
                            break;
                          }
                          if (!(m = g.value).Pins) {
                            n.next = 38;
                            break;
                          }
                          (w = (0, T.Z)(m.Pins)), (n.prev = 21), w.s();
                        case 23:
                          if ((D = w.n()).done) {
                            n.next = 29;
                            break;
                          }
                          return (x = D.value), (n.next = 27), q.CID.parse(x);
                        case 27:
                          n.next = 23;
                          break;
                        case 29:
                          n.next = 34;
                          break;
                        case 31:
                          (n.prev = 31), (n.t0 = n.catch(21)), w.e(n.t0);
                        case 34:
                          return (n.prev = 34), w.f(), n.finish(34);
                        case 37:
                          return n.abrupt("continue", 40);
                        case 38:
                          return (n.next = 40), q.CID.parse(m);
                        case 40:
                          (d = !1), (n.next = 15);
                          break;
                        case 43:
                          n.next = 49;
                          break;
                        case 45:
                          (n.prev = 45),
                            (n.t1 = n.catch(13)),
                            (v = !0),
                            (y = n.t1);
                        case 49:
                          if (
                            ((n.prev = 49),
                            (n.prev = 50),
                            !d || null == b.return)
                          ) {
                            n.next = 54;
                            break;
                          }
                          return (n.next = 54), gi(b.return());
                        case 54:
                          if (((n.prev = 54), !v)) {
                            n.next = 57;
                            break;
                          }
                          throw y;
                        case 57:
                          return n.finish(54);
                        case 58:
                          return n.finish(49);
                        case 59:
                          (a = !1), (n.next = 4);
                          break;
                        case 62:
                          n.next = 68;
                          break;
                        case 64:
                          (n.prev = 64),
                            (n.t2 = n.catch(2)),
                            (u = !0),
                            (s = n.t2);
                        case 68:
                          if (
                            ((n.prev = 68),
                            (n.prev = 69),
                            !a || null == i.return)
                          ) {
                            n.next = 73;
                            break;
                          }
                          return (n.next = 73), gi(i.return());
                        case 73:
                          if (((n.prev = 73), !u)) {
                            n.next = 76;
                            break;
                          }
                          throw s;
                        case 76:
                          return n.finish(73);
                        case 77:
                          return n.finish(68);
                        case 78:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [
                    [2, 64, 68, 78],
                    [13, 45, 49, 59],
                    [21, 31, 34, 37],
                    [50, , 54, 58],
                    [69, , 73, 77],
                  ],
                );
              })();
            })),
            r.apply(this, arguments)
          );
        }
        return function (e) {
          return r.apply(this, arguments);
        };
      });
      function gc(e) {
        var r = bc(e);
        return Qa(function () {
          function e() {
            return (
              (e = (0, U.Z)(
                (0, j.Z)().mark(function e(t) {
                  var n,
                    a = arguments;
                  return (0, j.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = a.length > 1 && void 0 !== a[1] ? a[1] : {}),
                            e.abrupt(
                              "return",
                              to(r([(0, Pe.Z)({ path: t }, n)], n)),
                            )
                          );
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              )),
              e.apply(this, arguments)
            );
          }
          return function (r) {
            return e.apply(this, arguments);
          };
        })(e);
      }
      function mc(e, r, t) {
        var n = { type: e, cid: q.CID.parse(r) };
        return t && (n.metadata = t), n;
      }
      var wc = Qa(function (e) {
          function r() {
            return (
              (r = bi(function () {
                var r =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return (0, j.Z)().mark(function t() {
                  var n, a, u, s, i, o, c, f, p, h, l;
                  return (0, j.Z)().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (n = []),
                              r.paths &&
                                (n = Array.isArray(r.paths)
                                  ? r.paths
                                  : [r.paths]),
                              (t.next = 4),
                              gi(
                                e.post("pin/ls", {
                                  signal: r.signal,
                                  searchParams: tu(
                                    (0, Pe.Z)(
                                      (0, Pe.Z)({}, r),
                                      {},
                                      {
                                        arg: n.map(function (e) {
                                          return "".concat(e);
                                        }),
                                        stream: !0,
                                      },
                                    ),
                                  ),
                                  headers: r.headers,
                                }),
                              )
                            );
                          case 4:
                            (a = t.sent),
                              (u = !1),
                              (s = !1),
                              (t.prev = 7),
                              (o = ti(a.ndjson()));
                          case 9:
                            return (t.next = 11), gi(o.next());
                          case 11:
                            if (!(u = !(c = t.sent).done)) {
                              t.next = 28;
                              break;
                            }
                            if (!(f = c.value).Keys) {
                              t.next = 23;
                              break;
                            }
                            (p = 0), (h = Object.keys(f.Keys));
                          case 15:
                            if (!(p < h.length)) {
                              t.next = 22;
                              break;
                            }
                            return (
                              (l = h[p]),
                              (t.next = 19),
                              mc(f.Keys[l].Type, l, f.Keys[l].Metadata)
                            );
                          case 19:
                            p++, (t.next = 15);
                            break;
                          case 22:
                            return t.abrupt("return");
                          case 23:
                            return (t.next = 25), mc(f.Type, f.Cid, f.Metadata);
                          case 25:
                            (u = !1), (t.next = 9);
                            break;
                          case 28:
                            t.next = 34;
                            break;
                          case 30:
                            (t.prev = 30),
                              (t.t0 = t.catch(7)),
                              (s = !0),
                              (i = t.t0);
                          case 34:
                            if (
                              ((t.prev = 34),
                              (t.prev = 35),
                              !u || null == o.return)
                            ) {
                              t.next = 39;
                              break;
                            }
                            return (t.next = 39), gi(o.return());
                          case 39:
                            if (((t.prev = 39), !s)) {
                              t.next = 42;
                              break;
                            }
                            throw i;
                          case 42:
                            return t.finish(39);
                          case 43:
                            return t.finish(34);
                          case 44:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [
                      [7, 30, 34, 44],
                      [35, , 39, 43],
                    ],
                  );
                })();
              })),
              r.apply(this, arguments)
            );
          }
          return function () {
            return r.apply(this, arguments);
          };
        }),
        Dc = Qa(function (e) {
          function r() {
            return (
              (r = bi(function (r) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                return (0, j.Z)().mark(function n() {
                  var a, u, s, i, o, c, f, p, h, l, d, v, y, b, g, m;
                  return (0, j.Z)().wrap(
                    function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            (a = !1), (u = !1), (n.prev = 2), (i = ti(dc(r)));
                          case 4:
                            return (n.next = 6), gi(i.next());
                          case 6:
                            if (!(a = !(o = n.sent).done)) {
                              n.next = 49;
                              break;
                            }
                            return (
                              (c = o.value),
                              (f = c.path),
                              (p = c.recursive),
                              (h = new URLSearchParams(t.searchParams)).append(
                                "arg",
                                "".concat(f),
                              ),
                              null != p && h.set("recursive", String(p)),
                              (n.next = 13),
                              gi(
                                e.post("pin/rm", {
                                  signal: t.signal,
                                  headers: t.headers,
                                  searchParams: tu(
                                    (0, Pe.Z)(
                                      (0, Pe.Z)({}, t),
                                      {},
                                      { arg: "".concat(f), recursive: p },
                                    ),
                                  ),
                                }),
                              )
                            );
                          case 13:
                            (l = n.sent),
                              (d = !1),
                              (v = !1),
                              (n.prev = 16),
                              (b = ti(l.ndjson()));
                          case 18:
                            return (n.next = 20), gi(b.next());
                          case 20:
                            if (!(d = !(g = n.sent).done)) {
                              n.next = 30;
                              break;
                            }
                            if (!(m = g.value).Pins) {
                              n.next = 25;
                              break;
                            }
                            return n.delegateYield(
                              mi(
                                ti(
                                  m.Pins.map(function (e) {
                                    return q.CID.parse(e);
                                  }),
                                ),
                              ),
                              "t0",
                              24,
                            );
                          case 24:
                            return n.abrupt("continue", 27);
                          case 25:
                            return (n.next = 27), q.CID.parse(m);
                          case 27:
                            (d = !1), (n.next = 18);
                            break;
                          case 30:
                            n.next = 36;
                            break;
                          case 32:
                            (n.prev = 32),
                              (n.t1 = n.catch(16)),
                              (v = !0),
                              (y = n.t1);
                          case 36:
                            if (
                              ((n.prev = 36),
                              (n.prev = 37),
                              !d || null == b.return)
                            ) {
                              n.next = 41;
                              break;
                            }
                            return (n.next = 41), gi(b.return());
                          case 41:
                            if (((n.prev = 41), !v)) {
                              n.next = 44;
                              break;
                            }
                            throw y;
                          case 44:
                            return n.finish(41);
                          case 45:
                            return n.finish(36);
                          case 46:
                            (a = !1), (n.next = 4);
                            break;
                          case 49:
                            n.next = 55;
                            break;
                          case 51:
                            (n.prev = 51),
                              (n.t2 = n.catch(2)),
                              (u = !0),
                              (s = n.t2);
                          case 55:
                            if (
                              ((n.prev = 55),
                              (n.prev = 56),
                              !a || null == i.return)
                            ) {
                              n.next = 60;
                              break;
                            }
                            return (n.next = 60), gi(i.return());
                          case 60:
                            if (((n.prev = 60), !u)) {
                              n.next = 63;
                              break;
                            }
                            throw s;
                          case 63:
                            return n.finish(60);
                          case 64:
                            return n.finish(55);
                          case 65:
                          case "end":
                            return n.stop();
                        }
                    },
                    n,
                    null,
                    [
                      [2, 51, 55, 65],
                      [16, 32, 36, 46],
                      [37, , 41, 45],
                      [56, , 60, 64],
                    ],
                  );
                })();
              })),
              r.apply(this, arguments)
            );
          }
          return function (e) {
            return r.apply(this, arguments);
          };
        }),
        xc = function (e) {
          var r = Dc(e);
          return Qa(function () {
            function e() {
              return (
                (e = (0, U.Z)(
                  (0, j.Z)().mark(function e(t) {
                    var n,
                      a = arguments;
                    return (0, j.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = a.length > 1 && void 0 !== a[1] ? a[1] : {}),
                              e.abrupt(
                                "return",
                                to(r([(0, Pe.Z)({ path: t }, n)], n)),
                              )
                            );
                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  }),
                )),
                e.apply(this, arguments)
              );
            }
            return function (r) {
              return e.apply(this, arguments);
            };
          })(e);
        },
        kc = function (e) {
          var r = e.Name,
            t = e.Status,
            n = e.Cid;
          return { cid: q.CID.parse(n), name: r, status: t };
        },
        Ec = function (e) {
          if ("string" === typeof e && "" !== e) return e;
          throw new TypeError("service name must be passed");
        },
        Zc = function (e) {
          if (q.CID.asCID(e)) return e.toString();
          throw new TypeError(
            "CID instance expected instead of ".concat(typeof e),
          );
        },
        Ac = function (e) {
          var r = e.service,
            t = e.cid,
            n = e.name,
            a = e.status,
            u = e.all,
            s = tu({ service: Ec(r), name: n, force: !!u || void 0 });
          if (t) {
            var i,
              o = (0, T.Z)(t);
            try {
              for (o.s(); !(i = o.n()).done; ) {
                var c = i.value;
                s.append("cid", Zc(c));
              }
            } catch (l) {
              o.e(l);
            } finally {
              o.f();
            }
          }
          if (a) {
            var f,
              p = (0, T.Z)(a);
            try {
              for (p.s(); !(f = p.n()).done; ) {
                var h = f.value;
                s.append("status", h);
              }
            } catch (l) {
              p.e(l);
            } finally {
              p.f();
            }
          }
          return s;
        },
        Cc = function (e) {
          var r = e.cid,
            t = e.service,
            n = e.background,
            a = e.name,
            u = e.origins,
            s = tu({
              arg: Zc(r),
              service: Ec(t),
              name: a,
              background: !!n || void 0,
            });
          if (u) {
            var i,
              o = (0, T.Z)(u);
            try {
              for (o.s(); !(i = o.n()).done; ) {
                var c = i.value;
                s.append("origin", c.toString());
              }
            } catch (f) {
              o.e(f);
            } finally {
              o.f();
            }
          }
          return s;
        },
        Fc = ["timeout", "signal", "headers"];
      function Bc(e) {
        function r() {
          return (r = (0, U.Z)(
            (0, j.Z)().mark(function r(t, n) {
              var a, u, s, i, o;
              return (0, j.Z)().wrap(function (r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      return (
                        (a = n.timeout),
                        (u = n.signal),
                        (s = n.headers),
                        (i = (0, Xa.Z)(n, Fc)),
                        (r.next = 3),
                        e.post("pin/remote/add", {
                          timeout: a,
                          signal: u,
                          headers: s,
                          searchParams: Cc((0, Pe.Z)({ cid: t }, i)),
                        })
                      );
                    case 3:
                      return (o = r.sent), (r.t0 = kc), (r.next = 7), o.json();
                    case 7:
                      return (
                        (r.t1 = r.sent), r.abrupt("return", (0, r.t0)(r.t1))
                      );
                    case 9:
                    case "end":
                      return r.stop();
                  }
              }, r);
            }),
          )).apply(this, arguments);
        }
        return function (e, t) {
          return r.apply(this, arguments);
        };
      }
      var Pc = ["timeout", "signal", "headers"];
      function Sc(e) {
        function r() {
          return (r = bi(function (r) {
            var t = r.timeout,
              n = r.signal,
              a = r.headers,
              u = (0, Xa.Z)(r, Pc);
            return (0, j.Z)().mark(function r() {
              var s, i, o, c, f, p, h;
              return (0, j.Z)().wrap(
                function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (r.next = 2),
                          gi(
                            e.post("pin/remote/ls", {
                              timeout: t,
                              signal: n,
                              headers: a,
                              searchParams: Ac(u),
                            }),
                          )
                        );
                      case 2:
                        (s = r.sent),
                          (i = !1),
                          (o = !1),
                          (r.prev = 5),
                          (f = ti(s.ndjson()));
                      case 7:
                        return (r.next = 9), gi(f.next());
                      case 9:
                        if (!(i = !(p = r.sent).done)) {
                          r.next = 16;
                          break;
                        }
                        return (h = p.value), (r.next = 13), kc(h);
                      case 13:
                        (i = !1), (r.next = 7);
                        break;
                      case 16:
                        r.next = 22;
                        break;
                      case 18:
                        (r.prev = 18),
                          (r.t0 = r.catch(5)),
                          (o = !0),
                          (c = r.t0);
                      case 22:
                        if (
                          ((r.prev = 22), (r.prev = 23), !i || null == f.return)
                        ) {
                          r.next = 27;
                          break;
                        }
                        return (r.next = 27), gi(f.return());
                      case 27:
                        if (((r.prev = 27), !o)) {
                          r.next = 30;
                          break;
                        }
                        throw c;
                      case 30:
                        return r.finish(27);
                      case 31:
                        return r.finish(22);
                      case 32:
                      case "end":
                        return r.stop();
                    }
                },
                r,
                null,
                [
                  [5, 18, 22, 32],
                  [23, , 27, 31],
                ],
              );
            })();
          })).apply(this, arguments);
        }
        return function (e) {
          return r.apply(this, arguments);
        };
      }
      var Ic = ["timeout", "signal", "headers"];
      function jc(e) {
        function r() {
          return (r = (0, U.Z)(
            (0, j.Z)().mark(function r(t) {
              var n, a, u, s;
              return (0, j.Z)().wrap(function (r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      return (
                        (n = t.timeout),
                        (a = t.signal),
                        (u = t.headers),
                        (s = (0, Xa.Z)(t, Ic)),
                        (r.next = 3),
                        e.post("pin/remote/rm", {
                          timeout: n,
                          signal: a,
                          headers: u,
                          searchParams: Ac(
                            (0, Pe.Z)((0, Pe.Z)({}, s), {}, { all: !1 }),
                          ),
                        })
                      );
                    case 3:
                    case "end":
                      return r.stop();
                  }
              }, r);
            }),
          )).apply(this, arguments);
        }
        return function (e) {
          return r.apply(this, arguments);
        };
      }
      var Uc = ["timeout", "signal", "headers"];
      function Tc(e) {
        function r() {
          return (r = (0, U.Z)(
            (0, j.Z)().mark(function r(t) {
              var n, a, u, s;
              return (0, j.Z)().wrap(function (r) {
                for (;;)
                  switch ((r.prev = r.next)) {
                    case 0:
                      return (
                        (n = t.timeout),
                        (a = t.signal),
                        (u = t.headers),
                        (s = (0, Xa.Z)(t, Uc)),
                        (r.next = 3),
                        e.post("pin/remote/rm", {
                          timeout: n,
                          signal: a,
                          headers: u,
                          searchParams: Ac(
                            (0, Pe.Z)((0, Pe.Z)({}, s), {}, { all: !0 }),
                          ),
                        })
                      );
                    case 3:
                    case "end":
                      return r.stop();
                  }
              }, r);
            }),
          )).apply(this, arguments);
        }
        return function (e) {
          return r.apply(this, arguments);
        };
      }
      function Nc(e) {
        var r = String(e);
        if ("undefined" === r) throw Error("endpoint is required");
        return "/" === r[r.length - 1] ? r.slice(0, -1) : r;
      }
      function Rc(e) {
        return (0, Pe.Z)(
          { service: e.Service, endpoint: new URL(e.ApiEndpoint) },
          e.Stat && { stat: Oc(e.Stat) },
        );
      }
      function Oc(e) {
        switch (e.Status) {
          case "valid":
            var r = e.PinCount,
              t = r.Pinning,
              n = r.Pinned;
            return {
              status: "valid",
              pinCount: {
                queued: r.Queued,
                pinning: t,
                pinned: n,
                failed: r.Failed,
              },
            };
          case "invalid":
            return { status: "invalid" };
          default:
            return { status: e.Status };
        }
      }
      function _c(e) {
        function r() {
          return (
            (r = (0, U.Z)(
              (0, j.Z)().mark(function r(t, n) {
                var a, u, s, i, o;
                return (0, j.Z)().wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (a = n.endpoint),
                          (u = n.key),
                          (s = n.headers),
                          (i = n.timeout),
                          (o = n.signal),
                          (r.next = 3),
                          e.post("pin/remote/service/add", {
                            timeout: i,
                            signal: o,
                            searchParams: tu({ arg: [t, Nc(a), u] }),
                            headers: s,
                          })
                        );
                      case 3:
                      case "end":
                        return r.stop();
                    }
                }, r);
              }),
            )),
            r.apply(this, arguments)
          );
        }
        return function (e, t) {
          return r.apply(this, arguments);
        };
      }
      function Mc(e) {
        function r() {
          return (
            (r = (0, U.Z)(
              (0, j.Z)().mark(function r() {
                var t,
                  n,
                  a,
                  u,
                  s,
                  i,
                  o,
                  c,
                  f = arguments;
                return (0, j.Z)().wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (n = (t = f.length > 0 && void 0 !== f[0] ? f[0] : {})
                            .stat),
                          (a = t.headers),
                          (u = t.timeout),
                          (s = t.signal),
                          (r.next = 4),
                          e.post("pin/remote/service/ls", {
                            timeout: u,
                            signal: s,
                            headers: a,
                            searchParams: !0 === n ? tu({ stat: n }) : void 0,
                          })
                        );
                      case 4:
                        return (i = r.sent), (r.next = 7), i.json();
                      case 7:
                        return (
                          (o = r.sent),
                          (c = o.RemoteServices),
                          r.abrupt("return", c.map(Rc))
                        );
                      case 10:
                      case "end":
                        return r.stop();
                    }
                }, r);
              }),
            )),
            r.apply(this, arguments)
          );
        }
        return function () {
          return r.apply(this, arguments);
        };
      }
      function Lc(e) {
        function r() {
          return (
            (r = (0, U.Z)(
              (0, j.Z)().mark(function r(t) {
                var n,
                  a = arguments;
                return (0, j.Z)().wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (n = a.length > 1 && void 0 !== a[1] ? a[1] : {}),
                          (r.next = 3),
                          e.post("pin/remote/service/rm", {
                            signal: n.signal,
                            headers: n.headers,
                            searchParams: tu({ arg: t }),
                          })
                        );
                      case 3:
                      case "end":
                        return r.stop();
                    }
                }, r);
              }),
            )),
            r.apply(this, arguments)
          );
        }
        return function (e) {
          return r.apply(this, arguments);
        };
      }
      function zc(e) {
        var r = new Ya(e);
        return { add: _c(r), ls: Mc(r), rm: Lc(r) };
      }
      function Wc(e) {
        var r = new Ya(e);
        return {
          add: Bc(r),
          ls: Sc(r),
          rm: jc(r),
          rmAll: Tc(r),
          service: zc(e),
        };
      }
      function Vc(e) {
        return {
          addAll: bc(e),
          add: gc(e),
          ls: wc(e),
          rmAll: Dc(e),
          rm: xc(e),
          remote: Wc(e),
        };
      }
      var Hc = function (e) {
          return Array.isArray(e) ? e.map(qc) : e;
        },
        qc = function (e) {
          return (0, Ye.toString)(Jc(e));
        },
        Jc = function (e) {
          return ue.base64url.decode(e);
        },
        Kc = function (e) {
          return BigInt(
            "0x".concat((0, Ye.toString)(ue.base64url.decode(e), "base16")),
          );
        },
        Gc = function (e) {
          return ue.base64url.encode((0, fr.fromString)(e));
        },
        Yc = Qa(function (e) {
          function r() {
            return (
              (r = (0, U.Z)(
                (0, j.Z)().mark(function r() {
                  var t,
                    n,
                    a,
                    u = arguments;
                  return (0, j.Z)().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (t = u.length > 0 && void 0 !== u[0] ? u[0] : {}),
                            (r.next = 3),
                            e.post("pubsub/ls", {
                              signal: t.signal,
                              searchParams: tu(t),
                              headers: t.headers,
                            })
                          );
                        case 3:
                          return (r.next = 5), r.sent.json();
                        case 5:
                          return (
                            (n = r.sent),
                            (a = n.Strings),
                            r.abrupt("return", Hc(a) || [])
                          );
                        case 8:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )),
              r.apply(this, arguments)
            );
          }
          return function () {
            return r.apply(this, arguments);
          };
        }),
        Qc = Qa(function (e) {
          function r() {
            return (
              (r = (0, U.Z)(
                (0, j.Z)().mark(function r(t) {
                  var n,
                    a,
                    u,
                    s,
                    i = arguments;
                  return (0, j.Z)().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (n = i.length > 1 && void 0 !== i[1] ? i[1] : {}),
                            (r.next = 3),
                            e.post("pubsub/peers", {
                              signal: n.signal,
                              searchParams: tu((0, Pe.Z)({ arg: Gc(t) }, n)),
                              headers: n.headers,
                            })
                          );
                        case 3:
                          return (a = r.sent), (r.next = 6), a.json();
                        case 6:
                          return (
                            (u = r.sent),
                            (s = u.Strings),
                            r.abrupt("return", s || [])
                          );
                        case 9:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )),
              r.apply(this, arguments)
            );
          }
          return function (e) {
            return r.apply(this, arguments);
          };
        }),
        Xc = Qa(function (e) {
          function r() {
            return (
              (r = (0, U.Z)(
                (0, j.Z)().mark(function r(t, n) {
                  var a,
                    u,
                    s,
                    i,
                    o,
                    c = arguments;
                  return (0, j.Z)().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (a = c.length > 2 && void 0 !== c[2] ? c[2] : {}),
                            (u = tu((0, Pe.Z)({ arg: Gc(t) }, a))),
                            (s = new AbortController()),
                            (i = Pi(s.signal, a.signal)),
                            (r.t0 = e),
                            (r.t1 = Pe.Z),
                            (r.t2 = { signal: i, searchParams: u }),
                            (r.next = 9),
                            Ci([n], s, a.headers)
                          );
                        case 9:
                          return (
                            (r.t3 = r.sent),
                            (r.t4 = (0, r.t1)(r.t2, r.t3)),
                            (r.next = 13),
                            r.t0.post.call(r.t0, "pubsub/pub", r.t4)
                          );
                        case 13:
                          return (o = r.sent), (r.next = 16), o.text();
                        case 16:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )),
              r.apply(this, arguments)
            );
          }
          return function (e, t) {
            return r.apply(this, arguments);
          };
        }),
        $c = Hr("ipfs-http-client:pubsub:subscribe"),
        ef = function (e, r) {
          return Qa(function (e) {
            function t() {
              return (
                (t = (0, U.Z)(
                  (0, j.Z)().mark(function t(n, a) {
                    var u,
                      s,
                      i,
                      o,
                      c,
                      f = arguments;
                    return (0, j.Z)().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              ((u =
                                f.length > 2 && void 0 !== f[2]
                                  ? f[2]
                                  : {}).signal = r.subscribe(n, a, u.signal)),
                              (o = new Promise(function (e, r) {
                                (s = e), (i = r);
                              })),
                              (c = setTimeout(function () {
                                return s();
                              }, 1e3)),
                              e
                                .post("pubsub/sub", {
                                  signal: u.signal,
                                  searchParams: tu(
                                    (0, Pe.Z)({ arg: Gc(n) }, u),
                                  ),
                                  headers: u.headers,
                                })
                                .catch(function (e) {
                                  r.unsubscribe(n, a), i(e);
                                })
                                .then(function (e) {
                                  clearTimeout(c),
                                    e &&
                                      (rf(e, {
                                        onMessage: function (e) {
                                          a &&
                                            ("function" !== typeof a
                                              ? "function" ===
                                                  typeof a.handleEvent &&
                                                a.handleEvent(e)
                                              : a(e));
                                        },
                                        onEnd: function () {
                                          return r.unsubscribe(n, a);
                                        },
                                        onError: u.onError,
                                      }),
                                      s());
                                }),
                              t.abrupt("return", o)
                            );
                          case 6:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  }),
                )),
                t.apply(this, arguments)
              );
            }
            return function (e, r) {
              return t.apply(this, arguments);
            };
          })(e);
        };
      function rf(e, r) {
        return tf.apply(this, arguments);
      }
      function tf() {
        return (tf = (0, U.Z)(
          (0, j.Z)().mark(function e(r, t) {
            var n, a, u, s, i, o, c, f, p;
            return (0, j.Z)().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (n = t.onMessage),
                        (a = t.onEnd),
                        (u = (u = t.onError) || $c),
                        (e.prev = 2),
                        (s = !1),
                        (i = !1),
                        (e.prev = 5),
                        (c = ti(r.ndjson()));
                    case 7:
                      return (e.next = 9), c.next();
                    case 9:
                      if (!(s = !(f = e.sent).done)) {
                        e.next = 24;
                        break;
                      }
                      if (((p = f.value), (e.prev = 11), p.from)) {
                        e.next = 14;
                        break;
                      }
                      return e.abrupt("continue", 21);
                    case 14:
                      n({
                        from: Qs(p.from),
                        data: Jc(p.data),
                        sequenceNumber: Kc(p.seqno),
                        topic: qc(p.topicIDs[0]),
                      }),
                        (e.next = 21);
                      break;
                    case 17:
                      (e.prev = 17),
                        (e.t0 = e.catch(11)),
                        (e.t0.message =
                          "Failed to parse pubsub message: ".concat(
                            e.t0.message,
                          )),
                        u(e.t0, !1, p);
                    case 21:
                      (s = !1), (e.next = 7);
                      break;
                    case 24:
                      e.next = 30;
                      break;
                    case 26:
                      (e.prev = 26), (e.t1 = e.catch(5)), (i = !0), (o = e.t1);
                    case 30:
                      if (
                        ((e.prev = 30), (e.prev = 31), !s || null == c.return)
                      ) {
                        e.next = 35;
                        break;
                      }
                      return (e.next = 35), c.return();
                    case 35:
                      if (((e.prev = 35), !i)) {
                        e.next = 38;
                        break;
                      }
                      throw o;
                    case 38:
                      return e.finish(35);
                    case 39:
                      return e.finish(30);
                    case 40:
                      e.next = 45;
                      break;
                    case 42:
                      (e.prev = 42),
                        (e.t2 = e.catch(2)),
                        nf(e.t2) || u(e.t2, !0);
                    case 45:
                      return (e.prev = 45), a(), e.finish(45);
                    case 48:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [
                [2, 42, 45, 48],
                [5, 26, 30, 40],
                [11, 17],
                [31, , 35, 39],
              ],
            );
          }),
        )).apply(this, arguments);
      }
      var nf = function (e) {
          switch (e.type) {
            case "aborted":
            case "abort":
              return !0;
            default:
              return "AbortError" === e.name;
          }
        },
        af = function (e, r) {
          function t() {
            return (t = (0, U.Z)(
              (0, j.Z)().mark(function e(t, n) {
                return (0, j.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        r.unsubscribe(t, n);
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e);
              }),
            )).apply(this, arguments);
          }
          return function (e, r) {
            return t.apply(this, arguments);
          };
        },
        uf = (function () {
          function e() {
            (0, N.Z)(this, e), (this._subs = new Map());
          }
          return (
            (0, R.Z)(e, [
              {
                key: "subscribe",
                value: function (e, r, t) {
                  var n = this,
                    a = this._subs.get(e) || [];
                  if (
                    a.find(function (e) {
                      return e.handler === r;
                    })
                  )
                    throw new Error(
                      "Already subscribed to ".concat(e, " with this handler"),
                    );
                  var u = new AbortController();
                  return (
                    this._subs.set(
                      e,
                      [{ handler: r, controller: u }].concat(a),
                    ),
                    t &&
                      t.addEventListener("abort", function () {
                        return n.unsubscribe(e, r);
                      }),
                    u.signal
                  );
                },
              },
              {
                key: "unsubscribe",
                value: function (e, r) {
                  var t,
                    n = this._subs.get(e) || [];
                  r
                    ? (this._subs.set(
                        e,
                        n.filter(function (e) {
                          return e.handler !== r;
                        }),
                      ),
                      (t = n.filter(function (e) {
                        return e.handler === r;
                      })))
                    : (this._subs.set(e, []), (t = n)),
                    (this._subs.get(e) || []).length || this._subs.delete(e),
                    t.forEach(function (e) {
                      return e.controller.abort();
                    });
                },
              },
            ]),
            e
          );
        })();
      function sf(e) {
        var r = new uf();
        return {
          ls: Yc(e),
          peers: Qc(e),
          publish: Xc(e),
          subscribe: ef(e, r),
          unsubscribe: af(e, r),
        };
      }
      var of = Qa(function (e) {
          function r() {
            return (
              (r = bi(function () {
                var r =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return (0, j.Z)().mark(function t() {
                  var n;
                  return (0, j.Z)().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.next = 2),
                            gi(
                              e.post("refs/local", {
                                signal: r.signal,
                                transform: Wi,
                                searchParams: tu(r),
                                headers: r.headers,
                              }),
                            )
                          );
                        case 2:
                          return (
                            (n = t.sent),
                            t.delegateYield(mi(ti(n.ndjson())), "t0", 4)
                          );
                        case 4:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })();
              })),
              r.apply(this, arguments)
            );
          }
          return function () {
            return r.apply(this, arguments);
          };
        }),
        cf = Qa(function (e, r) {
          var t = (function () {
            var r = bi(function (r) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              return (0, j.Z)().mark(function n() {
                var a, u;
                return (0, j.Z)().wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (a = Array.isArray(r) ? r : [r]),
                          (n.next = 3),
                          gi(
                            e.post("refs", {
                              signal: t.signal,
                              searchParams: tu(
                                (0, Pe.Z)(
                                  {
                                    arg: a.map(function (e) {
                                      return "".concat(
                                        e instanceof Uint8Array
                                          ? q.CID.decode(e)
                                          : e,
                                      );
                                    }),
                                  },
                                  t,
                                ),
                              ),
                              headers: t.headers,
                              transform: Wi,
                            }),
                          )
                        );
                      case 3:
                        return (
                          (u = n.sent),
                          n.delegateYield(mi(ti(u.ndjson())), "t0", 5)
                        );
                      case 5:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })();
            });
            return function (e) {
              return r.apply(this, arguments);
            };
          })();
          return Object.assign(t, { local: of(r) });
        }),
        ff = Qa(function (e) {
          function r() {
            return (
              (r = bi(function () {
                var r =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return (0, j.Z)().mark(function t() {
                  var n;
                  return (0, j.Z)().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.next = 2),
                            gi(
                              e.post("repo/gc", {
                                signal: r.signal,
                                searchParams: tu(r),
                                headers: r.headers,
                                transform: function (e) {
                                  return {
                                    err: e.Error ? new Error(e.Error) : null,
                                    cid: (e.Key || {})["/"]
                                      ? q.CID.parse(e.Key["/"])
                                      : null,
                                  };
                                },
                              }),
                            )
                          );
                        case 2:
                          return (
                            (n = t.sent),
                            t.delegateYield(mi(ti(n.ndjson())), "t0", 4)
                          );
                        case 4:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })();
              })),
              r.apply(this, arguments)
            );
          }
          return function () {
            return r.apply(this, arguments);
          };
        }),
        pf = Qa(function (e) {
          function r() {
            return (
              (r = (0, U.Z)(
                (0, j.Z)().mark(function r() {
                  var t,
                    n,
                    a,
                    u = arguments;
                  return (0, j.Z)().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (t = u.length > 0 && void 0 !== u[0] ? u[0] : {}),
                            (r.next = 3),
                            e.post("repo/stat", {
                              signal: t.signal,
                              searchParams: tu(t),
                              headers: t.headers,
                            })
                          );
                        case 3:
                          return (n = r.sent), (r.next = 6), n.json();
                        case 6:
                          return (
                            (a = r.sent),
                            r.abrupt("return", {
                              numObjects: BigInt(a.NumObjects),
                              repoSize: BigInt(a.RepoSize),
                              repoPath: a.RepoPath,
                              version: a.Version,
                              storageMax: BigInt(a.StorageMax),
                            })
                          );
                        case 8:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )),
              r.apply(this, arguments)
            );
          }
          return function () {
            return r.apply(this, arguments);
          };
        }),
        hf = Qa(function (e) {
          function r() {
            return (
              (r = (0, U.Z)(
                (0, j.Z)().mark(function r() {
                  var t,
                    n,
                    a = arguments;
                  return (0, j.Z)().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (t = a.length > 0 && void 0 !== a[0] ? a[0] : {}),
                            (r.next = 3),
                            e.post("repo/version", {
                              signal: t.signal,
                              searchParams: tu(t),
                              headers: t.headers,
                            })
                          );
                        case 3:
                          return (r.next = 5), r.sent.json();
                        case 5:
                          return (n = r.sent), r.abrupt("return", n.Version);
                        case 7:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )),
              r.apply(this, arguments)
            );
          }
          return function () {
            return r.apply(this, arguments);
          };
        });
      function lf(e) {
        return { gc: ff(e), stat: pf(e), version: hf(e) };
      }
      var df = Qa(function (e) {
        function r() {
          return (
            (r = bi(function () {
              var r =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              return (0, j.Z)().mark(function t() {
                var n;
                return (0, j.Z)().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.next = 2),
                          gi(
                            e.post("stats/bw", {
                              signal: r.signal,
                              searchParams: tu(r),
                              headers: r.headers,
                              transform: function (e) {
                                return {
                                  totalIn: BigInt(e.TotalIn),
                                  totalOut: BigInt(e.TotalOut),
                                  rateIn: parseFloat(e.RateIn),
                                  rateOut: parseFloat(e.RateOut),
                                };
                              },
                            }),
                          )
                        );
                      case 2:
                        return (
                          (n = t.sent),
                          t.delegateYield(mi(ti(n.ndjson())), "t0", 4)
                        );
                      case 4:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })();
            })),
            r.apply(this, arguments)
          );
        }
        return function () {
          return r.apply(this, arguments);
        };
      });
      function vf(e) {
        return { bitswap: Xs(e), repo: pf(e), bw: df(e) };
      }
      var yf = Qa(function (e) {
          function r() {
            return (
              (r = (0, U.Z)(
                (0, j.Z)().mark(function r() {
                  var t,
                    n,
                    a,
                    u,
                    s = arguments;
                  return (0, j.Z)().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (t = s.length > 0 && void 0 !== s[0] ? s[0] : {}),
                            (r.next = 3),
                            e.post("swarm/addrs", {
                              signal: t.signal,
                              searchParams: tu(t),
                              headers: t.headers,
                            })
                          );
                        case 3:
                          return (n = r.sent), (r.next = 6), n.json();
                        case 6:
                          return (
                            (a = r.sent),
                            (u = a.Addrs),
                            r.abrupt(
                              "return",
                              Object.keys(u).map(function (e) {
                                return {
                                  id: Qs(e),
                                  addrs: (u[e] || []).map(function (e) {
                                    return new Or(e);
                                  }),
                                };
                              }),
                            )
                          );
                        case 9:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )),
              r.apply(this, arguments)
            );
          }
          return function () {
            return r.apply(this, arguments);
          };
        }),
        bf = Qa(function (e) {
          function r() {
            return (
              (r = (0, U.Z)(
                (0, j.Z)().mark(function r(t) {
                  var n,
                    a,
                    u,
                    s,
                    i = arguments;
                  return (0, j.Z)().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (n = i.length > 1 && void 0 !== i[1] ? i[1] : {}),
                            (r.next = 3),
                            e.post("swarm/connect", {
                              signal: n.signal,
                              searchParams: tu((0, Pe.Z)({ arg: t }, n)),
                              headers: n.headers,
                            })
                          );
                        case 3:
                          return (a = r.sent), (r.next = 6), a.json();
                        case 6:
                          return (
                            (u = r.sent),
                            (s = u.Strings),
                            r.abrupt("return", s || [])
                          );
                        case 9:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )),
              r.apply(this, arguments)
            );
          }
          return function (e) {
            return r.apply(this, arguments);
          };
        }),
        gf = Qa(function (e) {
          function r() {
            return (
              (r = (0, U.Z)(
                (0, j.Z)().mark(function r(t) {
                  var n,
                    a,
                    u,
                    s,
                    i = arguments;
                  return (0, j.Z)().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (n = i.length > 1 && void 0 !== i[1] ? i[1] : {}),
                            (r.next = 3),
                            e.post("swarm/disconnect", {
                              signal: n.signal,
                              searchParams: tu((0, Pe.Z)({ arg: t }, n)),
                              headers: n.headers,
                            })
                          );
                        case 3:
                          return (a = r.sent), (r.next = 6), a.json();
                        case 6:
                          return (
                            (u = r.sent),
                            (s = u.Strings),
                            r.abrupt("return", s || [])
                          );
                        case 9:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )),
              r.apply(this, arguments)
            );
          }
          return function (e) {
            return r.apply(this, arguments);
          };
        }),
        mf = Qa(function (e) {
          function r() {
            return (
              (r = (0, U.Z)(
                (0, j.Z)().mark(function r() {
                  var t,
                    n,
                    a,
                    u,
                    s = arguments;
                  return (0, j.Z)().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (t = s.length > 0 && void 0 !== s[0] ? s[0] : {}),
                            (r.next = 3),
                            e.post("swarm/addrs/local", {
                              signal: t.signal,
                              searchParams: tu(t),
                              headers: t.headers,
                            })
                          );
                        case 3:
                          return (n = r.sent), (r.next = 6), n.json();
                        case 6:
                          return (
                            (a = r.sent),
                            (u = a.Strings),
                            r.abrupt(
                              "return",
                              (u || []).map(function (e) {
                                return new Or(e);
                              }),
                            )
                          );
                        case 9:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )),
              r.apply(this, arguments)
            );
          }
          return function () {
            return r.apply(this, arguments);
          };
        }),
        wf = Qa(function (e) {
          function r() {
            return (
              (r = (0, U.Z)(
                (0, j.Z)().mark(function r() {
                  var t,
                    n,
                    a,
                    u,
                    s = arguments;
                  return (0, j.Z)().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (t = s.length > 0 && void 0 !== s[0] ? s[0] : {}),
                            (r.next = 3),
                            e.post("swarm/peers", {
                              signal: t.signal,
                              searchParams: tu(t),
                              headers: t.headers,
                            })
                          );
                        case 3:
                          return (n = r.sent), (r.next = 6), n.json();
                        case 6:
                          return (
                            (a = r.sent),
                            (u = a.Peers),
                            r.abrupt(
                              "return",
                              (u || []).map(function (e) {
                                return {
                                  addr: new Or(e.Addr),
                                  peer: Qs(e.Peer),
                                  muxer: e.Muxer,
                                  latency: e.Latency,
                                  streams: e.Streams,
                                  direction:
                                    null == e.Direction
                                      ? void 0
                                      : 0 === e.Direction
                                        ? "inbound"
                                        : "outbound",
                                };
                              }),
                            )
                          );
                        case 9:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )),
              r.apply(this, arguments)
            );
          }
          return function () {
            return r.apply(this, arguments);
          };
        });
      function Df(e) {
        return {
          addrs: yf(e),
          connect: bf(e),
          disconnect: gf(e),
          localAddrs: mf(e),
          peers: wf(e),
        };
      }
      var xf = Qa(function (e) {
          function r() {
            return (
              (r = bi(function (r) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                return (0, j.Z)().mark(function n() {
                  var a, u, s, i, o, c, f, p, h, l, d, v, y, b, g, m, w, D;
                  return (0, j.Z)().wrap(
                    function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (a = new AbortController()),
                              (u = Pi(a.signal, t.signal)),
                              (n.next = 4),
                              gi(Ci(r, a, t.headers))
                            );
                          case 4:
                            return (
                              (s = n.sent),
                              (i = s.headers),
                              (o = s.body),
                              (c = s.total),
                              (f = s.parts),
                              (p =
                                "function" === typeof t.progress
                                  ? kf(c, f, t.progress)
                                  : [void 0, void 0]),
                              (h = (0, Fe.Z)(p, 2)),
                              (l = h[0]),
                              (d = h[1]),
                              (n.next = 12),
                              gi(
                                e.post("add", {
                                  searchParams: tu(
                                    (0, Pe.Z)(
                                      (0, Pe.Z)({ "stream-channels": !0 }, t),
                                      {},
                                      { progress: Boolean(l) },
                                    ),
                                  ),
                                  onUploadProgress: d,
                                  signal: u,
                                  headers: i,
                                  body: o,
                                }),
                              )
                            );
                          case 12:
                            (v = n.sent),
                              (y = !1),
                              (b = !1),
                              (n.prev = 15),
                              (m = ti(v.ndjson()));
                          case 17:
                            return (n.next = 19), gi(m.next());
                          case 19:
                            if (!(y = !(w = n.sent).done)) {
                              n.next = 31;
                              break;
                            }
                            if (void 0 === (D = Wi((D = w.value))).hash) {
                              n.next = 27;
                              break;
                            }
                            return (n.next = 25), Zf(D);
                          case 25:
                            n.next = 28;
                            break;
                          case 27:
                            l && l(D.bytes || 0, D.name);
                          case 28:
                            (y = !1), (n.next = 17);
                            break;
                          case 31:
                            n.next = 37;
                            break;
                          case 33:
                            (n.prev = 33),
                              (n.t0 = n.catch(15)),
                              (b = !0),
                              (g = n.t0);
                          case 37:
                            if (
                              ((n.prev = 37),
                              (n.prev = 38),
                              !y || null == m.return)
                            ) {
                              n.next = 42;
                              break;
                            }
                            return (n.next = 42), gi(m.return());
                          case 42:
                            if (((n.prev = 42), !b)) {
                              n.next = 45;
                              break;
                            }
                            throw g;
                          case 45:
                            return n.finish(42);
                          case 46:
                            return n.finish(37);
                          case 47:
                          case "end":
                            return n.stop();
                        }
                    },
                    n,
                    null,
                    [
                      [15, 33, 37, 47],
                      [38, , 42, 46],
                    ],
                  );
                })();
              })),
              r.apply(this, arguments)
            );
          }
          return function (e) {
            return r.apply(this, arguments);
          };
        }),
        kf = function (e, r, t) {
          return r ? [void 0, Ef(e, r, t)] : [t, void 0];
        },
        Ef = function (e, r, t) {
          var n = 0,
            a = r.length;
          return function (u) {
            for (
              var s = u.loaded, i = u.total, o = Math.floor((s / i) * e);
              n < a;

            ) {
              var c = r[n],
                f = c.start,
                p = c.end,
                h = c.name;
              if (o < p) {
                t(o - f, h);
                break;
              }
              t(p - f, h), (n += 1);
            }
          };
        };
      function Zf(e) {
        var r = e.name,
          t = e.hash,
          n = e.size,
          a = e.mode,
          u = e.mtime,
          s = e.mtimeNsecs,
          i = { path: r, cid: q.CID.parse(t), size: parseInt(n) };
        return (
          null != a && (i.mode = parseInt(a, 8)),
          null != u && (i.mtime = { secs: u, nsecs: s || 0 }),
          i
        );
      }
      var Af = t(76759);
      function Cf(e) {
        return Ff.apply(this, arguments);
      }
      function Ff() {
        return (Ff = bi(
          (0, j.Z)().mark(function e(r) {
            return (0, j.Z)().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), r;
                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      function Bf(e) {
        return Pf.apply(this, arguments);
      }
      function Pf() {
        return (Pf = (0, U.Z)(
          (0, j.Z)().mark(function e(r) {
            var t, n, a;
            return (0, j.Z)().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (!ii(r)) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return", Cf(Sf(r)));
                  case 2:
                    if (!("string" === typeof r || r instanceof String)) {
                      e.next = 4;
                      break;
                    }
                    return e.abrupt("return", Cf(Sf(r.toString())));
                  case 4:
                    if (!oi(r)) {
                      e.next = 6;
                      break;
                    }
                    return e.abrupt("return", Af(r));
                  case 6:
                    if (
                      (fi(r) && (r = ui(r)),
                      !(Symbol.iterator in r) && !(Symbol.asyncIterator in r))
                    ) {
                      e.next = 27;
                      break;
                    }
                    return (t = ai(r)), (e.next = 11), t.peek();
                  case 11:
                    if (((n = e.sent), (a = n.value), !n.done)) {
                      e.next = 16;
                      break;
                    }
                    return e.abrupt("return", Cf(new Uint8Array(0)));
                  case 16:
                    if ((t.push(a), !Number.isInteger(a))) {
                      e.next = 25;
                      break;
                    }
                    return (
                      (e.t0 = Cf), (e.t1 = Uint8Array), (e.next = 22), si(t)
                    );
                  case 22:
                    return (
                      (e.t2 = e.sent),
                      (e.t3 = e.t1.from.call(e.t1, e.t2)),
                      e.abrupt("return", (0, e.t0)(e.t3))
                    );
                  case 25:
                    if (
                      !(ii(a) || "string" === typeof a || a instanceof String)
                    ) {
                      e.next = 27;
                      break;
                    }
                    return e.abrupt("return", wi(t, Sf));
                  case 27:
                    throw Sr(
                      new Error("Unexpected input: ".concat(r)),
                      "ERR_UNEXPECTED_INPUT",
                    );
                  case 28:
                  case "end":
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      function Sf(e) {
        return e instanceof Uint8Array
          ? e
          : ArrayBuffer.isView(e)
            ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
            : e instanceof ArrayBuffer
              ? new Uint8Array(e)
              : Array.isArray(e)
                ? Uint8Array.from(e)
                : (0, fr.fromString)(e.toString());
      }
      function If() {
        return (
          (If = bi(
            (0, j.Z)().mark(function e(r, t) {
              var n, a, u;
              return (0, j.Z)().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (null !== r && void 0 !== r) {
                        e.next = 2;
                        break;
                      }
                      throw Sr(
                        new Error("Unexpected input: ".concat(r)),
                        "ERR_UNEXPECTED_INPUT",
                      );
                    case 2:
                      if (!("string" === typeof r || r instanceof String)) {
                        e.next = 6;
                        break;
                      }
                      return (e.next = 5), jf(r.toString(), t);
                    case 5:
                    case 9:
                    case 21:
                    case 26:
                    case 31:
                      return e.abrupt("return");
                    case 6:
                      if (!ii(r) && !oi(r)) {
                        e.next = 10;
                        break;
                      }
                      return (e.next = 9), jf(r, t);
                    case 10:
                      if (
                        (fi(r) && (r = ui(r)),
                        !(Symbol.iterator in r) && !(Symbol.asyncIterator in r))
                      ) {
                        e.next = 28;
                        break;
                      }
                      return (n = ai(r)), (e.next = 15), gi(n.peek());
                    case 15:
                      if (((a = e.sent), (u = a.value), !a.done)) {
                        e.next = 22;
                        break;
                      }
                      return (e.next = 21), { content: [] };
                    case 22:
                      if (
                        (n.push(u),
                        !(
                          Number.isInteger(u) ||
                          ii(u) ||
                          "string" === typeof u ||
                          u instanceof String
                        ))
                      ) {
                        e.next = 27;
                        break;
                      }
                      return (e.next = 26), jf(n, t);
                    case 27:
                      throw Sr(
                        new Error(
                          "Unexpected input: multiple items passed - if you are using ipfs.add, please use ipfs.addAll instead",
                        ),
                        "ERR_UNEXPECTED_INPUT",
                      );
                    case 28:
                      if (!ci(r)) {
                        e.next = 32;
                        break;
                      }
                      return (e.next = 31), jf(r, t);
                    case 32:
                      throw Sr(
                        new Error(
                          'Unexpected input: cannot convert "' +
                            typeof r +
                            '" into ImportCandidate',
                        ),
                        "ERR_UNEXPECTED_INPUT",
                      );
                    case 33:
                    case "end":
                      return e.stop();
                  }
              }, e);
            }),
          )),
          If.apply(this, arguments)
        );
      }
      function jf(e, r) {
        return Uf.apply(this, arguments);
      }
      function Uf() {
        return (
          (Uf = (0, U.Z)(
            (0, j.Z)().mark(function e(r, t) {
              var n, a, u, s, i;
              return (0, j.Z)().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((n = r.path),
                        (a = r.mode),
                        (u = r.mtime),
                        (s = r.content),
                        (i = {
                          path: n || "",
                          mode: (0, Di.parseMode)(a),
                          mtime: (0, Di.parseMtime)(u),
                        }),
                        !s)
                      ) {
                        e.next = 8;
                        break;
                      }
                      return (e.next = 5), t(s);
                    case 5:
                      (i.content = e.sent), (e.next = 12);
                      break;
                    case 8:
                      if (n) {
                        e.next = 12;
                        break;
                      }
                      return (e.next = 11), t(r);
                    case 11:
                      i.content = e.sent;
                    case 12:
                      return e.abrupt("return", i);
                    case 13:
                    case "end":
                      return e.stop();
                  }
              }, e);
            }),
          )),
          Uf.apply(this, arguments)
        );
      }
      function Tf(e) {
        return (function (e, r) {
          return If.apply(this, arguments);
        })(e, Bf);
      }
      function Nf(e) {
        var r = xf(e);
        return Qa(function () {
          function e() {
            return (
              (e = (0, U.Z)(
                (0, j.Z)().mark(function e(t) {
                  var n,
                    a = arguments;
                  return (0, j.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = a.length > 1 && void 0 !== a[1] ? a[1] : {}),
                            (e.next = 3),
                            to(r(Tf(t), n))
                          );
                        case 3:
                          return e.abrupt("return", e.sent);
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              )),
              e.apply(this, arguments)
            );
          }
          return function (r) {
            return e.apply(this, arguments);
          };
        })(e);
      }
      var Rf = Qa(function (e) {
          function r() {
            return (
              (r = bi(function (r) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                return (0, j.Z)().mark(function n() {
                  var a;
                  return (0, j.Z)().wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.next = 2),
                            gi(
                              e.post("cat", {
                                signal: t.signal,
                                searchParams: tu(
                                  (0, Pe.Z)({ arg: r.toString() }, t),
                                ),
                                headers: t.headers,
                              }),
                            )
                          );
                        case 2:
                          return (
                            (a = n.sent),
                            n.delegateYield(mi(ti(a.iterator())), "t0", 4)
                          );
                        case 4:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })();
              })),
              r.apply(this, arguments)
            );
          }
          return function (e) {
            return r.apply(this, arguments);
          };
        }),
        Of = Qa(function (e) {
          var r = (function () {
            var r = (0, U.Z)(
              (0, j.Z)().mark(function r() {
                var t,
                  n,
                  a = arguments;
                return (0, j.Z)().wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (t = a.length > 0 && void 0 !== a[0] ? a[0] : {}),
                          (r.next = 3),
                          e.post("commands", {
                            signal: t.signal,
                            searchParams: tu(t),
                            headers: t.headers,
                          })
                        );
                      case 3:
                        return (n = r.sent), r.abrupt("return", n.json());
                      case 5:
                      case "end":
                        return r.stop();
                    }
                }, r);
              }),
            );
            return function () {
              return r.apply(this, arguments);
            };
          })();
          return r;
        }),
        _f = Qa(function (e) {
          var r = (function () {
            var r = (0, U.Z)(
              (0, j.Z)().mark(function r(t) {
                var n,
                  a,
                  u,
                  s = arguments;
                return (0, j.Z)().wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (n = s.length > 1 && void 0 !== s[1] ? s[1] : {}),
                          (r.next = 3),
                          e.post("dns", {
                            signal: n.signal,
                            searchParams: tu((0, Pe.Z)({ arg: t }, n)),
                            headers: n.headers,
                          })
                        );
                      case 3:
                        return (a = r.sent), (r.next = 6), a.json();
                      case 6:
                        return (u = r.sent), r.abrupt("return", u.Path);
                      case 8:
                      case "end":
                        return r.stop();
                    }
                }, r);
              }),
            );
            return function (e) {
              return r.apply(this, arguments);
            };
          })();
          return r;
        }),
        Mf = Qa(function (e) {
          return function () {
            var r = new URL(e.opts.base || "");
            return {
              host: r.hostname,
              port: r.port,
              protocol: r.protocol,
              pathname: r.pathname,
              "api-path": r.pathname,
            };
          };
        }),
        Lf = Qa(function (e) {
          function r() {
            return (
              (r = bi(function (r) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                return (0, j.Z)().mark(function n() {
                  var a, u;
                  return (0, j.Z)().wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (a = (0, Pe.Z)(
                              {
                                arg: "".concat(
                                  r instanceof Uint8Array ? q.CID.decode(r) : r,
                                ),
                              },
                              t,
                            )).compressionLevel &&
                              ((a["compression-level"] = a.compressionLevel),
                              delete a.compressionLevel),
                            (n.next = 4),
                            gi(
                              e.post("get", {
                                signal: t.signal,
                                searchParams: tu(a),
                                headers: t.headers,
                              }),
                            )
                          );
                        case 4:
                          return (
                            (u = n.sent),
                            n.delegateYield(mi(ti(u.iterator())), "t0", 6)
                          );
                        case 6:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })();
              })),
              r.apply(this, arguments)
            );
          }
          return function (e) {
            return r.apply(this, arguments);
          };
        }),
        zf = Qa(function (e) {
          function r() {
            return (
              (r = (0, U.Z)(
                (0, j.Z)().mark(function r() {
                  var t,
                    n,
                    a,
                    u,
                    s = arguments;
                  return (0, j.Z)().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (t = s.length > 0 && void 0 !== s[0] ? s[0] : {}),
                            (r.next = 3),
                            e.post("id", {
                              signal: t.signal,
                              searchParams: tu(
                                (0, Pe.Z)(
                                  {
                                    arg: t.peerId
                                      ? t.peerId.toString()
                                      : void 0,
                                  },
                                  t,
                                ),
                              ),
                              headers: t.headers,
                            })
                          );
                        case 3:
                          return (n = r.sent), (r.next = 6), n.json();
                        case 6:
                          return (
                            (a = r.sent),
                            ((u = (0, Pe.Z)({}, Wi(a))).id = Qs(u.id)),
                            u.addresses &&
                              (u.addresses = u.addresses.map(function (e) {
                                return new Or(e);
                              })),
                            r.abrupt("return", u)
                          );
                        case 11:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )),
              r.apply(this, arguments)
            );
          }
          return function () {
            return r.apply(this, arguments);
          };
        }),
        Wf = function (e) {
          var r = zf(e);
          function t() {
            return (
              (t = (0, U.Z)(
                (0, j.Z)().mark(function e() {
                  var t,
                    n,
                    a = arguments;
                  return (0, j.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = a.length > 0 && void 0 !== a[0] ? a[0] : {}),
                            (e.next = 3),
                            r(t)
                          );
                        case 3:
                          return (
                            (n = e.sent),
                            e.abrupt(
                              "return",
                              Boolean(n && n.addresses && n.addresses.length),
                            )
                          );
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              )),
              t.apply(this, arguments)
            );
          }
          return function () {
            return t.apply(this, arguments);
          };
        },
        Vf = Qa(function (e, r) {
          function t() {
            return (
              (t = bi(function (t) {
                var n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                return (0, j.Z)().mark(function a() {
                  var u, s, i, o, c, f, p, h, l, d, v;
                  return (0, j.Z)().wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (
                              (i = function () {
                                return (i = (0, U.Z)(
                                  (0, j.Z)().mark(function e(t) {
                                    var n, a, s, i;
                                    return (0, j.Z)().wrap(function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            if (!(n = t.Hash).includes("/")) {
                                              e.next = 9;
                                              break;
                                            }
                                            return (
                                              (a = n.startsWith("/ipfs/")
                                                ? n
                                                : "/ipfs/".concat(n)),
                                              (e.next = 5),
                                              Io(r)(a)
                                            );
                                          case 5:
                                            (s = e.sent),
                                              (n = s.cid),
                                              (e.next = 10);
                                            break;
                                          case 9:
                                            n = q.CID.parse(n);
                                          case 10:
                                            return (
                                              (i = {
                                                name: t.Name,
                                                path:
                                                  u +
                                                  (t.Name
                                                    ? "/".concat(t.Name)
                                                    : ""),
                                                size: t.Size,
                                                cid: n,
                                                type: Hf(t),
                                              }),
                                              t.Mode &&
                                                (i.mode = parseInt(t.Mode, 8)),
                                              void 0 !== t.Mtime &&
                                                null !== t.Mtime &&
                                                ((i.mtime = { secs: t.Mtime }),
                                                void 0 !== t.MtimeNsecs &&
                                                  null !== t.MtimeNsecs &&
                                                  (i.mtime.nsecs =
                                                    t.MtimeNsecs)),
                                              e.abrupt("return", i)
                                            );
                                          case 14:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                  }),
                                )).apply(this, arguments);
                              }),
                              (s = function (e) {
                                return i.apply(this, arguments);
                              }),
                              (u = "".concat(
                                t instanceof Uint8Array ? q.CID.decode(t) : t,
                              )),
                              (a.next = 5),
                              gi(
                                e.post("ls", {
                                  signal: n.signal,
                                  searchParams: tu((0, Pe.Z)({ arg: u }, n)),
                                  headers: n.headers,
                                }),
                              )
                            );
                          case 5:
                            (o = a.sent),
                              (c = !1),
                              (f = !1),
                              (a.prev = 8),
                              (h = ti(o.ndjson()));
                          case 10:
                            return (a.next = 12), gi(h.next());
                          case 12:
                            if (!(c = !(l = a.sent).done)) {
                              a.next = 31;
                              break;
                            }
                            if ((d = (d = l.value).Objects)) {
                              a.next = 17;
                              break;
                            }
                            throw new Error("expected .Objects in results");
                          case 17:
                            if ((d = d[0])) {
                              a.next = 20;
                              break;
                            }
                            throw new Error(
                              "expected one array in results.Objects",
                            );
                          case 20:
                            if (((v = d.Links), Array.isArray(v))) {
                              a.next = 23;
                              break;
                            }
                            throw new Error(
                              "expected one array in results.Objects[0].Links",
                            );
                          case 23:
                            if (v.length) {
                              a.next = 27;
                              break;
                            }
                            return (a.next = 26), s(d);
                          case 26:
                            return a.abrupt("return");
                          case 27:
                            return a.delegateYield(mi(ti(v.map(s))), "t0", 28);
                          case 28:
                            (c = !1), (a.next = 10);
                            break;
                          case 31:
                            a.next = 37;
                            break;
                          case 33:
                            (a.prev = 33),
                              (a.t1 = a.catch(8)),
                              (f = !0),
                              (p = a.t1);
                          case 37:
                            if (
                              ((a.prev = 37),
                              (a.prev = 38),
                              !c || null == h.return)
                            ) {
                              a.next = 42;
                              break;
                            }
                            return (a.next = 42), gi(h.return());
                          case 42:
                            if (((a.prev = 42), !f)) {
                              a.next = 45;
                              break;
                            }
                            throw p;
                          case 45:
                            return a.finish(42);
                          case 46:
                            return a.finish(37);
                          case 47:
                          case "end":
                            return a.stop();
                        }
                    },
                    a,
                    null,
                    [
                      [8, 33, 37, 47],
                      [38, , 42, 46],
                    ],
                  );
                })();
              })),
              t.apply(this, arguments)
            );
          }
          return function (e) {
            return t.apply(this, arguments);
          };
        });
      function Hf(e) {
        switch (e.Type) {
          case 1:
          case 5:
            return "dir";
          default:
            return "file";
        }
      }
      var qf = Qa(function (e) {
          function r() {
            return (
              (r = (0, U.Z)(
                (0, j.Z)().mark(function r() {
                  var t,
                    n,
                    a = arguments;
                  return (0, j.Z)().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (t = a.length > 0 && void 0 !== a[0] ? a[0] : {}),
                            (r.next = 3),
                            e.post("dns", {
                              signal: t.signal,
                              searchParams: tu(t),
                              headers: t.headers,
                            })
                          );
                        case 3:
                          return (
                            (n = r.sent), (r.t0 = Wi), (r.next = 7), n.json()
                          );
                        case 7:
                          return (
                            (r.t1 = r.sent), r.abrupt("return", (0, r.t0)(r.t1))
                          );
                        case 9:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )),
              r.apply(this, arguments)
            );
          }
          return function () {
            return r.apply(this, arguments);
          };
        }),
        Jf = Qa(function (e) {
          function r() {
            return (
              (r = bi(function (r) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                return (0, j.Z)().mark(function n() {
                  var a;
                  return (0, j.Z)().wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.next = 2),
                            gi(
                              e.post("ping", {
                                signal: t.signal,
                                searchParams: tu(
                                  (0, Pe.Z)({ arg: "".concat(r) }, t),
                                ),
                                headers: t.headers,
                                transform: Wi,
                              }),
                            )
                          );
                        case 2:
                          return (
                            (a = n.sent),
                            n.delegateYield(mi(ti(a.ndjson())), "t0", 4)
                          );
                        case 4:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })();
              })),
              r.apply(this, arguments)
            );
          }
          return function (e) {
            return r.apply(this, arguments);
          };
        }),
        Kf = Qa(function (e) {
          function r() {
            return (
              (r = (0, U.Z)(
                (0, j.Z)().mark(function r(t) {
                  var n,
                    a,
                    u,
                    s,
                    i = arguments;
                  return (0, j.Z)().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (n = i.length > 1 && void 0 !== i[1] ? i[1] : {}),
                            (r.next = 3),
                            e.post("resolve", {
                              signal: n.signal,
                              searchParams: tu((0, Pe.Z)({ arg: t }, n)),
                              headers: n.headers,
                            })
                          );
                        case 3:
                          return (a = r.sent), (r.next = 6), a.json();
                        case 6:
                          return (
                            (u = r.sent), (s = u.Path), r.abrupt("return", s)
                          );
                        case 9:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )),
              r.apply(this, arguments)
            );
          }
          return function (e) {
            return r.apply(this, arguments);
          };
        }),
        Gf = Qa(function (e) {
          var r = (function () {
            var e = (0, U.Z)(
              (0, j.Z)().mark(function e() {
                var r = arguments;
                return (0, j.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        throw (
                          (r.length > 0 && void 0 !== r[0] ? r[0] : {},
                          Sr(
                            new Error("Not implemented"),
                            "ERR_NOT_IMPLEMENTED",
                          ))
                        );
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              }),
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
          return r;
        }),
        Yf = Qa(function (e) {
          function r() {
            return (
              (r = (0, U.Z)(
                (0, j.Z)().mark(function r() {
                  var t,
                    n,
                    a = arguments;
                  return (0, j.Z)().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (t = a.length > 0 && void 0 !== a[0] ? a[0] : {}),
                            (r.next = 3),
                            e.post("shutdown", {
                              signal: t.signal,
                              searchParams: tu(t),
                              headers: t.headers,
                            })
                          );
                        case 3:
                          return (n = r.sent), (r.next = 6), n.text();
                        case 6:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )),
              r.apply(this, arguments)
            );
          }
          return function () {
            return r.apply(this, arguments);
          };
        }),
        Qf = Qa(function (e) {
          function r() {
            return (
              (r = (0, U.Z)(
                (0, j.Z)().mark(function r() {
                  var t,
                    n,
                    a = arguments;
                  return (0, j.Z)().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (t = a.length > 0 && void 0 !== a[0] ? a[0] : {}),
                            (r.next = 3),
                            e.post("version", {
                              signal: t.signal,
                              searchParams: tu(t),
                              headers: t.headers,
                            })
                          );
                        case 3:
                          return (
                            (n = r.sent),
                            (r.t0 = Pe.Z),
                            (r.t1 = Pe.Z),
                            (r.t2 = {}),
                            (r.t3 = Wi),
                            (r.next = 10),
                            n.json()
                          );
                        case 10:
                          return (
                            (r.t4 = r.sent),
                            (r.t5 = (0, r.t3)(r.t4)),
                            (r.t6 = (0, r.t1)(r.t2, r.t5)),
                            (r.t7 = {}),
                            (r.t8 = { "ipfs-http-client": "1.0.0" }),
                            r.abrupt("return", (0, r.t0)(r.t6, r.t7, r.t8))
                          );
                        case 16:
                        case "end":
                          return r.stop();
                      }
                  }, r);
                }),
              )),
              r.apply(this, arguments)
            );
          }
          return function () {
            return r.apply(this, arguments);
          };
        }),
        Xf = t(776),
        $f = t(52586);
      function ep() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          r = {
            name: Ae.identity.name,
            code: Ae.identity.code,
            encode: function (e) {
              return e;
            },
            decode: function (e) {
              return e;
            },
          },
          t = Object.values(Ce.bases);
        (e.ipld && e.ipld.bases ? e.ipld.bases : []).forEach(function (e) {
          return t.push(e);
        });
        var u = new _({ bases: t, loadBase: e.ipld && e.ipld.loadBase }),
          s = Object.values(Ce.codecs);
        [V, n, a, Ze, r]
          .concat((e.ipld && e.ipld.codecs) || [])
          .forEach(function (e) {
            return s.push(e);
          });
        var i = new L({ codecs: s, loadCodec: e.ipld && e.ipld.loadCodec }),
          o = Object.values(Ce.hashes);
        (e.ipld && e.ipld.hashers ? e.ipld.hashers : []).forEach(function (e) {
          return o.push(e);
        });
        var c,
          f = new W({ hashers: o, loadHasher: e.ipld && e.ipld.loadHasher });
        return {
          add: Nf(e),
          addAll: xf(e),
          bitswap:
            ((c = e),
            {
              wantlist: nu(c),
              wantlistForPeer: au(c),
              unwant: ei(c),
              stat: Xs(c),
            }),
          block: Ti(e),
          bootstrap: Li(e),
          cat: Rf(e),
          commands: Of(e),
          config: Qi(e),
          dag: io(i, e),
          dht: yo(e),
          diag: wo(e),
          dns: _f(e),
          files: No(e),
          get: Lf(e),
          getEndpointConfig: Mf(e),
          id: zf(e),
          isOnline: Wf(e),
          key: Vo(e),
          log: Ko(e),
          ls: Vf(e),
          mount: qf(e),
          name: rc(e),
          object: lc(i, e),
          pin: Vc(e),
          ping: Jf(e),
          pubsub: sf(e),
          refs: cf(e),
          repo: lf(e),
          resolve: Kf(e),
          start: Gf(e),
          stats: vf(e),
          stop: Yf(e),
          swarm: Df(e),
          version: Qf(e),
          bases: u,
          codecs: i,
          hashers: f,
        };
      }
      var rp = Xf;
    },
  },
]);
//# sourceMappingURL=187.9a042d8e.chunk.js.map
