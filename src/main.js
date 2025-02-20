(function () {
    'use strict';

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise, SuppressedError, Symbol, Iterator */


    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (typeof state === "function" ? receiver !== state || true : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }

    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (typeof state === "function" ? receiver !== state || true : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (state.set(receiver, value)), value;
    }

    typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };

    // Copyright 2019-2024 Tauri Programme within The Commons Conservancy
    // SPDX-License-Identifier: Apache-2.0
    // SPDX-License-Identifier: MIT
    var _Channel_onmessage, _Channel_nextMessageId, _Channel_pendingMessages, _Resource_rid;
    /**
     * Invoke your custom commands.
     *
     * This package is also accessible with `window.__TAURI__.core` when [`app.withGlobalTauri`](https://v2.tauri.app/reference/config/#withglobaltauri) in `tauri.conf.json` is set to `true`.
     * @module
     */
    /**
     * A key to be used to implement a special function
     * on your types that define how your type should be serialized
     * when passing across the IPC.
     * @example
     * Given a type in Rust that looks like this
     * ```rs
     * #[derive(serde::Serialize, serde::Deserialize)
     * enum UserId {
     *   String(String),
     *   Number(u32),
     * }
     * ```
     * `UserId::String("id")` would be serialized into `{ String: "id" }`
     * and so we need to pass the same structure back to Rust
     * ```ts
     * import { SERIALIZE_TO_IPC_FN } from "@tauri-apps/api/core"
     *
     * class UserIdString {
     *   id
     *   constructor(id) {
     *     this.id = id
     *   }
     *
     *   [SERIALIZE_TO_IPC_FN]() {
     *     return { String: this.id }
     *   }
     * }
     *
     * class UserIdNumber {
     *   id
     *   constructor(id) {
     *     this.id = id
     *   }
     *
     *   [SERIALIZE_TO_IPC_FN]() {
     *     return { Number: this.id }
     *   }
     * }
     *
     *
     * type UserId = UserIdString | UserIdNumber
     * ```
     *
     */
    // if this value changes, make sure to update it in:
    // 1. ipc.js
    // 2. process-ipc-message-fn.js
    const SERIALIZE_TO_IPC_FN = '__TAURI_TO_IPC_KEY__';
    /**
     * Transforms a callback function to a string identifier that can be passed to the backend.
     * The backend uses the identifier to `eval()` the callback.
     *
     * @return A unique identifier associated with the callback function.
     *
     * @since 1.0.0
     */
    function transformCallback(callback, once = false) {
        return window.__TAURI_INTERNALS__.transformCallback(callback, once);
    }
    class Channel {
        constructor() {
            // @ts-expect-error field used by the IPC serializer
            this.__TAURI_CHANNEL_MARKER__ = true;
            _Channel_onmessage.set(this, () => {
                // no-op
            }
            // the id is used as a mechanism to preserve message order
            );
            // the id is used as a mechanism to preserve message order
            _Channel_nextMessageId.set(this, 0);
            _Channel_pendingMessages.set(this, []);
            this.id = transformCallback(({ message, id }) => {
                // Process the message if we're at the right order
                if (id == __classPrivateFieldGet(this, _Channel_nextMessageId, "f")) {
                    __classPrivateFieldGet(this, _Channel_onmessage, "f").call(this, message);
                    __classPrivateFieldSet(this, _Channel_nextMessageId, __classPrivateFieldGet(this, _Channel_nextMessageId, "f") + 1);
                    // process pending messages
                    while (__classPrivateFieldGet(this, _Channel_nextMessageId, "f") in __classPrivateFieldGet(this, _Channel_pendingMessages, "f")) {
                        const message = __classPrivateFieldGet(this, _Channel_pendingMessages, "f")[__classPrivateFieldGet(this, _Channel_nextMessageId, "f")];
                        __classPrivateFieldGet(this, _Channel_onmessage, "f").call(this, message);
                        // eslint-disable-next-line @typescript-eslint/no-array-delete
                        delete __classPrivateFieldGet(this, _Channel_pendingMessages, "f")[__classPrivateFieldGet(this, _Channel_nextMessageId, "f")];
                        __classPrivateFieldSet(this, _Channel_nextMessageId, __classPrivateFieldGet(this, _Channel_nextMessageId, "f") + 1);
                    }
                }
                // Queue the message if we're not
                else {
                    // eslint-disable-next-line security/detect-object-injection
                    __classPrivateFieldGet(this, _Channel_pendingMessages, "f")[id] = message;
                }
            });
        }
        set onmessage(handler) {
            __classPrivateFieldSet(this, _Channel_onmessage, handler);
        }
        get onmessage() {
            return __classPrivateFieldGet(this, _Channel_onmessage, "f");
        }
        [(_Channel_onmessage = new WeakMap(), _Channel_nextMessageId = new WeakMap(), _Channel_pendingMessages = new WeakMap(), SERIALIZE_TO_IPC_FN)]() {
            return `__CHANNEL__:${this.id}`;
        }
        toJSON() {
            // eslint-disable-next-line security/detect-object-injection
            return this[SERIALIZE_TO_IPC_FN]();
        }
    }
    /**
     * Sends a message to the backend.
     * @example
     * ```typescript
     * import { invoke } from '@tauri-apps/api/core';
     * await invoke('login', { user: 'tauri', password: 'poiwe3h4r5ip3yrhtew9ty' });
     * ```
     *
     * @param cmd The command name.
     * @param args The optional arguments to pass to the command.
     * @param options The request options.
     * @return A promise resolving or rejecting to the backend response.
     *
     * @since 1.0.0
     */
    async function invoke(cmd, args = {}, options) {
        return window.__TAURI_INTERNALS__.invoke(cmd, args, options);
    }
    /**
     * A rust-backed resource stored through `tauri::Manager::resources_table` API.
     *
     * The resource lives in the main process and does not exist
     * in the Javascript world, and thus will not be cleaned up automatiacally
     * except on application exit. If you want to clean it up early, call {@linkcode Resource.close}
     *
     * @example
     * ```typescript
     * import { Resource, invoke } from '@tauri-apps/api/core';
     * export class DatabaseHandle extends Resource {
     *   static async open(path: string): Promise<DatabaseHandle> {
     *     const rid: number = await invoke('open_db', { path });
     *     return new DatabaseHandle(rid);
     *   }
     *
     *   async execute(sql: string): Promise<void> {
     *     await invoke('execute_sql', { rid: this.rid, sql });
     *   }
     * }
     * ```
     */
    class Resource {
        get rid() {
            return __classPrivateFieldGet(this, _Resource_rid, "f");
        }
        constructor(rid) {
            _Resource_rid.set(this, void 0);
            __classPrivateFieldSet(this, _Resource_rid, rid);
        }
        /**
         * Destroys and cleans up this resource from memory.
         * **You should not call any method on this object anymore and should drop any reference to it.**
         */
        async close() {
            return invoke('plugin:resources|close', {
                rid: this.rid
            });
        }
    }
    _Resource_rid = new WeakMap();

    // Copyright 2019-2024 Tauri Programme within The Commons Conservancy
    // SPDX-License-Identifier: Apache-2.0
    // SPDX-License-Identifier: MIT
    /** An RGBA Image in row-major order from top to bottom. */
    class Image extends Resource {
        /**
         * Creates an Image from a resource ID. For internal use only.
         *
         * @ignore
         */
        constructor(rid) {
            super(rid);
        }
        /** Creates a new Image using RGBA data, in row-major order from top to bottom, and with specified width and height. */
        static async new(rgba, width, height) {
            return invoke('plugin:image|new', {
                rgba: transformImage(rgba),
                width,
                height
            }).then((rid) => new Image(rid));
        }
        /**
         * Creates a new image using the provided bytes by inferring the file format.
         * If the format is known, prefer [@link Image.fromPngBytes] or [@link Image.fromIcoBytes].
         *
         * Only `ico` and `png` are supported (based on activated feature flag).
         *
         * Note that you need the `image-ico` or `image-png` Cargo features to use this API.
         * To enable it, change your Cargo.toml file:
         * ```toml
         * [dependencies]
         * tauri = { version = "...", features = ["...", "image-png"] }
         * ```
         */
        static async fromBytes(bytes) {
            return invoke('plugin:image|from_bytes', {
                bytes: transformImage(bytes)
            }).then((rid) => new Image(rid));
        }
        /**
         * Creates a new image using the provided path.
         *
         * Only `ico` and `png` are supported (based on activated feature flag).
         *
         * Note that you need the `image-ico` or `image-png` Cargo features to use this API.
         * To enable it, change your Cargo.toml file:
         * ```toml
         * [dependencies]
         * tauri = { version = "...", features = ["...", "image-png"] }
         * ```
         */
        static async fromPath(path) {
            return invoke('plugin:image|from_path', { path }).then((rid) => new Image(rid));
        }
        /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
        async rgba() {
            return invoke('plugin:image|rgba', {
                rid: this.rid
            }).then((buffer) => new Uint8Array(buffer));
        }
        /** Returns the size of this image.  */
        async size() {
            return invoke('plugin:image|size', { rid: this.rid });
        }
    }
    /**
     * Transforms image from various types into a type acceptable by Rust.
     *
     * See [tauri::image::JsImage](https://docs.rs/tauri/2/tauri/image/enum.JsImage.html) for more information.
     * Note the API signature is not stable and might change.
     */
    function transformImage(image) {
        const ret = image == null
            ? null
            : typeof image === 'string'
                ? image
                : image instanceof Image
                    ? image.rid
                    : image;
        return ret;
    }

    /**
     * Get the default window icon.
     *
     * @example
     * ```typescript
     * import { defaultWindowIcon } from '@tauri-apps/api/app';
     * await defaultWindowIcon();
     * ```
     *
     * @since 2.0.0
     */
    async function defaultWindowIcon() {
        return invoke('plugin:app|default_window_icon').then((rid) => rid ? new Image(rid) : null);
    }

    // Copyright 2019-2024 Tauri Programme within The Commons Conservancy
    // SPDX-License-Identifier: Apache-2.0
    // SPDX-License-Identifier: MIT
    var _MenuItemBase_id, _MenuItemBase_kind;
    function injectChannel(i) {
        var _a;
        if ('items' in i) {
            i.items = (_a = i.items) === null || _a === void 0 ? void 0 : _a.map((item) => 'rid' in item ? item : injectChannel(item));
        }
        else if ('action' in i && i.action) {
            const handler = new Channel();
            handler.onmessage = i.action;
            delete i.action;
            return { ...i, handler };
        }
        return i;
    }
    async function newMenu(kind, opts) {
        const handler = new Channel();
        if (opts && typeof opts === 'object') {
            if ('action' in opts && opts.action) {
                handler.onmessage = opts.action;
                delete opts.action;
            }
            // about predefined menu item icon
            if ('item' in opts &&
                opts.item &&
                typeof opts.item === 'object' &&
                'About' in opts.item &&
                opts.item.About &&
                typeof opts.item.About === 'object' &&
                'icon' in opts.item.About &&
                opts.item.About.icon) {
                opts.item.About.icon = transformImage(opts.item.About.icon);
            }
            // icon menu item icon
            if ('icon' in opts && opts.icon) {
                opts.icon = transformImage(opts.icon);
            }
            // submenu items
            if ('items' in opts && opts.items) {
                function prepareItem(i) {
                    var _a;
                    if ('rid' in i) {
                        return [i.rid, i.kind];
                    }
                    if ('item' in i && typeof i.item === 'object' && ((_a = i.item.About) === null || _a === void 0 ? void 0 : _a.icon)) {
                        i.item.About.icon = transformImage(i.item.About.icon);
                    }
                    if ('icon' in i && i.icon) {
                        i.icon = transformImage(i.icon);
                    }
                    if ('items' in i && i.items) {
                        // @ts-expect-error the `prepareItem` return doesn't exactly match
                        // this is fine, because the difference is in `[number, string]` variant
                        i.items = i.items.map(prepareItem);
                    }
                    return injectChannel(i);
                }
                // @ts-expect-error the `prepareItem` return doesn't exactly match
                // this is fine, because the difference is in `[number, string]` variant
                opts.items = opts.items.map(prepareItem);
            }
        }
        return invoke('plugin:menu|new', {
            kind,
            options: opts,
            handler
        });
    }
    class MenuItemBase extends Resource {
        /** The id of this item. */
        get id() {
            return __classPrivateFieldGet(this, _MenuItemBase_id, "f");
        }
        /** @ignore */
        get kind() {
            return __classPrivateFieldGet(this, _MenuItemBase_kind, "f");
        }
        /** @ignore */
        constructor(rid, id, kind) {
            super(rid);
            /** @ignore */
            _MenuItemBase_id.set(this, void 0);
            /** @ignore */
            _MenuItemBase_kind.set(this, void 0);
            __classPrivateFieldSet(this, _MenuItemBase_id, id);
            __classPrivateFieldSet(this, _MenuItemBase_kind, kind);
        }
    }
    _MenuItemBase_id = new WeakMap(), _MenuItemBase_kind = new WeakMap();

    // Copyright 2019-2024 Tauri Programme within The Commons Conservancy
    // SPDX-License-Identifier: Apache-2.0
    // SPDX-License-Identifier: MIT
    /** A menu item inside a {@linkcode Menu} or {@linkcode Submenu} and contains only text. */
    class MenuItem extends MenuItemBase {
        /** @ignore */
        constructor(rid, id) {
            super(rid, id, 'MenuItem');
        }
        /** Create a new menu item. */
        static async new(opts) {
            return newMenu('MenuItem', opts).then(([rid, id]) => new MenuItem(rid, id));
        }
        /** Returns the text of this menu item. */
        async text() {
            return invoke('plugin:menu|text', { rid: this.rid, kind: this.kind });
        }
        /** Sets the text for this menu item. */
        async setText(text) {
            return invoke('plugin:menu|set_text', {
                rid: this.rid,
                kind: this.kind,
                text
            });
        }
        /** Returns whether this menu item is enabled or not. */
        async isEnabled() {
            return invoke('plugin:menu|is_enabled', { rid: this.rid, kind: this.kind });
        }
        /** Sets whether this menu item is enabled or not. */
        async setEnabled(enabled) {
            return invoke('plugin:menu|set_enabled', {
                rid: this.rid,
                kind: this.kind,
                enabled
            });
        }
        /** Sets the accelerator for this menu item. */
        async setAccelerator(accelerator) {
            return invoke('plugin:menu|set_accelerator', {
                rid: this.rid,
                kind: this.kind,
                accelerator
            });
        }
    }

    // Copyright 2019-2024 Tauri Programme within The Commons Conservancy
    // SPDX-License-Identifier: Apache-2.0
    // SPDX-License-Identifier: MIT
    /**
     * A check menu item inside a {@linkcode Menu} or {@linkcode Submenu}
     * and usually contains a text and a check mark or a similar toggle
     * that corresponds to a checked and unchecked states.
     */
    class CheckMenuItem extends MenuItemBase {
        /** @ignore */
        constructor(rid, id) {
            super(rid, id, 'Check');
        }
        /** Create a new check menu item. */
        static async new(opts) {
            return newMenu('Check', opts).then(([rid, id]) => new CheckMenuItem(rid, id));
        }
        /** Returns the text of this check menu item. */
        async text() {
            return invoke('plugin:menu|text', { rid: this.rid, kind: this.kind });
        }
        /** Sets the text for this check menu item. */
        async setText(text) {
            return invoke('plugin:menu|set_text', {
                rid: this.rid,
                kind: this.kind,
                text
            });
        }
        /** Returns whether this check menu item is enabled or not. */
        async isEnabled() {
            return invoke('plugin:menu|is_enabled', { rid: this.rid, kind: this.kind });
        }
        /** Sets whether this check menu item is enabled or not. */
        async setEnabled(enabled) {
            return invoke('plugin:menu|set_enabled', {
                rid: this.rid,
                kind: this.kind,
                enabled
            });
        }
        /** Sets the accelerator for this check menu item. */
        async setAccelerator(accelerator) {
            return invoke('plugin:menu|set_accelerator', {
                rid: this.rid,
                kind: this.kind,
                accelerator
            });
        }
        /** Returns whether this check menu item is checked or not. */
        async isChecked() {
            return invoke('plugin:menu|is_checked', { rid: this.rid });
        }
        /** Sets whether this check menu item is checked or not. */
        async setChecked(checked) {
            return invoke('plugin:menu|set_checked', {
                rid: this.rid,
                checked
            });
        }
    }

    // Copyright 2019-2024 Tauri Programme within The Commons Conservancy
    // SPDX-License-Identifier: Apache-2.0
    // SPDX-License-Identifier: MIT
    /**
     * A native Icon to be used for the menu item
     *
     * #### Platform-specific:
     *
     * - **Windows / Linux**: Unsupported.
     */
    var NativeIcon;
    (function (NativeIcon) {
        /** An add item template image. */
        NativeIcon["Add"] = "Add";
        /** Advanced preferences toolbar icon for the preferences window. */
        NativeIcon["Advanced"] = "Advanced";
        /** A Bluetooth template image. */
        NativeIcon["Bluetooth"] = "Bluetooth";
        /** Bookmarks image suitable for a template. */
        NativeIcon["Bookmarks"] = "Bookmarks";
        /** A caution image. */
        NativeIcon["Caution"] = "Caution";
        /** A color panel toolbar icon. */
        NativeIcon["ColorPanel"] = "ColorPanel";
        /** A column view mode template image. */
        NativeIcon["ColumnView"] = "ColumnView";
        /** A computer icon. */
        NativeIcon["Computer"] = "Computer";
        /** An enter full-screen mode template image. */
        NativeIcon["EnterFullScreen"] = "EnterFullScreen";
        /** Permissions for all users. */
        NativeIcon["Everyone"] = "Everyone";
        /** An exit full-screen mode template image. */
        NativeIcon["ExitFullScreen"] = "ExitFullScreen";
        /** A cover flow view mode template image. */
        NativeIcon["FlowView"] = "FlowView";
        /** A folder image. */
        NativeIcon["Folder"] = "Folder";
        /** A burnable folder icon. */
        NativeIcon["FolderBurnable"] = "FolderBurnable";
        /** A smart folder icon. */
        NativeIcon["FolderSmart"] = "FolderSmart";
        /** A link template image. */
        NativeIcon["FollowLinkFreestanding"] = "FollowLinkFreestanding";
        /** A font panel toolbar icon. */
        NativeIcon["FontPanel"] = "FontPanel";
        /** A `go back` template image. */
        NativeIcon["GoLeft"] = "GoLeft";
        /** A `go forward` template image. */
        NativeIcon["GoRight"] = "GoRight";
        /** Home image suitable for a template. */
        NativeIcon["Home"] = "Home";
        /** An iChat Theater template image. */
        NativeIcon["IChatTheater"] = "IChatTheater";
        /** An icon view mode template image. */
        NativeIcon["IconView"] = "IconView";
        /** An information toolbar icon. */
        NativeIcon["Info"] = "Info";
        /** A template image used to denote invalid data. */
        NativeIcon["InvalidDataFreestanding"] = "InvalidDataFreestanding";
        /** A generic left-facing triangle template image. */
        NativeIcon["LeftFacingTriangle"] = "LeftFacingTriangle";
        /** A list view mode template image. */
        NativeIcon["ListView"] = "ListView";
        /** A locked padlock template image. */
        NativeIcon["LockLocked"] = "LockLocked";
        /** An unlocked padlock template image. */
        NativeIcon["LockUnlocked"] = "LockUnlocked";
        /** A horizontal dash, for use in menus. */
        NativeIcon["MenuMixedState"] = "MenuMixedState";
        /** A check mark template image, for use in menus. */
        NativeIcon["MenuOnState"] = "MenuOnState";
        /** A MobileMe icon. */
        NativeIcon["MobileMe"] = "MobileMe";
        /** A drag image for multiple items. */
        NativeIcon["MultipleDocuments"] = "MultipleDocuments";
        /** A network icon. */
        NativeIcon["Network"] = "Network";
        /** A path button template image. */
        NativeIcon["Path"] = "Path";
        /** General preferences toolbar icon for the preferences window. */
        NativeIcon["PreferencesGeneral"] = "PreferencesGeneral";
        /** A Quick Look template image. */
        NativeIcon["QuickLook"] = "QuickLook";
        /** A refresh template image. */
        NativeIcon["RefreshFreestanding"] = "RefreshFreestanding";
        /** A refresh template image. */
        NativeIcon["Refresh"] = "Refresh";
        /** A remove item template image. */
        NativeIcon["Remove"] = "Remove";
        /** A reveal contents template image. */
        NativeIcon["RevealFreestanding"] = "RevealFreestanding";
        /** A generic right-facing triangle template image. */
        NativeIcon["RightFacingTriangle"] = "RightFacingTriangle";
        /** A share view template image. */
        NativeIcon["Share"] = "Share";
        /** A slideshow template image. */
        NativeIcon["Slideshow"] = "Slideshow";
        /** A badge for a `smart` item. */
        NativeIcon["SmartBadge"] = "SmartBadge";
        /** Small green indicator, similar to iChat's available image. */
        NativeIcon["StatusAvailable"] = "StatusAvailable";
        /** Small clear indicator. */
        NativeIcon["StatusNone"] = "StatusNone";
        /** Small yellow indicator, similar to iChat's idle image. */
        NativeIcon["StatusPartiallyAvailable"] = "StatusPartiallyAvailable";
        /** Small red indicator, similar to iChat's unavailable image. */
        NativeIcon["StatusUnavailable"] = "StatusUnavailable";
        /** A stop progress template image. */
        NativeIcon["StopProgressFreestanding"] = "StopProgressFreestanding";
        /** A stop progress button template image. */
        NativeIcon["StopProgress"] = "StopProgress";
        /** An image of the empty trash can. */
        NativeIcon["TrashEmpty"] = "TrashEmpty";
        /** An image of the full trash can. */
        NativeIcon["TrashFull"] = "TrashFull";
        /** Permissions for a single user. */
        NativeIcon["User"] = "User";
        /** User account toolbar icon for the preferences window. */
        NativeIcon["UserAccounts"] = "UserAccounts";
        /** Permissions for a group of users. */
        NativeIcon["UserGroup"] = "UserGroup";
        /** Permissions for guests. */
        NativeIcon["UserGuest"] = "UserGuest";
    })(NativeIcon || (NativeIcon = {}));
    /**
     * An icon menu item inside a {@linkcode Menu} or {@linkcode Submenu}
     * and usually contains an icon and a text.
     */
    class IconMenuItem extends MenuItemBase {
        /** @ignore */
        constructor(rid, id) {
            super(rid, id, 'Icon');
        }
        /** Create a new icon menu item. */
        static async new(opts) {
            return newMenu('Icon', opts).then(([rid, id]) => new IconMenuItem(rid, id));
        }
        /** Returns the text of this icon menu item. */
        async text() {
            return invoke('plugin:menu|text', { rid: this.rid, kind: this.kind });
        }
        /** Sets the text for this icon menu item. */
        async setText(text) {
            return invoke('plugin:menu|set_text', {
                rid: this.rid,
                kind: this.kind,
                text
            });
        }
        /** Returns whether this icon menu item is enabled or not. */
        async isEnabled() {
            return invoke('plugin:menu|is_enabled', { rid: this.rid, kind: this.kind });
        }
        /** Sets whether this icon menu item is enabled or not. */
        async setEnabled(enabled) {
            return invoke('plugin:menu|set_enabled', {
                rid: this.rid,
                kind: this.kind,
                enabled
            });
        }
        /** Sets the accelerator for this icon menu item. */
        async setAccelerator(accelerator) {
            return invoke('plugin:menu|set_accelerator', {
                rid: this.rid,
                kind: this.kind,
                accelerator
            });
        }
        /** Sets an icon for this icon menu item */
        async setIcon(icon) {
            return invoke('plugin:menu|set_icon', {
                rid: this.rid,
                icon: transformImage(icon)
            });
        }
    }

    // Copyright 2019-2024 Tauri Programme within The Commons Conservancy
    // SPDX-License-Identifier: Apache-2.0
    // SPDX-License-Identifier: MIT
    /** A predefined (native) menu item which has a predefined behavior by the OS or by tauri.  */
    class PredefinedMenuItem extends MenuItemBase {
        /** @ignore */
        constructor(rid, id) {
            super(rid, id, 'Predefined');
        }
        /** Create a new predefined menu item. */
        static async new(opts) {
            return newMenu('Predefined', opts).then(([rid, id]) => new PredefinedMenuItem(rid, id));
        }
        /** Returns the text of this predefined menu item. */
        async text() {
            return invoke('plugin:menu|text', { rid: this.rid, kind: this.kind });
        }
        /** Sets the text for this predefined menu item. */
        async setText(text) {
            return invoke('plugin:menu|set_text', {
                rid: this.rid,
                kind: this.kind,
                text
            });
        }
    }

    // Copyright 2019-2024 Tauri Programme within The Commons Conservancy
    // SPDX-License-Identifier: Apache-2.0
    // SPDX-License-Identifier: MIT
    /**
     * A size represented in logical pixels.
     *
     * @since 2.0.0
     */
    class LogicalSize {
        constructor(...args) {
            this.type = 'Logical';
            if (args.length === 1) {
                if ('Logical' in args[0]) {
                    this.width = args[0].Logical.width;
                    this.height = args[0].Logical.height;
                }
                else {
                    this.width = args[0].width;
                    this.height = args[0].height;
                }
            }
            else {
                this.width = args[0];
                this.height = args[1];
            }
        }
        /**
         * Converts the logical size to a physical one.
         * @example
         * ```typescript
         * import { LogicalSize } from '@tauri-apps/api/dpi';
         * import { getCurrentWindow } from '@tauri-apps/api/window';
         *
         * const appWindow = getCurrentWindow();
         * const factor = await appWindow.scaleFactor();
         * const size = new LogicalSize(400, 500);
         * const physical = size.toPhysical(factor);
         * ```
         *
         * @since 2.0.0
         */
        toPhysical(scaleFactor) {
            return new PhysicalSize(this.width * scaleFactor, this.height * scaleFactor);
        }
        [SERIALIZE_TO_IPC_FN]() {
            return {
                width: this.width,
                height: this.height
            };
        }
        toJSON() {
            // eslint-disable-next-line security/detect-object-injection
            return this[SERIALIZE_TO_IPC_FN]();
        }
    }
    /**
     * A size represented in physical pixels.
     *
     * @since 2.0.0
     */
    class PhysicalSize {
        constructor(...args) {
            this.type = 'Physical';
            if (args.length === 1) {
                if ('Physical' in args[0]) {
                    this.width = args[0].Physical.width;
                    this.height = args[0].Physical.height;
                }
                else {
                    this.width = args[0].width;
                    this.height = args[0].height;
                }
            }
            else {
                this.width = args[0];
                this.height = args[1];
            }
        }
        /**
         * Converts the physical size to a logical one.
         * @example
         * ```typescript
         * import { getCurrentWindow } from '@tauri-apps/api/window';
         * const appWindow = getCurrentWindow();
         * const factor = await appWindow.scaleFactor();
         * const size = await appWindow.innerSize(); // PhysicalSize
         * const logical = size.toLogical(factor);
         * ```
         */
        toLogical(scaleFactor) {
            return new LogicalSize(this.width / scaleFactor, this.height / scaleFactor);
        }
        [SERIALIZE_TO_IPC_FN]() {
            return {
                width: this.width,
                height: this.height
            };
        }
        toJSON() {
            // eslint-disable-next-line security/detect-object-injection
            return this[SERIALIZE_TO_IPC_FN]();
        }
    }
    /**
     *  A position represented in logical pixels.
     *
     * @since 2.0.0
     */
    class LogicalPosition {
        constructor(...args) {
            this.type = 'Logical';
            if (args.length === 1) {
                if ('Logical' in args[0]) {
                    this.x = args[0].Logical.x;
                    this.y = args[0].Logical.y;
                }
                else {
                    this.x = args[0].x;
                    this.y = args[0].y;
                }
            }
            else {
                this.x = args[0];
                this.y = args[1];
            }
        }
        /**
         * Converts the logical position to a physical one.
         * @example
         * ```typescript
         * import { LogicalPosition } from '@tauri-apps/api/dpi';
         * import { getCurrentWindow } from '@tauri-apps/api/window';
         *
         * const appWindow = getCurrentWindow();
         * const factor = await appWindow.scaleFactor();
         * const position = new LogicalPosition(400, 500);
         * const physical = position.toPhysical(factor);
         * ```
         *
         * @since 2.0.0
         */
        toPhysical(scaleFactor) {
            return new PhysicalPosition(this.x * scaleFactor, this.y * scaleFactor);
        }
        [SERIALIZE_TO_IPC_FN]() {
            return {
                x: this.x,
                y: this.y
            };
        }
        toJSON() {
            // eslint-disable-next-line security/detect-object-injection
            return this[SERIALIZE_TO_IPC_FN]();
        }
    }
    /**
     *  A position represented in physical pixels.
     *
     * @since 2.0.0
     */
    class PhysicalPosition {
        constructor(...args) {
            this.type = 'Physical';
            if (args.length === 1) {
                if ('Physical' in args[0]) {
                    this.x = args[0].Physical.x;
                    this.y = args[0].Physical.y;
                }
                else {
                    this.x = args[0].x;
                    this.y = args[0].y;
                }
            }
            else {
                this.x = args[0];
                this.y = args[1];
            }
        }
        /**
         * Converts the physical position to a logical one.
         * @example
         * ```typescript
         * import { PhysicalPosition } from '@tauri-apps/api/dpi';
         * import { getCurrentWindow } from '@tauri-apps/api/window';
         *
         * const appWindow = getCurrentWindow();
         * const factor = await appWindow.scaleFactor();
         * const position = new PhysicalPosition(400, 500);
         * const physical = position.toLogical(factor);
         * ```
         *
         * @since 2.0.0
         */
        toLogical(scaleFactor) {
            return new LogicalPosition(this.x / scaleFactor, this.y / scaleFactor);
        }
        [SERIALIZE_TO_IPC_FN]() {
            return {
                x: this.x,
                y: this.y
            };
        }
        toJSON() {
            // eslint-disable-next-line security/detect-object-injection
            return this[SERIALIZE_TO_IPC_FN]();
        }
    }
    /**
     * A position represented either in physical or in logical pixels.
     *
     * This type is basically a union type of {@linkcode LogicalSize} and {@linkcode PhysicalSize}
     * but comes in handy when using `tauri::Position` in Rust as an argument to a command, as this class
     * automatically serializes into a valid format so it can be deserialized correctly into `tauri::Position`
     *
     * So instead of
     * ```typescript
     * import { invoke } from '@tauri-apps/api/core';
     * import { LogicalPosition, PhysicalPosition } from '@tauri-apps/api/dpi';
     *
     * const position: LogicalPosition | PhysicalPosition = someFunction(); // where someFunction returns either LogicalPosition or PhysicalPosition
     * const validPosition = position instanceof LogicalPosition
     *   ? { Logical: { x: position.x, y: position.y } }
     *   : { Physical: { x: position.x, y: position.y } }
     * await invoke("do_something_with_position", { position: validPosition });
     * ```
     *
     * You can just use {@linkcode Position}
     * ```typescript
     * import { invoke } from '@tauri-apps/api/core';
     * import { LogicalPosition, PhysicalPosition, Position } from '@tauri-apps/api/dpi';
     *
     * const position: LogicalPosition | PhysicalPosition = someFunction(); // where someFunction returns either LogicalPosition or PhysicalPosition
     * const validPosition = new Position(position);
     * await invoke("do_something_with_position", { position: validPosition });
     * ```
     *
     * @since 2.1.0
     */
    class Position {
        constructor(position) {
            this.position = position;
        }
        toLogical(scaleFactor) {
            return this.position instanceof LogicalPosition
                ? this.position
                : this.position.toLogical(scaleFactor);
        }
        toPhysical(scaleFactor) {
            return this.position instanceof PhysicalPosition
                ? this.position
                : this.position.toPhysical(scaleFactor);
        }
        [SERIALIZE_TO_IPC_FN]() {
            return {
                [`${this.position.type}`]: {
                    x: this.position.x,
                    y: this.position.y
                }
            };
        }
        toJSON() {
            // eslint-disable-next-line security/detect-object-injection
            return this[SERIALIZE_TO_IPC_FN]();
        }
    }

    // Copyright 2019-2024 Tauri Programme within The Commons Conservancy
    // SPDX-License-Identifier: Apache-2.0
    // SPDX-License-Identifier: MIT
    /** @ignore */
    function itemFromKind([rid, id, kind]) {
        /* eslint-disable @typescript-eslint/no-unsafe-return */
        switch (kind) {
            case 'Submenu':
                // @ts-expect-error constructor is protected for external usage only, safe for us to use
                return new Submenu(rid, id);
            case 'Predefined':
                // @ts-expect-error constructor is protected for external usage only, safe for us to use
                return new PredefinedMenuItem(rid, id);
            case 'Check':
                // @ts-expect-error constructor is protected for external usage only, safe for us to use
                return new CheckMenuItem(rid, id);
            case 'Icon':
                // @ts-expect-error constructor is protected for external usage only, safe for us to use
                return new IconMenuItem(rid, id);
            case 'MenuItem':
            default:
                // @ts-expect-error constructor is protected for external usage only, safe for us to use
                return new MenuItem(rid, id);
        }
        /* eslint-enable @typescript-eslint/no-unsafe-return */
    }
    /** A type that is a submenu inside a {@linkcode Menu} or {@linkcode Submenu}. */
    class Submenu extends MenuItemBase {
        /** @ignore */
        constructor(rid, id) {
            super(rid, id, 'Submenu');
        }
        /** Create a new submenu. */
        static async new(opts) {
            return newMenu('Submenu', opts).then(([rid, id]) => new Submenu(rid, id));
        }
        /** Returns the text of this submenu. */
        async text() {
            return invoke('plugin:menu|text', { rid: this.rid, kind: this.kind });
        }
        /** Sets the text for this submenu. */
        async setText(text) {
            return invoke('plugin:menu|set_text', {
                rid: this.rid,
                kind: this.kind,
                text
            });
        }
        /** Returns whether this submenu is enabled or not. */
        async isEnabled() {
            return invoke('plugin:menu|is_enabled', { rid: this.rid, kind: this.kind });
        }
        /** Sets whether this submenu is enabled or not. */
        async setEnabled(enabled) {
            return invoke('plugin:menu|set_enabled', {
                rid: this.rid,
                kind: this.kind,
                enabled
            });
        }
        /**
         * Add a menu item to the end of this submenu.
         *
         * #### Platform-specific:
         *
         * - **macOS:** Only {@linkcode Submenu}s can be added to a {@linkcode Menu}.
         */
        async append(items) {
            return invoke('plugin:menu|append', {
                rid: this.rid,
                kind: this.kind,
                items: (Array.isArray(items) ? items : [items]).map((i) => 'rid' in i ? [i.rid, i.kind] : i)
            });
        }
        /**
         * Add a menu item to the beginning of this submenu.
         *
         * #### Platform-specific:
         *
         * - **macOS:** Only {@linkcode Submenu}s can be added to a {@linkcode Menu}.
         */
        async prepend(items) {
            return invoke('plugin:menu|prepend', {
                rid: this.rid,
                kind: this.kind,
                items: (Array.isArray(items) ? items : [items]).map((i) => 'rid' in i ? [i.rid, i.kind] : i)
            });
        }
        /**
         * Add a menu item to the specified position in this submenu.
         *
         * #### Platform-specific:
         *
         * - **macOS:** Only {@linkcode Submenu}s can be added to a {@linkcode Menu}.
         */
        async insert(items, position) {
            return invoke('plugin:menu|insert', {
                rid: this.rid,
                kind: this.kind,
                items: (Array.isArray(items) ? items : [items]).map((i) => 'rid' in i ? [i.rid, i.kind] : i),
                position
            });
        }
        /** Remove a menu item from this submenu. */
        async remove(item) {
            return invoke('plugin:menu|remove', {
                rid: this.rid,
                kind: this.kind,
                item: [item.rid, item.kind]
            });
        }
        /** Remove a menu item from this submenu at the specified position. */
        async removeAt(position) {
            return invoke('plugin:menu|remove_at', {
                rid: this.rid,
                kind: this.kind,
                position
            }).then(itemFromKind);
        }
        /** Returns a list of menu items that has been added to this submenu. */
        async items() {
            return invoke('plugin:menu|items', {
                rid: this.rid,
                kind: this.kind
            }).then((i) => i.map(itemFromKind));
        }
        /** Retrieves the menu item matching the given identifier. */
        async get(id) {
            return invoke('plugin:menu|get', {
                rid: this.rid,
                kind: this.kind,
                id
            }).then((r) => (r ? itemFromKind(r) : null));
        }
        /**
         * Popup this submenu as a context menu on the specified window.
         *
         * If the position, is provided, it is relative to the window's top-left corner.
         */
        async popup(at, window) {
            var _a;
            return invoke('plugin:menu|popup', {
                rid: this.rid,
                kind: this.kind,
                window: (_a = window === null || window === void 0 ? void 0 : window.label) !== null && _a !== void 0 ? _a : null,
                at: at instanceof Position ? at : at ? new Position(at) : null
            });
        }
        /**
         * Set this submenu as the Window menu for the application on macOS.
         *
         * This will cause macOS to automatically add window-switching items and
         * certain other items to the menu.
         *
         * #### Platform-specific:
         *
         * - **Windows / Linux**: Unsupported.
         */
        async setAsWindowsMenuForNSApp() {
            return invoke('plugin:menu|set_as_windows_menu_for_nsapp', {
                rid: this.rid
            });
        }
        /**
         * Set this submenu as the Help menu for the application on macOS.
         *
         * This will cause macOS to automatically add a search box to the menu.
         *
         * If no menu is set as the Help menu, macOS will automatically use any menu
         * which has a title matching the localized word "Help".
         *
         * #### Platform-specific:
         *
         * - **Windows / Linux**: Unsupported.
         */
        async setAsHelpMenuForNSApp() {
            return invoke('plugin:menu|set_as_help_menu_for_nsapp', {
                rid: this.rid
            });
        }
    }

    // Copyright 2019-2024 Tauri Programme within The Commons Conservancy
    // SPDX-License-Identifier: Apache-2.0
    // SPDX-License-Identifier: MIT
    /** A type that is either a menu bar on the window
     * on Windows and Linux or as a global menu in the menubar on macOS.
     *
     * #### Platform-specific:
     *
     * - **macOS**: if using {@linkcode Menu} for the global menubar, it can only contain {@linkcode Submenu}s.
     */
    class Menu extends MenuItemBase {
        /** @ignore */
        constructor(rid, id) {
            super(rid, id, 'Menu');
        }
        /** Create a new menu. */
        static async new(opts) {
            return newMenu('Menu', opts).then(([rid, id]) => new Menu(rid, id));
        }
        /** Create a default menu. */
        static async default() {
            return invoke('plugin:menu|create_default').then(([rid, id]) => new Menu(rid, id));
        }
        /**
         * Add a menu item to the end of this menu.
         *
         * #### Platform-specific:
         *
         * - **macOS:** Only {@linkcode Submenu}s can be added to a {@linkcode Menu}.
         */
        async append(items) {
            return invoke('plugin:menu|append', {
                rid: this.rid,
                kind: this.kind,
                items: (Array.isArray(items) ? items : [items]).map((i) => 'rid' in i ? [i.rid, i.kind] : i)
            });
        }
        /**
         * Add a menu item to the beginning of this menu.
         *
         * #### Platform-specific:
         *
         * - **macOS:** Only {@linkcode Submenu}s can be added to a {@linkcode Menu}.
         */
        async prepend(items) {
            return invoke('plugin:menu|prepend', {
                rid: this.rid,
                kind: this.kind,
                items: (Array.isArray(items) ? items : [items]).map((i) => 'rid' in i ? [i.rid, i.kind] : i)
            });
        }
        /**
         * Add a menu item to the specified position in this menu.
         *
         * #### Platform-specific:
         *
         * - **macOS:** Only {@linkcode Submenu}s can be added to a {@linkcode Menu}.
         */
        async insert(items, position) {
            return invoke('plugin:menu|insert', {
                rid: this.rid,
                kind: this.kind,
                items: (Array.isArray(items) ? items : [items]).map((i) => 'rid' in i ? [i.rid, i.kind] : i),
                position
            });
        }
        /** Remove a menu item from this menu. */
        async remove(item) {
            return invoke('plugin:menu|remove', {
                rid: this.rid,
                kind: this.kind,
                item: [item.rid, item.kind]
            });
        }
        /** Remove a menu item from this menu at the specified position. */
        async removeAt(position) {
            return invoke('plugin:menu|remove_at', {
                rid: this.rid,
                kind: this.kind,
                position
            }).then(itemFromKind);
        }
        /** Returns a list of menu items that has been added to this menu. */
        async items() {
            return invoke('plugin:menu|items', {
                rid: this.rid,
                kind: this.kind
            }).then((i) => i.map(itemFromKind));
        }
        /** Retrieves the menu item matching the given identifier. */
        async get(id) {
            return invoke('plugin:menu|get', {
                rid: this.rid,
                kind: this.kind,
                id
            }).then((r) => (r ? itemFromKind(r) : null));
        }
        /**
         * Popup this menu as a context menu on the specified window.
         *
         * If the position, is provided, it is relative to the window's top-left corner.
         */
        async popup(at, window) {
            var _a;
            return invoke('plugin:menu|popup', {
                rid: this.rid,
                kind: this.kind,
                window: (_a = window === null || window === void 0 ? void 0 : window.label) !== null && _a !== void 0 ? _a : null,
                at: at instanceof Position ? at : at ? new Position(at) : null
            });
        }
        /**
         * Sets the app-wide menu and returns the previous one.
         *
         * If a window was not created with an explicit menu or had one set explicitly,
         * this menu will be assigned to it.
         */
        async setAsAppMenu() {
            return invoke('plugin:menu|set_as_app_menu', {
                rid: this.rid
            }).then((r) => (r ? new Menu(r[0], r[1]) : null));
        }
        /**
         * Sets the window menu and returns the previous one.
         *
         * #### Platform-specific:
         *
         * - **macOS:** Unsupported. The menu on macOS is app-wide and not specific to one
         * window, if you need to set it, use {@linkcode Menu.setAsAppMenu} instead.
         */
        async setAsWindowMenu(window) {
            var _a;
            return invoke('plugin:menu|set_as_window_menu', {
                rid: this.rid,
                window: (_a = window === null || window === void 0 ? void 0 : window.label) !== null && _a !== void 0 ? _a : null
            }).then((r) => (r ? new Menu(r[0], r[1]) : null));
        }
    }

    // Copyright 2019-2024 Tauri Programme within The Commons Conservancy
    // SPDX-License-Identifier: Apache-2.0
    // SPDX-License-Identifier: MIT
    /**
     * Tray icon class and associated methods. This type constructor is private,
     * instead, you should use the static method {@linkcode TrayIcon.new}.
     *
     * #### Warning
     *
     * Unlike Rust, javascript does not have any way to run cleanup code
     * when an object is being removed by garbage collection, but this tray icon
     * will be cleaned up when the tauri app exists, however if you want to cleanup
     * this object early, you need to call {@linkcode TrayIcon.close}.
     *
     * @example
     * ```ts
     * import { TrayIcon } from '@tauri-apps/api/tray';
     * const tray = await TrayIcon.new({ tooltip: 'awesome tray tooltip' });
     * tray.set_tooltip('new tooltip');
     * ```
     */
    class TrayIcon extends Resource {
        constructor(rid, id) {
            super(rid);
            this.id = id;
        }
        /** Gets a tray icon using the provided id. */
        static async getById(id) {
            return invoke('plugin:tray|get_by_id', { id }).then((rid) => rid ? new TrayIcon(rid, id) : null);
        }
        /**
         * Removes a tray icon using the provided id from tauri's internal state.
         *
         * Note that this may cause the tray icon to disappear
         * if it wasn't cloned somewhere else or referenced by JS.
         */
        static async removeById(id) {
            return invoke('plugin:tray|remove_by_id', { id });
        }
        /**
         * Creates a new {@linkcode TrayIcon}
         *
         * #### Platform-specific:
         *
         * - **Linux:** Sometimes the icon won't be visible unless a menu is set.
         * Setting an empty {@linkcode Menu} is enough.
         */
        static async new(options) {
            if (options === null || options === void 0 ? void 0 : options.menu) {
                // @ts-expect-error we only need the rid and kind
                options.menu = [options.menu.rid, options.menu.kind];
            }
            if (options === null || options === void 0 ? void 0 : options.icon) {
                options.icon = transformImage(options.icon);
            }
            const handler = new Channel();
            if (options === null || options === void 0 ? void 0 : options.action) {
                const action = options.action;
                handler.onmessage = (e) => action(mapEvent(e));
                delete options.action;
            }
            return invoke('plugin:tray|new', {
                options: options !== null && options !== void 0 ? options : {},
                handler
            }).then(([rid, id]) => new TrayIcon(rid, id));
        }
        /**
         *  Sets a new tray icon. If `null` is provided, it will remove the icon.
         *
         * Note that you may need the `image-ico` or `image-png` Cargo features to use this API.
         * To enable it, change your Cargo.toml file:
         * ```toml
         * [dependencies]
         * tauri = { version = "...", features = ["...", "image-png"] }
         * ```
         */
        async setIcon(icon) {
            let trayIcon = null;
            if (icon) {
                trayIcon = transformImage(icon);
            }
            return invoke('plugin:tray|set_icon', { rid: this.rid, icon: trayIcon });
        }
        /**
         * Sets a new tray menu.
         *
         * #### Platform-specific:
         *
         * - **Linux**: once a menu is set it cannot be removed so `null` has no effect
         */
        async setMenu(menu) {
            if (menu) {
                // @ts-expect-error we only need the rid and kind
                menu = [menu.rid, menu.kind];
            }
            return invoke('plugin:tray|set_menu', { rid: this.rid, menu });
        }
        /**
         * Sets the tooltip for this tray icon.
         *
         * #### Platform-specific:
         *
         * - **Linux:** Unsupported
         */
        async setTooltip(tooltip) {
            return invoke('plugin:tray|set_tooltip', { rid: this.rid, tooltip });
        }
        /**
         * Sets the tooltip for this tray icon.
         *
         * #### Platform-specific:
         *
         * - **Linux:** The title will not be shown unless there is an icon
         * as well.  The title is useful for numerical and other frequently
         * updated information.  In general, it shouldn't be shown unless a
         * user requests it as it can take up a significant amount of space
         * on the user's panel.  This may not be shown in all visualizations.
         * - **Windows:** Unsupported
         */
        async setTitle(title) {
            return invoke('plugin:tray|set_title', { rid: this.rid, title });
        }
        /** Show or hide this tray icon. */
        async setVisible(visible) {
            return invoke('plugin:tray|set_visible', { rid: this.rid, visible });
        }
        /**
         * Sets the tray icon temp dir path. **Linux only**.
         *
         * On Linux, we need to write the icon to the disk and usually it will
         * be `$XDG_RUNTIME_DIR/tray-icon` or `$TEMP/tray-icon`.
         */
        async setTempDirPath(path) {
            return invoke('plugin:tray|set_temp_dir_path', { rid: this.rid, path });
        }
        /** Sets the current icon as a [template](https://developer.apple.com/documentation/appkit/nsimage/1520017-template?language=objc). **macOS only** */
        async setIconAsTemplate(asTemplate) {
            return invoke('plugin:tray|set_icon_as_template', {
                rid: this.rid,
                asTemplate
            });
        }
        /**
         *  Disable or enable showing the tray menu on left click.
         *
         * #### Platform-specific:
         *
         * - **Linux**: Unsupported.
         *
         * @deprecated use {@linkcode TrayIcon.setShowMenuOnLeftClick} instead.
         */
        async setMenuOnLeftClick(onLeft) {
            return invoke('plugin:tray|set_show_menu_on_left_click', {
                rid: this.rid,
                onLeft
            });
        }
        /**
         *  Disable or enable showing the tray menu on left click.
         *
         * #### Platform-specific:
         *
         * - **Linux**: Unsupported.
         *
         * @since 2.2.0
         */
        async setShowMenuOnLeftClick(onLeft) {
            return invoke('plugin:tray|set_show_menu_on_left_click', {
                rid: this.rid,
                onLeft
            });
        }
    }
    function mapEvent(e) {
        const out = e;
        out.position = new PhysicalPosition(e.position);
        out.rect.position = new PhysicalPosition(e.rect.position);
        out.rect.size = new PhysicalSize(e.rect.size);
        return out;
    }

    var $L0;
    function $Char(c) {
      this.c = c;
    }
    $Char.prototype.toString = (function() {
      return String.fromCharCode(this.c);
    });
    function $valueDescription(arg0) {
      return (((typeof arg0) === "number") ? (((arg0 === 0) && ((1 / arg0) < 0)) ? "number(-0)" : (("number(" + arg0) + ")")) : ((arg0 instanceof $c_RTLong) ? "long" : ((arg0 instanceof $Char) ? "char" : ((!(!(arg0 && arg0.$classData))) ? arg0.$classData.name : (typeof arg0)))));
    }
    function $throwClassCastException(arg0, arg1) {
      throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_ClassCastException((($valueDescription(arg0) + " cannot be cast to ") + arg1)));
    }
    function $throwArrayCastException(arg0, arg1, arg2) {
      while ((--arg2)) {
        arg1 = ("[" + arg1);
      }
      $throwClassCastException(arg0, arg1);
    }
    function $throwArrayIndexOutOFBoundsException(arg0) {
      throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_ArrayIndexOutOfBoundsException(((arg0 === null) ? null : ("" + arg0))));
    }
    function $throwArrayStoreException(arg0) {
      throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_ArrayStoreException(((arg0 === null) ? null : $valueDescription(arg0))));
    }
    function $throwNegativeArraySizeException() {
      throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_NegativeArraySizeException());
    }
    function $throwNullPointerException() {
      throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_NullPointerException());
    }
    function $n(arg0) {
      if ((arg0 === null)) {
        $throwNullPointerException();
      }
      return arg0;
    }
    function $objectClassName(arg0) {
      switch ((typeof arg0)) {
        case "string": {
          return "java.lang.String";
        }
        case "number": {
          if ($isInt(arg0)) {
            if ((((arg0 << 24) >> 24) === arg0)) {
              return "java.lang.Byte";
            } else if ((((arg0 << 16) >> 16) === arg0)) {
              return "java.lang.Short";
            } else {
              return "java.lang.Integer";
            }
          } else if ($isFloat(arg0)) {
            return "java.lang.Float";
          } else {
            return "java.lang.Double";
          }
        }
        case "boolean": {
          return "java.lang.Boolean";
        }
        case "undefined": {
          return "java.lang.Void";
        }
        default: {
          if ((arg0 instanceof $c_RTLong)) {
            return "java.lang.Long";
          } else if ((arg0 instanceof $Char)) {
            return "java.lang.Character";
          } else if ((!(!(arg0 && arg0.$classData)))) {
            return arg0.$classData.name;
          } else {
            return $throwNullPointerException();
          }
        }
      }
    }
    function $dp_hashCode__I(instance) {
      switch ((typeof instance)) {
        case "string": {
          return $f_T__hashCode__I(instance);
        }
        case "number": {
          return $f_jl_Double__hashCode__I(instance);
        }
        case "boolean": {
          return $f_jl_Boolean__hashCode__I(instance);
        }
        case "undefined": {
          return $f_jl_Void__hashCode__I();
        }
        default: {
          if (((!(!(instance && instance.$classData))) || (instance === null))) {
            return instance.hashCode__I();
          } else if ((instance instanceof $c_RTLong)) {
            return $f_jl_Long__hashCode__I(instance);
          } else if ((instance instanceof $Char)) {
            return $f_jl_Character__hashCode__I($uC(instance));
          } else {
            return $c_O.prototype.hashCode__I.call(instance);
          }
        }
      }
    }
    function $intDiv(arg0, arg1) {
      if ((arg1 === 0)) {
        throw new $c_jl_ArithmeticException("/ by zero");
      } else {
        return ((arg0 / arg1) | 0);
      }
    }
    function $intMod(arg0, arg1) {
      if ((arg1 === 0)) {
        throw new $c_jl_ArithmeticException("/ by zero");
      } else {
        return ((arg0 % arg1) | 0);
      }
    }
    function $doubleToInt(arg0) {
      return ((arg0 > 2147483647) ? 2147483647 : ((arg0 < (-2147483648)) ? (-2147483648) : (arg0 | 0)));
    }
    function $charAt(arg0, arg1) {
      var r = arg0.charCodeAt(arg1);
      if ((r !== r)) {
        throw new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(new $c_jl_StringIndexOutOfBoundsException(arg1));
      } else {
        return r;
      }
    }
    function $arraycopyCheckBounds(arg0, arg1, arg2, arg3, arg4) {
      if ((((((arg1 < 0) || (arg3 < 0)) || (arg4 < 0)) || (arg1 > ((arg0 - arg4) | 0))) || (arg3 > ((arg2 - arg4) | 0)))) {
        $throwArrayIndexOutOFBoundsException(null);
      }
    }
    function $arraycopyGeneric(arg0, arg1, arg2, arg3, arg4) {
      $arraycopyCheckBounds(arg0.length, arg1, arg2.length, arg3, arg4);
      if ((((arg0 !== arg2) || (arg3 < arg1)) || (((arg1 + arg4) | 0) < arg3))) {
        for (var i = 0; (i < arg4); i = ((i + 1) | 0)) {
          arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)];
        }
      } else {
        for (var i = ((arg4 - 1) | 0); (i >= 0); i = ((i - 1) | 0)) {
          arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)];
        }
      }
    }
    var $lastIDHash = 0;
    var $idHashCodeMap = new WeakMap();
    function $systemIdentityHashCode(obj) {
      switch ((typeof obj)) {
        case "string": {
          return $f_T__hashCode__I(obj);
        }
        case "number": {
          return $f_jl_Double__hashCode__I(obj);
        }
        case "bigint": {
          var biHash = 0;
          if ((obj < BigInt(0))) {
            obj = (~obj);
          }
          while ((obj !== BigInt(0))) {
            biHash = (biHash ^ Number(BigInt.asIntN(32, obj)));
            obj = (obj >> BigInt(32));
          }
          return biHash;
        }
        case "boolean": {
          return (obj ? 1231 : 1237);
        }
        case "undefined": {
          return 0;
        }
        case "symbol": {
          var description = obj.description;
          return ((description === (void 0)) ? 0 : $f_T__hashCode__I(description));
        }
        default: {
          if ((obj === null)) {
            return 0;
          } else {
            var hash = $idHashCodeMap.get(obj);
            if ((hash === (void 0))) {
              hash = (($lastIDHash + 1) | 0);
              $lastIDHash = hash;
              $idHashCodeMap.set(obj, hash);
            }
            return hash;
          }
        }
      }
    }
    function $isByte(arg0) {
      return ((((typeof arg0) === "number") && (((arg0 << 24) >> 24) === arg0)) && ((1 / arg0) !== (1 / (-0))));
    }
    function $isShort(arg0) {
      return ((((typeof arg0) === "number") && (((arg0 << 16) >> 16) === arg0)) && ((1 / arg0) !== (1 / (-0))));
    }
    function $isInt(arg0) {
      return ((((typeof arg0) === "number") && ((arg0 | 0) === arg0)) && ((1 / arg0) !== (1 / (-0))));
    }
    function $isFloat(arg0) {
      return (((typeof arg0) === "number") && ((arg0 !== arg0) || (Math.fround(arg0) === arg0)));
    }
    function $bC(arg0) {
      return new $Char(arg0);
    }
    function $uZ(arg0) {
      return ((((typeof arg0) === "boolean") || (arg0 === null)) ? (!(!arg0)) : $throwClassCastException(arg0, "java.lang.Boolean"));
    }
    function $uC(arg0) {
      return (((arg0 instanceof $Char) || (arg0 === null)) ? ((arg0 === null) ? 0 : arg0.c) : $throwClassCastException(arg0, "java.lang.Character"));
    }
    function $uB(arg0) {
      return (($isByte(arg0) || (arg0 === null)) ? (arg0 | 0) : $throwClassCastException(arg0, "java.lang.Byte"));
    }
    function $uI(arg0) {
      return (($isInt(arg0) || (arg0 === null)) ? (arg0 | 0) : $throwClassCastException(arg0, "java.lang.Integer"));
    }
    function $uJ(arg0) {
      return (((arg0 instanceof $c_RTLong) || (arg0 === null)) ? ((arg0 === null) ? $L0 : arg0) : $throwClassCastException(arg0, "java.lang.Long"));
    }
    function $uD(arg0) {
      return ((((typeof arg0) === "number") || (arg0 === null)) ? (+arg0) : $throwClassCastException(arg0, "java.lang.Double"));
    }
    /** @constructor */
    function $c_O() {
    }
    $c_O.prototype.constructor = $c_O;
    /** @constructor */
    function $h_O() {
    }
    $h_O.prototype = $c_O.prototype;
    $c_O.prototype.hashCode__I = (function() {
      return $systemIdentityHashCode(this);
    });
    $c_O.prototype.toString__T = (function() {
      var i = this.hashCode__I();
      return (($objectClassName(this) + "@") + $as_T($uD((i >>> 0.0)).toString(16)));
    });
    $c_O.prototype.toString = (function() {
      return this.toString__T();
    });
    function $ac_O(arg) {
      if (((typeof arg) === "number")) {
        if ((arg < 0)) {
          $throwNegativeArraySizeException();
        }
        this.u = new Array(arg);
        for (var i = 0; (i < arg); (i++)) {
          this.u[i] = null;
        }
      } else {
        this.u = arg;
      }
    }
    $ac_O.prototype = new $h_O();
    $ac_O.prototype.constructor = $ac_O;
    $ac_O.prototype.get = (function(i) {
      if (((i < 0) || (i >= this.u.length))) {
        $throwArrayIndexOutOFBoundsException(i);
      }
      return this.u[i];
    });
    $ac_O.prototype.set = (function(i, v) {
      if (((i < 0) || (i >= this.u.length))) {
        $throwArrayIndexOutOFBoundsException(i);
      }
      this.u[i] = v;
    });
    $ac_O.prototype.copyTo = (function(srcPos, dest, destPos, length) {
      $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length);
    });
    $ac_O.prototype.clone__O = (function() {
      return new $ac_O(this.u.slice());
    });
    function $ah_O() {
    }
    $ah_O.prototype = $ac_O.prototype;
    function $ac_Z(arg) {
      if (((typeof arg) === "number")) {
        if ((arg < 0)) {
          $throwNegativeArraySizeException();
        }
        this.u = new Array(arg);
        for (var i = 0; (i < arg); (i++)) {
          this.u[i] = false;
        }
      } else {
        this.u = arg;
      }
    }
    $ac_Z.prototype = new $h_O();
    $ac_Z.prototype.constructor = $ac_Z;
    $ac_Z.prototype.get = (function(i) {
      if (((i < 0) || (i >= this.u.length))) {
        $throwArrayIndexOutOFBoundsException(i);
      }
      return this.u[i];
    });
    $ac_Z.prototype.set = (function(i, v) {
      if (((i < 0) || (i >= this.u.length))) {
        $throwArrayIndexOutOFBoundsException(i);
      }
      this.u[i] = v;
    });
    $ac_Z.prototype.copyTo = (function(srcPos, dest, destPos, length) {
      $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length);
    });
    $ac_Z.prototype.clone__O = (function() {
      return new $ac_Z(this.u.slice());
    });
    function $ac_C(arg) {
      if (((typeof arg) === "number")) {
        if ((arg < 0)) {
          $throwNegativeArraySizeException();
        }
        this.u = new Uint16Array(arg);
      } else {
        this.u = arg;
      }
    }
    $ac_C.prototype = new $h_O();
    $ac_C.prototype.constructor = $ac_C;
    $ac_C.prototype.get = (function(i) {
      if (((i < 0) || (i >= this.u.length))) {
        $throwArrayIndexOutOFBoundsException(i);
      }
      return this.u[i];
    });
    $ac_C.prototype.set = (function(i, v) {
      if (((i < 0) || (i >= this.u.length))) {
        $throwArrayIndexOutOFBoundsException(i);
      }
      this.u[i] = v;
    });
    $ac_C.prototype.copyTo = (function(srcPos, dest, destPos, length) {
      $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
      dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos);
    });
    $ac_C.prototype.clone__O = (function() {
      return new $ac_C(this.u.slice());
    });
    function $ac_B(arg) {
      if (((typeof arg) === "number")) {
        if ((arg < 0)) {
          $throwNegativeArraySizeException();
        }
        this.u = new Int8Array(arg);
      } else {
        this.u = arg;
      }
    }
    $ac_B.prototype = new $h_O();
    $ac_B.prototype.constructor = $ac_B;
    $ac_B.prototype.get = (function(i) {
      if (((i < 0) || (i >= this.u.length))) {
        $throwArrayIndexOutOFBoundsException(i);
      }
      return this.u[i];
    });
    $ac_B.prototype.set = (function(i, v) {
      if (((i < 0) || (i >= this.u.length))) {
        $throwArrayIndexOutOFBoundsException(i);
      }
      this.u[i] = v;
    });
    $ac_B.prototype.copyTo = (function(srcPos, dest, destPos, length) {
      $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
      dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos);
    });
    $ac_B.prototype.clone__O = (function() {
      return new $ac_B(this.u.slice());
    });
    function $ac_S(arg) {
      if (((typeof arg) === "number")) {
        if ((arg < 0)) {
          $throwNegativeArraySizeException();
        }
        this.u = new Int16Array(arg);
      } else {
        this.u = arg;
      }
    }
    $ac_S.prototype = new $h_O();
    $ac_S.prototype.constructor = $ac_S;
    $ac_S.prototype.get = (function(i) {
      if (((i < 0) || (i >= this.u.length))) {
        $throwArrayIndexOutOFBoundsException(i);
      }
      return this.u[i];
    });
    $ac_S.prototype.set = (function(i, v) {
      if (((i < 0) || (i >= this.u.length))) {
        $throwArrayIndexOutOFBoundsException(i);
      }
      this.u[i] = v;
    });
    $ac_S.prototype.copyTo = (function(srcPos, dest, destPos, length) {
      $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
      dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos);
    });
    $ac_S.prototype.clone__O = (function() {
      return new $ac_S(this.u.slice());
    });
    function $ac_I(arg) {
      if (((typeof arg) === "number")) {
        if ((arg < 0)) {
          $throwNegativeArraySizeException();
        }
        this.u = new Int32Array(arg);
      } else {
        this.u = arg;
      }
    }
    $ac_I.prototype = new $h_O();
    $ac_I.prototype.constructor = $ac_I;
    $ac_I.prototype.get = (function(i) {
      if (((i < 0) || (i >= this.u.length))) {
        $throwArrayIndexOutOFBoundsException(i);
      }
      return this.u[i];
    });
    $ac_I.prototype.set = (function(i, v) {
      if (((i < 0) || (i >= this.u.length))) {
        $throwArrayIndexOutOFBoundsException(i);
      }
      this.u[i] = v;
    });
    $ac_I.prototype.copyTo = (function(srcPos, dest, destPos, length) {
      $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
      dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos);
    });
    $ac_I.prototype.clone__O = (function() {
      return new $ac_I(this.u.slice());
    });
    function $ac_J(arg) {
      if (((typeof arg) === "number")) {
        if ((arg < 0)) {
          $throwNegativeArraySizeException();
        }
        this.u = new Array(arg);
        for (var i = 0; (i < arg); (i++)) {
          this.u[i] = $L0;
        }
      } else {
        this.u = arg;
      }
    }
    $ac_J.prototype = new $h_O();
    $ac_J.prototype.constructor = $ac_J;
    $ac_J.prototype.get = (function(i) {
      if (((i < 0) || (i >= this.u.length))) {
        $throwArrayIndexOutOFBoundsException(i);
      }
      return this.u[i];
    });
    $ac_J.prototype.set = (function(i, v) {
      if (((i < 0) || (i >= this.u.length))) {
        $throwArrayIndexOutOFBoundsException(i);
      }
      this.u[i] = v;
    });
    $ac_J.prototype.copyTo = (function(srcPos, dest, destPos, length) {
      $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length);
    });
    $ac_J.prototype.clone__O = (function() {
      return new $ac_J(this.u.slice());
    });
    function $ac_F(arg) {
      if (((typeof arg) === "number")) {
        if ((arg < 0)) {
          $throwNegativeArraySizeException();
        }
        this.u = new Float32Array(arg);
      } else {
        this.u = arg;
      }
    }
    $ac_F.prototype = new $h_O();
    $ac_F.prototype.constructor = $ac_F;
    $ac_F.prototype.get = (function(i) {
      if (((i < 0) || (i >= this.u.length))) {
        $throwArrayIndexOutOFBoundsException(i);
      }
      return this.u[i];
    });
    $ac_F.prototype.set = (function(i, v) {
      if (((i < 0) || (i >= this.u.length))) {
        $throwArrayIndexOutOFBoundsException(i);
      }
      this.u[i] = v;
    });
    $ac_F.prototype.copyTo = (function(srcPos, dest, destPos, length) {
      $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
      dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos);
    });
    $ac_F.prototype.clone__O = (function() {
      return new $ac_F(this.u.slice());
    });
    function $ac_D(arg) {
      if (((typeof arg) === "number")) {
        if ((arg < 0)) {
          $throwNegativeArraySizeException();
        }
        this.u = new Float64Array(arg);
      } else {
        this.u = arg;
      }
    }
    $ac_D.prototype = new $h_O();
    $ac_D.prototype.constructor = $ac_D;
    $ac_D.prototype.get = (function(i) {
      if (((i < 0) || (i >= this.u.length))) {
        $throwArrayIndexOutOFBoundsException(i);
      }
      return this.u[i];
    });
    $ac_D.prototype.set = (function(i, v) {
      if (((i < 0) || (i >= this.u.length))) {
        $throwArrayIndexOutOFBoundsException(i);
      }
      this.u[i] = v;
    });
    $ac_D.prototype.copyTo = (function(srcPos, dest, destPos, length) {
      $arraycopyCheckBounds(this.u.length, srcPos, dest.u.length, destPos, length);
      dest.u.set(this.u.subarray(srcPos, ((srcPos + length) | 0)), destPos);
    });
    $ac_D.prototype.clone__O = (function() {
      return new $ac_D(this.u.slice());
    });
    function $TypeData() {
      this.constr = (void 0);
      this.ancestors = null;
      this.componentData = null;
      this.arrayBase = null;
      this.arrayDepth = 0;
      this.zero = null;
      this.arrayEncodedName = "";
      this._classOf = (void 0);
      this._arrayOf = (void 0);
      this.isAssignableFromFun = (void 0);
      this.wrapArray = (void 0);
      this.isJSType = false;
      this.name = "";
      this.isPrimitive = false;
      this.isInterface = false;
      this.isArrayClass = false;
      this.isInstance = (void 0);
    }
    $TypeData.prototype.initPrim = (function(zero, arrayEncodedName, displayName, arrayClass, typedArrayClass) {
      this.ancestors = ({});
      this.zero = zero;
      this.arrayEncodedName = arrayEncodedName;
      var self = this;
      this.isAssignableFromFun = ((that) => (that === self));
      this.name = displayName;
      this.isPrimitive = true;
      this.isInstance = ((obj) => false);
      if ((arrayClass !== (void 0))) {
        this._arrayOf = new $TypeData().initSpecializedArray(this, arrayClass, typedArrayClass);
      }
      return this;
    });
    $TypeData.prototype.initClass = (function(kindOrCtor, fullName, ancestors, isInstance) {
      var internalName = Object.getOwnPropertyNames(ancestors)[0];
      this.ancestors = ancestors;
      this.arrayEncodedName = (("L" + fullName) + ";");
      this.isAssignableFromFun = ((that) => (!(!that.ancestors[internalName])));
      this.isJSType = (kindOrCtor === 2);
      this.name = fullName;
      this.isInterface = (kindOrCtor === 1);
      this.isInstance = (isInstance || ((obj) => (!(!((obj && obj.$classData) && obj.$classData.ancestors[internalName])))));
      if (((typeof kindOrCtor) !== "number")) {
        kindOrCtor.prototype.$classData = this;
      }
      return this;
    });
    $TypeData.prototype.initSpecializedArray = (function(componentData, arrayClass, typedArrayClass, isAssignableFromFun) {
      arrayClass.prototype.$classData = this;
      var name = ("[" + componentData.arrayEncodedName);
      this.constr = arrayClass;
      this.ancestors = ({
        jl_Cloneable: 1,
        Ljava_io_Serializable: 1
      });
      this.componentData = componentData;
      this.arrayBase = componentData;
      this.arrayDepth = 1;
      this.arrayEncodedName = name;
      this.name = name;
      this.isArrayClass = true;
      var self = this;
      this.isAssignableFromFun = (isAssignableFromFun || ((that) => (self === that)));
      this.wrapArray = (typedArrayClass ? ((array) => new arrayClass(new typedArrayClass(array))) : ((array) => new arrayClass(array)));
      this.isInstance = ((obj) => (obj instanceof arrayClass));
      return this;
    });
    $TypeData.prototype.initArray = (function(componentData) {
      function ArrayClass(arg) {
        if (((typeof arg) === "number")) {
          if ((arg < 0)) {
            $throwNegativeArraySizeException();
          }
          this.u = new Array(arg);
          for (var i = 0; (i < arg); (i++)) {
            this.u[i] = null;
          }
        } else {
          this.u = arg;
        }
      }
      ArrayClass.prototype = new $ah_O();
      ArrayClass.prototype.constructor = ArrayClass;
      ArrayClass.prototype.set = (function(i, v) {
        if (((i < 0) || (i >= this.u.length))) {
          $throwArrayIndexOutOFBoundsException(i);
        }
        if ((((v !== null) && (!componentData.isJSType)) && (!componentData.isInstance(v)))) {
          $throwArrayStoreException(v);
        }
        this.u[i] = v;
      });
      ArrayClass.prototype.copyTo = (function(srcPos, dest, destPos, length) {
        $arraycopyGeneric(this.u, srcPos, dest.u, destPos, length);
      });
      ArrayClass.prototype.clone__O = (function() {
        return new ArrayClass(this.u.slice());
      });
      ArrayClass.prototype.$classData = this;
      var arrayBase = (componentData.arrayBase || componentData);
      var arrayDepth = (componentData.arrayDepth + 1);
      var name = ("[" + componentData.arrayEncodedName);
      this.constr = ArrayClass;
      this.ancestors = ({
        jl_Cloneable: 1,
        Ljava_io_Serializable: 1
      });
      this.componentData = componentData;
      this.arrayBase = arrayBase;
      this.arrayDepth = arrayDepth;
      this.arrayEncodedName = name;
      this.name = name;
      this.isArrayClass = true;
      var isAssignableFromFun = ((that) => {
        var thatDepth = that.arrayDepth;
        return ((thatDepth === arrayDepth) ? arrayBase.isAssignableFromFun(that.arrayBase) : ((thatDepth > arrayDepth) && (arrayBase === $d_O)));
      });
      this.isAssignableFromFun = isAssignableFromFun;
      this.wrapArray = ((array) => new ArrayClass(array));
      var self = this;
      this.isInstance = ((obj) => {
        var data = (obj && obj.$classData);
        return ((!(!data)) && ((data === self) || isAssignableFromFun(data)));
      });
      return this;
    });
    $TypeData.prototype.getArrayOf = (function() {
      if ((!this._arrayOf)) {
        this._arrayOf = new $TypeData().initArray(this);
      }
      return this._arrayOf;
    });
    $TypeData.prototype.isAssignableFrom = (function(that) {
      return ((this === that) || this.isAssignableFromFun(that));
    });
    function $isArrayOf_O(obj, depth) {
      var data = (obj && obj.$classData);
      if ((!data)) {
        return false;
      } else {
        var arrayDepth = data.arrayDepth;
        return ((arrayDepth === depth) ? (!data.arrayBase.isPrimitive) : (arrayDepth > depth));
      }
    }
    function $isArrayOf_Z(obj, depth) {
      return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_Z))));
    }
    function $isArrayOf_C(obj, depth) {
      return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_C))));
    }
    function $isArrayOf_B(obj, depth) {
      return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_B))));
    }
    function $isArrayOf_S(obj, depth) {
      return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_S))));
    }
    function $isArrayOf_I(obj, depth) {
      return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_I))));
    }
    function $isArrayOf_J(obj, depth) {
      return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_J))));
    }
    function $isArrayOf_F(obj, depth) {
      return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_F))));
    }
    function $isArrayOf_D(obj, depth) {
      return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_D))));
    }
    function $asArrayOf_O(obj, depth) {
      if (($isArrayOf_O(obj, depth) || (obj === null))) {
        return obj;
      } else {
        $throwArrayCastException(obj, "Ljava.lang.Object;", depth);
      }
    }
    function $asArrayOf_Z(obj, depth) {
      if (($isArrayOf_Z(obj, depth) || (obj === null))) {
        return obj;
      } else {
        $throwArrayCastException(obj, "Z", depth);
      }
    }
    function $asArrayOf_C(obj, depth) {
      if (($isArrayOf_C(obj, depth) || (obj === null))) {
        return obj;
      } else {
        $throwArrayCastException(obj, "C", depth);
      }
    }
    function $asArrayOf_B(obj, depth) {
      if (($isArrayOf_B(obj, depth) || (obj === null))) {
        return obj;
      } else {
        $throwArrayCastException(obj, "B", depth);
      }
    }
    function $asArrayOf_S(obj, depth) {
      if (($isArrayOf_S(obj, depth) || (obj === null))) {
        return obj;
      } else {
        $throwArrayCastException(obj, "S", depth);
      }
    }
    function $asArrayOf_I(obj, depth) {
      if (($isArrayOf_I(obj, depth) || (obj === null))) {
        return obj;
      } else {
        $throwArrayCastException(obj, "I", depth);
      }
    }
    function $asArrayOf_J(obj, depth) {
      if (($isArrayOf_J(obj, depth) || (obj === null))) {
        return obj;
      } else {
        $throwArrayCastException(obj, "J", depth);
      }
    }
    function $asArrayOf_F(obj, depth) {
      if (($isArrayOf_F(obj, depth) || (obj === null))) {
        return obj;
      } else {
        $throwArrayCastException(obj, "F", depth);
      }
    }
    function $asArrayOf_D(obj, depth) {
      if (($isArrayOf_D(obj, depth) || (obj === null))) {
        return obj;
      } else {
        $throwArrayCastException(obj, "D", depth);
      }
    }
    var $d_O = new $TypeData();
    $d_O.ancestors = ({});
    $d_O.arrayEncodedName = "Ljava.lang.Object;";
    $d_O.isAssignableFromFun = ((that) => (!that.isPrimitive));
    $d_O.name = "java.lang.Object";
    $d_O.isInstance = ((obj) => (obj !== null));
    $d_O._arrayOf = new $TypeData().initSpecializedArray($d_O, $ac_O, (void 0), ((that) => {
      var thatDepth = that.arrayDepth;
      return ((thatDepth === 1) ? (!that.arrayBase.isPrimitive) : (thatDepth > 1));
    }));
    $c_O.prototype.$classData = $d_O;
    new $TypeData().initPrim((void 0), "V", "void", (void 0), (void 0));
    var $d_Z = new $TypeData().initPrim(false, "Z", "boolean", $ac_Z, (void 0));
    var $d_C = new $TypeData().initPrim(0, "C", "char", $ac_C, Uint16Array);
    var $d_B = new $TypeData().initPrim(0, "B", "byte", $ac_B, Int8Array);
    var $d_S = new $TypeData().initPrim(0, "S", "short", $ac_S, Int16Array);
    var $d_I = new $TypeData().initPrim(0, "I", "int", $ac_I, Int32Array);
    var $d_J = new $TypeData().initPrim(null, "J", "long", $ac_J, (void 0));
    var $d_F = new $TypeData().initPrim(0.0, "F", "float", $ac_F, Float32Array);
    var $d_D = new $TypeData().initPrim(0.0, "D", "double", $ac_D, Float64Array);
    function $s_LTray__main__AT__V(as) {
      var this$1 = $m_LTray$();
      this$1.tray__sjs_js_Promise();
    }
    /** @constructor */
    function $c_LTray$() {
      $n_LTray$ = this;
      $m_s_concurrent_ExecutionContext$().global__s_concurrent_ExecutionContextExecutor();
    }
    $c_LTray$.prototype = new $h_O();
    $c_LTray$.prototype.constructor = $c_LTray$;
    $c_LTray$.prototype;
    $c_LTray$.prototype.trayMenu__sjs_js_Promise = (function() {
      var x$proxy1 = new $c_T3("tauri", "Tauri", "https://tauri.app");
      var x$proxy2 = new $c_T3("scala.js", "Scala.js", "https://scala-js.org");
      var menus = new $c_sci_$colon$colon(x$proxy1, new $c_sci_$colon$colon(x$proxy2, $m_sci_Nil$()));
      var f = ((mi) => {
        var mi$1 = $as_T3(mi);
        var text$proxy1 = $as_T($n(mi$1).T3__f__2);
        var fields = $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_T2.getArrayOf().constr)([new $c_T2("text", text$proxy1)]));
        var _\uff3fobj = $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields);
        var value$proxy1 = $as_T($n(mi$1).T3__f__1);
        _\uff3fobj.id = value$proxy1;
        var url$1 = $as_T($n(mi$1).T3__f__3);
        var value$proxy2 = new $c_sjsr_AnonFunction1(((id) => {
          var id$1 = $as_T(id);
          $m_LTray$().trayMenuHandler__T__T__V(url$1, id$1);
        }));
        var value = $m_sjs_js_Any$().fromFunction1__F1__sjs_js_Function1(value$proxy2);
        _\uff3fobj.action = value;
        return _\uff3fobj;
      });
      if ((menus === $m_sci_Nil$())) {
        var menuItems = $m_sci_Nil$();
      } else {
        var arg1 = menus.sci_$colon$colon__f_head;
        var h = new $c_sci_$colon$colon(f(arg1), $m_sci_Nil$());
        var t = h;
        var rest = menus.sci_$colon$colon__f_next;
        while ((rest !== $m_sci_Nil$())) {
          var arg1$1 = $n(rest).head__O();
          var nx = new $c_sci_$colon$colon(f(arg1$1), $m_sci_Nil$());
          $n(t).sci_$colon$colon__f_next = nx;
          t = nx;
          rest = $as_sci_List($n(rest).tail__O());
        }
        var menuItems = h;
      }
      var fields$1 = $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_T2.getArrayOf().constr)([]));
      var _\uff3fobj$1 = $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields$1);
      var value$proxy3 = $m_sjs_js_JSConverters$JSRichIterableOnce$().toJSArray$extension__sc_IterableOnce__sjs_js_Array(menuItems);
      _\uff3fobj$1.items = value$proxy3;
      return Menu.new(_\uff3fobj$1);
    });
    $c_LTray$.prototype.trayMenuHandler__T__T__V = (function(url, id) {
      var x = ((("selected " + id) + ": open ") + url);
      var this$2 = $m_s_Console$();
      var this$3 = $n(this$2.out__Ljava_io_PrintStream());
      this$3.java$lang$JSConsoleBasedPrintStream$$printString__T__V((x + "\n"));
      window.location.replace(url);
    });
    $c_LTray$.prototype.trayHandler__Lorg_scalablytyped_runtime_StObject__V = (function(e) {
      var x = ("tray event : " + e);
      var this$2 = $m_s_Console$();
      var this$3 = $n(this$2.out__Ljava_io_PrintStream());
      this$3.java$lang$JSConsoleBasedPrintStream$$printString__T__V((x + "\n"));
    });
    $c_LTray$.prototype.tray__sjs_js_Promise = (function() {
      var \u03b41$ = defaultWindowIcon();
      return \u03b41$.then(((icon) => {
        var \u03b42$ = $m_LTray$().trayMenu__sjs_js_Promise();
        return \u03b42$.then(((menu) => {
          var fields = $m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_T2.getArrayOf().constr)([]));
          var _\uff3fobj = $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields);
          _\uff3fobj.icon = icon;
          _\uff3fobj.menu = menu;
          var value$proxy4 = new $c_sjsr_AnonFunction1(((e) => {
            $m_LTray$().trayHandler__Lorg_scalablytyped_runtime_StObject__V(e);
          }));
          var value = $m_sjs_js_Any$().fromFunction1__F1__sjs_js_Function1(value$proxy4);
          _\uff3fobj.action = value;
          return TrayIcon.new(_\uff3fobj);
        }));
      }));
    });
    new $TypeData().initClass($c_LTray$, "Tray$", ({
      LTray$: 1
    }));
    var $n_LTray$;
    function $m_LTray$() {
      if ((!$n_LTray$)) {
        $n_LTray$ = new $c_LTray$();
      }
      return $n_LTray$;
    }
    /** @constructor */
    function $c_jl_FloatingPointBits$() {
      this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$_areTypedArraysSupported = false;
      this.jl_FloatingPointBits$__f_arrayBuffer = null;
      this.jl_FloatingPointBits$__f_int32Array = null;
      this.jl_FloatingPointBits$__f_float64Array = null;
      this.jl_FloatingPointBits$__f_areTypedArraysBigEndian = false;
      this.jl_FloatingPointBits$__f_highOffset = 0;
      this.jl_FloatingPointBits$__f_lowOffset = 0;
      this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$doublePowsOf2 = null;
      $n_jl_FloatingPointBits$ = this;
      this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$_areTypedArraysSupported = true;
      this.jl_FloatingPointBits$__f_arrayBuffer = new ArrayBuffer(8);
      this.jl_FloatingPointBits$__f_int32Array = new Int32Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 2);
      new Float32Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 2);
      this.jl_FloatingPointBits$__f_float64Array = new Float64Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 1);
      this.jl_FloatingPointBits$__f_int32Array[0] = 16909060;
      this.jl_FloatingPointBits$__f_areTypedArraysBigEndian = ($uB(new Int8Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 8)[0]) === 1);
      this.jl_FloatingPointBits$__f_highOffset = (this.jl_FloatingPointBits$__f_areTypedArraysBigEndian ? 0 : 1);
      this.jl_FloatingPointBits$__f_lowOffset = (this.jl_FloatingPointBits$__f_areTypedArraysBigEndian ? 1 : 0);
      this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$doublePowsOf2 = null;
    }
    $c_jl_FloatingPointBits$.prototype = new $h_O();
    $c_jl_FloatingPointBits$.prototype.constructor = $c_jl_FloatingPointBits$;
    $c_jl_FloatingPointBits$.prototype;
    $c_jl_FloatingPointBits$.prototype.numberHashCode__D__I = (function(value) {
      var iv = $uI((value | 0.0));
      if (((iv === value) && ((1.0 / value) !== (-Infinity)))) {
        return iv;
      } else {
        this.jl_FloatingPointBits$__f_float64Array[0] = value;
        return ($uI(this.jl_FloatingPointBits$__f_int32Array[0]) ^ $uI(this.jl_FloatingPointBits$__f_int32Array[1]));
      }
    });
    new $TypeData().initClass($c_jl_FloatingPointBits$, "java.lang.FloatingPointBits$", ({
      jl_FloatingPointBits$: 1
    }));
    var $n_jl_FloatingPointBits$;
    function $m_jl_FloatingPointBits$() {
      if ((!$n_jl_FloatingPointBits$)) {
        $n_jl_FloatingPointBits$ = new $c_jl_FloatingPointBits$();
      }
      return $n_jl_FloatingPointBits$;
    }
    /** @constructor */
    function $c_jl_System$Streams$() {
      this.jl_System$Streams$__f_out = null;
      this.jl_System$Streams$__f_err = null;
      $n_jl_System$Streams$ = this;
      this.jl_System$Streams$__f_out = new $c_jl_JSConsoleBasedPrintStream(false);
      this.jl_System$Streams$__f_err = new $c_jl_JSConsoleBasedPrintStream(true);
    }
    $c_jl_System$Streams$.prototype = new $h_O();
    $c_jl_System$Streams$.prototype.constructor = $c_jl_System$Streams$;
    $c_jl_System$Streams$.prototype;
    new $TypeData().initClass($c_jl_System$Streams$, "java.lang.System$Streams$", ({
      jl_System$Streams$: 1
    }));
    var $n_jl_System$Streams$;
    function $m_jl_System$Streams$() {
      if ((!$n_jl_System$Streams$)) {
        $n_jl_System$Streams$ = new $c_jl_System$Streams$();
      }
      return $n_jl_System$Streams$;
    }
    function $f_jl_Void__hashCode__I($thiz) {
      return 0;
    }
    new $TypeData().initClass(0, "java.lang.Void", ({
      jl_Void: 1
    }), ((x) => (x === (void 0))));
    function $p_jl_reflect_Array$__mismatch__O__E($thiz, array) {
      $n(array);
      throw new $c_jl_IllegalArgumentException("argument type mismatch");
    }
    /** @constructor */
    function $c_jl_reflect_Array$() {
    }
    $c_jl_reflect_Array$.prototype = new $h_O();
    $c_jl_reflect_Array$.prototype.constructor = $c_jl_reflect_Array$;
    $c_jl_reflect_Array$.prototype;
    $c_jl_reflect_Array$.prototype.getLength__O__I = (function(array) {
      if ((array instanceof $ac_O)) {
        var x2 = $asArrayOf_O(array, 1);
        return $n(x2).u.length;
      } else if ((array instanceof $ac_Z)) {
        var x3 = $asArrayOf_Z(array, 1);
        return $n(x3).u.length;
      } else if ((array instanceof $ac_C)) {
        var x4 = $asArrayOf_C(array, 1);
        return $n(x4).u.length;
      } else if ((array instanceof $ac_B)) {
        var x5 = $asArrayOf_B(array, 1);
        return $n(x5).u.length;
      } else if ((array instanceof $ac_S)) {
        var x6 = $asArrayOf_S(array, 1);
        return $n(x6).u.length;
      } else if ((array instanceof $ac_I)) {
        var x7 = $asArrayOf_I(array, 1);
        return $n(x7).u.length;
      } else if ((array instanceof $ac_J)) {
        var x8 = $asArrayOf_J(array, 1);
        return $n(x8).u.length;
      } else if ((array instanceof $ac_F)) {
        var x9 = $asArrayOf_F(array, 1);
        return $n(x9).u.length;
      } else if ((array instanceof $ac_D)) {
        var x10 = $asArrayOf_D(array, 1);
        return $n(x10).u.length;
      } else {
        $p_jl_reflect_Array$__mismatch__O__E(this, array);
      }
    });
    new $TypeData().initClass($c_jl_reflect_Array$, "java.lang.reflect.Array$", ({
      jl_reflect_Array$: 1
    }));
    var $n_jl_reflect_Array$;
    function $m_jl_reflect_Array$() {
      if ((!$n_jl_reflect_Array$)) {
        $n_jl_reflect_Array$ = new $c_jl_reflect_Array$();
      }
      return $n_jl_reflect_Array$;
    }
    /** @constructor */
    function $c_RTLong(lo, hi) {
      this.RTLong__f_lo = 0;
      this.RTLong__f_hi = 0;
      this.RTLong__f_lo = lo;
      this.RTLong__f_hi = hi;
    }
    $c_RTLong.prototype = new $h_O();
    $c_RTLong.prototype.constructor = $c_RTLong;
    $c_RTLong.prototype;
    $c_RTLong.prototype.equals__O__Z = (function(that) {
      if ((that instanceof $c_RTLong)) {
        var x2 = $as_RTLong(that);
        return ((this.RTLong__f_lo === $n(x2).RTLong__f_lo) && (this.RTLong__f_hi === $n(x2).RTLong__f_hi));
      } else {
        return false;
      }
    });
    $c_RTLong.prototype.hashCode__I = (function() {
      return (this.RTLong__f_lo ^ this.RTLong__f_hi);
    });
    $c_RTLong.prototype.toString__T = (function() {
      return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T(this.RTLong__f_lo, this.RTLong__f_hi);
    });
    $c_RTLong.prototype.toInt__I = (function() {
      return this.RTLong__f_lo;
    });
    $c_RTLong.prototype.toFloat__F = (function() {
      return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toFloat__I__I__F(this.RTLong__f_lo, this.RTLong__f_hi);
    });
    $c_RTLong.prototype.toDouble__D = (function() {
      return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this.RTLong__f_lo, this.RTLong__f_hi);
    });
    $c_RTLong.prototype.byteValue__B = (function() {
      return ((this.RTLong__f_lo << 24) >> 24);
    });
    $c_RTLong.prototype.shortValue__S = (function() {
      return ((this.RTLong__f_lo << 16) >> 16);
    });
    $c_RTLong.prototype.intValue__I = (function() {
      return this.RTLong__f_lo;
    });
    $c_RTLong.prototype.longValue__J = (function() {
      return $uJ(this);
    });
    $c_RTLong.prototype.floatValue__F = (function() {
      return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toFloat__I__I__F(this.RTLong__f_lo, this.RTLong__f_hi);
    });
    $c_RTLong.prototype.doubleValue__D = (function() {
      return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this.RTLong__f_lo, this.RTLong__f_hi);
    });
    $c_RTLong.prototype.compareTo__O__I = (function(that) {
      var b = $as_RTLong(that);
      return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, $n(b).RTLong__f_lo, $n(b).RTLong__f_hi);
    });
    $c_RTLong.prototype.compareTo__jl_Long__I = (function(that) {
      return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, $n(that).RTLong__f_lo, $n(that).RTLong__f_hi);
    });
    $c_RTLong.prototype.equals__RTLong__Z = (function(b) {
      return ((this.RTLong__f_lo === $n(b).RTLong__f_lo) && (this.RTLong__f_hi === $n(b).RTLong__f_hi));
    });
    $c_RTLong.prototype.notEquals__RTLong__Z = (function(b) {
      return (!((this.RTLong__f_lo === $n(b).RTLong__f_lo) && (this.RTLong__f_hi === $n(b).RTLong__f_hi)));
    });
    $c_RTLong.prototype.$less__RTLong__Z = (function(b) {
      var ahi = this.RTLong__f_hi;
      var bhi = $n(b).RTLong__f_hi;
      return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) < ((-2147483648) ^ $n(b).RTLong__f_lo)) : (ahi < bhi));
    });
    $c_RTLong.prototype.$less$eq__RTLong__Z = (function(b) {
      var ahi = this.RTLong__f_hi;
      var bhi = $n(b).RTLong__f_hi;
      return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) <= ((-2147483648) ^ $n(b).RTLong__f_lo)) : (ahi < bhi));
    });
    $c_RTLong.prototype.$greater__RTLong__Z = (function(b) {
      var ahi = this.RTLong__f_hi;
      var bhi = $n(b).RTLong__f_hi;
      return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) > ((-2147483648) ^ $n(b).RTLong__f_lo)) : (ahi > bhi));
    });
    $c_RTLong.prototype.$greater$eq__RTLong__Z = (function(b) {
      var ahi = this.RTLong__f_hi;
      var bhi = $n(b).RTLong__f_hi;
      return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) >= ((-2147483648) ^ $n(b).RTLong__f_lo)) : (ahi > bhi));
    });
    $c_RTLong.prototype.unary_$tilde__RTLong = (function() {
      return new $c_RTLong((~this.RTLong__f_lo), (~this.RTLong__f_hi));
    });
    $c_RTLong.prototype.$bar__RTLong__RTLong = (function(b) {
      return new $c_RTLong((this.RTLong__f_lo | $n(b).RTLong__f_lo), (this.RTLong__f_hi | $n(b).RTLong__f_hi));
    });
    $c_RTLong.prototype.$amp__RTLong__RTLong = (function(b) {
      return new $c_RTLong((this.RTLong__f_lo & $n(b).RTLong__f_lo), (this.RTLong__f_hi & $n(b).RTLong__f_hi));
    });
    $c_RTLong.prototype.$up__RTLong__RTLong = (function(b) {
      return new $c_RTLong((this.RTLong__f_lo ^ $n(b).RTLong__f_lo), (this.RTLong__f_hi ^ $n(b).RTLong__f_hi));
    });
    $c_RTLong.prototype.$less$less__I__RTLong = (function(n) {
      var lo = this.RTLong__f_lo;
      return new $c_RTLong((((32 & n) === 0) ? (lo << n) : 0), (((32 & n) === 0) ? (((((lo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (this.RTLong__f_hi << n)) : (lo << n)));
    });
    $c_RTLong.prototype.$greater$greater$greater__I__RTLong = (function(n) {
      var hi = this.RTLong__f_hi;
      return new $c_RTLong((((32 & n) === 0) ? (((this.RTLong__f_lo >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : ((hi >>> n) | 0)), (((32 & n) === 0) ? ((hi >>> n) | 0) : 0));
    });
    $c_RTLong.prototype.$greater$greater__I__RTLong = (function(n) {
      var hi = this.RTLong__f_hi;
      return new $c_RTLong((((32 & n) === 0) ? (((this.RTLong__f_lo >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : (hi >> n)), (((32 & n) === 0) ? (hi >> n) : (hi >> 31)));
    });
    $c_RTLong.prototype.unary_$minus__RTLong = (function() {
      var lo = this.RTLong__f_lo;
      var hi = this.RTLong__f_hi;
      return new $c_RTLong(((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)));
    });
    $c_RTLong.prototype.$plus__RTLong__RTLong = (function(b) {
      var alo = this.RTLong__f_lo;
      var ahi = this.RTLong__f_hi;
      var bhi = $n(b).RTLong__f_hi;
      var lo = ((alo + $n(b).RTLong__f_lo) | 0);
      return new $c_RTLong(lo, ((((-2147483648) ^ lo) < ((-2147483648) ^ alo)) ? ((1 + ((ahi + bhi) | 0)) | 0) : ((ahi + bhi) | 0)));
    });
    $c_RTLong.prototype.$minus__RTLong__RTLong = (function(b) {
      var alo = this.RTLong__f_lo;
      var ahi = this.RTLong__f_hi;
      var bhi = $n(b).RTLong__f_hi;
      var lo = ((alo - $n(b).RTLong__f_lo) | 0);
      return new $c_RTLong(lo, ((((-2147483648) ^ lo) > ((-2147483648) ^ alo)) ? (((-1) + ((ahi - bhi) | 0)) | 0) : ((ahi - bhi) | 0)));
    });
    $c_RTLong.prototype.$times__RTLong__RTLong = (function(b) {
      var alo = this.RTLong__f_lo;
      var blo = $n(b).RTLong__f_lo;
      var a0 = (65535 & alo);
      var a1 = ((alo >>> 16) | 0);
      var b0 = (65535 & blo);
      var b1 = ((blo >>> 16) | 0);
      var a0b0 = Math.imul(a0, b0);
      var a1b0 = Math.imul(a1, b0);
      var a0b1 = Math.imul(a0, b1);
      var lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
      var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
      var hi = ((((((((Math.imul(alo, $n(b).RTLong__f_hi) + Math.imul(this.RTLong__f_hi, blo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
      return new $c_RTLong(lo, hi);
    });
    $c_RTLong.prototype.$div__RTLong__RTLong = (function(b) {
      var this$1$1 = $m_RTLong$();
      var lo = this$1$1.divideImpl__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, $n(b).RTLong__f_lo, $n(b).RTLong__f_hi);
      return new $c_RTLong(lo, this$1$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn);
    });
    $c_RTLong.prototype.$percent__RTLong__RTLong = (function(b) {
      var this$1$1 = $m_RTLong$();
      var lo = this$1$1.remainderImpl__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, $n(b).RTLong__f_lo, $n(b).RTLong__f_hi);
      return new $c_RTLong(lo, this$1$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn);
    });
    function $as_RTLong(obj) {
      return (((obj instanceof $c_RTLong) || (obj === null)) ? obj : $throwClassCastException(obj, "org.scalajs.linker.runtime.RuntimeLong"));
    }
    new $TypeData().initClass($c_RTLong, "org.scalajs.linker.runtime.RuntimeLong", ({
      RTLong: 1
    }));
    function $p_RTLong$__toUnsignedString__I__I__T($thiz, lo, hi) {
      if ((((-2097152) & hi) === 0)) {
        var this$1 = ((4.294967296E9 * hi) + $uD((lo >>> 0.0)));
        return ("" + this$1);
      } else {
        return $as_T($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, lo, hi, 1000000000, 0, 2));
      }
    }
    function $p_RTLong$__unsigned_$div__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
      if ((((-2097152) & ahi) === 0)) {
        if ((((-2097152) & bhi) === 0)) {
          var aDouble = ((4.294967296E9 * ahi) + $uD((alo >>> 0.0)));
          var bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0.0)));
          var rDouble = (aDouble / bDouble);
          var x = (rDouble / 4.294967296E9);
          $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = $uI((x | 0.0));
          return $uI((rDouble | 0.0));
        } else {
          $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
          return 0;
        }
      } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
        var pow = ((31 - $uI(Math.clz32(blo))) | 0);
        $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((ahi >>> pow) | 0);
        return (((alo >>> pow) | 0) | ((ahi << 1) << ((31 - pow) | 0)));
      } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
        var pow$2 = ((31 - $uI(Math.clz32(bhi))) | 0);
        $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
        return ((ahi >>> pow$2) | 0);
      } else {
        return $uI($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 0));
      }
    }
    function $p_RTLong$__unsigned_$percent__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
      if ((((-2097152) & ahi) === 0)) {
        if ((((-2097152) & bhi) === 0)) {
          var aDouble = ((4.294967296E9 * ahi) + $uD((alo >>> 0.0)));
          var bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0.0)));
          var rDouble = (aDouble % bDouble);
          var x = (rDouble / 4.294967296E9);
          $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = $uI((x | 0.0));
          return $uI((rDouble | 0.0));
        } else {
          $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
          return alo;
        }
      } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
        $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
        return (alo & (((-1) + blo) | 0));
      } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
        $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (ahi & (((-1) + bhi) | 0));
        return alo;
      } else {
        return $uI($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 1));
      }
    }
    function $p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, ask) {
      var shift = ((((bhi !== 0) ? $uI(Math.clz32(bhi)) : ((32 + $uI(Math.clz32(blo))) | 0)) - ((ahi !== 0) ? $uI(Math.clz32(ahi)) : ((32 + $uI(Math.clz32(alo))) | 0))) | 0);
      var n = shift;
      var lo = (((32 & n) === 0) ? (blo << n) : 0);
      var hi = (((32 & n) === 0) ? (((((blo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (bhi << n)) : (blo << n));
      var bShiftLo = lo;
      var bShiftHi = hi;
      var remLo = alo;
      var remHi = ahi;
      var quotLo = 0;
      var quotHi = 0;
      while (((shift >= 0) && (((-2097152) & remHi) !== 0))) {
        var alo$1 = remLo;
        var ahi$1 = remHi;
        var blo$1 = bShiftLo;
        var bhi$1 = bShiftHi;
        if (((ahi$1 === bhi$1) ? (((-2147483648) ^ alo$1) >= ((-2147483648) ^ blo$1)) : (((-2147483648) ^ ahi$1) >= ((-2147483648) ^ bhi$1)))) {
          var lo$1 = remLo;
          var hi$1 = remHi;
          var lo$2 = bShiftLo;
          var hi$2 = bShiftHi;
          var lo$3 = ((lo$1 - lo$2) | 0);
          var hi$3 = ((((-2147483648) ^ lo$3) > ((-2147483648) ^ lo$1)) ? (((-1) + ((hi$1 - hi$2) | 0)) | 0) : ((hi$1 - hi$2) | 0));
          remLo = lo$3;
          remHi = hi$3;
          if ((shift < 32)) {
            quotLo = (quotLo | (1 << shift));
          } else {
            quotHi = (quotHi | (1 << shift));
          }
        }
        shift = (((-1) + shift) | 0);
        var lo$4 = bShiftLo;
        var hi$4 = bShiftHi;
        var lo$5 = (((lo$4 >>> 1) | 0) | (hi$4 << 31));
        var hi$5 = ((hi$4 >>> 1) | 0);
        bShiftLo = lo$5;
        bShiftHi = hi$5;
      }
      var alo$2 = remLo;
      var ahi$2 = remHi;
      if (((ahi$2 === bhi) ? (((-2147483648) ^ alo$2) >= ((-2147483648) ^ blo)) : (((-2147483648) ^ ahi$2) >= ((-2147483648) ^ bhi)))) {
        var lo$6 = remLo;
        var hi$6 = remHi;
        var remDouble = ((4.294967296E9 * hi$6) + $uD((lo$6 >>> 0.0)));
        var bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0.0)));
        if ((ask !== 1)) {
          var x = (remDouble / bDouble);
          var lo$7 = $uI((x | 0.0));
          var x$1 = (x / 4.294967296E9);
          var hi$7 = $uI((x$1 | 0.0));
          var lo$8 = quotLo;
          var hi$8 = quotHi;
          var lo$9 = ((lo$8 + lo$7) | 0);
          var hi$9 = ((((-2147483648) ^ lo$9) < ((-2147483648) ^ lo$8)) ? ((1 + ((hi$8 + hi$7) | 0)) | 0) : ((hi$8 + hi$7) | 0));
          quotLo = lo$9;
          quotHi = hi$9;
        }
        if ((ask !== 0)) {
          var rem_mod_bDouble = (remDouble % bDouble);
          remLo = $uI((rem_mod_bDouble | 0.0));
          var x$2 = (rem_mod_bDouble / 4.294967296E9);
          remHi = $uI((x$2 | 0.0));
        }
      }
      if ((ask === 0)) {
        $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = quotHi;
        return quotLo;
      } else if ((ask === 1)) {
        $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = remHi;
        return remLo;
      } else {
        var lo$10 = quotLo;
        var hi$10 = quotHi;
        var quot = ((4.294967296E9 * hi$10) + $uD((lo$10 >>> 0.0)));
        var this$7 = remLo;
        var remStr = ("" + this$7);
        var start = remStr.length;
        return ((("" + quot) + $as_T("000000000".substring(start))) + remStr);
      }
    }
    /** @constructor */
    function $c_RTLong$() {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
    }
    $c_RTLong$.prototype = new $h_O();
    $c_RTLong$.prototype.constructor = $c_RTLong$;
    $c_RTLong$.prototype;
    $c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T = (function(lo, hi) {
      return ((hi === (lo >> 31)) ? ("" + lo) : ((hi < 0) ? ("-" + $p_RTLong$__toUnsignedString__I__I__T(this, ((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)))) : $p_RTLong$__toUnsignedString__I__I__T(this, lo, hi)));
    });
    $c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D = (function(lo, hi) {
      if ((hi < 0)) {
        var x = ((lo !== 0) ? (~hi) : ((-hi) | 0));
        var $x_1 = $uD((x >>> 0.0));
        var x$1 = ((-lo) | 0);
        return (-((4.294967296E9 * $x_1) + $uD((x$1 >>> 0.0))));
      } else {
        return ((4.294967296E9 * hi) + $uD((lo >>> 0.0)));
      }
    });
    $c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$toFloat__I__I__F = (function(lo, hi) {
      if ((hi < 0)) {
        var lo$1 = ((-lo) | 0);
        var hi$1 = ((lo !== 0) ? (~hi) : ((-hi) | 0));
        var abs__lo = lo$1;
        var abs__hi = hi$1;
      } else {
        var abs__lo = lo;
        var abs__hi = hi;
      }
      var hi$2 = abs__hi;
      if (((((-2097152) & hi$2) === 0) || ((65535 & abs__lo) === 0))) {
        var compressedAbsLo = abs__lo;
      } else {
        var compressedAbsLo = (32768 | ((-65536) & abs__lo));
      }
      var x = abs__hi;
      var absRes = ((4.294967296E9 * $uD((x >>> 0.0))) + $uD((compressedAbsLo >>> 0.0)));
      return Math.fround(((hi < 0) ? (-absRes) : absRes));
    });
    $c_RTLong$.prototype.fromInt__I__RTLong = (function(value) {
      return new $c_RTLong(value, (value >> 31));
    });
    $c_RTLong$.prototype.fromDouble__D__RTLong = (function(value) {
      var lo = this.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(value);
      return new $c_RTLong(lo, this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn);
    });
    $c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I = (function(value) {
      if ((value < (-9223372036854776e3))) {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (-2147483648);
        return 0;
      } else if ((value >= 9.223372036854776E18)) {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 2147483647;
        return (-1);
      } else {
        var rawLo = $uI((value | 0.0));
        var x = (value / 4.294967296E9);
        var rawHi = $uI((x | 0.0));
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (((value < 0.0) && (rawLo !== 0)) ? (((-1) + rawHi) | 0) : rawHi);
        return rawLo;
      }
    });
    $c_RTLong$.prototype.org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
      return ((ahi === bhi) ? ((alo === blo) ? 0 : ((((-2147483648) ^ alo) < ((-2147483648) ^ blo)) ? (-1) : 1)) : ((ahi < bhi) ? (-1) : 1));
    });
    $c_RTLong$.prototype.divideImpl__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
      if (((blo | bhi) === 0)) {
        throw new $c_jl_ArithmeticException("/ by zero");
      }
      if ((ahi === (alo >> 31))) {
        if ((bhi === (blo >> 31))) {
          if (((alo === (-2147483648)) && (blo === (-1)))) {
            this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
            return (-2147483648);
          } else {
            var lo = $intDiv(alo, blo);
            this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (lo >> 31);
            return lo;
          }
        } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
          this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (-1);
          return (-1);
        } else {
          this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
          return 0;
        }
      } else {
        if ((ahi < 0)) {
          var lo$1 = ((-alo) | 0);
          var hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
          var aAbs__lo = lo$1;
          var aAbs__hi = hi;
        } else {
          var aAbs__lo = alo;
          var aAbs__hi = ahi;
        }
        if ((bhi < 0)) {
          var lo$2 = ((-blo) | 0);
          var hi$1 = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
          var bAbs__lo = lo$2;
          var bAbs__hi = hi$1;
        } else {
          var bAbs__lo = blo;
          var bAbs__hi = bhi;
        }
        var absRLo = $p_RTLong$__unsigned_$div__I__I__I__I__I(this, aAbs__lo, aAbs__hi, bAbs__lo, bAbs__hi);
        if (((ahi ^ bhi) >= 0)) {
          return absRLo;
        } else {
          var hi$2 = this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
          this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
          return ((-absRLo) | 0);
        }
      }
    });
    $c_RTLong$.prototype.remainderImpl__I__I__I__I__I = (function(alo, ahi, blo, bhi) {
      if (((blo | bhi) === 0)) {
        throw new $c_jl_ArithmeticException("/ by zero");
      }
      if ((ahi === (alo >> 31))) {
        if ((bhi === (blo >> 31))) {
          if ((blo !== (-1))) {
            var lo = $intMod(alo, blo);
            this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (lo >> 31);
            return lo;
          } else {
            this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
            return 0;
          }
        } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
          this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
          return 0;
        } else {
          this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
          return alo;
        }
      } else {
        if ((ahi < 0)) {
          var lo$1 = ((-alo) | 0);
          var hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
          var aAbs__lo = lo$1;
          var aAbs__hi = hi;
        } else {
          var aAbs__lo = alo;
          var aAbs__hi = ahi;
        }
        if ((bhi < 0)) {
          var lo$2 = ((-blo) | 0);
          var hi$1 = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
          var bAbs__lo = lo$2;
          var bAbs__hi = hi$1;
        } else {
          var bAbs__lo = blo;
          var bAbs__hi = bhi;
        }
        var absRLo = $p_RTLong$__unsigned_$percent__I__I__I__I__I(this, aAbs__lo, aAbs__hi, bAbs__lo, bAbs__hi);
        if ((ahi < 0)) {
          var hi$2 = this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
          this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
          return ((-absRLo) | 0);
        } else {
          return absRLo;
        }
      }
    });
    new $TypeData().initClass($c_RTLong$, "org.scalajs.linker.runtime.RuntimeLong$", ({
      RTLong$: 1
    }));
    var $n_RTLong$;
    function $m_RTLong$() {
      if ((!$n_RTLong$)) {
        $n_RTLong$ = new $c_RTLong$();
      }
      return $n_RTLong$;
    }
    function $is_sc_IterableOnce(obj) {
      return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IterableOnce)));
    }
    function $as_sc_IterableOnce(obj) {
      return (($is_sc_IterableOnce(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IterableOnce"));
    }
    function $f_sc_IterableOnceOps__foreach__F1__V($thiz, f) {
      var it = $n($as_sc_IterableOnce($thiz)).iterator__sc_Iterator();
      while ($n(it).hasNext__Z()) {
        $n(f).apply__O__O($n(it).next__O());
      }
    }
    function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
      if (($n($as_sc_IterableOnce($thiz)).knownSize__I() === 0)) {
        return (("" + start) + end);
      } else {
        var this$1 = $n($thiz.addString__scm_StringBuilder__T__T__T__scm_StringBuilder($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end));
        return $n(this$1.scm_StringBuilder__f_underlying).jl_StringBuilder__f_java$lang$StringBuilder$$content;
      }
    }
    function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
      var jsb = $n(b).scm_StringBuilder__f_underlying;
      var this$1 = $n(start);
      if ((this$1.length !== 0)) {
        var this$2 = $n(jsb);
        this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$2.jl_StringBuilder__f_java$lang$StringBuilder$$content) + start);
      }
      var it = $n($as_sc_IterableOnce($thiz)).iterator__sc_Iterator();
      if ($n(it).hasNext__Z()) {
        var this$3 = $n(jsb);
        var obj = $n(it).next__O();
        this$3.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$3.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj);
        while ($n(it).hasNext__Z()) {
          var this$4 = $n(jsb);
          this$4.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$4.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
          var this$5 = $n(jsb);
          var obj$1 = $n(it).next__O();
          this$5.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$5.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$1);
        }
      }
      var this$6 = $n(end);
      if ((this$6.length !== 0)) {
        var this$7 = $n(jsb);
        this$7.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$7.jl_StringBuilder__f_java$lang$StringBuilder$$content) + end);
      }
      return b;
    }
    function $p_s_concurrent_ExecutionContext$__global$lzycompute__s_concurrent_ExecutionContextExecutor($thiz) {
      if ((!$thiz.s_concurrent_ExecutionContext$__f_bitmap$0)) {
        $thiz.s_concurrent_ExecutionContext$__f_global = $m_sjs_concurrent_JSExecutionContext$().sjs_concurrent_JSExecutionContext$__f_queue;
        $thiz.s_concurrent_ExecutionContext$__f_bitmap$0 = true;
      }
      return $thiz.s_concurrent_ExecutionContext$__f_global;
    }
    /** @constructor */
    function $c_s_concurrent_ExecutionContext$() {
      this.s_concurrent_ExecutionContext$__f_global = null;
      this.s_concurrent_ExecutionContext$__f_bitmap$0 = false;
    }
    $c_s_concurrent_ExecutionContext$.prototype = new $h_O();
    $c_s_concurrent_ExecutionContext$.prototype.constructor = $c_s_concurrent_ExecutionContext$;
    $c_s_concurrent_ExecutionContext$.prototype;
    $c_s_concurrent_ExecutionContext$.prototype.global__s_concurrent_ExecutionContextExecutor = (function() {
      return ((!this.s_concurrent_ExecutionContext$__f_bitmap$0) ? $p_s_concurrent_ExecutionContext$__global$lzycompute__s_concurrent_ExecutionContextExecutor(this) : this.s_concurrent_ExecutionContext$__f_global);
    });
    new $TypeData().initClass($c_s_concurrent_ExecutionContext$, "scala.concurrent.ExecutionContext$", ({
      s_concurrent_ExecutionContext$: 1
    }));
    var $n_s_concurrent_ExecutionContext$;
    function $m_s_concurrent_ExecutionContext$() {
      if ((!$n_s_concurrent_ExecutionContext$)) {
        $n_s_concurrent_ExecutionContext$ = new $c_s_concurrent_ExecutionContext$();
      }
      return $n_s_concurrent_ExecutionContext$;
    }
    /** @constructor */
    function $c_sr_ScalaRunTime$() {
    }
    $c_sr_ScalaRunTime$.prototype = new $h_O();
    $c_sr_ScalaRunTime$.prototype.constructor = $c_sr_ScalaRunTime$;
    $c_sr_ScalaRunTime$.prototype;
    $c_sr_ScalaRunTime$.prototype.array_apply__O__I__O = (function(xs, idx) {
      if ((xs instanceof $ac_O)) {
        var x2 = $asArrayOf_O(xs, 1);
        return $n(x2).get(idx);
      } else if ((xs instanceof $ac_I)) {
        var x3 = $asArrayOf_I(xs, 1);
        return $n(x3).get(idx);
      } else if ((xs instanceof $ac_D)) {
        var x4 = $asArrayOf_D(xs, 1);
        return $n(x4).get(idx);
      } else if ((xs instanceof $ac_J)) {
        var x5 = $asArrayOf_J(xs, 1);
        return $n(x5).get(idx);
      } else if ((xs instanceof $ac_F)) {
        var x6 = $asArrayOf_F(xs, 1);
        return $n(x6).get(idx);
      } else if ((xs instanceof $ac_C)) {
        var x7 = $asArrayOf_C(xs, 1);
        return $bC($n(x7).get(idx));
      } else if ((xs instanceof $ac_B)) {
        var x8 = $asArrayOf_B(xs, 1);
        return $n(x8).get(idx);
      } else if ((xs instanceof $ac_S)) {
        var x9 = $asArrayOf_S(xs, 1);
        return $n(x9).get(idx);
      } else if ((xs instanceof $ac_Z)) {
        var x10 = $asArrayOf_Z(xs, 1);
        return $n(x10).get(idx);
      } else if ((xs === null)) {
        throw new $c_jl_NullPointerException();
      } else {
        throw new $c_s_MatchError(xs);
      }
    });
    $c_sr_ScalaRunTime$.prototype.wrapRefArray__AO__sci_ArraySeq = (function(xs) {
      if ((xs === null)) {
        return null;
      } else if (($n(xs).u.length === 0)) {
        var this$1 = $m_sci_ArraySeq$();
        return $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef(this$1);
      } else {
        return new $c_sci_ArraySeq$ofRef(xs);
      }
    });
    new $TypeData().initClass($c_sr_ScalaRunTime$, "scala.runtime.ScalaRunTime$", ({
      sr_ScalaRunTime$: 1
    }));
    var $n_sr_ScalaRunTime$;
    function $m_sr_ScalaRunTime$() {
      if ((!$n_sr_ScalaRunTime$)) {
        $n_sr_ScalaRunTime$ = new $c_sr_ScalaRunTime$();
      }
      return $n_sr_ScalaRunTime$;
    }
    /** @constructor */
    function $c_sr_Statics$() {
    }
    $c_sr_Statics$.prototype = new $h_O();
    $c_sr_Statics$.prototype.constructor = $c_sr_Statics$;
    $c_sr_Statics$.prototype;
    $c_sr_Statics$.prototype.longHash__J__I = (function(lv) {
      var lo = lv.RTLong__f_lo;
      var hi = lv.RTLong__f_hi;
      return ((hi === (lo >> 31)) ? lo : (lo ^ hi));
    });
    $c_sr_Statics$.prototype.doubleHash__D__I = (function(dv) {
      var iv = $doubleToInt(dv);
      if ((iv === dv)) {
        return iv;
      } else {
        var this$1 = $m_RTLong$();
        var lo = this$1.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(dv);
        var hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
        return (($m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi) === dv) ? (lo ^ hi) : $m_jl_FloatingPointBits$().numberHashCode__D__I(dv));
      }
    });
    $c_sr_Statics$.prototype.anyHash__O__I = (function(x) {
      if ((x === null)) {
        return 0;
      } else if (((typeof x) === "number")) {
        var x3 = $uD(x);
        return this.doubleHash__D__I(x3);
      } else if ((x instanceof $c_RTLong)) {
        var t = $uJ(x);
        var lo = t.RTLong__f_lo;
        var hi = t.RTLong__f_hi;
        return this.longHash__J__I(new $c_RTLong(lo, hi));
      } else {
        return $dp_hashCode__I($n(x));
      }
    });
    $c_sr_Statics$.prototype.ioobe__I__O = (function(n) {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
    });
    new $TypeData().initClass($c_sr_Statics$, "scala.runtime.Statics$", ({
      sr_Statics$: 1
    }));
    var $n_sr_Statics$;
    function $m_sr_Statics$() {
      if ((!$n_sr_Statics$)) {
        $n_sr_Statics$ = new $c_sr_Statics$();
      }
      return $n_sr_Statics$;
    }
    /** @constructor */
    function $c_sjs_concurrent_JSExecutionContext$() {
      this.sjs_concurrent_JSExecutionContext$__f_queue = null;
      $n_sjs_concurrent_JSExecutionContext$ = this;
      this.sjs_concurrent_JSExecutionContext$__f_queue = $m_sjs_concurrent_QueueExecutionContext$().apply__s_concurrent_ExecutionContextExecutor();
    }
    $c_sjs_concurrent_JSExecutionContext$.prototype = new $h_O();
    $c_sjs_concurrent_JSExecutionContext$.prototype.constructor = $c_sjs_concurrent_JSExecutionContext$;
    $c_sjs_concurrent_JSExecutionContext$.prototype;
    new $TypeData().initClass($c_sjs_concurrent_JSExecutionContext$, "scala.scalajs.concurrent.JSExecutionContext$", ({
      sjs_concurrent_JSExecutionContext$: 1
    }));
    var $n_sjs_concurrent_JSExecutionContext$;
    function $m_sjs_concurrent_JSExecutionContext$() {
      if ((!$n_sjs_concurrent_JSExecutionContext$)) {
        $n_sjs_concurrent_JSExecutionContext$ = new $c_sjs_concurrent_JSExecutionContext$();
      }
      return $n_sjs_concurrent_JSExecutionContext$;
    }
    /** @constructor */
    function $c_sjs_concurrent_QueueExecutionContext$() {
    }
    $c_sjs_concurrent_QueueExecutionContext$.prototype = new $h_O();
    $c_sjs_concurrent_QueueExecutionContext$.prototype.constructor = $c_sjs_concurrent_QueueExecutionContext$;
    $c_sjs_concurrent_QueueExecutionContext$.prototype;
    $c_sjs_concurrent_QueueExecutionContext$.prototype.apply__s_concurrent_ExecutionContextExecutor = (function() {
      return (($as_T((typeof Promise)) === "undefined") ? new $c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext() : new $c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext());
    });
    new $TypeData().initClass($c_sjs_concurrent_QueueExecutionContext$, "scala.scalajs.concurrent.QueueExecutionContext$", ({
      sjs_concurrent_QueueExecutionContext$: 1
    }));
    var $n_sjs_concurrent_QueueExecutionContext$;
    function $m_sjs_concurrent_QueueExecutionContext$() {
      if ((!$n_sjs_concurrent_QueueExecutionContext$)) {
        $n_sjs_concurrent_QueueExecutionContext$ = new $c_sjs_concurrent_QueueExecutionContext$();
      }
      return $n_sjs_concurrent_QueueExecutionContext$;
    }
    /** @constructor */
    function $c_sjs_js_JSConverters$JSRichIterableOnce$() {
    }
    $c_sjs_js_JSConverters$JSRichIterableOnce$.prototype = new $h_O();
    $c_sjs_js_JSConverters$JSRichIterableOnce$.prototype.constructor = $c_sjs_js_JSConverters$JSRichIterableOnce$;
    $c_sjs_js_JSConverters$JSRichIterableOnce$.prototype;
    $c_sjs_js_JSConverters$JSRichIterableOnce$.prototype.toJSArray$extension__sc_IterableOnce__sjs_js_Array = (function(this$) {
      {
        var result = [];
        var this$2 = $n($n(this$).iterator__sc_Iterator());
        while (this$2.hasNext__Z()) {
          var arg1 = this$2.next__O();
          $uI(result.push(arg1));
        }
        return result;
      }
    });
    new $TypeData().initClass($c_sjs_js_JSConverters$JSRichIterableOnce$, "scala.scalajs.js.JSConverters$JSRichIterableOnce$", ({
      sjs_js_JSConverters$JSRichIterableOnce$: 1
    }));
    var $n_sjs_js_JSConverters$JSRichIterableOnce$;
    function $m_sjs_js_JSConverters$JSRichIterableOnce$() {
      if ((!$n_sjs_js_JSConverters$JSRichIterableOnce$)) {
        $n_sjs_js_JSConverters$JSRichIterableOnce$ = new $c_sjs_js_JSConverters$JSRichIterableOnce$();
      }
      return $n_sjs_js_JSConverters$JSRichIterableOnce$;
    }
    /** @constructor */
    function $c_sjs_js_special_package$() {
    }
    $c_sjs_js_special_package$.prototype = new $h_O();
    $c_sjs_js_special_package$.prototype.constructor = $c_sjs_js_special_package$;
    $c_sjs_js_special_package$.prototype;
    $c_sjs_js_special_package$.prototype.objectLiteral__sci_Seq__sjs_js_Object = (function(properties) {
      var result = ({});
      $n(properties).foreach__F1__V(new $c_sjsr_AnonFunction1(((pair$2$2) => {
        var pair$2 = $as_T2(pair$2$2);
        result[$n(pair$2).T2__f__1] = $n(pair$2).T2__f__2;
      })));
      return result;
    });
    new $TypeData().initClass($c_sjs_js_special_package$, "scala.scalajs.js.special.package$", ({
      sjs_js_special_package$: 1
    }));
    var $n_sjs_js_special_package$;
    function $m_sjs_js_special_package$() {
      if ((!$n_sjs_js_special_package$)) {
        $n_sjs_js_special_package$ = new $c_sjs_js_special_package$();
      }
      return $n_sjs_js_special_package$;
    }
    /** @constructor */
    function $c_s_util_DynamicVariable(init) {
      this.s_util_DynamicVariable__f_v = null;
      this.s_util_DynamicVariable__f_v = init;
    }
    $c_s_util_DynamicVariable.prototype = new $h_O();
    $c_s_util_DynamicVariable.prototype.constructor = $c_s_util_DynamicVariable;
    $c_s_util_DynamicVariable.prototype;
    $c_s_util_DynamicVariable.prototype.toString__T = (function() {
      return (("DynamicVariable(" + this.s_util_DynamicVariable__f_v) + ")");
    });
    new $TypeData().initClass($c_s_util_DynamicVariable, "scala.util.DynamicVariable", ({
      s_util_DynamicVariable: 1
    }));
    /** @constructor */
    function $c_s_util_hashing_MurmurHash3() {
    }
    $c_s_util_hashing_MurmurHash3.prototype = new $h_O();
    $c_s_util_hashing_MurmurHash3.prototype.constructor = $c_s_util_hashing_MurmurHash3;
    /** @constructor */
    function $h_s_util_hashing_MurmurHash3() {
    }
    $h_s_util_hashing_MurmurHash3.prototype = $c_s_util_hashing_MurmurHash3.prototype;
    $c_s_util_hashing_MurmurHash3.prototype.mix__I__I__I = (function(hash, data) {
      var h = this.mixLast__I__I__I(hash, data);
      var i = h;
      h = ((i << 13) | ((i >>> 19) | 0));
      return (((-430675100) + Math.imul(5, h)) | 0);
    });
    $c_s_util_hashing_MurmurHash3.prototype.mixLast__I__I__I = (function(hash, data) {
      var k = data;
      k = Math.imul((-862048943), k);
      var i = k;
      k = ((i << 15) | ((i >>> 17) | 0));
      k = Math.imul(461845907, k);
      return (hash ^ k);
    });
    $c_s_util_hashing_MurmurHash3.prototype.finalizeHash__I__I__I = (function(hash, length) {
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I((hash ^ length));
    });
    $c_s_util_hashing_MurmurHash3.prototype.scala$util$hashing$MurmurHash3$$avalanche__I__I = (function(hash) {
      var h = hash;
      h = (h ^ ((h >>> 16) | 0));
      h = Math.imul((-2048144789), h);
      h = (h ^ ((h >>> 13) | 0));
      h = Math.imul((-1028477387), h);
      h = (h ^ ((h >>> 16) | 0));
      return h;
    });
    $c_s_util_hashing_MurmurHash3.prototype.productHash__s_Product__I__Z__I = (function(x, seed, ignorePrefix) {
      var arr = $n(x).productArity__I();
      if ((arr === 0)) {
        return $f_T__hashCode__I($n($n(x).productPrefix__T()));
      } else {
        var h = seed;
        if ((!ignorePrefix)) {
          h = this.mix__I__I__I(h, $f_T__hashCode__I($n($n(x).productPrefix__T())));
        }
        var i = 0;
        while ((i < arr)) {
          var $x_1 = h;
          var x$1 = $n(x).productElement__I__O(i);
          h = this.mix__I__I__I($x_1, $m_sr_Statics$().anyHash__O__I(x$1));
          i = ((1 + i) | 0);
        }
        return this.finalizeHash__I__I__I(h, arr);
      }
    });
    $c_s_util_hashing_MurmurHash3.prototype.unorderedHash__sc_IterableOnce__I__I = (function(xs, seed) {
      var a = 0;
      var b = 0;
      var n = 0;
      var c = 1;
      var iterator = $n(xs).iterator__sc_Iterator();
      while ($n(iterator).hasNext__Z()) {
        var x = $n(iterator).next__O();
        var h = $m_sr_Statics$().anyHash__O__I(x);
        a = ((a + h) | 0);
        b = (b ^ h);
        c = Math.imul(c, (1 | h));
        n = ((1 + n) | 0);
      }
      var h$2 = seed;
      h$2 = this.mix__I__I__I(h$2, a);
      h$2 = this.mix__I__I__I(h$2, b);
      h$2 = this.mixLast__I__I__I(h$2, c);
      return this.finalizeHash__I__I__I(h$2, n);
    });
    $c_s_util_hashing_MurmurHash3.prototype.orderedHash__sc_IterableOnce__I__I = (function(xs, seed) {
      var it = $n(xs).iterator__sc_Iterator();
      var h = seed;
      if ((!$n(it).hasNext__Z())) {
        return this.finalizeHash__I__I__I(h, 0);
      }
      var x0 = $n(it).next__O();
      if ((!$n(it).hasNext__Z())) {
        return this.finalizeHash__I__I__I(this.mix__I__I__I(h, $m_sr_Statics$().anyHash__O__I(x0)), 1);
      }
      var x1 = $n(it).next__O();
      var initial = $m_sr_Statics$().anyHash__O__I(x0);
      h = this.mix__I__I__I(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().anyHash__O__I(x1);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ($n(it).hasNext__Z()) {
        h = this.mix__I__I__I(h, prev);
        var x = $n(it).next__O();
        var hash = $m_sr_Statics$().anyHash__O__I(x);
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.mix__I__I__I(h, hash);
          i = ((1 + i) | 0);
          while ($n(it).hasNext__Z()) {
            var $x_1 = h;
            var x$1 = $n(it).next__O();
            h = this.mix__I__I__I($x_1, $m_sr_Statics$().anyHash__O__I(x$1));
            i = ((1 + i) | 0);
          }
          return this.finalizeHash__I__I__I(h, i);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
    });
    $c_s_util_hashing_MurmurHash3.prototype.arrayHash__O__I__I = (function(a, seed) {
      var h = seed;
      var l = $m_jl_reflect_Array$().getLength__O__I(a);
      switch (l) {
        case 0: {
          return this.finalizeHash__I__I__I(h, 0);
        }
        case 1: {
          var $x_1 = h;
          var x = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, 0);
          return this.finalizeHash__I__I__I(this.mix__I__I__I($x_1, $m_sr_Statics$().anyHash__O__I(x)), 1);
        }
        default: {
          var x$1 = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, 0);
          var initial = $m_sr_Statics$().anyHash__O__I(x$1);
          h = this.mix__I__I__I(h, initial);
          var h0 = h;
          var x$2 = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, 1);
          var prev = $m_sr_Statics$().anyHash__O__I(x$2);
          var rangeDiff = ((prev - initial) | 0);
          var i = 2;
          while ((i < l)) {
            h = this.mix__I__I__I(h, prev);
            var x$3 = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, i);
            var hash = $m_sr_Statics$().anyHash__O__I(x$3);
            if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
              h = this.mix__I__I__I(h, hash);
              i = ((1 + i) | 0);
              while ((i < l)) {
                var $x_2 = h;
                var x$4 = $m_sr_ScalaRunTime$().array_apply__O__I__O(a, i);
                h = this.mix__I__I__I($x_2, $m_sr_Statics$().anyHash__O__I(x$4));
                i = ((1 + i) | 0);
              }
              return this.finalizeHash__I__I__I(h, l);
            }
            prev = hash;
            i = ((1 + i) | 0);
          }
          return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
        }
      }
    });
    $c_s_util_hashing_MurmurHash3.prototype.rangeHash__I__I__I__I__I = (function(start, step, last, seed) {
      return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(this.mix__I__I__I(seed, start), step), last));
    });
    $c_s_util_hashing_MurmurHash3.prototype.indexedSeqHash__sc_IndexedSeq__I__I = (function(a, seed) {
      var h = seed;
      var l = $n(a).length__I();
      switch (l) {
        case 0: {
          return this.finalizeHash__I__I__I(h, 0);
        }
        case 1: {
          var $x_1 = h;
          var x = $n(a).apply__I__O(0);
          return this.finalizeHash__I__I__I(this.mix__I__I__I($x_1, $m_sr_Statics$().anyHash__O__I(x)), 1);
        }
        default: {
          var x$1 = $n(a).apply__I__O(0);
          var initial = $m_sr_Statics$().anyHash__O__I(x$1);
          h = this.mix__I__I__I(h, initial);
          var h0 = h;
          var x$2 = $n(a).apply__I__O(1);
          var prev = $m_sr_Statics$().anyHash__O__I(x$2);
          var rangeDiff = ((prev - initial) | 0);
          var i = 2;
          while ((i < l)) {
            h = this.mix__I__I__I(h, prev);
            var x$3 = $n(a).apply__I__O(i);
            var hash = $m_sr_Statics$().anyHash__O__I(x$3);
            if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
              h = this.mix__I__I__I(h, hash);
              i = ((1 + i) | 0);
              while ((i < l)) {
                var $x_2 = h;
                var x$4 = $n(a).apply__I__O(i);
                h = this.mix__I__I__I($x_2, $m_sr_Statics$().anyHash__O__I(x$4));
                i = ((1 + i) | 0);
              }
              return this.finalizeHash__I__I__I(h, l);
            }
            prev = hash;
            i = ((1 + i) | 0);
          }
          return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev));
        }
      }
    });
    $c_s_util_hashing_MurmurHash3.prototype.listHash__sci_List__I__I = (function(xs, seed) {
      var n = 0;
      var h = seed;
      var rangeState = 0;
      var rangeDiff = 0;
      var prev = 0;
      var initial = 0;
      var elems = xs;
      while ((!$n(elems).isEmpty__Z())) {
        var head = $n(elems).head__O();
        var tail = $as_sci_List($n(elems).tail__O());
        var hash = $m_sr_Statics$().anyHash__O__I(head);
        h = this.mix__I__I__I(h, hash);
        var x1 = rangeState;
        switch (x1) {
          case 0: {
            initial = hash;
            rangeState = 1;
            break;
          }
          case 1: {
            rangeDiff = ((hash - prev) | 0);
            rangeState = 2;
            break;
          }
          case 2: {
            if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
              rangeState = 3;
            }
            break;
          }
        }
        prev = hash;
        n = ((1 + n) | 0);
        elems = tail;
      }
      return ((rangeState === 2) ? this.rangeHash__I__I__I__I__I(initial, rangeDiff, prev, seed) : this.finalizeHash__I__I__I(h, n));
    });
    /** @constructor */
    function $c_jl_Number() {
    }
    $c_jl_Number.prototype = new $h_O();
    $c_jl_Number.prototype.constructor = $c_jl_Number;
    $c_jl_Number.prototype;
    function $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace) {
      $thiz.jl_Throwable__f_s = s;
      $thiz.jl_Throwable__f_e = e;
      $thiz.jl_Throwable__f_writableStackTrace = writableStackTrace;
      {
        $thiz.fillInStackTrace__jl_Throwable();
      }
      return $thiz;
    }
    class $c_jl_Throwable extends Error {
      constructor() {
        super();
        this.jl_Throwable__f_s = null;
        this.jl_Throwable__f_e = null;
        this.jl_Throwable__f_writableStackTrace = false;
        this.jl_Throwable__f_jsErrorForStackTrace = null;
      }
      getMessage__T() {
        return this.jl_Throwable__f_s;
      }
      fillInStackTrace__jl_Throwable() {
        var reference = (this);
        var identifyingString = Object.prototype.toString.call(reference);
        this.jl_Throwable__f_jsErrorForStackTrace = ((identifyingString === "[object Error]") ? reference : (((Error.captureStackTrace === (void 0)) || $uZ(Object.isSealed(this))) ? new Error() : (Error.captureStackTrace(this), this)));
        return this;
      }
      toString__T() {
        var className = $objectClassName(this);
        var message = this.getMessage__T();
        return ((message === null) ? className : ((className + ": ") + message));
      }
      hashCode__I() {
        return $c_O.prototype.hashCode__I.call(this);
      }
      get "message"() {
        var m = this.getMessage__T();
        return ((m === null) ? "" : m);
      }
      get "name"() {
        return $objectClassName(this);
      }
      "toString"() {
        return this.toString__T();
      }
    }
    /** @constructor */
    function $c_s_Console$() {
      this.s_Console$__f_outVar = null;
      $n_s_Console$ = this;
      this.s_Console$__f_outVar = new $c_s_util_DynamicVariable($m_jl_System$Streams$().jl_System$Streams$__f_out);
    }
    $c_s_Console$.prototype = new $h_O();
    $c_s_Console$.prototype.constructor = $c_s_Console$;
    $c_s_Console$.prototype;
    $c_s_Console$.prototype.out__Ljava_io_PrintStream = (function() {
      return $as_Ljava_io_PrintStream($n(this.s_Console$__f_outVar).s_util_DynamicVariable__f_v);
    });
    new $TypeData().initClass($c_s_Console$, "scala.Console$", ({
      s_Console$: 1,
      s_io_AnsiColor: 1
    }));
    var $n_s_Console$;
    function $m_s_Console$() {
      if ((!$n_s_Console$)) {
        $n_s_Console$ = new $c_s_Console$();
      }
      return $n_s_Console$;
    }
    /** @constructor */
    function $c_sr_AbstractFunction1() {
    }
    $c_sr_AbstractFunction1.prototype = new $h_O();
    $c_sr_AbstractFunction1.prototype.constructor = $c_sr_AbstractFunction1;
    /** @constructor */
    function $h_sr_AbstractFunction1() {
    }
    $h_sr_AbstractFunction1.prototype = $c_sr_AbstractFunction1.prototype;
    $c_sr_AbstractFunction1.prototype.toString__T = (function() {
      return "<function1>";
    });
    /** @constructor */
    function $c_s_util_hashing_MurmurHash3$() {
      this.s_util_hashing_MurmurHash3$__f_seqSeed = 0;
      this.s_util_hashing_MurmurHash3$__f_mapSeed = 0;
      $n_s_util_hashing_MurmurHash3$ = this;
      this.s_util_hashing_MurmurHash3$__f_seqSeed = $f_T__hashCode__I("Seq");
      this.s_util_hashing_MurmurHash3$__f_mapSeed = $f_T__hashCode__I("Map");
      $f_T__hashCode__I("Set");
      this.unorderedHash__sc_IterableOnce__I__I($m_sci_Nil$(), this.s_util_hashing_MurmurHash3$__f_mapSeed);
    }
    $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
    $c_s_util_hashing_MurmurHash3$.prototype.constructor = $c_s_util_hashing_MurmurHash3$;
    $c_s_util_hashing_MurmurHash3$.prototype;
    $c_s_util_hashing_MurmurHash3$.prototype.seqHash__sc_Seq__I = (function(xs) {
      if ($is_sc_IndexedSeq(xs)) {
        var x2 = $as_sc_IndexedSeq(xs);
        return this.indexedSeqHash__sc_IndexedSeq__I__I(x2, this.s_util_hashing_MurmurHash3$__f_seqSeed);
      } else if ((xs instanceof $c_sci_List)) {
        var x3 = $as_sci_List(xs);
        return this.listHash__sci_List__I__I(x3, this.s_util_hashing_MurmurHash3$__f_seqSeed);
      } else {
        return this.orderedHash__sc_IterableOnce__I__I(xs, this.s_util_hashing_MurmurHash3$__f_seqSeed);
      }
    });
    new $TypeData().initClass($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
      s_util_hashing_MurmurHash3$: 1,
      s_util_hashing_MurmurHash3: 1
    }));
    var $n_s_util_hashing_MurmurHash3$;
    function $m_s_util_hashing_MurmurHash3$() {
      if ((!$n_s_util_hashing_MurmurHash3$)) {
        $n_s_util_hashing_MurmurHash3$ = new $c_s_util_hashing_MurmurHash3$();
      }
      return $n_s_util_hashing_MurmurHash3$;
    }
    class $c_jl_Error extends $c_jl_Throwable {
    }
    class $c_jl_Exception extends $c_jl_Throwable {
    }
    function $f_s_Product2__productElement__I__O($thiz, n) {
      switch (n) {
        case 0: {
          return $thiz.T2__f__1;
        }
        case 1: {
          return $thiz.T2__f__2;
        }
        default: {
          throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 1)"));
        }
      }
    }
    function $f_s_Product3__productElement__I__O($thiz, n) {
      switch (n) {
        case 0: {
          return $thiz.T3__f__1;
        }
        case 1: {
          return $thiz.T3__f__2;
        }
        case 2: {
          return $thiz.T3__f__3;
        }
        default: {
          throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 2)"));
        }
      }
    }
    /** @constructor */
    function $c_sc_Iterator$() {
      this.sc_Iterator$__f_scala$collection$Iterator$$_empty = null;
      $n_sc_Iterator$ = this;
      this.sc_Iterator$__f_scala$collection$Iterator$$_empty = new $c_sc_Iterator$$anon$19();
    }
    $c_sc_Iterator$.prototype = new $h_O();
    $c_sc_Iterator$.prototype.constructor = $c_sc_Iterator$;
    $c_sc_Iterator$.prototype;
    new $TypeData().initClass($c_sc_Iterator$, "scala.collection.Iterator$", ({
      sc_Iterator$: 1,
      sc_IterableFactory: 1,
      Ljava_io_Serializable: 1
    }));
    var $n_sc_Iterator$;
    function $m_sc_Iterator$() {
      if ((!$n_sc_Iterator$)) {
        $n_sc_Iterator$ = new $c_sc_Iterator$();
      }
      return $n_sc_Iterator$;
    }
    /** @constructor */
    function $c_sjs_js_Any$() {
    }
    $c_sjs_js_Any$.prototype = new $h_O();
    $c_sjs_js_Any$.prototype.constructor = $c_sjs_js_Any$;
    $c_sjs_js_Any$.prototype;
    $c_sjs_js_Any$.prototype.fromFunction1__F1__sjs_js_Function1 = (function(f) {
      return ((arg1$2) => $n(f).apply__O__O(arg1$2));
    });
    new $TypeData().initClass($c_sjs_js_Any$, "scala.scalajs.js.Any$", ({
      sjs_js_Any$: 1,
      sjs_js_LowPrioAnyImplicits: 1,
      sjs_js_LowestPrioAnyImplicits: 1
    }));
    var $n_sjs_js_Any$;
    function $m_sjs_js_Any$() {
      if ((!$n_sjs_js_Any$)) {
        $n_sjs_js_Any$ = new $c_sjs_js_Any$();
      }
      return $n_sjs_js_Any$;
    }
    /** @constructor */
    function $c_sjsr_AnonFunction1(f) {
      this.sjsr_AnonFunction1__f_f = null;
      this.sjsr_AnonFunction1__f_f = f;
    }
    $c_sjsr_AnonFunction1.prototype = new $h_sr_AbstractFunction1();
    $c_sjsr_AnonFunction1.prototype.constructor = $c_sjsr_AnonFunction1;
    $c_sjsr_AnonFunction1.prototype;
    $c_sjsr_AnonFunction1.prototype.apply__O__O = (function(arg1) {
      return (0, this.sjsr_AnonFunction1__f_f)(arg1);
    });
    new $TypeData().initClass($c_sjsr_AnonFunction1, "scala.scalajs.runtime.AnonFunction1", ({
      sjsr_AnonFunction1: 1,
      sr_AbstractFunction1: 1,
      F1: 1
    }));
    /** @constructor */
    function $c_Ljava_io_OutputStream() {
    }
    $c_Ljava_io_OutputStream.prototype = new $h_O();
    $c_Ljava_io_OutputStream.prototype.constructor = $c_Ljava_io_OutputStream;
    /** @constructor */
    function $h_Ljava_io_OutputStream() {
    }
    $h_Ljava_io_OutputStream.prototype = $c_Ljava_io_OutputStream.prototype;
    function $f_jl_Boolean__hashCode__I($thiz) {
      return ($thiz ? 1231 : 1237);
    }
    new $TypeData().initClass(0, "java.lang.Boolean", ({
      jl_Boolean: 1,
      Ljava_io_Serializable: 1,
      jl_Comparable: 1,
      jl_constant_Constable: 1
    }), ((x) => ((typeof x) === "boolean")));
    function $f_jl_Character__hashCode__I($thiz) {
      return $thiz;
    }
    new $TypeData().initClass(0, "java.lang.Character", ({
      jl_Character: 1,
      Ljava_io_Serializable: 1,
      jl_Comparable: 1,
      jl_constant_Constable: 1
    }), ((x) => (x instanceof $Char)));
    class $c_jl_RuntimeException extends $c_jl_Exception {
    }
    /** @constructor */
    function $c_jl_StringBuilder() {
      this.jl_StringBuilder__f_java$lang$StringBuilder$$content = null;
      this.jl_StringBuilder__f_java$lang$StringBuilder$$content = "";
    }
    $c_jl_StringBuilder.prototype = new $h_O();
    $c_jl_StringBuilder.prototype.constructor = $c_jl_StringBuilder;
    $c_jl_StringBuilder.prototype;
    $c_jl_StringBuilder.prototype.toString__T = (function() {
      return this.jl_StringBuilder__f_java$lang$StringBuilder$$content;
    });
    $c_jl_StringBuilder.prototype.length__I = (function() {
      var this$1$1 = $n(this.jl_StringBuilder__f_java$lang$StringBuilder$$content);
      return this$1$1.length;
    });
    $c_jl_StringBuilder.prototype.charAt__I__C = (function(index) {
      var this$1$1 = $n(this.jl_StringBuilder__f_java$lang$StringBuilder$$content);
      return $charAt(this$1$1, index);
    });
    new $TypeData().initClass($c_jl_StringBuilder, "java.lang.StringBuilder", ({
      jl_StringBuilder: 1,
      jl_CharSequence: 1,
      jl_Appendable: 1,
      Ljava_io_Serializable: 1
    }));
    class $c_jl_VirtualMachineError extends $c_jl_Error {
    }
    /** @constructor */
    function $c_sc_AbstractIterator() {
    }
    $c_sc_AbstractIterator.prototype = new $h_O();
    $c_sc_AbstractIterator.prototype.constructor = $c_sc_AbstractIterator;
    /** @constructor */
    function $h_sc_AbstractIterator() {
    }
    $h_sc_AbstractIterator.prototype = $c_sc_AbstractIterator.prototype;
    $c_sc_AbstractIterator.prototype.iterator__sc_Iterator = (function() {
      return this;
    });
    $c_sc_AbstractIterator.prototype.toString__T = (function() {
      return "<iterator>";
    });
    $c_sc_AbstractIterator.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
      return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
    });
    $c_sc_AbstractIterator.prototype.knownSize__I = (function() {
      return (-1);
    });
    /** @constructor */
    function $c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext() {
      Promise.resolve((void 0));
    }
    $c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext.prototype = new $h_O();
    $c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext.prototype.constructor = $c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext;
    $c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext.prototype;
    new $TypeData().initClass($c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext, "scala.scalajs.concurrent.QueueExecutionContext$PromisesExecutionContext", ({
      sjs_concurrent_QueueExecutionContext$PromisesExecutionContext: 1,
      s_concurrent_ExecutionContextExecutor: 1,
      s_concurrent_ExecutionContext: 1,
      ju_concurrent_Executor: 1
    }));
    /** @constructor */
    function $c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext() {
    }
    $c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext.prototype = new $h_O();
    $c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext.prototype.constructor = $c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext;
    $c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext.prototype;
    new $TypeData().initClass($c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext, "scala.scalajs.concurrent.QueueExecutionContext$TimeoutsExecutionContext", ({
      sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext: 1,
      s_concurrent_ExecutionContextExecutor: 1,
      s_concurrent_ExecutionContext: 1,
      ju_concurrent_Executor: 1
    }));
    /** @constructor */
    function $c_Ljava_io_FilterOutputStream() {
    }
    $c_Ljava_io_FilterOutputStream.prototype = new $h_Ljava_io_OutputStream();
    $c_Ljava_io_FilterOutputStream.prototype.constructor = $c_Ljava_io_FilterOutputStream;
    /** @constructor */
    function $h_Ljava_io_FilterOutputStream() {
    }
    $h_Ljava_io_FilterOutputStream.prototype = $c_Ljava_io_FilterOutputStream.prototype;
    class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
      constructor(s) {
        super();
        $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
      }
    }
    new $TypeData().initClass($c_jl_ArithmeticException, "java.lang.ArithmeticException", ({
      jl_ArithmeticException: 1,
      jl_RuntimeException: 1,
      jl_Exception: 1,
      jl_Throwable: 1,
      Ljava_io_Serializable: 1
    }));
    class $c_jl_ArrayStoreException extends $c_jl_RuntimeException {
      constructor(s) {
        super();
        $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
      }
    }
    new $TypeData().initClass($c_jl_ArrayStoreException, "java.lang.ArrayStoreException", ({
      jl_ArrayStoreException: 1,
      jl_RuntimeException: 1,
      jl_Exception: 1,
      jl_Throwable: 1,
      Ljava_io_Serializable: 1
    }));
    new $TypeData().initClass(0, "java.lang.Byte", ({
      jl_Byte: 1,
      jl_Number: 1,
      Ljava_io_Serializable: 1,
      jl_Comparable: 1,
      jl_constant_Constable: 1
    }), ((x) => $isByte(x)));
    class $c_jl_ClassCastException extends $c_jl_RuntimeException {
      constructor(s) {
        super();
        $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
      }
    }
    new $TypeData().initClass($c_jl_ClassCastException, "java.lang.ClassCastException", ({
      jl_ClassCastException: 1,
      jl_RuntimeException: 1,
      jl_Exception: 1,
      jl_Throwable: 1,
      Ljava_io_Serializable: 1
    }));
    class $c_jl_IllegalArgumentException extends $c_jl_RuntimeException {
      constructor(s) {
        super();
        $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
      }
    }
    new $TypeData().initClass($c_jl_IllegalArgumentException, "java.lang.IllegalArgumentException", ({
      jl_IllegalArgumentException: 1,
      jl_RuntimeException: 1,
      jl_Exception: 1,
      jl_Throwable: 1,
      Ljava_io_Serializable: 1
    }));
    function $ct_jl_IndexOutOfBoundsException__T__($thiz, s) {
      $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
      return $thiz;
    }
    class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
    }
    new $TypeData().initClass($c_jl_IndexOutOfBoundsException, "java.lang.IndexOutOfBoundsException", ({
      jl_IndexOutOfBoundsException: 1,
      jl_RuntimeException: 1,
      jl_Exception: 1,
      jl_Throwable: 1,
      Ljava_io_Serializable: 1
    }));
    /** @constructor */
    function $c_jl_JSConsoleBasedPrintStream$DummyOutputStream() {
    }
    $c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype = new $h_Ljava_io_OutputStream();
    $c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype.constructor = $c_jl_JSConsoleBasedPrintStream$DummyOutputStream;
    $c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype;
    new $TypeData().initClass($c_jl_JSConsoleBasedPrintStream$DummyOutputStream, "java.lang.JSConsoleBasedPrintStream$DummyOutputStream", ({
      jl_JSConsoleBasedPrintStream$DummyOutputStream: 1,
      Ljava_io_OutputStream: 1,
      Ljava_io_Closeable: 1,
      jl_AutoCloseable: 1,
      Ljava_io_Flushable: 1
    }));
    class $c_jl_NegativeArraySizeException extends $c_jl_RuntimeException {
      constructor() {
        super();
        $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
      }
    }
    new $TypeData().initClass($c_jl_NegativeArraySizeException, "java.lang.NegativeArraySizeException", ({
      jl_NegativeArraySizeException: 1,
      jl_RuntimeException: 1,
      jl_Exception: 1,
      jl_Throwable: 1,
      Ljava_io_Serializable: 1
    }));
    class $c_jl_NullPointerException extends $c_jl_RuntimeException {
      constructor() {
        super();
        $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
      }
    }
    new $TypeData().initClass($c_jl_NullPointerException, "java.lang.NullPointerException", ({
      jl_NullPointerException: 1,
      jl_RuntimeException: 1,
      jl_Exception: 1,
      jl_Throwable: 1,
      Ljava_io_Serializable: 1
    }));
    new $TypeData().initClass(0, "java.lang.Short", ({
      jl_Short: 1,
      jl_Number: 1,
      Ljava_io_Serializable: 1,
      jl_Comparable: 1,
      jl_constant_Constable: 1
    }), ((x) => $isShort(x)));
    class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
      constructor(s) {
        super();
        $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
      }
    }
    new $TypeData().initClass($c_jl_UnsupportedOperationException, "java.lang.UnsupportedOperationException", ({
      jl_UnsupportedOperationException: 1,
      jl_RuntimeException: 1,
      jl_Exception: 1,
      jl_Throwable: 1,
      Ljava_io_Serializable: 1
    }));
    class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
      constructor(s) {
        super();
        $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
      }
    }
    new $TypeData().initClass($c_ju_NoSuchElementException, "java.util.NoSuchElementException", ({
      ju_NoSuchElementException: 1,
      jl_RuntimeException: 1,
      jl_Exception: 1,
      jl_Throwable: 1,
      Ljava_io_Serializable: 1
    }));
    class $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError extends $c_jl_VirtualMachineError {
      constructor(cause) {
        super();
        var message = ((cause === null) ? null : $n(cause).toString__T());
        $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, message, cause, true, true);
      }
    }
    new $TypeData().initClass($c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError, "org.scalajs.linker.runtime.UndefinedBehaviorError", ({
      Lorg_scalajs_linker_runtime_UndefinedBehaviorError: 1,
      jl_VirtualMachineError: 1,
      jl_Error: 1,
      jl_Throwable: 1,
      Ljava_io_Serializable: 1
    }));
    function $p_s_MatchError__objString$lzycompute__T($thiz) {
      if ((!$thiz.s_MatchError__f_bitmap$0)) {
        $thiz.s_MatchError__f_objString = (($thiz.s_MatchError__f_obj === null) ? "null" : $p_s_MatchError__liftedTree1$1__T($thiz));
        $thiz.s_MatchError__f_bitmap$0 = true;
      }
      return $thiz.s_MatchError__f_objString;
    }
    function $p_s_MatchError__objString__T($thiz) {
      return ((!$thiz.s_MatchError__f_bitmap$0) ? $p_s_MatchError__objString$lzycompute__T($thiz) : $thiz.s_MatchError__f_objString);
    }
    function $p_s_MatchError__ofClass$1__T($thiz) {
      var this$1 = $n($thiz.s_MatchError__f_obj);
      return ("of class " + $objectClassName(this$1));
    }
    function $p_s_MatchError__liftedTree1$1__T($thiz) {
      try {
        return ((($thiz.s_MatchError__f_obj + " (") + $p_s_MatchError__ofClass$1__T($thiz)) + ")");
      } catch (e) {
        return ("an instance " + $p_s_MatchError__ofClass$1__T($thiz));
      }
    }
    class $c_s_MatchError extends $c_jl_RuntimeException {
      constructor(obj) {
        super();
        this.s_MatchError__f_objString = null;
        this.s_MatchError__f_obj = null;
        this.s_MatchError__f_bitmap$0 = false;
        this.s_MatchError__f_obj = obj;
        $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
      }
      getMessage__T() {
        return $p_s_MatchError__objString__T(this);
      }
    }
    new $TypeData().initClass($c_s_MatchError, "scala.MatchError", ({
      s_MatchError: 1,
      jl_RuntimeException: 1,
      jl_Exception: 1,
      jl_Throwable: 1,
      Ljava_io_Serializable: 1
    }));
    /** @constructor */
    function $c_T2(_1, _2) {
      this.T2__f__1 = null;
      this.T2__f__2 = null;
      this.T2__f__1 = _1;
      this.T2__f__2 = _2;
    }
    $c_T2.prototype = new $h_O();
    $c_T2.prototype.constructor = $c_T2;
    $c_T2.prototype;
    $c_T2.prototype.productArity__I = (function() {
      return 2;
    });
    $c_T2.prototype.productElement__I__O = (function(n) {
      return $f_s_Product2__productElement__I__O(this, n);
    });
    $c_T2.prototype.toString__T = (function() {
      return (((("(" + this.T2__f__1) + ",") + this.T2__f__2) + ")");
    });
    $c_T2.prototype.productPrefix__T = (function() {
      return "Tuple2";
    });
    $c_T2.prototype.hashCode__I = (function() {
      var this$2 = $m_s_util_hashing_MurmurHash3$();
      return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false);
    });
    function $as_T2(obj) {
      return (((obj instanceof $c_T2) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Tuple2"));
    }
    var $d_T2 = new $TypeData().initClass($c_T2, "scala.Tuple2", ({
      T2: 1,
      s_Product2: 1,
      s_Product: 1,
      s_Equals: 1,
      Ljava_io_Serializable: 1
    }));
    /** @constructor */
    function $c_T3(_1, _2, _3) {
      this.T3__f__1 = null;
      this.T3__f__2 = null;
      this.T3__f__3 = null;
      this.T3__f__1 = _1;
      this.T3__f__2 = _2;
      this.T3__f__3 = _3;
    }
    $c_T3.prototype = new $h_O();
    $c_T3.prototype.constructor = $c_T3;
    $c_T3.prototype;
    $c_T3.prototype.productArity__I = (function() {
      return 3;
    });
    $c_T3.prototype.productElement__I__O = (function(n) {
      return $f_s_Product3__productElement__I__O(this, n);
    });
    $c_T3.prototype.toString__T = (function() {
      return (((((("(" + this.T3__f__1) + ",") + this.T3__f__2) + ",") + this.T3__f__3) + ")");
    });
    $c_T3.prototype.productPrefix__T = (function() {
      return "Tuple3";
    });
    $c_T3.prototype.hashCode__I = (function() {
      var this$2 = $m_s_util_hashing_MurmurHash3$();
      return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false);
    });
    function $as_T3(obj) {
      return (((obj instanceof $c_T3) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Tuple3"));
    }
    new $TypeData().initClass($c_T3, "scala.Tuple3", ({
      T3: 1,
      s_Product3: 1,
      s_Product: 1,
      s_Equals: 1,
      Ljava_io_Serializable: 1
    }));
    function $f_sc_Iterable__toString__T($thiz) {
      var start = ($thiz.className__T() + "(");
      return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, ", ", ")");
    }
    /** @constructor */
    function $c_sc_Iterator$$anon$19() {
    }
    $c_sc_Iterator$$anon$19.prototype = new $h_sc_AbstractIterator();
    $c_sc_Iterator$$anon$19.prototype.constructor = $c_sc_Iterator$$anon$19;
    $c_sc_Iterator$$anon$19.prototype;
    $c_sc_Iterator$$anon$19.prototype.hasNext__Z = (function() {
      return false;
    });
    $c_sc_Iterator$$anon$19.prototype.next__E = (function() {
      throw new $c_ju_NoSuchElementException("next on empty iterator");
    });
    $c_sc_Iterator$$anon$19.prototype.knownSize__I = (function() {
      return 0;
    });
    $c_sc_Iterator$$anon$19.prototype.next__O = (function() {
      this.next__E();
    });
    new $TypeData().initClass($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
      sc_Iterator$$anon$19: 1,
      sc_AbstractIterator: 1,
      sc_Iterator: 1,
      sc_IterableOnce: 1,
      sc_IterableOnceOps: 1
    }));
    function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
      if ((n < 0)) {
        throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
      }
      var skipped = $as_sc_LinearSeq($thiz.drop__I__O(n));
      if ($n(skipped).isEmpty__Z()) {
        throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n));
      }
      return $n(skipped).head__O();
    }
    /** @constructor */
    function $c_sc_StrictOptimizedLinearSeqOps$$anon$1(outer) {
      this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current = null;
      this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current = outer;
    }
    $c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = new $h_sc_AbstractIterator();
    $c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype.constructor = $c_sc_StrictOptimizedLinearSeqOps$$anon$1;
    $c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype;
    $c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype.hasNext__Z = (function() {
      return (!$n(this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current).isEmpty__Z());
    });
    $c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype.next__O = (function() {
      var r = $n(this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current).head__O();
      this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current = $as_sc_StrictOptimizedLinearSeqOps($n(this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current).tail__O());
      return r;
    });
    new $TypeData().initClass($c_sc_StrictOptimizedLinearSeqOps$$anon$1, "scala.collection.StrictOptimizedLinearSeqOps$$anon$1", ({
      sc_StrictOptimizedLinearSeqOps$$anon$1: 1,
      sc_AbstractIterator: 1,
      sc_Iterator: 1,
      sc_IterableOnce: 1,
      sc_IterableOnceOps: 1
    }));
    class $c_jl_ArrayIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
      constructor(s) {
        super();
        $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
      }
    }
    new $TypeData().initClass($c_jl_ArrayIndexOutOfBoundsException, "java.lang.ArrayIndexOutOfBoundsException", ({
      jl_ArrayIndexOutOfBoundsException: 1,
      jl_IndexOutOfBoundsException: 1,
      jl_RuntimeException: 1,
      jl_Exception: 1,
      jl_Throwable: 1,
      Ljava_io_Serializable: 1
    }));
    function $f_jl_Double__hashCode__I($thiz) {
      return $m_jl_FloatingPointBits$().numberHashCode__D__I($thiz);
    }
    new $TypeData().initClass(0, "java.lang.Double", ({
      jl_Double: 1,
      jl_Number: 1,
      Ljava_io_Serializable: 1,
      jl_Comparable: 1,
      jl_constant_Constable: 1,
      jl_constant_ConstantDesc: 1
    }), ((x) => ((typeof x) === "number")));
    new $TypeData().initClass(0, "java.lang.Float", ({
      jl_Float: 1,
      jl_Number: 1,
      Ljava_io_Serializable: 1,
      jl_Comparable: 1,
      jl_constant_Constable: 1,
      jl_constant_ConstantDesc: 1
    }), ((x) => $isFloat(x)));
    new $TypeData().initClass(0, "java.lang.Integer", ({
      jl_Integer: 1,
      jl_Number: 1,
      Ljava_io_Serializable: 1,
      jl_Comparable: 1,
      jl_constant_Constable: 1,
      jl_constant_ConstantDesc: 1
    }), ((x) => $isInt(x)));
    function $f_jl_Long__hashCode__I($thiz) {
      var $x_1 = $thiz.RTLong__f_lo;
      var hi = $thiz.RTLong__f_hi;
      return ($x_1 ^ hi);
    }
    new $TypeData().initClass(0, "java.lang.Long", ({
      jl_Long: 1,
      jl_Number: 1,
      Ljava_io_Serializable: 1,
      jl_Comparable: 1,
      jl_constant_Constable: 1,
      jl_constant_ConstantDesc: 1
    }), ((x) => (x instanceof $c_RTLong)));
    function $f_T__hashCode__I($thiz) {
      var res = 0;
      var mul = 1;
      var i = (((-1) + $thiz.length) | 0);
      while ((i >= 0)) {
        var $x_1 = res;
        var index = i;
        res = (($x_1 + Math.imul($charAt($thiz, index), mul)) | 0);
        mul = Math.imul(31, mul);
        i = (((-1) + i) | 0);
      }
      return res;
    }
    function $as_T(obj) {
      return ((((typeof obj) === "string") || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.String"));
    }
    var $d_T = new $TypeData().initClass(0, "java.lang.String", ({
      T: 1,
      Ljava_io_Serializable: 1,
      jl_Comparable: 1,
      jl_CharSequence: 1,
      jl_constant_Constable: 1,
      jl_constant_ConstantDesc: 1
    }), ((x) => ((typeof x) === "string")));
    class $c_jl_StringIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
      constructor(index) {
        super();
        var s = ("String index out of range: " + index);
        $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
      }
    }
    new $TypeData().initClass($c_jl_StringIndexOutOfBoundsException, "java.lang.StringIndexOutOfBoundsException", ({
      jl_StringIndexOutOfBoundsException: 1,
      jl_IndexOutOfBoundsException: 1,
      jl_RuntimeException: 1,
      jl_Exception: 1,
      jl_Throwable: 1,
      Ljava_io_Serializable: 1
    }));
    /** @constructor */
    function $c_sc_AbstractIterable() {
    }
    $c_sc_AbstractIterable.prototype = new $h_O();
    $c_sc_AbstractIterable.prototype.constructor = $c_sc_AbstractIterable;
    /** @constructor */
    function $h_sc_AbstractIterable() {
    }
    $h_sc_AbstractIterable.prototype = $c_sc_AbstractIterable.prototype;
    $c_sc_AbstractIterable.prototype.className__T = (function() {
      return this.stringPrefix__T();
    });
    $c_sc_AbstractIterable.prototype.foreach__F1__V = (function(f) {
      $f_sc_IterableOnceOps__foreach__F1__V(this, f);
    });
    $c_sc_AbstractIterable.prototype.addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function(b, start, sep, end) {
      return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
    });
    $c_sc_AbstractIterable.prototype.knownSize__I = (function() {
      return (-1);
    });
    /** @constructor */
    function $c_sc_ArrayOps$ArrayIterator(xs) {
      this.sc_ArrayOps$ArrayIterator__f_xs = null;
      this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
      this.sc_ArrayOps$ArrayIterator__f_len = 0;
      this.sc_ArrayOps$ArrayIterator__f_xs = xs;
      this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = 0;
      var xs$1 = this.sc_ArrayOps$ArrayIterator__f_xs;
      this.sc_ArrayOps$ArrayIterator__f_len = $m_jl_reflect_Array$().getLength__O__I(xs$1);
    }
    $c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
    $c_sc_ArrayOps$ArrayIterator.prototype.constructor = $c_sc_ArrayOps$ArrayIterator;
    $c_sc_ArrayOps$ArrayIterator.prototype;
    $c_sc_ArrayOps$ArrayIterator.prototype.knownSize__I = (function() {
      return ((this.sc_ArrayOps$ArrayIterator__f_len - this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
    });
    $c_sc_ArrayOps$ArrayIterator.prototype.hasNext__Z = (function() {
      return (this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos < this.sc_ArrayOps$ArrayIterator__f_len);
    });
    $c_sc_ArrayOps$ArrayIterator.prototype.next__O = (function() {
      var $x_1 = this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos;
      var xs = this.sc_ArrayOps$ArrayIterator__f_xs;
      if (($x_1 >= $m_jl_reflect_Array$().getLength__O__I(xs))) {
        $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
      }
      var r = $m_sr_ScalaRunTime$().array_apply__O__I__O(this.sc_ArrayOps$ArrayIterator__f_xs, this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos);
      this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos = ((1 + this.sc_ArrayOps$ArrayIterator__f_scala$collection$ArrayOps$ArrayIterator$$pos) | 0);
      return r;
    });
    new $TypeData().initClass($c_sc_ArrayOps$ArrayIterator, "scala.collection.ArrayOps$ArrayIterator", ({
      sc_ArrayOps$ArrayIterator: 1,
      sc_AbstractIterator: 1,
      sc_Iterator: 1,
      sc_IterableOnce: 1,
      sc_IterableOnceOps: 1,
      Ljava_io_Serializable: 1
    }));
    /** @constructor */
    function $c_sc_IndexedSeqView$IndexedSeqViewIterator(self) {
      this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self = null;
      this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = 0;
      this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = 0;
      this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self = self;
      this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = 0;
      this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = $n(self).length__I();
    }
    $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
    $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
    $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype;
    $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.knownSize__I = (function() {
      return this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder;
    });
    $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.hasNext__Z = (function() {
      return (this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0);
    });
    $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.next__O = (function() {
      if ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder > 0)) {
        var r = $n(this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self).apply__I__O(this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current);
        this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = ((1 + this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current) | 0);
        this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder = (((-1) + this.sc_IndexedSeqView$IndexedSeqViewIterator__f_scala$collection$IndexedSeqView$IndexedSeqViewIterator$$remainder) | 0);
        return r;
      } else {
        return $n($m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty).next__O();
      }
    });
    new $TypeData().initClass($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
      sc_IndexedSeqView$IndexedSeqViewIterator: 1,
      sc_AbstractIterator: 1,
      sc_Iterator: 1,
      sc_IterableOnce: 1,
      sc_IterableOnceOps: 1,
      Ljava_io_Serializable: 1
    }));
    function $p_sci_ArraySeq$__emptyImpl$lzycompute__sci_ArraySeq$ofRef($thiz) {
      if ((!$thiz.sci_ArraySeq$__f_bitmap$0)) {
        $thiz.sci_ArraySeq$__f_emptyImpl = new $c_sci_ArraySeq$ofRef(new $ac_O(0));
        $thiz.sci_ArraySeq$__f_bitmap$0 = true;
      }
      return $thiz.sci_ArraySeq$__f_emptyImpl;
    }
    function $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($thiz) {
      return ((!$thiz.sci_ArraySeq$__f_bitmap$0) ? $p_sci_ArraySeq$__emptyImpl$lzycompute__sci_ArraySeq$ofRef($thiz) : $thiz.sci_ArraySeq$__f_emptyImpl);
    }
    /** @constructor */
    function $c_sci_ArraySeq$() {
      this.sci_ArraySeq$__f_emptyImpl = null;
      this.sci_ArraySeq$__f_bitmap$0 = false;
    }
    $c_sci_ArraySeq$.prototype = new $h_O();
    $c_sci_ArraySeq$.prototype.constructor = $c_sci_ArraySeq$;
    $c_sci_ArraySeq$.prototype;
    new $TypeData().initClass($c_sci_ArraySeq$, "scala.collection.immutable.ArraySeq$", ({
      sci_ArraySeq$: 1,
      sc_StrictOptimizedClassTagSeqFactory: 1,
      sc_ClassTagSeqFactory: 1,
      sc_ClassTagIterableFactory: 1,
      sc_EvidenceIterableFactory: 1,
      Ljava_io_Serializable: 1
    }));
    var $n_sci_ArraySeq$;
    function $m_sci_ArraySeq$() {
      if ((!$n_sci_ArraySeq$)) {
        $n_sci_ArraySeq$ = new $c_sci_ArraySeq$();
      }
      return $n_sci_ArraySeq$;
    }
    /** @constructor */
    function $c_Ljava_io_PrintStream() {
    }
    $c_Ljava_io_PrintStream.prototype = new $h_Ljava_io_FilterOutputStream();
    $c_Ljava_io_PrintStream.prototype.constructor = $c_Ljava_io_PrintStream;
    /** @constructor */
    function $h_Ljava_io_PrintStream() {
    }
    $h_Ljava_io_PrintStream.prototype = $c_Ljava_io_PrintStream.prototype;
    function $as_Ljava_io_PrintStream(obj) {
      return (((obj instanceof $c_Ljava_io_PrintStream) || (obj === null)) ? obj : $throwClassCastException(obj, "java.io.PrintStream"));
    }
    function $f_sc_View__toString__T($thiz) {
      return ($thiz.stringPrefix__T() + "(<not computed>)");
    }
    function $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V($thiz, line) {
      if (($as_T((typeof console)) !== "undefined")) {
        if (($thiz.jl_JSConsoleBasedPrintStream__f_isErr && $uZ((!(!console.error))))) {
          console.error(line);
        } else {
          console.log(line);
        }
      }
    }
    /** @constructor */
    function $c_jl_JSConsoleBasedPrintStream(isErr) {
      this.jl_JSConsoleBasedPrintStream__f_isErr = false;
      this.jl_JSConsoleBasedPrintStream__f_buffer = null;
      this.jl_JSConsoleBasedPrintStream__f_isErr = isErr;
      this.jl_JSConsoleBasedPrintStream__f_buffer = "";
    }
    $c_jl_JSConsoleBasedPrintStream.prototype = new $h_Ljava_io_PrintStream();
    $c_jl_JSConsoleBasedPrintStream.prototype.constructor = $c_jl_JSConsoleBasedPrintStream;
    $c_jl_JSConsoleBasedPrintStream.prototype;
    $c_jl_JSConsoleBasedPrintStream.prototype.java$lang$JSConsoleBasedPrintStream$$printString__T__V = (function(s) {
      var rest = s;
      while ((rest !== "")) {
        var this$1$1 = $n(rest);
        var nlPos = $uI(this$1$1.indexOf("\n"));
        if ((nlPos < 0)) {
          this.jl_JSConsoleBasedPrintStream__f_buffer = (("" + this.jl_JSConsoleBasedPrintStream__f_buffer) + rest);
          rest = "";
        } else {
          var $x_1 = this.jl_JSConsoleBasedPrintStream__f_buffer;
          var this$2 = $n(rest);
          if ((nlPos > this$2.length)) {
            $charAt(this$2, nlPos);
          }
          if ((nlPos < 0)) {
            $charAt(this$2, (-1));
          }
          $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V(this, (("" + $x_1) + $as_T(this$2.substring(0, nlPos))));
          this.jl_JSConsoleBasedPrintStream__f_buffer = "";
          var this$3 = $n(rest);
          var beginIndex = ((1 + nlPos) | 0);
          if (((beginIndex < 0) || (beginIndex > this$3.length))) {
            $charAt(this$3, beginIndex);
          }
          rest = $as_T(this$3.substring(beginIndex));
        }
      }
    });
    new $TypeData().initClass($c_jl_JSConsoleBasedPrintStream, "java.lang.JSConsoleBasedPrintStream", ({
      jl_JSConsoleBasedPrintStream: 1,
      Ljava_io_PrintStream: 1,
      Ljava_io_FilterOutputStream: 1,
      Ljava_io_OutputStream: 1,
      Ljava_io_Closeable: 1,
      jl_AutoCloseable: 1,
      Ljava_io_Flushable: 1,
      jl_Appendable: 1
    }));
    function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
      while (true) {
        if (((n <= 0) || $n(s).isEmpty__Z())) {
          return s;
        } else {
          var temp$n = (((-1) + n) | 0);
          var temp$s = $as_sc_LinearSeq($n(s).tail__O());
          n = temp$n;
          s = temp$s;
        }
      }
    }
    function $is_sc_StrictOptimizedLinearSeqOps(obj) {
      return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_StrictOptimizedLinearSeqOps)));
    }
    function $as_sc_StrictOptimizedLinearSeqOps(obj) {
      return (($is_sc_StrictOptimizedLinearSeqOps(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.StrictOptimizedLinearSeqOps"));
    }
    /** @constructor */
    function $c_sc_AbstractView() {
    }
    $c_sc_AbstractView.prototype = new $h_sc_AbstractIterable();
    $c_sc_AbstractView.prototype.constructor = $c_sc_AbstractView;
    /** @constructor */
    function $h_sc_AbstractView() {
    }
    $h_sc_AbstractView.prototype = $c_sc_AbstractView.prototype;
    $c_sc_AbstractView.prototype.toString__T = (function() {
      return $f_sc_View__toString__T(this);
    });
    /** @constructor */
    function $c_sc_AbstractSeq() {
    }
    $c_sc_AbstractSeq.prototype = new $h_sc_AbstractIterable();
    $c_sc_AbstractSeq.prototype.constructor = $c_sc_AbstractSeq;
    /** @constructor */
    function $h_sc_AbstractSeq() {
    }
    $h_sc_AbstractSeq.prototype = $c_sc_AbstractSeq.prototype;
    $c_sc_AbstractSeq.prototype.hashCode__I = (function() {
      return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this);
    });
    $c_sc_AbstractSeq.prototype.toString__T = (function() {
      return $f_sc_Iterable__toString__T(this);
    });
    /** @constructor */
    function $c_sc_AbstractSeqView() {
    }
    $c_sc_AbstractSeqView.prototype = new $h_sc_AbstractView();
    $c_sc_AbstractSeqView.prototype.constructor = $c_sc_AbstractSeqView;
    /** @constructor */
    function $h_sc_AbstractSeqView() {
    }
    $h_sc_AbstractSeqView.prototype = $c_sc_AbstractSeqView.prototype;
    function $is_sc_IndexedSeq(obj) {
      return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IndexedSeq)));
    }
    function $as_sc_IndexedSeq(obj) {
      return (($is_sc_IndexedSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IndexedSeq"));
    }
    function $is_sc_LinearSeq(obj) {
      return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_LinearSeq)));
    }
    function $as_sc_LinearSeq(obj) {
      return (($is_sc_LinearSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.LinearSeq"));
    }
    function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
      $thiz.sc_SeqView$Id__f_underlying = underlying;
      return $thiz;
    }
    /** @constructor */
    function $c_sc_SeqView$Id() {
      this.sc_SeqView$Id__f_underlying = null;
    }
    $c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
    $c_sc_SeqView$Id.prototype.constructor = $c_sc_SeqView$Id;
    /** @constructor */
    function $h_sc_SeqView$Id() {
    }
    $h_sc_SeqView$Id.prototype = $c_sc_SeqView$Id.prototype;
    $c_sc_SeqView$Id.prototype.apply__I__O = (function(idx) {
      return $n(this.sc_SeqView$Id__f_underlying).apply__I__O(idx);
    });
    $c_sc_SeqView$Id.prototype.length__I = (function() {
      return $n(this.sc_SeqView$Id__f_underlying).length__I();
    });
    /** @constructor */
    function $c_sc_IndexedSeqView$Id(underlying) {
      this.sc_SeqView$Id__f_underlying = null;
      $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
    }
    $c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
    $c_sc_IndexedSeqView$Id.prototype.constructor = $c_sc_IndexedSeqView$Id;
    $c_sc_IndexedSeqView$Id.prototype;
    $c_sc_IndexedSeqView$Id.prototype.iterator__sc_Iterator = (function() {
      return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this);
    });
    $c_sc_IndexedSeqView$Id.prototype.stringPrefix__T = (function() {
      return "IndexedSeqView";
    });
    $c_sc_IndexedSeqView$Id.prototype.knownSize__I = (function() {
      return this.length__I();
    });
    new $TypeData().initClass($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
      sc_IndexedSeqView$Id: 1,
      sc_SeqView$Id: 1,
      sc_AbstractSeqView: 1,
      sc_AbstractView: 1,
      sc_AbstractIterable: 1,
      sc_Iterable: 1,
      sc_IterableOnce: 1,
      sc_IterableOps: 1,
      sc_IterableOnceOps: 1,
      sc_IterableFactoryDefaults: 1,
      sc_View: 1,
      Ljava_io_Serializable: 1,
      sc_SeqView: 1,
      sc_SeqOps: 1,
      sc_IndexedSeqView: 1,
      sc_IndexedSeqOps: 1
    }));
    /** @constructor */
    function $c_sci_AbstractSeq() {
    }
    $c_sci_AbstractSeq.prototype = new $h_sc_AbstractSeq();
    $c_sci_AbstractSeq.prototype.constructor = $c_sci_AbstractSeq;
    /** @constructor */
    function $h_sci_AbstractSeq() {
    }
    $h_sci_AbstractSeq.prototype = $c_sci_AbstractSeq.prototype;
    /** @constructor */
    function $c_scm_AbstractSeq() {
    }
    $c_scm_AbstractSeq.prototype = new $h_sc_AbstractSeq();
    $c_scm_AbstractSeq.prototype.constructor = $c_scm_AbstractSeq;
    /** @constructor */
    function $h_scm_AbstractSeq() {
    }
    $h_scm_AbstractSeq.prototype = $c_scm_AbstractSeq.prototype;
    /** @constructor */
    function $c_sci_ArraySeq() {
    }
    $c_sci_ArraySeq.prototype = new $h_sci_AbstractSeq();
    $c_sci_ArraySeq.prototype.constructor = $c_sci_ArraySeq;
    /** @constructor */
    function $h_sci_ArraySeq() {
    }
    $h_sci_ArraySeq.prototype = $c_sci_ArraySeq.prototype;
    $c_sci_ArraySeq.prototype.stringPrefix__T = (function() {
      return "IndexedSeq";
    });
    $c_sci_ArraySeq.prototype.knownSize__I = (function() {
      return this.length__I();
    });
    $c_sci_ArraySeq.prototype.className__T = (function() {
      return "ArraySeq";
    });
    /** @constructor */
    function $c_sci_ArraySeq$ofRef(unsafeArray) {
      this.sci_ArraySeq$ofRef__f_unsafeArray = null;
      this.sci_ArraySeq$ofRef__f_unsafeArray = unsafeArray;
    }
    $c_sci_ArraySeq$ofRef.prototype = new $h_sci_ArraySeq();
    $c_sci_ArraySeq$ofRef.prototype.constructor = $c_sci_ArraySeq$ofRef;
    $c_sci_ArraySeq$ofRef.prototype;
    $c_sci_ArraySeq$ofRef.prototype.length__I = (function() {
      return $n(this.sci_ArraySeq$ofRef__f_unsafeArray).u.length;
    });
    $c_sci_ArraySeq$ofRef.prototype.apply__I__O = (function(i) {
      return $n(this.sci_ArraySeq$ofRef__f_unsafeArray).get(i);
    });
    $c_sci_ArraySeq$ofRef.prototype.hashCode__I = (function() {
      var this$1$1 = $m_s_util_hashing_MurmurHash3$();
      var a = this.sci_ArraySeq$ofRef__f_unsafeArray;
      return this$1$1.arrayHash__O__I__I(a, this$1$1.s_util_hashing_MurmurHash3$__f_seqSeed);
    });
    $c_sci_ArraySeq$ofRef.prototype.iterator__sc_Iterator = (function() {
      return new $c_sc_ArrayOps$ArrayIterator(this.sci_ArraySeq$ofRef__f_unsafeArray);
    });
    $c_sci_ArraySeq$ofRef.prototype.apply__O__O = (function(v1) {
      return this.apply__I__O($uI(v1));
    });
    new $TypeData().initClass($c_sci_ArraySeq$ofRef, "scala.collection.immutable.ArraySeq$ofRef", ({
      sci_ArraySeq$ofRef: 1,
      sci_ArraySeq: 1,
      sci_AbstractSeq: 1,
      sc_AbstractSeq: 1,
      sc_AbstractIterable: 1,
      sc_Iterable: 1,
      sc_IterableOnce: 1,
      sc_IterableOps: 1,
      sc_IterableOnceOps: 1,
      sc_IterableFactoryDefaults: 1,
      sc_Seq: 1,
      s_PartialFunction: 1,
      F1: 1,
      sc_SeqOps: 1,
      s_Equals: 1,
      sci_Seq: 1,
      sci_Iterable: 1,
      sci_SeqOps: 1,
      sci_IndexedSeq: 1,
      sc_IndexedSeq: 1,
      sc_IndexedSeqOps: 1,
      sci_IndexedSeqOps: 1,
      sci_StrictOptimizedSeqOps: 1,
      sc_StrictOptimizedSeqOps: 1,
      sc_StrictOptimizedIterableOps: 1,
      sc_EvidenceIterableFactoryDefaults: 1,
      Ljava_io_Serializable: 1
    }));
    /** @constructor */
    function $c_sci_List() {
    }
    $c_sci_List.prototype = new $h_sci_AbstractSeq();
    $c_sci_List.prototype.constructor = $c_sci_List;
    /** @constructor */
    function $h_sci_List() {
    }
    $h_sci_List.prototype = $c_sci_List.prototype;
    $c_sci_List.prototype.iterator__sc_Iterator = (function() {
      return new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(this);
    });
    $c_sci_List.prototype.stringPrefix__T = (function() {
      return "LinearSeq";
    });
    $c_sci_List.prototype.apply__I__O = (function(n) {
      return $f_sc_LinearSeqOps__apply__I__O(this, n);
    });
    $c_sci_List.prototype.isEmpty__Z = (function() {
      return (this === $m_sci_Nil$());
    });
    $c_sci_List.prototype.foreach__F1__V = (function(f) {
      var these = this;
      while ((!$n(these).isEmpty__Z())) {
        $n(f).apply__O__O($n(these).head__O());
        these = $as_sci_List($n(these).tail__O());
      }
    });
    $c_sci_List.prototype.length__I = (function() {
      var these = this;
      var len = 0;
      while ((!$n(these).isEmpty__Z())) {
        len = ((1 + len) | 0);
        these = $as_sci_List($n(these).tail__O());
      }
      return len;
    });
    $c_sci_List.prototype.className__T = (function() {
      return "List";
    });
    $c_sci_List.prototype.apply__O__O = (function(v1) {
      var n = $uI(v1);
      return $f_sc_LinearSeqOps__apply__I__O(this, n);
    });
    $c_sci_List.prototype.drop__I__O = (function(n) {
      return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
    });
    function $as_sci_List(obj) {
      return (((obj instanceof $c_sci_List) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.List"));
    }
    /** @constructor */
    function $c_sci_$colon$colon(head, next) {
      this.sci_$colon$colon__f_head = null;
      this.sci_$colon$colon__f_next = null;
      this.sci_$colon$colon__f_head = head;
      this.sci_$colon$colon__f_next = next;
    }
    $c_sci_$colon$colon.prototype = new $h_sci_List();
    $c_sci_$colon$colon.prototype.constructor = $c_sci_$colon$colon;
    $c_sci_$colon$colon.prototype;
    $c_sci_$colon$colon.prototype.head__O = (function() {
      return this.sci_$colon$colon__f_head;
    });
    $c_sci_$colon$colon.prototype.productPrefix__T = (function() {
      return "::";
    });
    $c_sci_$colon$colon.prototype.productArity__I = (function() {
      return 2;
    });
    $c_sci_$colon$colon.prototype.productElement__I__O = (function(x$1) {
      switch (x$1) {
        case 0: {
          return this.sci_$colon$colon__f_head;
        }
        case 1: {
          return this.sci_$colon$colon__f_next;
        }
        default: {
          return $m_sr_Statics$().ioobe__I__O(x$1);
        }
      }
    });
    $c_sci_$colon$colon.prototype.tail__O = (function() {
      return this.sci_$colon$colon__f_next;
    });
    new $TypeData().initClass($c_sci_$colon$colon, "scala.collection.immutable.$colon$colon", ({
      sci_$colon$colon: 1,
      sci_List: 1,
      sci_AbstractSeq: 1,
      sc_AbstractSeq: 1,
      sc_AbstractIterable: 1,
      sc_Iterable: 1,
      sc_IterableOnce: 1,
      sc_IterableOps: 1,
      sc_IterableOnceOps: 1,
      sc_IterableFactoryDefaults: 1,
      sc_Seq: 1,
      s_PartialFunction: 1,
      F1: 1,
      sc_SeqOps: 1,
      s_Equals: 1,
      sci_Seq: 1,
      sci_Iterable: 1,
      sci_SeqOps: 1,
      sci_LinearSeq: 1,
      sc_LinearSeq: 1,
      sc_LinearSeqOps: 1,
      sci_LinearSeqOps: 1,
      sc_StrictOptimizedLinearSeqOps: 1,
      sc_StrictOptimizedSeqOps: 1,
      sc_StrictOptimizedIterableOps: 1,
      sci_StrictOptimizedSeqOps: 1,
      scg_DefaultSerializable: 1,
      Ljava_io_Serializable: 1,
      s_Product: 1
    }));
    /** @constructor */
    function $c_sci_Nil$() {
    }
    $c_sci_Nil$.prototype = new $h_sci_List();
    $c_sci_Nil$.prototype.constructor = $c_sci_Nil$;
    $c_sci_Nil$.prototype;
    $c_sci_Nil$.prototype.head__E = (function() {
      throw new $c_ju_NoSuchElementException("head of empty list");
    });
    $c_sci_Nil$.prototype.tail__E = (function() {
      throw new $c_jl_UnsupportedOperationException("tail of empty list");
    });
    $c_sci_Nil$.prototype.knownSize__I = (function() {
      return 0;
    });
    $c_sci_Nil$.prototype.iterator__sc_Iterator = (function() {
      return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty;
    });
    $c_sci_Nil$.prototype.productPrefix__T = (function() {
      return "Nil";
    });
    $c_sci_Nil$.prototype.productArity__I = (function() {
      return 0;
    });
    $c_sci_Nil$.prototype.productElement__I__O = (function(x$1) {
      return $m_sr_Statics$().ioobe__I__O(x$1);
    });
    $c_sci_Nil$.prototype.tail__O = (function() {
      this.tail__E();
    });
    $c_sci_Nil$.prototype.head__O = (function() {
      this.head__E();
    });
    new $TypeData().initClass($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
      sci_Nil$: 1,
      sci_List: 1,
      sci_AbstractSeq: 1,
      sc_AbstractSeq: 1,
      sc_AbstractIterable: 1,
      sc_Iterable: 1,
      sc_IterableOnce: 1,
      sc_IterableOps: 1,
      sc_IterableOnceOps: 1,
      sc_IterableFactoryDefaults: 1,
      sc_Seq: 1,
      s_PartialFunction: 1,
      F1: 1,
      sc_SeqOps: 1,
      s_Equals: 1,
      sci_Seq: 1,
      sci_Iterable: 1,
      sci_SeqOps: 1,
      sci_LinearSeq: 1,
      sc_LinearSeq: 1,
      sc_LinearSeqOps: 1,
      sci_LinearSeqOps: 1,
      sc_StrictOptimizedLinearSeqOps: 1,
      sc_StrictOptimizedSeqOps: 1,
      sc_StrictOptimizedIterableOps: 1,
      sci_StrictOptimizedSeqOps: 1,
      scg_DefaultSerializable: 1,
      Ljava_io_Serializable: 1,
      s_Product: 1
    }));
    var $n_sci_Nil$;
    function $m_sci_Nil$() {
      if ((!$n_sci_Nil$)) {
        $n_sci_Nil$ = new $c_sci_Nil$();
      }
      return $n_sci_Nil$;
    }
    function $ct_scm_StringBuilder__jl_StringBuilder__($thiz, underlying) {
      $thiz.scm_StringBuilder__f_underlying = underlying;
      return $thiz;
    }
    function $ct_scm_StringBuilder__($thiz) {
      $ct_scm_StringBuilder__jl_StringBuilder__($thiz, new $c_jl_StringBuilder());
      return $thiz;
    }
    /** @constructor */
    function $c_scm_StringBuilder() {
      this.scm_StringBuilder__f_underlying = null;
    }
    $c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
    $c_scm_StringBuilder.prototype.constructor = $c_scm_StringBuilder;
    $c_scm_StringBuilder.prototype;
    $c_scm_StringBuilder.prototype.stringPrefix__T = (function() {
      return "IndexedSeq";
    });
    $c_scm_StringBuilder.prototype.iterator__sc_Iterator = (function() {
      var this$1$1 = new $c_sc_IndexedSeqView$Id(this);
      return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1$1);
    });
    $c_scm_StringBuilder.prototype.length__I = (function() {
      return $n(this.scm_StringBuilder__f_underlying).length__I();
    });
    $c_scm_StringBuilder.prototype.knownSize__I = (function() {
      return $n(this.scm_StringBuilder__f_underlying).length__I();
    });
    $c_scm_StringBuilder.prototype.toString__T = (function() {
      return $n(this.scm_StringBuilder__f_underlying).jl_StringBuilder__f_java$lang$StringBuilder$$content;
    });
    $c_scm_StringBuilder.prototype.apply__O__O = (function(v1) {
      var i = $uI(v1);
      return $bC($n(this.scm_StringBuilder__f_underlying).charAt__I__C(i));
    });
    $c_scm_StringBuilder.prototype.apply__I__O = (function(i) {
      return $bC($n(this.scm_StringBuilder__f_underlying).charAt__I__C(i));
    });
    new $TypeData().initClass($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
      scm_StringBuilder: 1,
      scm_AbstractSeq: 1,
      sc_AbstractSeq: 1,
      sc_AbstractIterable: 1,
      sc_Iterable: 1,
      sc_IterableOnce: 1,
      sc_IterableOps: 1,
      sc_IterableOnceOps: 1,
      sc_IterableFactoryDefaults: 1,
      sc_Seq: 1,
      s_PartialFunction: 1,
      F1: 1,
      sc_SeqOps: 1,
      s_Equals: 1,
      scm_Seq: 1,
      scm_Iterable: 1,
      scm_SeqOps: 1,
      scm_Cloneable: 1,
      jl_Cloneable: 1,
      scm_ReusableBuilder: 1,
      scm_Builder: 1,
      scm_Growable: 1,
      scm_Clearable: 1,
      scm_IndexedSeq: 1,
      sc_IndexedSeq: 1,
      sc_IndexedSeqOps: 1,
      scm_IndexedSeqOps: 1,
      jl_CharSequence: 1,
      Ljava_io_Serializable: 1
    }));
    $L0 = new $c_RTLong(0, 0);
    $d_J.zero = $L0;
    $s_LTray__main__AT__V(new ($d_T.getArrayOf().constr)([]));

})();
