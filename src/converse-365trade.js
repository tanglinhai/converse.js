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
import converse from "@converse/headless/converse-core";
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
          console.log('messageXML:', messageXML);
          alert(JSON.stringify(messageXML));
        });
        _converse.api.listen.on('connected', function(){
          alert('connected');
        });
        /************************ END Event Handlers ************************/

        /************************ BEGIN API ************************/
        /*Object.assign(_converse.api, {
            
        });*/
        /************************ END API ************************/
    }
});
