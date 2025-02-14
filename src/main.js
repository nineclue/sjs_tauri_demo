(function () {
    'use strict';

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise, SuppressedError, Symbol, Iterator */


    typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };

    /**
     * Sends a message to the backend.
     * @example
     * ```typescript
     * import { invoke } from '@tauri-apps/api/core';
     * await invoke('login', { user: 'tauri', password: 'poiwe3h4r5ip3yrhtew9ty' });
     * ```
     *
     * @param cmd The command name.
     * @param args The optional arguments to pass to the command.
     * @param options The request options.
     * @return A promise resolving or rejecting to the backend response.
     *
     * @since 1.0.0
     */
    async function invoke(cmd, args = {}, options) {
        return window.__TAURI_INTERNALS__.invoke(cmd, args, options);
    }

    /**
     * Gets the Tauri version.
     *
     * @example
     * ```typescript
     * import { getTauriVersion } from '@tauri-apps/api/app';
     * const tauriVersion = await getTauriVersion();
     * ```
     *
     * @since 1.0.0
     */
    async function getTauriVersion() {
        return invoke('plugin:app|tauri_version');
    }

    var $L0;
    function $Char(c) {
      this.c = c;
    }
    $Char.prototype.toString = (function() {
      return String.fromCharCode(this.c);
    });
    function $valueDescription(arg0) {
      return (((typeof arg0) === "number") ? (((arg0 === 0) && ((1 / arg0) < 0)) ? "number(-0)" : (("number(" + arg0) + ")")) : ((arg0 instanceof $c_RTLong) ? "long" : ((arg0 instanceof $Char) ? "char" : ((!(!(arg0 && arg0.$classData))) ? arg0.$classData.name : (typeof arg0)))));
    }
    function $throwClassCastException(arg0, arg1) {
      throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError($ct_jl_ClassCastException__T__(new $c_jl_ClassCastException(), (($valueDescription(arg0) + " cannot be cast to ") + arg1)));
    }
    function $throwArrayCastException(arg0, arg1, arg2) {
      while ((--arg2)) {
        arg1 = ("[" + arg1);
      }
      $throwClassCastException(arg0, arg1);
    }
    function $throwArrayIndexOutOFBoundsException(arg0) {
      throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError($ct_jl_ArrayIndexOutOfBoundsException__T__(new $c_jl_ArrayIndexOutOfBoundsException(), ((arg0 === null) ? null : ("" + arg0))));
    }
    function $throwArrayStoreException(arg0) {
      throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_ArrayStoreException(((arg0 === null) ? null : $valueDescription(arg0))));
    }
    function $throwNegativeArraySizeException() {
      throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_NegativeArraySizeException());
    }
    function $throwNullPointerException() {
      throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError($ct_jl_NullPointerException__(new $c_jl_NullPointerException()));
    }
    function $n(arg0) {
      if ((arg0 === null)) {
        $throwNullPointerException();
      }
      return arg0;
    }
    function $objectGetClass(arg0) {
      switch ((typeof arg0)) {
        case "string": {
          return $d_T.getClassOf();
        }
        case "number": {
          if ($isInt(arg0)) {
            if ((((arg0 << 24) >> 24) === arg0)) {
              return $d_jl_Byte.getClassOf();
            } else if ((((arg0 << 16) >> 16) === arg0)) {
              return $d_jl_Short.getClassOf();
            } else {
              return $d_jl_Integer.getClassOf();
            }
          } else if ($isFloat(arg0)) {
            return $d_jl_Float.getClassOf();
          } else {
            return $d_jl_Double.getClassOf();
          }
        }
        case "boolean": {
          return $d_jl_Boolean.getClassOf();
        }
        case "undefined": {
          return $d_jl_Void.getClassOf();
        }
        default: {
          if ((arg0 instanceof $c_RTLong)) {
            return $d_jl_Long.getClassOf();
          } else if ((arg0 instanceof $Char)) {
            return $d_jl_Character.getClassOf();
          } else if ((!(!(arg0 && arg0.$classData)))) {
            return arg0.$classData.getClassOf();
          } else {
            return null;
          }
        }
      }
    }
    function $objectClassName(arg0) {
      switch ((typeof arg0)) {
        case "string": {
          return "java.lang.String";
        }
        case "number": {
          if ($isInt(arg0)) {
            if ((((arg0 << 24) >> 24) === arg0)) {
              return "java.lang.Byte";
            } else if ((((arg0 << 16) >> 16) === arg0)) {
              return "java.lang.Short";
            } else {
              return "java.lang.Integer";
            }
          } else if ($isFloat(arg0)) {
            return "java.lang.Float";
          } else {
            return "java.lang.Double";
          }
        }
        case "boolean": {
          return "java.lang.Boolean";
        }
        case "undefined": {
          return "java.lang.Void";
        }
        default: {
          if ((arg0 instanceof $c_RTLong)) {
            return "java.lang.Long";
          } else if ((arg0 instanceof $Char)) {
            return "java.lang.Character";
          } else if ((!(!(arg0 && arg0.$classData)))) {
            return arg0.$classData.name;
          } else {
            return $throwNullPointerException();
          }
        }
      }
    }
    function $dp_equals__O__Z(instance, x0) {
      switch ((typeof instance)) {
        case "string": {
          return $f_T__equals__O__Z(instance, x0);
        }
        case "number": {
          return $f_jl_Double__equals__O__Z(instance, x0);
        }
        case "boolean": {
          return $f_jl_Boolean__equals__O__Z(instance, x0);
        }
        case "undefined": {
          return $f_jl_Void__equals__O__Z(instance, x0);
        }
        default: {
          if (((!(!(instance && instance.$classData))) || (instance === null))) {
            return instance.equals__O__Z(x0);
          } else if ((instance instanceof $c_RTLong)) {
            return $f_jl_Long__equals__O__Z(instance, x0);
          } else if ((instance instanceof $Char)) {
            return $f_jl_Character__equals__O__Z($uC(instance), x0);
          } else {
            return $c_O.prototype.equals__O__Z.call(instance, x0);
          }
        }
      }
    }
    function $dp_hashCode__I(instance) {
      switch ((typeof instance)) {
        case "string": {
          return $f_T__hashCode__I(instance);
        }
        case "number": {
          return $f_jl_Double__hashCode__I(instance);
        }
        case "boolean": {
          return $f_jl_Boolean__hashCode__I(instance);
        }
        case "undefined": {
          return $f_jl_Void__hashCode__I();
        }
        default: {
          if (((!(!(instance && instance.$classData))) || (instance === null))) {
            return instance.hashCode__I();
          } else if ((instance instanceof $c_RTLong)) {
            return $f_jl_Long__hashCode__I(instance);
          } else if ((instance instanceof $Char)) {
            return $f_jl_Character__hashCode__I($uC(instance));
          } else {
            return $c_O.prototype.hashCode__I.call(instance);
          }
        }
      }
    }
    function $dp_toString__T(instance) {
      return ((instance === (void 0)) ? "undefined" : instance.toString());
    }
    function $intDiv(arg0, arg1) {
      if ((arg1 === 0)) {
        throw new $c_jl_ArithmeticException("/ by zero");
      } else {
        return ((arg0 / arg1) | 0);
      }
    }
    function $intMod(arg0, arg1) {
      if ((arg1 === 0)) {
        throw new $c_jl_ArithmeticException("/ by zero");
      } else {
        return ((arg0 % arg1) | 0);
      }
    }
    function $doubleToInt(arg0) {
      return ((arg0 > 2147483647) ? 2147483647 : ((arg0 < (-2147483648)) ? (-2147483648) : (arg0 | 0)));
    }
    function $cToS(arg0) {
      return String.fromCharCode(arg0);
    }
    function $charAt(arg0, arg1) {
      var r = arg0.charCodeAt(arg1);
      if ((r !== r)) {
        throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError($ct_jl_StringIndexOutOfBoundsException__I__(new $c_jl_StringIndexOutOfBoundsException(), arg1));
      } else {
        return r;
      }
    }
    function $arraycopyCheckBounds(arg0, arg1, arg2, arg3, arg4) {
      if ((((((arg1 < 0) || (arg3 < 0)) || (arg4 < 0)) || (arg1 > ((arg0 - arg4) | 0))) || (arg3 > ((arg2 - arg4) | 0)))) {
        $throwArrayIndexOutOFBoundsException(null);
      }
    }
    function $arraycopyGeneric(arg0, arg1, arg2, arg3, arg4) {
      $arraycopyCheckBounds(arg0.length, arg1, arg2.length, arg3, arg4);
      if ((((arg0 !== arg2) || (arg3 < arg1)) || (((arg1 + arg4) | 0) < arg3))) {
        for (var i = 0; (i < arg4); i = ((i + 1) | 0)) {
          arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)];
        }
      } else {
        for (var i = ((arg4 - 1) | 0); (i >= 0); i = ((i - 1) | 0)) {
          arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)];
        }
      }
    }
    function $systemArraycopy(arg0, arg1, arg2, arg3, arg4) {
      arg0.copyTo(arg1, arg2, arg3, arg4);
    }
    function $systemArraycopyRefs(arg0, arg1, arg2, arg3, arg4) {
      if (arg2.$classData.isAssignableFrom(arg0.$classData)) {
        $arraycopyGeneric(arg0.u, arg1, arg2.u, arg3, arg4);
      } else {
        var srcArray = arg0.u;
        $arraycopyCheckBounds(srcArray.length, arg1, arg2.u.length, arg3, arg4);
        for (var i = 0; (i < arg4); i = ((i + 1) | 0)) {
          arg2.set(((arg3 + i) | 0), srcArray[((arg1 + i) | 0)]);
        }
      }
    }
    function $systemArraycopyFull(arg0, arg1, arg2, arg3, arg4) {
      var srcData = (arg0 && arg0.$classData);
      if ((srcData === (arg2 && arg2.$classData))) {
        if ((srcData && srcData.isArrayClass)) {
          $systemArraycopy(arg0, arg1, arg2, arg3, arg4);
        } else {
          $throwArrayStoreException(null);
        }
      } else if (((arg0 instanceof $ac_O) && (arg2 instanceof $ac_O))) {
        $systemArraycopyRefs(arg0, arg1, arg2, arg3, arg4);
      } else {
        $throwArrayStoreException(null);
      }
    }
    var $lastIDHash = 0;
    var $idHashCodeMap = new WeakMap();
    function $systemIdentityHashCode(obj) {
      switch ((typeof obj)) {
        case "string": {
          return $f_T__hashCode__I(obj);
        }
        case "number": {
          return $f_jl_Double__hashCode__I(obj);
        }
        case "bigint": {
          var biHash = 0;
          if ((obj < BigInt(0))) {
            obj = (~obj);
          }
          while ((obj !== BigInt(0))) {
            biHash = (biHash ^ Number(BigInt.asIntN(32, obj)));
            obj = (obj >> BigInt(32));
          }
          return biHash;
        }
        case "boolean": {
          return (obj ? 1231 : 1237);
        }
        case "undefined": {
          return 0;
        }
        case "symbol": {
          var description = obj.description;
          return ((description === (void 0)) ? 0 : $f_T__hashCode__I(description));
        }
        default: {
          if ((obj === null)) {
            return 0;
          } else {
            var hash = $idHashCodeMap.get(obj);
            if ((hash === (void 0))) {
              hash = (($lastIDHash + 1) | 0);
              $lastIDHash = hash;
              $idHashCodeMap.set(obj, hash);
            }
            return hash;
          }
        }
      }
    }
    function $isByte(arg0) {
      return ((((typeof arg0) === "number") && (((arg0 << 24) >> 24) === arg0)) && ((1 / arg0) !== (1 / (-0))));
    }
    function $isShort(arg0) {
      return ((((typeof arg0) === "number") && (((arg0 << 16) >> 16) === arg0)) && ((1 / arg0) !== (1 / (-0))));
    }
    function $isInt(arg0) {
      return ((((typeof arg0) === "number") && ((arg0 | 0) === arg0)) && ((1 / arg0) !== (1 / (-0))));
    }
    function $isFloat(arg0) {
      return (((typeof arg0) === "number") && ((arg0 !== arg0) || (Math.fround(arg0) === arg0)));
    }
    function $bC(arg0) {
      return new $Char(arg0);
    }
    function $uZ(arg0) {
      return ((((typeof arg0) === "boolean") || (arg0 === null)) ? (!(!arg0)) : $throwClassCastException(arg0, "java.lang.Boolean"));
    }
    function $uC(arg0) {
      return (((arg0 instanceof $Char) || (arg0 === null)) ? ((arg0 === null) ? 0 : arg0.c) : $throwClassCastException(arg0, "java.lang.Character"));
    }
    function $uB(arg0) {
      return (($isByte(arg0) || (arg0 === null)) ? (arg0 | 0) : $throwClassCastException(arg0, "java.lang.Byte"));
    }
    function $uS(arg0) {
      return (($isShort(arg0) || (arg0 === null)) ? (arg0 | 0) : $throwClassCastException(arg0, "java.lang.Short"));
    }
    function $uI(arg0) {
      return (($isInt(arg0) || (arg0 === null)) ? (arg0 | 0) : $throwClassCastException(arg0, "java.lang.Integer"));
    }
    function $uJ(arg0) {
      return (((arg0 instanceof $c_RTLong) || (arg0 === null)) ? ((arg0 === null) ? $L0 : arg0) : $throwClassCastException(arg0, "java.lang.Long"));
    }
    function $uF(arg0) {
      return (($isFloat(arg0) || (arg0 === null)) ? (+arg0) : $throwClassCastException(arg0, "java.lang.Float"));
    }
    function $uD(arg0) {
      return ((((typeof arg0) === "number") || (arg0 === null)) ? (+arg0) : $throwClassCastException(arg0, "java.lang.Double"));
    }
    function $ct_O__($thiz) {
      return $thiz;
    }
    /** @constructor */
    function $c_O() {
    }
    $c_O.prototype.constructor = $c_O;
    /** @constructor */
    function $h_O() {
    }
    $h_O.prototype = $c_O.prototype;
    $c_O.prototype.hashCode__I = (function() {
      return $systemIdentityHashCode(this);
    });
    $c_O.prototype.equals__O__Z = (function(that) {
      return (this === that);
    });
    $c_O.prototype.toString__T = (function() {
      var i = this.hashCode__I();
      return (($objectClassName(this) + "@") + $as_T($uD((i >>> 0.0)).toString(16)));
    });
    $c_O.prototype.toString = (function() {
      return this.toString__T();
    });
    function $ac_O(arg) {
      if (((typeof arg) === "number")) {
        if ((arg < 0)) {
          $throwNegativeArraySizeException();
        }
        this.u = new Array(arg);
        for (var i = 0; (i < arg); (i++)) {
          this.u[i] = null;
        }
      } else {
        this.u = arg;
      }
    }
    $ac_O.prototype = new $h_O();
    $ac_O.prototype.constructor = $ac_O;
    $ac_O.prototype.get = (function(i) {
      if (((i < 0) || (i >= this.u.length))) {
        $throwArrayIndexOutOFBoundsException(i);
      }
      return this.u[i];
    });
    $ac_O.prototype.set = (function(i, v) {
      if (((i < 0) || (i >= this.u.length))) {
        $throwArrayIndexOutOFBoundsException(i);
      }
      this.u[i] = v;
    });
    $ac_O.prototype.copyTo = (function(srcPos, dest, destPos, length) {
      $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length);
    });
    $ac_O.prototype.clone__O = (function() {
      return new $ac_O(this.u.slice());
    });
    function $ah_O() {
    }
    $ah_O.prototype = $ac_O.prototype;
    function $ac_Z(arg) {
      if (((typeof arg) === "number")) {
        if ((arg < 0)) {
          $throwNegativeArraySizeException();
        }
        this.u = new Array(arg);
        for (var i = 0; (i < arg); (i++)) {
          this.u[i] = false;
        }
      } else {
        this.u = arg;
      }
    }
    $ac_Z.prototype = new $h_O();
    $ac_Z.prototype.constructor = $ac_Z;
    $ac_Z.prototype.get = (function(i) {
      if (((i < 0) || (i >= this.u.length))) {
        $throwArrayIndexOutOFBoundsException(i);
      }
      return this.u[i];
    });
    $ac_Z.prototype.set = (function(i, v) {
      if (((i < 0) || (i >= this.u.length))) {
        $throwArrayIndexOutOFBoundsException(i);
      }
      this.u[i] = v;
    });
    $ac_Z.prototype.copyTo = (function(srcPos, dest, destPos, length) {
      $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length);
    });
    $ac_Z.prototype.clone__O = (function() {
      return new $ac_Z(this.u.slice());
    });
    function $ac_C(arg) {
      if (((typeof arg) === "number")) {
        if ((arg < 0)) {
          $throwNegativeArraySizeException();
        }
        this.u = new Uint16Array(arg);
      } else {
        this.u = arg;
      }
    }
    $ac_C.prototype = new $h_O();
    $ac_C.prototype.constructor = $ac_C;
    $ac_C.prototype.get = (function(i) {
      if (((i < 0) || (i >= this.u.length))) {
        $throwArrayIndexOutOFBoundsException(i);
      }
      return this.u[i];
    });
    $ac_C.prototype.set = (function(i, v) {
      if (((i < 0) || (i >= this.u.length))) {
        $throwArrayIndexOutOFBoundsException(i);
      }
      this.u[i] = v;
    });
    $ac_C.prototype.copyTo = (function(srcPos, dest, destPos, length) {
      $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
      dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos);
    });
    $ac_C.prototype.clone__O = (function() {
      return new $ac_C(this.u.slice());
    });
    function $ac_B(arg) {
      if (((typeof arg) === "number")) {
        if ((arg < 0)) {
          $throwNegativeArraySizeException();
        }
        this.u = new Int8Array(arg);
      } else {
        this.u = arg;
      }
    }
    $ac_B.prototype = new $h_O();
    $ac_B.prototype.constructor = $ac_B;
    $ac_B.prototype.get = (function(i) {
      if (((i < 0) || (i >= this.u.length))) {
        $throwArrayIndexOutOFBoundsException(i);
      }
      return this.u[i];
    });
    $ac_B.prototype.set = (function(i, v) {
      if (((i < 0) || (i >= this.u.length))) {
        $throwArrayIndexOutOFBoundsException(i);
      }
      this.u[i] = v;
    });
    $ac_B.prototype.copyTo = (function(srcPos, dest, destPos, length) {
      $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
      dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos);
    });
    $ac_B.prototype.clone__O = (function() {
      return new $ac_B(this.u.slice());
    });
    function $ac_S(arg) {
      if (((typeof arg) === "number")) {
        if ((arg < 0)) {
          $throwNegativeArraySizeException();
        }
        this.u = new Int16Array(arg);
      } else {
        this.u = arg;
      }
    }
    $ac_S.prototype = new $h_O();
    $ac_S.prototype.constructor = $ac_S;
    $ac_S.prototype.get = (function(i) {
      if (((i < 0) || (i >= this.u.length))) {
        $throwArrayIndexOutOFBoundsException(i);
      }
      return this.u[i];
    });
    $ac_S.prototype.set = (function(i, v) {
      if (((i < 0) || (i >= this.u.length))) {
        $throwArrayIndexOutOFBoundsException(i);
      }
      this.u[i] = v;
    });
    $ac_S.prototype.copyTo = (function(srcPos, dest, destPos, length) {
      $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
      dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos);
    });
    $ac_S.prototype.clone__O = (function() {
      return new $ac_S(this.u.slice());
    });
    function $ac_I(arg) {
      if (((typeof arg) === "number")) {
        if ((arg < 0)) {
          $throwNegativeArraySizeException();
        }
        this.u = new Int32Array(arg);
      } else {
        this.u = arg;
      }
    }
    $ac_I.prototype = new $h_O();
    $ac_I.prototype.constructor = $ac_I;
    $ac_I.prototype.get = (function(i) {
      if (((i < 0) || (i >= this.u.length))) {
        $throwArrayIndexOutOFBoundsException(i);
      }
      return this.u[i];
    });
    $ac_I.prototype.set = (function(i, v) {
      if (((i < 0) || (i >= this.u.length))) {
        $throwArrayIndexOutOFBoundsException(i);
      }
      this.u[i] = v;
    });
    $ac_I.prototype.copyTo = (function(srcPos, dest, destPos, length) {
      $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
      dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos);
    });
    $ac_I.prototype.clone__O = (function() {
      return new $ac_I(this.u.slice());
    });
    function $ac_J(arg) {
      if (((typeof arg) === "number")) {
        if ((arg < 0)) {
          $throwNegativeArraySizeException();
        }
        this.u = new Array(arg);
        for (var i = 0; (i < arg); (i++)) {
          this.u[i] = $L0;
        }
      } else {
        this.u = arg;
      }
    }
    $ac_J.prototype = new $h_O();
    $ac_J.prototype.constructor = $ac_J;
    $ac_J.prototype.get = (function(i) {
      if (((i < 0) || (i >= this.u.length))) {
        $throwArrayIndexOutOFBoundsException(i);
      }
      return this.u[i];
    });
    $ac_J.prototype.set = (function(i, v) {
      if (((i < 0) || (i >= this.u.length))) {
        $throwArrayIndexOutOFBoundsException(i);
      }
      this.u[i] = v;
    });
    $ac_J.prototype.copyTo = (function(srcPos, dest, destPos, length) {
      $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length);
    });
    $ac_J.prototype.clone__O = (function() {
      return new $ac_J(this.u.slice());
    });
    function $ac_F(arg) {
      if (((typeof arg) === "number")) {
        if ((arg < 0)) {
          $throwNegativeArraySizeException();
        }
        this.u = new Float32Array(arg);
      } else {
        this.u = arg;
      }
    }
    $ac_F.prototype = new $h_O();
    $ac_F.prototype.constructor = $ac_F;
    $ac_F.prototype.get = (function(i) {
      if (((i < 0) || (i >= this.u.length))) {
        $throwArrayIndexOutOFBoundsException(i);
      }
      return this.u[i];
    });
    $ac_F.prototype.set = (function(i, v) {
      if (((i < 0) || (i >= this.u.length))) {
        $throwArrayIndexOutOFBoundsException(i);
      }
      this.u[i] = v;
    });
    $ac_F.prototype.copyTo = (function(srcPos, dest, destPos, length) {
      $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
      dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos);
    });
    $ac_F.prototype.clone__O = (function() {
      return new $ac_F(this.u.slice());
    });
    function $ac_D(arg) {
      if (((typeof arg) === "number")) {
        if ((arg < 0)) {
          $throwNegativeArraySizeException();
        }
        this.u = new Float64Array(arg);
      } else {
        this.u = arg;
      }
    }
    $ac_D.prototype = new $h_O();
    $ac_D.prototype.constructor = $ac_D;
    $ac_D.prototype.get = (function(i) {
      if (((i < 0) || (i >= this.u.length))) {
        $throwArrayIndexOutOFBoundsException(i);
      }
      return this.u[i];
    });
    $ac_D.prototype.set = (function(i, v) {
      if (((i < 0) || (i >= this.u.length))) {
        $throwArrayIndexOutOFBoundsException(i);
      }
      this.u[i] = v;
    });
    $ac_D.prototype.copyTo = (function(srcPos, dest, destPos, length) {
      $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
      dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos);
    });
    $ac_D.prototype.clone__O = (function() {
      return new $ac_D(this.u.slice());
    });
    function $TypeData() {
      this.constr = (void 0);
      this.ancestors = null;
      this.componentData = null;
      this.arrayBase = null;
      this.arrayDepth = 0;
      this.zero = null;
      this.arrayEncodedName = "";
      this._classOf = (void 0);
      this._arrayOf = (void 0);
      this.isAssignableFromFun = (void 0);
      this.wrapArray = (void 0);
      this.isJSType = false;
      this.name = "";
      this.isPrimitive = false;
      this.isInterface = false;
      this.isArrayClass = false;
      this.isInstance = (void 0);
    }
    $TypeData.prototype.initPrim = (function(zero, arrayEncodedName, displayName, arrayClass, typedArrayClass) {
      this.ancestors = ({});
      this.zero = zero;
      this.arrayEncodedName = arrayEncodedName;
      var self = this;
      this.isAssignableFromFun = ((that) => (that === self));
      this.name = displayName;
      this.isPrimitive = true;
      this.isInstance = ((obj) => false);
      if ((arrayClass !== (void 0))) {
        this._arrayOf = new $TypeData().initSpecializedArray(this, arrayClass, typedArrayClass);
      }
      return this;
    });
    $TypeData.prototype.initClass = (function(kindOrCtor, fullName, ancestors, isInstance) {
      var internalName = Object.getOwnPropertyNames(ancestors)[0];
      this.ancestors = ancestors;
      this.arrayEncodedName = (("L" + fullName) + ";");
      this.isAssignableFromFun = ((that) => (!(!that.ancestors[internalName])));
      this.isJSType = (kindOrCtor === 2);
      this.name = fullName;
      this.isInterface = (kindOrCtor === 1);
      this.isInstance = (isInstance || ((obj) => (!(!((obj && obj.$classData) && obj.$classData.ancestors[internalName])))));
      if (((typeof kindOrCtor) !== "number")) {
        kindOrCtor.prototype.$classData = this;
      }
      return this;
    });
    $TypeData.prototype.initSpecializedArray = (function(componentData, arrayClass, typedArrayClass, isAssignableFromFun) {
      arrayClass.prototype.$classData = this;
      var name = ("[" + componentData.arrayEncodedName);
      this.constr = arrayClass;
      this.ancestors = ({
        jl_Cloneable: 1,
        Ljava_io_Serializable: 1
      });
      this.componentData = componentData;
      this.arrayBase = componentData;
      this.arrayDepth = 1;
      this.arrayEncodedName = name;
      this.name = name;
      this.isArrayClass = true;
      var self = this;
      this.isAssignableFromFun = (isAssignableFromFun || ((that) => (self === that)));
      this.wrapArray = (typedArrayClass ? ((array) => new arrayClass(new typedArrayClass(array))) : ((array) => new arrayClass(array)));
      this.isInstance = ((obj) => (obj instanceof arrayClass));
      return this;
    });
    $TypeData.prototype.initArray = (function(componentData) {
      function ArrayClass(arg) {
        if (((typeof arg) === "number")) {
          if ((arg < 0)) {
            $throwNegativeArraySizeException();
          }
          this.u = new Array(arg);
          for (var i = 0; (i < arg); (i++)) {
            this.u[i] = null;
          }
        } else {
          this.u = arg;
        }
      }
      ArrayClass.prototype = new $ah_O();
      ArrayClass.prototype.constructor = ArrayClass;
      ArrayClass.prototype.set = (function(i, v) {
        if (((i < 0) || (i >= this.u.length))) {
          $throwArrayIndexOutOFBoundsException(i);
        }
        if ((((v !== null) && (!componentData.isJSType)) && (!componentData.isInstance(v)))) {
          $throwArrayStoreException(v);
        }
        this.u[i] = v;
      });
      ArrayClass.prototype.copyTo = (function(srcPos, dest, destPos, length) {
        $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length);
      });
      ArrayClass.prototype.clone__O = (function() {
        return new ArrayClass(this.u.slice());
      });
      ArrayClass.prototype.$classData = this;
      var arrayBase = (componentData.arrayBase || componentData);
      var arrayDepth = (componentData.arrayDepth + 1);
      var name = ("[" + componentData.arrayEncodedName);
      this.constr = ArrayClass;
      this.ancestors = ({
        jl_Cloneable: 1,
        Ljava_io_Serializable: 1
      });
      this.componentData = componentData;
      this.arrayBase = arrayBase;
      this.arrayDepth = arrayDepth;
      this.arrayEncodedName = name;
      this.name = name;
      this.isArrayClass = true;
      var isAssignableFromFun = ((that) => {
        var thatDepth = that.arrayDepth;
        return ((thatDepth === arrayDepth) ? arrayBase.isAssignableFromFun(that.arrayBase) : ((thatDepth > arrayDepth) && (arrayBase === $d_O)));
      });
      this.isAssignableFromFun = isAssignableFromFun;
      this.wrapArray = ((array) => new ArrayClass(array));
      var self = this;
      this.isInstance = ((obj) => {
        var data = (obj && obj.$classData);
        return ((!(!data)) && ((data === self) || isAssignableFromFun(data)));
      });
      return this;
    });
    $TypeData.prototype.getArrayOf = (function() {
      if ((!this._arrayOf)) {
        this._arrayOf = new $TypeData().initArray(this);
      }
      return this._arrayOf;
    });
    $TypeData.prototype.getClassOf = (function() {
      if ((!this._classOf)) {
        this._classOf = new $c_jl_Class(this);
      }
      return this._classOf;
    });
    $TypeData.prototype.isAssignableFrom = (function(that) {
      return ((this === that) || this.isAssignableFromFun(that));
    });
    $TypeData.prototype.cast = (function(obj) {
      if ((((obj !== null) && (!this.isJSType)) && (!this.isInstance(obj)))) {
        $throwClassCastException(obj, this.name);
      }
      return obj;
    });
    $TypeData.prototype.getSuperclass = (function() {
      return (this.parentData ? this.parentData.getClassOf() : null);
    });
    $TypeData.prototype.getComponentType = (function() {
      return (this.componentData ? this.componentData.getClassOf() : null);
    });
    $TypeData.prototype.newArray = (function(length) {
      if ((this === $d_V)) {
        throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
      }
      return new (this.getArrayOf().constr)(length);
    });
    function $isArrayOf_O(obj, depth) {
      var data = (obj && obj.$classData);
      if ((!data)) {
        return false;
      } else {
        var arrayDepth = data.arrayDepth;
        return ((arrayDepth === depth) ? (!data.arrayBase.isPrimitive) : (arrayDepth > depth));
      }
    }
    function $isArrayOf_Z(obj, depth) {
      return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_Z))));
    }
    function $isArrayOf_C(obj, depth) {
      return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_C))));
    }
    function $isArrayOf_B(obj, depth) {
      return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_B))));
    }
    function $isArrayOf_S(obj, depth) {
      return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_S))));
    }
    function $isArrayOf_I(obj, depth) {
      return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_I))));
    }
    function $isArrayOf_J(obj, depth) {
      return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_J))));
    }
    function $isArrayOf_F(obj, depth) {
      return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_F))));
    }
    function $isArrayOf_D(obj, depth) {
      return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_D))));
    }
    function $asArrayOf_O(obj, depth) {
      if (($isArrayOf_O(obj, depth) || (obj === null))) {
        return obj;
      } else {
        $throwArrayCastException(obj, "Ljava.lang.Object;", depth);
      }
    }
    function $asArrayOf_Z(obj, depth) {
      if (($isArrayOf_Z(obj, depth) || (obj === null))) {
        return obj;
      } else {
        $throwArrayCastException(obj, "Z", depth);
      }
    }
    function $asArrayOf_C(obj, depth) {
      if (($isArrayOf_C(obj, depth) || (obj === null))) {
        return obj;
      } else {
        $throwArrayCastException(obj, "C", depth);
      }
    }
    function $asArrayOf_B(obj, depth) {
      if (($isArrayOf_B(obj, depth) || (obj === null))) {
        return obj;
      } else {
        $throwArrayCastException(obj, "B", depth);
      }
    }
    function $asArrayOf_S(obj, depth) {
      if (($isArrayOf_S(obj, depth) || (obj === null))) {
        return obj;
      } else {
        $throwArrayCastException(obj, "S", depth);
      }
    }
    function $asArrayOf_I(obj, depth) {
      if (($isArrayOf_I(obj, depth) || (obj === null))) {
        return obj;
      } else {
        $throwArrayCastException(obj, "I", depth);
      }
    }
    function $asArrayOf_J(obj, depth) {
      if (($isArrayOf_J(obj, depth) || (obj === null))) {
        return obj;
      } else {
        $throwArrayCastException(obj, "J", depth);
      }
    }
    function $asArrayOf_F(obj, depth) {
      if (($isArrayOf_F(obj, depth) || (obj === null))) {
        return obj;
      } else {
        $throwArrayCastException(obj, "F", depth);
      }
    }
    function $asArrayOf_D(obj, depth) {
      if (($isArrayOf_D(obj, depth) || (obj === null))) {
        return obj;
      } else {
        $throwArrayCastException(obj, "D", depth);
      }
    }
    var $d_O = new $TypeData();
    $d_O.ancestors = ({});
    $d_O.arrayEncodedName = "Ljava.lang.Object;";
    $d_O.isAssignableFromFun = ((that) => (!that.isPrimitive));
    $d_O.name = "java.lang.Object";
    $d_O.isInstance = ((obj) => (obj !== null));
    $d_O._arrayOf = new $TypeData().initSpecializedArray($d_O, $ac_O, (void 0), ((that) => {
      var thatDepth = that.arrayDepth;
      return ((thatDepth === 1) ? (!that.arrayBase.isPrimitive) : (thatDepth > 1));
    }));
    $c_O.prototype.$classData = $d_O;
    var $d_V = new $TypeData().initPrim((void 0), "V", "void", (void 0), (void 0));
    var $d_Z = new $TypeData().initPrim(false, "Z", "boolean", $ac_Z, (void 0));
    var $d_C = new $TypeData().initPrim(0, "C", "char", $ac_C, Uint16Array);
    var $d_B = new $TypeData().initPrim(0, "B", "byte", $ac_B, Int8Array);
    var $d_S = new $TypeData().initPrim(0, "S", "short", $ac_S, Int16Array);
    var $d_I = new $TypeData().initPrim(0, "I", "int", $ac_I, Int32Array);
    var $d_J = new $TypeData().initPrim(null, "J", "long", $ac_J, (void 0));
    var $d_F = new $TypeData().initPrim(0.0, "F", "float", $ac_F, Float32Array);
    var $d_D = new $TypeData().initPrim(0.0, "D", "double", $ac_D, Float64Array);
    function $s_LFront__main__AT__V(as) {
      $m_LFront$().main__AT__V(as);
    }
    function $p_LFront$__submitHandler$1__Lorg_scalajs_dom_HTMLInputElement__Lorg_scalajs_dom_HTMLParagraphElement__Lorg_scalajs_dom_Event__V($thiz, nameInput$1, greetMsg$1, e) {
      e.preventDefault();
      var $x_1 = $m_sr_ScalaRunTime$();
      var y = $as_T(nameInput$1.value);
      var properties = $x_1.wrapRefArray__AO__sci_ArraySeq(new ($d_T2.getArrayOf().constr)([new $c_T2("name", y)]));
      var args$proxy1 = $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(properties);
      var p = invoke("greet", args$proxy1);
      $n($m_sjs_js_Thenable$ThenableOps$().toFuture$extension__sjs_js_Thenable__s_concurrent_Future(p)).onComplete__F1__s_concurrent_ExecutionContext__V(new $c_sjsr_AnonFunction1(((tryo) => {
        var tryo$1 = $as_s_util_Try(tryo);
        var x = ("Future completed : " + tryo$1);
        var this$7 = $m_s_Console$();
        var this$8 = $n(this$7.out__Ljava_io_PrintStream());
        this$8.java$lang$JSConsoleBasedPrintStream$$printString__T__V((x + "\n"));
        matchResult1: {
          if ((tryo$1 instanceof $c_s_util_Success)) {
            var x3 = $as_T($n($as_s_util_Success(tryo$1)).s_util_Success__f_value);
            if ((x3 !== null)) {
              greetMsg$1.textContent = x3;
              break matchResult1;
            }
          }
          var this$10 = $m_s_Console$();
          var this$11 = $n(this$10.out__Ljava_io_PrintStream());
          this$11.java$lang$JSConsoleBasedPrintStream$$printString__T__V("Failed to get message from 'greet'\n");
        }
      })), $thiz.LFront$__f_ec);
    }
    /** @constructor */
    function $c_LFront$() {
      this.LFront$__f_ec = null;
      this.LFront$__f_content = null;
      $n_LFront$ = this;
      this.LFront$__f_ec = $m_s_concurrent_ExecutionContext$().global__s_concurrent_ExecutionContextExecutor();
      var nameInput = $n($n($as_Lscalatags_JsDom$TypedTag($m_Lscalatags_JsDom$all$().input__Lscalatags_generic_TypedTag())).apply__sci_Seq__Lscalatags_JsDom$TypedTag($m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lscalatags_generic_Modifier.getArrayOf().constr)([$n($m_Lscalatags_JsDom$all$().id__Lscalatags_generic_Attr()).$colon$eq__O__Lscalatags_generic_AttrValue__Lscalatags_generic_AttrPair("greet-input", $m_Lscalatags_JsDom$all$().Lscalatags_JsDom$all$__f_stringAttr), $n($m_Lscalatags_JsDom$all$().placeholder__Lscalatags_generic_Attr()).$colon$eq__O__Lscalatags_generic_AttrValue__Lscalatags_generic_AttrPair("Enter a name...", $m_Lscalatags_JsDom$all$().Lscalatags_JsDom$all$__f_stringAttr)])))).render__Lorg_scalajs_dom_Element();
      var greetMsg = $n($n($as_Lscalatags_JsDom$TypedTag($m_Lscalatags_JsDom$all$().p__Lscalatags_generic_TypedTag())).apply__sci_Seq__Lscalatags_JsDom$TypedTag($m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lscalatags_generic_Modifier.getArrayOf().constr)([$n($m_Lscalatags_JsDom$all$().id__Lscalatags_generic_Attr()).$colon$eq__O__Lscalatags_generic_AttrValue__Lscalatags_generic_AttrPair("greet-msg", $m_Lscalatags_JsDom$all$().Lscalatags_JsDom$all$__f_stringAttr)])))).render__Lorg_scalajs_dom_Element();
      var this$2 = $m_Lscalatags_JsDom$all$();
      $m_Lscalatags_JsDom$all$();
      var void$1 = false;
      var ns = $m_Lscalatags_generic_Namespace$().Lscalatags_generic_Namespace$__f_htmlNamespaceConfig;
      var $x_14 = $as_Lscalatags_JsDom$TypedTag($f_Lscalatags_jsdom_TagFactory__typedTag__T__Z__Lscalatags_generic_Namespace__Lscalatags_generic_TypedTag(this$2, "main", void$1, ns));
      var $x_13 = $m_sr_ScalaRunTime$();
      var $x_12 = $n($m_Lscalatags_JsDom$all$().cls__Lscalatags_generic_Attr()).$colon$eq__O__Lscalatags_generic_AttrValue__Lscalatags_generic_AttrPair("container", $m_Lscalatags_JsDom$all$().Lscalatags_JsDom$all$__f_stringAttr);
      var this$4 = $n($m_Lscalatags_JsDom$all$().h1__Lscalatags_generic_TypedTag());
      var xs = $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lscalatags_generic_Modifier.getArrayOf().constr)([($m_Lscalatags_JsDom$all$(), new $c_Lscalatags_JsDom$StringFrag("Welcome to Tauri"))]));
      var $x_11 = this$4.apply__sci_Seq__Lscalatags_JsDom$TypedTag(xs);
      var $x_10 = $n($as_Lscalatags_JsDom$TypedTag($m_Lscalatags_JsDom$all$().div__Lscalatags_generic_TypedTag())).apply__sci_Seq__Lscalatags_JsDom$TypedTag($m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lscalatags_generic_Modifier.getArrayOf().constr)([$n($m_Lscalatags_JsDom$all$().cls__Lscalatags_generic_Attr()).$colon$eq__O__Lscalatags_generic_AttrValue__Lscalatags_generic_AttrPair("row", $m_Lscalatags_JsDom$all$().Lscalatags_JsDom$all$__f_stringAttr), $n($as_Lscalatags_JsDom$TypedTag($m_Lscalatags_JsDom$all$().a__Lscalatags_generic_TypedTag())).apply__sci_Seq__Lscalatags_JsDom$TypedTag($m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lscalatags_generic_Modifier.getArrayOf().constr)([$n($m_Lscalatags_JsDom$all$().href__Lscalatags_generic_Attr()).$colon$eq__O__Lscalatags_generic_AttrValue__Lscalatags_generic_AttrPair("https://tauri.app", $m_Lscalatags_JsDom$all$().Lscalatags_JsDom$all$__f_stringAttr), $n($m_Lscalatags_JsDom$all$().target__Lscalatags_generic_Attr()).$colon$eq__O__Lscalatags_generic_AttrValue__Lscalatags_generic_AttrPair("_blank", $m_Lscalatags_JsDom$all$().Lscalatags_JsDom$all$__f_stringAttr), $n($as_Lscalatags_JsDom$TypedTag($m_Lscalatags_JsDom$all$().img__Lscalatags_generic_TypedTag())).apply__sci_Seq__Lscalatags_JsDom$TypedTag($m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lscalatags_generic_Modifier.getArrayOf().constr)([$n($m_Lscalatags_JsDom$all$().src__Lscalatags_generic_Attr()).$colon$eq__O__Lscalatags_generic_AttrValue__Lscalatags_generic_AttrPair("/assets/tauri.svg", $m_Lscalatags_JsDom$all$().Lscalatags_JsDom$all$__f_stringAttr), $n($m_Lscalatags_JsDom$all$().cls__Lscalatags_generic_Attr()).$colon$eq__O__Lscalatags_generic_AttrValue__Lscalatags_generic_AttrPair("logo tauri", $m_Lscalatags_JsDom$all$().Lscalatags_JsDom$all$__f_stringAttr), $n($m_Lscalatags_JsDom$all$().alt__Lscalatags_generic_Attr()).$colon$eq__O__Lscalatags_generic_AttrValue__Lscalatags_generic_AttrPair("Tauri logo", $m_Lscalatags_JsDom$all$().Lscalatags_JsDom$all$__f_stringAttr)])))]))), $n($as_Lscalatags_JsDom$TypedTag($m_Lscalatags_JsDom$all$().a__Lscalatags_generic_TypedTag())).apply__sci_Seq__Lscalatags_JsDom$TypedTag($m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lscalatags_generic_Modifier.getArrayOf().constr)([$n($m_Lscalatags_JsDom$all$().href__Lscalatags_generic_Attr()).$colon$eq__O__Lscalatags_generic_AttrValue__Lscalatags_generic_AttrPair("https://developer.mozilla.org/en-US/docs/Web/JavaScript", $m_Lscalatags_JsDom$all$().Lscalatags_JsDom$all$__f_stringAttr), $n($m_Lscalatags_JsDom$all$().target__Lscalatags_generic_Attr()).$colon$eq__O__Lscalatags_generic_AttrValue__Lscalatags_generic_AttrPair("_blank", $m_Lscalatags_JsDom$all$().Lscalatags_JsDom$all$__f_stringAttr), $n($as_Lscalatags_JsDom$TypedTag($m_Lscalatags_JsDom$all$().img__Lscalatags_generic_TypedTag())).apply__sci_Seq__Lscalatags_JsDom$TypedTag($m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lscalatags_generic_Modifier.getArrayOf().constr)([$n($m_Lscalatags_JsDom$all$().src__Lscalatags_generic_Attr()).$colon$eq__O__Lscalatags_generic_AttrValue__Lscalatags_generic_AttrPair("/assets/javascript.svg", $m_Lscalatags_JsDom$all$().Lscalatags_JsDom$all$__f_stringAttr), $n($m_Lscalatags_JsDom$all$().cls__Lscalatags_generic_Attr()).$colon$eq__O__Lscalatags_generic_AttrValue__Lscalatags_generic_AttrPair("logo vanilla", $m_Lscalatags_JsDom$all$().Lscalatags_JsDom$all$__f_stringAttr), $n($m_Lscalatags_JsDom$all$().alt__Lscalatags_generic_Attr()).$colon$eq__O__Lscalatags_generic_AttrValue__Lscalatags_generic_AttrPair("JavaScript logo", $m_Lscalatags_JsDom$all$().Lscalatags_JsDom$all$__f_stringAttr)])))])))])));
      var $x_9 = $n($as_Lscalatags_JsDom$TypedTag($m_Lscalatags_JsDom$all$().p__Lscalatags_generic_TypedTag())).apply__sci_Seq__Lscalatags_JsDom$TypedTag($m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lscalatags_generic_Modifier.getArrayOf().constr)([($m_Lscalatags_JsDom$all$(), new $c_Lscalatags_JsDom$StringFrag("Click on the Tauri logo to learn more about the framework"))])));
      var $x_8 = $n($as_Lscalatags_JsDom$TypedTag($m_Lscalatags_JsDom$all$().form__Lscalatags_generic_TypedTag()));
      var $x_7 = $m_sr_ScalaRunTime$();
      var $x_6 = $n($m_Lscalatags_JsDom$all$().cls__Lscalatags_generic_Attr()).$colon$eq__O__Lscalatags_generic_AttrValue__Lscalatags_generic_AttrPair("row", $m_Lscalatags_JsDom$all$().Lscalatags_JsDom$all$__f_stringAttr);
      var $x_5 = $n($m_Lscalatags_JsDom$all$().id__Lscalatags_generic_Attr()).$colon$eq__O__Lscalatags_generic_AttrValue__Lscalatags_generic_AttrPair("greet-form", $m_Lscalatags_JsDom$all$().Lscalatags_JsDom$all$__f_stringAttr);
      var $x_4 = $n($m_Lscalatags_JsDom$all$().onsubmit__Lscalatags_generic_Attr());
      var $x_3 = new $c_sjsr_AnonFunction1(((e) => {
        $p_LFront$__submitHandler$1__Lorg_scalajs_dom_HTMLInputElement__Lorg_scalajs_dom_HTMLParagraphElement__Lorg_scalajs_dom_Event__V(this, nameInput, greetMsg, e);
      }));
      $m_Lscalatags_JsDom$all$();
      var ev = new $c_sjsr_AnonFunction1(((f) => {
        var f$1 = $as_F1(f);
        return $m_sjs_js_Any$().fromFunction1__F1__sjs_js_Function1(f$1);
      }));
      var $x_2 = $x_4.$colon$eq__O__Lscalatags_generic_AttrValue__Lscalatags_generic_AttrPair($x_3, new $c_Lscalatags_LowPriorityImplicits$$anon$2(ev));
      var this$8 = $m_Lscalatags_JsDom$all$();
      var $x_1 = $x_8.apply__sci_Seq__Lscalatags_JsDom$TypedTag($x_7.wrapRefArray__AO__sci_ArraySeq(new ($d_Lscalatags_generic_Modifier.getArrayOf().constr)([$x_6, $x_5, $x_2, new $c_Lscalatags_LowPriorityImplicits$bindNode(this$8, nameInput), $n($as_Lscalatags_JsDom$TypedTag($m_Lscalatags_JsDom$all$().button__Lscalatags_generic_TypedTag())).apply__sci_Seq__Lscalatags_JsDom$TypedTag($m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lscalatags_generic_Modifier.getArrayOf().constr)([$n($m_Lscalatags_JsDom$all$().type__Lscalatags_generic_Attr()).$colon$eq__O__Lscalatags_generic_AttrValue__Lscalatags_generic_AttrPair("submit", $m_Lscalatags_JsDom$all$().Lscalatags_JsDom$all$__f_stringAttr), ($m_Lscalatags_JsDom$all$(), new $c_Lscalatags_JsDom$StringFrag("Greet"))])))])));
      var this$10 = $m_Lscalatags_JsDom$all$();
      this.LFront$__f_content = $n($x_14).apply__sci_Seq__Lscalatags_JsDom$TypedTag($x_13.wrapRefArray__AO__sci_ArraySeq(new ($d_Lscalatags_generic_Modifier.getArrayOf().constr)([$x_12, $x_11, $x_10, $x_9, $x_1, new $c_Lscalatags_LowPriorityImplicits$bindNode(this$10, greetMsg)])));
    }
    $c_LFront$.prototype = new $h_O();
    $c_LFront$.prototype.constructor = $c_LFront$;
    $c_LFront$.prototype;
    $c_LFront$.prototype.main__AT__V = (function(as) {
      var p = getTauriVersion();
      var v = $m_sjs_js_Thenable$ThenableOps$().toFuture$extension__sjs_js_Thenable__s_concurrent_Future(p);
      $n(v).onComplete__F1__s_concurrent_ExecutionContext__V(new $c_sjsr_AnonFunction1(((tso) => {
        var tso$1 = $as_s_util_Try(tso);
        var this$2 = $n($n(tso$1).toOption__s_Option());
        if ((!this$2.isEmpty__Z())) {
          var arg1 = this$2.get__O();
          var s = $as_T(arg1);
          var x = ("Hello from Scala.js, " + s);
          var this$4 = $m_s_Console$();
          var this$5 = $n(this$4.out__Ljava_io_PrintStream());
          this$5.java$lang$JSConsoleBasedPrintStream$$printString__T__V((x + "\n"));
        }
      })), this.LFront$__f_ec);
      document.body.appendChild($n(this.LFront$__f_content).render__Lorg_scalajs_dom_Element());
    });
    new $TypeData().initClass($c_LFront$, "Front$", ({
      LFront$: 1
    }));
    var $n_LFront$;
    function $m_LFront$() {
      if ((!$n_LFront$)) {
        $n_LFront$ = new $c_LFront$();
      }
      return $n_LFront$;
    }
    /** @constructor */
    function $c_jl_FloatingPointBits$() {
      this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$_areTypedArraysSupported = false;
      this.jl_FloatingPointBits$__f_arrayBuffer = null;
      this.jl_FloatingPointBits$__f_int32Array = null;
      this.jl_FloatingPointBits$__f_float64Array = null;
      this.jl_FloatingPointBits$__f_areTypedArraysBigEndian = false;
      this.jl_FloatingPointBits$__f_highOffset = 0;
      this.jl_FloatingPointBits$__f_lowOffset = 0;
      this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$doublePowsOf2 = null;
      $n_jl_FloatingPointBits$ = this;
      this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$_areTypedArraysSupported = true;
      this.jl_FloatingPointBits$__f_arrayBuffer = new ArrayBuffer(8);
      this.jl_FloatingPointBits$__f_int32Array = new Int32Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 2);
      new Float32Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 2);
      this.jl_FloatingPointBits$__f_float64Array = new Float64Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 1);
      this.jl_FloatingPointBits$__f_int32Array[0] = 16909060;
      this.jl_FloatingPointBits$__f_areTypedArraysBigEndian = ($uB(new Int8Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 8)[0]) === 1);
      this.jl_FloatingPointBits$__f_highOffset = (this.jl_FloatingPointBits$__f_areTypedArraysBigEndian ? 0 : 1);
      this.jl_FloatingPointBits$__f_lowOffset = (this.jl_FloatingPointBits$__f_areTypedArraysBigEndian ? 1 : 0);
      this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$doublePowsOf2 = null;
    }
    $c_jl_FloatingPointBits$.prototype = new $h_O();
    $c_jl_FloatingPointBits$.prototype.constructor = $c_jl_FloatingPointBits$;
    $c_jl_FloatingPointBits$.prototype;
    $c_jl_FloatingPointBits$.prototype.numberHashCode__D__I = (function(value) {
      var iv = $uI((value | 0.0));
      if (((iv === value) && ((1.0 / value) !== (-Infinity)))) {
        return iv;
      } else {
        this.jl_FloatingPointBits$__f_float64Array[0] = value;
        return ($uI(this.jl_FloatingPointBits$__f_int32Array[0]) ^ $uI(this.jl_FloatingPointBits$__f_int32Array[1]));
      }
    });
    new $TypeData().initClass($c_jl_FloatingPointBits$, "java.lang.FloatingPointBits$", ({
      jl_FloatingPointBits$: 1
    }));
    var $n_jl_FloatingPointBits$;
    function $m_jl_FloatingPointBits$() {
      if ((!$n_jl_FloatingPointBits$)) {
        $n_jl_FloatingPointBits$ = new $c_jl_FloatingPointBits$();
      }
      return $n_jl_FloatingPointBits$;
    }
    var $d_jl_Runnable = new $TypeData().initClass(1, "java.lang.Runnable", ({
      jl_Runnable: 1
    }));
    function $p_jl_StackTrace$__normalizedLinesToStackTrace__O__Ajl_StackTraceElement($thiz, lines) {
      var NormalizedFrameLine = $m_jl_StackTrace$StringRE$().re$extension0__T__O("^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$");
      var trace = [];
      var i = 0;
      while ((i < $uI(lines.length))) {
        var line = $as_T(lines[i]);
        var this$1 = $n(line);
        if ((!(this$1 === ""))) {
          var mtch = NormalizedFrameLine.exec(line);
          if ((mtch !== null)) {
            var x = mtch[1];
            var classAndMethodName = $p_jl_StackTrace$__extractClassMethod__T__O($thiz, $as_T(x));
            var $x_6 = $as_T(classAndMethodName[0]);
            var $x_5 = $as_T(classAndMethodName[1]);
            var x$1 = mtch[2];
            var $x_4 = $as_T(x$1);
            var x$2 = mtch[3];
            var s = $as_T(x$2);
            var $x_3 = $uI(parseInt(s));
            var x$3 = mtch[4];
            if ((x$3 !== (void 0))) {
              var t = $as_T(x$3);
              var $x_2 = $uI(parseInt(t));
            } else {
              var $x_2 = (-1);
            }
            var $x_1 = trace.push(new $c_jl_StackTraceElement($x_6, $x_5, $x_4, $x_3, $x_2));
            $uI($x_1);
          } else {
            $uI(trace.push(new $c_jl_StackTraceElement("<jscode>", line, null, (-1), (-1))));
          }
        }
        i = ((1 + i) | 0);
      }
      var len = $uI(trace.length);
      var result = new ($d_jl_StackTraceElement.getArrayOf().constr)(len);
      i = 0;
      while ((i < len)) {
        result.set(i, $as_jl_StackTraceElement(trace[i]));
        i = ((1 + i) | 0);
      }
      return result;
    }
    function $p_jl_StackTrace$__extractClassMethod__T__O($thiz, functionName) {
      var PatBC = $m_jl_StackTrace$StringRE$().re$extension0__T__O("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$");
      var PatS = $m_jl_StackTrace$StringRE$().re$extension0__T__O("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$");
      var PatCT = $m_jl_StackTrace$StringRE$().re$extension0__T__O("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$");
      var PatN = $m_jl_StackTrace$StringRE$().re$extension0__T__O("^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$");
      var PatM = $m_jl_StackTrace$StringRE$().re$extension0__T__O("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$");
      var matchBC = PatBC.exec(functionName);
      var matchBCOrS = ((matchBC !== null) ? matchBC : PatS.exec(functionName));
      if ((matchBCOrS !== null)) {
        var x = matchBCOrS[1];
        var $x_1 = $p_jl_StackTrace$__decodeClassName__T__T($thiz, $as_T(x));
        var x$1 = matchBCOrS[2];
        return [$x_1, $p_jl_StackTrace$__decodeMethodName__T__T($thiz, $as_T(x$1))];
      } else {
        var matchCT = PatCT.exec(functionName);
        var matchCTOrN = ((matchCT !== null) ? matchCT : PatN.exec(functionName));
        if ((matchCTOrN !== null)) {
          var x$2 = matchCTOrN[1];
          return [$p_jl_StackTrace$__decodeClassName__T__T($thiz, $as_T(x$2)), "<init>"];
        } else {
          var matchM = PatM.exec(functionName);
          if ((matchM !== null)) {
            var x$3 = matchM[1];
            return [$p_jl_StackTrace$__decodeClassName__T__T($thiz, $as_T(x$3)), "<clinit>"];
          } else {
            return ["<jscode>", functionName];
          }
        }
      }
    }
    function $p_jl_StackTrace$__decodeClassName__T__T($thiz, encodedName) {
      var dict = $p_jl_StackTrace$__decompressedClasses__O($thiz);
      if ($uZ($m_jl_Utils$Cache$().jl_Utils$Cache$__f_safeHasOwnProperty.call(dict, encodedName))) {
        var dict$1 = $p_jl_StackTrace$__decompressedClasses__O($thiz);
        var base = $as_T(dict$1[encodedName]);
      } else {
        var base = $p_jl_StackTrace$__loop$1__I__T__T($thiz, 0, encodedName);
      }
      var this$3 = $n(base);
      var this$4 = $n($as_T(this$3.split("_").join(".")));
      return $as_T(this$4.split("\uff3f").join("_"));
    }
    function $p_jl_StackTrace$__decompressedClasses$lzycompute__O($thiz) {
      if (((((1 & $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24) === 0)) {
        var dict = ({});
        dict.O = "java_lang_Object";
        dict.T = "java_lang_String";
        var index = 0;
        while ((index <= 22)) {
          if ((index >= 2)) {
            var key = ("T" + index);
            var value = ("scala_Tuple" + index);
            dict[key] = value;
          }
          var key$1 = ("F" + index);
          var value$1 = ("scala_Function" + index);
          dict[key$1] = value$1;
          index = ((1 + index) | 0);
        }
        $thiz.jl_StackTrace$__f_decompressedClasses = dict;
        $thiz.jl_StackTrace$__f_bitmap$0 = (((1 | $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24);
      }
      return $thiz.jl_StackTrace$__f_decompressedClasses;
    }
    function $p_jl_StackTrace$__decompressedClasses__O($thiz) {
      return (((((1 & $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24) === 0) ? $p_jl_StackTrace$__decompressedClasses$lzycompute__O($thiz) : $thiz.jl_StackTrace$__f_decompressedClasses);
    }
    function $p_jl_StackTrace$__decompressedPrefixes$lzycompute__O($thiz) {
      if (((((2 & $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24) === 0)) {
        var dict = ({});
        dict.sjsr_ = "scala_scalajs_runtime_";
        dict.sjs_ = "scala_scalajs_";
        dict.sci_ = "scala_collection_immutable_";
        dict.scm_ = "scala_collection_mutable_";
        dict.scg_ = "scala_collection_generic_";
        dict.sc_ = "scala_collection_";
        dict.sr_ = "scala_runtime_";
        dict.s_ = "scala_";
        dict.jl_ = "java_lang_";
        dict.ju_ = "java_util_";
        $thiz.jl_StackTrace$__f_decompressedPrefixes = dict;
        $thiz.jl_StackTrace$__f_bitmap$0 = (((2 | $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24);
      }
      return $thiz.jl_StackTrace$__f_decompressedPrefixes;
    }
    function $p_jl_StackTrace$__decompressedPrefixes__O($thiz) {
      return (((((2 & $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24) === 0) ? $p_jl_StackTrace$__decompressedPrefixes$lzycompute__O($thiz) : $thiz.jl_StackTrace$__f_decompressedPrefixes);
    }
    function $p_jl_StackTrace$__compressedPrefixes$lzycompute__O($thiz) {
      if (((((4 & $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24) === 0)) {
        $thiz.jl_StackTrace$__f_compressedPrefixes = Object.keys($p_jl_StackTrace$__decompressedPrefixes__O($thiz));
        $thiz.jl_StackTrace$__f_bitmap$0 = (((4 | $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24);
      }
      return $thiz.jl_StackTrace$__f_compressedPrefixes;
    }
    function $p_jl_StackTrace$__compressedPrefixes__O($thiz) {
      return (((((4 & $thiz.jl_StackTrace$__f_bitmap$0) << 24) >> 24) === 0) ? $p_jl_StackTrace$__compressedPrefixes$lzycompute__O($thiz) : $thiz.jl_StackTrace$__f_compressedPrefixes);
    }
    function $p_jl_StackTrace$__decodeMethodName__T__T($thiz, encodedName) {
      var this$1 = $n(encodedName);
      if ($uZ(this$1.startsWith("init___"))) {
        return "<init>";
      } else {
        var this$2 = $n(encodedName);
        var methodNameLen = $uI(this$2.indexOf("__"));
        return ((methodNameLen < 0) ? encodedName : $as_T(encodedName.substring(0, methodNameLen)));
      }
    }
    function $p_jl_StackTrace$__normalizeStackTraceLines__O__O($thiz, e) {
      return ($uZ((!(!(!e)))) ? [] : ($uZ((!(!(e.arguments && e.stack)))) ? $p_jl_StackTrace$__extractChrome__O__O($thiz, e) : ($uZ((!(!(e.stack && e.sourceURL)))) ? $p_jl_StackTrace$__extractSafari__O__O($thiz, e) : ($uZ((!(!(e.stack && e.number)))) ? $p_jl_StackTrace$__extractIE__O__O($thiz, e) : ($uZ((!(!(e.stack && e.fileName)))) ? $p_jl_StackTrace$__extractFirefox__O__O($thiz, e) : ($uZ((!(!(e.message && e["opera#sourceloc"])))) ? ($uZ((!(!(!e.stacktrace)))) ? $p_jl_StackTrace$__extractOpera9__O__O($thiz, e) : ($uZ((!(!((e.message.indexOf("\n") > (-1)) && (e.message.split("\n").length > e.stacktrace.split("\n").length))))) ? $p_jl_StackTrace$__extractOpera9__O__O($thiz, e) : $p_jl_StackTrace$__extractOpera10a__O__O($thiz, e))) : ($uZ((!(!((e.message && e.stack) && e.stacktrace)))) ? ($uZ((!(!(e.stacktrace.indexOf("called from line") < 0.0)))) ? $p_jl_StackTrace$__extractOpera10b__O__O($thiz, e) : $p_jl_StackTrace$__extractOpera11__O__O($thiz, e)) : ($uZ((!(!(e.stack && (!e.fileName))))) ? $p_jl_StackTrace$__extractChrome__O__O($thiz, e) : $p_jl_StackTrace$__extractOther__O__O()))))))));
    }
    function $p_jl_StackTrace$__extractChrome__O__O($thiz, e) {
      return $as_T($as_T($as_T($as_T($as_T(($as_T(e.stack) + "\n").replace($m_jl_StackTrace$StringRE$().re$extension0__T__O("^[\\s\\S]+?\\s+at\\s+"), " at ")).replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("^\\s+(at eval )?at\\s+", "gm"), "")).replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("^([^\\(]+?)([\\n])", "gm"), "{anonymous}() ($1)$2")).replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("^Object.<anonymous>\\s*\\(([^\\)]+)\\)", "gm"), "{anonymous}() ($1)")).replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$", "gm"), "$1@$2")).split("\n").slice(0, (-1));
    }
    function $p_jl_StackTrace$__extractFirefox__O__O($thiz, e) {
      return $as_T($as_T($as_T(e.stack).replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("(?:\\n@:0)?\\s+$", "m"), "")).replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("^(?:\\((\\S*)\\))?@", "gm"), "{anonymous}($1)@")).split("\n");
    }
    function $p_jl_StackTrace$__extractIE__O__O($thiz, e) {
      var qual$1 = $as_T($as_T($as_T($as_T(e.stack).replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("^\\s*at\\s+(.*)$", "gm"), "$1")).replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("^Anonymous function\\s+", "gm"), "{anonymous}() ")).replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$", "gm"), "$1@$2")).split("\n");
      return qual$1.slice(1);
    }
    function $p_jl_StackTrace$__extractSafari__O__O($thiz, e) {
      return $as_T($as_T($as_T($as_T(e.stack).replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("\\[native code\\]\\n", "m"), "")).replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("^(?=\\w+Error\\:).*$\\n", "m"), "")).replace($m_jl_StackTrace$StringRE$().re$extension1__T__T__O("^@", "gm"), "{anonymous}()@")).split("\n");
    }
    function $p_jl_StackTrace$__extractOpera9__O__O($thiz, e) {
      var lineRE = $m_jl_StackTrace$StringRE$().re$extension1__T__T__O("Line (\\d+).*script (?:in )?(\\S+)", "i");
      var lines = $as_T(e.message).split("\n");
      var result = [];
      var i = 2;
      var len = $uI(lines.length);
      while ((i < len)) {
        var mtch = lineRE.exec($as_T(lines[i]));
        if ((mtch !== null)) {
          var x = mtch[2];
          var x$1 = mtch[1];
          var $x_1 = result.push(((("{anonymous}()@" + x) + ":") + x$1));
          $uI($x_1);
        }
        i = ((2 + i) | 0);
      }
      return result;
    }
    function $p_jl_StackTrace$__extractOpera10a__O__O($thiz, e) {
      var lineRE = $m_jl_StackTrace$StringRE$().re$extension1__T__T__O("Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$", "i");
      var lines = $as_T(e.stacktrace).split("\n");
      var result = [];
      var i = 0;
      var len = $uI(lines.length);
      while ((i < len)) {
        var mtch = lineRE.exec($as_T(lines[i]));
        if ((mtch !== null)) {
          var x = mtch[3];
          var fnName = $as_T(((x !== (void 0)) ? x : "{anonymous}"));
          var x$1 = mtch[2];
          var x$2 = mtch[1];
          var $x_1 = result.push(((((fnName + "()@") + x$1) + ":") + x$2));
          $uI($x_1);
        }
        i = ((2 + i) | 0);
      }
      return result;
    }
    function $p_jl_StackTrace$__extractOpera10b__O__O($thiz, e) {
      var lineRE = $m_jl_StackTrace$StringRE$().re$extension0__T__O("^(.*)@(.+):(\\d+)$");
      var lines = $as_T(e.stacktrace).split("\n");
      var result = [];
      var i = 0;
      var len = $uI(lines.length);
      while ((i < len)) {
        var mtch = lineRE.exec($as_T(lines[i]));
        if ((mtch !== null)) {
          var x = mtch[1];
          if ((x !== (void 0))) {
            var t = $as_T(x);
            var fnName = (t + "()");
          } else {
            var fnName = "global code";
          }
          var x$1 = mtch[2];
          var x$2 = mtch[3];
          var $x_1 = result.push(((((fnName + "@") + x$1) + ":") + x$2));
          $uI($x_1);
        }
        i = ((1 + i) | 0);
      }
      return result;
    }
    function $p_jl_StackTrace$__extractOpera11__O__O($thiz, e) {
      var lineRE = $m_jl_StackTrace$StringRE$().re$extension0__T__O("^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$");
      var lines = $as_T(e.stacktrace).split("\n");
      var result = [];
      var i = 0;
      var len = $uI(lines.length);
      while ((i < len)) {
        var mtch = lineRE.exec($as_T(lines[i]));
        if ((mtch !== null)) {
          var x = mtch[4];
          var $x_1 = $as_T(x);
          var x$1 = mtch[1];
          var x$2 = mtch[2];
          var location = (((($x_1 + ":") + x$1) + ":") + x$2);
          var x$3 = mtch[2];
          var fnName0 = $as_T(((x$3 !== (void 0)) ? x$3 : "global code"));
          var fnName = $as_T($as_T(fnName0.replace($m_jl_StackTrace$StringRE$().re$extension0__T__O("<anonymous function: (\\S+)>"), "$1")).replace($m_jl_StackTrace$StringRE$().re$extension0__T__O("<anonymous function>"), "{anonymous}"));
          $uI(result.push(((fnName + "@") + location)));
        }
        i = ((2 + i) | 0);
      }
      return result;
    }
    function $p_jl_StackTrace$__extractOther__O__O($thiz, e) {
      return [];
    }
    function $p_jl_StackTrace$__loop$1__I__T__T($thiz, i, encodedName$1) {
      while (true) {
        if ((i < $uI($p_jl_StackTrace$__compressedPrefixes__O($thiz).length))) {
          var prefix = $as_T($p_jl_StackTrace$__compressedPrefixes__O($thiz)[i]);
          var this$1 = $n(encodedName$1);
          $n(prefix);
          if ($uZ(this$1.startsWith(prefix))) {
            var dict = $p_jl_StackTrace$__decompressedPrefixes__O($thiz);
            var $x_2 = $as_T(dict[prefix]);
            var this$4 = $n(prefix);
            var $x_1 = encodedName$1.substring(this$4.length);
            return (("" + $x_2) + $as_T($x_1));
          } else {
            i = ((1 + i) | 0);
          }
        } else {
          var this$5 = $n(encodedName$1);
          if ($uZ(this$5.startsWith("L"))) {
            return $as_T(encodedName$1.substring(1));
          } else {
            return encodedName$1;
          }
        }
      }
    }
    /** @constructor */
    function $c_jl_StackTrace$() {
      this.jl_StackTrace$__f_decompressedClasses = null;
      this.jl_StackTrace$__f_decompressedPrefixes = null;
      this.jl_StackTrace$__f_compressedPrefixes = null;
      this.jl_StackTrace$__f_bitmap$0 = 0;
    }
    $c_jl_StackTrace$.prototype = new $h_O();
    $c_jl_StackTrace$.prototype.constructor = $c_jl_StackTrace$;
    $c_jl_StackTrace$.prototype;
    $c_jl_StackTrace$.prototype.extract__O__Ajl_StackTraceElement = (function(jsError) {
      var lines = $p_jl_StackTrace$__normalizeStackTraceLines__O__O(this, jsError);
      return $p_jl_StackTrace$__normalizedLinesToStackTrace__O__Ajl_StackTraceElement(this, lines);
    });
    new $TypeData().initClass($c_jl_StackTrace$, "java.lang.StackTrace$", ({
      jl_StackTrace$: 1
    }));
    var $n_jl_StackTrace$;
    function $m_jl_StackTrace$() {
      if ((!$n_jl_StackTrace$)) {
        $n_jl_StackTrace$ = new $c_jl_StackTrace$();
      }
      return $n_jl_StackTrace$;
    }
    /** @constructor */
    function $c_jl_StackTrace$StringRE$() {
    }
    $c_jl_StackTrace$StringRE$.prototype = new $h_O();
    $c_jl_StackTrace$StringRE$.prototype.constructor = $c_jl_StackTrace$StringRE$;
    $c_jl_StackTrace$StringRE$.prototype;
    $c_jl_StackTrace$StringRE$.prototype.re$extension0__T__O = (function(this$) {
      return new RegExp(this$);
    });
    $c_jl_StackTrace$StringRE$.prototype.re$extension1__T__T__O = (function(this$, mods) {
      return new RegExp(this$, mods);
    });
    new $TypeData().initClass($c_jl_StackTrace$StringRE$, "java.lang.StackTrace$StringRE$", ({
      jl_StackTrace$StringRE$: 1
    }));
    var $n_jl_StackTrace$StringRE$;
    function $m_jl_StackTrace$StringRE$() {
      if ((!$n_jl_StackTrace$StringRE$)) {
        $n_jl_StackTrace$StringRE$ = new $c_jl_StackTrace$StringRE$();
      }
      return $n_jl_StackTrace$StringRE$;
    }
    /** @constructor */
    function $c_jl_System$Streams$() {
      this.jl_System$Streams$__f_out = null;
      this.jl_System$Streams$__f_err = null;
      $n_jl_System$Streams$ = this;
      this.jl_System$Streams$__f_out = new $c_jl_JSConsoleBasedPrintStream(false);
      this.jl_System$Streams$__f_err = new $c_jl_JSConsoleBasedPrintStream(true);
    }
    $c_jl_System$Streams$.prototype = new $h_O();
    $c_jl_System$Streams$.prototype.constructor = $c_jl_System$Streams$;
    $c_jl_System$Streams$.prototype;
    new $TypeData().initClass($c_jl_System$Streams$, "java.lang.System$Streams$", ({
      jl_System$Streams$: 1
    }));
    var $n_jl_System$Streams$;
    function $m_jl_System$Streams$() {
      if ((!$n_jl_System$Streams$)) {
        $n_jl_System$Streams$ = new $c_jl_System$Streams$();
      }
      return $n_jl_System$Streams$;
    }
    function $p_jl_System$SystemProperties$__loadSystemProperties__O($thiz) {
      var result = ({});
      result["java.version"] = "1.8";
      result["java.vm.specification.version"] = "1.8";
      result["java.vm.specification.vendor"] = "Oracle Corporation";
      result["java.vm.specification.name"] = "Java Virtual Machine Specification";
      result["java.vm.name"] = "Scala.js";
      result["java.vm.version"] = "1.18.2";
      result["java.specification.version"] = "1.8";
      result["java.specification.vendor"] = "Oracle Corporation";
      result["java.specification.name"] = "Java Platform API Specification";
      result["file.separator"] = "/";
      result["path.separator"] = ":";
      result["line.separator"] = "\n";
      return result;
    }
    /** @constructor */
    function $c_jl_System$SystemProperties$() {
      this.jl_System$SystemProperties$__f_dict = null;
      this.jl_System$SystemProperties$__f_properties = null;
      $n_jl_System$SystemProperties$ = this;
      this.jl_System$SystemProperties$__f_dict = $p_jl_System$SystemProperties$__loadSystemProperties__O();
      this.jl_System$SystemProperties$__f_properties = null;
    }
    $c_jl_System$SystemProperties$.prototype = new $h_O();
    $c_jl_System$SystemProperties$.prototype.constructor = $c_jl_System$SystemProperties$;
    $c_jl_System$SystemProperties$.prototype;
    $c_jl_System$SystemProperties$.prototype.getProperty__T__T__T = (function(key, default$1) {
      if ((this.jl_System$SystemProperties$__f_dict !== null)) {
        var dict = this.jl_System$SystemProperties$__f_dict;
        return $as_T(($uZ($m_jl_Utils$Cache$().jl_Utils$Cache$__f_safeHasOwnProperty.call(dict, key)) ? dict[key] : default$1));
      } else {
        return $n(this.jl_System$SystemProperties$__f_properties).getProperty__T__T__T(key, default$1);
      }
    });
    new $TypeData().initClass($c_jl_System$SystemProperties$, "java.lang.System$SystemProperties$", ({
      jl_System$SystemProperties$: 1
    }));
    var $n_jl_System$SystemProperties$;
    function $m_jl_System$SystemProperties$() {
      if ((!$n_jl_System$SystemProperties$)) {
        $n_jl_System$SystemProperties$ = new $c_jl_System$SystemProperties$();
      }
      return $n_jl_System$SystemProperties$;
    }
    /** @constructor */
    function $c_jl_Thread$() {
      this.jl_Thread$__f_SingleThread = null;
      this.jl_Thread$__f_SingleThread = new $c_jl_Thread();
    }
    $c_jl_Thread$.prototype = new $h_O();
    $c_jl_Thread$.prototype.constructor = $c_jl_Thread$;
    $c_jl_Thread$.prototype;
    new $TypeData().initClass($c_jl_Thread$, "java.lang.Thread$", ({
      jl_Thread$: 1
    }));
    /** @constructor */
    function $c_jl_ThreadLocal() {
      this.jl_ThreadLocal__f_hasValue = false;
      this.jl_ThreadLocal__f_v = null;
      this.jl_ThreadLocal__f_hasValue = false;
    }
    $c_jl_ThreadLocal.prototype = new $h_O();
    $c_jl_ThreadLocal.prototype.constructor = $c_jl_ThreadLocal;
    $c_jl_ThreadLocal.prototype;
    $c_jl_ThreadLocal.prototype.get__O = (function() {
      if ((!this.jl_ThreadLocal__f_hasValue)) {
        this.set__O__V(null);
      }
      return this.jl_ThreadLocal__f_v;
    });
    $c_jl_ThreadLocal.prototype.set__O__V = (function(o) {
      this.jl_ThreadLocal__f_v = o;
      this.jl_ThreadLocal__f_hasValue = true;
    });
    new $TypeData().initClass($c_jl_ThreadLocal, "java.lang.ThreadLocal", ({
      jl_ThreadLocal: 1
    }));
    /** @constructor */
    function $c_jl_Utils$Cache$() {
      this.jl_Utils$Cache$__f_safeHasOwnProperty = null;
      $n_jl_Utils$Cache$ = this;
      this.jl_Utils$Cache$__f_safeHasOwnProperty = Object.prototype.hasOwnProperty;
    }
    $c_jl_Utils$Cache$.prototype = new $h_O();
    $c_jl_Utils$Cache$.prototype.constructor = $c_jl_Utils$Cache$;
    $c_jl_Utils$Cache$.prototype;
    new $TypeData().initClass($c_jl_Utils$Cache$, "java.lang.Utils$Cache$", ({
      jl_Utils$Cache$: 1
    }));
    var $n_jl_Utils$Cache$;
    function $m_jl_Utils$Cache$() {
      if ((!$n_jl_Utils$Cache$)) {
        $n_jl_Utils$Cache$ = new $c_jl_Utils$Cache$();
      }
      return $n_jl_Utils$Cache$;
    }
    function $f_jl_Void__equals__O__Z($thiz, that) {
      return ($thiz === that);
    }
    function $f_jl_Void__hashCode__I($thiz) {
      return 0;
    }
    function $as_jl_Void(obj) {
      return (((obj === (void 0)) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Void"));
    }
    function $isArrayOf_jl_Void(obj, depth) {
      return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Void)));
    }
    function $asArrayOf_jl_Void(obj, depth) {
      return (($isArrayOf_jl_Void(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Void;", depth));
    }
    var $d_jl_Void = new $TypeData().initClass(0, "java.lang.Void", ({
      jl_Void: 1
    }), ((x) => (x === (void 0))));
    function $p_jl_reflect_Array$__mismatch__O__E($thiz, array) {
      $n(array);
      throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "argument type mismatch");
    }
    function $p_jl_reflect_Array$__rec$1__jl_Class__I__AI__O($thiz, componentType, offset, dimensions$1) {
      var length = $n(dimensions$1).get(offset);
      var result = $n(componentType).data.newArray(length);
      var innerOffset = ((1 + offset) | 0);
      if ((innerOffset < $n(dimensions$1).u.length)) {
        var result2 = $asArrayOf_O(result, 1);
        var this$1 = $n(componentType);
        var innerComponentType = this$1.data.getComponentType();
        var i = 0;
        while ((i !== length)) {
          $n(result2).set(i, $p_jl_reflect_Array$__rec$1__jl_Class__I__AI__O($thiz, innerComponentType, innerOffset, dimensions$1));
          i = ((1 + i) | 0);
        }
      }
      return result;
    }
    /** @constructor */
    function $c_jl_reflect_Array$() {
    }
    $c_jl_reflect_Array$.prototype = new $h_O();
    $c_jl_reflect_Array$.prototype.constructor = $c_jl_reflect_Array$;
    $c_jl_reflect_Array$.prototype;
    $c_jl_reflect_Array$.prototype.newInstance__jl_Class__AI__O = (function(componentType, dimensions) {
      var len = $n(dimensions).u.length;
      if ((len === 0)) {
        throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
      }
      var outermostComponentType = componentType;
      var i = 1;
      while ((i !== len)) {
        var componentType$1 = outermostComponentType;
        var this$1$1 = $n(componentType$1).data.newArray(0);
        outermostComponentType = $objectGetClass(this$1$1);
        i = ((1 + i) | 0);
      }
      return $p_jl_reflect_Array$__rec$1__jl_Class__I__AI__O(this, outermostComponentType, 0, dimensions);
    });
    $c_jl_reflect_Array$.prototype.getLength__O__I = (function(array) {
      if ((array instanceof $ac_O)) {
        var x2 = $asArrayOf_O(array, 1);
        return $n(x2).u.length;
      } else if ((array instanceof $ac_Z)) {
        var x3 = $asArrayOf_Z(array, 1);
        return $n(x3).u.length;
      } else if ((array instanceof $ac_C)) {
        var x4 = $asArrayOf_C(array, 1);
        return $n(x4).u.length;
      } else if ((array instanceof $ac_B)) {
        var x5 = $asArrayOf_B(array, 1);
        return $n(x5).u.length;
      } else if ((array instanceof $ac_S)) {
        var x6 = $asArrayOf_S(array, 1);
        return $n(x6).u.length;
      } else if ((array instanceof $ac_I)) {
        var x7 = $asArrayOf_I(array, 1);
        return $n(x7).u.length;
      } else if ((array instanceof $ac_J)) {
        var x8 = $asArrayOf_J(array, 1);
        return $n(x8).u.length;
      } else if ((array instanceof $ac_F)) {
        var x9 = $asArrayOf_F(array, 1);
        return $n(x9).u.length;
      } else if ((array instanceof $ac_D)) {
        var x10 = $asArrayOf_D(array, 1);
        return $n(x10).u.length;
      } else {
        $p_jl_reflect_Array$__mismatch__O__E(this, array);
      }
    });
    new $TypeData().initClass($c_jl_reflect_Array$, "java.lang.reflect.Array$", ({
      jl_reflect_Array$: 1
    }));
    var $n_jl_reflect_Array$;
    function $m_jl_reflect_Array$() {
      if ((!$n_jl_reflect_Array$)) {
        $n_jl_reflect_Array$ = new $c_jl_reflect_Array$();
      }
      return $n_jl_reflect_Array$;
    }
    /** @constructor */
    function $c_ju_Arrays$() {
    }
    $c_ju_Arrays$.prototype = new $h_O();
    $c_ju_Arrays$.prototype.constructor = $c_ju_Arrays$;
    $c_ju_Arrays$.prototype;
    $c_ju_Arrays$.prototype.binarySearch__AI__I__I = (function(a, key) {
      var startIndex = 0;
      var endIndex = $n(a).u.length;
      while (true) {
        if ((startIndex === endIndex)) {
          return (((-1) - startIndex) | 0);
        } else {
          var mid = ((((startIndex + endIndex) | 0) >>> 1) | 0);
          var elem = $n(a).get(mid);
          var cmp = ((key === elem) ? 0 : ((key < elem) ? (-1) : 1));
          if ((cmp < 0)) {
            endIndex = mid;
          } else if ((cmp === 0)) {
            return mid;
          } else {
            startIndex = ((1 + mid) | 0);
          }
        }
      }
    });
    $c_ju_Arrays$.prototype.equals__AJ__AJ__Z = (function(a, b) {
      if ((a === b)) {
        return true;
      }
      if (((a === null) || (b === null))) {
        return false;
      }
      var len = $n(a).u.length;
      if (($n(b).u.length !== len)) {
        return false;
      }
      var i = 0;
      while ((i !== len)) {
        var i$1 = i;
        var t = $n(a).get(i$1);
        var lo = t.RTLong__f_lo;
        var hi = t.RTLong__f_hi;
        var i$2 = i;
        var t$1 = $n(b).get(i$2);
        var lo$1 = t$1.RTLong__f_lo;
        var hi$1 = t$1.RTLong__f_hi;
        if ((!((lo === lo$1) && (hi === hi$1)))) {
          return false;
        }
        i = ((1 + i) | 0);
      }
      return true;
    });
    $c_ju_Arrays$.prototype.equals__AI__AI__Z = (function(a, b) {
      if ((a === b)) {
        return true;
      }
      if (((a === null) || (b === null))) {
        return false;
      }
      var len = $n(a).u.length;
      if (($n(b).u.length !== len)) {
        return false;
      }
      var i = 0;
      while ((i !== len)) {
        var i$1 = i;
        var a$1 = $n(a).get(i$1);
        var i$2 = i;
        var b$1 = $n(b).get(i$2);
        if ((!(a$1 === b$1))) {
          return false;
        }
        i = ((1 + i) | 0);
      }
      return true;
    });
    $c_ju_Arrays$.prototype.equals__AS__AS__Z = (function(a, b) {
      if ((a === b)) {
        return true;
      }
      if (((a === null) || (b === null))) {
        return false;
      }
      var len = $n(a).u.length;
      if (($n(b).u.length !== len)) {
        return false;
      }
      var i = 0;
      while ((i !== len)) {
        var i$1 = i;
        var a$1 = $n(a).get(i$1);
        var i$2 = i;
        var b$1 = $n(b).get(i$2);
        if ((!(a$1 === b$1))) {
          return false;
        }
        i = ((1 + i) | 0);
      }
      return true;
    });
    $c_ju_Arrays$.prototype.equals__AC__AC__Z = (function(a, b) {
      if ((a === b)) {
        return true;
      }
      if (((a === null) || (b === null))) {
        return false;
      }
      var len = $n(a).u.length;
      if (($n(b).u.length !== len)) {
        return false;
      }
      var i = 0;
      while ((i !== len)) {
        var i$1 = i;
        var a$1 = $n(a).get(i$1);
        var i$2 = i;
        var b$1 = $n(b).get(i$2);
        if ((!(a$1 === b$1))) {
          return false;
        }
        i = ((1 + i) | 0);
      }
      return true;
    });
    $c_ju_Arrays$.prototype.equals__AB__AB__Z = (function(a, b) {
      if ((a === b)) {
        return true;
      }
      if (((a === null) || (b === null))) {
        return false;
      }
      var len = $n(a).u.length;
      if (($n(b).u.length !== len)) {
        return false;
      }
      var i = 0;
      while ((i !== len)) {
        var i$1 = i;
        var a$1 = $n(a).get(i$1);
        var i$2 = i;
        var b$1 = $n(b).get(i$2);
        if ((!(a$1 === b$1))) {
          return false;
        }
        i = ((1 + i) | 0);
      }
      return true;
    });
    $c_ju_Arrays$.prototype.equals__AZ__AZ__Z = (function(a, b) {
      if ((a === b)) {
        return true;
      }
      if (((a === null) || (b === null))) {
        return false;
      }
      var len = $n(a).u.length;
      if (($n(b).u.length !== len)) {
        return false;
      }
      var i = 0;
      while ((i !== len)) {
        var i$1 = i;
        var a$1 = $n(a).get(i$1);
        var i$2 = i;
        var b$1 = $n(b).get(i$2);
        if ((!(a$1 === b$1))) {
          return false;
        }
        i = ((1 + i) | 0);
      }
      return true;
    });
    $c_ju_Arrays$.prototype.equals__AD__AD__Z = (function(a, b) {
      if ((a === b)) {
        return true;
      }
      if (((a === null) || (b === null))) {
        return false;
      }
      var len = $n(a).u.length;
      if (($n(b).u.length !== len)) {
        return false;
      }
      var i = 0;
      while ((i !== len)) {
        var i$1 = i;
        var a$1 = $n(a).get(i$1);
        var i$2 = i;
        var b$1 = $n(b).get(i$2);
        if ((!Object.is(a$1, b$1))) {
          return false;
        }
        i = ((1 + i) | 0);
      }
      return true;
    });
    $c_ju_Arrays$.prototype.equals__AF__AF__Z = (function(a, b) {
      if ((a === b)) {
        return true;
      }
      if (((a === null) || (b === null))) {
        return false;
      }
      var len = $n(a).u.length;
      if (($n(b).u.length !== len)) {
        return false;
      }
      var i = 0;
      while ((i !== len)) {
        var i$1 = i;
        var a$1 = $n(a).get(i$1);
        var i$2 = i;
        var b$1 = $n(b).get(i$2);
        if ((!Object.is(a$1, b$1))) {
          return false;
        }
        i = ((1 + i) | 0);
      }
      return true;
    });
    $c_ju_Arrays$.prototype.copyOf__AO__I__AO = (function(original, newLength) {
      if ((newLength < 0)) {
        throw new $c_jl_NegativeArraySizeException();
      }
      var b = $n(original).u.length;
      var copyLength = ((newLength < b) ? newLength : b);
      var this$3 = $n(original);
      var clazz = $objectGetClass(this$3);
      var componentType = clazz.data.getComponentType();
      var ret = $asArrayOf_O($n(componentType).data.newArray(newLength), 1);
      $systemArraycopyRefs($n(original), 0, $n(ret), 0, copyLength);
      return ret;
    });
    $c_ju_Arrays$.prototype.copyOfRange__AO__I__I__AO = (function(original, from, to) {
      if ((from > to)) {
        throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((from + " > ") + to));
      }
      var len = $n(original).u.length;
      var retLength = ((to - from) | 0);
      var b = ((len - from) | 0);
      var copyLength = ((retLength < b) ? retLength : b);
      var this$3 = $n(original);
      var clazz = $objectGetClass(this$3);
      var componentType = clazz.data.getComponentType();
      var ret = $asArrayOf_O($n(componentType).data.newArray(retLength), 1);
      $systemArraycopyRefs($n(original), from, $n(ret), 0, copyLength);
      return ret;
    });
    new $TypeData().initClass($c_ju_Arrays$, "java.util.Arrays$", ({
      ju_Arrays$: 1
    }));
    var $n_ju_Arrays$;
    function $m_ju_Arrays$() {
      if ((!$n_ju_Arrays$)) {
        $n_ju_Arrays$ = new $c_ju_Arrays$();
      }
      return $n_ju_Arrays$;
    }
    function $p_ju_regex_PatternCompiler__parseError__T__E($thiz, desc) {
      throw new $c_ju_regex_PatternSyntaxException(desc, $thiz.ju_regex_PatternCompiler__f_pattern, $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex);
    }
    function $p_ju_regex_PatternCompiler__processLeadingEmbeddedFlags__V($thiz) {
      var m = $m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$leadingEmbeddedFlagSpecifierRegExp.exec($thiz.ju_regex_PatternCompiler__f_pattern);
      if ((m !== null)) {
        var x = m[1];
        if ((x !== (void 0))) {
          var t = $as_T(x);
          var this$3 = $n(t);
          var end = this$3.length;
          var i = 0;
          while ((i < end)) {
            var value = i;
            var $x_2 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags;
            var $x_1 = $m_ju_regex_PatternCompiler$();
            var this$5 = $n(t);
            $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags = ($x_2 | $x_1.java$util$regex$PatternCompiler$$charToFlag__C__I($charAt(this$5, value)));
            i = ((1 + i) | 0);
          }
        }
        if (((256 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags = (64 | $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags);
        }
        var x$1 = m[2];
        if ((x$1 !== (void 0))) {
          var t$1 = $as_T(x$1);
          var this$8 = $n(t$1);
          var end$1 = this$8.length;
          var i$1 = 0;
          while ((i$1 < end$1)) {
            var value$1 = i$1;
            var $x_4 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags;
            var $x_3 = $m_ju_regex_PatternCompiler$();
            var this$10 = $n(t$1);
            $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags = ($x_4 & (~$x_3.java$util$regex$PatternCompiler$$charToFlag__C__I($charAt(this$10, value$1))));
            i$1 = ((1 + i$1) | 0);
          }
        }
        var $x_5 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
        var x$2 = m[0];
        var this$12 = $n($as_T(x$2));
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = (($x_5 + this$12.length) | 0);
      }
    }
    function $p_ju_regex_PatternCompiler__literal__T__T($thiz, s) {
      var result = "";
      var this$1 = $n(s);
      var len = this$1.length;
      var i = 0;
      while ((i !== len)) {
        var cp = $f_T__codePointAt__I__I($n(s), i);
        result = (("" + result) + $p_ju_regex_PatternCompiler__literal__I__T($thiz, cp));
        i = ((i + ((cp >= 65536) ? 2 : 1)) | 0);
      }
      return result;
    }
    function $p_ju_regex_PatternCompiler__literal__I__T($thiz, cp) {
      var s = $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointToString__I__T(cp);
      if ((cp < 128)) {
        switch (cp) {
          case 94:
          case 36:
          case 92:
          case 46:
          case 42:
          case 43:
          case 63:
          case 40:
          case 41:
          case 91:
          case 93:
          case 123:
          case 125:
          case 124: {
            return ("\\" + s);
          }
          default: {
            return (((66 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 2) ? s : (((cp >= 65) && (cp <= 90)) ? ((("[" + s) + $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointToString__I__T(((32 + cp) | 0))) + "]") : (((cp >= 97) && (cp <= 122)) ? ((("[" + $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointToString__I__T((((-32) + cp) | 0))) + s) + "]") : s)));
          }
        }
      } else {
        return ((((-1024) & cp) === 56320) ? (("(?:" + s) + ")") : s);
      }
    }
    function $p_ju_regex_PatternCompiler__skipComments__V($thiz) {
      var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
      var this$1 = $n(pattern);
      var len = this$1.length;
      while (true) {
        if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
          var this$2 = $n(pattern);
          var index = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
          var x1 = $charAt(this$2, index);
          switch (x1) {
            case 32:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13: {
              $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
              continue;
            }
            case 35: {
              $thiz.java$util$regex$PatternCompiler$$skipSharpComment__V();
              continue;
            }
          }
        }
        break;
      }
    }
    function $p_ju_regex_PatternCompiler__compileRepeater__I__T__T($thiz, compiledGroupCountBeforeThisToken, compiledToken) {
      var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
      var this$1 = $n(pattern);
      var len = this$1.length;
      var startOfRepeater = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
      if ((startOfRepeater === len)) {
        var repeaterDispatchChar = 46;
      } else {
        var this$2 = $n(pattern);
        var repeaterDispatchChar = $charAt(this$2, startOfRepeater);
      }
      if (((((repeaterDispatchChar === 63) || (repeaterDispatchChar === 42)) || (repeaterDispatchChar === 43)) || (repeaterDispatchChar === 123))) {
        var this$3 = $n(compiledToken);
        var x1 = $charAt(this$3, 0);
        switch (x1) {
          case 94:
          case 36: {
            var isTokenAnAssertion = true;
            break;
          }
          case 40: {
            var this$4 = $n(compiledToken);
            if (($charAt(this$4, 1) === 63)) {
              var this$5 = $n(compiledToken);
              var isTokenAnAssertion = ($charAt(this$5, 2) !== 58);
            } else {
              var isTokenAnAssertion = false;
            }
            break;
          }
          case 92: {
            var this$6 = $n(compiledToken);
            var c = $charAt(this$6, 1);
            var isTokenAnAssertion = ((c === 98) || (c === 66));
            break;
          }
          default: {
            var isTokenAnAssertion = false;
          }
        }
        var wrappedToken = (isTokenAnAssertion ? (("(?:" + compiledToken) + ")") : compiledToken);
        var baseRepeater = $p_ju_regex_PatternCompiler__parseBaseRepeater__C__T($thiz, repeaterDispatchChar);
        if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
          var this$7 = $n(pattern);
          var index = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
          var x1$2 = $charAt(this$7, index);
          switch (x1$2) {
            case 43: {
              $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
              return $p_ju_regex_PatternCompiler__buildPossessiveQuantifier__I__T__T__T($thiz, compiledGroupCountBeforeThisToken, wrappedToken, baseRepeater);
            }
            case 63: {
              $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
              return ((("" + wrappedToken) + baseRepeater) + "?");
            }
            default: {
              return (("" + wrappedToken) + baseRepeater);
            }
          }
        } else {
          return (("" + wrappedToken) + baseRepeater);
        }
      } else {
        return compiledToken;
      }
    }
    function $p_ju_regex_PatternCompiler__parseBaseRepeater__C__T($thiz, repeaterDispatchChar) {
      var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
      var startOfRepeater = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      if ((repeaterDispatchChar === 123)) {
        var this$1 = $n(pattern);
        var len = this$1.length;
        if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex === len)) {
          var $x_1 = true;
        } else {
          var this$2 = $n(pattern);
          var index = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
          var c = $charAt(this$2, index);
          var $x_1 = (!((c >= 48) && (c <= 57)));
        }
        if ($x_1) {
          $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal repetition");
        }
        while (true) {
          if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
            var this$4 = $n(pattern);
            var index$1 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
            var c$1 = $charAt(this$4, index$1);
            var $x_2 = ((c$1 >= 48) && (c$1 <= 57));
          } else {
            var $x_2 = false;
          }
          if ($x_2) {
            $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          } else {
            break;
          }
        }
        if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex === len)) {
          $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal repetition");
        }
        var this$6 = $n(pattern);
        var index$2 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
        if (($charAt(this$6, index$2) === 44)) {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          while (true) {
            if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
              var this$7 = $n(pattern);
              var index$3 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
              var c$2 = $charAt(this$7, index$3);
              var $x_3 = ((c$2 >= 48) && (c$2 <= 57));
            } else {
              var $x_3 = false;
            }
            if ($x_3) {
              $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
            } else {
              break;
            }
          }
        }
        if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex === len)) {
          var $x_4 = true;
        } else {
          var this$9 = $n(pattern);
          var index$4 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
          var $x_4 = ($charAt(this$9, index$4) !== 125);
        }
        if ($x_4) {
          $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal repetition");
        }
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      }
      return $as_T(pattern.substring(startOfRepeater, $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex));
    }
    function $p_ju_regex_PatternCompiler__buildPossessiveQuantifier__I__T__T__T($thiz, compiledGroupCountBeforeThisToken, compiledToken, baseRepeater) {
      var end = $uI($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap.length);
      var i = 0;
      while ((i < end)) {
        var value = i;
        var mapped = $uI($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap[value]);
        if ((mapped > compiledGroupCountBeforeThisToken)) {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap[value] = ((1 + mapped) | 0);
        }
        i = ((1 + i) | 0);
      }
      var amendedToken = $as_T(compiledToken.replace($m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$renumberingRegExp, ((arg1$2, arg2$2, arg3$2) => {
        var arg1 = $as_T(arg1$2);
        var arg2 = $as_T(arg2$2);
        var arg3 = $as_T(arg3$2);
        var this$3 = $n(arg2);
        if ((((this$3.length % 2) | 0) === 0)) {
          return arg1;
        } else {
          var groupNumber = $uI(parseInt(arg3, 10));
          return ((groupNumber > compiledGroupCountBeforeThisToken) ? (("" + arg2) + ((1 + groupNumber) | 0)) : arg1);
        }
      })));
      $thiz.ju_regex_PatternCompiler__f_compiledGroupCount = ((1 + $thiz.ju_regex_PatternCompiler__f_compiledGroupCount) | 0);
      var myGroupNumber = ((1 + compiledGroupCountBeforeThisToken) | 0);
      return ((((("(?:(?=(" + amendedToken) + baseRepeater) + "))\\") + myGroupNumber) + ")");
    }
    function $p_ju_regex_PatternCompiler__compileEscape__T($thiz) {
      var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
      var this$1 = $n(pattern);
      var len = this$1.length;
      if ((((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0) === len)) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\ at end of pattern");
      }
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      var this$2 = $n(pattern);
      var index = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
      var dispatchChar = $charAt(this$2, index);
      switch (dispatchChar) {
        case 100:
        case 68:
        case 104:
        case 72:
        case 115:
        case 83:
        case 118:
        case 86:
        case 119:
        case 87:
        case 112:
        case 80: {
          var cls = $p_ju_regex_PatternCompiler__parsePredefinedCharacterClass__C__ju_regex_PatternCompiler$CompiledCharClass($thiz, dispatchChar);
          var x1$2 = $n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_kind;
          switch (x1$2) {
            case 0: {
              return (("\\p{" + $n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_data) + "}");
            }
            case 1: {
              return (("\\P{" + $n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_data) + "}");
            }
            case 2: {
              return (("[" + $n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_data) + "]");
            }
            case 3: {
              return $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointNotAmong__T__T($n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_data);
            }
            default: {
              throw new $c_jl_AssertionError(x1$2);
            }
          }
        }
        case 98: {
          if (($as_T(pattern.substring($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex, ((4 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0))) === "b{g}")) {
            $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\b{g} is not supported");
          } else if (((320 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
            $thiz.java$util$regex$PatternCompiler$$parseErrorRequireESVersion__T__T__E("\\b with UNICODE_CASE", "2018");
          } else {
            $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
            return "\\b";
          }
          break;
        }
        case 66: {
          if (((320 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
            $thiz.java$util$regex$PatternCompiler$$parseErrorRequireESVersion__T__T__E("\\B with UNICODE_CASE", "2018");
          } else {
            $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
            return "\\B";
          }
          break;
        }
        case 65: {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          return "^";
        }
        case 71: {
          $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\G in the middle of a pattern is not supported");
          break;
        }
        case 90: {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          var lineTerminator = (((1 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0) ? "\n" : "(?:\r\n?|[\n\u0085\u2028\u2029])");
          return (("(?=" + lineTerminator) + "?$)");
        }
        case 122: {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          return "$";
        }
        case 82: {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          return "(?:\r\n|[\n-\r\u0085\u2028\u2029])";
        }
        case 88: {
          $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\X is not supported");
          break;
        }
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57: {
          var start = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
          var end = ((1 + start) | 0);
          while (true) {
            if ((end !== len)) {
              var this$7 = $n(pattern);
              var index$1 = end;
              var c = $charAt(this$7, index$1);
              var $x_2 = ((c >= 48) && (c <= 57));
            } else {
              var $x_2 = false;
            }
            if ($x_2) {
              var s = $as_T(pattern.substring(start, ((1 + end) | 0)));
              var $x_1 = ($uI(parseInt(s, 10)) <= (((-1) + $uI($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap.length)) | 0));
            } else {
              var $x_1 = false;
            }
            if ($x_1) {
              end = ((1 + end) | 0);
            } else {
              break;
            }
          }
          var groupString = $as_T(pattern.substring(start, end));
          var groupNumber = $uI(parseInt(groupString, 10));
          if ((groupNumber > (((-1) + $uI($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap.length)) | 0))) {
            $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("numbered capturing group <" + groupNumber) + "> does not exist"));
          }
          var compiledGroupNumber = $uI($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap[groupNumber]);
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = end;
          return (("(?:\\" + compiledGroupNumber) + ")");
        }
        case 107: {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex === len)) {
            var $x_3 = true;
          } else {
            var this$11 = $n(pattern);
            var index$2 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
            var $x_3 = ($charAt(this$11, index$2) !== 60);
          }
          if ($x_3) {
            $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\k is not followed by '<' for named capturing group");
          }
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          var groupName = $p_ju_regex_PatternCompiler__parseGroupName__T($thiz);
          var dict = $thiz.ju_regex_PatternCompiler__f_namedGroups;
          if ((!$uZ($m_jl_Utils$Cache$().jl_Utils$Cache$__f_safeHasOwnProperty.call(dict, groupName)))) {
            $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("named capturing group <" + groupName) + "> does not exit"));
          }
          var groupNumber$2 = $uI(dict[groupName]);
          var compiledGroupNumber$2 = $uI($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap[groupNumber$2]);
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          return (("(?:\\" + compiledGroupNumber$2) + ")");
        }
        case 81: {
          var start$2 = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          var this$13 = $n(pattern);
          var end$2 = $uI(this$13.indexOf("\\E", start$2));
          if ((end$2 < 0)) {
            var this$14 = $n(pattern);
            $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = this$14.length;
            return $p_ju_regex_PatternCompiler__literal__T__T($thiz, $as_T(pattern.substring(start$2)));
          } else {
            $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((2 + end$2) | 0);
            return $p_ju_regex_PatternCompiler__literal__T__T($thiz, $as_T(pattern.substring(start$2, end$2)));
          }
        }
        default: {
          return $p_ju_regex_PatternCompiler__literal__I__T($thiz, $p_ju_regex_PatternCompiler__parseSingleCodePointEscape__I($thiz));
        }
      }
    }
    function $p_ju_regex_PatternCompiler__parseSingleCodePointEscape__I($thiz) {
      var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
      var x1 = $f_T__codePointAt__I__I($n(pattern), $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex);
      switch (x1) {
        case 48: {
          return $p_ju_regex_PatternCompiler__parseOctalEscape__I($thiz);
        }
        case 120: {
          return $p_ju_regex_PatternCompiler__parseHexEscape__I($thiz);
        }
        case 117: {
          return $p_ju_regex_PatternCompiler__parseUnicodeHexEscape__I($thiz);
        }
        case 78: {
          $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "\\N is not supported");
          break;
        }
        case 97: {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          return 7;
        }
        case 116: {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          return 9;
        }
        case 110: {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          return 10;
        }
        case 102: {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          return 12;
        }
        case 114: {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          return 13;
        }
        case 101: {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          return 27;
        }
        case 99: {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          var $x_1 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
          var this$1 = $n(pattern);
          if (($x_1 === this$1.length)) {
            $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal control escape sequence");
          }
          var cp = $f_T__codePointAt__I__I($n(pattern), $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex);
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex + ((cp >= 65536) ? 2 : 1)) | 0);
          return (64 ^ cp);
        }
        default: {
          if ((((x1 >= 65) && (x1 <= 90)) || ((x1 >= 97) && (x1 <= 122)))) {
            $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal/unsupported escape sequence");
          }
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex + ((x1 >= 65536) ? 2 : 1)) | 0);
          return x1;
        }
      }
    }
    function $p_ju_regex_PatternCompiler__parseOctalEscape__I($thiz) {
      var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
      var this$1 = $n(pattern);
      var len = this$1.length;
      var start = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
      if ((((1 + start) | 0) < len)) {
        var this$2 = $n(pattern);
        var index = ((1 + start) | 0);
        var d1 = (((-48) + $charAt(this$2, index)) | 0);
      } else {
        var d1 = (-1);
      }
      if (((d1 < 0) || (d1 > 7))) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal octal escape sequence");
      }
      if ((((2 + start) | 0) < len)) {
        var this$3 = $n(pattern);
        var index$1 = ((2 + start) | 0);
        var d2 = (((-48) + $charAt(this$3, index$1)) | 0);
      } else {
        var d2 = (-1);
      }
      if (((d2 < 0) || (d2 > 7))) {
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((2 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
        return d1;
      } else if ((d1 > 3)) {
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((3 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
        return (((d1 << 3) + d2) | 0);
      } else {
        if ((((3 + start) | 0) < len)) {
          var this$4 = $n(pattern);
          var index$2 = ((3 + start) | 0);
          var d3 = (((-48) + $charAt(this$4, index$2)) | 0);
        } else {
          var d3 = (-1);
        }
        if (((d3 < 0) || (d3 > 7))) {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((3 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          return (((d1 << 3) + d2) | 0);
        } else {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((4 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
          return (((((d1 << 6) + (d2 << 3)) | 0) + d3) | 0);
        }
      }
    }
    function $p_ju_regex_PatternCompiler__parseHexEscape__I($thiz) {
      var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
      var this$1 = $n(pattern);
      var len = this$1.length;
      var start = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      if ((start !== len)) {
        var this$2 = $n(pattern);
        var $x_1 = ($charAt(this$2, start) === 123);
      } else {
        var $x_1 = false;
      }
      if ($x_1) {
        var innerStart = ((1 + start) | 0);
        var this$3 = $n(pattern);
        var innerEnd = $uI(this$3.indexOf("}", innerStart));
        if ((innerEnd < 0)) {
          $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed hexadecimal escape sequence");
        }
        var cp = $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, innerStart, innerEnd, "hexadecimal");
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + innerEnd) | 0);
        return cp;
      } else {
        var cp$2 = $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, start, ((2 + start) | 0), "hexadecimal");
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((2 + start) | 0);
        return cp$2;
      }
    }
    function $p_ju_regex_PatternCompiler__parseUnicodeHexEscape__I($thiz) {
      var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
      var start = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      var end = ((4 + start) | 0);
      var codeUnit = $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, start, end, "Unicode");
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = end;
      var lowStart = ((2 + end) | 0);
      var lowEnd = ((4 + lowStart) | 0);
      if (((((-1024) & codeUnit) === 55296) && ($as_T(pattern.substring(end, lowStart)) === "\\u"))) {
        var low = $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, lowStart, lowEnd, "Unicode");
        if ((((-1024) & low) === 56320)) {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = lowEnd;
          return ((((64 + (1023 & codeUnit)) | 0) << 10) | (1023 & low));
        } else {
          return codeUnit;
        }
      } else {
        return codeUnit;
      }
    }
    function $p_ju_regex_PatternCompiler__parseHexCodePoint__I__I__T__I($thiz, start, end, nameForError) {
      var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
      var this$1 = $n(pattern);
      var len = this$1.length;
      if (((start === end) || (end > len))) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("Illegal " + nameForError) + " escape sequence"));
      }
      var i = start;
      while ((i < end)) {
        var value = i;
        var this$4 = $n(pattern);
        var c = $charAt(this$4, value);
        if ((!((((c >= 48) && (c <= 57)) || ((c >= 65) && (c <= 70))) || ((c >= 97) && (c <= 102))))) {
          $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("Illegal " + nameForError) + " escape sequence"));
        }
        i = ((1 + i) | 0);
      }
      if ((((end - start) | 0) > 6)) {
        var cp = 1114112;
      } else {
        var s = $as_T(pattern.substring(start, end));
        var cp = $uI(parseInt(s, 16));
      }
      if ((cp > 1114111)) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Hexadecimal codepoint is too big");
      }
      return cp;
    }
    function $p_ju_regex_PatternCompiler__parsePredefinedCharacterClass__C__ju_regex_PatternCompiler$CompiledCharClass($thiz, dispatchChar) {
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      switch (dispatchChar) {
        case 100:
        case 68: {
          var positive = $m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIDigit;
          break;
        }
        case 104:
        case 72: {
          var positive = $m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UniversalHorizontalWhiteSpace;
          break;
        }
        case 115:
        case 83: {
          var positive = $m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIWhiteSpace;
          break;
        }
        case 118:
        case 86: {
          var positive = $m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UniversalVerticalWhiteSpace;
          break;
        }
        case 119:
        case 87: {
          var positive = $m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIWordChar;
          break;
        }
        case 112:
        case 80: {
          var positive = $p_ju_regex_PatternCompiler__parsePCharacterClass__ju_regex_PatternCompiler$CompiledCharClass($thiz);
          break;
        }
        default: {
          var positive;
          throw new $c_jl_AssertionError($bC(dispatchChar));
        }
      }
      return ((dispatchChar >= 97) ? positive : $n(positive).negated__ju_regex_PatternCompiler$CompiledCharClass());
    }
    function $p_ju_regex_PatternCompiler__parsePCharacterClass__ju_regex_PatternCompiler$CompiledCharClass($thiz) {
      var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
      var this$1 = $n(pattern);
      var len = this$1.length;
      var start = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
      if ((start === len)) {
        var property = "?";
      } else {
        var this$2 = $n(pattern);
        if (($charAt(this$2, start) === 123)) {
          var innerStart = ((1 + start) | 0);
          var this$3 = $n(pattern);
          var innerEnd = $uI(this$3.indexOf("}", innerStart));
          if ((innerEnd < 0)) {
            $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed character family");
          }
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = innerEnd;
          var property = $as_T(pattern.substring(innerStart, innerEnd));
        } else {
          var property = $as_T(pattern.substring(start, ((1 + start) | 0)));
        }
      }
      var dict = $m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$asciiPOSIXCharacterClasses;
      if ((!$uZ($m_jl_Utils$Cache$().jl_Utils$Cache$__f_safeHasOwnProperty.call(dict, property)))) {
        $thiz.java$util$regex$PatternCompiler$$parseErrorRequireESVersion__T__T__E("Unicode character family", "2018");
      }
      var property2 = ((((66 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) === 2) && ((property === "Lower") || (property === "Upper"))) ? "Alpha" : property);
      var dict$1 = $m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$asciiPOSIXCharacterClasses;
      var result = $as_ju_regex_PatternCompiler$CompiledCharClass(dict$1[property2]);
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      return result;
    }
    function $p_ju_regex_PatternCompiler__compileCharacterClass__T($thiz) {
      var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
      var this$1 = $n(pattern);
      var len = this$1.length;
      $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
        var this$2 = $n(pattern);
        var index = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
        var isNegated = ($charAt(this$2, index) === 94);
      } else {
        var isNegated = false;
      }
      if (isNegated) {
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
      }
      var builder = new $c_ju_regex_PatternCompiler$CharacterClassBuilder(((66 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) === 2), isNegated);
      while (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
        var x1 = $f_T__codePointAt__I__I($n(pattern), $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex);
        matchResult: {
          switch (x1) {
            case 93: {
              $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
              return builder.finish__T();
            }
            case 38: {
              $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
              if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
                var this$3 = $n(pattern);
                var index$1 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
                var $x_1 = ($charAt(this$3, index$1) === 38);
              } else {
                var $x_1 = false;
              }
              if ($x_1) {
                $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
                builder.startNewConjunct__V();
                break matchResult;
              } else {
                $p_ju_regex_PatternCompiler__processRangeOrSingleCodePoint$1__I__I__T__ju_regex_PatternCompiler$CharacterClassBuilder__V($thiz, 38, len, pattern, builder);
                break matchResult;
              }
            }
            case 91: {
              var cls = $p_ju_regex_PatternCompiler__compileCharacterClass__T($thiz);
              $p_ju_regex_PatternCompiler$CharacterClassBuilder__addAlternative__T__V(builder, cls);
              break matchResult;
            }
            case 92: {
              $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
              if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex === len)) {
                $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal escape sequence");
              }
              var this$4 = $n(pattern);
              var index$2 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
              var c2 = $charAt(this$4, index$2);
              switch (c2) {
                case 100:
                case 68:
                case 104:
                case 72:
                case 115:
                case 83:
                case 118:
                case 86:
                case 119:
                case 87:
                case 112:
                case 80: {
                  builder.addCharacterClass__ju_regex_PatternCompiler$CompiledCharClass__V($p_ju_regex_PatternCompiler__parsePredefinedCharacterClass__C__ju_regex_PatternCompiler$CompiledCharClass($thiz, c2));
                  break matchResult;
                }
                case 81: {
                  $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
                  var this$5 = $n(pattern);
                  var fromIndex = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
                  var end = $uI(this$5.indexOf("\\E", fromIndex));
                  if ((end < 0)) {
                    $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed character class");
                  }
                  builder.addCodePointsInString__T__I__I__V(pattern, $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex, end);
                  $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((2 + end) | 0);
                  break matchResult;
                }
                default: {
                  $p_ju_regex_PatternCompiler__processRangeOrSingleCodePoint$1__I__I__T__ju_regex_PatternCompiler$CharacterClassBuilder__V($thiz, $p_ju_regex_PatternCompiler__parseSingleCodePointEscape__I($thiz), len, pattern, builder);
                  break matchResult;
                }
              }
              break;
            }
            case 32:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13: {
              if (((4 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
                $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
                break matchResult;
              }
              break;
            }
            case 35: {
              if (((4 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
                $thiz.java$util$regex$PatternCompiler$$skipSharpComment__V();
                break matchResult;
              }
              break;
            }
          }
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex + ((x1 >= 65536) ? 2 : 1)) | 0);
          $p_ju_regex_PatternCompiler__processRangeOrSingleCodePoint$1__I__I__T__ju_regex_PatternCompiler$CharacterClassBuilder__V($thiz, x1, len, pattern, builder);
        }
      }
      $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed character class");
    }
    function $p_ju_regex_PatternCompiler__compileGroup__T($thiz) {
      var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
      var this$1 = $n(pattern);
      var len = this$1.length;
      var start = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
      if ((((1 + start) | 0) === len)) {
        var $x_1 = true;
      } else {
        var this$2 = $n(pattern);
        var index = ((1 + start) | 0);
        var $x_1 = ($charAt(this$2, index) !== 63);
      }
      if ($x_1) {
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + start) | 0);
        $thiz.ju_regex_PatternCompiler__f_compiledGroupCount = ((1 + $thiz.ju_regex_PatternCompiler__f_compiledGroupCount) | 0);
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap.push($thiz.ju_regex_PatternCompiler__f_compiledGroupCount);
        return (("(" + $thiz.java$util$regex$PatternCompiler$$compileTopLevelOrInsideGroup__Z__T(true)) + ")");
      } else {
        if ((((2 + start) | 0) === len)) {
          $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed group");
        }
        var this$3 = $n(pattern);
        var index$1 = ((2 + start) | 0);
        var c1 = $charAt(this$3, index$1);
        if ((((c1 === 58) || (c1 === 61)) || (c1 === 33))) {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((3 + start) | 0);
          return ((("" + $as_T(pattern.substring(start, ((3 + start) | 0)))) + $thiz.java$util$regex$PatternCompiler$$compileTopLevelOrInsideGroup__Z__T(true)) + ")");
        } else if ((c1 === 60)) {
          if ((((3 + start) | 0) === len)) {
            $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed group");
          }
          var this$4 = $n(pattern);
          var index$2 = ((3 + start) | 0);
          var c2 = $charAt(this$4, index$2);
          if ((((c2 >= 65) && (c2 <= 90)) || ((c2 >= 97) && (c2 <= 122)))) {
            $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((3 + start) | 0);
            var name = $p_ju_regex_PatternCompiler__parseGroupName__T($thiz);
            var dict = $thiz.ju_regex_PatternCompiler__f_namedGroups;
            if ($uZ($m_jl_Utils$Cache$().jl_Utils$Cache$__f_safeHasOwnProperty.call(dict, name))) {
              $p_ju_regex_PatternCompiler__parseError__T__E($thiz, (("named capturing group <" + name) + "> is already defined"));
            }
            $thiz.ju_regex_PatternCompiler__f_compiledGroupCount = ((1 + $thiz.ju_regex_PatternCompiler__f_compiledGroupCount) | 0);
            $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap.push($thiz.ju_regex_PatternCompiler__f_compiledGroupCount);
            var dict$1 = $thiz.ju_regex_PatternCompiler__f_namedGroups;
            var value = (((-1) + $uI($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap.length)) | 0);
            dict$1[name] = value;
            $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
            return (("(" + $thiz.java$util$regex$PatternCompiler$$compileTopLevelOrInsideGroup__Z__T(true)) + ")");
          } else {
            if (((c2 !== 61) && (c2 !== 33))) {
              $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unknown look-behind group");
            }
            $thiz.java$util$regex$PatternCompiler$$parseErrorRequireESVersion__T__T__E("Look-behind group", "2018");
          }
        } else if ((c1 === 62)) {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((3 + start) | 0);
          $thiz.ju_regex_PatternCompiler__f_compiledGroupCount = ((1 + $thiz.ju_regex_PatternCompiler__f_compiledGroupCount) | 0);
          var groupNumber = $thiz.ju_regex_PatternCompiler__f_compiledGroupCount;
          return (((("(?:(?=(" + $thiz.java$util$regex$PatternCompiler$$compileTopLevelOrInsideGroup__Z__T(true)) + "))\\") + groupNumber) + ")");
        } else {
          $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Embedded flag expression in the middle of a pattern is not supported");
        }
      }
    }
    function $p_ju_regex_PatternCompiler__parseGroupName__T($thiz) {
      var pattern = $thiz.ju_regex_PatternCompiler__f_pattern;
      var this$1 = $n(pattern);
      var len = this$1.length;
      var start = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
      while (true) {
        if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
          var this$2 = $n(pattern);
          var index = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
          var c = $charAt(this$2, index);
          var $x_1 = ((((c >= 65) && (c <= 90)) || ((c >= 97) && (c <= 122))) || ((c >= 48) && (c <= 57)));
        } else {
          var $x_1 = false;
        }
        if ($x_1) {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
        } else {
          break;
        }
      }
      if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex === len)) {
        var $x_2 = true;
      } else {
        var this$4 = $n(pattern);
        var index$1 = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
        var $x_2 = ($charAt(this$4, index$1) !== 62);
      }
      if ($x_2) {
        $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "named capturing group is missing trailing '>'");
      }
      return $as_T(pattern.substring(start, $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex));
    }
    function $p_ju_regex_PatternCompiler__processRangeOrSingleCodePoint$1__I__I__T__ju_regex_PatternCompiler$CharacterClassBuilder__V($thiz, startCodePoint, len$2, pattern$3, builder$1) {
      if (((4 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
        $p_ju_regex_PatternCompiler__skipComments__V($thiz);
      }
      if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len$2)) {
        var this$1 = $n(pattern$3);
        var index = $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
        var $x_1 = ($charAt(this$1, index) === 45);
      } else {
        var $x_1 = false;
      }
      if ($x_1) {
        $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
        if (((4 & $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
          $p_ju_regex_PatternCompiler__skipComments__V($thiz);
        }
        if (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex === len$2)) {
          $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Unclosed character class");
        }
        var cpEnd = $f_T__codePointAt__I__I($n(pattern$3), $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex);
        if (((cpEnd === 91) || (cpEnd === 93))) {
          $n(builder$1).addSingleCodePoint__I__V(startCodePoint);
          $n(builder$1).addSingleCodePoint__I__V(45);
        } else {
          $thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = (($thiz.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex + ((cpEnd >= 65536) ? 2 : 1)) | 0);
          var endCodePoint = ((cpEnd === 92) ? $p_ju_regex_PatternCompiler__parseSingleCodePointEscape__I($thiz) : cpEnd);
          if ((endCodePoint < startCodePoint)) {
            $p_ju_regex_PatternCompiler__parseError__T__E($thiz, "Illegal character range");
          }
          $n(builder$1).addCodePointRange__I__I__V(startCodePoint, endCodePoint);
        }
      } else {
        $n(builder$1).addSingleCodePoint__I__V(startCodePoint);
      }
    }
    /** @constructor */
    function $c_ju_regex_PatternCompiler(pattern, flags) {
      this.ju_regex_PatternCompiler__f_pattern = null;
      this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags = 0;
      this.ju_regex_PatternCompiler__f_sticky = false;
      this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = 0;
      this.ju_regex_PatternCompiler__f_compiledGroupCount = 0;
      this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap = null;
      this.ju_regex_PatternCompiler__f_namedGroups = null;
      this.ju_regex_PatternCompiler__f_pattern = pattern;
      this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags = flags;
      this.ju_regex_PatternCompiler__f_sticky = false;
      this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = 0;
      this.ju_regex_PatternCompiler__f_compiledGroupCount = 0;
      this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap = [0];
      this.ju_regex_PatternCompiler__f_namedGroups = ({});
    }
    $c_ju_regex_PatternCompiler.prototype = new $h_O();
    $c_ju_regex_PatternCompiler.prototype.constructor = $c_ju_regex_PatternCompiler;
    $c_ju_regex_PatternCompiler.prototype;
    $c_ju_regex_PatternCompiler.prototype.compile__ju_regex_Pattern = (function() {
      if (((256 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
        this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags = (64 | this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags);
      }
      var isLiteral = ((16 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0);
      if ((!isLiteral)) {
        $p_ju_regex_PatternCompiler__processLeadingEmbeddedFlags__V(this);
      }
      if (((128 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
        $p_ju_regex_PatternCompiler__parseError__T__E(this, "CANON_EQ is not supported");
      }
      if (((8 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
        this.java$util$regex$PatternCompiler$$parseErrorRequireESVersion__T__T__E("MULTILINE", "2018");
      }
      if (((256 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
        this.java$util$regex$PatternCompiler$$parseErrorRequireESVersion__T__T__E("UNICODE_CHARACTER_CLASS", "2018");
      }
      if (isLiteral) {
        var jsPattern = $p_ju_regex_PatternCompiler__literal__T__T(this, this.ju_regex_PatternCompiler__f_pattern);
      } else {
        if (($as_T(this.ju_regex_PatternCompiler__f_pattern.substring(this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex, ((2 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0))) === "\\G")) {
          this.ju_regex_PatternCompiler__f_sticky = true;
          this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((2 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
        }
        var jsPattern = this.java$util$regex$PatternCompiler$$compileTopLevelOrInsideGroup__Z__T(false);
      }
      var baseJSFlags = ($m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$_supportsDotAll ? "us" : "u");
      var jsFlags = (((66 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) === 66) ? (baseJSFlags + "i") : baseJSFlags);
      return new $c_ju_regex_Pattern(this.ju_regex_PatternCompiler__f_pattern, this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags, jsPattern, jsFlags, this.ju_regex_PatternCompiler__f_sticky, (((-1) + $uI(this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap.length)) | 0), this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$groupNumberMap, this.ju_regex_PatternCompiler__f_namedGroups);
    });
    $c_ju_regex_PatternCompiler.prototype.java$util$regex$PatternCompiler$$parseErrorRequireESVersion__T__T__E = (function(purpose, es) {
      $p_ju_regex_PatternCompiler__parseError__T__E(this, (((((((purpose + " is not supported because it requires RegExp features of ECMAScript ") + es) + ".\n") + ((("If you only target environments with ES" + es) + "+, you can enable ES") + es)) + " features with\n") + ("  scalaJSLinkerConfig ~= { _.withESFeatures(_.withESVersion(ESVersion.ES" + es)) + ")) }\nor an equivalent configuration depending on your build tool."));
    });
    $c_ju_regex_PatternCompiler.prototype.java$util$regex$PatternCompiler$$compileTopLevelOrInsideGroup__Z__T = (function(insideGroup) {
      var pattern = this.ju_regex_PatternCompiler__f_pattern;
      var this$1$1 = $n(pattern);
      var len = this$1$1.length;
      var result = "";
      while ((this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
        var dispatchCP = $f_T__codePointAt__I__I($n(pattern), this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex);
        matchResult: {
          switch (dispatchCP) {
            case 41: {
              if ((!insideGroup)) {
                $p_ju_regex_PatternCompiler__parseError__T__E(this, "Unmatched closing ')'");
              }
              this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
              return result;
            }
            case 124: {
              if ((this.ju_regex_PatternCompiler__f_sticky && (!insideGroup))) {
                $p_ju_regex_PatternCompiler__parseError__T__E(this, "\\G is not supported when there is an alternative at the top level");
              }
              this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
              result = (result + "|");
              break matchResult;
            }
            case 32:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13: {
              if (((4 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
                this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
                break matchResult;
              }
              break;
            }
            case 35: {
              if (((4 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0)) {
                this.java$util$regex$PatternCompiler$$skipSharpComment__V();
                break matchResult;
              }
              break;
            }
            case 63:
            case 42:
            case 43:
            case 123: {
              $p_ju_regex_PatternCompiler__parseError__T__E(this, (("Dangling meta character '" + $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointToString__I__T(dispatchCP)) + "'"));
              break;
            }
          }
          var compiledGroupCountBeforeThisToken = this.ju_regex_PatternCompiler__f_compiledGroupCount;
          switch (dispatchCP) {
            case 92: {
              var compiledToken = $p_ju_regex_PatternCompiler__compileEscape__T(this);
              break;
            }
            case 91: {
              var compiledToken = $p_ju_regex_PatternCompiler__compileCharacterClass__T(this);
              break;
            }
            case 40: {
              var compiledToken = $p_ju_regex_PatternCompiler__compileGroup__T(this);
              break;
            }
            case 94: {
              this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
              var compiledToken = "^";
              break;
            }
            case 36: {
              this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
              var compiledToken = "$";
              break;
            }
            case 46: {
              this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
              var rejected = (((32 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0) ? "" : (((1 & this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$flags) !== 0) ? "\n" : "\n\r\u0085\u2028\u2029"));
              var compiledToken = $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointNotAmong__T__T(rejected);
              break;
            }
            default: {
              this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex + ((dispatchCP >= 65536) ? 2 : 1)) | 0);
              var compiledToken = $p_ju_regex_PatternCompiler__literal__I__T(this, dispatchCP);
            }
          }
          result = (("" + result) + $p_ju_regex_PatternCompiler__compileRepeater__I__T__T(this, compiledGroupCountBeforeThisToken, compiledToken));
        }
      }
      if (insideGroup) {
        $p_ju_regex_PatternCompiler__parseError__T__E(this, "Unclosed group");
      }
      return result;
    });
    $c_ju_regex_PatternCompiler.prototype.java$util$regex$PatternCompiler$$skipSharpComment__V = (function() {
      var pattern = this.ju_regex_PatternCompiler__f_pattern;
      var this$1$1 = $n(pattern);
      var len = this$1$1.length;
      while (true) {
        if ((this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex !== len)) {
          var this$2 = $n(pattern);
          var index = this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex;
          var c = $charAt(this$2, index);
          var $x_1 = (!(((((c === 10) || (c === 13)) || (c === 133)) || (c === 8232)) || (c === 8233)));
        } else {
          var $x_1 = false;
        }
        if ($x_1) {
          this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex = ((1 + this.ju_regex_PatternCompiler__f_java$util$regex$PatternCompiler$$pIndex) | 0);
        } else {
          break;
        }
      }
    });
    new $TypeData().initClass($c_ju_regex_PatternCompiler, "java.util.regex.PatternCompiler", ({
      ju_regex_PatternCompiler: 1
    }));
    function $p_ju_regex_PatternCompiler$__featureTest__T__Z($thiz, flags) {
      try {
        new RegExp("", flags);
        return true;
      } catch (e) {
        return false;
      }
    }
    /** @constructor */
    function $c_ju_regex_PatternCompiler$() {
      this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$leadingEmbeddedFlagSpecifierRegExp = null;
      this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$renumberingRegExp = null;
      this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$_supportsUnicode = false;
      this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$_supportsSticky = false;
      this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$_supportsDotAll = false;
      this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIDigit = null;
      this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UnicodeDigit = null;
      this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UniversalHorizontalWhiteSpace = null;
      this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIWhiteSpace = null;
      this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UnicodeWhitespace = null;
      this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UniversalVerticalWhiteSpace = null;
      this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIWordChar = null;
      this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UnicodeWordChar = null;
      this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$asciiPOSIXCharacterClasses = null;
      this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$scriptCanonicalizeRegExp = null;
      $n_ju_regex_PatternCompiler$ = this;
      this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$leadingEmbeddedFlagSpecifierRegExp = new RegExp("^\\(\\?([idmsuxU]*)(?:-([idmsuxU]*))?\\)");
      this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$renumberingRegExp = new RegExp("(\\\\+)(\\d+)", "g");
      this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$_supportsUnicode = true;
      this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$_supportsSticky = true;
      this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$_supportsDotAll = $p_ju_regex_PatternCompiler$__featureTest__T__Z(this, "us");
      $p_ju_regex_PatternCompiler$__featureTest__T__Z(this, "d");
      this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIDigit = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "0-9");
      this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UnicodeDigit = new $c_ju_regex_PatternCompiler$CompiledCharClass(0, "Nd");
      this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UniversalHorizontalWhiteSpace = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t \u00a0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000");
      this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIWhiteSpace = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t-\r ");
      this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UnicodeWhitespace = new $c_ju_regex_PatternCompiler$CompiledCharClass(0, "White_Space");
      this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UniversalVerticalWhiteSpace = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\n-\r\u0085\u2028\u2029");
      this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$ASCIIWordChar = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "a-zA-Z_0-9");
      this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$UnicodeWordChar = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\\p{Alphabetic}\\p{Mn}\\p{Me}\\p{Mc}\\p{Nd}\\p{Pc}\\p{Join_Control}");
      var r = ({});
      var value = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "a-z");
      r.Lower = value;
      var value$1 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "A-Z");
      r.Upper = value$1;
      var value$2 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\u0000-\u007f");
      r.ASCII = value$2;
      var value$3 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "A-Za-z");
      r.Alpha = value$3;
      var value$4 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "0-9");
      r.Digit = value$4;
      var value$5 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "0-9A-Za-z");
      r.Alnum = value$5;
      var value$6 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "!-/:-@[-`{-~");
      r.Punct = value$6;
      var value$7 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "!-~");
      r.Graph = value$7;
      var value$8 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, " -~");
      r.Print = value$8;
      var value$9 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t ");
      r.Blank = value$9;
      var value$10 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\u0000-\u001f\u007f");
      r.Cntrl = value$10;
      var value$11 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "0-9A-Fa-f");
      r.XDigit = value$11;
      var value$12 = new $c_ju_regex_PatternCompiler$CompiledCharClass(2, "\t-\r ");
      r.Space = value$12;
      this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$asciiPOSIXCharacterClasses = r;
      this.ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$scriptCanonicalizeRegExp = new RegExp("(?:^|_)[a-z]", "g");
    }
    $c_ju_regex_PatternCompiler$.prototype = new $h_O();
    $c_ju_regex_PatternCompiler$.prototype.constructor = $c_ju_regex_PatternCompiler$;
    $c_ju_regex_PatternCompiler$.prototype;
    $c_ju_regex_PatternCompiler$.prototype.compile__T__I__ju_regex_Pattern = (function(regex, flags) {
      return new $c_ju_regex_PatternCompiler(regex, flags).compile__ju_regex_Pattern();
    });
    $c_ju_regex_PatternCompiler$.prototype.java$util$regex$PatternCompiler$$charToFlag__C__I = (function(c) {
      switch (c) {
        case 105: {
          return 2;
        }
        case 100: {
          return 1;
        }
        case 109: {
          return 8;
        }
        case 115: {
          return 32;
        }
        case 117: {
          return 64;
        }
        case 120: {
          return 4;
        }
        case 85: {
          return 256;
        }
        default: {
          throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "bad in-pattern flag");
        }
      }
    });
    $c_ju_regex_PatternCompiler$.prototype.java$util$regex$PatternCompiler$$codePointNotAmong__T__T = (function(characters) {
      return ((characters !== "") ? (("[^" + characters) + "]") : ($m_ju_regex_PatternCompiler$().ju_regex_PatternCompiler$__f_java$util$regex$PatternCompiler$$_supportsDotAll ? "." : "[\\d\\D]"));
    });
    $c_ju_regex_PatternCompiler$.prototype.java$util$regex$PatternCompiler$$codePointToString__I__T = (function(codePoint) {
      return $as_T(String.fromCodePoint(codePoint));
    });
    new $TypeData().initClass($c_ju_regex_PatternCompiler$, "java.util.regex.PatternCompiler$", ({
      ju_regex_PatternCompiler$: 1
    }));
    var $n_ju_regex_PatternCompiler$;
    function $m_ju_regex_PatternCompiler$() {
      if ((!$n_ju_regex_PatternCompiler$)) {
        $n_ju_regex_PatternCompiler$ = new $c_ju_regex_PatternCompiler$();
      }
      return $n_ju_regex_PatternCompiler$;
    }
    function $p_ju_regex_PatternCompiler$CharacterClassBuilder__addAlternative__T__V($thiz, alt) {
      if (($thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct === "")) {
        $thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct = alt;
      } else {
        $thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct = (($thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct + "|") + alt);
      }
    }
    function $p_ju_regex_PatternCompiler$CharacterClassBuilder__conjunctResult__T($thiz) {
      if ($thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_isNegated) {
        var negThisSegment = $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointNotAmong__T__T($thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment);
        return (($thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct === "") ? negThisSegment : (((("(?:(?!" + $thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct) + ")") + negThisSegment) + ")"));
      } else {
        return (($thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment === "") ? (($thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct === "") ? "[^\\d\\D]" : (("(?:" + $thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct) + ")")) : (($thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct === "") ? (("[" + $thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment) + "]") : (((("(?:" + $thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct) + "|[") + $thiz.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment) + "])")));
      }
    }
    function $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T($thiz, codePoint) {
      var s = $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointToString__I__T(codePoint);
      return (((((codePoint === 93) || (codePoint === 92)) || (codePoint === 45)) || (codePoint === 94)) ? ("\\" + s) : s);
    }
    /** @constructor */
    function $c_ju_regex_PatternCompiler$CharacterClassBuilder(asciiCaseInsensitive, isNegated) {
      this.ju_regex_PatternCompiler$CharacterClassBuilder__f_asciiCaseInsensitive = false;
      this.ju_regex_PatternCompiler$CharacterClassBuilder__f_isNegated = false;
      this.ju_regex_PatternCompiler$CharacterClassBuilder__f_conjunction = null;
      this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct = null;
      this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = null;
      this.ju_regex_PatternCompiler$CharacterClassBuilder__f_asciiCaseInsensitive = asciiCaseInsensitive;
      this.ju_regex_PatternCompiler$CharacterClassBuilder__f_isNegated = isNegated;
      this.ju_regex_PatternCompiler$CharacterClassBuilder__f_conjunction = "";
      this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct = "";
      this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = "";
    }
    $c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype = new $h_O();
    $c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype.constructor = $c_ju_regex_PatternCompiler$CharacterClassBuilder;
    $c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype;
    $c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype.finish__T = (function() {
      var conjunct = $p_ju_regex_PatternCompiler$CharacterClassBuilder__conjunctResult__T(this);
      return ((this.ju_regex_PatternCompiler$CharacterClassBuilder__f_conjunction === "") ? conjunct : ((("(?:" + this.ju_regex_PatternCompiler$CharacterClassBuilder__f_conjunction) + conjunct) + ")"));
    });
    $c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype.startNewConjunct__V = (function() {
      var conjunct = $p_ju_regex_PatternCompiler$CharacterClassBuilder__conjunctResult__T(this);
      this.ju_regex_PatternCompiler$CharacterClassBuilder__f_conjunction = (this.ju_regex_PatternCompiler$CharacterClassBuilder__f_conjunction + (this.ju_regex_PatternCompiler$CharacterClassBuilder__f_isNegated ? (conjunct + "|") : (("(?=" + conjunct) + ")")));
      this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisConjunct = "";
      this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = "";
    });
    $c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype.addCharacterClass__ju_regex_PatternCompiler$CompiledCharClass__V = (function(cls) {
      var x1 = $n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_kind;
      switch (x1) {
        case 0: {
          this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = ((this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment + ("\\p{" + $n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_data)) + "}");
          break;
        }
        case 1: {
          this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = ((this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment + ("\\P{" + $n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_data)) + "}");
          break;
        }
        case 2: {
          this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = (("" + this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment) + $n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_data);
          break;
        }
        case 3: {
          $p_ju_regex_PatternCompiler$CharacterClassBuilder__addAlternative__T__V(this, $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointNotAmong__T__T($n(cls).ju_regex_PatternCompiler$CompiledCharClass__f_data));
          break;
        }
        default: {
          throw new $c_jl_AssertionError(x1);
        }
      }
    });
    $c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype.addCodePointsInString__T__I__I__V = (function(str, start, end) {
      var i = start;
      while ((i !== end)) {
        var codePoint = $f_T__codePointAt__I__I($n(str), i);
        this.addSingleCodePoint__I__V(codePoint);
        i = ((i + ((codePoint >= 65536) ? 2 : 1)) | 0);
      }
    });
    $c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype.addSingleCodePoint__I__V = (function(codePoint) {
      var s = $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, codePoint);
      if ((((-1024) & codePoint) === 56320)) {
        this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = (("" + s) + this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment);
      } else {
        this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = (("" + this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment) + s);
      }
      if (this.ju_regex_PatternCompiler$CharacterClassBuilder__f_asciiCaseInsensitive) {
        if (((codePoint >= 65) && (codePoint <= 90))) {
          this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = (("" + this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment) + $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointToString__I__T(((32 + codePoint) | 0)));
        } else if (((codePoint >= 97) && (codePoint <= 122))) {
          this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = (("" + this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment) + $m_ju_regex_PatternCompiler$().java$util$regex$PatternCompiler$$codePointToString__I__T((((-32) + codePoint) | 0)));
        }
      }
    });
    $c_ju_regex_PatternCompiler$CharacterClassBuilder.prototype.addCodePointRange__I__I__V = (function(startCodePoint, endCodePoint) {
      var s = (($p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, startCodePoint) + "-") + $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, endCodePoint));
      if ((((-1024) & startCodePoint) === 56320)) {
        this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = (s + this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment);
      } else {
        this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = (this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment + s);
      }
      if (this.ju_regex_PatternCompiler$CharacterClassBuilder__f_asciiCaseInsensitive) {
        var start = ((startCodePoint > 65) ? startCodePoint : 65);
        var end = ((endCodePoint < 90) ? endCodePoint : 90);
        if ((start <= end)) {
          var $x_1 = this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment;
          var start$1 = ((32 + start) | 0);
          var end$1 = ((32 + end) | 0);
          this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = ($x_1 + (($p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, start$1) + "-") + $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, end$1)));
        }
        var start$2 = ((startCodePoint > 97) ? startCodePoint : 97);
        var end$2 = ((endCodePoint < 122) ? endCodePoint : 122);
        if ((start$2 <= end$2)) {
          var $x_2 = this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment;
          var start$3 = (((-32) + start$2) | 0);
          var end$3 = (((-32) + end$2) | 0);
          this.ju_regex_PatternCompiler$CharacterClassBuilder__f_thisSegment = ($x_2 + (($p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, start$3) + "-") + $p_ju_regex_PatternCompiler$CharacterClassBuilder__literalCodePoint__I__T(this, end$3)));
        }
      }
    });
    new $TypeData().initClass($c_ju_regex_PatternCompiler$CharacterClassBuilder, "java.util.regex.PatternCompiler$CharacterClassBuilder", ({
      ju_regex_PatternCompiler$CharacterClassBuilder: 1
    }));
    function $p_ju_regex_PatternCompiler$CompiledCharClass__negated$lzycompute__ju_regex_PatternCompiler$CompiledCharClass($thiz) {
      if ((!$thiz.ju_regex_PatternCompiler$CompiledCharClass__f_bitmap$0)) {
        $thiz.ju_regex_PatternCompiler$CompiledCharClass__f_negated = new $c_ju_regex_PatternCompiler$CompiledCharClass((1 ^ $thiz.ju_regex_PatternCompiler$CompiledCharClass__f_kind), $thiz.ju_regex_PatternCompiler$CompiledCharClass__f_data);
        $thiz.ju_regex_PatternCompiler$CompiledCharClass__f_bitmap$0 = true;
      }
      return $thiz.ju_regex_PatternCompiler$CompiledCharClass__f_negated;
    }
    /** @constructor */
    function $c_ju_regex_PatternCompiler$CompiledCharClass(kind, data) {
      this.ju_regex_PatternCompiler$CompiledCharClass__f_negated = null;
      this.ju_regex_PatternCompiler$CompiledCharClass__f_kind = 0;
      this.ju_regex_PatternCompiler$CompiledCharClass__f_data = null;
      this.ju_regex_PatternCompiler$CompiledCharClass__f_bitmap$0 = false;
      this.ju_regex_PatternCompiler$CompiledCharClass__f_kind = kind;
      this.ju_regex_PatternCompiler$CompiledCharClass__f_data = data;
    }
    $c_ju_regex_PatternCompiler$CompiledCharClass.prototype = new $h_O();
    $c_ju_regex_PatternCompiler$CompiledCharClass.prototype.constructor = $c_ju_regex_PatternCompiler$CompiledCharClass;
    $c_ju_regex_PatternCompiler$CompiledCharClass.prototype;
    $c_ju_regex_PatternCompiler$CompiledCharClass.prototype.negated__ju_regex_PatternCompiler$CompiledCharClass = (function() {
      return ((!this.ju_regex_PatternCompiler$CompiledCharClass__f_bitmap$0) ? $p_ju_regex_PatternCompiler$CompiledCharClass__negated$lzycompute__ju_regex_PatternCompiler$CompiledCharClass(this) : this.ju_regex_PatternCompiler$CompiledCharClass__f_negated);
    });
    function $as_ju_regex_PatternCompiler$CompiledCharClass(obj) {
      return (((obj instanceof $c_ju_regex_PatternCompiler$CompiledCharClass) || (obj === null)) ? obj : $throwClassCastException(obj, "java.util.regex.PatternCompiler$CompiledCharClass"));
    }
    new $TypeData().initClass($c_ju_regex_PatternCompiler$CompiledCharClass, "java.util.regex.PatternCompiler$CompiledCharClass", ({
      ju_regex_PatternCompiler$CompiledCharClass: 1
    }));
    /** @constructor */
    function $c_RTLong(lo, hi) {
      this.RTLong__f_lo = 0;
      this.RTLong__f_hi = 0;
      this.RTLong__f_lo = lo;
      this.RTLong__f_hi = hi;
    }
    $c_RTLong.prototype = new $h_O();
    $c_RTLong.prototype.constructor = $c_RTLong;
    $c_RTLong.prototype;
    $c_RTLong.prototype.equals__O__Z = (function(that) {
      if ((that instanceof $c_RTLong)) {
        var x2 = $as_RTLong(that);
        return ((this.RTLong__f_lo === $n(x2).RTLong__f_lo) && (this.RTLong__f_hi === $n(x2).RTLong__f_hi));
      } else {
        return false;
      }
    });
    $c_RTLong.prototype.hashCode__I = (function() {
      return (this.RTLong__f_lo ^ this.RTLong__f_hi);
    });
    $c_RTLong.prototype.toString__T = (function() {
      return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T(this.RTLong__f_lo, this.RTLong__f_hi);
    });
    $c_RTLong.prototype.toInt__I = (function() {
      return this.RTLong__f_lo;
    });
    $c_RTLong.prototype.toFloat__F = (function() {
      return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toFloat__I__I__F(this.RTLong__f_lo, this.RTLong__f_hi);
    });
    $c_RTLong.prototype.toDouble__D = (function() {
      return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this.RTLong__f_lo, this.RTLong__f_hi);
    });
    $c_RTLong.prototype.byteValue__B = (function() {
      return ((this.RTLong__f_lo << 24) >> 24);
    });
    $c_RTLong.prototype.shortValue__S = (function() {
      return ((this.RTLong__f_lo << 16) >> 16);
    });
    $c_RTLong.prototype.intValue__I = (function() {
      return this.RTLong__f_lo;
    });
    $c_RTLong.prototype.longValue__J = (function() {
      return $uJ(this);
    });
    $c_RTLong.prototype.floatValue__F = (function() {
      return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toFloat__I__I__F(this.RTLong__f_lo, this.RTLong__f_hi);
    });
    $c_RTLong.prototype.doubleValue__D = (function() {
      return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this.RTLong__f_lo, this.RTLong__f_hi);
    });
    $c_RTLong.prototype.compareTo__O__I = (function(that) {
      var b = $as_RTLong(that);
      return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, $n(b).RTLong__f_lo, $n(b).RTLong__f_hi);
    });
    $c_RTLong.prototype.compareTo__jl_Long__I = (function(that) {
      return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, $n(that).RTLong__f_lo, $n(that).RTLong__f_hi);
    });
    $c_RTLong.prototype.equals__RTLong__Z = (function(b) {
      return ((this.RTLong__f_lo === $n(b).RTLong__f_lo) && (this.RTLong__f_hi === $n(b).RTLong__f_hi));
    });
    $c_RTLong.prototype.notEquals__RTLong__Z = (function(b) {
      return (!((this.RTLong__f_lo === $n(b).RTLong__f_lo) && (this.RTLong__f_hi === $n(b).RTLong__f_hi)));
    });
    $c_RTLong.prototype.$less__RTLong__Z = (function(b) {
      var ahi = this.RTLong__f_hi;
      var bhi = $n(b).RTLong__f_hi;
      return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) < ((-2147483648) ^ $n(b).RTLong__f_lo)) : (ahi < bhi));
    });
    $c_RTLong.prototype.$less$eq__RTLong__Z = (function(b) {
      var ahi = this.RTLong__f_hi;
      var bhi = $n(b).RTLong__f_hi;
      return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) <= ((-2147483648) ^ $n(b).RTLong__f_lo)) : (ahi < bhi));
    });
    $c_RTLong.prototype.$greater__RTLong__Z = (function(b) {
      var ahi = this.RTLong__f_hi;
      var bhi = $n(b).RTLong__f_hi;
      return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) > ((-2147483648) ^ $n(b).RTLong__f_lo)) : (ahi > bhi));
    });
    $c_RTLong.prototype.$greater$eq__RTLong__Z = (function(b) {
      var ahi = this.RTLong__f_hi;
      var bhi = $n(b).RTLong__f_hi;
      return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) >= ((-2147483648) ^ $n(b).RTLong__f_lo)) : (ahi > bhi));
    });
    $c_RTLong.prototype.unary_$tilde__RTLong = (function() {
      return new $c_RTLong((~this.RTLong__f_lo), (~this.RTLong__f_hi));
    });
    $c_RTLong.prototype.$bar__RTLong__RTLong = (function(b) {
      return new $c_RTLong((this.RTLong__f_lo | $n(b).RTLong__f_lo), (this.RTLong__f_hi | $n(b).RTLong__f_hi));
    });
    $c_RTLong.prototype.$amp__RTLong__RTLong = (function(b) {
      return new $c_RTLong((this.RTLong__f_lo & $n(b).RTLong__f_lo), (this.RTLong__f_hi & $n(b).RTLong__f_hi));
    });
    $c_RTLong.prototype.$up__RTLong__RTLong = (function(b) {
      return new $c_RTLong((this.RTLong__f_lo ^ $n(b).RTLong__f_lo), (this.RTLong__f_hi ^ $n(b).RTLong__f_hi));
    });
    $c_RTLong.prototype.$less$less__I__RTLong = (function(n) {
      var lo = this.RTLong__f_lo;
      return new $c_RTLong((((32 & n) === 0) ? (lo << n) : 0), (((32 & n) === 0) ? (((((lo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (this.RTLong__f_hi << n)) : (lo << n)));
    });
    $c_RTLong.prototype.$greater$greater$greater__I__RTLong = (function(n) {
      var hi = this.RTLong__f_hi;
      return new $c_RTLong((((32 & n) === 0) ? (((this.RTLong__f_lo >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : ((hi >>> n) | 0)), (((32 & n) === 0) ? ((hi >>> n) | 0) : 0));
    });
    $c_RTLong.prototype.$greater$greater__I__RTLong = (function(n) {
      var hi = this.RTLong__f_hi;
      return new $c_RTLong((((32 & n) === 0) ? (((this.RTLong__f_lo >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : (hi >> n)), (((32 & n) === 0) ? (hi >> n) : (hi >> 31)));
    });
    $c_RTLong.prototype.unary_$minus__RTLong = (function() {
      var lo = this.RTLong__f_lo;
      var hi = this.RTLong__f_hi;
      return new $c_RTLong(((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)));
    });
    $c_RTLong.prototype.$plus__RTLong__RTLong = (function(b) {
      var alo = this.RTLong__f_lo;
      var ahi = this.RTLong__f_hi;
      var bhi = $n(b).RTLong__f_hi;
      var lo = ((alo + $n(b).RTLong__f_lo) | 0);
      return new $c_RTLong(lo, ((((-2147483648) ^ lo) < ((-2147483648) ^ alo)) ? ((1 + ((ahi + bhi) | 0)) | 0) : ((ahi + bhi) | 0)));
    });
    $c_RTLong.prototype.$minus__RTLong__RTLong = (function(b) {
      var alo = this.RTLong__f_lo;
      var ahi = this.RTLong__f_hi;
      var bhi = $n(b).RTLong__f_hi;
      var lo = ((alo - $n(b).RTLong__f_lo) | 0);
      return new $c_RTLong(lo, ((((-2147483648) ^ lo) > ((-2147483648) ^ alo)) ? (((-1) + ((ahi - bhi) | 0)) | 0) : ((ahi - bhi) | 0)));
    });
    $c_RTLong.prototype.$times__RTLong__RTLong = (function(b) {
      var alo = this.RTLong__f_lo;
      var blo = $n(b).RTLong__f_lo;
      var a0 = (65535 & alo);
      var a1 = ((alo >>> 16) | 0);
      var b0 = (65535 & blo);
      var b1 = ((blo >>> 16) | 0);
      var a0b0 = Math.imul(a0, b0);
      var a1b0 = Math.imul(a1, b0);
      var a0b1 = Math.imul(a0, b1);
      var lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
      var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
      var hi = ((((((((Math.imul(alo, $n(b).RTLong__f_hi) + Math.imul(this.RTLong__f_hi, blo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
      return new $c_RTLong(lo, hi);
    });
    $c_RTLong.prototype.$div__RTLong__RTLong = (function(b) {
      var this$1$1 = $m_RTLong$();
      var lo = this$1$1.divideImpl__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, $n(b).RTLong__f_lo, $n(b).RTLong__f_hi);
      return new $c_RTLong(lo, this$1$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn);
    });
    $c_RTLong.prototype.$percent__RTLong__RTLong = (function(b) {
      var this$1$1 = $m_RTLong$();
      var lo = this$1$1.remainderImpl__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, $n(b).RTLong__f_lo, $n(b).RTLong__f_hi);
      return new $c_RTLong(lo, this$1$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn);
    });
    function $as_RTLong(obj) {
      return (((obj instanceof $c_RTLong) || (obj === null)) ? obj : $throwClassCastException(obj, "org.scalajs.linker.runtime.RuntimeLong"));
    }
    new $TypeData().initClass($c_RTLong, "org.scalajs.linker.runtime.RuntimeLong", ({
      RTLong: 1
    }));
    function $p_RTLong$__toUnsignedString__I__I__T($thiz, lo, hi) {
      if ((((-2097152) & hi) === 0)) {
        var this$1 = ((4.294967296E9 * hi) + $uD((lo >>> 0.0)));
        return ("" + this$1);
      } else {
        return $as_T($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, lo, hi, 1000000000, 0, 2));
      }
    }
    function $p_RTLong$__unsigned_$div__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
      if ((((-2097152) & ahi) === 0)) {
        if ((((-2097152) & bhi) === 0)) {
          var aDouble = ((4.294967296E9 * ahi) + $uD((alo >>> 0.0)));
          var bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0.0)));
          var rDouble = (aDouble / bDouble);
          var x = (rDouble / 4.294967296E9);
          $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = $uI((x | 0.0));
          return $uI((rDouble | 0.0));
        } else {
          $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
          return 0;
        }
      } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
        var pow = ((31 - $uI(Math.clz32(blo))) | 0);
        $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((ahi >>> pow) | 0);
        return (((alo >>> pow) | 0) | ((ahi << 1) << ((31 - pow) | 0)));
      } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
        var pow$2 = ((31 - $uI(Math.clz32(bhi))) | 0);
        $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
        return ((ahi >>> pow$2) | 0);
      } else {
        return $uI($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 0));
      }
    }
    function $p_RTLong$__unsigned_$percent__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
      if ((((-2097152) & ahi) === 0)) {
        if ((((-2097152) & bhi) === 0)) {
          var aDouble = ((4.294967296E9 * ahi) + $uD((alo >>> 0.0)));
          var bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0.0)));
          var rDouble = (aDouble % bDouble);
          var x = (rDouble / 4.294967296E9);
          $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = $uI((x | 0.0));
          return $uI((rDouble | 0.0));
        } else {
          $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
          return alo;
        }
      } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
        $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
        return (alo & (((-1) + blo) | 0));
      } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
        $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (ahi & (((-1) + bhi) | 0));
        return alo;
      } else {
        return $uI($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 1));
      }
    }
    function $p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, ask) {
      var shift = ((((bhi !== 0) ? $uI(Math.clz32(bhi)) : ((32 + $uI(Math.clz32(blo))) | 0)) - ((ahi !== 0) ? $uI(Math.clz32(ahi)) : ((32 + $uI(Math.clz32(alo))) | 0))) | 0);
      var n = shift;
      var lo = (((32 & n) === 0) ? (blo << n) : 0);
      var hi = (((32 & n) === 0) ? (((((blo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (bhi << n)) : (blo << n));
      var bShiftLo = lo;
      var bShiftHi = hi;
      var remLo = alo;
      var remHi = ahi;
      var quotLo = 0;
      var quotHi = 0;
      while (((shift >= 0) && (((-2097152) & remHi) !== 0))) {
        var alo$1 = remLo;
        var ahi$1 = remHi;
        var blo$1 = bShiftLo;
        var bhi$1 = bShiftHi;
        if (((ahi$1 === bhi$1) ? (((-2147483648) ^ alo$1) >= ((-2147483648) ^ blo$1)) : (((-2147483648) ^ ahi$1) >= ((-2147483648) ^ bhi$1)))) {
          var lo$1 = remLo;
          var hi$1 = remHi;
          var lo$2 = bShiftLo;
          var hi$2 = bShiftHi;
          var lo$3 = ((lo$1 - lo$2) | 0);
          var hi$3 = ((((-2147483648) ^ lo$3) > ((-2147483648) ^ lo$1)) ? (((-1) + ((hi$1 - hi$2) | 0)) | 0) : ((hi$1 - hi$2) | 0));
          remLo = lo$3;
          remHi = hi$3;
          if ((shift < 32)) {
            quotLo = (quotLo | (1 << shift));
          } else {
            quotHi = (quotHi | (1 << shift));
          }
        }
        shift = (((-1) + shift) | 0);
        var lo$4 = bShiftLo;
        var hi$4 = bShiftHi;
        var lo$5 = (((lo$4 >>> 1) | 0) | (hi$4 << 31));
        var hi$5 = ((hi$4 >>> 1) | 0);
        bShiftLo = lo$5;
        bShiftHi = hi$5;
      }
      var alo$2 = remLo;
      var ahi$2 = remHi;
      if (((ahi$2 === bhi) ? (((-2147483648) ^ alo$2) >= ((-2147483648) ^ blo)) : (((-2147483648) ^ ahi$2) >= ((-2147483648) ^ bhi)))) {
        var lo$6 = remLo;
        var hi$6 = remHi;
        var remDouble = ((4.294967296E9 * hi$6) + $uD((lo$6 >>> 0.0)));
        var bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0.0)));
        if ((ask !== 1)) {
          var x = (remDouble / bDouble);
          var lo$7 = $uI((x | 0.0));
          var x$1 = (x / 4.294967296E9);
          var hi$7 = $uI((x$1 | 0.0));
          var lo$8 = quotLo;
          var hi$8 = quotHi;
          var lo$9 = ((lo$8 + lo$7) | 0);
          var hi$9 = ((((-2147483648) ^ lo$9) < ((-2147483648) ^ lo$8)) ? ((1 + ((hi$8 + hi$7) | 0)) | 0) : ((hi$8 + hi$7) | 0));
          quotLo = lo$9;
          quotHi = hi$9;
        }
        if ((ask !== 0)) {
          var rem_mod_bDouble = (remDouble % bDouble);
          remLo = $uI((rem_mod_bDouble | 0.0));
          var x$2 = (rem_mod_bDouble / 4.294967296E9);
          remHi = $uI((x$2 | 0.0));
        }
      }
      if ((ask === 0)) {
        $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = quotHi;
        return quotLo;
      } else if ((ask === 1)) {
        $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = remHi;
        return remLo;
      } else {
        var lo$10 = quotLo;
        var hi$10 = quotHi;
        var quot = ((4.294967296E9 * hi$10) + $uD((lo$10 >>> 0.0)));
        var this$7 = remLo;
        var remStr = ("" + this$7);
        var start = remStr.length;
        return ((("" + quot) + $as_T("000000000".substring(start))) + remStr);
      }
    }
    /** @constructor */
    function $c_RTLong$() {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
    }
    $c_RTLong$.prototype = new $h_O();
    $c_RTLong$.prototype.constructor = $c_RTLong$;
    $c_RTLong$.prototype;
    $c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T = (function(lo, hi) {
      return ((hi === (lo >> 31)) ? ("" + lo) : ((hi < 0) ? ("-" + $p_RTLong$__toUnsignedString__I__I__T(this, ((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)))) : $p_RTLong$__toUnsignedString__I__I__T(this, lo, hi)));
    });
    $c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D = (function(lo, hi) {
      if ((hi < 0)) {
        var x = ((lo !== 0) ? (~hi) : ((-hi) | 0));
        var $x_1 = $uD((x >>> 0.0));
        var x$1 = ((-lo) | 0);
        return (-((4.294967296E9 * $x_1) + $uD((x$1 >>> 0.0))));
      } else {
        return ((4.294967296E9 * hi) + $uD((lo >>> 0.0)));
      }
    });
    $c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$toFloat__I__I__F = (function(lo, hi) {
      if ((hi < 0)) {
        var lo$1 = ((-lo) | 0);
        var hi$1 = ((lo !== 0) ? (~hi) : ((-hi) | 0));
        var abs__lo = lo$1;
        var abs__hi = hi$1;
      } else {
        var abs__lo = lo;
        var abs__hi = hi;
      }
      var hi$2 = abs__hi;
      if (((((-2097152) & hi$2) === 0) || ((65535 & abs__lo) === 0))) {
        var compressedAbsLo = abs__lo;
      } else {
        var compressedAbsLo = (32768 | ((-65536) & abs__lo));
      }
      var x = abs__hi;
      var absRes = ((4.294967296E9 * $uD((x >>> 0.0))) + $uD((compressedAbsLo >>> 0.0)));
      return Math.fround(((hi < 0) ? (-absRes) : absRes));
    });
    $c_RTLong$.prototype.fromInt__I__RTLong = (function(value) {
      return new $c_RTLong(value, (value >> 31));
    });
    $c_RTLong$.prototype.fromDouble__D__RTLong = (function(value) {
      var lo = this.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(value);
      return new $c_RTLong(lo, this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn);
    });
    $c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I = (function(value) {
      if ((value < (-9223372036854776e3))) {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (-2147483648);
        return 0;
      } else if ((value >= 9.223372036854776E18)) {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 2147483647;
        return (-1);
      } else {
        var rawLo = $uI((value | 0.0));
        var x = (value / 4.294967296E9);
        var rawHi = $uI((x | 0.0));
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (((value < 0.0) && (rawLo !== 0)) ? (((-1) + rawHi) | 0) : rawHi);
        return rawLo;
      }
    });
    $c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
      return ((ahi === bhi) ? ((alo === blo) ? 0 : ((((-2147483648) ^ alo) < ((-2147483648) ^ blo)) ? (-1) : 1)) : ((ahi < bhi) ? (-1) : 1));
    });
    $c_RTLong$.prototype.divideImpl__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
      if (((blo | bhi) === 0)) {
        throw new $c_jl_ArithmeticException("/ by zero");
      }
      if ((ahi === (alo >> 31))) {
        if ((bhi === (blo >> 31))) {
          if (((alo === (-2147483648)) && (blo === (-1)))) {
            this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
            return (-2147483648);
          } else {
            var lo = $intDiv(alo, blo);
            this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (lo >> 31);
            return lo;
          }
        } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
          this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (-1);
          return (-1);
        } else {
          this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
          return 0;
        }
      } else {
        if ((ahi < 0)) {
          var lo$1 = ((-alo) | 0);
          var hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
          var aAbs__lo = lo$1;
          var aAbs__hi = hi;
        } else {
          var aAbs__lo = alo;
          var aAbs__hi = ahi;
        }
        if ((bhi < 0)) {
          var lo$2 = ((-blo) | 0);
          var hi$1 = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
          var bAbs__lo = lo$2;
          var bAbs__hi = hi$1;
        } else {
          var bAbs__lo = blo;
          var bAbs__hi = bhi;
        }
        var absRLo = $p_RTLong$__unsigned_$div__I__I__I__I__I(this, aAbs__lo, aAbs__hi, bAbs__lo, bAbs__hi);
        if (((ahi ^ bhi) >= 0)) {
          return absRLo;
        } else {
          var hi$2 = this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
          this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
          return ((-absRLo) | 0);
        }
      }
    });
    $c_RTLong$.prototype.remainderImpl__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
      if (((blo | bhi) === 0)) {
        throw new $c_jl_ArithmeticException("/ by zero");
      }
      if ((ahi === (alo >> 31))) {
        if ((bhi === (blo >> 31))) {
          if ((blo !== (-1))) {
            var lo = $intMod(alo, blo);
            this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (lo >> 31);
            return lo;
          } else {
            this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
            return 0;
          }
        } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
          this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
          return 0;
        } else {
          this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
          return alo;
        }
      } else {
        if ((ahi < 0)) {
          var lo$1 = ((-alo) | 0);
          var hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
          var aAbs__lo = lo$1;
          var aAbs__hi = hi;
        } else {
          var aAbs__lo = alo;
          var aAbs__hi = ahi;
        }
        if ((bhi < 0)) {
          var lo$2 = ((-blo) | 0);
          var hi$1 = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
          var bAbs__lo = lo$2;
          var bAbs__hi = hi$1;
        } else {
          var bAbs__lo = blo;
          var bAbs__hi = bhi;
        }
        var absRLo = $p_RTLong$__unsigned_$percent__I__I__I__I__I(this, aAbs__lo, aAbs__hi, bAbs__lo, bAbs__hi);
        if ((ahi < 0)) {
          var hi$2 = this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
          this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
          return ((-absRLo) | 0);
        } else {
          return absRLo;
        }
      }
    });
    new $TypeData().initClass($c_RTLong$, "org.scalajs.linker.runtime.RuntimeLong$", ({
      RTLong$: 1
    }));
    var $n_RTLong$;
    function $m_RTLong$() {
      if ((!$n_RTLong$)) {
        $n_RTLong$ = new $c_RTLong$();
      }
      return $n_RTLong$;
    }
    /** @constructor */
    function $c_s_Array$EmptyArrays$() {
      this.s_Array$EmptyArrays$__f_emptyIntArray = null;
      this.s_Array$EmptyArrays$__f_emptyObjectArray = null;
      $n_s_Array$EmptyArrays$ = this;
      this.s_Array$EmptyArrays$__f_emptyIntArray = new $ac_I(0);
      this.s_Array$EmptyArrays$__f_emptyObjectArray = new $ac_O(0);
    }
    $c_s_Array$EmptyArrays$.prototype = new $h_O();
    $c_s_Array$EmptyArrays$.prototype.constructor = $c_s_Array$EmptyArrays$;
    $c_s_Array$EmptyArrays$.prototype;
    new $TypeData().initClass($c_s_Array$EmptyArrays$, "scala.Array$EmptyArrays$", ({
      s_Array$EmptyArrays$: 1
    }));
    var $n_s_Array$EmptyArrays$;
    function $m_s_Array$EmptyArrays$() {
      if ((!$n_s_Array$EmptyArrays$)) {
        $n_s_Array$EmptyArrays$ = new $c_s_Array$EmptyArrays$();
      }
      return $n_s_Array$EmptyArrays$;
    }
    function $is_F1(obj) {
      return (!(!((obj && obj.$classData) && obj.$classData.ancestors.F1)));
    }
    function $as_F1(obj) {
      return (($is_F1(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Function1"));
    }
    /** @constructor */
    function $c_s_LowPriorityImplicits2() {
    }
    $c_s_LowPriorityImplicits2.prototype = new $h_O();
    $c_s_LowPriorityImplicits2.prototype.constructor = $c_s_LowPriorityImplicits2;
    /** @constructor */
    function $h_s_LowPriorityImplicits2() {
    }
    $h_s_LowPriorityImplicits2.prototype = $c_s_LowPriorityImplicits2.prototype;
    /** @constructor */
    function $c_sc_Hashing$() {
    }
    $c_sc_Hashing$.prototype = new $h_O();
    $c_sc_Hashing$.prototype.constructor = $c_sc_Hashing$;
    $c_sc_Hashing$.prototype;
    $c_sc_Hashing$.prototype.improve__I__I = (function(hcode) {
      var h = ((hcode + (~(hcode << 9))) | 0);
      h = (h ^ ((h >>> 14) | 0));
      h = ((h + (h << 4)) | 0);
      return (h ^ ((h >>> 10) | 0));
    });
    new $TypeData().initClass($c_sc_Hashing$, "scala.collection.Hashing$", ({
      sc_Hashing$: 1
    }));
    var $n_sc_Hashing$;
    function $m_sc_Hashing$() {
      if ((!$n_sc_Hashing$)) {
        $n_sc_Hashing$ = new $c_sc_Hashing$();
      }
      return $n_sc_Hashing$;
    }
    function $is_sc_IterableOnce(obj) {
      return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IterableOnce)));
    }
    function $as_sc_IterableOnce(obj) {
      return (($is_sc_IterableOnce(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IterableOnce"));
    }
    function $f_sc_IterableOnceOps__foreach__F1__V($thiz, f) {
      var it = $n($as_sc_IterableOnce($thiz)).iterator__sc_Iterator();
      while ($n(it).hasNext__Z()) {
        $n(f).apply__O__O($n(it).next__O());
      }
    }
    function $f_sc_IterableOnceOps__forall__F1__Z($thiz, p) {
      var res = true;
      var it = $n($as_sc_IterableOnce($thiz)).iterator__sc_Iterator();
      while ((res && $n(it).hasNext__Z())) {
        res = $uZ($n(p).apply__O__O($n(it).next__O()));
      }
      return res;
    }
    function $f_sc_IterableOnceOps__copyToArray__O__I__I__I($thiz, xs, start, len) {
      var it = $n($as_sc_IterableOnce($thiz)).iterator__sc_Iterator();
      var i = start;
      var y = (($m_jl_reflect_Array$().getLength__O__I(xs) - start) | 0);
      var end = ((start + ((len < y) ? len : y)) | 0);
      while (((i < end) && $n(it).hasNext__Z())) {
        $m_sr_ScalaRunTime$().array_update__O__I__O__V(xs, i, $n(it).next__O());
        i = ((1 + i) | 0);
      }
      return ((i - start) | 0);
    }
    function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
      if (($n($as_sc_IterableOnce($thiz)).knownSize__I() === 0)) {
        return (("" + start) + end);
      } else {
        var this$1 = $n($thiz.addString__scm_StringBuilder__T__T__T__scm_StringBuilder($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end));
        return $n(this$1.scm_StringBuilder__f_underlying).jl_StringBuilder__f_java$lang$StringBuilder$$content;
      }
    }
    function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
      var jsb = $n(b).scm_StringBuilder__f_underlying;
      var this$1 = $n(start);
      if ((this$1.length !== 0)) {
        var this$2 = $n(jsb);
        this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content) + start);
      }
      var it = $n($as_sc_IterableOnce($thiz)).iterator__sc_Iterator();
      if ($n(it).hasNext__Z()) {
        var this$3 = $n(jsb);
        var obj = $n(it).next__O();
        this$3.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$3.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj);
        while ($n(it).hasNext__Z()) {
          var this$4 = $n(jsb);
          this$4.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$4.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
          var this$5 = $n(jsb);
          var obj$1 = $n(it).next__O();
          this$5.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$5.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$1);
        }
      }
      var this$6 = $n(end);
      if ((this$6.length !== 0)) {
        var this$7 = $n(jsb);
        this$7.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$7.jl_StringBuilder__f_java$lang$StringBuilder$$content) + end);
      }
      return b;
    }
    /** @constructor */
    function $c_sc_Iterator$ConcatIteratorCell(head, tail) {
      this.sc_Iterator$ConcatIteratorCell__f_head = null;
      this.sc_Iterator$ConcatIteratorCell__f_tail = null;
      this.sc_Iterator$ConcatIteratorCell__f_head = head;
      this.sc_Iterator$ConcatIteratorCell__f_tail = tail;
    }
    $c_sc_Iterator$ConcatIteratorCell.prototype = new $h_O();
    $c_sc_Iterator$ConcatIteratorCell.prototype.constructor = $c_sc_Iterator$ConcatIteratorCell;
    $c_sc_Iterator$ConcatIteratorCell.prototype;
    $c_sc_Iterator$ConcatIteratorCell.prototype.headIterator__sc_Iterator = (function() {
      return $n($as_sc_IterableOnce($n(this.sc_Iterator$ConcatIteratorCell__f_head).apply__O())).iterator__sc_Iterator();
    });
    new $TypeData().initClass($c_sc_Iterator$ConcatIteratorCell, "scala.collection.Iterator$ConcatIteratorCell", ({
      sc_Iterator$ConcatIteratorCell: 1
    }));
    /** @constructor */
    function $c_scg_CommonErrors$() {
    }
    $c_scg_CommonErrors$.prototype = new $h_O();
    $c_scg_CommonErrors$.prototype.constructor = $c_scg_CommonErrors$;
    $c_scg_CommonErrors$.prototype;
    $c_scg_CommonErrors$.prototype.indexOutOfBounds__I__I__jl_IndexOutOfBoundsException = (function(index, max) {
      return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((index + " is out of bounds (min 0, max ") + max) + ")"));
    });
    new $TypeData().initClass($c_scg_CommonErrors$, "scala.collection.generic.CommonErrors$", ({
      scg_CommonErrors$: 1
    }));
    var $n_scg_CommonErrors$;
    function $m_scg_CommonErrors$() {
      if ((!$n_scg_CommonErrors$)) {
        $n_scg_CommonErrors$ = new $c_scg_CommonErrors$();
      }
      return $n_scg_CommonErrors$;
    }
    function $ps_sci_IndexedSeqDefaults$__liftedTree1$1__I() {
      try {
        var x = $m_jl_System$SystemProperties$().getProperty__T__T__T("scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength", "64");
        var this$4 = $m_jl_Integer$();
        return this$4.parseInt__T__I__I(x, 10);
      } catch (e) {
        {
          throw e;
        }
      }
    }
    /** @constructor */
    function $c_sci_IndexedSeqDefaults$() {
      this.sci_IndexedSeqDefaults$__f_defaultApplyPreferredMaxLength = 0;
      $n_sci_IndexedSeqDefaults$ = this;
      this.sci_IndexedSeqDefaults$__f_defaultApplyPreferredMaxLength = $ps_sci_IndexedSeqDefaults$__liftedTree1$1__I();
    }
    $c_sci_IndexedSeqDefaults$.prototype = new $h_O();
    $c_sci_IndexedSeqDefaults$.prototype.constructor = $c_sci_IndexedSeqDefaults$;
    $c_sci_IndexedSeqDefaults$.prototype;
    new $TypeData().initClass($c_sci_IndexedSeqDefaults$, "scala.collection.immutable.IndexedSeqDefaults$", ({
      sci_IndexedSeqDefaults$: 1
    }));
    var $n_sci_IndexedSeqDefaults$;
    function $m_sci_IndexedSeqDefaults$() {
      if ((!$n_sci_IndexedSeqDefaults$)) {
        $n_sci_IndexedSeqDefaults$ = new $c_sci_IndexedSeqDefaults$();
      }
      return $n_sci_IndexedSeqDefaults$;
    }
    /** @constructor */
    function $c_sci_MapNode$() {
      this.sci_MapNode$__f_EmptyMapNode = null;
      $n_sci_MapNode$ = this;
      this.sci_MapNode$__f_EmptyMapNode = new $c_sci_BitmapIndexedMapNode(0, 0, new $ac_O(0), new $ac_I(0), 0, 0);
    }
    $c_sci_MapNode$.prototype = new $h_O();
    $c_sci_MapNode$.prototype.constructor = $c_sci_MapNode$;
    $c_sci_MapNode$.prototype;
    new $TypeData().initClass($c_sci_MapNode$, "scala.collection.immutable.MapNode$", ({
      sci_MapNode$: 1
    }));
    var $n_sci_MapNode$;
    function $m_sci_MapNode$() {
      if ((!$n_sci_MapNode$)) {
        $n_sci_MapNode$ = new $c_sci_MapNode$();
      }
      return $n_sci_MapNode$;
    }
    function $p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException($thiz, as, ix) {
      return $ct_jl_ArrayIndexOutOfBoundsException__T__(new $c_jl_ArrayIndexOutOfBoundsException(), ((ix + " is out of bounds (min 0, max ") + (((-1) + $m_jl_reflect_Array$().getLength__O__I(as)) | 0)));
    }
    /** @constructor */
    function $c_sci_Node() {
    }
    $c_sci_Node.prototype = new $h_O();
    $c_sci_Node.prototype.constructor = $c_sci_Node;
    /** @constructor */
    function $h_sci_Node() {
    }
    $h_sci_Node.prototype = $c_sci_Node.prototype;
    $c_sci_Node.prototype.removeElement__AI__I__AI = (function(as, ix) {
      if ((ix < 0)) {
        throw $n($p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix));
      }
      if ((ix > (((-1) + $n(as).u.length) | 0))) {
        throw $n($p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix));
      }
      var result = new $ac_I((((-1) + $n(as).u.length) | 0));
      $systemArraycopy($n(as), 0, result, 0, ix);
      var srcPos = ((1 + ix) | 0);
      var length = (((-1) + (($n(as).u.length - ix) | 0)) | 0);
      $systemArraycopy($n(as), srcPos, result, ix, length);
      return result;
    });
    $c_sci_Node.prototype.insertElement__AI__I__I__AI = (function(as, ix, elem) {
      if ((ix < 0)) {
        throw $n($p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix));
      }
      if ((ix > $n(as).u.length)) {
        throw $n($p_sci_Node__arrayIndexOutOfBounds__O__I__jl_ArrayIndexOutOfBoundsException(this, as, ix));
      }
      var result = new $ac_I(((1 + $n(as).u.length) | 0));
      $systemArraycopy($n(as), 0, result, 0, ix);
      result.set(ix, elem);
      var destPos = ((1 + ix) | 0);
      var length = (($n(as).u.length - ix) | 0);
      $systemArraycopy($n(as), ix, result, destPos, length);
      return result;
    });
    var $d_sci_Node = new $TypeData().initClass(0, "scala.collection.immutable.Node", ({
      sci_Node: 1
    }));
    /** @constructor */
    function $c_sci_Node$() {
      this.sci_Node$__f_MaxDepth = 0;
      $n_sci_Node$ = this;
      this.sci_Node$__f_MaxDepth = $doubleToInt($uD(Math.ceil(6.4)));
    }
    $c_sci_Node$.prototype = new $h_O();
    $c_sci_Node$.prototype.constructor = $c_sci_Node$;
    $c_sci_Node$.prototype;
    $c_sci_Node$.prototype.maskFrom__I__I__I = (function(hash, shift) {
      return (31 & ((hash >>> shift) | 0));
    });
    $c_sci_Node$.prototype.bitposFrom__I__I = (function(mask) {
      return (1 << mask);
    });
    $c_sci_Node$.prototype.indexFrom__I__I__I = (function(bitmap, bitpos) {
      var i = (bitmap & (((-1) + bitpos) | 0));
      return $m_jl_Integer$().bitCount__I__I(i);
    });
    $c_sci_Node$.prototype.indexFrom__I__I__I__I = (function(bitmap, mask, bitpos) {
      return ((bitmap === (-1)) ? mask : this.indexFrom__I__I__I(bitmap, bitpos));
    });
    new $TypeData().initClass($c_sci_Node$, "scala.collection.immutable.Node$", ({
      sci_Node$: 1
    }));
    var $n_sci_Node$;
    function $m_sci_Node$() {
      if ((!$n_sci_Node$)) {
        $n_sci_Node$ = new $c_sci_Node$();
      }
      return $n_sci_Node$;
    }
    /** @constructor */
    function $c_sci_VectorStatics$() {
      this.sci_VectorStatics$__f_empty1 = null;
      this.sci_VectorStatics$__f_empty2 = null;
      this.sci_VectorStatics$__f_empty3 = null;
      this.sci_VectorStatics$__f_empty4 = null;
      this.sci_VectorStatics$__f_empty5 = null;
      this.sci_VectorStatics$__f_empty6 = null;
      $n_sci_VectorStatics$ = this;
      this.sci_VectorStatics$__f_empty1 = new $ac_O(0);
      this.sci_VectorStatics$__f_empty2 = new ($d_O.getArrayOf().getArrayOf().constr)(0);
      this.sci_VectorStatics$__f_empty3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(0);
      this.sci_VectorStatics$__f_empty4 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(0);
      this.sci_VectorStatics$__f_empty5 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(0);
      this.sci_VectorStatics$__f_empty6 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(0);
    }
    $c_sci_VectorStatics$.prototype = new $h_O();
    $c_sci_VectorStatics$.prototype.constructor = $c_sci_VectorStatics$;
    $c_sci_VectorStatics$.prototype;
    $c_sci_VectorStatics$.prototype.copyAppend1__AO__O__AO = (function(a, elem) {
      var alen = $n(a).u.length;
      var ac = new $ac_O(((1 + alen) | 0));
      $systemArraycopyRefs($n(a), 0, ac, 0, alen);
      ac.set(alen, elem);
      return ac;
    });
    $c_sci_VectorStatics$.prototype.copyAppend__AO__O__AO = (function(a, elem) {
      var newLength = ((1 + $n(a).u.length) | 0);
      var ac = $m_ju_Arrays$().copyOf__AO__I__AO(a, newLength);
      $n(ac).set((((-1) + $n(ac).u.length) | 0), elem);
      return ac;
    });
    $c_sci_VectorStatics$.prototype.copyPrepend__O__AO__AO = (function(elem, a) {
      var this$1 = $n(a);
      var this$2 = $objectGetClass(this$1);
      var componentType = this$2.data.getComponentType();
      var length = ((1 + $n(a).u.length) | 0);
      var ac = $asArrayOf_O($n(componentType).data.newArray(length), 1);
      var length$1 = $n(a).u.length;
      $systemArraycopyRefs($n(a), 0, $n(ac), 1, length$1);
      $n(ac).set(0, elem);
      return ac;
    });
    $c_sci_VectorStatics$.prototype.foreachRec__I__AO__F1__V = (function(level, a, f) {
      var i = 0;
      var len = $n(a).u.length;
      if ((level === 0)) {
        while ((i < len)) {
          $n(f).apply__O__O($n(a).get(i));
          i = ((1 + i) | 0);
        }
      } else {
        var l = (((-1) + level) | 0);
        while ((i < len)) {
          this.foreachRec__I__AO__F1__V(l, $asArrayOf_O($n(a).get(i), 1), f);
          i = ((1 + i) | 0);
        }
      }
    });
    new $TypeData().initClass($c_sci_VectorStatics$, "scala.collection.immutable.VectorStatics$", ({
      sci_VectorStatics$: 1
    }));
    var $n_sci_VectorStatics$;
    function $m_sci_VectorStatics$() {
      if ((!$n_sci_VectorStatics$)) {
        $n_sci_VectorStatics$ = new $c_sci_VectorStatics$();
      }
      return $n_sci_VectorStatics$;
    }
    /** @constructor */
    function $c_scm_MutationTracker$() {
    }
    $c_scm_MutationTracker$.prototype = new $h_O();
    $c_scm_MutationTracker$.prototype.constructor = $c_scm_MutationTracker$;
    $c_scm_MutationTracker$.prototype;
    $c_scm_MutationTracker$.prototype.checkMutations__I__I__T__V = (function(expectedCount, actualCount, message) {
      if ((actualCount !== expectedCount)) {
        throw new $c_ju_ConcurrentModificationException(message);
      }
    });
    new $TypeData().initClass($c_scm_MutationTracker$, "scala.collection.mutable.MutationTracker$", ({
      scm_MutationTracker$: 1
    }));
    var $n_scm_MutationTracker$;
    function $m_scm_MutationTracker$() {
      if ((!$n_scm_MutationTracker$)) {
        $n_scm_MutationTracker$ = new $c_scm_MutationTracker$();
      }
      return $n_scm_MutationTracker$;
    }
    function $p_s_concurrent_BatchingExecutor$AbstractBatch__ensureCapacity__I__Ajl_Runnable($thiz, curSize) {
      var curOther = $thiz.s_concurrent_BatchingExecutor$AbstractBatch__f_other;
      var curLen = $n(curOther).u.length;
      if ((curSize <= curLen)) {
        return curOther;
      } else {
        var newLen = ((curLen === 0) ? 4 : (curLen << 1));
        if ((newLen <= curLen)) {
          throw new $c_jl_StackOverflowError(("Space limit of asynchronous stack reached: " + curLen));
        }
        var newOther = new ($d_jl_Runnable.getArrayOf().constr)(newLen);
        $systemArraycopyRefs($n(curOther), 0, newOther, 0, curLen);
        $thiz.s_concurrent_BatchingExecutor$AbstractBatch__f_other = newOther;
        return newOther;
      }
    }
    function $ct_s_concurrent_BatchingExecutor$AbstractBatch__s_concurrent_BatchingExecutor__jl_Runnable__Ajl_Runnable__I__($thiz, outer, first, other, size) {
      $thiz.s_concurrent_BatchingExecutor$AbstractBatch__f_first = first;
      $thiz.s_concurrent_BatchingExecutor$AbstractBatch__f_other = other;
      $thiz.s_concurrent_BatchingExecutor$AbstractBatch__f_size = size;
      $n(outer);
      $thiz.s_concurrent_BatchingExecutor$AbstractBatch__f_$outer = outer;
      return $thiz;
    }
    /** @constructor */
    function $c_s_concurrent_BatchingExecutor$AbstractBatch() {
      this.s_concurrent_BatchingExecutor$AbstractBatch__f_first = null;
      this.s_concurrent_BatchingExecutor$AbstractBatch__f_other = null;
      this.s_concurrent_BatchingExecutor$AbstractBatch__f_size = 0;
      this.s_concurrent_BatchingExecutor$AbstractBatch__f_$outer = null;
    }
    $c_s_concurrent_BatchingExecutor$AbstractBatch.prototype = new $h_O();
    $c_s_concurrent_BatchingExecutor$AbstractBatch.prototype.constructor = $c_s_concurrent_BatchingExecutor$AbstractBatch;
    /** @constructor */
    function $h_s_concurrent_BatchingExecutor$AbstractBatch() {
    }
    $h_s_concurrent_BatchingExecutor$AbstractBatch.prototype = $c_s_concurrent_BatchingExecutor$AbstractBatch.prototype;
    $c_s_concurrent_BatchingExecutor$AbstractBatch.prototype.push__jl_Runnable__V = (function(r) {
      var sz = this.s_concurrent_BatchingExecutor$AbstractBatch__f_size;
      if ((sz === 0)) {
        this.s_concurrent_BatchingExecutor$AbstractBatch__f_first = r;
      } else {
        $n($p_s_concurrent_BatchingExecutor$AbstractBatch__ensureCapacity__I__Ajl_Runnable(this, sz)).set((((-1) + sz) | 0), r);
      }
      this.s_concurrent_BatchingExecutor$AbstractBatch__f_size = ((1 + sz) | 0);
    });
    $c_s_concurrent_BatchingExecutor$AbstractBatch.prototype.runN__I__V = (function(n) {
      while (true) {
        if ((n > 0)) {
          var x1 = this.s_concurrent_BatchingExecutor$AbstractBatch__f_size;
          switch (x1) {
            case 0: {
              break;
            }
            case 1: {
              var next = this.s_concurrent_BatchingExecutor$AbstractBatch__f_first;
              this.s_concurrent_BatchingExecutor$AbstractBatch__f_first = null;
              this.s_concurrent_BatchingExecutor$AbstractBatch__f_size = 0;
              $n(next).run__V();
              n = (((-1) + n) | 0);
              continue;
            }
            default: {
              var o = this.s_concurrent_BatchingExecutor$AbstractBatch__f_other;
              var next$2 = $n(o).get((((-2) + x1) | 0));
              $n(o).set((((-2) + x1) | 0), null);
              this.s_concurrent_BatchingExecutor$AbstractBatch__f_size = (((-1) + x1) | 0);
              $n(next$2).run__V();
              n = (((-1) + n) | 0);
              continue;
            }
          }
        }
        return (void 0);
      }
    });
    /** @constructor */
    function $c_s_concurrent_BatchingExecutorStatics$() {
      this.s_concurrent_BatchingExecutorStatics$__f_emptyBatchArray = null;
      $n_s_concurrent_BatchingExecutorStatics$ = this;
      this.s_concurrent_BatchingExecutorStatics$__f_emptyBatchArray = new ($d_jl_Runnable.getArrayOf().constr)(0);
    }
    $c_s_concurrent_BatchingExecutorStatics$.prototype = new $h_O();
    $c_s_concurrent_BatchingExecutorStatics$.prototype.constructor = $c_s_concurrent_BatchingExecutorStatics$;
    $c_s_concurrent_BatchingExecutorStatics$.prototype;
    new $TypeData().initClass($c_s_concurrent_BatchingExecutorStatics$, "scala.concurrent.BatchingExecutorStatics$", ({
      s_concurrent_BatchingExecutorStatics$: 1
    }));
    var $n_s_concurrent_BatchingExecutorStatics$;
    function $m_s_concurrent_BatchingExecutorStatics$() {
      if ((!$n_s_concurrent_BatchingExecutorStatics$)) {
        $n_s_concurrent_BatchingExecutorStatics$ = new $c_s_concurrent_BatchingExecutorStatics$();
      }
      return $n_s_concurrent_BatchingExecutorStatics$;
    }
    function $p_s_concurrent_ExecutionContext$__global$lzycompute__s_concurrent_ExecutionContextExecutor($thiz) {
      if ((!$thiz.s_concurrent_ExecutionContext$__f_bitmap$0)) {
        $thiz.s_concurrent_ExecutionContext$__f_global = $m_sjs_concurrent_JSExecutionContext$().sjs_concurrent_JSExecutionContext$__f_queue;
        $thiz.s_concurrent_ExecutionContext$__f_bitmap$0 = true;
      }
      return $thiz.s_concurrent_ExecutionContext$__f_global;
    }
    /** @constructor */
    function $c_s_concurrent_ExecutionContext$() {
      this.s_concurrent_ExecutionContext$__f_global = null;
      this.s_concurrent_ExecutionContext$__f_defaultReporter = null;
      this.s_concurrent_ExecutionContext$__f_bitmap$0 = false;
      $n_s_concurrent_ExecutionContext$ = this;
      this.s_concurrent_ExecutionContext$__f_defaultReporter = new $c_sjsr_AnonFunction1(((x$1$2$2) => {
        var x$1$2 = $as_jl_Throwable(x$1$2$2);
        var this$1 = $n(x$1$2);
        this$1.printStackTrace__Ljava_io_PrintStream__V($m_jl_System$Streams$().jl_System$Streams$__f_err);
      }));
    }
    $c_s_concurrent_ExecutionContext$.prototype = new $h_O();
    $c_s_concurrent_ExecutionContext$.prototype.constructor = $c_s_concurrent_ExecutionContext$;
    $c_s_concurrent_ExecutionContext$.prototype;
    $c_s_concurrent_ExecutionContext$.prototype.global__s_concurrent_ExecutionContextExecutor = (function() {
      return ((!this.s_concurrent_ExecutionContext$__f_bitmap$0) ? $p_s_concurrent_ExecutionContext$__global$lzycompute__s_concurrent_ExecutionContextExecutor(this) : this.s_concurrent_ExecutionContext$__f_global);
    });
    new $TypeData().initClass($c_s_concurrent_ExecutionContext$, "scala.concurrent.ExecutionContext$", ({
      s_concurrent_ExecutionContext$: 1
    }));
    var $n_s_concurrent_ExecutionContext$;
    function $m_s_concurrent_ExecutionContext$() {
      if ((!$n_s_concurrent_ExecutionContext$)) {
        $n_s_concurrent_ExecutionContext$ = new $c_s_concurrent_ExecutionContext$();
      }
      return $n_s_concurrent_ExecutionContext$;
    }
    /** @constructor */
    function $c_s_concurrent_Future$() {
      this.s_concurrent_Future$__f_collectFailed = null;
      this.s_concurrent_Future$__f_filterFailure = null;
      this.s_concurrent_Future$__f_failedFailure = null;
      this.s_concurrent_Future$__f_recoverWithFailedMarker = null;
      this.s_concurrent_Future$__f_recoverWithFailed = null;
      $n_s_concurrent_Future$ = this;
      var this$22 = $m_sci_Map$();
      var array = [new $c_T2($d_Z.getClassOf(), $d_jl_Boolean.getClassOf()), new $c_T2($d_B.getClassOf(), $d_jl_Byte.getClassOf()), new $c_T2($d_C.getClassOf(), $d_jl_Character.getClassOf()), new $c_T2($d_S.getClassOf(), $d_jl_Short.getClassOf()), new $c_T2($d_I.getClassOf(), $d_jl_Integer.getClassOf()), new $c_T2($d_J.getClassOf(), $d_jl_Long.getClassOf()), new $c_T2($d_F.getClassOf(), $d_jl_Float.getClassOf()), new $c_T2($d_D.getClassOf(), $d_jl_Double.getClassOf()), new $c_T2($d_V.getClassOf(), $d_jl_Void.getClassOf())];
      var elems = new $c_sjsr_WrappedVarArgs(array);
      this$22.from__sc_IterableOnce__sci_Map(elems);
      this.s_concurrent_Future$__f_collectFailed = new $c_sjsr_AnonFunction1(((t$2$2) => {
        throw new $c_s_concurrent_Future$$anon$1(t$2$2);
      }));
      this.s_concurrent_Future$__f_filterFailure = new $c_s_util_Failure(new $c_s_concurrent_Future$$anon$2());
      this.s_concurrent_Future$__f_failedFailure = new $c_s_util_Failure(new $c_s_concurrent_Future$$anon$3());
      this.fromTry__s_util_Try__s_concurrent_Future(this.s_concurrent_Future$__f_failedFailure);
      this.s_concurrent_Future$__f_recoverWithFailedMarker = this.failed__jl_Throwable__s_concurrent_Future(new $c_s_concurrent_Future$$anon$4());
      this.s_concurrent_Future$__f_recoverWithFailed = new $c_sjsr_AnonFunction1(((t$2$2$1) => {
        $as_jl_Throwable(t$2$2$1);
        return $m_s_concurrent_Future$().s_concurrent_Future$__f_recoverWithFailedMarker;
      }));
      this.fromTry__s_util_Try__s_concurrent_Future(new $c_s_util_Success((void 0)));
    }
    $c_s_concurrent_Future$.prototype = new $h_O();
    $c_s_concurrent_Future$.prototype.constructor = $c_s_concurrent_Future$;
    $c_s_concurrent_Future$.prototype;
    $c_s_concurrent_Future$.prototype.failed__jl_Throwable__s_concurrent_Future = (function(exception) {
      return $n($m_s_concurrent_Promise$().failed__jl_Throwable__s_concurrent_Promise(exception));
    });
    $c_s_concurrent_Future$.prototype.fromTry__s_util_Try__s_concurrent_Future = (function(result) {
      return $ct_s_concurrent_impl_Promise$DefaultPromise__s_util_Try__(new $c_s_concurrent_impl_Promise$DefaultPromise(), result);
    });
    new $TypeData().initClass($c_s_concurrent_Future$, "scala.concurrent.Future$", ({
      s_concurrent_Future$: 1
    }));
    var $n_s_concurrent_Future$;
    function $m_s_concurrent_Future$() {
      if ((!$n_s_concurrent_Future$)) {
        $n_s_concurrent_Future$ = new $c_s_concurrent_Future$();
      }
      return $n_s_concurrent_Future$;
    }
    function $f_s_concurrent_Promise__complete__s_util_Try__s_concurrent_Promise($thiz, result) {
      if ($thiz.tryComplete__s_util_Try__Z(result)) {
        return $thiz;
      } else {
        throw new $c_jl_IllegalStateException("Promise already completed.");
      }
    }
    function $f_s_concurrent_Promise__success__O__s_concurrent_Promise($thiz, value) {
      var result = new $c_s_util_Success(value);
      return $f_s_concurrent_Promise__complete__s_util_Try__s_concurrent_Promise($thiz, result);
    }
    function $f_s_concurrent_Promise__failure__jl_Throwable__s_concurrent_Promise($thiz, cause) {
      var result = new $c_s_util_Failure(cause);
      return $f_s_concurrent_Promise__complete__s_util_Try__s_concurrent_Promise($thiz, result);
    }
    /** @constructor */
    function $c_s_concurrent_Promise$() {
    }
    $c_s_concurrent_Promise$.prototype = new $h_O();
    $c_s_concurrent_Promise$.prototype.constructor = $c_s_concurrent_Promise$;
    $c_s_concurrent_Promise$.prototype;
    $c_s_concurrent_Promise$.prototype.failed__jl_Throwable__s_concurrent_Promise = (function(exception) {
      var result = new $c_s_util_Failure(exception);
      return $ct_s_concurrent_impl_Promise$DefaultPromise__s_util_Try__(new $c_s_concurrent_impl_Promise$DefaultPromise(), result);
    });
    new $TypeData().initClass($c_s_concurrent_Promise$, "scala.concurrent.Promise$", ({
      s_concurrent_Promise$: 1
    }));
    var $n_s_concurrent_Promise$;
    function $m_s_concurrent_Promise$() {
      if ((!$n_s_concurrent_Promise$)) {
        $n_s_concurrent_Promise$ = new $c_s_concurrent_Promise$();
      }
      return $n_s_concurrent_Promise$;
    }
    /** @constructor */
    function $c_s_concurrent_impl_Promise$() {
      this.s_concurrent_impl_Promise$__f_scala$concurrent$impl$Promise$$Noop = null;
      $n_s_concurrent_impl_Promise$ = this;
      this.s_concurrent_impl_Promise$__f_scala$concurrent$impl$Promise$$Noop = $ct_s_concurrent_impl_Promise$Transformation__I__F1__s_concurrent_ExecutionContext__(new $c_s_concurrent_impl_Promise$Transformation(), 0, null, $m_s_concurrent_ExecutionContext$parasitic$());
    }
    $c_s_concurrent_impl_Promise$.prototype = new $h_O();
    $c_s_concurrent_impl_Promise$.prototype.constructor = $c_s_concurrent_impl_Promise$;
    $c_s_concurrent_impl_Promise$.prototype;
    $c_s_concurrent_impl_Promise$.prototype.scala$concurrent$impl$Promise$$resolve__s_util_Try__s_util_Try = (function(value) {
      if ((value === null)) {
        throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
      }
      if ((value instanceof $c_s_util_Success)) {
        return value;
      } else {
        var t = $n($as_s_util_Failure(value)).s_util_Failure__f_exception;
        return (((t instanceof $c_jl_Error)) ? (new $c_s_util_Failure(new $c_ju_concurrent_ExecutionException("Boxed Exception", t))) : value);
      }
    });
    new $TypeData().initClass($c_s_concurrent_impl_Promise$, "scala.concurrent.impl.Promise$", ({
      s_concurrent_impl_Promise$: 1
    }));
    var $n_s_concurrent_impl_Promise$;
    function $m_s_concurrent_impl_Promise$() {
      if ((!$n_s_concurrent_impl_Promise$)) {
        $n_s_concurrent_impl_Promise$ = new $c_s_concurrent_impl_Promise$();
      }
      return $n_s_concurrent_impl_Promise$;
    }
    function $is_s_concurrent_impl_Promise$Callbacks(obj) {
      return (!(!((obj && obj.$classData) && obj.$classData.ancestors.s_concurrent_impl_Promise$Callbacks)));
    }
    function $as_s_concurrent_impl_Promise$Callbacks(obj) {
      return (($is_s_concurrent_impl_Promise$Callbacks(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.concurrent.impl.Promise$Callbacks"));
    }
    /** @constructor */
    function $c_sr_BoxesRunTime$() {
    }
    $c_sr_BoxesRunTime$.prototype = new $h_O();
    $c_sr_BoxesRunTime$.prototype.constructor = $c_sr_BoxesRunTime$;
    $c_sr_BoxesRunTime$.prototype;
    $c_sr_BoxesRunTime$.prototype.equals__O__O__Z = (function(x, y) {
      if ((x === y)) {
        return true;
      } else if ($is_jl_Number(x)) {
        var x2 = $as_jl_Number(x);
        return this.equalsNumObject__jl_Number__O__Z(x2, y);
      } else if ((x instanceof $Char)) {
        var x3 = $as_jl_Character(x);
        return this.equalsCharObject__jl_Character__O__Z(x3, y);
      } else {
        return ((x === null) ? (y === null) : $dp_equals__O__Z($n(x), y));
      }
    });
    $c_sr_BoxesRunTime$.prototype.equalsNumObject__jl_Number__O__Z = (function(xn, y) {
      if ($is_jl_Number(y)) {
        var x2 = $as_jl_Number(y);
        return this.equalsNumNum__jl_Number__jl_Number__Z(xn, x2);
      } else if ((y instanceof $Char)) {
        var x3 = $as_jl_Character(y);
        if (((typeof xn) === "number")) {
          var x2$1 = $uD(xn);
          var this$1$1 = $n(x3).c;
          return (x2$1 === this$1$1);
        } else if ((xn instanceof $c_RTLong)) {
          var t = $uJ(xn);
          var lo = t.RTLong__f_lo;
          var hi = t.RTLong__f_hi;
          var this$2 = $n(x3).c;
          var value = this$2;
          var hi$1 = (value >> 31);
          return ((lo === value) && (hi === hi$1));
        } else {
          return ((xn === null) ? (x3 === null) : $dp_equals__O__Z($n(xn), x3));
        }
      } else {
        return ((xn === null) ? (y === null) : $dp_equals__O__Z($n(xn), y));
      }
    });
    $c_sr_BoxesRunTime$.prototype.equalsNumNum__jl_Number__jl_Number__Z = (function(xn, yn) {
      if (((typeof xn) === "number")) {
        var x2 = $uD(xn);
        if (((typeof yn) === "number")) {
          var x2$2 = $uD(yn);
          return (x2 === x2$2);
        } else if ((yn instanceof $c_RTLong)) {
          var t = $uJ(yn);
          var lo = t.RTLong__f_lo;
          var hi = t.RTLong__f_hi;
          return (x2 === $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi));
        } else {
          return false;
        }
      } else if ((xn instanceof $c_RTLong)) {
        var t$1 = $uJ(xn);
        var lo$1 = t$1.RTLong__f_lo;
        var hi$1 = t$1.RTLong__f_hi;
        if ((yn instanceof $c_RTLong)) {
          var t$2 = $uJ(yn);
          var lo$2 = t$2.RTLong__f_lo;
          var hi$2 = t$2.RTLong__f_hi;
          return ((lo$1 === lo$2) && (hi$1 === hi$2));
        } else if (((typeof yn) === "number")) {
          var x3$3 = $uD(yn);
          return ($m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo$1, hi$1) === x3$3);
        } else {
          return false;
        }
      } else {
        return ((xn === null) ? (yn === null) : $dp_equals__O__Z($n(xn), yn));
      }
    });
    $c_sr_BoxesRunTime$.prototype.equalsCharObject__jl_Character__O__Z = (function(xc, y) {
      if ((y instanceof $Char)) {
        var x2 = $as_jl_Character(y);
        var this$1 = $n(xc).c;
        var this$2 = $n(x2).c;
        return (this$1 === this$2);
      } else if ($is_jl_Number(y)) {
        var x3 = $as_jl_Number(y);
        if (((typeof x3) === "number")) {
          var x2$1 = $uD(x3);
          var this$3 = $n(xc).c;
          return (x2$1 === this$3);
        } else if ((x3 instanceof $c_RTLong)) {
          var t = $uJ(x3);
          var lo = t.RTLong__f_lo;
          var hi = t.RTLong__f_hi;
          var this$4 = $n(xc).c;
          var value = this$4;
          var hi$1 = (value >> 31);
          return ((lo === value) && (hi === hi$1));
        } else {
          return ((x3 === null) ? (xc === null) : $dp_equals__O__Z($n(x3), xc));
        }
      } else {
        return ((xc === null) && (y === null));
      }
    });
    new $TypeData().initClass($c_sr_BoxesRunTime$, "scala.runtime.BoxesRunTime$", ({
      sr_BoxesRunTime$: 1
    }));
    var $n_sr_BoxesRunTime$;
    function $m_sr_BoxesRunTime$() {
      if ((!$n_sr_BoxesRunTime$)) {
        $n_sr_BoxesRunTime$ = new $c_sr_BoxesRunTime$();
      }
      return $n_sr_BoxesRunTime$;
    }
    var $d_sr_Null$ = new $TypeData().initClass(0, "scala.runtime.Null$", ({
      sr_Null$: 1
    }));
    /** @constructor */
    function $c_sr_ScalaRunTime$() {
    }
    $c_sr_ScalaRunTime$.prototype = new $h_O();
    $c_sr_ScalaRunTime$.prototype.constructor = $c_sr_ScalaRunTime$;
    $c_sr_ScalaRunTime$.prototype;
    $c_sr_ScalaRunTime$.prototype.array_apply__O__I__O = (function(xs, idx) {
      if ((xs instanceof $ac_O)) {
        var x2 = $asArrayOf_O(xs, 1);
        return $n(x2).get(idx);
      } else if ((xs instanceof $ac_I)) {
        var x3 = $asArrayOf_I(xs, 1);
        return $n(x3).get(idx);
      } else if ((xs instanceof $ac_D)) {
        var x4 = $asArrayOf_D(xs, 1);
        return $n(x4).get(idx);
      } else if ((xs instanceof $ac_J)) {
        var x5 = $asArrayOf_J(xs, 1);
        return $n(x5).get(idx);
      } else if ((xs instanceof $ac_F)) {
        var x6 = $asArrayOf_F(xs, 1);
        return $n(x6).get(idx);
      } else if ((xs instanceof $ac_C)) {
        var x7 = $asArrayOf_C(xs, 1);
        return $bC($n(x7).get(idx));
      } else if ((xs instanceof $ac_B)) {
        var x8 = $asArrayOf_B(xs, 1);
        return $n(x8).get(idx);
      } else if ((xs instanceof $ac_S)) {
        var x9 = $asArrayOf_S(xs, 1);
        return $n(x9).get(idx);
      } else if ((xs instanceof $ac_Z)) {
        var x10 = $asArrayOf_Z(xs, 1);
        return $n(x10).get(idx);
      } else if ((xs === null)) {
        throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
      } else {
        throw new $c_s_MatchError(xs);
      }
    });
    $c_sr_ScalaRunTime$.prototype.array_update__O__I__O__V = (function(xs, idx, value) {
      if ((xs instanceof $ac_O)) {
        var x2 = $asArrayOf_O(xs, 1);
        $n(x2).set(idx, value);
      } else if ((xs instanceof $ac_I)) {
        var x3 = $asArrayOf_I(xs, 1);
        $n(x3).set(idx, $uI(value));
      } else if ((xs instanceof $ac_D)) {
        var x4 = $asArrayOf_D(xs, 1);
        $n(x4).set(idx, $uD(value));
      } else if ((xs instanceof $ac_J)) {
        var x5 = $asArrayOf_J(xs, 1);
        $n(x5).set(idx, $uJ(value));
      } else if ((xs instanceof $ac_F)) {
        var x6 = $asArrayOf_F(xs, 1);
        $n(x6).set(idx, $uF(value));
      } else if ((xs instanceof $ac_C)) {
        var x7 = $asArrayOf_C(xs, 1);
        $n(x7).set(idx, $uC(value));
      } else if ((xs instanceof $ac_B)) {
        var x8 = $asArrayOf_B(xs, 1);
        $n(x8).set(idx, $uB(value));
      } else if ((xs instanceof $ac_S)) {
        var x9 = $asArrayOf_S(xs, 1);
        $n(x9).set(idx, $uS(value));
      } else if ((xs instanceof $ac_Z)) {
        var x10 = $asArrayOf_Z(xs, 1);
        $n(x10).set(idx, $uZ(value));
      } else if ((xs === null)) {
        throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
      } else {
        throw new $c_s_MatchError(xs);
      }
    });
    $c_sr_ScalaRunTime$.prototype._toString__s_Product__T = (function(x) {
      var this$1 = $n($n(x).productIterator__sc_Iterator());
      var start = ($n(x).productPrefix__T() + "(");
      return $f_sc_IterableOnceOps__mkString__T__T__T__T(this$1, start, ",", ")");
    });
    $c_sr_ScalaRunTime$.prototype.wrapRefArray__AO__sci_ArraySeq = (function(xs) {
      if ((xs === null)) {
        return null;
      } else if (($n(xs).u.length === 0)) {
        var this$1 = $m_sci_ArraySeq$();
        return $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef(this$1);
      } else {
        return new $c_sci_ArraySeq$ofRef(xs);
      }
    });
    new $TypeData().initClass($c_sr_ScalaRunTime$, "scala.runtime.ScalaRunTime$", ({
      sr_ScalaRunTime$: 1
    }));
    var $n_sr_ScalaRunTime$;
    function $m_sr_ScalaRunTime$() {
      if ((!$n_sr_ScalaRunTime$)) {
        $n_sr_ScalaRunTime$ = new $c_sr_ScalaRunTime$();
      }
      return $n_sr_ScalaRunTime$;
    }
    /** @constructor */
    function $c_sr_Statics$() {
    }
    $c_sr_Statics$.prototype = new $h_O();
    $c_sr_Statics$.prototype.constructor = $c_sr_Statics$;
    $c_sr_Statics$.prototype;
    $c_sr_Statics$.prototype.mix__I__I__I = (function(hash, data) {
      var h = this.mixLast__I__I__I(hash, data);
      var i = h;
      h = ((i << 13) | ((i >>> 19) | 0));
      return (((-430675100) + Math.imul(5, h)) | 0);
    });
    $c_sr_Statics$.prototype.mixLast__I__I__I = (function(hash, data) {
      var k = data;
      k = Math.imul((-862048943), k);
      var i = k;
      k = ((i << 15) | ((i >>> 17) | 0));
      k = Math.imul(461845907, k);
      return (hash ^ k);
    });
    $c_sr_Statics$.prototype.finalizeHash__I__I__I = (function(hash, length) {
      return this.avalanche__I__I((hash ^ length));
    });
    $c_sr_Statics$.prototype.avalanche__I__I = (function(h0) {
      var h = h0;
      h = (h ^ ((h >>> 16) | 0));
      h = Math.imul((-2048144789), h);
      h = (h ^ ((h >>> 13) | 0));
      h = Math.imul((-1028477387), h);
      h = (h ^ ((h >>> 16) | 0));
      return h;
    });
    $c_sr_Statics$.prototype.longHash__J__I = (function(lv) {
      var lo = lv.RTLong__f_lo;
      var hi = lv.RTLong__f_hi;
      return ((hi === (lo >> 31)) ? lo : (lo ^ hi));
    });
    $c_sr_Statics$.prototype.doubleHash__D__I = (function(dv) {
      var iv = $doubleToInt(dv);
      if ((iv === dv)) {
        return iv;
      } else {
        var this$1 = $m_RTLong$();
        var lo = this$1.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(dv);
        var hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
        return (($m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi) === dv) ? (lo ^ hi) : $m_jl_FloatingPointBits$().numberHashCode__D__I(dv));
      }
    });
    $c_sr_Statics$.prototype.anyHash__O__I = (function(x) {
      if ((x === null)) {
        return 0;
      } else if (((typeof x) === "number")) {
        var x3 = $uD(x);
        return this.doubleHash__D__I(x3);
      } else if ((x instanceof $c_RTLong)) {
        var t = $uJ(x);
        var lo = t.RTLong__f_lo;
        var hi = t.RTLong__f_hi;
        return this.longHash__J__I(new $c_RTLong(lo, hi));
      } else {
        return $dp_hashCode__I($n(x));
      }
    });
    $c_sr_Statics$.prototype.ioobe__I__O = (function(n) {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
    });
    new $TypeData().initClass($c_sr_Statics$, "scala.runtime.Statics$", ({
      sr_Statics$: 1
    }));
    var $n_sr_Statics$;
    function $m_sr_Statics$() {
      if ((!$n_sr_Statics$)) {
        $n_sr_Statics$ = new $c_sr_Statics$();
      }
      return $n_sr_Statics$;
    }
    /** @constructor */
    function $c_sr_Statics$PFMarker$() {
    }
    $c_sr_Statics$PFMarker$.prototype = new $h_O();
    $c_sr_Statics$PFMarker$.prototype.constructor = $c_sr_Statics$PFMarker$;
    $c_sr_Statics$PFMarker$.prototype;
    new $TypeData().initClass($c_sr_Statics$PFMarker$, "scala.runtime.Statics$PFMarker$", ({
      sr_Statics$PFMarker$: 1
    }));
    var $n_sr_Statics$PFMarker$;
    function $m_sr_Statics$PFMarker$() {
      if ((!$n_sr_Statics$PFMarker$)) {
        $n_sr_Statics$PFMarker$ = new $c_sr_Statics$PFMarker$();
      }
      return $n_sr_Statics$PFMarker$;
    }
    /** @constructor */
    function $c_sjs_concurrent_JSExecutionContext$() {
      this.sjs_concurrent_JSExecutionContext$__f_queue = null;
      $n_sjs_concurrent_JSExecutionContext$ = this;
      this.sjs_concurrent_JSExecutionContext$__f_queue = $m_sjs_concurrent_QueueExecutionContext$().apply__s_concurrent_ExecutionContextExecutor();
    }
    $c_sjs_concurrent_JSExecutionContext$.prototype = new $h_O();
    $c_sjs_concurrent_JSExecutionContext$.prototype.constructor = $c_sjs_concurrent_JSExecutionContext$;
    $c_sjs_concurrent_JSExecutionContext$.prototype;
    new $TypeData().initClass($c_sjs_concurrent_JSExecutionContext$, "scala.scalajs.concurrent.JSExecutionContext$", ({
      sjs_concurrent_JSExecutionContext$: 1
    }));
    var $n_sjs_concurrent_JSExecutionContext$;
    function $m_sjs_concurrent_JSExecutionContext$() {
      if ((!$n_sjs_concurrent_JSExecutionContext$)) {
        $n_sjs_concurrent_JSExecutionContext$ = new $c_sjs_concurrent_JSExecutionContext$();
      }
      return $n_sjs_concurrent_JSExecutionContext$;
    }
    /** @constructor */
    function $c_sjs_concurrent_QueueExecutionContext$() {
    }
    $c_sjs_concurrent_QueueExecutionContext$.prototype = new $h_O();
    $c_sjs_concurrent_QueueExecutionContext$.prototype.constructor = $c_sjs_concurrent_QueueExecutionContext$;
    $c_sjs_concurrent_QueueExecutionContext$.prototype;
    $c_sjs_concurrent_QueueExecutionContext$.prototype.apply__s_concurrent_ExecutionContextExecutor = (function() {
      return (($as_T((typeof Promise)) === "undefined") ? new $c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext() : new $c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext());
    });
    new $TypeData().initClass($c_sjs_concurrent_QueueExecutionContext$, "scala.scalajs.concurrent.QueueExecutionContext$", ({
      sjs_concurrent_QueueExecutionContext$: 1
    }));
    var $n_sjs_concurrent_QueueExecutionContext$;
    function $m_sjs_concurrent_QueueExecutionContext$() {
      if ((!$n_sjs_concurrent_QueueExecutionContext$)) {
        $n_sjs_concurrent_QueueExecutionContext$ = new $c_sjs_concurrent_QueueExecutionContext$();
      }
      return $n_sjs_concurrent_QueueExecutionContext$;
    }
    /** @constructor */
    function $c_sjs_js_Thenable$ThenableOps$() {
    }
    $c_sjs_js_Thenable$ThenableOps$.prototype = new $h_O();
    $c_sjs_js_Thenable$ThenableOps$.prototype.constructor = $c_sjs_js_Thenable$ThenableOps$;
    $c_sjs_js_Thenable$ThenableOps$.prototype;
    $c_sjs_js_Thenable$ThenableOps$.prototype.toFuture$extension__sjs_js_Thenable__s_concurrent_Future = (function(this$) {
      var p2 = $ct_s_concurrent_impl_Promise$DefaultPromise__(new $c_s_concurrent_impl_Promise$DefaultPromise());
      this$.then(((arg1$2) => {
        $f_s_concurrent_Promise__success__O__s_concurrent_Promise(p2, arg1$2);
      }), $m_sjs_js_defined$().apply__O__sjs_js_$bar(((arg1$2$1) => {
        var cause = ((arg1$2$1 instanceof $c_jl_Throwable) ? arg1$2$1 : new $c_sjs_js_JavaScriptException(arg1$2$1));
        $f_s_concurrent_Promise__failure__jl_Throwable__s_concurrent_Promise(p2, cause);
      })));
      return p2;
    });
    new $TypeData().initClass($c_sjs_js_Thenable$ThenableOps$, "scala.scalajs.js.Thenable$ThenableOps$", ({
      sjs_js_Thenable$ThenableOps$: 1
    }));
    var $n_sjs_js_Thenable$ThenableOps$;
    function $m_sjs_js_Thenable$ThenableOps$() {
      if ((!$n_sjs_js_Thenable$ThenableOps$)) {
        $n_sjs_js_Thenable$ThenableOps$ = new $c_sjs_js_Thenable$ThenableOps$();
      }
      return $n_sjs_js_Thenable$ThenableOps$;
    }
    /** @constructor */
    function $c_sjs_js_defined$() {
    }
    $c_sjs_js_defined$.prototype = new $h_O();
    $c_sjs_js_defined$.prototype.constructor = $c_sjs_js_defined$;
    $c_sjs_js_defined$.prototype;
    $c_sjs_js_defined$.prototype.apply__O__sjs_js_$bar = (function(a) {
      return a;
    });
    new $TypeData().initClass($c_sjs_js_defined$, "scala.scalajs.js.defined$", ({
      sjs_js_defined$: 1
    }));
    var $n_sjs_js_defined$;
    function $m_sjs_js_defined$() {
      if ((!$n_sjs_js_defined$)) {
        $n_sjs_js_defined$ = new $c_sjs_js_defined$();
      }
      return $n_sjs_js_defined$;
    }
    /** @constructor */
    function $c_sjs_js_special_package$() {
    }
    $c_sjs_js_special_package$.prototype = new $h_O();
    $c_sjs_js_special_package$.prototype.constructor = $c_sjs_js_special_package$;
    $c_sjs_js_special_package$.prototype;
    $c_sjs_js_special_package$.prototype.objectLiteral__sci_Seq__sjs_js_Object = (function(properties) {
      var result = ({});
      $n(properties).foreach__F1__V(new $c_sjsr_AnonFunction1(((pair$2$2) => {
        var pair$2 = $as_T2(pair$2$2);
        result[$n(pair$2).T2__f__1] = $n(pair$2).T2__f__2;
      })));
      return result;
    });
    new $TypeData().initClass($c_sjs_js_special_package$, "scala.scalajs.js.special.package$", ({
      sjs_js_special_package$: 1
    }));
    var $n_sjs_js_special_package$;
    function $m_sjs_js_special_package$() {
      if ((!$n_sjs_js_special_package$)) {
        $n_sjs_js_special_package$ = new $c_sjs_js_special_package$();
      }
      return $n_sjs_js_special_package$;
    }
    /** @constructor */
    function $c_s_util_DynamicVariable(init) {
      this.s_util_DynamicVariable__f_v = null;
      this.s_util_DynamicVariable__f_v = init;
    }
    $c_s_util_DynamicVariable.prototype = new $h_O();
    $c_s_util_DynamicVariable.prototype.constructor = $c_s_util_DynamicVariable;
    $c_s_util_DynamicVariable.prototype;
    $c_s_util_DynamicVariable.prototype.toString__T = (function() {
      return (("DynamicVariable(" + this.s_util_DynamicVariable__f_v) + ")");
    });
    new $TypeData().initClass($c_s_util_DynamicVariable, "scala.util.DynamicVariable", ({
      s_util_DynamicVariable: 1
    }));
    function $f_s_util_control_NoStackTrace__fillInStackTrace__jl_Throwable($thiz) {
      var this$1 = $m_s_util_control_NoStackTrace$();
      if (this$1.s_util_control_NoStackTrace$__f__noSuppression) {
        return $c_jl_Throwable.prototype.fillInStackTrace__jl_Throwable.call($thiz);
      } else {
        return $as_jl_Throwable($thiz);
      }
    }
    /** @constructor */
    function $c_s_util_control_NonFatal$() {
    }
    $c_s_util_control_NonFatal$.prototype = new $h_O();
    $c_s_util_control_NonFatal$.prototype.constructor = $c_s_util_control_NonFatal$;
    $c_s_util_control_NonFatal$.prototype;
    $c_s_util_control_NonFatal$.prototype.apply__jl_Throwable__Z = (function(t) {
      return (!((t instanceof $c_jl_VirtualMachineError) || (((false)))));
    });
    new $TypeData().initClass($c_s_util_control_NonFatal$, "scala.util.control.NonFatal$", ({
      s_util_control_NonFatal$: 1
    }));
    var $n_s_util_control_NonFatal$;
    function $m_s_util_control_NonFatal$() {
      if ((!$n_s_util_control_NonFatal$)) {
        $n_s_util_control_NonFatal$ = new $c_s_util_control_NonFatal$();
      }
      return $n_s_util_control_NonFatal$;
    }
    /** @constructor */
    function $c_s_util_hashing_MurmurHash3() {
    }
    $c_s_util_hashing_MurmurHash3.prototype = new $h_O();
    $c_s_util_hashing_MurmurHash3.prototype.constructor = $c_s_util_hashing_MurmurHash3;
    /** @constructor */
    function $h_s_util_hashing_MurmurHash3() {
    }
    $h_s_util_hashing_MurmurHash3.prototype = $c_s_util_hashing_MurmurHash3.prototype;
    $c_s_util_hashing_MurmurHash3.prototype.mix__I__I__I = (function(hash, data) {
      var h = this.mixLast__I__I__I(hash, data);
      var i = h;
      h = ((i << 13) | ((i >>> 19) | 0));
      return (((-430675100) + Math.imul(5, h)) | 0);
    });
    $c_s_util_hashing_MurmurHash3.prototype.mixLast__I__I__I = (function(hash, data) {
      var k = data;
      k = Math.imul((-862048943), k);
      var i = k;
      k = ((i << 15) | ((i >>> 17) | 0));
      k = Math.imul(461845907, k);
      return (hash ^ k);
    });
    $c_s_util_hashing_MurmurHash3.prototype.finalizeHash__I__I__I = (function(hash, length) {
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I((hash ^ length));
    });
    $c_s_util_hashing_MurmurHash3.prototype.scala$util$hashing$MurmurHash3$$avalanche__I__I = (function(hash) {
      var h = hash;
      h = (h ^ ((h >>> 16) | 0));
      h = Math.imul((-2048144789), h);
      h = (h ^ ((h >>> 13) | 0));
      h = Math.imul((-1028477387), h);
      h = (h ^ ((h >>> 16) | 0));
      return h;
    });
    $c_s_util_hashing_MurmurHash3.prototype.tuple2Hash__I__I__I__I = (function(x, y, seed) {
      var h = seed;
      h = this.mix__I__I__I(h, $f_T__hashCode__I("Tuple2"));
      h = this.mix__I__I__I(h, x);
      h = this.mix__I__I__I(h, y);
      return this.finalizeHash__I__I__I(h, 2);
    });
    $c_s_util_hashing_MurmurHash3.prototype.productHash__s_Product__I__Z__I = (function(x, seed, ignorePrefix) {
      var arr = $n(x).productArity__I();
      if ((arr === 0)) {
        return $f_T__hashCode__I($n($n(x).productPrefix__T()));
      } else {
        var h = seed;
        if ((!ignorePrefix)) {
          h = this.mix__I__I__I(h, $f_T__hashCode__I($n($n(x).productPrefix__T())));
        }
        var i = 0;
        while ((i < arr)) {
          var $x_1 = h;
          var x$1 = $n(x).productElement__I__O(i);
          h = this.mix__I__I__I($x_1, $m_sr_Statics$().anyHash__O__I(x$1));
          i = ((1 + i) | 0);
        }
        return this.finalizeHash__I__I__I(h, arr);
      }
    });
    $c_s_util_hashing_MurmurHash3.prototype.unorderedHash__sc_IterableOnce__I__I = (function(xs, seed) {
      var a = 0;
      var b = 0;
      var n = 0;
      var c = 1;
      var iterator = $n(xs).iterator__sc_Iterator();
      while ($n(iterator).hasNext__Z()) {
        var x = $n(iterator).next__O();
        var h = $m_sr_Statics$().anyHash__O__I(x);
        a = ((a + h) | 0);
        b = (b ^ h);
        c = Math.imul(c, (1 | h));
        n = ((1 + n) | 0);
      }
      var h$2 = seed;
      h$2 = this.mix__I__I__I(h$2, a);
      h$2 = this.mix__I__I__I(h$2, b);
      h$2 = this.mixLast__I__I__I(h$2, c);
      return this.finalizeHash__I__I__I(h$2, n);
    });
    $c_s_util_hashing_MurmurHash3.prototype.orderedHash__sc_IterableOnce__I__I = (function(xs, seed) {
      var it = $n(xs).iterator__sc_Iterator();
      var h = seed;
      if ((!$n(it).hasNext__Z())) {
        return this.finalizeHash__I__I__I(h, 0);
      }
      var x0 = $n(it).next__O();
      if ((!$n(it).hasNext__Z())) {
        return this.finalizeHash__I__I__I(this.mix__I__I__I(h, $m_sr_Statics$().anyHash__O__I(x0)), 1);
      }
      var x1 = $n(it).next__O();
      var initial = $m_sr_Statics$().anyHash__O__I(x0);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().anyHash__O__I(x1);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ($n(it).hasNext__Z()) {
        h = this.mix__I__I__I(h, prev);
        var x = $n(it).next__O();
        var hash = $m_sr_Statics$().anyHash__O__I(x);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ($n(it).hasNext__Z()) {
            var $x_1 = h;
            var x$1 = $n(it).next__O();
            h = this.mix__I__I__I($x_1, $m_sr_Statics$().anyHash__O__I(x$1));
            i = ((1 + i) | 0);
          }
          return this.finalizeHash__I__I__I(h, i);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
    });
    $c_s_util_hashing_MurmurHash3.prototype.arrayHash__O__I__I = (function(a, seed) {
      var h = seed;
      var l = $m_jl_reflect_Array$().getLength__O__I(a);
      switch (l) {
        case 0: {
          return this.finalizeHash__I__I__I(h, 0);
        }
        case 1: {
          var $x_1 = h;
          var x = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, 0);
          return this.finalizeHash__I__I__I(this.mix__I__I__I($x_1, $m_sr_Statics$().anyHash__O__I(x)), 1);
        }
        default: {
          var x$1 = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, 0);
          var initial = $m_sr_Statics$().anyHash__O__I(x$1);
          h = this.mix__I__I__I(h, initial);
          var h0 = h;
          var x$2 = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, 1);
          var prev = $m_sr_Statics$().anyHash__O__I(x$2);
          var rangeDiff = ((prev - initial) | 0);
          var i = 2;
          while ((i < l)) {
            h = this.mix__I__I__I(h, prev);
            var x$3 = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, i);
            var hash = $m_sr_Statics$().anyHash__O__I(x$3);
            if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
              h = this.mix__I__I__I(h, hash);
              i = ((1 + i) | 0);
              while ((i < l)) {
                var $x_2 = h;
                var x$4 = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, i);
                h = this.mix__I__I__I($x_2, $m_sr_Statics$().anyHash__O__I(x$4));
                i = ((1 + i) | 0);
              }
              return this.finalizeHash__I__I__I(h, l);
            }
            prev = hash;
            i = ((1 + i) | 0);
          }
          return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
        }
      }
    });
    $c_s_util_hashing_MurmurHash3.prototype.rangeHash__I__I__I__I__I = (function(start, step, last, seed) {
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(this.mix__I__I__I(seed, start), step), last));
    });
    $c_s_util_hashing_MurmurHash3.prototype.indexedSeqHash__sc_IndexedSeq__I__I = (function(a, seed) {
      var h = seed;
      var l = $n(a).length__I();
      switch (l) {
        case 0: {
          return this.finalizeHash__I__I__I(h, 0);
        }
        case 1: {
          var $x_1 = h;
          var x = $n(a).apply__I__O(0);
          return this.finalizeHash__I__I__I(this.mix__I__I__I($x_1, $m_sr_Statics$().anyHash__O__I(x)), 1);
        }
        default: {
          var x$1 = $n(a).apply__I__O(0);
          var initial = $m_sr_Statics$().anyHash__O__I(x$1);
          h = this.mix__I__I__I(h, initial);
          var h0 = h;
          var x$2 = $n(a).apply__I__O(1);
          var prev = $m_sr_Statics$().anyHash__O__I(x$2);
          var rangeDiff = ((prev - initial) | 0);
          var i = 2;
          while ((i < l)) {
            h = this.mix__I__I__I(h, prev);
            var x$3 = $n(a).apply__I__O(i);
            var hash = $m_sr_Statics$().anyHash__O__I(x$3);
            if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
              h = this.mix__I__I__I(h, hash);
              i = ((1 + i) | 0);
              while ((i < l)) {
                var $x_2 = h;
                var x$4 = $n(a).apply__I__O(i);
                h = this.mix__I__I__I($x_2, $m_sr_Statics$().anyHash__O__I(x$4));
                i = ((1 + i) | 0);
              }
              return this.finalizeHash__I__I__I(h, l);
            }
            prev = hash;
            i = ((1 + i) | 0);
          }
          return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
        }
      }
    });
    $c_s_util_hashing_MurmurHash3.prototype.listHash__sci_List__I__I = (function(xs, seed) {
      var n = 0;
      var h = seed;
      var rangeState = 0;
      var rangeDiff = 0;
      var prev = 0;
      var initial = 0;
      var elems = xs;
      while ((!$n(elems).isEmpty__Z())) {
        var head = $n(elems).head__O();
        var tail = $as_sci_List($n(elems).tail__O());
        var hash = $m_sr_Statics$().anyHash__O__I(head);
        h = this.mix__I__I__I(h, hash);
        var x1 = rangeState;
        switch (x1) {
          case 0: {
            initial = hash;
            rangeState = 1;
            break;
          }
          case 1: {
            rangeDiff = ((hash - prev) | 0);
            rangeState = 2;
            break;
          }
          case 2: {
            if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
              rangeState = 3;
            }
            break;
          }
        }
        prev = hash;
        n = ((1 + n) | 0);
        elems = tail;
      }
      return ((rangeState === 2) ? this.rangeHash__I__I__I__I__I(initial, rangeDiff, prev, seed) : this.finalizeHash__I__I__I(h, n));
    });
    $c_s_util_hashing_MurmurHash3.prototype.arrayHash$mZc$sp__AZ__I__I = (function(a, seed) {
      var h = seed;
      var l = $n(a).u.length;
      switch (l) {
        case 0: {
          return this.finalizeHash__I__I__I(h, 0);
        }
        case 1: {
          return this.finalizeHash__I__I__I(this.mix__I__I__I(h, ($n(a).get(0) ? 1231 : 1237)), 1);
        }
        default: {
          var initial = ($n(a).get(0) ? 1231 : 1237);
          h = this.mix__I__I__I(h, initial);
          var h0 = h;
          var prev = ($n(a).get(1) ? 1231 : 1237);
          var rangeDiff = ((prev - initial) | 0);
          var i = 2;
          while ((i < l)) {
            h = this.mix__I__I__I(h, prev);
            var hash = ($n(a).get(i) ? 1231 : 1237);
            if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
              h = this.mix__I__I__I(h, hash);
              i = ((1 + i) | 0);
              while ((i < l)) {
                h = this.mix__I__I__I(h, ($n(a).get(i) ? 1231 : 1237));
                i = ((1 + i) | 0);
              }
              return this.finalizeHash__I__I__I(h, l);
            }
            prev = hash;
            i = ((1 + i) | 0);
          }
          return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
        }
      }
    });
    $c_s_util_hashing_MurmurHash3.prototype.arrayHash$mBc$sp__AB__I__I = (function(a, seed) {
      var h = seed;
      var l = $n(a).u.length;
      switch (l) {
        case 0: {
          return this.finalizeHash__I__I__I(h, 0);
        }
        case 1: {
          return this.finalizeHash__I__I__I(this.mix__I__I__I(h, $n(a).get(0)), 1);
        }
        default: {
          var initial = $n(a).get(0);
          h = this.mix__I__I__I(h, initial);
          var h0 = h;
          var prev = $n(a).get(1);
          var rangeDiff = ((prev - initial) | 0);
          var i = 2;
          while ((i < l)) {
            h = this.mix__I__I__I(h, prev);
            var hash = $n(a).get(i);
            if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
              h = this.mix__I__I__I(h, hash);
              i = ((1 + i) | 0);
              while ((i < l)) {
                h = this.mix__I__I__I(h, $n(a).get(i));
                i = ((1 + i) | 0);
              }
              return this.finalizeHash__I__I__I(h, l);
            }
            prev = hash;
            i = ((1 + i) | 0);
          }
          return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
        }
      }
    });
    $c_s_util_hashing_MurmurHash3.prototype.arrayHash$mCc$sp__AC__I__I = (function(a, seed) {
      var h = seed;
      var l = $n(a).u.length;
      switch (l) {
        case 0: {
          return this.finalizeHash__I__I__I(h, 0);
        }
        case 1: {
          return this.finalizeHash__I__I__I(this.mix__I__I__I(h, $n(a).get(0)), 1);
        }
        default: {
          var initial = $n(a).get(0);
          h = this.mix__I__I__I(h, initial);
          var h0 = h;
          var prev = $n(a).get(1);
          var rangeDiff = ((prev - initial) | 0);
          var i = 2;
          while ((i < l)) {
            h = this.mix__I__I__I(h, prev);
            var hash = $n(a).get(i);
            if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
              h = this.mix__I__I__I(h, hash);
              i = ((1 + i) | 0);
              while ((i < l)) {
                h = this.mix__I__I__I(h, $n(a).get(i));
                i = ((1 + i) | 0);
              }
              return this.finalizeHash__I__I__I(h, l);
            }
            prev = hash;
            i = ((1 + i) | 0);
          }
          return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
        }
      }
    });
    $c_s_util_hashing_MurmurHash3.prototype.arrayHash$mDc$sp__AD__I__I = (function(a, seed) {
      var h = seed;
      var l = $n(a).u.length;
      switch (l) {
        case 0: {
          return this.finalizeHash__I__I__I(h, 0);
        }
        case 1: {
          var $x_1 = h;
          var dv = $n(a).get(0);
          return this.finalizeHash__I__I__I(this.mix__I__I__I($x_1, $m_sr_Statics$().doubleHash__D__I(dv)), 1);
        }
        default: {
          var dv$1 = $n(a).get(0);
          var initial = $m_sr_Statics$().doubleHash__D__I(dv$1);
          h = this.mix__I__I__I(h, initial);
          var h0 = h;
          var dv$2 = $n(a).get(1);
          var prev = $m_sr_Statics$().doubleHash__D__I(dv$2);
          var rangeDiff = ((prev - initial) | 0);
          var i = 2;
          while ((i < l)) {
            h = this.mix__I__I__I(h, prev);
            var dv$3 = $n(a).get(i);
            var hash = $m_sr_Statics$().doubleHash__D__I(dv$3);
            if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
              h = this.mix__I__I__I(h, hash);
              i = ((1 + i) | 0);
              while ((i < l)) {
                var $x_2 = h;
                var dv$4 = $n(a).get(i);
                h = this.mix__I__I__I($x_2, $m_sr_Statics$().doubleHash__D__I(dv$4));
                i = ((1 + i) | 0);
              }
              return this.finalizeHash__I__I__I(h, l);
            }
            prev = hash;
            i = ((1 + i) | 0);
          }
          return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
        }
      }
    });
    $c_s_util_hashing_MurmurHash3.prototype.arrayHash$mFc$sp__AF__I__I = (function(a, seed) {
      var h = seed;
      var l = $n(a).u.length;
      switch (l) {
        case 0: {
          return this.finalizeHash__I__I__I(h, 0);
        }
        case 1: {
          var $x_1 = h;
          var fv = $n(a).get(0);
          var this$1$1 = $m_sr_Statics$();
          return this.finalizeHash__I__I__I(this.mix__I__I__I($x_1, this$1$1.doubleHash__D__I(fv)), 1);
        }
        default: {
          var fv$1 = $n(a).get(0);
          var this$2 = $m_sr_Statics$();
          var initial = this$2.doubleHash__D__I(fv$1);
          h = this.mix__I__I__I(h, initial);
          var h0 = h;
          var fv$2 = $n(a).get(1);
          var this$3 = $m_sr_Statics$();
          var prev = this$3.doubleHash__D__I(fv$2);
          var rangeDiff = ((prev - initial) | 0);
          var i = 2;
          while ((i < l)) {
            h = this.mix__I__I__I(h, prev);
            var fv$3 = $n(a).get(i);
            var this$4 = $m_sr_Statics$();
            var hash = this$4.doubleHash__D__I(fv$3);
            if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
              h = this.mix__I__I__I(h, hash);
              i = ((1 + i) | 0);
              while ((i < l)) {
                var $x_2 = h;
                var fv$4 = $n(a).get(i);
                var this$5 = $m_sr_Statics$();
                h = this.mix__I__I__I($x_2, this$5.doubleHash__D__I(fv$4));
                i = ((1 + i) | 0);
              }
              return this.finalizeHash__I__I__I(h, l);
            }
            prev = hash;
            i = ((1 + i) | 0);
          }
          return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
        }
      }
    });
    $c_s_util_hashing_MurmurHash3.prototype.arrayHash$mIc$sp__AI__I__I = (function(a, seed) {
      var h = seed;
      var l = $n(a).u.length;
      switch (l) {
        case 0: {
          return this.finalizeHash__I__I__I(h, 0);
        }
        case 1: {
          return this.finalizeHash__I__I__I(this.mix__I__I__I(h, $n(a).get(0)), 1);
        }
        default: {
          var initial = $n(a).get(0);
          h = this.mix__I__I__I(h, initial);
          var h0 = h;
          var prev = $n(a).get(1);
          var rangeDiff = ((prev - initial) | 0);
          var i = 2;
          while ((i < l)) {
            h = this.mix__I__I__I(h, prev);
            var hash = $n(a).get(i);
            if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
              h = this.mix__I__I__I(h, hash);
              i = ((1 + i) | 0);
              while ((i < l)) {
                h = this.mix__I__I__I(h, $n(a).get(i));
                i = ((1 + i) | 0);
              }
              return this.finalizeHash__I__I__I(h, l);
            }
            prev = hash;
            i = ((1 + i) | 0);
          }
          return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
        }
      }
    });
    $c_s_util_hashing_MurmurHash3.prototype.arrayHash$mJc$sp__AJ__I__I = (function(a, seed) {
      var h = seed;
      var l = $n(a).u.length;
      switch (l) {
        case 0: {
          return this.finalizeHash__I__I__I(h, 0);
        }
        case 1: {
          var $x_1 = h;
          var t = $n(a).get(0);
          var lo = t.RTLong__f_lo;
          var hi = t.RTLong__f_hi;
          return this.finalizeHash__I__I__I(this.mix__I__I__I($x_1, $m_sr_Statics$().longHash__J__I(new $c_RTLong(lo, hi))), 1);
        }
        default: {
          var t$1 = $n(a).get(0);
          var lo$1 = t$1.RTLong__f_lo;
          var hi$1 = t$1.RTLong__f_hi;
          var initial = $m_sr_Statics$().longHash__J__I(new $c_RTLong(lo$1, hi$1));
          h = this.mix__I__I__I(h, initial);
          var h0 = h;
          var t$2 = $n(a).get(1);
          var lo$2 = t$2.RTLong__f_lo;
          var hi$2 = t$2.RTLong__f_hi;
          var prev = $m_sr_Statics$().longHash__J__I(new $c_RTLong(lo$2, hi$2));
          var rangeDiff = ((prev - initial) | 0);
          var i = 2;
          while ((i < l)) {
            h = this.mix__I__I__I(h, prev);
            var t$3 = $n(a).get(i);
            var lo$3 = t$3.RTLong__f_lo;
            var hi$3 = t$3.RTLong__f_hi;
            var hash = $m_sr_Statics$().longHash__J__I(new $c_RTLong(lo$3, hi$3));
            if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
              h = this.mix__I__I__I(h, hash);
              i = ((1 + i) | 0);
              while ((i < l)) {
                var $x_2 = h;
                var t$4 = $n(a).get(i);
                var lo$4 = t$4.RTLong__f_lo;
                var hi$4 = t$4.RTLong__f_hi;
                h = this.mix__I__I__I($x_2, $m_sr_Statics$().longHash__J__I(new $c_RTLong(lo$4, hi$4)));
                i = ((1 + i) | 0);
              }
              return this.finalizeHash__I__I__I(h, l);
            }
            prev = hash;
            i = ((1 + i) | 0);
          }
          return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
        }
      }
    });
    $c_s_util_hashing_MurmurHash3.prototype.arrayHash$mSc$sp__AS__I__I = (function(a, seed) {
      var h = seed;
      var l = $n(a).u.length;
      switch (l) {
        case 0: {
          return this.finalizeHash__I__I__I(h, 0);
        }
        case 1: {
          return this.finalizeHash__I__I__I(this.mix__I__I__I(h, $n(a).get(0)), 1);
        }
        default: {
          var initial = $n(a).get(0);
          h = this.mix__I__I__I(h, initial);
          var h0 = h;
          var prev = $n(a).get(1);
          var rangeDiff = ((prev - initial) | 0);
          var i = 2;
          while ((i < l)) {
            h = this.mix__I__I__I(h, prev);
            var hash = $n(a).get(i);
            if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
              h = this.mix__I__I__I(h, hash);
              i = ((1 + i) | 0);
              while ((i < l)) {
                h = this.mix__I__I__I(h, $n(a).get(i));
                i = ((1 + i) | 0);
              }
              return this.finalizeHash__I__I__I(h, l);
            }
            prev = hash;
            i = ((1 + i) | 0);
          }
          return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
        }
      }
    });
    $c_s_util_hashing_MurmurHash3.prototype.arrayHash$mVc$sp__Ajl_Void__I__I = (function(a, seed) {
      var h = seed;
      var l = $n(a).u.length;
      switch (l) {
        case 0: {
          return this.finalizeHash__I__I__I(h, 0);
        }
        case 1: {
          return this.finalizeHash__I__I__I(this.mix__I__I__I(h, 0), 1);
        }
        default: {
          h = this.mix__I__I__I(h, 0);
          var h0 = h;
          var prev = 0;
          var rangeDiff = prev;
          var i = 2;
          while ((i < l)) {
            h = this.mix__I__I__I(h, prev);
            if (((rangeDiff !== ((-prev) | 0)) || (rangeDiff === 0))) {
              h = this.mix__I__I__I(h, 0);
              i = ((1 + i) | 0);
              while ((i < l)) {
                h = this.mix__I__I__I(h, 0);
                i = ((1 + i) | 0);
              }
              return this.finalizeHash__I__I__I(h, l);
            }
            prev = 0;
            i = ((1 + i) | 0);
          }
          return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
        }
      }
    });
    /** @constructor */
    function $c_Lscalatags_Escaping$() {
      this.Lscalatags_Escaping$__f_tagRegex = null;
      $n_Lscalatags_Escaping$ = this;
      this.Lscalatags_Escaping$__f_tagRegex = $ct_s_util_matching_Regex__T__sci_Seq__(new $c_s_util_matching_Regex(), "^[a-z][:\\w0-9-]*$", $m_sci_Nil$());
    }
    $c_Lscalatags_Escaping$.prototype = new $h_O();
    $c_Lscalatags_Escaping$.prototype.constructor = $c_Lscalatags_Escaping$;
    $c_Lscalatags_Escaping$.prototype;
    $c_Lscalatags_Escaping$.prototype.validTag__T__Z = (function(s) {
      var this$1$1 = $n($n(this.Lscalatags_Escaping$__f_tagRegex).unapplySeq__jl_CharSequence__s_Option(s));
      return (!this$1$1.isEmpty__Z());
    });
    $c_Lscalatags_Escaping$.prototype.validAttrName__T__Z = (function(s) {
      var this$1 = $n(s);
      var len = this$1.length;
      if ((len === 0)) {
        return false;
      }
      var this$2 = $n(s);
      var sc = $charAt(this$2, 0);
      var startCharValid = ((((sc >= 97) && (sc <= 122)) || ((sc >= 65) && (sc <= 90))) || (sc === 58));
      if ((!startCharValid)) {
        return false;
      }
      var pos = 1;
      while ((pos < len)) {
        var this$3 = $n(s);
        var index = pos;
        var c = $charAt(this$3, index);
        var valid = ((((((((c >= 97) && (c <= 122)) || ((c >= 65) && (c <= 90))) || ((c >= 48) && (c <= 57))) || (c === 45)) || (c === 58)) || (c === 46)) || (c === 95));
        if ((!valid)) {
          return false;
        }
        pos = ((1 + pos) | 0);
      }
      return true;
    });
    new $TypeData().initClass($c_Lscalatags_Escaping$, "scalatags.Escaping$", ({
      Lscalatags_Escaping$: 1
    }));
    var $n_Lscalatags_Escaping$;
    function $m_Lscalatags_Escaping$() {
      if ((!$n_Lscalatags_Escaping$)) {
        $n_Lscalatags_Escaping$ = new $c_Lscalatags_Escaping$();
      }
      return $n_Lscalatags_Escaping$;
    }
    function $is_Lscalatags_generic_Modifier(obj) {
      return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lscalatags_generic_Modifier)));
    }
    function $as_Lscalatags_generic_Modifier(obj) {
      return (($is_Lscalatags_generic_Modifier(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scalatags.generic.Modifier"));
    }
    var $d_Lscalatags_generic_Modifier = new $TypeData().initClass(1, "scalatags.generic.Modifier", ({
      Lscalatags_generic_Modifier: 1
    }));
    function $is_Lscalatags_generic_Namespace(obj) {
      return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lscalatags_generic_Namespace)));
    }
    function $as_Lscalatags_generic_Namespace(obj) {
      return (($is_Lscalatags_generic_Namespace(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scalatags.generic.Namespace"));
    }
    /** @constructor */
    function $c_Lscalatags_generic_Namespace$() {
      this.Lscalatags_generic_Namespace$__f_htmlNamespaceConfig = null;
      $n_Lscalatags_generic_Namespace$ = this;
      this.Lscalatags_generic_Namespace$__f_htmlNamespaceConfig = new $c_Lscalatags_generic_Namespace$$anon$1();
    }
    $c_Lscalatags_generic_Namespace$.prototype = new $h_O();
    $c_Lscalatags_generic_Namespace$.prototype.constructor = $c_Lscalatags_generic_Namespace$;
    $c_Lscalatags_generic_Namespace$.prototype;
    new $TypeData().initClass($c_Lscalatags_generic_Namespace$, "scalatags.generic.Namespace$", ({
      Lscalatags_generic_Namespace$: 1
    }));
    var $n_Lscalatags_generic_Namespace$;
    function $m_Lscalatags_generic_Namespace$() {
      if ((!$n_Lscalatags_generic_Namespace$)) {
        $n_Lscalatags_generic_Namespace$ = new $c_Lscalatags_generic_Namespace$();
      }
      return $n_Lscalatags_generic_Namespace$;
    }
    function $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI($thiz) {
      if (((((32 & $thiz.jl_Character$__f_bitmap$0) << 24) >> 24) === 0)) {
        $thiz.jl_Character$__f_nonASCIIZeroDigitCodePoints = new $ac_I(new Int32Array([1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3558, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43504, 43600, 44016, 65296, 66720, 68912, 69734, 69872, 69942, 70096, 70384, 70736, 70864, 71248, 71360, 71472, 71904, 72016, 72784, 73040, 73120, 73552, 92768, 92864, 93008, 120782, 120792, 120802, 120812, 120822, 123200, 123632, 124144, 125264, 130032]));
        $thiz.jl_Character$__f_bitmap$0 = (((32 | $thiz.jl_Character$__f_bitmap$0) << 24) >> 24);
      }
      return $thiz.jl_Character$__f_nonASCIIZeroDigitCodePoints;
    }
    function $p_jl_Character$__nonASCIIZeroDigitCodePoints__AI($thiz) {
      return (((((32 & $thiz.jl_Character$__f_bitmap$0) << 24) >> 24) === 0) ? $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI($thiz) : $thiz.jl_Character$__f_nonASCIIZeroDigitCodePoints);
    }
    /** @constructor */
    function $c_jl_Character$() {
      this.jl_Character$__f_nonASCIIZeroDigitCodePoints = null;
      this.jl_Character$__f_bitmap$0 = 0;
    }
    $c_jl_Character$.prototype = new $h_O();
    $c_jl_Character$.prototype.constructor = $c_jl_Character$;
    $c_jl_Character$.prototype;
    $c_jl_Character$.prototype.digitWithValidRadix__I__I__I = (function(codePoint, radix) {
      if ((codePoint < 256)) {
        var value = (((codePoint >= 48) && (codePoint <= 57)) ? (((-48) + codePoint) | 0) : (((codePoint >= 65) && (codePoint <= 90)) ? (((-55) + codePoint) | 0) : (((codePoint >= 97) && (codePoint <= 122)) ? (((-87) + codePoint) | 0) : (-1))));
      } else if (((codePoint >= 65313) && (codePoint <= 65338))) {
        var value = (((-65303) + codePoint) | 0);
      } else if (((codePoint >= 65345) && (codePoint <= 65370))) {
        var value = (((-65335) + codePoint) | 0);
      } else {
        var p = $m_ju_Arrays$().binarySearch__AI__I__I($p_jl_Character$__nonASCIIZeroDigitCodePoints__AI(this), codePoint);
        var zeroCodePointIndex = ((p < 0) ? (((-2) - p) | 0) : p);
        if ((zeroCodePointIndex < 0)) {
          var value = (-1);
        } else {
          var v = ((codePoint - $n($p_jl_Character$__nonASCIIZeroDigitCodePoints__AI(this)).get(zeroCodePointIndex)) | 0);
          var value = ((v > 9) ? (-1) : v);
        }
      }
      return ((value < radix) ? value : (-1));
    });
    new $TypeData().initClass($c_jl_Character$, "java.lang.Character$", ({
      jl_Character$: 1,
      Ljava_io_Serializable: 1
    }));
    var $n_jl_Character$;
    function $m_jl_Character$() {
      if ((!$n_jl_Character$)) {
        $n_jl_Character$ = new $c_jl_Character$();
      }
      return $n_jl_Character$;
    }
    function $ps_jl_Integer$__fail$1__T__E(s$1) {
      throw new $c_jl_NumberFormatException((("For input string: \"" + s$1) + "\""));
    }
    /** @constructor */
    function $c_jl_Integer$() {
    }
    $c_jl_Integer$.prototype = new $h_O();
    $c_jl_Integer$.prototype.constructor = $c_jl_Integer$;
    $c_jl_Integer$.prototype;
    $c_jl_Integer$.prototype.parseInt__T__I__I = (function(s, radix) {
      if ((s === null)) {
        var len = 0;
      } else {
        var this$1 = $n(s);
        var len = this$1.length;
      }
      if ((((len === 0) || (radix < 2)) || (radix > 36))) {
        $ps_jl_Integer$__fail$1__T__E(s);
      }
      var this$2 = $n(s);
      var firstChar = $charAt(this$2, 0);
      var negative = (firstChar === 45);
      var maxAbsValue = (negative ? 2.147483648E9 : 2.147483647E9);
      var i = ((negative || (firstChar === 43)) ? 1 : 0);
      var $x_1 = i;
      var this$3 = $n(s);
      if (($x_1 >= this$3.length)) {
        $ps_jl_Integer$__fail$1__T__E(s);
      }
      var result = 0.0;
      while ((i !== len)) {
        var $x_2 = $m_jl_Character$();
        var this$4 = $n(s);
        var index = i;
        var digit = $x_2.digitWithValidRadix__I__I__I($charAt(this$4, index), radix);
        result = ((result * radix) + digit);
        if (((digit === (-1)) || (result > maxAbsValue))) {
          $ps_jl_Integer$__fail$1__T__E(s);
        }
        i = ((1 + i) | 0);
      }
      if (negative) {
        var n = (-result);
        return $uI((n | 0.0));
      } else {
        var n$1 = result;
        return $uI((n$1 | 0.0));
      }
    });
    $c_jl_Integer$.prototype.bitCount__I__I = (function(i) {
      var t1 = ((i - (1431655765 & (i >> 1))) | 0);
      var t2 = (((858993459 & t1) + (858993459 & (t1 >> 2))) | 0);
      return (Math.imul(16843009, (252645135 & ((t2 + (t2 >> 4)) | 0))) >> 24);
    });
    new $TypeData().initClass($c_jl_Integer$, "java.lang.Integer$", ({
      jl_Integer$: 1,
      Ljava_io_Serializable: 1
    }));
    var $n_jl_Integer$;
    function $m_jl_Integer$() {
      if ((!$n_jl_Integer$)) {
        $n_jl_Integer$ = new $c_jl_Integer$();
      }
      return $n_jl_Integer$;
    }
    /** @constructor */
    function $c_jl_Number() {
    }
    $c_jl_Number.prototype = new $h_O();
    $c_jl_Number.prototype.constructor = $c_jl_Number;
    $c_jl_Number.prototype;
    function $is_jl_Number(obj) {
      return (((obj instanceof $c_jl_Number) || ((typeof obj) === "number")) || (obj instanceof $c_RTLong));
    }
    function $as_jl_Number(obj) {
      return (($is_jl_Number(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Number"));
    }
    /** @constructor */
    function $c_jl_StackTraceElement(declaringClass, methodName, fileName, lineNumber, columnNumber) {
      this.jl_StackTraceElement__f_declaringClass = null;
      this.jl_StackTraceElement__f_methodName = null;
      this.jl_StackTraceElement__f_fileName = null;
      this.jl_StackTraceElement__f_lineNumber = 0;
      this.jl_StackTraceElement__f_columnNumber = 0;
      this.jl_StackTraceElement__f_declaringClass = declaringClass;
      this.jl_StackTraceElement__f_methodName = methodName;
      this.jl_StackTraceElement__f_fileName = fileName;
      this.jl_StackTraceElement__f_lineNumber = lineNumber;
      this.jl_StackTraceElement__f_columnNumber = columnNumber;
    }
    $c_jl_StackTraceElement.prototype = new $h_O();
    $c_jl_StackTraceElement.prototype.constructor = $c_jl_StackTraceElement;
    $c_jl_StackTraceElement.prototype;
    $c_jl_StackTraceElement.prototype.equals__O__Z = (function(that) {
      if ((that instanceof $c_jl_StackTraceElement)) {
        var x2 = $as_jl_StackTraceElement(that);
        return (((((this.jl_StackTraceElement__f_fileName === $n(x2).jl_StackTraceElement__f_fileName) && (this.jl_StackTraceElement__f_lineNumber === $n(x2).jl_StackTraceElement__f_lineNumber)) && (this.jl_StackTraceElement__f_columnNumber === $n(x2).jl_StackTraceElement__f_columnNumber)) && (this.jl_StackTraceElement__f_declaringClass === $n(x2).jl_StackTraceElement__f_declaringClass)) && (this.jl_StackTraceElement__f_methodName === $n(x2).jl_StackTraceElement__f_methodName));
      } else {
        return false;
      }
    });
    $c_jl_StackTraceElement.prototype.toString__T = (function() {
      var result = "";
      if ((this.jl_StackTraceElement__f_declaringClass !== "<jscode>")) {
        result = ((("" + result) + this.jl_StackTraceElement__f_declaringClass) + ".");
      }
      result = (("" + result) + this.jl_StackTraceElement__f_methodName);
      if ((this.jl_StackTraceElement__f_fileName === null)) {
        result = (result + "(Unknown Source)");
      } else {
        result = ((result + "(") + this.jl_StackTraceElement__f_fileName);
        if ((this.jl_StackTraceElement__f_lineNumber >= 0)) {
          result = ((result + ":") + this.jl_StackTraceElement__f_lineNumber);
          if ((this.jl_StackTraceElement__f_columnNumber >= 0)) {
            result = ((result + ":") + this.jl_StackTraceElement__f_columnNumber);
          }
        }
        result = (result + ")");
      }
      return result;
    });
    $c_jl_StackTraceElement.prototype.hashCode__I = (function() {
      return (((($f_T__hashCode__I($n(this.jl_StackTraceElement__f_declaringClass)) ^ $f_T__hashCode__I($n(this.jl_StackTraceElement__f_methodName))) ^ $f_T__hashCode__I($n(this.jl_StackTraceElement__f_fileName))) ^ this.jl_StackTraceElement__f_lineNumber) ^ this.jl_StackTraceElement__f_columnNumber);
    });
    function $as_jl_StackTraceElement(obj) {
      return (((obj instanceof $c_jl_StackTraceElement) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.StackTraceElement"));
    }
    var $d_jl_StackTraceElement = new $TypeData().initClass($c_jl_StackTraceElement, "java.lang.StackTraceElement", ({
      jl_StackTraceElement: 1,
      Ljava_io_Serializable: 1
    }));
    /** @constructor */
    function $c_jl_String$() {
    }
    $c_jl_String$.prototype = new $h_O();
    $c_jl_String$.prototype.constructor = $c_jl_String$;
    $c_jl_String$.prototype;
    $c_jl_String$.prototype.new__AC__I__I__T = (function(value, offset, count) {
      var end = ((offset + count) | 0);
      if ((((offset < 0) || (end < offset)) || (end > $n(value).u.length))) {
        throw $ct_jl_StringIndexOutOfBoundsException__(new $c_jl_StringIndexOutOfBoundsException());
      }
      var result = "";
      var i = offset;
      while ((i !== end)) {
        var $x_1 = result;
        var this$1 = $n(value).get(i);
        result = ($x_1 + ("" + $cToS(this$1)));
        i = ((1 + i) | 0);
      }
      return result;
    });
    new $TypeData().initClass($c_jl_String$, "java.lang.String$", ({
      jl_String$: 1,
      Ljava_io_Serializable: 1
    }));
    var $n_jl_String$;
    function $m_jl_String$() {
      if ((!$n_jl_String$)) {
        $n_jl_String$ = new $c_jl_String$();
      }
      return $n_jl_String$;
    }
    /** @constructor */
    function $c_jl_Thread(dummy) {
    }
    $c_jl_Thread.prototype = new $h_O();
    $c_jl_Thread.prototype.constructor = $c_jl_Thread;
    $c_jl_Thread.prototype;
    $c_jl_Thread.prototype.run__V = (function() {
    });
    new $TypeData().initClass($c_jl_Thread, "java.lang.Thread", ({
      jl_Thread: 1,
      jl_Runnable: 1
    }));
    function $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace) {
      $thiz.jl_Throwable__f_s = s;
      $thiz.jl_Throwable__f_e = e;
      $thiz.jl_Throwable__f_writableStackTrace = writableStackTrace;
      {
        $thiz.fillInStackTrace__jl_Throwable();
      }
      return $thiz;
    }
    class $c_jl_Throwable extends Error {
      constructor() {
        super();
        this.jl_Throwable__f_s = null;
        this.jl_Throwable__f_e = null;
        this.jl_Throwable__f_writableStackTrace = false;
        this.jl_Throwable__f_jsErrorForStackTrace = null;
        this.jl_Throwable__f_stackTrace = null;
      }
      getMessage__T() {
        return this.jl_Throwable__f_s;
      }
      fillInStackTrace__jl_Throwable() {
        var reference = ((this instanceof $c_sjs_js_JavaScriptException) ? this.sjs_js_JavaScriptException__f_exception : this);
        var identifyingString = Object.prototype.toString.call(reference);
        this.jl_Throwable__f_jsErrorForStackTrace = ((identifyingString === "[object Error]") ? reference : (((Error.captureStackTrace === (void 0)) || $uZ(Object.isSealed(this))) ? new Error() : (Error.captureStackTrace(this), this)));
        return this;
      }
      getStackTrace__Ajl_StackTraceElement() {
        if ((this.jl_Throwable__f_stackTrace === null)) {
          if (this.jl_Throwable__f_writableStackTrace) {
            this.jl_Throwable__f_stackTrace = $m_jl_StackTrace$().extract__O__Ajl_StackTraceElement(this.jl_Throwable__f_jsErrorForStackTrace);
          } else {
            this.jl_Throwable__f_stackTrace = new ($d_jl_StackTraceElement.getArrayOf().constr)(0);
          }
        }
        return this.jl_Throwable__f_stackTrace;
      }
      printStackTrace__Ljava_io_PrintStream__V(s) {
        this.getStackTrace__Ajl_StackTraceElement();
        var t = this.toString__T();
        $n(s).println__T__V(t);
        if (($n(this.jl_Throwable__f_stackTrace).u.length !== 0)) {
          var i = 0;
          while ((i < $n(this.jl_Throwable__f_stackTrace).u.length)) {
            var t$1 = ("  at " + $n(this.jl_Throwable__f_stackTrace).get(i));
            $n(s).println__T__V(t$1);
            i = ((1 + i) | 0);
          }
        } else {
          $n(s).println__T__V("  <no stack trace available>");
        }
        var wCause = this;
        while (true) {
          var $x_3 = wCause;
          var this$1$1 = $n(wCause);
          if (($x_3 !== this$1$1.jl_Throwable__f_e)) {
            var this$2 = $n(wCause);
            var $x_2 = (this$2.jl_Throwable__f_e !== null);
          } else {
            var $x_2 = false;
          }
          if ($x_2) {
            var parentTrace = $n(wCause).getStackTrace__Ajl_StackTraceElement();
            var this$3 = $n(wCause);
            wCause = this$3.jl_Throwable__f_e;
            var thisTrace = $n(wCause).getStackTrace__Ajl_StackTraceElement();
            var thisLength = $n(thisTrace).u.length;
            var parentLength = $n(parentTrace).u.length;
            var t$2 = ("Caused by: " + wCause);
            $n(s).println__T__V(t$2);
            if ((thisLength !== 0)) {
              var sameFrameCount = 0;
              while (true) {
                if (((sameFrameCount < thisLength) && (sameFrameCount < parentLength))) {
                  var x = $n(thisTrace).get((((-1) + ((thisLength - sameFrameCount) | 0)) | 0));
                  var x$2 = $n(parentTrace).get((((-1) + ((parentLength - sameFrameCount) | 0)) | 0));
                  var $x_1 = ((x === null) ? (x$2 === null) : $n(x).equals__O__Z(x$2));
                } else {
                  var $x_1 = false;
                }
                if ($x_1) {
                  sameFrameCount = ((1 + sameFrameCount) | 0);
                } else {
                  break;
                }
              }
              if ((sameFrameCount > 0)) {
                sameFrameCount = (((-1) + sameFrameCount) | 0);
              }
              var lengthToPrint = ((thisLength - sameFrameCount) | 0);
              var i$2 = 0;
              while ((i$2 < lengthToPrint)) {
                var t$3 = ("  at " + $n(thisTrace).get(i$2));
                $n(s).println__T__V(t$3);
                i$2 = ((1 + i$2) | 0);
              }
              if ((sameFrameCount > 0)) {
                var t$4 = (("  ... " + sameFrameCount) + " more");
                $n(s).println__T__V(t$4);
              }
            } else {
              $n(s).println__T__V("  <no stack trace available>");
            }
          } else {
            break;
          }
        }
      }
      toString__T() {
        var className = $objectClassName(this);
        var message = this.getMessage__T();
        return ((message === null) ? className : ((className + ": ") + message));
      }
      hashCode__I() {
        return $c_O.prototype.hashCode__I.call(this);
      }
      equals__O__Z(that) {
        return $c_O.prototype.equals__O__Z.call(this, that);
      }
      get "message"() {
        var m = this.getMessage__T();
        return ((m === null) ? "" : m);
      }
      get "name"() {
        return $objectClassName(this);
      }
      "toString"() {
        return this.toString__T();
      }
    }
    function $as_jl_Throwable(obj) {
      return (((obj instanceof $c_jl_Throwable) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Throwable"));
    }
    function $ct_ju_concurrent_atomic_AtomicReference__O__($thiz, value) {
      $thiz.ju_concurrent_atomic_AtomicReference__f_value = value;
      return $thiz;
    }
    /** @constructor */
    function $c_ju_concurrent_atomic_AtomicReference() {
      this.ju_concurrent_atomic_AtomicReference__f_value = null;
    }
    $c_ju_concurrent_atomic_AtomicReference.prototype = new $h_O();
    $c_ju_concurrent_atomic_AtomicReference.prototype.constructor = $c_ju_concurrent_atomic_AtomicReference;
    /** @constructor */
    function $h_ju_concurrent_atomic_AtomicReference() {
    }
    $h_ju_concurrent_atomic_AtomicReference.prototype = $c_ju_concurrent_atomic_AtomicReference.prototype;
    $c_ju_concurrent_atomic_AtomicReference.prototype.compareAndSet__O__O__Z = (function(expect, update) {
      if (Object.is(expect, this.ju_concurrent_atomic_AtomicReference__f_value)) {
        this.ju_concurrent_atomic_AtomicReference__f_value = update;
        return true;
      } else {
        return false;
      }
    });
    $c_ju_concurrent_atomic_AtomicReference.prototype.toString__T = (function() {
      var obj = this.ju_concurrent_atomic_AtomicReference__f_value;
      return ("" + obj);
    });
    function $p_ju_regex_Matcher__resetMatch__ju_regex_Matcher($thiz) {
      $thiz.ju_regex_Matcher__f_position = 0;
      $thiz.ju_regex_Matcher__f_lastMatch = null;
      return $thiz;
    }
    function $p_ju_regex_Matcher__ensureLastMatch__O($thiz) {
      if (($thiz.ju_regex_Matcher__f_lastMatch === null)) {
        throw new $c_jl_IllegalStateException("No match available");
      }
      return $thiz.ju_regex_Matcher__f_lastMatch;
    }
    /** @constructor */
    function $c_ju_regex_Matcher(pattern0, input0) {
      this.ju_regex_Matcher__f_pattern0 = null;
      this.ju_regex_Matcher__f_java$util$regex$Matcher$$input0 = null;
      this.ju_regex_Matcher__f_regionStart0 = 0;
      this.ju_regex_Matcher__f_inputstr = null;
      this.ju_regex_Matcher__f_position = 0;
      this.ju_regex_Matcher__f_lastMatch = null;
      this.ju_regex_Matcher__f_pattern0 = pattern0;
      this.ju_regex_Matcher__f_java$util$regex$Matcher$$input0 = input0;
      this.ju_regex_Matcher__f_regionStart0 = 0;
      $n(this.ju_regex_Matcher__f_java$util$regex$Matcher$$input0);
      this.ju_regex_Matcher__f_inputstr = this.ju_regex_Matcher__f_java$util$regex$Matcher$$input0;
      this.ju_regex_Matcher__f_position = 0;
      this.ju_regex_Matcher__f_lastMatch = null;
    }
    $c_ju_regex_Matcher.prototype = new $h_O();
    $c_ju_regex_Matcher.prototype.constructor = $c_ju_regex_Matcher;
    $c_ju_regex_Matcher.prototype;
    $c_ju_regex_Matcher.prototype.matches__Z = (function() {
      $p_ju_regex_Matcher__resetMatch__ju_regex_Matcher(this);
      this.ju_regex_Matcher__f_lastMatch = $n(this.ju_regex_Matcher__f_pattern0).execMatches__T__O(this.ju_regex_Matcher__f_inputstr);
      return (this.ju_regex_Matcher__f_lastMatch !== null);
    });
    $c_ju_regex_Matcher.prototype.find__Z = (function() {
      var this$1$1 = $n(this.ju_regex_Matcher__f_pattern0);
      var input = this.ju_regex_Matcher__f_inputstr;
      var start = this.ju_regex_Matcher__f_position;
      var mtch = this$1$1.java$util$regex$Pattern$$execFindInternal__T__I__O(input, start);
      var end = $uI(this$1$1.ju_regex_Pattern__f_java$util$regex$Pattern$$jsRegExpForFind.lastIndex);
      if ((mtch !== null)) {
        var $x_1 = ((end === $uI(mtch.index)) ? ((1 + end) | 0) : end);
      } else {
        var this$2 = $n(this.ju_regex_Matcher__f_inputstr);
        var $x_1 = ((1 + this$2.length) | 0);
      }
      this.ju_regex_Matcher__f_position = $x_1;
      this.ju_regex_Matcher__f_lastMatch = mtch;
      return (mtch !== null);
    });
    $c_ju_regex_Matcher.prototype.start__I = (function() {
      return (($uI($p_ju_regex_Matcher__ensureLastMatch__O(this).index) + this.ju_regex_Matcher__f_regionStart0) | 0);
    });
    $c_ju_regex_Matcher.prototype.end__I = (function() {
      var $x_1 = this.start__I();
      var this$1$1 = $n(this.group__T());
      return (($x_1 + this$1$1.length) | 0);
    });
    $c_ju_regex_Matcher.prototype.group__T = (function() {
      var x = $p_ju_regex_Matcher__ensureLastMatch__O(this)[0];
      return $as_T(x);
    });
    $c_ju_regex_Matcher.prototype.group__I__T = (function(group) {
      var x = $p_ju_regex_Matcher__ensureLastMatch__O(this)[$n(this.ju_regex_Matcher__f_pattern0).numberedGroup__I__I(group)];
      return $as_T(((x !== (void 0)) ? x : null));
    });
    new $TypeData().initClass($c_ju_regex_Matcher, "java.util.regex.Matcher", ({
      ju_regex_Matcher: 1,
      ju_regex_MatchResult: 1
    }));
    /** @constructor */
    function $c_ju_regex_Pattern(_pattern, _flags, jsPattern, jsFlags, sticky, groupCount, groupNumberMap, namedGroups) {
      this.ju_regex_Pattern__f__pattern = null;
      this.ju_regex_Pattern__f_java$util$regex$Pattern$$jsFlags = null;
      this.ju_regex_Pattern__f_java$util$regex$Pattern$$sticky = false;
      this.ju_regex_Pattern__f_groupCount = 0;
      this.ju_regex_Pattern__f_groupNumberMap = null;
      this.ju_regex_Pattern__f_java$util$regex$Pattern$$jsRegExpForFind = null;
      this.ju_regex_Pattern__f_jsRegExpForMatches = null;
      this.ju_regex_Pattern__f__pattern = _pattern;
      this.ju_regex_Pattern__f_java$util$regex$Pattern$$jsFlags = jsFlags;
      this.ju_regex_Pattern__f_java$util$regex$Pattern$$sticky = sticky;
      this.ju_regex_Pattern__f_groupCount = groupCount;
      this.ju_regex_Pattern__f_groupNumberMap = groupNumberMap;
      this.ju_regex_Pattern__f_java$util$regex$Pattern$$jsRegExpForFind = new RegExp(jsPattern, (this.ju_regex_Pattern__f_java$util$regex$Pattern$$jsFlags + (this.ju_regex_Pattern__f_java$util$regex$Pattern$$sticky ? "gy" : "g")));
      this.ju_regex_Pattern__f_jsRegExpForMatches = new RegExp((("^(?:" + jsPattern) + ")$"), jsFlags);
    }
    $c_ju_regex_Pattern.prototype = new $h_O();
    $c_ju_regex_Pattern.prototype.constructor = $c_ju_regex_Pattern;
    $c_ju_regex_Pattern.prototype;
    $c_ju_regex_Pattern.prototype.execMatches__T__O = (function(input) {
      return this.ju_regex_Pattern__f_jsRegExpForMatches.exec(input);
    });
    $c_ju_regex_Pattern.prototype.java$util$regex$Pattern$$execFindInternal__T__I__O = (function(input, start) {
      var regexp = this.ju_regex_Pattern__f_java$util$regex$Pattern$$jsRegExpForFind;
      regexp.lastIndex = start;
      return regexp.exec(input);
    });
    $c_ju_regex_Pattern.prototype.numberedGroup__I__I = (function(group) {
      if (((group < 0) || (group > this.ju_regex_Pattern__f_groupCount))) {
        throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + group));
      }
      return $uI(this.ju_regex_Pattern__f_groupNumberMap[group]);
    });
    $c_ju_regex_Pattern.prototype.toString__T = (function() {
      return this.ju_regex_Pattern__f__pattern;
    });
    $c_ju_regex_Pattern.prototype.java$util$regex$Pattern$$split__T__I__AT = (function(inputStr, limit) {
      if ((inputStr === "")) {
        return new ($d_T.getArrayOf().constr)([""]);
      } else {
        var lim = ((limit > 0) ? limit : 2147483647);
        var this$1$1 = $n(inputStr);
        var matcher = new $c_ju_regex_Matcher(this, this$1$1);
        var result = [];
        var prevEnd = 0;
        while ((($uI(result.length) < (((-1) + lim) | 0)) && matcher.find__Z())) {
          if ((matcher.end__I() !== 0)) {
            var this$2 = $n(inputStr);
            var beginIndex = prevEnd;
            var endIndex = matcher.start__I();
            if ((beginIndex < 0)) {
              $charAt(this$2, beginIndex);
            }
            if ((endIndex > this$2.length)) {
              $charAt(this$2, endIndex);
            }
            if ((endIndex < beginIndex)) {
              $charAt(this$2, (-1));
            }
            var $x_1 = result.push($as_T(this$2.substring(beginIndex, endIndex)));
            $uI($x_1);
          }
          prevEnd = matcher.end__I();
        }
        var this$3 = $n(inputStr);
        var beginIndex$1 = prevEnd;
        if (((beginIndex$1 < 0) || (beginIndex$1 > this$3.length))) {
          $charAt(this$3, beginIndex$1);
        }
        result.push($as_T(this$3.substring(beginIndex$1)));
        var actualLength = $uI(result.length);
        if ((limit === 0)) {
          while (true) {
            if ((actualLength !== 0)) {
              var x = result[(((-1) + actualLength) | 0)];
              var $x_2 = ((x !== null) && $dp_equals__O__Z($n(x), ""));
            } else {
              var $x_2 = false;
            }
            if ($x_2) {
              actualLength = (((-1) + actualLength) | 0);
            } else {
              break;
            }
          }
        }
        var r = new ($d_T.getArrayOf().constr)(actualLength);
        var end = actualLength;
        var i = 0;
        while ((i < end)) {
          var value = i;
          r.set(value, $as_T(result[value]));
          i = ((1 + i) | 0);
        }
        return r;
      }
    });
    new $TypeData().initClass($c_ju_regex_Pattern, "java.util.regex.Pattern", ({
      ju_regex_Pattern: 1,
      Ljava_io_Serializable: 1
    }));
    /** @constructor */
    function $c_s_$less$colon$less$() {
      this.s_$less$colon$less$__f_singleton = null;
      $n_s_$less$colon$less$ = this;
      this.s_$less$colon$less$__f_singleton = new $c_s_$less$colon$less$$anon$1();
    }
    $c_s_$less$colon$less$.prototype = new $h_O();
    $c_s_$less$colon$less$.prototype.constructor = $c_s_$less$colon$less$;
    $c_s_$less$colon$less$.prototype;
    new $TypeData().initClass($c_s_$less$colon$less$, "scala.$less$colon$less$", ({
      s_$less$colon$less$: 1,
      Ljava_io_Serializable: 1
    }));
    var $n_s_$less$colon$less$;
    function $m_s_$less$colon$less$() {
      if ((!$n_s_$less$colon$less$)) {
        $n_s_$less$colon$less$ = new $c_s_$less$colon$less$();
      }
      return $n_s_$less$colon$less$;
    }
    function $p_s_Array$__slowcopy__O__I__O__I__I__V($thiz, src, srcPos, dest, destPos, length) {
      var i = srcPos;
      var j = destPos;
      var srcUntil = ((srcPos + length) | 0);
      while ((i < srcUntil)) {
        $m_sr_ScalaRunTime$().array_update__O__I__O__V(dest, j, $m_sr_ScalaRunTime$().array_apply__O__I__O(src, i));
        i = ((1 + i) | 0);
        j = ((1 + j) | 0);
      }
    }
    /** @constructor */
    function $c_s_Array$() {
    }
    $c_s_Array$.prototype = new $h_O();
    $c_s_Array$.prototype.constructor = $c_s_Array$;
    $c_s_Array$.prototype;
    $c_s_Array$.prototype.from__sc_IterableOnce__s_reflect_ClassTag__O = (function(it, evidence$3) {
      var n = $n(it).knownSize__I();
      if ((n > (-1))) {
        var elements = $n(evidence$3).newArray__I__O(n);
        var iterator = $n(it).iterator__sc_Iterator();
        var i = 0;
        while ((i < n)) {
          $m_sr_ScalaRunTime$().array_update__O__I__O__V(elements, i, $n(iterator).next__O());
          i = ((1 + i) | 0);
        }
        return elements;
      } else {
        var jsElems = null;
        var elementClass = $n(evidence$3).runtimeClass__jl_Class();
        var isCharArrayBuilder = (elementClass === $d_C.getClassOf());
        jsElems = [];
        var iterator$2 = $n(it).iterator__sc_Iterator();
        while ($n(iterator$2).hasNext__Z()) {
          var elem = $n(iterator$2).next__O();
          var unboxedElem = (isCharArrayBuilder ? $uC(elem) : ((elem === null) ? $n(elementClass).data.zero : elem));
          jsElems.push(unboxedElem);
        }
        var elemRuntimeClass = ((elementClass === $d_V.getClassOf()) ? $d_jl_Void.getClassOf() : (((elementClass === $d_sr_Null$.getClassOf()) || (elementClass === $d_sr_Nothing$.getClassOf())) ? $d_O.getClassOf() : elementClass));
        return $n(elemRuntimeClass).data.getArrayOf().wrapArray(jsElems);
      }
    });
    $c_s_Array$.prototype.copy__O__I__O__I__I__V = (function(src, srcPos, dest, destPos, length) {
      var this$1$1 = $n(src);
      var srcClass = $objectGetClass(this$1$1);
      var this$2 = $n(srcClass);
      if (this$2.data.isArrayClass) {
        var this$3 = $n(dest);
        var this$4 = $n($objectGetClass(this$3));
        var $x_1 = this$4.data.isAssignableFrom($n(srcClass).data);
      } else {
        var $x_1 = false;
      }
      if ($x_1) {
        $systemArraycopyFull($n(src), srcPos, $n(dest), destPos, length);
      } else {
        $p_s_Array$__slowcopy__O__I__O__I__I__V(this, src, srcPos, dest, destPos, length);
      }
    });
    $c_s_Array$.prototype.equals__AO__AO__Z = (function(xs, ys) {
      if ((xs === ys)) {
        return true;
      }
      if (($n(xs).u.length !== $n(ys).u.length)) {
        return false;
      }
      var len = $n(xs).u.length;
      var i = 0;
      while ((i < len)) {
        if ((!$m_sr_BoxesRunTime$().equals__O__O__Z($n(xs).get(i), $n(ys).get(i)))) {
          return false;
        }
        i = ((1 + i) | 0);
      }
      return true;
    });
    new $TypeData().initClass($c_s_Array$, "scala.Array$", ({
      s_Array$: 1,
      Ljava_io_Serializable: 1
    }));
    var $n_s_Array$;
    function $m_s_Array$() {
      if ((!$n_s_Array$)) {
        $n_s_Array$ = new $c_s_Array$();
      }
      return $n_s_Array$;
    }
    /** @constructor */
    function $c_s_Console$() {
      this.s_Console$__f_outVar = null;
      $n_s_Console$ = this;
      this.s_Console$__f_outVar = new $c_s_util_DynamicVariable($m_jl_System$Streams$().jl_System$Streams$__f_out);
    }
    $c_s_Console$.prototype = new $h_O();
    $c_s_Console$.prototype.constructor = $c_s_Console$;
    $c_s_Console$.prototype;
    $c_s_Console$.prototype.out__Ljava_io_PrintStream = (function() {
      return $as_Ljava_io_PrintStream($n(this.s_Console$__f_outVar).s_util_DynamicVariable__f_v);
    });
    new $TypeData().initClass($c_s_Console$, "scala.Console$", ({
      s_Console$: 1,
      s_io_AnsiColor: 1
    }));
    var $n_s_Console$;
    function $m_s_Console$() {
      if ((!$n_s_Console$)) {
        $n_s_Console$ = new $c_s_Console$();
      }
      return $n_s_Console$;
    }
    /** @constructor */
    function $c_s_LowPriorityImplicits() {
    }
    $c_s_LowPriorityImplicits.prototype = new $h_s_LowPriorityImplicits2();
    $c_s_LowPriorityImplicits.prototype.constructor = $c_s_LowPriorityImplicits;
    /** @constructor */
    function $h_s_LowPriorityImplicits() {
    }
    $h_s_LowPriorityImplicits.prototype = $c_s_LowPriorityImplicits.prototype;
    /** @constructor */
    function $c_s_Option$() {
    }
    $c_s_Option$.prototype = new $h_O();
    $c_s_Option$.prototype.constructor = $c_s_Option$;
    $c_s_Option$.prototype;
    $c_s_Option$.prototype.apply__O__s_Option = (function(x) {
      return ((x === null) ? $m_s_None$() : new $c_s_Some(x));
    });
    new $TypeData().initClass($c_s_Option$, "scala.Option$", ({
      s_Option$: 1,
      Ljava_io_Serializable: 1
    }));
    var $n_s_Option$;
    function $m_s_Option$() {
      if ((!$n_s_Option$)) {
        $n_s_Option$ = new $c_s_Option$();
      }
      return $n_s_Option$;
    }
    function $f_s_PartialFunction__applyOrElse__O__F1__O($thiz, x, default$1) {
      return ($thiz.isDefinedAt__O__Z(x) ? $thiz.apply__O__O(x) : $n(default$1).apply__O__O(x));
    }
    function $is_s_PartialFunction(obj) {
      return (!(!((obj && obj.$classData) && obj.$classData.ancestors.s_PartialFunction)));
    }
    function $as_s_PartialFunction(obj) {
      return (($is_s_PartialFunction(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.PartialFunction"));
    }
    /** @constructor */
    function $c_sci_MapNode() {
    }
    $c_sci_MapNode.prototype = new $h_sci_Node();
    $c_sci_MapNode.prototype.constructor = $c_sci_MapNode;
    /** @constructor */
    function $h_sci_MapNode() {
    }
    $h_sci_MapNode.prototype = $c_sci_MapNode.prototype;
    function $as_sci_MapNode(obj) {
      return (((obj instanceof $c_sci_MapNode) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.MapNode"));
    }
    function $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable($thiz, elems) {
      if ((elems === $thiz)) {
        $thiz.addAll__sc_IterableOnce__scm_Growable($m_scm_Buffer$().from__sc_IterableOnce__sc_SeqOps(elems));
      } else {
        var it = $n(elems).iterator__sc_Iterator();
        while ($n(it).hasNext__Z()) {
          $thiz.addOne__O__scm_Growable($n(it).next__O());
        }
      }
      return $thiz;
    }
    function $f_s_concurrent_BatchingExecutor__submitSyncBatched__jl_Runnable__V($thiz, runnable) {
      if ((runnable === null)) {
        throw $ct_jl_NullPointerException__T__(new $c_jl_NullPointerException(), "runnable is null");
      }
      var tl = $thiz.s_concurrent_ExecutionContext$parasitic$__f_scala$concurrent$BatchingExecutor$$_tasksLocal;
      var b = $n(tl).get__O();
      if ((b instanceof $c_s_concurrent_BatchingExecutor$SyncBatch)) {
        $n($as_s_concurrent_BatchingExecutor$SyncBatch(b)).push__jl_Runnable__V(runnable);
      } else {
        if ((b !== null)) {
          var this$2 = $n($as_jl_Integer(b));
          var i = this$2;
        } else {
          var i = 0;
        }
        if ((i < 16)) {
          var $x_1 = $n(tl);
          var i$1 = ((1 + i) | 0);
          $x_1.set__O__V(i$1);
          try {
            $n(runnable).run__V();
          } catch (e) {
            var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
            if ($m_s_util_control_NonFatal$().apply__jl_Throwable__Z(e$2)) {
              $n($m_s_concurrent_ExecutionContext$().s_concurrent_ExecutionContext$__f_defaultReporter).apply__O__O(e$2);
            } else {
              throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.sjs_js_JavaScriptException__f_exception : e$2);
            }
          } finally {
            $n(tl).set__O__V(b);
          }
        } else {
          var batch = new $c_s_concurrent_BatchingExecutor$SyncBatch($thiz, runnable);
          $n(tl).set__O__V(batch);
          batch.run__V();
          $n(tl).set__O__V(b);
        }
      }
    }
    function $is_s_concurrent_Future(obj) {
      return (!(!((obj && obj.$classData) && obj.$classData.ancestors.s_concurrent_Future)));
    }
    function $as_s_concurrent_Future(obj) {
      return (($is_s_concurrent_Future(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.concurrent.Future"));
    }
    /** @constructor */
    function $c_s_concurrent_impl_Promise$ManyCallbacks(first, rest) {
      this.s_concurrent_impl_Promise$ManyCallbacks__f_first = null;
      this.s_concurrent_impl_Promise$ManyCallbacks__f_rest = null;
      this.s_concurrent_impl_Promise$ManyCallbacks__f_first = first;
      this.s_concurrent_impl_Promise$ManyCallbacks__f_rest = rest;
    }
    $c_s_concurrent_impl_Promise$ManyCallbacks.prototype = new $h_O();
    $c_s_concurrent_impl_Promise$ManyCallbacks.prototype.constructor = $c_s_concurrent_impl_Promise$ManyCallbacks;
    $c_s_concurrent_impl_Promise$ManyCallbacks.prototype;
    $c_s_concurrent_impl_Promise$ManyCallbacks.prototype.toString__T = (function() {
      return "ManyCallbacks";
    });
    function $as_s_concurrent_impl_Promise$ManyCallbacks(obj) {
      return (((obj instanceof $c_s_concurrent_impl_Promise$ManyCallbacks) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.concurrent.impl.Promise$ManyCallbacks"));
    }
    new $TypeData().initClass($c_s_concurrent_impl_Promise$ManyCallbacks, "scala.concurrent.impl.Promise$ManyCallbacks", ({
      s_concurrent_impl_Promise$ManyCallbacks: 1,
      s_concurrent_impl_Promise$Callbacks: 1
    }));
    /** @constructor */
    function $c_s_reflect_ClassTag$() {
      this.s_reflect_ClassTag$__f_Byte = null;
      this.s_reflect_ClassTag$__f_Short = null;
      this.s_reflect_ClassTag$__f_Char = null;
      this.s_reflect_ClassTag$__f_Int = null;
      this.s_reflect_ClassTag$__f_Long = null;
      this.s_reflect_ClassTag$__f_Float = null;
      this.s_reflect_ClassTag$__f_Double = null;
      this.s_reflect_ClassTag$__f_Boolean = null;
      this.s_reflect_ClassTag$__f_Unit = null;
      this.s_reflect_ClassTag$__f_Any = null;
      this.s_reflect_ClassTag$__f_Object = null;
      this.s_reflect_ClassTag$__f_AnyRef = null;
      this.s_reflect_ClassTag$__f_Nothing = null;
      this.s_reflect_ClassTag$__f_Null = null;
      $n_s_reflect_ClassTag$ = this;
      this.s_reflect_ClassTag$__f_Byte = $m_s_reflect_ManifestFactory$ByteManifest$();
      this.s_reflect_ClassTag$__f_Short = $m_s_reflect_ManifestFactory$ShortManifest$();
      this.s_reflect_ClassTag$__f_Char = $m_s_reflect_ManifestFactory$CharManifest$();
      this.s_reflect_ClassTag$__f_Int = $m_s_reflect_ManifestFactory$IntManifest$();
      this.s_reflect_ClassTag$__f_Long = $m_s_reflect_ManifestFactory$LongManifest$();
      this.s_reflect_ClassTag$__f_Float = $m_s_reflect_ManifestFactory$FloatManifest$();
      this.s_reflect_ClassTag$__f_Double = $m_s_reflect_ManifestFactory$DoubleManifest$();
      this.s_reflect_ClassTag$__f_Boolean = $m_s_reflect_ManifestFactory$BooleanManifest$();
      this.s_reflect_ClassTag$__f_Unit = $m_s_reflect_ManifestFactory$UnitManifest$();
      this.s_reflect_ClassTag$__f_Any = $m_s_reflect_ManifestFactory$AnyManifest$();
      this.s_reflect_ClassTag$__f_Object = $m_s_reflect_ManifestFactory$ObjectManifest$();
      this.s_reflect_ClassTag$__f_AnyRef = $m_s_reflect_ManifestFactory$ObjectManifest$();
      this.s_reflect_ClassTag$__f_Nothing = $m_s_reflect_ManifestFactory$NothingManifest$();
      this.s_reflect_ClassTag$__f_Null = $m_s_reflect_ManifestFactory$NullManifest$();
    }
    $c_s_reflect_ClassTag$.prototype = new $h_O();
    $c_s_reflect_ClassTag$.prototype.constructor = $c_s_reflect_ClassTag$;
    $c_s_reflect_ClassTag$.prototype;
    $c_s_reflect_ClassTag$.prototype.apply__jl_Class__s_reflect_ClassTag = (function(runtimeClass1) {
      return ((runtimeClass1 === $d_B.getClassOf()) ? $m_s_reflect_ManifestFactory$ByteManifest$() : ((runtimeClass1 === $d_S.getClassOf()) ? $m_s_reflect_ManifestFactory$ShortManifest$() : ((runtimeClass1 === $d_C.getClassOf()) ? $m_s_reflect_ManifestFactory$CharManifest$() : ((runtimeClass1 === $d_I.getClassOf()) ? $m_s_reflect_ManifestFactory$IntManifest$() : ((runtimeClass1 === $d_J.getClassOf()) ? $m_s_reflect_ManifestFactory$LongManifest$() : ((runtimeClass1 === $d_F.getClassOf()) ? $m_s_reflect_ManifestFactory$FloatManifest$() : ((runtimeClass1 === $d_D.getClassOf()) ? $m_s_reflect_ManifestFactory$DoubleManifest$() : ((runtimeClass1 === $d_Z.getClassOf()) ? $m_s_reflect_ManifestFactory$BooleanManifest$() : ((runtimeClass1 === $d_V.getClassOf()) ? $m_s_reflect_ManifestFactory$UnitManifest$() : ((runtimeClass1 === $d_O.getClassOf()) ? $m_s_reflect_ManifestFactory$ObjectManifest$() : ((runtimeClass1 === $d_sr_Nothing$.getClassOf()) ? $m_s_reflect_ManifestFactory$NothingManifest$() : ((runtimeClass1 === $d_sr_Null$.getClassOf()) ? $m_s_reflect_ManifestFactory$NullManifest$() : new $c_s_reflect_ClassTag$GenericClassTag(runtimeClass1)))))))))))));
    });
    new $TypeData().initClass($c_s_reflect_ClassTag$, "scala.reflect.ClassTag$", ({
      s_reflect_ClassTag$: 1,
      Ljava_io_Serializable: 1
    }));
    var $n_s_reflect_ClassTag$;
    function $m_s_reflect_ClassTag$() {
      if ((!$n_s_reflect_ClassTag$)) {
        $n_s_reflect_ClassTag$ = new $c_s_reflect_ClassTag$();
      }
      return $n_s_reflect_ClassTag$;
    }
    /** @constructor */
    function $c_sr_AbstractFunction0() {
    }
    $c_sr_AbstractFunction0.prototype = new $h_O();
    $c_sr_AbstractFunction0.prototype.constructor = $c_sr_AbstractFunction0;
    /** @constructor */
    function $h_sr_AbstractFunction0() {
    }
    $h_sr_AbstractFunction0.prototype = $c_sr_AbstractFunction0.prototype;
    $c_sr_AbstractFunction0.prototype.toString__T = (function() {
      return "<function0>";
    });
    /** @constructor */
    function $c_sr_AbstractFunction1() {
    }
    $c_sr_AbstractFunction1.prototype = new $h_O();
    $c_sr_AbstractFunction1.prototype.constructor = $c_sr_AbstractFunction1;
    /** @constructor */
    function $h_sr_AbstractFunction1() {
    }
    $h_sr_AbstractFunction1.prototype = $c_sr_AbstractFunction1.prototype;
    $c_sr_AbstractFunction1.prototype.toString__T = (function() {
      return "<function1>";
    });
    /** @constructor */
    function $c_sr_AbstractFunction2() {
    }
    $c_sr_AbstractFunction2.prototype = new $h_O();
    $c_sr_AbstractFunction2.prototype.constructor = $c_sr_AbstractFunction2;
    /** @constructor */
    function $h_sr_AbstractFunction2() {
    }
    $h_sr_AbstractFunction2.prototype = $c_sr_AbstractFunction2.prototype;
    $c_sr_AbstractFunction2.prototype.toString__T = (function() {
      return "<function2>";
    });
    /** @constructor */
    function $c_s_util_control_NoStackTrace$() {
      this.s_util_control_NoStackTrace$__f__noSuppression = false;
      this.s_util_control_NoStackTrace$__f__noSuppression = false;
    }
    $c_s_util_control_NoStackTrace$.prototype = new $h_O();
    $c_s_util_control_NoStackTrace$.prototype.constructor = $c_s_util_control_NoStackTrace$;
    $c_s_util_control_NoStackTrace$.prototype;
    new $TypeData().initClass($c_s_util_control_NoStackTrace$, "scala.util.control.NoStackTrace$", ({
      s_util_control_NoStackTrace$: 1,
      Ljava_io_Serializable: 1
    }));
    var $n_s_util_control_NoStackTrace$;
    function $m_s_util_control_NoStackTrace$() {
      if ((!$n_s_util_control_NoStackTrace$)) {
        $n_s_util_control_NoStackTrace$ = new $c_s_util_control_NoStackTrace$();
      }
      return $n_s_util_control_NoStackTrace$;
    }
    /** @constructor */
    function $c_s_util_hashing_MurmurHash3$() {
      this.s_util_hashing_MurmurHash3$__f_seqSeed = 0;
      this.s_util_hashing_MurmurHash3$__f_mapSeed = 0;
      this.s_util_hashing_MurmurHash3$__f_setSeed = 0;
      this.s_util_hashing_MurmurHash3$__f_emptyMapHash = 0;
      $n_s_util_hashing_MurmurHash3$ = this;
      this.s_util_hashing_MurmurHash3$__f_seqSeed = $f_T__hashCode__I("Seq");
      this.s_util_hashing_MurmurHash3$__f_mapSeed = $f_T__hashCode__I("Map");
      this.s_util_hashing_MurmurHash3$__f_setSeed = $f_T__hashCode__I("Set");
      this.s_util_hashing_MurmurHash3$__f_emptyMapHash = this.unorderedHash__sc_IterableOnce__I__I($m_sci_Nil$(), this.s_util_hashing_MurmurHash3$__f_mapSeed);
    }
    $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
    $c_s_util_hashing_MurmurHash3$.prototype.constructor = $c_s_util_hashing_MurmurHash3$;
    $c_s_util_hashing_MurmurHash3$.prototype;
    $c_s_util_hashing_MurmurHash3$.prototype.tuple2Hash__O__O__I = (function(x, y) {
      return this.tuple2Hash__I__I__I__I($m_sr_Statics$().anyHash__O__I(x), $m_sr_Statics$().anyHash__O__I(y), (-889275714));
    });
    $c_s_util_hashing_MurmurHash3$.prototype.seqHash__sc_Seq__I = (function(xs) {
      if ($is_sc_IndexedSeq(xs)) {
        var x2 = $as_sc_IndexedSeq(xs);
        return this.indexedSeqHash__sc_IndexedSeq__I__I(x2, this.s_util_hashing_MurmurHash3$__f_seqSeed);
      } else if ((xs instanceof $c_sci_List)) {
        var x3 = $as_sci_List(xs);
        return this.listHash__sci_List__I__I(x3, this.s_util_hashing_MurmurHash3$__f_seqSeed);
      } else {
        return this.orderedHash__sc_IterableOnce__I__I(xs, this.s_util_hashing_MurmurHash3$__f_seqSeed);
      }
    });
    $c_s_util_hashing_MurmurHash3$.prototype.mapHash__sc_Map__I = (function(xs) {
      if ($n(xs).isEmpty__Z()) {
        return this.s_util_hashing_MurmurHash3$__f_emptyMapHash;
      } else {
        var accum = new $c_s_util_hashing_MurmurHash3$accum$1();
        var h = this.s_util_hashing_MurmurHash3$__f_mapSeed;
        $n(xs).foreachEntry__F2__V(accum);
        h = this.mix__I__I__I(h, accum.s_util_hashing_MurmurHash3$accum$1__f_a);
        h = this.mix__I__I__I(h, accum.s_util_hashing_MurmurHash3$accum$1__f_b);
        h = this.mixLast__I__I__I(h, accum.s_util_hashing_MurmurHash3$accum$1__f_c);
        return this.finalizeHash__I__I__I(h, accum.s_util_hashing_MurmurHash3$accum$1__f_n);
      }
    });
    new $TypeData().initClass($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
      s_util_hashing_MurmurHash3$: 1,
      s_util_hashing_MurmurHash3: 1
    }));
    var $n_s_util_hashing_MurmurHash3$;
    function $m_s_util_hashing_MurmurHash3$() {
      if ((!$n_s_util_hashing_MurmurHash3$)) {
        $n_s_util_hashing_MurmurHash3$ = new $c_s_util_hashing_MurmurHash3$();
      }
      return $n_s_util_hashing_MurmurHash3$;
    }
    /** @constructor */
    function $c_s_util_hashing_MurmurHash3$accum$1() {
      this.s_util_hashing_MurmurHash3$accum$1__f_a = 0;
      this.s_util_hashing_MurmurHash3$accum$1__f_b = 0;
      this.s_util_hashing_MurmurHash3$accum$1__f_n = 0;
      this.s_util_hashing_MurmurHash3$accum$1__f_c = 0;
      this.s_util_hashing_MurmurHash3$accum$1__f_a = 0;
      this.s_util_hashing_MurmurHash3$accum$1__f_b = 0;
      this.s_util_hashing_MurmurHash3$accum$1__f_n = 0;
      this.s_util_hashing_MurmurHash3$accum$1__f_c = 1;
    }
    $c_s_util_hashing_MurmurHash3$accum$1.prototype = new $h_O();
    $c_s_util_hashing_MurmurHash3$accum$1.prototype.constructor = $c_s_util_hashing_MurmurHash3$accum$1;
    $c_s_util_hashing_MurmurHash3$accum$1.prototype;
    $c_s_util_hashing_MurmurHash3$accum$1.prototype.toString__T = (function() {
      return "<function2>";
    });
    $c_s_util_hashing_MurmurHash3$accum$1.prototype.apply__O__O__V = (function(k, v) {
      var h = $m_s_util_hashing_MurmurHash3$().tuple2Hash__O__O__I(k, v);
      this.s_util_hashing_MurmurHash3$accum$1__f_a = ((this.s_util_hashing_MurmurHash3$accum$1__f_a + h) | 0);
      this.s_util_hashing_MurmurHash3$accum$1__f_b = (this.s_util_hashing_MurmurHash3$accum$1__f_b ^ h);
      this.s_util_hashing_MurmurHash3$accum$1__f_c = Math.imul(this.s_util_hashing_MurmurHash3$accum$1__f_c, (1 | h));
      this.s_util_hashing_MurmurHash3$accum$1__f_n = ((1 + this.s_util_hashing_MurmurHash3$accum$1__f_n) | 0);
    });
    $c_s_util_hashing_MurmurHash3$accum$1.prototype.apply__O__O__O = (function(v1, v2) {
      this.apply__O__O__V(v1, v2);
    });
    new $TypeData().initClass($c_s_util_hashing_MurmurHash3$accum$1, "scala.util.hashing.MurmurHash3$accum$1", ({
      s_util_hashing_MurmurHash3$accum$1: 1,
      F2: 1
    }));
    function $ct_s_util_matching_Regex__ju_regex_Pattern__sci_Seq__($thiz, pattern, groupNames) {
      $thiz.s_util_matching_Regex__f_pattern = pattern;
      return $thiz;
    }
    function $ct_s_util_matching_Regex__T__sci_Seq__($thiz, regex, groupNames) {
      $ct_s_util_matching_Regex__ju_regex_Pattern__sci_Seq__($thiz, $m_ju_regex_PatternCompiler$().compile__T__I__ju_regex_Pattern(regex, 0));
      return $thiz;
    }
    /** @constructor */
    function $c_s_util_matching_Regex() {
      this.s_util_matching_Regex__f_pattern = null;
    }
    $c_s_util_matching_Regex.prototype = new $h_O();
    $c_s_util_matching_Regex.prototype.constructor = $c_s_util_matching_Regex;
    $c_s_util_matching_Regex.prototype;
    $c_s_util_matching_Regex.prototype.unapplySeq__jl_CharSequence__s_Option = (function(s) {
      var this$1$1 = $n(this.s_util_matching_Regex__f_pattern);
      var m = new $c_ju_regex_Matcher(this$1$1, $dp_toString__T($n(s)));
      if (m.matches__Z()) {
        var n = $n(m.ju_regex_Matcher__f_pattern0).ju_regex_Pattern__f_groupCount;
        var b = new $c_scm_ListBuffer();
        var i = 0;
        while ((i < n)) {
          var arg1 = i;
          var elem = m.group__I__T(((1 + arg1) | 0));
          b.addOne__O__scm_ListBuffer(elem);
          i = ((1 + i) | 0);
        }
        return new $c_s_Some(b.toList__sci_List());
      } else {
        return $m_s_None$();
      }
    });
    $c_s_util_matching_Regex.prototype.toString__T = (function() {
      return $n(this.s_util_matching_Regex__f_pattern).ju_regex_Pattern__f__pattern;
    });
    new $TypeData().initClass($c_s_util_matching_Regex, "scala.util.matching.Regex", ({
      s_util_matching_Regex: 1,
      Ljava_io_Serializable: 1
    }));
    /** @constructor */
    function $c_Lscalatags_JsDom$GenericAttr() {
    }
    $c_Lscalatags_JsDom$GenericAttr.prototype = new $h_O();
    $c_Lscalatags_JsDom$GenericAttr.prototype.constructor = $c_Lscalatags_JsDom$GenericAttr;
    $c_Lscalatags_JsDom$GenericAttr.prototype;
    $c_Lscalatags_JsDom$GenericAttr.prototype.apply__Lorg_scalajs_dom_Element__Lscalatags_generic_Attr__O__V = (function(t, a, v) {
      var x13 = $n(a).Lscalatags_generic_Attr__f_namespace;
      var x = $m_s_None$();
      if ((x === x13)) {
        if ((!$n(a).Lscalatags_generic_Attr__f_raw)) {
          if (($n(a).Lscalatags_generic_Attr__f_name === "class")) {
            var this$1 = $n($dp_toString__T($n(v)));
            var xs = $f_T__split__T__I__AT(this$1, " ", 0);
            var f = ((cls) => {
              var cls$1 = $as_T(cls);
              var x$1 = $f_T__trim__T($n(cls$1));
              var this$6 = $n(x$1);
              if ((!(this$6 === ""))) {
                t.classList.add($f_T__trim__T($n(cls$1)));
              }
            });
            var len = $n(xs).u.length;
            var i = 0;
            if ((xs !== null)) {
              while ((i < len)) {
                var arg1 = $n(xs).get(i);
                f(arg1);
                i = ((1 + i) | 0);
              }
              return (void 0);
            } else if ((xs instanceof $ac_I)) {
              var x3 = $asArrayOf_I(xs, 1);
              while ((i < len)) {
                var arg1$1 = $n(x3).get(i);
                f(arg1$1);
                i = ((1 + i) | 0);
              }
              return (void 0);
            } else if ((xs instanceof $ac_D)) {
              var x4 = $asArrayOf_D(xs, 1);
              while ((i < len)) {
                var arg1$2 = $n(x4).get(i);
                f(arg1$2);
                i = ((1 + i) | 0);
              }
              return (void 0);
            } else if ((xs instanceof $ac_J)) {
              var x5 = $asArrayOf_J(xs, 1);
              while ((i < len)) {
                var t$1 = $n(x5).get(i);
                var lo = t$1.RTLong__f_lo;
                var hi = t$1.RTLong__f_hi;
                f(new $c_RTLong(lo, hi));
                i = ((1 + i) | 0);
              }
              return (void 0);
            } else if ((xs instanceof $ac_F)) {
              var x6 = $asArrayOf_F(xs, 1);
              while ((i < len)) {
                var arg1$3 = $n(x6).get(i);
                f(arg1$3);
                i = ((1 + i) | 0);
              }
              return (void 0);
            } else if ((xs instanceof $ac_C)) {
              var x7 = $asArrayOf_C(xs, 1);
              while ((i < len)) {
                var arg1$4 = $n(x7).get(i);
                f($bC(arg1$4));
                i = ((1 + i) | 0);
              }
              return (void 0);
            } else if ((xs instanceof $ac_B)) {
              var x8 = $asArrayOf_B(xs, 1);
              while ((i < len)) {
                var arg1$5 = $n(x8).get(i);
                f(arg1$5);
                i = ((1 + i) | 0);
              }
              return (void 0);
            } else if ((xs instanceof $ac_S)) {
              var x9 = $asArrayOf_S(xs, 1);
              while ((i < len)) {
                var arg1$6 = $n(x9).get(i);
                f(arg1$6);
                i = ((1 + i) | 0);
              }
              return (void 0);
            } else if ((xs instanceof $ac_Z)) {
              var x10 = $asArrayOf_Z(xs, 1);
              while ((i < len)) {
                var arg1$7 = $n(x10).get(i);
                f(arg1$7);
                i = ((1 + i) | 0);
              }
              return (void 0);
            } else {
              throw new $c_s_MatchError(xs);
            }
          } else {
            t.setAttribute($n(a).Lscalatags_generic_Attr__f_name, $dp_toString__T($n(v)));
            return (void 0);
          }
        } else {
          var tmpElm = document.createElement("p");
          tmpElm.innerHTML = (((("<p " + $n(a).Lscalatags_generic_Attr__f_name) + "=\"") + $dp_toString__T($n(v))) + "\"><p>");
          var newAttr = tmpElm.children[0].attributes[0].cloneNode(true);
          t.setAttributeNode(newAttr);
          return (void 0);
        }
      }
      if ((x13 instanceof $c_s_Some)) {
        var namespace = $as_Lscalatags_generic_Namespace($n($as_s_Some(x13)).s_Some__f_value);
        t.setAttributeNS($n(namespace).uri__T(), $n(a).Lscalatags_generic_Attr__f_name, $dp_toString__T($n(v)));
        return (void 0);
      }
      throw new $c_s_MatchError(x13);
    });
    new $TypeData().initClass($c_Lscalatags_JsDom$GenericAttr, "scalatags.JsDom$GenericAttr", ({
      Lscalatags_JsDom$GenericAttr: 1,
      Lscalatags_generic_AttrValue: 1
    }));
    /** @constructor */
    function $c_Lscalatags_JsDom$GenericStyle() {
    }
    $c_Lscalatags_JsDom$GenericStyle.prototype = new $h_O();
    $c_Lscalatags_JsDom$GenericStyle.prototype.constructor = $c_Lscalatags_JsDom$GenericStyle;
    $c_Lscalatags_JsDom$GenericStyle.prototype;
    new $TypeData().initClass($c_Lscalatags_JsDom$GenericStyle, "scalatags.JsDom$GenericStyle", ({
      Lscalatags_JsDom$GenericStyle: 1,
      Lscalatags_generic_StyleValue: 1
    }));
    /** @constructor */
    function $c_Lscalatags_LowPriorityImplicits$$anon$2(ev$3) {
      this.Lscalatags_LowPriorityImplicits$$anon$2__f_ev$2 = null;
      this.Lscalatags_LowPriorityImplicits$$anon$2__f_ev$2 = ev$3;
    }
    $c_Lscalatags_LowPriorityImplicits$$anon$2.prototype = new $h_O();
    $c_Lscalatags_LowPriorityImplicits$$anon$2.prototype.constructor = $c_Lscalatags_LowPriorityImplicits$$anon$2;
    $c_Lscalatags_LowPriorityImplicits$$anon$2.prototype;
    $c_Lscalatags_LowPriorityImplicits$$anon$2.prototype.apply__Lorg_scalajs_dom_Element__Lscalatags_generic_Attr__O__V = (function(t, a, v) {
      t[$n(a).Lscalatags_generic_Attr__f_name] = $n(this.Lscalatags_LowPriorityImplicits$$anon$2__f_ev$2).apply__O__O(v);
    });
    new $TypeData().initClass($c_Lscalatags_LowPriorityImplicits$$anon$2, "scalatags.LowPriorityImplicits$$anon$2", ({
      Lscalatags_LowPriorityImplicits$$anon$2: 1,
      Lscalatags_generic_AttrValue: 1
    }));
    function $f_Lscalatags_generic_Aggregate__$init$__V($thiz) {
      $thiz.Lscalatags_JsDom$all$__f_stringAttr = new $c_Lscalatags_JsDom$GenericAttr();
      $thiz.Lscalatags_JsDom$all$__f_stringStyle = new $c_Lscalatags_JsDom$GenericStyle();
      $thiz.Lscalatags_JsDom$all$__f_booleanStyle = new $c_Lscalatags_JsDom$GenericStyle();
    }
    /** @constructor */
    function $c_Lscalatags_generic_Namespace$$anon$1() {
    }
    $c_Lscalatags_generic_Namespace$$anon$1.prototype = new $h_O();
    $c_Lscalatags_generic_Namespace$$anon$1.prototype.constructor = $c_Lscalatags_generic_Namespace$$anon$1;
    $c_Lscalatags_generic_Namespace$$anon$1.prototype;
    $c_Lscalatags_generic_Namespace$$anon$1.prototype.uri__T = (function() {
      return "http://www.w3.org/1999/xhtml";
    });
    new $TypeData().initClass($c_Lscalatags_generic_Namespace$$anon$1, "scalatags.generic.Namespace$$anon$1", ({
      Lscalatags_generic_Namespace$$anon$1: 1,
      Lscalatags_generic_Namespace: 1
    }));
    function $f_Lscalatags_generic_Util__attr__T__Lscalatags_generic_Namespace__Z__Lscalatags_generic_Attr($thiz, s, ns, raw) {
      var namespace = $m_s_Option$().apply__O__s_Option(ns);
      return new $c_Lscalatags_generic_Attr(s, namespace, raw);
    }
    /** @constructor */
    function $c_jl_Class($data) {
      this.data = $data;
    }
    $c_jl_Class.prototype = new $h_O();
    $c_jl_Class.prototype.constructor = $c_jl_Class;
    $c_jl_Class.prototype;
    $c_jl_Class.prototype.toString__T = (function() {
      return ((this.data.isInterface ? "interface " : (this.data.isPrimitive ? "" : "class ")) + this.data.name);
    });
    new $TypeData().initClass($c_jl_Class, "java.lang.Class", ({
      jl_Class: 1,
      Ljava_io_Serializable: 1,
      jl_constant_Constable: 1
    }));
    class $c_jl_Error extends $c_jl_Throwable {
    }
    class $c_jl_Exception extends $c_jl_Throwable {
    }
    /** @constructor */
    function $c_s_$less$colon$less() {
    }
    $c_s_$less$colon$less.prototype = new $h_O();
    $c_s_$less$colon$less.prototype.constructor = $c_s_$less$colon$less;
    /** @constructor */
    function $h_s_$less$colon$less() {
    }
    $h_s_$less$colon$less.prototype = $c_s_$less$colon$less.prototype;
    /** @constructor */
    function $c_s_Predef$() {
      this.s_Predef$__f_Map = null;
      $n_s_Predef$ = this;
      this.s_Predef$__f_Map = $m_sci_Map$();
    }
    $c_s_Predef$.prototype = new $h_s_LowPriorityImplicits();
    $c_s_Predef$.prototype.constructor = $c_s_Predef$;
    $c_s_Predef$.prototype;
    $c_s_Predef$.prototype.require__Z__V = (function(requirement) {
      if ((!requirement)) {
        throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "requirement failed");
      }
    });
    new $TypeData().initClass($c_s_Predef$, "scala.Predef$", ({
      s_Predef$: 1,
      s_LowPriorityImplicits: 1,
      s_LowPriorityImplicits2: 1
    }));
    var $n_s_Predef$;
    function $m_s_Predef$() {
      if ((!$n_s_Predef$)) {
        $n_s_Predef$ = new $c_s_Predef$();
      }
      return $n_s_Predef$;
    }
    function $f_s_Product2__productElement__I__O($thiz, n) {
      switch (n) {
        case 0: {
          return $thiz.T2__f__1;
        }
        case 1: {
          return $thiz.T2__f__2;
        }
        default: {
          throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 1)"));
        }
      }
    }
    function $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__($thiz, delegate) {
      $thiz.sc_ClassTagIterableFactory$AnyIterableDelegate__f_delegate = delegate;
      return $thiz;
    }
    /** @constructor */
    function $c_sc_ClassTagIterableFactory$AnyIterableDelegate() {
      this.sc_ClassTagIterableFactory$AnyIterableDelegate__f_delegate = null;
    }
    $c_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = new $h_O();
    $c_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype.constructor = $c_sc_ClassTagIterableFactory$AnyIterableDelegate;
    /** @constructor */
    function $h_sc_ClassTagIterableFactory$AnyIterableDelegate() {
    }
    $h_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype = $c_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype;
    $c_sc_ClassTagIterableFactory$AnyIterableDelegate.prototype.from__sc_IterableOnce__O = (function(it) {
      return $n(this.sc_ClassTagIterableFactory$AnyIterableDelegate__f_delegate).from__sc_IterableOnce__O__O(it, $m_s_reflect_ManifestFactory$AnyManifest$());
    });
    function $f_sc_IterableOps__sizeCompare__I__I($thiz, otherSize) {
      if ((otherSize < 0)) {
        return 1;
      } else {
        var known = $thiz.knownSize__I();
        if ((known >= 0)) {
          return ((known === otherSize) ? 0 : ((known < otherSize) ? (-1) : 1));
        } else {
          var i = 0;
          var it = $thiz.iterator__sc_Iterator();
          while ($n(it).hasNext__Z()) {
            if ((i === otherSize)) {
              return 1;
            }
            $n(it).next__O();
            i = ((1 + i) | 0);
          }
          return ((i - otherSize) | 0);
        }
      }
    }
    function $f_sc_Iterator__concat__F0__sc_Iterator($thiz, xs) {
      return new $c_sc_Iterator$ConcatIterator($thiz).concat__F0__sc_Iterator(xs);
    }
    function $f_sc_Iterator__sliceIterator__I__I__sc_Iterator($thiz, from, until) {
      var lo = ((from > 0) ? from : 0);
      var rest = ((until < 0) ? (-1) : ((until <= lo) ? 0 : ((until - lo) | 0)));
      return ((rest === 0) ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : new $c_sc_Iterator$SliceIterator($thiz, lo, rest));
    }
    function $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz, that) {
      var those = $n(that).iterator__sc_Iterator();
      while (($thiz.hasNext__Z() && $n(those).hasNext__Z())) {
        if ((!$m_sr_BoxesRunTime$().equals__O__O__Z($thiz.next__O(), $n(those).next__O()))) {
          return false;
        }
      }
      return ($thiz.hasNext__Z() === $n(those).hasNext__Z());
    }
    /** @constructor */
    function $c_sc_Iterator$() {
      this.sc_Iterator$__f_scala$collection$Iterator$$_empty = null;
      $n_sc_Iterator$ = this;
      this.sc_Iterator$__f_scala$collection$Iterator$$_empty = new $c_sc_Iterator$$anon$19();
    }
    $c_sc_Iterator$.prototype = new $h_O();
    $c_sc_Iterator$.prototype.constructor = $c_sc_Iterator$;
    $c_sc_Iterator$.prototype;
    new $TypeData().initClass($c_sc_Iterator$, "scala.collection.Iterator$", ({
      sc_Iterator$: 1,
      sc_IterableFactory: 1,
      Ljava_io_Serializable: 1
    }));
    var $n_sc_Iterator$;
    function $m_sc_Iterator$() {
      if ((!$n_sc_Iterator$)) {
        $n_sc_Iterator$ = new $c_sc_Iterator$();
      }
      return $n_sc_Iterator$;
    }
    function $ct_sc_MapFactory$Delegate__sc_MapFactory__($thiz, delegate) {
      $thiz.sc_MapFactory$Delegate__f_delegate = delegate;
      return $thiz;
    }
    /** @constructor */
    function $c_sc_MapFactory$Delegate() {
      this.sc_MapFactory$Delegate__f_delegate = null;
    }
    $c_sc_MapFactory$Delegate.prototype = new $h_O();
    $c_sc_MapFactory$Delegate.prototype.constructor = $c_sc_MapFactory$Delegate;
    /** @constructor */
    function $h_sc_MapFactory$Delegate() {
    }
    $h_sc_MapFactory$Delegate.prototype = $c_sc_MapFactory$Delegate.prototype;
    /** @constructor */
    function $c_sci_BitmapIndexedMapNode(dataMap, nodeMap, content, originalHashes, size, cachedJavaKeySetHashCode) {
      this.sci_BitmapIndexedMapNode__f_dataMap = 0;
      this.sci_BitmapIndexedMapNode__f_nodeMap = 0;
      this.sci_BitmapIndexedMapNode__f_content = null;
      this.sci_BitmapIndexedMapNode__f_originalHashes = null;
      this.sci_BitmapIndexedMapNode__f_size = 0;
      this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode = 0;
      this.sci_BitmapIndexedMapNode__f_dataMap = dataMap;
      this.sci_BitmapIndexedMapNode__f_nodeMap = nodeMap;
      this.sci_BitmapIndexedMapNode__f_content = content;
      this.sci_BitmapIndexedMapNode__f_originalHashes = originalHashes;
      this.sci_BitmapIndexedMapNode__f_size = size;
      this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode = cachedJavaKeySetHashCode;
    }
    $c_sci_BitmapIndexedMapNode.prototype = new $h_sci_MapNode();
    $c_sci_BitmapIndexedMapNode.prototype.constructor = $c_sci_BitmapIndexedMapNode;
    $c_sci_BitmapIndexedMapNode.prototype;
    $c_sci_BitmapIndexedMapNode.prototype.size__I = (function() {
      return this.sci_BitmapIndexedMapNode__f_size;
    });
    $c_sci_BitmapIndexedMapNode.prototype.cachedJavaKeySetHashCode__I = (function() {
      return this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode;
    });
    $c_sci_BitmapIndexedMapNode.prototype.getKey__I__O = (function(index) {
      return $n(this.sci_BitmapIndexedMapNode__f_content).get((index << 1));
    });
    $c_sci_BitmapIndexedMapNode.prototype.getValue__I__O = (function(index) {
      return $n(this.sci_BitmapIndexedMapNode__f_content).get(((1 + (index << 1)) | 0));
    });
    $c_sci_BitmapIndexedMapNode.prototype.getPayload__I__T2 = (function(index) {
      return new $c_T2($n(this.sci_BitmapIndexedMapNode__f_content).get((index << 1)), $n(this.sci_BitmapIndexedMapNode__f_content).get(((1 + (index << 1)) | 0)));
    });
    $c_sci_BitmapIndexedMapNode.prototype.getHash__I__I = (function(index) {
      return $n(this.sci_BitmapIndexedMapNode__f_originalHashes).get(index);
    });
    $c_sci_BitmapIndexedMapNode.prototype.getNode__I__sci_MapNode = (function(index) {
      return $as_sci_MapNode($n(this.sci_BitmapIndexedMapNode__f_content).get((((((-1) + $n(this.sci_BitmapIndexedMapNode__f_content).u.length) | 0) - index) | 0)));
    });
    $c_sci_BitmapIndexedMapNode.prototype.apply__O__I__I__I__O = (function(key, originalHash, keyHash, shift) {
      var mask = $m_sci_Node$().maskFrom__I__I__I(keyHash, shift);
      var bitpos = $m_sci_Node$().bitposFrom__I__I(mask);
      if (((this.sci_BitmapIndexedMapNode__f_dataMap & bitpos) !== 0)) {
        var index = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_dataMap, mask, bitpos);
        if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.getKey__I__O(index))) {
          return this.getValue__I__O(index);
        } else {
          throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
        }
      } else if (((this.sci_BitmapIndexedMapNode__f_nodeMap & bitpos) !== 0)) {
        return $n(this.getNode__I__sci_MapNode($m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_nodeMap, mask, bitpos))).apply__O__I__I__I__O(key, originalHash, keyHash, ((5 + shift) | 0));
      } else {
        throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
      }
    });
    $c_sci_BitmapIndexedMapNode.prototype.getOrElse__O__I__I__I__F0__O = (function(key, originalHash, keyHash, shift, f) {
      var mask = $m_sci_Node$().maskFrom__I__I__I(keyHash, shift);
      var bitpos = $m_sci_Node$().bitposFrom__I__I(mask);
      if (((this.sci_BitmapIndexedMapNode__f_dataMap & bitpos) !== 0)) {
        var index = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_dataMap, mask, bitpos);
        var key0 = this.getKey__I__O(index);
        return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, key0) ? this.getValue__I__O(index) : $n(f).apply__O());
      } else if (((this.sci_BitmapIndexedMapNode__f_nodeMap & bitpos) !== 0)) {
        var index$2 = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_nodeMap, mask, bitpos);
        return $n(this.getNode__I__sci_MapNode(index$2)).getOrElse__O__I__I__I__F0__O(key, originalHash, keyHash, ((5 + shift) | 0), f);
      } else {
        return $n(f).apply__O();
      }
    });
    $c_sci_BitmapIndexedMapNode.prototype.containsKey__O__I__I__I__Z = (function(key, originalHash, keyHash, shift) {
      var mask = $m_sci_Node$().maskFrom__I__I__I(keyHash, shift);
      var bitpos = $m_sci_Node$().bitposFrom__I__I(mask);
      if (((this.sci_BitmapIndexedMapNode__f_dataMap & bitpos) !== 0)) {
        var index = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_dataMap, mask, bitpos);
        return (($n(this.sci_BitmapIndexedMapNode__f_originalHashes).get(index) === originalHash) && $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.getKey__I__O(index)));
      } else {
        return (((this.sci_BitmapIndexedMapNode__f_nodeMap & bitpos) !== 0) && $n(this.getNode__I__sci_MapNode($m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_nodeMap, mask, bitpos))).containsKey__O__I__I__I__Z(key, originalHash, keyHash, ((5 + shift) | 0)));
      }
    });
    $c_sci_BitmapIndexedMapNode.prototype.updated__O__O__I__I__I__Z__sci_BitmapIndexedMapNode = (function(key, value, originalHash, keyHash, shift, replaceValue) {
      var mask = $m_sci_Node$().maskFrom__I__I__I(keyHash, shift);
      var bitpos = $m_sci_Node$().bitposFrom__I__I(mask);
      if (((this.sci_BitmapIndexedMapNode__f_dataMap & bitpos) !== 0)) {
        var index = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_dataMap, mask, bitpos);
        var key0 = this.getKey__I__O(index);
        var key0UnimprovedHash = this.getHash__I__I(index);
        if (((key0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().equals__O__O__Z(key0, key))) {
          if (replaceValue) {
            var value0 = this.getValue__I__O(index);
            return ((Object.is(key0, key) && Object.is(value0, value)) ? this : this.copyAndSetValue__I__O__O__sci_BitmapIndexedMapNode(bitpos, key, value));
          } else {
            return this;
          }
        } else {
          var value0$2 = this.getValue__I__O(index);
          var key0Hash = $m_sc_Hashing$().improve__I__I(key0UnimprovedHash);
          var subNodeNew = this.mergeTwoKeyValPairs__O__O__I__I__O__O__I__I__I__sci_MapNode(key0, value0$2, key0UnimprovedHash, key0Hash, key, value, originalHash, keyHash, ((5 + shift) | 0));
          return this.copyAndMigrateFromInlineToNode__I__I__sci_MapNode__sci_BitmapIndexedMapNode(bitpos, key0Hash, subNodeNew);
        }
      } else if (((this.sci_BitmapIndexedMapNode__f_nodeMap & bitpos) !== 0)) {
        var index$2 = $m_sci_Node$().indexFrom__I__I__I__I(this.sci_BitmapIndexedMapNode__f_nodeMap, mask, bitpos);
        var subNode = this.getNode__I__sci_MapNode(index$2);
        var subNodeNew$2 = $n(subNode).updated__O__O__I__I__I__Z__sci_MapNode(key, value, originalHash, keyHash, ((5 + shift) | 0), replaceValue);
        return ((subNodeNew$2 === subNode) ? this : this.copyAndSetNode__I__sci_MapNode__sci_MapNode__sci_BitmapIndexedMapNode(bitpos, subNode, subNodeNew$2));
      } else {
        return this.copyAndInsertValue__I__O__I__I__O__sci_BitmapIndexedMapNode(bitpos, key, originalHash, keyHash, value);
      }
    });
    $c_sci_BitmapIndexedMapNode.prototype.mergeTwoKeyValPairs__O__O__I__I__O__O__I__I__I__sci_MapNode = (function(key0, value0, originalHash0, keyHash0, key1, value1, originalHash1, keyHash1, shift) {
      if ((shift >= 32)) {
        var this$4 = $m_sci_Vector$();
        var array = [new $c_T2(key0, value0), new $c_T2(key1, value1)];
        var elems = new $c_sjsr_WrappedVarArgs(array);
        return new $c_sci_HashCollisionMapNode(originalHash0, keyHash0, this$4.from__sc_IterableOnce__sci_Vector(elems));
      } else {
        var mask0 = $m_sci_Node$().maskFrom__I__I__I(keyHash0, shift);
        var mask1 = $m_sci_Node$().maskFrom__I__I__I(keyHash1, shift);
        var newCachedHash = ((keyHash0 + keyHash1) | 0);
        if ((mask0 !== mask1)) {
          var dataMap = ($m_sci_Node$().bitposFrom__I__I(mask0) | $m_sci_Node$().bitposFrom__I__I(mask1));
          return ((mask0 < mask1) ? new $c_sci_BitmapIndexedMapNode(dataMap, 0, new $ac_O([key0, value0, key1, value1]), new $ac_I(new Int32Array([originalHash0, originalHash1])), 2, newCachedHash) : new $c_sci_BitmapIndexedMapNode(dataMap, 0, new $ac_O([key1, value1, key0, value0]), new $ac_I(new Int32Array([originalHash1, originalHash0])), 2, newCachedHash));
        } else {
          var nodeMap = $m_sci_Node$().bitposFrom__I__I(mask0);
          var node = this.mergeTwoKeyValPairs__O__O__I__I__O__O__I__I__I__sci_MapNode(key0, value0, originalHash0, keyHash0, key1, value1, originalHash1, keyHash1, ((5 + shift) | 0));
          return new $c_sci_BitmapIndexedMapNode(0, nodeMap, new $ac_O([node]), $m_s_Array$EmptyArrays$().s_Array$EmptyArrays$__f_emptyIntArray, $n(node).size__I(), $n(node).cachedJavaKeySetHashCode__I());
        }
      }
    });
    $c_sci_BitmapIndexedMapNode.prototype.hasNodes__Z = (function() {
      return (this.sci_BitmapIndexedMapNode__f_nodeMap !== 0);
    });
    $c_sci_BitmapIndexedMapNode.prototype.nodeArity__I = (function() {
      var i = this.sci_BitmapIndexedMapNode__f_nodeMap;
      return $m_jl_Integer$().bitCount__I__I(i);
    });
    $c_sci_BitmapIndexedMapNode.prototype.hasPayload__Z = (function() {
      return (this.sci_BitmapIndexedMapNode__f_dataMap !== 0);
    });
    $c_sci_BitmapIndexedMapNode.prototype.payloadArity__I = (function() {
      var i = this.sci_BitmapIndexedMapNode__f_dataMap;
      return $m_jl_Integer$().bitCount__I__I(i);
    });
    $c_sci_BitmapIndexedMapNode.prototype.dataIndex__I__I = (function(bitpos) {
      var i = (this.sci_BitmapIndexedMapNode__f_dataMap & (((-1) + bitpos) | 0));
      return $m_jl_Integer$().bitCount__I__I(i);
    });
    $c_sci_BitmapIndexedMapNode.prototype.nodeIndex__I__I = (function(bitpos) {
      var i = (this.sci_BitmapIndexedMapNode__f_nodeMap & (((-1) + bitpos) | 0));
      return $m_jl_Integer$().bitCount__I__I(i);
    });
    $c_sci_BitmapIndexedMapNode.prototype.copyAndSetValue__I__O__O__sci_BitmapIndexedMapNode = (function(bitpos, newKey, newValue) {
      var dataIx = this.dataIndex__I__I(bitpos);
      var idx = (dataIx << 1);
      var src = this.sci_BitmapIndexedMapNode__f_content;
      var dst = new $ac_O($n(src).u.length);
      var length = $n(src).u.length;
      $systemArraycopyRefs($n(src), 0, dst, 0, length);
      dst.set(((1 + idx) | 0), newValue);
      return new $c_sci_BitmapIndexedMapNode(this.sci_BitmapIndexedMapNode__f_dataMap, this.sci_BitmapIndexedMapNode__f_nodeMap, dst, this.sci_BitmapIndexedMapNode__f_originalHashes, this.sci_BitmapIndexedMapNode__f_size, this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode);
    });
    $c_sci_BitmapIndexedMapNode.prototype.copyAndSetNode__I__sci_MapNode__sci_MapNode__sci_BitmapIndexedMapNode = (function(bitpos, oldNode, newNode) {
      var idx = (((((-1) + $n(this.sci_BitmapIndexedMapNode__f_content).u.length) | 0) - this.nodeIndex__I__I(bitpos)) | 0);
      var src = this.sci_BitmapIndexedMapNode__f_content;
      var dst = new $ac_O($n(src).u.length);
      var length = $n(src).u.length;
      $systemArraycopyRefs($n(src), 0, dst, 0, length);
      dst.set(idx, newNode);
      return new $c_sci_BitmapIndexedMapNode(this.sci_BitmapIndexedMapNode__f_dataMap, this.sci_BitmapIndexedMapNode__f_nodeMap, dst, this.sci_BitmapIndexedMapNode__f_originalHashes, ((((this.sci_BitmapIndexedMapNode__f_size - $n(oldNode).size__I()) | 0) + $n(newNode).size__I()) | 0), ((((this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode - $n(oldNode).cachedJavaKeySetHashCode__I()) | 0) + $n(newNode).cachedJavaKeySetHashCode__I()) | 0));
    });
    $c_sci_BitmapIndexedMapNode.prototype.copyAndInsertValue__I__O__I__I__O__sci_BitmapIndexedMapNode = (function(bitpos, key, originalHash, keyHash, value) {
      var dataIx = this.dataIndex__I__I(bitpos);
      var idx = (dataIx << 1);
      var src = this.sci_BitmapIndexedMapNode__f_content;
      var dst = new $ac_O(((2 + $n(src).u.length) | 0));
      $systemArraycopyRefs($n(src), 0, dst, 0, idx);
      dst.set(idx, key);
      dst.set(((1 + idx) | 0), value);
      var destPos = ((2 + idx) | 0);
      var length = (($n(src).u.length - idx) | 0);
      $systemArraycopyRefs($n(src), idx, dst, destPos, length);
      var dstHashes = this.insertElement__AI__I__I__AI(this.sci_BitmapIndexedMapNode__f_originalHashes, dataIx, originalHash);
      return new $c_sci_BitmapIndexedMapNode((this.sci_BitmapIndexedMapNode__f_dataMap | bitpos), this.sci_BitmapIndexedMapNode__f_nodeMap, dst, dstHashes, ((1 + this.sci_BitmapIndexedMapNode__f_size) | 0), ((this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode + keyHash) | 0));
    });
    $c_sci_BitmapIndexedMapNode.prototype.migrateFromInlineToNodeInPlace__I__I__sci_MapNode__sci_BitmapIndexedMapNode = (function(bitpos, keyHash, node) {
      var dataIx = this.dataIndex__I__I(bitpos);
      var idxOld = (dataIx << 1);
      var idxNew = (((((-2) + $n(this.sci_BitmapIndexedMapNode__f_content).u.length) | 0) - this.nodeIndex__I__I(bitpos)) | 0);
      var src = this.sci_BitmapIndexedMapNode__f_content;
      var dst = new $ac_O((((-1) + $n(src).u.length) | 0));
      $systemArraycopyRefs($n(src), 0, dst, 0, idxOld);
      var srcPos = ((2 + idxOld) | 0);
      var length = ((idxNew - idxOld) | 0);
      $systemArraycopyRefs($n(src), srcPos, dst, idxOld, length);
      dst.set(idxNew, node);
      var srcPos$1 = ((2 + idxNew) | 0);
      var destPos = ((1 + idxNew) | 0);
      var length$1 = (((-2) + (($n(src).u.length - idxNew) | 0)) | 0);
      $systemArraycopyRefs($n(src), srcPos$1, dst, destPos, length$1);
      var dstHashes = this.removeElement__AI__I__AI(this.sci_BitmapIndexedMapNode__f_originalHashes, dataIx);
      this.sci_BitmapIndexedMapNode__f_dataMap = (this.sci_BitmapIndexedMapNode__f_dataMap ^ bitpos);
      this.sci_BitmapIndexedMapNode__f_nodeMap = (this.sci_BitmapIndexedMapNode__f_nodeMap | bitpos);
      this.sci_BitmapIndexedMapNode__f_content = dst;
      this.sci_BitmapIndexedMapNode__f_originalHashes = dstHashes;
      this.sci_BitmapIndexedMapNode__f_size = (((((-1) + this.sci_BitmapIndexedMapNode__f_size) | 0) + $n(node).size__I()) | 0);
      this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode = ((((this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode - keyHash) | 0) + $n(node).cachedJavaKeySetHashCode__I()) | 0);
      return this;
    });
    $c_sci_BitmapIndexedMapNode.prototype.copyAndMigrateFromInlineToNode__I__I__sci_MapNode__sci_BitmapIndexedMapNode = (function(bitpos, keyHash, node) {
      var dataIx = this.dataIndex__I__I(bitpos);
      var idxOld = (dataIx << 1);
      var idxNew = (((((-2) + $n(this.sci_BitmapIndexedMapNode__f_content).u.length) | 0) - this.nodeIndex__I__I(bitpos)) | 0);
      var src = this.sci_BitmapIndexedMapNode__f_content;
      var dst = new $ac_O((((-1) + $n(src).u.length) | 0));
      $systemArraycopyRefs($n(src), 0, dst, 0, idxOld);
      var srcPos = ((2 + idxOld) | 0);
      var length = ((idxNew - idxOld) | 0);
      $systemArraycopyRefs($n(src), srcPos, dst, idxOld, length);
      dst.set(idxNew, node);
      var srcPos$1 = ((2 + idxNew) | 0);
      var destPos = ((1 + idxNew) | 0);
      var length$1 = (((-2) + (($n(src).u.length - idxNew) | 0)) | 0);
      $systemArraycopyRefs($n(src), srcPos$1, dst, destPos, length$1);
      var dstHashes = this.removeElement__AI__I__AI(this.sci_BitmapIndexedMapNode__f_originalHashes, dataIx);
      return new $c_sci_BitmapIndexedMapNode((this.sci_BitmapIndexedMapNode__f_dataMap ^ bitpos), (this.sci_BitmapIndexedMapNode__f_nodeMap | bitpos), dst, dstHashes, (((((-1) + this.sci_BitmapIndexedMapNode__f_size) | 0) + $n(node).size__I()) | 0), ((((this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode - keyHash) | 0) + $n(node).cachedJavaKeySetHashCode__I()) | 0));
    });
    $c_sci_BitmapIndexedMapNode.prototype.foreachEntry__F2__V = (function(f) {
      var i = this.sci_BitmapIndexedMapNode__f_dataMap;
      var iN = $m_jl_Integer$().bitCount__I__I(i);
      var i$1 = 0;
      while ((i$1 < iN)) {
        $n(f).apply__O__O__O(this.getKey__I__O(i$1), this.getValue__I__O(i$1));
        i$1 = ((1 + i$1) | 0);
      }
      var i$2 = this.sci_BitmapIndexedMapNode__f_nodeMap;
      var jN = $m_jl_Integer$().bitCount__I__I(i$2);
      var j = 0;
      while ((j < jN)) {
        $n(this.getNode__I__sci_MapNode(j)).foreachEntry__F2__V(f);
        j = ((1 + j) | 0);
      }
    });
    $c_sci_BitmapIndexedMapNode.prototype.equals__O__Z = (function(that) {
      if ((that instanceof $c_sci_BitmapIndexedMapNode)) {
        var x2 = $as_sci_BitmapIndexedMapNode(that);
        if ((this === x2)) {
          return true;
        } else {
          if (((((this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode === $n(x2).sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode) && (this.sci_BitmapIndexedMapNode__f_nodeMap === $n(x2).sci_BitmapIndexedMapNode__f_nodeMap)) && (this.sci_BitmapIndexedMapNode__f_dataMap === $n(x2).sci_BitmapIndexedMapNode__f_dataMap)) && (this.sci_BitmapIndexedMapNode__f_size === $n(x2).sci_BitmapIndexedMapNode__f_size))) {
            var a = this.sci_BitmapIndexedMapNode__f_originalHashes;
            var b = $n(x2).sci_BitmapIndexedMapNode__f_originalHashes;
            var $x_1 = $m_ju_Arrays$().equals__AI__AI__Z(a, b);
          } else {
            var $x_1 = false;
          }
          if ($x_1) {
            var a1 = this.sci_BitmapIndexedMapNode__f_content;
            var a2 = $n(x2).sci_BitmapIndexedMapNode__f_content;
            var length = $n(this.sci_BitmapIndexedMapNode__f_content).u.length;
            if ((a1 === a2)) {
              return true;
            } else {
              var isEqual = true;
              var i = 0;
              while ((isEqual && (i < length))) {
                isEqual = $m_sr_BoxesRunTime$().equals__O__O__Z($n(a1).get(i), $n(a2).get(i));
                i = ((1 + i) | 0);
              }
              return isEqual;
            }
          } else {
            return false;
          }
        }
      } else {
        return false;
      }
    });
    $c_sci_BitmapIndexedMapNode.prototype.hashCode__I = (function() {
      throw new $c_jl_UnsupportedOperationException("Trie nodes do not support hashing.");
    });
    $c_sci_BitmapIndexedMapNode.prototype.copy__sci_BitmapIndexedMapNode = (function() {
      var this$1$1 = $n(this.sci_BitmapIndexedMapNode__f_content);
      var contentClone = this$1$1.clone__O();
      var contentLength = contentClone.u.length;
      var i = this.sci_BitmapIndexedMapNode__f_dataMap;
      var i$1 = ($m_jl_Integer$().bitCount__I__I(i) << 1);
      while ((i$1 < contentLength)) {
        contentClone.set(i$1, $n($as_sci_MapNode(contentClone.get(i$1))).copy__sci_MapNode());
        i$1 = ((1 + i$1) | 0);
      }
      var $x_2 = this.sci_BitmapIndexedMapNode__f_dataMap;
      var $x_1 = this.sci_BitmapIndexedMapNode__f_nodeMap;
      var this$2 = $n(this.sci_BitmapIndexedMapNode__f_originalHashes);
      return new $c_sci_BitmapIndexedMapNode($x_2, $x_1, contentClone, this$2.clone__O(), this.sci_BitmapIndexedMapNode__f_size, this.sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode);
    });
    $c_sci_BitmapIndexedMapNode.prototype.copy__sci_MapNode = (function() {
      return this.copy__sci_BitmapIndexedMapNode();
    });
    $c_sci_BitmapIndexedMapNode.prototype.updated__O__O__I__I__I__Z__sci_MapNode = (function(key, value, originalHash, hash, shift, replaceValue) {
      return this.updated__O__O__I__I__I__Z__sci_BitmapIndexedMapNode(key, value, originalHash, hash, shift, replaceValue);
    });
    $c_sci_BitmapIndexedMapNode.prototype.getNode__I__sci_Node = (function(index) {
      return this.getNode__I__sci_MapNode(index);
    });
    function $as_sci_BitmapIndexedMapNode(obj) {
      return (((obj instanceof $c_sci_BitmapIndexedMapNode) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.BitmapIndexedMapNode"));
    }
    new $TypeData().initClass($c_sci_BitmapIndexedMapNode, "scala.collection.immutable.BitmapIndexedMapNode", ({
      sci_BitmapIndexedMapNode: 1,
      sci_MapNode: 1,
      sci_Node: 1
    }));
    /** @constructor */
    function $c_sci_HashCollisionMapNode(originalHash, hash, content) {
      this.sci_HashCollisionMapNode__f_originalHash = 0;
      this.sci_HashCollisionMapNode__f_hash = 0;
      this.sci_HashCollisionMapNode__f_content = null;
      this.sci_HashCollisionMapNode__f_originalHash = originalHash;
      this.sci_HashCollisionMapNode__f_hash = hash;
      this.sci_HashCollisionMapNode__f_content = content;
      $m_s_Predef$().require__Z__V(($n(this.sci_HashCollisionMapNode__f_content).length__I() >= 2));
    }
    $c_sci_HashCollisionMapNode.prototype = new $h_sci_MapNode();
    $c_sci_HashCollisionMapNode.prototype.constructor = $c_sci_HashCollisionMapNode;
    $c_sci_HashCollisionMapNode.prototype;
    $c_sci_HashCollisionMapNode.prototype.indexOf__O__I = (function(key) {
      var iter = $n(this.sci_HashCollisionMapNode__f_content).iterator__sc_Iterator();
      var i = 0;
      while ($n(iter).hasNext__Z()) {
        if ($m_sr_BoxesRunTime$().equals__O__O__Z($n($as_T2($n(iter).next__O())).T2__f__1, key)) {
          return i;
        }
        i = ((1 + i) | 0);
      }
      return (-1);
    });
    $c_sci_HashCollisionMapNode.prototype.size__I = (function() {
      return $n(this.sci_HashCollisionMapNode__f_content).length__I();
    });
    $c_sci_HashCollisionMapNode.prototype.apply__O__I__I__I__O = (function(key, originalHash, hash, shift) {
      var this$1$1 = $n(this.get__O__I__I__I__s_Option(key, originalHash, hash, shift));
      if (this$1$1.isEmpty__Z()) {
        $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
        throw $ct_jl_ClassCastException__(new $c_jl_ClassCastException());
      } else {
        return this$1$1.get__O();
      }
    });
    $c_sci_HashCollisionMapNode.prototype.get__O__I__I__I__s_Option = (function(key, originalHash, hash, shift) {
      if ((this.sci_HashCollisionMapNode__f_hash === hash)) {
        var index = this.indexOf__O__I(key);
        return ((index >= 0) ? new $c_s_Some($n($as_T2($n(this.sci_HashCollisionMapNode__f_content).apply__I__O(index))).T2__f__2) : $m_s_None$());
      } else {
        return $m_s_None$();
      }
    });
    $c_sci_HashCollisionMapNode.prototype.getOrElse__O__I__I__I__F0__O = (function(key, originalHash, hash, shift, f) {
      if ((this.sci_HashCollisionMapNode__f_hash === hash)) {
        var x1 = this.indexOf__O__I(key);
        return ((x1 === (-1)) ? $n(f).apply__O() : $n($as_T2($n(this.sci_HashCollisionMapNode__f_content).apply__I__O(x1))).T2__f__2);
      } else {
        return $n(f).apply__O();
      }
    });
    $c_sci_HashCollisionMapNode.prototype.containsKey__O__I__I__I__Z = (function(key, originalHash, hash, shift) {
      return ((this.sci_HashCollisionMapNode__f_hash === hash) && (this.indexOf__O__I(key) >= 0));
    });
    $c_sci_HashCollisionMapNode.prototype.updated__O__O__I__I__I__Z__sci_MapNode = (function(key, value, originalHash, hash, shift, replaceValue) {
      var index = this.indexOf__O__I(key);
      return ((index >= 0) ? (replaceValue ? (Object.is($n($as_T2($n(this.sci_HashCollisionMapNode__f_content).apply__I__O(index))).T2__f__2, value) ? this : new $c_sci_HashCollisionMapNode(originalHash, hash, $n(this.sci_HashCollisionMapNode__f_content).updated__I__O__sci_Vector(index, new $c_T2(key, value)))) : this) : new $c_sci_HashCollisionMapNode(originalHash, hash, $n(this.sci_HashCollisionMapNode__f_content).appended__O__sci_Vector(new $c_T2(key, value))));
    });
    $c_sci_HashCollisionMapNode.prototype.hasNodes__Z = (function() {
      return false;
    });
    $c_sci_HashCollisionMapNode.prototype.nodeArity__I = (function() {
      return 0;
    });
    $c_sci_HashCollisionMapNode.prototype.getNode__I__sci_MapNode = (function(index) {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), "No sub-nodes present in hash-collision leaf node.");
    });
    $c_sci_HashCollisionMapNode.prototype.hasPayload__Z = (function() {
      return true;
    });
    $c_sci_HashCollisionMapNode.prototype.payloadArity__I = (function() {
      return $n(this.sci_HashCollisionMapNode__f_content).length__I();
    });
    $c_sci_HashCollisionMapNode.prototype.getKey__I__O = (function(index) {
      return $n($as_T2($n(this.sci_HashCollisionMapNode__f_content).apply__I__O(index))).T2__f__1;
    });
    $c_sci_HashCollisionMapNode.prototype.getValue__I__O = (function(index) {
      return $n($as_T2($n(this.sci_HashCollisionMapNode__f_content).apply__I__O(index))).T2__f__2;
    });
    $c_sci_HashCollisionMapNode.prototype.getPayload__I__T2 = (function(index) {
      return $as_T2($n(this.sci_HashCollisionMapNode__f_content).apply__I__O(index));
    });
    $c_sci_HashCollisionMapNode.prototype.getHash__I__I = (function(index) {
      return this.sci_HashCollisionMapNode__f_originalHash;
    });
    $c_sci_HashCollisionMapNode.prototype.foreachEntry__F2__V = (function(f) {
      $n(this.sci_HashCollisionMapNode__f_content).foreach__F1__V(new $c_sjsr_AnonFunction1(((x0$1$2$2) => {
        var x0$1$2 = $as_T2(x0$1$2$2);
        if ((x0$1$2 !== null)) {
          var k = $n(x0$1$2).T2__f__1;
          var v = $n(x0$1$2).T2__f__2;
          return $n(f).apply__O__O__O(k, v);
        } else {
          throw new $c_s_MatchError(x0$1$2);
        }
      })));
    });
    $c_sci_HashCollisionMapNode.prototype.equals__O__Z = (function(that) {
      if ((that instanceof $c_sci_HashCollisionMapNode)) {
        var x2 = $as_sci_HashCollisionMapNode(that);
        if ((this === x2)) {
          return true;
        } else if (((this.sci_HashCollisionMapNode__f_hash === $n(x2).sci_HashCollisionMapNode__f_hash) && ($n(this.sci_HashCollisionMapNode__f_content).length__I() === $n($n(x2).sci_HashCollisionMapNode__f_content).length__I()))) {
          var iter = $n(this.sci_HashCollisionMapNode__f_content).iterator__sc_Iterator();
          while ($n(iter).hasNext__Z()) {
            var x1$2 = $as_T2($n(iter).next__O());
            if ((x1$2 === null)) {
              throw new $c_s_MatchError(x1$2);
            }
            var key = $n(x1$2).T2__f__1;
            var value = $n(x1$2).T2__f__2;
            var index = $n(x2).indexOf__O__I(key);
            if (((index < 0) || (!$m_sr_BoxesRunTime$().equals__O__O__Z(value, $n($as_T2($n($n(x2).sci_HashCollisionMapNode__f_content).apply__I__O(index))).T2__f__2)))) {
              return false;
            }
          }
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    });
    $c_sci_HashCollisionMapNode.prototype.hashCode__I = (function() {
      throw new $c_jl_UnsupportedOperationException("Trie nodes do not support hashing.");
    });
    $c_sci_HashCollisionMapNode.prototype.cachedJavaKeySetHashCode__I = (function() {
      return Math.imul($n(this.sci_HashCollisionMapNode__f_content).length__I(), this.sci_HashCollisionMapNode__f_hash);
    });
    $c_sci_HashCollisionMapNode.prototype.copy__sci_MapNode = (function() {
      return new $c_sci_HashCollisionMapNode(this.sci_HashCollisionMapNode__f_originalHash, this.sci_HashCollisionMapNode__f_hash, this.sci_HashCollisionMapNode__f_content);
    });
    $c_sci_HashCollisionMapNode.prototype.getNode__I__sci_Node = (function(index) {
      return this.getNode__I__sci_MapNode(index);
    });
    function $as_sci_HashCollisionMapNode(obj) {
      return (((obj instanceof $c_sci_HashCollisionMapNode) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.HashCollisionMapNode"));
    }
    new $TypeData().initClass($c_sci_HashCollisionMapNode, "scala.collection.immutable.HashCollisionMapNode", ({
      sci_HashCollisionMapNode: 1,
      sci_MapNode: 1,
      sci_Node: 1
    }));
    /** @constructor */
    function $c_sci_HashMap$() {
      this.sci_HashMap$__f_EmptyMap = null;
      $n_sci_HashMap$ = this;
      var this$1$1 = $m_sci_MapNode$();
      this.sci_HashMap$__f_EmptyMap = new $c_sci_HashMap(this$1$1.sci_MapNode$__f_EmptyMapNode);
    }
    $c_sci_HashMap$.prototype = new $h_O();
    $c_sci_HashMap$.prototype.constructor = $c_sci_HashMap$;
    $c_sci_HashMap$.prototype;
    new $TypeData().initClass($c_sci_HashMap$, "scala.collection.immutable.HashMap$", ({
      sci_HashMap$: 1,
      sc_MapFactory: 1,
      Ljava_io_Serializable: 1
    }));
    var $n_sci_HashMap$;
    function $m_sci_HashMap$() {
      if ((!$n_sci_HashMap$)) {
        $n_sci_HashMap$ = new $c_sci_HashMap$();
      }
      return $n_sci_HashMap$;
    }
    /** @constructor */
    function $c_sci_Map$() {
    }
    $c_sci_Map$.prototype = new $h_O();
    $c_sci_Map$.prototype.constructor = $c_sci_Map$;
    $c_sci_Map$.prototype;
    $c_sci_Map$.prototype.from__sc_IterableOnce__sci_Map = (function(it) {
      if ($is_sci_Iterable(it)) {
        var x2 = $as_sci_Iterable(it);
        if ($n(x2).isEmpty__Z()) {
          return $m_sci_Map$EmptyMap$();
        }
      }
      if ((it instanceof $c_sci_HashMap)) {
        var x3 = $as_sci_HashMap(it);
        return x3;
      }
      if ((it instanceof $c_sci_Map$Map1)) {
        var x4 = $as_sci_Map$Map1(it);
        return x4;
      }
      if ((it instanceof $c_sci_Map$Map2)) {
        var x5 = $as_sci_Map$Map2(it);
        return x5;
      }
      if ((it instanceof $c_sci_Map$Map3)) {
        var x6 = $as_sci_Map$Map3(it);
        return x6;
      }
      if ((it instanceof $c_sci_Map$Map4)) {
        var x7 = $as_sci_Map$Map4(it);
        return x7;
      }
      var this$1 = new $c_sci_MapBuilderImpl();
      var this$2 = $n(this$1.addAll__sc_IterableOnce__sci_MapBuilderImpl(it));
      return this$2.result__sci_Map();
    });
    new $TypeData().initClass($c_sci_Map$, "scala.collection.immutable.Map$", ({
      sci_Map$: 1,
      sc_MapFactory: 1,
      Ljava_io_Serializable: 1
    }));
    var $n_sci_Map$;
    function $m_sci_Map$() {
      if ((!$n_sci_Map$)) {
        $n_sci_Map$ = new $c_sci_Map$();
      }
      return $n_sci_Map$;
    }
    function $is_scm_Builder(obj) {
      return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scm_Builder)));
    }
    function $as_scm_Builder(obj) {
      return (($is_scm_Builder(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.Builder"));
    }
    /** @constructor */
    function $c_s_concurrent_BatchingExecutor$SyncBatch(outer, runnable) {
      this.s_concurrent_BatchingExecutor$AbstractBatch__f_first = null;
      this.s_concurrent_BatchingExecutor$AbstractBatch__f_other = null;
      this.s_concurrent_BatchingExecutor$AbstractBatch__f_size = 0;
      this.s_concurrent_BatchingExecutor$AbstractBatch__f_$outer = null;
      $ct_s_concurrent_BatchingExecutor$AbstractBatch__s_concurrent_BatchingExecutor__jl_Runnable__Ajl_Runnable__I__(this, outer, runnable, $m_s_concurrent_BatchingExecutorStatics$().s_concurrent_BatchingExecutorStatics$__f_emptyBatchArray, 1);
    }
    $c_s_concurrent_BatchingExecutor$SyncBatch.prototype = new $h_s_concurrent_BatchingExecutor$AbstractBatch();
    $c_s_concurrent_BatchingExecutor$SyncBatch.prototype.constructor = $c_s_concurrent_BatchingExecutor$SyncBatch;
    $c_s_concurrent_BatchingExecutor$SyncBatch.prototype;
    $c_s_concurrent_BatchingExecutor$SyncBatch.prototype.run__V = (function() {
      while (true) {
        try {
          this.runN__I__V(1024);
        } catch (e) {
          var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
          if ($m_s_util_control_NonFatal$().apply__jl_Throwable__Z(e$2)) {
            $n(this.s_concurrent_BatchingExecutor$AbstractBatch__f_$outer);
            $n($m_s_concurrent_ExecutionContext$().s_concurrent_ExecutionContext$__f_defaultReporter).apply__O__O(e$2);
          } else {
            throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.sjs_js_JavaScriptException__f_exception : e$2);
          }
        }
        if ((this.s_concurrent_BatchingExecutor$AbstractBatch__f_size > 0)) {
          continue;
        }
        return (void 0);
      }
    });
    function $as_s_concurrent_BatchingExecutor$SyncBatch(obj) {
      return (((obj instanceof $c_s_concurrent_BatchingExecutor$SyncBatch) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.concurrent.BatchingExecutor$SyncBatch"));
    }
    new $TypeData().initClass($c_s_concurrent_BatchingExecutor$SyncBatch, "scala.concurrent.BatchingExecutor$SyncBatch", ({
      s_concurrent_BatchingExecutor$SyncBatch: 1,
      s_concurrent_BatchingExecutor$AbstractBatch: 1,
      jl_Runnable: 1
    }));
    /** @constructor */
    function $c_s_concurrent_impl_Promise$Link(to) {
      this.ju_concurrent_atomic_AtomicReference__f_value = null;
      $ct_ju_concurrent_atomic_AtomicReference__O__(this, to);
    }
    $c_s_concurrent_impl_Promise$Link.prototype = new $h_ju_concurrent_atomic_AtomicReference();
    $c_s_concurrent_impl_Promise$Link.prototype.constructor = $c_s_concurrent_impl_Promise$Link;
    $c_s_concurrent_impl_Promise$Link.prototype;
    $c_s_concurrent_impl_Promise$Link.prototype.promise__s_concurrent_impl_Promise$DefaultPromise__s_concurrent_impl_Promise$DefaultPromise = (function(owner) {
      var c = $as_s_concurrent_impl_Promise$DefaultPromise(this.ju_concurrent_atomic_AtomicReference__f_value);
      var current = c;
      var target = c;
      while (true) {
        var value = $n(target).ju_concurrent_atomic_AtomicReference__f_value;
        if ($is_s_concurrent_impl_Promise$Callbacks(value)) {
          if (this.compareAndSet__O__O__Z(current, target)) {
            return target;
          } else {
            current = $as_s_concurrent_impl_Promise$DefaultPromise(this.ju_concurrent_atomic_AtomicReference__f_value);
          }
        } else if ((value instanceof $c_s_concurrent_impl_Promise$Link)) {
          target = $as_s_concurrent_impl_Promise$DefaultPromise($n($as_s_concurrent_impl_Promise$Link(value)).ju_concurrent_atomic_AtomicReference__f_value);
        } else {
          $n(owner).unlink__s_util_Try__V($as_s_util_Try(value));
          return owner;
        }
      }
    });
    function $as_s_concurrent_impl_Promise$Link(obj) {
      return (((obj instanceof $c_s_concurrent_impl_Promise$Link) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.concurrent.impl.Promise$Link"));
    }
    new $TypeData().initClass($c_s_concurrent_impl_Promise$Link, "scala.concurrent.impl.Promise$Link", ({
      s_concurrent_impl_Promise$Link: 1,
      ju_concurrent_atomic_AtomicReference: 1,
      Ljava_io_Serializable: 1
    }));
    var $d_sr_Nothing$ = new $TypeData().initClass(0, "scala.runtime.Nothing$", ({
      sr_Nothing$: 1,
      jl_Throwable: 1,
      Ljava_io_Serializable: 1
    }));
    /** @constructor */
    function $c_sjs_js_Any$() {
    }
    $c_sjs_js_Any$.prototype = new $h_O();
    $c_sjs_js_Any$.prototype.constructor = $c_sjs_js_Any$;
    $c_sjs_js_Any$.prototype;
    $c_sjs_js_Any$.prototype.fromFunction0__F0__sjs_js_Function0 = (function(f) {
      return (() => $n(f).apply__O());
    });
    $c_sjs_js_Any$.prototype.fromFunction1__F1__sjs_js_Function1 = (function(f) {
      return ((arg1$2) => $n(f).apply__O__O(arg1$2));
    });
    new $TypeData().initClass($c_sjs_js_Any$, "scala.scalajs.js.Any$", ({
      sjs_js_Any$: 1,
      sjs_js_LowPrioAnyImplicits: 1,
      sjs_js_LowestPrioAnyImplicits: 1
    }));
    var $n_sjs_js_Any$;
    function $m_sjs_js_Any$() {
      if ((!$n_sjs_js_Any$)) {
        $n_sjs_js_Any$ = new $c_sjs_js_Any$();
      }
      return $n_sjs_js_Any$;
    }
    /** @constructor */
    function $c_sjsr_AnonFunction0(f) {
      this.sjsr_AnonFunction0__f_f = null;
      this.sjsr_AnonFunction0__f_f = f;
    }
    $c_sjsr_AnonFunction0.prototype = new $h_sr_AbstractFunction0();
    $c_sjsr_AnonFunction0.prototype.constructor = $c_sjsr_AnonFunction0;
    $c_sjsr_AnonFunction0.prototype;
    $c_sjsr_AnonFunction0.prototype.apply__O = (function() {
      return (0, this.sjsr_AnonFunction0__f_f)();
    });
    new $TypeData().initClass($c_sjsr_AnonFunction0, "scala.scalajs.runtime.AnonFunction0", ({
      sjsr_AnonFunction0: 1,
      sr_AbstractFunction0: 1,
      F0: 1
    }));
    /** @constructor */
    function $c_sjsr_AnonFunction1(f) {
      this.sjsr_AnonFunction1__f_f = null;
      this.sjsr_AnonFunction1__f_f = f;
    }
    $c_sjsr_AnonFunction1.prototype = new $h_sr_AbstractFunction1();
    $c_sjsr_AnonFunction1.prototype.constructor = $c_sjsr_AnonFunction1;
    $c_sjsr_AnonFunction1.prototype;
    $c_sjsr_AnonFunction1.prototype.apply__O__O = (function(arg1) {
      return (0, this.sjsr_AnonFunction1__f_f)(arg1);
    });
    new $TypeData().initClass($c_sjsr_AnonFunction1, "scala.scalajs.runtime.AnonFunction1", ({
      sjsr_AnonFunction1: 1,
      sr_AbstractFunction1: 1,
      F1: 1
    }));
    /** @constructor */
    function $c_sjsr_AnonFunction2(f) {
      this.sjsr_AnonFunction2__f_f = null;
      this.sjsr_AnonFunction2__f_f = f;
    }
    $c_sjsr_AnonFunction2.prototype = new $h_sr_AbstractFunction2();
    $c_sjsr_AnonFunction2.prototype.constructor = $c_sjsr_AnonFunction2;
    $c_sjsr_AnonFunction2.prototype;
    $c_sjsr_AnonFunction2.prototype.apply__O__O__O = (function(arg1, arg2) {
      return (0, this.sjsr_AnonFunction2__f_f)(arg1, arg2);
    });
    new $TypeData().initClass($c_sjsr_AnonFunction2, "scala.scalajs.runtime.AnonFunction2", ({
      sjsr_AnonFunction2: 1,
      sr_AbstractFunction2: 1,
      F2: 1
    }));
    /** @constructor */
    function $c_Lscalatags_LowPriorityImplicits$bindNode(outer, e) {
      this.Lscalatags_LowPriorityImplicits$bindNode__f_e = null;
      this.Lscalatags_LowPriorityImplicits$bindNode__f_e = e;
      if ((outer === null)) {
        throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
      }
    }
    $c_Lscalatags_LowPriorityImplicits$bindNode.prototype = new $h_O();
    $c_Lscalatags_LowPriorityImplicits$bindNode.prototype.constructor = $c_Lscalatags_LowPriorityImplicits$bindNode;
    $c_Lscalatags_LowPriorityImplicits$bindNode.prototype;
    $c_Lscalatags_LowPriorityImplicits$bindNode.prototype.applyTo__Lorg_scalajs_dom_Element__V = (function(t) {
      t.appendChild(this.Lscalatags_LowPriorityImplicits$bindNode__f_e);
    });
    $c_Lscalatags_LowPriorityImplicits$bindNode.prototype.applyTo__O__V = (function(t) {
      this.applyTo__Lorg_scalajs_dom_Element__V(t);
    });
    new $TypeData().initClass($c_Lscalatags_LowPriorityImplicits$bindNode, "scalatags.LowPriorityImplicits$bindNode", ({
      Lscalatags_LowPriorityImplicits$bindNode: 1,
      Lscalatags_generic_Modifier: 1,
      Lscalatags_generic_Frag: 1
    }));
    function $f_Lscalatags_generic_MouseEventAttrs__$init$__V($thiz) {
      $f_Lscalatags_generic_Util__attr__T__Lscalatags_generic_Namespace__Z__Lscalatags_generic_Attr($thiz, "ondrag", null, false);
    }
    function $f_Lscalatags_generic_TypedTag__build__O__V($thiz, b) {
      var current = $thiz.Lscalatags_JsDom$TypedTag__f_modifiers;
      var dimensions = new $ac_I(new Int32Array([$n($thiz.Lscalatags_JsDom$TypedTag__f_modifiers).length__I()]));
      var arr = $asArrayOf_sci_Seq($m_jl_reflect_Array$().newInstance__jl_Class__AI__O($d_sci_Seq.getClassOf(), dimensions), 1);
      var i = 0;
      while (true) {
        var x = current;
        var x$2 = $m_sci_Nil$();
        if ((!((x !== null) && $n(x).equals__O__Z(x$2)))) {
          $n(arr).set(i, $as_sci_Seq($n(current).head__O()));
          current = $as_sci_List($n(current).tail__O());
          i = ((1 + i) | 0);
        } else {
          break;
        }
      }
      var j = $n(arr).u.length;
      while ((j > 0)) {
        j = (((-1) + j) | 0);
        var frag = $n(arr).get(j);
        var i$2 = 0;
        while ((i$2 < $n(frag).length__I())) {
          $n($as_Lscalatags_generic_Modifier($n(frag).apply__I__O(i$2))).applyTo__O__V(b);
          i$2 = ((1 + i$2) | 0);
        }
      }
    }
    function $f_Lscalatags_jsdom_Frag__applyTo__Lorg_scalajs_dom_Element__V($thiz, b) {
      b.appendChild($thiz.render__Lorg_scalajs_dom_Node());
    }
    function $f_Lscalatags_jsdom_TagFactory__typedTag__T__Z__Lscalatags_generic_Namespace__Lscalatags_generic_TypedTag($thiz, s, void$1, ns) {
      if ((!$m_Lscalatags_Escaping$().validTag__T__Z(s))) {
        throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (("Illegal tag name: " + s) + " is not a valid XML tag name"));
      }
      var modifiers = $m_sci_Nil$();
      return new $c_Lscalatags_JsDom$TypedTag(s, modifiers, void$1, ns);
    }
    /** @constructor */
    function $c_Ljava_io_OutputStream() {
    }
    $c_Ljava_io_OutputStream.prototype = new $h_O();
    $c_Ljava_io_OutputStream.prototype.constructor = $c_Ljava_io_OutputStream;
    /** @constructor */
    function $h_Ljava_io_OutputStream() {
    }
    $h_Ljava_io_OutputStream.prototype = $c_Ljava_io_OutputStream.prototype;
    class $c_jl_AssertionError extends $c_jl_Error {
      constructor(detailMessage) {
        super();
        var message = ("" + detailMessage);
        if ((detailMessage instanceof $c_jl_Throwable)) {
          var x2 = $as_jl_Throwable(detailMessage);
          var cause = x2;
        } else {
          var cause = null;
        }
        $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, message, cause, true, true);
      }
    }
    new $TypeData().initClass($c_jl_AssertionError, "java.lang.AssertionError", ({
      jl_AssertionError: 1,
      jl_Error: 1,
      jl_Throwable: 1,
      Ljava_io_Serializable: 1
    }));
    function $f_jl_Boolean__equals__O__Z($thiz, that) {
      return ($thiz === that);
    }
    function $f_jl_Boolean__hashCode__I($thiz) {
      return ($thiz ? 1231 : 1237);
    }
    var $d_jl_Boolean = new $TypeData().initClass(0, "java.lang.Boolean", ({
      jl_Boolean: 1,
      Ljava_io_Serializable: 1,
      jl_Comparable: 1,
      jl_constant_Constable: 1
    }), ((x) => ((typeof x) === "boolean")));
    function $f_jl_Character__hashCode__I($thiz) {
      return $thiz;
    }
    function $f_jl_Character__equals__O__Z($thiz, that) {
      if ((that instanceof $Char)) {
        var this$1 = $n($as_jl_Character(that)).c;
        return ($thiz === this$1);
      } else {
        return false;
      }
    }
    function $as_jl_Character(obj) {
      return (((obj instanceof $Char) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Character"));
    }
    var $d_jl_Character = new $TypeData().initClass(0, "java.lang.Character", ({
      jl_Character: 1,
      Ljava_io_Serializable: 1,
      jl_Comparable: 1,
      jl_constant_Constable: 1
    }), ((x) => (x instanceof $Char)));
    class $c_jl_RuntimeException extends $c_jl_Exception {
    }
    /** @constructor */
    function $c_jl_StringBuilder() {
      this.jl_StringBuilder__f_java$lang$StringBuilder$$content = null;
      this.jl_StringBuilder__f_java$lang$StringBuilder$$content = "";
    }
    $c_jl_StringBuilder.prototype = new $h_O();
    $c_jl_StringBuilder.prototype.constructor = $c_jl_StringBuilder;
    $c_jl_StringBuilder.prototype;
    $c_jl_StringBuilder.prototype.append__AC__jl_StringBuilder = (function(str) {
      var this$1$1 = $m_jl_String$();
      var count = $n(str).u.length;
      var str$1 = this$1$1.new__AC__I__I__T(str, 0, count);
      this.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str$1);
      return this;
    });
    $c_jl_StringBuilder.prototype.toString__T = (function() {
      return this.jl_StringBuilder__f_java$lang$StringBuilder$$content;
    });
    $c_jl_StringBuilder.prototype.length__I = (function() {
      var this$1$1 = $n(this.jl_StringBuilder__f_java$lang$StringBuilder$$content);
      return this$1$1.length;
    });
    $c_jl_StringBuilder.prototype.charAt__I__C = (function(index) {
      var this$1$1 = $n(this.jl_StringBuilder__f_java$lang$StringBuilder$$content);
      return $charAt(this$1$1, index);
    });
    new $TypeData().initClass($c_jl_StringBuilder, "java.lang.StringBuilder", ({
      jl_StringBuilder: 1,
      jl_CharSequence: 1,
      jl_Appendable: 1,
      Ljava_io_Serializable: 1
    }));
    class $c_jl_VirtualMachineError extends $c_jl_Error {
    }
    class $c_ju_concurrent_ExecutionException extends $c_jl_Exception {
      constructor(message, cause) {
        super();
        $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, message, cause, true, true);
      }
    }
    new $TypeData().initClass($c_ju_concurrent_ExecutionException, "java.util.concurrent.ExecutionException", ({
      ju_concurrent_ExecutionException: 1,
      jl_Exception: 1,
      jl_Throwable: 1,
      Ljava_io_Serializable: 1
    }));
    /** @constructor */
    function $c_s_$eq$colon$eq() {
    }
    $c_s_$eq$colon$eq.prototype = new $h_s_$less$colon$less();
    $c_s_$eq$colon$eq.prototype.constructor = $c_s_$eq$colon$eq;
    /** @constructor */
    function $h_s_$eq$colon$eq() {
    }
    $h_s_$eq$colon$eq.prototype = $c_s_$eq$colon$eq.prototype;
    /** @constructor */
    function $c_sc_AbstractIterator() {
    }
    $c_sc_AbstractIterator.prototype = new $h_O();
    $c_sc_AbstractIterator.prototype.constructor = $c_sc_AbstractIterator;
    /** @constructor */
    function $h_sc_AbstractIterator() {
    }
    $h_sc_AbstractIterator.prototype = $c_sc_AbstractIterator.prototype;
    $c_sc_AbstractIterator.prototype.iterator__sc_Iterator = (function() {
      return this;
    });
    $c_sc_AbstractIterator.prototype.drop__I__sc_Iterator = (function(n) {
      return this.sliceIterator__I__I__sc_Iterator(n, (-1));
    });
    $c_sc_AbstractIterator.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
      return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until);
    });
    $c_sc_AbstractIterator.prototype.toString__T = (function() {
      return "<iterator>";
    });
    $c_sc_AbstractIterator.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
      return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len);
    });
    $c_sc_AbstractIterator.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
      return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
    });
    $c_sc_AbstractIterator.prototype.knownSize__I = (function() {
      return (-1);
    });
    /** @constructor */
    function $c_sc_Map$() {
      this.sc_MapFactory$Delegate__f_delegate = null;
      this.sc_Map$__f_DefaultSentinel = null;
      this.sc_Map$__f_scala$collection$Map$$DefaultSentinelFn = null;
      $ct_sc_MapFactory$Delegate__sc_MapFactory__(this, $m_sci_Map$());
      $n_sc_Map$ = this;
      this.sc_Map$__f_DefaultSentinel = $ct_O__(new $c_O());
      this.sc_Map$__f_scala$collection$Map$$DefaultSentinelFn = new $c_sjsr_AnonFunction0((() => $m_sc_Map$().sc_Map$__f_DefaultSentinel));
    }
    $c_sc_Map$.prototype = new $h_sc_MapFactory$Delegate();
    $c_sc_Map$.prototype.constructor = $c_sc_Map$;
    $c_sc_Map$.prototype;
    new $TypeData().initClass($c_sc_Map$, "scala.collection.Map$", ({
      sc_Map$: 1,
      sc_MapFactory$Delegate: 1,
      sc_MapFactory: 1,
      Ljava_io_Serializable: 1
    }));
    var $n_sc_Map$;
    function $m_sc_Map$() {
      if ((!$n_sc_Map$)) {
        $n_sc_Map$ = new $c_sc_Map$();
      }
      return $n_sc_Map$;
    }
    function $ct_sc_SeqFactory$Delegate__sc_SeqFactory__($thiz, delegate) {
      $thiz.sc_SeqFactory$Delegate__f_delegate = delegate;
      return $thiz;
    }
    /** @constructor */
    function $c_sc_SeqFactory$Delegate() {
      this.sc_SeqFactory$Delegate__f_delegate = null;
    }
    $c_sc_SeqFactory$Delegate.prototype = new $h_O();
    $c_sc_SeqFactory$Delegate.prototype.constructor = $c_sc_SeqFactory$Delegate;
    /** @constructor */
    function $h_sc_SeqFactory$Delegate() {
    }
    $h_sc_SeqFactory$Delegate.prototype = $c_sc_SeqFactory$Delegate.prototype;
    $c_sc_SeqFactory$Delegate.prototype.from__sc_IterableOnce__sc_SeqOps = (function(it) {
      return $as_sc_SeqOps($n(this.sc_SeqFactory$Delegate__f_delegate).from__sc_IterableOnce__O(it));
    });
    $c_sc_SeqFactory$Delegate.prototype.from__sc_IterableOnce__O = (function(source) {
      return this.from__sc_IterableOnce__sc_SeqOps(source);
    });
    function $f_sc_SeqOps__isDefinedAt__I__Z($thiz, idx) {
      return ((idx >= 0) && ($thiz.lengthCompare__I__I(idx) > 0));
    }
    function $f_sc_SeqOps__isEmpty__Z($thiz) {
      return ($thiz.lengthCompare__I__I(0) === 0);
    }
    function $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
      var thisKnownSize = $thiz.knownSize__I();
      if ((thisKnownSize !== (-1))) {
        var thatKnownSize = $n(that).knownSize__I();
        var knownSizeDifference = ((thatKnownSize !== (-1)) && (thisKnownSize !== thatKnownSize));
      } else {
        var knownSizeDifference = false;
      }
      if ((!knownSizeDifference)) {
        var this$1 = $n($thiz.iterator__sc_Iterator());
        return $f_sc_Iterator__sameElements__sc_IterableOnce__Z(this$1, that);
      } else {
        return false;
      }
    }
    function $is_sc_SeqOps(obj) {
      return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_SeqOps)));
    }
    function $as_sc_SeqOps(obj) {
      return (($is_sc_SeqOps(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.SeqOps"));
    }
    class $c_s_concurrent_Future$$anon$4 extends $c_jl_Throwable {
      constructor() {
        super();
        $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
      }
      fillInStackTrace__jl_Throwable() {
        return $f_s_util_control_NoStackTrace__fillInStackTrace__jl_Throwable(this);
      }
    }
    new $TypeData().initClass($c_s_concurrent_Future$$anon$4, "scala.concurrent.Future$$anon$4", ({
      s_concurrent_Future$$anon$4: 1,
      jl_Throwable: 1,
      Ljava_io_Serializable: 1,
      s_util_control_NoStackTrace: 1
    }));
    /** @constructor */
    function $c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext() {
      this.sjs_concurrent_QueueExecutionContext$PromisesExecutionContext__f_resolvedUnitPromise = null;
      this.sjs_concurrent_QueueExecutionContext$PromisesExecutionContext__f_resolvedUnitPromise = Promise.resolve((void 0));
    }
    $c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext.prototype = new $h_O();
    $c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext.prototype.constructor = $c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext;
    $c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext.prototype;
    $c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext.prototype.execute__jl_Runnable__V = (function(runnable) {
      this.sjs_concurrent_QueueExecutionContext$PromisesExecutionContext__f_resolvedUnitPromise.then(((arg1$2) => {
        $as_jl_Void(arg1$2);
        try {
          $n(runnable).run__V();
        } catch (e) {
          var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
          e$2.printStackTrace__Ljava_io_PrintStream__V($m_jl_System$Streams$().jl_System$Streams$__f_err);
        }
      }));
    });
    $c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext.prototype.reportFailure__jl_Throwable__V = (function(t) {
      var this$1 = $n(t);
      this$1.printStackTrace__Ljava_io_PrintStream__V($m_jl_System$Streams$().jl_System$Streams$__f_err);
    });
    new $TypeData().initClass($c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext, "scala.scalajs.concurrent.QueueExecutionContext$PromisesExecutionContext", ({
      sjs_concurrent_QueueExecutionContext$PromisesExecutionContext: 1,
      s_concurrent_ExecutionContextExecutor: 1,
      s_concurrent_ExecutionContext: 1,
      ju_concurrent_Executor: 1
    }));
    /** @constructor */
    function $c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext() {
    }
    $c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext.prototype = new $h_O();
    $c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext.prototype.constructor = $c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext;
    $c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext.prototype;
    $c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext.prototype.execute__jl_Runnable__V = (function(runnable) {
      setTimeout($m_sjs_js_Any$().fromFunction0__F0__sjs_js_Function0(new $c_sjsr_AnonFunction0((() => {
        try {
          $n(runnable).run__V();
        } catch (e) {
          var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
          e$2.printStackTrace__Ljava_io_PrintStream__V($m_jl_System$Streams$().jl_System$Streams$__f_err);
        }
      }))), 0);
    });
    $c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext.prototype.reportFailure__jl_Throwable__V = (function(t) {
      var this$1 = $n(t);
      this$1.printStackTrace__Ljava_io_PrintStream__V($m_jl_System$Streams$().jl_System$Streams$__f_err);
    });
    new $TypeData().initClass($c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext, "scala.scalajs.concurrent.QueueExecutionContext$TimeoutsExecutionContext", ({
      sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext: 1,
      s_concurrent_ExecutionContextExecutor: 1,
      s_concurrent_ExecutionContext: 1,
      ju_concurrent_Executor: 1
    }));
    /** @constructor */
    function $c_s_util_Try() {
    }
    $c_s_util_Try.prototype = new $h_O();
    $c_s_util_Try.prototype.constructor = $c_s_util_Try;
    /** @constructor */
    function $h_s_util_Try() {
    }
    $h_s_util_Try.prototype = $c_s_util_Try.prototype;
    function $as_s_util_Try(obj) {
      return (((obj instanceof $c_s_util_Try) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.util.Try"));
    }
    /** @constructor */
    function $c_Lscalatags_generic_Attr(name, namespace, raw) {
      this.Lscalatags_generic_Attr__f_name = null;
      this.Lscalatags_generic_Attr__f_namespace = null;
      this.Lscalatags_generic_Attr__f_raw = false;
      this.Lscalatags_generic_Attr__f_name = name;
      this.Lscalatags_generic_Attr__f_namespace = namespace;
      this.Lscalatags_generic_Attr__f_raw = raw;
      if (((!raw) && (!$m_Lscalatags_Escaping$().validAttrName__T__Z(name)))) {
        throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (("Illegal attribute name: " + name) + " is not a valid XML attribute name"));
      }
    }
    $c_Lscalatags_generic_Attr.prototype = new $h_O();
    $c_Lscalatags_generic_Attr.prototype.constructor = $c_Lscalatags_generic_Attr;
    $c_Lscalatags_generic_Attr.prototype;
    $c_Lscalatags_generic_Attr.prototype.productIterator__sc_Iterator = (function() {
      return new $c_s_Product$$anon$1(this);
    });
    $c_Lscalatags_generic_Attr.prototype.hashCode__I = (function() {
      var acc = (-889275714);
      var hash = acc;
      var data = $f_T__hashCode__I("Attr");
      acc = $m_sr_Statics$().mix__I__I__I(hash, data);
      var hash$1 = acc;
      var x = this.Lscalatags_generic_Attr__f_name;
      var data$1 = $m_sr_Statics$().anyHash__O__I(x);
      acc = $m_sr_Statics$().mix__I__I__I(hash$1, data$1);
      var hash$2 = acc;
      var x$1 = this.Lscalatags_generic_Attr__f_namespace;
      var data$2 = $m_sr_Statics$().anyHash__O__I(x$1);
      acc = $m_sr_Statics$().mix__I__I__I(hash$2, data$2);
      var hash$3 = acc;
      var data$3 = (this.Lscalatags_generic_Attr__f_raw ? 1231 : 1237);
      acc = $m_sr_Statics$().mix__I__I__I(hash$3, data$3);
      var hash$4 = acc;
      return $m_sr_Statics$().finalizeHash__I__I__I(hash$4, 3);
    });
    $c_Lscalatags_generic_Attr.prototype.equals__O__Z = (function(x$0) {
      if ((this === x$0)) {
        return true;
      } else if ((x$0 instanceof $c_Lscalatags_generic_Attr)) {
        var x$0$2 = $as_Lscalatags_generic_Attr(x$0);
        if (((this.Lscalatags_generic_Attr__f_raw === $n(x$0$2).Lscalatags_generic_Attr__f_raw) && (this.Lscalatags_generic_Attr__f_name === $n(x$0$2).Lscalatags_generic_Attr__f_name))) {
          var x = this.Lscalatags_generic_Attr__f_namespace;
          var x$2 = $n(x$0$2).Lscalatags_generic_Attr__f_namespace;
          var $x_1 = ((x === null) ? (x$2 === null) : $n(x).equals__O__Z(x$2));
        } else {
          var $x_1 = false;
        }
        if ($x_1) {
          $n(x$0$2);
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    });
    $c_Lscalatags_generic_Attr.prototype.toString__T = (function() {
      return $m_sr_ScalaRunTime$()._toString__s_Product__T(this);
    });
    $c_Lscalatags_generic_Attr.prototype.productArity__I = (function() {
      return 3;
    });
    $c_Lscalatags_generic_Attr.prototype.productPrefix__T = (function() {
      return "Attr";
    });
    $c_Lscalatags_generic_Attr.prototype.productElement__I__O = (function(n) {
      switch (n) {
        case 0: {
          return this.Lscalatags_generic_Attr__f_name;
        }
        case 1: {
          return this.Lscalatags_generic_Attr__f_namespace;
        }
        case 2: {
          return this.Lscalatags_generic_Attr__f_raw;
        }
        default: {
          throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
        }
      }
    });
    $c_Lscalatags_generic_Attr.prototype.$colon$eq__O__Lscalatags_generic_AttrValue__Lscalatags_generic_AttrPair = (function(v, ev) {
      if ((v === null)) {
        throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
      }
      return new $c_Lscalatags_generic_AttrPair(this, v, ev);
    });
    function $as_Lscalatags_generic_Attr(obj) {
      return (((obj instanceof $c_Lscalatags_generic_Attr) || (obj === null)) ? obj : $throwClassCastException(obj, "scalatags.generic.Attr"));
    }
    new $TypeData().initClass($c_Lscalatags_generic_Attr, "scalatags.generic.Attr", ({
      Lscalatags_generic_Attr: 1,
      s_Equals: 1,
      s_Product: 1,
      Ljava_io_Serializable: 1
    }));
    /** @constructor */
    function $c_Ljava_io_FilterOutputStream() {
    }
    $c_Ljava_io_FilterOutputStream.prototype = new $h_Ljava_io_OutputStream();
    $c_Ljava_io_FilterOutputStream.prototype.constructor = $c_Ljava_io_FilterOutputStream;
    /** @constructor */
    function $h_Ljava_io_FilterOutputStream() {
    }
    $h_Ljava_io_FilterOutputStream.prototype = $c_Ljava_io_FilterOutputStream.prototype;
    class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
      constructor(s) {
        super();
        $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
      }
    }
    new $TypeData().initClass($c_jl_ArithmeticException, "java.lang.ArithmeticException", ({
      jl_ArithmeticException: 1,
      jl_RuntimeException: 1,
      jl_Exception: 1,
      jl_Throwable: 1,
      Ljava_io_Serializable: 1
    }));
    class $c_jl_ArrayStoreException extends $c_jl_RuntimeException {
      constructor(s) {
        super();
        $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
      }
    }
    new $TypeData().initClass($c_jl_ArrayStoreException, "java.lang.ArrayStoreException", ({
      jl_ArrayStoreException: 1,
      jl_RuntimeException: 1,
      jl_Exception: 1,
      jl_Throwable: 1,
      Ljava_io_Serializable: 1
    }));
    var $d_jl_Byte = new $TypeData().initClass(0, "java.lang.Byte", ({
      jl_Byte: 1,
      jl_Number: 1,
      Ljava_io_Serializable: 1,
      jl_Comparable: 1,
      jl_constant_Constable: 1
    }), ((x) => $isByte(x)));
    function $ct_jl_ClassCastException__T__($thiz, s) {
      $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
      return $thiz;
    }
    function $ct_jl_ClassCastException__($thiz) {
      $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
      return $thiz;
    }
    class $c_jl_ClassCastException extends $c_jl_RuntimeException {
    }
    new $TypeData().initClass($c_jl_ClassCastException, "java.lang.ClassCastException", ({
      jl_ClassCastException: 1,
      jl_RuntimeException: 1,
      jl_Exception: 1,
      jl_Throwable: 1,
      Ljava_io_Serializable: 1
    }));
    function $ct_jl_IllegalArgumentException__T__($thiz, s) {
      $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
      return $thiz;
    }
    function $ct_jl_IllegalArgumentException__($thiz) {
      $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
      return $thiz;
    }
    class $c_jl_IllegalArgumentException extends $c_jl_RuntimeException {
    }
    new $TypeData().initClass($c_jl_IllegalArgumentException, "java.lang.IllegalArgumentException", ({
      jl_IllegalArgumentException: 1,
      jl_RuntimeException: 1,
      jl_Exception: 1,
      jl_Throwable: 1,
      Ljava_io_Serializable: 1
    }));
    class $c_jl_IllegalStateException extends $c_jl_RuntimeException {
      constructor(s) {
        super();
        $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
      }
    }
    new $TypeData().initClass($c_jl_IllegalStateException, "java.lang.IllegalStateException", ({
      jl_IllegalStateException: 1,
      jl_RuntimeException: 1,
      jl_Exception: 1,
      jl_Throwable: 1,
      Ljava_io_Serializable: 1
    }));
    function $ct_jl_IndexOutOfBoundsException__T__($thiz, s) {
      $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
      return $thiz;
    }
    class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
    }
    new $TypeData().initClass($c_jl_IndexOutOfBoundsException, "java.lang.IndexOutOfBoundsException", ({
      jl_IndexOutOfBoundsException: 1,
      jl_RuntimeException: 1,
      jl_Exception: 1,
      jl_Throwable: 1,
      Ljava_io_Serializable: 1
    }));
    /** @constructor */
    function $c_jl_JSConsoleBasedPrintStream$DummyOutputStream() {
    }
    $c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype = new $h_Ljava_io_OutputStream();
    $c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype.constructor = $c_jl_JSConsoleBasedPrintStream$DummyOutputStream;
    $c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype;
    new $TypeData().initClass($c_jl_JSConsoleBasedPrintStream$DummyOutputStream, "java.lang.JSConsoleBasedPrintStream$DummyOutputStream", ({
      jl_JSConsoleBasedPrintStream$DummyOutputStream: 1,
      Ljava_io_OutputStream: 1,
      Ljava_io_Closeable: 1,
      jl_AutoCloseable: 1,
      Ljava_io_Flushable: 1
    }));
    class $c_jl_NegativeArraySizeException extends $c_jl_RuntimeException {
      constructor() {
        super();
        $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
      }
    }
    new $TypeData().initClass($c_jl_NegativeArraySizeException, "java.lang.NegativeArraySizeException", ({
      jl_NegativeArraySizeException: 1,
      jl_RuntimeException: 1,
      jl_Exception: 1,
      jl_Throwable: 1,
      Ljava_io_Serializable: 1
    }));
    function $ct_jl_NullPointerException__T__($thiz, s) {
      $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
      return $thiz;
    }
    function $ct_jl_NullPointerException__($thiz) {
      $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
      return $thiz;
    }
    class $c_jl_NullPointerException extends $c_jl_RuntimeException {
    }
    new $TypeData().initClass($c_jl_NullPointerException, "java.lang.NullPointerException", ({
      jl_NullPointerException: 1,
      jl_RuntimeException: 1,
      jl_Exception: 1,
      jl_Throwable: 1,
      Ljava_io_Serializable: 1
    }));
    var $d_jl_Short = new $TypeData().initClass(0, "java.lang.Short", ({
      jl_Short: 1,
      jl_Number: 1,
      Ljava_io_Serializable: 1,
      jl_Comparable: 1,
      jl_constant_Constable: 1
    }), ((x) => $isShort(x)));
    class $c_jl_StackOverflowError extends $c_jl_VirtualMachineError {
      constructor(s) {
        super();
        $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
      }
    }
    new $TypeData().initClass($c_jl_StackOverflowError, "java.lang.StackOverflowError", ({
      jl_StackOverflowError: 1,
      jl_VirtualMachineError: 1,
      jl_Error: 1,
      jl_Throwable: 1,
      Ljava_io_Serializable: 1
    }));
    class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
      constructor(s) {
        super();
        $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
      }
    }
    new $TypeData().initClass($c_jl_UnsupportedOperationException, "java.lang.UnsupportedOperationException", ({
      jl_UnsupportedOperationException: 1,
      jl_RuntimeException: 1,
      jl_Exception: 1,
      jl_Throwable: 1,
      Ljava_io_Serializable: 1
    }));
    class $c_ju_ConcurrentModificationException extends $c_jl_RuntimeException {
      constructor(s) {
        super();
        $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
      }
    }
    new $TypeData().initClass($c_ju_ConcurrentModificationException, "java.util.ConcurrentModificationException", ({
      ju_ConcurrentModificationException: 1,
      jl_RuntimeException: 1,
      jl_Exception: 1,
      jl_Throwable: 1,
      Ljava_io_Serializable: 1
    }));
    function $ct_ju_NoSuchElementException__T__($thiz, s) {
      $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
      return $thiz;
    }
    class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
    }
    new $TypeData().initClass($c_ju_NoSuchElementException, "java.util.NoSuchElementException", ({
      ju_NoSuchElementException: 1,
      jl_RuntimeException: 1,
      jl_Exception: 1,
      jl_Throwable: 1,
      Ljava_io_Serializable: 1
    }));
    class $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError extends $c_jl_VirtualMachineError {
      constructor(cause) {
        super();
        var message = ((cause === null) ? null : $n(cause).toString__T());
        $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, message, cause, true, true);
      }
    }
    new $TypeData().initClass($c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError, "org.scalajs.linker.runtime.UndefinedBehaviorError", ({
      Lorg_scalajs_linker_runtime_UndefinedBehaviorError: 1,
      jl_VirtualMachineError: 1,
      jl_Error: 1,
      jl_Throwable: 1,
      Ljava_io_Serializable: 1
    }));
    /** @constructor */
    function $c_s_$less$colon$less$$anon$1() {
    }
    $c_s_$less$colon$less$$anon$1.prototype = new $h_s_$eq$colon$eq();
    $c_s_$less$colon$less$$anon$1.prototype.constructor = $c_s_$less$colon$less$$anon$1;
    $c_s_$less$colon$less$$anon$1.prototype;
    $c_s_$less$colon$less$$anon$1.prototype.apply__O__O = (function(x) {
      return x;
    });
    $c_s_$less$colon$less$$anon$1.prototype.toString__T = (function() {
      return "generalized constraint";
    });
    new $TypeData().initClass($c_s_$less$colon$less$$anon$1, "scala.$less$colon$less$$anon$1", ({
      s_$less$colon$less$$anon$1: 1,
      s_$eq$colon$eq: 1,
      s_$less$colon$less: 1,
      F1: 1,
      Ljava_io_Serializable: 1
    }));
    function $p_s_MatchError__objString$lzycompute__T($thiz) {
      if ((!$thiz.s_MatchError__f_bitmap$0)) {
        $thiz.s_MatchError__f_objString = (($thiz.s_MatchError__f_obj === null) ? "null" : $p_s_MatchError__liftedTree1$1__T($thiz));
        $thiz.s_MatchError__f_bitmap$0 = true;
      }
      return $thiz.s_MatchError__f_objString;
    }
    function $p_s_MatchError__objString__T($thiz) {
      return ((!$thiz.s_MatchError__f_bitmap$0) ? $p_s_MatchError__objString$lzycompute__T($thiz) : $thiz.s_MatchError__f_objString);
    }
    function $p_s_MatchError__ofClass$1__T($thiz) {
      var this$1 = $n($thiz.s_MatchError__f_obj);
      return ("of class " + $objectClassName(this$1));
    }
    function $p_s_MatchError__liftedTree1$1__T($thiz) {
      try {
        return ((($thiz.s_MatchError__f_obj + " (") + $p_s_MatchError__ofClass$1__T($thiz)) + ")");
      } catch (e) {
        return ("an instance " + $p_s_MatchError__ofClass$1__T($thiz));
      }
    }
    class $c_s_MatchError extends $c_jl_RuntimeException {
      constructor(obj) {
        super();
        this.s_MatchError__f_objString = null;
        this.s_MatchError__f_obj = null;
        this.s_MatchError__f_bitmap$0 = false;
        this.s_MatchError__f_obj = obj;
        $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
      }
      getMessage__T() {
        return $p_s_MatchError__objString__T(this);
      }
    }
    new $TypeData().initClass($c_s_MatchError, "scala.MatchError", ({
      s_MatchError: 1,
      jl_RuntimeException: 1,
      jl_Exception: 1,
      jl_Throwable: 1,
      Ljava_io_Serializable: 1
    }));
    /** @constructor */
    function $c_s_Option() {
    }
    $c_s_Option.prototype = new $h_O();
    $c_s_Option.prototype.constructor = $c_s_Option;
    /** @constructor */
    function $h_s_Option() {
    }
    $h_s_Option.prototype = $c_s_Option.prototype;
    $c_s_Option.prototype.isEmpty__Z = (function() {
      return (this === $m_s_None$());
    });
    $c_s_Option.prototype.knownSize__I = (function() {
      return (this.isEmpty__Z() ? 0 : 1);
    });
    $c_s_Option.prototype.iterator__sc_Iterator = (function() {
      if (this.isEmpty__Z()) {
        return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty;
      } else {
        var a = this.get__O();
        return new $c_sc_Iterator$$anon$20(a);
      }
    });
    /** @constructor */
    function $c_s_Product$$anon$1(outer) {
      this.s_Product$$anon$1__f_c = 0;
      this.s_Product$$anon$1__f_cmax = 0;
      this.s_Product$$anon$1__f_$outer = null;
      $n(outer);
      this.s_Product$$anon$1__f_$outer = outer;
      this.s_Product$$anon$1__f_c = 0;
      this.s_Product$$anon$1__f_cmax = $n(outer).productArity__I();
    }
    $c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
    $c_s_Product$$anon$1.prototype.constructor = $c_s_Product$$anon$1;
    $c_s_Product$$anon$1.prototype;
    $c_s_Product$$anon$1.prototype.hasNext__Z = (function() {
      return (this.s_Product$$anon$1__f_c < this.s_Product$$anon$1__f_cmax);
    });
    $c_s_Product$$anon$1.prototype.next__O = (function() {
      var result = $n(this.s_Product$$anon$1__f_$outer).productElement__I__O(this.s_Product$$anon$1__f_c);
      this.s_Product$$anon$1__f_c = ((1 + this.s_Product$$anon$1__f_c) | 0);
      return result;
    });
    new $TypeData().initClass($c_s_Product$$anon$1, "scala.Product$$anon$1", ({
      s_Product$$anon$1: 1,
      sc_AbstractIterator: 1,
      sc_Iterator: 1,
      sc_IterableOnce: 1,
      sc_IterableOnceOps: 1
    }));
    /** @constructor */
    function $c_T2(_1, _2) {
      this.T2__f__1 = null;
      this.T2__f__2 = null;
      this.T2__f__1 = _1;
      this.T2__f__2 = _2;
    }
    $c_T2.prototype = new $h_O();
    $c_T2.prototype.constructor = $c_T2;
    $c_T2.prototype;
    $c_T2.prototype.productArity__I = (function() {
      return 2;
    });
    $c_T2.prototype.productElement__I__O = (function(n) {
      return $f_s_Product2__productElement__I__O(this, n);
    });
    $c_T2.prototype.toString__T = (function() {
      return (((("(" + this.T2__f__1) + ",") + this.T2__f__2) + ")");
    });
    $c_T2.prototype.productPrefix__T = (function() {
      return "Tuple2";
    });
    $c_T2.prototype.productIterator__sc_Iterator = (function() {
      return new $c_sr_ScalaRunTime$$anon$1(this);
    });
    $c_T2.prototype.hashCode__I = (function() {
      var this$2 = $m_s_util_hashing_MurmurHash3$();
      return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false);
    });
    $c_T2.prototype.equals__O__Z = (function(x$1) {
      if ((this === x$1)) {
        return true;
      } else if ((x$1 instanceof $c_T2)) {
        var Tuple2$1 = $as_T2(x$1);
        return ($m_sr_BoxesRunTime$().equals__O__O__Z(this.T2__f__1, $n(Tuple2$1).T2__f__1) && $m_sr_BoxesRunTime$().equals__O__O__Z(this.T2__f__2, $n(Tuple2$1).T2__f__2));
      } else {
        return false;
      }
    });
    function $as_T2(obj) {
      return (((obj instanceof $c_T2) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Tuple2"));
    }
    var $d_T2 = new $TypeData().initClass($c_T2, "scala.Tuple2", ({
      T2: 1,
      s_Product2: 1,
      s_Product: 1,
      s_Equals: 1,
      Ljava_io_Serializable: 1
    }));
    /** @constructor */
    function $c_sc_ClassTagSeqFactory$AnySeqDelegate(delegate) {
      this.sc_ClassTagIterableFactory$AnyIterableDelegate__f_delegate = null;
      $ct_sc_ClassTagIterableFactory$AnyIterableDelegate__sc_ClassTagIterableFactory__(this, delegate);
    }
    $c_sc_ClassTagSeqFactory$AnySeqDelegate.prototype = new $h_sc_ClassTagIterableFactory$AnyIterableDelegate();
    $c_sc_ClassTagSeqFactory$AnySeqDelegate.prototype.constructor = $c_sc_ClassTagSeqFactory$AnySeqDelegate;
    $c_sc_ClassTagSeqFactory$AnySeqDelegate.prototype;
    new $TypeData().initClass($c_sc_ClassTagSeqFactory$AnySeqDelegate, "scala.collection.ClassTagSeqFactory$AnySeqDelegate", ({
      sc_ClassTagSeqFactory$AnySeqDelegate: 1,
      sc_ClassTagIterableFactory$AnyIterableDelegate: 1,
      sc_IterableFactory: 1,
      Ljava_io_Serializable: 1,
      sc_SeqFactory: 1
    }));
    function $f_sc_Iterable__toString__T($thiz) {
      return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, ($thiz.className__T() + "("), ", ", ")");
    }
    /** @constructor */
    function $c_sc_Iterator$$anon$19() {
    }
    $c_sc_Iterator$$anon$19.prototype = new $h_sc_AbstractIterator();
    $c_sc_Iterator$$anon$19.prototype.constructor = $c_sc_Iterator$$anon$19;
    $c_sc_Iterator$$anon$19.prototype;
    $c_sc_Iterator$$anon$19.prototype.hasNext__Z = (function() {
      return false;
    });
    $c_sc_Iterator$$anon$19.prototype.next__E = (function() {
      throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "next on empty iterator");
    });
    $c_sc_Iterator$$anon$19.prototype.knownSize__I = (function() {
      return 0;
    });
    $c_sc_Iterator$$anon$19.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
      return this;
    });
    $c_sc_Iterator$$anon$19.prototype.next__O = (function() {
      this.next__E();
    });
    new $TypeData().initClass($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
      sc_Iterator$$anon$19: 1,
      sc_AbstractIterator: 1,
      sc_Iterator: 1,
      sc_IterableOnce: 1,
      sc_IterableOnceOps: 1
    }));
    /** @constructor */
    function $c_sc_Iterator$$anon$20(a$1) {
      this.sc_Iterator$$anon$20__f_consumed = false;
      this.sc_Iterator$$anon$20__f_a$1 = null;
      this.sc_Iterator$$anon$20__f_a$1 = a$1;
      this.sc_Iterator$$anon$20__f_consumed = false;
    }
    $c_sc_Iterator$$anon$20.prototype = new $h_sc_AbstractIterator();
    $c_sc_Iterator$$anon$20.prototype.constructor = $c_sc_Iterator$$anon$20;
    $c_sc_Iterator$$anon$20.prototype;
    $c_sc_Iterator$$anon$20.prototype.hasNext__Z = (function() {
      return (!this.sc_Iterator$$anon$20__f_consumed);
    });
    $c_sc_Iterator$$anon$20.prototype.next__O = (function() {
      if (this.sc_Iterator$$anon$20__f_consumed) {
        return $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
      } else {
        this.sc_Iterator$$anon$20__f_consumed = true;
        return this.sc_Iterator$$anon$20__f_a$1;
      }
    });
    $c_sc_Iterator$$anon$20.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
      return (((this.sc_Iterator$$anon$20__f_consumed || (from > 0)) || (until === 0)) ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : this);
    });
    new $TypeData().initClass($c_sc_Iterator$$anon$20, "scala.collection.Iterator$$anon$20", ({
      sc_Iterator$$anon$20: 1,
      sc_AbstractIterator: 1,
      sc_Iterator: 1,
      sc_IterableOnce: 1,
      sc_IterableOnceOps: 1
    }));
    /** @constructor */
    function $c_sc_Iterator$$anon$9(outer, f$2) {
      this.sc_Iterator$$anon$9__f_$outer = null;
      this.sc_Iterator$$anon$9__f_f$2 = null;
      $n(outer);
      this.sc_Iterator$$anon$9__f_$outer = outer;
      this.sc_Iterator$$anon$9__f_f$2 = f$2;
    }
    $c_sc_Iterator$$anon$9.prototype = new $h_sc_AbstractIterator();
    $c_sc_Iterator$$anon$9.prototype.constructor = $c_sc_Iterator$$anon$9;
    $c_sc_Iterator$$anon$9.prototype;
    $c_sc_Iterator$$anon$9.prototype.knownSize__I = (function() {
      return $n(this.sc_Iterator$$anon$9__f_$outer).knownSize__I();
    });
    $c_sc_Iterator$$anon$9.prototype.hasNext__Z = (function() {
      return $n(this.sc_Iterator$$anon$9__f_$outer).hasNext__Z();
    });
    $c_sc_Iterator$$anon$9.prototype.next__O = (function() {
      return $n(this.sc_Iterator$$anon$9__f_f$2).apply__O__O($n(this.sc_Iterator$$anon$9__f_$outer).next__O());
    });
    new $TypeData().initClass($c_sc_Iterator$$anon$9, "scala.collection.Iterator$$anon$9", ({
      sc_Iterator$$anon$9: 1,
      sc_AbstractIterator: 1,
      sc_Iterator: 1,
      sc_IterableOnce: 1,
      sc_IterableOnceOps: 1
    }));
    function $p_sc_Iterator$ConcatIterator__merge$1__V($thiz) {
      while (true) {
        if (($thiz.sc_Iterator$ConcatIterator__f_current instanceof $c_sc_Iterator$ConcatIterator)) {
          var c = $as_sc_Iterator$ConcatIterator($thiz.sc_Iterator$ConcatIterator__f_current);
          $thiz.sc_Iterator$ConcatIterator__f_current = $n(c).sc_Iterator$ConcatIterator__f_current;
          $thiz.sc_Iterator$ConcatIterator__f_currentHasNextChecked = $n(c).sc_Iterator$ConcatIterator__f_currentHasNextChecked;
          if (($n(c).sc_Iterator$ConcatIterator__f_tail !== null)) {
            if (($thiz.sc_Iterator$ConcatIterator__f_last === null)) {
              $thiz.sc_Iterator$ConcatIterator__f_last = $n(c).sc_Iterator$ConcatIterator__f_last;
            }
            $n($n(c).sc_Iterator$ConcatIterator__f_last).sc_Iterator$ConcatIteratorCell__f_tail = $thiz.sc_Iterator$ConcatIterator__f_tail;
            $thiz.sc_Iterator$ConcatIterator__f_tail = $n(c).sc_Iterator$ConcatIterator__f_tail;
          }
          continue;
        }
        return (void 0);
      }
    }
    function $p_sc_Iterator$ConcatIterator__advance$1__Z($thiz) {
      while (true) {
        if (($thiz.sc_Iterator$ConcatIterator__f_tail === null)) {
          $thiz.sc_Iterator$ConcatIterator__f_current = null;
          $thiz.sc_Iterator$ConcatIterator__f_last = null;
          return false;
        } else {
          $thiz.sc_Iterator$ConcatIterator__f_current = $n($thiz.sc_Iterator$ConcatIterator__f_tail).headIterator__sc_Iterator();
          if (($thiz.sc_Iterator$ConcatIterator__f_last === $thiz.sc_Iterator$ConcatIterator__f_tail)) {
            $thiz.sc_Iterator$ConcatIterator__f_last = $n($thiz.sc_Iterator$ConcatIterator__f_last).sc_Iterator$ConcatIteratorCell__f_tail;
          }
          $thiz.sc_Iterator$ConcatIterator__f_tail = $n($thiz.sc_Iterator$ConcatIterator__f_tail).sc_Iterator$ConcatIteratorCell__f_tail;
          $p_sc_Iterator$ConcatIterator__merge$1__V($thiz);
          if ($thiz.sc_Iterator$ConcatIterator__f_currentHasNextChecked) {
            return true;
          } else if ((($thiz.sc_Iterator$ConcatIterator__f_current !== null) && $n($thiz.sc_Iterator$ConcatIterator__f_current).hasNext__Z())) {
            $thiz.sc_Iterator$ConcatIterator__f_currentHasNextChecked = true;
            return true;
          }
        }
      }
    }
    /** @constructor */
    function $c_sc_Iterator$ConcatIterator(current) {
      this.sc_Iterator$ConcatIterator__f_current = null;
      this.sc_Iterator$ConcatIterator__f_tail = null;
      this.sc_Iterator$ConcatIterator__f_last = null;
      this.sc_Iterator$ConcatIterator__f_currentHasNextChecked = false;
      this.sc_Iterator$ConcatIterator__f_current = current;
      this.sc_Iterator$ConcatIterator__f_tail = null;
      this.sc_Iterator$ConcatIterator__f_last = null;
      this.sc_Iterator$ConcatIterator__f_currentHasNextChecked = false;
    }
    $c_sc_Iterator$ConcatIterator.prototype = new $h_sc_AbstractIterator();
    $c_sc_Iterator$ConcatIterator.prototype.constructor = $c_sc_Iterator$ConcatIterator;
    $c_sc_Iterator$ConcatIterator.prototype;
    $c_sc_Iterator$ConcatIterator.prototype.hasNext__Z = (function() {
      if (this.sc_Iterator$ConcatIterator__f_currentHasNextChecked) {
        return true;
      } else if ((this.sc_Iterator$ConcatIterator__f_current !== null)) {
        if ($n(this.sc_Iterator$ConcatIterator__f_current).hasNext__Z()) {
          this.sc_Iterator$ConcatIterator__f_currentHasNextChecked = true;
          return true;
        } else {
          return $p_sc_Iterator$ConcatIterator__advance$1__Z(this);
        }
      } else {
        return false;
      }
    });
    $c_sc_Iterator$ConcatIterator.prototype.next__O = (function() {
      if (this.hasNext__Z()) {
        this.sc_Iterator$ConcatIterator__f_currentHasNextChecked = false;
        return $n(this.sc_Iterator$ConcatIterator__f_current).next__O();
      } else {
        return $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
      }
    });
    $c_sc_Iterator$ConcatIterator.prototype.concat__F0__sc_Iterator = (function(that) {
      var c = new $c_sc_Iterator$ConcatIteratorCell(that, null);
      if ((this.sc_Iterator$ConcatIterator__f_tail === null)) {
        this.sc_Iterator$ConcatIterator__f_tail = c;
        this.sc_Iterator$ConcatIterator__f_last = c;
      } else {
        $n(this.sc_Iterator$ConcatIterator__f_last).sc_Iterator$ConcatIteratorCell__f_tail = c;
        this.sc_Iterator$ConcatIterator__f_last = c;
      }
      if ((this.sc_Iterator$ConcatIterator__f_current === null)) {
        this.sc_Iterator$ConcatIterator__f_current = $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty;
      }
      return this;
    });
    function $as_sc_Iterator$ConcatIterator(obj) {
      return (((obj instanceof $c_sc_Iterator$ConcatIterator) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Iterator$ConcatIterator"));
    }
    new $TypeData().initClass($c_sc_Iterator$ConcatIterator, "scala.collection.Iterator$ConcatIterator", ({
      sc_Iterator$ConcatIterator: 1,
      sc_AbstractIterator: 1,
      sc_Iterator: 1,
      sc_IterableOnce: 1,
      sc_IterableOnceOps: 1
    }));
    function $p_sc_Iterator$SliceIterator__skip__V($thiz) {
      while (($thiz.sc_Iterator$SliceIterator__f_dropping > 0)) {
        if ($n($thiz.sc_Iterator$SliceIterator__f_underlying).hasNext__Z()) {
          $n($thiz.sc_Iterator$SliceIterator__f_underlying).next__O();
          $thiz.sc_Iterator$SliceIterator__f_dropping = (((-1) + $thiz.sc_Iterator$SliceIterator__f_dropping) | 0);
        } else {
          $thiz.sc_Iterator$SliceIterator__f_dropping = 0;
        }
      }
    }
    function $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I($thiz, lo$1) {
      if (($thiz.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining < 0)) {
        return (-1);
      } else {
        var that = (($thiz.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining - lo$1) | 0);
        return ((that < 0) ? 0 : that);
      }
    }
    /** @constructor */
    function $c_sc_Iterator$SliceIterator(underlying, start, limit) {
      this.sc_Iterator$SliceIterator__f_underlying = null;
      this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = 0;
      this.sc_Iterator$SliceIterator__f_dropping = 0;
      this.sc_Iterator$SliceIterator__f_underlying = underlying;
      this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = limit;
      this.sc_Iterator$SliceIterator__f_dropping = start;
    }
    $c_sc_Iterator$SliceIterator.prototype = new $h_sc_AbstractIterator();
    $c_sc_Iterator$SliceIterator.prototype.constructor = $c_sc_Iterator$SliceIterator;
    $c_sc_Iterator$SliceIterator.prototype;
    $c_sc_Iterator$SliceIterator.prototype.knownSize__I = (function() {
      var size = $n(this.sc_Iterator$SliceIterator__f_underlying).knownSize__I();
      if ((size < 0)) {
        return (-1);
      } else {
        var that = ((size - this.sc_Iterator$SliceIterator__f_dropping) | 0);
        var dropSize = ((that < 0) ? 0 : that);
        if ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining < 0)) {
          return dropSize;
        } else {
          var x = this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining;
          return ((x < dropSize) ? x : dropSize);
        }
      }
    });
    $c_sc_Iterator$SliceIterator.prototype.hasNext__Z = (function() {
      $p_sc_Iterator$SliceIterator__skip__V(this);
      return ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining !== 0) && $n(this.sc_Iterator$SliceIterator__f_underlying).hasNext__Z());
    });
    $c_sc_Iterator$SliceIterator.prototype.next__O = (function() {
      $p_sc_Iterator$SliceIterator__skip__V(this);
      if ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining > 0)) {
        this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = (((-1) + this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining) | 0);
        return $n(this.sc_Iterator$SliceIterator__f_underlying).next__O();
      } else {
        return ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining < 0) ? $n(this.sc_Iterator$SliceIterator__f_underlying).next__O() : $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O());
      }
    });
    $c_sc_Iterator$SliceIterator.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
      var lo = ((from > 0) ? from : 0);
      if ((until < 0)) {
        var rest = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
      } else if ((until <= lo)) {
        var rest = 0;
      } else if ((this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining < 0)) {
        var rest = ((until - lo) | 0);
      } else {
        var x = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
        var that = ((until - lo) | 0);
        var rest = ((x < that) ? x : that);
      }
      var sum = ((this.sc_Iterator$SliceIterator__f_dropping + lo) | 0);
      if ((rest === 0)) {
        return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty;
      } else if ((sum < 0)) {
        this.sc_Iterator$SliceIterator__f_dropping = 2147483647;
        this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = 0;
        var xs = new $c_sjsr_AnonFunction0((() => new $c_sc_Iterator$SliceIterator(this.sc_Iterator$SliceIterator__f_underlying, (((-2147483647) + sum) | 0), rest)));
        return $f_sc_Iterator__concat__F0__sc_Iterator(this, xs);
      } else {
        this.sc_Iterator$SliceIterator__f_dropping = sum;
        this.sc_Iterator$SliceIterator__f_scala$collection$Iterator$SliceIterator$$remaining = rest;
        return this;
      }
    });
    new $TypeData().initClass($c_sc_Iterator$SliceIterator, "scala.collection.Iterator$SliceIterator", ({
      sc_Iterator$SliceIterator: 1,
      sc_AbstractIterator: 1,
      sc_Iterator: 1,
      sc_IterableOnce: 1,
      sc_IterableOnceOps: 1
    }));
    function $f_sc_LinearSeqOps__isDefinedAt__I__Z($thiz, x) {
      return ((x >= 0) && ($thiz.lengthCompare__I__I(x) > 0));
    }
    function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
      if ((n < 0)) {
        throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
      }
      var skipped = $as_sc_LinearSeq($thiz.drop__I__O(n));
      if ($n(skipped).isEmpty__Z()) {
        throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
      }
      return $n(skipped).head__O();
    }
    function $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
      if ($is_sc_LinearSeq(that)) {
        var x2 = $as_sc_LinearSeq(that);
        return $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, $as_sc_LinearSeq($thiz), x2);
      } else {
        return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that);
      }
    }
    function $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, a, b) {
      while (true) {
        if ((a === b)) {
          return true;
        } else {
          var this$1 = $n(a);
          if ((!this$1.isEmpty__Z())) {
            var this$2 = $n(b);
            var $x_1 = (!this$2.isEmpty__Z());
          } else {
            var $x_1 = false;
          }
          if (($x_1 && $m_sr_BoxesRunTime$().equals__O__O__Z($n(a).head__O(), $n(b).head__O()))) {
            var temp$a = $as_sc_LinearSeq($n(a).tail__O());
            var temp$b = $as_sc_LinearSeq($n(b).tail__O());
            a = temp$a;
            b = temp$b;
          } else {
            return ($n(a).isEmpty__Z() && $n(b).isEmpty__Z());
          }
        }
      }
    }
    /** @constructor */
    function $c_sc_StrictOptimizedLinearSeqOps$$anon$1(outer) {
      this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current = null;
      this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current = outer;
    }
    $c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = new $h_sc_AbstractIterator();
    $c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype.constructor = $c_sc_StrictOptimizedLinearSeqOps$$anon$1;
    $c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype;
    $c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype.hasNext__Z = (function() {
      return (!$n(this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current).isEmpty__Z());
    });
    $c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype.next__O = (function() {
      var r = $n(this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current).head__O();
      this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current = $as_sc_StrictOptimizedLinearSeqOps($n(this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current).tail__O());
      return r;
    });
    new $TypeData().initClass($c_sc_StrictOptimizedLinearSeqOps$$anon$1, "scala.collection.StrictOptimizedLinearSeqOps$$anon$1", ({
      sc_StrictOptimizedLinearSeqOps$$anon$1: 1,
      sc_AbstractIterator: 1,
      sc_Iterator: 1,
      sc_IterableOnce: 1,
      sc_IterableOnceOps: 1
    }));
    function $p_sci_ChampBaseIterator__initNodes__V($thiz) {
      if (($thiz.sci_ChampBaseIterator__f_nodeCursorsAndLengths === null)) {
        $thiz.sci_ChampBaseIterator__f_nodeCursorsAndLengths = new $ac_I(($m_sci_Node$().sci_Node$__f_MaxDepth << 1));
        $thiz.sci_ChampBaseIterator__f_nodes = new ($d_sci_Node.getArrayOf().constr)($m_sci_Node$().sci_Node$__f_MaxDepth);
      }
    }
    function $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, node) {
      $thiz.sci_ChampBaseIterator__f_currentValueNode = node;
      $thiz.sci_ChampBaseIterator__f_currentValueCursor = 0;
      $thiz.sci_ChampBaseIterator__f_currentValueLength = $n(node).payloadArity__I();
    }
    function $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, node) {
      $p_sci_ChampBaseIterator__initNodes__V($thiz);
      $thiz.sci_ChampBaseIterator__f_currentStackLevel = ((1 + $thiz.sci_ChampBaseIterator__f_currentStackLevel) | 0);
      var cursorIndex = ($thiz.sci_ChampBaseIterator__f_currentStackLevel << 1);
      var lengthIndex = ((1 + ($thiz.sci_ChampBaseIterator__f_currentStackLevel << 1)) | 0);
      $n($thiz.sci_ChampBaseIterator__f_nodes).set($thiz.sci_ChampBaseIterator__f_currentStackLevel, node);
      $n($thiz.sci_ChampBaseIterator__f_nodeCursorsAndLengths).set(cursorIndex, 0);
      $n($thiz.sci_ChampBaseIterator__f_nodeCursorsAndLengths).set(lengthIndex, $n(node).nodeArity__I());
    }
    function $p_sci_ChampBaseIterator__popNode__V($thiz) {
      $thiz.sci_ChampBaseIterator__f_currentStackLevel = (((-1) + $thiz.sci_ChampBaseIterator__f_currentStackLevel) | 0);
    }
    function $p_sci_ChampBaseIterator__searchNextValueNode__Z($thiz) {
      while (($thiz.sci_ChampBaseIterator__f_currentStackLevel >= 0)) {
        var cursorIndex = ($thiz.sci_ChampBaseIterator__f_currentStackLevel << 1);
        var lengthIndex = ((1 + ($thiz.sci_ChampBaseIterator__f_currentStackLevel << 1)) | 0);
        var nodeCursor = $n($thiz.sci_ChampBaseIterator__f_nodeCursorsAndLengths).get(cursorIndex);
        var nodeLength = $n($thiz.sci_ChampBaseIterator__f_nodeCursorsAndLengths).get(lengthIndex);
        if ((nodeCursor < nodeLength)) {
          var ev$1 = $thiz.sci_ChampBaseIterator__f_nodeCursorsAndLengths;
          $n(ev$1).set(cursorIndex, ((1 + $n(ev$1).get(cursorIndex)) | 0));
          var nextNode = $n($n($thiz.sci_ChampBaseIterator__f_nodes).get($thiz.sci_ChampBaseIterator__f_currentStackLevel)).getNode__I__sci_Node(nodeCursor);
          if ($n(nextNode).hasNodes__Z()) {
            $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, nextNode);
          }
          if ($n(nextNode).hasPayload__Z()) {
            $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, nextNode);
            return true;
          }
        } else {
          $p_sci_ChampBaseIterator__popNode__V($thiz);
        }
      }
      return false;
    }
    function $ct_sci_ChampBaseIterator__($thiz) {
      $thiz.sci_ChampBaseIterator__f_currentValueCursor = 0;
      $thiz.sci_ChampBaseIterator__f_currentValueLength = 0;
      $thiz.sci_ChampBaseIterator__f_currentStackLevel = (-1);
      return $thiz;
    }
    function $ct_sci_ChampBaseIterator__sci_Node__($thiz, rootNode) {
      $ct_sci_ChampBaseIterator__($thiz);
      if ($n(rootNode).hasNodes__Z()) {
        $p_sci_ChampBaseIterator__pushNode__sci_Node__V($thiz, rootNode);
      }
      if ($n(rootNode).hasPayload__Z()) {
        $p_sci_ChampBaseIterator__setupPayloadNode__sci_Node__V($thiz, rootNode);
      }
      return $thiz;
    }
    /** @constructor */
    function $c_sci_ChampBaseIterator() {
      this.sci_ChampBaseIterator__f_currentValueCursor = 0;
      this.sci_ChampBaseIterator__f_currentValueLength = 0;
      this.sci_ChampBaseIterator__f_currentValueNode = null;
      this.sci_ChampBaseIterator__f_currentStackLevel = 0;
      this.sci_ChampBaseIterator__f_nodeCursorsAndLengths = null;
      this.sci_ChampBaseIterator__f_nodes = null;
    }
    $c_sci_ChampBaseIterator.prototype = new $h_sc_AbstractIterator();
    $c_sci_ChampBaseIterator.prototype.constructor = $c_sci_ChampBaseIterator;
    /** @constructor */
    function $h_sci_ChampBaseIterator() {
    }
    $h_sci_ChampBaseIterator.prototype = $c_sci_ChampBaseIterator.prototype;
    $c_sci_ChampBaseIterator.prototype.hasNext__Z = (function() {
      return ((this.sci_ChampBaseIterator__f_currentValueCursor < this.sci_ChampBaseIterator__f_currentValueLength) || $p_sci_ChampBaseIterator__searchNextValueNode__Z(this));
    });
    function $p_sci_ChampBaseReverseIterator__setupPayloadNode__sci_Node__V($thiz, node) {
      $thiz.sci_ChampBaseReverseIterator__f_currentValueNode = node;
      $thiz.sci_ChampBaseReverseIterator__f_currentValueCursor = (((-1) + $n(node).payloadArity__I()) | 0);
    }
    function $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, node) {
      $thiz.sci_ChampBaseReverseIterator__f_currentStackLevel = ((1 + $thiz.sci_ChampBaseReverseIterator__f_currentStackLevel) | 0);
      $n($thiz.sci_ChampBaseReverseIterator__f_nodeStack).set($thiz.sci_ChampBaseReverseIterator__f_currentStackLevel, node);
      $n($thiz.sci_ChampBaseReverseIterator__f_nodeIndex).set($thiz.sci_ChampBaseReverseIterator__f_currentStackLevel, (((-1) + $n(node).nodeArity__I()) | 0));
    }
    function $p_sci_ChampBaseReverseIterator__popNode__V($thiz) {
      $thiz.sci_ChampBaseReverseIterator__f_currentStackLevel = (((-1) + $thiz.sci_ChampBaseReverseIterator__f_currentStackLevel) | 0);
    }
    function $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z($thiz) {
      while (($thiz.sci_ChampBaseReverseIterator__f_currentStackLevel >= 0)) {
        var nodeCursor = $n($thiz.sci_ChampBaseReverseIterator__f_nodeIndex).get($thiz.sci_ChampBaseReverseIterator__f_currentStackLevel);
        $n($thiz.sci_ChampBaseReverseIterator__f_nodeIndex).set($thiz.sci_ChampBaseReverseIterator__f_currentStackLevel, (((-1) + nodeCursor) | 0));
        if ((nodeCursor >= 0)) {
          var nextNode = $n($n($thiz.sci_ChampBaseReverseIterator__f_nodeStack).get($thiz.sci_ChampBaseReverseIterator__f_currentStackLevel)).getNode__I__sci_Node(nodeCursor);
          $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, nextNode);
        } else {
          var currNode = $n($thiz.sci_ChampBaseReverseIterator__f_nodeStack).get($thiz.sci_ChampBaseReverseIterator__f_currentStackLevel);
          $p_sci_ChampBaseReverseIterator__popNode__V($thiz);
          if ($n(currNode).hasPayload__Z()) {
            $p_sci_ChampBaseReverseIterator__setupPayloadNode__sci_Node__V($thiz, currNode);
            return true;
          }
        }
      }
      return false;
    }
    function $ct_sci_ChampBaseReverseIterator__($thiz) {
      $thiz.sci_ChampBaseReverseIterator__f_currentValueCursor = (-1);
      $thiz.sci_ChampBaseReverseIterator__f_currentStackLevel = (-1);
      $thiz.sci_ChampBaseReverseIterator__f_nodeIndex = new $ac_I(((1 + $m_sci_Node$().sci_Node$__f_MaxDepth) | 0));
      $thiz.sci_ChampBaseReverseIterator__f_nodeStack = new ($d_sci_Node.getArrayOf().constr)(((1 + $m_sci_Node$().sci_Node$__f_MaxDepth) | 0));
      return $thiz;
    }
    function $ct_sci_ChampBaseReverseIterator__sci_Node__($thiz, rootNode) {
      $ct_sci_ChampBaseReverseIterator__($thiz);
      $p_sci_ChampBaseReverseIterator__pushNode__sci_Node__V($thiz, rootNode);
      $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z($thiz);
      return $thiz;
    }
    /** @constructor */
    function $c_sci_ChampBaseReverseIterator() {
      this.sci_ChampBaseReverseIterator__f_currentValueCursor = 0;
      this.sci_ChampBaseReverseIterator__f_currentValueNode = null;
      this.sci_ChampBaseReverseIterator__f_currentStackLevel = 0;
      this.sci_ChampBaseReverseIterator__f_nodeIndex = null;
      this.sci_ChampBaseReverseIterator__f_nodeStack = null;
    }
    $c_sci_ChampBaseReverseIterator.prototype = new $h_sc_AbstractIterator();
    $c_sci_ChampBaseReverseIterator.prototype.constructor = $c_sci_ChampBaseReverseIterator;
    /** @constructor */
    function $h_sci_ChampBaseReverseIterator() {
    }
    $h_sci_ChampBaseReverseIterator.prototype = $c_sci_ChampBaseReverseIterator.prototype;
    $c_sci_ChampBaseReverseIterator.prototype.hasNext__Z = (function() {
      return ((this.sci_ChampBaseReverseIterator__f_currentValueCursor >= 0) || $p_sci_ChampBaseReverseIterator__searchNextValueNode__Z(this));
    });
    function $p_sci_HashMapBuilder__isAliased__Z($thiz) {
      return ($thiz.sci_HashMapBuilder__f_aliased !== null);
    }
    function $p_sci_HashMapBuilder__insertElement__AI__I__I__AI($thiz, as, ix, elem) {
      if ((ix < 0)) {
        throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException());
      }
      if ((ix > $n(as).u.length)) {
        throw $ct_jl_ArrayIndexOutOfBoundsException__(new $c_jl_ArrayIndexOutOfBoundsException());
      }
      var result = new $ac_I(((1 + $n(as).u.length) | 0));
      $systemArraycopy($n(as), 0, result, 0, ix);
      result.set(ix, elem);
      var destPos = ((1 + ix) | 0);
      var length = (($n(as).u.length - ix) | 0);
      $systemArraycopy($n(as), ix, result, destPos, length);
      return result;
    }
    function $p_sci_HashMapBuilder__insertValue__sci_BitmapIndexedMapNode__I__O__I__I__O__V($thiz, bm, bitpos, key, originalHash, keyHash, value) {
      var dataIx = $n(bm).dataIndex__I__I(bitpos);
      var idx = (dataIx << 1);
      var src = $n(bm).sci_BitmapIndexedMapNode__f_content;
      var dst = new $ac_O(((2 + $n(src).u.length) | 0));
      $systemArraycopyRefs($n(src), 0, dst, 0, idx);
      dst.set(idx, key);
      dst.set(((1 + idx) | 0), value);
      var destPos = ((2 + idx) | 0);
      var length = (($n(src).u.length - idx) | 0);
      $systemArraycopyRefs($n(src), idx, dst, destPos, length);
      var dstHashes = $p_sci_HashMapBuilder__insertElement__AI__I__I__AI($thiz, $n(bm).sci_BitmapIndexedMapNode__f_originalHashes, dataIx, originalHash);
      $n(bm).sci_BitmapIndexedMapNode__f_dataMap = ($n(bm).sci_BitmapIndexedMapNode__f_dataMap | bitpos);
      $n(bm).sci_BitmapIndexedMapNode__f_content = dst;
      $n(bm).sci_BitmapIndexedMapNode__f_originalHashes = dstHashes;
      $n(bm).sci_BitmapIndexedMapNode__f_size = ((1 + $n(bm).sci_BitmapIndexedMapNode__f_size) | 0);
      $n(bm).sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode = (($n(bm).sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode + keyHash) | 0);
    }
    function $p_sci_HashMapBuilder__ensureUnaliased__V($thiz) {
      if ($p_sci_HashMapBuilder__isAliased__Z($thiz)) {
        $p_sci_HashMapBuilder__copyElems__V($thiz);
      }
      $thiz.sci_HashMapBuilder__f_aliased = null;
    }
    function $p_sci_HashMapBuilder__copyElems__V($thiz) {
      $thiz.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode = $n($thiz.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode).copy__sci_BitmapIndexedMapNode();
    }
    /** @constructor */
    function $c_sci_HashMapBuilder() {
      this.sci_HashMapBuilder__f_aliased = null;
      this.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode = null;
      this.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode = new $c_sci_BitmapIndexedMapNode(0, 0, $m_s_Array$EmptyArrays$().s_Array$EmptyArrays$__f_emptyObjectArray, $m_s_Array$EmptyArrays$().s_Array$EmptyArrays$__f_emptyIntArray, 0, 0);
    }
    $c_sci_HashMapBuilder.prototype = new $h_O();
    $c_sci_HashMapBuilder.prototype.constructor = $c_sci_HashMapBuilder;
    $c_sci_HashMapBuilder.prototype;
    $c_sci_HashMapBuilder.prototype.update__sci_MapNode__O__O__I__I__I__V = (function(mapNode, key, value, originalHash, keyHash, shift) {
      if ((mapNode instanceof $c_sci_BitmapIndexedMapNode)) {
        var x2 = $as_sci_BitmapIndexedMapNode(mapNode);
        var mask = $m_sci_Node$().maskFrom__I__I__I(keyHash, shift);
        var bitpos = $m_sci_Node$().bitposFrom__I__I(mask);
        if ((($n(x2).sci_BitmapIndexedMapNode__f_dataMap & bitpos) !== 0)) {
          var index = $m_sci_Node$().indexFrom__I__I__I__I($n(x2).sci_BitmapIndexedMapNode__f_dataMap, mask, bitpos);
          var key0 = $n(x2).getKey__I__O(index);
          var key0UnimprovedHash = $n(x2).getHash__I__I(index);
          if (((key0UnimprovedHash === originalHash) && $m_sr_BoxesRunTime$().equals__O__O__Z(key0, key))) {
            $n($n(x2).sci_BitmapIndexedMapNode__f_content).set(((1 + (index << 1)) | 0), value);
          } else {
            var value0 = $n(x2).getValue__I__O(index);
            var key0Hash = $m_sc_Hashing$().improve__I__I(key0UnimprovedHash);
            var subNodeNew = $n(x2).mergeTwoKeyValPairs__O__O__I__I__O__O__I__I__I__sci_MapNode(key0, value0, key0UnimprovedHash, key0Hash, key, value, originalHash, keyHash, ((5 + shift) | 0));
            $n(x2).migrateFromInlineToNodeInPlace__I__I__sci_MapNode__sci_BitmapIndexedMapNode(bitpos, key0Hash, subNodeNew);
          }
        } else if ((($n(x2).sci_BitmapIndexedMapNode__f_nodeMap & bitpos) !== 0)) {
          var index$2 = $m_sci_Node$().indexFrom__I__I__I__I($n(x2).sci_BitmapIndexedMapNode__f_nodeMap, mask, bitpos);
          var subNode = $n(x2).getNode__I__sci_MapNode(index$2);
          var beforeSize = $n(subNode).size__I();
          var beforeHash = $n(subNode).cachedJavaKeySetHashCode__I();
          this.update__sci_MapNode__O__O__I__I__I__V(subNode, key, value, originalHash, keyHash, ((5 + shift) | 0));
          $n(x2).sci_BitmapIndexedMapNode__f_size = (($n(x2).sci_BitmapIndexedMapNode__f_size + (($n(subNode).size__I() - beforeSize) | 0)) | 0);
          $n(x2).sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode = (($n(x2).sci_BitmapIndexedMapNode__f_cachedJavaKeySetHashCode + (($n(subNode).cachedJavaKeySetHashCode__I() - beforeHash) | 0)) | 0);
        } else {
          $p_sci_HashMapBuilder__insertValue__sci_BitmapIndexedMapNode__I__O__I__I__O__V(this, x2, bitpos, key, originalHash, keyHash, value);
        }
      } else if ((mapNode instanceof $c_sci_HashCollisionMapNode)) {
        var x3 = $as_sci_HashCollisionMapNode(mapNode);
        var index$3 = $n(x3).indexOf__O__I(key);
        if ((index$3 < 0)) {
          $n(x3).sci_HashCollisionMapNode__f_content = $n($n(x3).sci_HashCollisionMapNode__f_content).appended__O__sci_Vector(new $c_T2(key, value));
        } else {
          $n(x3).sci_HashCollisionMapNode__f_content = $n($n(x3).sci_HashCollisionMapNode__f_content).updated__I__O__sci_Vector(index$3, new $c_T2(key, value));
        }
      } else {
        throw new $c_s_MatchError(mapNode);
      }
    });
    $c_sci_HashMapBuilder.prototype.result__sci_HashMap = (function() {
      if (($n(this.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode).sci_BitmapIndexedMapNode__f_size === 0)) {
        var this$1$1 = $m_sci_HashMap$();
        return this$1$1.sci_HashMap$__f_EmptyMap;
      } else if ((this.sci_HashMapBuilder__f_aliased !== null)) {
        return this.sci_HashMapBuilder__f_aliased;
      } else {
        this.sci_HashMapBuilder__f_aliased = new $c_sci_HashMap(this.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode);
        return this.sci_HashMapBuilder__f_aliased;
      }
    });
    $c_sci_HashMapBuilder.prototype.addOne__T2__sci_HashMapBuilder = (function(elem) {
      $p_sci_HashMapBuilder__ensureUnaliased__V(this);
      var x = $n(elem).T2__f__1;
      var h = $m_sr_Statics$().anyHash__O__I(x);
      var im = $m_sc_Hashing$().improve__I__I(h);
      this.update__sci_MapNode__O__O__I__I__I__V(this.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode, $n(elem).T2__f__1, $n(elem).T2__f__2, h, im, 0);
      return this;
    });
    $c_sci_HashMapBuilder.prototype.addOne__O__O__sci_HashMapBuilder = (function(key, value) {
      $p_sci_HashMapBuilder__ensureUnaliased__V(this);
      var originalHash = $m_sr_Statics$().anyHash__O__I(key);
      this.update__sci_MapNode__O__O__I__I__I__V(this.sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode, key, value, originalHash, $m_sc_Hashing$().improve__I__I(originalHash), 0);
      return this;
    });
    $c_sci_HashMapBuilder.prototype.addAll__sc_IterableOnce__sci_HashMapBuilder = (function(xs) {
      $p_sci_HashMapBuilder__ensureUnaliased__V(this);
      if ((xs instanceof $c_sci_HashMap)) {
        var x2 = $as_sci_HashMap(xs);
        new $c_sci_HashMapBuilder$$anon$1(this, x2);
      } else if ($is_sci_Map(xs)) {
        var x5 = $as_sci_Map(xs);
        $n(x5).foreachEntry__F2__V(new $c_sjsr_AnonFunction2(((key$2$2, value$2$2) => this.addOne__O__O__sci_HashMapBuilder(key$2$2, value$2$2))));
      } else {
        var it = $n(xs).iterator__sc_Iterator();
        while ($n(it).hasNext__Z()) {
          this.addOne__T2__sci_HashMapBuilder($as_T2($n(it).next__O()));
        }
      }
      return this;
    });
    $c_sci_HashMapBuilder.prototype.addAll__sc_IterableOnce__scm_Growable = (function(elems) {
      return this.addAll__sc_IterableOnce__sci_HashMapBuilder(elems);
    });
    $c_sci_HashMapBuilder.prototype.addOne__O__scm_Growable = (function(elem) {
      return this.addOne__T2__sci_HashMapBuilder($as_T2(elem));
    });
    $c_sci_HashMapBuilder.prototype.result__O = (function() {
      return this.result__sci_HashMap();
    });
    new $TypeData().initClass($c_sci_HashMapBuilder, "scala.collection.immutable.HashMapBuilder", ({
      sci_HashMapBuilder: 1,
      scm_ReusableBuilder: 1,
      scm_Builder: 1,
      scm_Growable: 1,
      scm_Clearable: 1
    }));
    function $ct_sci_Map$Map2$Map2Iterator__sci_Map$Map2__($thiz, outer) {
      $n(outer);
      $thiz.sci_Map$Map2$Map2Iterator__f_$outer = outer;
      $thiz.sci_Map$Map2$Map2Iterator__f_i = 0;
      return $thiz;
    }
    /** @constructor */
    function $c_sci_Map$Map2$Map2Iterator() {
      this.sci_Map$Map2$Map2Iterator__f_i = 0;
      this.sci_Map$Map2$Map2Iterator__f_$outer = null;
    }
    $c_sci_Map$Map2$Map2Iterator.prototype = new $h_sc_AbstractIterator();
    $c_sci_Map$Map2$Map2Iterator.prototype.constructor = $c_sci_Map$Map2$Map2Iterator;
    /** @constructor */
    function $h_sci_Map$Map2$Map2Iterator() {
    }
    $h_sci_Map$Map2$Map2Iterator.prototype = $c_sci_Map$Map2$Map2Iterator.prototype;
    $c_sci_Map$Map2$Map2Iterator.prototype.hasNext__Z = (function() {
      return (this.sci_Map$Map2$Map2Iterator__f_i < 2);
    });
    $c_sci_Map$Map2$Map2Iterator.prototype.next__O = (function() {
      var x1 = this.sci_Map$Map2$Map2Iterator__f_i;
      switch (x1) {
        case 0: {
          var k = $n(this.sci_Map$Map2$Map2Iterator__f_$outer).sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1;
          var v = $n(this.sci_Map$Map2$Map2Iterator__f_$outer).sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value1;
          var result = new $c_T2(k, v);
          break;
        }
        case 1: {
          var k$1 = $n(this.sci_Map$Map2$Map2Iterator__f_$outer).sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2;
          var v$1 = $n(this.sci_Map$Map2$Map2Iterator__f_$outer).sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value2;
          var result = new $c_T2(k$1, v$1);
          break;
        }
        default: {
          var result = $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
        }
      }
      this.sci_Map$Map2$Map2Iterator__f_i = ((1 + this.sci_Map$Map2$Map2Iterator__f_i) | 0);
      return result;
    });
    $c_sci_Map$Map2$Map2Iterator.prototype.drop__I__sc_Iterator = (function(n) {
      this.sci_Map$Map2$Map2Iterator__f_i = ((this.sci_Map$Map2$Map2Iterator__f_i + n) | 0);
      return this;
    });
    function $ct_sci_Map$Map3$Map3Iterator__sci_Map$Map3__($thiz, outer) {
      $n(outer);
      $thiz.sci_Map$Map3$Map3Iterator__f_$outer = outer;
      $thiz.sci_Map$Map3$Map3Iterator__f_i = 0;
      return $thiz;
    }
    /** @constructor */
    function $c_sci_Map$Map3$Map3Iterator() {
      this.sci_Map$Map3$Map3Iterator__f_i = 0;
      this.sci_Map$Map3$Map3Iterator__f_$outer = null;
    }
    $c_sci_Map$Map3$Map3Iterator.prototype = new $h_sc_AbstractIterator();
    $c_sci_Map$Map3$Map3Iterator.prototype.constructor = $c_sci_Map$Map3$Map3Iterator;
    /** @constructor */
    function $h_sci_Map$Map3$Map3Iterator() {
    }
    $h_sci_Map$Map3$Map3Iterator.prototype = $c_sci_Map$Map3$Map3Iterator.prototype;
    $c_sci_Map$Map3$Map3Iterator.prototype.hasNext__Z = (function() {
      return (this.sci_Map$Map3$Map3Iterator__f_i < 3);
    });
    $c_sci_Map$Map3$Map3Iterator.prototype.next__O = (function() {
      var x1 = this.sci_Map$Map3$Map3Iterator__f_i;
      switch (x1) {
        case 0: {
          var k = $n(this.sci_Map$Map3$Map3Iterator__f_$outer).sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1;
          var v = $n(this.sci_Map$Map3$Map3Iterator__f_$outer).sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1;
          var result = new $c_T2(k, v);
          break;
        }
        case 1: {
          var k$1 = $n(this.sci_Map$Map3$Map3Iterator__f_$outer).sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2;
          var v$1 = $n(this.sci_Map$Map3$Map3Iterator__f_$outer).sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2;
          var result = new $c_T2(k$1, v$1);
          break;
        }
        case 2: {
          var k$2 = $n(this.sci_Map$Map3$Map3Iterator__f_$outer).sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3;
          var v$2 = $n(this.sci_Map$Map3$Map3Iterator__f_$outer).sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3;
          var result = new $c_T2(k$2, v$2);
          break;
        }
        default: {
          var result = $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
        }
      }
      this.sci_Map$Map3$Map3Iterator__f_i = ((1 + this.sci_Map$Map3$Map3Iterator__f_i) | 0);
      return result;
    });
    $c_sci_Map$Map3$Map3Iterator.prototype.drop__I__sc_Iterator = (function(n) {
      this.sci_Map$Map3$Map3Iterator__f_i = ((this.sci_Map$Map3$Map3Iterator__f_i + n) | 0);
      return this;
    });
    function $ct_sci_Map$Map4$Map4Iterator__sci_Map$Map4__($thiz, outer) {
      $n(outer);
      $thiz.sci_Map$Map4$Map4Iterator__f_$outer = outer;
      $thiz.sci_Map$Map4$Map4Iterator__f_i = 0;
      return $thiz;
    }
    /** @constructor */
    function $c_sci_Map$Map4$Map4Iterator() {
      this.sci_Map$Map4$Map4Iterator__f_i = 0;
      this.sci_Map$Map4$Map4Iterator__f_$outer = null;
    }
    $c_sci_Map$Map4$Map4Iterator.prototype = new $h_sc_AbstractIterator();
    $c_sci_Map$Map4$Map4Iterator.prototype.constructor = $c_sci_Map$Map4$Map4Iterator;
    /** @constructor */
    function $h_sci_Map$Map4$Map4Iterator() {
    }
    $h_sci_Map$Map4$Map4Iterator.prototype = $c_sci_Map$Map4$Map4Iterator.prototype;
    $c_sci_Map$Map4$Map4Iterator.prototype.hasNext__Z = (function() {
      return (this.sci_Map$Map4$Map4Iterator__f_i < 4);
    });
    $c_sci_Map$Map4$Map4Iterator.prototype.next__O = (function() {
      var x1 = this.sci_Map$Map4$Map4Iterator__f_i;
      switch (x1) {
        case 0: {
          var k = $n(this.sci_Map$Map4$Map4Iterator__f_$outer).sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1;
          var v = $n(this.sci_Map$Map4$Map4Iterator__f_$outer).sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1;
          var result = new $c_T2(k, v);
          break;
        }
        case 1: {
          var k$1 = $n(this.sci_Map$Map4$Map4Iterator__f_$outer).sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2;
          var v$1 = $n(this.sci_Map$Map4$Map4Iterator__f_$outer).sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2;
          var result = new $c_T2(k$1, v$1);
          break;
        }
        case 2: {
          var k$2 = $n(this.sci_Map$Map4$Map4Iterator__f_$outer).sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3;
          var v$2 = $n(this.sci_Map$Map4$Map4Iterator__f_$outer).sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3;
          var result = new $c_T2(k$2, v$2);
          break;
        }
        case 3: {
          var k$3 = $n(this.sci_Map$Map4$Map4Iterator__f_$outer).sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4;
          var v$3 = $n(this.sci_Map$Map4$Map4Iterator__f_$outer).sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4;
          var result = new $c_T2(k$3, v$3);
          break;
        }
        default: {
          var result = $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
        }
      }
      this.sci_Map$Map4$Map4Iterator__f_i = ((1 + this.sci_Map$Map4$Map4Iterator__f_i) | 0);
      return result;
    });
    $c_sci_Map$Map4$Map4Iterator.prototype.drop__I__sc_Iterator = (function(n) {
      this.sci_Map$Map4$Map4Iterator__f_i = ((this.sci_Map$Map4$Map4Iterator__f_i + n) | 0);
      return this;
    });
    /** @constructor */
    function $c_sci_MapBuilderImpl() {
      this.sci_MapBuilderImpl__f_elems = null;
      this.sci_MapBuilderImpl__f_switchedToHashMapBuilder = false;
      this.sci_MapBuilderImpl__f_hashMapBuilder = null;
      this.sci_MapBuilderImpl__f_elems = $m_sci_Map$EmptyMap$();
      this.sci_MapBuilderImpl__f_switchedToHashMapBuilder = false;
    }
    $c_sci_MapBuilderImpl.prototype = new $h_O();
    $c_sci_MapBuilderImpl.prototype.constructor = $c_sci_MapBuilderImpl;
    $c_sci_MapBuilderImpl.prototype;
    $c_sci_MapBuilderImpl.prototype.result__sci_Map = (function() {
      return (this.sci_MapBuilderImpl__f_switchedToHashMapBuilder ? $n(this.sci_MapBuilderImpl__f_hashMapBuilder).result__sci_HashMap() : this.sci_MapBuilderImpl__f_elems);
    });
    $c_sci_MapBuilderImpl.prototype.addOne__O__O__sci_MapBuilderImpl = (function(key, value) {
      if (this.sci_MapBuilderImpl__f_switchedToHashMapBuilder) {
        $n(this.sci_MapBuilderImpl__f_hashMapBuilder).addOne__O__O__sci_HashMapBuilder(key, value);
      } else if (($n(this.sci_MapBuilderImpl__f_elems).size__I() < 4)) {
        this.sci_MapBuilderImpl__f_elems = $as_sci_Map($n(this.sci_MapBuilderImpl__f_elems).updated__O__O__sci_MapOps(key, value));
      } else if ($n(this.sci_MapBuilderImpl__f_elems).contains__O__Z(key)) {
        this.sci_MapBuilderImpl__f_elems = $as_sci_Map($n(this.sci_MapBuilderImpl__f_elems).updated__O__O__sci_MapOps(key, value));
      } else {
        this.sci_MapBuilderImpl__f_switchedToHashMapBuilder = true;
        if ((this.sci_MapBuilderImpl__f_hashMapBuilder === null)) {
          this.sci_MapBuilderImpl__f_hashMapBuilder = new $c_sci_HashMapBuilder();
        }
        $n($as_sci_Map$Map4(this.sci_MapBuilderImpl__f_elems)).buildTo__sci_HashMapBuilder__sci_HashMapBuilder(this.sci_MapBuilderImpl__f_hashMapBuilder);
        $n(this.sci_MapBuilderImpl__f_hashMapBuilder).addOne__O__O__sci_HashMapBuilder(key, value);
      }
      return this;
    });
    $c_sci_MapBuilderImpl.prototype.addAll__sc_IterableOnce__sci_MapBuilderImpl = (function(xs) {
      return (this.sci_MapBuilderImpl__f_switchedToHashMapBuilder ? ($n(this.sci_MapBuilderImpl__f_hashMapBuilder).addAll__sc_IterableOnce__sci_HashMapBuilder(xs), this) : $as_sci_MapBuilderImpl($f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs)));
    });
    $c_sci_MapBuilderImpl.prototype.addAll__sc_IterableOnce__scm_Growable = (function(elems) {
      return this.addAll__sc_IterableOnce__sci_MapBuilderImpl(elems);
    });
    $c_sci_MapBuilderImpl.prototype.addOne__O__scm_Growable = (function(elem) {
      var elem$1 = $as_T2(elem);
      return this.addOne__O__O__sci_MapBuilderImpl($n(elem$1).T2__f__1, $n(elem$1).T2__f__2);
    });
    $c_sci_MapBuilderImpl.prototype.result__O = (function() {
      return this.result__sci_Map();
    });
    function $as_sci_MapBuilderImpl(obj) {
      return (((obj instanceof $c_sci_MapBuilderImpl) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.MapBuilderImpl"));
    }
    new $TypeData().initClass($c_sci_MapBuilderImpl, "scala.collection.immutable.MapBuilderImpl", ({
      sci_MapBuilderImpl: 1,
      scm_ReusableBuilder: 1,
      scm_Builder: 1,
      scm_Growable: 1,
      scm_Clearable: 1
    }));
    function $ps_sci_Vector$__liftedTree1$1__I() {
      try {
        var this$ = $m_jl_System$SystemProperties$().getProperty__T__T__T("scala.collection.immutable.Vector.defaultApplyPreferredMaxLength", "250");
        var this$3 = $m_jl_Integer$();
        return this$3.parseInt__T__I__I(this$, 10);
      } catch (e) {
        {
          throw e;
        }
      }
    }
    /** @constructor */
    function $c_sci_Vector$() {
      this.sci_Vector$__f_scala$collection$immutable$Vector$$defaultApplyPreferredMaxLength = 0;
      this.sci_Vector$__f_scala$collection$immutable$Vector$$emptyIterator = null;
      $n_sci_Vector$ = this;
      this.sci_Vector$__f_scala$collection$immutable$Vector$$defaultApplyPreferredMaxLength = $ps_sci_Vector$__liftedTree1$1__I();
      this.sci_Vector$__f_scala$collection$immutable$Vector$$emptyIterator = new $c_sci_NewVectorIterator($m_sci_Vector0$(), 0, 0);
    }
    $c_sci_Vector$.prototype = new $h_O();
    $c_sci_Vector$.prototype.constructor = $c_sci_Vector$;
    $c_sci_Vector$.prototype;
    $c_sci_Vector$.prototype.from__sc_IterableOnce__sci_Vector = (function(it) {
      if ((it instanceof $c_sci_Vector)) {
        var x2 = $as_sci_Vector(it);
        return x2;
      } else {
        var knownSize = $n(it).knownSize__I();
        if ((knownSize === 0)) {
          return $m_sci_Vector0$();
        } else if (((knownSize > 0) && (knownSize <= 32))) {
          matchEnd5: {
            var a1$3;
            if ((it instanceof $c_sci_ArraySeq$ofRef)) {
              var x2$2 = $as_sci_ArraySeq$ofRef(it);
              var x = $n($n(x2$2).elemTag__s_reflect_ClassTag()).runtimeClass__jl_Class();
              if ((x !== null)) {
                var this$1 = $n(x);
                var $x_1 = (this$1 === $d_O.getClassOf());
              } else {
                var $x_1 = false;
              }
              if ($x_1) {
                var a1$3 = $n(x2$2).sci_ArraySeq$ofRef__f_unsafeArray;
                break matchEnd5;
              }
            }
            if ($is_sci_Iterable(it)) {
              var x3 = $as_sci_Iterable(it);
              var a1 = new $ac_O(knownSize);
              var this$2 = $n(x3);
              this$2.copyToArray__O__I__I__I(a1, 0, 2147483647);
              var a1$3 = a1;
              break matchEnd5;
            }
            var a1$2 = new $ac_O(knownSize);
            var this$3 = $n($n(it).iterator__sc_Iterator());
            this$3.copyToArray__O__I__I__I(a1$2, 0, 2147483647);
            var a1$3 = a1$2;
          }
          return new $c_sci_Vector1(a1$3);
        } else {
          var this$4 = new $c_sci_VectorBuilder();
          var this$5 = $n(this$4.addAll__sc_IterableOnce__sci_VectorBuilder(it));
          return this$5.result__sci_Vector();
        }
      }
    });
    $c_sci_Vector$.prototype.from__sc_IterableOnce__O = (function(source) {
      return this.from__sc_IterableOnce__sci_Vector(source);
    });
    new $TypeData().initClass($c_sci_Vector$, "scala.collection.immutable.Vector$", ({
      sci_Vector$: 1,
      sc_StrictOptimizedSeqFactory: 1,
      sc_SeqFactory: 1,
      sc_IterableFactory: 1,
      Ljava_io_Serializable: 1
    }));
    var $n_sci_Vector$;
    function $m_sci_Vector$() {
      if ((!$n_sci_Vector$)) {
        $n_sci_Vector$ = new $c_sci_Vector$();
      }
      return $n_sci_Vector$;
    }
    function $p_sci_VectorBuilder__leftAlignPrefix__V($thiz) {
      var a = null;
      var aParent = null;
      if (($thiz.sci_VectorBuilder__f_depth >= 6)) {
        a = $thiz.sci_VectorBuilder__f_a6;
        var i = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset >>> 25) | 0);
        if ((i > 0)) {
          var src = a;
          var dest = a;
          var length = ((64 - i) | 0);
          $systemArraycopyRefs($n(src), i, $n(dest), 0, length);
        }
        var newOffset = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset % 33554432) | 0);
        $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest - (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset - newOffset) | 0)) | 0);
        $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = newOffset;
        if (((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 25) | 0) === 0)) {
          $thiz.sci_VectorBuilder__f_depth = 5;
        }
        aParent = a;
        a = $asArrayOf_O($n(a).get(0), 1);
      }
      if (($thiz.sci_VectorBuilder__f_depth >= 5)) {
        if ((a === null)) {
          a = $thiz.sci_VectorBuilder__f_a5;
        }
        var i$2 = (31 & (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset >>> 20) | 0));
        if (($thiz.sci_VectorBuilder__f_depth === 5)) {
          if ((i$2 > 0)) {
            var src$1 = a;
            var dest$1 = a;
            var length$1 = ((32 - i$2) | 0);
            $systemArraycopyRefs($n(src$1), i$2, $n(dest$1), 0, length$1);
          }
          $thiz.sci_VectorBuilder__f_a5 = $asArrayOf_O(a, 5);
          var newOffset$1 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset % 1048576) | 0);
          $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest - (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset - newOffset$1) | 0)) | 0);
          $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = newOffset$1;
          if (((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 20) | 0) === 0)) {
            $thiz.sci_VectorBuilder__f_depth = 4;
          }
        } else {
          if ((i$2 > 0)) {
            var original = a;
            a = $m_ju_Arrays$().copyOfRange__AO__I__I__AO(original, i$2, 32);
          }
          $n(aParent).set(0, a);
        }
        aParent = a;
        a = $asArrayOf_O($n(a).get(0), 1);
      }
      if (($thiz.sci_VectorBuilder__f_depth >= 4)) {
        if ((a === null)) {
          a = $thiz.sci_VectorBuilder__f_a4;
        }
        var i$3 = (31 & (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset >>> 15) | 0));
        if (($thiz.sci_VectorBuilder__f_depth === 4)) {
          if ((i$3 > 0)) {
            var src$2 = a;
            var dest$2 = a;
            var length$2 = ((32 - i$3) | 0);
            $systemArraycopyRefs($n(src$2), i$3, $n(dest$2), 0, length$2);
          }
          $thiz.sci_VectorBuilder__f_a4 = $asArrayOf_O(a, 4);
          var newOffset$2 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset % 32768) | 0);
          $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest - (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset - newOffset$2) | 0)) | 0);
          $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = newOffset$2;
          if (((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 15) | 0) === 0)) {
            $thiz.sci_VectorBuilder__f_depth = 3;
          }
        } else {
          if ((i$3 > 0)) {
            var original$1 = a;
            a = $m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$1, i$3, 32);
          }
          $n(aParent).set(0, a);
        }
        aParent = a;
        a = $asArrayOf_O($n(a).get(0), 1);
      }
      if (($thiz.sci_VectorBuilder__f_depth >= 3)) {
        if ((a === null)) {
          a = $thiz.sci_VectorBuilder__f_a3;
        }
        var i$4 = (31 & (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset >>> 10) | 0));
        if (($thiz.sci_VectorBuilder__f_depth === 3)) {
          if ((i$4 > 0)) {
            var src$3 = a;
            var dest$3 = a;
            var length$3 = ((32 - i$4) | 0);
            $systemArraycopyRefs($n(src$3), i$4, $n(dest$3), 0, length$3);
          }
          $thiz.sci_VectorBuilder__f_a3 = $asArrayOf_O(a, 3);
          var newOffset$3 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset % 1024) | 0);
          $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest - (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset - newOffset$3) | 0)) | 0);
          $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = newOffset$3;
          if (((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 10) | 0) === 0)) {
            $thiz.sci_VectorBuilder__f_depth = 2;
          }
        } else {
          if ((i$4 > 0)) {
            var original$2 = a;
            a = $m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$2, i$4, 32);
          }
          $n(aParent).set(0, a);
        }
        aParent = a;
        a = $asArrayOf_O($n(a).get(0), 1);
      }
      if (($thiz.sci_VectorBuilder__f_depth >= 2)) {
        if ((a === null)) {
          a = $thiz.sci_VectorBuilder__f_a2;
        }
        var i$5 = (31 & (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset >>> 5) | 0));
        if (($thiz.sci_VectorBuilder__f_depth === 2)) {
          if ((i$5 > 0)) {
            var src$4 = a;
            var dest$4 = a;
            var length$4 = ((32 - i$5) | 0);
            $systemArraycopyRefs($n(src$4), i$5, $n(dest$4), 0, length$4);
          }
          $thiz.sci_VectorBuilder__f_a2 = $asArrayOf_O(a, 2);
          var newOffset$4 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset % 32) | 0);
          $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest - (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset - newOffset$4) | 0)) | 0);
          $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = newOffset$4;
          if (((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 5) | 0) === 0)) {
            $thiz.sci_VectorBuilder__f_depth = 1;
          }
        } else {
          if ((i$5 > 0)) {
            var original$3 = a;
            a = $m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$3, i$5, 32);
          }
          $n(aParent).set(0, a);
        }
        aParent = a;
        a = $asArrayOf_O($n(a).get(0), 1);
      }
      if (($thiz.sci_VectorBuilder__f_depth >= 1)) {
        if ((a === null)) {
          a = $thiz.sci_VectorBuilder__f_a1;
        }
        var i$6 = (31 & $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset);
        if (($thiz.sci_VectorBuilder__f_depth === 1)) {
          if ((i$6 > 0)) {
            var src$5 = a;
            var dest$5 = a;
            var length$5 = ((32 - i$6) | 0);
            $systemArraycopyRefs($n(src$5), i$6, $n(dest$5), 0, length$5);
          }
          $thiz.sci_VectorBuilder__f_a1 = a;
          $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 - $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset) | 0);
          $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = 0;
        } else {
          if ((i$6 > 0)) {
            var original$4 = a;
            a = $m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$4, i$6, 32);
          }
          $n(aParent).set(0, a);
        }
      }
      $thiz.sci_VectorBuilder__f_prefixIsRightAligned = false;
    }
    function $p_sci_VectorBuilder__addArr1__AO__V($thiz, data) {
      var dl = $n(data).u.length;
      if ((dl > 0)) {
        if (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 32)) {
          $p_sci_VectorBuilder__advance__V($thiz);
        }
        var a = ((32 - $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
        var copy1 = ((a < dl) ? a : dl);
        var copy2 = ((dl - copy1) | 0);
        var dest = $thiz.sci_VectorBuilder__f_a1;
        var destPos = $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1;
        $systemArraycopyRefs($n(data), 0, $n(dest), destPos, copy1);
        $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 + copy1) | 0);
        if ((copy2 > 0)) {
          $p_sci_VectorBuilder__advance__V($thiz);
          var dest$1 = $thiz.sci_VectorBuilder__f_a1;
          $systemArraycopyRefs($n(data), copy1, $n(dest$1), 0, copy2);
          $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 + copy2) | 0);
        }
      }
    }
    function $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, slice, dim) {
      if (($n(slice).u.length === 0)) {
        return (void 0);
      }
      if (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 32)) {
        $p_sci_VectorBuilder__advance__V($thiz);
      }
      var sl = $n(slice).u.length;
      switch (dim) {
        case 2: {
          var a = (31 & ((((1024 - $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0) >>> 5) | 0));
          var copy1 = ((a < sl) ? a : sl);
          var copy2 = ((sl - copy1) | 0);
          var destPos = (31 & (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 5) | 0));
          var dest = $thiz.sci_VectorBuilder__f_a2;
          $systemArraycopyRefs($n(slice), 0, $n(dest), destPos, copy1);
          $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1 << 5));
          if ((copy2 > 0)) {
            var dest$1 = $thiz.sci_VectorBuilder__f_a2;
            $systemArraycopyRefs($n(slice), copy1, $n(dest$1), 0, copy2);
            $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2 << 5));
          }
          break;
        }
        case 3: {
          if (((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest % 1024) | 0) !== 0)) {
            var f = ((e$2$2) => {
              $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, $asArrayOf_O(e$2$2, 1), 2);
            });
            var len = $n(slice).u.length;
            var i = 0;
            if ((slice !== null)) {
              while ((i < len)) {
                var arg1 = $n(slice).get(i);
                f(arg1);
                i = ((1 + i) | 0);
              }
            } else if ((slice instanceof $ac_I)) {
              var x3 = $asArrayOf_I(slice, 1);
              while ((i < len)) {
                var arg1$1 = $n(x3).get(i);
                f(arg1$1);
                i = ((1 + i) | 0);
              }
            } else if ((slice instanceof $ac_D)) {
              var x4 = $asArrayOf_D(slice, 1);
              while ((i < len)) {
                var arg1$2 = $n(x4).get(i);
                f(arg1$2);
                i = ((1 + i) | 0);
              }
            } else if ((slice instanceof $ac_J)) {
              var x5 = $asArrayOf_J(slice, 1);
              while ((i < len)) {
                var t = $n(x5).get(i);
                var lo = t.RTLong__f_lo;
                var hi = t.RTLong__f_hi;
                f(new $c_RTLong(lo, hi));
                i = ((1 + i) | 0);
              }
            } else if ((slice instanceof $ac_F)) {
              var x6 = $asArrayOf_F(slice, 1);
              while ((i < len)) {
                var arg1$3 = $n(x6).get(i);
                f(arg1$3);
                i = ((1 + i) | 0);
              }
            } else if ((slice instanceof $ac_C)) {
              var x7 = $asArrayOf_C(slice, 1);
              while ((i < len)) {
                var arg1$4 = $n(x7).get(i);
                f($bC(arg1$4));
                i = ((1 + i) | 0);
              }
            } else if ((slice instanceof $ac_B)) {
              var x8 = $asArrayOf_B(slice, 1);
              while ((i < len)) {
                var arg1$5 = $n(x8).get(i);
                f(arg1$5);
                i = ((1 + i) | 0);
              }
            } else if ((slice instanceof $ac_S)) {
              var x9 = $asArrayOf_S(slice, 1);
              while ((i < len)) {
                var arg1$6 = $n(x9).get(i);
                f(arg1$6);
                i = ((1 + i) | 0);
              }
            } else if ((slice instanceof $ac_Z)) {
              var x10 = $asArrayOf_Z(slice, 1);
              while ((i < len)) {
                var arg1$7 = $n(x10).get(i);
                f(arg1$7);
                i = ((1 + i) | 0);
              }
            } else {
              throw new $c_s_MatchError(slice);
            }
            return (void 0);
          }
          var a$1 = (31 & ((((32768 - $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0) >>> 10) | 0));
          var copy1$2 = ((a$1 < sl) ? a$1 : sl);
          var copy2$2 = ((sl - copy1$2) | 0);
          var destPos$2 = (31 & (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 10) | 0));
          var dest$2 = $thiz.sci_VectorBuilder__f_a3;
          $systemArraycopyRefs($n(slice), 0, $n(dest$2), destPos$2, copy1$2);
          $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$2 << 10));
          if ((copy2$2 > 0)) {
            var dest$3 = $thiz.sci_VectorBuilder__f_a3;
            $systemArraycopyRefs($n(slice), copy1$2, $n(dest$3), 0, copy2$2);
            $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$2 << 10));
          }
          break;
        }
        case 4: {
          if (((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest % 32768) | 0) !== 0)) {
            var f$1 = ((e$2$2$1) => {
              $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, $asArrayOf_O(e$2$2$1, 1), 3);
            });
            var len$1 = $n(slice).u.length;
            var i$1 = 0;
            if ((slice !== null)) {
              while ((i$1 < len$1)) {
                var arg1$8 = $n(slice).get(i$1);
                f$1(arg1$8);
                i$1 = ((1 + i$1) | 0);
              }
            } else if ((slice instanceof $ac_I)) {
              var x3$1 = $asArrayOf_I(slice, 1);
              while ((i$1 < len$1)) {
                var arg1$9 = $n(x3$1).get(i$1);
                f$1(arg1$9);
                i$1 = ((1 + i$1) | 0);
              }
            } else if ((slice instanceof $ac_D)) {
              var x4$1 = $asArrayOf_D(slice, 1);
              while ((i$1 < len$1)) {
                var arg1$10 = $n(x4$1).get(i$1);
                f$1(arg1$10);
                i$1 = ((1 + i$1) | 0);
              }
            } else if ((slice instanceof $ac_J)) {
              var x5$1 = $asArrayOf_J(slice, 1);
              while ((i$1 < len$1)) {
                var t$1 = $n(x5$1).get(i$1);
                var lo$1 = t$1.RTLong__f_lo;
                var hi$1 = t$1.RTLong__f_hi;
                f$1(new $c_RTLong(lo$1, hi$1));
                i$1 = ((1 + i$1) | 0);
              }
            } else if ((slice instanceof $ac_F)) {
              var x6$1 = $asArrayOf_F(slice, 1);
              while ((i$1 < len$1)) {
                var arg1$11 = $n(x6$1).get(i$1);
                f$1(arg1$11);
                i$1 = ((1 + i$1) | 0);
              }
            } else if ((slice instanceof $ac_C)) {
              var x7$1 = $asArrayOf_C(slice, 1);
              while ((i$1 < len$1)) {
                var arg1$12 = $n(x7$1).get(i$1);
                f$1($bC(arg1$12));
                i$1 = ((1 + i$1) | 0);
              }
            } else if ((slice instanceof $ac_B)) {
              var x8$1 = $asArrayOf_B(slice, 1);
              while ((i$1 < len$1)) {
                var arg1$13 = $n(x8$1).get(i$1);
                f$1(arg1$13);
                i$1 = ((1 + i$1) | 0);
              }
            } else if ((slice instanceof $ac_S)) {
              var x9$1 = $asArrayOf_S(slice, 1);
              while ((i$1 < len$1)) {
                var arg1$14 = $n(x9$1).get(i$1);
                f$1(arg1$14);
                i$1 = ((1 + i$1) | 0);
              }
            } else if ((slice instanceof $ac_Z)) {
              var x10$1 = $asArrayOf_Z(slice, 1);
              while ((i$1 < len$1)) {
                var arg1$15 = $n(x10$1).get(i$1);
                f$1(arg1$15);
                i$1 = ((1 + i$1) | 0);
              }
            } else {
              throw new $c_s_MatchError(slice);
            }
            return (void 0);
          }
          var a$2 = (31 & ((((1048576 - $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0) >>> 15) | 0));
          var copy1$3 = ((a$2 < sl) ? a$2 : sl);
          var copy2$3 = ((sl - copy1$3) | 0);
          var destPos$3 = (31 & (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 15) | 0));
          var dest$4 = $thiz.sci_VectorBuilder__f_a4;
          $systemArraycopyRefs($n(slice), 0, $n(dest$4), destPos$3, copy1$3);
          $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$3 << 15));
          if ((copy2$3 > 0)) {
            var dest$5 = $thiz.sci_VectorBuilder__f_a4;
            $systemArraycopyRefs($n(slice), copy1$3, $n(dest$5), 0, copy2$3);
            $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$3 << 15));
          }
          break;
        }
        case 5: {
          if (((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest % 1048576) | 0) !== 0)) {
            var f$2 = ((e$2$2$2) => {
              $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, $asArrayOf_O(e$2$2$2, 1), 4);
            });
            var len$2 = $n(slice).u.length;
            var i$2 = 0;
            if ((slice !== null)) {
              while ((i$2 < len$2)) {
                var arg1$16 = $n(slice).get(i$2);
                f$2(arg1$16);
                i$2 = ((1 + i$2) | 0);
              }
            } else if ((slice instanceof $ac_I)) {
              var x3$2 = $asArrayOf_I(slice, 1);
              while ((i$2 < len$2)) {
                var arg1$17 = $n(x3$2).get(i$2);
                f$2(arg1$17);
                i$2 = ((1 + i$2) | 0);
              }
            } else if ((slice instanceof $ac_D)) {
              var x4$2 = $asArrayOf_D(slice, 1);
              while ((i$2 < len$2)) {
                var arg1$18 = $n(x4$2).get(i$2);
                f$2(arg1$18);
                i$2 = ((1 + i$2) | 0);
              }
            } else if ((slice instanceof $ac_J)) {
              var x5$2 = $asArrayOf_J(slice, 1);
              while ((i$2 < len$2)) {
                var t$2 = $n(x5$2).get(i$2);
                var lo$2 = t$2.RTLong__f_lo;
                var hi$2 = t$2.RTLong__f_hi;
                f$2(new $c_RTLong(lo$2, hi$2));
                i$2 = ((1 + i$2) | 0);
              }
            } else if ((slice instanceof $ac_F)) {
              var x6$2 = $asArrayOf_F(slice, 1);
              while ((i$2 < len$2)) {
                var arg1$19 = $n(x6$2).get(i$2);
                f$2(arg1$19);
                i$2 = ((1 + i$2) | 0);
              }
            } else if ((slice instanceof $ac_C)) {
              var x7$2 = $asArrayOf_C(slice, 1);
              while ((i$2 < len$2)) {
                var arg1$20 = $n(x7$2).get(i$2);
                f$2($bC(arg1$20));
                i$2 = ((1 + i$2) | 0);
              }
            } else if ((slice instanceof $ac_B)) {
              var x8$2 = $asArrayOf_B(slice, 1);
              while ((i$2 < len$2)) {
                var arg1$21 = $n(x8$2).get(i$2);
                f$2(arg1$21);
                i$2 = ((1 + i$2) | 0);
              }
            } else if ((slice instanceof $ac_S)) {
              var x9$2 = $asArrayOf_S(slice, 1);
              while ((i$2 < len$2)) {
                var arg1$22 = $n(x9$2).get(i$2);
                f$2(arg1$22);
                i$2 = ((1 + i$2) | 0);
              }
            } else if ((slice instanceof $ac_Z)) {
              var x10$2 = $asArrayOf_Z(slice, 1);
              while ((i$2 < len$2)) {
                var arg1$23 = $n(x10$2).get(i$2);
                f$2(arg1$23);
                i$2 = ((1 + i$2) | 0);
              }
            } else {
              throw new $c_s_MatchError(slice);
            }
            return (void 0);
          }
          var a$3 = (31 & ((((33554432 - $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0) >>> 20) | 0));
          var copy1$4 = ((a$3 < sl) ? a$3 : sl);
          var copy2$4 = ((sl - copy1$4) | 0);
          var destPos$4 = (31 & (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 20) | 0));
          var dest$6 = $thiz.sci_VectorBuilder__f_a5;
          $systemArraycopyRefs($n(slice), 0, $n(dest$6), destPos$4, copy1$4);
          $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy1$4 << 20));
          if ((copy2$4 > 0)) {
            var dest$7 = $thiz.sci_VectorBuilder__f_a5;
            $systemArraycopyRefs($n(slice), copy1$4, $n(dest$7), 0, copy2$4);
            $p_sci_VectorBuilder__advanceN__I__V($thiz, (copy2$4 << 20));
          }
          break;
        }
        case 6: {
          if (((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest % 33554432) | 0) !== 0)) {
            var f$3 = ((e$2$2$3) => {
              $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, $asArrayOf_O(e$2$2$3, 1), 5);
            });
            var len$3 = $n(slice).u.length;
            var i$3 = 0;
            if ((slice !== null)) {
              while ((i$3 < len$3)) {
                var arg1$24 = $n(slice).get(i$3);
                f$3(arg1$24);
                i$3 = ((1 + i$3) | 0);
              }
            } else if ((slice instanceof $ac_I)) {
              var x3$3 = $asArrayOf_I(slice, 1);
              while ((i$3 < len$3)) {
                var arg1$25 = $n(x3$3).get(i$3);
                f$3(arg1$25);
                i$3 = ((1 + i$3) | 0);
              }
            } else if ((slice instanceof $ac_D)) {
              var x4$3 = $asArrayOf_D(slice, 1);
              while ((i$3 < len$3)) {
                var arg1$26 = $n(x4$3).get(i$3);
                f$3(arg1$26);
                i$3 = ((1 + i$3) | 0);
              }
            } else if ((slice instanceof $ac_J)) {
              var x5$3 = $asArrayOf_J(slice, 1);
              while ((i$3 < len$3)) {
                var t$3 = $n(x5$3).get(i$3);
                var lo$3 = t$3.RTLong__f_lo;
                var hi$3 = t$3.RTLong__f_hi;
                f$3(new $c_RTLong(lo$3, hi$3));
                i$3 = ((1 + i$3) | 0);
              }
            } else if ((slice instanceof $ac_F)) {
              var x6$3 = $asArrayOf_F(slice, 1);
              while ((i$3 < len$3)) {
                var arg1$27 = $n(x6$3).get(i$3);
                f$3(arg1$27);
                i$3 = ((1 + i$3) | 0);
              }
            } else if ((slice instanceof $ac_C)) {
              var x7$3 = $asArrayOf_C(slice, 1);
              while ((i$3 < len$3)) {
                var arg1$28 = $n(x7$3).get(i$3);
                f$3($bC(arg1$28));
                i$3 = ((1 + i$3) | 0);
              }
            } else if ((slice instanceof $ac_B)) {
              var x8$3 = $asArrayOf_B(slice, 1);
              while ((i$3 < len$3)) {
                var arg1$29 = $n(x8$3).get(i$3);
                f$3(arg1$29);
                i$3 = ((1 + i$3) | 0);
              }
            } else if ((slice instanceof $ac_S)) {
              var x9$3 = $asArrayOf_S(slice, 1);
              while ((i$3 < len$3)) {
                var arg1$30 = $n(x9$3).get(i$3);
                f$3(arg1$30);
                i$3 = ((1 + i$3) | 0);
              }
            } else if ((slice instanceof $ac_Z)) {
              var x10$3 = $asArrayOf_Z(slice, 1);
              while ((i$3 < len$3)) {
                var arg1$31 = $n(x10$3).get(i$3);
                f$3(arg1$31);
                i$3 = ((1 + i$3) | 0);
              }
            } else {
              throw new $c_s_MatchError(slice);
            }
            return (void 0);
          }
          var destPos$5 = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest >>> 25) | 0);
          if ((((destPos$5 + sl) | 0) > 64)) {
            throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "exceeding 2^31 elements");
          }
          var dest$8 = $thiz.sci_VectorBuilder__f_a6;
          $systemArraycopyRefs($n(slice), 0, $n(dest$8), destPos$5, sl);
          $p_sci_VectorBuilder__advanceN__I__V($thiz, (sl << 25));
          break;
        }
        default: {
          throw new $c_s_MatchError(dim);
        }
      }
    }
    function $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder($thiz, xs) {
      var sliceCount = $n(xs).vectorSliceCount__I();
      var sliceIdx = 0;
      while ((sliceIdx < sliceCount)) {
        var slice = $n(xs).vectorSlice__I__AO(sliceIdx);
        var idx = sliceIdx;
        var c = ((sliceCount / 2) | 0);
        var a = ((idx - c) | 0);
        var x1 = ((((1 + c) | 0) - ((a < 0) ? ((-a) | 0) : a)) | 0);
        if ((x1 === 1)) {
          $p_sci_VectorBuilder__addArr1__AO__V($thiz, slice);
        } else if ((($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 32) || ($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 0))) {
          $p_sci_VectorBuilder__addArrN__AO__I__V($thiz, slice, x1);
        } else {
          $m_sci_VectorStatics$().foreachRec__I__AO__F1__V((((-2) + x1) | 0), slice, new $c_sjsr_AnonFunction1(((data$2$2) => {
            var data$2 = $asArrayOf_O(data$2$2, 1);
            $p_sci_VectorBuilder__addArr1__AO__V($thiz, data$2);
          })));
        }
        sliceIdx = ((1 + sliceIdx) | 0);
      }
      return $thiz;
    }
    function $p_sci_VectorBuilder__advance__V($thiz) {
      var idx = ((32 + $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0);
      var xor = (idx ^ $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest);
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = idx;
      $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = 0;
      $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor);
    }
    function $p_sci_VectorBuilder__advanceN__I__V($thiz, n) {
      if ((n > 0)) {
        var idx = (($thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest + n) | 0);
        var xor = (idx ^ $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest);
        $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = idx;
        $thiz.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = 0;
        $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor);
      }
    }
    function $p_sci_VectorBuilder__advance1__I__I__V($thiz, idx, xor) {
      if ((xor <= 0)) {
        throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ((((((((((((((((("advance1(" + idx) + ", ") + xor) + "): a1=") + $thiz.sci_VectorBuilder__f_a1) + ", a2=") + $thiz.sci_VectorBuilder__f_a2) + ", a3=") + $thiz.sci_VectorBuilder__f_a3) + ", a4=") + $thiz.sci_VectorBuilder__f_a4) + ", a5=") + $thiz.sci_VectorBuilder__f_a5) + ", a6=") + $thiz.sci_VectorBuilder__f_a6) + ", depth=") + $thiz.sci_VectorBuilder__f_depth));
      } else if ((xor < 1024)) {
        if (($thiz.sci_VectorBuilder__f_depth <= 1)) {
          $thiz.sci_VectorBuilder__f_a2 = new ($d_O.getArrayOf().getArrayOf().constr)(32);
          $n($thiz.sci_VectorBuilder__f_a2).set(0, $thiz.sci_VectorBuilder__f_a1);
          $thiz.sci_VectorBuilder__f_depth = 2;
        }
        $thiz.sci_VectorBuilder__f_a1 = new $ac_O(32);
        $n($thiz.sci_VectorBuilder__f_a2).set((31 & ((idx >>> 5) | 0)), $thiz.sci_VectorBuilder__f_a1);
      } else if ((xor < 32768)) {
        if (($thiz.sci_VectorBuilder__f_depth <= 2)) {
          $thiz.sci_VectorBuilder__f_a3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(32);
          $n($thiz.sci_VectorBuilder__f_a3).set(0, $thiz.sci_VectorBuilder__f_a2);
          $thiz.sci_VectorBuilder__f_depth = 3;
        }
        $thiz.sci_VectorBuilder__f_a1 = new $ac_O(32);
        $thiz.sci_VectorBuilder__f_a2 = new ($d_O.getArrayOf().getArrayOf().constr)(32);
        $n($thiz.sci_VectorBuilder__f_a2).set((31 & ((idx >>> 5) | 0)), $thiz.sci_VectorBuilder__f_a1);
        $n($thiz.sci_VectorBuilder__f_a3).set((31 & ((idx >>> 10) | 0)), $thiz.sci_VectorBuilder__f_a2);
      } else if ((xor < 1048576)) {
        if (($thiz.sci_VectorBuilder__f_depth <= 3)) {
          $thiz.sci_VectorBuilder__f_a4 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
          $n($thiz.sci_VectorBuilder__f_a4).set(0, $thiz.sci_VectorBuilder__f_a3);
          $thiz.sci_VectorBuilder__f_depth = 4;
        }
        $thiz.sci_VectorBuilder__f_a1 = new $ac_O(32);
        $thiz.sci_VectorBuilder__f_a2 = new ($d_O.getArrayOf().getArrayOf().constr)(32);
        $thiz.sci_VectorBuilder__f_a3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(32);
        $n($thiz.sci_VectorBuilder__f_a2).set((31 & ((idx >>> 5) | 0)), $thiz.sci_VectorBuilder__f_a1);
        $n($thiz.sci_VectorBuilder__f_a3).set((31 & ((idx >>> 10) | 0)), $thiz.sci_VectorBuilder__f_a2);
        $n($thiz.sci_VectorBuilder__f_a4).set((31 & ((idx >>> 15) | 0)), $thiz.sci_VectorBuilder__f_a3);
      } else if ((xor < 33554432)) {
        if (($thiz.sci_VectorBuilder__f_depth <= 4)) {
          $thiz.sci_VectorBuilder__f_a5 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
          $n($thiz.sci_VectorBuilder__f_a5).set(0, $thiz.sci_VectorBuilder__f_a4);
          $thiz.sci_VectorBuilder__f_depth = 5;
        }
        $thiz.sci_VectorBuilder__f_a1 = new $ac_O(32);
        $thiz.sci_VectorBuilder__f_a2 = new ($d_O.getArrayOf().getArrayOf().constr)(32);
        $thiz.sci_VectorBuilder__f_a3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(32);
        $thiz.sci_VectorBuilder__f_a4 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
        $n($thiz.sci_VectorBuilder__f_a2).set((31 & ((idx >>> 5) | 0)), $thiz.sci_VectorBuilder__f_a1);
        $n($thiz.sci_VectorBuilder__f_a3).set((31 & ((idx >>> 10) | 0)), $thiz.sci_VectorBuilder__f_a2);
        $n($thiz.sci_VectorBuilder__f_a4).set((31 & ((idx >>> 15) | 0)), $thiz.sci_VectorBuilder__f_a3);
        $n($thiz.sci_VectorBuilder__f_a5).set((31 & ((idx >>> 20) | 0)), $thiz.sci_VectorBuilder__f_a4);
      } else {
        if (($thiz.sci_VectorBuilder__f_depth <= 5)) {
          $thiz.sci_VectorBuilder__f_a6 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(64);
          $n($thiz.sci_VectorBuilder__f_a6).set(0, $thiz.sci_VectorBuilder__f_a5);
          $thiz.sci_VectorBuilder__f_depth = 6;
        }
        $thiz.sci_VectorBuilder__f_a1 = new $ac_O(32);
        $thiz.sci_VectorBuilder__f_a2 = new ($d_O.getArrayOf().getArrayOf().constr)(32);
        $thiz.sci_VectorBuilder__f_a3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(32);
        $thiz.sci_VectorBuilder__f_a4 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
        $thiz.sci_VectorBuilder__f_a5 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
        $n($thiz.sci_VectorBuilder__f_a2).set((31 & ((idx >>> 5) | 0)), $thiz.sci_VectorBuilder__f_a1);
        $n($thiz.sci_VectorBuilder__f_a3).set((31 & ((idx >>> 10) | 0)), $thiz.sci_VectorBuilder__f_a2);
        $n($thiz.sci_VectorBuilder__f_a4).set((31 & ((idx >>> 15) | 0)), $thiz.sci_VectorBuilder__f_a3);
        $n($thiz.sci_VectorBuilder__f_a5).set((31 & ((idx >>> 20) | 0)), $thiz.sci_VectorBuilder__f_a4);
        $n($thiz.sci_VectorBuilder__f_a6).set(((idx >>> 25) | 0), $thiz.sci_VectorBuilder__f_a5);
      }
    }
    /** @constructor */
    function $c_sci_VectorBuilder() {
      this.sci_VectorBuilder__f_a6 = null;
      this.sci_VectorBuilder__f_a5 = null;
      this.sci_VectorBuilder__f_a4 = null;
      this.sci_VectorBuilder__f_a3 = null;
      this.sci_VectorBuilder__f_a2 = null;
      this.sci_VectorBuilder__f_a1 = null;
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = 0;
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = 0;
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = 0;
      this.sci_VectorBuilder__f_prefixIsRightAligned = false;
      this.sci_VectorBuilder__f_depth = 0;
      this.sci_VectorBuilder__f_a1 = new $ac_O(32);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = 0;
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = 0;
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = 0;
      this.sci_VectorBuilder__f_prefixIsRightAligned = false;
      this.sci_VectorBuilder__f_depth = 1;
    }
    $c_sci_VectorBuilder.prototype = new $h_O();
    $c_sci_VectorBuilder.prototype.constructor = $c_sci_VectorBuilder;
    $c_sci_VectorBuilder.prototype;
    $c_sci_VectorBuilder.prototype.initFrom__sci_Vector__sci_VectorBuilder = (function(v) {
      var x1 = $n(v).vectorSliceCount__I();
      switch (x1) {
        case 0: {
          break;
        }
        case 1: {
          var v1 = $as_sci_Vector1(v);
          this.sci_VectorBuilder__f_depth = 1;
          var i = $n($n(v1).sci_Vector__f_prefix1).u.length;
          this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i);
          this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
          var a = $n(v1).sci_Vector__f_prefix1;
          this.sci_VectorBuilder__f_a1 = (($n(a).u.length === 32) ? a : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a, 0, 32));
          break;
        }
        case 3: {
          var v2 = $as_sci_Vector2(v);
          var d2 = $n(v2).sci_Vector2__f_data2;
          var a$1 = $n(v2).sci_BigVector__f_suffix1;
          this.sci_VectorBuilder__f_a1 = (($n(a$1).u.length === 32) ? a$1 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$1, 0, 32));
          this.sci_VectorBuilder__f_depth = 2;
          this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = ((32 - $n(v2).sci_Vector2__f_len1) | 0);
          var i$1 = (($n(v2).sci_BigVector__f_length0 + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset) | 0);
          this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i$1);
          this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i$1 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
          this.sci_VectorBuilder__f_a2 = new ($d_O.getArrayOf().getArrayOf().constr)(32);
          $n(this.sci_VectorBuilder__f_a2).set(0, $n(v2).sci_Vector__f_prefix1);
          var dest = this.sci_VectorBuilder__f_a2;
          var length = $n(d2).u.length;
          $systemArraycopyRefs($n(d2), 0, $n(dest), 1, length);
          $n(this.sci_VectorBuilder__f_a2).set(((1 + $n(d2).u.length) | 0), this.sci_VectorBuilder__f_a1);
          break;
        }
        case 5: {
          var v3 = $as_sci_Vector3(v);
          var d3 = $n(v3).sci_Vector3__f_data3;
          var s2 = $n(v3).sci_Vector3__f_suffix2;
          var a$2 = $n(v3).sci_BigVector__f_suffix1;
          this.sci_VectorBuilder__f_a1 = (($n(a$2).u.length === 32) ? a$2 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$2, 0, 32));
          this.sci_VectorBuilder__f_depth = 3;
          this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = ((1024 - $n(v3).sci_Vector3__f_len12) | 0);
          var i$2 = (($n(v3).sci_BigVector__f_length0 + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset) | 0);
          this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i$2);
          this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i$2 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
          this.sci_VectorBuilder__f_a3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(32);
          $n(this.sci_VectorBuilder__f_a3).set(0, $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO($n(v3).sci_Vector__f_prefix1, $n(v3).sci_Vector3__f_prefix2), 2));
          var dest$1 = this.sci_VectorBuilder__f_a3;
          var length$1 = $n(d3).u.length;
          $systemArraycopyRefs($n(d3), 0, $n(dest$1), 1, length$1);
          this.sci_VectorBuilder__f_a2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s2, 32), 2);
          $n(this.sci_VectorBuilder__f_a3).set(((1 + $n(d3).u.length) | 0), this.sci_VectorBuilder__f_a2);
          $n(this.sci_VectorBuilder__f_a2).set($n(s2).u.length, this.sci_VectorBuilder__f_a1);
          break;
        }
        case 7: {
          var v4 = $as_sci_Vector4(v);
          var d4 = $n(v4).sci_Vector4__f_data4;
          var s3 = $n(v4).sci_Vector4__f_suffix3;
          var s2$2 = $n(v4).sci_Vector4__f_suffix2;
          var a$3 = $n(v4).sci_BigVector__f_suffix1;
          this.sci_VectorBuilder__f_a1 = (($n(a$3).u.length === 32) ? a$3 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$3, 0, 32));
          this.sci_VectorBuilder__f_depth = 4;
          this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = ((32768 - $n(v4).sci_Vector4__f_len123) | 0);
          var i$3 = (($n(v4).sci_BigVector__f_length0 + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset) | 0);
          this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i$3);
          this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i$3 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
          this.sci_VectorBuilder__f_a4 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
          $n(this.sci_VectorBuilder__f_a4).set(0, $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($n(v4).sci_Vector__f_prefix1, $n(v4).sci_Vector4__f_prefix2), $n(v4).sci_Vector4__f_prefix3), 3));
          var dest$2 = this.sci_VectorBuilder__f_a4;
          var length$2 = $n(d4).u.length;
          $systemArraycopyRefs($n(d4), 0, $n(dest$2), 1, length$2);
          this.sci_VectorBuilder__f_a3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s3, 32), 3);
          this.sci_VectorBuilder__f_a2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s2$2, 32), 2);
          $n(this.sci_VectorBuilder__f_a4).set(((1 + $n(d4).u.length) | 0), this.sci_VectorBuilder__f_a3);
          $n(this.sci_VectorBuilder__f_a3).set($n(s3).u.length, this.sci_VectorBuilder__f_a2);
          $n(this.sci_VectorBuilder__f_a2).set($n(s2$2).u.length, this.sci_VectorBuilder__f_a1);
          break;
        }
        case 9: {
          var v5 = $as_sci_Vector5(v);
          var d5 = $n(v5).sci_Vector5__f_data5;
          var s4 = $n(v5).sci_Vector5__f_suffix4;
          var s3$2 = $n(v5).sci_Vector5__f_suffix3;
          var s2$3 = $n(v5).sci_Vector5__f_suffix2;
          var a$4 = $n(v5).sci_BigVector__f_suffix1;
          this.sci_VectorBuilder__f_a1 = (($n(a$4).u.length === 32) ? a$4 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$4, 0, 32));
          this.sci_VectorBuilder__f_depth = 5;
          this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = ((1048576 - $n(v5).sci_Vector5__f_len1234) | 0);
          var i$4 = (($n(v5).sci_BigVector__f_length0 + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset) | 0);
          this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i$4);
          this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i$4 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
          this.sci_VectorBuilder__f_a5 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(32);
          $n(this.sci_VectorBuilder__f_a5).set(0, $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($n(v5).sci_Vector__f_prefix1, $n(v5).sci_Vector5__f_prefix2), $n(v5).sci_Vector5__f_prefix3), $n(v5).sci_Vector5__f_prefix4), 4));
          var dest$3 = this.sci_VectorBuilder__f_a5;
          var length$3 = $n(d5).u.length;
          $systemArraycopyRefs($n(d5), 0, $n(dest$3), 1, length$3);
          this.sci_VectorBuilder__f_a4 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s4, 32), 4);
          this.sci_VectorBuilder__f_a3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s3$2, 32), 3);
          this.sci_VectorBuilder__f_a2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s2$3, 32), 2);
          $n(this.sci_VectorBuilder__f_a5).set(((1 + $n(d5).u.length) | 0), this.sci_VectorBuilder__f_a4);
          $n(this.sci_VectorBuilder__f_a4).set($n(s4).u.length, this.sci_VectorBuilder__f_a3);
          $n(this.sci_VectorBuilder__f_a3).set($n(s3$2).u.length, this.sci_VectorBuilder__f_a2);
          $n(this.sci_VectorBuilder__f_a2).set($n(s2$3).u.length, this.sci_VectorBuilder__f_a1);
          break;
        }
        case 11: {
          var v6 = $as_sci_Vector6(v);
          var d6 = $n(v6).sci_Vector6__f_data6;
          var s5 = $n(v6).sci_Vector6__f_suffix5;
          var s4$2 = $n(v6).sci_Vector6__f_suffix4;
          var s3$3 = $n(v6).sci_Vector6__f_suffix3;
          var s2$4 = $n(v6).sci_Vector6__f_suffix2;
          var a$5 = $n(v6).sci_BigVector__f_suffix1;
          this.sci_VectorBuilder__f_a1 = (($n(a$5).u.length === 32) ? a$5 : $m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$5, 0, 32));
          this.sci_VectorBuilder__f_depth = 6;
          this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset = ((33554432 - $n(v6).sci_Vector6__f_len12345) | 0);
          var i$5 = (($n(v6).sci_BigVector__f_length0 + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset) | 0);
          this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = (31 & i$5);
          this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = ((i$5 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
          this.sci_VectorBuilder__f_a6 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(64);
          $n(this.sci_VectorBuilder__f_a6).set(0, $asArrayOf_O($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($m_sci_VectorStatics$().copyPrepend__O__AO__AO($n(v6).sci_Vector__f_prefix1, $n(v6).sci_Vector6__f_prefix2), $n(v6).sci_Vector6__f_prefix3), $n(v6).sci_Vector6__f_prefix4), $n(v6).sci_Vector6__f_prefix5), 5));
          var dest$4 = this.sci_VectorBuilder__f_a6;
          var length$4 = $n(d6).u.length;
          $systemArraycopyRefs($n(d6), 0, $n(dest$4), 1, length$4);
          this.sci_VectorBuilder__f_a5 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s5, 32), 5);
          this.sci_VectorBuilder__f_a4 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s4$2, 32), 4);
          this.sci_VectorBuilder__f_a3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s3$3, 32), 3);
          this.sci_VectorBuilder__f_a2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(s2$4, 32), 2);
          $n(this.sci_VectorBuilder__f_a6).set(((1 + $n(d6).u.length) | 0), this.sci_VectorBuilder__f_a5);
          $n(this.sci_VectorBuilder__f_a5).set($n(s5).u.length, this.sci_VectorBuilder__f_a4);
          $n(this.sci_VectorBuilder__f_a4).set($n(s4$2).u.length, this.sci_VectorBuilder__f_a3);
          $n(this.sci_VectorBuilder__f_a3).set($n(s3$3).u.length, this.sci_VectorBuilder__f_a2);
          $n(this.sci_VectorBuilder__f_a2).set($n(s2$4).u.length, this.sci_VectorBuilder__f_a1);
          break;
        }
        default: {
          throw new $c_s_MatchError(x1);
        }
      }
      if (((this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 0) && (this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest > 0))) {
        this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = 32;
        this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest = (((-32) + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0);
      }
      return this;
    });
    $c_sci_VectorBuilder.prototype.addOne__O__sci_VectorBuilder = (function(elem) {
      if ((this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 32)) {
        $p_sci_VectorBuilder__advance__V(this);
      }
      $n(this.sci_VectorBuilder__f_a1).set(this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1, elem);
      this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 = ((1 + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) | 0);
      return this;
    });
    $c_sci_VectorBuilder.prototype.addAll__sc_IterableOnce__sci_VectorBuilder = (function(xs) {
      if ((xs instanceof $c_sci_Vector)) {
        var x2 = $as_sci_Vector(xs);
        return ((((this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 === 0) && (this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest === 0)) && (!this.sci_VectorBuilder__f_prefixIsRightAligned)) ? this.initFrom__sci_Vector__sci_VectorBuilder(x2) : $p_sci_VectorBuilder__addVector__sci_Vector__sci_VectorBuilder(this, x2));
      } else {
        return $as_sci_VectorBuilder($f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs));
      }
    });
    $c_sci_VectorBuilder.prototype.result__sci_Vector = (function() {
      if (this.sci_VectorBuilder__f_prefixIsRightAligned) {
        $p_sci_VectorBuilder__leftAlignPrefix__V(this);
      }
      var len = ((this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1 + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) | 0);
      var realLen = ((len - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset) | 0);
      if ((realLen === 0)) {
        $m_sci_Vector$();
        return $m_sci_Vector0$();
      } else if ((len < 0)) {
        throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("Vector cannot have negative size " + len));
      } else if ((len <= 32)) {
        var a = this.sci_VectorBuilder__f_a1;
        return new $c_sci_Vector1((($n(a).u.length === realLen) ? a : $m_ju_Arrays$().copyOf__AO__I__AO(a, realLen)));
      } else if ((len <= 1024)) {
        var i1 = (31 & (((-1) + len) | 0));
        var i2 = (((((-1) + len) | 0) >>> 5) | 0);
        var original = this.sci_VectorBuilder__f_a2;
        var data = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(original, 1, i2), 2);
        var prefix1 = $n(this.sci_VectorBuilder__f_a2).get(0);
        var a$1 = $n(this.sci_VectorBuilder__f_a2).get(i2);
        var len$1 = ((1 + i1) | 0);
        var suffix1 = (($n(a$1).u.length === len$1) ? a$1 : $m_ju_Arrays$().copyOf__AO__I__AO(a$1, len$1));
        return new $c_sci_Vector2(prefix1, ((32 - this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset) | 0), data, suffix1, realLen);
      } else if ((len <= 32768)) {
        var i1$2 = (31 & (((-1) + len) | 0));
        var i2$2 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
        var i3 = (((((-1) + len) | 0) >>> 10) | 0);
        var original$1 = this.sci_VectorBuilder__f_a3;
        var data$2 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$1, 1, i3), 3);
        var a$2 = $n(this.sci_VectorBuilder__f_a3).get(0);
        var to = $n(a$2).u.length;
        var prefix2 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$2, 1, to), 2);
        var prefix1$2 = $n($n(this.sci_VectorBuilder__f_a3).get(0)).get(0);
        var original$2 = $n(this.sci_VectorBuilder__f_a3).get(i3);
        var suffix2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$2, i2$2), 2);
        var a$3 = $n($n(this.sci_VectorBuilder__f_a3).get(i3)).get(i2$2);
        var len$2 = ((1 + i1$2) | 0);
        var suffix1$2 = (($n(a$3).u.length === len$2) ? a$3 : $m_ju_Arrays$().copyOf__AO__I__AO(a$3, len$2));
        var len1 = $n(prefix1$2).u.length;
        var len12 = ((len1 + ($n(prefix2).u.length << 5)) | 0);
        return new $c_sci_Vector3(prefix1$2, len1, prefix2, len12, data$2, suffix2, suffix1$2, realLen);
      } else if ((len <= 1048576)) {
        var i1$3 = (31 & (((-1) + len) | 0));
        var i2$3 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
        var i3$2 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
        var i4 = (((((-1) + len) | 0) >>> 15) | 0);
        var original$3 = this.sci_VectorBuilder__f_a4;
        var data$3 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$3, 1, i4), 4);
        var a$4 = $n(this.sci_VectorBuilder__f_a4).get(0);
        var to$1 = $n(a$4).u.length;
        var prefix3 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$4, 1, to$1), 3);
        var a$5 = $n($n(this.sci_VectorBuilder__f_a4).get(0)).get(0);
        var to$2 = $n(a$5).u.length;
        var prefix2$2 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$5, 1, to$2), 2);
        var prefix1$3 = $n($n($n(this.sci_VectorBuilder__f_a4).get(0)).get(0)).get(0);
        var original$4 = $n(this.sci_VectorBuilder__f_a4).get(i4);
        var suffix3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$4, i3$2), 3);
        var original$5 = $n($n(this.sci_VectorBuilder__f_a4).get(i4)).get(i3$2);
        var suffix2$2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$5, i2$3), 2);
        var a$6 = $n($n($n(this.sci_VectorBuilder__f_a4).get(i4)).get(i3$2)).get(i2$3);
        var len$3 = ((1 + i1$3) | 0);
        var suffix1$3 = (($n(a$6).u.length === len$3) ? a$6 : $m_ju_Arrays$().copyOf__AO__I__AO(a$6, len$3));
        var len1$2 = $n(prefix1$3).u.length;
        var len12$2 = ((len1$2 + ($n(prefix2$2).u.length << 5)) | 0);
        var len123 = ((len12$2 + ($n(prefix3).u.length << 10)) | 0);
        return new $c_sci_Vector4(prefix1$3, len1$2, prefix2$2, len12$2, prefix3, len123, data$3, suffix3, suffix2$2, suffix1$3, realLen);
      } else if ((len <= 33554432)) {
        var i1$4 = (31 & (((-1) + len) | 0));
        var i2$4 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
        var i3$3 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
        var i4$2 = (31 & (((((-1) + len) | 0) >>> 15) | 0));
        var i5 = (((((-1) + len) | 0) >>> 20) | 0);
        var original$6 = this.sci_VectorBuilder__f_a5;
        var data$4 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$6, 1, i5), 5);
        var a$7 = $n(this.sci_VectorBuilder__f_a5).get(0);
        var to$3 = $n(a$7).u.length;
        var prefix4 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$7, 1, to$3), 4);
        var a$8 = $n($n(this.sci_VectorBuilder__f_a5).get(0)).get(0);
        var to$4 = $n(a$8).u.length;
        var prefix3$2 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$8, 1, to$4), 3);
        var a$9 = $n($n($n(this.sci_VectorBuilder__f_a5).get(0)).get(0)).get(0);
        var to$5 = $n(a$9).u.length;
        var prefix2$3 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$9, 1, to$5), 2);
        var prefix1$4 = $n($n($n($n(this.sci_VectorBuilder__f_a5).get(0)).get(0)).get(0)).get(0);
        var original$7 = $n(this.sci_VectorBuilder__f_a5).get(i5);
        var suffix4 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$7, i4$2), 4);
        var original$8 = $n($n(this.sci_VectorBuilder__f_a5).get(i5)).get(i4$2);
        var suffix3$2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$8, i3$3), 3);
        var original$9 = $n($n($n(this.sci_VectorBuilder__f_a5).get(i5)).get(i4$2)).get(i3$3);
        var suffix2$3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$9, i2$4), 2);
        var a$10 = $n($n($n($n(this.sci_VectorBuilder__f_a5).get(i5)).get(i4$2)).get(i3$3)).get(i2$4);
        var len$4 = ((1 + i1$4) | 0);
        var suffix1$4 = (($n(a$10).u.length === len$4) ? a$10 : $m_ju_Arrays$().copyOf__AO__I__AO(a$10, len$4));
        var len1$3 = $n(prefix1$4).u.length;
        var len12$3 = ((len1$3 + ($n(prefix2$3).u.length << 5)) | 0);
        var len123$2 = ((len12$3 + ($n(prefix3$2).u.length << 10)) | 0);
        var len1234 = ((len123$2 + ($n(prefix4).u.length << 15)) | 0);
        return new $c_sci_Vector5(prefix1$4, len1$3, prefix2$3, len12$3, prefix3$2, len123$2, prefix4, len1234, data$4, suffix4, suffix3$2, suffix2$3, suffix1$4, realLen);
      } else {
        var i1$5 = (31 & (((-1) + len) | 0));
        var i2$5 = (31 & (((((-1) + len) | 0) >>> 5) | 0));
        var i3$4 = (31 & (((((-1) + len) | 0) >>> 10) | 0));
        var i4$3 = (31 & (((((-1) + len) | 0) >>> 15) | 0));
        var i5$2 = (31 & (((((-1) + len) | 0) >>> 20) | 0));
        var i6 = (((((-1) + len) | 0) >>> 25) | 0);
        var original$10 = this.sci_VectorBuilder__f_a6;
        var data$5 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(original$10, 1, i6), 6);
        var a$11 = $n(this.sci_VectorBuilder__f_a6).get(0);
        var to$6 = $n(a$11).u.length;
        var prefix5 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$11, 1, to$6), 5);
        var a$12 = $n($n(this.sci_VectorBuilder__f_a6).get(0)).get(0);
        var to$7 = $n(a$12).u.length;
        var prefix4$2 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$12, 1, to$7), 4);
        var a$13 = $n($n($n(this.sci_VectorBuilder__f_a6).get(0)).get(0)).get(0);
        var to$8 = $n(a$13).u.length;
        var prefix3$3 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$13, 1, to$8), 3);
        var a$14 = $n($n($n($n(this.sci_VectorBuilder__f_a6).get(0)).get(0)).get(0)).get(0);
        var to$9 = $n(a$14).u.length;
        var prefix2$4 = $asArrayOf_O($m_ju_Arrays$().copyOfRange__AO__I__I__AO(a$14, 1, to$9), 2);
        var prefix1$5 = $n($n($n($n($n(this.sci_VectorBuilder__f_a6).get(0)).get(0)).get(0)).get(0)).get(0);
        var original$11 = $n(this.sci_VectorBuilder__f_a6).get(i6);
        var suffix5 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$11, i5$2), 5);
        var original$12 = $n($n(this.sci_VectorBuilder__f_a6).get(i6)).get(i5$2);
        var suffix4$2 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$12, i4$3), 4);
        var original$13 = $n($n($n(this.sci_VectorBuilder__f_a6).get(i6)).get(i5$2)).get(i4$3);
        var suffix3$3 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$13, i3$4), 3);
        var original$14 = $n($n($n($n(this.sci_VectorBuilder__f_a6).get(i6)).get(i5$2)).get(i4$3)).get(i3$4);
        var suffix2$4 = $asArrayOf_O($m_ju_Arrays$().copyOf__AO__I__AO(original$14, i2$5), 2);
        var a$15 = $n($n($n($n($n(this.sci_VectorBuilder__f_a6).get(i6)).get(i5$2)).get(i4$3)).get(i3$4)).get(i2$5);
        var len$5 = ((1 + i1$5) | 0);
        var suffix1$5 = (($n(a$15).u.length === len$5) ? a$15 : $m_ju_Arrays$().copyOf__AO__I__AO(a$15, len$5));
        var len1$4 = $n(prefix1$5).u.length;
        var len12$4 = ((len1$4 + ($n(prefix2$4).u.length << 5)) | 0);
        var len123$3 = ((len12$4 + ($n(prefix3$3).u.length << 10)) | 0);
        var len1234$2 = ((len123$3 + ($n(prefix4$2).u.length << 15)) | 0);
        var len12345 = ((len1234$2 + ($n(prefix5).u.length << 20)) | 0);
        return new $c_sci_Vector6(prefix1$5, len1$4, prefix2$4, len12$4, prefix3$3, len123$3, prefix4$2, len1234$2, prefix5, len12345, data$5, suffix5, suffix4$2, suffix3$3, suffix2$4, suffix1$5, realLen);
      }
    });
    $c_sci_VectorBuilder.prototype.toString__T = (function() {
      return (((((((("VectorBuilder(len1=" + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$len1) + ", lenRest=") + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$lenRest) + ", offset=") + this.sci_VectorBuilder__f_scala$collection$immutable$VectorBuilder$$offset) + ", depth=") + this.sci_VectorBuilder__f_depth) + ")");
    });
    $c_sci_VectorBuilder.prototype.result__O = (function() {
      return this.result__sci_Vector();
    });
    $c_sci_VectorBuilder.prototype.addAll__sc_IterableOnce__scm_Growable = (function(elems) {
      return this.addAll__sc_IterableOnce__sci_VectorBuilder(elems);
    });
    $c_sci_VectorBuilder.prototype.addOne__O__scm_Growable = (function(elem) {
      return this.addOne__O__sci_VectorBuilder(elem);
    });
    function $as_sci_VectorBuilder(obj) {
      return (((obj instanceof $c_sci_VectorBuilder) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.VectorBuilder"));
    }
    new $TypeData().initClass($c_sci_VectorBuilder, "scala.collection.immutable.VectorBuilder", ({
      sci_VectorBuilder: 1,
      scm_ReusableBuilder: 1,
      scm_Builder: 1,
      scm_Growable: 1,
      scm_Clearable: 1
    }));
    /** @constructor */
    function $c_scm_Buffer$() {
      this.sc_SeqFactory$Delegate__f_delegate = null;
      $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sjs_js_WrappedArray$());
    }
    $c_scm_Buffer$.prototype = new $h_sc_SeqFactory$Delegate();
    $c_scm_Buffer$.prototype.constructor = $c_scm_Buffer$;
    $c_scm_Buffer$.prototype;
    new $TypeData().initClass($c_scm_Buffer$, "scala.collection.mutable.Buffer$", ({
      scm_Buffer$: 1,
      sc_SeqFactory$Delegate: 1,
      sc_SeqFactory: 1,
      sc_IterableFactory: 1,
      Ljava_io_Serializable: 1
    }));
    var $n_scm_Buffer$;
    function $m_scm_Buffer$() {
      if ((!$n_scm_Buffer$)) {
        $n_scm_Buffer$ = new $c_scm_Buffer$();
      }
      return $n_scm_Buffer$;
    }
    /** @constructor */
    function $c_scm_MutationTracker$CheckedIterator(underlying, mutationCount) {
      this.scm_MutationTracker$CheckedIterator__f_underlying = null;
      this.scm_MutationTracker$CheckedIterator__f_mutationCount = null;
      this.scm_MutationTracker$CheckedIterator__f_expectedCount = 0;
      this.scm_MutationTracker$CheckedIterator__f_underlying = underlying;
      this.scm_MutationTracker$CheckedIterator__f_mutationCount = mutationCount;
      var this$1$1 = $n(mutationCount);
      this.scm_MutationTracker$CheckedIterator__f_expectedCount = $uI(this$1$1.apply__O());
    }
    $c_scm_MutationTracker$CheckedIterator.prototype = new $h_sc_AbstractIterator();
    $c_scm_MutationTracker$CheckedIterator.prototype.constructor = $c_scm_MutationTracker$CheckedIterator;
    $c_scm_MutationTracker$CheckedIterator.prototype;
    $c_scm_MutationTracker$CheckedIterator.prototype.hasNext__Z = (function() {
      var this$2 = $m_scm_MutationTracker$();
      var expectedCount = this.scm_MutationTracker$CheckedIterator__f_expectedCount;
      var this$1$1 = $n(this.scm_MutationTracker$CheckedIterator__f_mutationCount);
      var actualCount = $uI(this$1$1.apply__O());
      this$2.checkMutations__I__I__T__V(expectedCount, actualCount, "mutation occurred during iteration");
      return $n(this.scm_MutationTracker$CheckedIterator__f_underlying).hasNext__Z();
    });
    $c_scm_MutationTracker$CheckedIterator.prototype.next__O = (function() {
      return $n(this.scm_MutationTracker$CheckedIterator__f_underlying).next__O();
    });
    new $TypeData().initClass($c_scm_MutationTracker$CheckedIterator, "scala.collection.mutable.MutationTracker$CheckedIterator", ({
      scm_MutationTracker$CheckedIterator: 1,
      sc_AbstractIterator: 1,
      sc_Iterator: 1,
      sc_IterableOnce: 1,
      sc_IterableOnceOps: 1
    }));
    /** @constructor */
    function $c_s_concurrent_ExecutionContext$parasitic$() {
      this.s_concurrent_ExecutionContext$parasitic$__f_scala$concurrent$BatchingExecutor$$_tasksLocal = null;
      $n_s_concurrent_ExecutionContext$parasitic$ = this;
      this.s_concurrent_ExecutionContext$parasitic$__f_scala$concurrent$BatchingExecutor$$_tasksLocal = new $c_jl_ThreadLocal();
    }
    $c_s_concurrent_ExecutionContext$parasitic$.prototype = new $h_O();
    $c_s_concurrent_ExecutionContext$parasitic$.prototype.constructor = $c_s_concurrent_ExecutionContext$parasitic$;
    $c_s_concurrent_ExecutionContext$parasitic$.prototype;
    $c_s_concurrent_ExecutionContext$parasitic$.prototype.execute__jl_Runnable__V = (function(runnable) {
      $f_s_concurrent_BatchingExecutor__submitSyncBatched__jl_Runnable__V(this, runnable);
    });
    $c_s_concurrent_ExecutionContext$parasitic$.prototype.reportFailure__jl_Throwable__V = (function(t) {
      $n($m_s_concurrent_ExecutionContext$().s_concurrent_ExecutionContext$__f_defaultReporter).apply__O__O(t);
    });
    new $TypeData().initClass($c_s_concurrent_ExecutionContext$parasitic$, "scala.concurrent.ExecutionContext$parasitic$", ({
      s_concurrent_ExecutionContext$parasitic$: 1,
      s_concurrent_ExecutionContextExecutor: 1,
      s_concurrent_ExecutionContext: 1,
      ju_concurrent_Executor: 1,
      s_concurrent_BatchingExecutor: 1
    }));
    var $n_s_concurrent_ExecutionContext$parasitic$;
    function $m_s_concurrent_ExecutionContext$parasitic$() {
      if ((!$n_s_concurrent_ExecutionContext$parasitic$)) {
        $n_s_concurrent_ExecutionContext$parasitic$ = new $c_s_concurrent_ExecutionContext$parasitic$();
      }
      return $n_s_concurrent_ExecutionContext$parasitic$;
    }
    function $f_s_reflect_ClassTag__equals__O__Z($thiz, x) {
      if ($is_s_reflect_ClassTag(x)) {
        var x$2 = $thiz.runtimeClass__jl_Class();
        var x$3 = $n($as_s_reflect_ClassTag(x)).runtimeClass__jl_Class();
        if ((x$2 === null)) {
          return (x$3 === null);
        } else {
          var this$1 = $n(x$2);
          return (this$1 === x$3);
        }
      } else {
        return false;
      }
    }
    function $ps_s_reflect_ClassTag__prettyprint$1__jl_Class__T(clazz) {
      var this$1 = $n(clazz);
      if (this$1.data.isArrayClass) {
        var this$2 = $n(clazz);
        return (("Array[" + $ps_s_reflect_ClassTag__prettyprint$1__jl_Class__T(this$2.data.getComponentType())) + "]");
      } else {
        var this$3 = $n(clazz);
        return this$3.data.name;
      }
    }
    function $is_s_reflect_ClassTag(obj) {
      return (!(!((obj && obj.$classData) && obj.$classData.ancestors.s_reflect_ClassTag)));
    }
    function $as_s_reflect_ClassTag(obj) {
      return (($is_s_reflect_ClassTag(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.reflect.ClassTag"));
    }
    /** @constructor */
    function $c_sr_ScalaRunTime$$anon$1(x$2) {
      this.sr_ScalaRunTime$$anon$1__f_c = 0;
      this.sr_ScalaRunTime$$anon$1__f_cmax = 0;
      this.sr_ScalaRunTime$$anon$1__f_x$2 = null;
      this.sr_ScalaRunTime$$anon$1__f_x$2 = x$2;
      this.sr_ScalaRunTime$$anon$1__f_c = 0;
      this.sr_ScalaRunTime$$anon$1__f_cmax = $n(x$2).productArity__I();
    }
    $c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
    $c_sr_ScalaRunTime$$anon$1.prototype.constructor = $c_sr_ScalaRunTime$$anon$1;
    $c_sr_ScalaRunTime$$anon$1.prototype;
    $c_sr_ScalaRunTime$$anon$1.prototype.hasNext__Z = (function() {
      return (this.sr_ScalaRunTime$$anon$1__f_c < this.sr_ScalaRunTime$$anon$1__f_cmax);
    });
    $c_sr_ScalaRunTime$$anon$1.prototype.next__O = (function() {
      var result = $n(this.sr_ScalaRunTime$$anon$1__f_x$2).productElement__I__O(this.sr_ScalaRunTime$$anon$1__f_c);
      this.sr_ScalaRunTime$$anon$1__f_c = ((1 + this.sr_ScalaRunTime$$anon$1__f_c) | 0);
      return result;
    });
    new $TypeData().initClass($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
      sr_ScalaRunTime$$anon$1: 1,
      sc_AbstractIterator: 1,
      sc_Iterator: 1,
      sc_IterableOnce: 1,
      sc_IterableOnceOps: 1
    }));
    /** @constructor */
    function $c_sjs_js_WrappedArray$() {
    }
    $c_sjs_js_WrappedArray$.prototype = new $h_O();
    $c_sjs_js_WrappedArray$.prototype.constructor = $c_sjs_js_WrappedArray$;
    $c_sjs_js_WrappedArray$.prototype;
    $c_sjs_js_WrappedArray$.prototype.from__sc_IterableOnce__sjs_js_WrappedArray = (function(source) {
      var this$1 = $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray());
      return $as_sjs_js_WrappedArray($n($as_scm_Builder($f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this$1, source))).result__O());
    });
    $c_sjs_js_WrappedArray$.prototype.from__sc_IterableOnce__O = (function(source) {
      return this.from__sc_IterableOnce__sjs_js_WrappedArray(source);
    });
    new $TypeData().initClass($c_sjs_js_WrappedArray$, "scala.scalajs.js.WrappedArray$", ({
      sjs_js_WrappedArray$: 1,
      sc_StrictOptimizedSeqFactory: 1,
      sc_SeqFactory: 1,
      sc_IterableFactory: 1,
      Ljava_io_Serializable: 1
    }));
    var $n_sjs_js_WrappedArray$;
    function $m_sjs_js_WrappedArray$() {
      if ((!$n_sjs_js_WrappedArray$)) {
        $n_sjs_js_WrappedArray$ = new $c_sjs_js_WrappedArray$();
      }
      return $n_sjs_js_WrappedArray$;
    }
    /** @constructor */
    function $c_s_util_Failure(exception) {
      this.s_util_Failure__f_exception = null;
      this.s_util_Failure__f_exception = exception;
    }
    $c_s_util_Failure.prototype = new $h_s_util_Try();
    $c_s_util_Failure.prototype.constructor = $c_s_util_Failure;
    $c_s_util_Failure.prototype;
    $c_s_util_Failure.prototype.get__O = (function() {
      var $x_1 = $n(this.s_util_Failure__f_exception);
      throw (($x_1 instanceof $c_sjs_js_JavaScriptException) ? $x_1.sjs_js_JavaScriptException__f_exception : $x_1);
    });
    $c_s_util_Failure.prototype.foreach__F1__V = (function(f) {
    });
    $c_s_util_Failure.prototype.recover__s_PartialFunction__s_util_Try = (function(pf) {
      var marker = $m_sr_Statics$PFMarker$();
      try {
        var v = $n(pf).applyOrElse__O__F1__O(this.s_util_Failure__f_exception, new $c_sjsr_AnonFunction1(((x$2$2) => {
          $as_jl_Throwable(x$2$2);
          return marker;
        })));
        return ((marker !== v) ? new $c_s_util_Success(v) : this);
      } catch (e) {
        var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
        if ($m_s_util_control_NonFatal$().apply__jl_Throwable__Z(e$2)) {
          return new $c_s_util_Failure(e$2);
        }
        throw ((e$2 instanceof $c_sjs_js_JavaScriptException) ? e$2.sjs_js_JavaScriptException__f_exception : e$2);
      }
    });
    $c_s_util_Failure.prototype.toOption__s_Option = (function() {
      return $m_s_None$();
    });
    $c_s_util_Failure.prototype.productPrefix__T = (function() {
      return "Failure";
    });
    $c_s_util_Failure.prototype.productArity__I = (function() {
      return 1;
    });
    $c_s_util_Failure.prototype.productElement__I__O = (function(x$1) {
      return ((x$1 === 0) ? this.s_util_Failure__f_exception : $m_sr_Statics$().ioobe__I__O(x$1));
    });
    $c_s_util_Failure.prototype.productIterator__sc_Iterator = (function() {
      return new $c_sr_ScalaRunTime$$anon$1(this);
    });
    $c_s_util_Failure.prototype.hashCode__I = (function() {
      var this$2 = $m_s_util_hashing_MurmurHash3$();
      return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false);
    });
    $c_s_util_Failure.prototype.toString__T = (function() {
      return $m_sr_ScalaRunTime$()._toString__s_Product__T(this);
    });
    $c_s_util_Failure.prototype.equals__O__Z = (function(x$1) {
      if ((this === x$1)) {
        return true;
      } else if ((x$1 instanceof $c_s_util_Failure)) {
        var Failure$1 = $as_s_util_Failure(x$1);
        var x = this.s_util_Failure__f_exception;
        var x$2 = $n(Failure$1).s_util_Failure__f_exception;
        return ((x === null) ? (x$2 === null) : $n(x).equals__O__Z(x$2));
      } else {
        return false;
      }
    });
    function $as_s_util_Failure(obj) {
      return (((obj instanceof $c_s_util_Failure) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.util.Failure"));
    }
    new $TypeData().initClass($c_s_util_Failure, "scala.util.Failure", ({
      s_util_Failure: 1,
      s_util_Try: 1,
      s_Product: 1,
      s_Equals: 1,
      Ljava_io_Serializable: 1
    }));
    /** @constructor */
    function $c_s_util_Success(value) {
      this.s_util_Success__f_value = null;
      this.s_util_Success__f_value = value;
    }
    $c_s_util_Success.prototype = new $h_s_util_Try();
    $c_s_util_Success.prototype.constructor = $c_s_util_Success;
    $c_s_util_Success.prototype;
    $c_s_util_Success.prototype.get__O = (function() {
      return this.s_util_Success__f_value;
    });
    $c_s_util_Success.prototype.foreach__F1__V = (function(f) {
      $n(f).apply__O__O(this.s_util_Success__f_value);
    });
    $c_s_util_Success.prototype.recover__s_PartialFunction__s_util_Try = (function(pf) {
      return this;
    });
    $c_s_util_Success.prototype.toOption__s_Option = (function() {
      return new $c_s_Some(this.s_util_Success__f_value);
    });
    $c_s_util_Success.prototype.productPrefix__T = (function() {
      return "Success";
    });
    $c_s_util_Success.prototype.productArity__I = (function() {
      return 1;
    });
    $c_s_util_Success.prototype.productElement__I__O = (function(x$1) {
      return ((x$1 === 0) ? this.s_util_Success__f_value : $m_sr_Statics$().ioobe__I__O(x$1));
    });
    $c_s_util_Success.prototype.productIterator__sc_Iterator = (function() {
      return new $c_sr_ScalaRunTime$$anon$1(this);
    });
    $c_s_util_Success.prototype.hashCode__I = (function() {
      var this$2 = $m_s_util_hashing_MurmurHash3$();
      return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false);
    });
    $c_s_util_Success.prototype.toString__T = (function() {
      return $m_sr_ScalaRunTime$()._toString__s_Product__T(this);
    });
    $c_s_util_Success.prototype.equals__O__Z = (function(x$1) {
      if ((this === x$1)) {
        return true;
      } else if ((x$1 instanceof $c_s_util_Success)) {
        var Success$1 = $as_s_util_Success(x$1);
        return $m_sr_BoxesRunTime$().equals__O__O__Z(this.s_util_Success__f_value, $n(Success$1).s_util_Success__f_value);
      } else {
        return false;
      }
    });
    function $as_s_util_Success(obj) {
      return (((obj instanceof $c_s_util_Success) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.util.Success"));
    }
    new $TypeData().initClass($c_s_util_Success, "scala.util.Success", ({
      s_util_Success: 1,
      s_util_Try: 1,
      s_Product: 1,
      s_Equals: 1,
      Ljava_io_Serializable: 1
    }));
    /** @constructor */
    function $c_Lscalatags_generic_AttrPair(a, v, ev) {
      this.Lscalatags_generic_AttrPair__f_a = null;
      this.Lscalatags_generic_AttrPair__f_v = null;
      this.Lscalatags_generic_AttrPair__f_ev = null;
      this.Lscalatags_generic_AttrPair__f_a = a;
      this.Lscalatags_generic_AttrPair__f_v = v;
      this.Lscalatags_generic_AttrPair__f_ev = ev;
    }
    $c_Lscalatags_generic_AttrPair.prototype = new $h_O();
    $c_Lscalatags_generic_AttrPair.prototype.constructor = $c_Lscalatags_generic_AttrPair;
    $c_Lscalatags_generic_AttrPair.prototype;
    $c_Lscalatags_generic_AttrPair.prototype.productIterator__sc_Iterator = (function() {
      return new $c_s_Product$$anon$1(this);
    });
    $c_Lscalatags_generic_AttrPair.prototype.hashCode__I = (function() {
      var this$2 = $m_s_util_hashing_MurmurHash3$();
      return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false);
    });
    $c_Lscalatags_generic_AttrPair.prototype.equals__O__Z = (function(x$0) {
      if ((this === x$0)) {
        return true;
      } else if ((x$0 instanceof $c_Lscalatags_generic_AttrPair)) {
        var x$0$2 = $as_Lscalatags_generic_AttrPair(x$0);
        var x = this.Lscalatags_generic_AttrPair__f_a;
        var x$2 = $n(x$0$2).Lscalatags_generic_AttrPair__f_a;
        if (((x === null) ? (x$2 === null) : $n(x).equals__O__Z(x$2))) {
          var x$1 = this.Lscalatags_generic_AttrPair__f_v;
          var y = $n(x$0$2).Lscalatags_generic_AttrPair__f_v;
          var $x_2 = $m_sr_BoxesRunTime$().equals__O__O__Z(x$1, y);
        } else {
          var $x_2 = false;
        }
        if ($x_2) {
          var x$3 = this.Lscalatags_generic_AttrPair__f_ev;
          var x$4 = $n(x$0$2).Lscalatags_generic_AttrPair__f_ev;
          if ((x$3 === null)) {
            var $x_1 = (x$4 === null);
          } else {
            var this$1$1 = $n(x$3);
            var $x_1 = (this$1$1 === x$4);
          }
        } else {
          var $x_1 = false;
        }
        if ($x_1) {
          $n(x$0$2);
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    });
    $c_Lscalatags_generic_AttrPair.prototype.toString__T = (function() {
      return $m_sr_ScalaRunTime$()._toString__s_Product__T(this);
    });
    $c_Lscalatags_generic_AttrPair.prototype.productArity__I = (function() {
      return 3;
    });
    $c_Lscalatags_generic_AttrPair.prototype.productPrefix__T = (function() {
      return "AttrPair";
    });
    $c_Lscalatags_generic_AttrPair.prototype.productElement__I__O = (function(n) {
      switch (n) {
        case 0: {
          return this.Lscalatags_generic_AttrPair__f_a;
        }
        case 1: {
          return this.Lscalatags_generic_AttrPair__f_v;
        }
        case 2: {
          return this.Lscalatags_generic_AttrPair__f_ev;
        }
        default: {
          throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
        }
      }
    });
    $c_Lscalatags_generic_AttrPair.prototype.applyTo__O__V = (function(t) {
      $n(this.Lscalatags_generic_AttrPair__f_ev).apply__Lorg_scalajs_dom_Element__Lscalatags_generic_Attr__O__V(t, this.Lscalatags_generic_AttrPair__f_a, this.Lscalatags_generic_AttrPair__f_v);
    });
    function $as_Lscalatags_generic_AttrPair(obj) {
      return (((obj instanceof $c_Lscalatags_generic_AttrPair) || (obj === null)) ? obj : $throwClassCastException(obj, "scalatags.generic.AttrPair"));
    }
    new $TypeData().initClass($c_Lscalatags_generic_AttrPair, "scalatags.generic.AttrPair", ({
      Lscalatags_generic_AttrPair: 1,
      Lscalatags_generic_Modifier: 1,
      s_Equals: 1,
      s_Product: 1,
      Ljava_io_Serializable: 1
    }));
    function $ct_jl_ArrayIndexOutOfBoundsException__T__($thiz, s) {
      $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
      return $thiz;
    }
    function $ct_jl_ArrayIndexOutOfBoundsException__($thiz) {
      $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
      return $thiz;
    }
    class $c_jl_ArrayIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
    }
    new $TypeData().initClass($c_jl_ArrayIndexOutOfBoundsException, "java.lang.ArrayIndexOutOfBoundsException", ({
      jl_ArrayIndexOutOfBoundsException: 1,
      jl_IndexOutOfBoundsException: 1,
      jl_RuntimeException: 1,
      jl_Exception: 1,
      jl_Throwable: 1,
      Ljava_io_Serializable: 1
    }));
    function $f_jl_Double__equals__O__Z($thiz, that) {
      return Object.is($thiz, that);
    }
    function $f_jl_Double__hashCode__I($thiz) {
      return $m_jl_FloatingPointBits$().numberHashCode__D__I($thiz);
    }
    var $d_jl_Double = new $TypeData().initClass(0, "java.lang.Double", ({
      jl_Double: 1,
      jl_Number: 1,
      Ljava_io_Serializable: 1,
      jl_Comparable: 1,
      jl_constant_Constable: 1,
      jl_constant_ConstantDesc: 1
    }), ((x) => ((typeof x) === "number")));
    var $d_jl_Float = new $TypeData().initClass(0, "java.lang.Float", ({
      jl_Float: 1,
      jl_Number: 1,
      Ljava_io_Serializable: 1,
      jl_Comparable: 1,
      jl_constant_Constable: 1,
      jl_constant_ConstantDesc: 1
    }), ((x) => $isFloat(x)));
    function $as_jl_Integer(obj) {
      return (($isInt(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Integer"));
    }
    var $d_jl_Integer = new $TypeData().initClass(0, "java.lang.Integer", ({
      jl_Integer: 1,
      jl_Number: 1,
      Ljava_io_Serializable: 1,
      jl_Comparable: 1,
      jl_constant_Constable: 1,
      jl_constant_ConstantDesc: 1
    }), ((x) => $isInt(x)));
    function $f_jl_Long__equals__O__Z($thiz, that) {
      if ((that instanceof $c_RTLong)) {
        var x2 = $as_jl_Long(that);
        var this$1 = $n(x2);
        var b = $uJ(this$1);
        return (($thiz.RTLong__f_lo === b.RTLong__f_lo) && ($thiz.RTLong__f_hi === b.RTLong__f_hi));
      } else {
        return false;
      }
    }
    function $f_jl_Long__hashCode__I($thiz) {
      var $x_1 = $thiz.RTLong__f_lo;
      var hi = $thiz.RTLong__f_hi;
      return ($x_1 ^ hi);
    }
    function $as_jl_Long(obj) {
      return (((obj instanceof $c_RTLong) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Long"));
    }
    var $d_jl_Long = new $TypeData().initClass(0, "java.lang.Long", ({
      jl_Long: 1,
      jl_Number: 1,
      Ljava_io_Serializable: 1,
      jl_Comparable: 1,
      jl_constant_Constable: 1,
      jl_constant_ConstantDesc: 1
    }), ((x) => (x instanceof $c_RTLong)));
    class $c_jl_NumberFormatException extends $c_jl_IllegalArgumentException {
      constructor(s) {
        super();
        $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
      }
    }
    new $TypeData().initClass($c_jl_NumberFormatException, "java.lang.NumberFormatException", ({
      jl_NumberFormatException: 1,
      jl_IllegalArgumentException: 1,
      jl_RuntimeException: 1,
      jl_Exception: 1,
      jl_Throwable: 1,
      Ljava_io_Serializable: 1
    }));
    function $f_T__codePointAt__I__I($thiz, index) {
      $charAt($thiz, index);
      return $uI($thiz.codePointAt(index));
    }
    function $f_T__hashCode__I($thiz) {
      var res = 0;
      var mul = 1;
      var i = (((-1) + $thiz.length) | 0);
      while ((i >= 0)) {
        var $x_1 = res;
        var index = i;
        res = (($x_1 + Math.imul($charAt($thiz, index), mul)) | 0);
        mul = Math.imul(31, mul);
        i = (((-1) + i) | 0);
      }
      return res;
    }
    function $f_T__equals__O__Z($thiz, that) {
      return ($thiz === that);
    }
    function $f_T__repeat__I__T($thiz, count) {
      if ((count < 0)) {
        throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
      } else {
        return $as_T($thiz.repeat(count));
      }
    }
    function $f_T__split__T__I__AT($thiz, regex, limit) {
      var this$2 = $n($m_ju_regex_PatternCompiler$().compile__T__I__ju_regex_Pattern(regex, 0));
      return this$2.java$util$regex$Pattern$$split__T__I__AT($thiz, limit);
    }
    function $f_T__trim__T($thiz) {
      var len = $thiz.length;
      var start = 0;
      while (true) {
        if ((start !== len)) {
          var index = start;
          var $x_1 = ($charAt($thiz, index) <= 32);
        } else {
          var $x_1 = false;
        }
        if ($x_1) {
          start = ((1 + start) | 0);
        } else {
          break;
        }
      }
      if ((start === len)) {
        return "";
      } else {
        var end = len;
        while (true) {
          var index$1 = (((-1) + end) | 0);
          if (($charAt($thiz, index$1) <= 32)) {
            end = (((-1) + end) | 0);
          } else {
            break;
          }
        }
        if (((start === 0) && (end === len))) {
          return $thiz;
        } else {
          var beginIndex = start;
          var endIndex = end;
          if ((beginIndex < 0)) {
            $charAt($thiz, beginIndex);
          }
          if ((endIndex > $thiz.length)) {
            $charAt($thiz, endIndex);
          }
          if ((endIndex < beginIndex)) {
            $charAt($thiz, (-1));
          }
          return $as_T($thiz.substring(beginIndex, endIndex));
        }
      }
    }
    function $as_T(obj) {
      return ((((typeof obj) === "string") || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.String"));
    }
    var $d_T = new $TypeData().initClass(0, "java.lang.String", ({
      T: 1,
      Ljava_io_Serializable: 1,
      jl_Comparable: 1,
      jl_CharSequence: 1,
      jl_constant_Constable: 1,
      jl_constant_ConstantDesc: 1
    }), ((x) => ((typeof x) === "string")));
    function $ct_jl_StringIndexOutOfBoundsException__I__($thiz, index) {
      var s = ("String index out of range: " + index);
      $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
      return $thiz;
    }
    function $ct_jl_StringIndexOutOfBoundsException__($thiz) {
      $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
      return $thiz;
    }
    class $c_jl_StringIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
    }
    new $TypeData().initClass($c_jl_StringIndexOutOfBoundsException, "java.lang.StringIndexOutOfBoundsException", ({
      jl_StringIndexOutOfBoundsException: 1,
      jl_IndexOutOfBoundsException: 1,
      jl_RuntimeException: 1,
      jl_Exception: 1,
      jl_Throwable: 1,
      Ljava_io_Serializable: 1
    }));
    class $c_ju_regex_PatternSyntaxException extends $c_jl_IllegalArgumentException {
      constructor(desc, regex, index) {
        super();
        this.ju_regex_PatternSyntaxException__f_desc = null;
        this.ju_regex_PatternSyntaxException__f_regex = null;
        this.ju_regex_PatternSyntaxException__f_index = 0;
        this.ju_regex_PatternSyntaxException__f_desc = desc;
        this.ju_regex_PatternSyntaxException__f_regex = regex;
        this.ju_regex_PatternSyntaxException__f_index = index;
        $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
      }
      getMessage__T() {
        var idx = this.ju_regex_PatternSyntaxException__f_index;
        var re = this.ju_regex_PatternSyntaxException__f_regex;
        var indexHint = ((idx < 0) ? "" : (" near index " + idx));
        var base = (((this.ju_regex_PatternSyntaxException__f_desc + indexHint) + "\n") + re);
        if (((idx >= 0) && (re !== null))) {
          var this$1$1 = $n(re);
          var $x_1 = (idx < this$1$1.length);
        } else {
          var $x_1 = false;
        }
        if ($x_1) {
          return (((base + "\n") + $f_T__repeat__I__T(" ", idx)) + "^");
        } else {
          return base;
        }
      }
    }
    new $TypeData().initClass($c_ju_regex_PatternSyntaxException, "java.util.regex.PatternSyntaxException", ({
      ju_regex_PatternSyntaxException: 1,
      jl_IllegalArgumentException: 1,
      jl_RuntimeException: 1,
      jl_Exception: 1,
      jl_Throwable: 1,
      Ljava_io_Serializable: 1
    }));
    /** @constructor */
    function $c_s_None$() {
    }
    $c_s_None$.prototype = new $h_s_Option();
    $c_s_None$.prototype.constructor = $c_s_None$;
    $c_s_None$.prototype;
    $c_s_None$.prototype.get__E = (function() {
      throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "None.get");
    });
    $c_s_None$.prototype.productPrefix__T = (function() {
      return "None";
    });
    $c_s_None$.prototype.productArity__I = (function() {
      return 0;
    });
    $c_s_None$.prototype.productElement__I__O = (function(x$1) {
      return $m_sr_Statics$().ioobe__I__O(x$1);
    });
    $c_s_None$.prototype.productIterator__sc_Iterator = (function() {
      return new $c_sr_ScalaRunTime$$anon$1(this);
    });
    $c_s_None$.prototype.hashCode__I = (function() {
      return 2433880;
    });
    $c_s_None$.prototype.toString__T = (function() {
      return "None";
    });
    $c_s_None$.prototype.get__O = (function() {
      this.get__E();
    });
    new $TypeData().initClass($c_s_None$, "scala.None$", ({
      s_None$: 1,
      s_Option: 1,
      sc_IterableOnce: 1,
      s_Product: 1,
      s_Equals: 1,
      Ljava_io_Serializable: 1
    }));
    var $n_s_None$;
    function $m_s_None$() {
      if ((!$n_s_None$)) {
        $n_s_None$ = new $c_s_None$();
      }
      return $n_s_None$;
    }
    /** @constructor */
    function $c_s_Some(value) {
      this.s_Some__f_value = null;
      this.s_Some__f_value = value;
    }
    $c_s_Some.prototype = new $h_s_Option();
    $c_s_Some.prototype.constructor = $c_s_Some;
    $c_s_Some.prototype;
    $c_s_Some.prototype.get__O = (function() {
      return this.s_Some__f_value;
    });
    $c_s_Some.prototype.productPrefix__T = (function() {
      return "Some";
    });
    $c_s_Some.prototype.productArity__I = (function() {
      return 1;
    });
    $c_s_Some.prototype.productElement__I__O = (function(x$1) {
      return ((x$1 === 0) ? this.s_Some__f_value : $m_sr_Statics$().ioobe__I__O(x$1));
    });
    $c_s_Some.prototype.productIterator__sc_Iterator = (function() {
      return new $c_sr_ScalaRunTime$$anon$1(this);
    });
    $c_s_Some.prototype.hashCode__I = (function() {
      var this$2 = $m_s_util_hashing_MurmurHash3$();
      return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false);
    });
    $c_s_Some.prototype.toString__T = (function() {
      return $m_sr_ScalaRunTime$()._toString__s_Product__T(this);
    });
    $c_s_Some.prototype.equals__O__Z = (function(x$1) {
      if ((this === x$1)) {
        return true;
      } else if ((x$1 instanceof $c_s_Some)) {
        var Some$1 = $as_s_Some(x$1);
        return $m_sr_BoxesRunTime$().equals__O__O__Z(this.s_Some__f_value, $n(Some$1).s_Some__f_value);
      } else {
        return false;
      }
    });
    function $as_s_Some(obj) {
      return (((obj instanceof $c_s_Some) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Some"));
    }
    new $TypeData().initClass($c_s_Some, "scala.Some", ({
      s_Some: 1,
      s_Option: 1,
      sc_IterableOnce: 1,
      s_Product: 1,
      s_Equals: 1,
      Ljava_io_Serializable: 1
    }));
    /** @constructor */
    function $c_sc_AbstractIterable() {
    }
    $c_sc_AbstractIterable.prototype = new $h_O();
    $c_sc_AbstractIterable.prototype.constructor = $c_sc_AbstractIterable;
    /** @constructor */
    function $h_sc_AbstractIterable() {
    }
    $h_sc_AbstractIterable.prototype = $c_sc_AbstractIterable.prototype;
    $c_sc_AbstractIterable.prototype.className__T = (function() {
      return this.stringPrefix__T();
    });
    $c_sc_AbstractIterable.prototype.foreach__F1__V = (function(f) {
      $f_sc_IterableOnceOps__foreach__F1__V(this, f);
    });
    $c_sc_AbstractIterable.prototype.forall__F1__Z = (function(p) {
      return $f_sc_IterableOnceOps__forall__F1__Z(this, p);
    });
    $c_sc_AbstractIterable.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
      return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len);
    });
    $c_sc_AbstractIterable.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
      return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
    });
    $c_sc_AbstractIterable.prototype.knownSize__I = (function() {
      return (-1);
    });
    function $ct_sc_ArrayOps$ArrayIterator__O__($thiz, xs) {
      $thiz.sc_ArrayOps$ArrayIterator__f_xs = xs;
      $thiz.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
      var xs$1 = $thiz.sc_ArrayOps$ArrayIterator__f_xs;
      $thiz.sc_ArrayOps$ArrayIterator__f_len = $m_jl_reflect_Array$().getLength__O__I(xs$1);
      return $thiz;
    }
    /** @constructor */
    function $c_sc_ArrayOps$ArrayIterator() {
      this.sc_ArrayOps$ArrayIterator__f_xs = null;
      this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
      this.sc_ArrayOps$ArrayIterator__f_len = 0;
    }
    $c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
    $c_sc_ArrayOps$ArrayIterator.prototype.constructor = $c_sc_ArrayOps$ArrayIterator;
    /** @constructor */
    function $h_sc_ArrayOps$ArrayIterator() {
    }
    $h_sc_ArrayOps$ArrayIterator.prototype = $c_sc_ArrayOps$ArrayIterator.prototype;
    $c_sc_ArrayOps$ArrayIterator.prototype.knownSize__I = (function() {
      return ((this.sc_ArrayOps$ArrayIterator__f_len - this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
    });
    $c_sc_ArrayOps$ArrayIterator.prototype.hasNext__Z = (function() {
      return (this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos < this.sc_ArrayOps$ArrayIterator__f_len);
    });
    $c_sc_ArrayOps$ArrayIterator.prototype.next__O = (function() {
      var $x_1 = this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos;
      var xs = this.sc_ArrayOps$ArrayIterator__f_xs;
      if (($x_1 >= $m_jl_reflect_Array$().getLength__O__I(xs))) {
        $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
      }
      var r = $m_sr_ScalaRunTime$().array_apply__O__I__O(this.sc_ArrayOps$ArrayIterator__f_xs, this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
      this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
      return r;
    });
    $c_sc_ArrayOps$ArrayIterator.prototype.drop__I__sc_Iterator = (function(n) {
      if ((n > 0)) {
        var newPos = ((this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos + n) | 0);
        if ((newPos < 0)) {
          var $x_1 = this.sc_ArrayOps$ArrayIterator__f_len;
        } else {
          var a = this.sc_ArrayOps$ArrayIterator__f_len;
          var $x_1 = ((a < newPos) ? a : newPos);
        }
        this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = $x_1;
      }
      return this;
    });
    new $TypeData().initClass($c_sc_ArrayOps$ArrayIterator, "scala.collection.ArrayOps$ArrayIterator", ({
      sc_ArrayOps$ArrayIterator: 1,
      sc_AbstractIterator: 1,
      sc_Iterator: 1,
      sc_IterableOnce: 1,
      sc_IterableOnceOps: 1,
      Ljava_io_Serializable: 1
    }));
    function $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I($thiz, value) {
      return ((value < 0) ? 0 : ((value > $thiz.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder) ? $thiz.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder : value));
    }
    /** @constructor */
    function $c_sc_IndexedSeqView$IndexedSeqViewIterator(self) {
      this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self = null;
      this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = 0;
      this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = 0;
      this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self = self;
      this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = 0;
      this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = $n(self).length__I();
    }
    $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
    $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
    $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype;
    $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.knownSize__I = (function() {
      return this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder;
    });
    $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.hasNext__Z = (function() {
      return (this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0);
    });
    $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.next__O = (function() {
      if ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0)) {
        var r = $n(this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self).apply__I__O(this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current);
        this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = ((1 + this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current) | 0);
        this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = (((-1) + this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder) | 0);
        return r;
      } else {
        return $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
      }
    });
    $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.drop__I__sc_Iterator = (function(n) {
      if ((n > 0)) {
        this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current + n) | 0);
        var b = ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder - n) | 0);
        this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = ((b < 0) ? 0 : b);
      }
      return this;
    });
    $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.sliceIterator__I__I__sc_Iterator = (function(from, until) {
      var formatFrom = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, from);
      var formatUntil = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, until);
      var b = ((formatUntil - formatFrom) | 0);
      this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = ((b < 0) ? 0 : b);
      this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current + formatFrom) | 0);
      return this;
    });
    new $TypeData().initClass($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
      sc_IndexedSeqView$IndexedSeqViewIterator: 1,
      sc_AbstractIterator: 1,
      sc_Iterator: 1,
      sc_IterableOnce: 1,
      sc_IterableOnceOps: 1,
      Ljava_io_Serializable: 1
    }));
    function $f_sc_MapOps__applyOrElse__O__F1__O($thiz, x, default$1) {
      return $thiz.getOrElse__O__F0__O(x, new $c_sjsr_AnonFunction0((() => $n(default$1).apply__O__O(x))));
    }
    function $f_sc_MapOps__foreachEntry__F2__V($thiz, f) {
      var it = $thiz.iterator__sc_Iterator();
      while ($n(it).hasNext__Z()) {
        var next = $as_T2($n(it).next__O());
        $n(f).apply__O__O__O($n(next).T2__f__1, $n(next).T2__f__2);
      }
    }
    function $f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, sb, start, sep, end) {
      var this$1 = $n($thiz.iterator__sc_Iterator());
      var f = new $c_sjsr_AnonFunction1(((x0$1$2$2) => {
        var x0$1$2 = $as_T2(x0$1$2$2);
        if ((x0$1$2 !== null)) {
          var k = $n(x0$1$2).T2__f__1;
          var v = $n(x0$1$2).T2__f__2;
          return ((k + " -> ") + v);
        } else {
          throw new $c_s_MatchError(x0$1$2);
        }
      }));
      var this$2 = new $c_sc_Iterator$$anon$9(this$1, f);
      return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this$2, sb, start, sep, end);
    }
    function $p_sci_ArraySeq$__emptyImpl$lzycompute__sci_ArraySeq$ofRef($thiz) {
      if ((!$thiz.sci_ArraySeq$__f_bitmap$0)) {
        $thiz.sci_ArraySeq$__f_emptyImpl = new $c_sci_ArraySeq$ofRef(new $ac_O(0));
        $thiz.sci_ArraySeq$__f_bitmap$0 = true;
      }
      return $thiz.sci_ArraySeq$__f_emptyImpl;
    }
    function $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($thiz) {
      return ((!$thiz.sci_ArraySeq$__f_bitmap$0) ? $p_sci_ArraySeq$__emptyImpl$lzycompute__sci_ArraySeq$ofRef($thiz) : $thiz.sci_ArraySeq$__f_emptyImpl);
    }
    /** @constructor */
    function $c_sci_ArraySeq$() {
      this.sci_ArraySeq$__f_emptyImpl = null;
      this.sci_ArraySeq$__f_untagged = null;
      this.sci_ArraySeq$__f_bitmap$0 = false;
      $n_sci_ArraySeq$ = this;
      this.sci_ArraySeq$__f_untagged = new $c_sc_ClassTagSeqFactory$AnySeqDelegate(this);
    }
    $c_sci_ArraySeq$.prototype = new $h_O();
    $c_sci_ArraySeq$.prototype.constructor = $c_sci_ArraySeq$;
    $c_sci_ArraySeq$.prototype;
    $c_sci_ArraySeq$.prototype.from__sc_IterableOnce__s_reflect_ClassTag__sci_ArraySeq = (function(it, tag) {
      if ((it instanceof $c_sci_ArraySeq)) {
        var x2 = $as_sci_ArraySeq(it);
        return x2;
      } else {
        return this.unsafeWrapArray__O__sci_ArraySeq($m_s_Array$().from__sc_IterableOnce__s_reflect_ClassTag__O(it, tag));
      }
    });
    $c_sci_ArraySeq$.prototype.unsafeWrapArray__O__sci_ArraySeq = (function(x) {
      if ((x === null)) {
        return null;
      } else if ((x instanceof $ac_O)) {
        var x3 = $asArrayOf_O(x, 1);
        return new $c_sci_ArraySeq$ofRef(x3);
      } else if ((x instanceof $ac_I)) {
        var x4 = $asArrayOf_I(x, 1);
        return new $c_sci_ArraySeq$ofInt(x4);
      } else if ((x instanceof $ac_D)) {
        var x5 = $asArrayOf_D(x, 1);
        return new $c_sci_ArraySeq$ofDouble(x5);
      } else if ((x instanceof $ac_J)) {
        var x6 = $asArrayOf_J(x, 1);
        return new $c_sci_ArraySeq$ofLong(x6);
      } else if ((x instanceof $ac_F)) {
        var x7 = $asArrayOf_F(x, 1);
        return new $c_sci_ArraySeq$ofFloat(x7);
      } else if ((x instanceof $ac_C)) {
        var x8 = $asArrayOf_C(x, 1);
        return new $c_sci_ArraySeq$ofChar(x8);
      } else if ((x instanceof $ac_B)) {
        var x9 = $asArrayOf_B(x, 1);
        return new $c_sci_ArraySeq$ofByte(x9);
      } else if ((x instanceof $ac_S)) {
        var x10 = $asArrayOf_S(x, 1);
        return new $c_sci_ArraySeq$ofShort(x10);
      } else if ((x instanceof $ac_Z)) {
        var x11 = $asArrayOf_Z(x, 1);
        return new $c_sci_ArraySeq$ofBoolean(x11);
      } else if ($isArrayOf_jl_Void(x, 1)) {
        var x12 = $asArrayOf_jl_Void(x, 1);
        return new $c_sci_ArraySeq$ofUnit(x12);
      } else {
        throw new $c_s_MatchError(x);
      }
    });
    $c_sci_ArraySeq$.prototype.from__sc_IterableOnce__O__O = (function(it, evidence$5) {
      return this.from__sc_IterableOnce__s_reflect_ClassTag__sci_ArraySeq(it, $as_s_reflect_ClassTag(evidence$5));
    });
    new $TypeData().initClass($c_sci_ArraySeq$, "scala.collection.immutable.ArraySeq$", ({
      sci_ArraySeq$: 1,
      sc_StrictOptimizedClassTagSeqFactory: 1,
      sc_ClassTagSeqFactory: 1,
      sc_ClassTagIterableFactory: 1,
      sc_EvidenceIterableFactory: 1,
      Ljava_io_Serializable: 1
    }));
    var $n_sci_ArraySeq$;
    function $m_sci_ArraySeq$() {
      if ((!$n_sci_ArraySeq$)) {
        $n_sci_ArraySeq$ = new $c_sci_ArraySeq$();
      }
      return $n_sci_ArraySeq$;
    }
    /** @constructor */
    function $c_sci_HashMapBuilder$$anon$1(outer, x2$1) {
      this.sci_ChampBaseIterator__f_currentValueCursor = 0;
      this.sci_ChampBaseIterator__f_currentValueLength = 0;
      this.sci_ChampBaseIterator__f_currentValueNode = null;
      this.sci_ChampBaseIterator__f_currentStackLevel = 0;
      this.sci_ChampBaseIterator__f_nodeCursorsAndLengths = null;
      this.sci_ChampBaseIterator__f_nodes = null;
      $ct_sci_ChampBaseIterator__sci_Node__(this, $n(x2$1).sci_HashMap__f_rootNode);
      while (this.hasNext__Z()) {
        var originalHash = $n(this.sci_ChampBaseIterator__f_currentValueNode).getHash__I__I(this.sci_ChampBaseIterator__f_currentValueCursor);
        $n(outer).update__sci_MapNode__O__O__I__I__I__V($n(outer).sci_HashMapBuilder__f_scala$collection$immutable$HashMapBuilder$$rootNode, $n($as_sci_MapNode(this.sci_ChampBaseIterator__f_currentValueNode)).getKey__I__O(this.sci_ChampBaseIterator__f_currentValueCursor), $n($as_sci_MapNode(this.sci_ChampBaseIterator__f_currentValueNode)).getValue__I__O(this.sci_ChampBaseIterator__f_currentValueCursor), originalHash, $m_sc_Hashing$().improve__I__I(originalHash), 0);
        this.sci_ChampBaseIterator__f_currentValueCursor = ((1 + this.sci_ChampBaseIterator__f_currentValueCursor) | 0);
      }
    }
    $c_sci_HashMapBuilder$$anon$1.prototype = new $h_sci_ChampBaseIterator();
    $c_sci_HashMapBuilder$$anon$1.prototype.constructor = $c_sci_HashMapBuilder$$anon$1;
    $c_sci_HashMapBuilder$$anon$1.prototype;
    $c_sci_HashMapBuilder$$anon$1.prototype.next__E = (function() {
      $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
      throw $ct_jl_ClassCastException__(new $c_jl_ClassCastException());
    });
    $c_sci_HashMapBuilder$$anon$1.prototype.next__O = (function() {
      this.next__E();
    });
    new $TypeData().initClass($c_sci_HashMapBuilder$$anon$1, "scala.collection.immutable.HashMapBuilder$$anon$1", ({
      sci_HashMapBuilder$$anon$1: 1,
      sci_ChampBaseIterator: 1,
      sc_AbstractIterator: 1,
      sc_Iterator: 1,
      sc_IterableOnce: 1,
      sc_IterableOnceOps: 1
    }));
    function $is_sci_Iterable(obj) {
      return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_Iterable)));
    }
    function $as_sci_Iterable(obj) {
      return (($is_sci_Iterable(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Iterable"));
    }
    /** @constructor */
    function $c_sci_Map$Map2$$anon$1(outer) {
      this.sci_Map$Map2$Map2Iterator__f_i = 0;
      this.sci_Map$Map2$Map2Iterator__f_$outer = null;
      $ct_sci_Map$Map2$Map2Iterator__sci_Map$Map2__(this, outer);
    }
    $c_sci_Map$Map2$$anon$1.prototype = new $h_sci_Map$Map2$Map2Iterator();
    $c_sci_Map$Map2$$anon$1.prototype.constructor = $c_sci_Map$Map2$$anon$1;
    $c_sci_Map$Map2$$anon$1.prototype;
    new $TypeData().initClass($c_sci_Map$Map2$$anon$1, "scala.collection.immutable.Map$Map2$$anon$1", ({
      sci_Map$Map2$$anon$1: 1,
      sci_Map$Map2$Map2Iterator: 1,
      sc_AbstractIterator: 1,
      sc_Iterator: 1,
      sc_IterableOnce: 1,
      sc_IterableOnceOps: 1
    }));
    /** @constructor */
    function $c_sci_Map$Map3$$anon$4(outer) {
      this.sci_Map$Map3$Map3Iterator__f_i = 0;
      this.sci_Map$Map3$Map3Iterator__f_$outer = null;
      $ct_sci_Map$Map3$Map3Iterator__sci_Map$Map3__(this, outer);
    }
    $c_sci_Map$Map3$$anon$4.prototype = new $h_sci_Map$Map3$Map3Iterator();
    $c_sci_Map$Map3$$anon$4.prototype.constructor = $c_sci_Map$Map3$$anon$4;
    $c_sci_Map$Map3$$anon$4.prototype;
    new $TypeData().initClass($c_sci_Map$Map3$$anon$4, "scala.collection.immutable.Map$Map3$$anon$4", ({
      sci_Map$Map3$$anon$4: 1,
      sci_Map$Map3$Map3Iterator: 1,
      sc_AbstractIterator: 1,
      sc_Iterator: 1,
      sc_IterableOnce: 1,
      sc_IterableOnceOps: 1
    }));
    /** @constructor */
    function $c_sci_Map$Map4$$anon$7(outer) {
      this.sci_Map$Map4$Map4Iterator__f_i = 0;
      this.sci_Map$Map4$Map4Iterator__f_$outer = null;
      $ct_sci_Map$Map4$Map4Iterator__sci_Map$Map4__(this, outer);
    }
    $c_sci_Map$Map4$$anon$7.prototype = new $h_sci_Map$Map4$Map4Iterator();
    $c_sci_Map$Map4$$anon$7.prototype.constructor = $c_sci_Map$Map4$$anon$7;
    $c_sci_Map$Map4$$anon$7.prototype;
    new $TypeData().initClass($c_sci_Map$Map4$$anon$7, "scala.collection.immutable.Map$Map4$$anon$7", ({
      sci_Map$Map4$$anon$7: 1,
      sci_Map$Map4$Map4Iterator: 1,
      sc_AbstractIterator: 1,
      sc_Iterator: 1,
      sc_IterableOnce: 1,
      sc_IterableOnceOps: 1
    }));
    /** @constructor */
    function $c_sci_MapKeyValueTupleHashIterator(rootNode) {
      this.sci_ChampBaseReverseIterator__f_currentValueCursor = 0;
      this.sci_ChampBaseReverseIterator__f_currentValueNode = null;
      this.sci_ChampBaseReverseIterator__f_currentStackLevel = 0;
      this.sci_ChampBaseReverseIterator__f_nodeIndex = null;
      this.sci_ChampBaseReverseIterator__f_nodeStack = null;
      this.sci_MapKeyValueTupleHashIterator__f_hash = 0;
      this.sci_MapKeyValueTupleHashIterator__f_value = null;
      $ct_sci_ChampBaseReverseIterator__sci_Node__(this, rootNode);
      this.sci_MapKeyValueTupleHashIterator__f_hash = 0;
    }
    $c_sci_MapKeyValueTupleHashIterator.prototype = new $h_sci_ChampBaseReverseIterator();
    $c_sci_MapKeyValueTupleHashIterator.prototype.constructor = $c_sci_MapKeyValueTupleHashIterator;
    $c_sci_MapKeyValueTupleHashIterator.prototype;
    $c_sci_MapKeyValueTupleHashIterator.prototype.hashCode__I = (function() {
      var $x_2 = $m_s_util_hashing_MurmurHash3$();
      var $x_1 = this.sci_MapKeyValueTupleHashIterator__f_hash;
      var x = this.sci_MapKeyValueTupleHashIterator__f_value;
      return $x_2.tuple2Hash__I__I__I__I($x_1, $m_sr_Statics$().anyHash__O__I(x), (-889275714));
    });
    $c_sci_MapKeyValueTupleHashIterator.prototype.next__sci_MapKeyValueTupleHashIterator = (function() {
      if ((!this.hasNext__Z())) {
        $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
      }
      this.sci_MapKeyValueTupleHashIterator__f_hash = $n(this.sci_ChampBaseReverseIterator__f_currentValueNode).getHash__I__I(this.sci_ChampBaseReverseIterator__f_currentValueCursor);
      this.sci_MapKeyValueTupleHashIterator__f_value = $n($as_sci_MapNode(this.sci_ChampBaseReverseIterator__f_currentValueNode)).getValue__I__O(this.sci_ChampBaseReverseIterator__f_currentValueCursor);
      this.sci_ChampBaseReverseIterator__f_currentValueCursor = (((-1) + this.sci_ChampBaseReverseIterator__f_currentValueCursor) | 0);
      return this;
    });
    $c_sci_MapKeyValueTupleHashIterator.prototype.next__O = (function() {
      return this.next__sci_MapKeyValueTupleHashIterator();
    });
    new $TypeData().initClass($c_sci_MapKeyValueTupleHashIterator, "scala.collection.immutable.MapKeyValueTupleHashIterator", ({
      sci_MapKeyValueTupleHashIterator: 1,
      sci_ChampBaseReverseIterator: 1,
      sc_AbstractIterator: 1,
      sc_Iterator: 1,
      sc_IterableOnce: 1,
      sc_IterableOnceOps: 1
    }));
    /** @constructor */
    function $c_sci_MapKeyValueTupleIterator(rootNode) {
      this.sci_ChampBaseIterator__f_currentValueCursor = 0;
      this.sci_ChampBaseIterator__f_currentValueLength = 0;
      this.sci_ChampBaseIterator__f_currentValueNode = null;
      this.sci_ChampBaseIterator__f_currentStackLevel = 0;
      this.sci_ChampBaseIterator__f_nodeCursorsAndLengths = null;
      this.sci_ChampBaseIterator__f_nodes = null;
      $ct_sci_ChampBaseIterator__sci_Node__(this, rootNode);
    }
    $c_sci_MapKeyValueTupleIterator.prototype = new $h_sci_ChampBaseIterator();
    $c_sci_MapKeyValueTupleIterator.prototype.constructor = $c_sci_MapKeyValueTupleIterator;
    $c_sci_MapKeyValueTupleIterator.prototype;
    $c_sci_MapKeyValueTupleIterator.prototype.next__T2 = (function() {
      if ((!this.hasNext__Z())) {
        $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
      }
      var payload = $n($as_sci_MapNode(this.sci_ChampBaseIterator__f_currentValueNode)).getPayload__I__T2(this.sci_ChampBaseIterator__f_currentValueCursor);
      this.sci_ChampBaseIterator__f_currentValueCursor = ((1 + this.sci_ChampBaseIterator__f_currentValueCursor) | 0);
      return payload;
    });
    $c_sci_MapKeyValueTupleIterator.prototype.next__O = (function() {
      return this.next__T2();
    });
    new $TypeData().initClass($c_sci_MapKeyValueTupleIterator, "scala.collection.immutable.MapKeyValueTupleIterator", ({
      sci_MapKeyValueTupleIterator: 1,
      sci_ChampBaseIterator: 1,
      sc_AbstractIterator: 1,
      sc_Iterator: 1,
      sc_IterableOnce: 1,
      sc_IterableOnceOps: 1
    }));
    function $p_sci_NewVectorIterator__advanceSlice__V($thiz) {
      if (($thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 <= $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1)) {
        $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
      }
      $thiz.sci_NewVectorIterator__f_sliceIdx = ((1 + $thiz.sci_NewVectorIterator__f_sliceIdx) | 0);
      var slice = $n($thiz.sci_NewVectorIterator__f_v).vectorSlice__I__AO($thiz.sci_NewVectorIterator__f_sliceIdx);
      while (($n(slice).u.length === 0)) {
        $thiz.sci_NewVectorIterator__f_sliceIdx = ((1 + $thiz.sci_NewVectorIterator__f_sliceIdx) | 0);
        slice = $n($thiz.sci_NewVectorIterator__f_v).vectorSlice__I__AO($thiz.sci_NewVectorIterator__f_sliceIdx);
      }
      $thiz.sci_NewVectorIterator__f_sliceStart = $thiz.sci_NewVectorIterator__f_sliceEnd;
      var count = $thiz.sci_NewVectorIterator__f_sliceCount;
      var idx = $thiz.sci_NewVectorIterator__f_sliceIdx;
      var c = ((count / 2) | 0);
      var a = ((idx - c) | 0);
      $thiz.sci_NewVectorIterator__f_sliceDim = ((((1 + c) | 0) - ((a < 0) ? ((-a) | 0) : a)) | 0);
      var x1 = $thiz.sci_NewVectorIterator__f_sliceDim;
      switch (x1) {
        case 1: {
          $thiz.sci_NewVectorIterator__f_a1 = slice;
          break;
        }
        case 2: {
          $thiz.sci_NewVectorIterator__f_a2 = $asArrayOf_O(slice, 2);
          break;
        }
        case 3: {
          $thiz.sci_NewVectorIterator__f_a3 = $asArrayOf_O(slice, 3);
          break;
        }
        case 4: {
          $thiz.sci_NewVectorIterator__f_a4 = $asArrayOf_O(slice, 4);
          break;
        }
        case 5: {
          $thiz.sci_NewVectorIterator__f_a5 = $asArrayOf_O(slice, 5);
          break;
        }
        case 6: {
          $thiz.sci_NewVectorIterator__f_a6 = $asArrayOf_O(slice, 6);
          break;
        }
        default: {
          throw new $c_s_MatchError(x1);
        }
      }
      $thiz.sci_NewVectorIterator__f_sliceEnd = (($thiz.sci_NewVectorIterator__f_sliceStart + Math.imul($n(slice).u.length, (1 << Math.imul(5, (((-1) + $thiz.sci_NewVectorIterator__f_sliceDim) | 0))))) | 0);
      if (($thiz.sci_NewVectorIterator__f_sliceEnd > $thiz.sci_NewVectorIterator__f_totalLength)) {
        $thiz.sci_NewVectorIterator__f_sliceEnd = $thiz.sci_NewVectorIterator__f_totalLength;
      }
      if (($thiz.sci_NewVectorIterator__f_sliceDim > 1)) {
        $thiz.sci_NewVectorIterator__f_oldPos = (((-1) + (1 << Math.imul(5, $thiz.sci_NewVectorIterator__f_sliceDim))) | 0);
      }
    }
    function $p_sci_NewVectorIterator__advance__V($thiz) {
      var pos = (((($thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 - $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1) | 0) + $thiz.sci_NewVectorIterator__f_totalLength) | 0);
      if ((pos === $thiz.sci_NewVectorIterator__f_sliceEnd)) {
        $p_sci_NewVectorIterator__advanceSlice__V($thiz);
      }
      if (($thiz.sci_NewVectorIterator__f_sliceDim > 1)) {
        var io = ((pos - $thiz.sci_NewVectorIterator__f_sliceStart) | 0);
        var xor = ($thiz.sci_NewVectorIterator__f_oldPos ^ io);
        $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, xor);
        $thiz.sci_NewVectorIterator__f_oldPos = io;
      }
      $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = (($thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 - $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1) | 0);
      var a = $n($thiz.sci_NewVectorIterator__f_a1).u.length;
      var b = $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1;
      $thiz.sci_NewVectorIterator__f_a1len = ((a < b) ? a : b);
      $thiz.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = 0;
    }
    function $p_sci_NewVectorIterator__advanceA__I__I__V($thiz, io, xor) {
      if ((xor < 1024)) {
        $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get((31 & ((io >>> 5) | 0)));
      } else if ((xor < 32768)) {
        $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get((31 & ((io >>> 10) | 0)));
        $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get(0);
      } else if ((xor < 1048576)) {
        $thiz.sci_NewVectorIterator__f_a3 = $n($thiz.sci_NewVectorIterator__f_a4).get((31 & ((io >>> 15) | 0)));
        $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get(0);
        $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get(0);
      } else if ((xor < 33554432)) {
        $thiz.sci_NewVectorIterator__f_a4 = $n($thiz.sci_NewVectorIterator__f_a5).get((31 & ((io >>> 20) | 0)));
        $thiz.sci_NewVectorIterator__f_a3 = $n($thiz.sci_NewVectorIterator__f_a4).get(0);
        $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get(0);
        $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get(0);
      } else {
        $thiz.sci_NewVectorIterator__f_a5 = $n($thiz.sci_NewVectorIterator__f_a6).get(((io >>> 25) | 0));
        $thiz.sci_NewVectorIterator__f_a4 = $n($thiz.sci_NewVectorIterator__f_a5).get(0);
        $thiz.sci_NewVectorIterator__f_a3 = $n($thiz.sci_NewVectorIterator__f_a4).get(0);
        $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get(0);
        $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get(0);
      }
    }
    function $p_sci_NewVectorIterator__setA__I__I__V($thiz, io, xor) {
      if ((xor < 1024)) {
        $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get((31 & ((io >>> 5) | 0)));
      } else if ((xor < 32768)) {
        $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get((31 & ((io >>> 10) | 0)));
        $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get((31 & ((io >>> 5) | 0)));
      } else if ((xor < 1048576)) {
        $thiz.sci_NewVectorIterator__f_a3 = $n($thiz.sci_NewVectorIterator__f_a4).get((31 & ((io >>> 15) | 0)));
        $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get((31 & ((io >>> 10) | 0)));
        $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get((31 & ((io >>> 5) | 0)));
      } else if ((xor < 33554432)) {
        $thiz.sci_NewVectorIterator__f_a4 = $n($thiz.sci_NewVectorIterator__f_a5).get((31 & ((io >>> 20) | 0)));
        $thiz.sci_NewVectorIterator__f_a3 = $n($thiz.sci_NewVectorIterator__f_a4).get((31 & ((io >>> 15) | 0)));
        $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get((31 & ((io >>> 10) | 0)));
        $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get((31 & ((io >>> 5) | 0)));
      } else {
        $thiz.sci_NewVectorIterator__f_a5 = $n($thiz.sci_NewVectorIterator__f_a6).get(((io >>> 25) | 0));
        $thiz.sci_NewVectorIterator__f_a4 = $n($thiz.sci_NewVectorIterator__f_a5).get((31 & ((io >>> 20) | 0)));
        $thiz.sci_NewVectorIterator__f_a3 = $n($thiz.sci_NewVectorIterator__f_a4).get((31 & ((io >>> 15) | 0)));
        $thiz.sci_NewVectorIterator__f_a2 = $n($thiz.sci_NewVectorIterator__f_a3).get((31 & ((io >>> 10) | 0)));
        $thiz.sci_NewVectorIterator__f_a1 = $n($thiz.sci_NewVectorIterator__f_a2).get((31 & ((io >>> 5) | 0)));
      }
    }
    /** @constructor */
    function $c_sci_NewVectorIterator(v, totalLength, sliceCount) {
      this.sci_NewVectorIterator__f_v = null;
      this.sci_NewVectorIterator__f_totalLength = 0;
      this.sci_NewVectorIterator__f_sliceCount = 0;
      this.sci_NewVectorIterator__f_a1 = null;
      this.sci_NewVectorIterator__f_a2 = null;
      this.sci_NewVectorIterator__f_a3 = null;
      this.sci_NewVectorIterator__f_a4 = null;
      this.sci_NewVectorIterator__f_a5 = null;
      this.sci_NewVectorIterator__f_a6 = null;
      this.sci_NewVectorIterator__f_a1len = 0;
      this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = 0;
      this.sci_NewVectorIterator__f_oldPos = 0;
      this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = 0;
      this.sci_NewVectorIterator__f_sliceIdx = 0;
      this.sci_NewVectorIterator__f_sliceDim = 0;
      this.sci_NewVectorIterator__f_sliceStart = 0;
      this.sci_NewVectorIterator__f_sliceEnd = 0;
      this.sci_NewVectorIterator__f_v = v;
      this.sci_NewVectorIterator__f_totalLength = totalLength;
      this.sci_NewVectorIterator__f_sliceCount = sliceCount;
      this.sci_NewVectorIterator__f_a1 = $n(v).sci_Vector__f_prefix1;
      this.sci_NewVectorIterator__f_a1len = $n(this.sci_NewVectorIterator__f_a1).u.length;
      this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = 0;
      this.sci_NewVectorIterator__f_oldPos = 0;
      this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = this.sci_NewVectorIterator__f_totalLength;
      this.sci_NewVectorIterator__f_sliceIdx = 0;
      this.sci_NewVectorIterator__f_sliceDim = 1;
      this.sci_NewVectorIterator__f_sliceStart = 0;
      this.sci_NewVectorIterator__f_sliceEnd = this.sci_NewVectorIterator__f_a1len;
    }
    $c_sci_NewVectorIterator.prototype = new $h_sc_AbstractIterator();
    $c_sci_NewVectorIterator.prototype.constructor = $c_sci_NewVectorIterator;
    $c_sci_NewVectorIterator.prototype;
    $c_sci_NewVectorIterator.prototype.knownSize__I = (function() {
      return ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 - this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1) | 0);
    });
    $c_sci_NewVectorIterator.prototype.hasNext__Z = (function() {
      return (this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 > this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1);
    });
    $c_sci_NewVectorIterator.prototype.next__O = (function() {
      if ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 === this.sci_NewVectorIterator__f_a1len)) {
        $p_sci_NewVectorIterator__advance__V(this);
      }
      var r = $n(this.sci_NewVectorIterator__f_a1).get(this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1);
      this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = ((1 + this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1) | 0);
      return r;
    });
    $c_sci_NewVectorIterator.prototype.drop__I__sc_Iterator = (function(n) {
      if ((n > 0)) {
        var oldpos = ((((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 - this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1) | 0) + this.sci_NewVectorIterator__f_totalLength) | 0);
        var a = ((oldpos + n) | 0);
        var b = this.sci_NewVectorIterator__f_totalLength;
        var newpos = ((a < b) ? a : b);
        if ((newpos === this.sci_NewVectorIterator__f_totalLength)) {
          this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = 0;
          this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = 0;
          this.sci_NewVectorIterator__f_a1len = 0;
        } else {
          while ((newpos >= this.sci_NewVectorIterator__f_sliceEnd)) {
            $p_sci_NewVectorIterator__advanceSlice__V(this);
          }
          var io = ((newpos - this.sci_NewVectorIterator__f_sliceStart) | 0);
          if ((this.sci_NewVectorIterator__f_sliceDim > 1)) {
            var xor = (this.sci_NewVectorIterator__f_oldPos ^ io);
            $p_sci_NewVectorIterator__setA__I__I__V(this, io, xor);
            this.sci_NewVectorIterator__f_oldPos = io;
          }
          this.sci_NewVectorIterator__f_a1len = $n(this.sci_NewVectorIterator__f_a1).u.length;
          this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = (31 & io);
          this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 = ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 + ((this.sci_NewVectorIterator__f_totalLength - newpos) | 0)) | 0);
          if ((this.sci_NewVectorIterator__f_a1len > this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1)) {
            this.sci_NewVectorIterator__f_a1len = this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1;
          }
        }
      }
      return this;
    });
    $c_sci_NewVectorIterator.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
      var xsLen = $m_jl_reflect_Array$().getLength__O__I(xs);
      var srcLen = ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$len1 - this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1) | 0);
      var x = ((len < srcLen) ? len : srcLen);
      var y = ((xsLen - start) | 0);
      var x$1 = ((x < y) ? x : y);
      var total = ((x$1 > 0) ? x$1 : 0);
      var copied = 0;
      var isBoxed = (xs instanceof $ac_O);
      while ((copied < total)) {
        if ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 === this.sci_NewVectorIterator__f_a1len)) {
          $p_sci_NewVectorIterator__advance__V(this);
        }
        var a = ((total - copied) | 0);
        var b = (($n(this.sci_NewVectorIterator__f_a1).u.length - this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1) | 0);
        var count = ((a < b) ? a : b);
        if (isBoxed) {
          var src = this.sci_NewVectorIterator__f_a1;
          var srcPos = this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1;
          var destPos = ((start + copied) | 0);
          $systemArraycopyFull($n(src), srcPos, $n(xs), destPos, count);
        } else {
          $m_s_Array$().copy__O__I__O__I__I__V(this.sci_NewVectorIterator__f_a1, this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1, xs, ((start + copied) | 0), count);
        }
        this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 = ((this.sci_NewVectorIterator__f_scala$collection$immutable$NewVectorIterator$$i1 + count) | 0);
        copied = ((copied + count) | 0);
      }
      return total;
    });
    new $TypeData().initClass($c_sci_NewVectorIterator, "scala.collection.immutable.NewVectorIterator", ({
      sci_NewVectorIterator: 1,
      sc_AbstractIterator: 1,
      sc_Iterator: 1,
      sc_IterableOnce: 1,
      sc_IterableOnceOps: 1,
      jl_Cloneable: 1
    }));
    /** @constructor */
    function $c_s_reflect_ClassTag$GenericClassTag(runtimeClass) {
      this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass = null;
      this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass = runtimeClass;
    }
    $c_s_reflect_ClassTag$GenericClassTag.prototype = new $h_O();
    $c_s_reflect_ClassTag$GenericClassTag.prototype.constructor = $c_s_reflect_ClassTag$GenericClassTag;
    $c_s_reflect_ClassTag$GenericClassTag.prototype;
    $c_s_reflect_ClassTag$GenericClassTag.prototype.equals__O__Z = (function(x) {
      return $f_s_reflect_ClassTag__equals__O__Z(this, x);
    });
    $c_s_reflect_ClassTag$GenericClassTag.prototype.hashCode__I = (function() {
      var x = this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass;
      return $m_sr_Statics$().anyHash__O__I(x);
    });
    $c_s_reflect_ClassTag$GenericClassTag.prototype.toString__T = (function() {
      return $ps_s_reflect_ClassTag__prettyprint$1__jl_Class__T(this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass);
    });
    $c_s_reflect_ClassTag$GenericClassTag.prototype.runtimeClass__jl_Class = (function() {
      return this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass;
    });
    $c_s_reflect_ClassTag$GenericClassTag.prototype.newArray__I__O = (function(len) {
      var componentType = this.s_reflect_ClassTag$GenericClassTag__f_runtimeClass;
      return $n(componentType).data.newArray(len);
    });
    new $TypeData().initClass($c_s_reflect_ClassTag$GenericClassTag, "scala.reflect.ClassTag$GenericClassTag", ({
      s_reflect_ClassTag$GenericClassTag: 1,
      s_reflect_ClassTag: 1,
      s_reflect_ClassManifestDeprecatedApis: 1,
      s_reflect_OptManifest: 1,
      Ljava_io_Serializable: 1,
      s_Equals: 1
    }));
    /** @constructor */
    function $c_Ljava_io_PrintStream() {
    }
    $c_Ljava_io_PrintStream.prototype = new $h_Ljava_io_FilterOutputStream();
    $c_Ljava_io_PrintStream.prototype.constructor = $c_Ljava_io_PrintStream;
    /** @constructor */
    function $h_Ljava_io_PrintStream() {
    }
    $h_Ljava_io_PrintStream.prototype = $c_Ljava_io_PrintStream.prototype;
    $c_Ljava_io_PrintStream.prototype.println__T__V = (function(s) {
      this.print__T__V(s);
      this.java$lang$JSConsoleBasedPrintStream$$printString__T__V("\n");
    });
    function $as_Ljava_io_PrintStream(obj) {
      return (((obj instanceof $c_Ljava_io_PrintStream) || (obj === null)) ? obj : $throwClassCastException(obj, "java.io.PrintStream"));
    }
    /** @constructor */
    function $c_sc_ArrayOps$ArrayIterator$mcB$sp(xs$mcB$sp) {
      this.sc_ArrayOps$ArrayIterator__f_xs = null;
      this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
      this.sc_ArrayOps$ArrayIterator__f_len = 0;
      this.sc_ArrayOps$ArrayIterator$mcB$sp__f_xs$mcB$sp = null;
      this.sc_ArrayOps$ArrayIterator$mcB$sp__f_xs$mcB$sp = xs$mcB$sp;
      $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcB$sp);
    }
    $c_sc_ArrayOps$ArrayIterator$mcB$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
    $c_sc_ArrayOps$ArrayIterator$mcB$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcB$sp;
    $c_sc_ArrayOps$ArrayIterator$mcB$sp.prototype;
    $c_sc_ArrayOps$ArrayIterator$mcB$sp.prototype.next$mcB$sp__B = (function() {
      if ((this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos >= $n(this.sc_ArrayOps$ArrayIterator$mcB$sp__f_xs$mcB$sp).u.length)) {
        $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
      }
      var r = $n(this.sc_ArrayOps$ArrayIterator$mcB$sp__f_xs$mcB$sp).get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
      this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
      return r;
    });
    $c_sc_ArrayOps$ArrayIterator$mcB$sp.prototype.next__O = (function() {
      return this.next$mcB$sp__B();
    });
    new $TypeData().initClass($c_sc_ArrayOps$ArrayIterator$mcB$sp, "scala.collection.ArrayOps$ArrayIterator$mcB$sp", ({
      sc_ArrayOps$ArrayIterator$mcB$sp: 1,
      sc_ArrayOps$ArrayIterator: 1,
      sc_AbstractIterator: 1,
      sc_Iterator: 1,
      sc_IterableOnce: 1,
      sc_IterableOnceOps: 1,
      Ljava_io_Serializable: 1
    }));
    /** @constructor */
    function $c_sc_ArrayOps$ArrayIterator$mcC$sp(xs$mcC$sp) {
      this.sc_ArrayOps$ArrayIterator__f_xs = null;
      this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
      this.sc_ArrayOps$ArrayIterator__f_len = 0;
      this.sc_ArrayOps$ArrayIterator$mcC$sp__f_xs$mcC$sp = null;
      this.sc_ArrayOps$ArrayIterator$mcC$sp__f_xs$mcC$sp = xs$mcC$sp;
      $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcC$sp);
    }
    $c_sc_ArrayOps$ArrayIterator$mcC$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
    $c_sc_ArrayOps$ArrayIterator$mcC$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcC$sp;
    $c_sc_ArrayOps$ArrayIterator$mcC$sp.prototype;
    $c_sc_ArrayOps$ArrayIterator$mcC$sp.prototype.next$mcC$sp__C = (function() {
      if ((this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos >= $n(this.sc_ArrayOps$ArrayIterator$mcC$sp__f_xs$mcC$sp).u.length)) {
        $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
      }
      var r = $n(this.sc_ArrayOps$ArrayIterator$mcC$sp__f_xs$mcC$sp).get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
      this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
      return r;
    });
    $c_sc_ArrayOps$ArrayIterator$mcC$sp.prototype.next__O = (function() {
      return $bC(this.next$mcC$sp__C());
    });
    new $TypeData().initClass($c_sc_ArrayOps$ArrayIterator$mcC$sp, "scala.collection.ArrayOps$ArrayIterator$mcC$sp", ({
      sc_ArrayOps$ArrayIterator$mcC$sp: 1,
      sc_ArrayOps$ArrayIterator: 1,
      sc_AbstractIterator: 1,
      sc_Iterator: 1,
      sc_IterableOnce: 1,
      sc_IterableOnceOps: 1,
      Ljava_io_Serializable: 1
    }));
    /** @constructor */
    function $c_sc_ArrayOps$ArrayIterator$mcD$sp(xs$mcD$sp) {
      this.sc_ArrayOps$ArrayIterator__f_xs = null;
      this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
      this.sc_ArrayOps$ArrayIterator__f_len = 0;
      this.sc_ArrayOps$ArrayIterator$mcD$sp__f_xs$mcD$sp = null;
      this.sc_ArrayOps$ArrayIterator$mcD$sp__f_xs$mcD$sp = xs$mcD$sp;
      $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcD$sp);
    }
    $c_sc_ArrayOps$ArrayIterator$mcD$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
    $c_sc_ArrayOps$ArrayIterator$mcD$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcD$sp;
    $c_sc_ArrayOps$ArrayIterator$mcD$sp.prototype;
    $c_sc_ArrayOps$ArrayIterator$mcD$sp.prototype.next$mcD$sp__D = (function() {
      if ((this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos >= $n(this.sc_ArrayOps$ArrayIterator$mcD$sp__f_xs$mcD$sp).u.length)) {
        $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
      }
      var r = $n(this.sc_ArrayOps$ArrayIterator$mcD$sp__f_xs$mcD$sp).get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
      this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
      return r;
    });
    $c_sc_ArrayOps$ArrayIterator$mcD$sp.prototype.next__O = (function() {
      return this.next$mcD$sp__D();
    });
    new $TypeData().initClass($c_sc_ArrayOps$ArrayIterator$mcD$sp, "scala.collection.ArrayOps$ArrayIterator$mcD$sp", ({
      sc_ArrayOps$ArrayIterator$mcD$sp: 1,
      sc_ArrayOps$ArrayIterator: 1,
      sc_AbstractIterator: 1,
      sc_Iterator: 1,
      sc_IterableOnce: 1,
      sc_IterableOnceOps: 1,
      Ljava_io_Serializable: 1
    }));
    /** @constructor */
    function $c_sc_ArrayOps$ArrayIterator$mcF$sp(xs$mcF$sp) {
      this.sc_ArrayOps$ArrayIterator__f_xs = null;
      this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
      this.sc_ArrayOps$ArrayIterator__f_len = 0;
      this.sc_ArrayOps$ArrayIterator$mcF$sp__f_xs$mcF$sp = null;
      this.sc_ArrayOps$ArrayIterator$mcF$sp__f_xs$mcF$sp = xs$mcF$sp;
      $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcF$sp);
    }
    $c_sc_ArrayOps$ArrayIterator$mcF$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
    $c_sc_ArrayOps$ArrayIterator$mcF$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcF$sp;
    $c_sc_ArrayOps$ArrayIterator$mcF$sp.prototype;
    $c_sc_ArrayOps$ArrayIterator$mcF$sp.prototype.next$mcF$sp__F = (function() {
      if ((this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos >= $n(this.sc_ArrayOps$ArrayIterator$mcF$sp__f_xs$mcF$sp).u.length)) {
        $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
      }
      var r = $n(this.sc_ArrayOps$ArrayIterator$mcF$sp__f_xs$mcF$sp).get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
      this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
      return r;
    });
    $c_sc_ArrayOps$ArrayIterator$mcF$sp.prototype.next__O = (function() {
      return this.next$mcF$sp__F();
    });
    new $TypeData().initClass($c_sc_ArrayOps$ArrayIterator$mcF$sp, "scala.collection.ArrayOps$ArrayIterator$mcF$sp", ({
      sc_ArrayOps$ArrayIterator$mcF$sp: 1,
      sc_ArrayOps$ArrayIterator: 1,
      sc_AbstractIterator: 1,
      sc_Iterator: 1,
      sc_IterableOnce: 1,
      sc_IterableOnceOps: 1,
      Ljava_io_Serializable: 1
    }));
    /** @constructor */
    function $c_sc_ArrayOps$ArrayIterator$mcI$sp(xs$mcI$sp) {
      this.sc_ArrayOps$ArrayIterator__f_xs = null;
      this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
      this.sc_ArrayOps$ArrayIterator__f_len = 0;
      this.sc_ArrayOps$ArrayIterator$mcI$sp__f_xs$mcI$sp = null;
      this.sc_ArrayOps$ArrayIterator$mcI$sp__f_xs$mcI$sp = xs$mcI$sp;
      $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcI$sp);
    }
    $c_sc_ArrayOps$ArrayIterator$mcI$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
    $c_sc_ArrayOps$ArrayIterator$mcI$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcI$sp;
    $c_sc_ArrayOps$ArrayIterator$mcI$sp.prototype;
    $c_sc_ArrayOps$ArrayIterator$mcI$sp.prototype.next$mcI$sp__I = (function() {
      if ((this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos >= $n(this.sc_ArrayOps$ArrayIterator$mcI$sp__f_xs$mcI$sp).u.length)) {
        $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
      }
      var r = $n(this.sc_ArrayOps$ArrayIterator$mcI$sp__f_xs$mcI$sp).get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
      this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
      return r;
    });
    $c_sc_ArrayOps$ArrayIterator$mcI$sp.prototype.next__O = (function() {
      return this.next$mcI$sp__I();
    });
    new $TypeData().initClass($c_sc_ArrayOps$ArrayIterator$mcI$sp, "scala.collection.ArrayOps$ArrayIterator$mcI$sp", ({
      sc_ArrayOps$ArrayIterator$mcI$sp: 1,
      sc_ArrayOps$ArrayIterator: 1,
      sc_AbstractIterator: 1,
      sc_Iterator: 1,
      sc_IterableOnce: 1,
      sc_IterableOnceOps: 1,
      Ljava_io_Serializable: 1
    }));
    /** @constructor */
    function $c_sc_ArrayOps$ArrayIterator$mcJ$sp(xs$mcJ$sp) {
      this.sc_ArrayOps$ArrayIterator__f_xs = null;
      this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
      this.sc_ArrayOps$ArrayIterator__f_len = 0;
      this.sc_ArrayOps$ArrayIterator$mcJ$sp__f_xs$mcJ$sp = null;
      this.sc_ArrayOps$ArrayIterator$mcJ$sp__f_xs$mcJ$sp = xs$mcJ$sp;
      $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcJ$sp);
    }
    $c_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
    $c_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcJ$sp;
    $c_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype;
    $c_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype.next$mcJ$sp__J = (function() {
      if ((this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos >= $n(this.sc_ArrayOps$ArrayIterator$mcJ$sp__f_xs$mcJ$sp).u.length)) {
        $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
      }
      var t = $n(this.sc_ArrayOps$ArrayIterator$mcJ$sp__f_xs$mcJ$sp).get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
      var lo = t.RTLong__f_lo;
      var hi = t.RTLong__f_hi;
      this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
      return new $c_RTLong(lo, hi);
    });
    $c_sc_ArrayOps$ArrayIterator$mcJ$sp.prototype.next__O = (function() {
      return this.next$mcJ$sp__J();
    });
    new $TypeData().initClass($c_sc_ArrayOps$ArrayIterator$mcJ$sp, "scala.collection.ArrayOps$ArrayIterator$mcJ$sp", ({
      sc_ArrayOps$ArrayIterator$mcJ$sp: 1,
      sc_ArrayOps$ArrayIterator: 1,
      sc_AbstractIterator: 1,
      sc_Iterator: 1,
      sc_IterableOnce: 1,
      sc_IterableOnceOps: 1,
      Ljava_io_Serializable: 1
    }));
    /** @constructor */
    function $c_sc_ArrayOps$ArrayIterator$mcS$sp(xs$mcS$sp) {
      this.sc_ArrayOps$ArrayIterator__f_xs = null;
      this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
      this.sc_ArrayOps$ArrayIterator__f_len = 0;
      this.sc_ArrayOps$ArrayIterator$mcS$sp__f_xs$mcS$sp = null;
      this.sc_ArrayOps$ArrayIterator$mcS$sp__f_xs$mcS$sp = xs$mcS$sp;
      $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcS$sp);
    }
    $c_sc_ArrayOps$ArrayIterator$mcS$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
    $c_sc_ArrayOps$ArrayIterator$mcS$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcS$sp;
    $c_sc_ArrayOps$ArrayIterator$mcS$sp.prototype;
    $c_sc_ArrayOps$ArrayIterator$mcS$sp.prototype.next$mcS$sp__S = (function() {
      if ((this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos >= $n(this.sc_ArrayOps$ArrayIterator$mcS$sp__f_xs$mcS$sp).u.length)) {
        $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
      }
      var r = $n(this.sc_ArrayOps$ArrayIterator$mcS$sp__f_xs$mcS$sp).get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
      this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
      return r;
    });
    $c_sc_ArrayOps$ArrayIterator$mcS$sp.prototype.next__O = (function() {
      return this.next$mcS$sp__S();
    });
    new $TypeData().initClass($c_sc_ArrayOps$ArrayIterator$mcS$sp, "scala.collection.ArrayOps$ArrayIterator$mcS$sp", ({
      sc_ArrayOps$ArrayIterator$mcS$sp: 1,
      sc_ArrayOps$ArrayIterator: 1,
      sc_AbstractIterator: 1,
      sc_Iterator: 1,
      sc_IterableOnce: 1,
      sc_IterableOnceOps: 1,
      Ljava_io_Serializable: 1
    }));
    /** @constructor */
    function $c_sc_ArrayOps$ArrayIterator$mcV$sp(xs$mcV$sp) {
      this.sc_ArrayOps$ArrayIterator__f_xs = null;
      this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
      this.sc_ArrayOps$ArrayIterator__f_len = 0;
      this.sc_ArrayOps$ArrayIterator$mcV$sp__f_xs$mcV$sp = null;
      this.sc_ArrayOps$ArrayIterator$mcV$sp__f_xs$mcV$sp = xs$mcV$sp;
      $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcV$sp);
    }
    $c_sc_ArrayOps$ArrayIterator$mcV$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
    $c_sc_ArrayOps$ArrayIterator$mcV$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcV$sp;
    $c_sc_ArrayOps$ArrayIterator$mcV$sp.prototype;
    $c_sc_ArrayOps$ArrayIterator$mcV$sp.prototype.next$mcV$sp__V = (function() {
      if ((this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos >= $n(this.sc_ArrayOps$ArrayIterator$mcV$sp__f_xs$mcV$sp).u.length)) {
        $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
      }
      $n(this.sc_ArrayOps$ArrayIterator$mcV$sp__f_xs$mcV$sp).get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
      this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
    });
    $c_sc_ArrayOps$ArrayIterator$mcV$sp.prototype.next__O = (function() {
      this.next$mcV$sp__V();
    });
    new $TypeData().initClass($c_sc_ArrayOps$ArrayIterator$mcV$sp, "scala.collection.ArrayOps$ArrayIterator$mcV$sp", ({
      sc_ArrayOps$ArrayIterator$mcV$sp: 1,
      sc_ArrayOps$ArrayIterator: 1,
      sc_AbstractIterator: 1,
      sc_Iterator: 1,
      sc_IterableOnce: 1,
      sc_IterableOnceOps: 1,
      Ljava_io_Serializable: 1
    }));
    /** @constructor */
    function $c_sc_ArrayOps$ArrayIterator$mcZ$sp(xs$mcZ$sp) {
      this.sc_ArrayOps$ArrayIterator__f_xs = null;
      this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
      this.sc_ArrayOps$ArrayIterator__f_len = 0;
      this.sc_ArrayOps$ArrayIterator$mcZ$sp__f_xs$mcZ$sp = null;
      this.sc_ArrayOps$ArrayIterator$mcZ$sp__f_xs$mcZ$sp = xs$mcZ$sp;
      $ct_sc_ArrayOps$ArrayIterator__O__(this, xs$mcZ$sp);
    }
    $c_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype = new $h_sc_ArrayOps$ArrayIterator();
    $c_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype.constructor = $c_sc_ArrayOps$ArrayIterator$mcZ$sp;
    $c_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype;
    $c_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype.next$mcZ$sp__Z = (function() {
      if ((this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos >= $n(this.sc_ArrayOps$ArrayIterator$mcZ$sp__f_xs$mcZ$sp).u.length)) {
        $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
      }
      var r = $n(this.sc_ArrayOps$ArrayIterator$mcZ$sp__f_xs$mcZ$sp).get(this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
      this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
      return r;
    });
    $c_sc_ArrayOps$ArrayIterator$mcZ$sp.prototype.next__O = (function() {
      return this.next$mcZ$sp__Z();
    });
    new $TypeData().initClass($c_sc_ArrayOps$ArrayIterator$mcZ$sp, "scala.collection.ArrayOps$ArrayIterator$mcZ$sp", ({
      sc_ArrayOps$ArrayIterator$mcZ$sp: 1,
      sc_ArrayOps$ArrayIterator: 1,
      sc_AbstractIterator: 1,
      sc_Iterator: 1,
      sc_IterableOnce: 1,
      sc_IterableOnceOps: 1,
      Ljava_io_Serializable: 1
    }));
    function $f_sc_View__toString__T($thiz) {
      return ($thiz.className__T() + "(<not computed>)");
    }
    class $c_s_concurrent_Future$$anon$1 extends $c_ju_NoSuchElementException {
      constructor(t$2) {
        super();
        var s = ("Future.collect partial function is not defined at: " + t$2);
        $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
      }
      fillInStackTrace__jl_Throwable() {
        return $f_s_util_control_NoStackTrace__fillInStackTrace__jl_Throwable(this);
      }
    }
    new $TypeData().initClass($c_s_concurrent_Future$$anon$1, "scala.concurrent.Future$$anon$1", ({
      s_concurrent_Future$$anon$1: 1,
      ju_NoSuchElementException: 1,
      jl_RuntimeException: 1,
      jl_Exception: 1,
      jl_Throwable: 1,
      Ljava_io_Serializable: 1,
      s_util_control_NoStackTrace: 1
    }));
    class $c_s_concurrent_Future$$anon$2 extends $c_ju_NoSuchElementException {
      constructor() {
        super();
        $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, "Future.filter predicate is not satisfied", null, true, true);
      }
      fillInStackTrace__jl_Throwable() {
        return $f_s_util_control_NoStackTrace__fillInStackTrace__jl_Throwable(this);
      }
    }
    new $TypeData().initClass($c_s_concurrent_Future$$anon$2, "scala.concurrent.Future$$anon$2", ({
      s_concurrent_Future$$anon$2: 1,
      ju_NoSuchElementException: 1,
      jl_RuntimeException: 1,
      jl_Exception: 1,
      jl_Throwable: 1,
      Ljava_io_Serializable: 1,
      s_util_control_NoStackTrace: 1
    }));
    class $c_s_concurrent_Future$$anon$3 extends $c_ju_NoSuchElementException {
      constructor() {
        super();
        $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, "Future.failed not completed with a throwable.", null, true, true);
      }
      fillInStackTrace__jl_Throwable() {
        return $f_s_util_control_NoStackTrace__fillInStackTrace__jl_Throwable(this);
      }
    }
    new $TypeData().initClass($c_s_concurrent_Future$$anon$3, "scala.concurrent.Future$$anon$3", ({
      s_concurrent_Future$$anon$3: 1,
      ju_NoSuchElementException: 1,
      jl_RuntimeException: 1,
      jl_Exception: 1,
      jl_Throwable: 1,
      Ljava_io_Serializable: 1,
      s_util_control_NoStackTrace: 1
    }));
    function $p_s_concurrent_impl_Promise$DefaultPromise__value0__s_util_Try($thiz) {
      var _$this = $thiz;
      while (true) {
        var state = $n(_$this).ju_concurrent_atomic_AtomicReference__f_value;
        if ((state instanceof $c_s_util_Try)) {
          return $as_s_util_Try(state);
        } else if ((state instanceof $c_s_concurrent_impl_Promise$Link)) {
          _$this = $n($as_s_concurrent_impl_Promise$Link(state)).promise__s_concurrent_impl_Promise$DefaultPromise__s_concurrent_impl_Promise$DefaultPromise(_$this);
        } else {
          return null;
        }
      }
    }
    function $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallbacks__O__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks($thiz, state, callbacks) {
      var _$this = $thiz;
      while (true) {
        if ((state instanceof $c_s_util_Try)) {
          $p_s_concurrent_impl_Promise$DefaultPromise__submitWithValue__s_concurrent_impl_Promise$Callbacks__s_util_Try__V($n(_$this), callbacks, $as_s_util_Try(state));
          return callbacks;
        } else if ($is_s_concurrent_impl_Promise$Callbacks(state)) {
          if ($n(_$this).compareAndSet__O__O__Z(state, ((state !== $m_s_concurrent_impl_Promise$().s_concurrent_impl_Promise$__f_scala$concurrent$impl$Promise$$Noop) ? $p_s_concurrent_impl_Promise$DefaultPromise__concatCallbacks__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks($n(_$this), callbacks, $as_s_concurrent_impl_Promise$Callbacks(state)) : callbacks))) {
            return callbacks;
          } else {
            state = $n(_$this).ju_concurrent_atomic_AtomicReference__f_value;
          }
        } else {
          var p = $n($as_s_concurrent_impl_Promise$Link(state)).promise__s_concurrent_impl_Promise$DefaultPromise__s_concurrent_impl_Promise$DefaultPromise(_$this);
          var temp$state$2 = $n(p).ju_concurrent_atomic_AtomicReference__f_value;
          _$this = p;
          state = temp$state$2;
        }
      }
    }
    function $p_s_concurrent_impl_Promise$DefaultPromise__concatCallbacks__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks($thiz, left, right) {
      while (true) {
        if ((left instanceof $c_s_concurrent_impl_Promise$Transformation)) {
          return new $c_s_concurrent_impl_Promise$ManyCallbacks($as_s_concurrent_impl_Promise$Transformation(left), right);
        } else {
          var m = $as_s_concurrent_impl_Promise$ManyCallbacks(left);
          var temp$left = $n(m).s_concurrent_impl_Promise$ManyCallbacks__f_rest;
          var temp$right = new $c_s_concurrent_impl_Promise$ManyCallbacks($n(m).s_concurrent_impl_Promise$ManyCallbacks__f_first, right);
          left = temp$left;
          right = temp$right;
        }
      }
    }
    function $p_s_concurrent_impl_Promise$DefaultPromise__submitWithValue__s_concurrent_impl_Promise$Callbacks__s_util_Try__V($thiz, callbacks, resolved) {
      while (true) {
        if ((callbacks instanceof $c_s_concurrent_impl_Promise$ManyCallbacks)) {
          var m = $as_s_concurrent_impl_Promise$ManyCallbacks(callbacks);
          $n($n(m).s_concurrent_impl_Promise$ManyCallbacks__f_first).submitWithValue__s_util_Try__s_concurrent_impl_Promise$Transformation(resolved);
          callbacks = $n(m).s_concurrent_impl_Promise$ManyCallbacks__f_rest;
          continue;
        } else {
          $n($as_s_concurrent_impl_Promise$Transformation(callbacks)).submitWithValue__s_util_Try__s_concurrent_impl_Promise$Transformation(resolved);
        }
        return (void 0);
      }
    }
    function $ct_s_concurrent_impl_Promise$DefaultPromise__O__($thiz, initial) {
      $ct_ju_concurrent_atomic_AtomicReference__O__($thiz, initial);
      return $thiz;
    }
    function $ct_s_concurrent_impl_Promise$DefaultPromise__s_util_Try__($thiz, result) {
      $ct_s_concurrent_impl_Promise$DefaultPromise__O__($thiz, $m_s_concurrent_impl_Promise$().scala$concurrent$impl$Promise$$resolve__s_util_Try__s_util_Try(result));
      return $thiz;
    }
    function $ct_s_concurrent_impl_Promise$DefaultPromise__($thiz) {
      $ct_s_concurrent_impl_Promise$DefaultPromise__O__($thiz, $m_s_concurrent_impl_Promise$().s_concurrent_impl_Promise$__f_scala$concurrent$impl$Promise$$Noop);
      return $thiz;
    }
    /** @constructor */
    function $c_s_concurrent_impl_Promise$DefaultPromise() {
      this.ju_concurrent_atomic_AtomicReference__f_value = null;
    }
    $c_s_concurrent_impl_Promise$DefaultPromise.prototype = new $h_ju_concurrent_atomic_AtomicReference();
    $c_s_concurrent_impl_Promise$DefaultPromise.prototype.constructor = $c_s_concurrent_impl_Promise$DefaultPromise;
    /** @constructor */
    function $h_s_concurrent_impl_Promise$DefaultPromise() {
    }
    $h_s_concurrent_impl_Promise$DefaultPromise.prototype = $c_s_concurrent_impl_Promise$DefaultPromise.prototype;
    $c_s_concurrent_impl_Promise$DefaultPromise.prototype.onComplete__F1__s_concurrent_ExecutionContext__V = (function(func, executor) {
      $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallbacks__O__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks(this, this.ju_concurrent_atomic_AtomicReference__f_value, $ct_s_concurrent_impl_Promise$Transformation__I__F1__s_concurrent_ExecutionContext__(new $c_s_concurrent_impl_Promise$Transformation(), 6, func, executor));
    });
    $c_s_concurrent_impl_Promise$DefaultPromise.prototype.toString__T = (function() {
      var _$this = this;
      while (true) {
        var state = $n(_$this).ju_concurrent_atomic_AtomicReference__f_value;
        if ((state instanceof $c_s_util_Try)) {
          return (("Future(" + state) + ")");
        } else if ((state instanceof $c_s_concurrent_impl_Promise$Link)) {
          _$this = $n($as_s_concurrent_impl_Promise$Link(state)).promise__s_concurrent_impl_Promise$DefaultPromise__s_concurrent_impl_Promise$DefaultPromise(_$this);
        } else {
          return "Future(<not completed>)";
        }
      }
    });
    $c_s_concurrent_impl_Promise$DefaultPromise.prototype.tryComplete__s_util_Try__Z = (function(value) {
      var state = this.ju_concurrent_atomic_AtomicReference__f_value;
      return ((!(state instanceof $c_s_util_Try)) && this.tryComplete0__O__s_util_Try__Z(state, $m_s_concurrent_impl_Promise$().scala$concurrent$impl$Promise$$resolve__s_util_Try__s_util_Try(value)));
    });
    $c_s_concurrent_impl_Promise$DefaultPromise.prototype.tryComplete0__O__s_util_Try__Z = (function(state, resolved) {
      var _$this = this;
      while (true) {
        if ($is_s_concurrent_impl_Promise$Callbacks(state)) {
          if ($n(_$this).compareAndSet__O__O__Z(state, resolved)) {
            if ((state !== $m_s_concurrent_impl_Promise$().s_concurrent_impl_Promise$__f_scala$concurrent$impl$Promise$$Noop)) {
              $p_s_concurrent_impl_Promise$DefaultPromise__submitWithValue__s_concurrent_impl_Promise$Callbacks__s_util_Try__V($n(_$this), $as_s_concurrent_impl_Promise$Callbacks(state), resolved);
            }
            return true;
          } else {
            state = $n(_$this).ju_concurrent_atomic_AtomicReference__f_value;
          }
        } else if ((state instanceof $c_s_concurrent_impl_Promise$Link)) {
          var p = $n($as_s_concurrent_impl_Promise$Link(state)).promise__s_concurrent_impl_Promise$DefaultPromise__s_concurrent_impl_Promise$DefaultPromise(_$this);
          if ((p !== _$this)) {
            var temp$state$2 = $n(p).ju_concurrent_atomic_AtomicReference__f_value;
            _$this = p;
            state = temp$state$2;
          } else {
            return false;
          }
        } else {
          return false;
        }
      }
    });
    $c_s_concurrent_impl_Promise$DefaultPromise.prototype.completeWith__s_concurrent_Future__s_concurrent_impl_Promise$DefaultPromise = (function(other) {
      if ((other !== this)) {
        var state = this.ju_concurrent_atomic_AtomicReference__f_value;
        if ((!(state instanceof $c_s_util_Try))) {
          if ((other instanceof $c_s_concurrent_impl_Promise$DefaultPromise)) {
            var resolved = $p_s_concurrent_impl_Promise$DefaultPromise__value0__s_util_Try($n($as_s_concurrent_impl_Promise$DefaultPromise(other)));
          } else {
            var this$1$1 = $n(other);
            var this$3 = $n($m_s_Option$().apply__O__s_Option($p_s_concurrent_impl_Promise$DefaultPromise__value0__s_util_Try(this$1$1)));
            var this$2 = $m_s_$less$colon$less$();
            var ev = this$2.s_$less$colon$less$__f_singleton;
            var resolved = $as_s_util_Try((this$3.isEmpty__Z() ? ($n(ev), null) : this$3.get__O()));
          }
          if ((resolved !== null)) {
            this.tryComplete0__O__s_util_Try__Z(state, resolved);
          } else {
            $n(other).onComplete__F1__s_concurrent_ExecutionContext__V(this, $m_s_concurrent_ExecutionContext$parasitic$());
          }
        }
      }
      return this;
    });
    $c_s_concurrent_impl_Promise$DefaultPromise.prototype.linkRootOf__s_concurrent_impl_Promise$DefaultPromise__s_concurrent_impl_Promise$Link__V = (function(target, link) {
      var _$this = this;
      while (true) {
        if ((_$this !== target)) {
          var state = $n(_$this).ju_concurrent_atomic_AtomicReference__f_value;
          if ((state instanceof $c_s_util_Try)) {
            if ((!$n(target).tryComplete0__O__s_util_Try__Z($n(target).ju_concurrent_atomic_AtomicReference__f_value, $as_s_util_Try(state)))) {
              throw new $c_jl_IllegalStateException("Cannot link completed promises together");
            }
          } else if ($is_s_concurrent_impl_Promise$Callbacks(state)) {
            var l = ((link !== null) ? link : new $c_s_concurrent_impl_Promise$Link(target));
            var p = $n(l).promise__s_concurrent_impl_Promise$DefaultPromise__s_concurrent_impl_Promise$DefaultPromise(_$this);
            if (((_$this !== p) && $n(_$this).compareAndSet__O__O__Z(state, l))) {
              if ((state !== $m_s_concurrent_impl_Promise$().s_concurrent_impl_Promise$__f_scala$concurrent$impl$Promise$$Noop)) {
                $p_s_concurrent_impl_Promise$DefaultPromise__dispatchOrAddCallbacks__O__s_concurrent_impl_Promise$Callbacks__s_concurrent_impl_Promise$Callbacks($n(p), $n(p).ju_concurrent_atomic_AtomicReference__f_value, $as_s_concurrent_impl_Promise$Callbacks(state));
              }
            } else {
              target = p;
              link = l;
              continue;
            }
          } else {
            _$this = $n($as_s_concurrent_impl_Promise$Link(state)).promise__s_concurrent_impl_Promise$DefaultPromise__s_concurrent_impl_Promise$DefaultPromise(_$this);
            continue;
          }
        }
        break;
      }
    });
    $c_s_concurrent_impl_Promise$DefaultPromise.prototype.unlink__s_util_Try__V = (function(resolved) {
      var _$this = this;
      while (true) {
        var state = $n(_$this).ju_concurrent_atomic_AtomicReference__f_value;
        if ((state instanceof $c_s_concurrent_impl_Promise$Link)) {
          var next = ($n(_$this).compareAndSet__O__O__Z(state, resolved) ? $as_s_concurrent_impl_Promise$DefaultPromise($n($as_s_concurrent_impl_Promise$Link(state)).ju_concurrent_atomic_AtomicReference__f_value) : _$this);
          _$this = next;
          continue;
        } else {
          $n(_$this).tryComplete0__O__s_util_Try__Z(state, resolved);
        }
        break;
      }
    });
    $c_s_concurrent_impl_Promise$DefaultPromise.prototype.apply__O__O = (function(v1) {
      var resolved = $as_s_util_Try(v1);
      this.tryComplete0__O__s_util_Try__Z(this.ju_concurrent_atomic_AtomicReference__f_value, resolved);
    });
    function $as_s_concurrent_impl_Promise$DefaultPromise(obj) {
      return (((obj instanceof $c_s_concurrent_impl_Promise$DefaultPromise) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.concurrent.impl.Promise$DefaultPromise"));
    }
    new $TypeData().initClass($c_s_concurrent_impl_Promise$DefaultPromise, "scala.concurrent.impl.Promise$DefaultPromise", ({
      s_concurrent_impl_Promise$DefaultPromise: 1,
      ju_concurrent_atomic_AtomicReference: 1,
      Ljava_io_Serializable: 1,
      s_concurrent_Promise: 1,
      s_concurrent_Future: 1,
      s_concurrent_Awaitable: 1,
      F1: 1
    }));
    /** @constructor */
    function $c_s_reflect_AnyValManifest() {
      this.s_reflect_AnyValManifest__f_toString = null;
    }
    $c_s_reflect_AnyValManifest.prototype = new $h_O();
    $c_s_reflect_AnyValManifest.prototype.constructor = $c_s_reflect_AnyValManifest;
    /** @constructor */
    function $h_s_reflect_AnyValManifest() {
    }
    $h_s_reflect_AnyValManifest.prototype = $c_s_reflect_AnyValManifest.prototype;
    $c_s_reflect_AnyValManifest.prototype.toString__T = (function() {
      return this.s_reflect_AnyValManifest__f_toString;
    });
    $c_s_reflect_AnyValManifest.prototype.equals__O__Z = (function(that) {
      return (this === that);
    });
    $c_s_reflect_AnyValManifest.prototype.hashCode__I = (function() {
      return $systemIdentityHashCode(this);
    });
    /** @constructor */
    function $c_s_reflect_ManifestFactory$ClassTypeManifest() {
    }
    $c_s_reflect_ManifestFactory$ClassTypeManifest.prototype = new $h_O();
    $c_s_reflect_ManifestFactory$ClassTypeManifest.prototype.constructor = $c_s_reflect_ManifestFactory$ClassTypeManifest;
    /** @constructor */
    function $h_s_reflect_ManifestFactory$ClassTypeManifest() {
    }
    $h_s_reflect_ManifestFactory$ClassTypeManifest.prototype = $c_s_reflect_ManifestFactory$ClassTypeManifest.prototype;
    class $c_sjs_js_JavaScriptException extends $c_jl_RuntimeException {
      constructor(exception) {
        super();
        this.sjs_js_JavaScriptException__f_exception = null;
        this.sjs_js_JavaScriptException__f_exception = exception;
        $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
      }
      getMessage__T() {
        return $dp_toString__T($n(this.sjs_js_JavaScriptException__f_exception));
      }
      productPrefix__T() {
        return "JavaScriptException";
      }
      productArity__I() {
        return 1;
      }
      productElement__I__O(x$1) {
        return ((x$1 === 0) ? this.sjs_js_JavaScriptException__f_exception : $m_sr_Statics$().ioobe__I__O(x$1));
      }
      productIterator__sc_Iterator() {
        return new $c_sr_ScalaRunTime$$anon$1(this);
      }
      hashCode__I() {
        var this$2 = $m_s_util_hashing_MurmurHash3$();
        return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false);
      }
      equals__O__Z(x$1) {
        if ((this === x$1)) {
          return true;
        } else if ((x$1 instanceof $c_sjs_js_JavaScriptException)) {
          var JavaScriptException$1 = $as_sjs_js_JavaScriptException(x$1);
          var x = this.sjs_js_JavaScriptException__f_exception;
          var y = $n(JavaScriptException$1).sjs_js_JavaScriptException__f_exception;
          return $m_sr_BoxesRunTime$().equals__O__O__Z(x, y);
        } else {
          return false;
        }
      }
    }
    function $as_sjs_js_JavaScriptException(obj) {
      return (((obj instanceof $c_sjs_js_JavaScriptException) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.js.JavaScriptException"));
    }
    new $TypeData().initClass($c_sjs_js_JavaScriptException, "scala.scalajs.js.JavaScriptException", ({
      sjs_js_JavaScriptException: 1,
      jl_RuntimeException: 1,
      jl_Exception: 1,
      jl_Throwable: 1,
      Ljava_io_Serializable: 1,
      s_Product: 1,
      s_Equals: 1
    }));
    /** @constructor */
    function $c_Lscalatags_JsDom$StringFrag(v) {
      this.Lscalatags_JsDom$StringFrag__f_v = null;
      this.Lscalatags_JsDom$StringFrag__f_v = v;
      if ((v === null)) {
        throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
      }
    }
    $c_Lscalatags_JsDom$StringFrag.prototype = new $h_O();
    $c_Lscalatags_JsDom$StringFrag.prototype.constructor = $c_Lscalatags_JsDom$StringFrag;
    $c_Lscalatags_JsDom$StringFrag.prototype;
    $c_Lscalatags_JsDom$StringFrag.prototype.productIterator__sc_Iterator = (function() {
      return new $c_s_Product$$anon$1(this);
    });
    $c_Lscalatags_JsDom$StringFrag.prototype.hashCode__I = (function() {
      var this$2 = $m_s_util_hashing_MurmurHash3$();
      return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false);
    });
    $c_Lscalatags_JsDom$StringFrag.prototype.equals__O__Z = (function(x$0) {
      if ((this === x$0)) {
        return true;
      } else if ((x$0 instanceof $c_Lscalatags_JsDom$StringFrag)) {
        var x$0$2 = $as_Lscalatags_JsDom$StringFrag(x$0);
        return ((this.Lscalatags_JsDom$StringFrag__f_v === $n(x$0$2).Lscalatags_JsDom$StringFrag__f_v) && ($n(x$0$2), true));
      } else {
        return false;
      }
    });
    $c_Lscalatags_JsDom$StringFrag.prototype.toString__T = (function() {
      return $m_sr_ScalaRunTime$()._toString__s_Product__T(this);
    });
    $c_Lscalatags_JsDom$StringFrag.prototype.productArity__I = (function() {
      return 1;
    });
    $c_Lscalatags_JsDom$StringFrag.prototype.productPrefix__T = (function() {
      return "StringFrag";
    });
    $c_Lscalatags_JsDom$StringFrag.prototype.productElement__I__O = (function(n) {
      if ((n === 0)) {
        return this.Lscalatags_JsDom$StringFrag__f_v;
      }
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
    });
    $c_Lscalatags_JsDom$StringFrag.prototype.render__Lorg_scalajs_dom_Text = (function() {
      return document.createTextNode(this.Lscalatags_JsDom$StringFrag__f_v);
    });
    $c_Lscalatags_JsDom$StringFrag.prototype.render__Lorg_scalajs_dom_Node = (function() {
      return this.render__Lorg_scalajs_dom_Text();
    });
    $c_Lscalatags_JsDom$StringFrag.prototype.applyTo__O__V = (function(t) {
      $f_Lscalatags_jsdom_Frag__applyTo__Lorg_scalajs_dom_Element__V(this, t);
    });
    function $as_Lscalatags_JsDom$StringFrag(obj) {
      return (((obj instanceof $c_Lscalatags_JsDom$StringFrag) || (obj === null)) ? obj : $throwClassCastException(obj, "scalatags.JsDom$StringFrag"));
    }
    new $TypeData().initClass($c_Lscalatags_JsDom$StringFrag, "scalatags.JsDom$StringFrag", ({
      Lscalatags_JsDom$StringFrag: 1,
      Lscalatags_generic_Modifier: 1,
      Lscalatags_generic_Frag: 1,
      Lscalatags_jsdom_Frag: 1,
      s_Equals: 1,
      s_Product: 1,
      Ljava_io_Serializable: 1
    }));
    function $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V($thiz, line) {
      if (($as_T((typeof console)) !== "undefined")) {
        if (($thiz.jl_JSConsoleBasedPrintStream__f_isErr && $uZ((!(!console.error))))) {
          console.error(line);
        } else {
          console.log(line);
        }
      }
    }
    /** @constructor */
    function $c_jl_JSConsoleBasedPrintStream(isErr) {
      this.jl_JSConsoleBasedPrintStream__f_isErr = false;
      this.jl_JSConsoleBasedPrintStream__f_buffer = null;
      this.jl_JSConsoleBasedPrintStream__f_isErr = isErr;
      this.jl_JSConsoleBasedPrintStream__f_buffer = "";
    }
    $c_jl_JSConsoleBasedPrintStream.prototype = new $h_Ljava_io_PrintStream();
    $c_jl_JSConsoleBasedPrintStream.prototype.constructor = $c_jl_JSConsoleBasedPrintStream;
    $c_jl_JSConsoleBasedPrintStream.prototype;
    $c_jl_JSConsoleBasedPrintStream.prototype.print__T__V = (function(s) {
      this.java$lang$JSConsoleBasedPrintStream$$printString__T__V(((s === null) ? "null" : s));
    });
    $c_jl_JSConsoleBasedPrintStream.prototype.java$lang$JSConsoleBasedPrintStream$$printString__T__V = (function(s) {
      var rest = s;
      while ((rest !== "")) {
        var this$1$1 = $n(rest);
        var nlPos = $uI(this$1$1.indexOf("\n"));
        if ((nlPos < 0)) {
          this.jl_JSConsoleBasedPrintStream__f_buffer = (("" + this.jl_JSConsoleBasedPrintStream__f_buffer) + rest);
          rest = "";
        } else {
          var $x_1 = this.jl_JSConsoleBasedPrintStream__f_buffer;
          var this$2 = $n(rest);
          if ((nlPos > this$2.length)) {
            $charAt(this$2, nlPos);
          }
          if ((nlPos < 0)) {
            $charAt(this$2, (-1));
          }
          $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V(this, (("" + $x_1) + $as_T(this$2.substring(0, nlPos))));
          this.jl_JSConsoleBasedPrintStream__f_buffer = "";
          var this$3 = $n(rest);
          var beginIndex = ((1 + nlPos) | 0);
          if (((beginIndex < 0) || (beginIndex > this$3.length))) {
            $charAt(this$3, beginIndex);
          }
          rest = $as_T(this$3.substring(beginIndex));
        }
      }
    });
    new $TypeData().initClass($c_jl_JSConsoleBasedPrintStream, "java.lang.JSConsoleBasedPrintStream", ({
      jl_JSConsoleBasedPrintStream: 1,
      Ljava_io_PrintStream: 1,
      Ljava_io_FilterOutputStream: 1,
      Ljava_io_OutputStream: 1,
      Ljava_io_Closeable: 1,
      jl_AutoCloseable: 1,
      Ljava_io_Flushable: 1,
      jl_Appendable: 1
    }));
    function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
      while (true) {
        if (((n <= 0) || $n(s).isEmpty__Z())) {
          return s;
        } else {
          var temp$n = (((-1) + n) | 0);
          var temp$s = $as_sc_LinearSeq($n(s).tail__O());
          n = temp$n;
          s = temp$s;
        }
      }
    }
    function $is_sc_StrictOptimizedLinearSeqOps(obj) {
      return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_StrictOptimizedLinearSeqOps)));
    }
    function $as_sc_StrictOptimizedLinearSeqOps(obj) {
      return (($is_sc_StrictOptimizedLinearSeqOps(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.StrictOptimizedLinearSeqOps"));
    }
    /** @constructor */
    function $c_s_reflect_ManifestFactory$BooleanManifest() {
      this.s_reflect_AnyValManifest__f_toString = null;
    }
    $c_s_reflect_ManifestFactory$BooleanManifest.prototype = new $h_s_reflect_AnyValManifest();
    $c_s_reflect_ManifestFactory$BooleanManifest.prototype.constructor = $c_s_reflect_ManifestFactory$BooleanManifest;
    /** @constructor */
    function $h_s_reflect_ManifestFactory$BooleanManifest() {
    }
    $h_s_reflect_ManifestFactory$BooleanManifest.prototype = $c_s_reflect_ManifestFactory$BooleanManifest.prototype;
    $c_s_reflect_ManifestFactory$BooleanManifest.prototype.runtimeClass__jl_Class = (function() {
      return $d_Z.getClassOf();
    });
    $c_s_reflect_ManifestFactory$BooleanManifest.prototype.newArray__I__O = (function(len) {
      return new $ac_Z(len);
    });
    /** @constructor */
    function $c_s_reflect_ManifestFactory$ByteManifest() {
      this.s_reflect_AnyValManifest__f_toString = null;
    }
    $c_s_reflect_ManifestFactory$ByteManifest.prototype = new $h_s_reflect_AnyValManifest();
    $c_s_reflect_ManifestFactory$ByteManifest.prototype.constructor = $c_s_reflect_ManifestFactory$ByteManifest;
    /** @constructor */
    function $h_s_reflect_ManifestFactory$ByteManifest() {
    }
    $h_s_reflect_ManifestFactory$ByteManifest.prototype = $c_s_reflect_ManifestFactory$ByteManifest.prototype;
    $c_s_reflect_ManifestFactory$ByteManifest.prototype.runtimeClass__jl_Class = (function() {
      return $d_B.getClassOf();
    });
    $c_s_reflect_ManifestFactory$ByteManifest.prototype.newArray__I__O = (function(len) {
      return new $ac_B(len);
    });
    /** @constructor */
    function $c_s_reflect_ManifestFactory$CharManifest() {
      this.s_reflect_AnyValManifest__f_toString = null;
    }
    $c_s_reflect_ManifestFactory$CharManifest.prototype = new $h_s_reflect_AnyValManifest();
    $c_s_reflect_ManifestFactory$CharManifest.prototype.constructor = $c_s_reflect_ManifestFactory$CharManifest;
    /** @constructor */
    function $h_s_reflect_ManifestFactory$CharManifest() {
    }
    $h_s_reflect_ManifestFactory$CharManifest.prototype = $c_s_reflect_ManifestFactory$CharManifest.prototype;
    $c_s_reflect_ManifestFactory$CharManifest.prototype.runtimeClass__jl_Class = (function() {
      return $d_C.getClassOf();
    });
    $c_s_reflect_ManifestFactory$CharManifest.prototype.newArray__I__O = (function(len) {
      return new $ac_C(len);
    });
    /** @constructor */
    function $c_s_reflect_ManifestFactory$DoubleManifest() {
      this.s_reflect_AnyValManifest__f_toString = null;
    }
    $c_s_reflect_ManifestFactory$DoubleManifest.prototype = new $h_s_reflect_AnyValManifest();
    $c_s_reflect_ManifestFactory$DoubleManifest.prototype.constructor = $c_s_reflect_ManifestFactory$DoubleManifest;
    /** @constructor */
    function $h_s_reflect_ManifestFactory$DoubleManifest() {
    }
    $h_s_reflect_ManifestFactory$DoubleManifest.prototype = $c_s_reflect_ManifestFactory$DoubleManifest.prototype;
    $c_s_reflect_ManifestFactory$DoubleManifest.prototype.runtimeClass__jl_Class = (function() {
      return $d_D.getClassOf();
    });
    $c_s_reflect_ManifestFactory$DoubleManifest.prototype.newArray__I__O = (function(len) {
      return new $ac_D(len);
    });
    /** @constructor */
    function $c_s_reflect_ManifestFactory$FloatManifest() {
      this.s_reflect_AnyValManifest__f_toString = null;
    }
    $c_s_reflect_ManifestFactory$FloatManifest.prototype = new $h_s_reflect_AnyValManifest();
    $c_s_reflect_ManifestFactory$FloatManifest.prototype.constructor = $c_s_reflect_ManifestFactory$FloatManifest;
    /** @constructor */
    function $h_s_reflect_ManifestFactory$FloatManifest() {
    }
    $h_s_reflect_ManifestFactory$FloatManifest.prototype = $c_s_reflect_ManifestFactory$FloatManifest.prototype;
    $c_s_reflect_ManifestFactory$FloatManifest.prototype.runtimeClass__jl_Class = (function() {
      return $d_F.getClassOf();
    });
    $c_s_reflect_ManifestFactory$FloatManifest.prototype.newArray__I__O = (function(len) {
      return new $ac_F(len);
    });
    /** @constructor */
    function $c_s_reflect_ManifestFactory$IntManifest() {
      this.s_reflect_AnyValManifest__f_toString = null;
    }
    $c_s_reflect_ManifestFactory$IntManifest.prototype = new $h_s_reflect_AnyValManifest();
    $c_s_reflect_ManifestFactory$IntManifest.prototype.constructor = $c_s_reflect_ManifestFactory$IntManifest;
    /** @constructor */
    function $h_s_reflect_ManifestFactory$IntManifest() {
    }
    $h_s_reflect_ManifestFactory$IntManifest.prototype = $c_s_reflect_ManifestFactory$IntManifest.prototype;
    $c_s_reflect_ManifestFactory$IntManifest.prototype.runtimeClass__jl_Class = (function() {
      return $d_I.getClassOf();
    });
    $c_s_reflect_ManifestFactory$IntManifest.prototype.newArray__I__O = (function(len) {
      return new $ac_I(len);
    });
    /** @constructor */
    function $c_s_reflect_ManifestFactory$LongManifest() {
      this.s_reflect_AnyValManifest__f_toString = null;
    }
    $c_s_reflect_ManifestFactory$LongManifest.prototype = new $h_s_reflect_AnyValManifest();
    $c_s_reflect_ManifestFactory$LongManifest.prototype.constructor = $c_s_reflect_ManifestFactory$LongManifest;
    /** @constructor */
    function $h_s_reflect_ManifestFactory$LongManifest() {
    }
    $h_s_reflect_ManifestFactory$LongManifest.prototype = $c_s_reflect_ManifestFactory$LongManifest.prototype;
    $c_s_reflect_ManifestFactory$LongManifest.prototype.runtimeClass__jl_Class = (function() {
      return $d_J.getClassOf();
    });
    $c_s_reflect_ManifestFactory$LongManifest.prototype.newArray__I__O = (function(len) {
      return new $ac_J(len);
    });
    /** @constructor */
    function $c_s_reflect_ManifestFactory$PhantomManifest() {
      this.s_reflect_ManifestFactory$PhantomManifest__f_toString = null;
    }
    $c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
    $c_s_reflect_ManifestFactory$PhantomManifest.prototype.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
    /** @constructor */
    function $h_s_reflect_ManifestFactory$PhantomManifest() {
    }
    $h_s_reflect_ManifestFactory$PhantomManifest.prototype = $c_s_reflect_ManifestFactory$PhantomManifest.prototype;
    $c_s_reflect_ManifestFactory$PhantomManifest.prototype.toString__T = (function() {
      return this.s_reflect_ManifestFactory$PhantomManifest__f_toString;
    });
    $c_s_reflect_ManifestFactory$PhantomManifest.prototype.equals__O__Z = (function(that) {
      return (this === that);
    });
    $c_s_reflect_ManifestFactory$PhantomManifest.prototype.hashCode__I = (function() {
      return $systemIdentityHashCode(this);
    });
    /** @constructor */
    function $c_s_reflect_ManifestFactory$ShortManifest() {
      this.s_reflect_AnyValManifest__f_toString = null;
    }
    $c_s_reflect_ManifestFactory$ShortManifest.prototype = new $h_s_reflect_AnyValManifest();
    $c_s_reflect_ManifestFactory$ShortManifest.prototype.constructor = $c_s_reflect_ManifestFactory$ShortManifest;
    /** @constructor */
    function $h_s_reflect_ManifestFactory$ShortManifest() {
    }
    $h_s_reflect_ManifestFactory$ShortManifest.prototype = $c_s_reflect_ManifestFactory$ShortManifest.prototype;
    $c_s_reflect_ManifestFactory$ShortManifest.prototype.runtimeClass__jl_Class = (function() {
      return $d_S.getClassOf();
    });
    $c_s_reflect_ManifestFactory$ShortManifest.prototype.newArray__I__O = (function(len) {
      return new $ac_S(len);
    });
    /** @constructor */
    function $c_s_reflect_ManifestFactory$UnitManifest() {
      this.s_reflect_AnyValManifest__f_toString = null;
    }
    $c_s_reflect_ManifestFactory$UnitManifest.prototype = new $h_s_reflect_AnyValManifest();
    $c_s_reflect_ManifestFactory$UnitManifest.prototype.constructor = $c_s_reflect_ManifestFactory$UnitManifest;
    /** @constructor */
    function $h_s_reflect_ManifestFactory$UnitManifest() {
    }
    $h_s_reflect_ManifestFactory$UnitManifest.prototype = $c_s_reflect_ManifestFactory$UnitManifest.prototype;
    $c_s_reflect_ManifestFactory$UnitManifest.prototype.runtimeClass__jl_Class = (function() {
      return $d_V.getClassOf();
    });
    $c_s_reflect_ManifestFactory$UnitManifest.prototype.newArray__I__O = (function(len) {
      return new ($d_jl_Void.getArrayOf().constr)(len);
    });
    /** @constructor */
    function $c_Lscalatags_JsDom$TypedTag(tag, modifiers, void$1, namespace) {
      this.Lscalatags_JsDom$TypedTag__f_tag = null;
      this.Lscalatags_JsDom$TypedTag__f_modifiers = null;
      this.Lscalatags_JsDom$TypedTag__f_void = false;
      this.Lscalatags_JsDom$TypedTag__f_namespace = null;
      this.Lscalatags_JsDom$TypedTag__f_tag = tag;
      this.Lscalatags_JsDom$TypedTag__f_modifiers = modifiers;
      this.Lscalatags_JsDom$TypedTag__f_void = void$1;
      this.Lscalatags_JsDom$TypedTag__f_namespace = namespace;
    }
    $c_Lscalatags_JsDom$TypedTag.prototype = new $h_O();
    $c_Lscalatags_JsDom$TypedTag.prototype.constructor = $c_Lscalatags_JsDom$TypedTag;
    $c_Lscalatags_JsDom$TypedTag.prototype;
    $c_Lscalatags_JsDom$TypedTag.prototype.productIterator__sc_Iterator = (function() {
      return new $c_s_Product$$anon$1(this);
    });
    $c_Lscalatags_JsDom$TypedTag.prototype.hashCode__I = (function() {
      var acc = (-889275714);
      var hash = acc;
      var data = $f_T__hashCode__I("TypedTag");
      acc = $m_sr_Statics$().mix__I__I__I(hash, data);
      var hash$1 = acc;
      var x = this.Lscalatags_JsDom$TypedTag__f_tag;
      var data$1 = $m_sr_Statics$().anyHash__O__I(x);
      acc = $m_sr_Statics$().mix__I__I__I(hash$1, data$1);
      var hash$2 = acc;
      var x$1 = this.Lscalatags_JsDom$TypedTag__f_modifiers;
      var data$2 = $m_sr_Statics$().anyHash__O__I(x$1);
      acc = $m_sr_Statics$().mix__I__I__I(hash$2, data$2);
      var hash$3 = acc;
      var data$3 = (this.Lscalatags_JsDom$TypedTag__f_void ? 1231 : 1237);
      acc = $m_sr_Statics$().mix__I__I__I(hash$3, data$3);
      var hash$4 = acc;
      var x$2 = this.Lscalatags_JsDom$TypedTag__f_namespace;
      var data$4 = $m_sr_Statics$().anyHash__O__I(x$2);
      acc = $m_sr_Statics$().mix__I__I__I(hash$4, data$4);
      var hash$5 = acc;
      return $m_sr_Statics$().finalizeHash__I__I__I(hash$5, 4);
    });
    $c_Lscalatags_JsDom$TypedTag.prototype.equals__O__Z = (function(x$0) {
      if ((this === x$0)) {
        return true;
      } else if ((x$0 instanceof $c_Lscalatags_JsDom$TypedTag)) {
        var x$0$2 = $as_Lscalatags_JsDom$TypedTag(x$0);
        if (((this.Lscalatags_JsDom$TypedTag__f_void === $n(x$0$2).Lscalatags_JsDom$TypedTag__f_void) && (this.Lscalatags_JsDom$TypedTag__f_tag === $n(x$0$2).Lscalatags_JsDom$TypedTag__f_tag))) {
          var x = this.Lscalatags_JsDom$TypedTag__f_modifiers;
          var x$2 = $n(x$0$2).Lscalatags_JsDom$TypedTag__f_modifiers;
          var $x_2 = ((x === null) ? (x$2 === null) : $n(x).equals__O__Z(x$2));
        } else {
          var $x_2 = false;
        }
        if ($x_2) {
          var x$3 = this.Lscalatags_JsDom$TypedTag__f_namespace;
          var x$4 = $n(x$0$2).Lscalatags_JsDom$TypedTag__f_namespace;
          if ((x$3 === null)) {
            var $x_1 = (x$4 === null);
          } else {
            var this$1$1 = $n(x$3);
            var $x_1 = (this$1$1 === x$4);
          }
        } else {
          var $x_1 = false;
        }
        if ($x_1) {
          $n(x$0$2);
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    });
    $c_Lscalatags_JsDom$TypedTag.prototype.productArity__I = (function() {
      return 4;
    });
    $c_Lscalatags_JsDom$TypedTag.prototype.productPrefix__T = (function() {
      return "TypedTag";
    });
    $c_Lscalatags_JsDom$TypedTag.prototype.productElement__I__O = (function(n) {
      switch (n) {
        case 0: {
          return this.Lscalatags_JsDom$TypedTag__f_tag;
        }
        case 1: {
          return this.Lscalatags_JsDom$TypedTag__f_modifiers;
        }
        case 2: {
          return this.Lscalatags_JsDom$TypedTag__f_void;
        }
        case 3: {
          return this.Lscalatags_JsDom$TypedTag__f_namespace;
        }
        default: {
          throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
        }
      }
    });
    $c_Lscalatags_JsDom$TypedTag.prototype.render__Lorg_scalajs_dom_Element = (function() {
      var elem = document.createElementNS($n(this.Lscalatags_JsDom$TypedTag__f_namespace).uri__T(), this.Lscalatags_JsDom$TypedTag__f_tag);
      $f_Lscalatags_generic_TypedTag__build__O__V(this, elem);
      return elem;
    });
    $c_Lscalatags_JsDom$TypedTag.prototype.apply__sci_Seq__Lscalatags_JsDom$TypedTag = (function(xs) {
      var this$1$1 = $n(this.Lscalatags_JsDom$TypedTag__f_modifiers);
      var modifiers$1 = new $c_sci_$colon$colon(xs, this$1$1);
      var namespace$1 = this.Lscalatags_JsDom$TypedTag__f_namespace;
      var tag = this.Lscalatags_JsDom$TypedTag__f_tag;
      var void$1 = this.Lscalatags_JsDom$TypedTag__f_void;
      return new $c_Lscalatags_JsDom$TypedTag(tag, modifiers$1, void$1, namespace$1);
    });
    $c_Lscalatags_JsDom$TypedTag.prototype.toString__T = (function() {
      return $as_T(this.render__Lorg_scalajs_dom_Element().outerHTML);
    });
    $c_Lscalatags_JsDom$TypedTag.prototype.render__Lorg_scalajs_dom_Node = (function() {
      return this.render__Lorg_scalajs_dom_Element();
    });
    $c_Lscalatags_JsDom$TypedTag.prototype.applyTo__O__V = (function(t) {
      $f_Lscalatags_jsdom_Frag__applyTo__Lorg_scalajs_dom_Element__V(this, t);
    });
    function $as_Lscalatags_JsDom$TypedTag(obj) {
      return (((obj instanceof $c_Lscalatags_JsDom$TypedTag) || (obj === null)) ? obj : $throwClassCastException(obj, "scalatags.JsDom$TypedTag"));
    }
    new $TypeData().initClass($c_Lscalatags_JsDom$TypedTag, "scalatags.JsDom$TypedTag", ({
      Lscalatags_JsDom$TypedTag: 1,
      Lscalatags_generic_Modifier: 1,
      Lscalatags_generic_Frag: 1,
      Lscalatags_generic_TypedTag: 1,
      Lscalatags_jsdom_Frag: 1,
      s_Equals: 1,
      s_Product: 1,
      Ljava_io_Serializable: 1
    }));
    /** @constructor */
    function $c_sc_AbstractView() {
    }
    $c_sc_AbstractView.prototype = new $h_sc_AbstractIterable();
    $c_sc_AbstractView.prototype.constructor = $c_sc_AbstractView;
    /** @constructor */
    function $h_sc_AbstractView() {
    }
    $h_sc_AbstractView.prototype = $c_sc_AbstractView.prototype;
    $c_sc_AbstractView.prototype.toString__T = (function() {
      return $f_sc_View__toString__T(this);
    });
    /** @constructor */
    function $c_s_reflect_ManifestFactory$AnyManifest$() {
      this.s_reflect_ManifestFactory$PhantomManifest__f_toString = null;
      this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Any";
    }
    $c_s_reflect_ManifestFactory$AnyManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
    $c_s_reflect_ManifestFactory$AnyManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$AnyManifest$;
    $c_s_reflect_ManifestFactory$AnyManifest$.prototype;
    $c_s_reflect_ManifestFactory$AnyManifest$.prototype.runtimeClass__jl_Class = (function() {
      return $d_O.getClassOf();
    });
    $c_s_reflect_ManifestFactory$AnyManifest$.prototype.newArray__I__O = (function(len) {
      return new $ac_O(len);
    });
    new $TypeData().initClass($c_s_reflect_ManifestFactory$AnyManifest$, "scala.reflect.ManifestFactory$AnyManifest$", ({
      s_reflect_ManifestFactory$AnyManifest$: 1,
      s_reflect_ManifestFactory$PhantomManifest: 1,
      s_reflect_ManifestFactory$ClassTypeManifest: 1,
      s_reflect_Manifest: 1,
      s_reflect_ClassTag: 1,
      s_reflect_ClassManifestDeprecatedApis: 1,
      s_reflect_OptManifest: 1,
      Ljava_io_Serializable: 1,
      s_Equals: 1
    }));
    var $n_s_reflect_ManifestFactory$AnyManifest$;
    function $m_s_reflect_ManifestFactory$AnyManifest$() {
      if ((!$n_s_reflect_ManifestFactory$AnyManifest$)) {
        $n_s_reflect_ManifestFactory$AnyManifest$ = new $c_s_reflect_ManifestFactory$AnyManifest$();
      }
      return $n_s_reflect_ManifestFactory$AnyManifest$;
    }
    /** @constructor */
    function $c_s_reflect_ManifestFactory$BooleanManifest$() {
      this.s_reflect_AnyValManifest__f_toString = null;
      this.s_reflect_AnyValManifest__f_toString = "Boolean";
    }
    $c_s_reflect_ManifestFactory$BooleanManifest$.prototype = new $h_s_reflect_ManifestFactory$BooleanManifest();
    $c_s_reflect_ManifestFactory$BooleanManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$BooleanManifest$;
    $c_s_reflect_ManifestFactory$BooleanManifest$.prototype;
    new $TypeData().initClass($c_s_reflect_ManifestFactory$BooleanManifest$, "scala.reflect.ManifestFactory$BooleanManifest$", ({
      s_reflect_ManifestFactory$BooleanManifest$: 1,
      s_reflect_ManifestFactory$BooleanManifest: 1,
      s_reflect_AnyValManifest: 1,
      s_reflect_Manifest: 1,
      s_reflect_ClassTag: 1,
      s_reflect_ClassManifestDeprecatedApis: 1,
      s_reflect_OptManifest: 1,
      Ljava_io_Serializable: 1,
      s_Equals: 1
    }));
    var $n_s_reflect_ManifestFactory$BooleanManifest$;
    function $m_s_reflect_ManifestFactory$BooleanManifest$() {
      if ((!$n_s_reflect_ManifestFactory$BooleanManifest$)) {
        $n_s_reflect_ManifestFactory$BooleanManifest$ = new $c_s_reflect_ManifestFactory$BooleanManifest$();
      }
      return $n_s_reflect_ManifestFactory$BooleanManifest$;
    }
    /** @constructor */
    function $c_s_reflect_ManifestFactory$ByteManifest$() {
      this.s_reflect_AnyValManifest__f_toString = null;
      this.s_reflect_AnyValManifest__f_toString = "Byte";
    }
    $c_s_reflect_ManifestFactory$ByteManifest$.prototype = new $h_s_reflect_ManifestFactory$ByteManifest();
    $c_s_reflect_ManifestFactory$ByteManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$ByteManifest$;
    $c_s_reflect_ManifestFactory$ByteManifest$.prototype;
    new $TypeData().initClass($c_s_reflect_ManifestFactory$ByteManifest$, "scala.reflect.ManifestFactory$ByteManifest$", ({
      s_reflect_ManifestFactory$ByteManifest$: 1,
      s_reflect_ManifestFactory$ByteManifest: 1,
      s_reflect_AnyValManifest: 1,
      s_reflect_Manifest: 1,
      s_reflect_ClassTag: 1,
      s_reflect_ClassManifestDeprecatedApis: 1,
      s_reflect_OptManifest: 1,
      Ljava_io_Serializable: 1,
      s_Equals: 1
    }));
    var $n_s_reflect_ManifestFactory$ByteManifest$;
    function $m_s_reflect_ManifestFactory$ByteManifest$() {
      if ((!$n_s_reflect_ManifestFactory$ByteManifest$)) {
        $n_s_reflect_ManifestFactory$ByteManifest$ = new $c_s_reflect_ManifestFactory$ByteManifest$();
      }
      return $n_s_reflect_ManifestFactory$ByteManifest$;
    }
    /** @constructor */
    function $c_s_reflect_ManifestFactory$CharManifest$() {
      this.s_reflect_AnyValManifest__f_toString = null;
      this.s_reflect_AnyValManifest__f_toString = "Char";
    }
    $c_s_reflect_ManifestFactory$CharManifest$.prototype = new $h_s_reflect_ManifestFactory$CharManifest();
    $c_s_reflect_ManifestFactory$CharManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$CharManifest$;
    $c_s_reflect_ManifestFactory$CharManifest$.prototype;
    new $TypeData().initClass($c_s_reflect_ManifestFactory$CharManifest$, "scala.reflect.ManifestFactory$CharManifest$", ({
      s_reflect_ManifestFactory$CharManifest$: 1,
      s_reflect_ManifestFactory$CharManifest: 1,
      s_reflect_AnyValManifest: 1,
      s_reflect_Manifest: 1,
      s_reflect_ClassTag: 1,
      s_reflect_ClassManifestDeprecatedApis: 1,
      s_reflect_OptManifest: 1,
      Ljava_io_Serializable: 1,
      s_Equals: 1
    }));
    var $n_s_reflect_ManifestFactory$CharManifest$;
    function $m_s_reflect_ManifestFactory$CharManifest$() {
      if ((!$n_s_reflect_ManifestFactory$CharManifest$)) {
        $n_s_reflect_ManifestFactory$CharManifest$ = new $c_s_reflect_ManifestFactory$CharManifest$();
      }
      return $n_s_reflect_ManifestFactory$CharManifest$;
    }
    /** @constructor */
    function $c_s_reflect_ManifestFactory$DoubleManifest$() {
      this.s_reflect_AnyValManifest__f_toString = null;
      this.s_reflect_AnyValManifest__f_toString = "Double";
    }
    $c_s_reflect_ManifestFactory$DoubleManifest$.prototype = new $h_s_reflect_ManifestFactory$DoubleManifest();
    $c_s_reflect_ManifestFactory$DoubleManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$DoubleManifest$;
    $c_s_reflect_ManifestFactory$DoubleManifest$.prototype;
    new $TypeData().initClass($c_s_reflect_ManifestFactory$DoubleManifest$, "scala.reflect.ManifestFactory$DoubleManifest$", ({
      s_reflect_ManifestFactory$DoubleManifest$: 1,
      s_reflect_ManifestFactory$DoubleManifest: 1,
      s_reflect_AnyValManifest: 1,
      s_reflect_Manifest: 1,
      s_reflect_ClassTag: 1,
      s_reflect_ClassManifestDeprecatedApis: 1,
      s_reflect_OptManifest: 1,
      Ljava_io_Serializable: 1,
      s_Equals: 1
    }));
    var $n_s_reflect_ManifestFactory$DoubleManifest$;
    function $m_s_reflect_ManifestFactory$DoubleManifest$() {
      if ((!$n_s_reflect_ManifestFactory$DoubleManifest$)) {
        $n_s_reflect_ManifestFactory$DoubleManifest$ = new $c_s_reflect_ManifestFactory$DoubleManifest$();
      }
      return $n_s_reflect_ManifestFactory$DoubleManifest$;
    }
    /** @constructor */
    function $c_s_reflect_ManifestFactory$FloatManifest$() {
      this.s_reflect_AnyValManifest__f_toString = null;
      this.s_reflect_AnyValManifest__f_toString = "Float";
    }
    $c_s_reflect_ManifestFactory$FloatManifest$.prototype = new $h_s_reflect_ManifestFactory$FloatManifest();
    $c_s_reflect_ManifestFactory$FloatManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$FloatManifest$;
    $c_s_reflect_ManifestFactory$FloatManifest$.prototype;
    new $TypeData().initClass($c_s_reflect_ManifestFactory$FloatManifest$, "scala.reflect.ManifestFactory$FloatManifest$", ({
      s_reflect_ManifestFactory$FloatManifest$: 1,
      s_reflect_ManifestFactory$FloatManifest: 1,
      s_reflect_AnyValManifest: 1,
      s_reflect_Manifest: 1,
      s_reflect_ClassTag: 1,
      s_reflect_ClassManifestDeprecatedApis: 1,
      s_reflect_OptManifest: 1,
      Ljava_io_Serializable: 1,
      s_Equals: 1
    }));
    var $n_s_reflect_ManifestFactory$FloatManifest$;
    function $m_s_reflect_ManifestFactory$FloatManifest$() {
      if ((!$n_s_reflect_ManifestFactory$FloatManifest$)) {
        $n_s_reflect_ManifestFactory$FloatManifest$ = new $c_s_reflect_ManifestFactory$FloatManifest$();
      }
      return $n_s_reflect_ManifestFactory$FloatManifest$;
    }
    /** @constructor */
    function $c_s_reflect_ManifestFactory$IntManifest$() {
      this.s_reflect_AnyValManifest__f_toString = null;
      this.s_reflect_AnyValManifest__f_toString = "Int";
    }
    $c_s_reflect_ManifestFactory$IntManifest$.prototype = new $h_s_reflect_ManifestFactory$IntManifest();
    $c_s_reflect_ManifestFactory$IntManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$IntManifest$;
    $c_s_reflect_ManifestFactory$IntManifest$.prototype;
    new $TypeData().initClass($c_s_reflect_ManifestFactory$IntManifest$, "scala.reflect.ManifestFactory$IntManifest$", ({
      s_reflect_ManifestFactory$IntManifest$: 1,
      s_reflect_ManifestFactory$IntManifest: 1,
      s_reflect_AnyValManifest: 1,
      s_reflect_Manifest: 1,
      s_reflect_ClassTag: 1,
      s_reflect_ClassManifestDeprecatedApis: 1,
      s_reflect_OptManifest: 1,
      Ljava_io_Serializable: 1,
      s_Equals: 1
    }));
    var $n_s_reflect_ManifestFactory$IntManifest$;
    function $m_s_reflect_ManifestFactory$IntManifest$() {
      if ((!$n_s_reflect_ManifestFactory$IntManifest$)) {
        $n_s_reflect_ManifestFactory$IntManifest$ = new $c_s_reflect_ManifestFactory$IntManifest$();
      }
      return $n_s_reflect_ManifestFactory$IntManifest$;
    }
    /** @constructor */
    function $c_s_reflect_ManifestFactory$LongManifest$() {
      this.s_reflect_AnyValManifest__f_toString = null;
      this.s_reflect_AnyValManifest__f_toString = "Long";
    }
    $c_s_reflect_ManifestFactory$LongManifest$.prototype = new $h_s_reflect_ManifestFactory$LongManifest();
    $c_s_reflect_ManifestFactory$LongManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$LongManifest$;
    $c_s_reflect_ManifestFactory$LongManifest$.prototype;
    new $TypeData().initClass($c_s_reflect_ManifestFactory$LongManifest$, "scala.reflect.ManifestFactory$LongManifest$", ({
      s_reflect_ManifestFactory$LongManifest$: 1,
      s_reflect_ManifestFactory$LongManifest: 1,
      s_reflect_AnyValManifest: 1,
      s_reflect_Manifest: 1,
      s_reflect_ClassTag: 1,
      s_reflect_ClassManifestDeprecatedApis: 1,
      s_reflect_OptManifest: 1,
      Ljava_io_Serializable: 1,
      s_Equals: 1
    }));
    var $n_s_reflect_ManifestFactory$LongManifest$;
    function $m_s_reflect_ManifestFactory$LongManifest$() {
      if ((!$n_s_reflect_ManifestFactory$LongManifest$)) {
        $n_s_reflect_ManifestFactory$LongManifest$ = new $c_s_reflect_ManifestFactory$LongManifest$();
      }
      return $n_s_reflect_ManifestFactory$LongManifest$;
    }
    /** @constructor */
    function $c_s_reflect_ManifestFactory$NothingManifest$() {
      this.s_reflect_ManifestFactory$PhantomManifest__f_toString = null;
      this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Nothing";
    }
    $c_s_reflect_ManifestFactory$NothingManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
    $c_s_reflect_ManifestFactory$NothingManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$NothingManifest$;
    $c_s_reflect_ManifestFactory$NothingManifest$.prototype;
    $c_s_reflect_ManifestFactory$NothingManifest$.prototype.runtimeClass__jl_Class = (function() {
      return $d_sr_Nothing$.getClassOf();
    });
    $c_s_reflect_ManifestFactory$NothingManifest$.prototype.newArray__I__O = (function(len) {
      return new $ac_O(len);
    });
    new $TypeData().initClass($c_s_reflect_ManifestFactory$NothingManifest$, "scala.reflect.ManifestFactory$NothingManifest$", ({
      s_reflect_ManifestFactory$NothingManifest$: 1,
      s_reflect_ManifestFactory$PhantomManifest: 1,
      s_reflect_ManifestFactory$ClassTypeManifest: 1,
      s_reflect_Manifest: 1,
      s_reflect_ClassTag: 1,
      s_reflect_ClassManifestDeprecatedApis: 1,
      s_reflect_OptManifest: 1,
      Ljava_io_Serializable: 1,
      s_Equals: 1
    }));
    var $n_s_reflect_ManifestFactory$NothingManifest$;
    function $m_s_reflect_ManifestFactory$NothingManifest$() {
      if ((!$n_s_reflect_ManifestFactory$NothingManifest$)) {
        $n_s_reflect_ManifestFactory$NothingManifest$ = new $c_s_reflect_ManifestFactory$NothingManifest$();
      }
      return $n_s_reflect_ManifestFactory$NothingManifest$;
    }
    /** @constructor */
    function $c_s_reflect_ManifestFactory$NullManifest$() {
      this.s_reflect_ManifestFactory$PhantomManifest__f_toString = null;
      this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Null";
    }
    $c_s_reflect_ManifestFactory$NullManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
    $c_s_reflect_ManifestFactory$NullManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$NullManifest$;
    $c_s_reflect_ManifestFactory$NullManifest$.prototype;
    $c_s_reflect_ManifestFactory$NullManifest$.prototype.runtimeClass__jl_Class = (function() {
      return $d_sr_Null$.getClassOf();
    });
    $c_s_reflect_ManifestFactory$NullManifest$.prototype.newArray__I__O = (function(len) {
      return new $ac_O(len);
    });
    new $TypeData().initClass($c_s_reflect_ManifestFactory$NullManifest$, "scala.reflect.ManifestFactory$NullManifest$", ({
      s_reflect_ManifestFactory$NullManifest$: 1,
      s_reflect_ManifestFactory$PhantomManifest: 1,
      s_reflect_ManifestFactory$ClassTypeManifest: 1,
      s_reflect_Manifest: 1,
      s_reflect_ClassTag: 1,
      s_reflect_ClassManifestDeprecatedApis: 1,
      s_reflect_OptManifest: 1,
      Ljava_io_Serializable: 1,
      s_Equals: 1
    }));
    var $n_s_reflect_ManifestFactory$NullManifest$;
    function $m_s_reflect_ManifestFactory$NullManifest$() {
      if ((!$n_s_reflect_ManifestFactory$NullManifest$)) {
        $n_s_reflect_ManifestFactory$NullManifest$ = new $c_s_reflect_ManifestFactory$NullManifest$();
      }
      return $n_s_reflect_ManifestFactory$NullManifest$;
    }
    /** @constructor */
    function $c_s_reflect_ManifestFactory$ObjectManifest$() {
      this.s_reflect_ManifestFactory$PhantomManifest__f_toString = null;
      this.s_reflect_ManifestFactory$PhantomManifest__f_toString = "Object";
    }
    $c_s_reflect_ManifestFactory$ObjectManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
    $c_s_reflect_ManifestFactory$ObjectManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$ObjectManifest$;
    $c_s_reflect_ManifestFactory$ObjectManifest$.prototype;
    $c_s_reflect_ManifestFactory$ObjectManifest$.prototype.runtimeClass__jl_Class = (function() {
      return $d_O.getClassOf();
    });
    $c_s_reflect_ManifestFactory$ObjectManifest$.prototype.newArray__I__O = (function(len) {
      return new $ac_O(len);
    });
    new $TypeData().initClass($c_s_reflect_ManifestFactory$ObjectManifest$, "scala.reflect.ManifestFactory$ObjectManifest$", ({
      s_reflect_ManifestFactory$ObjectManifest$: 1,
      s_reflect_ManifestFactory$PhantomManifest: 1,
      s_reflect_ManifestFactory$ClassTypeManifest: 1,
      s_reflect_Manifest: 1,
      s_reflect_ClassTag: 1,
      s_reflect_ClassManifestDeprecatedApis: 1,
      s_reflect_OptManifest: 1,
      Ljava_io_Serializable: 1,
      s_Equals: 1
    }));
    var $n_s_reflect_ManifestFactory$ObjectManifest$;
    function $m_s_reflect_ManifestFactory$ObjectManifest$() {
      if ((!$n_s_reflect_ManifestFactory$ObjectManifest$)) {
        $n_s_reflect_ManifestFactory$ObjectManifest$ = new $c_s_reflect_ManifestFactory$ObjectManifest$();
      }
      return $n_s_reflect_ManifestFactory$ObjectManifest$;
    }
    /** @constructor */
    function $c_s_reflect_ManifestFactory$ShortManifest$() {
      this.s_reflect_AnyValManifest__f_toString = null;
      this.s_reflect_AnyValManifest__f_toString = "Short";
    }
    $c_s_reflect_ManifestFactory$ShortManifest$.prototype = new $h_s_reflect_ManifestFactory$ShortManifest();
    $c_s_reflect_ManifestFactory$ShortManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$ShortManifest$;
    $c_s_reflect_ManifestFactory$ShortManifest$.prototype;
    new $TypeData().initClass($c_s_reflect_ManifestFactory$ShortManifest$, "scala.reflect.ManifestFactory$ShortManifest$", ({
      s_reflect_ManifestFactory$ShortManifest$: 1,
      s_reflect_ManifestFactory$ShortManifest: 1,
      s_reflect_AnyValManifest: 1,
      s_reflect_Manifest: 1,
      s_reflect_ClassTag: 1,
      s_reflect_ClassManifestDeprecatedApis: 1,
      s_reflect_OptManifest: 1,
      Ljava_io_Serializable: 1,
      s_Equals: 1
    }));
    var $n_s_reflect_ManifestFactory$ShortManifest$;
    function $m_s_reflect_ManifestFactory$ShortManifest$() {
      if ((!$n_s_reflect_ManifestFactory$ShortManifest$)) {
        $n_s_reflect_ManifestFactory$ShortManifest$ = new $c_s_reflect_ManifestFactory$ShortManifest$();
      }
      return $n_s_reflect_ManifestFactory$ShortManifest$;
    }
    /** @constructor */
    function $c_s_reflect_ManifestFactory$UnitManifest$() {
      this.s_reflect_AnyValManifest__f_toString = null;
      this.s_reflect_AnyValManifest__f_toString = "Unit";
    }
    $c_s_reflect_ManifestFactory$UnitManifest$.prototype = new $h_s_reflect_ManifestFactory$UnitManifest();
    $c_s_reflect_ManifestFactory$UnitManifest$.prototype.constructor = $c_s_reflect_ManifestFactory$UnitManifest$;
    $c_s_reflect_ManifestFactory$UnitManifest$.prototype;
    new $TypeData().initClass($c_s_reflect_ManifestFactory$UnitManifest$, "scala.reflect.ManifestFactory$UnitManifest$", ({
      s_reflect_ManifestFactory$UnitManifest$: 1,
      s_reflect_ManifestFactory$UnitManifest: 1,
      s_reflect_AnyValManifest: 1,
      s_reflect_Manifest: 1,
      s_reflect_ClassTag: 1,
      s_reflect_ClassManifestDeprecatedApis: 1,
      s_reflect_OptManifest: 1,
      Ljava_io_Serializable: 1,
      s_Equals: 1
    }));
    var $n_s_reflect_ManifestFactory$UnitManifest$;
    function $m_s_reflect_ManifestFactory$UnitManifest$() {
      if ((!$n_s_reflect_ManifestFactory$UnitManifest$)) {
        $n_s_reflect_ManifestFactory$UnitManifest$ = new $c_s_reflect_ManifestFactory$UnitManifest$();
      }
      return $n_s_reflect_ManifestFactory$UnitManifest$;
    }
    function $f_sc_Seq__equals__O__Z($thiz, o) {
      if (($thiz === o)) {
        return true;
      } else {
        if ($is_sc_Seq(o)) {
          var x2 = $as_sc_Seq(o);
          if ($n(x2).canEqual__O__Z($thiz)) {
            return $thiz.sameElements__sc_IterableOnce__Z(x2);
          }
        }
        return false;
      }
    }
    function $is_sc_Seq(obj) {
      return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Seq)));
    }
    function $as_sc_Seq(obj) {
      return (($is_sc_Seq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Seq"));
    }
    function $f_sc_Map__equals__O__Z($thiz, o) {
      if (($thiz === o)) {
        return true;
      } else {
        if ($is_sc_Map(o)) {
          var x2 = $as_sc_Map(o);
          if (($n(x2), true)) {
            if (($thiz.size__I() === $n(x2).size__I())) {
              try {
                return $thiz.forall__F1__Z(new $c_sjsr_AnonFunction1(((kv$2$2) => {
                  var kv$2 = $as_T2(kv$2$2);
                  return $m_sr_BoxesRunTime$().equals__O__O__Z($n(x2).getOrElse__O__F0__O($n(kv$2).T2__f__1, $m_sc_Map$().sc_Map$__f_scala$collection$Map$$DefaultSentinelFn), $n(kv$2).T2__f__2);
                })));
              } catch (e) {
                if ((e instanceof $c_jl_ClassCastException)) {
                  return false;
                } else {
                  throw e;
                }
              }
            } else {
              return false;
            }
          }
        }
        return false;
      }
    }
    function $is_sc_Map(obj) {
      return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Map)));
    }
    function $as_sc_Map(obj) {
      return (($is_sc_Map(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Map"));
    }
    function $p_s_concurrent_impl_Promise$Transformation__handleFailure__jl_Throwable__s_concurrent_ExecutionContext__V($thiz, t, e) {
      if (($m_s_util_control_NonFatal$().apply__jl_Throwable__Z(t))) {
        var completed = $thiz.tryComplete0__O__s_util_Try__Z($thiz.ju_concurrent_atomic_AtomicReference__f_value, $m_s_concurrent_impl_Promise$().scala$concurrent$impl$Promise$$resolve__s_util_Try__s_util_Try(new $c_s_util_Failure(t)));
        if (((($thiz.s_concurrent_impl_Promise$Transformation__f__xform === 5) || ($thiz.s_concurrent_impl_Promise$Transformation__f__xform === 6)) || (!completed))) {
          $n(e).reportFailure__jl_Throwable__V(t);
        }
      } else {
        var $x_1 = $n(t);
        throw (($x_1 instanceof $c_sjs_js_JavaScriptException) ? $x_1.sjs_js_JavaScriptException__f_exception : $x_1);
      }
    }
    function $ct_s_concurrent_impl_Promise$Transformation__F1__s_concurrent_ExecutionContext__s_util_Try__I__($thiz, _fun, _ec, _arg, _xform) {
      $thiz.s_concurrent_impl_Promise$Transformation__f__fun = _fun;
      $thiz.s_concurrent_impl_Promise$Transformation__f__ec = _ec;
      $thiz.s_concurrent_impl_Promise$Transformation__f__arg = _arg;
      $thiz.s_concurrent_impl_Promise$Transformation__f__xform = _xform;
      $ct_s_concurrent_impl_Promise$DefaultPromise__($thiz);
      return $thiz;
    }
    function $ct_s_concurrent_impl_Promise$Transformation__I__F1__s_concurrent_ExecutionContext__($thiz, xform, f, ec) {
      $ct_s_concurrent_impl_Promise$Transformation__F1__s_concurrent_ExecutionContext__s_util_Try__I__($thiz, f, $n(ec), null, xform);
      return $thiz;
    }
    /** @constructor */
    function $c_s_concurrent_impl_Promise$Transformation() {
      this.ju_concurrent_atomic_AtomicReference__f_value = null;
      this.s_concurrent_impl_Promise$Transformation__f__fun = null;
      this.s_concurrent_impl_Promise$Transformation__f__ec = null;
      this.s_concurrent_impl_Promise$Transformation__f__arg = null;
      this.s_concurrent_impl_Promise$Transformation__f__xform = 0;
    }
    $c_s_concurrent_impl_Promise$Transformation.prototype = new $h_s_concurrent_impl_Promise$DefaultPromise();
    $c_s_concurrent_impl_Promise$Transformation.prototype.constructor = $c_s_concurrent_impl_Promise$Transformation;
    $c_s_concurrent_impl_Promise$Transformation.prototype;
    $c_s_concurrent_impl_Promise$Transformation.prototype.submitWithValue__s_util_Try__s_concurrent_impl_Promise$Transformation = (function(resolved) {
      this.s_concurrent_impl_Promise$Transformation__f__arg = resolved;
      var e = this.s_concurrent_impl_Promise$Transformation__f__ec;
      try {
        $n(e).execute__jl_Runnable__V(this);
      } catch (e$2) {
        var e$3 = ((e$2 instanceof $c_jl_Throwable) ? e$2 : new $c_sjs_js_JavaScriptException(e$2));
        this.s_concurrent_impl_Promise$Transformation__f__fun = null;
        this.s_concurrent_impl_Promise$Transformation__f__arg = null;
        this.s_concurrent_impl_Promise$Transformation__f__ec = null;
        $p_s_concurrent_impl_Promise$Transformation__handleFailure__jl_Throwable__s_concurrent_ExecutionContext__V(this, e$3, e);
      }
      return this;
    });
    $c_s_concurrent_impl_Promise$Transformation.prototype.run__V = (function() {
      var v = this.s_concurrent_impl_Promise$Transformation__f__arg;
      var fun = this.s_concurrent_impl_Promise$Transformation__f__fun;
      var ec = this.s_concurrent_impl_Promise$Transformation__f__ec;
      this.s_concurrent_impl_Promise$Transformation__f__fun = null;
      this.s_concurrent_impl_Promise$Transformation__f__arg = null;
      this.s_concurrent_impl_Promise$Transformation__f__ec = null;
      try {
        var x1 = this.s_concurrent_impl_Promise$Transformation__f__xform;
        switch (x1) {
          case 0: {
            var resolvedResult = null;
            break;
          }
          case 1: {
            var resolvedResult = ((v instanceof $c_s_util_Success) ? new $c_s_util_Success($n(fun).apply__O__O($n(v).get__O())) : v);
            break;
          }
          case 2: {
            if ((v instanceof $c_s_util_Success)) {
              var f = $n(fun).apply__O__O($n(v).get__O());
              if ((f instanceof $c_s_concurrent_impl_Promise$DefaultPromise)) {
                $n($as_s_concurrent_impl_Promise$DefaultPromise(f)).linkRootOf__s_concurrent_impl_Promise$DefaultPromise__s_concurrent_impl_Promise$Link__V(this, null);
              } else {
                this.completeWith__s_concurrent_Future__s_concurrent_impl_Promise$DefaultPromise($as_s_concurrent_Future(f));
              }
              var resolvedResult = null;
            } else {
              var resolvedResult = v;
            }
            break;
          }
          case 3: {
            var resolvedResult = $m_s_concurrent_impl_Promise$().scala$concurrent$impl$Promise$$resolve__s_util_Try__s_util_Try($as_s_util_Try($n(fun).apply__O__O(v)));
            break;
          }
          case 4: {
            var f$2 = $n(fun).apply__O__O(v);
            if ((f$2 instanceof $c_s_concurrent_impl_Promise$DefaultPromise)) {
              $n($as_s_concurrent_impl_Promise$DefaultPromise(f$2)).linkRootOf__s_concurrent_impl_Promise$DefaultPromise__s_concurrent_impl_Promise$Link__V(this, null);
            } else {
              this.completeWith__s_concurrent_Future__s_concurrent_impl_Promise$DefaultPromise($as_s_concurrent_Future(f$2));
            }
            var resolvedResult = null;
            break;
          }
          case 5: {
            $n(v).foreach__F1__V(fun);
            var resolvedResult = null;
            break;
          }
          case 6: {
            $n(fun).apply__O__O(v);
            var resolvedResult = null;
            break;
          }
          case 7: {
            var resolvedResult = ((v instanceof $c_s_util_Failure) ? $m_s_concurrent_impl_Promise$().scala$concurrent$impl$Promise$$resolve__s_util_Try__s_util_Try($n(v).recover__s_PartialFunction__s_util_Try($as_s_PartialFunction(fun))) : v);
            break;
          }
          case 8: {
            if ((v instanceof $c_s_util_Failure)) {
              var f$3 = $as_s_concurrent_Future($n($as_s_PartialFunction(fun)).applyOrElse__O__F1__O($n($as_s_util_Failure(v)).s_util_Failure__f_exception, $m_s_concurrent_Future$().s_concurrent_Future$__f_recoverWithFailed));
              var resolvedResult = ((f$3 !== $m_s_concurrent_Future$().s_concurrent_Future$__f_recoverWithFailedMarker) ? (((f$3 instanceof $c_s_concurrent_impl_Promise$DefaultPromise) ? $n($as_s_concurrent_impl_Promise$DefaultPromise(f$3)).linkRootOf__s_concurrent_impl_Promise$DefaultPromise__s_concurrent_impl_Promise$Link__V(this, null) : this.completeWith__s_concurrent_Future__s_concurrent_impl_Promise$DefaultPromise(f$3)), null) : v);
            } else {
              var resolvedResult = v;
            }
            break;
          }
          case 9: {
            var resolvedResult = (((v instanceof $c_s_util_Failure) || $uZ($n(fun).apply__O__O($n(v).get__O()))) ? v : $m_s_concurrent_Future$().s_concurrent_Future$__f_filterFailure);
            break;
          }
          case 10: {
            var resolvedResult = ((v instanceof $c_s_util_Success) ? new $c_s_util_Success($n($as_s_PartialFunction(fun)).applyOrElse__O__F1__O($n(v).get__O(), $m_s_concurrent_Future$().s_concurrent_Future$__f_collectFailed)) : v);
            break;
          }
          default: {
            var resolvedResult = new $c_s_util_Failure(new $c_jl_IllegalStateException(("BUG: encountered transformation promise with illegal type: " + this.s_concurrent_impl_Promise$Transformation__f__xform)));
          }
        }
        if ((resolvedResult !== null)) {
          this.tryComplete0__O__s_util_Try__Z(this.ju_concurrent_atomic_AtomicReference__f_value, resolvedResult);
        }
      } catch (e) {
        var e$2 = ((e instanceof $c_jl_Throwable) ? e : new $c_sjs_js_JavaScriptException(e));
        $p_s_concurrent_impl_Promise$Transformation__handleFailure__jl_Throwable__s_concurrent_ExecutionContext__V(this, e$2, ec);
      }
    });
    function $as_s_concurrent_impl_Promise$Transformation(obj) {
      return (((obj instanceof $c_s_concurrent_impl_Promise$Transformation) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.concurrent.impl.Promise$Transformation"));
    }
    new $TypeData().initClass($c_s_concurrent_impl_Promise$Transformation, "scala.concurrent.impl.Promise$Transformation", ({
      s_concurrent_impl_Promise$Transformation: 1,
      s_concurrent_impl_Promise$DefaultPromise: 1,
      ju_concurrent_atomic_AtomicReference: 1,
      Ljava_io_Serializable: 1,
      s_concurrent_Promise: 1,
      s_concurrent_Future: 1,
      s_concurrent_Awaitable: 1,
      F1: 1,
      s_concurrent_impl_Promise$Callbacks: 1,
      jl_Runnable: 1,
      s_concurrent_Batchable: 1
    }));
    /** @constructor */
    function $c_sc_AbstractSeq() {
    }
    $c_sc_AbstractSeq.prototype = new $h_sc_AbstractIterable();
    $c_sc_AbstractSeq.prototype.constructor = $c_sc_AbstractSeq;
    /** @constructor */
    function $h_sc_AbstractSeq() {
    }
    $h_sc_AbstractSeq.prototype = $c_sc_AbstractSeq.prototype;
    $c_sc_AbstractSeq.prototype.canEqual__O__Z = (function(that) {
      return true;
    });
    $c_sc_AbstractSeq.prototype.equals__O__Z = (function(o) {
      return $f_sc_Seq__equals__O__Z(this, o);
    });
    $c_sc_AbstractSeq.prototype.hashCode__I = (function() {
      return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this);
    });
    $c_sc_AbstractSeq.prototype.toString__T = (function() {
      return $f_sc_Iterable__toString__T(this);
    });
    $c_sc_AbstractSeq.prototype.isDefinedAt__I__Z = (function(idx) {
      return $f_sc_SeqOps__isDefinedAt__I__Z(this, idx);
    });
    $c_sc_AbstractSeq.prototype.lengthCompare__I__I = (function(len) {
      return $f_sc_IterableOps__sizeCompare__I__I(this, len);
    });
    $c_sc_AbstractSeq.prototype.isEmpty__Z = (function() {
      return $f_sc_SeqOps__isEmpty__Z(this);
    });
    $c_sc_AbstractSeq.prototype.sameElements__sc_IterableOnce__Z = (function(that) {
      return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that);
    });
    $c_sc_AbstractSeq.prototype.applyOrElse__O__F1__O = (function(x, default$1) {
      return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
    });
    $c_sc_AbstractSeq.prototype.isDefinedAt__O__Z = (function(x) {
      return this.isDefinedAt__I__Z($uI(x));
    });
    /** @constructor */
    function $c_sc_AbstractSeqView() {
    }
    $c_sc_AbstractSeqView.prototype = new $h_sc_AbstractView();
    $c_sc_AbstractSeqView.prototype.constructor = $c_sc_AbstractSeqView;
    /** @constructor */
    function $h_sc_AbstractSeqView() {
    }
    $h_sc_AbstractSeqView.prototype = $c_sc_AbstractSeqView.prototype;
    function $is_sc_IndexedSeq(obj) {
      return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IndexedSeq)));
    }
    function $as_sc_IndexedSeq(obj) {
      return (($is_sc_IndexedSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IndexedSeq"));
    }
    function $is_sc_LinearSeq(obj) {
      return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_LinearSeq)));
    }
    function $as_sc_LinearSeq(obj) {
      return (($is_sc_LinearSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.LinearSeq"));
    }
    /** @constructor */
    function $c_sc_AbstractMap() {
    }
    $c_sc_AbstractMap.prototype = new $h_sc_AbstractIterable();
    $c_sc_AbstractMap.prototype.constructor = $c_sc_AbstractMap;
    /** @constructor */
    function $h_sc_AbstractMap() {
    }
    $h_sc_AbstractMap.prototype = $c_sc_AbstractMap.prototype;
    $c_sc_AbstractMap.prototype.equals__O__Z = (function(o) {
      return $f_sc_Map__equals__O__Z(this, o);
    });
    $c_sc_AbstractMap.prototype.hashCode__I = (function() {
      return $m_s_util_hashing_MurmurHash3$().mapHash__sc_Map__I(this);
    });
    $c_sc_AbstractMap.prototype.stringPrefix__T = (function() {
      return "Map";
    });
    $c_sc_AbstractMap.prototype.toString__T = (function() {
      return $f_sc_Iterable__toString__T(this);
    });
    $c_sc_AbstractMap.prototype.applyOrElse__O__F1__O = (function(x, default$1) {
      return $f_sc_MapOps__applyOrElse__O__F1__O(this, x, default$1);
    });
    $c_sc_AbstractMap.prototype.foreachEntry__F2__V = (function(f) {
      $f_sc_MapOps__foreachEntry__F2__V(this, f);
    });
    $c_sc_AbstractMap.prototype.isDefinedAt__O__Z = (function(key) {
      return this.contains__O__Z(key);
    });
    $c_sc_AbstractMap.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(sb, start, sep, end) {
      return $f_sc_MapOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, sb, start, sep, end);
    });
    function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
      $thiz.sc_SeqView$Id__f_underlying = underlying;
      return $thiz;
    }
    /** @constructor */
    function $c_sc_SeqView$Id() {
      this.sc_SeqView$Id__f_underlying = null;
    }
    $c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
    $c_sc_SeqView$Id.prototype.constructor = $c_sc_SeqView$Id;
    /** @constructor */
    function $h_sc_SeqView$Id() {
    }
    $h_sc_SeqView$Id.prototype = $c_sc_SeqView$Id.prototype;
    $c_sc_SeqView$Id.prototype.apply__I__O = (function(idx) {
      return $n(this.sc_SeqView$Id__f_underlying).apply__I__O(idx);
    });
    $c_sc_SeqView$Id.prototype.length__I = (function() {
      return $n(this.sc_SeqView$Id__f_underlying).length__I();
    });
    $c_sc_SeqView$Id.prototype.isEmpty__Z = (function() {
      return $n(this.sc_SeqView$Id__f_underlying).isEmpty__Z();
    });
    function $is_sci_Seq(obj) {
      return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_Seq)));
    }
    function $as_sci_Seq(obj) {
      return (($is_sci_Seq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Seq"));
    }
    function $isArrayOf_sci_Seq(obj, depth) {
      return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Seq)));
    }
    function $asArrayOf_sci_Seq(obj, depth) {
      return (($isArrayOf_sci_Seq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Seq;", depth));
    }
    var $d_sci_Seq = new $TypeData().initClass(1, "scala.collection.immutable.Seq", ({
      sci_Seq: 1,
      sci_Iterable: 1,
      sc_Iterable: 1,
      sc_IterableOnce: 1,
      sc_IterableOps: 1,
      sc_IterableOnceOps: 1,
      sc_IterableFactoryDefaults: 1,
      sc_Seq: 1,
      s_PartialFunction: 1,
      F1: 1,
      sc_SeqOps: 1,
      s_Equals: 1,
      sci_SeqOps: 1
    }));
    function $is_sci_Map(obj) {
      return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_Map)));
    }
    function $as_sci_Map(obj) {
      return (($is_sci_Map(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Map"));
    }
    /** @constructor */
    function $c_sc_IndexedSeqView$Id(underlying) {
      this.sc_SeqView$Id__f_underlying = null;
      $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
    }
    $c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
    $c_sc_IndexedSeqView$Id.prototype.constructor = $c_sc_IndexedSeqView$Id;
    $c_sc_IndexedSeqView$Id.prototype;
    $c_sc_IndexedSeqView$Id.prototype.iterator__sc_Iterator = (function() {
      return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this);
    });
    $c_sc_IndexedSeqView$Id.prototype.stringPrefix__T = (function() {
      return "IndexedSeqView";
    });
    $c_sc_IndexedSeqView$Id.prototype.lengthCompare__I__I = (function(len) {
      var x = this.length__I();
      return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
    });
    $c_sc_IndexedSeqView$Id.prototype.knownSize__I = (function() {
      return this.length__I();
    });
    new $TypeData().initClass($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
      sc_IndexedSeqView$Id: 1,
      sc_SeqView$Id: 1,
      sc_AbstractSeqView: 1,
      sc_AbstractView: 1,
      sc_AbstractIterable: 1,
      sc_Iterable: 1,
      sc_IterableOnce: 1,
      sc_IterableOps: 1,
      sc_IterableOnceOps: 1,
      sc_IterableFactoryDefaults: 1,
      sc_View: 1,
      Ljava_io_Serializable: 1,
      sc_SeqView: 1,
      sc_SeqOps: 1,
      sc_IndexedSeqView: 1,
      sc_IndexedSeqOps: 1
    }));
    /** @constructor */
    function $c_sci_AbstractSeq() {
    }
    $c_sci_AbstractSeq.prototype = new $h_sc_AbstractSeq();
    $c_sci_AbstractSeq.prototype.constructor = $c_sci_AbstractSeq;
    /** @constructor */
    function $h_sci_AbstractSeq() {
    }
    $h_sci_AbstractSeq.prototype = $c_sci_AbstractSeq.prototype;
    /** @constructor */
    function $c_sci_AbstractMap() {
    }
    $c_sci_AbstractMap.prototype = new $h_sc_AbstractMap();
    $c_sci_AbstractMap.prototype.constructor = $c_sci_AbstractMap;
    /** @constructor */
    function $h_sci_AbstractMap() {
    }
    $h_sci_AbstractMap.prototype = $c_sci_AbstractMap.prototype;
    function $f_sci_IndexedSeq__canEqual__O__Z($thiz, that) {
      if ((!$is_sci_IndexedSeq(that))) {
        return true;
      } else {
        var x2 = $as_sci_IndexedSeq(that);
        return ($thiz.length__I() === $n(x2).length__I());
      }
    }
    function $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z($thiz, o) {
      if ($is_sci_IndexedSeq(o)) {
        var x2 = $as_sci_IndexedSeq(o);
        if (($thiz === x2)) {
          return true;
        } else {
          var length = $thiz.length__I();
          var equal = (length === $n(x2).length__I());
          if (equal) {
            var index = 0;
            var a = $thiz.applyPreferredMaxLength__I();
            var b = $n(x2).applyPreferredMaxLength__I();
            var preferredLength = ((a < b) ? a : b);
            var hi = (length >> 31);
            var hi$1 = (preferredLength >> 31);
            var lo = (preferredLength << 1);
            var hi$2 = (((preferredLength >>> 31) | 0) | (hi$1 << 1));
            if (((hi === hi$2) ? (((-2147483648) ^ length) > ((-2147483648) ^ lo)) : (hi > hi$2))) {
              var maxApplyCompare = preferredLength;
            } else {
              var maxApplyCompare = length;
            }
            while (((index < maxApplyCompare) && equal)) {
              equal = $m_sr_BoxesRunTime$().equals__O__O__Z($thiz.apply__I__O(index), $n(x2).apply__I__O(index));
              index = ((1 + index) | 0);
            }
            if (((index < length) && equal)) {
              var thisIt = $n($thiz.iterator__sc_Iterator()).drop__I__sc_Iterator(index);
              var thatIt = $n($n(x2).iterator__sc_Iterator()).drop__I__sc_Iterator(index);
              while ((equal && $n(thisIt).hasNext__Z())) {
                equal = $m_sr_BoxesRunTime$().equals__O__O__Z($n(thisIt).next__O(), $n(thatIt).next__O());
              }
            }
          }
          return equal;
        }
      } else {
        return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, o);
      }
    }
    function $is_sci_IndexedSeq(obj) {
      return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_IndexedSeq)));
    }
    function $as_sci_IndexedSeq(obj) {
      return (($is_sci_IndexedSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.IndexedSeq"));
    }
    /** @constructor */
    function $c_scm_AbstractSeq() {
    }
    $c_scm_AbstractSeq.prototype = new $h_sc_AbstractSeq();
    $c_scm_AbstractSeq.prototype.constructor = $c_scm_AbstractSeq;
    /** @constructor */
    function $h_scm_AbstractSeq() {
    }
    $h_scm_AbstractSeq.prototype = $c_scm_AbstractSeq.prototype;
    /** @constructor */
    function $c_sci_Map$EmptyMap$() {
    }
    $c_sci_Map$EmptyMap$.prototype = new $h_sci_AbstractMap();
    $c_sci_Map$EmptyMap$.prototype.constructor = $c_sci_Map$EmptyMap$;
    $c_sci_Map$EmptyMap$.prototype;
    $c_sci_Map$EmptyMap$.prototype.size__I = (function() {
      return 0;
    });
    $c_sci_Map$EmptyMap$.prototype.knownSize__I = (function() {
      return 0;
    });
    $c_sci_Map$EmptyMap$.prototype.isEmpty__Z = (function() {
      return true;
    });
    $c_sci_Map$EmptyMap$.prototype.apply__O__E = (function(key) {
      throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
    });
    $c_sci_Map$EmptyMap$.prototype.contains__O__Z = (function(key) {
      return false;
    });
    $c_sci_Map$EmptyMap$.prototype.getOrElse__O__F0__O = (function(key, default$1) {
      return $n(default$1).apply__O();
    });
    $c_sci_Map$EmptyMap$.prototype.iterator__sc_Iterator = (function() {
      return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty;
    });
    $c_sci_Map$EmptyMap$.prototype.updated__O__O__sci_MapOps = (function(key, value) {
      return new $c_sci_Map$Map1(key, value);
    });
    $c_sci_Map$EmptyMap$.prototype.apply__O__O = (function(key) {
      this.apply__O__E(key);
    });
    new $TypeData().initClass($c_sci_Map$EmptyMap$, "scala.collection.immutable.Map$EmptyMap$", ({
      sci_Map$EmptyMap$: 1,
      sci_AbstractMap: 1,
      sc_AbstractMap: 1,
      sc_AbstractIterable: 1,
      sc_Iterable: 1,
      sc_IterableOnce: 1,
      sc_IterableOps: 1,
      sc_IterableOnceOps: 1,
      sc_IterableFactoryDefaults: 1,
      sc_Map: 1,
      sc_MapOps: 1,
      s_PartialFunction: 1,
      F1: 1,
      sc_MapFactoryDefaults: 1,
      s_Equals: 1,
      sci_Map: 1,
      sci_Iterable: 1,
      sci_MapOps: 1,
      Ljava_io_Serializable: 1
    }));
    var $n_sci_Map$EmptyMap$;
    function $m_sci_Map$EmptyMap$() {
      if ((!$n_sci_Map$EmptyMap$)) {
        $n_sci_Map$EmptyMap$ = new $c_sci_Map$EmptyMap$();
      }
      return $n_sci_Map$EmptyMap$;
    }
    /** @constructor */
    function $c_sci_Map$Map1(key1, value1) {
      this.sci_Map$Map1__f_key1 = null;
      this.sci_Map$Map1__f_value1 = null;
      this.sci_Map$Map1__f_key1 = key1;
      this.sci_Map$Map1__f_value1 = value1;
    }
    $c_sci_Map$Map1.prototype = new $h_sci_AbstractMap();
    $c_sci_Map$Map1.prototype.constructor = $c_sci_Map$Map1;
    $c_sci_Map$Map1.prototype;
    $c_sci_Map$Map1.prototype.size__I = (function() {
      return 1;
    });
    $c_sci_Map$Map1.prototype.knownSize__I = (function() {
      return 1;
    });
    $c_sci_Map$Map1.prototype.isEmpty__Z = (function() {
      return false;
    });
    $c_sci_Map$Map1.prototype.apply__O__O = (function(key) {
      if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map1__f_key1)) {
        return this.sci_Map$Map1__f_value1;
      } else {
        throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
      }
    });
    $c_sci_Map$Map1.prototype.contains__O__Z = (function(key) {
      return $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map1__f_key1);
    });
    $c_sci_Map$Map1.prototype.getOrElse__O__F0__O = (function(key, default$1) {
      return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map1__f_key1) ? this.sci_Map$Map1__f_value1 : $n(default$1).apply__O());
    });
    $c_sci_Map$Map1.prototype.iterator__sc_Iterator = (function() {
      var a = new $c_T2(this.sci_Map$Map1__f_key1, this.sci_Map$Map1__f_value1);
      return new $c_sc_Iterator$$anon$20(a);
    });
    $c_sci_Map$Map1.prototype.updated__O__O__sci_Map = (function(key, value) {
      return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map1__f_key1) ? new $c_sci_Map$Map1(this.sci_Map$Map1__f_key1, value) : new $c_sci_Map$Map2(this.sci_Map$Map1__f_key1, this.sci_Map$Map1__f_value1, key, value));
    });
    $c_sci_Map$Map1.prototype.forall__F1__Z = (function(p) {
      return $uZ($n(p).apply__O__O(new $c_T2(this.sci_Map$Map1__f_key1, this.sci_Map$Map1__f_value1)));
    });
    $c_sci_Map$Map1.prototype.hashCode__I = (function() {
      var a = 0;
      var b = 0;
      var c = 1;
      var h = $m_s_util_hashing_MurmurHash3$().tuple2Hash__O__O__I(this.sci_Map$Map1__f_key1, this.sci_Map$Map1__f_value1);
      a = ((a + h) | 0);
      b = (b ^ h);
      c = Math.imul(c, (1 | h));
      h = $m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_mapSeed;
      h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, a);
      h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, b);
      h = $m_s_util_hashing_MurmurHash3$().mixLast__I__I__I(h, c);
      return $m_s_util_hashing_MurmurHash3$().finalizeHash__I__I__I(h, 1);
    });
    $c_sci_Map$Map1.prototype.updated__O__O__sci_MapOps = (function(key, value) {
      return this.updated__O__O__sci_Map(key, value);
    });
    function $as_sci_Map$Map1(obj) {
      return (((obj instanceof $c_sci_Map$Map1) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Map$Map1"));
    }
    new $TypeData().initClass($c_sci_Map$Map1, "scala.collection.immutable.Map$Map1", ({
      sci_Map$Map1: 1,
      sci_AbstractMap: 1,
      sc_AbstractMap: 1,
      sc_AbstractIterable: 1,
      sc_Iterable: 1,
      sc_IterableOnce: 1,
      sc_IterableOps: 1,
      sc_IterableOnceOps: 1,
      sc_IterableFactoryDefaults: 1,
      sc_Map: 1,
      sc_MapOps: 1,
      s_PartialFunction: 1,
      F1: 1,
      sc_MapFactoryDefaults: 1,
      s_Equals: 1,
      sci_Map: 1,
      sci_Iterable: 1,
      sci_MapOps: 1,
      sc_StrictOptimizedIterableOps: 1,
      Ljava_io_Serializable: 1
    }));
    /** @constructor */
    function $c_sci_Map$Map2(key1, value1, key2, value2) {
      this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1 = null;
      this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value1 = null;
      this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2 = null;
      this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value2 = null;
      this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1 = key1;
      this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value1 = value1;
      this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2 = key2;
      this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value2 = value2;
    }
    $c_sci_Map$Map2.prototype = new $h_sci_AbstractMap();
    $c_sci_Map$Map2.prototype.constructor = $c_sci_Map$Map2;
    $c_sci_Map$Map2.prototype;
    $c_sci_Map$Map2.prototype.size__I = (function() {
      return 2;
    });
    $c_sci_Map$Map2.prototype.knownSize__I = (function() {
      return 2;
    });
    $c_sci_Map$Map2.prototype.isEmpty__Z = (function() {
      return false;
    });
    $c_sci_Map$Map2.prototype.apply__O__O = (function(key) {
      if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1)) {
        return this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value1;
      } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2)) {
        return this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value2;
      } else {
        throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
      }
    });
    $c_sci_Map$Map2.prototype.contains__O__Z = (function(key) {
      return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1) || $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2));
    });
    $c_sci_Map$Map2.prototype.getOrElse__O__F0__O = (function(key, default$1) {
      return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1) ? this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value1 : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2) ? this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value2 : $n(default$1).apply__O()));
    });
    $c_sci_Map$Map2.prototype.iterator__sc_Iterator = (function() {
      return new $c_sci_Map$Map2$$anon$1(this);
    });
    $c_sci_Map$Map2.prototype.updated__O__O__sci_Map = (function(key, value) {
      return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1) ? new $c_sci_Map$Map2(this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1, value, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value2) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2) ? new $c_sci_Map$Map2(this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value1, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2, value) : new $c_sci_Map$Map3(this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value1, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value2, key, value)));
    });
    $c_sci_Map$Map2.prototype.forall__F1__Z = (function(p) {
      return ($uZ($n(p).apply__O__O(new $c_T2(this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value1))) && $uZ($n(p).apply__O__O(new $c_T2(this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value2))));
    });
    $c_sci_Map$Map2.prototype.hashCode__I = (function() {
      var a = 0;
      var b = 0;
      var c = 1;
      var h = $m_s_util_hashing_MurmurHash3$().tuple2Hash__O__O__I(this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key1, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value1);
      a = ((a + h) | 0);
      b = (b ^ h);
      c = Math.imul(c, (1 | h));
      h = $m_s_util_hashing_MurmurHash3$().tuple2Hash__O__O__I(this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$key2, this.sci_Map$Map2__f_scala$collection$immutable$Map$Map2$$value2);
      a = ((a + h) | 0);
      b = (b ^ h);
      c = Math.imul(c, (1 | h));
      h = $m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_mapSeed;
      h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, a);
      h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, b);
      h = $m_s_util_hashing_MurmurHash3$().mixLast__I__I__I(h, c);
      return $m_s_util_hashing_MurmurHash3$().finalizeHash__I__I__I(h, 2);
    });
    $c_sci_Map$Map2.prototype.updated__O__O__sci_MapOps = (function(key, value) {
      return this.updated__O__O__sci_Map(key, value);
    });
    function $as_sci_Map$Map2(obj) {
      return (((obj instanceof $c_sci_Map$Map2) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Map$Map2"));
    }
    new $TypeData().initClass($c_sci_Map$Map2, "scala.collection.immutable.Map$Map2", ({
      sci_Map$Map2: 1,
      sci_AbstractMap: 1,
      sc_AbstractMap: 1,
      sc_AbstractIterable: 1,
      sc_Iterable: 1,
      sc_IterableOnce: 1,
      sc_IterableOps: 1,
      sc_IterableOnceOps: 1,
      sc_IterableFactoryDefaults: 1,
      sc_Map: 1,
      sc_MapOps: 1,
      s_PartialFunction: 1,
      F1: 1,
      sc_MapFactoryDefaults: 1,
      s_Equals: 1,
      sci_Map: 1,
      sci_Iterable: 1,
      sci_MapOps: 1,
      sc_StrictOptimizedIterableOps: 1,
      Ljava_io_Serializable: 1
    }));
    /** @constructor */
    function $c_sci_Map$Map3(key1, value1, key2, value2, key3, value3) {
      this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1 = null;
      this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1 = null;
      this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2 = null;
      this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2 = null;
      this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3 = null;
      this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3 = null;
      this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1 = key1;
      this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1 = value1;
      this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2 = key2;
      this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2 = value2;
      this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3 = key3;
      this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3 = value3;
    }
    $c_sci_Map$Map3.prototype = new $h_sci_AbstractMap();
    $c_sci_Map$Map3.prototype.constructor = $c_sci_Map$Map3;
    $c_sci_Map$Map3.prototype;
    $c_sci_Map$Map3.prototype.size__I = (function() {
      return 3;
    });
    $c_sci_Map$Map3.prototype.knownSize__I = (function() {
      return 3;
    });
    $c_sci_Map$Map3.prototype.isEmpty__Z = (function() {
      return false;
    });
    $c_sci_Map$Map3.prototype.apply__O__O = (function(key) {
      if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1)) {
        return this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1;
      } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2)) {
        return this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2;
      } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3)) {
        return this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3;
      } else {
        throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
      }
    });
    $c_sci_Map$Map3.prototype.contains__O__Z = (function(key) {
      return (($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1) || $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2)) || $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3));
    });
    $c_sci_Map$Map3.prototype.getOrElse__O__F0__O = (function(key, default$1) {
      return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1) ? this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1 : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2) ? this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2 : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3) ? this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3 : $n(default$1).apply__O())));
    });
    $c_sci_Map$Map3.prototype.iterator__sc_Iterator = (function() {
      return new $c_sci_Map$Map3$$anon$4(this);
    });
    $c_sci_Map$Map3.prototype.updated__O__O__sci_Map = (function(key, value) {
      return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1) ? new $c_sci_Map$Map3(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1, value, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2) ? new $c_sci_Map$Map3(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2, value, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3) : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3) ? new $c_sci_Map$Map3(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3, value) : new $c_sci_Map$Map4(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3, key, value))));
    });
    $c_sci_Map$Map3.prototype.forall__F1__Z = (function(p) {
      return (($uZ($n(p).apply__O__O(new $c_T2(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1))) && $uZ($n(p).apply__O__O(new $c_T2(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2)))) && $uZ($n(p).apply__O__O(new $c_T2(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3))));
    });
    $c_sci_Map$Map3.prototype.hashCode__I = (function() {
      var a = 0;
      var b = 0;
      var c = 1;
      var h = $m_s_util_hashing_MurmurHash3$().tuple2Hash__O__O__I(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key1, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value1);
      a = ((a + h) | 0);
      b = (b ^ h);
      c = Math.imul(c, (1 | h));
      h = $m_s_util_hashing_MurmurHash3$().tuple2Hash__O__O__I(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key2, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value2);
      a = ((a + h) | 0);
      b = (b ^ h);
      c = Math.imul(c, (1 | h));
      h = $m_s_util_hashing_MurmurHash3$().tuple2Hash__O__O__I(this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$key3, this.sci_Map$Map3__f_scala$collection$immutable$Map$Map3$$value3);
      a = ((a + h) | 0);
      b = (b ^ h);
      c = Math.imul(c, (1 | h));
      h = $m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_mapSeed;
      h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, a);
      h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, b);
      h = $m_s_util_hashing_MurmurHash3$().mixLast__I__I__I(h, c);
      return $m_s_util_hashing_MurmurHash3$().finalizeHash__I__I__I(h, 3);
    });
    $c_sci_Map$Map3.prototype.updated__O__O__sci_MapOps = (function(key, value) {
      return this.updated__O__O__sci_Map(key, value);
    });
    function $as_sci_Map$Map3(obj) {
      return (((obj instanceof $c_sci_Map$Map3) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Map$Map3"));
    }
    new $TypeData().initClass($c_sci_Map$Map3, "scala.collection.immutable.Map$Map3", ({
      sci_Map$Map3: 1,
      sci_AbstractMap: 1,
      sc_AbstractMap: 1,
      sc_AbstractIterable: 1,
      sc_Iterable: 1,
      sc_IterableOnce: 1,
      sc_IterableOps: 1,
      sc_IterableOnceOps: 1,
      sc_IterableFactoryDefaults: 1,
      sc_Map: 1,
      sc_MapOps: 1,
      s_PartialFunction: 1,
      F1: 1,
      sc_MapFactoryDefaults: 1,
      s_Equals: 1,
      sci_Map: 1,
      sci_Iterable: 1,
      sci_MapOps: 1,
      sc_StrictOptimizedIterableOps: 1,
      Ljava_io_Serializable: 1
    }));
    /** @constructor */
    function $c_sci_Map$Map4(key1, value1, key2, value2, key3, value3, key4, value4) {
      this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1 = null;
      this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1 = null;
      this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2 = null;
      this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2 = null;
      this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3 = null;
      this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3 = null;
      this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4 = null;
      this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4 = null;
      this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1 = key1;
      this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1 = value1;
      this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2 = key2;
      this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2 = value2;
      this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3 = key3;
      this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3 = value3;
      this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4 = key4;
      this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4 = value4;
    }
    $c_sci_Map$Map4.prototype = new $h_sci_AbstractMap();
    $c_sci_Map$Map4.prototype.constructor = $c_sci_Map$Map4;
    $c_sci_Map$Map4.prototype;
    $c_sci_Map$Map4.prototype.size__I = (function() {
      return 4;
    });
    $c_sci_Map$Map4.prototype.knownSize__I = (function() {
      return 4;
    });
    $c_sci_Map$Map4.prototype.isEmpty__Z = (function() {
      return false;
    });
    $c_sci_Map$Map4.prototype.apply__O__O = (function(key) {
      if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1)) {
        return this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1;
      } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2)) {
        return this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2;
      } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3)) {
        return this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3;
      } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4)) {
        return this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4;
      } else {
        throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), ("key not found: " + key));
      }
    });
    $c_sci_Map$Map4.prototype.contains__O__Z = (function(key) {
      return ((($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1) || $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2)) || $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3)) || $m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4));
    });
    $c_sci_Map$Map4.prototype.getOrElse__O__F0__O = (function(key, default$1) {
      return ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1) ? this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1 : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2) ? this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2 : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3) ? this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3 : ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4) ? this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4 : $n(default$1).apply__O()))));
    });
    $c_sci_Map$Map4.prototype.iterator__sc_Iterator = (function() {
      return new $c_sci_Map$Map4$$anon$7(this);
    });
    $c_sci_Map$Map4.prototype.updated__O__O__sci_Map = (function(key, value) {
      if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1)) {
        return new $c_sci_Map$Map4(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1, value, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4);
      } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2)) {
        return new $c_sci_Map$Map4(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2, value, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4);
      } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3)) {
        return new $c_sci_Map$Map4(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3, value, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4);
      } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4)) {
        return new $c_sci_Map$Map4(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4, value);
      } else {
        var this$1$1 = $m_sci_HashMap$();
        return $n($n($n($n($n(this$1$1.sci_HashMap$__f_EmptyMap).updated__O__O__sci_HashMap(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1)).updated__O__O__sci_HashMap(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2)).updated__O__O__sci_HashMap(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3)).updated__O__O__sci_HashMap(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4)).updated__O__O__sci_HashMap(key, value);
      }
    });
    $c_sci_Map$Map4.prototype.forall__F1__Z = (function(p) {
      return ((($uZ($n(p).apply__O__O(new $c_T2(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1))) && $uZ($n(p).apply__O__O(new $c_T2(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2)))) && $uZ($n(p).apply__O__O(new $c_T2(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3)))) && $uZ($n(p).apply__O__O(new $c_T2(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4))));
    });
    $c_sci_Map$Map4.prototype.buildTo__sci_HashMapBuilder__sci_HashMapBuilder = (function(builder) {
      return $n($n($n($n(builder).addOne__O__O__sci_HashMapBuilder(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1)).addOne__O__O__sci_HashMapBuilder(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2)).addOne__O__O__sci_HashMapBuilder(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3)).addOne__O__O__sci_HashMapBuilder(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4);
    });
    $c_sci_Map$Map4.prototype.hashCode__I = (function() {
      var a = 0;
      var b = 0;
      var c = 1;
      var h = $m_s_util_hashing_MurmurHash3$().tuple2Hash__O__O__I(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key1, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value1);
      a = ((a + h) | 0);
      b = (b ^ h);
      c = Math.imul(c, (1 | h));
      h = $m_s_util_hashing_MurmurHash3$().tuple2Hash__O__O__I(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key2, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value2);
      a = ((a + h) | 0);
      b = (b ^ h);
      c = Math.imul(c, (1 | h));
      h = $m_s_util_hashing_MurmurHash3$().tuple2Hash__O__O__I(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key3, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value3);
      a = ((a + h) | 0);
      b = (b ^ h);
      c = Math.imul(c, (1 | h));
      h = $m_s_util_hashing_MurmurHash3$().tuple2Hash__O__O__I(this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$key4, this.sci_Map$Map4__f_scala$collection$immutable$Map$Map4$$value4);
      a = ((a + h) | 0);
      b = (b ^ h);
      c = Math.imul(c, (1 | h));
      h = $m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_mapSeed;
      h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, a);
      h = $m_s_util_hashing_MurmurHash3$().mix__I__I__I(h, b);
      h = $m_s_util_hashing_MurmurHash3$().mixLast__I__I__I(h, c);
      return $m_s_util_hashing_MurmurHash3$().finalizeHash__I__I__I(h, 4);
    });
    $c_sci_Map$Map4.prototype.updated__O__O__sci_MapOps = (function(key, value) {
      return this.updated__O__O__sci_Map(key, value);
    });
    function $as_sci_Map$Map4(obj) {
      return (((obj instanceof $c_sci_Map$Map4) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Map$Map4"));
    }
    new $TypeData().initClass($c_sci_Map$Map4, "scala.collection.immutable.Map$Map4", ({
      sci_Map$Map4: 1,
      sci_AbstractMap: 1,
      sc_AbstractMap: 1,
      sc_AbstractIterable: 1,
      sc_Iterable: 1,
      sc_IterableOnce: 1,
      sc_IterableOps: 1,
      sc_IterableOnceOps: 1,
      sc_IterableFactoryDefaults: 1,
      sc_Map: 1,
      sc_MapOps: 1,
      s_PartialFunction: 1,
      F1: 1,
      sc_MapFactoryDefaults: 1,
      s_Equals: 1,
      sci_Map: 1,
      sci_Iterable: 1,
      sci_MapOps: 1,
      sc_StrictOptimizedIterableOps: 1,
      Ljava_io_Serializable: 1
    }));
    /** @constructor */
    function $c_sjsr_WrappedVarArgs(array) {
      this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array = null;
      this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array = array;
    }
    $c_sjsr_WrappedVarArgs.prototype = new $h_O();
    $c_sjsr_WrappedVarArgs.prototype.constructor = $c_sjsr_WrappedVarArgs;
    $c_sjsr_WrappedVarArgs.prototype;
    $c_sjsr_WrappedVarArgs.prototype.canEqual__O__Z = (function(that) {
      return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
    });
    $c_sjsr_WrappedVarArgs.prototype.sameElements__sc_IterableOnce__Z = (function(o) {
      return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
    });
    $c_sjsr_WrappedVarArgs.prototype.applyPreferredMaxLength__I = (function() {
      return $m_sci_IndexedSeqDefaults$().sci_IndexedSeqDefaults$__f_defaultApplyPreferredMaxLength;
    });
    $c_sjsr_WrappedVarArgs.prototype.iterator__sc_Iterator = (function() {
      var this$1$1 = new $c_sc_IndexedSeqView$Id(this);
      return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1$1);
    });
    $c_sjsr_WrappedVarArgs.prototype.lengthCompare__I__I = (function(len) {
      var x = this.length__I();
      return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
    });
    $c_sjsr_WrappedVarArgs.prototype.knownSize__I = (function() {
      return this.length__I();
    });
    $c_sjsr_WrappedVarArgs.prototype.equals__O__Z = (function(o) {
      return $f_sc_Seq__equals__O__Z(this, o);
    });
    $c_sjsr_WrappedVarArgs.prototype.hashCode__I = (function() {
      return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this);
    });
    $c_sjsr_WrappedVarArgs.prototype.toString__T = (function() {
      return $f_sc_Iterable__toString__T(this);
    });
    $c_sjsr_WrappedVarArgs.prototype.isEmpty__Z = (function() {
      return $f_sc_SeqOps__isEmpty__Z(this);
    });
    $c_sjsr_WrappedVarArgs.prototype.applyOrElse__O__F1__O = (function(x, default$1) {
      return $f_s_PartialFunction__applyOrElse__O__F1__O(this, x, default$1);
    });
    $c_sjsr_WrappedVarArgs.prototype.foreach__F1__V = (function(f) {
      $f_sc_IterableOnceOps__foreach__F1__V(this, f);
    });
    $c_sjsr_WrappedVarArgs.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
      return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len);
    });
    $c_sjsr_WrappedVarArgs.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
      return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
    });
    $c_sjsr_WrappedVarArgs.prototype.length__I = (function() {
      return $uI(this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array.length);
    });
    $c_sjsr_WrappedVarArgs.prototype.apply__I__O = (function(idx) {
      return this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array[idx];
    });
    $c_sjsr_WrappedVarArgs.prototype.className__T = (function() {
      return "WrappedVarArgs";
    });
    $c_sjsr_WrappedVarArgs.prototype.isDefinedAt__O__Z = (function(x) {
      var idx = $uI(x);
      return $f_sc_SeqOps__isDefinedAt__I__Z(this, idx);
    });
    $c_sjsr_WrappedVarArgs.prototype.apply__O__O = (function(v1) {
      return this.apply__I__O($uI(v1));
    });
    new $TypeData().initClass($c_sjsr_WrappedVarArgs, "scala.scalajs.runtime.WrappedVarArgs", ({
      sjsr_WrappedVarArgs: 1,
      sci_IndexedSeq: 1,
      sci_Seq: 1,
      sci_Iterable: 1,
      sc_Iterable: 1,
      sc_IterableOnce: 1,
      sc_IterableOps: 1,
      sc_IterableOnceOps: 1,
      sc_IterableFactoryDefaults: 1,
      sc_Seq: 1,
      s_PartialFunction: 1,
      F1: 1,
      sc_SeqOps: 1,
      s_Equals: 1,
      sci_SeqOps: 1,
      sc_IndexedSeq: 1,
      sc_IndexedSeqOps: 1,
      sci_IndexedSeqOps: 1,
      sci_StrictOptimizedSeqOps: 1,
      sc_StrictOptimizedSeqOps: 1,
      sc_StrictOptimizedIterableOps: 1,
      Ljava_io_Serializable: 1
    }));
    /** @constructor */
    function $c_sci_HashMap(rootNode) {
      this.sci_HashMap__f_rootNode = null;
      this.sci_HashMap__f_rootNode = rootNode;
    }
    $c_sci_HashMap.prototype = new $h_sci_AbstractMap();
    $c_sci_HashMap.prototype.constructor = $c_sci_HashMap;
    $c_sci_HashMap.prototype;
    $c_sci_HashMap.prototype.knownSize__I = (function() {
      return $n(this.sci_HashMap__f_rootNode).sci_BitmapIndexedMapNode__f_size;
    });
    $c_sci_HashMap.prototype.size__I = (function() {
      return $n(this.sci_HashMap__f_rootNode).sci_BitmapIndexedMapNode__f_size;
    });
    $c_sci_HashMap.prototype.isEmpty__Z = (function() {
      return ($n(this.sci_HashMap__f_rootNode).sci_BitmapIndexedMapNode__f_size === 0);
    });
    $c_sci_HashMap.prototype.iterator__sc_Iterator = (function() {
      return (this.isEmpty__Z() ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : new $c_sci_MapKeyValueTupleIterator(this.sci_HashMap__f_rootNode));
    });
    $c_sci_HashMap.prototype.contains__O__Z = (function(key) {
      var keyUnimprovedHash = $m_sr_Statics$().anyHash__O__I(key);
      var keyHash = $m_sc_Hashing$().improve__I__I(keyUnimprovedHash);
      return $n(this.sci_HashMap__f_rootNode).containsKey__O__I__I__I__Z(key, keyUnimprovedHash, keyHash, 0);
    });
    $c_sci_HashMap.prototype.apply__O__O = (function(key) {
      var keyUnimprovedHash = $m_sr_Statics$().anyHash__O__I(key);
      var keyHash = $m_sc_Hashing$().improve__I__I(keyUnimprovedHash);
      return $n(this.sci_HashMap__f_rootNode).apply__O__I__I__I__O(key, keyUnimprovedHash, keyHash, 0);
    });
    $c_sci_HashMap.prototype.getOrElse__O__F0__O = (function(key, default$1) {
      var keyUnimprovedHash = $m_sr_Statics$().anyHash__O__I(key);
      var keyHash = $m_sc_Hashing$().improve__I__I(keyUnimprovedHash);
      return $n(this.sci_HashMap__f_rootNode).getOrElse__O__I__I__I__F0__O(key, keyUnimprovedHash, keyHash, 0, default$1);
    });
    $c_sci_HashMap.prototype.updated__O__O__sci_HashMap = (function(key, value) {
      var keyUnimprovedHash = $m_sr_Statics$().anyHash__O__I(key);
      var newRootNode = $n(this.sci_HashMap__f_rootNode).updated__O__O__I__I__I__Z__sci_BitmapIndexedMapNode(key, value, keyUnimprovedHash, $m_sc_Hashing$().improve__I__I(keyUnimprovedHash), 0, true);
      return ((newRootNode === this.sci_HashMap__f_rootNode) ? this : new $c_sci_HashMap(newRootNode));
    });
    $c_sci_HashMap.prototype.foreachEntry__F2__V = (function(f) {
      $n(this.sci_HashMap__f_rootNode).foreachEntry__F2__V(f);
    });
    $c_sci_HashMap.prototype.equals__O__Z = (function(that) {
      if ((that instanceof $c_sci_HashMap)) {
        var x2 = $as_sci_HashMap(that);
        if ((this === x2)) {
          return true;
        } else {
          var x = this.sci_HashMap__f_rootNode;
          var x$2 = $n(x2).sci_HashMap__f_rootNode;
          return ((x === null) ? (x$2 === null) : $n(x).equals__O__Z(x$2));
        }
      } else {
        return $f_sc_Map__equals__O__Z(this, that);
      }
    });
    $c_sci_HashMap.prototype.hashCode__I = (function() {
      if (this.isEmpty__Z()) {
        return $m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_emptyMapHash;
      } else {
        var hashIterator = new $c_sci_MapKeyValueTupleHashIterator(this.sci_HashMap__f_rootNode);
        var hash = $m_s_util_hashing_MurmurHash3$().unorderedHash__sc_IterableOnce__I__I(hashIterator, $m_s_util_hashing_MurmurHash3$().s_util_hashing_MurmurHash3$__f_mapSeed);
        return hash;
      }
    });
    $c_sci_HashMap.prototype.className__T = (function() {
      return "HashMap";
    });
    $c_sci_HashMap.prototype.updated__O__O__sci_MapOps = (function(key, value) {
      return this.updated__O__O__sci_HashMap(key, value);
    });
    function $as_sci_HashMap(obj) {
      return (((obj instanceof $c_sci_HashMap) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.HashMap"));
    }
    new $TypeData().initClass($c_sci_HashMap, "scala.collection.immutable.HashMap", ({
      sci_HashMap: 1,
      sci_AbstractMap: 1,
      sc_AbstractMap: 1,
      sc_AbstractIterable: 1,
      sc_Iterable: 1,
      sc_IterableOnce: 1,
      sc_IterableOps: 1,
      sc_IterableOnceOps: 1,
      sc_IterableFactoryDefaults: 1,
      sc_Map: 1,
      sc_MapOps: 1,
      s_PartialFunction: 1,
      F1: 1,
      sc_MapFactoryDefaults: 1,
      s_Equals: 1,
      sci_Map: 1,
      sci_Iterable: 1,
      sci_MapOps: 1,
      sci_StrictOptimizedMapOps: 1,
      sc_StrictOptimizedMapOps: 1,
      sc_StrictOptimizedIterableOps: 1,
      scg_DefaultSerializable: 1,
      Ljava_io_Serializable: 1
    }));
    /** @constructor */
    function $c_scm_AbstractBuffer() {
    }
    $c_scm_AbstractBuffer.prototype = new $h_scm_AbstractSeq();
    $c_scm_AbstractBuffer.prototype.constructor = $c_scm_AbstractBuffer;
    /** @constructor */
    function $h_scm_AbstractBuffer() {
    }
    $h_scm_AbstractBuffer.prototype = $c_scm_AbstractBuffer.prototype;
    $c_scm_AbstractBuffer.prototype.addAll__sc_IterableOnce__scm_Growable = (function(elems) {
      return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
    });
    /** @constructor */
    function $c_sci_ArraySeq() {
    }
    $c_sci_ArraySeq.prototype = new $h_sci_AbstractSeq();
    $c_sci_ArraySeq.prototype.constructor = $c_sci_ArraySeq;
    /** @constructor */
    function $h_sci_ArraySeq() {
    }
    $h_sci_ArraySeq.prototype = $c_sci_ArraySeq.prototype;
    $c_sci_ArraySeq.prototype.canEqual__O__Z = (function(that) {
      return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
    });
    $c_sci_ArraySeq.prototype.sameElements__sc_IterableOnce__Z = (function(o) {
      return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
    });
    $c_sci_ArraySeq.prototype.stringPrefix__T = (function() {
      return "IndexedSeq";
    });
    $c_sci_ArraySeq.prototype.lengthCompare__I__I = (function(len) {
      var x = this.length__I();
      return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
    });
    $c_sci_ArraySeq.prototype.knownSize__I = (function() {
      return this.length__I();
    });
    $c_sci_ArraySeq.prototype.className__T = (function() {
      return "ArraySeq";
    });
    $c_sci_ArraySeq.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
      var srcLen = this.length__I();
      var destLen = $m_jl_reflect_Array$().getLength__O__I(xs);
      var x = ((len < srcLen) ? len : srcLen);
      var y = ((destLen - start) | 0);
      var x$1 = ((x < y) ? x : y);
      var copied = ((x$1 > 0) ? x$1 : 0);
      if ((copied > 0)) {
        $m_s_Array$().copy__O__I__O__I__I__V(this.unsafeArray__O(), 0, xs, start, copied);
      }
      return copied;
    });
    $c_sci_ArraySeq.prototype.applyPreferredMaxLength__I = (function() {
      return 2147483647;
    });
    function $as_sci_ArraySeq(obj) {
      return (((obj instanceof $c_sci_ArraySeq) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq"));
    }
    function $ct_sci_Vector__AO__($thiz, prefix1) {
      $thiz.sci_Vector__f_prefix1 = prefix1;
      return $thiz;
    }
    /** @constructor */
    function $c_sci_Vector() {
      this.sci_Vector__f_prefix1 = null;
    }
    $c_sci_Vector.prototype = new $h_sci_AbstractSeq();
    $c_sci_Vector.prototype.constructor = $c_sci_Vector;
    /** @constructor */
    function $h_sci_Vector() {
    }
    $h_sci_Vector.prototype = $c_sci_Vector.prototype;
    $c_sci_Vector.prototype.canEqual__O__Z = (function(that) {
      return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
    });
    $c_sci_Vector.prototype.sameElements__sc_IterableOnce__Z = (function(o) {
      return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
    });
    $c_sci_Vector.prototype.stringPrefix__T = (function() {
      return "IndexedSeq";
    });
    $c_sci_Vector.prototype.lengthCompare__I__I = (function(len) {
      var x = this.length__I();
      return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
    });
    $c_sci_Vector.prototype.knownSize__I = (function() {
      return this.length__I();
    });
    $c_sci_Vector.prototype.length__I = (function() {
      return ((this instanceof $c_sci_BigVector) ? $n($as_sci_BigVector(this)).sci_BigVector__f_length0 : $n(this.sci_Vector__f_prefix1).u.length);
    });
    $c_sci_Vector.prototype.iterator__sc_Iterator = (function() {
      return (($m_sci_Vector0$() === this) ? $m_sci_Vector$().sci_Vector$__f_scala$collection$immutable$Vector$$emptyIterator : new $c_sci_NewVectorIterator(this, this.length__I(), this.vectorSliceCount__I()));
    });
    $c_sci_Vector.prototype.className__T = (function() {
      return "Vector";
    });
    $c_sci_Vector.prototype.copyToArray__O__I__I__I = (function(xs, start, len) {
      return $n(this.iterator__sc_Iterator()).copyToArray__O__I__I__I(xs, start, len);
    });
    $c_sci_Vector.prototype.applyPreferredMaxLength__I = (function() {
      return $m_sci_Vector$().sci_Vector$__f_scala$collection$immutable$Vector$$defaultApplyPreferredMaxLength;
    });
    $c_sci_Vector.prototype.ioob__I__jl_IndexOutOfBoundsException = (function(index) {
      return $m_scg_CommonErrors$().indexOutOfBounds__I__I__jl_IndexOutOfBoundsException(index, (((-1) + this.length__I()) | 0));
    });
    $c_sci_Vector.prototype.foreach__F1__V = (function(f) {
      var c = this.vectorSliceCount__I();
      var i = 0;
      while ((i < c)) {
        var $x_1 = $m_sci_VectorStatics$();
        var idx = i;
        var c$1 = ((c / 2) | 0);
        var a = ((idx - c$1) | 0);
        $x_1.foreachRec__I__AO__F1__V((((-1) + ((((1 + c$1) | 0) - ((a < 0) ? ((-a) | 0) : a)) | 0)) | 0), this.vectorSlice__I__AO(i), f);
        i = ((1 + i) | 0);
      }
    });
    function $as_sci_Vector(obj) {
      return (((obj instanceof $c_sci_Vector) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector"));
    }
    /** @constructor */
    function $c_scm_ArraySeq() {
    }
    $c_scm_ArraySeq.prototype = new $h_scm_AbstractSeq();
    $c_scm_ArraySeq.prototype.constructor = $c_scm_ArraySeq;
    /** @constructor */
    function $h_scm_ArraySeq() {
    }
    $h_scm_ArraySeq.prototype = $c_scm_ArraySeq.prototype;
    $c_scm_ArraySeq.prototype.stringPrefix__T = (function() {
      return "IndexedSeq";
    });
    $c_scm_ArraySeq.prototype.lengthCompare__I__I = (function(len) {
      var x = this.length__I();
      return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
    });
    $c_scm_ArraySeq.prototype.knownSize__I = (function() {
      return this.length__I();
    });
    $c_scm_ArraySeq.prototype.className__T = (function() {
      return "ArraySeq";
    });
    $c_scm_ArraySeq.prototype.equals__O__Z = (function(other) {
      if ((other instanceof $c_scm_ArraySeq)) {
        var x2 = $as_scm_ArraySeq(other);
        var xs = this.array__O();
        var $x_1 = $m_jl_reflect_Array$().getLength__O__I(xs);
        var xs$1 = $n(x2).array__O();
        if (($x_1 !== $m_jl_reflect_Array$().getLength__O__I(xs$1))) {
          return false;
        }
      }
      return $f_sc_Seq__equals__O__Z(this, other);
    });
    function $as_scm_ArraySeq(obj) {
      return (((obj instanceof $c_scm_ArraySeq) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq"));
    }
    /** @constructor */
    function $c_Lscalatags_JsDom$all$() {
      this.Lscalatags_JsDom$all$__f_class$lzy3 = null;
      this.Lscalatags_JsDom$all$__f_classbitmap$3 = false;
      this.Lscalatags_JsDom$all$__f_cls$lzy2 = null;
      this.Lscalatags_JsDom$all$__f_clsbitmap$2 = false;
      this.Lscalatags_JsDom$all$__f_id$lzy3 = null;
      this.Lscalatags_JsDom$all$__f_idbitmap$3 = false;
      this.Lscalatags_JsDom$all$__f_placeholder$lzy2 = null;
      this.Lscalatags_JsDom$all$__f_placeholderbitmap$2 = false;
      this.Lscalatags_JsDom$all$__f_target$lzy2 = null;
      this.Lscalatags_JsDom$all$__f_targetbitmap$2 = false;
      this.Lscalatags_JsDom$all$__f_type$lzy3 = null;
      this.Lscalatags_JsDom$all$__f_typebitmap$3 = false;
      this.Lscalatags_JsDom$all$__f_onsubmit$lzy2 = null;
      this.Lscalatags_JsDom$all$__f_onsubmitbitmap$2 = false;
      this.Lscalatags_JsDom$all$__f_href$lzy2 = null;
      this.Lscalatags_JsDom$all$__f_hrefbitmap$2 = false;
      this.Lscalatags_JsDom$all$__f_alt$lzy2 = null;
      this.Lscalatags_JsDom$all$__f_altbitmap$2 = false;
      this.Lscalatags_JsDom$all$__f_src$lzy2 = null;
      this.Lscalatags_JsDom$all$__f_srcbitmap$2 = false;
      this.Lscalatags_JsDom$all$__f_h1$lzy2 = null;
      this.Lscalatags_JsDom$all$__f_h1bitmap$2 = false;
      this.Lscalatags_JsDom$all$__f_p$lzy2 = null;
      this.Lscalatags_JsDom$all$__f_pbitmap$2 = false;
      this.Lscalatags_JsDom$all$__f_div$lzy2 = null;
      this.Lscalatags_JsDom$all$__f_divbitmap$2 = false;
      this.Lscalatags_JsDom$all$__f_a$lzy2 = null;
      this.Lscalatags_JsDom$all$__f_abitmap$2 = false;
      this.Lscalatags_JsDom$all$__f_img$lzy2 = null;
      this.Lscalatags_JsDom$all$__f_imgbitmap$2 = false;
      this.Lscalatags_JsDom$all$__f_form$lzy2 = null;
      this.Lscalatags_JsDom$all$__f_formbitmap$2 = false;
      this.Lscalatags_JsDom$all$__f_input$lzy2 = null;
      this.Lscalatags_JsDom$all$__f_inputbitmap$2 = false;
      this.Lscalatags_JsDom$all$__f_button$lzy2 = null;
      this.Lscalatags_JsDom$all$__f_buttonbitmap$2 = false;
      this.Lscalatags_JsDom$all$__f_stringAttr = null;
      this.Lscalatags_JsDom$all$__f_stringStyle = null;
      this.Lscalatags_JsDom$all$__f_booleanStyle = null;
      $n_Lscalatags_JsDom$all$ = this;
      $f_Lscalatags_generic_MouseEventAttrs__$init$__V(this);
      $f_Lscalatags_generic_Aggregate__$init$__V(this);
    }
    $c_Lscalatags_JsDom$all$.prototype = new $h_O();
    $c_Lscalatags_JsDom$all$.prototype.constructor = $c_Lscalatags_JsDom$all$;
    $c_Lscalatags_JsDom$all$.prototype;
    $c_Lscalatags_JsDom$all$.prototype.class__Lscalatags_generic_Attr = (function() {
      if ((!this.Lscalatags_JsDom$all$__f_classbitmap$3)) {
        this.Lscalatags_JsDom$all$__f_class$lzy3 = $f_Lscalatags_generic_Util__attr__T__Lscalatags_generic_Namespace__Z__Lscalatags_generic_Attr(this, "class", null, false);
        this.Lscalatags_JsDom$all$__f_classbitmap$3 = true;
      }
      return this.Lscalatags_JsDom$all$__f_class$lzy3;
    });
    $c_Lscalatags_JsDom$all$.prototype.cls__Lscalatags_generic_Attr = (function() {
      if ((!this.Lscalatags_JsDom$all$__f_clsbitmap$2)) {
        this.Lscalatags_JsDom$all$__f_cls$lzy2 = this.class__Lscalatags_generic_Attr();
        this.Lscalatags_JsDom$all$__f_clsbitmap$2 = true;
      }
      return this.Lscalatags_JsDom$all$__f_cls$lzy2;
    });
    $c_Lscalatags_JsDom$all$.prototype.id__Lscalatags_generic_Attr = (function() {
      if ((!this.Lscalatags_JsDom$all$__f_idbitmap$3)) {
        this.Lscalatags_JsDom$all$__f_id$lzy3 = $f_Lscalatags_generic_Util__attr__T__Lscalatags_generic_Namespace__Z__Lscalatags_generic_Attr(this, "id", null, false);
        this.Lscalatags_JsDom$all$__f_idbitmap$3 = true;
      }
      return this.Lscalatags_JsDom$all$__f_id$lzy3;
    });
    $c_Lscalatags_JsDom$all$.prototype.placeholder__Lscalatags_generic_Attr = (function() {
      if ((!this.Lscalatags_JsDom$all$__f_placeholderbitmap$2)) {
        this.Lscalatags_JsDom$all$__f_placeholder$lzy2 = $f_Lscalatags_generic_Util__attr__T__Lscalatags_generic_Namespace__Z__Lscalatags_generic_Attr(this, "placeholder", null, false);
        this.Lscalatags_JsDom$all$__f_placeholderbitmap$2 = true;
      }
      return this.Lscalatags_JsDom$all$__f_placeholder$lzy2;
    });
    $c_Lscalatags_JsDom$all$.prototype.target__Lscalatags_generic_Attr = (function() {
      if ((!this.Lscalatags_JsDom$all$__f_targetbitmap$2)) {
        this.Lscalatags_JsDom$all$__f_target$lzy2 = $f_Lscalatags_generic_Util__attr__T__Lscalatags_generic_Namespace__Z__Lscalatags_generic_Attr(this, "target", null, false);
        this.Lscalatags_JsDom$all$__f_targetbitmap$2 = true;
      }
      return this.Lscalatags_JsDom$all$__f_target$lzy2;
    });
    $c_Lscalatags_JsDom$all$.prototype.type__Lscalatags_generic_Attr = (function() {
      if ((!this.Lscalatags_JsDom$all$__f_typebitmap$3)) {
        this.Lscalatags_JsDom$all$__f_type$lzy3 = $f_Lscalatags_generic_Util__attr__T__Lscalatags_generic_Namespace__Z__Lscalatags_generic_Attr(this, "type", null, false);
        this.Lscalatags_JsDom$all$__f_typebitmap$3 = true;
      }
      return this.Lscalatags_JsDom$all$__f_type$lzy3;
    });
    $c_Lscalatags_JsDom$all$.prototype.onsubmit__Lscalatags_generic_Attr = (function() {
      if ((!this.Lscalatags_JsDom$all$__f_onsubmitbitmap$2)) {
        this.Lscalatags_JsDom$all$__f_onsubmit$lzy2 = $f_Lscalatags_generic_Util__attr__T__Lscalatags_generic_Namespace__Z__Lscalatags_generic_Attr(this, "onsubmit", null, false);
        this.Lscalatags_JsDom$all$__f_onsubmitbitmap$2 = true;
      }
      return this.Lscalatags_JsDom$all$__f_onsubmit$lzy2;
    });
    $c_Lscalatags_JsDom$all$.prototype.href__Lscalatags_generic_Attr = (function() {
      if ((!this.Lscalatags_JsDom$all$__f_hrefbitmap$2)) {
        this.Lscalatags_JsDom$all$__f_href$lzy2 = $f_Lscalatags_generic_Util__attr__T__Lscalatags_generic_Namespace__Z__Lscalatags_generic_Attr(this, "href", null, false);
        this.Lscalatags_JsDom$all$__f_hrefbitmap$2 = true;
      }
      return this.Lscalatags_JsDom$all$__f_href$lzy2;
    });
    $c_Lscalatags_JsDom$all$.prototype.alt__Lscalatags_generic_Attr = (function() {
      if ((!this.Lscalatags_JsDom$all$__f_altbitmap$2)) {
        this.Lscalatags_JsDom$all$__f_alt$lzy2 = $f_Lscalatags_generic_Util__attr__T__Lscalatags_generic_Namespace__Z__Lscalatags_generic_Attr(this, "alt", null, false);
        this.Lscalatags_JsDom$all$__f_altbitmap$2 = true;
      }
      return this.Lscalatags_JsDom$all$__f_alt$lzy2;
    });
    $c_Lscalatags_JsDom$all$.prototype.src__Lscalatags_generic_Attr = (function() {
      if ((!this.Lscalatags_JsDom$all$__f_srcbitmap$2)) {
        this.Lscalatags_JsDom$all$__f_src$lzy2 = $f_Lscalatags_generic_Util__attr__T__Lscalatags_generic_Namespace__Z__Lscalatags_generic_Attr(this, "src", null, false);
        this.Lscalatags_JsDom$all$__f_srcbitmap$2 = true;
      }
      return this.Lscalatags_JsDom$all$__f_src$lzy2;
    });
    $c_Lscalatags_JsDom$all$.prototype.h1__Lscalatags_generic_TypedTag = (function() {
      if ((!this.Lscalatags_JsDom$all$__f_h1bitmap$2)) {
        var ns = $m_Lscalatags_generic_Namespace$().Lscalatags_generic_Namespace$__f_htmlNamespaceConfig;
        this.Lscalatags_JsDom$all$__f_h1$lzy2 = $f_Lscalatags_jsdom_TagFactory__typedTag__T__Z__Lscalatags_generic_Namespace__Lscalatags_generic_TypedTag(this, "h1", false, ns);
        this.Lscalatags_JsDom$all$__f_h1bitmap$2 = true;
      }
      return this.Lscalatags_JsDom$all$__f_h1$lzy2;
    });
    $c_Lscalatags_JsDom$all$.prototype.p__Lscalatags_generic_TypedTag = (function() {
      if ((!this.Lscalatags_JsDom$all$__f_pbitmap$2)) {
        var ns = $m_Lscalatags_generic_Namespace$().Lscalatags_generic_Namespace$__f_htmlNamespaceConfig;
        this.Lscalatags_JsDom$all$__f_p$lzy2 = $f_Lscalatags_jsdom_TagFactory__typedTag__T__Z__Lscalatags_generic_Namespace__Lscalatags_generic_TypedTag(this, "p", false, ns);
        this.Lscalatags_JsDom$all$__f_pbitmap$2 = true;
      }
      return this.Lscalatags_JsDom$all$__f_p$lzy2;
    });
    $c_Lscalatags_JsDom$all$.prototype.div__Lscalatags_generic_TypedTag = (function() {
      if ((!this.Lscalatags_JsDom$all$__f_divbitmap$2)) {
        var ns = $m_Lscalatags_generic_Namespace$().Lscalatags_generic_Namespace$__f_htmlNamespaceConfig;
        this.Lscalatags_JsDom$all$__f_div$lzy2 = $f_Lscalatags_jsdom_TagFactory__typedTag__T__Z__Lscalatags_generic_Namespace__Lscalatags_generic_TypedTag(this, "div", false, ns);
        this.Lscalatags_JsDom$all$__f_divbitmap$2 = true;
      }
      return this.Lscalatags_JsDom$all$__f_div$lzy2;
    });
    $c_Lscalatags_JsDom$all$.prototype.a__Lscalatags_generic_TypedTag = (function() {
      if ((!this.Lscalatags_JsDom$all$__f_abitmap$2)) {
        var ns = $m_Lscalatags_generic_Namespace$().Lscalatags_generic_Namespace$__f_htmlNamespaceConfig;
        this.Lscalatags_JsDom$all$__f_a$lzy2 = $f_Lscalatags_jsdom_TagFactory__typedTag__T__Z__Lscalatags_generic_Namespace__Lscalatags_generic_TypedTag(this, "a", false, ns);
        this.Lscalatags_JsDom$all$__f_abitmap$2 = true;
      }
      return this.Lscalatags_JsDom$all$__f_a$lzy2;
    });
    $c_Lscalatags_JsDom$all$.prototype.img__Lscalatags_generic_TypedTag = (function() {
      if ((!this.Lscalatags_JsDom$all$__f_imgbitmap$2)) {
        var ns = $m_Lscalatags_generic_Namespace$().Lscalatags_generic_Namespace$__f_htmlNamespaceConfig;
        this.Lscalatags_JsDom$all$__f_img$lzy2 = $f_Lscalatags_jsdom_TagFactory__typedTag__T__Z__Lscalatags_generic_Namespace__Lscalatags_generic_TypedTag(this, "img", true, ns);
        this.Lscalatags_JsDom$all$__f_imgbitmap$2 = true;
      }
      return this.Lscalatags_JsDom$all$__f_img$lzy2;
    });
    $c_Lscalatags_JsDom$all$.prototype.form__Lscalatags_generic_TypedTag = (function() {
      if ((!this.Lscalatags_JsDom$all$__f_formbitmap$2)) {
        var ns = $m_Lscalatags_generic_Namespace$().Lscalatags_generic_Namespace$__f_htmlNamespaceConfig;
        this.Lscalatags_JsDom$all$__f_form$lzy2 = $f_Lscalatags_jsdom_TagFactory__typedTag__T__Z__Lscalatags_generic_Namespace__Lscalatags_generic_TypedTag(this, "form", false, ns);
        this.Lscalatags_JsDom$all$__f_formbitmap$2 = true;
      }
      return this.Lscalatags_JsDom$all$__f_form$lzy2;
    });
    $c_Lscalatags_JsDom$all$.prototype.input__Lscalatags_generic_TypedTag = (function() {
      if ((!this.Lscalatags_JsDom$all$__f_inputbitmap$2)) {
        var ns = $m_Lscalatags_generic_Namespace$().Lscalatags_generic_Namespace$__f_htmlNamespaceConfig;
        this.Lscalatags_JsDom$all$__f_input$lzy2 = $f_Lscalatags_jsdom_TagFactory__typedTag__T__Z__Lscalatags_generic_Namespace__Lscalatags_generic_TypedTag(this, "input", true, ns);
        this.Lscalatags_JsDom$all$__f_inputbitmap$2 = true;
      }
      return this.Lscalatags_JsDom$all$__f_input$lzy2;
    });
    $c_Lscalatags_JsDom$all$.prototype.button__Lscalatags_generic_TypedTag = (function() {
      if ((!this.Lscalatags_JsDom$all$__f_buttonbitmap$2)) {
        var ns = $m_Lscalatags_generic_Namespace$().Lscalatags_generic_Namespace$__f_htmlNamespaceConfig;
        this.Lscalatags_JsDom$all$__f_button$lzy2 = $f_Lscalatags_jsdom_TagFactory__typedTag__T__Z__Lscalatags_generic_Namespace__Lscalatags_generic_TypedTag(this, "button", false, ns);
        this.Lscalatags_JsDom$all$__f_buttonbitmap$2 = true;
      }
      return this.Lscalatags_JsDom$all$__f_button$lzy2;
    });
    new $TypeData().initClass($c_Lscalatags_JsDom$all$, "scalatags.JsDom$all$", ({
      Lscalatags_JsDom$all$: 1,
      Lscalatags_generic_LowPriUtil: 1,
      Lscalatags_generic_Util: 1,
      Lscalatags_jsdom_TagFactory: 1,
      Lscalatags_JsDom$Cap: 1,
      Lscalatags_generic_GlobalAttrs: 1,
      Lscalatags_generic_InputAttrs: 1,
      Lscalatags_generic_ClipboardEventAttrs: 1,
      Lscalatags_generic_SharedEventAttrs: 1,
      Lscalatags_generic_MediaEventAttrs: 1,
      Lscalatags_generic_MiscellaneousEventAttrs: 1,
      Lscalatags_generic_KeyboardEventAttrs: 1,
      Lscalatags_generic_MouseEventAttrs: 1,
      Lscalatags_generic_WindowEventAttrs: 1,
      Lscalatags_generic_FormEventAttrs: 1,
      Lscalatags_generic_AnchorElementAttrs: 1,
      Lscalatags_generic_Attrs: 1,
      Lscalatags_generic_StyleMisc: 1,
      Lscalatags_generic_Styles: 1,
      Lscalatags_generic_Tags: 1,
      Lscalatags_jsdom_Tags: 1,
      Lscalatags_DataConverters: 1,
      Lscalatags_generic_Aliases: 1,
      Lscalatags_generic_Aggregate: 1,
      Lscalatags_JsDom$Aggregate: 1,
      Lscalatags_LowPriorityImplicits: 1
    }));
    var $n_Lscalatags_JsDom$all$;
    function $m_Lscalatags_JsDom$all$() {
      if ((!$n_Lscalatags_JsDom$all$)) {
        $n_Lscalatags_JsDom$all$ = new $c_Lscalatags_JsDom$all$();
      }
      return $n_Lscalatags_JsDom$all$;
    }
    /** @constructor */
    function $c_sci_ArraySeq$ofBoolean(unsafeArray) {
      this.sci_ArraySeq$ofBoolean__f_unsafeArray = null;
      this.sci_ArraySeq$ofBoolean__f_unsafeArray = unsafeArray;
    }
    $c_sci_ArraySeq$ofBoolean.prototype = new $h_sci_ArraySeq();
    $c_sci_ArraySeq$ofBoolean.prototype.constructor = $c_sci_ArraySeq$ofBoolean;
    $c_sci_ArraySeq$ofBoolean.prototype;
    $c_sci_ArraySeq$ofBoolean.prototype.length__I = (function() {
      return $n(this.sci_ArraySeq$ofBoolean__f_unsafeArray).u.length;
    });
    $c_sci_ArraySeq$ofBoolean.prototype.hashCode__I = (function() {
      var this$1$1 = $m_s_util_hashing_MurmurHash3$();
      var a = this.sci_ArraySeq$ofBoolean__f_unsafeArray;
      return this$1$1.arrayHash$mZc$sp__AZ__I__I(a, this$1$1.s_util_hashing_MurmurHash3$__f_seqSeed);
    });
    $c_sci_ArraySeq$ofBoolean.prototype.equals__O__Z = (function(that) {
      if ((that instanceof $c_sci_ArraySeq$ofBoolean)) {
        var x2 = $as_sci_ArraySeq$ofBoolean(that);
        var a = this.sci_ArraySeq$ofBoolean__f_unsafeArray;
        var b = $n(x2).sci_ArraySeq$ofBoolean__f_unsafeArray;
        return $m_ju_Arrays$().equals__AZ__AZ__Z(a, b);
      } else {
        return $f_sc_Seq__equals__O__Z(this, that);
      }
    });
    $c_sci_ArraySeq$ofBoolean.prototype.iterator__sc_Iterator = (function() {
      return new $c_sc_ArrayOps$ArrayIterator$mcZ$sp(this.sci_ArraySeq$ofBoolean__f_unsafeArray);
    });
    $c_sci_ArraySeq$ofBoolean.prototype.apply$mcZI$sp__I__Z = (function(i) {
      return $n(this.sci_ArraySeq$ofBoolean__f_unsafeArray).get(i);
    });
    $c_sci_ArraySeq$ofBoolean.prototype.apply__O__O = (function(v1) {
      var i = $uI(v1);
      return this.apply$mcZI$sp__I__Z(i);
    });
    $c_sci_ArraySeq$ofBoolean.prototype.apply__I__O = (function(i) {
      return this.apply$mcZI$sp__I__Z(i);
    });
    $c_sci_ArraySeq$ofBoolean.prototype.unsafeArray__O = (function() {
      return this.sci_ArraySeq$ofBoolean__f_unsafeArray;
    });
    function $as_sci_ArraySeq$ofBoolean(obj) {
      return (((obj instanceof $c_sci_ArraySeq$ofBoolean) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofBoolean"));
    }
    new $TypeData().initClass($c_sci_ArraySeq$ofBoolean, "scala.collection.immutable.ArraySeq$ofBoolean", ({
      sci_ArraySeq$ofBoolean: 1,
      sci_ArraySeq: 1,
      sci_AbstractSeq: 1,
      sc_AbstractSeq: 1,
      sc_AbstractIterable: 1,
      sc_Iterable: 1,
      sc_IterableOnce: 1,
      sc_IterableOps: 1,
      sc_IterableOnceOps: 1,
      sc_IterableFactoryDefaults: 1,
      sc_Seq: 1,
      s_PartialFunction: 1,
      F1: 1,
      sc_SeqOps: 1,
      s_Equals: 1,
      sci_Seq: 1,
      sci_Iterable: 1,
      sci_SeqOps: 1,
      sci_IndexedSeq: 1,
      sc_IndexedSeq: 1,
      sc_IndexedSeqOps: 1,
      sci_IndexedSeqOps: 1,
      sci_StrictOptimizedSeqOps: 1,
      sc_StrictOptimizedSeqOps: 1,
      sc_StrictOptimizedIterableOps: 1,
      sc_EvidenceIterableFactoryDefaults: 1,
      Ljava_io_Serializable: 1
    }));
    /** @constructor */
    function $c_sci_ArraySeq$ofByte(unsafeArray) {
      this.sci_ArraySeq$ofByte__f_unsafeArray = null;
      this.sci_ArraySeq$ofByte__f_unsafeArray = unsafeArray;
    }
    $c_sci_ArraySeq$ofByte.prototype = new $h_sci_ArraySeq();
    $c_sci_ArraySeq$ofByte.prototype.constructor = $c_sci_ArraySeq$ofByte;
    $c_sci_ArraySeq$ofByte.prototype;
    $c_sci_ArraySeq$ofByte.prototype.length__I = (function() {
      return $n(this.sci_ArraySeq$ofByte__f_unsafeArray).u.length;
    });
    $c_sci_ArraySeq$ofByte.prototype.apply__I__B = (function(i) {
      return $n(this.sci_ArraySeq$ofByte__f_unsafeArray).get(i);
    });
    $c_sci_ArraySeq$ofByte.prototype.hashCode__I = (function() {
      var this$1$1 = $m_s_util_hashing_MurmurHash3$();
      var a = this.sci_ArraySeq$ofByte__f_unsafeArray;
      return this$1$1.arrayHash$mBc$sp__AB__I__I(a, this$1$1.s_util_hashing_MurmurHash3$__f_seqSeed);
    });
    $c_sci_ArraySeq$ofByte.prototype.equals__O__Z = (function(that) {
      if ((that instanceof $c_sci_ArraySeq$ofByte)) {
        var x2 = $as_sci_ArraySeq$ofByte(that);
        var a = this.sci_ArraySeq$ofByte__f_unsafeArray;
        var b = $n(x2).sci_ArraySeq$ofByte__f_unsafeArray;
        return $m_ju_Arrays$().equals__AB__AB__Z(a, b);
      } else {
        return $f_sc_Seq__equals__O__Z(this, that);
      }
    });
    $c_sci_ArraySeq$ofByte.prototype.iterator__sc_Iterator = (function() {
      return new $c_sc_ArrayOps$ArrayIterator$mcB$sp(this.sci_ArraySeq$ofByte__f_unsafeArray);
    });
    $c_sci_ArraySeq$ofByte.prototype.apply__O__O = (function(v1) {
      return this.apply__I__B($uI(v1));
    });
    $c_sci_ArraySeq$ofByte.prototype.apply__I__O = (function(i) {
      return this.apply__I__B(i);
    });
    $c_sci_ArraySeq$ofByte.prototype.unsafeArray__O = (function() {
      return this.sci_ArraySeq$ofByte__f_unsafeArray;
    });
    function $as_sci_ArraySeq$ofByte(obj) {
      return (((obj instanceof $c_sci_ArraySeq$ofByte) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofByte"));
    }
    new $TypeData().initClass($c_sci_ArraySeq$ofByte, "scala.collection.immutable.ArraySeq$ofByte", ({
      sci_ArraySeq$ofByte: 1,
      sci_ArraySeq: 1,
      sci_AbstractSeq: 1,
      sc_AbstractSeq: 1,
      sc_AbstractIterable: 1,
      sc_Iterable: 1,
      sc_IterableOnce: 1,
      sc_IterableOps: 1,
      sc_IterableOnceOps: 1,
      sc_IterableFactoryDefaults: 1,
      sc_Seq: 1,
      s_PartialFunction: 1,
      F1: 1,
      sc_SeqOps: 1,
      s_Equals: 1,
      sci_Seq: 1,
      sci_Iterable: 1,
      sci_SeqOps: 1,
      sci_IndexedSeq: 1,
      sc_IndexedSeq: 1,
      sc_IndexedSeqOps: 1,
      sci_IndexedSeqOps: 1,
      sci_StrictOptimizedSeqOps: 1,
      sc_StrictOptimizedSeqOps: 1,
      sc_StrictOptimizedIterableOps: 1,
      sc_EvidenceIterableFactoryDefaults: 1,
      Ljava_io_Serializable: 1
    }));
    /** @constructor */
    function $c_sci_ArraySeq$ofChar(unsafeArray) {
      this.sci_ArraySeq$ofChar__f_unsafeArray = null;
      this.sci_ArraySeq$ofChar__f_unsafeArray = unsafeArray;
    }
    $c_sci_ArraySeq$ofChar.prototype = new $h_sci_ArraySeq();
    $c_sci_ArraySeq$ofChar.prototype.constructor = $c_sci_ArraySeq$ofChar;
    $c_sci_ArraySeq$ofChar.prototype;
    $c_sci_ArraySeq$ofChar.prototype.length__I = (function() {
      return $n(this.sci_ArraySeq$ofChar__f_unsafeArray).u.length;
    });
    $c_sci_ArraySeq$ofChar.prototype.apply__I__C = (function(i) {
      return $n(this.sci_ArraySeq$ofChar__f_unsafeArray).get(i);
    });
    $c_sci_ArraySeq$ofChar.prototype.hashCode__I = (function() {
      var this$1$1 = $m_s_util_hashing_MurmurHash3$();
      var a = this.sci_ArraySeq$ofChar__f_unsafeArray;
      return this$1$1.arrayHash$mCc$sp__AC__I__I(a, this$1$1.s_util_hashing_MurmurHash3$__f_seqSeed);
    });
    $c_sci_ArraySeq$ofChar.prototype.equals__O__Z = (function(that) {
      if ((that instanceof $c_sci_ArraySeq$ofChar)) {
        var x2 = $as_sci_ArraySeq$ofChar(that);
        var a = this.sci_ArraySeq$ofChar__f_unsafeArray;
        var b = $n(x2).sci_ArraySeq$ofChar__f_unsafeArray;
        return $m_ju_Arrays$().equals__AC__AC__Z(a, b);
      } else {
        return $f_sc_Seq__equals__O__Z(this, that);
      }
    });
    $c_sci_ArraySeq$ofChar.prototype.iterator__sc_Iterator = (function() {
      return new $c_sc_ArrayOps$ArrayIterator$mcC$sp(this.sci_ArraySeq$ofChar__f_unsafeArray);
    });
    $c_sci_ArraySeq$ofChar.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(sb, start, sep, end) {
      return new $c_scm_ArraySeq$ofChar(this.sci_ArraySeq$ofChar__f_unsafeArray).addString__scm_StringBuilder__T__T__T__scm_StringBuilder(sb, start, sep, end);
    });
    $c_sci_ArraySeq$ofChar.prototype.apply__O__O = (function(v1) {
      return $bC(this.apply__I__C($uI(v1)));
    });
    $c_sci_ArraySeq$ofChar.prototype.apply__I__O = (function(i) {
      return $bC(this.apply__I__C(i));
    });
    $c_sci_ArraySeq$ofChar.prototype.unsafeArray__O = (function() {
      return this.sci_ArraySeq$ofChar__f_unsafeArray;
    });
    function $as_sci_ArraySeq$ofChar(obj) {
      return (((obj instanceof $c_sci_ArraySeq$ofChar) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofChar"));
    }
    new $TypeData().initClass($c_sci_ArraySeq$ofChar, "scala.collection.immutable.ArraySeq$ofChar", ({
      sci_ArraySeq$ofChar: 1,
      sci_ArraySeq: 1,
      sci_AbstractSeq: 1,
      sc_AbstractSeq: 1,
      sc_AbstractIterable: 1,
      sc_Iterable: 1,
      sc_IterableOnce: 1,
      sc_IterableOps: 1,
      sc_IterableOnceOps: 1,
      sc_IterableFactoryDefaults: 1,
      sc_Seq: 1,
      s_PartialFunction: 1,
      F1: 1,
      sc_SeqOps: 1,
      s_Equals: 1,
      sci_Seq: 1,
      sci_Iterable: 1,
      sci_SeqOps: 1,
      sci_IndexedSeq: 1,
      sc_IndexedSeq: 1,
      sc_IndexedSeqOps: 1,
      sci_IndexedSeqOps: 1,
      sci_StrictOptimizedSeqOps: 1,
      sc_StrictOptimizedSeqOps: 1,
      sc_StrictOptimizedIterableOps: 1,
      sc_EvidenceIterableFactoryDefaults: 1,
      Ljava_io_Serializable: 1
    }));
    /** @constructor */
    function $c_sci_ArraySeq$ofDouble(unsafeArray) {
      this.sci_ArraySeq$ofDouble__f_unsafeArray = null;
      this.sci_ArraySeq$ofDouble__f_unsafeArray = unsafeArray;
    }
    $c_sci_ArraySeq$ofDouble.prototype = new $h_sci_ArraySeq();
    $c_sci_ArraySeq$ofDouble.prototype.constructor = $c_sci_ArraySeq$ofDouble;
    $c_sci_ArraySeq$ofDouble.prototype;
    $c_sci_ArraySeq$ofDouble.prototype.length__I = (function() {
      return $n(this.sci_ArraySeq$ofDouble__f_unsafeArray).u.length;
    });
    $c_sci_ArraySeq$ofDouble.prototype.hashCode__I = (function() {
      var this$1$1 = $m_s_util_hashing_MurmurHash3$();
      var a = this.sci_ArraySeq$ofDouble__f_unsafeArray;
      return this$1$1.arrayHash$mDc$sp__AD__I__I(a, this$1$1.s_util_hashing_MurmurHash3$__f_seqSeed);
    });
    $c_sci_ArraySeq$ofDouble.prototype.equals__O__Z = (function(that) {
      if ((that instanceof $c_sci_ArraySeq$ofDouble)) {
        var x2 = $as_sci_ArraySeq$ofDouble(that);
        var a = this.sci_ArraySeq$ofDouble__f_unsafeArray;
        var b = $n(x2).sci_ArraySeq$ofDouble__f_unsafeArray;
        return $m_ju_Arrays$().equals__AD__AD__Z(a, b);
      } else {
        return $f_sc_Seq__equals__O__Z(this, that);
      }
    });
    $c_sci_ArraySeq$ofDouble.prototype.iterator__sc_Iterator = (function() {
      return new $c_sc_ArrayOps$ArrayIterator$mcD$sp(this.sci_ArraySeq$ofDouble__f_unsafeArray);
    });
    $c_sci_ArraySeq$ofDouble.prototype.apply$mcDI$sp__I__D = (function(i) {
      return $n(this.sci_ArraySeq$ofDouble__f_unsafeArray).get(i);
    });
    $c_sci_ArraySeq$ofDouble.prototype.apply__O__O = (function(v1) {
      var i = $uI(v1);
      return this.apply$mcDI$sp__I__D(i);
    });
    $c_sci_ArraySeq$ofDouble.prototype.apply__I__O = (function(i) {
      return this.apply$mcDI$sp__I__D(i);
    });
    $c_sci_ArraySeq$ofDouble.prototype.unsafeArray__O = (function() {
      return this.sci_ArraySeq$ofDouble__f_unsafeArray;
    });
    function $as_sci_ArraySeq$ofDouble(obj) {
      return (((obj instanceof $c_sci_ArraySeq$ofDouble) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofDouble"));
    }
    new $TypeData().initClass($c_sci_ArraySeq$ofDouble, "scala.collection.immutable.ArraySeq$ofDouble", ({
      sci_ArraySeq$ofDouble: 1,
      sci_ArraySeq: 1,
      sci_AbstractSeq: 1,
      sc_AbstractSeq: 1,
      sc_AbstractIterable: 1,
      sc_Iterable: 1,
      sc_IterableOnce: 1,
      sc_IterableOps: 1,
      sc_IterableOnceOps: 1,
      sc_IterableFactoryDefaults: 1,
      sc_Seq: 1,
      s_PartialFunction: 1,
      F1: 1,
      sc_SeqOps: 1,
      s_Equals: 1,
      sci_Seq: 1,
      sci_Iterable: 1,
      sci_SeqOps: 1,
      sci_IndexedSeq: 1,
      sc_IndexedSeq: 1,
      sc_IndexedSeqOps: 1,
      sci_IndexedSeqOps: 1,
      sci_StrictOptimizedSeqOps: 1,
      sc_StrictOptimizedSeqOps: 1,
      sc_StrictOptimizedIterableOps: 1,
      sc_EvidenceIterableFactoryDefaults: 1,
      Ljava_io_Serializable: 1
    }));
    /** @constructor */
    function $c_sci_ArraySeq$ofFloat(unsafeArray) {
      this.sci_ArraySeq$ofFloat__f_unsafeArray = null;
      this.sci_ArraySeq$ofFloat__f_unsafeArray = unsafeArray;
    }
    $c_sci_ArraySeq$ofFloat.prototype = new $h_sci_ArraySeq();
    $c_sci_ArraySeq$ofFloat.prototype.constructor = $c_sci_ArraySeq$ofFloat;
    $c_sci_ArraySeq$ofFloat.prototype;
    $c_sci_ArraySeq$ofFloat.prototype.length__I = (function() {
      return $n(this.sci_ArraySeq$ofFloat__f_unsafeArray).u.length;
    });
    $c_sci_ArraySeq$ofFloat.prototype.hashCode__I = (function() {
      var this$1$1 = $m_s_util_hashing_MurmurHash3$();
      var a = this.sci_ArraySeq$ofFloat__f_unsafeArray;
      return this$1$1.arrayHash$mFc$sp__AF__I__I(a, this$1$1.s_util_hashing_MurmurHash3$__f_seqSeed);
    });
    $c_sci_ArraySeq$ofFloat.prototype.equals__O__Z = (function(that) {
      if ((that instanceof $c_sci_ArraySeq$ofFloat)) {
        var x2 = $as_sci_ArraySeq$ofFloat(that);
        var a = this.sci_ArraySeq$ofFloat__f_unsafeArray;
        var b = $n(x2).sci_ArraySeq$ofFloat__f_unsafeArray;
        return $m_ju_Arrays$().equals__AF__AF__Z(a, b);
      } else {
        return $f_sc_Seq__equals__O__Z(this, that);
      }
    });
    $c_sci_ArraySeq$ofFloat.prototype.iterator__sc_Iterator = (function() {
      return new $c_sc_ArrayOps$ArrayIterator$mcF$sp(this.sci_ArraySeq$ofFloat__f_unsafeArray);
    });
    $c_sci_ArraySeq$ofFloat.prototype.apply$mcFI$sp__I__F = (function(i) {
      return $n(this.sci_ArraySeq$ofFloat__f_unsafeArray).get(i);
    });
    $c_sci_ArraySeq$ofFloat.prototype.apply__O__O = (function(v1) {
      var i = $uI(v1);
      return this.apply$mcFI$sp__I__F(i);
    });
    $c_sci_ArraySeq$ofFloat.prototype.apply__I__O = (function(i) {
      return this.apply$mcFI$sp__I__F(i);
    });
    $c_sci_ArraySeq$ofFloat.prototype.unsafeArray__O = (function() {
      return this.sci_ArraySeq$ofFloat__f_unsafeArray;
    });
    function $as_sci_ArraySeq$ofFloat(obj) {
      return (((obj instanceof $c_sci_ArraySeq$ofFloat) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofFloat"));
    }
    new $TypeData().initClass($c_sci_ArraySeq$ofFloat, "scala.collection.immutable.ArraySeq$ofFloat", ({
      sci_ArraySeq$ofFloat: 1,
      sci_ArraySeq: 1,
      sci_AbstractSeq: 1,
      sc_AbstractSeq: 1,
      sc_AbstractIterable: 1,
      sc_Iterable: 1,
      sc_IterableOnce: 1,
      sc_IterableOps: 1,
      sc_IterableOnceOps: 1,
      sc_IterableFactoryDefaults: 1,
      sc_Seq: 1,
      s_PartialFunction: 1,
      F1: 1,
      sc_SeqOps: 1,
      s_Equals: 1,
      sci_Seq: 1,
      sci_Iterable: 1,
      sci_SeqOps: 1,
      sci_IndexedSeq: 1,
      sc_IndexedSeq: 1,
      sc_IndexedSeqOps: 1,
      sci_IndexedSeqOps: 1,
      sci_StrictOptimizedSeqOps: 1,
      sc_StrictOptimizedSeqOps: 1,
      sc_StrictOptimizedIterableOps: 1,
      sc_EvidenceIterableFactoryDefaults: 1,
      Ljava_io_Serializable: 1
    }));
    /** @constructor */
    function $c_sci_ArraySeq$ofInt(unsafeArray) {
      this.sci_ArraySeq$ofInt__f_unsafeArray = null;
      this.sci_ArraySeq$ofInt__f_unsafeArray = unsafeArray;
    }
    $c_sci_ArraySeq$ofInt.prototype = new $h_sci_ArraySeq();
    $c_sci_ArraySeq$ofInt.prototype.constructor = $c_sci_ArraySeq$ofInt;
    $c_sci_ArraySeq$ofInt.prototype;
    $c_sci_ArraySeq$ofInt.prototype.length__I = (function() {
      return $n(this.sci_ArraySeq$ofInt__f_unsafeArray).u.length;
    });
    $c_sci_ArraySeq$ofInt.prototype.hashCode__I = (function() {
      var this$1$1 = $m_s_util_hashing_MurmurHash3$();
      var a = this.sci_ArraySeq$ofInt__f_unsafeArray;
      return this$1$1.arrayHash$mIc$sp__AI__I__I(a, this$1$1.s_util_hashing_MurmurHash3$__f_seqSeed);
    });
    $c_sci_ArraySeq$ofInt.prototype.equals__O__Z = (function(that) {
      if ((that instanceof $c_sci_ArraySeq$ofInt)) {
        var x2 = $as_sci_ArraySeq$ofInt(that);
        var a = this.sci_ArraySeq$ofInt__f_unsafeArray;
        var b = $n(x2).sci_ArraySeq$ofInt__f_unsafeArray;
        return $m_ju_Arrays$().equals__AI__AI__Z(a, b);
      } else {
        return $f_sc_Seq__equals__O__Z(this, that);
      }
    });
    $c_sci_ArraySeq$ofInt.prototype.iterator__sc_Iterator = (function() {
      return new $c_sc_ArrayOps$ArrayIterator$mcI$sp(this.sci_ArraySeq$ofInt__f_unsafeArray);
    });
    $c_sci_ArraySeq$ofInt.prototype.apply$mcII$sp__I__I = (function(i) {
      return $n(this.sci_ArraySeq$ofInt__f_unsafeArray).get(i);
    });
    $c_sci_ArraySeq$ofInt.prototype.apply__O__O = (function(v1) {
      var i = $uI(v1);
      return this.apply$mcII$sp__I__I(i);
    });
    $c_sci_ArraySeq$ofInt.prototype.apply__I__O = (function(i) {
      return this.apply$mcII$sp__I__I(i);
    });
    $c_sci_ArraySeq$ofInt.prototype.unsafeArray__O = (function() {
      return this.sci_ArraySeq$ofInt__f_unsafeArray;
    });
    function $as_sci_ArraySeq$ofInt(obj) {
      return (((obj instanceof $c_sci_ArraySeq$ofInt) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofInt"));
    }
    new $TypeData().initClass($c_sci_ArraySeq$ofInt, "scala.collection.immutable.ArraySeq$ofInt", ({
      sci_ArraySeq$ofInt: 1,
      sci_ArraySeq: 1,
      sci_AbstractSeq: 1,
      sc_AbstractSeq: 1,
      sc_AbstractIterable: 1,
      sc_Iterable: 1,
      sc_IterableOnce: 1,
      sc_IterableOps: 1,
      sc_IterableOnceOps: 1,
      sc_IterableFactoryDefaults: 1,
      sc_Seq: 1,
      s_PartialFunction: 1,
      F1: 1,
      sc_SeqOps: 1,
      s_Equals: 1,
      sci_Seq: 1,
      sci_Iterable: 1,
      sci_SeqOps: 1,
      sci_IndexedSeq: 1,
      sc_IndexedSeq: 1,
      sc_IndexedSeqOps: 1,
      sci_IndexedSeqOps: 1,
      sci_StrictOptimizedSeqOps: 1,
      sc_StrictOptimizedSeqOps: 1,
      sc_StrictOptimizedIterableOps: 1,
      sc_EvidenceIterableFactoryDefaults: 1,
      Ljava_io_Serializable: 1
    }));
    /** @constructor */
    function $c_sci_ArraySeq$ofLong(unsafeArray) {
      this.sci_ArraySeq$ofLong__f_unsafeArray = null;
      this.sci_ArraySeq$ofLong__f_unsafeArray = unsafeArray;
    }
    $c_sci_ArraySeq$ofLong.prototype = new $h_sci_ArraySeq();
    $c_sci_ArraySeq$ofLong.prototype.constructor = $c_sci_ArraySeq$ofLong;
    $c_sci_ArraySeq$ofLong.prototype;
    $c_sci_ArraySeq$ofLong.prototype.length__I = (function() {
      return $n(this.sci_ArraySeq$ofLong__f_unsafeArray).u.length;
    });
    $c_sci_ArraySeq$ofLong.prototype.hashCode__I = (function() {
      var this$1$1 = $m_s_util_hashing_MurmurHash3$();
      var a = this.sci_ArraySeq$ofLong__f_unsafeArray;
      return this$1$1.arrayHash$mJc$sp__AJ__I__I(a, this$1$1.s_util_hashing_MurmurHash3$__f_seqSeed);
    });
    $c_sci_ArraySeq$ofLong.prototype.equals__O__Z = (function(that) {
      if ((that instanceof $c_sci_ArraySeq$ofLong)) {
        var x2 = $as_sci_ArraySeq$ofLong(that);
        var a = this.sci_ArraySeq$ofLong__f_unsafeArray;
        var b = $n(x2).sci_ArraySeq$ofLong__f_unsafeArray;
        return $m_ju_Arrays$().equals__AJ__AJ__Z(a, b);
      } else {
        return $f_sc_Seq__equals__O__Z(this, that);
      }
    });
    $c_sci_ArraySeq$ofLong.prototype.iterator__sc_Iterator = (function() {
      return new $c_sc_ArrayOps$ArrayIterator$mcJ$sp(this.sci_ArraySeq$ofLong__f_unsafeArray);
    });
    $c_sci_ArraySeq$ofLong.prototype.apply$mcJI$sp__I__J = (function(i) {
      return $n(this.sci_ArraySeq$ofLong__f_unsafeArray).get(i);
    });
    $c_sci_ArraySeq$ofLong.prototype.apply__O__O = (function(v1) {
      var i = $uI(v1);
      return this.apply$mcJI$sp__I__J(i);
    });
    $c_sci_ArraySeq$ofLong.prototype.apply__I__O = (function(i) {
      return this.apply$mcJI$sp__I__J(i);
    });
    $c_sci_ArraySeq$ofLong.prototype.unsafeArray__O = (function() {
      return this.sci_ArraySeq$ofLong__f_unsafeArray;
    });
    function $as_sci_ArraySeq$ofLong(obj) {
      return (((obj instanceof $c_sci_ArraySeq$ofLong) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofLong"));
    }
    new $TypeData().initClass($c_sci_ArraySeq$ofLong, "scala.collection.immutable.ArraySeq$ofLong", ({
      sci_ArraySeq$ofLong: 1,
      sci_ArraySeq: 1,
      sci_AbstractSeq: 1,
      sc_AbstractSeq: 1,
      sc_AbstractIterable: 1,
      sc_Iterable: 1,
      sc_IterableOnce: 1,
      sc_IterableOps: 1,
      sc_IterableOnceOps: 1,
      sc_IterableFactoryDefaults: 1,
      sc_Seq: 1,
      s_PartialFunction: 1,
      F1: 1,
      sc_SeqOps: 1,
      s_Equals: 1,
      sci_Seq: 1,
      sci_Iterable: 1,
      sci_SeqOps: 1,
      sci_IndexedSeq: 1,
      sc_IndexedSeq: 1,
      sc_IndexedSeqOps: 1,
      sci_IndexedSeqOps: 1,
      sci_StrictOptimizedSeqOps: 1,
      sc_StrictOptimizedSeqOps: 1,
      sc_StrictOptimizedIterableOps: 1,
      sc_EvidenceIterableFactoryDefaults: 1,
      Ljava_io_Serializable: 1
    }));
    /** @constructor */
    function $c_sci_ArraySeq$ofRef(unsafeArray) {
      this.sci_ArraySeq$ofRef__f_unsafeArray = null;
      this.sci_ArraySeq$ofRef__f_unsafeArray = unsafeArray;
    }
    $c_sci_ArraySeq$ofRef.prototype = new $h_sci_ArraySeq();
    $c_sci_ArraySeq$ofRef.prototype.constructor = $c_sci_ArraySeq$ofRef;
    $c_sci_ArraySeq$ofRef.prototype;
    $c_sci_ArraySeq$ofRef.prototype.elemTag__s_reflect_ClassTag = (function() {
      var $x_1 = $m_s_reflect_ClassTag$();
      var this$1$1 = $n(this.sci_ArraySeq$ofRef__f_unsafeArray);
      var this$2 = $objectGetClass(this$1$1);
      return $x_1.apply__jl_Class__s_reflect_ClassTag(this$2.data.getComponentType());
    });
    $c_sci_ArraySeq$ofRef.prototype.length__I = (function() {
      return $n(this.sci_ArraySeq$ofRef__f_unsafeArray).u.length;
    });
    $c_sci_ArraySeq$ofRef.prototype.apply__I__O = (function(i) {
      return $n(this.sci_ArraySeq$ofRef__f_unsafeArray).get(i);
    });
    $c_sci_ArraySeq$ofRef.prototype.hashCode__I = (function() {
      var this$1$1 = $m_s_util_hashing_MurmurHash3$();
      var a = this.sci_ArraySeq$ofRef__f_unsafeArray;
      return this$1$1.arrayHash__O__I__I(a, this$1$1.s_util_hashing_MurmurHash3$__f_seqSeed);
    });
    $c_sci_ArraySeq$ofRef.prototype.equals__O__Z = (function(that) {
      if ((that instanceof $c_sci_ArraySeq$ofRef)) {
        var x2 = $as_sci_ArraySeq$ofRef(that);
        return $m_s_Array$().equals__AO__AO__Z(this.sci_ArraySeq$ofRef__f_unsafeArray, $n(x2).sci_ArraySeq$ofRef__f_unsafeArray);
      } else {
        return $f_sc_Seq__equals__O__Z(this, that);
      }
    });
    $c_sci_ArraySeq$ofRef.prototype.iterator__sc_Iterator = (function() {
      return $ct_sc_ArrayOps$ArrayIterator__O__(new $c_sc_ArrayOps$ArrayIterator(), this.sci_ArraySeq$ofRef__f_unsafeArray);
    });
    $c_sci_ArraySeq$ofRef.prototype.apply__O__O = (function(v1) {
      return this.apply__I__O($uI(v1));
    });
    $c_sci_ArraySeq$ofRef.prototype.unsafeArray__O = (function() {
      return this.sci_ArraySeq$ofRef__f_unsafeArray;
    });
    function $as_sci_ArraySeq$ofRef(obj) {
      return (((obj instanceof $c_sci_ArraySeq$ofRef) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofRef"));
    }
    new $TypeData().initClass($c_sci_ArraySeq$ofRef, "scala.collection.immutable.ArraySeq$ofRef", ({
      sci_ArraySeq$ofRef: 1,
      sci_ArraySeq: 1,
      sci_AbstractSeq: 1,
      sc_AbstractSeq: 1,
      sc_AbstractIterable: 1,
      sc_Iterable: 1,
      sc_IterableOnce: 1,
      sc_IterableOps: 1,
      sc_IterableOnceOps: 1,
      sc_IterableFactoryDefaults: 1,
      sc_Seq: 1,
      s_PartialFunction: 1,
      F1: 1,
      sc_SeqOps: 1,
      s_Equals: 1,
      sci_Seq: 1,
      sci_Iterable: 1,
      sci_SeqOps: 1,
      sci_IndexedSeq: 1,
      sc_IndexedSeq: 1,
      sc_IndexedSeqOps: 1,
      sci_IndexedSeqOps: 1,
      sci_StrictOptimizedSeqOps: 1,
      sc_StrictOptimizedSeqOps: 1,
      sc_StrictOptimizedIterableOps: 1,
      sc_EvidenceIterableFactoryDefaults: 1,
      Ljava_io_Serializable: 1
    }));
    /** @constructor */
    function $c_sci_ArraySeq$ofShort(unsafeArray) {
      this.sci_ArraySeq$ofShort__f_unsafeArray = null;
      this.sci_ArraySeq$ofShort__f_unsafeArray = unsafeArray;
    }
    $c_sci_ArraySeq$ofShort.prototype = new $h_sci_ArraySeq();
    $c_sci_ArraySeq$ofShort.prototype.constructor = $c_sci_ArraySeq$ofShort;
    $c_sci_ArraySeq$ofShort.prototype;
    $c_sci_ArraySeq$ofShort.prototype.length__I = (function() {
      return $n(this.sci_ArraySeq$ofShort__f_unsafeArray).u.length;
    });
    $c_sci_ArraySeq$ofShort.prototype.apply__I__S = (function(i) {
      return $n(this.sci_ArraySeq$ofShort__f_unsafeArray).get(i);
    });
    $c_sci_ArraySeq$ofShort.prototype.hashCode__I = (function() {
      var this$1$1 = $m_s_util_hashing_MurmurHash3$();
      var a = this.sci_ArraySeq$ofShort__f_unsafeArray;
      return this$1$1.arrayHash$mSc$sp__AS__I__I(a, this$1$1.s_util_hashing_MurmurHash3$__f_seqSeed);
    });
    $c_sci_ArraySeq$ofShort.prototype.equals__O__Z = (function(that) {
      if ((that instanceof $c_sci_ArraySeq$ofShort)) {
        var x2 = $as_sci_ArraySeq$ofShort(that);
        var a = this.sci_ArraySeq$ofShort__f_unsafeArray;
        var b = $n(x2).sci_ArraySeq$ofShort__f_unsafeArray;
        return $m_ju_Arrays$().equals__AS__AS__Z(a, b);
      } else {
        return $f_sc_Seq__equals__O__Z(this, that);
      }
    });
    $c_sci_ArraySeq$ofShort.prototype.iterator__sc_Iterator = (function() {
      return new $c_sc_ArrayOps$ArrayIterator$mcS$sp(this.sci_ArraySeq$ofShort__f_unsafeArray);
    });
    $c_sci_ArraySeq$ofShort.prototype.apply__O__O = (function(v1) {
      return this.apply__I__S($uI(v1));
    });
    $c_sci_ArraySeq$ofShort.prototype.apply__I__O = (function(i) {
      return this.apply__I__S(i);
    });
    $c_sci_ArraySeq$ofShort.prototype.unsafeArray__O = (function() {
      return this.sci_ArraySeq$ofShort__f_unsafeArray;
    });
    function $as_sci_ArraySeq$ofShort(obj) {
      return (((obj instanceof $c_sci_ArraySeq$ofShort) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofShort"));
    }
    new $TypeData().initClass($c_sci_ArraySeq$ofShort, "scala.collection.immutable.ArraySeq$ofShort", ({
      sci_ArraySeq$ofShort: 1,
      sci_ArraySeq: 1,
      sci_AbstractSeq: 1,
      sc_AbstractSeq: 1,
      sc_AbstractIterable: 1,
      sc_Iterable: 1,
      sc_IterableOnce: 1,
      sc_IterableOps: 1,
      sc_IterableOnceOps: 1,
      sc_IterableFactoryDefaults: 1,
      sc_Seq: 1,
      s_PartialFunction: 1,
      F1: 1,
      sc_SeqOps: 1,
      s_Equals: 1,
      sci_Seq: 1,
      sci_Iterable: 1,
      sci_SeqOps: 1,
      sci_IndexedSeq: 1,
      sc_IndexedSeq: 1,
      sc_IndexedSeqOps: 1,
      sci_IndexedSeqOps: 1,
      sci_StrictOptimizedSeqOps: 1,
      sc_StrictOptimizedSeqOps: 1,
      sc_StrictOptimizedIterableOps: 1,
      sc_EvidenceIterableFactoryDefaults: 1,
      Ljava_io_Serializable: 1
    }));
    /** @constructor */
    function $c_sci_ArraySeq$ofUnit(unsafeArray) {
      this.sci_ArraySeq$ofUnit__f_unsafeArray = null;
      this.sci_ArraySeq$ofUnit__f_unsafeArray = unsafeArray;
    }
    $c_sci_ArraySeq$ofUnit.prototype = new $h_sci_ArraySeq();
    $c_sci_ArraySeq$ofUnit.prototype.constructor = $c_sci_ArraySeq$ofUnit;
    $c_sci_ArraySeq$ofUnit.prototype;
    $c_sci_ArraySeq$ofUnit.prototype.length__I = (function() {
      return $n(this.sci_ArraySeq$ofUnit__f_unsafeArray).u.length;
    });
    $c_sci_ArraySeq$ofUnit.prototype.hashCode__I = (function() {
      var this$1$1 = $m_s_util_hashing_MurmurHash3$();
      var a = this.sci_ArraySeq$ofUnit__f_unsafeArray;
      return this$1$1.arrayHash$mVc$sp__Ajl_Void__I__I(a, this$1$1.s_util_hashing_MurmurHash3$__f_seqSeed);
    });
    $c_sci_ArraySeq$ofUnit.prototype.equals__O__Z = (function(that) {
      if ((that instanceof $c_sci_ArraySeq$ofUnit)) {
        var x2 = $as_sci_ArraySeq$ofUnit(that);
        return ($n(this.sci_ArraySeq$ofUnit__f_unsafeArray).u.length === $n($n(x2).sci_ArraySeq$ofUnit__f_unsafeArray).u.length);
      } else {
        return $f_sc_Seq__equals__O__Z(this, that);
      }
    });
    $c_sci_ArraySeq$ofUnit.prototype.iterator__sc_Iterator = (function() {
      return new $c_sc_ArrayOps$ArrayIterator$mcV$sp(this.sci_ArraySeq$ofUnit__f_unsafeArray);
    });
    $c_sci_ArraySeq$ofUnit.prototype.apply$mcVI$sp__I__V = (function(i) {
      $n(this.sci_ArraySeq$ofUnit__f_unsafeArray).get(i);
    });
    $c_sci_ArraySeq$ofUnit.prototype.apply__O__O = (function(v1) {
      var i = $uI(v1);
      this.apply$mcVI$sp__I__V(i);
    });
    $c_sci_ArraySeq$ofUnit.prototype.apply__I__O = (function(i) {
      this.apply$mcVI$sp__I__V(i);
    });
    $c_sci_ArraySeq$ofUnit.prototype.unsafeArray__O = (function() {
      return this.sci_ArraySeq$ofUnit__f_unsafeArray;
    });
    function $as_sci_ArraySeq$ofUnit(obj) {
      return (((obj instanceof $c_sci_ArraySeq$ofUnit) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq$ofUnit"));
    }
    new $TypeData().initClass($c_sci_ArraySeq$ofUnit, "scala.collection.immutable.ArraySeq$ofUnit", ({
      sci_ArraySeq$ofUnit: 1,
      sci_ArraySeq: 1,
      sci_AbstractSeq: 1,
      sc_AbstractSeq: 1,
      sc_AbstractIterable: 1,
      sc_Iterable: 1,
      sc_IterableOnce: 1,
      sc_IterableOps: 1,
      sc_IterableOnceOps: 1,
      sc_IterableFactoryDefaults: 1,
      sc_Seq: 1,
      s_PartialFunction: 1,
      F1: 1,
      sc_SeqOps: 1,
      s_Equals: 1,
      sci_Seq: 1,
      sci_Iterable: 1,
      sci_SeqOps: 1,
      sci_IndexedSeq: 1,
      sc_IndexedSeq: 1,
      sc_IndexedSeqOps: 1,
      sci_IndexedSeqOps: 1,
      sci_StrictOptimizedSeqOps: 1,
      sc_StrictOptimizedSeqOps: 1,
      sc_StrictOptimizedIterableOps: 1,
      sc_EvidenceIterableFactoryDefaults: 1,
      Ljava_io_Serializable: 1
    }));
    function $p_sci_List__loop$2__I__sci_List__I__I($thiz, i, xs, len$1) {
      while (true) {
        if ((i === len$1)) {
          return ($n(xs).isEmpty__Z() ? 0 : 1);
        } else if ($n(xs).isEmpty__Z()) {
          return (-1);
        } else {
          var temp$i = ((1 + i) | 0);
          var temp$xs = $as_sci_List($n(xs).tail__O());
          i = temp$i;
          xs = temp$xs;
        }
      }
    }
    function $p_sci_List__listEq$1__sci_List__sci_List__Z($thiz, a, b) {
      while (true) {
        if ((a === b)) {
          return true;
        } else {
          var aEmpty = $n(a).isEmpty__Z();
          var bEmpty = $n(b).isEmpty__Z();
          if (((!(aEmpty || bEmpty)) && $m_sr_BoxesRunTime$().equals__O__O__Z($n(a).head__O(), $n(b).head__O()))) {
            var temp$a = $as_sci_List($n(a).tail__O());
            var temp$b = $as_sci_List($n(b).tail__O());
            a = temp$a;
            b = temp$b;
          } else {
            return (aEmpty && bEmpty);
          }
        }
      }
    }
    /** @constructor */
    function $c_sci_List() {
    }
    $c_sci_List.prototype = new $h_sci_AbstractSeq();
    $c_sci_List.prototype.constructor = $c_sci_List;
    /** @constructor */
    function $h_sci_List() {
    }
    $h_sci_List.prototype = $c_sci_List.prototype;
    $c_sci_List.prototype.iterator__sc_Iterator = (function() {
      return new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(this);
    });
    $c_sci_List.prototype.stringPrefix__T = (function() {
      return "LinearSeq";
    });
    $c_sci_List.prototype.isDefinedAt__I__Z = (function(x) {
      return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x);
    });
    $c_sci_List.prototype.apply__I__O = (function(n) {
      return $f_sc_LinearSeqOps__apply__I__O(this, n);
    });
    $c_sci_List.prototype.sameElements__sc_IterableOnce__Z = (function(that) {
      return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
    });
    $c_sci_List.prototype.isEmpty__Z = (function() {
      return (this === $m_sci_Nil$());
    });
    $c_sci_List.prototype.foreach__F1__V = (function(f) {
      var these = this;
      while ((!$n(these).isEmpty__Z())) {
        $n(f).apply__O__O($n(these).head__O());
        these = $as_sci_List($n(these).tail__O());
      }
    });
    $c_sci_List.prototype.length__I = (function() {
      var these = this;
      var len = 0;
      while ((!$n(these).isEmpty__Z())) {
        len = ((1 + len) | 0);
        these = $as_sci_List($n(these).tail__O());
      }
      return len;
    });
    $c_sci_List.prototype.lengthCompare__I__I = (function(len) {
      return ((len < 0) ? 1 : $p_sci_List__loop$2__I__sci_List__I__I(this, 0, this, len));
    });
    $c_sci_List.prototype.className__T = (function() {
      return "List";
    });
    $c_sci_List.prototype.equals__O__Z = (function(o) {
      if ((o instanceof $c_sci_List)) {
        var x2 = $as_sci_List(o);
        return $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, x2);
      } else {
        return $f_sc_Seq__equals__O__Z(this, o);
      }
    });
    $c_sci_List.prototype.apply__O__O = (function(v1) {
      var n = $uI(v1);
      return $f_sc_LinearSeqOps__apply__I__O(this, n);
    });
    $c_sci_List.prototype.isDefinedAt__O__Z = (function(x) {
      var x$1 = $uI(x);
      return $f_sc_LinearSeqOps__isDefinedAt__I__Z(this, x$1);
    });
    $c_sci_List.prototype.drop__I__O = (function(n) {
      return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
    });
    function $as_sci_List(obj) {
      return (((obj instanceof $c_sci_List) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.List"));
    }
    /** @constructor */
    function $c_sci_VectorImpl() {
      this.sci_Vector__f_prefix1 = null;
    }
    $c_sci_VectorImpl.prototype = new $h_sci_Vector();
    $c_sci_VectorImpl.prototype.constructor = $c_sci_VectorImpl;
    /** @constructor */
    function $h_sci_VectorImpl() {
    }
    $h_sci_VectorImpl.prototype = $c_sci_VectorImpl.prototype;
    /** @constructor */
    function $c_scm_ArraySeq$ofChar(array) {
      this.scm_ArraySeq$ofChar__f_array = null;
      this.scm_ArraySeq$ofChar__f_array = array;
    }
    $c_scm_ArraySeq$ofChar.prototype = new $h_scm_ArraySeq();
    $c_scm_ArraySeq$ofChar.prototype.constructor = $c_scm_ArraySeq$ofChar;
    $c_scm_ArraySeq$ofChar.prototype;
    $c_scm_ArraySeq$ofChar.prototype.length__I = (function() {
      return $n(this.scm_ArraySeq$ofChar__f_array).u.length;
    });
    $c_scm_ArraySeq$ofChar.prototype.apply__I__C = (function(index) {
      return $n(this.scm_ArraySeq$ofChar__f_array).get(index);
    });
    $c_scm_ArraySeq$ofChar.prototype.hashCode__I = (function() {
      var this$1$1 = $m_s_util_hashing_MurmurHash3$();
      var a = this.scm_ArraySeq$ofChar__f_array;
      return this$1$1.arrayHash$mCc$sp__AC__I__I(a, this$1$1.s_util_hashing_MurmurHash3$__f_seqSeed);
    });
    $c_scm_ArraySeq$ofChar.prototype.equals__O__Z = (function(that) {
      if ((that instanceof $c_scm_ArraySeq$ofChar)) {
        var x2 = $as_scm_ArraySeq$ofChar(that);
        var a = this.scm_ArraySeq$ofChar__f_array;
        var b = $n(x2).scm_ArraySeq$ofChar__f_array;
        return $m_ju_Arrays$().equals__AC__AC__Z(a, b);
      } else {
        return $c_scm_ArraySeq.prototype.equals__O__Z.call(this, that);
      }
    });
    $c_scm_ArraySeq$ofChar.prototype.iterator__sc_Iterator = (function() {
      return new $c_sc_ArrayOps$ArrayIterator$mcC$sp(this.scm_ArraySeq$ofChar__f_array);
    });
    $c_scm_ArraySeq$ofChar.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(sb, start, sep, end) {
      var jsb = $n(sb).scm_StringBuilder__f_underlying;
      var this$1$1 = $n(start);
      if ((this$1$1.length !== 0)) {
        var this$2 = $n(jsb);
        this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content) + start);
      }
      var len = $n(this.scm_ArraySeq$ofChar__f_array).u.length;
      if ((len !== 0)) {
        var this$3 = $n(sep);
        if ((this$3 === "")) {
          $n(jsb).append__AC__jl_StringBuilder(this.scm_ArraySeq$ofChar__f_array);
        } else {
          $n(jsb);
          $n(jsb).length__I();
          $n(end);
          $n(sep);
          var this$6 = $n(jsb);
          var c = $n(this.scm_ArraySeq$ofChar__f_array).get(0);
          var str = ("" + $cToS(c));
          this$6.jl_StringBuilder__f_java$lang$StringBuilder$$content = (this$6.jl_StringBuilder__f_java$lang$StringBuilder$$content + str);
          var i = 1;
          while ((i < len)) {
            var this$8 = $n(jsb);
            this$8.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$8.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
            var this$9 = $n(jsb);
            var c$1 = $n(this.scm_ArraySeq$ofChar__f_array).get(i);
            var str$1 = ("" + $cToS(c$1));
            this$9.jl_StringBuilder__f_java$lang$StringBuilder$$content = (this$9.jl_StringBuilder__f_java$lang$StringBuilder$$content + str$1);
            i = ((1 + i) | 0);
          }
        }
      }
      var this$11 = $n(end);
      if ((this$11.length !== 0)) {
        var this$12 = $n(jsb);
        this$12.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$12.jl_StringBuilder__f_java$lang$StringBuilder$$content) + end);
      }
      return sb;
    });
    $c_scm_ArraySeq$ofChar.prototype.apply__O__O = (function(v1) {
      return $bC(this.apply__I__C($uI(v1)));
    });
    $c_scm_ArraySeq$ofChar.prototype.apply__I__O = (function(i) {
      return $bC(this.apply__I__C(i));
    });
    $c_scm_ArraySeq$ofChar.prototype.array__O = (function() {
      return this.scm_ArraySeq$ofChar__f_array;
    });
    function $as_scm_ArraySeq$ofChar(obj) {
      return (((obj instanceof $c_scm_ArraySeq$ofChar) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofChar"));
    }
    new $TypeData().initClass($c_scm_ArraySeq$ofChar, "scala.collection.mutable.ArraySeq$ofChar", ({
      scm_ArraySeq$ofChar: 1,
      scm_ArraySeq: 1,
      scm_AbstractSeq: 1,
      sc_AbstractSeq: 1,
      sc_AbstractIterable: 1,
      sc_Iterable: 1,
      sc_IterableOnce: 1,
      sc_IterableOps: 1,
      sc_IterableOnceOps: 1,
      sc_IterableFactoryDefaults: 1,
      sc_Seq: 1,
      s_PartialFunction: 1,
      F1: 1,
      sc_SeqOps: 1,
      s_Equals: 1,
      scm_Seq: 1,
      scm_Iterable: 1,
      scm_SeqOps: 1,
      scm_Cloneable: 1,
      jl_Cloneable: 1,
      scm_IndexedSeq: 1,
      sc_IndexedSeq: 1,
      sc_IndexedSeqOps: 1,
      scm_IndexedSeqOps: 1,
      sc_StrictOptimizedSeqOps: 1,
      sc_StrictOptimizedIterableOps: 1,
      Ljava_io_Serializable: 1
    }));
    function $ct_sci_BigVector__AO__AO__I__($thiz, _prefix1, suffix1, length0) {
      $thiz.sci_BigVector__f_suffix1 = suffix1;
      $thiz.sci_BigVector__f_length0 = length0;
      $ct_sci_Vector__AO__($thiz, _prefix1);
      return $thiz;
    }
    /** @constructor */
    function $c_sci_BigVector() {
      this.sci_Vector__f_prefix1 = null;
      this.sci_BigVector__f_suffix1 = null;
      this.sci_BigVector__f_length0 = 0;
    }
    $c_sci_BigVector.prototype = new $h_sci_VectorImpl();
    $c_sci_BigVector.prototype.constructor = $c_sci_BigVector;
    /** @constructor */
    function $h_sci_BigVector() {
    }
    $h_sci_BigVector.prototype = $c_sci_BigVector.prototype;
    function $as_sci_BigVector(obj) {
      return (((obj instanceof $c_sci_BigVector) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.BigVector"));
    }
    /** @constructor */
    function $c_sci_Vector1(_data1) {
      this.sci_Vector__f_prefix1 = null;
      $ct_sci_Vector__AO__(this, _data1);
    }
    $c_sci_Vector1.prototype = new $h_sci_VectorImpl();
    $c_sci_Vector1.prototype.constructor = $c_sci_Vector1;
    $c_sci_Vector1.prototype;
    $c_sci_Vector1.prototype.apply__I__O = (function(index) {
      if (((index >= 0) && (index < $n(this.sci_Vector__f_prefix1).u.length))) {
        return $n(this.sci_Vector__f_prefix1).get(index);
      } else {
        throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
      }
    });
    $c_sci_Vector1.prototype.updated__I__O__sci_Vector = (function(index, elem) {
      if (((index >= 0) && (index < $n(this.sci_Vector__f_prefix1).u.length))) {
        var a1 = this.sci_Vector__f_prefix1;
        var this$2 = $n(a1);
        var a1c = this$2.clone__O();
        a1c.set(index, elem);
        return new $c_sci_Vector1(a1c);
      } else {
        throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
      }
    });
    $c_sci_Vector1.prototype.appended__O__sci_Vector = (function(elem) {
      var len1 = $n(this.sci_Vector__f_prefix1).u.length;
      if ((len1 < 32)) {
        return new $c_sci_Vector1($m_sci_VectorStatics$().copyAppend1__AO__O__AO(this.sci_Vector__f_prefix1, elem));
      } else {
        var $x_2 = this.sci_Vector__f_prefix1;
        var $x_1 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
        var a = new $ac_O(1);
        a.set(0, elem);
        return new $c_sci_Vector2($x_2, 32, $x_1, a, 33);
      }
    });
    $c_sci_Vector1.prototype.vectorSliceCount__I = (function() {
      return 1;
    });
    $c_sci_Vector1.prototype.vectorSlice__I__AO = (function(idx) {
      return this.sci_Vector__f_prefix1;
    });
    $c_sci_Vector1.prototype.apply__O__O = (function(v1) {
      var index = $uI(v1);
      if (((index >= 0) && (index < $n(this.sci_Vector__f_prefix1).u.length))) {
        return $n(this.sci_Vector__f_prefix1).get(index);
      } else {
        throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
      }
    });
    function $as_sci_Vector1(obj) {
      return (((obj instanceof $c_sci_Vector1) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector1"));
    }
    new $TypeData().initClass($c_sci_Vector1, "scala.collection.immutable.Vector1", ({
      sci_Vector1: 1,
      sci_VectorImpl: 1,
      sci_Vector: 1,
      sci_AbstractSeq: 1,
      sc_AbstractSeq: 1,
      sc_AbstractIterable: 1,
      sc_Iterable: 1,
      sc_IterableOnce: 1,
      sc_IterableOps: 1,
      sc_IterableOnceOps: 1,
      sc_IterableFactoryDefaults: 1,
      sc_Seq: 1,
      s_PartialFunction: 1,
      F1: 1,
      sc_SeqOps: 1,
      s_Equals: 1,
      sci_Seq: 1,
      sci_Iterable: 1,
      sci_SeqOps: 1,
      sci_IndexedSeq: 1,
      sc_IndexedSeq: 1,
      sc_IndexedSeqOps: 1,
      sci_IndexedSeqOps: 1,
      sci_StrictOptimizedSeqOps: 1,
      sc_StrictOptimizedSeqOps: 1,
      sc_StrictOptimizedIterableOps: 1,
      scg_DefaultSerializable: 1,
      Ljava_io_Serializable: 1
    }));
    /** @constructor */
    function $c_sci_$colon$colon(head, next) {
      this.sci_$colon$colon__f_head = null;
      this.sci_$colon$colon__f_next = null;
      this.sci_$colon$colon__f_head = head;
      this.sci_$colon$colon__f_next = next;
    }
    $c_sci_$colon$colon.prototype = new $h_sci_List();
    $c_sci_$colon$colon.prototype.constructor = $c_sci_$colon$colon;
    $c_sci_$colon$colon.prototype;
    $c_sci_$colon$colon.prototype.head__O = (function() {
      return this.sci_$colon$colon__f_head;
    });
    $c_sci_$colon$colon.prototype.productPrefix__T = (function() {
      return "::";
    });
    $c_sci_$colon$colon.prototype.productArity__I = (function() {
      return 2;
    });
    $c_sci_$colon$colon.prototype.productElement__I__O = (function(x$1) {
      switch (x$1) {
        case 0: {
          return this.sci_$colon$colon__f_head;
        }
        case 1: {
          return this.sci_$colon$colon__f_next;
        }
        default: {
          return $m_sr_Statics$().ioobe__I__O(x$1);
        }
      }
    });
    $c_sci_$colon$colon.prototype.productIterator__sc_Iterator = (function() {
      return new $c_sr_ScalaRunTime$$anon$1(this);
    });
    $c_sci_$colon$colon.prototype.tail__O = (function() {
      return this.sci_$colon$colon__f_next;
    });
    new $TypeData().initClass($c_sci_$colon$colon, "scala.collection.immutable.$colon$colon", ({
      sci_$colon$colon: 1,
      sci_List: 1,
      sci_AbstractSeq: 1,
      sc_AbstractSeq: 1,
      sc_AbstractIterable: 1,
      sc_Iterable: 1,
      sc_IterableOnce: 1,
      sc_IterableOps: 1,
      sc_IterableOnceOps: 1,
      sc_IterableFactoryDefaults: 1,
      sc_Seq: 1,
      s_PartialFunction: 1,
      F1: 1,
      sc_SeqOps: 1,
      s_Equals: 1,
      sci_Seq: 1,
      sci_Iterable: 1,
      sci_SeqOps: 1,
      sci_LinearSeq: 1,
      sc_LinearSeq: 1,
      sc_LinearSeqOps: 1,
      sci_LinearSeqOps: 1,
      sc_StrictOptimizedLinearSeqOps: 1,
      sc_StrictOptimizedSeqOps: 1,
      sc_StrictOptimizedIterableOps: 1,
      sci_StrictOptimizedSeqOps: 1,
      scg_DefaultSerializable: 1,
      Ljava_io_Serializable: 1,
      s_Product: 1
    }));
    /** @constructor */
    function $c_sci_Nil$() {
    }
    $c_sci_Nil$.prototype = new $h_sci_List();
    $c_sci_Nil$.prototype.constructor = $c_sci_Nil$;
    $c_sci_Nil$.prototype;
    $c_sci_Nil$.prototype.head__E = (function() {
      throw $ct_ju_NoSuchElementException__T__(new $c_ju_NoSuchElementException(), "head of empty list");
    });
    $c_sci_Nil$.prototype.tail__E = (function() {
      throw new $c_jl_UnsupportedOperationException("tail of empty list");
    });
    $c_sci_Nil$.prototype.knownSize__I = (function() {
      return 0;
    });
    $c_sci_Nil$.prototype.iterator__sc_Iterator = (function() {
      return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty;
    });
    $c_sci_Nil$.prototype.productPrefix__T = (function() {
      return "Nil";
    });
    $c_sci_Nil$.prototype.productArity__I = (function() {
      return 0;
    });
    $c_sci_Nil$.prototype.productElement__I__O = (function(x$1) {
      return $m_sr_Statics$().ioobe__I__O(x$1);
    });
    $c_sci_Nil$.prototype.productIterator__sc_Iterator = (function() {
      return new $c_sr_ScalaRunTime$$anon$1(this);
    });
    $c_sci_Nil$.prototype.tail__O = (function() {
      this.tail__E();
    });
    $c_sci_Nil$.prototype.head__O = (function() {
      this.head__E();
    });
    new $TypeData().initClass($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
      sci_Nil$: 1,
      sci_List: 1,
      sci_AbstractSeq: 1,
      sc_AbstractSeq: 1,
      sc_AbstractIterable: 1,
      sc_Iterable: 1,
      sc_IterableOnce: 1,
      sc_IterableOps: 1,
      sc_IterableOnceOps: 1,
      sc_IterableFactoryDefaults: 1,
      sc_Seq: 1,
      s_PartialFunction: 1,
      F1: 1,
      sc_SeqOps: 1,
      s_Equals: 1,
      sci_Seq: 1,
      sci_Iterable: 1,
      sci_SeqOps: 1,
      sci_LinearSeq: 1,
      sc_LinearSeq: 1,
      sc_LinearSeqOps: 1,
      sci_LinearSeqOps: 1,
      sc_StrictOptimizedLinearSeqOps: 1,
      sc_StrictOptimizedSeqOps: 1,
      sc_StrictOptimizedIterableOps: 1,
      sci_StrictOptimizedSeqOps: 1,
      scg_DefaultSerializable: 1,
      Ljava_io_Serializable: 1,
      s_Product: 1
    }));
    var $n_sci_Nil$;
    function $m_sci_Nil$() {
      if ((!$n_sci_Nil$)) {
        $n_sci_Nil$ = new $c_sci_Nil$();
      }
      return $n_sci_Nil$;
    }
    /** @constructor */
    function $c_sci_Vector0$() {
      this.sci_Vector__f_prefix1 = null;
      this.sci_BigVector__f_suffix1 = null;
      this.sci_BigVector__f_length0 = 0;
      $ct_sci_BigVector__AO__AO__I__(this, $m_sci_VectorStatics$().sci_VectorStatics$__f_empty1, $m_sci_VectorStatics$().sci_VectorStatics$__f_empty1, 0);
    }
    $c_sci_Vector0$.prototype = new $h_sci_BigVector();
    $c_sci_Vector0$.prototype.constructor = $c_sci_Vector0$;
    $c_sci_Vector0$.prototype;
    $c_sci_Vector0$.prototype.apply__I__E = (function(index) {
      throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
    });
    $c_sci_Vector0$.prototype.updated__I__O__sci_Vector = (function(index, elem) {
      throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
    });
    $c_sci_Vector0$.prototype.appended__O__sci_Vector = (function(elem) {
      var a = new $ac_O(1);
      a.set(0, elem);
      return new $c_sci_Vector1(a);
    });
    $c_sci_Vector0$.prototype.vectorSliceCount__I = (function() {
      return 0;
    });
    $c_sci_Vector0$.prototype.vectorSlice__I__AO = (function(idx) {
      return null;
    });
    $c_sci_Vector0$.prototype.equals__O__Z = (function(o) {
      return ((this === o) || ((!(o instanceof $c_sci_Vector)) && $f_sc_Seq__equals__O__Z(this, o)));
    });
    $c_sci_Vector0$.prototype.ioob__I__jl_IndexOutOfBoundsException = (function(index) {
      return $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (index + " is out of bounds (empty vector)"));
    });
    $c_sci_Vector0$.prototype.apply__O__O = (function(v1) {
      this.apply__I__E($uI(v1));
    });
    $c_sci_Vector0$.prototype.apply__I__O = (function(i) {
      this.apply__I__E(i);
    });
    new $TypeData().initClass($c_sci_Vector0$, "scala.collection.immutable.Vector0$", ({
      sci_Vector0$: 1,
      sci_BigVector: 1,
      sci_VectorImpl: 1,
      sci_Vector: 1,
      sci_AbstractSeq: 1,
      sc_AbstractSeq: 1,
      sc_AbstractIterable: 1,
      sc_Iterable: 1,
      sc_IterableOnce: 1,
      sc_IterableOps: 1,
      sc_IterableOnceOps: 1,
      sc_IterableFactoryDefaults: 1,
      sc_Seq: 1,
      s_PartialFunction: 1,
      F1: 1,
      sc_SeqOps: 1,
      s_Equals: 1,
      sci_Seq: 1,
      sci_Iterable: 1,
      sci_SeqOps: 1,
      sci_IndexedSeq: 1,
      sc_IndexedSeq: 1,
      sc_IndexedSeqOps: 1,
      sci_IndexedSeqOps: 1,
      sci_StrictOptimizedSeqOps: 1,
      sc_StrictOptimizedSeqOps: 1,
      sc_StrictOptimizedIterableOps: 1,
      scg_DefaultSerializable: 1,
      Ljava_io_Serializable: 1
    }));
    var $n_sci_Vector0$;
    function $m_sci_Vector0$() {
      if ((!$n_sci_Vector0$)) {
        $n_sci_Vector0$ = new $c_sci_Vector0$();
      }
      return $n_sci_Vector0$;
    }
    /** @constructor */
    function $c_sci_Vector2(_prefix1, len1, data2, _suffix1, _length0) {
      this.sci_Vector__f_prefix1 = null;
      this.sci_BigVector__f_suffix1 = null;
      this.sci_BigVector__f_length0 = 0;
      this.sci_Vector2__f_len1 = 0;
      this.sci_Vector2__f_data2 = null;
      this.sci_Vector2__f_len1 = len1;
      this.sci_Vector2__f_data2 = data2;
      $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
    }
    $c_sci_Vector2.prototype = new $h_sci_BigVector();
    $c_sci_Vector2.prototype.constructor = $c_sci_Vector2;
    $c_sci_Vector2.prototype;
    $c_sci_Vector2.prototype.apply__I__O = (function(index) {
      if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
        var io = ((index - this.sci_Vector2__f_len1) | 0);
        if ((io >= 0)) {
          var i2 = ((io >>> 5) | 0);
          var i1 = (31 & io);
          return ((i2 < $n(this.sci_Vector2__f_data2).u.length) ? $n($n(this.sci_Vector2__f_data2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get((31 & io)));
        } else {
          return $n(this.sci_Vector__f_prefix1).get(index);
        }
      } else {
        throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
      }
    });
    $c_sci_Vector2.prototype.updated__I__O__sci_Vector = (function(index, elem) {
      if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
        if ((index >= this.sci_Vector2__f_len1)) {
          var io = ((index - this.sci_Vector2__f_len1) | 0);
          var i2 = ((io >>> 5) | 0);
          var i1 = (31 & io);
          if ((i2 < $n(this.sci_Vector2__f_data2).u.length)) {
            var a2 = this.sci_Vector2__f_data2;
            var this$2 = $n(a2);
            var a2c = this$2.clone__O();
            var a1 = a2c.get(i2);
            var this$3 = $n(a1);
            var a1c = this$3.clone__O();
            a1c.set(i1, elem);
            a2c.set(i2, a1c);
            var x$2 = this.sci_Vector__f_prefix1;
            var x$3 = this.sci_Vector2__f_len1;
            var x$4 = this.sci_BigVector__f_suffix1;
            var x$5 = this.sci_BigVector__f_length0;
            return new $c_sci_Vector2(x$2, x$3, a2c, x$4, x$5);
          } else {
            var a1$1 = this.sci_BigVector__f_suffix1;
            var this$5 = $n(a1$1);
            var a1c$1 = this$5.clone__O();
            a1c$1.set(i1, elem);
            var x$7 = this.sci_Vector__f_prefix1;
            var x$8 = this.sci_Vector2__f_len1;
            var x$9 = this.sci_Vector2__f_data2;
            var x$10 = this.sci_BigVector__f_length0;
            return new $c_sci_Vector2(x$7, x$8, x$9, a1c$1, x$10);
          }
        } else {
          var a1$2 = this.sci_Vector__f_prefix1;
          var this$7 = $n(a1$2);
          var a1c$2 = this$7.clone__O();
          a1c$2.set(index, elem);
          var len1 = this.sci_Vector2__f_len1;
          var data2 = this.sci_Vector2__f_data2;
          var suffix1 = this.sci_BigVector__f_suffix1;
          var length0 = this.sci_BigVector__f_length0;
          return new $c_sci_Vector2(a1c$2, len1, data2, suffix1, length0);
        }
      } else {
        throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
      }
    });
    $c_sci_Vector2.prototype.appended__O__sci_Vector = (function(elem) {
      if (($n(this.sci_BigVector__f_suffix1).u.length < 32)) {
        var x$1 = $m_sci_VectorStatics$().copyAppend1__AO__O__AO(this.sci_BigVector__f_suffix1, elem);
        var x$2 = ((1 + this.sci_BigVector__f_length0) | 0);
        var x$3 = this.sci_Vector__f_prefix1;
        var x$4 = this.sci_Vector2__f_len1;
        var x$5 = this.sci_Vector2__f_data2;
        return new $c_sci_Vector2(x$3, x$4, x$5, x$1, x$2);
      } else if (($n(this.sci_Vector2__f_data2).u.length < 30)) {
        var x$6 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector2__f_data2, this.sci_BigVector__f_suffix1), 2);
        var a = new $ac_O(1);
        a.set(0, elem);
        var x$8 = ((1 + this.sci_BigVector__f_length0) | 0);
        var x$9 = this.sci_Vector__f_prefix1;
        var x$10 = this.sci_Vector2__f_len1;
        return new $c_sci_Vector2(x$9, x$10, x$6, a, x$8);
      } else {
        var $x_5 = this.sci_Vector__f_prefix1;
        var $x_4 = this.sci_Vector2__f_len1;
        var $x_3 = this.sci_Vector2__f_data2;
        var $x_2 = this.sci_Vector2__f_len1;
        var $x_1 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
        var x = this.sci_BigVector__f_suffix1;
        var a$1 = new ($d_O.getArrayOf().getArrayOf().constr)(1);
        a$1.set(0, x);
        var a$2 = new $ac_O(1);
        a$2.set(0, elem);
        return new $c_sci_Vector3($x_5, $x_4, $x_3, ((960 + $x_2) | 0), $x_1, a$1, a$2, ((1 + this.sci_BigVector__f_length0) | 0));
      }
    });
    $c_sci_Vector2.prototype.vectorSliceCount__I = (function() {
      return 3;
    });
    $c_sci_Vector2.prototype.vectorSlice__I__AO = (function(idx) {
      switch (idx) {
        case 0: {
          return this.sci_Vector__f_prefix1;
        }
        case 1: {
          return this.sci_Vector2__f_data2;
        }
        case 2: {
          return this.sci_BigVector__f_suffix1;
        }
        default: {
          throw new $c_s_MatchError(idx);
        }
      }
    });
    $c_sci_Vector2.prototype.apply__O__O = (function(v1) {
      var index = $uI(v1);
      if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
        var io = ((index - this.sci_Vector2__f_len1) | 0);
        if ((io >= 0)) {
          var i2 = ((io >>> 5) | 0);
          var i1 = (31 & io);
          return ((i2 < $n(this.sci_Vector2__f_data2).u.length) ? $n($n(this.sci_Vector2__f_data2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get((31 & io)));
        } else {
          return $n(this.sci_Vector__f_prefix1).get(index);
        }
      } else {
        throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
      }
    });
    function $as_sci_Vector2(obj) {
      return (((obj instanceof $c_sci_Vector2) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector2"));
    }
    new $TypeData().initClass($c_sci_Vector2, "scala.collection.immutable.Vector2", ({
      sci_Vector2: 1,
      sci_BigVector: 1,
      sci_VectorImpl: 1,
      sci_Vector: 1,
      sci_AbstractSeq: 1,
      sc_AbstractSeq: 1,
      sc_AbstractIterable: 1,
      sc_Iterable: 1,
      sc_IterableOnce: 1,
      sc_IterableOps: 1,
      sc_IterableOnceOps: 1,
      sc_IterableFactoryDefaults: 1,
      sc_Seq: 1,
      s_PartialFunction: 1,
      F1: 1,
      sc_SeqOps: 1,
      s_Equals: 1,
      sci_Seq: 1,
      sci_Iterable: 1,
      sci_SeqOps: 1,
      sci_IndexedSeq: 1,
      sc_IndexedSeq: 1,
      sc_IndexedSeqOps: 1,
      sci_IndexedSeqOps: 1,
      sci_StrictOptimizedSeqOps: 1,
      sc_StrictOptimizedSeqOps: 1,
      sc_StrictOptimizedIterableOps: 1,
      scg_DefaultSerializable: 1,
      Ljava_io_Serializable: 1
    }));
    /** @constructor */
    function $c_sci_Vector3(_prefix1, len1, prefix2, len12, data3, suffix2, _suffix1, _length0) {
      this.sci_Vector__f_prefix1 = null;
      this.sci_BigVector__f_suffix1 = null;
      this.sci_BigVector__f_length0 = 0;
      this.sci_Vector3__f_len1 = 0;
      this.sci_Vector3__f_prefix2 = null;
      this.sci_Vector3__f_len12 = 0;
      this.sci_Vector3__f_data3 = null;
      this.sci_Vector3__f_suffix2 = null;
      this.sci_Vector3__f_len1 = len1;
      this.sci_Vector3__f_prefix2 = prefix2;
      this.sci_Vector3__f_len12 = len12;
      this.sci_Vector3__f_data3 = data3;
      this.sci_Vector3__f_suffix2 = suffix2;
      $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
    }
    $c_sci_Vector3.prototype = new $h_sci_BigVector();
    $c_sci_Vector3.prototype.constructor = $c_sci_Vector3;
    $c_sci_Vector3.prototype;
    $c_sci_Vector3.prototype.apply__I__O = (function(index) {
      if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
        var io = ((index - this.sci_Vector3__f_len12) | 0);
        if ((io >= 0)) {
          var i3 = ((io >>> 10) | 0);
          var i2 = (31 & ((io >>> 5) | 0));
          var i1 = (31 & io);
          return ((i3 < $n(this.sci_Vector3__f_data3).u.length) ? $n($n($n(this.sci_Vector3__f_data3).get(i3)).get(i2)).get(i1) : ((i2 < $n(this.sci_Vector3__f_suffix2).u.length) ? $n($n(this.sci_Vector3__f_suffix2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get(i1)));
        } else if ((index >= this.sci_Vector3__f_len1)) {
          var io$2 = ((index - this.sci_Vector3__f_len1) | 0);
          return $n($n(this.sci_Vector3__f_prefix2).get(((io$2 >>> 5) | 0))).get((31 & io$2));
        } else {
          return $n(this.sci_Vector__f_prefix1).get(index);
        }
      } else {
        throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
      }
    });
    $c_sci_Vector3.prototype.updated__I__O__sci_Vector = (function(index, elem) {
      if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
        if ((index >= this.sci_Vector3__f_len12)) {
          var io = ((index - this.sci_Vector3__f_len12) | 0);
          var i3 = ((io >>> 10) | 0);
          var i2 = (31 & ((io >>> 5) | 0));
          var i1 = (31 & io);
          if ((i3 < $n(this.sci_Vector3__f_data3).u.length)) {
            var a3 = this.sci_Vector3__f_data3;
            var this$2 = $n(a3);
            var a3c = this$2.clone__O();
            var a2 = a3c.get(i3);
            var this$3 = $n(a2);
            var a2c = this$3.clone__O();
            var a1 = a2c.get(i2);
            var this$4 = $n(a1);
            var a1c = this$4.clone__O();
            a1c.set(i1, elem);
            a2c.set(i2, a1c);
            a3c.set(i3, a2c);
            var x$2 = this.sci_Vector__f_prefix1;
            var x$3 = this.sci_Vector3__f_len1;
            var x$4 = this.sci_Vector3__f_prefix2;
            var x$5 = this.sci_Vector3__f_len12;
            var x$6 = this.sci_Vector3__f_suffix2;
            var x$7 = this.sci_BigVector__f_suffix1;
            var x$8 = this.sci_BigVector__f_length0;
            return new $c_sci_Vector3(x$2, x$3, x$4, x$5, a3c, x$6, x$7, x$8);
          } else if ((i2 < $n(this.sci_Vector3__f_suffix2).u.length)) {
            var a2$1 = this.sci_Vector3__f_suffix2;
            var this$6 = $n(a2$1);
            var a2c$1 = this$6.clone__O();
            var a1$1 = a2c$1.get(i2);
            var this$7 = $n(a1$1);
            var a1c$1 = this$7.clone__O();
            a1c$1.set(i1, elem);
            a2c$1.set(i2, a1c$1);
            var x$10 = this.sci_Vector__f_prefix1;
            var x$11 = this.sci_Vector3__f_len1;
            var x$12 = this.sci_Vector3__f_prefix2;
            var x$13 = this.sci_Vector3__f_len12;
            var x$14 = this.sci_Vector3__f_data3;
            var x$15 = this.sci_BigVector__f_suffix1;
            var x$16 = this.sci_BigVector__f_length0;
            return new $c_sci_Vector3(x$10, x$11, x$12, x$13, x$14, a2c$1, x$15, x$16);
          } else {
            var a1$2 = this.sci_BigVector__f_suffix1;
            var this$9 = $n(a1$2);
            var a1c$2 = this$9.clone__O();
            a1c$2.set(i1, elem);
            var x$18 = this.sci_Vector__f_prefix1;
            var x$19 = this.sci_Vector3__f_len1;
            var x$20 = this.sci_Vector3__f_prefix2;
            var x$21 = this.sci_Vector3__f_len12;
            var x$22 = this.sci_Vector3__f_data3;
            var x$23 = this.sci_Vector3__f_suffix2;
            var x$24 = this.sci_BigVector__f_length0;
            return new $c_sci_Vector3(x$18, x$19, x$20, x$21, x$22, x$23, a1c$2, x$24);
          }
        } else if ((index >= this.sci_Vector3__f_len1)) {
          var io$2 = ((index - this.sci_Vector3__f_len1) | 0);
          var a2$2 = this.sci_Vector3__f_prefix2;
          var idx2 = ((io$2 >>> 5) | 0);
          var idx1 = (31 & io$2);
          var this$11 = $n(a2$2);
          var a2c$2 = this$11.clone__O();
          var a1$3 = a2c$2.get(idx2);
          var this$12 = $n(a1$3);
          var a1c$3 = this$12.clone__O();
          a1c$3.set(idx1, elem);
          a2c$2.set(idx2, a1c$3);
          var x$26 = this.sci_Vector__f_prefix1;
          var x$27 = this.sci_Vector3__f_len1;
          var x$28 = this.sci_Vector3__f_len12;
          var x$29 = this.sci_Vector3__f_data3;
          var x$30 = this.sci_Vector3__f_suffix2;
          var x$31 = this.sci_BigVector__f_suffix1;
          var x$32 = this.sci_BigVector__f_length0;
          return new $c_sci_Vector3(x$26, x$27, a2c$2, x$28, x$29, x$30, x$31, x$32);
        } else {
          var a1$4 = this.sci_Vector__f_prefix1;
          var this$14 = $n(a1$4);
          var a1c$4 = this$14.clone__O();
          a1c$4.set(index, elem);
          var len1 = this.sci_Vector3__f_len1;
          var prefix2 = this.sci_Vector3__f_prefix2;
          var len12 = this.sci_Vector3__f_len12;
          var data3 = this.sci_Vector3__f_data3;
          var suffix2 = this.sci_Vector3__f_suffix2;
          var suffix1 = this.sci_BigVector__f_suffix1;
          var length0 = this.sci_BigVector__f_length0;
          return new $c_sci_Vector3(a1c$4, len1, prefix2, len12, data3, suffix2, suffix1, length0);
        }
      } else {
        throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
      }
    });
    $c_sci_Vector3.prototype.appended__O__sci_Vector = (function(elem) {
      if (($n(this.sci_BigVector__f_suffix1).u.length < 32)) {
        var x$1 = $m_sci_VectorStatics$().copyAppend1__AO__O__AO(this.sci_BigVector__f_suffix1, elem);
        var x$2 = ((1 + this.sci_BigVector__f_length0) | 0);
        var x$3 = this.sci_Vector__f_prefix1;
        var x$4 = this.sci_Vector3__f_len1;
        var x$5 = this.sci_Vector3__f_prefix2;
        var x$6 = this.sci_Vector3__f_len12;
        var x$7 = this.sci_Vector3__f_data3;
        var x$8 = this.sci_Vector3__f_suffix2;
        return new $c_sci_Vector3(x$3, x$4, x$5, x$6, x$7, x$8, x$1, x$2);
      } else if (($n(this.sci_Vector3__f_suffix2).u.length < 31)) {
        var x$9 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector3__f_suffix2, this.sci_BigVector__f_suffix1), 2);
        var a = new $ac_O(1);
        a.set(0, elem);
        var x$11 = ((1 + this.sci_BigVector__f_length0) | 0);
        var x$12 = this.sci_Vector__f_prefix1;
        var x$13 = this.sci_Vector3__f_len1;
        var x$14 = this.sci_Vector3__f_prefix2;
        var x$15 = this.sci_Vector3__f_len12;
        var x$16 = this.sci_Vector3__f_data3;
        return new $c_sci_Vector3(x$12, x$13, x$14, x$15, x$16, x$9, a, x$11);
      } else if (($n(this.sci_Vector3__f_data3).u.length < 30)) {
        var x$17 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector3__f_data3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector3__f_suffix2, this.sci_BigVector__f_suffix1)), 3);
        var x$18 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
        var a$1 = new $ac_O(1);
        a$1.set(0, elem);
        var x$20 = ((1 + this.sci_BigVector__f_length0) | 0);
        var x$21 = this.sci_Vector__f_prefix1;
        var x$22 = this.sci_Vector3__f_len1;
        var x$23 = this.sci_Vector3__f_prefix2;
        var x$24 = this.sci_Vector3__f_len12;
        return new $c_sci_Vector3(x$21, x$22, x$23, x$24, x$17, x$18, a$1, x$20);
      } else {
        var $x_8 = this.sci_Vector__f_prefix1;
        var $x_7 = this.sci_Vector3__f_len1;
        var $x_6 = this.sci_Vector3__f_prefix2;
        var $x_5 = this.sci_Vector3__f_len12;
        var $x_4 = this.sci_Vector3__f_data3;
        var $x_3 = this.sci_Vector3__f_len12;
        var $x_2 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty4;
        var x = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector3__f_suffix2, this.sci_BigVector__f_suffix1), 2);
        var a$2 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().constr)(1);
        a$2.set(0, x);
        var $x_1 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
        var a$3 = new $ac_O(1);
        a$3.set(0, elem);
        return new $c_sci_Vector4($x_8, $x_7, $x_6, $x_5, $x_4, ((30720 + $x_3) | 0), $x_2, a$2, $x_1, a$3, ((1 + this.sci_BigVector__f_length0) | 0));
      }
    });
    $c_sci_Vector3.prototype.vectorSliceCount__I = (function() {
      return 5;
    });
    $c_sci_Vector3.prototype.vectorSlice__I__AO = (function(idx) {
      switch (idx) {
        case 0: {
          return this.sci_Vector__f_prefix1;
        }
        case 1: {
          return this.sci_Vector3__f_prefix2;
        }
        case 2: {
          return this.sci_Vector3__f_data3;
        }
        case 3: {
          return this.sci_Vector3__f_suffix2;
        }
        case 4: {
          return this.sci_BigVector__f_suffix1;
        }
        default: {
          throw new $c_s_MatchError(idx);
        }
      }
    });
    $c_sci_Vector3.prototype.apply__O__O = (function(v1) {
      var index = $uI(v1);
      if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
        var io = ((index - this.sci_Vector3__f_len12) | 0);
        if ((io >= 0)) {
          var i3 = ((io >>> 10) | 0);
          var i2 = (31 & ((io >>> 5) | 0));
          var i1 = (31 & io);
          return ((i3 < $n(this.sci_Vector3__f_data3).u.length) ? $n($n($n(this.sci_Vector3__f_data3).get(i3)).get(i2)).get(i1) : ((i2 < $n(this.sci_Vector3__f_suffix2).u.length) ? $n($n(this.sci_Vector3__f_suffix2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get(i1)));
        } else if ((index >= this.sci_Vector3__f_len1)) {
          var io$2 = ((index - this.sci_Vector3__f_len1) | 0);
          return $n($n(this.sci_Vector3__f_prefix2).get(((io$2 >>> 5) | 0))).get((31 & io$2));
        } else {
          return $n(this.sci_Vector__f_prefix1).get(index);
        }
      } else {
        throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
      }
    });
    function $as_sci_Vector3(obj) {
      return (((obj instanceof $c_sci_Vector3) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector3"));
    }
    new $TypeData().initClass($c_sci_Vector3, "scala.collection.immutable.Vector3", ({
      sci_Vector3: 1,
      sci_BigVector: 1,
      sci_VectorImpl: 1,
      sci_Vector: 1,
      sci_AbstractSeq: 1,
      sc_AbstractSeq: 1,
      sc_AbstractIterable: 1,
      sc_Iterable: 1,
      sc_IterableOnce: 1,
      sc_IterableOps: 1,
      sc_IterableOnceOps: 1,
      sc_IterableFactoryDefaults: 1,
      sc_Seq: 1,
      s_PartialFunction: 1,
      F1: 1,
      sc_SeqOps: 1,
      s_Equals: 1,
      sci_Seq: 1,
      sci_Iterable: 1,
      sci_SeqOps: 1,
      sci_IndexedSeq: 1,
      sc_IndexedSeq: 1,
      sc_IndexedSeqOps: 1,
      sci_IndexedSeqOps: 1,
      sci_StrictOptimizedSeqOps: 1,
      sc_StrictOptimizedSeqOps: 1,
      sc_StrictOptimizedIterableOps: 1,
      scg_DefaultSerializable: 1,
      Ljava_io_Serializable: 1
    }));
    /** @constructor */
    function $c_sci_Vector4(_prefix1, len1, prefix2, len12, prefix3, len123, data4, suffix3, suffix2, _suffix1, _length0) {
      this.sci_Vector__f_prefix1 = null;
      this.sci_BigVector__f_suffix1 = null;
      this.sci_BigVector__f_length0 = 0;
      this.sci_Vector4__f_len1 = 0;
      this.sci_Vector4__f_prefix2 = null;
      this.sci_Vector4__f_len12 = 0;
      this.sci_Vector4__f_prefix3 = null;
      this.sci_Vector4__f_len123 = 0;
      this.sci_Vector4__f_data4 = null;
      this.sci_Vector4__f_suffix3 = null;
      this.sci_Vector4__f_suffix2 = null;
      this.sci_Vector4__f_len1 = len1;
      this.sci_Vector4__f_prefix2 = prefix2;
      this.sci_Vector4__f_len12 = len12;
      this.sci_Vector4__f_prefix3 = prefix3;
      this.sci_Vector4__f_len123 = len123;
      this.sci_Vector4__f_data4 = data4;
      this.sci_Vector4__f_suffix3 = suffix3;
      this.sci_Vector4__f_suffix2 = suffix2;
      $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
    }
    $c_sci_Vector4.prototype = new $h_sci_BigVector();
    $c_sci_Vector4.prototype.constructor = $c_sci_Vector4;
    $c_sci_Vector4.prototype;
    $c_sci_Vector4.prototype.apply__I__O = (function(index) {
      if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
        var io = ((index - this.sci_Vector4__f_len123) | 0);
        if ((io >= 0)) {
          var i4 = ((io >>> 15) | 0);
          var i3 = (31 & ((io >>> 10) | 0));
          var i2 = (31 & ((io >>> 5) | 0));
          var i1 = (31 & io);
          return ((i4 < $n(this.sci_Vector4__f_data4).u.length) ? $n($n($n($n(this.sci_Vector4__f_data4).get(i4)).get(i3)).get(i2)).get(i1) : ((i3 < $n(this.sci_Vector4__f_suffix3).u.length) ? $n($n($n(this.sci_Vector4__f_suffix3).get(i3)).get(i2)).get(i1) : ((i2 < $n(this.sci_Vector4__f_suffix2).u.length) ? $n($n(this.sci_Vector4__f_suffix2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get(i1))));
        } else if ((index >= this.sci_Vector4__f_len12)) {
          var io$2 = ((index - this.sci_Vector4__f_len12) | 0);
          return $n($n($n(this.sci_Vector4__f_prefix3).get(((io$2 >>> 10) | 0))).get((31 & ((io$2 >>> 5) | 0)))).get((31 & io$2));
        } else if ((index >= this.sci_Vector4__f_len1)) {
          var io$3 = ((index - this.sci_Vector4__f_len1) | 0);
          return $n($n(this.sci_Vector4__f_prefix2).get(((io$3 >>> 5) | 0))).get((31 & io$3));
        } else {
          return $n(this.sci_Vector__f_prefix1).get(index);
        }
      } else {
        throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
      }
    });
    $c_sci_Vector4.prototype.updated__I__O__sci_Vector = (function(index, elem) {
      if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
        if ((index >= this.sci_Vector4__f_len123)) {
          var io = ((index - this.sci_Vector4__f_len123) | 0);
          var i4 = ((io >>> 15) | 0);
          var i3 = (31 & ((io >>> 10) | 0));
          var i2 = (31 & ((io >>> 5) | 0));
          var i1 = (31 & io);
          if ((i4 < $n(this.sci_Vector4__f_data4).u.length)) {
            var a4 = this.sci_Vector4__f_data4;
            var this$2 = $n(a4);
            var a4c = this$2.clone__O();
            var a3 = a4c.get(i4);
            var this$3 = $n(a3);
            var a3c = this$3.clone__O();
            var a2 = a3c.get(i3);
            var this$4 = $n(a2);
            var a2c = this$4.clone__O();
            var a1 = a2c.get(i2);
            var this$5 = $n(a1);
            var a1c = this$5.clone__O();
            a1c.set(i1, elem);
            a2c.set(i2, a1c);
            a3c.set(i3, a2c);
            a4c.set(i4, a3c);
            var x$2 = this.sci_Vector__f_prefix1;
            var x$3 = this.sci_Vector4__f_len1;
            var x$4 = this.sci_Vector4__f_prefix2;
            var x$5 = this.sci_Vector4__f_len12;
            var x$6 = this.sci_Vector4__f_prefix3;
            var x$7 = this.sci_Vector4__f_len123;
            var x$8 = this.sci_Vector4__f_suffix3;
            var x$9 = this.sci_Vector4__f_suffix2;
            var x$10 = this.sci_BigVector__f_suffix1;
            var x$11 = this.sci_BigVector__f_length0;
            return new $c_sci_Vector4(x$2, x$3, x$4, x$5, x$6, x$7, a4c, x$8, x$9, x$10, x$11);
          } else if ((i3 < $n(this.sci_Vector4__f_suffix3).u.length)) {
            var a3$1 = this.sci_Vector4__f_suffix3;
            var this$7 = $n(a3$1);
            var a3c$1 = this$7.clone__O();
            var a2$1 = a3c$1.get(i3);
            var this$8 = $n(a2$1);
            var a2c$1 = this$8.clone__O();
            var a1$1 = a2c$1.get(i2);
            var this$9 = $n(a1$1);
            var a1c$1 = this$9.clone__O();
            a1c$1.set(i1, elem);
            a2c$1.set(i2, a1c$1);
            a3c$1.set(i3, a2c$1);
            var x$13 = this.sci_Vector__f_prefix1;
            var x$14 = this.sci_Vector4__f_len1;
            var x$15 = this.sci_Vector4__f_prefix2;
            var x$16 = this.sci_Vector4__f_len12;
            var x$17 = this.sci_Vector4__f_prefix3;
            var x$18 = this.sci_Vector4__f_len123;
            var x$19 = this.sci_Vector4__f_data4;
            var x$20 = this.sci_Vector4__f_suffix2;
            var x$21 = this.sci_BigVector__f_suffix1;
            var x$22 = this.sci_BigVector__f_length0;
            return new $c_sci_Vector4(x$13, x$14, x$15, x$16, x$17, x$18, x$19, a3c$1, x$20, x$21, x$22);
          } else if ((i2 < $n(this.sci_Vector4__f_suffix2).u.length)) {
            var a2$2 = this.sci_Vector4__f_suffix2;
            var this$11 = $n(a2$2);
            var a2c$2 = this$11.clone__O();
            var a1$2 = a2c$2.get(i2);
            var this$12 = $n(a1$2);
            var a1c$2 = this$12.clone__O();
            a1c$2.set(i1, elem);
            a2c$2.set(i2, a1c$2);
            var x$24 = this.sci_Vector__f_prefix1;
            var x$25 = this.sci_Vector4__f_len1;
            var x$26 = this.sci_Vector4__f_prefix2;
            var x$27 = this.sci_Vector4__f_len12;
            var x$28 = this.sci_Vector4__f_prefix3;
            var x$29 = this.sci_Vector4__f_len123;
            var x$30 = this.sci_Vector4__f_data4;
            var x$31 = this.sci_Vector4__f_suffix3;
            var x$32 = this.sci_BigVector__f_suffix1;
            var x$33 = this.sci_BigVector__f_length0;
            return new $c_sci_Vector4(x$24, x$25, x$26, x$27, x$28, x$29, x$30, x$31, a2c$2, x$32, x$33);
          } else {
            var a1$3 = this.sci_BigVector__f_suffix1;
            var this$14 = $n(a1$3);
            var a1c$3 = this$14.clone__O();
            a1c$3.set(i1, elem);
            var x$35 = this.sci_Vector__f_prefix1;
            var x$36 = this.sci_Vector4__f_len1;
            var x$37 = this.sci_Vector4__f_prefix2;
            var x$38 = this.sci_Vector4__f_len12;
            var x$39 = this.sci_Vector4__f_prefix3;
            var x$40 = this.sci_Vector4__f_len123;
            var x$41 = this.sci_Vector4__f_data4;
            var x$42 = this.sci_Vector4__f_suffix3;
            var x$43 = this.sci_Vector4__f_suffix2;
            var x$44 = this.sci_BigVector__f_length0;
            return new $c_sci_Vector4(x$35, x$36, x$37, x$38, x$39, x$40, x$41, x$42, x$43, a1c$3, x$44);
          }
        } else if ((index >= this.sci_Vector4__f_len12)) {
          var io$2 = ((index - this.sci_Vector4__f_len12) | 0);
          var a3$2 = this.sci_Vector4__f_prefix3;
          var idx3 = ((io$2 >>> 10) | 0);
          var idx2 = (31 & ((io$2 >>> 5) | 0));
          var idx1 = (31 & io$2);
          var this$16 = $n(a3$2);
          var a3c$2 = this$16.clone__O();
          var a2$3 = a3c$2.get(idx3);
          var this$17 = $n(a2$3);
          var a2c$3 = this$17.clone__O();
          var a1$4 = a2c$3.get(idx2);
          var this$18 = $n(a1$4);
          var a1c$4 = this$18.clone__O();
          a1c$4.set(idx1, elem);
          a2c$3.set(idx2, a1c$4);
          a3c$2.set(idx3, a2c$3);
          var x$46 = this.sci_Vector__f_prefix1;
          var x$47 = this.sci_Vector4__f_len1;
          var x$48 = this.sci_Vector4__f_prefix2;
          var x$49 = this.sci_Vector4__f_len12;
          var x$50 = this.sci_Vector4__f_len123;
          var x$51 = this.sci_Vector4__f_data4;
          var x$52 = this.sci_Vector4__f_suffix3;
          var x$53 = this.sci_Vector4__f_suffix2;
          var x$54 = this.sci_BigVector__f_suffix1;
          var x$55 = this.sci_BigVector__f_length0;
          return new $c_sci_Vector4(x$46, x$47, x$48, x$49, a3c$2, x$50, x$51, x$52, x$53, x$54, x$55);
        } else if ((index >= this.sci_Vector4__f_len1)) {
          var io$3 = ((index - this.sci_Vector4__f_len1) | 0);
          var a2$4 = this.sci_Vector4__f_prefix2;
          var idx2$1 = ((io$3 >>> 5) | 0);
          var idx1$1 = (31 & io$3);
          var this$20 = $n(a2$4);
          var a2c$4 = this$20.clone__O();
          var a1$5 = a2c$4.get(idx2$1);
          var this$21 = $n(a1$5);
          var a1c$5 = this$21.clone__O();
          a1c$5.set(idx1$1, elem);
          a2c$4.set(idx2$1, a1c$5);
          var x$57 = this.sci_Vector__f_prefix1;
          var x$58 = this.sci_Vector4__f_len1;
          var x$59 = this.sci_Vector4__f_len12;
          var x$60 = this.sci_Vector4__f_prefix3;
          var x$61 = this.sci_Vector4__f_len123;
          var x$62 = this.sci_Vector4__f_data4;
          var x$63 = this.sci_Vector4__f_suffix3;
          var x$64 = this.sci_Vector4__f_suffix2;
          var x$65 = this.sci_BigVector__f_suffix1;
          var x$66 = this.sci_BigVector__f_length0;
          return new $c_sci_Vector4(x$57, x$58, a2c$4, x$59, x$60, x$61, x$62, x$63, x$64, x$65, x$66);
        } else {
          var a1$6 = this.sci_Vector__f_prefix1;
          var this$23 = $n(a1$6);
          var a1c$6 = this$23.clone__O();
          a1c$6.set(index, elem);
          var len1 = this.sci_Vector4__f_len1;
          var prefix2 = this.sci_Vector4__f_prefix2;
          var len12 = this.sci_Vector4__f_len12;
          var prefix3 = this.sci_Vector4__f_prefix3;
          var len123 = this.sci_Vector4__f_len123;
          var data4 = this.sci_Vector4__f_data4;
          var suffix3 = this.sci_Vector4__f_suffix3;
          var suffix2 = this.sci_Vector4__f_suffix2;
          var suffix1 = this.sci_BigVector__f_suffix1;
          var length0 = this.sci_BigVector__f_length0;
          return new $c_sci_Vector4(a1c$6, len1, prefix2, len12, prefix3, len123, data4, suffix3, suffix2, suffix1, length0);
        }
      } else {
        throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
      }
    });
    $c_sci_Vector4.prototype.appended__O__sci_Vector = (function(elem) {
      if (($n(this.sci_BigVector__f_suffix1).u.length < 32)) {
        var x$1 = $m_sci_VectorStatics$().copyAppend1__AO__O__AO(this.sci_BigVector__f_suffix1, elem);
        var x$2 = ((1 + this.sci_BigVector__f_length0) | 0);
        var x$3 = this.sci_Vector__f_prefix1;
        var x$4 = this.sci_Vector4__f_len1;
        var x$5 = this.sci_Vector4__f_prefix2;
        var x$6 = this.sci_Vector4__f_len12;
        var x$7 = this.sci_Vector4__f_prefix3;
        var x$8 = this.sci_Vector4__f_len123;
        var x$9 = this.sci_Vector4__f_data4;
        var x$10 = this.sci_Vector4__f_suffix3;
        var x$11 = this.sci_Vector4__f_suffix2;
        return new $c_sci_Vector4(x$3, x$4, x$5, x$6, x$7, x$8, x$9, x$10, x$11, x$1, x$2);
      } else if (($n(this.sci_Vector4__f_suffix2).u.length < 31)) {
        var x$12 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector4__f_suffix2, this.sci_BigVector__f_suffix1), 2);
        var a = new $ac_O(1);
        a.set(0, elem);
        var x$14 = ((1 + this.sci_BigVector__f_length0) | 0);
        var x$15 = this.sci_Vector__f_prefix1;
        var x$16 = this.sci_Vector4__f_len1;
        var x$17 = this.sci_Vector4__f_prefix2;
        var x$18 = this.sci_Vector4__f_len12;
        var x$19 = this.sci_Vector4__f_prefix3;
        var x$20 = this.sci_Vector4__f_len123;
        var x$21 = this.sci_Vector4__f_data4;
        var x$22 = this.sci_Vector4__f_suffix3;
        return new $c_sci_Vector4(x$15, x$16, x$17, x$18, x$19, x$20, x$21, x$22, x$12, a, x$14);
      } else if (($n(this.sci_Vector4__f_suffix3).u.length < 31)) {
        var x$23 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector4__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector4__f_suffix2, this.sci_BigVector__f_suffix1)), 3);
        var x$24 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
        var a$1 = new $ac_O(1);
        a$1.set(0, elem);
        var x$26 = ((1 + this.sci_BigVector__f_length0) | 0);
        var x$27 = this.sci_Vector__f_prefix1;
        var x$28 = this.sci_Vector4__f_len1;
        var x$29 = this.sci_Vector4__f_prefix2;
        var x$30 = this.sci_Vector4__f_len12;
        var x$31 = this.sci_Vector4__f_prefix3;
        var x$32 = this.sci_Vector4__f_len123;
        var x$33 = this.sci_Vector4__f_data4;
        return new $c_sci_Vector4(x$27, x$28, x$29, x$30, x$31, x$32, x$33, x$23, x$24, a$1, x$26);
      } else if (($n(this.sci_Vector4__f_data4).u.length < 30)) {
        var x$34 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector4__f_data4, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector4__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector4__f_suffix2, this.sci_BigVector__f_suffix1))), 4);
        var x$35 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
        var x$36 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
        var a$2 = new $ac_O(1);
        a$2.set(0, elem);
        var x$38 = ((1 + this.sci_BigVector__f_length0) | 0);
        var x$39 = this.sci_Vector__f_prefix1;
        var x$40 = this.sci_Vector4__f_len1;
        var x$41 = this.sci_Vector4__f_prefix2;
        var x$42 = this.sci_Vector4__f_len12;
        var x$43 = this.sci_Vector4__f_prefix3;
        var x$44 = this.sci_Vector4__f_len123;
        return new $c_sci_Vector4(x$39, x$40, x$41, x$42, x$43, x$44, x$34, x$35, x$36, a$2, x$38);
      } else {
        var $x_11 = this.sci_Vector__f_prefix1;
        var $x_10 = this.sci_Vector4__f_len1;
        var $x_9 = this.sci_Vector4__f_prefix2;
        var $x_8 = this.sci_Vector4__f_len12;
        var $x_7 = this.sci_Vector4__f_prefix3;
        var $x_6 = this.sci_Vector4__f_len123;
        var $x_5 = this.sci_Vector4__f_data4;
        var $x_4 = this.sci_Vector4__f_len123;
        var $x_3 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty5;
        var x = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector4__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector4__f_suffix2, this.sci_BigVector__f_suffix1)), 3);
        var a$3 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(1);
        a$3.set(0, x);
        var $x_2 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
        var $x_1 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
        var a$4 = new $ac_O(1);
        a$4.set(0, elem);
        return new $c_sci_Vector5($x_11, $x_10, $x_9, $x_8, $x_7, $x_6, $x_5, ((983040 + $x_4) | 0), $x_3, a$3, $x_2, $x_1, a$4, ((1 + this.sci_BigVector__f_length0) | 0));
      }
    });
    $c_sci_Vector4.prototype.vectorSliceCount__I = (function() {
      return 7;
    });
    $c_sci_Vector4.prototype.vectorSlice__I__AO = (function(idx) {
      switch (idx) {
        case 0: {
          return this.sci_Vector__f_prefix1;
        }
        case 1: {
          return this.sci_Vector4__f_prefix2;
        }
        case 2: {
          return this.sci_Vector4__f_prefix3;
        }
        case 3: {
          return this.sci_Vector4__f_data4;
        }
        case 4: {
          return this.sci_Vector4__f_suffix3;
        }
        case 5: {
          return this.sci_Vector4__f_suffix2;
        }
        case 6: {
          return this.sci_BigVector__f_suffix1;
        }
        default: {
          throw new $c_s_MatchError(idx);
        }
      }
    });
    $c_sci_Vector4.prototype.apply__O__O = (function(v1) {
      var index = $uI(v1);
      if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
        var io = ((index - this.sci_Vector4__f_len123) | 0);
        if ((io >= 0)) {
          var i4 = ((io >>> 15) | 0);
          var i3 = (31 & ((io >>> 10) | 0));
          var i2 = (31 & ((io >>> 5) | 0));
          var i1 = (31 & io);
          return ((i4 < $n(this.sci_Vector4__f_data4).u.length) ? $n($n($n($n(this.sci_Vector4__f_data4).get(i4)).get(i3)).get(i2)).get(i1) : ((i3 < $n(this.sci_Vector4__f_suffix3).u.length) ? $n($n($n(this.sci_Vector4__f_suffix3).get(i3)).get(i2)).get(i1) : ((i2 < $n(this.sci_Vector4__f_suffix2).u.length) ? $n($n(this.sci_Vector4__f_suffix2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get(i1))));
        } else if ((index >= this.sci_Vector4__f_len12)) {
          var io$2 = ((index - this.sci_Vector4__f_len12) | 0);
          return $n($n($n(this.sci_Vector4__f_prefix3).get(((io$2 >>> 10) | 0))).get((31 & ((io$2 >>> 5) | 0)))).get((31 & io$2));
        } else if ((index >= this.sci_Vector4__f_len1)) {
          var io$3 = ((index - this.sci_Vector4__f_len1) | 0);
          return $n($n(this.sci_Vector4__f_prefix2).get(((io$3 >>> 5) | 0))).get((31 & io$3));
        } else {
          return $n(this.sci_Vector__f_prefix1).get(index);
        }
      } else {
        throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
      }
    });
    function $as_sci_Vector4(obj) {
      return (((obj instanceof $c_sci_Vector4) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector4"));
    }
    new $TypeData().initClass($c_sci_Vector4, "scala.collection.immutable.Vector4", ({
      sci_Vector4: 1,
      sci_BigVector: 1,
      sci_VectorImpl: 1,
      sci_Vector: 1,
      sci_AbstractSeq: 1,
      sc_AbstractSeq: 1,
      sc_AbstractIterable: 1,
      sc_Iterable: 1,
      sc_IterableOnce: 1,
      sc_IterableOps: 1,
      sc_IterableOnceOps: 1,
      sc_IterableFactoryDefaults: 1,
      sc_Seq: 1,
      s_PartialFunction: 1,
      F1: 1,
      sc_SeqOps: 1,
      s_Equals: 1,
      sci_Seq: 1,
      sci_Iterable: 1,
      sci_SeqOps: 1,
      sci_IndexedSeq: 1,
      sc_IndexedSeq: 1,
      sc_IndexedSeqOps: 1,
      sci_IndexedSeqOps: 1,
      sci_StrictOptimizedSeqOps: 1,
      sc_StrictOptimizedSeqOps: 1,
      sc_StrictOptimizedIterableOps: 1,
      scg_DefaultSerializable: 1,
      Ljava_io_Serializable: 1
    }));
    /** @constructor */
    function $c_sci_Vector5(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, data5, suffix4, suffix3, suffix2, _suffix1, _length0) {
      this.sci_Vector__f_prefix1 = null;
      this.sci_BigVector__f_suffix1 = null;
      this.sci_BigVector__f_length0 = 0;
      this.sci_Vector5__f_len1 = 0;
      this.sci_Vector5__f_prefix2 = null;
      this.sci_Vector5__f_len12 = 0;
      this.sci_Vector5__f_prefix3 = null;
      this.sci_Vector5__f_len123 = 0;
      this.sci_Vector5__f_prefix4 = null;
      this.sci_Vector5__f_len1234 = 0;
      this.sci_Vector5__f_data5 = null;
      this.sci_Vector5__f_suffix4 = null;
      this.sci_Vector5__f_suffix3 = null;
      this.sci_Vector5__f_suffix2 = null;
      this.sci_Vector5__f_len1 = len1;
      this.sci_Vector5__f_prefix2 = prefix2;
      this.sci_Vector5__f_len12 = len12;
      this.sci_Vector5__f_prefix3 = prefix3;
      this.sci_Vector5__f_len123 = len123;
      this.sci_Vector5__f_prefix4 = prefix4;
      this.sci_Vector5__f_len1234 = len1234;
      this.sci_Vector5__f_data5 = data5;
      this.sci_Vector5__f_suffix4 = suffix4;
      this.sci_Vector5__f_suffix3 = suffix3;
      this.sci_Vector5__f_suffix2 = suffix2;
      $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
    }
    $c_sci_Vector5.prototype = new $h_sci_BigVector();
    $c_sci_Vector5.prototype.constructor = $c_sci_Vector5;
    $c_sci_Vector5.prototype;
    $c_sci_Vector5.prototype.apply__I__O = (function(index) {
      if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
        var io = ((index - this.sci_Vector5__f_len1234) | 0);
        if ((io >= 0)) {
          var i5 = ((io >>> 20) | 0);
          var i4 = (31 & ((io >>> 15) | 0));
          var i3 = (31 & ((io >>> 10) | 0));
          var i2 = (31 & ((io >>> 5) | 0));
          var i1 = (31 & io);
          return ((i5 < $n(this.sci_Vector5__f_data5).u.length) ? $n($n($n($n($n(this.sci_Vector5__f_data5).get(i5)).get(i4)).get(i3)).get(i2)).get(i1) : ((i4 < $n(this.sci_Vector5__f_suffix4).u.length) ? $n($n($n($n(this.sci_Vector5__f_suffix4).get(i4)).get(i3)).get(i2)).get(i1) : ((i3 < $n(this.sci_Vector5__f_suffix3).u.length) ? $n($n($n(this.sci_Vector5__f_suffix3).get(i3)).get(i2)).get(i1) : ((i2 < $n(this.sci_Vector5__f_suffix2).u.length) ? $n($n(this.sci_Vector5__f_suffix2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get(i1)))));
        } else if ((index >= this.sci_Vector5__f_len123)) {
          var io$2 = ((index - this.sci_Vector5__f_len123) | 0);
          return $n($n($n($n(this.sci_Vector5__f_prefix4).get(((io$2 >>> 15) | 0))).get((31 & ((io$2 >>> 10) | 0)))).get((31 & ((io$2 >>> 5) | 0)))).get((31 & io$2));
        } else if ((index >= this.sci_Vector5__f_len12)) {
          var io$3 = ((index - this.sci_Vector5__f_len12) | 0);
          return $n($n($n(this.sci_Vector5__f_prefix3).get(((io$3 >>> 10) | 0))).get((31 & ((io$3 >>> 5) | 0)))).get((31 & io$3));
        } else if ((index >= this.sci_Vector5__f_len1)) {
          var io$4 = ((index - this.sci_Vector5__f_len1) | 0);
          return $n($n(this.sci_Vector5__f_prefix2).get(((io$4 >>> 5) | 0))).get((31 & io$4));
        } else {
          return $n(this.sci_Vector__f_prefix1).get(index);
        }
      } else {
        throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
      }
    });
    $c_sci_Vector5.prototype.updated__I__O__sci_Vector = (function(index, elem) {
      if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
        if ((index >= this.sci_Vector5__f_len1234)) {
          var io = ((index - this.sci_Vector5__f_len1234) | 0);
          var i5 = ((io >>> 20) | 0);
          var i4 = (31 & ((io >>> 15) | 0));
          var i3 = (31 & ((io >>> 10) | 0));
          var i2 = (31 & ((io >>> 5) | 0));
          var i1 = (31 & io);
          if ((i5 < $n(this.sci_Vector5__f_data5).u.length)) {
            var a5 = this.sci_Vector5__f_data5;
            var this$2 = $n(a5);
            var a5c = this$2.clone__O();
            var a4 = a5c.get(i5);
            var this$3 = $n(a4);
            var a4c = this$3.clone__O();
            var a3 = a4c.get(i4);
            var this$4 = $n(a3);
            var a3c = this$4.clone__O();
            var a2 = a3c.get(i3);
            var this$5 = $n(a2);
            var a2c = this$5.clone__O();
            var a1 = a2c.get(i2);
            var this$6 = $n(a1);
            var a1c = this$6.clone__O();
            a1c.set(i1, elem);
            a2c.set(i2, a1c);
            a3c.set(i3, a2c);
            a4c.set(i4, a3c);
            a5c.set(i5, a4c);
            var x$2 = this.sci_Vector__f_prefix1;
            var x$3 = this.sci_Vector5__f_len1;
            var x$4 = this.sci_Vector5__f_prefix2;
            var x$5 = this.sci_Vector5__f_len12;
            var x$6 = this.sci_Vector5__f_prefix3;
            var x$7 = this.sci_Vector5__f_len123;
            var x$8 = this.sci_Vector5__f_prefix4;
            var x$9 = this.sci_Vector5__f_len1234;
            var x$10 = this.sci_Vector5__f_suffix4;
            var x$11 = this.sci_Vector5__f_suffix3;
            var x$12 = this.sci_Vector5__f_suffix2;
            var x$13 = this.sci_BigVector__f_suffix1;
            var x$14 = this.sci_BigVector__f_length0;
            return new $c_sci_Vector5(x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9, a5c, x$10, x$11, x$12, x$13, x$14);
          } else if ((i4 < $n(this.sci_Vector5__f_suffix4).u.length)) {
            var a4$1 = this.sci_Vector5__f_suffix4;
            var this$8 = $n(a4$1);
            var a4c$1 = this$8.clone__O();
            var a3$1 = a4c$1.get(i4);
            var this$9 = $n(a3$1);
            var a3c$1 = this$9.clone__O();
            var a2$1 = a3c$1.get(i3);
            var this$10 = $n(a2$1);
            var a2c$1 = this$10.clone__O();
            var a1$1 = a2c$1.get(i2);
            var this$11 = $n(a1$1);
            var a1c$1 = this$11.clone__O();
            a1c$1.set(i1, elem);
            a2c$1.set(i2, a1c$1);
            a3c$1.set(i3, a2c$1);
            a4c$1.set(i4, a3c$1);
            var x$16 = this.sci_Vector__f_prefix1;
            var x$17 = this.sci_Vector5__f_len1;
            var x$18 = this.sci_Vector5__f_prefix2;
            var x$19 = this.sci_Vector5__f_len12;
            var x$20 = this.sci_Vector5__f_prefix3;
            var x$21 = this.sci_Vector5__f_len123;
            var x$22 = this.sci_Vector5__f_prefix4;
            var x$23 = this.sci_Vector5__f_len1234;
            var x$24 = this.sci_Vector5__f_data5;
            var x$25 = this.sci_Vector5__f_suffix3;
            var x$26 = this.sci_Vector5__f_suffix2;
            var x$27 = this.sci_BigVector__f_suffix1;
            var x$28 = this.sci_BigVector__f_length0;
            return new $c_sci_Vector5(x$16, x$17, x$18, x$19, x$20, x$21, x$22, x$23, x$24, a4c$1, x$25, x$26, x$27, x$28);
          } else if ((i3 < $n(this.sci_Vector5__f_suffix3).u.length)) {
            var a3$2 = this.sci_Vector5__f_suffix3;
            var this$13 = $n(a3$2);
            var a3c$2 = this$13.clone__O();
            var a2$2 = a3c$2.get(i3);
            var this$14 = $n(a2$2);
            var a2c$2 = this$14.clone__O();
            var a1$2 = a2c$2.get(i2);
            var this$15 = $n(a1$2);
            var a1c$2 = this$15.clone__O();
            a1c$2.set(i1, elem);
            a2c$2.set(i2, a1c$2);
            a3c$2.set(i3, a2c$2);
            var x$30 = this.sci_Vector__f_prefix1;
            var x$31 = this.sci_Vector5__f_len1;
            var x$32 = this.sci_Vector5__f_prefix2;
            var x$33 = this.sci_Vector5__f_len12;
            var x$34 = this.sci_Vector5__f_prefix3;
            var x$35 = this.sci_Vector5__f_len123;
            var x$36 = this.sci_Vector5__f_prefix4;
            var x$37 = this.sci_Vector5__f_len1234;
            var x$38 = this.sci_Vector5__f_data5;
            var x$39 = this.sci_Vector5__f_suffix4;
            var x$40 = this.sci_Vector5__f_suffix2;
            var x$41 = this.sci_BigVector__f_suffix1;
            var x$42 = this.sci_BigVector__f_length0;
            return new $c_sci_Vector5(x$30, x$31, x$32, x$33, x$34, x$35, x$36, x$37, x$38, x$39, a3c$2, x$40, x$41, x$42);
          } else if ((i2 < $n(this.sci_Vector5__f_suffix2).u.length)) {
            var a2$3 = this.sci_Vector5__f_suffix2;
            var this$17 = $n(a2$3);
            var a2c$3 = this$17.clone__O();
            var a1$3 = a2c$3.get(i2);
            var this$18 = $n(a1$3);
            var a1c$3 = this$18.clone__O();
            a1c$3.set(i1, elem);
            a2c$3.set(i2, a1c$3);
            var x$44 = this.sci_Vector__f_prefix1;
            var x$45 = this.sci_Vector5__f_len1;
            var x$46 = this.sci_Vector5__f_prefix2;
            var x$47 = this.sci_Vector5__f_len12;
            var x$48 = this.sci_Vector5__f_prefix3;
            var x$49 = this.sci_Vector5__f_len123;
            var x$50 = this.sci_Vector5__f_prefix4;
            var x$51 = this.sci_Vector5__f_len1234;
            var x$52 = this.sci_Vector5__f_data5;
            var x$53 = this.sci_Vector5__f_suffix4;
            var x$54 = this.sci_Vector5__f_suffix3;
            var x$55 = this.sci_BigVector__f_suffix1;
            var x$56 = this.sci_BigVector__f_length0;
            return new $c_sci_Vector5(x$44, x$45, x$46, x$47, x$48, x$49, x$50, x$51, x$52, x$53, x$54, a2c$3, x$55, x$56);
          } else {
            var a1$4 = this.sci_BigVector__f_suffix1;
            var this$20 = $n(a1$4);
            var a1c$4 = this$20.clone__O();
            a1c$4.set(i1, elem);
            var x$58 = this.sci_Vector__f_prefix1;
            var x$59 = this.sci_Vector5__f_len1;
            var x$60 = this.sci_Vector5__f_prefix2;
            var x$61 = this.sci_Vector5__f_len12;
            var x$62 = this.sci_Vector5__f_prefix3;
            var x$63 = this.sci_Vector5__f_len123;
            var x$64 = this.sci_Vector5__f_prefix4;
            var x$65 = this.sci_Vector5__f_len1234;
            var x$66 = this.sci_Vector5__f_data5;
            var x$67 = this.sci_Vector5__f_suffix4;
            var x$68 = this.sci_Vector5__f_suffix3;
            var x$69 = this.sci_Vector5__f_suffix2;
            var x$70 = this.sci_BigVector__f_length0;
            return new $c_sci_Vector5(x$58, x$59, x$60, x$61, x$62, x$63, x$64, x$65, x$66, x$67, x$68, x$69, a1c$4, x$70);
          }
        } else if ((index >= this.sci_Vector5__f_len123)) {
          var io$2 = ((index - this.sci_Vector5__f_len123) | 0);
          var a4$2 = this.sci_Vector5__f_prefix4;
          var idx4 = ((io$2 >>> 15) | 0);
          var idx3 = (31 & ((io$2 >>> 10) | 0));
          var idx2 = (31 & ((io$2 >>> 5) | 0));
          var idx1 = (31 & io$2);
          var this$22 = $n(a4$2);
          var a4c$2 = this$22.clone__O();
          var a3$3 = a4c$2.get(idx4);
          var this$23 = $n(a3$3);
          var a3c$3 = this$23.clone__O();
          var a2$4 = a3c$3.get(idx3);
          var this$24 = $n(a2$4);
          var a2c$4 = this$24.clone__O();
          var a1$5 = a2c$4.get(idx2);
          var this$25 = $n(a1$5);
          var a1c$5 = this$25.clone__O();
          a1c$5.set(idx1, elem);
          a2c$4.set(idx2, a1c$5);
          a3c$3.set(idx3, a2c$4);
          a4c$2.set(idx4, a3c$3);
          var x$72 = this.sci_Vector__f_prefix1;
          var x$73 = this.sci_Vector5__f_len1;
          var x$74 = this.sci_Vector5__f_prefix2;
          var x$75 = this.sci_Vector5__f_len12;
          var x$76 = this.sci_Vector5__f_prefix3;
          var x$77 = this.sci_Vector5__f_len123;
          var x$78 = this.sci_Vector5__f_len1234;
          var x$79 = this.sci_Vector5__f_data5;
          var x$80 = this.sci_Vector5__f_suffix4;
          var x$81 = this.sci_Vector5__f_suffix3;
          var x$82 = this.sci_Vector5__f_suffix2;
          var x$83 = this.sci_BigVector__f_suffix1;
          var x$84 = this.sci_BigVector__f_length0;
          return new $c_sci_Vector5(x$72, x$73, x$74, x$75, x$76, x$77, a4c$2, x$78, x$79, x$80, x$81, x$82, x$83, x$84);
        } else if ((index >= this.sci_Vector5__f_len12)) {
          var io$3 = ((index - this.sci_Vector5__f_len12) | 0);
          var a3$4 = this.sci_Vector5__f_prefix3;
          var idx3$1 = ((io$3 >>> 10) | 0);
          var idx2$1 = (31 & ((io$3 >>> 5) | 0));
          var idx1$1 = (31 & io$3);
          var this$27 = $n(a3$4);
          var a3c$4 = this$27.clone__O();
          var a2$5 = a3c$4.get(idx3$1);
          var this$28 = $n(a2$5);
          var a2c$5 = this$28.clone__O();
          var a1$6 = a2c$5.get(idx2$1);
          var this$29 = $n(a1$6);
          var a1c$6 = this$29.clone__O();
          a1c$6.set(idx1$1, elem);
          a2c$5.set(idx2$1, a1c$6);
          a3c$4.set(idx3$1, a2c$5);
          var x$86 = this.sci_Vector__f_prefix1;
          var x$87 = this.sci_Vector5__f_len1;
          var x$88 = this.sci_Vector5__f_prefix2;
          var x$89 = this.sci_Vector5__f_len12;
          var x$90 = this.sci_Vector5__f_len123;
          var x$91 = this.sci_Vector5__f_prefix4;
          var x$92 = this.sci_Vector5__f_len1234;
          var x$93 = this.sci_Vector5__f_data5;
          var x$94 = this.sci_Vector5__f_suffix4;
          var x$95 = this.sci_Vector5__f_suffix3;
          var x$96 = this.sci_Vector5__f_suffix2;
          var x$97 = this.sci_BigVector__f_suffix1;
          var x$98 = this.sci_BigVector__f_length0;
          return new $c_sci_Vector5(x$86, x$87, x$88, x$89, a3c$4, x$90, x$91, x$92, x$93, x$94, x$95, x$96, x$97, x$98);
        } else if ((index >= this.sci_Vector5__f_len1)) {
          var io$4 = ((index - this.sci_Vector5__f_len1) | 0);
          var a2$6 = this.sci_Vector5__f_prefix2;
          var idx2$2 = ((io$4 >>> 5) | 0);
          var idx1$2 = (31 & io$4);
          var this$31 = $n(a2$6);
          var a2c$6 = this$31.clone__O();
          var a1$7 = a2c$6.get(idx2$2);
          var this$32 = $n(a1$7);
          var a1c$7 = this$32.clone__O();
          a1c$7.set(idx1$2, elem);
          a2c$6.set(idx2$2, a1c$7);
          var x$100 = this.sci_Vector__f_prefix1;
          var x$101 = this.sci_Vector5__f_len1;
          var x$102 = this.sci_Vector5__f_len12;
          var x$103 = this.sci_Vector5__f_prefix3;
          var x$104 = this.sci_Vector5__f_len123;
          var x$105 = this.sci_Vector5__f_prefix4;
          var x$106 = this.sci_Vector5__f_len1234;
          var x$107 = this.sci_Vector5__f_data5;
          var x$108 = this.sci_Vector5__f_suffix4;
          var x$109 = this.sci_Vector5__f_suffix3;
          var x$110 = this.sci_Vector5__f_suffix2;
          var x$111 = this.sci_BigVector__f_suffix1;
          var x$112 = this.sci_BigVector__f_length0;
          return new $c_sci_Vector5(x$100, x$101, a2c$6, x$102, x$103, x$104, x$105, x$106, x$107, x$108, x$109, x$110, x$111, x$112);
        } else {
          var a1$8 = this.sci_Vector__f_prefix1;
          var this$34 = $n(a1$8);
          var a1c$8 = this$34.clone__O();
          a1c$8.set(index, elem);
          var len1 = this.sci_Vector5__f_len1;
          var prefix2 = this.sci_Vector5__f_prefix2;
          var len12 = this.sci_Vector5__f_len12;
          var prefix3 = this.sci_Vector5__f_prefix3;
          var len123 = this.sci_Vector5__f_len123;
          var prefix4 = this.sci_Vector5__f_prefix4;
          var len1234 = this.sci_Vector5__f_len1234;
          var data5 = this.sci_Vector5__f_data5;
          var suffix4 = this.sci_Vector5__f_suffix4;
          var suffix3 = this.sci_Vector5__f_suffix3;
          var suffix2 = this.sci_Vector5__f_suffix2;
          var suffix1 = this.sci_BigVector__f_suffix1;
          var length0 = this.sci_BigVector__f_length0;
          return new $c_sci_Vector5(a1c$8, len1, prefix2, len12, prefix3, len123, prefix4, len1234, data5, suffix4, suffix3, suffix2, suffix1, length0);
        }
      } else {
        throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
      }
    });
    $c_sci_Vector5.prototype.appended__O__sci_Vector = (function(elem) {
      if (($n(this.sci_BigVector__f_suffix1).u.length < 32)) {
        var x$1 = $m_sci_VectorStatics$().copyAppend1__AO__O__AO(this.sci_BigVector__f_suffix1, elem);
        var x$2 = ((1 + this.sci_BigVector__f_length0) | 0);
        var x$3 = this.sci_Vector__f_prefix1;
        var x$4 = this.sci_Vector5__f_len1;
        var x$5 = this.sci_Vector5__f_prefix2;
        var x$6 = this.sci_Vector5__f_len12;
        var x$7 = this.sci_Vector5__f_prefix3;
        var x$8 = this.sci_Vector5__f_len123;
        var x$9 = this.sci_Vector5__f_prefix4;
        var x$10 = this.sci_Vector5__f_len1234;
        var x$11 = this.sci_Vector5__f_data5;
        var x$12 = this.sci_Vector5__f_suffix4;
        var x$13 = this.sci_Vector5__f_suffix3;
        var x$14 = this.sci_Vector5__f_suffix2;
        return new $c_sci_Vector5(x$3, x$4, x$5, x$6, x$7, x$8, x$9, x$10, x$11, x$12, x$13, x$14, x$1, x$2);
      } else if (($n(this.sci_Vector5__f_suffix2).u.length < 31)) {
        var x$15 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix2, this.sci_BigVector__f_suffix1), 2);
        var a = new $ac_O(1);
        a.set(0, elem);
        var x$17 = ((1 + this.sci_BigVector__f_length0) | 0);
        var x$18 = this.sci_Vector__f_prefix1;
        var x$19 = this.sci_Vector5__f_len1;
        var x$20 = this.sci_Vector5__f_prefix2;
        var x$21 = this.sci_Vector5__f_len12;
        var x$22 = this.sci_Vector5__f_prefix3;
        var x$23 = this.sci_Vector5__f_len123;
        var x$24 = this.sci_Vector5__f_prefix4;
        var x$25 = this.sci_Vector5__f_len1234;
        var x$26 = this.sci_Vector5__f_data5;
        var x$27 = this.sci_Vector5__f_suffix4;
        var x$28 = this.sci_Vector5__f_suffix3;
        return new $c_sci_Vector5(x$18, x$19, x$20, x$21, x$22, x$23, x$24, x$25, x$26, x$27, x$28, x$15, a, x$17);
      } else if (($n(this.sci_Vector5__f_suffix3).u.length < 31)) {
        var x$29 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix2, this.sci_BigVector__f_suffix1)), 3);
        var x$30 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
        var a$1 = new $ac_O(1);
        a$1.set(0, elem);
        var x$32 = ((1 + this.sci_BigVector__f_length0) | 0);
        var x$33 = this.sci_Vector__f_prefix1;
        var x$34 = this.sci_Vector5__f_len1;
        var x$35 = this.sci_Vector5__f_prefix2;
        var x$36 = this.sci_Vector5__f_len12;
        var x$37 = this.sci_Vector5__f_prefix3;
        var x$38 = this.sci_Vector5__f_len123;
        var x$39 = this.sci_Vector5__f_prefix4;
        var x$40 = this.sci_Vector5__f_len1234;
        var x$41 = this.sci_Vector5__f_data5;
        var x$42 = this.sci_Vector5__f_suffix4;
        return new $c_sci_Vector5(x$33, x$34, x$35, x$36, x$37, x$38, x$39, x$40, x$41, x$42, x$29, x$30, a$1, x$32);
      } else if (($n(this.sci_Vector5__f_suffix4).u.length < 31)) {
        var x$43 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix4, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix2, this.sci_BigVector__f_suffix1))), 4);
        var x$44 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
        var x$45 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
        var a$2 = new $ac_O(1);
        a$2.set(0, elem);
        var x$47 = ((1 + this.sci_BigVector__f_length0) | 0);
        var x$48 = this.sci_Vector__f_prefix1;
        var x$49 = this.sci_Vector5__f_len1;
        var x$50 = this.sci_Vector5__f_prefix2;
        var x$51 = this.sci_Vector5__f_len12;
        var x$52 = this.sci_Vector5__f_prefix3;
        var x$53 = this.sci_Vector5__f_len123;
        var x$54 = this.sci_Vector5__f_prefix4;
        var x$55 = this.sci_Vector5__f_len1234;
        var x$56 = this.sci_Vector5__f_data5;
        return new $c_sci_Vector5(x$48, x$49, x$50, x$51, x$52, x$53, x$54, x$55, x$56, x$43, x$44, x$45, a$2, x$47);
      } else if (($n(this.sci_Vector5__f_data5).u.length < 30)) {
        var x$57 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_data5, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix4, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix2, this.sci_BigVector__f_suffix1)))), 5);
        var x$58 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty4;
        var x$59 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
        var x$60 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
        var a$3 = new $ac_O(1);
        a$3.set(0, elem);
        var x$62 = ((1 + this.sci_BigVector__f_length0) | 0);
        var x$63 = this.sci_Vector__f_prefix1;
        var x$64 = this.sci_Vector5__f_len1;
        var x$65 = this.sci_Vector5__f_prefix2;
        var x$66 = this.sci_Vector5__f_len12;
        var x$67 = this.sci_Vector5__f_prefix3;
        var x$68 = this.sci_Vector5__f_len123;
        var x$69 = this.sci_Vector5__f_prefix4;
        var x$70 = this.sci_Vector5__f_len1234;
        return new $c_sci_Vector5(x$63, x$64, x$65, x$66, x$67, x$68, x$69, x$70, x$57, x$58, x$59, x$60, a$3, x$62);
      } else {
        var $x_14 = this.sci_Vector__f_prefix1;
        var $x_13 = this.sci_Vector5__f_len1;
        var $x_12 = this.sci_Vector5__f_prefix2;
        var $x_11 = this.sci_Vector5__f_len12;
        var $x_10 = this.sci_Vector5__f_prefix3;
        var $x_9 = this.sci_Vector5__f_len123;
        var $x_8 = this.sci_Vector5__f_prefix4;
        var $x_7 = this.sci_Vector5__f_len1234;
        var $x_6 = this.sci_Vector5__f_data5;
        var $x_5 = this.sci_Vector5__f_len1234;
        var $x_4 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty6;
        var x = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix4, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector5__f_suffix2, this.sci_BigVector__f_suffix1))), 4);
        var a$4 = new ($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().constr)(1);
        a$4.set(0, x);
        var $x_3 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty4;
        var $x_2 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
        var $x_1 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
        var a$5 = new $ac_O(1);
        a$5.set(0, elem);
        return new $c_sci_Vector6($x_14, $x_13, $x_12, $x_11, $x_10, $x_9, $x_8, $x_7, $x_6, ((31457280 + $x_5) | 0), $x_4, a$4, $x_3, $x_2, $x_1, a$5, ((1 + this.sci_BigVector__f_length0) | 0));
      }
    });
    $c_sci_Vector5.prototype.vectorSliceCount__I = (function() {
      return 9;
    });
    $c_sci_Vector5.prototype.vectorSlice__I__AO = (function(idx) {
      switch (idx) {
        case 0: {
          return this.sci_Vector__f_prefix1;
        }
        case 1: {
          return this.sci_Vector5__f_prefix2;
        }
        case 2: {
          return this.sci_Vector5__f_prefix3;
        }
        case 3: {
          return this.sci_Vector5__f_prefix4;
        }
        case 4: {
          return this.sci_Vector5__f_data5;
        }
        case 5: {
          return this.sci_Vector5__f_suffix4;
        }
        case 6: {
          return this.sci_Vector5__f_suffix3;
        }
        case 7: {
          return this.sci_Vector5__f_suffix2;
        }
        case 8: {
          return this.sci_BigVector__f_suffix1;
        }
        default: {
          throw new $c_s_MatchError(idx);
        }
      }
    });
    $c_sci_Vector5.prototype.apply__O__O = (function(v1) {
      var index = $uI(v1);
      if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
        var io = ((index - this.sci_Vector5__f_len1234) | 0);
        if ((io >= 0)) {
          var i5 = ((io >>> 20) | 0);
          var i4 = (31 & ((io >>> 15) | 0));
          var i3 = (31 & ((io >>> 10) | 0));
          var i2 = (31 & ((io >>> 5) | 0));
          var i1 = (31 & io);
          return ((i5 < $n(this.sci_Vector5__f_data5).u.length) ? $n($n($n($n($n(this.sci_Vector5__f_data5).get(i5)).get(i4)).get(i3)).get(i2)).get(i1) : ((i4 < $n(this.sci_Vector5__f_suffix4).u.length) ? $n($n($n($n(this.sci_Vector5__f_suffix4).get(i4)).get(i3)).get(i2)).get(i1) : ((i3 < $n(this.sci_Vector5__f_suffix3).u.length) ? $n($n($n(this.sci_Vector5__f_suffix3).get(i3)).get(i2)).get(i1) : ((i2 < $n(this.sci_Vector5__f_suffix2).u.length) ? $n($n(this.sci_Vector5__f_suffix2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get(i1)))));
        } else if ((index >= this.sci_Vector5__f_len123)) {
          var io$2 = ((index - this.sci_Vector5__f_len123) | 0);
          return $n($n($n($n(this.sci_Vector5__f_prefix4).get(((io$2 >>> 15) | 0))).get((31 & ((io$2 >>> 10) | 0)))).get((31 & ((io$2 >>> 5) | 0)))).get((31 & io$2));
        } else if ((index >= this.sci_Vector5__f_len12)) {
          var io$3 = ((index - this.sci_Vector5__f_len12) | 0);
          return $n($n($n(this.sci_Vector5__f_prefix3).get(((io$3 >>> 10) | 0))).get((31 & ((io$3 >>> 5) | 0)))).get((31 & io$3));
        } else if ((index >= this.sci_Vector5__f_len1)) {
          var io$4 = ((index - this.sci_Vector5__f_len1) | 0);
          return $n($n(this.sci_Vector5__f_prefix2).get(((io$4 >>> 5) | 0))).get((31 & io$4));
        } else {
          return $n(this.sci_Vector__f_prefix1).get(index);
        }
      } else {
        throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
      }
    });
    function $as_sci_Vector5(obj) {
      return (((obj instanceof $c_sci_Vector5) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector5"));
    }
    new $TypeData().initClass($c_sci_Vector5, "scala.collection.immutable.Vector5", ({
      sci_Vector5: 1,
      sci_BigVector: 1,
      sci_VectorImpl: 1,
      sci_Vector: 1,
      sci_AbstractSeq: 1,
      sc_AbstractSeq: 1,
      sc_AbstractIterable: 1,
      sc_Iterable: 1,
      sc_IterableOnce: 1,
      sc_IterableOps: 1,
      sc_IterableOnceOps: 1,
      sc_IterableFactoryDefaults: 1,
      sc_Seq: 1,
      s_PartialFunction: 1,
      F1: 1,
      sc_SeqOps: 1,
      s_Equals: 1,
      sci_Seq: 1,
      sci_Iterable: 1,
      sci_SeqOps: 1,
      sci_IndexedSeq: 1,
      sc_IndexedSeq: 1,
      sc_IndexedSeqOps: 1,
      sci_IndexedSeqOps: 1,
      sci_StrictOptimizedSeqOps: 1,
      sc_StrictOptimizedSeqOps: 1,
      sc_StrictOptimizedIterableOps: 1,
      scg_DefaultSerializable: 1,
      Ljava_io_Serializable: 1
    }));
    /** @constructor */
    function $c_sci_Vector6(_prefix1, len1, prefix2, len12, prefix3, len123, prefix4, len1234, prefix5, len12345, data6, suffix5, suffix4, suffix3, suffix2, _suffix1, _length0) {
      this.sci_Vector__f_prefix1 = null;
      this.sci_BigVector__f_suffix1 = null;
      this.sci_BigVector__f_length0 = 0;
      this.sci_Vector6__f_len1 = 0;
      this.sci_Vector6__f_prefix2 = null;
      this.sci_Vector6__f_len12 = 0;
      this.sci_Vector6__f_prefix3 = null;
      this.sci_Vector6__f_len123 = 0;
      this.sci_Vector6__f_prefix4 = null;
      this.sci_Vector6__f_len1234 = 0;
      this.sci_Vector6__f_prefix5 = null;
      this.sci_Vector6__f_len12345 = 0;
      this.sci_Vector6__f_data6 = null;
      this.sci_Vector6__f_suffix5 = null;
      this.sci_Vector6__f_suffix4 = null;
      this.sci_Vector6__f_suffix3 = null;
      this.sci_Vector6__f_suffix2 = null;
      this.sci_Vector6__f_len1 = len1;
      this.sci_Vector6__f_prefix2 = prefix2;
      this.sci_Vector6__f_len12 = len12;
      this.sci_Vector6__f_prefix3 = prefix3;
      this.sci_Vector6__f_len123 = len123;
      this.sci_Vector6__f_prefix4 = prefix4;
      this.sci_Vector6__f_len1234 = len1234;
      this.sci_Vector6__f_prefix5 = prefix5;
      this.sci_Vector6__f_len12345 = len12345;
      this.sci_Vector6__f_data6 = data6;
      this.sci_Vector6__f_suffix5 = suffix5;
      this.sci_Vector6__f_suffix4 = suffix4;
      this.sci_Vector6__f_suffix3 = suffix3;
      this.sci_Vector6__f_suffix2 = suffix2;
      $ct_sci_BigVector__AO__AO__I__(this, _prefix1, _suffix1, _length0);
    }
    $c_sci_Vector6.prototype = new $h_sci_BigVector();
    $c_sci_Vector6.prototype.constructor = $c_sci_Vector6;
    $c_sci_Vector6.prototype;
    $c_sci_Vector6.prototype.apply__I__O = (function(index) {
      if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
        var io = ((index - this.sci_Vector6__f_len12345) | 0);
        if ((io >= 0)) {
          var i6 = ((io >>> 25) | 0);
          var i5 = (31 & ((io >>> 20) | 0));
          var i4 = (31 & ((io >>> 15) | 0));
          var i3 = (31 & ((io >>> 10) | 0));
          var i2 = (31 & ((io >>> 5) | 0));
          var i1 = (31 & io);
          return ((i6 < $n(this.sci_Vector6__f_data6).u.length) ? $n($n($n($n($n($n(this.sci_Vector6__f_data6).get(i6)).get(i5)).get(i4)).get(i3)).get(i2)).get(i1) : ((i5 < $n(this.sci_Vector6__f_suffix5).u.length) ? $n($n($n($n($n(this.sci_Vector6__f_suffix5).get(i5)).get(i4)).get(i3)).get(i2)).get(i1) : ((i4 < $n(this.sci_Vector6__f_suffix4).u.length) ? $n($n($n($n(this.sci_Vector6__f_suffix4).get(i4)).get(i3)).get(i2)).get(i1) : ((i3 < $n(this.sci_Vector6__f_suffix3).u.length) ? $n($n($n(this.sci_Vector6__f_suffix3).get(i3)).get(i2)).get(i1) : ((i2 < $n(this.sci_Vector6__f_suffix2).u.length) ? $n($n(this.sci_Vector6__f_suffix2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get(i1))))));
        } else if ((index >= this.sci_Vector6__f_len1234)) {
          var io$2 = ((index - this.sci_Vector6__f_len1234) | 0);
          return $n($n($n($n($n(this.sci_Vector6__f_prefix5).get(((io$2 >>> 20) | 0))).get((31 & ((io$2 >>> 15) | 0)))).get((31 & ((io$2 >>> 10) | 0)))).get((31 & ((io$2 >>> 5) | 0)))).get((31 & io$2));
        } else if ((index >= this.sci_Vector6__f_len123)) {
          var io$3 = ((index - this.sci_Vector6__f_len123) | 0);
          return $n($n($n($n(this.sci_Vector6__f_prefix4).get(((io$3 >>> 15) | 0))).get((31 & ((io$3 >>> 10) | 0)))).get((31 & ((io$3 >>> 5) | 0)))).get((31 & io$3));
        } else if ((index >= this.sci_Vector6__f_len12)) {
          var io$4 = ((index - this.sci_Vector6__f_len12) | 0);
          return $n($n($n(this.sci_Vector6__f_prefix3).get(((io$4 >>> 10) | 0))).get((31 & ((io$4 >>> 5) | 0)))).get((31 & io$4));
        } else if ((index >= this.sci_Vector6__f_len1)) {
          var io$5 = ((index - this.sci_Vector6__f_len1) | 0);
          return $n($n(this.sci_Vector6__f_prefix2).get(((io$5 >>> 5) | 0))).get((31 & io$5));
        } else {
          return $n(this.sci_Vector__f_prefix1).get(index);
        }
      } else {
        throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
      }
    });
    $c_sci_Vector6.prototype.updated__I__O__sci_Vector = (function(index, elem) {
      if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
        if ((index >= this.sci_Vector6__f_len12345)) {
          var io = ((index - this.sci_Vector6__f_len12345) | 0);
          var i6 = ((io >>> 25) | 0);
          var i5 = (31 & ((io >>> 20) | 0));
          var i4 = (31 & ((io >>> 15) | 0));
          var i3 = (31 & ((io >>> 10) | 0));
          var i2 = (31 & ((io >>> 5) | 0));
          var i1 = (31 & io);
          if ((i6 < $n(this.sci_Vector6__f_data6).u.length)) {
            var a6 = this.sci_Vector6__f_data6;
            var this$2 = $n(a6);
            var a6c = this$2.clone__O();
            var a5 = a6c.get(i6);
            var this$3 = $n(a5);
            var a5c = this$3.clone__O();
            var a4 = a5c.get(i5);
            var this$4 = $n(a4);
            var a4c = this$4.clone__O();
            var a3 = a4c.get(i4);
            var this$5 = $n(a3);
            var a3c = this$5.clone__O();
            var a2 = a3c.get(i3);
            var this$6 = $n(a2);
            var a2c = this$6.clone__O();
            var a1 = a2c.get(i2);
            var this$7 = $n(a1);
            var a1c = this$7.clone__O();
            a1c.set(i1, elem);
            a2c.set(i2, a1c);
            a3c.set(i3, a2c);
            a4c.set(i4, a3c);
            a5c.set(i5, a4c);
            a6c.set(i6, a5c);
            var x$2 = this.sci_Vector__f_prefix1;
            var x$3 = this.sci_Vector6__f_len1;
            var x$4 = this.sci_Vector6__f_prefix2;
            var x$5 = this.sci_Vector6__f_len12;
            var x$6 = this.sci_Vector6__f_prefix3;
            var x$7 = this.sci_Vector6__f_len123;
            var x$8 = this.sci_Vector6__f_prefix4;
            var x$9 = this.sci_Vector6__f_len1234;
            var x$10 = this.sci_Vector6__f_prefix5;
            var x$11 = this.sci_Vector6__f_len12345;
            var x$12 = this.sci_Vector6__f_suffix5;
            var x$13 = this.sci_Vector6__f_suffix4;
            var x$14 = this.sci_Vector6__f_suffix3;
            var x$15 = this.sci_Vector6__f_suffix2;
            var x$16 = this.sci_BigVector__f_suffix1;
            var x$17 = this.sci_BigVector__f_length0;
            return new $c_sci_Vector6(x$2, x$3, x$4, x$5, x$6, x$7, x$8, x$9, x$10, x$11, a6c, x$12, x$13, x$14, x$15, x$16, x$17);
          } else if ((i5 < $n(this.sci_Vector6__f_suffix5).u.length)) {
            var a5$1 = this.sci_Vector6__f_suffix5;
            var this$9 = $n(a5$1);
            var a5c$1 = this$9.clone__O();
            var a4$1 = a5c$1.get(i5);
            var this$10 = $n(a4$1);
            var a4c$1 = this$10.clone__O();
            var a3$1 = a4c$1.get(i4);
            var this$11 = $n(a3$1);
            var a3c$1 = this$11.clone__O();
            var a2$1 = a3c$1.get(i3);
            var this$12 = $n(a2$1);
            var a2c$1 = this$12.clone__O();
            var a1$1 = a2c$1.get(i2);
            var this$13 = $n(a1$1);
            var a1c$1 = this$13.clone__O();
            a1c$1.set(i1, elem);
            a2c$1.set(i2, a1c$1);
            a3c$1.set(i3, a2c$1);
            a4c$1.set(i4, a3c$1);
            a5c$1.set(i5, a4c$1);
            var x$19 = this.sci_Vector__f_prefix1;
            var x$20 = this.sci_Vector6__f_len1;
            var x$21 = this.sci_Vector6__f_prefix2;
            var x$22 = this.sci_Vector6__f_len12;
            var x$23 = this.sci_Vector6__f_prefix3;
            var x$24 = this.sci_Vector6__f_len123;
            var x$25 = this.sci_Vector6__f_prefix4;
            var x$26 = this.sci_Vector6__f_len1234;
            var x$27 = this.sci_Vector6__f_prefix5;
            var x$28 = this.sci_Vector6__f_len12345;
            var x$29 = this.sci_Vector6__f_data6;
            var x$30 = this.sci_Vector6__f_suffix4;
            var x$31 = this.sci_Vector6__f_suffix3;
            var x$32 = this.sci_Vector6__f_suffix2;
            var x$33 = this.sci_BigVector__f_suffix1;
            var x$34 = this.sci_BigVector__f_length0;
            return new $c_sci_Vector6(x$19, x$20, x$21, x$22, x$23, x$24, x$25, x$26, x$27, x$28, x$29, a5c$1, x$30, x$31, x$32, x$33, x$34);
          } else if ((i4 < $n(this.sci_Vector6__f_suffix4).u.length)) {
            var a4$2 = this.sci_Vector6__f_suffix4;
            var this$15 = $n(a4$2);
            var a4c$2 = this$15.clone__O();
            var a3$2 = a4c$2.get(i4);
            var this$16 = $n(a3$2);
            var a3c$2 = this$16.clone__O();
            var a2$2 = a3c$2.get(i3);
            var this$17 = $n(a2$2);
            var a2c$2 = this$17.clone__O();
            var a1$2 = a2c$2.get(i2);
            var this$18 = $n(a1$2);
            var a1c$2 = this$18.clone__O();
            a1c$2.set(i1, elem);
            a2c$2.set(i2, a1c$2);
            a3c$2.set(i3, a2c$2);
            a4c$2.set(i4, a3c$2);
            var x$36 = this.sci_Vector__f_prefix1;
            var x$37 = this.sci_Vector6__f_len1;
            var x$38 = this.sci_Vector6__f_prefix2;
            var x$39 = this.sci_Vector6__f_len12;
            var x$40 = this.sci_Vector6__f_prefix3;
            var x$41 = this.sci_Vector6__f_len123;
            var x$42 = this.sci_Vector6__f_prefix4;
            var x$43 = this.sci_Vector6__f_len1234;
            var x$44 = this.sci_Vector6__f_prefix5;
            var x$45 = this.sci_Vector6__f_len12345;
            var x$46 = this.sci_Vector6__f_data6;
            var x$47 = this.sci_Vector6__f_suffix5;
            var x$48 = this.sci_Vector6__f_suffix3;
            var x$49 = this.sci_Vector6__f_suffix2;
            var x$50 = this.sci_BigVector__f_suffix1;
            var x$51 = this.sci_BigVector__f_length0;
            return new $c_sci_Vector6(x$36, x$37, x$38, x$39, x$40, x$41, x$42, x$43, x$44, x$45, x$46, x$47, a4c$2, x$48, x$49, x$50, x$51);
          } else if ((i3 < $n(this.sci_Vector6__f_suffix3).u.length)) {
            var a3$3 = this.sci_Vector6__f_suffix3;
            var this$20 = $n(a3$3);
            var a3c$3 = this$20.clone__O();
            var a2$3 = a3c$3.get(i3);
            var this$21 = $n(a2$3);
            var a2c$3 = this$21.clone__O();
            var a1$3 = a2c$3.get(i2);
            var this$22 = $n(a1$3);
            var a1c$3 = this$22.clone__O();
            a1c$3.set(i1, elem);
            a2c$3.set(i2, a1c$3);
            a3c$3.set(i3, a2c$3);
            var x$53 = this.sci_Vector__f_prefix1;
            var x$54 = this.sci_Vector6__f_len1;
            var x$55 = this.sci_Vector6__f_prefix2;
            var x$56 = this.sci_Vector6__f_len12;
            var x$57 = this.sci_Vector6__f_prefix3;
            var x$58 = this.sci_Vector6__f_len123;
            var x$59 = this.sci_Vector6__f_prefix4;
            var x$60 = this.sci_Vector6__f_len1234;
            var x$61 = this.sci_Vector6__f_prefix5;
            var x$62 = this.sci_Vector6__f_len12345;
            var x$63 = this.sci_Vector6__f_data6;
            var x$64 = this.sci_Vector6__f_suffix5;
            var x$65 = this.sci_Vector6__f_suffix4;
            var x$66 = this.sci_Vector6__f_suffix2;
            var x$67 = this.sci_BigVector__f_suffix1;
            var x$68 = this.sci_BigVector__f_length0;
            return new $c_sci_Vector6(x$53, x$54, x$55, x$56, x$57, x$58, x$59, x$60, x$61, x$62, x$63, x$64, x$65, a3c$3, x$66, x$67, x$68);
          } else if ((i2 < $n(this.sci_Vector6__f_suffix2).u.length)) {
            var a2$4 = this.sci_Vector6__f_suffix2;
            var this$24 = $n(a2$4);
            var a2c$4 = this$24.clone__O();
            var a1$4 = a2c$4.get(i2);
            var this$25 = $n(a1$4);
            var a1c$4 = this$25.clone__O();
            a1c$4.set(i1, elem);
            a2c$4.set(i2, a1c$4);
            var x$70 = this.sci_Vector__f_prefix1;
            var x$71 = this.sci_Vector6__f_len1;
            var x$72 = this.sci_Vector6__f_prefix2;
            var x$73 = this.sci_Vector6__f_len12;
            var x$74 = this.sci_Vector6__f_prefix3;
            var x$75 = this.sci_Vector6__f_len123;
            var x$76 = this.sci_Vector6__f_prefix4;
            var x$77 = this.sci_Vector6__f_len1234;
            var x$78 = this.sci_Vector6__f_prefix5;
            var x$79 = this.sci_Vector6__f_len12345;
            var x$80 = this.sci_Vector6__f_data6;
            var x$81 = this.sci_Vector6__f_suffix5;
            var x$82 = this.sci_Vector6__f_suffix4;
            var x$83 = this.sci_Vector6__f_suffix3;
            var x$84 = this.sci_BigVector__f_suffix1;
            var x$85 = this.sci_BigVector__f_length0;
            return new $c_sci_Vector6(x$70, x$71, x$72, x$73, x$74, x$75, x$76, x$77, x$78, x$79, x$80, x$81, x$82, x$83, a2c$4, x$84, x$85);
          } else {
            var a1$5 = this.sci_BigVector__f_suffix1;
            var this$27 = $n(a1$5);
            var a1c$5 = this$27.clone__O();
            a1c$5.set(i1, elem);
            var x$87 = this.sci_Vector__f_prefix1;
            var x$88 = this.sci_Vector6__f_len1;
            var x$89 = this.sci_Vector6__f_prefix2;
            var x$90 = this.sci_Vector6__f_len12;
            var x$91 = this.sci_Vector6__f_prefix3;
            var x$92 = this.sci_Vector6__f_len123;
            var x$93 = this.sci_Vector6__f_prefix4;
            var x$94 = this.sci_Vector6__f_len1234;
            var x$95 = this.sci_Vector6__f_prefix5;
            var x$96 = this.sci_Vector6__f_len12345;
            var x$97 = this.sci_Vector6__f_data6;
            var x$98 = this.sci_Vector6__f_suffix5;
            var x$99 = this.sci_Vector6__f_suffix4;
            var x$100 = this.sci_Vector6__f_suffix3;
            var x$101 = this.sci_Vector6__f_suffix2;
            var x$102 = this.sci_BigVector__f_length0;
            return new $c_sci_Vector6(x$87, x$88, x$89, x$90, x$91, x$92, x$93, x$94, x$95, x$96, x$97, x$98, x$99, x$100, x$101, a1c$5, x$102);
          }
        } else if ((index >= this.sci_Vector6__f_len1234)) {
          var io$2 = ((index - this.sci_Vector6__f_len1234) | 0);
          var a5$2 = this.sci_Vector6__f_prefix5;
          var idx5 = ((io$2 >>> 20) | 0);
          var idx4 = (31 & ((io$2 >>> 15) | 0));
          var idx3 = (31 & ((io$2 >>> 10) | 0));
          var idx2 = (31 & ((io$2 >>> 5) | 0));
          var idx1 = (31 & io$2);
          var this$29 = $n(a5$2);
          var a5c$2 = this$29.clone__O();
          var a4$3 = a5c$2.get(idx5);
          var this$30 = $n(a4$3);
          var a4c$3 = this$30.clone__O();
          var a3$4 = a4c$3.get(idx4);
          var this$31 = $n(a3$4);
          var a3c$4 = this$31.clone__O();
          var a2$5 = a3c$4.get(idx3);
          var this$32 = $n(a2$5);
          var a2c$5 = this$32.clone__O();
          var a1$6 = a2c$5.get(idx2);
          var this$33 = $n(a1$6);
          var a1c$6 = this$33.clone__O();
          a1c$6.set(idx1, elem);
          a2c$5.set(idx2, a1c$6);
          a3c$4.set(idx3, a2c$5);
          a4c$3.set(idx4, a3c$4);
          a5c$2.set(idx5, a4c$3);
          var x$104 = this.sci_Vector__f_prefix1;
          var x$105 = this.sci_Vector6__f_len1;
          var x$106 = this.sci_Vector6__f_prefix2;
          var x$107 = this.sci_Vector6__f_len12;
          var x$108 = this.sci_Vector6__f_prefix3;
          var x$109 = this.sci_Vector6__f_len123;
          var x$110 = this.sci_Vector6__f_prefix4;
          var x$111 = this.sci_Vector6__f_len1234;
          var x$112 = this.sci_Vector6__f_len12345;
          var x$113 = this.sci_Vector6__f_data6;
          var x$114 = this.sci_Vector6__f_suffix5;
          var x$115 = this.sci_Vector6__f_suffix4;
          var x$116 = this.sci_Vector6__f_suffix3;
          var x$117 = this.sci_Vector6__f_suffix2;
          var x$118 = this.sci_BigVector__f_suffix1;
          var x$119 = this.sci_BigVector__f_length0;
          return new $c_sci_Vector6(x$104, x$105, x$106, x$107, x$108, x$109, x$110, x$111, a5c$2, x$112, x$113, x$114, x$115, x$116, x$117, x$118, x$119);
        } else if ((index >= this.sci_Vector6__f_len123)) {
          var io$3 = ((index - this.sci_Vector6__f_len123) | 0);
          var a4$4 = this.sci_Vector6__f_prefix4;
          var idx4$1 = ((io$3 >>> 15) | 0);
          var idx3$1 = (31 & ((io$3 >>> 10) | 0));
          var idx2$1 = (31 & ((io$3 >>> 5) | 0));
          var idx1$1 = (31 & io$3);
          var this$35 = $n(a4$4);
          var a4c$4 = this$35.clone__O();
          var a3$5 = a4c$4.get(idx4$1);
          var this$36 = $n(a3$5);
          var a3c$5 = this$36.clone__O();
          var a2$6 = a3c$5.get(idx3$1);
          var this$37 = $n(a2$6);
          var a2c$6 = this$37.clone__O();
          var a1$7 = a2c$6.get(idx2$1);
          var this$38 = $n(a1$7);
          var a1c$7 = this$38.clone__O();
          a1c$7.set(idx1$1, elem);
          a2c$6.set(idx2$1, a1c$7);
          a3c$5.set(idx3$1, a2c$6);
          a4c$4.set(idx4$1, a3c$5);
          var x$121 = this.sci_Vector__f_prefix1;
          var x$122 = this.sci_Vector6__f_len1;
          var x$123 = this.sci_Vector6__f_prefix2;
          var x$124 = this.sci_Vector6__f_len12;
          var x$125 = this.sci_Vector6__f_prefix3;
          var x$126 = this.sci_Vector6__f_len123;
          var x$127 = this.sci_Vector6__f_len1234;
          var x$128 = this.sci_Vector6__f_prefix5;
          var x$129 = this.sci_Vector6__f_len12345;
          var x$130 = this.sci_Vector6__f_data6;
          var x$131 = this.sci_Vector6__f_suffix5;
          var x$132 = this.sci_Vector6__f_suffix4;
          var x$133 = this.sci_Vector6__f_suffix3;
          var x$134 = this.sci_Vector6__f_suffix2;
          var x$135 = this.sci_BigVector__f_suffix1;
          var x$136 = this.sci_BigVector__f_length0;
          return new $c_sci_Vector6(x$121, x$122, x$123, x$124, x$125, x$126, a4c$4, x$127, x$128, x$129, x$130, x$131, x$132, x$133, x$134, x$135, x$136);
        } else if ((index >= this.sci_Vector6__f_len12)) {
          var io$4 = ((index - this.sci_Vector6__f_len12) | 0);
          var a3$6 = this.sci_Vector6__f_prefix3;
          var idx3$2 = ((io$4 >>> 10) | 0);
          var idx2$2 = (31 & ((io$4 >>> 5) | 0));
          var idx1$2 = (31 & io$4);
          var this$40 = $n(a3$6);
          var a3c$6 = this$40.clone__O();
          var a2$7 = a3c$6.get(idx3$2);
          var this$41 = $n(a2$7);
          var a2c$7 = this$41.clone__O();
          var a1$8 = a2c$7.get(idx2$2);
          var this$42 = $n(a1$8);
          var a1c$8 = this$42.clone__O();
          a1c$8.set(idx1$2, elem);
          a2c$7.set(idx2$2, a1c$8);
          a3c$6.set(idx3$2, a2c$7);
          var x$138 = this.sci_Vector__f_prefix1;
          var x$139 = this.sci_Vector6__f_len1;
          var x$140 = this.sci_Vector6__f_prefix2;
          var x$141 = this.sci_Vector6__f_len12;
          var x$142 = this.sci_Vector6__f_len123;
          var x$143 = this.sci_Vector6__f_prefix4;
          var x$144 = this.sci_Vector6__f_len1234;
          var x$145 = this.sci_Vector6__f_prefix5;
          var x$146 = this.sci_Vector6__f_len12345;
          var x$147 = this.sci_Vector6__f_data6;
          var x$148 = this.sci_Vector6__f_suffix5;
          var x$149 = this.sci_Vector6__f_suffix4;
          var x$150 = this.sci_Vector6__f_suffix3;
          var x$151 = this.sci_Vector6__f_suffix2;
          var x$152 = this.sci_BigVector__f_suffix1;
          var x$153 = this.sci_BigVector__f_length0;
          return new $c_sci_Vector6(x$138, x$139, x$140, x$141, a3c$6, x$142, x$143, x$144, x$145, x$146, x$147, x$148, x$149, x$150, x$151, x$152, x$153);
        } else if ((index >= this.sci_Vector6__f_len1)) {
          var io$5 = ((index - this.sci_Vector6__f_len1) | 0);
          var a2$8 = this.sci_Vector6__f_prefix2;
          var idx2$3 = ((io$5 >>> 5) | 0);
          var idx1$3 = (31 & io$5);
          var this$44 = $n(a2$8);
          var a2c$8 = this$44.clone__O();
          var a1$9 = a2c$8.get(idx2$3);
          var this$45 = $n(a1$9);
          var a1c$9 = this$45.clone__O();
          a1c$9.set(idx1$3, elem);
          a2c$8.set(idx2$3, a1c$9);
          var x$155 = this.sci_Vector__f_prefix1;
          var x$156 = this.sci_Vector6__f_len1;
          var x$157 = this.sci_Vector6__f_len12;
          var x$158 = this.sci_Vector6__f_prefix3;
          var x$159 = this.sci_Vector6__f_len123;
          var x$160 = this.sci_Vector6__f_prefix4;
          var x$161 = this.sci_Vector6__f_len1234;
          var x$162 = this.sci_Vector6__f_prefix5;
          var x$163 = this.sci_Vector6__f_len12345;
          var x$164 = this.sci_Vector6__f_data6;
          var x$165 = this.sci_Vector6__f_suffix5;
          var x$166 = this.sci_Vector6__f_suffix4;
          var x$167 = this.sci_Vector6__f_suffix3;
          var x$168 = this.sci_Vector6__f_suffix2;
          var x$169 = this.sci_BigVector__f_suffix1;
          var x$170 = this.sci_BigVector__f_length0;
          return new $c_sci_Vector6(x$155, x$156, a2c$8, x$157, x$158, x$159, x$160, x$161, x$162, x$163, x$164, x$165, x$166, x$167, x$168, x$169, x$170);
        } else {
          var a1$10 = this.sci_Vector__f_prefix1;
          var this$47 = $n(a1$10);
          var a1c$10 = this$47.clone__O();
          a1c$10.set(index, elem);
          var len1 = this.sci_Vector6__f_len1;
          var prefix2 = this.sci_Vector6__f_prefix2;
          var len12 = this.sci_Vector6__f_len12;
          var prefix3 = this.sci_Vector6__f_prefix3;
          var len123 = this.sci_Vector6__f_len123;
          var prefix4 = this.sci_Vector6__f_prefix4;
          var len1234 = this.sci_Vector6__f_len1234;
          var prefix5 = this.sci_Vector6__f_prefix5;
          var len12345 = this.sci_Vector6__f_len12345;
          var data6 = this.sci_Vector6__f_data6;
          var suffix5 = this.sci_Vector6__f_suffix5;
          var suffix4 = this.sci_Vector6__f_suffix4;
          var suffix3 = this.sci_Vector6__f_suffix3;
          var suffix2 = this.sci_Vector6__f_suffix2;
          var suffix1 = this.sci_BigVector__f_suffix1;
          var length0 = this.sci_BigVector__f_length0;
          return new $c_sci_Vector6(a1c$10, len1, prefix2, len12, prefix3, len123, prefix4, len1234, prefix5, len12345, data6, suffix5, suffix4, suffix3, suffix2, suffix1, length0);
        }
      } else {
        throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
      }
    });
    $c_sci_Vector6.prototype.appended__O__sci_Vector = (function(elem) {
      if (($n(this.sci_BigVector__f_suffix1).u.length < 32)) {
        var x$1 = $m_sci_VectorStatics$().copyAppend1__AO__O__AO(this.sci_BigVector__f_suffix1, elem);
        var x$2 = ((1 + this.sci_BigVector__f_length0) | 0);
        var x$3 = this.sci_Vector__f_prefix1;
        var x$4 = this.sci_Vector6__f_len1;
        var x$5 = this.sci_Vector6__f_prefix2;
        var x$6 = this.sci_Vector6__f_len12;
        var x$7 = this.sci_Vector6__f_prefix3;
        var x$8 = this.sci_Vector6__f_len123;
        var x$9 = this.sci_Vector6__f_prefix4;
        var x$10 = this.sci_Vector6__f_len1234;
        var x$11 = this.sci_Vector6__f_prefix5;
        var x$12 = this.sci_Vector6__f_len12345;
        var x$13 = this.sci_Vector6__f_data6;
        var x$14 = this.sci_Vector6__f_suffix5;
        var x$15 = this.sci_Vector6__f_suffix4;
        var x$16 = this.sci_Vector6__f_suffix3;
        var x$17 = this.sci_Vector6__f_suffix2;
        return new $c_sci_Vector6(x$3, x$4, x$5, x$6, x$7, x$8, x$9, x$10, x$11, x$12, x$13, x$14, x$15, x$16, x$17, x$1, x$2);
      } else if (($n(this.sci_Vector6__f_suffix2).u.length < 31)) {
        var x$18 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix2, this.sci_BigVector__f_suffix1), 2);
        var a = new $ac_O(1);
        a.set(0, elem);
        var x$20 = ((1 + this.sci_BigVector__f_length0) | 0);
        var x$21 = this.sci_Vector__f_prefix1;
        var x$22 = this.sci_Vector6__f_len1;
        var x$23 = this.sci_Vector6__f_prefix2;
        var x$24 = this.sci_Vector6__f_len12;
        var x$25 = this.sci_Vector6__f_prefix3;
        var x$26 = this.sci_Vector6__f_len123;
        var x$27 = this.sci_Vector6__f_prefix4;
        var x$28 = this.sci_Vector6__f_len1234;
        var x$29 = this.sci_Vector6__f_prefix5;
        var x$30 = this.sci_Vector6__f_len12345;
        var x$31 = this.sci_Vector6__f_data6;
        var x$32 = this.sci_Vector6__f_suffix5;
        var x$33 = this.sci_Vector6__f_suffix4;
        var x$34 = this.sci_Vector6__f_suffix3;
        return new $c_sci_Vector6(x$21, x$22, x$23, x$24, x$25, x$26, x$27, x$28, x$29, x$30, x$31, x$32, x$33, x$34, x$18, a, x$20);
      } else if (($n(this.sci_Vector6__f_suffix3).u.length < 31)) {
        var x$35 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix2, this.sci_BigVector__f_suffix1)), 3);
        var x$36 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
        var a$1 = new $ac_O(1);
        a$1.set(0, elem);
        var x$38 = ((1 + this.sci_BigVector__f_length0) | 0);
        var x$39 = this.sci_Vector__f_prefix1;
        var x$40 = this.sci_Vector6__f_len1;
        var x$41 = this.sci_Vector6__f_prefix2;
        var x$42 = this.sci_Vector6__f_len12;
        var x$43 = this.sci_Vector6__f_prefix3;
        var x$44 = this.sci_Vector6__f_len123;
        var x$45 = this.sci_Vector6__f_prefix4;
        var x$46 = this.sci_Vector6__f_len1234;
        var x$47 = this.sci_Vector6__f_prefix5;
        var x$48 = this.sci_Vector6__f_len12345;
        var x$49 = this.sci_Vector6__f_data6;
        var x$50 = this.sci_Vector6__f_suffix5;
        var x$51 = this.sci_Vector6__f_suffix4;
        return new $c_sci_Vector6(x$39, x$40, x$41, x$42, x$43, x$44, x$45, x$46, x$47, x$48, x$49, x$50, x$51, x$35, x$36, a$1, x$38);
      } else if (($n(this.sci_Vector6__f_suffix4).u.length < 31)) {
        var x$52 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix4, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix2, this.sci_BigVector__f_suffix1))), 4);
        var x$53 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
        var x$54 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
        var a$2 = new $ac_O(1);
        a$2.set(0, elem);
        var x$56 = ((1 + this.sci_BigVector__f_length0) | 0);
        var x$57 = this.sci_Vector__f_prefix1;
        var x$58 = this.sci_Vector6__f_len1;
        var x$59 = this.sci_Vector6__f_prefix2;
        var x$60 = this.sci_Vector6__f_len12;
        var x$61 = this.sci_Vector6__f_prefix3;
        var x$62 = this.sci_Vector6__f_len123;
        var x$63 = this.sci_Vector6__f_prefix4;
        var x$64 = this.sci_Vector6__f_len1234;
        var x$65 = this.sci_Vector6__f_prefix5;
        var x$66 = this.sci_Vector6__f_len12345;
        var x$67 = this.sci_Vector6__f_data6;
        var x$68 = this.sci_Vector6__f_suffix5;
        return new $c_sci_Vector6(x$57, x$58, x$59, x$60, x$61, x$62, x$63, x$64, x$65, x$66, x$67, x$68, x$52, x$53, x$54, a$2, x$56);
      } else if (($n(this.sci_Vector6__f_suffix5).u.length < 31)) {
        var x$69 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix5, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix4, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix2, this.sci_BigVector__f_suffix1)))), 5);
        var x$70 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty4;
        var x$71 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
        var x$72 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
        var a$3 = new $ac_O(1);
        a$3.set(0, elem);
        var x$74 = ((1 + this.sci_BigVector__f_length0) | 0);
        var x$75 = this.sci_Vector__f_prefix1;
        var x$76 = this.sci_Vector6__f_len1;
        var x$77 = this.sci_Vector6__f_prefix2;
        var x$78 = this.sci_Vector6__f_len12;
        var x$79 = this.sci_Vector6__f_prefix3;
        var x$80 = this.sci_Vector6__f_len123;
        var x$81 = this.sci_Vector6__f_prefix4;
        var x$82 = this.sci_Vector6__f_len1234;
        var x$83 = this.sci_Vector6__f_prefix5;
        var x$84 = this.sci_Vector6__f_len12345;
        var x$85 = this.sci_Vector6__f_data6;
        return new $c_sci_Vector6(x$75, x$76, x$77, x$78, x$79, x$80, x$81, x$82, x$83, x$84, x$85, x$69, x$70, x$71, x$72, a$3, x$74);
      } else if (($n(this.sci_Vector6__f_data6).u.length < 62)) {
        var x$86 = $asArrayOf_O($m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_data6, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix5, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix4, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix3, $m_sci_VectorStatics$().copyAppend__AO__O__AO(this.sci_Vector6__f_suffix2, this.sci_BigVector__f_suffix1))))), 6);
        var x$87 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty5;
        var x$88 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty4;
        var x$89 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty3;
        var x$90 = $m_sci_VectorStatics$().sci_VectorStatics$__f_empty2;
        var a$4 = new $ac_O(1);
        a$4.set(0, elem);
        var x$92 = ((1 + this.sci_BigVector__f_length0) | 0);
        var x$93 = this.sci_Vector__f_prefix1;
        var x$94 = this.sci_Vector6__f_len1;
        var x$95 = this.sci_Vector6__f_prefix2;
        var x$96 = this.sci_Vector6__f_len12;
        var x$97 = this.sci_Vector6__f_prefix3;
        var x$98 = this.sci_Vector6__f_len123;
        var x$99 = this.sci_Vector6__f_prefix4;
        var x$100 = this.sci_Vector6__f_len1234;
        var x$101 = this.sci_Vector6__f_prefix5;
        var x$102 = this.sci_Vector6__f_len12345;
        return new $c_sci_Vector6(x$93, x$94, x$95, x$96, x$97, x$98, x$99, x$100, x$101, x$102, x$86, x$87, x$88, x$89, x$90, a$4, x$92);
      } else {
        throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
      }
    });
    $c_sci_Vector6.prototype.vectorSliceCount__I = (function() {
      return 11;
    });
    $c_sci_Vector6.prototype.vectorSlice__I__AO = (function(idx) {
      switch (idx) {
        case 0: {
          return this.sci_Vector__f_prefix1;
        }
        case 1: {
          return this.sci_Vector6__f_prefix2;
        }
        case 2: {
          return this.sci_Vector6__f_prefix3;
        }
        case 3: {
          return this.sci_Vector6__f_prefix4;
        }
        case 4: {
          return this.sci_Vector6__f_prefix5;
        }
        case 5: {
          return this.sci_Vector6__f_data6;
        }
        case 6: {
          return this.sci_Vector6__f_suffix5;
        }
        case 7: {
          return this.sci_Vector6__f_suffix4;
        }
        case 8: {
          return this.sci_Vector6__f_suffix3;
        }
        case 9: {
          return this.sci_Vector6__f_suffix2;
        }
        case 10: {
          return this.sci_BigVector__f_suffix1;
        }
        default: {
          throw new $c_s_MatchError(idx);
        }
      }
    });
    $c_sci_Vector6.prototype.apply__O__O = (function(v1) {
      var index = $uI(v1);
      if (((index >= 0) && (index < this.sci_BigVector__f_length0))) {
        var io = ((index - this.sci_Vector6__f_len12345) | 0);
        if ((io >= 0)) {
          var i6 = ((io >>> 25) | 0);
          var i5 = (31 & ((io >>> 20) | 0));
          var i4 = (31 & ((io >>> 15) | 0));
          var i3 = (31 & ((io >>> 10) | 0));
          var i2 = (31 & ((io >>> 5) | 0));
          var i1 = (31 & io);
          return ((i6 < $n(this.sci_Vector6__f_data6).u.length) ? $n($n($n($n($n($n(this.sci_Vector6__f_data6).get(i6)).get(i5)).get(i4)).get(i3)).get(i2)).get(i1) : ((i5 < $n(this.sci_Vector6__f_suffix5).u.length) ? $n($n($n($n($n(this.sci_Vector6__f_suffix5).get(i5)).get(i4)).get(i3)).get(i2)).get(i1) : ((i4 < $n(this.sci_Vector6__f_suffix4).u.length) ? $n($n($n($n(this.sci_Vector6__f_suffix4).get(i4)).get(i3)).get(i2)).get(i1) : ((i3 < $n(this.sci_Vector6__f_suffix3).u.length) ? $n($n($n(this.sci_Vector6__f_suffix3).get(i3)).get(i2)).get(i1) : ((i2 < $n(this.sci_Vector6__f_suffix2).u.length) ? $n($n(this.sci_Vector6__f_suffix2).get(i2)).get(i1) : $n(this.sci_BigVector__f_suffix1).get(i1))))));
        } else if ((index >= this.sci_Vector6__f_len1234)) {
          var io$2 = ((index - this.sci_Vector6__f_len1234) | 0);
          return $n($n($n($n($n(this.sci_Vector6__f_prefix5).get(((io$2 >>> 20) | 0))).get((31 & ((io$2 >>> 15) | 0)))).get((31 & ((io$2 >>> 10) | 0)))).get((31 & ((io$2 >>> 5) | 0)))).get((31 & io$2));
        } else if ((index >= this.sci_Vector6__f_len123)) {
          var io$3 = ((index - this.sci_Vector6__f_len123) | 0);
          return $n($n($n($n(this.sci_Vector6__f_prefix4).get(((io$3 >>> 15) | 0))).get((31 & ((io$3 >>> 10) | 0)))).get((31 & ((io$3 >>> 5) | 0)))).get((31 & io$3));
        } else if ((index >= this.sci_Vector6__f_len12)) {
          var io$4 = ((index - this.sci_Vector6__f_len12) | 0);
          return $n($n($n(this.sci_Vector6__f_prefix3).get(((io$4 >>> 10) | 0))).get((31 & ((io$4 >>> 5) | 0)))).get((31 & io$4));
        } else if ((index >= this.sci_Vector6__f_len1)) {
          var io$5 = ((index - this.sci_Vector6__f_len1) | 0);
          return $n($n(this.sci_Vector6__f_prefix2).get(((io$5 >>> 5) | 0))).get((31 & io$5));
        } else {
          return $n(this.sci_Vector__f_prefix1).get(index);
        }
      } else {
        throw $n(this.ioob__I__jl_IndexOutOfBoundsException(index));
      }
    });
    function $as_sci_Vector6(obj) {
      return (((obj instanceof $c_sci_Vector6) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector6"));
    }
    new $TypeData().initClass($c_sci_Vector6, "scala.collection.immutable.Vector6", ({
      sci_Vector6: 1,
      sci_BigVector: 1,
      sci_VectorImpl: 1,
      sci_Vector: 1,
      sci_AbstractSeq: 1,
      sc_AbstractSeq: 1,
      sc_AbstractIterable: 1,
      sc_Iterable: 1,
      sc_IterableOnce: 1,
      sc_IterableOps: 1,
      sc_IterableOnceOps: 1,
      sc_IterableFactoryDefaults: 1,
      sc_Seq: 1,
      s_PartialFunction: 1,
      F1: 1,
      sc_SeqOps: 1,
      s_Equals: 1,
      sci_Seq: 1,
      sci_Iterable: 1,
      sci_SeqOps: 1,
      sci_IndexedSeq: 1,
      sc_IndexedSeq: 1,
      sc_IndexedSeqOps: 1,
      sci_IndexedSeqOps: 1,
      sci_StrictOptimizedSeqOps: 1,
      sc_StrictOptimizedSeqOps: 1,
      sc_StrictOptimizedIterableOps: 1,
      scg_DefaultSerializable: 1,
      Ljava_io_Serializable: 1
    }));
    function $ct_scm_StringBuilder__jl_StringBuilder__($thiz, underlying) {
      $thiz.scm_StringBuilder__f_underlying = underlying;
      return $thiz;
    }
    function $ct_scm_StringBuilder__($thiz) {
      $ct_scm_StringBuilder__jl_StringBuilder__($thiz, new $c_jl_StringBuilder());
      return $thiz;
    }
    /** @constructor */
    function $c_scm_StringBuilder() {
      this.scm_StringBuilder__f_underlying = null;
    }
    $c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
    $c_scm_StringBuilder.prototype.constructor = $c_scm_StringBuilder;
    $c_scm_StringBuilder.prototype;
    $c_scm_StringBuilder.prototype.stringPrefix__T = (function() {
      return "IndexedSeq";
    });
    $c_scm_StringBuilder.prototype.iterator__sc_Iterator = (function() {
      var this$1$1 = new $c_sc_IndexedSeqView$Id(this);
      return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1$1);
    });
    $c_scm_StringBuilder.prototype.lengthCompare__I__I = (function(len) {
      var x = $n(this.scm_StringBuilder__f_underlying).length__I();
      return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
    });
    $c_scm_StringBuilder.prototype.addAll__sc_IterableOnce__scm_Growable = (function(elems) {
      return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems);
    });
    $c_scm_StringBuilder.prototype.length__I = (function() {
      return $n(this.scm_StringBuilder__f_underlying).length__I();
    });
    $c_scm_StringBuilder.prototype.knownSize__I = (function() {
      return $n(this.scm_StringBuilder__f_underlying).length__I();
    });
    $c_scm_StringBuilder.prototype.addOne__C__scm_StringBuilder = (function(x) {
      var this$1$1 = $n(this.scm_StringBuilder__f_underlying);
      var str = ("" + $cToS(x));
      this$1$1.jl_StringBuilder__f_java$lang$StringBuilder$$content = (this$1$1.jl_StringBuilder__f_java$lang$StringBuilder$$content + str);
      return this;
    });
    $c_scm_StringBuilder.prototype.toString__T = (function() {
      return $n(this.scm_StringBuilder__f_underlying).jl_StringBuilder__f_java$lang$StringBuilder$$content;
    });
    $c_scm_StringBuilder.prototype.isEmpty__Z = (function() {
      return ($n(this.scm_StringBuilder__f_underlying).length__I() === 0);
    });
    $c_scm_StringBuilder.prototype.result__O = (function() {
      return $n(this.scm_StringBuilder__f_underlying).jl_StringBuilder__f_java$lang$StringBuilder$$content;
    });
    $c_scm_StringBuilder.prototype.addOne__O__scm_Growable = (function(elem) {
      return this.addOne__C__scm_StringBuilder($uC(elem));
    });
    $c_scm_StringBuilder.prototype.apply__O__O = (function(v1) {
      var i = $uI(v1);
      return $bC($n(this.scm_StringBuilder__f_underlying).charAt__I__C(i));
    });
    $c_scm_StringBuilder.prototype.apply__I__O = (function(i) {
      return $bC($n(this.scm_StringBuilder__f_underlying).charAt__I__C(i));
    });
    new $TypeData().initClass($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
      scm_StringBuilder: 1,
      scm_AbstractSeq: 1,
      sc_AbstractSeq: 1,
      sc_AbstractIterable: 1,
      sc_Iterable: 1,
      sc_IterableOnce: 1,
      sc_IterableOps: 1,
      sc_IterableOnceOps: 1,
      sc_IterableFactoryDefaults: 1,
      sc_Seq: 1,
      s_PartialFunction: 1,
      F1: 1,
      sc_SeqOps: 1,
      s_Equals: 1,
      scm_Seq: 1,
      scm_Iterable: 1,
      scm_SeqOps: 1,
      scm_Cloneable: 1,
      jl_Cloneable: 1,
      scm_ReusableBuilder: 1,
      scm_Builder: 1,
      scm_Growable: 1,
      scm_Clearable: 1,
      scm_IndexedSeq: 1,
      sc_IndexedSeq: 1,
      sc_IndexedSeqOps: 1,
      scm_IndexedSeqOps: 1,
      jl_CharSequence: 1,
      Ljava_io_Serializable: 1
    }));
    function $p_scm_ListBuffer__copyElems__V($thiz) {
      var buf = new $c_scm_ListBuffer().scala$collection$mutable$ListBuffer$$freshFrom__sc_IterableOnce__scm_ListBuffer($thiz);
      $thiz.scm_ListBuffer__f_first = $n(buf).scm_ListBuffer__f_first;
      $thiz.scm_ListBuffer__f_last0 = $n(buf).scm_ListBuffer__f_last0;
      $thiz.scm_ListBuffer__f_aliased = false;
    }
    function $p_scm_ListBuffer__ensureUnaliased__V($thiz) {
      $thiz.scm_ListBuffer__f_mutationCount = ((1 + $thiz.scm_ListBuffer__f_mutationCount) | 0);
      if ($thiz.scm_ListBuffer__f_aliased) {
        $p_scm_ListBuffer__copyElems__V($thiz);
      }
    }
    /** @constructor */
    function $c_scm_ListBuffer() {
      this.scm_ListBuffer__f_mutationCount = 0;
      this.scm_ListBuffer__f_first = null;
      this.scm_ListBuffer__f_last0 = null;
      this.scm_ListBuffer__f_aliased = false;
      this.scm_ListBuffer__f_len = 0;
      this.scm_ListBuffer__f_mutationCount = 0;
      this.scm_ListBuffer__f_first = $m_sci_Nil$();
      this.scm_ListBuffer__f_last0 = null;
      this.scm_ListBuffer__f_aliased = false;
      this.scm_ListBuffer__f_len = 0;
    }
    $c_scm_ListBuffer.prototype = new $h_scm_AbstractBuffer();
    $c_scm_ListBuffer.prototype.constructor = $c_scm_ListBuffer;
    $c_scm_ListBuffer.prototype;
    $c_scm_ListBuffer.prototype.iterator__sc_Iterator = (function() {
      return new $c_scm_MutationTracker$CheckedIterator($n(this.scm_ListBuffer__f_first).iterator__sc_Iterator(), new $c_sjsr_AnonFunction0((() => this.scm_ListBuffer__f_mutationCount)));
    });
    $c_scm_ListBuffer.prototype.apply__I__O = (function(i) {
      var this$1$1 = $n(this.scm_ListBuffer__f_first);
      return $f_sc_LinearSeqOps__apply__I__O(this$1$1, i);
    });
    $c_scm_ListBuffer.prototype.length__I = (function() {
      return this.scm_ListBuffer__f_len;
    });
    $c_scm_ListBuffer.prototype.knownSize__I = (function() {
      return this.scm_ListBuffer__f_len;
    });
    $c_scm_ListBuffer.prototype.isEmpty__Z = (function() {
      return (this.scm_ListBuffer__f_len === 0);
    });
    $c_scm_ListBuffer.prototype.toList__sci_List = (function() {
      this.scm_ListBuffer__f_aliased = (!this.isEmpty__Z());
      return this.scm_ListBuffer__f_first;
    });
    $c_scm_ListBuffer.prototype.addOne__O__scm_ListBuffer = (function(elem) {
      $p_scm_ListBuffer__ensureUnaliased__V(this);
      var last1 = new $c_sci_$colon$colon(elem, $m_sci_Nil$());
      if ((this.scm_ListBuffer__f_len === 0)) {
        this.scm_ListBuffer__f_first = last1;
      } else {
        $n(this.scm_ListBuffer__f_last0).sci_$colon$colon__f_next = last1;
      }
      this.scm_ListBuffer__f_last0 = last1;
      this.scm_ListBuffer__f_len = ((1 + this.scm_ListBuffer__f_len) | 0);
      return this;
    });
    $c_scm_ListBuffer.prototype.scala$collection$mutable$ListBuffer$$freshFrom__sc_IterableOnce__scm_ListBuffer = (function(xs) {
      var it = $n(xs).iterator__sc_Iterator();
      if ($n(it).hasNext__Z()) {
        var len = 1;
        var last0 = new $c_sci_$colon$colon($n(it).next__O(), $m_sci_Nil$());
        this.scm_ListBuffer__f_first = last0;
        while ($n(it).hasNext__Z()) {
          var last1 = new $c_sci_$colon$colon($n(it).next__O(), $m_sci_Nil$());
          $n(last0).sci_$colon$colon__f_next = last1;
          last0 = last1;
          len = ((1 + len) | 0);
        }
        this.scm_ListBuffer__f_len = len;
        this.scm_ListBuffer__f_last0 = last0;
      }
      return this;
    });
    $c_scm_ListBuffer.prototype.addAll__sc_IterableOnce__scm_ListBuffer = (function(xs) {
      var it = $n(xs).iterator__sc_Iterator();
      if ($n(it).hasNext__Z()) {
        var fresh = new $c_scm_ListBuffer().scala$collection$mutable$ListBuffer$$freshFrom__sc_IterableOnce__scm_ListBuffer(it);
        $p_scm_ListBuffer__ensureUnaliased__V(this);
        if ((this.scm_ListBuffer__f_len === 0)) {
          this.scm_ListBuffer__f_first = $n(fresh).scm_ListBuffer__f_first;
        } else {
          $n(this.scm_ListBuffer__f_last0).sci_$colon$colon__f_next = $n(fresh).scm_ListBuffer__f_first;
        }
        this.scm_ListBuffer__f_last0 = $n(fresh).scm_ListBuffer__f_last0;
        this.scm_ListBuffer__f_len = ((this.scm_ListBuffer__f_len + $n(fresh).scm_ListBuffer__f_len) | 0);
      }
      return this;
    });
    $c_scm_ListBuffer.prototype.stringPrefix__T = (function() {
      return "ListBuffer";
    });
    $c_scm_ListBuffer.prototype.addAll__sc_IterableOnce__scm_Growable = (function(elems) {
      return this.addAll__sc_IterableOnce__scm_ListBuffer(elems);
    });
    $c_scm_ListBuffer.prototype.addOne__O__scm_Growable = (function(elem) {
      return this.addOne__O__scm_ListBuffer(elem);
    });
    $c_scm_ListBuffer.prototype.result__O = (function() {
      return this.toList__sci_List();
    });
    $c_scm_ListBuffer.prototype.apply__O__O = (function(v1) {
      var i = $uI(v1);
      var this$1$1 = $n(this.scm_ListBuffer__f_first);
      return $f_sc_LinearSeqOps__apply__I__O(this$1$1, i);
    });
    new $TypeData().initClass($c_scm_ListBuffer, "scala.collection.mutable.ListBuffer", ({
      scm_ListBuffer: 1,
      scm_AbstractBuffer: 1,
      scm_AbstractSeq: 1,
      sc_AbstractSeq: 1,
      sc_AbstractIterable: 1,
      sc_Iterable: 1,
      sc_IterableOnce: 1,
      sc_IterableOps: 1,
      sc_IterableOnceOps: 1,
      sc_IterableFactoryDefaults: 1,
      sc_Seq: 1,
      s_PartialFunction: 1,
      F1: 1,
      sc_SeqOps: 1,
      s_Equals: 1,
      scm_Seq: 1,
      scm_Iterable: 1,
      scm_SeqOps: 1,
      scm_Cloneable: 1,
      jl_Cloneable: 1,
      scm_Buffer: 1,
      scm_Growable: 1,
      scm_Clearable: 1,
      scm_Shrinkable: 1,
      sc_StrictOptimizedSeqOps: 1,
      sc_StrictOptimizedIterableOps: 1,
      scm_ReusableBuilder: 1,
      scm_Builder: 1,
      scg_DefaultSerializable: 1,
      Ljava_io_Serializable: 1
    }));
    function $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, array) {
      $thiz.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array = array;
      return $thiz;
    }
    function $ct_sjs_js_WrappedArray__($thiz) {
      $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, []);
      return $thiz;
    }
    /** @constructor */
    function $c_sjs_js_WrappedArray() {
      this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array = null;
    }
    $c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
    $c_sjs_js_WrappedArray.prototype.constructor = $c_sjs_js_WrappedArray;
    $c_sjs_js_WrappedArray.prototype;
    $c_sjs_js_WrappedArray.prototype.stringPrefix__T = (function() {
      return "IndexedSeq";
    });
    $c_sjs_js_WrappedArray.prototype.iterator__sc_Iterator = (function() {
      var this$1$1 = new $c_sc_IndexedSeqView$Id(this);
      return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1$1);
    });
    $c_sjs_js_WrappedArray.prototype.lengthCompare__I__I = (function(len) {
      var x = $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length);
      return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
    });
    $c_sjs_js_WrappedArray.prototype.apply__I__O = (function(index) {
      return this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array[index];
    });
    $c_sjs_js_WrappedArray.prototype.length__I = (function() {
      return $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length);
    });
    $c_sjs_js_WrappedArray.prototype.knownSize__I = (function() {
      return $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length);
    });
    $c_sjs_js_WrappedArray.prototype.className__T = (function() {
      return "WrappedArray";
    });
    $c_sjs_js_WrappedArray.prototype.result__O = (function() {
      return this;
    });
    $c_sjs_js_WrappedArray.prototype.addOne__O__scm_Growable = (function(elem) {
      this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.push(elem);
      return this;
    });
    $c_sjs_js_WrappedArray.prototype.apply__O__O = (function(v1) {
      var index = $uI(v1);
      return this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array[index];
    });
    function $as_sjs_js_WrappedArray(obj) {
      return (((obj instanceof $c_sjs_js_WrappedArray) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.js.WrappedArray"));
    }
    new $TypeData().initClass($c_sjs_js_WrappedArray, "scala.scalajs.js.WrappedArray", ({
      sjs_js_WrappedArray: 1,
      scm_AbstractBuffer: 1,
      scm_AbstractSeq: 1,
      sc_AbstractSeq: 1,
      sc_AbstractIterable: 1,
      sc_Iterable: 1,
      sc_IterableOnce: 1,
      sc_IterableOps: 1,
      sc_IterableOnceOps: 1,
      sc_IterableFactoryDefaults: 1,
      sc_Seq: 1,
      s_PartialFunction: 1,
      F1: 1,
      sc_SeqOps: 1,
      s_Equals: 1,
      scm_Seq: 1,
      scm_Iterable: 1,
      scm_SeqOps: 1,
      scm_Cloneable: 1,
      jl_Cloneable: 1,
      scm_Buffer: 1,
      scm_Growable: 1,
      scm_Clearable: 1,
      scm_Shrinkable: 1,
      sc_StrictOptimizedSeqOps: 1,
      sc_StrictOptimizedIterableOps: 1,
      scm_IndexedSeq: 1,
      sc_IndexedSeq: 1,
      sc_IndexedSeqOps: 1,
      scm_IndexedSeqOps: 1,
      scm_IndexedBuffer: 1,
      scm_Builder: 1,
      Ljava_io_Serializable: 1
    }));
    $L0 = new $c_RTLong(0, 0);
    $d_J.zero = $L0;
    $s_LFront__main__AT__V(new ($d_T.getArrayOf().constr)([]));

})();
