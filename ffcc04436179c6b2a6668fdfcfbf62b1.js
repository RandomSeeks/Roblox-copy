/* Bundle: base_splitApps___760fbfeb45856ba150994b8a4ed2f1ee_m */"use strict"; angular.module("baseTemplateApp", []).run(['$templateCache', function($templateCache) { $templateCache.put("cc-modal-template", "<div class=modal-header><button type=button class=close ng-show=modalData.closeButtonShow ng-click=dismiss()><span class=icon-close></span></button><div class=modal-title><span ng-if=\"modalData.titleIcon&amp;&amp;modalData.titleIcon.length>0\" ng-class=modalData.titleIcon></span><h4 ng-bind=modalData.titleText></h4></div></div><div class=modal-body><p ng-if=modalData.bodyText class=\"body-text text-description\" ng-bind-html=modalData.bodyText><p ng-if=modalData.bodyHtmlUnsafe class=\"body-text text-description\" ng-bind-html=modalData.bodyHtmlUnsafe><div class=\"img-container modal-image-container\" ng-show=\"modalData.imageUrl&amp;&amp;modalData.imageUrl.length>0\"><img class=modal-thumb ng-src={{modalData.imageUrl}}></div></div><div class=modal-buttons><button type=submit ng-attr-id={{modalData.actionButtonId}} class=modal-button ng-class=modalData.actionButtonClass ng-if=modalData.actionButtonShow ng-click=close(true) ng-bind=modalData.actionButtonText></button><button type=button class=modal-button ng-class=modalData.neutralButtonClass ng-if=modalData.neutralButtonShow ng-click=dismiss() ng-bind=modalData.neutralButtonText></button></div><div class=modal-footer ng-if=\"modalData.footerText&amp;&amp;modalData.footerText.length>0\"><div class=text-footer ng-bind-html=modalData.footerText></div></div><div class=modal-footer ng-if=\"modalData.footerHtmlUnsafe&amp;&amp;modalData.footerHtmlUnsafe.length>0\"><div class=text-footer ng-bind-html=modalData.footerHtmlUnsafe></div></div>"); }]);