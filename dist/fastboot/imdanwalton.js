"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('imdanwalton/app', ['exports', 'ember', 'imdanwalton/resolver', 'ember-load-initializers', 'imdanwalton/config/environment'], function (exports, _ember, _imdanwaltonResolver, _emberLoadInitializers, _imdanwaltonConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _imdanwaltonConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _imdanwaltonConfigEnvironment['default'].podModulePrefix,
    Resolver: _imdanwaltonResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _imdanwaltonConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('imdanwalton/components/amp-sidebar', ['exports', 'ember-cli-amp/components/amp-sidebar'], function (exports, _emberCliAmpComponentsAmpSidebar) {
  exports['default'] = _emberCliAmpComponentsAmpSidebar['default'];
});
define('imdanwalton/components/head-content', ['exports', 'ember', 'imdanwalton/templates/head'], function (exports, _ember, _imdanwaltonTemplatesHead) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: '',
    model: _ember['default'].inject.service('head-data'),
    layout: _imdanwaltonTemplatesHead['default']
  });
});
define('imdanwalton/components/head-layout', ['exports', 'ember', 'ember-cli-head/templates/components/head-layout'], function (exports, _ember, _emberCliHeadTemplatesComponentsHeadLayout) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: '',
    layout: _emberCliHeadTemplatesComponentsHeadLayout['default']
  });
});
define('imdanwalton/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _emberWelcomePageComponentsWelcomePage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWelcomePageComponentsWelcomePage['default'];
    }
  });
});
define('imdanwalton/helpers/amp-extension', ['exports', 'ember-cli-amp/helpers/amp-extension'], function (exports, _emberCliAmpHelpersAmpExtension) {
  exports['default'] = _emberCliAmpHelpersAmpExtension['default'];
});
define('imdanwalton/helpers/app-version', ['exports', 'ember', 'imdanwalton/config/environment'], function (exports, _ember, _imdanwaltonConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _imdanwaltonConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('imdanwalton/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('imdanwalton/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('imdanwalton/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'imdanwalton/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _imdanwaltonConfigEnvironment) {
  var _config$APP = _imdanwaltonConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('imdanwalton/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('imdanwalton/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('imdanwalton/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('imdanwalton/initializers/export-application-global', ['exports', 'ember', 'imdanwalton/config/environment'], function (exports, _ember, _imdanwaltonConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_imdanwaltonConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _imdanwaltonConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_imdanwaltonConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('imdanwalton/initializers/fastboot/ajax', ['exports', 'ember'], function (exports, _ember) {
  var get = _ember['default'].get;

  var nodeAjax = function nodeAjax(options) {
    var httpRegex = /^https?:\/\//;
    var protocolRelativeRegex = /^\/\//;
    var protocol = get(this, 'fastboot.request.protocol') + ':';

    if (protocolRelativeRegex.test(options.url)) {
      options.url = protocol + options.url;
    } else if (!httpRegex.test(options.url)) {
      try {
        options.url = protocol + '//' + get(this, 'fastboot.request.host') + options.url;
      } catch (fbError) {
        throw new Error('You are using Ember Data with no host defined in your adapter. This will attempt to use the host of the FastBoot request, which is not configured for the current host of this request. Please set the hostWhitelist property for in your environment.js. FastBoot Error: ' + fbError.message);
      }
    }

    if (najax) {
      najax(options);
    } else {
      throw new Error('najax does not seem to be defined in your app. Did you override it via `addOrOverrideSandboxGlobals` in the fastboot server?');
    }
  };

  exports['default'] = {
    name: 'ajax-service',

    initialize: function initialize(application) {
      application.register('ajax:node', nodeAjax, { instantiate: false });
      application.inject('adapter', '_ajaxRequest', 'ajax:node');
      application.inject('adapter', 'fastboot', 'service:fastboot');
    }
  };
});
/* globals najax */
define('imdanwalton/initializers/fastboot/error-handler', ['exports', 'ember'], function (exports, _ember) {

  /**
   * Initializer to attach an `onError` hook to your app running in fastboot. It catches any run loop
   * exceptions and other errors and prevents the node process from crashing.
   *
   */
  exports['default'] = {
    name: 'error-handler',

    initialize: function initialize(application) {
      if (!_ember['default'].onerror) {
        // if no onerror handler is defined, define one for fastboot environments
        _ember['default'].onerror = function (err) {
          var errorMessage = 'There was an error running your app in fastboot. More info about the error: \n ' + (err.stack || err);
          _ember['default'].Logger.error(errorMessage);
        };
      }
    }
  };
});
define('imdanwalton/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('imdanwalton/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('imdanwalton/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("imdanwalton/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('imdanwalton/instance-initializers/fastboot/head', ['exports'], function (exports) {
  exports.initialize = initialize;

  function initialize(owner) {
    var document = owner.lookup('service:-document');
    var component = owner.lookup('component:head-layout');

    component.appendTo(document.head);
  }

  exports['default'] = {
    name: 'head-fastboot',
    initialize: initialize
  };
});
define('imdanwalton/locations/none', ['exports', 'ember'], function (exports, _ember) {
  var computed = _ember['default'].computed;
  var _Ember$computed = _ember['default'].computed;
  var bool = _Ember$computed.bool;
  var readOnly = _Ember$computed.readOnly;
  var service = _ember['default'].inject.service;
  var get = _ember['default'].get;
  var getOwner = _ember['default'].getOwner;

  var TEMPORARY_REDIRECT_CODE = 307;

  exports['default'] = _ember['default'].NoneLocation.extend({
    implementation: 'fastboot',
    fastboot: service(),

    _config: computed(function () {
      return getOwner(this).resolveRegistration('config:environment');
    }),

    _fastbootHeadersEnabled: bool('_config.fastboot.fastbootHeaders'),

    _redirectCode: computed(function () {
      return get(this, '_config.fastboot.redirectCode') || TEMPORARY_REDIRECT_CODE;
    }),

    _response: readOnly('fastboot.response'),
    _request: readOnly('fastboot.request'),

    _normalizePath: function _normalizePath(path, isInitialPath) {
      if (!isInitialPath) {
        // only on redirects (transitionTo, replaceWith, etc...)
        // incoming path does not include rootURL
        var rootURL = get(this, 'rootURL');
        rootURL = rootURL.substr(0, rootURL.length - 1);
        path = '' + rootURL + path;
      }
      return path;
    },

    setURL: function setURL(path) {
      if (get(this, 'fastboot.isFastBoot')) {
        var currentPath = get(this, 'path');
        var isInitialPath = !currentPath || currentPath.length === 0;
        path = this._normalizePath(path, isInitialPath);
        var isTransitioning = currentPath !== path;
        var response = get(this, '_response');

        if (isTransitioning && !isInitialPath) {
          var protocol = get(this, '_request.protocol');
          var host = get(this, '_request.host');
          var redirectURL = protocol + '://' + host + path;

          response.statusCode = this.get('_redirectCode');
          response.headers.set('location', redirectURL);
        }

        // for testing and debugging
        if (get(this, '_fastbootHeadersEnabled')) {
          response.headers.set('x-fastboot-path', path);
        }
      }

      this._super.apply(this, arguments);
    }
  });
});
define('imdanwalton/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('imdanwalton/router', ['exports', 'ember', 'imdanwalton/config/environment'], function (exports, _ember, _imdanwaltonConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _imdanwaltonConfigEnvironment['default'].locationType,
    rootURL: _imdanwaltonConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('page-not-found', { path: '/*path' });
    this.route('blog');
    this.route('amp');
  });

  exports['default'] = Router;
});
define('imdanwalton/routes/amp', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('imdanwalton/routes/blog', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('imdanwalton/routes/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('imdanwalton/routes/page-not-found', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('imdanwalton/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('imdanwalton/services/amp', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Service.extend({});
});
define('imdanwalton/services/fastboot', ['exports', 'ember'], function (exports, _ember) {
  var deprecate = _ember['default'].deprecate;
  var computed = _ember['default'].computed;
  var get = _ember['default'].get;
  var deprecatingAlias = computed.deprecatingAlias;
  var readOnly = computed.readOnly;

  var RequestObject = _ember['default'].Object.extend({
    init: function init() {
      this._super.apply(this, arguments);

      var request = this.request;
      delete this.request;

      this.cookies = request.cookies;
      this.headers = request.headers;
      this.queryParams = request.queryParams;
      this.path = request.path;
      this.protocol = request.protocol;
      this._host = function () {
        return request.host();
      };
    },

    host: computed(function () {
      return this._host();
    })
  });

  var Shoebox = _ember['default'].Object.extend({
    put: function put(key, value) {
      _ember['default'].assert('shoebox.put is only invoked from the FastBoot rendered application', this.get('fastboot.isFastBoot'));
      _ember['default'].assert('the provided key is a string', typeof key === 'string');

      var fastbootInfo = this.get('fastboot._fastbootInfo');
      if (!fastbootInfo.shoebox) {
        fastbootInfo.shoebox = {};
      }

      fastbootInfo.shoebox[key] = value;
    },

    retrieve: function retrieve(key) {
      if (this.get('fastboot.isFastBoot')) {
        var shoebox = this.get('fastboot._fastbootInfo.shoebox');
        if (!shoebox) {
          return;
        }

        return shoebox[key];
      }

      var shoeboxItem = this.get(key);
      if (shoeboxItem) {
        return shoeboxItem;
      }

      var el = document.querySelector('#shoebox-' + key);
      if (!el) {
        return;
      }
      var valueString = el.textContent;
      if (!valueString) {
        return;
      }

      shoeboxItem = JSON.parse(valueString);
      this.set(key, shoeboxItem);

      return shoeboxItem;
    }
  });

  var FastBootService = _ember['default'].Service.extend({
    cookies: deprecatingAlias('request.cookies', { id: 'fastboot.cookies-to-request', until: '0.9.9' }),
    headers: deprecatingAlias('request.headers', { id: 'fastboot.headers-to-request', until: '0.9.9' }),

    init: function init() {
      this._super.apply(this, arguments);

      var shoebox = Shoebox.create({ fastboot: this });
      this.set('shoebox', shoebox);
    },

    host: computed(function () {
      deprecate('Usage of fastboot service\'s `host` property is deprecated.  Please use `request.host` instead.', false, { id: 'fastboot.host-to-request', until: '0.9.9' });

      return this._fastbootInfo.request.host();
    }),

    response: readOnly('_fastbootInfo.response'),
    metadata: readOnly('_fastbootInfo.metadata'),

    request: computed(function () {
      if (!this.isFastBoot) return null;
      return RequestObject.create({ request: get(this, '_fastbootInfo.request') });
    }),

    deferRendering: function deferRendering(promise) {
      _ember['default'].assert('deferRendering requires a promise or thennable object', typeof promise.then === 'function');
      this._fastbootInfo.deferRendering(promise);
    }
  });

  Object.defineProperty(FastBootService.proto(), 'isFastBoot', {
    writable: false,
    enumerable: true,
    value: typeof FastBoot !== 'undefined'
  });

  exports['default'] = FastBootService;
});
/* global FastBoot */
define('imdanwalton/services/head-data', ['exports', 'ember-cli-head/services/head-data'], function (exports, _emberCliHeadServicesHeadData) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliHeadServicesHeadData['default'];
    }
  });
});
define("imdanwalton/templates/amp", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "nrNbXWJL", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\\n\\nTHIS IS THE AMP ROUTE\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "imdanwalton/templates/amp.hbs" } });
});
define("imdanwalton/templates/amp/-head", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "al12/P6R", "block": "{\"statements\":[[\"open-element\",\"title\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"model\",\"title\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"link\",[]],[\"static-attr\",\"rel\",\"canonical\"],[\"dynamic-attr\",\"href\",[\"concat\",[[\"unknown\",[\"model\",\"canonicalUrl\"]]]]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\",\"ampExtensions\"]]],null,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"append\",[\"helper\",[\"amp-extension\"],[[\"get\",[\"ampExt\"]]],null],false],[\"text\",\"\\n\"]],\"locals\":[\"ampExt\"]}],\"hasPartials\":false}", "meta": { "moduleName": "imdanwalton/templates/amp/-head.hbs" } });
});
define("imdanwalton/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "rUKzDxrB", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "imdanwalton/templates/application.hbs" } });
});
define("imdanwalton/templates/blog", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "29zT6DBl", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "imdanwalton/templates/blog.hbs" } });
});
define("imdanwalton/templates/head", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "9s7ugf7S", "block": "{\"statements\":[[\"text\",\"\\n\"],[\"partial\",\"amp/-head\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":true}", "meta": { "moduleName": "imdanwalton/templates/head.hbs" } });
});
define("imdanwalton/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "uUQIw5aM", "block": "{\"statements\":[[\"text\",\"\\n\"],[\"open-element\",\"section\",[]],[\"static-attr\",\"id\",\"coming-soon\"],[\"static-attr\",\"class\",\"gradient\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"comment\",\" <h1>Hi! I'm Daniel</h1> \"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Something fancy is being built behind this gradient..\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"hr\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "imdanwalton/templates/index.hbs" } });
});
define("imdanwalton/templates/page-not-found", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "iR88Pcop", "block": "{\"statements\":[[\"open-element\",\"section\",[]],[\"static-attr\",\"id\",\"coming-soon\"],[\"static-attr\",\"class\",\"gradient\"],[\"flush-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Nope! There's nothing here yet.\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"hr\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "imdanwalton/templates/page-not-found.hbs" } });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('imdanwalton/config/environment', ['ember'], function(Ember) {
  return FastBoot.config();
});

/* jshint ignore:end */

/* jshint ignore:start */


define('~fastboot/app-factory', ['imdanwalton/app', 'imdanwalton/config/environment'], function(App, config) {
  App = App['default'];
  config = config['default'];

  return {
    'default': function() {
      return App.create(config.APP);
    }
  };
});


/* jshint ignore:end */
//# sourceMappingURL=imdanwalton.map
