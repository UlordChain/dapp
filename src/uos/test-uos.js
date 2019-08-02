console.log("js start");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _sendPeRequest(serialNumber, params, methodName) {
  if (navigator.userAgent == 'UlordUosAndroid') {
    window.DappJsBridge.pushMessage(serialNumber, params, methodName);
  } else if (navigator.userAgent == 'UlordUosiOS') {
    window.webkit.messageHandlers.pushMessage.postMessage({
      'params': params,
      'serialNumber': serialNumber,
      'methodName': methodName
    });
  }
}

function serialNumberFn() {
  return 'serialNumber' + (new Date().getTime() + parseInt(Math.random() * 100000000000));
}

var pefun =
/*#__PURE__*/
function () {
  function pefun() {
    _classCallCheck(this, pefun);
  }

  _createClass(pefun, [{
    key: "requestMsgSignature",
    value: function requestMsgSignature(params) {
      var serialNumber = serialNumberFn();

      _sendPeRequest(serialNumber, params, 'requestMsgSignature');

      return new Promise(function (resolve, reject) {
        window.callbackResult = function (returnSerialNumber, result) {
          if (returnSerialNumber == serialNumber) {
            resolve(JSON.parse(result));
          }
        };
      });
    }
  }, {
    key: "requestSignature",
    value: function requestSignature(params) {
      var serialNumber = serialNumberFn();

      _sendPeRequest(serialNumber, params, 'requestSignature');

      return new Promise(function (resolve, reject) {
        window.callbackResult = function (returnSerialNumber, result) {
          if (returnSerialNumber == serialNumber) {
            resolve(JSON.parse(result));
          }
        };
      });
    }
  }, {
    key: "getAppInfo",
    value: function getAppInfo() {
      var serialNumber = serialNumberFn();

      _sendPeRequest(serialNumber, '', 'getAppInfo');

      return new Promise(function (resolve, reject) {
        window.callbackResult = function (returnSerialNumber, result) {
          if (returnSerialNumber == serialNumber) {
            resolve(JSON.parse(result));
          }
        };
      });
    }
  }, {
    key: "walletLanguage",
    value: function walletLanguage() {
      var serialNumber = serialNumberFn();

      _sendPeRequest(serialNumber, '', 'walletLanguage');

      return new Promise(function (resolve, reject) {
        window.callbackResult = function (returnSerialNumber, result) {
          if (returnSerialNumber == serialNumber) {
            resolve(JSON.parse(result));
          }
        };
      });
    }
  }, {
    key: "getUosAccount",
    value: function getUosAccount() {
      var serialNumber = serialNumberFn();

      _sendPeRequest(serialNumber, '', 'getUosAccount');

      return new Promise(function (resolve, reject) {
        window.callbackResult = function (returnSerialNumber, result) {
          if (returnSerialNumber == serialNumber) {
            resolve(JSON.parse(result));
          }
        };
      });
    }
  }, {
    key: "getWalletWithAccount",
    value: function getWalletWithAccount() {
      var serialNumber = serialNumberFn();

      _sendPeRequest(serialNumber, '', 'getWalletWithAccount');

      return new Promise(function (resolve, reject) {
        window.callbackResult = function (returnSerialNumber, result) {
          if (returnSerialNumber == serialNumber) {
            resolve(JSON.parse(result));
          }
        };
      });
    }
  }, {
    key: "getUosBalance",
    value: function getUosBalance(params) {
      var serialNumber = serialNumberFn();
      var Jparams = JSON.stringify(params);

      _sendPeRequest(serialNumber, Jparams, 'getUosBalance'); //getUosBalance


      return new Promise(function (resolve, reject) {
        window.callbackResult = function (returnSerialNumber, result) {
          if (returnSerialNumber == serialNumber) {
            resolve(JSON.parse(result));
          }
        };
      });
    }
  }, {
    key: "getUosAccountInfo",
    value: function getUosAccountInfo(params) {
      var serialNumber = serialNumberFn();
      var Jparams = JSON.stringify(params);

      _sendPeRequest(serialNumber, Jparams, 'getUosAccountInfo');

      return new Promise(function (resolve, reject) {
        window.callbackResult = function (returnSerialNumber, result) {
          if (returnSerialNumber == serialNumber) {
            resolve(JSON.parse(result));
          }
        };
      });
    }
  }, {
    key: "getTransactionById",
    value: function getTransactionById(params) {
      var serialNumber = serialNumberFn();
      var Jparams = JSON.stringify(params);

      _sendPeRequest(serialNumber, Jparams, 'getTransactionById');

      return new Promise(function (resolve, reject) {
        window.callbackResult = function (returnSerialNumber, result) {
          if (returnSerialNumber == serialNumber) {
            resolve(JSON.parse(result));
          }
        };
      });
    }
  }, {
    key: "pushActions",
    value: function pushActions(params) {
      var serialNumber = params.serialNumber;
      var Jparams = JSON.stringify(params);

      _sendPeRequest(serialNumber, Jparams, 'pushActions');

      return new Promise(function (resolve, reject) {
        window.callbackResult = function (returnSerialNumber, result) {
          if (returnSerialNumber == serialNumber) {
            resolve(JSON.parse(result));
          }
        };
      });
    }
  }, {
    key: "pushTransfer",
    value: function pushTransfer(params) {
      var serialNumber = params.serialNumber;
      var Jparams = JSON.stringify(params);

      _sendPeRequest(serialNumber, Jparams, 'pushTransfer');

      return new Promise(function (resolve, reject) {
        window.callbackResult = function (returnSerialNumber, result) {
          if (returnSerialNumber == serialNumber) {
            resolve(JSON.parse(result));
          }
        };
      });
    }
  }]);

  return pefun;
}();

var pe = new pefun();
var Blockchains = {
  EOS: 'eos',
  ETH: 'eth',
  TRX: 'trx',
  UOS: 'uos'
};

var Network =
/*#__PURE__*/
function () {
  function Network() {
    var _name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    var _protocol = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'https';

    var _host = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    var _port = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    var blockchain = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : Blockchains.UOS;
    var chainId = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';

    _classCallCheck(this, Network);

    this.name = _name;
    this.protocol = _protocol;
    this.host = _host;
    this.port = _port;
    this.blockchain = blockchain;
    this.chainId = chainId.toString();
  }

  _createClass(Network, [{
    key: "isValid",
    value: function isValid() {
      return this.protocol.length && this.host.length && this.port || this.chainId.length;
    }
  }, {
    key: "hostport",
    value: function hostport() {
      return "".concat(this.host).concat(this.port ? ':' : '').concat(this.port);
    }
  }], [{
    key: "placeholder",
    value: function placeholder() {
      return new Network();
    }
  }, {
    key: "fromJson",
    value: function fromJson(json) {
      var p = Object.assign(Network.placeholder(), json);
      p.chainId = p.chainId ? p.chainId.toString() : '';
      return p;
    }
  }]);

  return Network;
}();

var BLOCKCHAIN_SUPPORT = 'blockchain_support';

var Plugin =
/*#__PURE__*/
function () {
  function Plugin() {
    var _name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    var _type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    _classCallCheck(this, Plugin);

    this.name = _name;
    this.type = _type;
  }

  _createClass(Plugin, [{
    key: "isSignatureProvider",
    value: function isSignatureProvider() {
      return this.type === BLOCKCHAIN_SUPPORT;
    }
  }], [{
    key: "placeholder",
    value: function placeholder() {
      return new Plugin();
    }
  }, {
    key: "fromJson",
    value: function fromJson(json) {
      return Object.assign(Plugin.placeholder(), json);
    }
  }]);

  return Plugin;
}();

var PluginRepositorySingleton =
/*#__PURE__*/
function () {
  function PluginRepositorySingleton() {
    _classCallCheck(this, PluginRepositorySingleton);

    this.plugins = [];
  }

  _createClass(PluginRepositorySingleton, [{
    key: "loadPlugin",
    value: function loadPlugin(plugin) {
      if (!this.plugin(plugin.name)) this.plugins.push(plugin);
    }
  }, {
    key: "signatureProviders",
    value: function signatureProviders() {
      return this.plugins.filter(function (plugin) {
        return plugin.type === BLOCKCHAIN_SUPPORT;
      });
    }
  }, {
    key: "supportedBlockchains",
    value: function supportedBlockchains() {
      return this.signatureProviders().map(function (plugin) {
        return name;
      });
    }
  }, {
    key: "plugin",
    value: function plugin(name) {
      return this.plugins.find(function (plugin) {
        return plugin.name === name;
      });
    }
  }, {
    key: "endorsedNetworks",
    value: function () {
      var _endorsedNetworks = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Promise.all(this.signatureProviders().map(
                /*#__PURE__*/
                function () {
                  var _ref = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee(plugin) {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return plugin.getEndorsedNetwork();

                          case 2:
                            return _context.abrupt("return", _context.sent);

                          case 3:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }()));

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function endorsedNetworks() {
        return _endorsedNetworks.apply(this, arguments);
      }

      return endorsedNetworks;
    }()
  }]);

  return PluginRepositorySingleton;
}();

var PluginRepository = new PluginRepositorySingleton();

var throwNoAuth = function throwNoAuth() {};

var checkForExtension = function checkForExtension(resolve) {
  var tries = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  if (tries > 20) return;
  if (window.usmart.isExtension) return resolve(true);
  setTimeout(function () {
    return checkForExtension(resolve, tries + 1);
  }, 100);
};

var IdentityPE = function IdentityPE(account) {
  _classCallCheck(this, IdentityPE);

  this.hash = '1df7bb65ad53a9eb89b4327a56b1200f3abaf085ffec00af222b9eb7622b0734';
  this.publicKey = 'UOS8NJX2UzUFvbAYH7y1KoZpAAP3zjincBaZnDsuvjQQ4VD1KRLeG';
  this.name = 'pocketUOS';
  this.accounts = [{
    name: account,
    authority: 'active',
    blockchain: 'uos'
  }];
  this.kyc = false;
};

var Index =
/*#__PURE__*/
function () {
  function Index() {
    _classCallCheck(this, Index);

    this.isExtension = true;
    this.identity = null;
  }

  _createClass(Index, [{
    key: "loadPlugin",
    value: function loadPlugin(plugin) {
      var _this = this;

      var noIdFunc = function noIdFunc() {
        if (!_this.identity) throw new Error('No Identity');
      };

      PluginRepository.loadPlugin(plugin);

      if (plugin.isSignatureProvider()) {
        this[plugin.name] = plugin.signatureProvider(noIdFunc);
        this[plugin.name + 'Hook'] = plugin.hookProvider;
      }
    }
  }, {
    key: "isInstalled",
    value: function () {
      var _isInstalled = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", new Promise(function (resolve) {
                  setTimeout(function () {
                    resolve(false);
                  }, 3000);
                  Promise.race([checkForExtension(resolve)]);
                }));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function isInstalled() {
        return _isInstalled.apply(this, arguments);
      }

      return isInstalled;
    }()
  }, {
    key: "connect",
    value: function () {
      var _connect = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(pluginName, options) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", new Promise(function (resolve) {
                  if (!pluginName || !pluginName.length) throw new Error('You must specify a name for this connection');
                  options = Object.assign({
                    initTimeout: 10000,
                    linkTimeout: 30000
                  }, options);
                  setTimeout(function () {
                    resolve(false);
                  }, options.initTimeout);
                  checkForExtension(resolve);
                }));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function connect(_x2, _x3) {
        return _connect.apply(this, arguments);
      }

      return connect;
    }()
  }, {
    key: "disconnect",
    value: function disconnect() {}
  }, {
    key: "getIdentity",
    value: function getIdentity(requiredFields) {
      var _this2 = this;

      throwNoAuth();
      return new Promise(function (resolve, reject) {
        pe.getUosAccount().then(function (res) {
          var account = res.data;
          var ids = new IdentityPE(account);
          _this2.identity = ids;
          resolve(ids);
        });
      });
    }
  }, {
    key: "getIdentityFromPermissions",
    value: function getIdentityFromPermissions() {
      var _this3 = this;

      throwNoAuth();
      return new Promise(function (resolve, reject) {
        pe.getUosAccount().then(function (res) {
          var account = res.data;
          var ids = new IdentityPE(account);
          _this3.identity = ids;
          resolve(ids);
        });
      });
    }
  }, {
    key: "forgetIdentity",
    value: function forgetIdentity() {
      var _this4 = this;

      throwNoAuth();
      return new Promise(function (resolve, reject) {
        _this4.identity = null;
        resolve(true);
      });
    }
  }, {
    key: "authenticate",
    value: function authenticate(nonce) {
      var _this5 = this;

      throwNoAuth();
      return new Promise(function (resolve, reject) {
        pe.getUosAccount().then(function (res) {
          var account = res.data;
          var ids = new IdentityPE(account);
          _this5.identity = ids;
          resolve(ids);
        });
      });
    }
  }, {
    key: "getArbitrarySignature",
    value: function getArbitrarySignature(publicKey, data) {
      var whatfor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var isHash = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var params = {
        publicKey: publicKey,
        data: data,
        whatfor: whatfor,
        isHash: isHash
      };
      return new Promise(function (resolve, reject) {
        var jsonParams = JSON.stringify(params);
        var signature;
        pe.requestMsgSignature(jsonParams).then(function (res) {
          signature = res.data;
          resolve(signature);
        });
      });
    }
  }, {
    key: "getPublicKey",
    value: function getPublicKey(blockchain) {
      throwNoAuth();
      return 0;
    }
  }, {
    key: "linkAccount",
    value: function linkAccount(publicKey, network) {
      throwNoAuth();
      return 0;
    }
  }, {
    key: "hasAccountFor",
    value: function hasAccountFor(network) {
      throwNoAuth();
      return 0;
    }
  }, {
    key: "suggestNetwork",
    value: function suggestNetwork(network) {
      throwNoAuth();
      return 0;
    }
  }, {
    key: "requestTransfer",
    value: function requestTransfer(network, to, amount) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var payload = {
        network: network,
        to: to,
        amount: amount,
        options: options
      };
      return 0;
    }
  }, {
    key: "requestSignature",
    value: function requestSignature(payload) {
      throwNoAuth();
      return 0;
    }
  }, {
    key: "createTransaction",
    value: function createTransaction(blockchain, actions, account, network) {
      throwNoAuth();
      return 0;
    }
  }]);

  return Index;
}();

var proxy = function proxy(dummy, handler) {
  return new Proxy(dummy, handler);
};

var cache = {};

var UsmartUOS =
/*#__PURE__*/
function (_Plugin) {
  _inherits(UsmartUOS, _Plugin);

  function UsmartUOS() {
    _classCallCheck(this, UsmartUOS);

    return _possibleConstructorReturn(this, _getPrototypeOf(UsmartUOS).call(this, Blockchains.UOS, BLOCKCHAIN_SUPPORT));
  }

  _createClass(UsmartUOS, [{
    key: "signatureProvider",
    value: function signatureProvider() {
      var throwIfNoIdentity = arguments.length <= 0 ? undefined : arguments[0];
      return function (network, _uos) {
        var _options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        network = Network.fromJson(network);
        if (!network.isValid()) throw Error.noNetwork();
        var httpEndpoint = "".concat(network.protocol) + '://' + "".concat(network.hostport());
        var chainId = network.hasOwnProperty('chainId') && network.chainId.length ? network.chainId : _options.chainId;
        return proxy(_uos({
          httpEndpoint: httpEndpoint,
          chainId: chainId
        }), {
          get: function get(uosInstance, method) {
            console.log('method', method, uosInstance);
            var returnedFields = null;
            return function () {
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }

              if (args.find(function (arg) {
                return arg.hasOwnProperty('keyProvider');
              })) throw Error.usedKeyProvider();

              var signProvider =
              /*#__PURE__*/
              function () {
                var _ref2 = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee5(signargs) {
                  var requiredFields, result, lostresult, multiSigKeyProvider;
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          throwIfNoIdentity();
                          requiredFields = args.find(function (arg) {
                            return arg.hasOwnProperty('requiredFields');
                          }) || {
                            requiredFields: {}
                          };
                          result = '';
                          _context5.next = 5;
                          return pe.requestSignature(JSON.stringify(signargs)).then(function (res) {
                            result = res.data.signData;
                            return '';
                          });

                        case 5:
                          lostresult = _context5.sent;

                          if (result) {
                            _context5.next = 8;
                            break;
                          }

                          return _context5.abrupt("return", null);

                        case 8:
                          if (!result.hasOwnProperty('signatures')) {
                            _context5.next = 13;
                            break;
                          }

                          returnedFields = result.returnedFields;
                          multiSigKeyProvider = args.find(function (arg) {
                            return arg.hasOwnProperty('signProvider');
                          });

                          if (multiSigKeyProvider) {
                            result.signatures.push(multiSigKeyProvider.signProvider(signargs.buf, signargs.sign));
                          }

                          return _context5.abrupt("return", result.signatures);

                        case 13:
                          return _context5.abrupt("return", result);

                        case 14:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                }));

                return function signProvider(_x4) {
                  return _ref2.apply(this, arguments);
                };
              }();

              return new Promise(function (resolve, reject) {
                var _uos2;

                (_uos2 = _uos(Object.assign(_options, {
                  httpEndpoint: httpEndpoint,
                  signProvider: signProvider,
                  chainId: chainId
                })))[method].apply(_uos2, args).then(function (result) {
                  if (!result.hasOwnProperty('fc')) {
                    result = Object.assign(result, {
                      returnedFields: returnedFields
                    });
                    resolve(result);
                    return;
                  }

                  var contractProxy = proxy(result, {
                    get: function get(instance, method) {
                      if (method === 'then') return instance[method];
                      return function () {
                        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                          args[_key2] = arguments[_key2];
                        }

                        return new Promise(
                        /*#__PURE__*/
                        function () {
                          var _ref3 = _asyncToGenerator(
                          /*#__PURE__*/
                          regeneratorRuntime.mark(function _callee6(res, rej) {
                            return regeneratorRuntime.wrap(function _callee6$(_context6) {
                              while (1) {
                                switch (_context6.prev = _context6.next) {
                                  case 0:
                                    instance[method].apply(instance, args).then(function (actionResult) {
                                      res(Object.assign(actionResult, {
                                        returnedFields: returnedFields
                                      }));
                                    })["catch"](rej);

                                  case 1:
                                  case "end":
                                    return _context6.stop();
                                }
                              }
                            }, _callee6);
                          }));

                          return function (_x5, _x6) {
                            return _ref3.apply(this, arguments);
                          };
                        }());
                      };
                    }
                  });
                  resolve(contractProxy);
                })["catch"](function (error) {
                  return reject(error);
                });
              });
            };
          }
        });
      };
    }
  }]);

  return UsmartUOS;
}(Plugin);

function inject() {
  console.log("inject");
  window.usmart = new Index();
  window.usmart.loadPlugin(new UsmartUOS());
  window.pe = pe;
  console.log(window.pe);
  document.dispatchEvent(new CustomEvent('usmartLoaded'));
}

inject();
