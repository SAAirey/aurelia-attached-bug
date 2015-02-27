System.register(["aurelia-framework"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, Layout;
  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Layout = _export("Layout", (function () {
        function Layout() {
          _classCallCheck(this, Layout);
        }

        _prototypeProperties(Layout, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("layout");
            },
            writable: true,
            configurable: true
          }
        }, {
          attached: {
            value: function attached() {
              console.log("custom element attach");
            },
            writable: true,
            configurable: true
          }
        });

        return Layout;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxRQUFRLHlDQUVILE1BQU07OztBQUZYLGNBQVEscUJBQVIsUUFBUTs7Ozs7OztBQUVILFlBQU07aUJBQU4sTUFBTTtnQ0FBTixNQUFNOzs7NkJBQU4sTUFBTTtBQUNWLGtCQUFRO21CQUFBLG9CQUFHO0FBQ2hCLHFCQUFPLFFBQVEsQ0FDWixhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDNUI7Ozs7O0FBRUQsa0JBQVE7bUJBQUEsb0JBQUc7QUFDVCxxQkFBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO2FBQ3RDOzs7Ozs7ZUFSVSxNQUFNIiwiZmlsZSI6ImxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9