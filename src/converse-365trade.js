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
        _converse.api.listen.on('messageAdded', data => {
          alert('messageAdded');
          console.log(data);
        });
        this.listenTo(this.model.messages, 'add', function(){
          alert('listen to message');
        });
        _converse.api.listen.on('connected', function(){
          alert('connected');
        });
        /************************ END Event Handlers ************************/

        /************************ BEGIN API ************************/
        Object.assign(_converse.api, {
            
        });
        /************************ END API ************************/


        /**
         * The View of an open/ongoing chat conversation.
         * @class
         * @namespace _converse.ChatBoxView
         * @memberOf _converse
         */
        _converse.ChatBoxView = Overview.extend({
          async initialize () {
            alert(234);
                this.initDebounced();
                this.listenTo(this.model.messages, 'add', function(){
                  alert('my add');
                });
                this.listenTo(this.model.messages, 'add', this.onMessageAdded);
                this.listenTo(this.model.messages, 'change:edited', this.onMessageEdited);
                this.listenTo(this.model.messages, 'rendered', this.scrollDown);
                this.model.messages.on('reset', () => {
                    this.content.innerHTML = '';
                    this.removeAll();
                });

                this.listenTo(this.model, 'change:status', this.onStatusMessageChanged);
                this.listenTo(this.model, 'destroy', this.remove);
                this.listenTo(this.model, 'show', this.show);
                this.listenTo(this.model, 'vcard:change', this.renderHeading);

                if (this.model.contact) {
                    this.listenTo(this.model.contact, 'destroy', this.renderHeading);
                }
                if (this.model.rosterContactAdded) {
                    this.model.rosterContactAdded.then(() => {
                        this.listenTo(this.model.contact, 'change:nickname', this.renderHeading);
                        this.renderHeading();
                    });
                }

                this.listenTo(this.model.presence, 'change:show', this.onPresenceChanged);
                this.render();
                await this.updateAfterMessagesFetched();
                this.model.maybeShow();
                /**
                 * Triggered once the {@link _converse.ChatBoxView} has been initialized
                 * @event _converse#chatBoxViewInitialized
                 * @type { _converse.HeadlinesBoxView }
                 * @example _converse.api.listen.on('chatBoxViewInitialized', view => { ... });
                 */
                _converse.api.trigger('chatBoxViewInitialized', this);
            }
        });
    }
});
