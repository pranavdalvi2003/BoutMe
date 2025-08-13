(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, {
    childList: !0,
    subtree: !0,
  });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
var Wu = {
    exports: {},
  },
  nl = {},
  Ku = {
    exports: {},
  },
  j = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gn = Symbol.for("react.element"),
  uc = Symbol.for("react.portal"),
  sc = Symbol.for("react.fragment"),
  ac = Symbol.for("react.strict_mode"),
  cc = Symbol.for("react.profiler"),
  dc = Symbol.for("react.provider"),
  fc = Symbol.for("react.context"),
  pc = Symbol.for("react.forward_ref"),
  Ac = Symbol.for("react.suspense"),
  mc = Symbol.for("react.memo"),
  gc = Symbol.for("react.lazy"),
  Fi = Symbol.iterator;
function hc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Fi && e[Fi]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ju = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Gu = Object.assign,
  Zu = {};
function ln(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Zu),
    (this.updater = n || Ju);
}
ln.prototype.isReactComponent = {};
ln.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
ln.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function qu() {}
qu.prototype = ln.prototype;
function Yo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Zu),
    (this.updater = n || Ju);
}
var Vo = (Yo.prototype = new qu());
Vo.constructor = Yo;
Gu(Vo, ln.prototype);
Vo.isPureReactComponent = !0;
var Di = Array.isArray,
  bu = Object.prototype.hasOwnProperty,
  Ho = {
    current: null,
  },
  _u = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0,
  };
function $u(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      bu.call(t, r) && !_u.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), d = 0; d < u; d++) s[d] = arguments[d + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: Gn,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Ho.current,
  };
}
function vc(e, t) {
  return {
    $$typeof: Gn,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Xo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Gn;
}
function yc(e) {
  var t = {
    "=": "=0",
    ":": "=2",
  };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Oi = /\/+/g;
function xl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? yc("" + e.key)
    : t.toString(36);
}
function wr(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Gn:
          case uc:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + xl(i, 0) : r),
      Di(l)
        ? ((n = ""),
          e != null && (n = e.replace(Oi, "$&/") + "/"),
          wr(l, t, n, "", function (d) {
            return d;
          }))
        : l != null &&
          (Xo(l) &&
            (l = vc(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Oi, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Di(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + xl(o, u);
      i += wr(o, t, n, s, l);
    }
  else if (((s = hc(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + xl(o, u++)), (i += wr(o, t, n, s, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function tr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    wr(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function wc(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ue = {
    current: null,
  },
  xr = {
    transition: null,
  },
  xc = {
    ReactCurrentDispatcher: ue,
    ReactCurrentBatchConfig: xr,
    ReactCurrentOwner: Ho,
  };
function es() {
  throw Error("act(...) is not supported in production builds of React.");
}
j.Children = {
  map: tr,
  forEach: function (e, t, n) {
    tr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      tr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      tr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Xo(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
j.Component = ln;
j.Fragment = sc;
j.Profiler = cc;
j.PureComponent = Yo;
j.StrictMode = ac;
j.Suspense = Ac;
j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xc;
j.act = es;
j.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Gu({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = Ho.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      bu.call(t, s) &&
        !_u.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var d = 0; d < s; d++) u[d] = arguments[d + 2];
    r.children = u;
  }
  return {
    $$typeof: Gn,
    type: e.type,
    key: l,
    ref: o,
    props: r,
    _owner: i,
  };
};
j.createContext = function (e) {
  return (
    (e = {
      $$typeof: fc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = {
      $$typeof: dc,
      _context: e,
    }),
    (e.Consumer = e)
  );
};
j.createElement = $u;
j.createFactory = function (e) {
  var t = $u.bind(null, e);
  return (t.type = e), t;
};
j.createRef = function () {
  return {
    current: null,
  };
};
j.forwardRef = function (e) {
  return {
    $$typeof: pc,
    render: e,
  };
};
j.isValidElement = Xo;
j.lazy = function (e) {
  return {
    $$typeof: gc,
    _payload: {
      _status: -1,
      _result: e,
    },
    _init: wc,
  };
};
j.memo = function (e, t) {
  return {
    $$typeof: mc,
    type: e,
    compare: t === void 0 ? null : t,
  };
};
j.startTransition = function (e) {
  var t = xr.transition;
  xr.transition = {};
  try {
    e();
  } finally {
    xr.transition = t;
  }
};
j.unstable_act = es;
j.useCallback = function (e, t) {
  return ue.current.useCallback(e, t);
};
j.useContext = function (e) {
  return ue.current.useContext(e);
};
j.useDebugValue = function () {};
j.useDeferredValue = function (e) {
  return ue.current.useDeferredValue(e);
};
j.useEffect = function (e, t) {
  return ue.current.useEffect(e, t);
};
j.useId = function () {
  return ue.current.useId();
};
j.useImperativeHandle = function (e, t, n) {
  return ue.current.useImperativeHandle(e, t, n);
};
j.useInsertionEffect = function (e, t) {
  return ue.current.useInsertionEffect(e, t);
};
j.useLayoutEffect = function (e, t) {
  return ue.current.useLayoutEffect(e, t);
};
j.useMemo = function (e, t) {
  return ue.current.useMemo(e, t);
};
j.useReducer = function (e, t, n) {
  return ue.current.useReducer(e, t, n);
};
j.useRef = function (e) {
  return ue.current.useRef(e);
};
j.useState = function (e) {
  return ue.current.useState(e);
};
j.useSyncExternalStore = function (e, t, n) {
  return ue.current.useSyncExternalStore(e, t, n);
};
j.useTransition = function () {
  return ue.current.useTransition();
};
j.version = "18.3.1";
Ku.exports = j;
var et = Ku.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kc = et,
  Cc = Symbol.for("react.element"),
  Ec = Symbol.for("react.fragment"),
  Sc = Object.prototype.hasOwnProperty,
  Nc = kc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Ic = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0,
  };
function ts(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Sc.call(t, r) && !Ic.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Cc,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Nc.current,
  };
}
nl.Fragment = Ec;
nl.jsx = ts;
nl.jsxs = ts;
Wu.exports = nl;
var a = Wu.exports,
  Jl = {},
  ns = {
    exports: {},
  },
  ve = {},
  rs = {
    exports: {},
  },
  ls = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function (e) {
  function t(E, B) {
    var R = E.length;
    E.push(B);
    e: for (; 0 < R; ) {
      var X = (R - 1) >>> 1,
        Z = E[X];
      if (0 < l(Z, B)) (E[X] = B), (E[R] = Z), (R = X);
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var B = E[0],
      R = E.pop();
    if (R !== B) {
      E[0] = R;
      e: for (var X = 0, Z = E.length, $n = Z >>> 1; X < $n; ) {
        var gt = 2 * (X + 1) - 1,
          wl = E[gt],
          ht = gt + 1,
          er = E[ht];
        if (0 > l(wl, R))
          ht < Z && 0 > l(er, wl)
            ? ((E[X] = er), (E[ht] = R), (X = ht))
            : ((E[X] = wl), (E[gt] = R), (X = gt));
        else if (ht < Z && 0 > l(er, R)) (E[X] = er), (E[ht] = R), (X = ht);
        else break e;
      }
    }
    return B;
  }
  function l(E, B) {
    var R = E.sortIndex - B.sortIndex;
    return R !== 0 ? R : E.id - B.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var s = [],
    d = [],
    g = 1,
    m = null,
    A = 3,
    y = !1,
    w = !1,
    x = !1,
    D = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(E) {
    for (var B = n(d); B !== null; ) {
      if (B.callback === null) r(d);
      else if (B.startTime <= E)
        r(d), (B.sortIndex = B.expirationTime), t(s, B);
      else break;
      B = n(d);
    }
  }
  function h(E) {
    if (((x = !1), p(E), !w))
      if (n(s) !== null) (w = !0), vl(C);
      else {
        var B = n(d);
        B !== null && yl(h, B.startTime - E);
      }
  }
  function C(E, B) {
    (w = !1), x && ((x = !1), f(I), (I = -1)), (y = !0);
    var R = A;
    try {
      for (
        p(B), m = n(s);
        m !== null && (!(m.expirationTime > B) || (E && !Ne()));

      ) {
        var X = m.callback;
        if (typeof X == "function") {
          (m.callback = null), (A = m.priorityLevel);
          var Z = X(m.expirationTime <= B);
          (B = e.unstable_now()),
            typeof Z == "function" ? (m.callback = Z) : m === n(s) && r(s),
            p(B);
        } else r(s);
        m = n(s);
      }
      if (m !== null) var $n = !0;
      else {
        var gt = n(d);
        gt !== null && yl(h, gt.startTime - B), ($n = !1);
      }
      return $n;
    } finally {
      (m = null), (A = R), (y = !1);
    }
  }
  var S = !1,
    N = null,
    I = -1,
    H = 5,
    U = -1;
  function Ne() {
    return !(e.unstable_now() - U < H);
  }
  function sn() {
    if (N !== null) {
      var E = e.unstable_now();
      U = E;
      var B = !0;
      try {
        B = N(!0, E);
      } finally {
        B ? an() : ((S = !1), (N = null));
      }
    } else S = !1;
  }
  var an;
  if (typeof c == "function")
    an = function () {
      c(sn);
    };
  else if (typeof MessageChannel < "u") {
    var Ti = new MessageChannel(),
      ic = Ti.port2;
    (Ti.port1.onmessage = sn),
      (an = function () {
        ic.postMessage(null);
      });
  } else
    an = function () {
      D(sn, 0);
    };
  function vl(E) {
    (N = E), S || ((S = !0), an());
  }
  function yl(E, B) {
    I = D(function () {
      E(e.unstable_now());
    }, B);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || y || ((w = !0), vl(C));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (H = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return A;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (E) {
      switch (A) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = A;
      }
      var R = A;
      A = B;
      try {
        return E();
      } finally {
        A = R;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, B) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var R = A;
      A = E;
      try {
        return B();
      } finally {
        A = R;
      }
    }),
    (e.unstable_scheduleCallback = function (E, B, R) {
      var X = e.unstable_now();
      switch (
        (typeof R == "object" && R !== null
          ? ((R = R.delay), (R = typeof R == "number" && 0 < R ? X + R : X))
          : (R = X),
        E)
      ) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return (
        (Z = R + Z),
        (E = {
          id: g++,
          callback: B,
          priorityLevel: E,
          startTime: R,
          expirationTime: Z,
          sortIndex: -1,
        }),
        R > X
          ? ((E.sortIndex = R),
            t(d, E),
            n(s) === null &&
              E === n(d) &&
              (x ? (f(I), (I = -1)) : (x = !0), yl(h, R - X)))
          : ((E.sortIndex = Z), t(s, E), w || y || ((w = !0), vl(C))),
        E
      );
    }),
    (e.unstable_shouldYield = Ne),
    (e.unstable_wrapCallback = function (E) {
      var B = A;
      return function () {
        var R = A;
        A = B;
        try {
          return E.apply(this, arguments);
        } finally {
          A = R;
        }
      };
    });
})(ls);
rs.exports = ls;
var Bc = rs.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rc = et,
  he = Bc;
function v(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var os = new Set(),
  Un = {};
function jt(e, t) {
  bt(e, t), bt(e + "Capture", t);
}
function bt(e, t) {
  for (Un[e] = t, e = 0; e < t.length; e++) os.add(t[e]);
}
var Xe = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Gl = Object.prototype.hasOwnProperty,
  jc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  zi = {},
  Mi = {};
function Uc(e) {
  return Gl.call(Mi, e)
    ? !0
    : Gl.call(zi, e)
    ? !1
    : jc.test(e)
    ? (Mi[e] = !0)
    : ((zi[e] = !0), !1);
}
function Qc(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Pc(e, t, n, r) {
  if (t === null || typeof t > "u" || Qc(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function se(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ee[e] = new se(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ee[t] = new se(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ee[e] = new se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ee[e] = new se(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ee[e] = new se(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ee[e] = new se(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ee[e] = new se(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ee[e] = new se(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ee[e] = new se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Wo = /[\-:]([a-z])/g;
function Ko(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Wo, Ko);
    ee[t] = new se(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Wo, Ko);
    ee[t] = new se(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Wo, Ko);
  ee[t] = new se(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ee.xlinkHref = new se(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Jo(e, t, n, r) {
  var l = ee.hasOwnProperty(t) ? ee[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Pc(t, n, l, r) && (n = null),
    r || l === null
      ? Uc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ge = Rc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  nr = Symbol.for("react.element"),
  Pt = Symbol.for("react.portal"),
  Lt = Symbol.for("react.fragment"),
  Go = Symbol.for("react.strict_mode"),
  Zl = Symbol.for("react.profiler"),
  is = Symbol.for("react.provider"),
  us = Symbol.for("react.context"),
  Zo = Symbol.for("react.forward_ref"),
  ql = Symbol.for("react.suspense"),
  bl = Symbol.for("react.suspense_list"),
  qo = Symbol.for("react.memo"),
  qe = Symbol.for("react.lazy"),
  ss = Symbol.for("react.offscreen"),
  Yi = Symbol.iterator;
function cn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Yi && e[Yi]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Y = Object.assign,
  kl;
function vn(e) {
  if (kl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      kl = (t && t[1]) || "";
    }
  return (
    `
` +
    kl +
    e
  );
}
var Cl = !1;
function El(e, t) {
  if (!e || Cl) return "";
  Cl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (d) {
          var r = d;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (d) {
          r = d;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (d) {
        r = d;
      }
      e();
    }
  } catch (d) {
    if (d && r && typeof d.stack == "string") {
      for (
        var l = d.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var s =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (Cl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? vn(e) : "";
}
function Lc(e) {
  switch (e.tag) {
    case 5:
      return vn(e.type);
    case 16:
      return vn("Lazy");
    case 13:
      return vn("Suspense");
    case 19:
      return vn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = El(e.type, !1)), e;
    case 11:
      return (e = El(e.type.render, !1)), e;
    case 1:
      return (e = El(e.type, !0)), e;
    default:
      return "";
  }
}
function _l(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Lt:
      return "Fragment";
    case Pt:
      return "Portal";
    case Zl:
      return "Profiler";
    case Go:
      return "StrictMode";
    case ql:
      return "Suspense";
    case bl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case us:
        return (e.displayName || "Context") + ".Consumer";
      case is:
        return (e._context.displayName || "Context") + ".Provider";
      case Zo:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case qo:
        return (
          (t = e.displayName || null), t !== null ? t : _l(e.type) || "Memo"
        );
      case qe:
        (t = e._payload), (e = e._init);
        try {
          return _l(e(t));
        } catch {}
    }
  return null;
}
function Tc(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return _l(t);
    case 8:
      return t === Go ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function dt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function as(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Fc(e) {
  var t = as(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, {
        enumerable: n.enumerable,
      }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function rr(e) {
  e._valueTracker || (e._valueTracker = Fc(e));
}
function cs(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = as(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Qr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function $l(e, t) {
  var n = t.checked;
  return Y({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Vi(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = dt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function ds(e, t) {
  (t = t.checked), t != null && Jo(e, "checked", t, !1);
}
function eo(e, t) {
  ds(e, t);
  var n = dt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? to(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && to(e, t.type, dt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Hi(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function to(e, t, n) {
  (t !== "number" || Qr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var yn = Array.isArray;
function Wt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + dt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function no(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(v(91));
  return Y({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Xi(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(v(92));
      if (yn(n)) {
        if (1 < n.length) throw Error(v(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = {
    initialValue: dt(n),
  };
}
function fs(e, t) {
  var n = dt(t.value),
    r = dt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Wi(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ps(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ro(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ps(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var lr,
  As = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        lr = lr || document.createElement("div"),
          lr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = lr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Qn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var kn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Dc = ["Webkit", "ms", "Moz", "O"];
Object.keys(kn).forEach(function (e) {
  Dc.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (kn[t] = kn[e]);
  });
});
function ms(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (kn.hasOwnProperty(e) && kn[e])
    ? ("" + t).trim()
    : t + "px";
}
function gs(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = ms(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Oc = Y(
  {
    menuitem: !0,
  },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function lo(e, t) {
  if (t) {
    if (Oc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(v(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(v(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(v(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(v(62));
  }
}
function oo(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var io = null;
function bo(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var uo = null,
  Kt = null,
  Jt = null;
function Ki(e) {
  if ((e = bn(e))) {
    if (typeof uo != "function") throw Error(v(280));
    var t = e.stateNode;
    t && ((t = ul(t)), uo(e.stateNode, e.type, t));
  }
}
function hs(e) {
  Kt ? (Jt ? Jt.push(e) : (Jt = [e])) : (Kt = e);
}
function vs() {
  if (Kt) {
    var e = Kt,
      t = Jt;
    if (((Jt = Kt = null), Ki(e), t)) for (e = 0; e < t.length; e++) Ki(t[e]);
  }
}
function ys(e, t) {
  return e(t);
}
function ws() {}
var Sl = !1;
function xs(e, t, n) {
  if (Sl) return e(t, n);
  Sl = !0;
  try {
    return ys(e, t, n);
  } finally {
    (Sl = !1), (Kt !== null || Jt !== null) && (ws(), vs());
  }
}
function Pn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ul(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(v(231, t, typeof n));
  return n;
}
var so = !1;
if (Xe)
  try {
    var dn = {};
    Object.defineProperty(dn, "passive", {
      get: function () {
        so = !0;
      },
    }),
      window.addEventListener("test", dn, dn),
      window.removeEventListener("test", dn, dn);
  } catch {
    so = !1;
  }
function zc(e, t, n, r, l, o, i, u, s) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (g) {
    this.onError(g);
  }
}
var Cn = !1,
  Pr = null,
  Lr = !1,
  ao = null,
  Mc = {
    onError: function (e) {
      (Cn = !0), (Pr = e);
    },
  };
function Yc(e, t, n, r, l, o, i, u, s) {
  (Cn = !1), (Pr = null), zc.apply(Mc, arguments);
}
function Vc(e, t, n, r, l, o, i, u, s) {
  if ((Yc.apply(this, arguments), Cn)) {
    if (Cn) {
      var d = Pr;
      (Cn = !1), (Pr = null);
    } else throw Error(v(198));
    Lr || ((Lr = !0), (ao = d));
  }
}
function Ut(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function ks(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Ji(e) {
  if (Ut(e) !== e) throw Error(v(188));
}
function Hc(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Ut(e)), t === null)) throw Error(v(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return Ji(l), e;
        if (o === r) return Ji(l), t;
        o = o.sibling;
      }
      throw Error(v(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(v(189));
      }
    }
    if (n.alternate !== r) throw Error(v(190));
  }
  if (n.tag !== 3) throw Error(v(188));
  return n.stateNode.current === n ? e : t;
}
function Cs(e) {
  return (e = Hc(e)), e !== null ? Es(e) : null;
}
function Es(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Es(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ss = he.unstable_scheduleCallback,
  Gi = he.unstable_cancelCallback,
  Xc = he.unstable_shouldYield,
  Wc = he.unstable_requestPaint,
  W = he.unstable_now,
  Kc = he.unstable_getCurrentPriorityLevel,
  _o = he.unstable_ImmediatePriority,
  Ns = he.unstable_UserBlockingPriority,
  Tr = he.unstable_NormalPriority,
  Jc = he.unstable_LowPriority,
  Is = he.unstable_IdlePriority,
  rl = null,
  De = null;
function Gc(e) {
  if (De && typeof De.onCommitFiberRoot == "function")
    try {
      De.onCommitFiberRoot(rl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ue = Math.clz32 ? Math.clz32 : bc,
  Zc = Math.log,
  qc = Math.LN2;
function bc(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Zc(e) / qc) | 0)) | 0;
}
var or = 64,
  ir = 4194304;
function wn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Fr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = wn(u)) : ((o &= i), o !== 0 && (r = wn(o)));
  } else (i = n & ~l), i !== 0 ? (r = wn(i)) : o !== 0 && (r = wn(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ue(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function _c(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function $c(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - Ue(o),
      u = 1 << i,
      s = l[i];
    s === -1
      ? (!(u & n) || u & r) && (l[i] = _c(u, t))
      : s <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function co(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Bs() {
  var e = or;
  return (or <<= 1), !(or & 4194240) && (or = 64), e;
}
function Nl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Zn(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ue(t)),
    (e[t] = n);
}
function ed(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Ue(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function $o(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ue(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var P = 0;
function Rs(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var js,
  ei,
  Us,
  Qs,
  Ps,
  fo = !1,
  ur = [],
  rt = null,
  lt = null,
  ot = null,
  Ln = new Map(),
  Tn = new Map(),
  _e = [],
  td =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Zi(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      rt = null;
      break;
    case "dragenter":
    case "dragleave":
      lt = null;
      break;
    case "mouseover":
    case "mouseout":
      ot = null;
      break;
    case "pointerover":
    case "pointerout":
      Ln.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Tn.delete(t.pointerId);
  }
}
function fn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = bn(t)), t !== null && ei(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function nd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (rt = fn(rt, e, t, n, r, l)), !0;
    case "dragenter":
      return (lt = fn(lt, e, t, n, r, l)), !0;
    case "mouseover":
      return (ot = fn(ot, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return Ln.set(o, fn(Ln.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), Tn.set(o, fn(Tn.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Ls(e) {
  var t = wt(e.target);
  if (t !== null) {
    var n = Ut(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ks(n)), t !== null)) {
          (e.blockedOn = t),
            Ps(e.priority, function () {
              Us(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function kr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = po(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (io = r), n.target.dispatchEvent(r), (io = null);
    } else return (t = bn(n)), t !== null && ei(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function qi(e, t, n) {
  kr(e) && n.delete(t);
}
function rd() {
  (fo = !1),
    rt !== null && kr(rt) && (rt = null),
    lt !== null && kr(lt) && (lt = null),
    ot !== null && kr(ot) && (ot = null),
    Ln.forEach(qi),
    Tn.forEach(qi);
}
function pn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    fo ||
      ((fo = !0),
      he.unstable_scheduleCallback(he.unstable_NormalPriority, rd)));
}
function Fn(e) {
  function t(l) {
    return pn(l, e);
  }
  if (0 < ur.length) {
    pn(ur[0], e);
    for (var n = 1; n < ur.length; n++) {
      var r = ur[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    rt !== null && pn(rt, e),
      lt !== null && pn(lt, e),
      ot !== null && pn(ot, e),
      Ln.forEach(t),
      Tn.forEach(t),
      n = 0;
    n < _e.length;
    n++
  )
    (r = _e[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < _e.length && ((n = _e[0]), n.blockedOn === null); )
    Ls(n), n.blockedOn === null && _e.shift();
}
var Gt = Ge.ReactCurrentBatchConfig,
  Dr = !0;
function ld(e, t, n, r) {
  var l = P,
    o = Gt.transition;
  Gt.transition = null;
  try {
    (P = 1), ti(e, t, n, r);
  } finally {
    (P = l), (Gt.transition = o);
  }
}
function od(e, t, n, r) {
  var l = P,
    o = Gt.transition;
  Gt.transition = null;
  try {
    (P = 4), ti(e, t, n, r);
  } finally {
    (P = l), (Gt.transition = o);
  }
}
function ti(e, t, n, r) {
  if (Dr) {
    var l = po(e, t, n, r);
    if (l === null) Fl(e, t, r, Or, n), Zi(e, r);
    else if (nd(l, e, t, n, r)) r.stopPropagation();
    else if ((Zi(e, r), t & 4 && -1 < td.indexOf(e))) {
      for (; l !== null; ) {
        var o = bn(l);
        if (
          (o !== null && js(o),
          (o = po(e, t, n, r)),
          o === null && Fl(e, t, r, Or, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Fl(e, t, r, null, n);
  }
}
var Or = null;
function po(e, t, n, r) {
  if (((Or = null), (e = bo(r)), (e = wt(e)), e !== null))
    if (((t = Ut(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ks(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Or = e), null;
}
function Ts(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Kc()) {
        case _o:
          return 1;
        case Ns:
          return 4;
        case Tr:
        case Jc:
          return 16;
        case Is:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var tt = null,
  ni = null,
  Cr = null;
function Fs() {
  if (Cr) return Cr;
  var e,
    t = ni,
    n = t.length,
    r,
    l = "value" in tt ? tt.value : tt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Cr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Er(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function sr() {
  return !0;
}
function bi() {
  return !1;
}
function ye(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? sr
        : bi),
      (this.isPropagationStopped = bi),
      this
    );
  }
  return (
    Y(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = sr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = sr));
      },
      persist: function () {},
      isPersistent: sr,
    }),
    t
  );
}
var on = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ri = ye(on),
  qn = Y({}, on, {
    view: 0,
    detail: 0,
  }),
  id = ye(qn),
  Il,
  Bl,
  An,
  ll = Y({}, qn, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: li,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== An &&
            (An && e.type === "mousemove"
              ? ((Il = e.screenX - An.screenX), (Bl = e.screenY - An.screenY))
              : (Bl = Il = 0),
            (An = e)),
          Il);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Bl;
    },
  }),
  _i = ye(ll),
  ud = Y({}, ll, {
    dataTransfer: 0,
  }),
  sd = ye(ud),
  ad = Y({}, qn, {
    relatedTarget: 0,
  }),
  Rl = ye(ad),
  cd = Y({}, on, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0,
  }),
  dd = ye(cd),
  fd = Y({}, on, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  pd = ye(fd),
  Ad = Y({}, on, {
    data: 0,
  }),
  $i = ye(Ad),
  md = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  gd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  hd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function vd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = hd[e]) ? !!t[e] : !1;
}
function li() {
  return vd;
}
var yd = Y({}, qn, {
    key: function (e) {
      if (e.key) {
        var t = md[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Er(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? gd[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: li,
    charCode: function (e) {
      return e.type === "keypress" ? Er(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Er(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  wd = ye(yd),
  xd = Y({}, ll, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  eu = ye(xd),
  kd = Y({}, qn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: li,
  }),
  Cd = ye(kd),
  Ed = Y({}, on, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0,
  }),
  Sd = ye(Ed),
  Nd = Y({}, ll, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Id = ye(Nd),
  Bd = [9, 13, 27, 32],
  oi = Xe && "CompositionEvent" in window,
  En = null;
Xe && "documentMode" in document && (En = document.documentMode);
var Rd = Xe && "TextEvent" in window && !En,
  Ds = Xe && (!oi || (En && 8 < En && 11 >= En)),
  tu = " ",
  nu = !1;
function Os(e, t) {
  switch (e) {
    case "keyup":
      return Bd.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function zs(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Tt = !1;
function jd(e, t) {
  switch (e) {
    case "compositionend":
      return zs(t);
    case "keypress":
      return t.which !== 32 ? null : ((nu = !0), tu);
    case "textInput":
      return (e = t.data), e === tu && nu ? null : e;
    default:
      return null;
  }
}
function Ud(e, t) {
  if (Tt)
    return e === "compositionend" || (!oi && Os(e, t))
      ? ((e = Fs()), (Cr = ni = tt = null), (Tt = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Ds && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Qd = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function ru(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Qd[e.type] : t === "textarea";
}
function Ms(e, t, n, r) {
  hs(r),
    (t = zr(t, "onChange")),
    0 < t.length &&
      ((n = new ri("onChange", "change", null, n, r)),
      e.push({
        event: n,
        listeners: t,
      }));
}
var Sn = null,
  Dn = null;
function Pd(e) {
  bs(e, 0);
}
function ol(e) {
  var t = Ot(e);
  if (cs(t)) return e;
}
function Ld(e, t) {
  if (e === "change") return t;
}
var Ys = !1;
if (Xe) {
  var jl;
  if (Xe) {
    var Ul = "oninput" in document;
    if (!Ul) {
      var lu = document.createElement("div");
      lu.setAttribute("oninput", "return;"),
        (Ul = typeof lu.oninput == "function");
    }
    jl = Ul;
  } else jl = !1;
  Ys = jl && (!document.documentMode || 9 < document.documentMode);
}
function ou() {
  Sn && (Sn.detachEvent("onpropertychange", Vs), (Dn = Sn = null));
}
function Vs(e) {
  if (e.propertyName === "value" && ol(Dn)) {
    var t = [];
    Ms(t, Dn, e, bo(e)), xs(Pd, t);
  }
}
function Td(e, t, n) {
  e === "focusin"
    ? (ou(), (Sn = t), (Dn = n), Sn.attachEvent("onpropertychange", Vs))
    : e === "focusout" && ou();
}
function Fd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ol(Dn);
}
function Dd(e, t) {
  if (e === "click") return ol(t);
}
function Od(e, t) {
  if (e === "input" || e === "change") return ol(t);
}
function zd(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Pe = typeof Object.is == "function" ? Object.is : zd;
function On(e, t) {
  if (Pe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Gl.call(t, l) || !Pe(e[l], t[l])) return !1;
  }
  return !0;
}
function iu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function uu(e, t) {
  var n = iu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return {
          node: n,
          offset: t - e,
        };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = iu(n);
  }
}
function Hs(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Hs(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Xs() {
  for (var e = window, t = Qr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Qr(e.document);
  }
  return t;
}
function ii(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Md(e) {
  var t = Xs(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Hs(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ii(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = uu(n, o));
        var i = uu(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({
          element: e,
          left: e.scrollLeft,
          top: e.scrollTop,
        });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Yd = Xe && "documentMode" in document && 11 >= document.documentMode,
  Ft = null,
  Ao = null,
  Nn = null,
  mo = !1;
function su(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  mo ||
    Ft == null ||
    Ft !== Qr(r) ||
    ((r = Ft),
    "selectionStart" in r && ii(r)
      ? (r = {
          start: r.selectionStart,
          end: r.selectionEnd,
        })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Nn && On(Nn, r)) ||
      ((Nn = r),
      (r = zr(Ao, "onSelect")),
      0 < r.length &&
        ((t = new ri("onSelect", "select", null, t, n)),
        e.push({
          event: t,
          listeners: r,
        }),
        (t.target = Ft))));
}
function ar(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Dt = {
    animationend: ar("Animation", "AnimationEnd"),
    animationiteration: ar("Animation", "AnimationIteration"),
    animationstart: ar("Animation", "AnimationStart"),
    transitionend: ar("Transition", "TransitionEnd"),
  },
  Ql = {},
  Ws = {};
Xe &&
  ((Ws = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Dt.animationend.animation,
    delete Dt.animationiteration.animation,
    delete Dt.animationstart.animation),
  "TransitionEvent" in window || delete Dt.transitionend.transition);
function il(e) {
  if (Ql[e]) return Ql[e];
  if (!Dt[e]) return e;
  var t = Dt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ws) return (Ql[e] = t[n]);
  return e;
}
var Ks = il("animationend"),
  Js = il("animationiteration"),
  Gs = il("animationstart"),
  Zs = il("transitionend"),
  qs = new Map(),
  au =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function pt(e, t) {
  qs.set(e, t), jt(t, [e]);
}
for (var Pl = 0; Pl < au.length; Pl++) {
  var Ll = au[Pl],
    Vd = Ll.toLowerCase(),
    Hd = Ll[0].toUpperCase() + Ll.slice(1);
  pt(Vd, "on" + Hd);
}
pt(Ks, "onAnimationEnd");
pt(Js, "onAnimationIteration");
pt(Gs, "onAnimationStart");
pt("dblclick", "onDoubleClick");
pt("focusin", "onFocus");
pt("focusout", "onBlur");
pt(Zs, "onTransitionEnd");
bt("onMouseEnter", ["mouseout", "mouseover"]);
bt("onMouseLeave", ["mouseout", "mouseover"]);
bt("onPointerEnter", ["pointerout", "pointerover"]);
bt("onPointerLeave", ["pointerout", "pointerover"]);
jt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
jt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
jt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
jt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
jt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
jt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var xn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Xd = new Set("cancel close invalid load scroll toggle".split(" ").concat(xn));
function cu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Vc(r, t, void 0, e), (e.currentTarget = null);
}
function bs(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            s = u.instance,
            d = u.currentTarget;
          if (((u = u.listener), s !== o && l.isPropagationStopped())) break e;
          cu(l, u, d), (o = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (s = u.instance),
            (d = u.currentTarget),
            (u = u.listener),
            s !== o && l.isPropagationStopped())
          )
            break e;
          cu(l, u, d), (o = s);
        }
    }
  }
  if (Lr) throw ((e = ao), (Lr = !1), (ao = null), e);
}
function T(e, t) {
  var n = t[wo];
  n === void 0 && (n = t[wo] = new Set());
  var r = e + "__bubble";
  n.has(r) || (_s(t, e, 2, !1), n.add(r));
}
function Tl(e, t, n) {
  var r = 0;
  t && (r |= 4), _s(n, e, r, t);
}
var cr = "_reactListening" + Math.random().toString(36).slice(2);
function zn(e) {
  if (!e[cr]) {
    (e[cr] = !0),
      os.forEach(function (n) {
        n !== "selectionchange" && (Xd.has(n) || Tl(n, !1, e), Tl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[cr] || ((t[cr] = !0), Tl("selectionchange", !1, t));
  }
}
function _s(e, t, n, r) {
  switch (Ts(t)) {
    case 1:
      var l = ld;
      break;
    case 4:
      l = od;
      break;
    default:
      l = ti;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !so ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, {
            capture: !0,
            passive: l,
          })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, {
          passive: l,
        })
      : e.addEventListener(t, n, !1);
}
function Fl(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = wt(u)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  xs(function () {
    var d = o,
      g = bo(n),
      m = [];
    e: {
      var A = qs.get(e);
      if (A !== void 0) {
        var y = ri,
          w = e;
        switch (e) {
          case "keypress":
            if (Er(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = wd;
            break;
          case "focusin":
            (w = "focus"), (y = Rl);
            break;
          case "focusout":
            (w = "blur"), (y = Rl);
            break;
          case "beforeblur":
          case "afterblur":
            y = Rl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = _i;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = sd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Cd;
            break;
          case Ks:
          case Js:
          case Gs:
            y = dd;
            break;
          case Zs:
            y = Sd;
            break;
          case "scroll":
            y = id;
            break;
          case "wheel":
            y = Id;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = pd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = eu;
        }
        var x = (t & 4) !== 0,
          D = !x && e === "scroll",
          f = x ? (A !== null ? A + "Capture" : null) : A;
        x = [];
        for (var c = d, p; c !== null; ) {
          p = c;
          var h = p.stateNode;
          if (
            (p.tag === 5 &&
              h !== null &&
              ((p = h),
              f !== null && ((h = Pn(c, f)), h != null && x.push(Mn(c, h, p)))),
            D)
          )
            break;
          c = c.return;
        }
        0 < x.length &&
          ((A = new y(A, w, null, n, g)),
          m.push({
            event: A,
            listeners: x,
          }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((A = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          A &&
            n !== io &&
            (w = n.relatedTarget || n.fromElement) &&
            (wt(w) || w[We]))
        )
          break e;
        if (
          (y || A) &&
          ((A =
            g.window === g
              ? g
              : (A = g.ownerDocument)
              ? A.defaultView || A.parentWindow
              : window),
          y
            ? ((w = n.relatedTarget || n.toElement),
              (y = d),
              (w = w ? wt(w) : null),
              w !== null &&
                ((D = Ut(w)), w !== D || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((y = null), (w = d)),
          y !== w)
        ) {
          if (
            ((x = _i),
            (h = "onMouseLeave"),
            (f = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = eu),
              (h = "onPointerLeave"),
              (f = "onPointerEnter"),
              (c = "pointer")),
            (D = y == null ? A : Ot(y)),
            (p = w == null ? A : Ot(w)),
            (A = new x(h, c + "leave", y, n, g)),
            (A.target = D),
            (A.relatedTarget = p),
            (h = null),
            wt(g) === d &&
              ((x = new x(f, c + "enter", w, n, g)),
              (x.target = p),
              (x.relatedTarget = D),
              (h = x)),
            (D = h),
            y && w)
          )
            t: {
              for (x = y, f = w, c = 0, p = x; p; p = Qt(p)) c++;
              for (p = 0, h = f; h; h = Qt(h)) p++;
              for (; 0 < c - p; ) (x = Qt(x)), c--;
              for (; 0 < p - c; ) (f = Qt(f)), p--;
              for (; c--; ) {
                if (x === f || (f !== null && x === f.alternate)) break t;
                (x = Qt(x)), (f = Qt(f));
              }
              x = null;
            }
          else x = null;
          y !== null && du(m, A, y, x, !1),
            w !== null && D !== null && du(m, D, w, x, !0);
        }
      }
      e: {
        if (
          ((A = d ? Ot(d) : window),
          (y = A.nodeName && A.nodeName.toLowerCase()),
          y === "select" || (y === "input" && A.type === "file"))
        )
          var C = Ld;
        else if (ru(A))
          if (Ys) C = Od;
          else {
            C = Fd;
            var S = Td;
          }
        else
          (y = A.nodeName) &&
            y.toLowerCase() === "input" &&
            (A.type === "checkbox" || A.type === "radio") &&
            (C = Dd);
        if (C && (C = C(e, d))) {
          Ms(m, C, n, g);
          break e;
        }
        S && S(e, A, d),
          e === "focusout" &&
            (S = A._wrapperState) &&
            S.controlled &&
            A.type === "number" &&
            to(A, "number", A.value);
      }
      switch (((S = d ? Ot(d) : window), e)) {
        case "focusin":
          (ru(S) || S.contentEditable === "true") &&
            ((Ft = S), (Ao = d), (Nn = null));
          break;
        case "focusout":
          Nn = Ao = Ft = null;
          break;
        case "mousedown":
          mo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (mo = !1), su(m, n, g);
          break;
        case "selectionchange":
          if (Yd) break;
        case "keydown":
        case "keyup":
          su(m, n, g);
      }
      var N;
      if (oi)
        e: {
          switch (e) {
            case "compositionstart":
              var I = "onCompositionStart";
              break e;
            case "compositionend":
              I = "onCompositionEnd";
              break e;
            case "compositionupdate":
              I = "onCompositionUpdate";
              break e;
          }
          I = void 0;
        }
      else
        Tt
          ? Os(e, n) && (I = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (I = "onCompositionStart");
      I &&
        (Ds &&
          n.locale !== "ko" &&
          (Tt || I !== "onCompositionStart"
            ? I === "onCompositionEnd" && Tt && (N = Fs())
            : ((tt = g),
              (ni = "value" in tt ? tt.value : tt.textContent),
              (Tt = !0))),
        (S = zr(d, I)),
        0 < S.length &&
          ((I = new $i(I, e, null, n, g)),
          m.push({
            event: I,
            listeners: S,
          }),
          N ? (I.data = N) : ((N = zs(n)), N !== null && (I.data = N)))),
        (N = Rd ? jd(e, n) : Ud(e, n)) &&
          ((d = zr(d, "onBeforeInput")),
          0 < d.length &&
            ((g = new $i("onBeforeInput", "beforeinput", null, n, g)),
            m.push({
              event: g,
              listeners: d,
            }),
            (g.data = N)));
    }
    bs(m, t);
  });
}
function Mn(e, t, n) {
  return {
    instance: e,
    listener: t,
    currentTarget: n,
  };
}
function zr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Pn(e, n)),
      o != null && r.unshift(Mn(e, o, l)),
      (o = Pn(e, t)),
      o != null && r.push(Mn(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Qt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function du(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      d = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      d !== null &&
      ((u = d),
      l
        ? ((s = Pn(n, o)), s != null && i.unshift(Mn(n, s, u)))
        : l || ((s = Pn(n, o)), s != null && i.push(Mn(n, s, u)))),
      (n = n.return);
  }
  i.length !== 0 &&
    e.push({
      event: t,
      listeners: i,
    });
}
var Wd = /\r\n?/g,
  Kd = /\u0000|\uFFFD/g;
function fu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Wd,
      `
`
    )
    .replace(Kd, "");
}
function dr(e, t, n) {
  if (((t = fu(t)), fu(e) !== t && n)) throw Error(v(425));
}
function Mr() {}
var go = null,
  ho = null;
function vo(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var yo = typeof setTimeout == "function" ? setTimeout : void 0,
  Jd = typeof clearTimeout == "function" ? clearTimeout : void 0,
  pu = typeof Promise == "function" ? Promise : void 0,
  Gd =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof pu < "u"
      ? function (e) {
          return pu.resolve(null).then(e).catch(Zd);
        }
      : yo;
function Zd(e) {
  setTimeout(function () {
    throw e;
  });
}
function Dl(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Fn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Fn(t);
}
function it(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Au(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var un = Math.random().toString(36).slice(2),
  Fe = "__reactFiber$" + un,
  Yn = "__reactProps$" + un,
  We = "__reactContainer$" + un,
  wo = "__reactEvents$" + un,
  qd = "__reactListeners$" + un,
  bd = "__reactHandles$" + un;
function wt(e) {
  var t = e[Fe];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[We] || n[Fe])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Au(e); e !== null; ) {
          if ((n = e[Fe])) return n;
          e = Au(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function bn(e) {
  return (
    (e = e[Fe] || e[We]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Ot(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(v(33));
}
function ul(e) {
  return e[Yn] || null;
}
var xo = [],
  zt = -1;
function At(e) {
  return {
    current: e,
  };
}
function F(e) {
  0 > zt || ((e.current = xo[zt]), (xo[zt] = null), zt--);
}
function L(e, t) {
  zt++, (xo[zt] = e.current), (e.current = t);
}
var ft = {},
  le = At(ft),
  de = At(!1),
  St = ft;
function _t(e, t) {
  var n = e.type.contextTypes;
  if (!n) return ft;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function fe(e) {
  return (e = e.childContextTypes), e != null;
}
function Yr() {
  F(de), F(le);
}
function mu(e, t, n) {
  if (le.current !== ft) throw Error(v(168));
  L(le, t), L(de, n);
}
function $s(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(v(108, Tc(e) || "Unknown", l));
  return Y({}, n, r);
}
function Vr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ft),
    (St = le.current),
    L(le, e),
    L(de, de.current),
    !0
  );
}
function gu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(v(169));
  n
    ? ((e = $s(e, t, St)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      F(de),
      F(le),
      L(le, e))
    : F(de),
    L(de, n);
}
var Me = null,
  sl = !1,
  Ol = !1;
function ea(e) {
  Me === null ? (Me = [e]) : Me.push(e);
}
function _d(e) {
  (sl = !0), ea(e);
}
function mt() {
  if (!Ol && Me !== null) {
    Ol = !0;
    var e = 0,
      t = P;
    try {
      var n = Me;
      for (P = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Me = null), (sl = !1);
    } catch (l) {
      throw (Me !== null && (Me = Me.slice(e + 1)), Ss(_o, mt), l);
    } finally {
      (P = t), (Ol = !1);
    }
  }
  return null;
}
var Mt = [],
  Yt = 0,
  Hr = null,
  Xr = 0,
  we = [],
  xe = 0,
  Nt = null,
  Ye = 1,
  Ve = "";
function vt(e, t) {
  (Mt[Yt++] = Xr), (Mt[Yt++] = Hr), (Hr = e), (Xr = t);
}
function ta(e, t, n) {
  (we[xe++] = Ye), (we[xe++] = Ve), (we[xe++] = Nt), (Nt = e);
  var r = Ye;
  e = Ve;
  var l = 32 - Ue(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - Ue(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Ye = (1 << (32 - Ue(t) + l)) | (n << l) | r),
      (Ve = o + e);
  } else (Ye = (1 << o) | (n << l) | r), (Ve = e);
}
function ui(e) {
  e.return !== null && (vt(e, 1), ta(e, 1, 0));
}
function si(e) {
  for (; e === Hr; )
    (Hr = Mt[--Yt]), (Mt[Yt] = null), (Xr = Mt[--Yt]), (Mt[Yt] = null);
  for (; e === Nt; )
    (Nt = we[--xe]),
      (we[xe] = null),
      (Ve = we[--xe]),
      (we[xe] = null),
      (Ye = we[--xe]),
      (we[xe] = null);
}
var ge = null,
  me = null,
  O = !1,
  je = null;
function na(e, t) {
  var n = ke(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function hu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ge = e), (me = it(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ge = e), (me = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n =
              Nt !== null
                ? {
                    id: Ye,
                    overflow: Ve,
                  }
                : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ke(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ge = e),
            (me = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ko(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Co(e) {
  if (O) {
    var t = me;
    if (t) {
      var n = t;
      if (!hu(e, t)) {
        if (ko(e)) throw Error(v(418));
        t = it(n.nextSibling);
        var r = ge;
        t && hu(e, t)
          ? na(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (O = !1), (ge = e));
      }
    } else {
      if (ko(e)) throw Error(v(418));
      (e.flags = (e.flags & -4097) | 2), (O = !1), (ge = e);
    }
  }
}
function vu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ge = e;
}
function fr(e) {
  if (e !== ge) return !1;
  if (!O) return vu(e), (O = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !vo(e.type, e.memoizedProps))),
    t && (t = me))
  ) {
    if (ko(e)) throw (ra(), Error(v(418)));
    for (; t; ) na(e, t), (t = it(t.nextSibling));
  }
  if ((vu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(v(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              me = it(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      me = null;
    }
  } else me = ge ? it(e.stateNode.nextSibling) : null;
  return !0;
}
function ra() {
  for (var e = me; e; ) e = it(e.nextSibling);
}
function $t() {
  (me = ge = null), (O = !1);
}
function ai(e) {
  je === null ? (je = [e]) : je.push(e);
}
var $d = Ge.ReactCurrentBatchConfig;
function mn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(v(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(v(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(v(284));
    if (!n._owner) throw Error(v(290, e));
  }
  return e;
}
function pr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      v(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function yu(e) {
  var t = e._init;
  return t(e._payload);
}
function la(e) {
  function t(f, c) {
    if (e) {
      var p = f.deletions;
      p === null ? ((f.deletions = [c]), (f.flags |= 16)) : p.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), (c = c.sibling);
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
    return f;
  }
  function l(f, c) {
    return (f = ct(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function o(f, c, p) {
    return (
      (f.index = p),
      e
        ? ((p = f.alternate),
          p !== null
            ? ((p = p.index), p < c ? ((f.flags |= 2), c) : p)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, p, h) {
    return c === null || c.tag !== 6
      ? ((c = Wl(p, f.mode, h)), (c.return = f), c)
      : ((c = l(c, p)), (c.return = f), c);
  }
  function s(f, c, p, h) {
    var C = p.type;
    return C === Lt
      ? g(f, c, p.props.children, h, p.key)
      : c !== null &&
        (c.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === qe &&
            yu(C) === c.type))
      ? ((h = l(c, p.props)), (h.ref = mn(f, c, p)), (h.return = f), h)
      : ((h = Ur(p.type, p.key, p.props, null, f.mode, h)),
        (h.ref = mn(f, c, p)),
        (h.return = f),
        h);
  }
  function d(f, c, p, h) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== p.containerInfo ||
      c.stateNode.implementation !== p.implementation
      ? ((c = Kl(p, f.mode, h)), (c.return = f), c)
      : ((c = l(c, p.children || [])), (c.return = f), c);
  }
  function g(f, c, p, h, C) {
    return c === null || c.tag !== 7
      ? ((c = Et(p, f.mode, h, C)), (c.return = f), c)
      : ((c = l(c, p)), (c.return = f), c);
  }
  function m(f, c, p) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = Wl("" + c, f.mode, p)), (c.return = f), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case nr:
          return (
            (p = Ur(c.type, c.key, c.props, null, f.mode, p)),
            (p.ref = mn(f, null, c)),
            (p.return = f),
            p
          );
        case Pt:
          return (c = Kl(c, f.mode, p)), (c.return = f), c;
        case qe:
          var h = c._init;
          return m(f, h(c._payload), p);
      }
      if (yn(c) || cn(c))
        return (c = Et(c, f.mode, p, null)), (c.return = f), c;
      pr(f, c);
    }
    return null;
  }
  function A(f, c, p, h) {
    var C = c !== null ? c.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return C !== null ? null : u(f, c, "" + p, h);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case nr:
          return p.key === C ? s(f, c, p, h) : null;
        case Pt:
          return p.key === C ? d(f, c, p, h) : null;
        case qe:
          return (C = p._init), A(f, c, C(p._payload), h);
      }
      if (yn(p) || cn(p)) return C !== null ? null : g(f, c, p, h, null);
      pr(f, p);
    }
    return null;
  }
  function y(f, c, p, h, C) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (f = f.get(p) || null), u(c, f, "" + h, C);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case nr:
          return (f = f.get(h.key === null ? p : h.key) || null), s(c, f, h, C);
        case Pt:
          return (f = f.get(h.key === null ? p : h.key) || null), d(c, f, h, C);
        case qe:
          var S = h._init;
          return y(f, c, p, S(h._payload), C);
      }
      if (yn(h) || cn(h)) return (f = f.get(p) || null), g(c, f, h, C, null);
      pr(c, h);
    }
    return null;
  }
  function w(f, c, p, h) {
    for (
      var C = null, S = null, N = c, I = (c = 0), H = null;
      N !== null && I < p.length;
      I++
    ) {
      N.index > I ? ((H = N), (N = null)) : (H = N.sibling);
      var U = A(f, N, p[I], h);
      if (U === null) {
        N === null && (N = H);
        break;
      }
      e && N && U.alternate === null && t(f, N),
        (c = o(U, c, I)),
        S === null ? (C = U) : (S.sibling = U),
        (S = U),
        (N = H);
    }
    if (I === p.length) return n(f, N), O && vt(f, I), C;
    if (N === null) {
      for (; I < p.length; I++)
        (N = m(f, p[I], h)),
          N !== null &&
            ((c = o(N, c, I)), S === null ? (C = N) : (S.sibling = N), (S = N));
      return O && vt(f, I), C;
    }
    for (N = r(f, N); I < p.length; I++)
      (H = y(N, f, I, p[I], h)),
        H !== null &&
          (e && H.alternate !== null && N.delete(H.key === null ? I : H.key),
          (c = o(H, c, I)),
          S === null ? (C = H) : (S.sibling = H),
          (S = H));
    return (
      e &&
        N.forEach(function (Ne) {
          return t(f, Ne);
        }),
      O && vt(f, I),
      C
    );
  }
  function x(f, c, p, h) {
    var C = cn(p);
    if (typeof C != "function") throw Error(v(150));
    if (((p = C.call(p)), p == null)) throw Error(v(151));
    for (
      var S = (C = null), N = c, I = (c = 0), H = null, U = p.next();
      N !== null && !U.done;
      I++, U = p.next()
    ) {
      N.index > I ? ((H = N), (N = null)) : (H = N.sibling);
      var Ne = A(f, N, U.value, h);
      if (Ne === null) {
        N === null && (N = H);
        break;
      }
      e && N && Ne.alternate === null && t(f, N),
        (c = o(Ne, c, I)),
        S === null ? (C = Ne) : (S.sibling = Ne),
        (S = Ne),
        (N = H);
    }
    if (U.done) return n(f, N), O && vt(f, I), C;
    if (N === null) {
      for (; !U.done; I++, U = p.next())
        (U = m(f, U.value, h)),
          U !== null &&
            ((c = o(U, c, I)), S === null ? (C = U) : (S.sibling = U), (S = U));
      return O && vt(f, I), C;
    }
    for (N = r(f, N); !U.done; I++, U = p.next())
      (U = y(N, f, I, U.value, h)),
        U !== null &&
          (e && U.alternate !== null && N.delete(U.key === null ? I : U.key),
          (c = o(U, c, I)),
          S === null ? (C = U) : (S.sibling = U),
          (S = U));
    return (
      e &&
        N.forEach(function (sn) {
          return t(f, sn);
        }),
      O && vt(f, I),
      C
    );
  }
  function D(f, c, p, h) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === Lt &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case nr:
          e: {
            for (var C = p.key, S = c; S !== null; ) {
              if (S.key === C) {
                if (((C = p.type), C === Lt)) {
                  if (S.tag === 7) {
                    n(f, S.sibling),
                      (c = l(S, p.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  S.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === qe &&
                    yu(C) === S.type)
                ) {
                  n(f, S.sibling),
                    (c = l(S, p.props)),
                    (c.ref = mn(f, S, p)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, S);
                break;
              } else t(f, S);
              S = S.sibling;
            }
            p.type === Lt
              ? ((c = Et(p.props.children, f.mode, h, p.key)),
                (c.return = f),
                (f = c))
              : ((h = Ur(p.type, p.key, p.props, null, f.mode, h)),
                (h.ref = mn(f, c, p)),
                (h.return = f),
                (f = h));
          }
          return i(f);
        case Pt:
          e: {
            for (S = p.key; c !== null; ) {
              if (c.key === S)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === p.containerInfo &&
                  c.stateNode.implementation === p.implementation
                ) {
                  n(f, c.sibling),
                    (c = l(c, p.children || [])),
                    (c.return = f),
                    (f = c);
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else t(f, c);
              c = c.sibling;
            }
            (c = Kl(p, f.mode, h)), (c.return = f), (f = c);
          }
          return i(f);
        case qe:
          return (S = p._init), D(f, c, S(p._payload), h);
      }
      if (yn(p)) return w(f, c, p, h);
      if (cn(p)) return x(f, c, p, h);
      pr(f, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = l(c, p)), (c.return = f), (f = c))
          : (n(f, c), (c = Wl(p, f.mode, h)), (c.return = f), (f = c)),
        i(f))
      : n(f, c);
  }
  return D;
}
var en = la(!0),
  oa = la(!1),
  Wr = At(null),
  Kr = null,
  Vt = null,
  ci = null;
function di() {
  ci = Vt = Kr = null;
}
function fi(e) {
  var t = Wr.current;
  F(Wr), (e._currentValue = t);
}
function Eo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Zt(e, t) {
  (Kr = e),
    (ci = Vt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ce = !0), (e.firstContext = null));
}
function Ee(e) {
  var t = e._currentValue;
  if (ci !== e)
    if (
      ((e = {
        context: e,
        memoizedValue: t,
        next: null,
      }),
      Vt === null)
    ) {
      if (Kr === null) throw Error(v(308));
      (Vt = e),
        (Kr.dependencies = {
          lanes: 0,
          firstContext: e,
        });
    } else Vt = Vt.next = e;
  return t;
}
var xt = null;
function pi(e) {
  xt === null ? (xt = [e]) : xt.push(e);
}
function ia(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), pi(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Ke(e, r)
  );
}
function Ke(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var be = !1;
function Ai(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: {
      pending: null,
      interleaved: null,
      lanes: 0,
    },
    effects: null,
  };
}
function ua(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function He(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ut(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Q & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Ke(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), pi(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Ke(e, n)
  );
}
function Sr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), $o(e, n);
  }
}
function wu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Jr(e, t, n, r) {
  var l = e.updateQueue;
  be = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      d = s.next;
    (s.next = null), i === null ? (o = d) : (i.next = d), (i = s);
    var g = e.alternate;
    g !== null &&
      ((g = g.updateQueue),
      (u = g.lastBaseUpdate),
      u !== i &&
        (u === null ? (g.firstBaseUpdate = d) : (u.next = d),
        (g.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var m = l.baseState;
    (i = 0), (g = d = s = null), (u = o);
    do {
      var A = u.lane,
        y = u.eventTime;
      if ((r & A) === A) {
        g !== null &&
          (g = g.next =
            {
              eventTime: y,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var w = e,
            x = u;
          switch (((A = t), (y = n), x.tag)) {
            case 1:
              if (((w = x.payload), typeof w == "function")) {
                m = w.call(y, m, A);
                break e;
              }
              m = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = x.payload),
                (A = typeof w == "function" ? w.call(y, m, A) : w),
                A == null)
              )
                break e;
              m = Y({}, m, A);
              break e;
            case 2:
              be = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (A = l.effects),
          A === null ? (l.effects = [u]) : A.push(u));
      } else
        (y = {
          eventTime: y,
          lane: A,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          g === null ? ((d = g = y), (s = m)) : (g = g.next = y),
          (i |= A);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (A = u),
          (u = A.next),
          (A.next = null),
          (l.lastBaseUpdate = A),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (g === null && (s = m),
      (l.baseState = s),
      (l.firstBaseUpdate = d),
      (l.lastBaseUpdate = g),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Bt |= i), (e.lanes = i), (e.memoizedState = m);
  }
}
function xu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(v(191, l));
        l.call(r);
      }
    }
}
var _n = {},
  Oe = At(_n),
  Vn = At(_n),
  Hn = At(_n);
function kt(e) {
  if (e === _n) throw Error(v(174));
  return e;
}
function mi(e, t) {
  switch ((L(Hn, t), L(Vn, e), L(Oe, _n), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ro(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ro(t, e));
  }
  F(Oe), L(Oe, t);
}
function tn() {
  F(Oe), F(Vn), F(Hn);
}
function sa(e) {
  kt(Hn.current);
  var t = kt(Oe.current),
    n = ro(t, e.type);
  t !== n && (L(Vn, e), L(Oe, n));
}
function gi(e) {
  Vn.current === e && (F(Oe), F(Vn));
}
var z = At(0);
function Gr(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var zl = [];
function hi() {
  for (var e = 0; e < zl.length; e++)
    zl[e]._workInProgressVersionPrimary = null;
  zl.length = 0;
}
var Nr = Ge.ReactCurrentDispatcher,
  Ml = Ge.ReactCurrentBatchConfig,
  It = 0,
  M = null,
  J = null,
  q = null,
  Zr = !1,
  In = !1,
  Xn = 0,
  ef = 0;
function te() {
  throw Error(v(321));
}
function vi(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Pe(e[n], t[n])) return !1;
  return !0;
}
function yi(e, t, n, r, l, o) {
  if (
    ((It = o),
    (M = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Nr.current = e === null || e.memoizedState === null ? lf : of),
    (e = n(r, l)),
    In)
  ) {
    o = 0;
    do {
      if (((In = !1), (Xn = 0), 25 <= o)) throw Error(v(301));
      (o += 1),
        (q = J = null),
        (t.updateQueue = null),
        (Nr.current = uf),
        (e = n(r, l));
    } while (In);
  }
  if (
    ((Nr.current = qr),
    (t = J !== null && J.next !== null),
    (It = 0),
    (q = J = M = null),
    (Zr = !1),
    t)
  )
    throw Error(v(300));
  return e;
}
function wi() {
  var e = Xn !== 0;
  return (Xn = 0), e;
}
function Te() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return q === null ? (M.memoizedState = q = e) : (q = q.next = e), q;
}
function Se() {
  if (J === null) {
    var e = M.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = J.next;
  var t = q === null ? M.memoizedState : q.next;
  if (t !== null) (q = t), (J = e);
  else {
    if (e === null) throw Error(v(310));
    (J = e),
      (e = {
        memoizedState: J.memoizedState,
        baseState: J.baseState,
        baseQueue: J.baseQueue,
        queue: J.queue,
        next: null,
      }),
      q === null ? (M.memoizedState = q = e) : (q = q.next = e);
  }
  return q;
}
function Wn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Yl(e) {
  var t = Se(),
    n = t.queue;
  if (n === null) throw Error(v(311));
  n.lastRenderedReducer = e;
  var r = J,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      s = null,
      d = o;
    do {
      var g = d.lane;
      if ((It & g) === g)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null,
            }),
          (r = d.hasEagerState ? d.eagerState : e(r, d.action));
      else {
        var m = {
          lane: g,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null,
        };
        s === null ? ((u = s = m), (i = r)) : (s = s.next = m),
          (M.lanes |= g),
          (Bt |= g);
      }
      d = d.next;
    } while (d !== null && d !== o);
    s === null ? (i = r) : (s.next = u),
      Pe(r, t.memoizedState) || (ce = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (M.lanes |= o), (Bt |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Vl(e) {
  var t = Se(),
    n = t.queue;
  if (n === null) throw Error(v(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    Pe(o, t.memoizedState) || (ce = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function aa() {}
function ca(e, t) {
  var n = M,
    r = Se(),
    l = t(),
    o = !Pe(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (ce = !0)),
    (r = r.queue),
    xi(pa.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (q !== null && q.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Kn(9, fa.bind(null, n, r, l, t), void 0, null),
      b === null)
    )
      throw Error(v(349));
    It & 30 || da(n, t, l);
  }
  return l;
}
function da(e, t, n) {
  (e.flags |= 16384),
    (e = {
      getSnapshot: t,
      value: n,
    }),
    (t = M.updateQueue),
    t === null
      ? ((t = {
          lastEffect: null,
          stores: null,
        }),
        (M.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function fa(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Aa(t) && ma(e);
}
function pa(e, t, n) {
  return n(function () {
    Aa(t) && ma(e);
  });
}
function Aa(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Pe(e, n);
  } catch {
    return !0;
  }
}
function ma(e) {
  var t = Ke(e, 1);
  t !== null && Qe(t, e, 1, -1);
}
function ku(e) {
  var t = Te();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Wn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = rf.bind(null, M, e)),
    [t.memoizedState, e]
  );
}
function Kn(e, t, n, r) {
  return (
    (e = {
      tag: e,
      create: t,
      destroy: n,
      deps: r,
      next: null,
    }),
    (t = M.updateQueue),
    t === null
      ? ((t = {
          lastEffect: null,
          stores: null,
        }),
        (M.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function ga() {
  return Se().memoizedState;
}
function Ir(e, t, n, r) {
  var l = Te();
  (M.flags |= e),
    (l.memoizedState = Kn(1 | t, n, void 0, r === void 0 ? null : r));
}
function al(e, t, n, r) {
  var l = Se();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (J !== null) {
    var i = J.memoizedState;
    if (((o = i.destroy), r !== null && vi(r, i.deps))) {
      l.memoizedState = Kn(t, n, o, r);
      return;
    }
  }
  (M.flags |= e), (l.memoizedState = Kn(1 | t, n, o, r));
}
function Cu(e, t) {
  return Ir(8390656, 8, e, t);
}
function xi(e, t) {
  return al(2048, 8, e, t);
}
function ha(e, t) {
  return al(4, 2, e, t);
}
function va(e, t) {
  return al(4, 4, e, t);
}
function ya(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function wa(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), al(4, 4, ya.bind(null, t, e), n)
  );
}
function ki() {}
function xa(e, t) {
  var n = Se();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && vi(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function ka(e, t) {
  var n = Se();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && vi(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ca(e, t, n) {
  return It & 21
    ? (Pe(n, t) || ((n = Bs()), (M.lanes |= n), (Bt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ce = !0)), (e.memoizedState = n));
}
function tf(e, t) {
  var n = P;
  (P = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ml.transition;
  Ml.transition = {};
  try {
    e(!1), t();
  } finally {
    (P = n), (Ml.transition = r);
  }
}
function Ea() {
  return Se().memoizedState;
}
function nf(e, t, n) {
  var r = at(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Sa(e))
  )
    Na(t, n);
  else if (((n = ia(e, t, n, r)), n !== null)) {
    var l = ie();
    Qe(n, e, r, l), Ia(n, t, r);
  }
}
function rf(e, t, n) {
  var r = at(e),
    l = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
  if (Sa(e)) Na(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Pe(u, i))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), pi(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = ia(e, t, l, r)),
      n !== null && ((l = ie()), Qe(n, e, r, l), Ia(n, t, r));
  }
}
function Sa(e) {
  var t = e.alternate;
  return e === M || (t !== null && t === M);
}
function Na(e, t) {
  In = Zr = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Ia(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), $o(e, n);
  }
}
var qr = {
    readContext: Ee,
    useCallback: te,
    useContext: te,
    useEffect: te,
    useImperativeHandle: te,
    useInsertionEffect: te,
    useLayoutEffect: te,
    useMemo: te,
    useReducer: te,
    useRef: te,
    useState: te,
    useDebugValue: te,
    useDeferredValue: te,
    useTransition: te,
    useMutableSource: te,
    useSyncExternalStore: te,
    useId: te,
    unstable_isNewReconciler: !1,
  },
  lf = {
    readContext: Ee,
    useCallback: function (e, t) {
      return (Te().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ee,
    useEffect: Cu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ir(4194308, 4, ya.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ir(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ir(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Te();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Te();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = nf.bind(null, M, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Te();
      return (
        (e = {
          current: e,
        }),
        (t.memoizedState = e)
      );
    },
    useState: ku,
    useDebugValue: ki,
    useDeferredValue: function (e) {
      return (Te().memoizedState = e);
    },
    useTransition: function () {
      var e = ku(!1),
        t = e[0];
      return (e = tf.bind(null, e[1])), (Te().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = M,
        l = Te();
      if (O) {
        if (n === void 0) throw Error(v(407));
        n = n();
      } else {
        if (((n = t()), b === null)) throw Error(v(349));
        It & 30 || da(r, t, n);
      }
      l.memoizedState = n;
      var o = {
        value: n,
        getSnapshot: t,
      };
      return (
        (l.queue = o),
        Cu(pa.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Kn(9, fa.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Te(),
        t = b.identifierPrefix;
      if (O) {
        var n = Ve,
          r = Ye;
        (n = (r & ~(1 << (32 - Ue(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Xn++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = ef++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  of = {
    readContext: Ee,
    useCallback: xa,
    useContext: Ee,
    useEffect: xi,
    useImperativeHandle: wa,
    useInsertionEffect: ha,
    useLayoutEffect: va,
    useMemo: ka,
    useReducer: Yl,
    useRef: ga,
    useState: function () {
      return Yl(Wn);
    },
    useDebugValue: ki,
    useDeferredValue: function (e) {
      var t = Se();
      return Ca(t, J.memoizedState, e);
    },
    useTransition: function () {
      var e = Yl(Wn)[0],
        t = Se().memoizedState;
      return [e, t];
    },
    useMutableSource: aa,
    useSyncExternalStore: ca,
    useId: Ea,
    unstable_isNewReconciler: !1,
  },
  uf = {
    readContext: Ee,
    useCallback: xa,
    useContext: Ee,
    useEffect: xi,
    useImperativeHandle: wa,
    useInsertionEffect: ha,
    useLayoutEffect: va,
    useMemo: ka,
    useReducer: Vl,
    useRef: ga,
    useState: function () {
      return Vl(Wn);
    },
    useDebugValue: ki,
    useDeferredValue: function (e) {
      var t = Se();
      return J === null ? (t.memoizedState = e) : Ca(t, J.memoizedState, e);
    },
    useTransition: function () {
      var e = Vl(Wn)[0],
        t = Se().memoizedState;
      return [e, t];
    },
    useMutableSource: aa,
    useSyncExternalStore: ca,
    useId: Ea,
    unstable_isNewReconciler: !1,
  };
function Be(e, t) {
  if (e && e.defaultProps) {
    (t = Y({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function So(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Y({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var cl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Ut(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ie(),
      l = at(e),
      o = He(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = ut(e, o, l)),
      t !== null && (Qe(t, e, l, r), Sr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ie(),
      l = at(e),
      o = He(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = ut(e, o, l)),
      t !== null && (Qe(t, e, l, r), Sr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ie(),
      r = at(e),
      l = He(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = ut(e, l, r)),
      t !== null && (Qe(t, e, r, n), Sr(t, e, r));
  },
};
function Eu(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !On(n, r) || !On(l, o)
      : !0
  );
}
function Ba(e, t, n) {
  var r = !1,
    l = ft,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Ee(o))
      : ((l = fe(t) ? St : le.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? _t(e, l) : ft)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = cl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Su(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && cl.enqueueReplaceState(t, t.state, null);
}
function No(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Ai(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = Ee(o))
    : ((o = fe(t) ? St : le.current), (l.context = _t(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (So(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && cl.enqueueReplaceState(l, l.state, null),
      Jr(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function nn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Lc(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return {
    value: e,
    source: t,
    stack: l,
    digest: null,
  };
}
function Hl(e, t, n) {
  return {
    value: e,
    source: null,
    stack: n ?? null,
    digest: t ?? null,
  };
}
function Io(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var sf = typeof WeakMap == "function" ? WeakMap : Map;
function Ra(e, t, n) {
  (n = He(-1, n)),
    (n.tag = 3),
    (n.payload = {
      element: null,
    });
  var r = t.value;
  return (
    (n.callback = function () {
      _r || ((_r = !0), (Do = r)), Io(e, t);
    }),
    n
  );
}
function ja(e, t, n) {
  (n = He(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Io(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Io(e, t),
          typeof r != "function" &&
            (st === null ? (st = new Set([this])) : st.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Nu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new sf();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = kf.bind(null, e, t, n)), t.then(e, e));
}
function Iu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Bu(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = He(-1, 1)), (t.tag = 2), ut(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var af = Ge.ReactCurrentOwner,
  ce = !1;
function oe(e, t, n, r) {
  t.child = e === null ? oa(t, null, n, r) : en(t, e.child, n, r);
}
function Ru(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    Zt(t, l),
    (r = yi(e, t, n, r, o, l)),
    (n = wi()),
    e !== null && !ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Je(e, t, l))
      : (O && n && ui(t), (t.flags |= 1), oe(e, t, r, l), t.child)
  );
}
function ju(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !ji(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Ua(e, t, o, r, l))
      : ((e = Ur(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : On), n(i, r) && e.ref === t.ref)
    )
      return Je(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = ct(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Ua(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (On(o, r) && e.ref === t.ref)
      if (((ce = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (ce = !0);
      else return (t.lanes = e.lanes), Je(e, t, l);
  }
  return Bo(e, t, n, r, l);
}
function Qa(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null,
      }),
        L(Xt, Ae),
        (Ae |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          L(Xt, Ae),
          (Ae |= e),
          null
        );
      (t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null,
      }),
        (r = o !== null ? o.baseLanes : n),
        L(Xt, Ae),
        (Ae |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      L(Xt, Ae),
      (Ae |= r);
  return oe(e, t, l, n), t.child;
}
function Pa(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Bo(e, t, n, r, l) {
  var o = fe(n) ? St : le.current;
  return (
    (o = _t(t, o)),
    Zt(t, l),
    (n = yi(e, t, n, r, o, l)),
    (r = wi()),
    e !== null && !ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Je(e, t, l))
      : (O && r && ui(t), (t.flags |= 1), oe(e, t, n, l), t.child)
  );
}
function Uu(e, t, n, r, l) {
  if (fe(n)) {
    var o = !0;
    Vr(t);
  } else o = !1;
  if ((Zt(t, l), t.stateNode === null))
    Br(e, t), Ba(t, n, r), No(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var s = i.context,
      d = n.contextType;
    typeof d == "object" && d !== null
      ? (d = Ee(d))
      : ((d = fe(n) ? St : le.current), (d = _t(t, d)));
    var g = n.getDerivedStateFromProps,
      m =
        typeof g == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || s !== d) && Su(t, i, r, d)),
      (be = !1);
    var A = t.memoizedState;
    (i.state = A),
      Jr(t, r, i, l),
      (s = t.memoizedState),
      u !== r || A !== s || de.current || be
        ? (typeof g == "function" && (So(t, n, g, r), (s = t.memoizedState)),
          (u = be || Eu(t, n, u, r, A, s, d))
            ? (m ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = d),
          (r = u))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      ua(e, t),
      (u = t.memoizedProps),
      (d = t.type === t.elementType ? u : Be(t.type, u)),
      (i.props = d),
      (m = t.pendingProps),
      (A = i.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Ee(s))
        : ((s = fe(n) ? St : le.current), (s = _t(t, s)));
    var y = n.getDerivedStateFromProps;
    (g =
      typeof y == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== m || A !== s) && Su(t, i, r, s)),
      (be = !1),
      (A = t.memoizedState),
      (i.state = A),
      Jr(t, r, i, l);
    var w = t.memoizedState;
    u !== m || A !== w || de.current || be
      ? (typeof y == "function" && (So(t, n, y, r), (w = t.memoizedState)),
        (d = be || Eu(t, n, d, r, A, w, s) || !1)
          ? (g ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, w, s),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, w, s)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && A === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && A === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (i.props = r),
        (i.state = w),
        (i.context = s),
        (r = d))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && A === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && A === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ro(e, t, n, r, o, l);
}
function Ro(e, t, n, r, l, o) {
  Pa(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && gu(t, n, !1), Je(e, t, o);
  (r = t.stateNode), (af.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = en(t, e.child, null, o)), (t.child = en(t, null, u, o)))
      : oe(e, t, u, o),
    (t.memoizedState = r.state),
    l && gu(t, n, !0),
    t.child
  );
}
function La(e) {
  var t = e.stateNode;
  t.pendingContext
    ? mu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && mu(e, t.context, !1),
    mi(e, t.containerInfo);
}
function Qu(e, t, n, r, l) {
  return $t(), ai(l), (t.flags |= 256), oe(e, t, n, r), t.child;
}
var jo = {
  dehydrated: null,
  treeContext: null,
  retryLane: 0,
};
function Uo(e) {
  return {
    baseLanes: e,
    cachePool: null,
    transitions: null,
  };
}
function Ta(e, t, n) {
  var r = t.pendingProps,
    l = z.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    L(z, l & 1),
    e === null)
  )
    return (
      Co(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = {
                mode: "hidden",
                children: i,
              }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = pl(i, r, 0, null)),
              (e = Et(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Uo(n)),
              (t.memoizedState = jo),
              e)
            : Ci(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return cf(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var s = {
      mode: "hidden",
      children: r.children,
    };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = ct(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = ct(u, o)) : ((o = Et(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Uo(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = jo),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = ct(o, {
      mode: "visible",
      children: r.children,
    })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Ci(e, t) {
  return (
    (t = pl(
      {
        mode: "visible",
        children: t,
      },
      e.mode,
      0,
      null
    )),
    (t.return = e),
    (e.child = t)
  );
}
function Ar(e, t, n, r) {
  return (
    r !== null && ai(r),
    en(t, e.child, null, n),
    (e = Ci(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function cf(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Hl(Error(v(422)))), Ar(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = pl(
          {
            mode: "visible",
            children: r.children,
          },
          l,
          0,
          null
        )),
        (o = Et(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && en(t, e.child, null, i),
        (t.child.memoizedState = Uo(i)),
        (t.memoizedState = jo),
        o);
  if (!(t.mode & 1)) return Ar(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(v(419))), (r = Hl(o, r, void 0)), Ar(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), ce || u)) {
    if (((r = b), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), Ke(e, l), Qe(r, e, l, -1));
    }
    return Ri(), (r = Hl(Error(v(421)))), Ar(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Cf.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (me = it(l.nextSibling)),
      (ge = t),
      (O = !0),
      (je = null),
      e !== null &&
        ((we[xe++] = Ye),
        (we[xe++] = Ve),
        (we[xe++] = Nt),
        (Ye = e.id),
        (Ve = e.overflow),
        (Nt = t)),
      (t = Ci(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Pu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Eo(e.return, t, n);
}
function Xl(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function Fa(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((oe(e, t, r.children, n), (r = z.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Pu(e, n, t);
        else if (e.tag === 19) Pu(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((L(z, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Gr(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Xl(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Gr(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Xl(t, !0, n, null, o);
        break;
      case "together":
        Xl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Br(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Je(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Bt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(v(153));
  if (t.child !== null) {
    for (
      e = t.child, n = ct(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = ct(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function df(e, t, n) {
  switch (t.tag) {
    case 3:
      La(t), $t();
      break;
    case 5:
      sa(t);
      break;
    case 1:
      fe(t.type) && Vr(t);
      break;
    case 4:
      mi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      L(Wr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (L(z, z.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Ta(e, t, n)
          : (L(z, z.current & 1),
            (e = Je(e, t, n)),
            e !== null ? e.sibling : null);
      L(z, z.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Fa(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        L(z, z.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Qa(e, t, n);
  }
  return Je(e, t, n);
}
var Da, Qo, Oa, za;
Da = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Qo = function () {};
Oa = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), kt(Oe.current);
    var o = null;
    switch (n) {
      case "input":
        (l = $l(e, l)), (r = $l(e, r)), (o = []);
        break;
      case "select":
        (l = Y({}, l, {
          value: void 0,
        })),
          (r = Y({}, r, {
            value: void 0,
          })),
          (o = []);
        break;
      case "textarea":
        (l = no(e, l)), (r = no(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Mr);
    }
    lo(n, r);
    var i;
    n = null;
    for (d in l)
      if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null)
        if (d === "style") {
          var u = l[d];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          d !== "dangerouslySetInnerHTML" &&
            d !== "children" &&
            d !== "suppressContentEditableWarning" &&
            d !== "suppressHydrationWarning" &&
            d !== "autoFocus" &&
            (Un.hasOwnProperty(d)
              ? o || (o = [])
              : (o = o || []).push(d, null));
    for (d in r) {
      var s = r[d];
      if (
        ((u = l != null ? l[d] : void 0),
        r.hasOwnProperty(d) && s !== u && (s != null || u != null))
      )
        if (d === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in s)
              s.hasOwnProperty(i) &&
                u[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (o || (o = []), o.push(d, n)), (n = s);
        else
          d === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (o = o || []).push(d, s))
            : d === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (o = o || []).push(d, "" + s)
            : d !== "suppressContentEditableWarning" &&
              d !== "suppressHydrationWarning" &&
              (Un.hasOwnProperty(d)
                ? (s != null && d === "onScroll" && T("scroll", e),
                  o || u === s || (o = []))
                : (o = o || []).push(d, s));
    }
    n && (o = o || []).push("style", n);
    var d = o;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
za = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function gn(e, t) {
  if (!O)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ne(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function ff(e, t, n) {
  var r = t.pendingProps;
  switch ((si(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ne(t), null;
    case 1:
      return fe(t.type) && Yr(), ne(t), null;
    case 3:
      return (
        (r = t.stateNode),
        tn(),
        F(de),
        F(le),
        hi(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (fr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), je !== null && (Mo(je), (je = null)))),
        Qo(e, t),
        ne(t),
        null
      );
    case 5:
      gi(t);
      var l = kt(Hn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Oa(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(v(166));
          return ne(t), null;
        }
        if (((e = kt(Oe.current)), fr(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Fe] = t), (r[Yn] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              T("cancel", r), T("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              T("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < xn.length; l++) T(xn[l], r);
              break;
            case "source":
              T("error", r);
              break;
            case "img":
            case "image":
            case "link":
              T("error", r), T("load", r);
              break;
            case "details":
              T("toggle", r);
              break;
            case "input":
              Vi(r, o), T("invalid", r);
              break;
            case "select":
              (r._wrapperState = {
                wasMultiple: !!o.multiple,
              }),
                T("invalid", r);
              break;
            case "textarea":
              Xi(r, o), T("invalid", r);
          }
          lo(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      dr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      dr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Un.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  T("scroll", r);
            }
          switch (n) {
            case "input":
              rr(r), Hi(r, o, !0);
              break;
            case "textarea":
              rr(r), Wi(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Mr);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ps(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, {
                    is: r.is,
                  }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Fe] = t),
            (e[Yn] = r),
            Da(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = oo(n, r)), n)) {
              case "dialog":
                T("cancel", e), T("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                T("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < xn.length; l++) T(xn[l], e);
                l = r;
                break;
              case "source":
                T("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                T("error", e), T("load", e), (l = r);
                break;
              case "details":
                T("toggle", e), (l = r);
                break;
              case "input":
                Vi(e, r), (l = $l(e, r)), T("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = {
                  wasMultiple: !!r.multiple,
                }),
                  (l = Y({}, r, {
                    value: void 0,
                  })),
                  T("invalid", e);
                break;
              case "textarea":
                Xi(e, r), (l = no(e, r)), T("invalid", e);
                break;
              default:
                l = r;
            }
            lo(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style"
                  ? gs(e, s)
                  : o === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && As(e, s))
                  : o === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Qn(e, s)
                    : typeof s == "number" && Qn(e, "" + s)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Un.hasOwnProperty(o)
                      ? s != null && o === "onScroll" && T("scroll", e)
                      : s != null && Jo(e, o, s, i));
              }
            switch (n) {
              case "input":
                rr(e), Hi(e, r, !1);
                break;
              case "textarea":
                rr(e), Wi(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + dt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Wt(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Wt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Mr);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ne(t), null;
    case 6:
      if (e && t.stateNode != null) za(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(v(166));
        if (((n = kt(Hn.current)), kt(Oe.current), fr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Fe] = t),
            (o = r.nodeValue !== n) && ((e = ge), e !== null))
          )
            switch (e.tag) {
              case 3:
                dr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  dr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Fe] = t),
            (t.stateNode = r);
      }
      return ne(t), null;
    case 13:
      if (
        (F(z),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (O && me !== null && t.mode & 1 && !(t.flags & 128))
          ra(), $t(), (t.flags |= 98560), (o = !1);
        else if (((o = fr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(v(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(v(317));
            o[Fe] = t;
          } else
            $t(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ne(t), (o = !1);
        } else je !== null && (Mo(je), (je = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || z.current & 1 ? G === 0 && (G = 3) : Ri())),
          t.updateQueue !== null && (t.flags |= 4),
          ne(t),
          null);
    case 4:
      return (
        tn(), Qo(e, t), e === null && zn(t.stateNode.containerInfo), ne(t), null
      );
    case 10:
      return fi(t.type._context), ne(t), null;
    case 17:
      return fe(t.type) && Yr(), ne(t), null;
    case 19:
      if ((F(z), (o = t.memoizedState), o === null)) return ne(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) gn(o, !1);
        else {
          if (G !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Gr(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    gn(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return L(z, (z.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            W() > rn &&
            ((t.flags |= 128), (r = !0), gn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Gr(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              gn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !O)
            )
              return ne(t), null;
          } else
            2 * W() - o.renderingStartTime > rn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), gn(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = W()),
          (t.sibling = null),
          (n = z.current),
          L(z, r ? (n & 1) | 2 : n & 1),
          t)
        : (ne(t), null);
    case 22:
    case 23:
      return (
        Bi(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ae & 1073741824 && (ne(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ne(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(v(156, t.tag));
}
function pf(e, t) {
  switch ((si(t), t.tag)) {
    case 1:
      return (
        fe(t.type) && Yr(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        tn(),
        F(de),
        F(le),
        hi(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return gi(t), null;
    case 13:
      if ((F(z), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(v(340));
        $t();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return F(z), null;
    case 4:
      return tn(), null;
    case 10:
      return fi(t.type._context), null;
    case 22:
    case 23:
      return Bi(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var mr = !1,
  re = !1,
  Af = typeof WeakSet == "function" ? WeakSet : Set,
  k = null;
function Ht(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        V(e, t, r);
      }
    else n.current = null;
}
function Po(e, t, n) {
  try {
    n();
  } catch (r) {
    V(e, t, r);
  }
}
var Lu = !1;
function mf(e, t) {
  if (((go = Dr), (e = Xs()), ii(e))) {
    if ("selectionStart" in e)
      var n = {
        start: e.selectionStart,
        end: e.selectionEnd,
      };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            s = -1,
            d = 0,
            g = 0,
            m = e,
            A = null;
          t: for (;;) {
            for (
              var y;
              m !== n || (l !== 0 && m.nodeType !== 3) || (u = i + l),
                m !== o || (r !== 0 && m.nodeType !== 3) || (s = i + r),
                m.nodeType === 3 && (i += m.nodeValue.length),
                (y = m.firstChild) !== null;

            )
              (A = m), (m = y);
            for (;;) {
              if (m === e) break t;
              if (
                (A === n && ++d === l && (u = i),
                A === o && ++g === r && (s = i),
                (y = m.nextSibling) !== null)
              )
                break;
              (m = A), (A = m.parentNode);
            }
            m = y;
          }
          n =
            u === -1 || s === -1
              ? null
              : {
                  start: u,
                  end: s,
                };
        } else n = null;
      }
    n = n || {
      start: 0,
      end: 0,
    };
  } else n = null;
  for (
    ho = {
      focusedElem: e,
      selectionRange: n,
    },
      Dr = !1,
      k = t;
    k !== null;

  )
    if (((t = k), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (k = e);
    else
      for (; k !== null; ) {
        t = k;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var x = w.memoizedProps,
                    D = w.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : Be(t.type, x),
                      D
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(v(163));
            }
        } catch (h) {
          V(t, t.return, h);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (k = e);
          break;
        }
        k = t.return;
      }
  return (w = Lu), (Lu = !1), w;
}
function Bn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Po(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function dl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Lo(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Ma(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ma(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Fe], delete t[Yn], delete t[wo], delete t[qd], delete t[bd])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Ya(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Tu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ya(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function To(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Mr));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (To(e, t, n), e = e.sibling; e !== null; ) To(e, t, n), (e = e.sibling);
}
function Fo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Fo(e, t, n), e = e.sibling; e !== null; ) Fo(e, t, n), (e = e.sibling);
}
var _ = null,
  Re = !1;
function Ze(e, t, n) {
  for (n = n.child; n !== null; ) Va(e, t, n), (n = n.sibling);
}
function Va(e, t, n) {
  if (De && typeof De.onCommitFiberUnmount == "function")
    try {
      De.onCommitFiberUnmount(rl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      re || Ht(n, t);
    case 6:
      var r = _,
        l = Re;
      (_ = null),
        Ze(e, t, n),
        (_ = r),
        (Re = l),
        _ !== null &&
          (Re
            ? ((e = _),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : _.removeChild(n.stateNode));
      break;
    case 18:
      _ !== null &&
        (Re
          ? ((e = _),
            (n = n.stateNode),
            e.nodeType === 8
              ? Dl(e.parentNode, n)
              : e.nodeType === 1 && Dl(e, n),
            Fn(e))
          : Dl(_, n.stateNode));
      break;
    case 4:
      (r = _),
        (l = Re),
        (_ = n.stateNode.containerInfo),
        (Re = !0),
        Ze(e, t, n),
        (_ = r),
        (Re = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !re &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Po(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      Ze(e, t, n);
      break;
    case 1:
      if (
        !re &&
        (Ht(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          V(n, t, u);
        }
      Ze(e, t, n);
      break;
    case 21:
      Ze(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((re = (r = re) || n.memoizedState !== null), Ze(e, t, n), (re = r))
        : Ze(e, t, n);
      break;
    default:
      Ze(e, t, n);
  }
}
function Fu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Af()),
      t.forEach(function (r) {
        var l = Ef.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Ie(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (_ = u.stateNode), (Re = !1);
              break e;
            case 3:
              (_ = u.stateNode.containerInfo), (Re = !0);
              break e;
            case 4:
              (_ = u.stateNode.containerInfo), (Re = !0);
              break e;
          }
          u = u.return;
        }
        if (_ === null) throw Error(v(160));
        Va(o, i, l), (_ = null), (Re = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (d) {
        V(l, t, d);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Ha(t, e), (t = t.sibling);
}
function Ha(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ie(t, e), Le(e), r & 4)) {
        try {
          Bn(3, e, e.return), dl(3, e);
        } catch (x) {
          V(e, e.return, x);
        }
        try {
          Bn(5, e, e.return);
        } catch (x) {
          V(e, e.return, x);
        }
      }
      break;
    case 1:
      Ie(t, e), Le(e), r & 512 && n !== null && Ht(n, n.return);
      break;
    case 5:
      if (
        (Ie(t, e),
        Le(e),
        r & 512 && n !== null && Ht(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Qn(l, "");
        } catch (x) {
          V(e, e.return, x);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && ds(l, o),
              oo(u, i);
            var d = oo(u, o);
            for (i = 0; i < s.length; i += 2) {
              var g = s[i],
                m = s[i + 1];
              g === "style"
                ? gs(l, m)
                : g === "dangerouslySetInnerHTML"
                ? As(l, m)
                : g === "children"
                ? Qn(l, m)
                : Jo(l, g, m, d);
            }
            switch (u) {
              case "input":
                eo(l, o);
                break;
              case "textarea":
                fs(l, o);
                break;
              case "select":
                var A = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var y = o.value;
                y != null
                  ? Wt(l, !!o.multiple, y, !1)
                  : A !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Wt(l, !!o.multiple, o.defaultValue, !0)
                      : Wt(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Yn] = o;
          } catch (x) {
            V(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((Ie(t, e), Le(e), r & 4)) {
        if (e.stateNode === null) throw Error(v(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (x) {
          V(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (Ie(t, e), Le(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Fn(t.containerInfo);
        } catch (x) {
          V(e, e.return, x);
        }
      break;
    case 4:
      Ie(t, e), Le(e);
      break;
    case 13:
      Ie(t, e),
        Le(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Ni = W())),
        r & 4 && Fu(e);
      break;
    case 22:
      if (
        ((g = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((re = (d = re) || g), Ie(t, e), (re = d)) : Ie(t, e),
        Le(e),
        r & 8192)
      ) {
        if (
          ((d = e.memoizedState !== null),
          (e.stateNode.isHidden = d) && !g && e.mode & 1)
        )
          for (k = e, g = e.child; g !== null; ) {
            for (m = k = g; k !== null; ) {
              switch (((A = k), (y = A.child), A.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Bn(4, A, A.return);
                  break;
                case 1:
                  Ht(A, A.return);
                  var w = A.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = A), (n = A.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (x) {
                      V(r, n, x);
                    }
                  }
                  break;
                case 5:
                  Ht(A, A.return);
                  break;
                case 22:
                  if (A.memoizedState !== null) {
                    Ou(m);
                    continue;
                  }
              }
              y !== null ? ((y.return = A), (k = y)) : Ou(m);
            }
            g = g.sibling;
          }
        e: for (g = null, m = e; ; ) {
          if (m.tag === 5) {
            if (g === null) {
              g = m;
              try {
                (l = m.stateNode),
                  d
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((u = m.stateNode),
                      (s = m.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = ms("display", i)));
              } catch (x) {
                V(e, e.return, x);
              }
            }
          } else if (m.tag === 6) {
            if (g === null)
              try {
                m.stateNode.nodeValue = d ? "" : m.memoizedProps;
              } catch (x) {
                V(e, e.return, x);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            g === m && (g = null), (m = m.return);
          }
          g === m && (g = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      Ie(t, e), Le(e), r & 4 && Fu(e);
      break;
    case 21:
      break;
    default:
      Ie(t, e), Le(e);
  }
}
function Le(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Ya(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(v(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Qn(l, ""), (r.flags &= -33));
          var o = Tu(e);
          Fo(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = Tu(e);
          To(e, u, i);
          break;
        default:
          throw Error(v(161));
      }
    } catch (s) {
      V(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function gf(e, t, n) {
  (k = e), Xa(e);
}
function Xa(e, t, n) {
  for (var r = (e.mode & 1) !== 0; k !== null; ) {
    var l = k,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || mr;
      if (!i) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || re;
        u = mr;
        var d = re;
        if (((mr = i), (re = s) && !d))
          for (k = l; k !== null; )
            (i = k),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? zu(l)
                : s !== null
                ? ((s.return = i), (k = s))
                : zu(l);
        for (; o !== null; ) (k = o), Xa(o), (o = o.sibling);
        (k = l), (mr = u), (re = d);
      }
      Du(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (k = o)) : Du(e);
  }
}
function Du(e) {
  for (; k !== null; ) {
    var t = k;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              re || dl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !re)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Be(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && xu(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                xu(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var d = t.alternate;
                if (d !== null) {
                  var g = d.memoizedState;
                  if (g !== null) {
                    var m = g.dehydrated;
                    m !== null && Fn(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(v(163));
          }
        re || (t.flags & 512 && Lo(t));
      } catch (A) {
        V(t, t.return, A);
      }
    }
    if (t === e) {
      k = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (k = n);
      break;
    }
    k = t.return;
  }
}
function Ou(e) {
  for (; k !== null; ) {
    var t = k;
    if (t === e) {
      k = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (k = n);
      break;
    }
    k = t.return;
  }
}
function zu(e) {
  for (; k !== null; ) {
    var t = k;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            dl(4, t);
          } catch (s) {
            V(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              V(t, l, s);
            }
          }
          var o = t.return;
          try {
            Lo(t);
          } catch (s) {
            V(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Lo(t);
          } catch (s) {
            V(t, i, s);
          }
      }
    } catch (s) {
      V(t, t.return, s);
    }
    if (t === e) {
      k = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (k = u);
      break;
    }
    k = t.return;
  }
}
var hf = Math.ceil,
  br = Ge.ReactCurrentDispatcher,
  Ei = Ge.ReactCurrentOwner,
  Ce = Ge.ReactCurrentBatchConfig,
  Q = 0,
  b = null,
  K = null,
  $ = 0,
  Ae = 0,
  Xt = At(0),
  G = 0,
  Jn = null,
  Bt = 0,
  fl = 0,
  Si = 0,
  Rn = null,
  ae = null,
  Ni = 0,
  rn = 1 / 0,
  ze = null,
  _r = !1,
  Do = null,
  st = null,
  gr = !1,
  nt = null,
  $r = 0,
  jn = 0,
  Oo = null,
  Rr = -1,
  jr = 0;
function ie() {
  return Q & 6 ? W() : Rr !== -1 ? Rr : (Rr = W());
}
function at(e) {
  return e.mode & 1
    ? Q & 2 && $ !== 0
      ? $ & -$
      : $d.transition !== null
      ? (jr === 0 && (jr = Bs()), jr)
      : ((e = P),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ts(e.type))),
        e)
    : 1;
}
function Qe(e, t, n, r) {
  if (50 < jn) throw ((jn = 0), (Oo = null), Error(v(185)));
  Zn(e, n, r),
    (!(Q & 2) || e !== b) &&
      (e === b && (!(Q & 2) && (fl |= n), G === 4 && $e(e, $)),
      pe(e, r),
      n === 1 && Q === 0 && !(t.mode & 1) && ((rn = W() + 500), sl && mt()));
}
function pe(e, t) {
  var n = e.callbackNode;
  $c(e, t);
  var r = Fr(e, e === b ? $ : 0);
  if (r === 0)
    n !== null && Gi(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Gi(n), t === 1))
      e.tag === 0 ? _d(Mu.bind(null, e)) : ea(Mu.bind(null, e)),
        Gd(function () {
          !(Q & 6) && mt();
        }),
        (n = null);
    else {
      switch (Rs(r)) {
        case 1:
          n = _o;
          break;
        case 4:
          n = Ns;
          break;
        case 16:
          n = Tr;
          break;
        case 536870912:
          n = Is;
          break;
        default:
          n = Tr;
      }
      n = _a(n, Wa.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Wa(e, t) {
  if (((Rr = -1), (jr = 0), Q & 6)) throw Error(v(327));
  var n = e.callbackNode;
  if (qt() && e.callbackNode !== n) return null;
  var r = Fr(e, e === b ? $ : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = el(e, r);
  else {
    t = r;
    var l = Q;
    Q |= 2;
    var o = Ja();
    (b !== e || $ !== t) && ((ze = null), (rn = W() + 500), Ct(e, t));
    do
      try {
        wf();
        break;
      } catch (u) {
        Ka(e, u);
      }
    while (!0);
    di(),
      (br.current = o),
      (Q = l),
      K !== null ? (t = 0) : ((b = null), ($ = 0), (t = G));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = co(e)), l !== 0 && ((r = l), (t = zo(e, l)))), t === 1)
    )
      throw ((n = Jn), Ct(e, 0), $e(e, r), pe(e, W()), n);
    if (t === 6) $e(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !vf(l) &&
          ((t = el(e, r)),
          t === 2 && ((o = co(e)), o !== 0 && ((r = o), (t = zo(e, o)))),
          t === 1))
      )
        throw ((n = Jn), Ct(e, 0), $e(e, r), pe(e, W()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(v(345));
        case 2:
          yt(e, ae, ze);
          break;
        case 3:
          if (
            ($e(e, r), (r & 130023424) === r && ((t = Ni + 500 - W()), 10 < t))
          ) {
            if (Fr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ie(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = yo(yt.bind(null, e, ae, ze), t);
            break;
          }
          yt(e, ae, ze);
          break;
        case 4:
          if (($e(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Ue(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = W() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * hf(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = yo(yt.bind(null, e, ae, ze), r);
            break;
          }
          yt(e, ae, ze);
          break;
        case 5:
          yt(e, ae, ze);
          break;
        default:
          throw Error(v(329));
      }
    }
  }
  return pe(e, W()), e.callbackNode === n ? Wa.bind(null, e) : null;
}
function zo(e, t) {
  var n = Rn;
  return (
    e.current.memoizedState.isDehydrated && (Ct(e, t).flags |= 256),
    (e = el(e, t)),
    e !== 2 && ((t = ae), (ae = n), t !== null && Mo(t)),
    e
  );
}
function Mo(e) {
  ae === null ? (ae = e) : ae.push.apply(ae, e);
}
function vf(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!Pe(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function $e(e, t) {
  for (
    t &= ~Si,
      t &= ~fl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ue(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Mu(e) {
  if (Q & 6) throw Error(v(327));
  qt();
  var t = Fr(e, 0);
  if (!(t & 1)) return pe(e, W()), null;
  var n = el(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = co(e);
    r !== 0 && ((t = r), (n = zo(e, r)));
  }
  if (n === 1) throw ((n = Jn), Ct(e, 0), $e(e, t), pe(e, W()), n);
  if (n === 6) throw Error(v(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    yt(e, ae, ze),
    pe(e, W()),
    null
  );
}
function Ii(e, t) {
  var n = Q;
  Q |= 1;
  try {
    return e(t);
  } finally {
    (Q = n), Q === 0 && ((rn = W() + 500), sl && mt());
  }
}
function Rt(e) {
  nt !== null && nt.tag === 0 && !(Q & 6) && qt();
  var t = Q;
  Q |= 1;
  var n = Ce.transition,
    r = P;
  try {
    if (((Ce.transition = null), (P = 1), e)) return e();
  } finally {
    (P = r), (Ce.transition = n), (Q = t), !(Q & 6) && mt();
  }
}
function Bi() {
  (Ae = Xt.current), F(Xt);
}
function Ct(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Jd(n)), K !== null))
    for (n = K.return; n !== null; ) {
      var r = n;
      switch ((si(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Yr();
          break;
        case 3:
          tn(), F(de), F(le), hi();
          break;
        case 5:
          gi(r);
          break;
        case 4:
          tn();
          break;
        case 13:
          F(z);
          break;
        case 19:
          F(z);
          break;
        case 10:
          fi(r.type._context);
          break;
        case 22:
        case 23:
          Bi();
      }
      n = n.return;
    }
  if (
    ((b = e),
    (K = e = ct(e.current, null)),
    ($ = Ae = t),
    (G = 0),
    (Jn = null),
    (Si = fl = Bt = 0),
    (ae = Rn = null),
    xt !== null)
  ) {
    for (t = 0; t < xt.length; t++)
      if (((n = xt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    xt = null;
  }
  return e;
}
function Ka(e, t) {
  do {
    var n = K;
    try {
      if ((di(), (Nr.current = qr), Zr)) {
        for (var r = M.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Zr = !1;
      }
      if (
        ((It = 0),
        (q = J = M = null),
        (In = !1),
        (Xn = 0),
        (Ei.current = null),
        n === null || n.return === null)
      ) {
        (G = 1), (Jn = t), (K = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          s = t;
        if (
          ((t = $),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var d = s,
            g = u,
            m = g.tag;
          if (!(g.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var A = g.alternate;
            A
              ? ((g.updateQueue = A.updateQueue),
                (g.memoizedState = A.memoizedState),
                (g.lanes = A.lanes))
              : ((g.updateQueue = null), (g.memoizedState = null));
          }
          var y = Iu(i);
          if (y !== null) {
            (y.flags &= -257),
              Bu(y, i, u, o, t),
              y.mode & 1 && Nu(o, d, t),
              (t = y),
              (s = d);
            var w = t.updateQueue;
            if (w === null) {
              var x = new Set();
              x.add(s), (t.updateQueue = x);
            } else w.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Nu(o, d, t), Ri();
              break e;
            }
            s = Error(v(426));
          }
        } else if (O && u.mode & 1) {
          var D = Iu(i);
          if (D !== null) {
            !(D.flags & 65536) && (D.flags |= 256),
              Bu(D, i, u, o, t),
              ai(nn(s, u));
            break e;
          }
        }
        (o = s = nn(s, u)),
          G !== 4 && (G = 2),
          Rn === null ? (Rn = [o]) : Rn.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var f = Ra(o, s, t);
              wu(o, f);
              break e;
            case 1:
              u = s;
              var c = o.type,
                p = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (st === null || !st.has(p))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var h = ja(o, u, t);
                wu(o, h);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Za(n);
    } catch (C) {
      (t = C), K === n && n !== null && (K = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Ja() {
  var e = br.current;
  return (br.current = qr), e === null ? qr : e;
}
function Ri() {
  (G === 0 || G === 3 || G === 2) && (G = 4),
    b === null || (!(Bt & 268435455) && !(fl & 268435455)) || $e(b, $);
}
function el(e, t) {
  var n = Q;
  Q |= 2;
  var r = Ja();
  (b !== e || $ !== t) && ((ze = null), Ct(e, t));
  do
    try {
      yf();
      break;
    } catch (l) {
      Ka(e, l);
    }
  while (!0);
  if ((di(), (Q = n), (br.current = r), K !== null)) throw Error(v(261));
  return (b = null), ($ = 0), G;
}
function yf() {
  for (; K !== null; ) Ga(K);
}
function wf() {
  for (; K !== null && !Xc(); ) Ga(K);
}
function Ga(e) {
  var t = ba(e.alternate, e, Ae);
  (e.memoizedProps = e.pendingProps),
    t === null ? Za(e) : (K = t),
    (Ei.current = null);
}
function Za(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = pf(n, t)), n !== null)) {
        (n.flags &= 32767), (K = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (G = 6), (K = null);
        return;
      }
    } else if (((n = ff(n, t, Ae)), n !== null)) {
      K = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      K = t;
      return;
    }
    K = t = e;
  } while (t !== null);
  G === 0 && (G = 5);
}
function yt(e, t, n) {
  var r = P,
    l = Ce.transition;
  try {
    (Ce.transition = null), (P = 1), xf(e, t, n, r);
  } finally {
    (Ce.transition = l), (P = r);
  }
  return null;
}
function xf(e, t, n, r) {
  do qt();
  while (nt !== null);
  if (Q & 6) throw Error(v(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(v(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (ed(e, o),
    e === b && ((K = b = null), ($ = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      gr ||
      ((gr = !0),
      _a(Tr, function () {
        return qt(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Ce.transition), (Ce.transition = null);
    var i = P;
    P = 1;
    var u = Q;
    (Q |= 4),
      (Ei.current = null),
      mf(e, n),
      Ha(n, e),
      Md(ho),
      (Dr = !!go),
      (ho = go = null),
      (e.current = n),
      gf(n),
      Wc(),
      (Q = u),
      (P = i),
      (Ce.transition = o);
  } else e.current = n;
  if (
    (gr && ((gr = !1), (nt = e), ($r = l)),
    (o = e.pendingLanes),
    o === 0 && (st = null),
    Gc(n.stateNode),
    pe(e, W()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]),
        r(l.value, {
          componentStack: l.stack,
          digest: l.digest,
        });
  if (_r) throw ((_r = !1), (e = Do), (Do = null), e);
  return (
    $r & 1 && e.tag !== 0 && qt(),
    (o = e.pendingLanes),
    o & 1 ? (e === Oo ? jn++ : ((jn = 0), (Oo = e))) : (jn = 0),
    mt(),
    null
  );
}
function qt() {
  if (nt !== null) {
    var e = Rs($r),
      t = Ce.transition,
      n = P;
    try {
      if (((Ce.transition = null), (P = 16 > e ? 16 : e), nt === null))
        var r = !1;
      else {
        if (((e = nt), (nt = null), ($r = 0), Q & 6)) throw Error(v(331));
        var l = Q;
        for (Q |= 4, k = e.current; k !== null; ) {
          var o = k,
            i = o.child;
          if (k.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var d = u[s];
                for (k = d; k !== null; ) {
                  var g = k;
                  switch (g.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Bn(8, g, o);
                  }
                  var m = g.child;
                  if (m !== null) (m.return = g), (k = m);
                  else
                    for (; k !== null; ) {
                      g = k;
                      var A = g.sibling,
                        y = g.return;
                      if ((Ma(g), g === d)) {
                        k = null;
                        break;
                      }
                      if (A !== null) {
                        (A.return = y), (k = A);
                        break;
                      }
                      k = y;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var x = w.child;
                if (x !== null) {
                  w.child = null;
                  do {
                    var D = x.sibling;
                    (x.sibling = null), (x = D);
                  } while (x !== null);
                }
              }
              k = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (k = i);
          else
            e: for (; k !== null; ) {
              if (((o = k), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Bn(9, o, o.return);
                }
              var f = o.sibling;
              if (f !== null) {
                (f.return = o.return), (k = f);
                break e;
              }
              k = o.return;
            }
        }
        var c = e.current;
        for (k = c; k !== null; ) {
          i = k;
          var p = i.child;
          if (i.subtreeFlags & 2064 && p !== null) (p.return = i), (k = p);
          else
            e: for (i = c; k !== null; ) {
              if (((u = k), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      dl(9, u);
                  }
                } catch (C) {
                  V(u, u.return, C);
                }
              if (u === i) {
                k = null;
                break e;
              }
              var h = u.sibling;
              if (h !== null) {
                (h.return = u.return), (k = h);
                break e;
              }
              k = u.return;
            }
        }
        if (
          ((Q = l), mt(), De && typeof De.onPostCommitFiberRoot == "function")
        )
          try {
            De.onPostCommitFiberRoot(rl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (P = n), (Ce.transition = t);
    }
  }
  return !1;
}
function Yu(e, t, n) {
  (t = nn(n, t)),
    (t = Ra(e, t, 1)),
    (e = ut(e, t, 1)),
    (t = ie()),
    e !== null && (Zn(e, 1, t), pe(e, t));
}
function V(e, t, n) {
  if (e.tag === 3) Yu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Yu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (st === null || !st.has(r)))
        ) {
          (e = nn(n, e)),
            (e = ja(t, e, 1)),
            (t = ut(t, e, 1)),
            (e = ie()),
            t !== null && (Zn(t, 1, e), pe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function kf(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ie()),
    (e.pingedLanes |= e.suspendedLanes & n),
    b === e &&
      ($ & n) === n &&
      (G === 4 || (G === 3 && ($ & 130023424) === $ && 500 > W() - Ni)
        ? Ct(e, 0)
        : (Si |= n)),
    pe(e, t);
}
function qa(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ir), (ir <<= 1), !(ir & 130023424) && (ir = 4194304))
      : (t = 1));
  var n = ie();
  (e = Ke(e, t)), e !== null && (Zn(e, t, n), pe(e, n));
}
function Cf(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), qa(e, n);
}
function Ef(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(v(314));
  }
  r !== null && r.delete(t), qa(e, n);
}
var ba;
ba = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || de.current) ce = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ce = !1), df(e, t, n);
      ce = !!(e.flags & 131072);
    }
  else (ce = !1), O && t.flags & 1048576 && ta(t, Xr, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Br(e, t), (e = t.pendingProps);
      var l = _t(t, le.current);
      Zt(t, n), (l = yi(null, t, r, e, l, n));
      var o = wi();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            fe(r) ? ((o = !0), Vr(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Ai(t),
            (l.updater = cl),
            (t.stateNode = l),
            (l._reactInternals = t),
            No(t, r, e, n),
            (t = Ro(null, t, r, !0, o, n)))
          : ((t.tag = 0), O && o && ui(t), oe(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Br(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Nf(r)),
          (e = Be(r, e)),
          l)
        ) {
          case 0:
            t = Bo(null, t, r, e, n);
            break e;
          case 1:
            t = Uu(null, t, r, e, n);
            break e;
          case 11:
            t = Ru(null, t, r, e, n);
            break e;
          case 14:
            t = ju(null, t, r, Be(r.type, e), n);
            break e;
        }
        throw Error(v(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Be(r, l)),
        Bo(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Be(r, l)),
        Uu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((La(t), e === null)) throw Error(v(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          ua(e, t),
          Jr(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = nn(Error(v(423)), t)), (t = Qu(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = nn(Error(v(424)), t)), (t = Qu(e, t, r, n, l));
            break e;
          } else
            for (
              me = it(t.stateNode.containerInfo.firstChild),
                ge = t,
                O = !0,
                je = null,
                n = oa(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if (($t(), r === l)) {
            t = Je(e, t, n);
            break e;
          }
          oe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        sa(t),
        e === null && Co(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        vo(r, l) ? (i = null) : o !== null && vo(r, o) && (t.flags |= 32),
        Pa(e, t),
        oe(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Co(t), null;
    case 13:
      return Ta(e, t, n);
    case 4:
      return (
        mi(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = en(t, null, r, n)) : oe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Be(r, l)),
        Ru(e, t, r, l, n)
      );
    case 7:
      return oe(e, t, t.pendingProps, n), t.child;
    case 8:
      return oe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return oe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          L(Wr, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (Pe(o.value, i)) {
            if (o.children === l.children && !de.current) {
              t = Je(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = He(-1, n & -n)), (s.tag = 2);
                      var d = o.updateQueue;
                      if (d !== null) {
                        d = d.shared;
                        var g = d.pending;
                        g === null
                          ? (s.next = s)
                          : ((s.next = g.next), (g.next = s)),
                          (d.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      Eo(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(v(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  Eo(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        oe(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Zt(t, n),
        (l = Ee(l)),
        (r = r(l)),
        (t.flags |= 1),
        oe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Be(r, t.pendingProps)),
        (l = Be(r.type, l)),
        ju(e, t, r, l, n)
      );
    case 15:
      return Ua(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Be(r, l)),
        Br(e, t),
        (t.tag = 1),
        fe(r) ? ((e = !0), Vr(t)) : (e = !1),
        Zt(t, n),
        Ba(t, r, l),
        No(t, r, l, n),
        Ro(null, t, r, !0, e, n)
      );
    case 19:
      return Fa(e, t, n);
    case 22:
      return Qa(e, t, n);
  }
  throw Error(v(156, t.tag));
};
function _a(e, t) {
  return Ss(e, t);
}
function Sf(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ke(e, t, n, r) {
  return new Sf(e, t, n, r);
}
function ji(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Nf(e) {
  if (typeof e == "function") return ji(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Zo)) return 11;
    if (e === qo) return 14;
  }
  return 2;
}
function ct(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ke(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null
        ? null
        : {
            lanes: t.lanes,
            firstContext: t.firstContext,
          }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ur(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) ji(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Lt:
        return Et(n.children, l, o, t);
      case Go:
        (i = 8), (l |= 8);
        break;
      case Zl:
        return (
          (e = ke(12, n, t, l | 2)), (e.elementType = Zl), (e.lanes = o), e
        );
      case ql:
        return (e = ke(13, n, t, l)), (e.elementType = ql), (e.lanes = o), e;
      case bl:
        return (e = ke(19, n, t, l)), (e.elementType = bl), (e.lanes = o), e;
      case ss:
        return pl(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case is:
              i = 10;
              break e;
            case us:
              i = 9;
              break e;
            case Zo:
              i = 11;
              break e;
            case qo:
              i = 14;
              break e;
            case qe:
              (i = 16), (r = null);
              break e;
          }
        throw Error(v(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ke(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Et(e, t, n, r) {
  return (e = ke(7, e, r, t)), (e.lanes = n), e;
}
function pl(e, t, n, r) {
  return (
    (e = ke(22, e, r, t)),
    (e.elementType = ss),
    (e.lanes = n),
    (e.stateNode = {
      isHidden: !1,
    }),
    e
  );
}
function Wl(e, t, n) {
  return (e = ke(6, e, null, t)), (e.lanes = n), e;
}
function Kl(e, t, n) {
  return (
    (t = ke(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function If(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Nl(0)),
    (this.expirationTimes = Nl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Nl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Ui(e, t, n, r, l, o, i, u, s) {
  return (
    (e = new If(e, t, n, u, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = ke(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ai(o),
    e
  );
}
function Bf(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Pt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function $a(e) {
  if (!e) return ft;
  e = e._reactInternals;
  e: {
    if (Ut(e) !== e || e.tag !== 1) throw Error(v(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (fe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(v(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (fe(n)) return $s(e, n, t);
  }
  return t;
}
function ec(e, t, n, r, l, o, i, u, s) {
  return (
    (e = Ui(n, r, !0, e, l, o, i, u, s)),
    (e.context = $a(null)),
    (n = e.current),
    (r = ie()),
    (l = at(n)),
    (o = He(r, l)),
    (o.callback = t ?? null),
    ut(n, o, l),
    (e.current.lanes = l),
    Zn(e, l, r),
    pe(e, r),
    e
  );
}
function Al(e, t, n, r) {
  var l = t.current,
    o = ie(),
    i = at(l);
  return (
    (n = $a(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = He(o, i)),
    (t.payload = {
      element: e,
    }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ut(l, t, i)),
    e !== null && (Qe(e, l, i, o), Sr(e, l, i)),
    i
  );
}
function tl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Vu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Qi(e, t) {
  Vu(e, t), (e = e.alternate) && Vu(e, t);
}
function Rf() {
  return null;
}
var tc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Pi(e) {
  this._internalRoot = e;
}
ml.prototype.render = Pi.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(v(409));
  Al(e, t, null, null);
};
ml.prototype.unmount = Pi.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Rt(function () {
      Al(null, e, null, null);
    }),
      (t[We] = null);
  }
};
function ml(e) {
  this._internalRoot = e;
}
ml.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Qs();
    e = {
      blockedOn: null,
      target: e,
      priority: t,
    };
    for (var n = 0; n < _e.length && t !== 0 && t < _e[n].priority; n++);
    _e.splice(n, 0, e), n === 0 && Ls(e);
  }
};
function Li(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function gl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Hu() {}
function jf(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var d = tl(i);
        o.call(d);
      };
    }
    var i = ec(t, r, e, 0, null, !1, !1, "", Hu);
    return (
      (e._reactRootContainer = i),
      (e[We] = i.current),
      zn(e.nodeType === 8 ? e.parentNode : e),
      Rt(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var d = tl(s);
      u.call(d);
    };
  }
  var s = Ui(e, 0, !1, null, null, !1, !1, "", Hu);
  return (
    (e._reactRootContainer = s),
    (e[We] = s.current),
    zn(e.nodeType === 8 ? e.parentNode : e),
    Rt(function () {
      Al(t, s, n, r);
    }),
    s
  );
}
function hl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = tl(i);
        u.call(s);
      };
    }
    Al(t, i, e, l);
  } else i = jf(n, t, e, l, r);
  return tl(i);
}
js = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = wn(t.pendingLanes);
        n !== 0 &&
          ($o(t, n | 1), pe(t, W()), !(Q & 6) && ((rn = W() + 500), mt()));
      }
      break;
    case 13:
      Rt(function () {
        var r = Ke(e, 1);
        if (r !== null) {
          var l = ie();
          Qe(r, e, 1, l);
        }
      }),
        Qi(e, 1);
  }
};
ei = function (e) {
  if (e.tag === 13) {
    var t = Ke(e, 134217728);
    if (t !== null) {
      var n = ie();
      Qe(t, e, 134217728, n);
    }
    Qi(e, 134217728);
  }
};
Us = function (e) {
  if (e.tag === 13) {
    var t = at(e),
      n = Ke(e, t);
    if (n !== null) {
      var r = ie();
      Qe(n, e, t, r);
    }
    Qi(e, t);
  }
};
Qs = function () {
  return P;
};
Ps = function (e, t) {
  var n = P;
  try {
    return (P = e), t();
  } finally {
    P = n;
  }
};
uo = function (e, t, n) {
  switch (t) {
    case "input":
      if ((eo(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = ul(r);
            if (!l) throw Error(v(90));
            cs(r), eo(r, l);
          }
        }
      }
      break;
    case "textarea":
      fs(e, n);
      break;
    case "select":
      (t = n.value), t != null && Wt(e, !!n.multiple, t, !1);
  }
};
ys = Ii;
ws = Rt;
var Uf = {
    usingClientEntryPoint: !1,
    Events: [bn, Ot, ul, hs, vs, Ii],
  },
  hn = {
    findFiberByHostInstance: wt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Qf = {
    bundleType: hn.bundleType,
    version: hn.version,
    rendererPackageName: hn.rendererPackageName,
    rendererConfig: hn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ge.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Cs(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: hn.findFiberByHostInstance || Rf,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var hr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!hr.isDisabled && hr.supportsFiber)
    try {
      (rl = hr.inject(Qf)), (De = hr);
    } catch {}
}
ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Uf;
ve.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Li(t)) throw Error(v(200));
  return Bf(e, t, null, n);
};
ve.createRoot = function (e, t) {
  if (!Li(e)) throw Error(v(299));
  var n = !1,
    r = "",
    l = tc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Ui(e, 1, !1, null, null, n, !1, r, l)),
    (e[We] = t.current),
    zn(e.nodeType === 8 ? e.parentNode : e),
    new Pi(t)
  );
};
ve.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(v(188))
      : ((e = Object.keys(e).join(",")), Error(v(268, e)));
  return (e = Cs(t)), (e = e === null ? null : e.stateNode), e;
};
ve.flushSync = function (e) {
  return Rt(e);
};
ve.hydrate = function (e, t, n) {
  if (!gl(t)) throw Error(v(200));
  return hl(null, e, t, !0, n);
};
ve.hydrateRoot = function (e, t, n) {
  if (!Li(e)) throw Error(v(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = tc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = ec(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[We] = t.current),
    zn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new ml(t);
};
ve.render = function (e, t, n) {
  if (!gl(t)) throw Error(v(200));
  return hl(null, e, t, !1, n);
};
ve.unmountComponentAtNode = function (e) {
  if (!gl(e)) throw Error(v(40));
  return e._reactRootContainer
    ? (Rt(function () {
        hl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[We] = null);
        });
      }),
      !0)
    : !1;
};
ve.unstable_batchedUpdates = Ii;
ve.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!gl(n)) throw Error(v(200));
  if (e == null || e._reactInternals === void 0) throw Error(v(38));
  return hl(e, t, n, !1, r);
};
ve.version = "18.3.1-next-f1338f8080-20240426";
function nc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nc);
    } catch (e) {
      console.error(e);
    }
}
nc(), (ns.exports = ve);
var Pf = ns.exports,
  Xu = Pf;
(Jl.createRoot = Xu.createRoot), (Jl.hydrateRoot = Xu.hydrateRoot);
const rc =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAWCAYAAABOm/V6AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADgSURBVHgB1ZZhDYMwEIVfUYAEJDAHSJgEHIADmAIkzMLmAAfMATjYHNxeQ5N10GT8YNftSx45fjTvNeWOAjsiIhk1UCNVIwY0buWdBtrQtJA1UYLUgSAdtKFpGQhyplJoQsOcui+CDDGCZK5TfOx7Bk3+JwiLKnB2Wljf3NgKcbkmfPSIS2/cueTUt1uncj4+J2NMCw240SbwPbTQgmZdIIDOH5ZGqcyjekkJDVyAIdCOBTSQ18XGZ7TzABrIL4xoWd+sNgVIsC+TV9+oA+fA9GmRwc5w50fMg+/CAI8ta554HhFHncIuNwAAAABJRU5ErkJggg==",
  Lf = () => {
    const [e, t] = et.useState(""),
      n = async (l) => {
        if (
          (l.preventDefault(),
          !l.target.querySelector("textarea[name=h-captcha-response]").value)
        ) {
          l.preventDefault(), t("Please fill out captcha field");
          return;
        }
        t("Sending....");
        const i = new FormData(l.target);
        i.append("access_key", "794c2091-f12d-438e-bbf0-4d60ead3690f");
        const u = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: i,
        }).then((s) => s.json());
        u.success
          ? (console.log("Success", u), t(u.message), l.target.reset())
          : (console.log("Error", u), t(u.message));
      };
    function r() {
      const l = document.querySelectorAll('[data-captcha="true"]');
      if (l.length) {
        let i = null,
          u = null,
          s = null;
        l.forEach(function (g) {
          const m = g.dataset.sitekey;
          (i = g.dataset.lang),
            (u = g.dataset.onload),
            (s = g.dataset.render),
            m || (g.dataset.sitekey = "50b2fe65-b00b-4b9e-ad62-3ba471098be2");
        });
        let d = "https://js.hcaptcha.com/1/api.js?recaptchacompat=off";
        i && (d += `&hl=${i}`),
          u && (d += `&onload=${u}`),
          s && (d += `&render=${s}`);
        var o = document.createElement("script");
        (o.type = "text/javascript"),
          (o.async = !0),
          (o.defer = !0),
          (o.src = d),
          document.body.appendChild(o);
      }
    }
    return (
      et.useEffect(() => {
        r();
      }, []),
      a.jsxs("div", {
        id: "contact",
        className:
          "w-full px-[12%] py-10 scroll-mt-20 bg-[url('./assets/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none",
        children: [
          a.jsx("h4", {
            className: "text-center mb-2 text-lg font-Ovo",
            children: "Connect with me",
          }),
          a.jsx("h2", {
            className: "text-center text-5xl font-Ovo",
            children: "Get in touch",
          }),
          a.jsx("p", {
            className: "text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo",
            children:
              "I'd love to hear from you! If you have any questions, comments or feedback, please use the form below.",
          }),
          a.jsxs("form", {
            onSubmit: n,
            className: "max-w-2xl mx-auto",
            children: [
              a.jsx("input", {
                type: "hidden",
                name: "subject",
                value: "Pranav Dalvi - New form Submission",
              }),
              a.jsxs("div", {
                className: "grid grid-cols-auto gap-6 mt-10 mb-8",
                children: [
                  a.jsx("input", {
                    type: "text",
                    placeholder: "Enter your name",
                    className:
                      "flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90",
                    required: !0,
                    name: "name",
                  }),
                  a.jsx("input", {
                    type: "email",
                    placeholder: "Enter your email",
                    className:
                      "flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90",
                    required: !0,
                    name: "email",
                  }),
                ],
              }),
              a.jsx("textarea", {
                rows: "6",
                placeholder: "Enter your message",
                className:
                  "w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90",
                required: !0,
                name: "message",
              }),
              a.jsx("div", {
                className: "h-captcha mb-6 max-w-full",
                "data-captcha": "true",
              }),
              a.jsxs("button", {
                type: "submit",
                className:
                  "py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover",
                children: [
                  "Submit now",
                  a.jsx("img", {
                    src: rc,
                    alt: "",
                    className: "w-4",
                  }),
                ],
              }),
              a.jsx("p", {
                className: "mt-4",
                children: e,
              }),
            ],
          }),
        ],
      })
    );
  },
  lc = "",
  oc = "",
  Tf =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAvCAYAAABTy8xRAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATPSURBVHgB5VrJUeNAFG0JOFBAjUPQZGBHgBwBJoKBCDA3dkSx3jARwESAuc2c7CIBTAaeDKii4MI272laU3K7JWtpeYFXZUtutVvdv//6JEtosLOzU8Phx8fHR9myLEdMLh7w6WANnZeXl4uzs7Ou2sEK/8DCXXS+xMId8TnhHR0dHYQbpoKTvb097ngTpyXxeeEuLi46t7e3N0GDL4Ctra0yDr/E10AZQihBCL/5w+bX1NTUtfhCgKbXae48t7H7KwNs3nck6NMVk4Mk893nl43dX4rqwUFeX18rcByVmZmZCn7/FGMMzvf9/d2f7/Hx8Xc0NWO6u/V6vWTjT25Mp/sgdHie94BBV3B6IMYQXPzb21v15OSkE2q+iPvP7OysSx8Q6fUREr+pbZCuJ8ZPCO2np6eKGuehDU7cn7C+ki3i4cJZ7KuNUgjL4p9/GDUuMJ9qo9HomcvGxoYD894f9OdBAiC8CCE06R9G7BwPMI+62kgPPz09fZckoUsiAIJCuKbTCDdS5Wh3oxAC7rkuNbEHTOhwaImECV1SARC1ubm5FlUr3EghMELgtCOGA6p6FQ65oV6gpsLur0QKpBEAnUYZi+0TAiMEQ48Y4HXzIhSW2+q13d3dc05FpEQqAchJOBSCTJ97IO2xkAiB+3Zobqqnp1li51vM7kQGpBaAnIxj2/bd9vZ2301pl7RPYRBMwBDm+hZPTVxYWLjDqSsyIpMAAsAkznURgvbJjMyQc7xgAqaGOWogNTFv6Z5LABKetL8eMCMzECG0YW5zc7MGDcy9eMKEAILqqmUwTD5Au1YjwtyarF6N8BZGBCDh0h5jwmQzySCyoKkeHh5eqddkmGsIg7Aw6IcwCOxcF/xbVce/4V6ekGWoDkFBo/P0yEHOMfaKMAgIc9WkBvigXTINpZ2q1+IKKYY5XUFDjZqfn2+ZXnwA4wKQKNFOkxZSDHPw9BVdQUNPj9OyKAhFCSBAbCGF0yrDpeQZesAwl7SgyQPjPkB7E8u6enx8XFd3OAosaKSzK5ShLsQH6IBdXNEVUjqECpqh0PNDEQARFFIkYXXXqfLMJUSGgibXvAowATKypbhHagyV9Po4+iaBHecjuEGOjuW2IwxqhlET0DCy7Zi+Dg41mgY/gxYfjAun+N00M20qFU7NyKYY+yYYtwhm2oQAohhZI6oaxUybKrnzCiAXI5sQblTJjUNuPjKzACQpmYuRTYGohKqdt+TOIoAH3HRZR0qyVBUpGNmUiGWmRUZSNpUAglL19PS0r7QtolTVoBZVcmclZRMLICAlFU/vl6rgBi/FkBKYgJTVZZVZSNlEAogjJYssVWPm45fc8iFID9JGiCQCONCRksMoVQegxJohLykbK4Cox08FefqsyEXK2lEd0N4YgafPhICU1TlHGSG0ALPctWG/NxGD3qttlPQQPH1WuDrnKP1WHw/BjWceQRPQsrWQzv9XZ+Tjp+usj5+GBd1jO/nSp05b2/yyZCfu6pqmk/+WJY7umNh7GjRZbrPaVC+E2edpNsCheaCylzQ1fJmvy4rJBMtt7QWY8XoQ0v0owDIzTzo5QfCfOIUzWUvtQcoKnfYn/CVpHdpgolfVZM6K6i3fpOSnpKvJJwEwgT9Q9+7z83MzipH+C3QhVsbWL2HvAAAAAElFTkSuQmCC",
  Ff =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAvCAYAAABTy8xRAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANrSURBVHgB5ZqNdZswEMcPLxCPwAjOBmSCuhMYTxBnApMJ4kxgNqg7Ad4g2UB0gniD6x1CedSVBAiJgPN7T/5CCOmv06E7E4EGRFzT24bKikoM8+VC5b0ur1EUldbaNPCEisDbZX895qgxeJ7xHG6fnCxhq75UAtDg2dTf4PtwIBGe+IMSQMC817oLDyTCeUGDT8E+eOVISpgPXfor/QEJ8MviNASVuK63pJLjtBEol3OXsTFLrvRhqXC6lo1+y3CaCKwnq9HXpOWc9YLqLS1mcnf9A62bjN6eYVqcqdxr7vNxy3mVBbSx153J6qHdesbiYOhfjO17mrSLAMx+wEVCkhn6xabfZXI6C8CwQ1lOSISdYfCbHm30EoB5wytHU190WR8bA57ZxDD4PfajtwCMQI0IdQcOGBZhufYL9sdJANWRlaEjoW6TNusr0A1nARSmdbhDv/AGLIT/GSwAY7pDrNCPczwEbN+LAMyLoZNDZygztOtrD+JNAKZAf2b6gTJI0w3+Ef3hVQBGoNlRtQUmzTZMDnaPfvEuACPQfKvKXM5FKeAR/RNEAIZNeN1TBL7NmZZQqE1WMAEUXQOp3FAv9DY7jfgVwpJRmPqsGxzIcPVCx981x9kPFGAP14eyDW0BiiNqzNsEyoBmjFA7XcA4pFQKNDjHJiiXTQ5hZ/6TsQRgKpNG8/2dd3Zs8hmMSAgfwOuZZy+21Cnrepf6+6oube3G4NcyvPoAgf9mZAv0x6pu03dm2psPKEH+0dD05q/gh9+qXXrnO0YKHpOyPgQ4gz4j68tUTZnpJ/ABDmNIRrYPpg1Vgl+YD9hZOhXiHh4iM+0kgG2f7zNU1WHLTLvEC70FEDheqGrrQ2zoQ9+kbC8BbEnJI46LQPeQu0lnAWxJybH+D7iGl+LGIELXpGwnATLDRUKHql0ZkpRtFWBsT++Ka1K2EkD0bDS0p3elQL2Pii3nJDbPmWoac/n7aUwE6kXQWSs/F1VthU+g50ejgSqrSx93MG1ikCF3MyjjPYtuW37mF/WUGG9pHzWV1FOWCczvKTKeWA63U82xEmTwVioBWCF+TjCG78FPGnxl+VU0yGEmvT2AnO1bhse5VYNnPsPhyhyi6J4rwLyeCezKGWTYnjd/jEy1UT6FwYWXxx3Mkz8gJ/NUW/l//AW6rv+VMPmHvQAAAABJRU5ErkJggg==",
  Df = () =>
    a.jsxs("div", {
      className: "mt-20",
      children: [
        a.jsxs("div", {
          className: "text-center",
          children: [
            a.jsx("img", {
              src: lc,
              alt: "",
              className: "w-36 mx-auto mb-2 dark:hidden",
            }),
            a.jsx("img", {
              src: oc,
              alt: "",
              className: "w-36 mx-auto mb-2 hidden dark:block",
            }),
            a.jsxs("div", {
              className: "w-max flex items-center gap-2 mx-auto",
              children: [
                a.jsx("img", {
                  src: Tf,
                  alt: "",
                  className: "w-6 dark:hidden",
                }),
                a.jsx("img", {
                  src: Ff,
                  alt: "",
                  className: "w-6 hidden dark:block",
                }),
                "pranavdalvi2003@gmail.com",
              ],
            }),
          ],
        }),
        a.jsxs("div", {
          className:
            "text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6",
          children: [
            a.jsx("p", {
              children: "© 2025 Pranav Dalvi. All rights reserved.",
            }),
            a.jsxs("ul", {
              className: "flex items-center gap-10 justify-center mt-4 sm:mt-0",
              children: [
                a.jsx("li", {
                  children: a.jsx("a", {
                    target: "_blank",
                    href: "https://github.com/pranavdalvi2003",
                    children: "GitHub",
                  }),
                }),
                a.jsx("li", {
                  children: a.jsx("a", {
                    target: "_blank",
                    href: "https://www.linkedin.com/in/pranav-dalvi-26a37322a",
                    children: "LinkedIn",
                  }),
                }),
                a.jsx("li", {
                  children: a.jsx("a", {
                    target: "_blank",
                    href: "https://www.instagram.com/_pkd_1711",
                    children: "Instagram",
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  vr =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAiCAYAAAA3WXuFAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGFSURBVHgBzZfbcYMwEEUvGQpwCbiCuAQ6SEpwKkg6yFBCOoAOXIJLIBUEVxCXkN0gecQahDAr2WdmzUP6OHMRK5PhASiKYkOHPdUmwx0hkZIOL1aG6i25kJMGi5TOUEdscySCRHZG4gN9GpKKf6ImZNIoqd4xTEPynw6fREnIiLDEVBqSxp6oCplF+gl/GmPU9mS10A1pXMnw88JaoRVpSCr3YpGQQhqSQTrBQoppSBp5I/dIaKchOVI4R8wJmTRs34ghYmnGbmZGwqbxSrVDfC6NUJInTMSlmhoYbB0mqULUM3pRreQm02FyMfNMh9bUFSRcYFo2NN2Db1BtcyXXX4RJbWXvcXmCHl3AnNonw2gKfQfMqeYmaAq1M+Oz6TApH1mDAFIl1I5tE2NoCp09Y18IRPU/Nb36P+j7k4u3EUo0E2LGHtvsm+WiLXQS15xOjQVoC3Xi+oCFxBYKXsyWmGsoqBFKVIWMgH39Fy1mS4wv147qdEs6TAwh3mRrPArUHPdYwR/kAHQ6DcL5BgAAAABJRU5ErkJggg==",
  Of =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAWCAYAAABOm/V6AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFaSURBVHgBxZbBTcMwFIafAwNkBI9QbskNbhxhg3SBOExAmaBGGYBuAFdO5JjcGCEjlAUS/kdN5Vqp6kp2+kttnKdY71P8+3cEBVRVVXIcx3cM02EYXuu61j7zEgooNC5wWeAnkyRZl2X57DMvKAQaN/a9EGLlA3JFAdW2bZ/n+Q+G9xbIbZZladd1n8fmCYogeKOAN96c8gZAT1rrLc0BYUAWAPnCMLXK3wC5c0GiQRgQaUCkVe4NSD8LhC9IdAgfEIEtpHgr0eHazaUtg1zjzyvVIomTdcVh1dAFxQHHb2JJu6iNuhzwhDJ99kLvF3hCz2JMjm7jOxfgrxYdQim1xqVyADg5916MmZgploABCgdgif6bgxpFkAHgXLA9wNvxEQCN+3zQo9wAyAmA/2BqpuYEfRO+Z4WrGF9Wks4ACA6B4OmtWz62b04BsIIbE0vyQLvg+5j6gJnSL+rQmCnTHo97AAAAAElFTkSuQmCC",
  zf =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAWCAYAAABOm/V6AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADgSURBVHgB1ZZhDYMwEIVfUYAEJDAHSJgEHIADmAIkzMLmAAfMATjYHNxeQ5N10GT8YNftSx45fjTvNeWOAjsiIhk1UCNVIwY0buWdBtrQtJA1UYLUgSAdtKFpGQhyplJoQsOcui+CDDGCZK5TfOx7Bk3+JwiLKnB2Wljf3NgKcbkmfPSIS2/cueTUt1uncj4+J2NMCw240SbwPbTQgmZdIIDOH5ZGqcyjekkJDVyAIdCOBTSQ18XGZ7TzABrIL4xoWd+sNgVIsC+TV9+oA+fA9GmRwc5w50fMg+/CAI8ta554HhFHncIuNwAAAABJRU5ErkJggg==",
  Mf = () =>
    a.jsxs("div", {
      id: "projects",
      className: "w-full px-[12%] py-10 scroll-mt-20",
      children: [
        a.jsx("h4", {
          className: "text-center mb-2 text-lg font-Ovo",
          children: "Portfolio",
        }),
        a.jsx("h2", {
          className: "text-center text-5xl font-Ovo",
          children: "Projects",
        }),
        a.jsx("p", {
          className: "text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo",
          children:
            "Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in web development.",
        }),
        a.jsxs("div", {
          className: "grid grid-cols-auto my-10 gap-5 dark:text-black",
          children: [
            a.jsx("div", {
              className:
                "aspect-square bg-[url('./assets/work-1.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group",
              children: a.jsxs("div", {
                className:
                  "bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7",
                children: [
                  a.jsxs("div", {
                    children: [
                      a.jsx("h2", {
                        className: "font-semibold",
                        children: "NexTalk",
                      }),
                    ],
                  }),
                  a.jsx("a", {
                    href: "https://nextalkchatapp.vercel.app/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: a.jsx("div", {
                      className:
                        "border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition",
                      children: a.jsx("img", {
                        src: vr,
                        alt: "",
                        className: "w-5",
                      }),
                    }),
                  }),
                ],
              }),
            }),
            // a.jsx("div", {
            //   className:
            //     "aspect-square bg-[url('./assets/work-2.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group",
            //   children: a.jsxs("div", {
            //     className:
            //       "bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7",
            //     children: [
            //       a.jsxs("div", {
            //         children: [
            //           a.jsx("h2", {
            //             className: "font-semibold",
            //             children: "Ecommerce App",
            //           }),
            //         ],
            //       }),
            //       a.jsx("a", {
            //         href: "https://expenzatracker.vercel.app/",
            //         target: "_blank",
            //         rel: "noopener noreferrer",
            //         children: a.jsx("div", {
            //           className:
            //             "border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition",
            //           children: a.jsx("img", {
            //             src: vr,
            //             alt: "",
            //             className: "w-5",
            //           }),
            //         }),
            //       }),
            //     ],
            //   }),
            // }),
            a.jsx("div", {
              className:
                "aspect-square bg-[url('./assets/work-3.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group",
              children: a.jsxs("div", {
                className:
                  "bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7",
                children: [
                  a.jsxs("div", {
                    children: [
                      a.jsx("h2", {
                        className: "font-semibold",
                        children: "Workly",
                      }),
                    ],
                  }),
                  a.jsx("a", {
                    href: "https://worklyjobportal.vercel.app/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: a.jsx("div", {
                      className:
                        "border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition",
                      children: a.jsx("img", {
                        src: vr,
                        alt: "",
                        className: "w-5",
                      }),
                    }),
                  }),
                ],
              }),
            }),
            a.jsx("div", {
              className:
                "aspect-square bg-[url('./assets/work-4.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group",
              children: a.jsxs("div", {
                className:
                  "bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7",
                children: [
                  a.jsxs("div", {
                    children: [
                      a.jsx("h2", {
                        className: "font-semibold",
                        children: "Clinix",
                      }),
                    ],
                  }),
                  a.jsx("a", {
                    href: "https://clinixdoctorappointmentsystem.vercel.app/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: a.jsx("div", {
                      className:
                        "border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition",
                      children: a.jsx("img", {
                        src: vr,
                        alt: "",
                        className: "w-5",
                      }),
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    }),
  Yf =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAlOSURBVHgB7Z1LjBRFGMe/GgYlsspefEZxDiwXSYQlUcAos54EDoAHlossiPHCgSXhoQkGiCSGR8LugYvBhNULeBA9CJ7YFRMgGmBN5MJqWNAEhQtPgbC7bf+np3e+rulHdfd2dQv1S5bpmanumf6++h71VRUjKCHWvM+qZJVn20cLSYjZZIlWElYrPRoM1/4EDRKN/ShObfmWEiLiNLaq21vp3tT1trC7HyFhKyIOEj3oE6c/HohxkpoCaoK/P3UbWdRNhigGiEbW2IoYVmlcimpgvb53Pd1tuWiEr0yVqHzRmrdnm0rjUAuw5u/ZZwSfAsQIa2R5mDX4KqDu649QTZuGlAzbLqkjSAn+Luj+1H4ywp8oKrZL6rezxorfm00KqLud2WSYSCokykes6r6mzNGjAGve7tXG52cEOvXdkabAPB4DHBMpw/VUyJAhtXgw4D5jFjAZ2qmQIVtEeZ/nKf6p9/6LZNDD2Nhy8bNTvqhbwGSlQYNhgiiV1o8fOg9WlQw6qVoL9r6Mg5I9ZK6S8f36sUaX48G2gLEqGfRjlZbioWTX8l8lg36EM9gt0ZiokEE/FrViZIwgXCFDPtz5t2K7IDIzW3kxqdQaOSFjyBajgJwxCsgZo4CcKdP/gScfJ5rzElG7/ff8NKK2Z5zXn3/Kebxyk+j2faJb94iGrhKd/dN5xOsFR9ilCIuKCIS+aBbRwhmO4JMARXx/nujc5YIqY6SjeBYAwa+YS9Q51zlOQ3vdam7Z1nFiiOiLk4VTRLEU0NlOtPYNNcFDkIfP1M+b23BHfuB6S2Y5yoBFQBEFoRguCMLbtazh2zlwI3gfvt8FQuw97vRs0GIL+JNFRG/NaLQZukYY7/te88oNonWHC2ANIx35Z0EQWl9Xs6AgeAhp5zGv8CE0LnyAAPzpMSfwurQ9TYRJp1V9tsJ+814b1/uyy6uwnMhXAXA56Pnc5UDAEDz+oIS1C7znrDvkFb4LlCAvUsa5sISdPzT3eFgNPlu+vmbyU8AH9o13v+19DT69q88RPIDrge92QU8Ocxt4j/t3nPvkFOcY13z380bc4N8jRyXkowCYvnzTPf3OH+/dchuV4HnojPcaK9qbP0e+DpSw5BXKA/0KQK/eusj7Gvy83DMBz/+jer8LXNFR5vNXzm1uc+Ck45Y4sMawTCoj9Ctgf6fX50MYyGpk3FGvy9HzpMyJ3xvH8PV+AzkotLff227XctKNXgXA1LlQ0euD3Mpi5hLQ8924oALacjcUlO3AXXHLQ+akOR7oUwDMewVzBxBqT39we95rz16m2HA3xAO5zAFpdAyX5QZuDehTAHoWdz0fhexrm/m011JO/EGx4RYD9xLk3xEzEIN4WzlwZ4geBfilkxeuBref8az3+bkY7sdFdllzpoe35e01WoEeBcg3H5VOtr/YOL5wzSkzxwU9m7sWfk0/+HeCFSzWk5bqUQDPsdHTotJJ7n7+vkGJGfqncdz2bHhb2Qo0lSmyVwDcDw+oKukkrwtdSaEArugXFHJ8lKxd8J01uKHsFdBUZIvIaGD+cm0oKVx5tetGCFQej7yZvRVkrwDe++HPowQqzwUMXaXEyJ/V8lh4ezluIBvLGL0WoOLPuf9Py22paqriUngcmMjvEoCGGMBu4kKC3pwqBkjntqjMtLFz2rK3gOynJPkACNlQ1AS73Evlwl0c5Gut72i2Chn+fTUEYb1zwrCGuGaddEWEHzOfiddexWJSYhZm5Uz2FoCqpJvZIMBFBeLnpnl7PUrLtxOMhEHLFO+ASuVaGLBp8P0u2SvgtqSAyDIE1vJ0Np73HE8+FkAayRWA0nNUWRtFQ1cBaRIARbJ3QbwcoDLjJPfQNKlgS4IgynN/DctWsleApyCmEFDlFQ8tKTIROYheiTkOSTMIVCR7BWD064Kbi0rtZAWkmaeVz40sAj7lHTie/YuyJnsF8AIXiCrz1lY5MyWkUsA073WjkMvm3H1mRPYKwI3HLfPyTClNDOC9WWUUzsvmKnWrCUDPOIDPaLkrlsPgCkuTEnIFRPlzuWz+9RnSgR4FyIulolYexI0bfkCgvLI6dC28vfydkiwESIAeBcAN8R4VZQXnpJtPUpeX5yHCLABWFmcJ5ASirxQhW8HWd4J7Nm4+bV2exxpcKywGYJEuR+P+AX0KkK0AruX9+cHtefYUtq4nCNV1Rd0d3kB/QO8uGr3FONwcdwUr61uR/FBZXhiE6rJGrNTrlBaLad49o78aijX83BWhB/qtTJaXFwYpyg+VZY34TB548VnYe6AZ/Qqo7XCRliRi0sUvM+IuCz5dJRuSF4H59WhsDJEnenqPa3U9LvnMByDL8FujjxkrLmQ5cIfFDJewdBJpKSxO3hgStEJbA/lNyOCmZSUgJvS9Z/f2Nue5HLjxflgsCNtRg43efauaXZnf99BI/rskIbBaz5cqlxAegifSx28+bLyPimbXV83LFfE+BMyDL7YkYYIH1iUrDpYFt5NTz3cY6SjONtX9K/0Lb37bTfHaliON3g3hY+OHZ0XdTUdZfhYjn58bRVGAS5wNcxAuei+Ev3iW2ubuW3WXdqAoG7WLpgAAK4ASkgy+gnAFf/iM/xbX3CiiAlxq1cnpTsrYFnM5iQvyfwzosFumUIJ3KbICOO5MFfw5Hmvri1i8gHCRMdX+i5obTjX1p6GCCp1TxP8txQ+3OMfLEw8JZmFWzhgF5IxRQM4YBeQMFDBMhnwoTb5YsqtBg2TIBXFy4yVYwCUy5MEA/imRJRL/Fq4hBcL6FQ8lulcetIuN18mgF2vU+RUlMbjhOomx78igk2H3x9zqaWjpIBk0Yu1wj2oKEKc3DVA9KBgyZ5hodMB90hiIjVobyKABawf/beFxBYhfNg+SEL1kyA5Bg+L05oP8JU8pQpza2G1nRGZglg3D+Hlz+cXmWpCoNRomw8Qyavn+tnyTApxGIx1klDAxWMIeY1lrai7eBxF4nvmB5/RA+GNjHUHCB4Hl6Jol3CvPMYE5MQMkHswJEz4QpID12t5lVLLwS9AVMoSDXl+yU81Tm3pUmispYPza83avtk/psg+rZPACwQurl6bc6RED25Vra7EUMP5ZiA9WeZl99lL7g2fbH/zo/RyiI/DBWlXTrijXqwmxSaSApu9S3d5Kd56o0CTx8Cti1LpOk0av+6WUSfgPVpNFL/qVIfIAAAAASUVORK5CYII=",
  Vf =
    "data:image/png;base64,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",
  Hf =
    "data:image/png;base64,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",
  Xf =
    "data:image/png;base64,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",
  yr =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAUCAYAAAAHpoRMAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFHSURBVHgBxdY/TsMwFAbwl6QHyBF6hLKx5c/EmJGt4QSlaxQpTi4ANwBOwNyJ+ASEDbayMZYDJOF7yEgVldsuef4kS8+Jpfzk2HGIBFIUxeKccR5NHKVUPI7jC8rO87wE/Z1trE/Tp0Pboi2Aujs2cHIMzwTPiAHlVVU92MYGJJC2bXdJkmiU12iXcRyHWusNucAY0BdAGwOKoygigLQTzB7og0F4dQcgUYwBvQP0iTL7DxLHGFCHdfON8opBaZpuce3Nw2rnLbciN8nQQi58389nwzDcQrckx4Ejn0Gk+r5vyUHwbH4jfFTwt2g9+XFgS13XFWZDcQ3IBZZLJ3EcnILcMOS3JuEAsgLk3nTX6P/Vshg8eAnII9fYwXXTNGr/vhimLMssCIJnG0QMY75l/E8T2iAiGEDmALyegnAkdtPcQJ6OQTg/PYye1LTum6YAAAAASUVORK5CYII=",
  Wf = () =>
    a.jsxs("div", {
      id: "resume",
      className: "w-full px-[12%] py-10 scroll-mt-20",
      children: [
        a.jsx("h2", {
          className: "text-center text-5xl font-Ovo",
          children: "Resume",
        }),

        a.jsxs("div", {
          className: "grid grid-cols-auto gap-6 my-10",
          children: [
            a.jsxs("div", {
              className: `border border-gray-400 rounded-lg px-8 py-12\r
        hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white`,
              children: [
                a.jsx("img", {
                  src: $f,
                  alt: "",
                  className: "w-7 mt-3 dark:hidden",
                }),
                a.jsx("img", {
                  src: ep,
                  alt: "",
                  className: "w-7 mt-3 hidden dark:block",
                }),
                a.jsx("h3", {
                  className: "text-lg my-4 text-gray-700 dark:text-white",
                  children: "Experience",
                }),
                a.jsx("p", {
                  className:
                    "text-md text-gray-600 leading-5 dark:text-white/80",
                  children: "FinIQ",
                }),
                a.jsx("p", {
                  className:
                    "text-sm italic text-gray-600 leading-5 dark:text-white/80",
                  children: "Jan. '25 - Feb. '25",
                }),
                a.jsx("p", {
                  className:
                    "text-sm italic text-gray-600 leading-5 dark:text-white/80",
                  children: "--",
                }),
                a.jsx("p", {
                  className:
                    "text-md text-gray-600 leading-5 dark:text-white/80",
                  children: "Career Spectrum",
                }),
                a.jsx("p", {
                  className:
                    "text-sm italic text-gray-600 leading-5 dark:text-white/80",
                  children: "Aug. '23 - Feb. '24",
                }),
                a.jsx("p", {
                  className:
                    "text-sm italic text-gray-600 leading-5 dark:text-white/80",
                  children: "--",
                }),
                a.jsx("p", {
                  className:
                    "text-md text-gray-600 leading-5 dark:text-white/80",
                  children: "AWS Academy",
                }),
                a.jsx("p", {
                  className:
                    "text-sm italic text-gray-600 leading-5 dark:text-white/80",
                  children: "Sep. '23 - Nov. '23",
                }),
              ],
            }),
            a.jsxs("div", {
              className: `border border-gray-400 rounded-lg px-8 py-12\r
        hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white`,
              children: [
                a.jsx("img", {
                  src: bf,
                  alt: "",
                  className: "w-7 mt-3 dark:hidden",
                }),
                a.jsx("img", {
                  src: _f,
                  alt: "",
                  className: "w-7 mt-3 hidden dark:block",
                }),
                a.jsx("h3", {
                  className: "text-lg my-4 text-gray-700 dark:text-white",
                  children: "Education",
                }),
                a.jsx("p", {
                  className:
                    "text-md text-gray-600 leading-5 dark:text-white/80",
                  children: "Pune Institute of Computer Technology",
                }),
                a.jsx("p", {
                  className:
                    "text-sm italic text-gray-600 leading-5 dark:text-white/80",
                  children: "Jul. '21 - Jun. '25",
                }),
                a.jsx("p", {
                  className:
                    "text-sm italic text-gray-600 leading-5 dark:text-white/80",
                  children: "--",
                }),
                a.jsx("p", {
                  className:
                    "text-md text-gray-600 leading-5 dark:text-white/80",
                  children: "Sir Parshurambhau College",
                }),
                a.jsx("p", {
                  className:
                    "text-sm italic text-gray-600 leading-5 dark:text-white/80",
                  children: "Jul. '19 - Jun. '21",
                }),
                a.jsx("p", {
                  className:
                    "text-sm italic text-gray-600 leading-5 dark:text-white/80",
                  children: "--",
                }),
                a.jsx("p", {
                  className:
                    "text-md text-gray-600 leading-5 dark:text-white/80",
                  children: "SPM English Medium School",
                }),
                a.jsx("p", {
                  className:
                    "text-sm italic text-gray-600 leading-5 dark:text-white/80",
                  children: "Jul. '09 - Jun. '19",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  Kf = "/assets/user-image.jpg",
  Jf = "/assets/circular-text.png",
  Gf = "/assets/dev-icon.jpg",
  Zf =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAuCAYAAABu3ppsAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASeSURBVHgBtVnNbttGEJ5ZyTVyc99AhxxylFH0XPpQwHYPpZIHiHtL7AB1n8D2E8QBrLRAD3YeoAh7iYT2EOaYXKTccggQ5gmiWxL/cDNDSs7ukpSW4uQDbJAj/sxwfvabWYQa+OXO3t00hWM6nGgFh8N/+k+gJjbDewGACq7gIvo/+nsMDaF8L9y+vXtAyp/R4Rr9dTA3pBa2wgchYus5Ih608bvRZvgggIbwMoCV1xoPHfEEagJB/2pL0gAaor3ogq3bew+1hn1XrrU+gprQCIEtUTE0BFb9EIT7azfU+Sm9NXR+mpA3esPoJIYa2A53uxpxZD5n8LT/PTREqQco0TqIF09J+a7zU4Ja9wZRv3bypQBd52s1TmBGwYBc+dZzOuw4PyVaX20Mor8SWAKkvB3/Ov0XBGAl8Rzlx6z8cEnlMyAG5uklXMYggGsPzFE+/qhXenHUr111jGcHkJffGRKJNYDRnr6gVHmqPk+GUX8HGgLBziWqYK9BCCr/1zoA98trfCShfAZUTv2HCISgNsPdHarPO5aUlB9EJ/sgh8A+TWMQgqJl/a4jG0sqP41/E0mjYuCAQ8iKz0t9/hsIAkFZCyF5OwZBsAFmdQCp6nANxJ/M0zSVqf8zKNCQmAIJhvj1Wfc64Hj4HFZjEAR5QFtfBFGfTl/cGAhtl4qM4+h46fWkDEpD6vL6bE2QMKJAn7V+UXbd9p3d37d6ex/o791WeL9WAVFZRdDwhyMXMcKlzxpUaf3XKbLSWaNEa8ZD7j/AE9lCRuzymJ7utoeNjJje1zFlcyi4VUi4efI14prMrcIKfwW3AjUwQgWOIK66kqgFR8DElrERe6ew6C2zg4iSixqM9QpPjH6mhgRqoA59HkaPz6jP2KDDxLpFww7lxYibK1hkwAwD5j9EJRzxWpu6qU2aSoAvatLnZ9HjjLKDYwShewMvRlVRUNrUM5UgFxZ6XppEnPnE5nbuLfOrTXwWSC4oFUZUhrKqftjJYZkRPgmmQQf2PeXls/y910Z45aOa/7CTw5ISu9iIhvSZjVjVKxs+lXHhXIhLLCnMX6RQJebcFtin9elzVlTK89EywmuwxfWb3LoOdmwmZddK0+eKfGQjshLrPVqcxSa3mYhwNo3TAr4Ffc5DueCJgIkngjC4boPBQK902vsv+lOkhaRnc98eGKLY2wM+CPMFx1rwiK+L9ReYr9gmuqIGfIbLwBGNJdtHXuwc0ZqoAb70eVnwAMIRjUUN8KXPyyCfXeGB8z45A8ro8ydoi8R/5dQwvToS9IAKHEEs0T5WTw3xiPNLzIBvMX2u/PLZ1JDWBvDYofEGOvNPaDUKn+mGCCvvdGs8r/06eBPxwJQ+dwzRpO4OjgneDa1W3p7XihjQhD674AmFsRtqPLR82CyTA0LT52w3NEV3zJMlbNW8VioHrPinTeza8V+1G8r9CIVj5Z50YwMkdl9YeSgqP+FpBTf88+4V8IAKzLOl6HOJ8jylGBS5T/Ht0BjOZnW6VALHxjH3HevPPJRntKAh3r55ldy89eN7pZBd/miRy8tw89YPL2gfjXuTlzSrvV+HwX4BXiw3woMjPHAAAAAASUVORK5CYII=",
  qf =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAuCAYAAABu3ppsAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKZSURBVHgBzZmBcdswDEXhTpARNEK7gTaoN6g7QbtBvEG9gbxB2wnsTOBsoGygbPBDHpmLDZGMQH3m8u54tnQUAZIgCIIiBgD8cGVyZfT/pQL3Xe/K3pWv8pE4gfe4ZRIj7putaqOXlXxZUskr73726vWz2PmunntpjVP+D9LsxEg0PeoMlITdufI3ofhUI9jb/FoTtAjrXLkklB9rF5+fMdXWSVoQlR8zyndSSWI2fwubgvKXNcrHtifVJteNFpQ/uXInK0Dw/TezKUwKyh+FgDcX1e4/YeIaHBLKH4REnMVrdsICc+9AVT7K0HTCIjE6FyGCxvbvQwntDX4Kl616PgsTPbdCBvMNcStM0DA+QfBumlUuWeNN6L96NxAXmTbPx81mUxPF5smM0sjoBObu+ZCp9wtvByV7iIH5RkPpBBaaZ6LevVhxHx2ZnUjNbKHulJBt6wRC/H9hdQKG8DnWTXViECuZmfCNm6JHGMNnhAPPmJDtB9XmudwHB6RZnIlARfgM5lkEIfWR4l3bxIrj46foBFaGzygfaTtLWzkXW+wECOEzglPheEaEiHLmJQr1NZ1UgvR6HGs6oW1zzNSjh89Im7I9qxE74ad1yI1AYsTsvnxZu55e2KBh+Iz52uLmlhAWnqYTEmid3cM8+0w9nkYZNyzKThvQ2ecHIYK5O34UJmh/utPtUxzEtQAN5fiIfHjRCQs0yj4XlN8LEzTIPheUpybeXoVpQb2sAMFlpg45R2EDsn/G221oe+WjQFr2GSFDgQ8xmyuhJyVsJxVgfpX7yl5aAsLtC/K3ofyrKCV4dficUX4C8x6hIFzH6ubdMaP8ollkxEJn9VwT/5yv/j+58s3lULlxTgmEXXhA/eL1G9Yhls7y7QuIfii2tUincgAAAABJRU5ErkJggg==",
  bf =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAyCAYAAAAN6MhFAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATCSURBVHgB5ZpNcts2FMcfSNmZdFP3BGFOUPcGyi7Wpkx6gCi7VuqM1RNEvoE9k6Sd6SLMBWp203imCzMnCHMCMzfQJhMnloG8J1EkxPDjgSJpZfLf2JBAAD/hAXjvgQDfiAR0rPvur30BYl+B2BOgwlf+nz50oM5AF4DCfoL/9jNfRUqpozP/uQctqnXQA/c3F4R1CF8CZhUJoTwp5csz/68IGlZroPfd0VAIQTPogJlaAW4clAEYKCWOLJAzCWIiBDwqqNcocCOgfXey95316RABhlABeOY/DfQPce1ifXvaNvBGoBrgBIt7+T0oX0nrJAuYlQb8c0FbGwHXAuUAKgEeyOsj00EtgXto/opm2MmpUgvYCLRNwKwYwICzj8C8vligDMAZfncCMPeaPhqaAi4F5QJeQu848I9n0KI2Bc4F3SbArOoCr4FuM2BWpsAJ6OCX0aGSYgpbDpinKicFf4ypWFZcONznOXW2GjCrMuAYdDSNK+gKP6ide18DYFYDd/wCj7mh/pkV/wly6u/fFldv6FeCr0RkmQcPxudZSFKyRg/c34/RXTssaKOTmLGuYpOlse8X1RHrD1Q72NsEbBIKivwGthuYGwribptkNER5g9sFzAVcRUq0XoEDmnbQTcxY3L8Z4ErGoGmH3QJXAVZFSrVB8xooUG1gVjAf9/Hq9NldYI7TgnrSt/Ew53sHB4ozb18MHo5fLC2hXAQ4eDh6gmf3BT0L+ZCB3gc9A0wZg7rLxpMOcFB/KHV9l9YIFqNsfaVgWAbMASQTpT5uqZ0H+uc78N4BpnpgqEu43Bdga+VeGPhPyU2cIohXFFHEwEME9q7kpxMb7JllWY+UupogYHm24jQ1fzRH6mtR34YdsqwQGDIGpesErRjqvnC8HiuBe2J3GP+fqzxArYEAwxF3OZZiTygrY1Bs3tEKuQ7/ChgW0GzvJY2UTksDiXfpUMSPwJQ5qNY4Oguvq6rHzoRXAmwUCqIRhNpR0eaMpo1LvA3jPrQGjG0IS3yvpHz7AW55JqEg7p6hZvG4kY3v/PfPs3dVzxmBDtwRXvdpOy7MIzDUpu7iLuxGH+EqKc+l/Al0cy6Q0fGiwHL08v/+3+wZbUo+zb5KjzGbeYllCCqrHIVOhONI9gZlWawNyQgU15a+EVWaS1sS2o8sVOW960JmnpEQTtoZnmc3JjvSCoWuoH4qmLqAiekqsG/QdOdrfRe5grjxTRH2MR5f99igtOPqZXL94IYUOyTJkRS7ggV1n3sUp7JBMzvubAvSoOk6ZTgOBqYr+3md3JiUepv8z3AF+aC66ye+DMe6llr/sStnlJ1hOHDHF1jbSR40uIRtUkUZCLxV+KFsORnM6PosxvHlOQXNnAxCEyI/mW4PcgL0qGrPYPu6GOE/zkmMrVImFFAHbcwwI4cUCjxCqtoxTo5xUo+g5L9zmAd1fWGyEAzw6Y0zekOlX1BtEd7h0TEFhmplASlvdAnzSdkl7GowQJuGotCKdkkZ0YfXcD2jVEr67OLocixL3FFLl66szVovhGz0nhHn1rlBYdSiXqJDf9zZe0Z5ik2agPvQrBZLwTRAz6ox0JVo87gN8z6aqosbF5297HRHLEx+4xVDjexDmT4DS9Ehw7bN52oAAAAASUVORK5CYII=",
  _f =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAyCAYAAAAN6MhFAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMDSURBVHgB5ZqNldowDMdFJ6ATNJ2gGSEjsEG5CZoN4DZgA9jgukF6E0AnSG4C2ECVL6ZPF/wh5Tvt/z29Bmpb+hFbsXwB+E+0gpGFiBn9k5KtyS6r1eon/EsygGQFPqok28LSRRAbD6ALeEeWwJJk7pINXqtyEcACwALraZySnRYFTMGsbVBlDNDRN5k9MAO8BgJ9cQE6xroDX2cDLAQ8tgnKAu/RPzuGBx4S0OErBtybL+40Bni1QSXQs0YBVgCuYWANAjwnQEds3YHnDOiItR0wffFjCYAuYXyTsrs3zJYI2FQI+N5g7/i/81IAm7JT1gnqu6MlLqiEQn8piLzRAf0q5wyM9ZQ9B+LHZgfJBnsLMxEqSkHfALMGRnkpWARB2YCzApYCsvaFCJR1mLRm1AKyfoUKlHUcFVgAeAz5ag3qGqBvYJSVgu8+BGMVXUF5EOdIQEcJsBCwaHxew1CgNiAuk91aVxSoKObx0XcKA4Jmvl9VAZzatjsJYMM/b7+FAUFz5ujsaSMBRg0gG/uFtTuAEPQT6JWw65urAf09pSLbk32lj09kFcRlxnom+0z9nswYnnZv7PobDCX8mBD2in6+R4WqFLTj/O0LwlhBK/y4RjaglA30YKdnjspSEOv1zfUl0LYdqMNJCiMLHzPvJtC2aLtGE/6B1tEFRhb5NGu5Yl8lkn5aUH4HR4dkemXXooSkBeWDvsF04j9yJunQZer+gulUseskkNBeoY0aSSCDiYT1hkSUFG2Wz0AqR8ad9IQQFVtBI83UTdj1zWa/KcXXafQxpwHNPE6m0m92Hc28GlA+WAXTS3VHxcLHfeoRJ3ivAP31az85A/0vQ+3GAkZ/YRA9VtE4CR2MlUPdYYyfQJijnP733Cg7esy7OLc/ao7hQ7j38k46ZquXHrFeDznZdwhvqs0j6GLNZMmKfX9jfRNrpuTKIL5RP5E9B4rzfoXdj0w0MnfQ1LEJTCmsp3SB/avAFgV6U72/r2sDyshMQWyevdq1WkFdMJipfuprB/YHv62y0lDBHLQAAAAASUVORK5CYII=",
  $f =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAwCAYAAABe6Vn9AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMuSURBVHgB7ZnNUhNBEMf/vVk0ejFv4HKwyhvhpDeTG+Higg8g3JRYBTyB+ASEKlCO+AKyXgw349mD4ebBKtYnMBwsIsK2PakE9itkYdZil8rvsMnM7Hz07PTMdDchBWbsFxWiwmdowEzVPWezBU0MpACBytCEcKrdhiIVgUDGU+iSRhtISyAgjdlN5QsRNInRH7e5uzWZpG5trv5LfkqDdBp6pP2FwvrDzPsJq8q73sdgW/p6pL/komvfQUJkebRHtHVp0tChSjDptZAQBoeFL1fslRI0iOiQanACv60CCiMbNmBMMVHDl9VhPp3DJRD920VAj3hRJsVNUreLYrvlNDqB9gZ/lCB38XedCba/g6xDhB3PO32z52y7vbR6yE5l9XcqC/nElZVRVUL1BJLt8wD5FWaAe8QT0+aMvbSAqDBqXbaRbSwEx20VcbxiEtFy4DWmjaazuYIcULNfNUB8Nn6R5YnatoMHI04ayAm3Ya6FssqRc2iwW+QBJ7RlC6W0LqeZ4eYLNDtfv4+coM7PcF5EIM/jKnKDUYnkhDNk63uOnCBjfR3Oi9OhSs1+mflzaHZ+SQljhfPjNwUy1vsVMsnss6VlsW7X4spI7nF8Qd0W2JObw7vERtv/QlkDRXTLcolWE10Z9t4ogfy4vv/WBWU6WEjeZyxmTJ46fUsJOktapoM1ojwy1ogOiV0xLY9rX2IJaPXGGiL2Ltd03s4plxIz3iNbZoQrk72hxiausmrcvdMcVrPvH2sN0v5TmSDWLZ0vB9UBcOJCC1OsZg7495QVej6eZJdmEwnxN1iz64Eyw+CDTx+2f0IDmTB5Fob2mZTxbTvrJF5yQWhV3Lhn2+UR3zqEJkUUO10+XjzrAUYHV+BKAonPIfVtvW997kCTsQ5lnbFAWWcsUNa5+QLpRtCuG0Oc2a4/4w7+LCAnKN9CKKstNwWWSLQvAtFzkNSnxD/3BRlGou9T7CHgnZLoY5v60btvyFEYchhiP00ayuaQQO0q8g5jVcnSs6h+fP/afvDw0b58x8fI35cSs5wWm87WjkpEwvoSFZMouFchg+4hw7DHhwzD6cIMhPb/AQhkFNSBuhSEAAAAAElFTkSuQmCC",
  ep =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAwCAYAAABe6Vn9AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI6SURBVHgB7ZntbcIwEIbfVPxvO0HTCVo2CBOUEegEhQkYod2AFegE0AlIJ8CdADqBe6cEyXEuIZEtsKs8kvmwY+debF98B+ABrXWm3cnggRv44Rnu+BjDm6AXuONjDCTwAC2XA73dwY1jkiT3uDbC/tn36HvwvY98LDl77X+jO59nxuqND0H22l+jO/mZsS6P4H7THn1Tqy8vQae9OBJuwgOm6LbJn6zvR+7bR1TZ53Qvfp9Sf9Wxb06O5Ci2sBAqK2Gjhs5KGz9gUorhig2KmYkRRWVCs6VOgtjVpogbRWU8IjEz1MXwuswRNimqdvPnOc/OzlqTH4gEttWyfePkdq+NLhyZySHhV/Mi2lhezneXwrbf12k7GP6/IJrBB0SCtN+lGZogHrJajeDlNogEPhDYxkuCmDkCh2xcSoY3CWKWCBSy7a3J6DZBzIbKFAGgi4doVtrUSO3B2oIyPqctbS6k6H5PEUmQGXCFTs1WyW2P0S8vcC22KGyt0HiW00VKaYYizPaS1fSAQpEpWpOZW66o2d8kyEZXn8p2dDuB+z5Ky3FPKBgPeY5GIdtVsX+EjpgDCn5kT+0/cEDyTU0i2hhO26HTeclZLFB1l79wh13wq/W9N0PEGjqDoNAZBIXOICh0pDRWLLGQCAtSVt0MkcC5Basq56MPxxdmwztdyDHQF8KGbbSzU3lSxjk7xBN2t/F4U8YcC8TPohI/cbpKC5nICNhrI9VWO1mXjRmVW4QNhyyczKn8tf8HiTbLNoodLQgAAAAASUVORK5CYII=",
  tp = "/assets/vscode.png",
  np =
    "data:image/png;base64,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",
  rp =
    "data:image/png;base64,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",
  lp =
    "data:image/png;base64,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",
  op =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAjoSURBVHgB3Zx7cFTVHce/v7Obd4AkG2AAAUFKIVFgEFuo0gFrpQ3hlYQAQltwOoO0Wiqt1qHWCbbD9GXGon3g2OmDWiSQ8EYrnZFWCi0MFg0v5Q0KFveREPIgu/ee/s6GQEKSvXezew8knz/23r33t3f2fu95/M45v98laGLYqq8mXeqfOijBNO4nco2SUg6BlDmSkEUQ6YBMDBsSglKiliS8vH8YEseFG++GDONI4Ej1UZTsCkEDBAdJXVPQLyVFPiwN5JGgfL7JVMSABPyCsNsk8zWQ2OMvrPgIDuGIMJnrZuRxqVhEhCl8Nz3gDPVc4raZAn8OFG3cznciEUfiJ0zJJLcnJ2MBpPgeX/Vu6ISokkUq9RVX/BFxInZhSkqEZ+TB6fznnufL3YNbCN/MCVPQM/6i8nLESEzCZJQXDBYGfsMXycPtRXkdGpfWF2/7GJ2k08L0XldYbJJczbsZuD3xE4nl3tkbVqMTRC1M9ubpPWTQ9XOY9Bi6AiRX+aR7GYrXG1H9LBrjlLL8AakycSP/6j50ISRoD4zQXP+8zeft/sa2MH1en3mXKcRb3CcORZdEHjKClF81v+KsHWtbwqhG1m3gbRZlCLoyUp4JhRq/VD1/+ykrU2FlkFVecIfbpC1dXhQF0Z3uhOQdqeUF/axMIwtTNtslTPorj2tGodsgP5tiYKPqRCJZRRTGQ2YpizIR3Y/Pmw3uX0Qy6FAYT9nMJVwnvwONTMgeCV3wOG5x9vpZczs6364wql2RECuhkUV3TcEP73kEOpGSfpuxduad7Z1rv8QYWEUaPdqFQx/Gj0cvxPjsHEwfOAEayXC7xK/VeO/mE20OZK0rLGRRZkETT+UU45f3Lkayq2meqnTsY7jX8xnognvbPE/uoWk3H28jDJH8KTRRNOiLeDq3uNWxjMR0vHb/cgzrMQC6kNJ8Hm9Pcrc81koYbnAX8mYYNDAmcxh+Ne5b7GG29TGzk3qibOKz6JOcCR3wPxiV5c38WstjN4SR6rz4PjTQO7kXXhn/XSS5Ejq0GZTWB6+OfxJuckMHZNKylt+vC5NZXpjPm1xo4JvD8jA03dL5xBd65+KJETOgBZ51VFOyzV+vCyNM+XVoYAgLsmxEoW37H+TOweC0vtCBIPej1/fVR9baGQN5MxUaeHLkLG7g7c92uMmFlWMehR7kFLWyofaaSowg5TykwGH6pWRh3uAHES1T+o9DTq/B0EB6SoL8stoRTR9iATSg2pZoSktLnuYqpQMSTTVHqP7bhHwAGpg64HPoLA/2HYOeCWlwGh4mTFOrpiLzoieHn6LjDsOIXgNjctpS3UlYMCT6ahg1hJRqXkoWLrfUsjg2Pg4j5yn99Uw1GzAnci+NsdDAV/rFflO53AB72Ct2GjIwWvBiu5YhQGai9RL25WBdxPNqHDUqQ8MMqxCDBbc2jnu7auQ8ML23pd3OiwcsbSb0zoHjsCaCpy49cJiMxDRk2SgxB/zHLW2yk3rBaXgqIkNVpZhiVuyQ5k4Oe7BWfFLvt7RJdSXBaXjEn66qUiIcxgVrURT+qzWWNokRRuRxgzURanEXDtNo2osOqzUabFg5/nfDEzRCxbzBYer4hutCVy3takPWwlwJ2REvNlj6EDe+uAKH8V29DG9jtaWdHWE+baiC05CUtYJLTQAOY0gTJ2suWNrV2yhVlVWn4ThEPq5KdBga2O/7wNKmwWy0tDlcdQ6Ow5oIrk+2wiJiZcv5f3PdjdxwhkwTDUbH4qjScrzGsQjW60hTnhAuabwPDRy7fA5HqiI/A5OrXKR2Zp/3GHTATu9/hTTpHWhi1bFNEc+rEhWp11l9Yge04BaVIr0+oCptPTSw5eO9OFt7qcPzqqLVdSDMmxf345SNBjxmJAKBQ74j4syiXQ38pLZCA0F29JYffBUd/yfJVan9nmnFe3+BFgi7Vb5CeM6Xp2G3QxN/u3AAb1zY3+65ZJGA+na835c/2Kyl0VVww7tGbZuEEbSTN447es08sf9lnKtrW6XUmtPNw4dzXPVeOLoemqhHAu1VO2FhvIUVF1mrt6CJqsYreOSdlagO1rY6fl/2cHYGb4TjBtiu8J8rUBPU0gRyb4TtzRktN1Yipfg9NHLs8nks2tM62kutOQWvlRhVch7f9xJOX/kEuhBC/ql5v9Uij6esoJI3WjNHpt0xAS+OW4Je15ZGlB+jhhDzd6/EXu9R6IMqfbM3jFZxMOpbqzAQaRql0MzWj/ai4B8rcL7u0/D3QGMNpu/6kWZRoAZ0pc2iKFoJ4+9bvUYStHjCLXkvcBKlR5syaT7k3udQ1Rlo5oRvXutcp9YRVZN3hQjiOdwCztX+L7zV5fa3RErzmZuPtQk18xXdvZXLkybf+wanai6Gt+/6T0IvssI/Z1ObxK+2UZtUYpoJ5rdZHOdnhFrg5cksxYU6L3TBnnZAumhpe+faDWetmrXpDHuAS6CReuNqeKbveE2nk9Kihkx6tqNM3IgxGVnrCn6nIqjRHZFylW/OxqUdnY6YSyCSQ0/x5j/oZrCH+y8fuZdFsokojHfGlhoyEgtUdiq6DVQJ05hnlQpoK7ypz4aCoSETf6cunrPEHcppM4jJdrLcLBO5FJeKKk6pC94K5y9uSPmhIfCQ3dQ/W8IowhcMGfncxe1G12Mfmcbkan7Adn9gWxiFykL1wz2Jy+RL6CJImK9QUugh77wtUc2Ldjoh3fN64RIp5E/4Alm4DQk7qIIW+4vKy9AJYnqFgacsfwCQ+CLvFuF2gmib0Sgft9uetHsJxAHP+qICnrP4GTRlrnQEgd6XZD7nOzx6K0pKTMRAXN8f05TWE85g0ZKs0YLDkuQLo7IDa3ZNjs8bieL/Yh0Jyl43a6ok+gZfXUVZOxWKf4XbkTelpD8E5pTHfTbA0VcxZa2dOxCiYQKRawEvez7A465YA63r1RoYz7Pt4O53Z7Q9TTQ4KkwrSia5M4f3zHEluHJMKcYSmcO5dI3kJ55NAmk8fkm49oeCLGINEflB8ijbnIFLHqQg7cno2XD2RN4b1rEiceD/qwEsORqPuy8AAAAASUVORK5CYII=",
  ip = () =>
    a.jsxs("div", {
      id: "about",
      className: "w-full px-[12%] py-10 scroll-mt-20",
      children: [
        a.jsx("h4", {
          className: "text-center mb-2 text-lg font-Ovo",
          children: "Introduction",
        }),
        a.jsx("h2", {
          className: "text-center text-5xl font-Ovo",
          children: "About",
        }),
        a.jsxs("div", {
          className:
            "flex w-full flex-col lg:flex-row items-center gap-20 my-20",
          children: [
            a.jsxs("div", {
              className: "max-w-max mx-auto relative",
              children: [
                a.jsx("img", {
                  src: Kf,
                  alt: "",
                  className: "w-64 sm:w-80 rounded-3xl max-w-none",
                }),
                a.jsxs("div", {
                  className:
                    "bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center",
                  children: [
                    a.jsx("img", {
                      src: Jf,
                      alt: "",
                      className: "w-full animate-spin_slow",
                    }),
                    a.jsx("img", {
                      src: Gf,
                      alt: "",
                      className:
                        "w-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                    }),
                  ],
                }),
              ],
            }),
            a.jsxs("div", {
              className: "flex-1",
              children: [
                a.jsx("p", {
                  className: "mb-10 max-w-2xl font-Ovo",
                  children:
                    "I am a dedicated and innovative individual with a strong background in technology and problem-solving. I have experience in software development, research, and leadership roles, contributing to various projects and internships. With a passion for learning and innovation, I continuously work on improving systems and enhancing user experiences. My expertise spans multiple domains, and I actively engage in developing solutions that make a meaningful impact.",
                }),
                a.jsxs("ul", {
                  className: "grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl",
                  children: [
                    a.jsxs("li", {
                      className: `border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black\r
                dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50\r
                `,
                      children: [
                        a.jsx("img", {
                          src: Zf,
                          alt: "",
                          className: "w-7 mt-3 dark:hidden",
                        }),
                        a.jsx("img", {
                          src: qf,
                          alt: "",
                          className: "w-7 mt-3 hidden dark:block",
                        }),
                        a.jsx("h3", {
                          className:
                            "my-4 font-semibold text-gray-700 dark:text-white",
                          children: "Languages",
                        }),
                        a.jsx("p", {
                          className: "text-gray-600 text-sm dark:text-white/80",
                          children: "HTML, CSS, JavaScript, React JS",
                        }),
                      ],
                    }),
                    a.jsxs("li", {
                      className:
                        "border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50",
                      children: [
                        a.jsx("img", {
                          src: bf,
                          alt: "",
                          className: "w-7 mt-3 dark:hidden",
                        }),
                        a.jsx("img", {
                          src: _f,
                          alt: "",
                          className: "w-7 mt-3 hidden dark:block",
                        }),
                        a.jsx("h3", {
                          className:
                            "my-4 font-semibold text-gray-700 dark:text-white",
                          children: "Education",
                        }),
                        a.jsx("p", {
                          className: "text-gray-600 text-sm dark:text-white/80",
                          children: "B.E. (Information Technology)",
                        }),
                      ],
                    }),
                    a.jsxs("li", {
                      className:
                        "border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50",
                      children: [
                        a.jsx("img", {
                          src: $f,
                          alt: "",
                          className: "w-7 mt-3 dark:hidden",
                        }),
                        a.jsx("img", {
                          src: ep,
                          alt: "",
                          className: "w-7 mt-3 hidden dark:block",
                        }),
                        a.jsx("h3", {
                          className:
                            "my-4 font-semibold text-gray-700 dark:text-white",
                          children: "Projects",
                        }),
                        a.jsx("p", {
                          className: "text-gray-600 text-sm dark:text-white/80",
                          children: "Built more than 5 projects ",
                        }),
                      ],
                    }),
                  ],
                }),
                a.jsx("h4", {
                  className: "my-6 text-gray-700 font-Ovo dark:text-white/80",
                  children: "Tools I Use",
                }),
                a.jsxs("ul", {
                  className: "flex items-center gap-3 sm:gap-5",
                  children: [
                    a.jsx("li", {
                      className:
                        "flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500",
                      children: a.jsx("img", {
                        src: tp,
                        alt: "",
                        className: "w-5 sm:w-7",
                      }),
                    }),

                    a.jsx("li", {
                      className:
                        "flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500",
                      children: a.jsx("img", {
                        src: op,
                        alt: "",
                        className: "w-5 sm:w-7",
                      }),
                    }),
                    a.jsx("li", {
                      className:
                        "flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500",
                      children: a.jsx("img", {
                        src: rp,
                        alt: "",
                        className: "w-5 sm:w-7",
                      }),
                    }),
                    a.jsx("li", {
                      className:
                        "flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500",
                      children: a.jsx("img", {
                        src: lp,
                        alt: "",
                        className: "w-5 sm:w-7",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  up = "/assets/profile-img.png",
  sp =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALESURBVHgB7Zk9cuIwFMefbYp0a6DZ0jtAvZTpFm4AJ1i2261Cuu3inIC9QUi3Zcp0ITcgZQaYMRcAp+Yr/5fIHtlJJpEiZciM/zMeyfryD/np6Vk4ZFiNRqO52+2ucMWu63Ynk8mYDMolwwLoCRLfcZwA6REZlnFgyE8ygA/IsGwAW1UBbFsFsG0VwLZVANtWAWxbBbBtFcC29emASyqNgyDwS6VSjz9/ZrPZkN6her3e1xlHaYY9zxsgGeDz56xWq52RpkTfh3EAHqr0VQLGA3wp38PDTkhR3If7SkVNUpAS8Hq9PkYSS0WhCrRoGyb3MIkIY/ZJQUrAEYTZadNT6FcfmoflMfgYgMckBSl7CXHO0M0VD2CXP1/qI+pCuQyz+0vnzMIjDS0Wi6hcLs8x252kjPOVSuUa2RauQBRH1Wr1Bukl5WDhHf6ThrSAWcvlcgxARwAm6gDmIFmcyHPyG9eB1OYUsP9IUw6Olo62220f9jRarVbHMKlYZQDhlt668E6n02lIisIzrujxgObcwyxdYka+4qaJ9JZnTmUwmMcI5lFG30OyAAv772Dsv8gy46FL0tGSrvCKedc6f6me63RgWXjzMp9vLJYAdA/Jc29nLOqMyGjwg02AfXQKLTaGNhmUUWBesADssgnA7oabzaatuohfUyZak2MFXYmdq0eGhB+fYXL5tUn37wa2IDngijImkf81+yCZ6eFvCFCni0Qc8++VwPRduo3ZJOZSwQ/aP6XxMlhveIYvpEr/LaHiR4nDBsquqxEHL7xXL6UKdkO8jWoHKCbEsJjRkAQXOwdsQN8cUckflplvNG4g7DvCdYcrxr1Rn5p7XoDkCz2Gpi3KeSwRkg6dpEAx6vpopYFTGg9z1IVge45f0jSxgRhSDJ4/cvzsPNeKQzokLeFSfPaFtl1esoGxGbLnYmeAWR3l290Dvv43W3IHdnwAAAAASUVORK5CYII=",
  ap = () =>
    a.jsxs("div", {
      id: "home",
      className:
        "w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-12",
      children: [
        a.jsx("img", {
          src: up,
          alt: "",
          className: "rounded-full w-32",
        }),
        a.jsxs("h3", {
          className: "flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo",
          children: ["Hi! I'm Pranav Dalvi"],
        }),
        a.jsx("h1", {
          className: "text-3xl sm:text-6xl lg:text-[66px] font-Ovo",
          children: "Software Developer",
        }),

        a.jsxs("div", {
          className: "flex flex-col sm:flex-row items-center gap-4 mt-4",
          children: [
            a.jsxs("a", {
              href: "#contact",
              className:
                "px-10 py-3 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 dark:border-transparent",
              children: [
                "Contact",
                a.jsx("img", {
                  src: rc,
                  alt: "",
                  className: "w-4",
                }),
              ],
            }),
            a.jsxs("a", {
              href: "../../assets/Pranav_Dalvi_Resume.pdf",
              download: !0,
              className:
                "px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black",
              children: [
                "my resume ",
                a.jsx("img", {
                  src: sp,
                  alt: "",
                  className: "w-4",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  cp = "/assets/header-bg-color.png",
  dp =
    "data:image/png;base64,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",
  fp =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANySURBVHgB7Zs9dtNAEMfHeWkB05LGKaEiRahNQU24QKIb4JoGUUAbOIGVEwROYLe8FPgGdoFpY3yBYca7eh5thLWSxytF8e+9iVcf+/G31ruzswpAYBCxC22HRPbIbsmmZC8hIAcQloiMn2iP7AwCElpobeyFto290LbhJZTnPrI+NAyeonjK8rm3UKgtaEo2ovRHaAi2Lb/YfJwQnyfatcbETRBr2xDbQ26bjvNBBSeYpZJYyheLMmKoANfttCUGTTTEUp6ByB9BSXYuUlSkITaq0sBgIkWFKt24ZJ1hRYqKg4mtTaRogCs2AmVsN1cReQgV6XQ63AhOXvjmQTPfpVPVgspYFGSR8+Mnuj+GurDf+mDD9T7ZJZrFtgufG+IGr8uWH0FTQRNNGKE/Q/R05xoDNfgMTcjEZUk2t5YH5wkaeaiMFelyTXZO9tyxc3vNpQ/KdEAR2/XY0U4HkTnZB7KbgqxHZIn9ZHiQOqHBZwZKaK9HeT6VIiMoFinvndtjLmMIiqg9UdvdRuLUG1g33JdTsitx/Jqe6hgU0Hyicj79DuVFMjc2b4rawKQptC/S11AdmfctKLHqumii5r7f3oy6UyJPoPF4bsWpF7AdP8ke2fRT14NC46D4bm0kPKilLiB/iz3PjKvR1XHHZKVVuqzLEtZCn4AZhdO6I/q4BH/eU57jA8z6n77MoD56UI6VT33If0jsCZjh3Tdj4p4T6cewPUci/Vde4J5E7Z2Bv+DV4KY5vUxF5TwC+8yfebwC4zwwPB4cgwKao+4PkX4H1ZGD4hiU0BTqzn+nUJ5nkBV6BUqoCbUezFic+gKm4b7wvVJYouUVMSGcev69/inIyr/Lz7BDp16dDcu0i5xl2sV/lmn3ak2at/Bmfltb5ly7PwvvFDShlAT9GWGTQylYELxCExxjwdMccXzuK24Ojg2w7uAYZoPLA4/7u/ZJsxW6nZiN69azi4d3I+gRKIN3A9hhxWLAbQKsYa8nrTiYSFFnWLEaIm0ZEZQkmFglkfI3Vzh45eTfrVhU6q6os7W/G7Fo5sGtRdqyYqVyXLGFL2v4rF4msI4g1Lt1Z+EtS/r4Zg8XkI1w5FK4PypCLV1KT6AhUFvYY+I18MRjn9VvI7ipy6Uy69X9u4BtYy+0bTwYoUFB837tFE3IpAdtB2v4J59/7V0ID+cZYRYAAAAASUVORK5CYII=",
  pp =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFoSURBVHgBzdg7UsJQFMbxc28ay7gDM2ksXUQepVtgB8ASKK0cVgB2ltZJCktWkYkrUDurxPNZOBASyOO+/g1zT5jhNydUV1CrOI6XQohV0zR3ZCH+3S8p5T7LsrWgU9iCP3bkQIzcyNbgkRyJ395Stgbf5E5+e3N7cijv+FCWZRWG4Qdv8IGPPllOkOHSNN3Vdb0Y8l2juDEwZAw3FoaM4KbAkCTNDYC99D3QihsCy/O897k23FwY0oJTAUPKcapgSClOJQwpw6mGISU4HTA0G6cLhmbhdMLQZJxuGJqEMwFDo3GmYGgUziQMDcaZhqFBOBswdBVnC4Yu4mzCUC/ONgx14lyAoTOcKzB0gnMJhv5xrsHQH84BWNUe8H1NJZMkeba9Mb7d2nbMNl4QBK+svCFLMMS3WwfcbjEIqAOP1kVRvIkoij4Z59uCXQr/uW3H3DoMebzSd361t7y9ez7/8FqfeKUrcqBflJQnWP0pHksAAAAASUVORK5CYII=",
  Ap =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEGSURBVHgB5dOLCcIwEAbgixM4kiM4Qp1AR6gT1A3aDbqCm9QNqhPEC6SgoWIe9wj0h+MgKdxHkwAEsdaesSarlxmrcxYTwBpsPdSRa4gbsR2hjjx3wcIL6sk+xA1QUb5wxpg7thPWA7YYvNd97LMFyaTARHGpMDFcDkwEFwEbVHAxMP+dLC4WJo5LgYniUmFiuByYCC4Xxo4rgbHiSmFsOAoYC44KRo6jhJHiqGFkOA4YCY4LVozjhBXhuGHZOAlYFk4KloyThCXhpGHROA1YFE4L9henCfPzp5WZk9voNGEed1mZ27iNWRP2AWywRn+Kh2Vx1ob9DCLaKmFLEHPzf9BVC5XkDSKdijNM7/ULAAAAAElFTkSuQmCC",
  mp =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6CAYAAAATBx+NAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFxSURBVHgB7dsxTsNAEAXQv+uGLnZva30DzA3S0nEEOAHhBByFIxBXlJCODko6OMKWVDYztlGUKJHsZpWN/5McWZGlRJPJWNrvNRClaNv2SU4rOVLQ2hjz8CPMUJwPsDD7vBTpKlksFv+dQ7su5KiMc64FHeOtvoCOSbVAn6CDZDbXVgbRHdhFh3hr7cp2tzKZ1vLGGqS0Wd60JlobEBERERERERER0ZZBQJrBNU1zL6t1tzjtHG4bHCKQIaB81VPEoQsOLQKRzlkhnuKoVOP4YAWSX+MS8amCFQiRZv8hO6hGZOQvtgk5pNPhKZISceif7kAg3vvfLMtqKVImH1yif3riFGlw+C7f8ZrBIRERERERERER0Z5JS655ni+TJHmU0yXO2/TgsCiKG2vtM+Zj2pq0rCe/YF7bNvsdh2OuHGLjb8yPDxkcxigdPYOcc9pBJWak23E49mKd6piXbsfh6CEtwd+XDOoN+i4qcb52gsM/Qd5yAPo6248AAAAASUVORK5CYII=",
  gp =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6CAYAAAATBx+NAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEuSURBVHgB7dvRbcIwFIXhYybICNmgdIN2g47STtIRUCdIMwHpBGUD2IBsYO7FeQERKUjIYPJ/0hV5AEU6shzJhwSZGGNtHyubpU0l/Np8hRB2YQjnXwRzrrd59YAau/gQLuk8oCiM6RdKSwmXVR7QRhjTskmPO27SC3+U+YXSow0pmE7+BEvZAAAAAAAAALgLP961+bbZx8fWxHQUraBMhhuubWqVIZ1JK59PlROO8xJjlTOgF5VnmTOgImulnAG1Ks9fzk3aV5AXlLXKkHeTthLOb/hu86PH/j8AxSEAAAAAAABwE3Zs+mazjs/v+uLQfuAv3TWaj/TG4dRvW0BblVX83UI3KaBhuW01P33OXqxE1aSAhvpjp/lp2aTHXVcc2iryNxK9+Ov03E6KwwOvLeiBnmEGowAAAABJRU5ErkJggg==",
  hp =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFCSURBVHgBtdXNrcIwDAfwuO/ybn29PamXjMAIsAEjwCSwAhPAJnDjCCPABtmg2FUrRVE+7NT8L4TI+EcCTYyZYq39M18M9e/7fkVjmCYOwzAccfgCgM0LYxSD/VfY/4pDWtgNpomHV6MKB+CYhpCwjoqw2JovgBjX4IIcrmyvDadA2kXwinZYdA4+W7XVORBbPSEoXgyXQHoDkQ9VwxwwitbCXDCJSmEJmEW5sBQsoiWYICnIQnPwhIlAyo9hxDn37LrujcOtN03YrxRkoxlYDFIaIws1dZF5l5iPhvWbUhL/Uj/sk4u10tRjEZZxL4kimr0tKm+n0uFQfPBrjkxYAnq1IhiWgjUwaIBSGLRACQyaIBcGbZADj2dv27Z3fPnXAscG6UtiOx8OVhOcgz0usQNkXCl+I9rmtSY4J1wxbvnpAwH4iUExRbcKAAAAAElFTkSuQmCC",
  vp =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADMSURBVHgBtdXbDcIwDAVQiwkYoSN0JDaBEdiIFdiAEegGJqGJVEV168f1lfwRR+pRlRdRCzNfKTH1+6XmbePOaz6lJgKnYqW+zXj1xjZQeAD/6b/NGfAeWMd98oaGJXBcVxisApGwCUTALjACh0APDAEtMBTUwCmgAs4BT+A8UAGbwAvZ8i617PQXoR+LsGnGNZ4IFZZ3aQ58AM6c8DqpDj4UZsPBh8DsuGlCMAeuNhccAV0wAjTBSFANtwEMPIP7JBw8gvvEIwMU4OcPVoUD59N3JEMAAAAASUVORK5CYII=",
  yp = () => {
    const e = et.useRef(),
      t = et.useRef(),
      n = et.useRef(),
      r = () => {
        e.current.style.transform = "translateX(-16rem)";
      },
      l = () => {
        e.current.style.transform = "translateX(16rem)";
      },
      o = () => {
        document.documentElement.classList.toggle("dark"),
          document.documentElement.classList.contains("dark")
            ? (localStorage.theme = "dark")
            : (localStorage.theme = "light");
      };
    return (
      et.useEffect(() => {
        window.addEventListener("scroll", () => {
          scrollY > 50
            ? (t.current.classList.add(
                "bg-white",
                "bg-opacity-50",
                "backdrop-blur-lg",
                "shadow-sm",
                "dark:bg-darkTheme",
                "dark:shadow-white/20"
              ),
              n.current.classList.remove(
                "bg-white",
                "shadow-sm",
                "bg-opacity-50",
                "dark:border",
                "dark:border-white/50",
                "dark:bg-transparent"
              ))
            : (t.current.classList.remove(
                "bg-white",
                "bg-opacity-50",
                "backdrop-blur-lg",
                "shadow-sm",
                "dark:bg-darkTheme",
                "dark:shadow-white/20"
              ),
              n.current.classList.add(
                "bg-white",
                "shadow-sm",
                "bg-opacity-50",
                "dark:border",
                "dark:border-white/50",
                "dark:bg-transparent"
              ));
        }),
          localStorage.theme === "dark" ||
          (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
            ? document.documentElement.classList.add("dark")
            : document.documentElement.classList.remove("dark");
      }, []),
      a.jsxs(a.Fragment, {
        children: [
          a.jsx("div", {
            className: `fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]\r
    dark:hidden`,
            children: a.jsx("img", {
              src: cp,
              alt: "",
              className: "w-full",
            }),
          }),
          a.jsxs("nav", {
            ref: t,
            className:
              "w-full fixed px-12 flex gap-8 lg:px-12 xl:px-[8%] py-4 items-center justify-center z-50",
            children: [
              a.jsxs("ul", {
                ref: n,
                className: `hidden md:flex items-center justify-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 font-Ovo\r
        dark:border dark:border-white/50 dark:bg-transparent `,
                children: [
                  a.jsx("li", {
                    children: a.jsx("a", {
                      href: "#home",
                      children: "Home",
                    }),
                  }),
                  a.jsx("li", {
                    children: a.jsx("a", {
                      href: "#about",
                      children: "About",
                    }),
                  }),
                  a.jsx("li", {
                    children: a.jsx("a", {
                      href: "#resume",
                      children: "Resume",
                    }),
                  }),
                  a.jsx("li", {
                    children: a.jsx("a", {
                      href: "#projects",
                      children: "Projects",
                    }),
                  }),
                  a.jsx("li", {
                    children: a.jsx("a", {
                      href: "#research",
                      children: "Research",
                    }),
                  }),
                  a.jsx("li", {
                    children: a.jsx("a", {
                      href: "#contact",
                      children: "Contact",
                    }),
                  }),
                ],
              }),
              a.jsxs("div", {
                className: "flex items-center gap-8 newclass",
                children: [
                  a.jsxs("button", {
                    onClick: o,
                    children: [
                      a.jsx("img", {
                        src: dp,
                        alt: "",
                        className: "px-4 w-6 dark:hidden",
                      }),
                      a.jsx("img", {
                        src: fp,
                        alt: "",
                        className: "px-4 w-6 hidden dark:block",
                      }),
                    ],
                  }),

                  a.jsxs("button", {
                    className: "block md:hidden ml-3",
                    onClick: r,
                    children: [
                      a.jsx("img", {
                        src: mp,
                        alt: "",
                        className: "w-6 dark:hidden",
                      }),
                      a.jsx("img", {
                        src: gp,
                        alt: "",
                        className: "w-6 hidden dark:block",
                      }),
                    ],
                  }),
                ],
              }),
              a.jsxs("ul", {
                ref: e,
                className:
                  "flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 font-Ovo dark:bg-darkHover dark:text-white",
                children: [
                  a.jsxs("div", {
                    className: "absolute right-6 top-6",
                    onClick: l,
                    children: [
                      a.jsx("img", {
                        src: hp,
                        alt: "",
                        className: "w-5 cursor-pointer dark:hidden",
                      }),
                      a.jsx("img", {
                        src: vp,
                        alt: "",
                        className: "w-5 cursor-pointer hidden dark:block",
                      }),
                    ],
                  }),
                  a.jsx("li", {
                    children: a.jsx("a", {
                      href: "#home",
                      onClick: l,
                      children: "Home",
                    }),
                  }),
                  a.jsx("li", {
                    children: a.jsx("a", {
                      href: "#about",
                      onClick: l,
                      children: "About",
                    }),
                  }),
                  a.jsx("li", {
                    children: a.jsx("a", {
                      href: "#resume",
                      onClick: l,
                      children: "Resume",
                    }),
                  }),
                  a.jsx("li", {
                    children: a.jsx("a", {
                      href: "#projects",
                      onClick: l,
                      children: "Projects",
                    }),
                  }),
                  a.jsx("li", {
                    children: a.jsx("a", {
                      href: "#research",
                      onClick: l,
                      children: "Research",
                    }),
                  }),
                  a.jsx("li", {
                    children: a.jsx("a", {
                      href: "#contact",
                      onClick: l,
                      children: "Contact",
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  },
  ABf = () =>
    a.jsxs("div", {
      id: "research",
      className: "w-full px-[12%] py-10 scroll-mt-20",
      children: [
        a.jsx("h4", {
          className: "text-center mb-2 text-lg font-Ovo",
          children: "What I explore",
        }),
        a.jsx("h2", {
          className: "text-center text-5xl font-Ovo",
          children: "Research",
        }),

        a.jsxs("div", {
          className: "grid grid-cols-auto gap-6 my-10",
          children: [
            a.jsxs("div", {
              className: `border border-gray-400 rounded-lg px-8 py-12\r
        hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white`,
              children: [
                a.jsx("img", {
                  src: Yf,
                  alt: "",
                  className: "w-10",
                }),
                a.jsx("h3", {
                  className: "text-lg my-4 text-gray-700 dark:text-white",
                  children:
                    "RLHF: Reinforcement Learning using Human Feedback for Optimization of ChatGPT",
                }),
                a.jsx("p", {
                  className:
                    "text-sm text-gray-600 leading-5 dark:text-white/80",
                  children:
                    "Grenze International Journal of Engineering and Technology, Vol. 10, No. 2, 2024",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  wp = () =>
    a.jsxs(a.Fragment, {
      children: [
        a.jsx(yp, {}),
        a.jsx(ap, {}),
        a.jsx(ip, {}),
        a.jsx(Wf, {}),
        a.jsx(Mf, {}),
        a.jsx(ABf, {}),
        a.jsx(Lf, {}),
        a.jsx(Df, {}),
      ],
    });
Jl.createRoot(document.getElementById("root")).render(a.jsx(wp, {}));
