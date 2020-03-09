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
import "./headless/converse-chat";
import "./headless/converse-disco";
import "./headless/converse-emoji";
import { Collection } from "skeletor.js/src/collection";
import { Model } from 'skeletor.js/src/model.js';
import { clone, debounce, get, intersection, invoke, isElement, isObject, isString, pick, uniq, zipObject } from "lodash";
import converse from "./headless/converse-core";
import log from "./headless/log";
import muc_utils from "./headless/utils/muc";
import stanza_utils from "./headless/utils/stanza";
import u from "./headless/utils/form";

const MUC_ROLE_WEIGHTS = {
    'moderator':    1,
    'participant':  2,
    'visitor':      3,
    'none':         2,
};

const { Strophe, $iq, $build, $msg, $pres, sizzle } = converse.env;


converse.plugins.add('converse-365trade', {
    // It's possible however to make optional dependencies non-optional.
    // If the setting "strict_plugin_dependencies" is set to true,
    // an error will be raised if the plugin is not found.
    dependencies: ["converse-chatboxes", "converse-chat", "converse-disco", "converse-controlbox"],

    overrides: {
        
    },

    initialize: async function () {
        /* The initialize function gets called as soon as the plugin is
         * loaded by converse.js's plugin machinery.
         */
        const { _converse } = this;

        /************************ BEGIN Event Handlers ************************/
        _converse.api.listen.on('message', function (messageXML) {
          console.log('messageXML:', JSON.parse(messageXML.stanza.textContent));
        });
        _converse.api.listen.on('connected', async function(){
          alert(123);
          console.log('-------------------111111111 start-------------------');
          var chatbox = await _converse.api.chats.get();
          console.log(chatbox);
          console.log('-------------------222222222 end-1------------------');
        });
        
        /************************ END Event Handlers ************************/

        /************************ BEGIN API ************************/
        /*Object.assign(_converse.api, {
            
        });*/
        /************************ END API ************************/
    }
});
