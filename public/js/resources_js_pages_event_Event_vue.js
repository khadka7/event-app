"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_event_Event_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/event/Event.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/event/Event.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/constants */ "./resources/js/utils/constants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var filterData = {
  title: "",
  event_type: ""
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Event",
  data: function data() {
    return {
      rows: [],
      filters: _objectSpread({}, filterData),
      eventTypes: _utils_constants__WEBPACK_IMPORTED_MODULE_0__.eventTypes
    };
  },
  methods: {
    deleteEvent: function deleteEvent(id) {
      var _this = this;
      if (confirm('Do you want to delete this event?')) {
        var url = this.$api.EVENT_DELETE.replace(":id", id);
        axios["delete"](url).then(function (res) {
          alert(res.data.message);
          _this.getEvents();
        })["catch"](function (err) {
          alert('Something went wrong!');
        });
      }
    },
    resetFilter: function resetFilter() {
      this.filters = _objectSpread({}, filterData);
      this.getEvents();
    },
    filterEvent: function filterEvent() {
      this.getEvents(this.filters);
    },
    encodeUrl: function encodeUrl(obj) {
      return Object.keys(obj).map(function (key) {
        return encodeURIComponent(key) + "=" + encodeURIComponent(obj[key] ? obj[key] : '');
      }).join("&");
    },
    getEvents: function getEvents() {
      var _this2 = this;
      var filterData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var url;
      url = this.$api.EVENT_LIST;
      if (filterData) {
        var filterUrl = this.encodeUrl(filterData);
        url = "".concat(url, "?").concat(filterUrl);
      }
      console.log(url);
      axios.get(url).then(function (res) {
        _this2.rows = res.data.data;
      })["catch"](function () {
        _this2.rows = [];
        console.log('here');
      });
    }
  },
  mounted: function mounted() {
    this.getEvents();
  }
});

/***/ }),

/***/ "./resources/js/utils/constants.js":
/*!*****************************************!*\
  !*** ./resources/js/utils/constants.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "eventTypes": () => (/* binding */ eventTypes)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  /**Events */
  EVENT_LIST: "/api/events",
  EVENT_CREATE: "/api/events",
  EVENT_FIND: "/api/events/:id",
  EVENT_UPDATE: "/api/events/:id",
  EVENT_DELETE: "/api/events/:id"
});
var eventTypes = [{
  value: 'upcoming_event',
  text: 'Upcoming Event'
}, {
  value: 'finished_event',
  text: 'Finished Event'
}, {
  value: 'upcoming_seven_day_event',
  text: 'Upcoming Seven Days Event'
}, {
  value: 'finished_last_seven_day_event',
  text: 'Finished Last Seven Days Event'
}];

/***/ }),

/***/ "./resources/js/pages/event/Event.vue":
/*!********************************************!*\
  !*** ./resources/js/pages/event/Event.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Event_vue_vue_type_template_id_495c7528_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Event.vue?vue&type=template&id=495c7528&scoped=true& */ "./resources/js/pages/event/Event.vue?vue&type=template&id=495c7528&scoped=true&");
/* harmony import */ var _Event_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Event.vue?vue&type=script&lang=js& */ "./resources/js/pages/event/Event.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Event_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Event_vue_vue_type_template_id_495c7528_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Event_vue_vue_type_template_id_495c7528_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "495c7528",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/event/Event.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/event/Event.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/event/Event.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Event_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Event.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/event/Event.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Event_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/event/Event.vue?vue&type=template&id=495c7528&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/pages/event/Event.vue?vue&type=template&id=495c7528&scoped=true& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Event_vue_vue_type_template_id_495c7528_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Event_vue_vue_type_template_id_495c7528_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Event_vue_vue_type_template_id_495c7528_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Event.vue?vue&type=template&id=495c7528&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/event/Event.vue?vue&type=template&id=495c7528&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/event/Event.vue?vue&type=template&id=495c7528&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/event/Event.vue?vue&type=template&id=495c7528&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row align-items-center" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-3 pull-right" }, [
          _c(
            "button",
            { staticClass: "btn btn-primary", attrs: { type: "button" } },
            [
              _c("router-link", { attrs: { to: { name: "AddEvent" } } }, [
                _vm._v("Add New"),
              ]),
            ],
            1
          ),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-12" }, [
      _c(
        "form",
        {
          on: {
            submit: function ($event) {
              $event.preventDefault()
              return _vm.filterEvent.apply(null, arguments)
            },
          },
        },
        [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-4 pull-right" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.filters.title,
                      expression: "filters.title",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", placeholder: "Title" },
                  domProps: { value: _vm.filters.title },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.filters, "title", $event.target.value)
                    },
                  },
                }),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-4 pull-right" }, [
              _c("div", { staticClass: "form-group" }, [
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.filters.event_type,
                        expression: "filters.event_type",
                      },
                    ],
                    staticClass: "form-control",
                    on: {
                      change: function ($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function (o) {
                            return o.selected
                          })
                          .map(function (o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.filters,
                          "event_type",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      },
                    },
                  },
                  [
                    _c("option", { attrs: { value: "", disabled: "" } }, [
                      _vm._v("Select Type"),
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.eventTypes, function (option) {
                      return _c(
                        "option",
                        { domProps: { value: option.value } },
                        [
                          _vm._v(
                            "\n                                " +
                              _vm._s(option.text) +
                              "\n                            "
                          ),
                        ]
                      )
                    }),
                  ],
                  2
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-4 pull-right" }, [
              _c(
                "button",
                { staticClass: "btn btn-primary", attrs: { type: "submit" } },
                [_vm._v("Filter")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-warning",
                  on: { click: _vm.resetFilter },
                },
                [_vm._v("Reset")]
              ),
            ]),
          ]),
        ]
      ),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-12" }, [
        _c("div", {}, [
          _c("div", { staticClass: "table-responsive" }, [
            _c(
              "table",
              {
                staticClass:
                  "table project-list-table table-nowrap align-middle table-borderless",
              },
              [
                _vm._m(1),
                _vm._v(" "),
                _c(
                  "tbody",
                  [
                    !_vm.rows || _vm.rows.length < 1
                      ? _c("tr", [
                          _c(
                            "td",
                            { attrs: { colspan: "6", align: "center" } },
                            [_vm._v("No records found.")]
                          ),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm._l(_vm.rows, function (row, index) {
                      return _c("tr", [
                        _c("td", [_vm._v(_vm._s(index + 1))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(row.title))]),
                        _vm._v(" "),
                        _c("td", [
                          _c("p", { staticClass: "text-wrap" }, [
                            _vm._v(
                              "\n                                    " +
                                _vm._s(row.description) +
                                "\n                                "
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(row.start_date))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(row.end_date))]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-secondary",
                              attrs: { type: "button" },
                            },
                            [
                              _c(
                                "router-link",
                                {
                                  attrs: {
                                    to: {
                                      name: "EditEvent",
                                      params: { id: row.id },
                                    },
                                  },
                                },
                                [
                                  _vm._v(
                                    "Edit\n                                    "
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-danger",
                              attrs: { type: "button" },
                              on: {
                                click: function ($event) {
                                  return _vm.deleteEvent(row.id)
                                },
                              },
                            },
                            [_vm._v("Delete")]
                          ),
                        ]),
                      ])
                    }),
                  ],
                  2
                ),
              ]
            ),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-6" }, [
      _c("h5", { staticClass: "card-title" }, [_vm._v("Event List")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { width: "10%" } }, [_vm._v("SN")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "10%" } }, [_vm._v("Title")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "30%" } }, [_vm._v("Description")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "20%" } }, [_vm._v("Start Date")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "20%" } }, [_vm._v("End Date")]),
        _vm._v(" "),
        _c("th", { attrs: { width: "10%" } }, [_vm._v("Action")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);