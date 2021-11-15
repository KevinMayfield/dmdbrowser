(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Development\Wildfyre\medicinalproduct\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "94/Q":
    /*!******************************************************************!*\
      !*** ./src/app/medication-render/medication-render.component.ts ***!
      \******************************************************************/

    /*! exports provided: MedicationRenderComponent */

    /***/
    function Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MedicationRenderComponent", function () {
        return MedicationRenderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _covalent_core_expansion_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @covalent/core/expansion-panel */
      "/Qx0");
      /* harmony import */


      var _covalent_core_json_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @covalent/core/json-formatter */
      "t6n5");

      var MedicationRenderComponent = /*#__PURE__*/function () {
        function MedicationRenderComponent() {
          _classCallCheck(this, MedicationRenderComponent);

          this.editorLanguage = 'json';
        }

        _createClass(MedicationRenderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MedicationRenderComponent;
      }();

      MedicationRenderComponent.ɵfac = function MedicationRenderComponent_Factory(t) {
        return new (t || MedicationRenderComponent)();
      };

      MedicationRenderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MedicationRenderComponent,
        selectors: [["app-medication-render"]],
        inputs: {
          medication: "medication",
          codeableConcept: "codeableConcept"
        },
        decls: 7,
        vars: 4,
        consts: [["fxLayout", "", "fxLayout.xs", "column", "fxLayoutAlign", "center", "fxLayoutGap", "10px", "fxLayoutGap.xs", "0", 1, "mat-card-content"], ["fxFlex", "50%", 1, "mat-body-1"], ["label", "FHIR Medication"], [3, "data", "levelsOpen"], ["label", "FHIR Codeable Concept"]],
        template: function MedicationRenderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td-expansion-panel", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "td-json-formatter", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td-expansion-panel", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "td-json-formatter", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.medication)("levelsOpen", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.codeableConcept)("levelsOpen", 4);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _covalent_core_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TdExpansionPanelComponent"], _covalent_core_json_formatter__WEBPACK_IMPORTED_MODULE_3__["TdJsonFormatterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lZGljYXRpb24tcmVuZGVyL21lZGljYXRpb24tcmVuZGVyLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MedicationRenderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-medication-render',
            templateUrl: './medication-render.component.html',
            styleUrls: ['./medication-render.component.scss']
          }]
        }], function () {
          return [];
        }, {
          medication: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          codeableConcept: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });

      var environment = {
        apiBaseUrl: 'undefined',
        apiUrl: 'undefined',
        appName: 'undefined',
        awsPubKey: 'undefined',
        nodeEnv: 'undefined',
        production: true,
        config: {
          baseUrl: 'https://ontology.nhs.uk/authoring/fhir',
          ontoClientId: 'NHSD_Kevin_Mayfield',
          ontoClientSecret: '60cced26-e8d6-434e-bfcf-c9c6cc6074fc'
        }
      };
      /***/
    },

    /***/
    "DDA4":
    /*!************************************************************!*\
      !*** ./src/app/product-render/product-render.component.ts ***!
      \************************************************************/

    /*! exports provided: ProductRenderComponent */

    /***/
    function DDA4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductRenderComponent", function () {
        return ProductRenderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _covalent_core_expansion_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @covalent/core/expansion-panel */
      "/Qx0");
      /* harmony import */


      var _covalent_core_json_formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @covalent/core/json-formatter */
      "t6n5");

      function ProductRenderComponent_span_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td-expansion-panel", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "td-json-formatter", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r0.pharmaceuticalProduct)("levelsOpen", 8);
        }
      }

      function ProductRenderComponent_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td-expansion-panel", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "td-json-formatter", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r1.medicationProduct)("levelsOpen", 8);
        }
      }

      var ProductRenderComponent = /*#__PURE__*/function () {
        function ProductRenderComponent() {
          _classCallCheck(this, ProductRenderComponent);
        }

        _createClass(ProductRenderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProductRenderComponent;
      }();

      ProductRenderComponent.ɵfac = function ProductRenderComponent_Factory(t) {
        return new (t || ProductRenderComponent)();
      };

      ProductRenderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProductRenderComponent,
        selectors: [["app-product-render"]],
        inputs: {
          product: "product",
          pharmaceuticalProduct: "pharmaceuticalProduct",
          medicationProduct: "medicationProduct"
        },
        decls: 5,
        vars: 4,
        consts: [[4, "ngIf"], ["label", "Terminology Server $lookup", "sublabel", "modfied"], [1, "md-padding"], [3, "data", "levelsOpen"], ["label", "FHIR MedicinalProductPharmaceutical", "sublabel", "Experimental"], ["label", "FHIR MedicinalProduct", "sublabel", "Experimental"]],
        template: function ProductRenderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductRenderComponent_span_0_Template, 5, 2, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductRenderComponent_span_1_Template, 5, 2, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td-expansion-panel", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "td-json-formatter", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pharmaceuticalProduct);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.medicationProduct);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.product)("levelsOpen", 8);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _covalent_core_expansion_panel__WEBPACK_IMPORTED_MODULE_2__["TdExpansionPanelComponent"], _covalent_core_json_formatter__WEBPACK_IMPORTED_MODULE_3__["TdJsonFormatterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtcmVuZGVyL3Byb2R1Y3QtcmVuZGVyLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductRenderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-product-render',
            templateUrl: './product-render.component.html',
            styleUrls: ['./product-render.component.scss']
          }]
        }], function () {
          return [];
        }, {
          product: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          pharmaceuticalProduct: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          medicationProduct: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "OWb/":
    /*!****************************************!*\
      !*** ./src/app/body/body.component.ts ***!
      \****************************************/

    /*! exports provided: CodeElement, BodyComponent */

    /***/
    function OWb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CodeElement", function () {
        return CodeElement;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BodyComponent", function () {
        return BodyComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _medication_data_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../medication-data-source */
      "b7jd");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _terminology_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../terminology.service */
      "lvCl");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _covalent_core_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @covalent/core/layout */
      "YGdM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _covalent_core_loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @covalent/core/loading */
      "dZyu");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _medication_render_medication_render_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../medication-render/medication-render.component */
      "94/Q");
      /* harmony import */


      var _product_render_product_render_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../product-render/product-render.component */
      "DDA4");
      /* harmony import */


      var _covalent_core_message__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @covalent/core/message */
      "cM7e");
      /* harmony import */


      var _covalent_core_expansion_panel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @covalent/core/expansion-panel */
      "/Qx0");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      function BodyComponent_th_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Display");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function BodyComponent_td_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BodyComponent_td_7_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var medication_r8 = ctx.$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.select(medication_r8);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var medication_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", "SNOMED CT - " + medication_r8.code);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](medication_r8.display);
        }
      }

      function BodyComponent_tr_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 11);
        }
      }

      function BodyComponent_th_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Display");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function BodyComponent_td_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BodyComponent_td_14_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var medication_r12 = ctx.$implicit;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.select(medication_r12);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var medication_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", "SNOMED CT - " + medication_r12.code);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](medication_r12.display);
        }
      }

      function BodyComponent_tr_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 11);
        }
      }

      function BodyComponent_span_16_th_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Display ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function BodyComponent_span_16_td_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BodyComponent_span_16_td_6_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var medication_r19 = ctx.$implicit;

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r20.select(medication_r19);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var medication_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", "SNOMED CT - " + medication_r19.code);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](medication_r19.display);
        }
      }

      function BodyComponent_span_16_tr_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 11);
        }
      }

      function BodyComponent_span_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "AMP Medication");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BodyComponent_span_16_th_5_Template, 2, 0, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BodyComponent_span_16_td_6_Template, 3, 2, "td", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BodyComponent_span_16_tr_7_Template, 1, 0, "tr", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r6.ampDataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r6.childDisplayedColumns);
        }
      }

      function BodyComponent_ng_template_18_h3_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r23.medication.code.coding[0].display);
        }
      }

      function BodyComponent_ng_template_18_div_4_td_message_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td-message", 17);
        }

        if (rf & 2) {
          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx_r28.medicinal.legalStatusOfSupply.coding[0].display);
        }
      }

      function BodyComponent_ng_template_18_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BodyComponent_ng_template_18_div_4_td_message_1_Template, 1, 1, "td-message", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.medicinal.legalStatusOfSupply != undefined && ctx_r24.medicinal.legalStatusOfSupply.coding != undefined);
        }
      }

      function BodyComponent_ng_template_18_div_5_td_message_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td-message", 19);
        }

        if (rf & 2) {
          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx_r29.medicinal.type.coding[0].display);
        }
      }

      function BodyComponent_ng_template_18_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BodyComponent_ng_template_18_div_5_td_message_1_Template, 1, 1, "td-message", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r25.medicinal.type);
        }
      }

      function BodyComponent_ng_template_18_div_6_td_message_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td-message", 21);
        }

        if (rf & 2) {
          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx_r30.medicinal.additionalMonitoringIndicator.coding[0].display);
        }
      }

      function BodyComponent_ng_template_18_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BodyComponent_ng_template_18_div_6_td_message_1_Template, 1, 1, "td-message", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r26.medicinal.additionalMonitoringIndicator);
        }
      }

      function BodyComponent_ng_template_18_span_7_span_5_mat_list_item_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Classification");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var clss_r35 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", clss_r35.coding[0].display, "");
        }
      }

      function BodyComponent_ng_template_18_span_7_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BodyComponent_ng_template_18_span_7_span_5_mat_list_item_2_Template, 5, 1, "mat-list-item", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r31.medicinal.productClassification);
        }
      }

      function BodyComponent_ng_template_18_span_7_span_7_mat_list_item_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dose Form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r36.medicinal.combinedPharmaceuticalDoseForm.coding[0].display, " ");
        }
      }

      function BodyComponent_ng_template_18_span_7_span_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BodyComponent_ng_template_18_span_7_span_7_mat_list_item_2_Template, 5, 1, "mat-list-item", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r32.medicinal.combinedPharmaceuticalDoseForm);
        }
      }

      function BodyComponent_ng_template_18_span_7_span_8_mat_list_item_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Route");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r37.productPharm.routeOfAdministration[0].code.coding[0].display, "");
        }
      }

      function BodyComponent_ng_template_18_span_7_span_8_mat_list_item_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Ingredient");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ingredient_r40 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ingredient_r40.display);
        }
      }

      function BodyComponent_ng_template_18_span_7_span_8_mat_list_item_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var note_r41 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", note_r41, " ");
        }
      }

      function BodyComponent_ng_template_18_span_7_span_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BodyComponent_ng_template_18_span_7_span_8_mat_list_item_2_Template, 5, 1, "mat-list-item", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BodyComponent_ng_template_18_span_7_span_8_mat_list_item_3_Template, 5, 1, "mat-list-item", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BodyComponent_ng_template_18_span_7_span_8_mat_list_item_4_Template, 2, 1, "mat-list-item", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r33.productPharm.routeOfAdministration);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r33.productPharm.ingredient);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r33.notes);
        }
      }

      function BodyComponent_ng_template_18_span_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td-expansion-panel", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BodyComponent_ng_template_18_span_7_span_5_Template, 3, 1, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BodyComponent_ng_template_18_span_7_span_7_Template, 3, 1, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BodyComponent_ng_template_18_span_7_span_8_Template, 5, 3, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r27.medicinal);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r27.medicinal);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r27.productPharm);
        }
      }

      function BodyComponent_ng_template_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BodyComponent_ng_template_18_h3_3_Template, 2, 1, "h3", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BodyComponent_ng_template_18_div_4_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BodyComponent_ng_template_18_div_5_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BodyComponent_ng_template_18_div_6_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BodyComponent_ng_template_18_span_7_Template, 9, 3, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-medication-render", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-product-render", 15);
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.medication);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.medicinal);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.medicinal);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.medicinal);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.medication);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("codeableConcept", ctx_r7.codeableConcept)("medication", ctx_r7.medication);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("medicationProduct", ctx_r7.medicinal)("pharmaceuticalProduct", ctx_r7.productPharm)("product", ctx_r7.productDisplay);
        }
      }

      var CodeElement = function CodeElement() {
        _classCallCheck(this, CodeElement);
      };

      var BodyComponent = /*#__PURE__*/function () {
        function BodyComponent(terminologyService, router, route) {
          _classCallCheck(this, BodyComponent);

          this.terminologyService = terminologyService;
          this.router = router;
          this.route = route;
          this.loading = false;
          this.allCompleted = 0;
          this.notes = [];
          this.queryCnt = 0;
          this.conceptid = undefined;
          this.display = undefined;
          this.scheduled = undefined;
          this.productPharm = undefined;
          this.pharmaceuticalProduct = {
            resourceType: 'MedicinalProductPharmaceutical',
            administrableDoseForm: {},
            ingredient: [],
            routeOfAdministration: []
          };
          this.medicinalProduct = undefined;
          this.medicinal = undefined;
          this.parentCodes = [];
          this.ampCodes = [];
          this.medication = undefined;
          this.workerMedication = undefined;
          this.codeableConcept = undefined;
          this.product = undefined;
          this.productDisplay = undefined; //medicationProduct : IMedicinalProduct = undefined;

          this.parentExpand = undefined;
          this.childExpand = undefined;
          this.childDisplayedColumns = ['display'];
          this.parentDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
          this.ampDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        }

        _createClass(BodyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.doSetup();
            this.route.url.subscribe(function (url) {
              _this.doSetup();
            });
          }
        }, {
          key: "doSetup",
          value: function doSetup() {
            var tempid = this.route.snapshot.paramMap.get('conceptid');

            if (this.conceptid !== tempid) {
              this.conceptid = tempid;

              if (this.conceptid != undefined) {
                this.setup(this.conceptid);
              }
            }
          }
        }, {
          key: "select",
          value: function select(medication) {
            this.router.navigate([medication.code]);
          }
        }, {
          key: "clear",
          value: function clear() {
            this.notes = [];
            this.ampCodes = [];
            this.workerMedication = {
              code: {}
            };
            this.productPharm = undefined;
            this.pharmaceuticalProduct = {
              resourceType: 'MedicinalProductPharmaceutical',
              administrableDoseForm: {},
              ingredient: [],
              routeOfAdministration: []
            };
            this.medicinal = undefined;
            this.medicinalProduct = {
              resourceType: 'MedicinalProduct',
              identifier: [],
              name: [],
              productClassification: [],
              legalStatusOfSupply: {}
            };
            this.parentCodes = [];
            this.ampCodes = [];
            this.ampDataSource.data = this.ampCodes;
            this.scheduled = undefined;
            this.codeableConcept = {};
            this.codeableConcept.coding = [this.getCoding()];
            this.queryCnt = 0;
          }
        }, {
          key: "completedQuery",
          value: function completedQuery() {
            this.allCompleted--;

            if (this.allCompleted == 0) {
              // faulty needs to reassign once complete
              this.processProducts(this.product);
              this.loading = false;
            }
          }
        }, {
          key: "setup",
          value: function setup(medication) {
            var _this2 = this;

            this.loading = true;
            this.product = {};
            this.parentExpand = undefined;
            this.childExpand = undefined;
            this.allCompleted = 4; // const url = '/CodeSystem/$lookup?code=' + medication + '&system=http%3A%2F%2Fsnomed.info%2Fsct&version=' + this.terminologyService.getSNOMEDVersion() + '&property=*';

            var url = '/CodeSystem/$lookup?code=' + medication + '&system=http%3A%2F%2Fsnomed.info%2Fsct' + '&property=*';
            this.terminologyService.getResource(url).subscribe(function (result) {
              _this2.product = result;

              _this2.completedQuery();
            });
            var parameters = {
              "resourceType": "Parameters",
              "parameter": [{
                "name": "valueSet",
                "resource": {
                  "resourceType": "ValueSet",
                  "compose": {
                    "include": [{
                      "system": "http://snomed.info/sct",
                      "filter": [{
                        "property": "parent",
                        "op": "=",
                        "value": medication
                      }]
                    }]
                  }
                }
              }, {
                "name": "count",
                "valueInteger": 10000
              }]
            };
            this.terminologyService.post('/ValueSet/$expand?_format=json&elements=expansion.contains.total,expansion.contains.contains', parameters).subscribe(function (result) {
              //this.product = result.parameter;
              var valueSet = result;

              if (valueSet.expansion != undefined) {
                _this2.childDataSource = new _medication_data_source__WEBPACK_IMPORTED_MODULE_1__["MedicationDataSource"](valueSet.expansion.contains);
              }
            }, function (err) {
              return console.error('Observer got an error: ' + err);
            }, function () {
              _this2.completedQuery();
            });
            this.terminologyService.get('/ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=ecl/>!' + medication).subscribe(function (result) {
              _this2.parentExpand = result;
            }, function (err) {
              return console.error('Observer got an error: ' + err);
            }, function () {
              _this2.completedQuery();
            });
            this.terminologyService.get('/ValueSet/$expand?url=http://snomed.info/sct?fhir_vs=ecl/' + medication + '.*').subscribe(function (result) {
              _this2.childExpand = result;
            }, function (err) {
              return console.error('Observer got an error: ' + err);
            }, function () {
              _this2.completedQuery();
            });
          }
        }, {
          key: "getCoding",
          value: function getCoding() {
            return {
              "system": this.codeSystem,
              "code": this.conceptid,
              "display": this.display
            };
          }
        }, {
          key: "processProducts",
          value: function processProducts(parameters) {
            this.clear(); // Don't know name of concept at this point

            var _iterator = _createForOfIteratorHelper(parameters.parameter),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var parameter = _step.value;

                if (parameter.name === 'display') {
                  this.display = parameter.valueString;
                  this.terminologyService.setDrugName(parameter.valueString);
                }

                if (parameter.name === 'system') {
                  this.codeSystem = parameter.valueString;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            this.workerMedication.code.coding = [this.getCoding()];
            this.medication = {
              "code": this.workerMedication.code
            };
            this.codeableConcept = {};
            this.codeableConcept.coding = [this.getCoding()];
            this.pharmaceuticalProduct.identifier = [];
            this.pharmaceuticalProduct.identifier.push({
              "system": this.getCoding().system,
              "value": this.getCoding().code
            });
            this.medicinalProduct.identifier.push({
              "system": this.getCoding().system,
              "value": this.getCoding().code
            });
            this.medicinalProduct.name.push({
              productName: this.getCoding().display
            });
            this.processParameter(parameters.parameter);
          }
        }, {
          key: "processParameter",
          value: function processParameter(params) {
            var manfacturedForm = false;
            var unit = false;
            var unitOfUse = false;
            var ingredient = false;
            var scheduled = false;
            var synonym = false;
            var prescribingStatus = false;
            var amp = false;
            var unavailable = false;
            var discont = false;
            var route = false;
            var classification = false;

            if (params.length > 0 && params[0].name === 'code' && params[0].valueCode != undefined && params[0].valueCode === 'parent') {
              this.getParents(params);
            }

            var _iterator2 = _createForOfIteratorHelper(params),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var parameter = _step2.value;

                // Process parent codes first .... not robust as second call could in theory beat first call
                if (parameter.valueCode != undefined) {
                  this.getDisplay(parameter, manfacturedForm, unit, unitOfUse, ingredient, scheduled, synonym, prescribingStatus, amp, unavailable, discont, route, classification);
                  if (parameter.valueCode == '30523011000036108' || parameter.valueCode == '732947008' || parameter.valueCode == '411116001' || parameter.valueCode == '10362901000001105') manfacturedForm = true;
                  if (parameter.valueCode == '700000081000036101' || parameter.valueCode == '127489000' || parameter.valueCode == '10362801000001104') ingredient = true;
                  if (parameter.valueCode == '177631000036102' || parameter.valueCode == '732945000') unit = true;
                  if (parameter.valueCode == '30548011000036101') unitOfUse = true;
                  if (parameter.valueCode == '13089101000001102') scheduled = true;
                  if (parameter.valueCode == '900000000000013009') synonym = true;
                  if (parameter.valueCode == '8940001000001105') prescribingStatus = true;
                  if (parameter.valueCode == '10362701000001108') amp = true;
                  if (parameter.valueCode == '8940601000001102') unavailable = true;
                  if (parameter.valueCode == '8941901000001101') discont = true;
                  if (parameter.valueCode == '13088401000001104') route = true; // 13088501000001100 dose and route....

                  if (parameter.valueCode == '13088701000001106' || parameter.valueCode == '13088501000001100') classification = true;
                }

                if (parameter.part !== undefined && parameter.part.length > 0) {
                  this.processParameter(parameter.part);
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        }, {
          key: "getDisplay",
          value: function getDisplay(param, manfacturedForm, unit, unitOfUse, ingredient, scheduled, synonym, prescribingStatus, amp, unavailable, discont, route, classification) {
            var _this3 = this;

            if (this.isNumber(param.valueCode)) {
              switch (param.valueCode) {
                case '30450011000036109':
                  // Medicinal Product
                  this.medicinalProduct.productClassification.push(this.getCodeableConcept(param.valueCode, '?? Product Pack'));
                  param.valueCode = '?? Product (' + param.valueCode + ')';
                  break;

                case '10364001000001104':
                  this.medicinalProduct.type = this.getCodeableConcept(param.valueCode, 'Actual medicinal product pack');
                  param.valueCode = 'Actual medicinal product pack (' + param.valueCode + ')';
                  break;

                case '10363801000001108':
                  this.medicinalProduct.type = this.getCodeableConcept(param.valueCode, 'Virtual medicinal product');
                  param.valueCode = 'Virtual medicinal product (' + param.valueCode + ')';
                  break;

                case '30560011000036108':
                  // Trade Product
                  this.medicinalProduct.type = this.getCodeableConcept(param.valueCode, '?? Product Pack');
                  param.valueCode = '?? Product (' + param.valueCode + ')';
                  break;

                case "9191801000001103":
                  this.medicinalProduct.type = this.getCodeableConcept(param.valueCode, 'Trade family');
                  param.valueCode = 'Trade family (' + param.valueCode + ')';
                  break;

                case '10363901000001102':
                  this.medicinalProduct.type = this.getCodeableConcept(param.valueCode, 'Actual medicinal product');
                  param.valueCode = 'Actual medicinal product (' + param.valueCode + ')';
                  break;

                case '30404011000036106':
                case '30425011000036101':
                  // - trade product unit of use
                  this.medicinalProduct.type = this.getCodeableConcept(param.valueCode, '?? Product Pack');
                  param.valueCode = 'trade product pack (' + param.valueCode + ')';
                  break;

                case '8653601000001108':
                  // Virtual medicinal product pack
                  this.medicinalProduct.type = this.getCodeableConcept(param.valueCode, 'Virtual medicinal product pack');
                  param.valueCode = 'Virtual medicinal product pack (' + param.valueCode + ')';
                  break;

                /* AU  case '30497011000036103':
                       this.vtm = true;
                       param.valueCod= 'moiety (30497011000036103)';
                       break; */

                case '10363701000001104':
                  this.medicinalProduct.type = this.getCodeableConcept(param.valueCode, 'Virtual therapeutic moiety');
                  param.valueCode = 'Virtual Therapeutic Moiety (' + param.valueCode + ')';
                  break;

                default:
                  this.queryCnt++;
                  var url = '/CodeSystem/$lookup?code=' + param.valueCode + '&system=http%3A%2F%2Fsnomed.info%2Fsct&property=display';
                  var concept = this.hasCode(param.valueCode);

                  if (concept === undefined) {
                    this.terminologyService.getResource(url).subscribe(function (result) {
                      _this3.processResult(result, param, manfacturedForm, unit, unitOfUse, ingredient, scheduled, synonym, prescribingStatus, amp, unavailable, discont, route, classification);
                    }, function (error) {
                      _this3.updateMaster();
                    }, function () {
                      _this3.updateMaster();
                    });
                  } else {
                    var coding = {};
                    coding = {
                      "system": "http://snomed.info/sct",
                      "code": concept.code,
                      "display": concept.display
                    };
                    this.processEntry(coding, param, manfacturedForm, unit, unitOfUse, ingredient, scheduled, synonym, prescribingStatus, amp, unavailable, discont, route, classification);
                    this.updateMaster();
                  }

              }
            }
          }
        }, {
          key: "processEntry",
          value: function processEntry(coding, param, manfacturedForm, unit, unitOfUse, ingredient, scheduled, synonym, prescribingStatus, amp, unavailable, discont, route, classification) {
            var concept = {
              coding: [coding]
            };

            if (manfacturedForm) {
              this.workerMedication.form = {
                "coding": []
              };
              this.workerMedication.form.coding.push(coding);
              this.medication = {
                "code": this.workerMedication.code,
                "form": this.workerMedication.form
              };
              this.pharmaceuticalProduct.administrableDoseForm = this.workerMedication.form;
              this.medicinalProduct.combinedPharmaceuticalDoseForm = this.workerMedication.form; // Above is not displaying
              //      this.notes.push('Form: '+parameter.valueString)
            } else if (unitOfUse) {
              this.notes.push('Unit Of Use: ' + coding.display);
            } else if (ingredient) {
              this.pharmaceuticalProduct.ingredient.push({
                "identifier": {
                  "system": "http://snomed.info/sct",
                  "value": param.valueCode
                },
                "display": coding.display
              });
            } else if (unit) {
              this.notes.push('Unit: ' + coding.display);
            } else if (scheduled) {
              // this.notes.push('Scheduled: '+parameter.valueString);
              if (!(coding.display.indexOf('No Cont') == 0)) this.medicinalProduct.additionalMonitoringIndicator = concept;
            } else if (synonym) {
              this.medicinalProduct.name.push({
                productName: coding.display
              });
            } else if (prescribingStatus) {
              // this.notes.push('Prescribing Status: '+parameter.valueString);
              this.medicinalProduct.productClassification.push(concept);
            } else if (amp) {
              this.ampCodes.push(coding);
              this.ampDataSource.data = this.ampCodes;
            } else if (unavailable) {
              //  if (!(parameter.valueString.startsWith("Available"))) this.unavailable =parameter.valueString;
              this.medicinalProduct.legalStatusOfSupply = concept;
            } else if (discont) {
              //  this.discontinued= parameter.valueString;
              this.medicinalProduct.legalStatusOfSupply = concept;
            } else if (route) {
              //this.notes.push('Route: '+parameter.valueString);
              this.pharmaceuticalProduct.routeOfAdministration = [];
              this.pharmaceuticalProduct.routeOfAdministration.push({
                code: concept
              });
            } else {
              if (classification) this.medicinalProduct.productClassification.push(concept);
            } // This is a bodge


            delete param.valueCode; // = undefined;
            // This should be the answer

            param.valueCoding = coding;
          }
        }, {
          key: "processResult",
          value: function processResult(result, param, manfacturedForm, unit, unitOfUse, ingredient, scheduled, synonym, prescribingStatus, amp, unavailable, discont, route, classification) {
            var _iterator3 = _createForOfIteratorHelper(result.parameter),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var parameter = _step3.value;

                if (parameter.name === 'display') {
                  var coding = {};
                  coding = {
                    "system": "http://snomed.info/sct",
                    "code": param.valueCode,
                    "display": parameter.valueString
                  };
                  this.processEntry(coding, param, manfacturedForm, unit, unitOfUse, ingredient, scheduled, synonym, prescribingStatus, amp, unavailable, discont, route, classification);
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
        }, {
          key: "hasCode",
          value: function hasCode(concept) {
            if (this.childExpand.expansion != undefined) {
              var _iterator4 = _createForOfIteratorHelper(this.childExpand.expansion.contains),
                  _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var container = _step4.value;

                  if (container.code === concept) {
                    return container;
                  }
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }
            }

            if (this.parentExpand.expansion != undefined) {
              var _iterator5 = _createForOfIteratorHelper(this.parentExpand.expansion.contains),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var _container = _step5.value;

                  if (_container.code === concept) {
                    return _container;
                  }
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
            }

            return undefined;
          }
        }, {
          key: "updateMaster",
          value: function updateMaster() {
            this.queryCnt--;

            if (this.queryCnt == 0) {
              //var clone = Object.assign({}, this.product);
              this.productDisplay = this.product;

              if (this.pharmaceuticalProduct.routeOfAdministration.length > 0) {
                this.productPharm = this.pharmaceuticalProduct;
              }

              if (this.medicinalProduct.name.length > 0) {
                this.medicinal = this.medicinalProduct;
              }
            }
          }
        }, {
          key: "getCodeableConcept",
          value: function getCodeableConcept(code, display) {
            return {
              coding: [{
                "system": "http://snomed.info/sct",
                "code": code,
                "display": display
              }]
            };
          }
        }, {
          key: "getParents",
          value: function getParents(params) {
            var _this4 = this;

            var _iterator6 = _createForOfIteratorHelper(params),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var parameter = _step6.value;

                if (parameter.valueCode != 'parent' && parameter.name === 'value') {
                  var parentCode = parameter.valueCode;

                  switch (parentCode) {
                    case '30450011000036109': // Medicinal Product

                    case '30560011000036108': // Trade Product

                    case '30513011000036104': // medicinal product pack

                    case '30425011000036101': // - trade product unit of use

                    case '30497011000036103':
                    case '30404011000036106':
                    case '10363701000001104': //vtm

                    case "9191801000001103": //trade family

                    case '350295000': // oral form dose

                    case '440131009':
                    case '10364001000001104': // 'ampp'

                    case '8653601000001108':
                    case '10363901000001102':
                      break;

                    default:
                      {
                        var url = '/CodeSystem/$lookup?code=' + parentCode + '&system=http%3A%2F%2Fsnomed.info%2Fsct&property=*';
                        this.terminologyService.getResource(url).subscribe(function (result) {
                          var _iterator7 = _createForOfIteratorHelper(result.parameter),
                              _step7;

                          try {
                            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                              var _parameter = _step7.value;

                              if (_parameter.name === 'display') {
                                _this4.parentCodes.push({
                                  'code': parentCode,
                                  'display': _parameter.valueString
                                });

                                _this4.parentDataSource.data = _this4.parentCodes;
                              }
                            }
                          } catch (err) {
                            _iterator7.e(err);
                          } finally {
                            _iterator7.f();
                          }
                        });
                      }
                  }
                }
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
          }
        }, {
          key: "isNumber",
          value: function isNumber(value) {
            return value != null && value !== '' && !isNaN(Number(value.toString()));
          }
        }]);

        return BodyComponent;
      }();

      BodyComponent.ɵfac = function BodyComponent_Factory(t) {
        return new (t || BodyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_terminology_service__WEBPACK_IMPORTED_MODULE_3__["TerminologyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
      };

      BodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BodyComponent,
        selectors: [["app-body"]],
        decls: 19,
        vars: 9,
        consts: [[1, "layout-demo", 3, "mode", "opened", "sidenavWidth"], ["td-sidenav-content", ""], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "display"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "matTooltip", "click", 4, "matCellDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [4, "ngIf"], ["tdLoading", "", 3, "tdLoadingUntil"], ["mat-header-cell", ""], ["mat-cell", "", 3, "matTooltip", "click"], ["mat-row", ""], [1, "container"], ["fxLayout", "row", "fxLayoutAlign", "space-between", "fxLayoutGap", "40px"], [3, "codeableConcept", "medication"], [3, "medicationProduct", "pharmaceuticalProduct", "product"], ["color", "primary", "icon", "info", "sublabel", "Supply Status", 3, "label", 4, "ngIf"], ["color", "primary", "icon", "info", "sublabel", "Supply Status", 3, "label"], ["color", "primary", "icon", "info", "sublabel", "Type", 3, "label", 4, "ngIf"], ["color", "primary", "icon", "info", "sublabel", "Type", 3, "label"], ["color", "warn", "icon", "warning", "sublabel", "Monitoring Indicator", 3, "label", 4, "ngIf"], ["color", "warn", "icon", "warning", "sublabel", "Monitoring Indicator", 3, "label"], ["label", "Details"], [1, "md-padding"], ["fxLayout", "", "fxLayout.xs", "column", "fxLayoutAlign", "center", "fxLayoutGap.xs", "0"], ["fxFlex", "50%", 1, "mat-body-1"], [4, "ngFor", "ngForOf"], ["matLine", ""], ["mat-line", ""]],
        template: function BodyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td-layout", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Parent Medication");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BodyComponent_th_6_Template, 2, 0, "th", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BodyComponent_td_7_Template, 3, 2, "td", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BodyComponent_tr_8_Template, 1, 0, "tr", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Child Medication");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, BodyComponent_th_13_Template, 2, 0, "th", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, BodyComponent_td_14_Template, 3, 2, "td", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, BodyComponent_tr_15_Template, 1, 0, "tr", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, BodyComponent_span_16_Template, 8, 2, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, BodyComponent_ng_template_18_Template, 11, 10, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "side")("opened", true)("sidenavWidth", "257px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.parentDataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.childDisplayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.childDataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.childDisplayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ampCodes.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tdLoadingUntil", !ctx.loading);
          }
        },
        directives: [_covalent_core_layout__WEBPACK_IMPORTED_MODULE_5__["TdLayoutComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _covalent_core_loading__WEBPACK_IMPORTED_MODULE_8__["TdLoadingDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltip"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardHeader"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutGapDirective"], _medication_render_medication_render_component__WEBPACK_IMPORTED_MODULE_11__["MedicationRenderComponent"], _product_render_product_render_component__WEBPACK_IMPORTED_MODULE_12__["ProductRenderComponent"], _covalent_core_message__WEBPACK_IMPORTED_MODULE_13__["TdMessageComponent"], _covalent_core_expansion_panel__WEBPACK_IMPORTED_MODULE_14__["TdExpansionPanelComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"], _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListItem"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatLine"]],
        styles: [".mat-cell[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS9ib2R5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUFGRiIsImZpbGUiOiJzcmMvYXBwL2JvZHkvYm9keS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbi5tYXQtY2VsbCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiAxMDAlXHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BodyComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-body',
            templateUrl: './body.component.html',
            styleUrls: ['./body.component.scss']
          }]
        }], function () {
          return [{
            type: _terminology_service__WEBPACK_IMPORTED_MODULE_3__["TerminologyService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "OdHV":
    /*!************************************!*\
      !*** ./src/app/message.service.ts ***!
      \************************************/

    /*! exports provided: MessageService */

    /***/
    function OdHV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessageService", function () {
        return MessageService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MessageService = /*#__PURE__*/function () {
        function MessageService() {
          _classCallCheck(this, MessageService);

          this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(MessageService, [{
          key: "addMessage",
          value: function addMessage(message) {
            console.log('bang');
            this.message = message;
            this.messageEvent.emit(message);
          }
        }, {
          key: "getMessageEvent",
          value: function getMessageEvent() {
            return this.messageEvent;
          }
        }]);

        return MessageService;
      }();

      MessageService.ɵfac = function MessageService_Factory(t) {
        return new (t || MessageService)();
      };

      MessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: MessageService,
        factory: MessageService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'graphDefinition';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _covalent_core_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @covalent/core/layout */
      "YGdM");
      /* harmony import */


      var _covalent_core_steps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @covalent/core/steps */
      "N8Dl");
      /* harmony import */


      var _covalent_highlight__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @covalent/highlight */
      "PiqB");
      /* harmony import */


      var _covalent_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @covalent/http */
      "Ojde");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _main_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./main/main.component */
      "wlho");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _body_body_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./body/body.component */
      "OWb/");
      /* harmony import */


      var _covalent_core_search__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @covalent/core/search */
      "Upbb");
      /* harmony import */


      var _covalent_core_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @covalent/core/common */
      "oDrQ");
      /* harmony import */


      var _medication_render_medication_render_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./medication-render/medication-render.component */
      "94/Q");
      /* harmony import */


      var _covalent_core_json_formatter__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @covalent/core/json-formatter */
      "t6n5");
      /* harmony import */


      var _message_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./message.service */
      "OdHV");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _product_render_product_render_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./product-render/product-render.component */
      "DDA4");
      /* harmony import */


      var _covalent_core_message__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @covalent/core/message */
      "cM7e");
      /* harmony import */


      var _covalent_core_expansion_panel__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @covalent/core/expansion-panel */
      "/Qx0");
      /* harmony import */


      var _covalent_core_loading__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @covalent/core/loading */
      "dZyu");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_23__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_message_service__WEBPACK_IMPORTED_MODULE_29__["MessageService"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _covalent_core_layout__WEBPACK_IMPORTED_MODULE_4__["CovalentLayoutModule"], _covalent_core_steps__WEBPACK_IMPORTED_MODULE_5__["CovalentStepsModule"], // (optional) Additional Covalent Modules imports
        _covalent_http__WEBPACK_IMPORTED_MODULE_7__["CovalentHttpModule"].forRoot(), _covalent_highlight__WEBPACK_IMPORTED_MODULE_6__["CovalentHighlightModule"], _covalent_core_json_formatter__WEBPACK_IMPORTED_MODULE_28__["CovalentJsonFormatterModule"], _covalent_core_message__WEBPACK_IMPORTED_MODULE_32__["CovalentMessageModule"], _covalent_core_search__WEBPACK_IMPORTED_MODULE_25__["CovalentSearchModule"], _covalent_core_expansion_panel__WEBPACK_IMPORTED_MODULE_33__["CovalentExpansionPanelModule"], _covalent_core_loading__WEBPACK_IMPORTED_MODULE_34__["CovalentLoadingModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenavModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"], //   MatRadioModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"], //  MatChipsModule,
        //  MatSortModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__["MatChipsModule"], _covalent_core_common__WEBPACK_IMPORTED_MODULE_26__["CovalentCommonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_30__["MatCheckboxModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_23__["AppComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_9__["MainComponent"], _body_body_component__WEBPACK_IMPORTED_MODULE_24__["BodyComponent"], _medication_render_medication_render_component__WEBPACK_IMPORTED_MODULE_27__["MedicationRenderComponent"], _product_render_product_render_component__WEBPACK_IMPORTED_MODULE_31__["ProductRenderComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _covalent_core_layout__WEBPACK_IMPORTED_MODULE_4__["CovalentLayoutModule"], _covalent_core_steps__WEBPACK_IMPORTED_MODULE_5__["CovalentStepsModule"], _covalent_http__WEBPACK_IMPORTED_MODULE_7__["CovalentHttpModule"], _covalent_highlight__WEBPACK_IMPORTED_MODULE_6__["CovalentHighlightModule"], _covalent_core_json_formatter__WEBPACK_IMPORTED_MODULE_28__["CovalentJsonFormatterModule"], _covalent_core_message__WEBPACK_IMPORTED_MODULE_32__["CovalentMessageModule"], _covalent_core_search__WEBPACK_IMPORTED_MODULE_25__["CovalentSearchModule"], _covalent_core_expansion_panel__WEBPACK_IMPORTED_MODULE_33__["CovalentExpansionPanelModule"], _covalent_core_loading__WEBPACK_IMPORTED_MODULE_34__["CovalentLoadingModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenavModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"], //   MatRadioModule,
          _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"], //  MatChipsModule,
          //  MatSortModule,
          _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__["MatChipsModule"], _covalent_core_common__WEBPACK_IMPORTED_MODULE_26__["CovalentCommonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_30__["MatCheckboxModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_23__["AppComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_9__["MainComponent"], _body_body_component__WEBPACK_IMPORTED_MODULE_24__["BodyComponent"], _medication_render_medication_render_component__WEBPACK_IMPORTED_MODULE_27__["MedicationRenderComponent"], _product_render_product_render_component__WEBPACK_IMPORTED_MODULE_31__["ProductRenderComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _covalent_core_layout__WEBPACK_IMPORTED_MODULE_4__["CovalentLayoutModule"], _covalent_core_steps__WEBPACK_IMPORTED_MODULE_5__["CovalentStepsModule"], // (optional) Additional Covalent Modules imports
            _covalent_http__WEBPACK_IMPORTED_MODULE_7__["CovalentHttpModule"].forRoot(), _covalent_highlight__WEBPACK_IMPORTED_MODULE_6__["CovalentHighlightModule"], _covalent_core_json_formatter__WEBPACK_IMPORTED_MODULE_28__["CovalentJsonFormatterModule"], _covalent_core_message__WEBPACK_IMPORTED_MODULE_32__["CovalentMessageModule"], _covalent_core_search__WEBPACK_IMPORTED_MODULE_25__["CovalentSearchModule"], _covalent_core_expansion_panel__WEBPACK_IMPORTED_MODULE_33__["CovalentExpansionPanelModule"], _covalent_core_loading__WEBPACK_IMPORTED_MODULE_34__["CovalentLoadingModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenavModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"], //   MatRadioModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"], //  MatChipsModule,
            //  MatSortModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__["MatChipsModule"], _covalent_core_common__WEBPACK_IMPORTED_MODULE_26__["CovalentCommonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_30__["MatCheckboxModule"]],
            providers: [_message_service__WEBPACK_IMPORTED_MODULE_29__["MessageService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_23__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "b7jd":
    /*!*******************************************!*\
      !*** ./src/app/medication-data-source.ts ***!
      \*******************************************/

    /*! exports provided: MedicationDataSource */

    /***/
    function b7jd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MedicationDataSource", function () {
        return MedicationDataSource;
      });
      /* harmony import */


      var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/table */
      "f6nW");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var MedicationDataSource = /*#__PURE__*/function (_angular_cdk_table__W) {
        _inherits(MedicationDataSource, _angular_cdk_table__W);

        var _super = _createSuper(MedicationDataSource);

        function MedicationDataSource(contains) {
          var _this5;

          _classCallCheck(this, MedicationDataSource);

          _this5 = _super.call(this);
          _this5.contains = contains;
          return _this5;
        }

        _createClass(MedicationDataSource, [{
          key: "connect",
          value: function connect() {
            //  console.log('contains DataSource connect '+this.patientId);
            var _contains = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);

            this.dataStore = {
              contains: []
            }; // console.log(this.contains);

            if (this.contains !== [] && this.contains != undefined) {
              var _iterator8 = _createForOfIteratorHelper(this.contains),
                  _step8;

              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                  var questionnaire = _step8.value;
                  this.dataStore.contains.push(questionnaire);
                }
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }

              _contains.next(Object.assign({}, this.dataStore).contains);
            }

            return _contains.asObservable();
          }
        }, {
          key: "disconnect",
          value: function disconnect() {}
        }]);

        return MedicationDataSource;
      }(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["DataSource"]);
      /***/

    },

    /***/
    "lvCl":
    /*!****************************************!*\
      !*** ./src/app/terminology.service.ts ***!
      \****************************************/

    /*! exports provided: Formats, TerminologyService */

    /***/
    function lvCl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Formats", function () {
        return Formats;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TerminologyService", function () {
        return TerminologyService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../environments/environment */
      "AytR");
      /* harmony import */


      var _message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./message.service */
      "OdHV");

      var Formats;

      (function (Formats) {
        Formats["JsonFormatted"] = "jsonf";
        Formats["Json"] = "json";
        Formats["Xml"] = "xml";
        Formats["EprView"] = "epr";
      })(Formats || (Formats = {}));

      var TerminologyService = /*#__PURE__*/function () {
        function TerminologyService(http, messageService) {
          _classCallCheck(this, TerminologyService);

          this.http = http;
          this.messageService = messageService;
          this.format = Formats.JsonFormatted;
          this.accessToken = undefined;
          this.nameChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.authenticated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(TerminologyService, [{
          key: "setDrugName",
          value: function setDrugName(drugName) {
            this.nameChange.emit(drugName);
          }
        }, {
          key: "getDrugNameChange",
          value: function getDrugNameChange() {
            return this.nameChange;
          }
        }, {
          key: "getMedicationValueSet",
          value: function getMedicationValueSet() {
            var encodedUri = encodeURIComponent('https://fhir.hl7.org.uk/ValueSet/UKCore-MedicationCode');
            console.log(encodedUri);
            return encodedUri;
          }
          /*
            getSNOMEDVersionRaw() {
              return 'http://snomed.info/sct/999000031000000106/version/20190807';
            }
            getSNOMEDVersion() {
              var encodedUri = encodeURIComponent(this.getSNOMEDVersionRaw());
              console.log(encodedUri)
              return encodedUri;
            }
          */

        }, {
          key: "getHeaders",
          value: function getHeaders() {
            var contentType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();

            if (contentType) {
              headers = headers.append('Content-Type', 'application/fhir+json');
              headers = headers.append('Accept', 'application/fhir+json');
            }

            return headers;
          }
        }, {
          key: "getResource",
          value: function getResource(search) {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].config.baseUrl + search;
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            headers = headers.append('Authorization', 'Bearer ' + this.getAccessToken());

            if (this.format === 'xml') {
              headers = headers.append('Content-Type', 'application/fhir+xml');
              headers = headers.append('Accept', 'application/fhir+xml');
              return this.http.get(url, {
                headers: headers,
                responseType: 'blob'
              });
            } else {
              return this.http.get(url, {
                'headers': headers
              });
            }
          }
        }, {
          key: "get",
          value: function get(search) {
            var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].config.baseUrl + search;
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
            headers = headers.append('Authorization', 'Bearer ' + this.getAccessToken());

            if (this.format === 'xml') {
              headers = headers.append('Content-Type', 'application/fhir+xml');
              headers = headers.append('Accept', 'application/fhir+xml');
              return this.http.get(url, {
                headers: headers,
                responseType: 'blob'
              });
            } else {
              return this.http.get(url, {
                'headers': headers
              });
            }
          }
        }, {
          key: "post",
          value: function post(resource, body) {
            var headers = this.getHeaders(false);
            headers = headers.append('Authorization', 'Bearer ' + this.getAccessToken());
            headers = headers.append('Content-Type', 'application/fhir+json');
            headers = headers.append('Accept', 'application/fhir+json');
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].config.baseUrl + resource, body, {
              headers: headers
            });
          }
        }, {
          key: "getAccessToken",
          value: function getAccessToken() {
            return this.accessToken;
          }
        }, {
          key: "doAuthenticate",
          value: function doAuthenticate() {
            var _this6 = this;

            var body = new URLSearchParams();
            body.append('grant_type', 'client_credentials');
            body.append('client_id', _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].config.ontoClientId);
            body.append('client_secret', _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].config.ontoClientSecret);
            var headers = this.getHeaders(false);
            headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
            this.http.post('https://ontology.nhs.uk/authorisation/auth/realms/nhs-digital-terminology/protocol/openid-connect/token', body.toString(), {
              headers: headers
            }).subscribe(function (response) {
              console.log(response);
              _this6.accessToken = response.access_token;
              console.log(_this6.accessToken);

              _this6.authenticated.emit(_this6.accessToken);
            }, function (err) {
              console.log('oops');
              console.log(err);
            });
          }
        }]);

        return TerminologyService;
      }();

      TerminologyService.ɵfac = function TerminologyService_Factory(t) {
        return new (t || TerminologyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]));
      };

      TerminologyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: TerminologyService,
        factory: TerminologyService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TerminologyService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: _message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./main/main.component */
      "wlho");
      /* harmony import */


      var _body_body_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./body/body.component */
      "OWb/");

      var routes = [// { path: '', redirectTo: 'fhir', pathMatch: 'full'},
      {
        path: '',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"],
        children: [{
          path: '',
          component: _body_body_component__WEBPACK_IMPORTED_MODULE_3__["BodyComponent"]
        }, {
          path: ':conceptid',
          component: _body_body_component__WEBPACK_IMPORTED_MODULE_3__["BodyComponent"]
        }]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "wlho":
    /*!****************************************!*\
      !*** ./src/app/main/main.component.ts ***!
      \****************************************/

    /*! exports provided: MainComponent */

    /***/
    function wlho(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
        return MainComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _medication_data_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../medication-data-source */
      "b7jd");
      /* harmony import */


      var _terminology_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../terminology.service */
      "lvCl");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _covalent_core_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @covalent/core/layout */
      "YGdM");
      /* harmony import */


      var _covalent_core_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @covalent/core/search */
      "Upbb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");

      function MainComponent_th_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Display ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MainComponent_td_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var medication_r3 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/", medication_r3.code, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", "SNOMED CT - " + medication_r3.code);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](medication_r3.display);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.getType(medication_r3));
        }
      }

      function MainComponent_tr_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 17);
        }
      }

      var MainComponent = /*#__PURE__*/function () {
        function MainComponent(terminologyService, router, route) {
          _classCallCheck(this, MainComponent);

          this.terminologyService = terminologyService;
          this.router = router;
          this.route = route;
          this.drugName = '';
          this.displayedColumns = ['display'];
        }

        _createClass(MainComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.terminologyService.doAuthenticate();
            this.terminologyService.getDrugNameChange().subscribe(function (name) {
              _this7.drugName = name;
            });
          }
        }, {
          key: "search",
          value: function search(name) {
            var _this8 = this;

            if (name != undefined) {
              var url = '/ValueSet/$expand?_format=json&url=' + this.terminologyService.getMedicationValueSet() + '&filter=' + encodeURI(name) + '&includeDesignations=true&count=100&elements=expansion.contains.code,expansion.contains.display,expansion.contains.fullySpecifiedName,expansion.contains.active'; //const url = '/ValueSet/$expand?_format=json&url=https%3A%2F%2Fhealthterminologies.gov.au%2Ffhir%2FValueSet%2Faustralian-medication-1&filter='+name+'&includeDesignations=true&count=100&elements=expansion.contains.code,expansion.contains.display,expansion.contains.fullySpecifiedName,expansion.contains.active';

              this.terminologyService.get(url).subscribe(function (result) {
                var valueSet = result;
                if (valueSet.expansion != undefined) _this8.dataSource = new _medication_data_source__WEBPACK_IMPORTED_MODULE_1__["MedicationDataSource"](valueSet.expansion.contains);
              });
            }
          }
        }, {
          key: "select",
          value: function select(medication) {
            this.router.navigate([medication.code], {
              relativeTo: this.route
            });
          }
        }, {
          key: "getType",
          value: function getType(contains) {
            var _iterator9 = _createForOfIteratorHelper(contains.designation),
                _step9;

            try {
              for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                var desingation = _step9.value;
                var splitted = desingation.value.split("(");

                if (splitted.length > 1) {
                  return splitted[splitted.length - 1].replace(')', '');
                }
              }
            } catch (err) {
              _iterator9.e(err);
            } finally {
              _iterator9.f();
            }

            return '';
          }
        }]);

        return MainComponent;
      }();

      MainComponent.ɵfac = function MainComponent_Factory(t) {
        return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_terminology_service__WEBPACK_IMPORTED_MODULE_2__["TerminologyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
      };

      MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MainComponent,
        selectors: [["app-main"]],
        decls: 25,
        vars: 5,
        consts: [["sidenavWidth", "280px", 1, "layout-nav-demo"], ["flex", "", "sidenavTitle", "Search"], ["flex", ""], ["placeholder", "Name or Code", 3, "ngModel", "showUnderline", "debounce", "ngModelChange", "searchDebounce", "search", "clear"], [1, "example-section"], ["disabled", "true", 1, "example-margin"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "display"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "hover", "tdLayoutToggle", "", 3, "routerLink", "matTooltip", 4, "matCellDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["navigationRoute", "/", "opened", "false", "mode", "side"], ["td-sidenav-content", ""], ["td-toolbar-content", "", "flex-auto", ""], ["mat-icon-button", "", "td-menu-button", "", "tdLayoutToggle", ""], ["mat-header-cell", ""], ["mat-cell", "", "tdLayoutToggle", "", 1, "hover", 3, "routerLink", "matTooltip"], ["mat-row", ""]],
        template: function MainComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td-layout", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td-navigation-drawer", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td-search-input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MainComponent_Template_td_search_input_ngModelChange_3_listener($event) {
              return ctx.searchInput = $event;
            })("searchDebounce", function MainComponent_Template_td_search_input_searchDebounce_3_listener($event) {
              return ctx.search($event);
            })("search", function MainComponent_Template_td_search_input_search_3_listener($event) {
              return ctx.search($event);
            })("clear", function MainComponent_Template_td_search_input_clear_3_listener() {
              return ctx.searchInput = "";
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-checkbox", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Moiety (VTM)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-checkbox", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Product (VMP and AMP)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-checkbox", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Pack (VMPP and AMPP)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MainComponent_th_13_Template, 2, 0, "th", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MainComponent_td_14_Template, 6, 4, "td", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MainComponent_tr_15_Template, 1, 0, "tr", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td-layout-nav-list", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " DM+D Browser ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchInput)("showUnderline", true)("debounce", 500);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
          }
        },
        directives: [_covalent_core_layout__WEBPACK_IMPORTED_MODULE_4__["TdLayoutComponent"], _covalent_core_layout__WEBPACK_IMPORTED_MODULE_4__["TdNavigationDrawerComponent"], _covalent_core_search__WEBPACK_IMPORTED_MODULE_5__["TdSearchInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckbox"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatRowDef"], _covalent_core_layout__WEBPACK_IMPORTED_MODULE_4__["TdLayoutNavListComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _covalent_core_layout__WEBPACK_IMPORTED_MODULE_4__["TdLayoutToggleDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatCell"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltip"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatRow"]],
        styles: [".mat-cell[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jZWxsIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-main',
            templateUrl: './main.component.html',
            styleUrls: ['./main.component.scss']
          }]
        }], function () {
          return [{
            type: _terminology_service__WEBPACK_IMPORTED_MODULE_2__["TerminologyService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map