/**
 * @module converse-365trade
 * @description
 * 中招联合xmpp插件.
 *
 * This plugin makes sense in mobile, embedded or fullscreen chat environments
 * (as configured by the `view_mode` setting).
 * @copyright 2020, the Converse.js contributors
 * @license Mozilla Public License (MPLv2)
 */
import "converse-modal";
import converse from "@converse/headless/converse-core";
import { Overview } from "skeletor.js/src/overview";
const u = converse.env.utils;


converse.plugins.add('converse-365trade', {
    // It's possible however to make optional dependencies non-optional.
    // If the setting "strict_plugin_dependencies" is set to true,
    // an error will be raised if the plugin is not found.
    dependencies: [],

    overrides: {
        
    },

    initialize () {
        /* The initialize function gets called as soon as the plugin is
         * loaded by converse.js's plugin machinery.
         */
        const { _converse } = this;

        /************************ BEGIN Event Handlers ************************/
        _converse.api.listen.on('message', function (messageXML) {
          alert(1111111111);
        });
        _converse.api.listen.on('connected', function(){
          alert('connected');
        });
        /************************ END Event Handlers ************************/

        /************************ BEGIN API ************************/
        Object.assign(_converse.api, {
            
        });
        /************************ END API ************************/
    },
    /* If you want to override some function or a Backbone model or
     * view defined elsewhere in Converse, then you do that under
     * the "overrides" namespace.
     */
    overrides: {
        /* For example, the private *_converse* object has a
         * method "onConnected". You can override that method as follows:
         */
        onConnected: function () {
            // Overrides the onConnected method in Converse

            // Top-level functions in "overrides" are bound to the
            // inner "_converse" object.
            const _converse = this;

            // Your custom code can come here ...

            // You can access the original function being overridden
            // via the __super__ attribute.
            // Make sure to pass on the arguments supplied to this
            // function and also to apply the proper "this" object.
            _converse.__super__.onConnected.apply(this, arguments);

            // Your custom code can come here ...
        }
    }
});
