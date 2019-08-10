var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
System.register("note-card", ["lit-element"], function (exports_1, context_1) {
    "use strict";
    var lit_element_1, NoteCard, templateObject_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (lit_element_1_1) {
                lit_element_1 = lit_element_1_1;
            }
        ],
        execute: function () {
            NoteCard = (function (_super) {
                __extends(NoteCard, _super);
                function NoteCard() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                NoteCard.prototype.render = function () {
                    return lit_element_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      <div>\n        <p>A note</p>\n      </div>\n    "], ["\n      <div>\n        <p>A note</p>\n      </div>\n    "])));
                };
                return NoteCard;
            }(lit_element_1.LitElement));
            customElements.define('note-card', NoteCard);
        }
    };
});
//# sourceMappingURL=tsc.js.map