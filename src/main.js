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

    var $p;
    var $L0;
    function $Char(c) {
      this.c = c;
    }
    $p = $Char.prototype;
    $p.toString = (function() {
      return String.fromCharCode(this.c);
    });
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
            return arg0.$classData.N;
          } else {
            return null.bt();
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
            return instance.o();
          } else if ((instance instanceof $c_RTLong)) {
            return $f_jl_Long__hashCode__I(instance);
          } else if ((instance instanceof $Char)) {
            return $f_jl_Character__hashCode__I($uC(instance));
          } else {
            return $c_O.prototype.o.call(instance);
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
    function $arraycopyGeneric(arg0, arg1, arg2, arg3, arg4) {
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
    function $uC(arg0) {
      return ((arg0 === null) ? 0 : arg0.c);
    }
    function $uJ(arg0) {
      return ((arg0 === null) ? $L0 : arg0);
    }
    /** @constructor */
    function $c_O() {
    }
    $p = $c_O.prototype;
    $p.constructor = $c_O;
    /** @constructor */
    function $h_O() {
    }
    $h_O.prototype = $p;
    $p.o = (function() {
      return $systemIdentityHashCode(this);
    });
    $p.i = (function() {
      var i = this.o();
      return (($objectClassName(this) + "@") + (+(i >>> 0.0)).toString(16));
    });
    $p.toString = (function() {
      return this.i();
    });
    function $ac_O(arg) {
      if (((typeof arg) === "number")) {
        this.a = new Array(arg);
        for (var i = 0; (i < arg); (i++)) {
          this.a[i] = null;
        }
      } else {
        this.a = arg;
      }
    }
    $p = $ac_O.prototype = new $h_O();
    $p.constructor = $ac_O;
    $p.r = (function(srcPos, dest, destPos, length) {
      $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
    });
    $p.n = (function() {
      return new $ac_O(this.a.slice());
    });
    function $ah_O() {
    }
    $ah_O.prototype = $p;
    function $ac_Z(arg) {
      if (((typeof arg) === "number")) {
        this.a = new Array(arg);
        for (var i = 0; (i < arg); (i++)) {
          this.a[i] = false;
        }
      } else {
        this.a = arg;
      }
    }
    $p = $ac_Z.prototype = new $h_O();
    $p.constructor = $ac_Z;
    $p.r = (function(srcPos, dest, destPos, length) {
      $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
    });
    $p.n = (function() {
      return new $ac_Z(this.a.slice());
    });
    function $ac_C(arg) {
      if (((typeof arg) === "number")) {
        this.a = new Uint16Array(arg);
      } else {
        this.a = arg;
      }
    }
    $p = $ac_C.prototype = new $h_O();
    $p.constructor = $ac_C;
    $p.r = (function(srcPos, dest, destPos, length) {
      dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
    });
    $p.n = (function() {
      return new $ac_C(this.a.slice());
    });
    function $ac_B(arg) {
      if (((typeof arg) === "number")) {
        this.a = new Int8Array(arg);
      } else {
        this.a = arg;
      }
    }
    $p = $ac_B.prototype = new $h_O();
    $p.constructor = $ac_B;
    $p.r = (function(srcPos, dest, destPos, length) {
      dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
    });
    $p.n = (function() {
      return new $ac_B(this.a.slice());
    });
    function $ac_S(arg) {
      if (((typeof arg) === "number")) {
        this.a = new Int16Array(arg);
      } else {
        this.a = arg;
      }
    }
    $p = $ac_S.prototype = new $h_O();
    $p.constructor = $ac_S;
    $p.r = (function(srcPos, dest, destPos, length) {
      dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
    });
    $p.n = (function() {
      return new $ac_S(this.a.slice());
    });
    function $ac_I(arg) {
      if (((typeof arg) === "number")) {
        this.a = new Int32Array(arg);
      } else {
        this.a = arg;
      }
    }
    $p = $ac_I.prototype = new $h_O();
    $p.constructor = $ac_I;
    $p.r = (function(srcPos, dest, destPos, length) {
      dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
    });
    $p.n = (function() {
      return new $ac_I(this.a.slice());
    });
    function $ac_J(arg) {
      if (((typeof arg) === "number")) {
        this.a = new Array(arg);
        for (var i = 0; (i < arg); (i++)) {
          this.a[i] = $L0;
        }
      } else {
        this.a = arg;
      }
    }
    $p = $ac_J.prototype = new $h_O();
    $p.constructor = $ac_J;
    $p.r = (function(srcPos, dest, destPos, length) {
      $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
    });
    $p.n = (function() {
      return new $ac_J(this.a.slice());
    });
    function $ac_F(arg) {
      if (((typeof arg) === "number")) {
        this.a = new Float32Array(arg);
      } else {
        this.a = arg;
      }
    }
    $p = $ac_F.prototype = new $h_O();
    $p.constructor = $ac_F;
    $p.r = (function(srcPos, dest, destPos, length) {
      dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
    });
    $p.n = (function() {
      return new $ac_F(this.a.slice());
    });
    function $ac_D(arg) {
      if (((typeof arg) === "number")) {
        this.a = new Float64Array(arg);
      } else {
        this.a = arg;
      }
    }
    $p = $ac_D.prototype = new $h_O();
    $p.constructor = $ac_D;
    $p.r = (function(srcPos, dest, destPos, length) {
      dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
    });
    $p.n = (function() {
      return new $ac_D(this.a.slice());
    });
    function $TypeData() {
      this.C = (void 0);
      this.n = null;
      this.O = null;
      this.B = null;
      this.D = 0;
      this.z = null;
      this.E = "";
      this.L = (void 0);
      this.A = (void 0);
      this.F = (void 0);
      this.w = (void 0);
      this.J = false;
      this.N = "";
      this.X = false;
      this.Y = false;
      this.Z = false;
      this.I = (void 0);
    }
    $p = $TypeData.prototype;
    $p.p = (function(zero, arrayEncodedName, displayName, arrayClass, typedArrayClass) {
      this.n = ({});
      this.z = zero;
      this.E = arrayEncodedName;
      var self = this;
      this.F = ((that) => (that === self));
      this.N = displayName;
      this.X = true;
      this.I = ((obj) => false);
      if ((arrayClass !== (void 0))) {
        this.A = new $TypeData().y(this, arrayClass, typedArrayClass);
      }
      return this;
    });
    $p.i = (function(kindOrCtor, fullName, ancestors, isInstance) {
      var internalName = Object.getOwnPropertyNames(ancestors)[0];
      this.n = ancestors;
      this.E = (("L" + fullName) + ";");
      this.F = ((that) => (!(!that.n[internalName])));
      this.J = (kindOrCtor === 2);
      this.N = fullName;
      this.Y = (kindOrCtor === 1);
      this.I = (isInstance || ((obj) => (!(!((obj && obj.$classData) && obj.$classData.n[internalName])))));
      if (((typeof kindOrCtor) !== "number")) {
        kindOrCtor.prototype.$classData = this;
      }
      return this;
    });
    $p.y = (function(componentData, arrayClass, typedArrayClass, isAssignableFromFun) {
      arrayClass.prototype.$classData = this;
      var name = ("[" + componentData.E);
      this.C = arrayClass;
      this.n = ({
        z: 1,
        a: 1
      });
      this.O = componentData;
      this.B = componentData;
      this.D = 1;
      this.E = name;
      this.N = name;
      this.Z = true;
      var self = this;
      this.F = (isAssignableFromFun || ((that) => (self === that)));
      this.w = (typedArrayClass ? ((array) => new arrayClass(new typedArrayClass(array))) : ((array) => new arrayClass(array)));
      this.I = ((obj) => (obj instanceof arrayClass));
      return this;
    });
    $p.a = (function(componentData) {
      function ArrayClass(arg) {
        if (((typeof arg) === "number")) {
          this.a = new Array(arg);
          for (var i = 0; (i < arg); (i++)) {
            this.a[i] = null;
          }
        } else {
          this.a = arg;
        }
      }
      var $p = ArrayClass.prototype = new $ah_O();
      $p.constructor = ArrayClass;
      $p.r = (function(srcPos, dest, destPos, length) {
        $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
      });
      $p.n = (function() {
        return new ArrayClass(this.a.slice());
      });
      $p.$classData = this;
      var arrayBase = (componentData.B || componentData);
      var arrayDepth = (componentData.D + 1);
      var name = ("[" + componentData.E);
      this.C = ArrayClass;
      this.n = ({
        z: 1,
        a: 1
      });
      this.O = componentData;
      this.B = arrayBase;
      this.D = arrayDepth;
      this.E = name;
      this.N = name;
      this.Z = true;
      var isAssignableFromFun = ((that) => {
        var thatDepth = that.D;
        return ((thatDepth === arrayDepth) ? arrayBase.F(that.B) : ((thatDepth > arrayDepth) && (arrayBase === $d_O)));
      });
      this.F = isAssignableFromFun;
      this.w = ((array) => new ArrayClass(array));
      var self = this;
      this.I = ((obj) => {
        var data = (obj && obj.$classData);
        return ((!(!data)) && ((data === self) || isAssignableFromFun(data)));
      });
      return this;
    });
    $p.r = (function() {
      if ((!this.A)) {
        this.A = new $TypeData().a(this);
      }
      return this.A;
    });
    var $d_O = new $TypeData();
    $d_O.n = ({});
    $d_O.E = "Ljava.lang.Object;";
    $d_O.F = ((that) => (!that.X));
    $d_O.N = "java.lang.Object";
    $d_O.I = ((obj) => (obj !== null));
    $d_O.A = new $TypeData().y($d_O, $ac_O, (void 0), ((that) => {
      var thatDepth = that.D;
      return ((thatDepth === 1) ? (!that.B.X) : (thatDepth > 1));
    }));
    $c_O.prototype.$classData = $d_O;
    new $TypeData().p((void 0), "V", "void", (void 0), (void 0));
    new $TypeData().p(false, "Z", "boolean", $ac_Z, (void 0));
    new $TypeData().p(0, "C", "char", $ac_C, Uint16Array);
    new $TypeData().p(0, "B", "byte", $ac_B, Int8Array);
    new $TypeData().p(0, "S", "short", $ac_S, Int16Array);
    new $TypeData().p(0, "I", "int", $ac_I, Int32Array);
    var $d_J = new $TypeData().p(null, "J", "long", $ac_J, (void 0));
    new $TypeData().p(0.0, "F", "float", $ac_F, Float32Array);
    new $TypeData().p(0.0, "D", "double", $ac_D, Float64Array);
    function $s_LTray__main__AT__V(as) {
      $m_LTray$().aZ();
    }
    /** @constructor */
    function $c_LTray$() {
      $n_LTray$ = this;
      $m_s_concurrent_ExecutionContext$().aN();
    }
    $p = $c_LTray$.prototype = new $h_O();
    $p.constructor = $c_LTray$;
    $p.b1 = (function() {
      var menus = new $c_sci_$colon$colon(new $c_T3("tauri", "Tauri", "https://tauri.app"), new $c_sci_$colon$colon(new $c_T3("scala.js", "Scala.js", "https://scala-js.org"), $m_sci_Nil$()));
      var f = ((mi) => {
        var text$proxy1 = mi.O;
        var _\uff3fobj = $m_sjs_js_special_package$().aa($m_sr_ScalaRunTime$().ac(new ($d_T2.r().C)([new $c_T2("text", text$proxy1)])));
        var value$proxy1 = mi.N;
        _\uff3fobj.id = value$proxy1;
        var value$proxy2 = new $c_sjsr_AnonFunction1(((url$1) => ((id) => {
          $m_LTray$().b2(url$1, id);
        }))(mi.P));
        var value = $m_sjs_js_Any$().ap(value$proxy2);
        _\uff3fobj.action = value;
        return _\uff3fobj;
      });
      if ((menus === $m_sci_Nil$())) {
        var menuItems = $m_sci_Nil$();
      } else {
        var arg1 = menus.U;
        var h = new $c_sci_$colon$colon(f(arg1), $m_sci_Nil$());
        var t = h;
        var rest = menus.D;
        while ((rest !== $m_sci_Nil$())) {
          var arg1$1 = rest.y();
          var nx = new $c_sci_$colon$colon(f(arg1$1), $m_sci_Nil$());
          t.D = nx;
          t = nx;
          rest = rest.u();
        }
        var menuItems = h;
      }
      var _\uff3fobj$1 = $m_sjs_js_special_package$().aa($m_sr_ScalaRunTime$().ac(new ($d_T2.r().C)([])));
      var value$proxy3 = $m_sjs_js_JSConverters$JSRichIterableOnce$().aY(menuItems);
      _\uff3fobj$1.items = value$proxy3;
      return Menu.new(_\uff3fobj$1);
    });
    $p.b2 = (function(url, id) {
      var x = ((("selected " + id) + ": open ") + url);
      $m_s_Console$().ax().ar((x + "\n"));
      window.location.replace(url);
    });
    $p.b0 = (function(e) {
      var x = ("tray event : " + e);
      $m_s_Console$().ax().ar((x + "\n"));
    });
    $p.aZ = (function() {
      var \u03b41$ = defaultWindowIcon();
      return \u03b41$.then(((icon) => {
        var \u03b42$ = $m_LTray$().b1();
        return \u03b42$.then(((menu) => {
          var _\uff3fobj = $m_sjs_js_special_package$().aa($m_sr_ScalaRunTime$().ac(new ($d_T2.r().C)([])));
          _\uff3fobj.icon = icon;
          _\uff3fobj.menu = menu;
          var value$proxy4 = new $c_sjsr_AnonFunction1(((e) => {
            $m_LTray$().b0(e);
          }));
          var value = $m_sjs_js_Any$().ap(value$proxy4);
          _\uff3fobj.action = value;
          return TrayIcon.new(_\uff3fobj);
        }));
      }));
    });
    new $TypeData().i($c_LTray$, "Tray$", ({
      a0: 1
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
      this.aA = false;
      this.A = null;
      this.J = null;
      this.ad = null;
      this.X = false;
      this.az = 0;
      this.aC = 0;
      this.aB = null;
      $n_jl_FloatingPointBits$ = this;
      this.aA = true;
      this.A = new ArrayBuffer(8);
      this.J = new Int32Array(this.A, 0, 2);
      new Float32Array(this.A, 0, 2);
      this.ad = new Float64Array(this.A, 0, 1);
      this.J[0] = 16909060;
      this.X = ((new Int8Array(this.A, 0, 8)[0] | 0) === 1);
      this.az = (this.X ? 0 : 1);
      this.aC = (this.X ? 1 : 0);
      this.aB = null;
    }
    $p = $c_jl_FloatingPointBits$.prototype = new $h_O();
    $p.constructor = $c_jl_FloatingPointBits$;
    $p.a9 = (function(value) {
      var iv = ((value | 0.0) | 0);
      if (((iv === value) && ((1.0 / value) !== (-Infinity)))) {
        return iv;
      } else {
        this.ad[0] = value;
        return ((this.J[0] | 0) ^ (this.J[1] | 0));
      }
    });
    new $TypeData().i($c_jl_FloatingPointBits$, "java.lang.FloatingPointBits$", ({
      a8: 1
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
      this.af = null;
      this.aD = null;
      $n_jl_System$Streams$ = this;
      this.af = new $c_jl_JSConsoleBasedPrintStream(false);
      this.aD = new $c_jl_JSConsoleBasedPrintStream(true);
    }
    $p = $c_jl_System$Streams$.prototype = new $h_O();
    $p.constructor = $c_jl_System$Streams$;
    new $TypeData().i($c_jl_System$Streams$, "java.lang.System$Streams$", ({
      ai: 1
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
    new $TypeData().i(0, "java.lang.Void", ({
      ak: 1
    }), ((x) => (x === (void 0))));
    function $p_jl_reflect_Array$__mismatch__O__E($thiz, array) {
      throw new $c_jl_IllegalArgumentException("argument type mismatch");
    }
    /** @constructor */
    function $c_jl_reflect_Array$() {
    }
    $p = $c_jl_reflect_Array$.prototype = new $h_O();
    $p.constructor = $c_jl_reflect_Array$;
    $p.a7 = (function(array) {
      return ((array instanceof $ac_O) ? array.a.length : ((array instanceof $ac_Z) ? array.a.length : ((array instanceof $ac_C) ? array.a.length : ((array instanceof $ac_B) ? array.a.length : ((array instanceof $ac_S) ? array.a.length : ((array instanceof $ac_I) ? array.a.length : ((array instanceof $ac_J) ? array.a.length : ((array instanceof $ac_F) ? array.a.length : ((array instanceof $ac_D) ? array.a.length : $p_jl_reflect_Array$__mismatch__O__E())))))))));
    });
    new $TypeData().i($c_jl_reflect_Array$, "java.lang.reflect.Array$", ({
      al: 1
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
      this.b = 0;
      this.c = 0;
      this.b = lo;
      this.c = hi;
    }
    $p = $c_RTLong.prototype = new $h_O();
    $p.constructor = $c_RTLong;
    $p.bo = (function(that) {
      return ((that instanceof $c_RTLong) && ((this.b === that.b) && (this.c === that.c)));
    });
    $p.o = (function() {
      return (this.b ^ this.c);
    });
    $p.i = (function() {
      return $m_RTLong$().aw(this.b, this.c);
    });
    $p.bB = (function() {
      return this.b;
    });
    $p.bA = (function() {
      return $m_RTLong$().av(this.b, this.c);
    });
    $p.bz = (function() {
      return $m_RTLong$().ab(this.b, this.c);
    });
    $p.bk = (function() {
      return ((this.b << 24) >> 24);
    });
    $p.by = (function() {
      return ((this.b << 16) >> 16);
    });
    $p.bu = (function() {
      return this.b;
    });
    $p.bv = (function() {
      return this;
    });
    $p.bq = (function() {
      return $m_RTLong$().av(this.b, this.c);
    });
    $p.bn = (function() {
      return $m_RTLong$().ab(this.b, this.c);
    });
    $p.bm = (function(that) {
      return $m_RTLong$().at(this.b, this.c, that.b, that.c);
    });
    $p.bl = (function(that) {
      return $m_RTLong$().at(this.b, this.c, that.b, that.c);
    });
    $p.bp = (function(b) {
      return ((this.b === b.b) && (this.c === b.c));
    });
    $p.bw = (function(b) {
      return (!((this.b === b.b) && (this.c === b.c)));
    });
    $p.bc = (function(b) {
      var ahi = this.c;
      var bhi = b.c;
      return ((ahi === bhi) ? (((-2147483648) ^ this.b) < ((-2147483648) ^ b.b)) : (ahi < bhi));
    });
    $p.bd = (function(b) {
      var ahi = this.c;
      var bhi = b.c;
      return ((ahi === bhi) ? (((-2147483648) ^ this.b) <= ((-2147483648) ^ b.b)) : (ahi < bhi));
    });
    $p.b8 = (function(b) {
      var ahi = this.c;
      var bhi = b.c;
      return ((ahi === bhi) ? (((-2147483648) ^ this.b) > ((-2147483648) ^ b.b)) : (ahi > bhi));
    });
    $p.b9 = (function(b) {
      var ahi = this.c;
      var bhi = b.c;
      return ((ahi === bhi) ? (((-2147483648) ^ this.b) >= ((-2147483648) ^ b.b)) : (ahi > bhi));
    });
    $p.bD = (function() {
      return new $c_RTLong((~this.b), (~this.c));
    });
    $p.b6 = (function(b) {
      return new $c_RTLong((this.b | b.b), (this.c | b.c));
    });
    $p.b5 = (function(b) {
      return new $c_RTLong((this.b & b.b), (this.c & b.c));
    });
    $p.bj = (function(b) {
      return new $c_RTLong((this.b ^ b.b), (this.c ^ b.c));
    });
    $p.be = (function(n) {
      var lo = this.b;
      return new $c_RTLong((((32 & n) === 0) ? (lo << n) : 0), (((32 & n) === 0) ? (((((lo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (this.c << n)) : (lo << n)));
    });
    $p.bb = (function(n) {
      var hi = this.c;
      return new $c_RTLong((((32 & n) === 0) ? (((this.b >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : ((hi >>> n) | 0)), (((32 & n) === 0) ? ((hi >>> n) | 0) : 0));
    });
    $p.ba = (function(n) {
      var hi = this.c;
      return new $c_RTLong((((32 & n) === 0) ? (((this.b >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : (hi >> n)), (((32 & n) === 0) ? (hi >> n) : (hi >> 31)));
    });
    $p.bC = (function() {
      var lo = this.b;
      var hi = this.c;
      return new $c_RTLong(((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)));
    });
    $p.bh = (function(b) {
      var alo = this.b;
      var ahi = this.c;
      var bhi = b.c;
      var lo = ((alo + b.b) | 0);
      return new $c_RTLong(lo, ((((-2147483648) ^ lo) < ((-2147483648) ^ alo)) ? ((1 + ((ahi + bhi) | 0)) | 0) : ((ahi + bhi) | 0)));
    });
    $p.bf = (function(b) {
      var alo = this.b;
      var ahi = this.c;
      var bhi = b.c;
      var lo = ((alo - b.b) | 0);
      return new $c_RTLong(lo, ((((-2147483648) ^ lo) > ((-2147483648) ^ alo)) ? (((-1) + ((ahi - bhi) | 0)) | 0) : ((ahi - bhi) | 0)));
    });
    $p.bi = (function(b) {
      var alo = this.b;
      var blo = b.b;
      var a0 = (65535 & alo);
      var a1 = ((alo >>> 16) | 0);
      var b0 = (65535 & blo);
      var b1 = ((blo >>> 16) | 0);
      var a0b0 = Math.imul(a0, b0);
      var a1b0 = Math.imul(a1, b0);
      var a0b1 = Math.imul(a0, b1);
      var lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
      var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
      return new $c_RTLong(lo, ((((((((Math.imul(alo, b.c) + Math.imul(this.c, blo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0));
    });
    $p.b7 = (function(b) {
      var this$1$1 = $m_RTLong$();
      return new $c_RTLong(this$1$1.aJ(this.b, this.c, b.b, b.c), this$1$1.d);
    });
    $p.bg = (function(b) {
      var this$1$1 = $m_RTLong$();
      return new $c_RTLong(this$1$1.aV(this.b, this.c, b.b, b.c), this$1$1.d);
    });
    new $TypeData().i($c_RTLong, "org.scalajs.linker.runtime.RuntimeLong", ({
      R: 1
    }));
    function $p_RTLong$__toUnsignedString__I__I__T($thiz, lo, hi) {
      return ((((-2097152) & hi) === 0) ? ("" + ((4.294967296E9 * hi) + (+(lo >>> 0.0)))) : $p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, lo, hi, 1000000000, 0, 2));
    }
    function $p_RTLong$__unsigned_$div__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
      if ((((-2097152) & ahi) === 0)) {
        if ((((-2097152) & bhi) === 0)) {
          var aDouble = ((4.294967296E9 * ahi) + (+(alo >>> 0.0)));
          var bDouble = ((4.294967296E9 * bhi) + (+(blo >>> 0.0)));
          var rDouble = (aDouble / bDouble);
          $thiz.d = (((rDouble / 4.294967296E9) | 0.0) | 0);
          return ((rDouble | 0.0) | 0);
        } else {
          $thiz.d = 0;
          return 0;
        }
      } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
        var pow = ((31 - (Math.clz32(blo) | 0)) | 0);
        $thiz.d = ((ahi >>> pow) | 0);
        return (((alo >>> pow) | 0) | ((ahi << 1) << ((31 - pow) | 0)));
      } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
        var pow$2 = ((31 - (Math.clz32(bhi) | 0)) | 0);
        $thiz.d = 0;
        return ((ahi >>> pow$2) | 0);
      } else {
        return ($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 0) | 0);
      }
    }
    function $p_RTLong$__unsigned_$percent__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
      if ((((-2097152) & ahi) === 0)) {
        if ((((-2097152) & bhi) === 0)) {
          var aDouble = ((4.294967296E9 * ahi) + (+(alo >>> 0.0)));
          var bDouble = ((4.294967296E9 * bhi) + (+(blo >>> 0.0)));
          var rDouble = (aDouble % bDouble);
          $thiz.d = (((rDouble / 4.294967296E9) | 0.0) | 0);
          return ((rDouble | 0.0) | 0);
        } else {
          $thiz.d = ahi;
          return alo;
        }
      } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
        $thiz.d = 0;
        return (alo & (((-1) + blo) | 0));
      } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
        $thiz.d = (ahi & (((-1) + bhi) | 0));
        return alo;
      } else {
        return ($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 1) | 0);
      }
    }
    function $p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, ask) {
      var shift = ((((bhi !== 0) ? (Math.clz32(bhi) | 0) : ((32 + (Math.clz32(blo) | 0)) | 0)) - ((ahi !== 0) ? (Math.clz32(ahi) | 0) : ((32 + (Math.clz32(alo) | 0)) | 0))) | 0);
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
        var remDouble = ((4.294967296E9 * hi$6) + (+(lo$6 >>> 0.0)));
        var bDouble = ((4.294967296E9 * bhi) + (+(blo >>> 0.0)));
        if ((ask !== 1)) {
          var x = (remDouble / bDouble);
          var lo$7 = ((x | 0.0) | 0);
          var hi$7 = (((x / 4.294967296E9) | 0.0) | 0);
          var lo$8 = quotLo;
          var hi$8 = quotHi;
          var lo$9 = ((lo$8 + lo$7) | 0);
          var hi$9 = ((((-2147483648) ^ lo$9) < ((-2147483648) ^ lo$8)) ? ((1 + ((hi$8 + hi$7) | 0)) | 0) : ((hi$8 + hi$7) | 0));
          quotLo = lo$9;
          quotHi = hi$9;
        }
        if ((ask !== 0)) {
          var rem_mod_bDouble = (remDouble % bDouble);
          remLo = ((rem_mod_bDouble | 0.0) | 0);
          remHi = (((rem_mod_bDouble / 4.294967296E9) | 0.0) | 0);
        }
      }
      if ((ask === 0)) {
        $thiz.d = quotHi;
        return quotLo;
      } else if ((ask === 1)) {
        $thiz.d = remHi;
        return remLo;
      } else {
        var lo$10 = quotLo;
        var hi$10 = quotHi;
        var quot = ((4.294967296E9 * hi$10) + (+(lo$10 >>> 0.0)));
        var this$7 = remLo;
        var remStr = ("" + this$7);
        var start = remStr.length;
        return ((("" + quot) + "000000000".substring(start)) + remStr);
      }
    }
    /** @constructor */
    function $c_RTLong$() {
      this.d = 0;
    }
    $p = $c_RTLong$.prototype = new $h_O();
    $p.constructor = $c_RTLong$;
    $p.aw = (function(lo, hi) {
      return ((hi === (lo >> 31)) ? ("" + lo) : ((hi < 0) ? ("-" + $p_RTLong$__toUnsignedString__I__I__T(this, ((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)))) : $p_RTLong$__toUnsignedString__I__I__T(this, lo, hi)));
    });
    $p.ab = (function(lo, hi) {
      return ((hi < 0) ? (-((4.294967296E9 * (+(((lo !== 0) ? (~hi) : ((-hi) | 0)) >>> 0.0))) + (+(((-lo) | 0) >>> 0.0)))) : ((4.294967296E9 * hi) + (+(lo >>> 0.0))));
    });
    $p.av = (function(lo, hi) {
      if ((hi < 0)) {
        var abs__lo = ((-lo) | 0);
        var abs__hi = ((lo !== 0) ? (~hi) : ((-hi) | 0));
      } else {
        var abs__lo = lo;
        var abs__hi = hi;
      }
      var compressedAbsLo = (((((-2097152) & abs__hi) === 0) || ((65535 & abs__lo) === 0)) ? abs__lo : (32768 | ((-65536) & abs__lo)));
      var absRes = ((4.294967296E9 * (+(abs__hi >>> 0.0))) + (+(compressedAbsLo >>> 0.0)));
      return Math.fround(((hi < 0) ? (-absRes) : absRes));
    });
    $p.bs = (function(value) {
      return new $c_RTLong(value, (value >> 31));
    });
    $p.br = (function(value) {
      return new $c_RTLong(this.au(value), this.d);
    });
    $p.au = (function(value) {
      if ((value < (-9223372036854776e3))) {
        this.d = (-2147483648);
        return 0;
      } else if ((value >= 9.223372036854776E18)) {
        this.d = 2147483647;
        return (-1);
      } else {
        var rawLo = ((value | 0.0) | 0);
        var rawHi = (((value / 4.294967296E9) | 0.0) | 0);
        this.d = (((value < 0.0) && (rawLo !== 0)) ? (((-1) + rawHi) | 0) : rawHi);
        return rawLo;
      }
    });
    $p.at = (function(alo, ahi, blo, bhi) {
      return ((ahi === bhi) ? ((alo === blo) ? 0 : ((((-2147483648) ^ alo) < ((-2147483648) ^ blo)) ? (-1) : 1)) : ((ahi < bhi) ? (-1) : 1));
    });
    $p.aJ = (function(alo, ahi, blo, bhi) {
      if (((blo | bhi) === 0)) {
        throw new $c_jl_ArithmeticException("/ by zero");
      }
      if ((ahi === (alo >> 31))) {
        if ((bhi === (blo >> 31))) {
          if (((alo === (-2147483648)) && (blo === (-1)))) {
            this.d = 0;
            return (-2147483648);
          } else {
            var lo = $intDiv(alo, blo);
            this.d = (lo >> 31);
            return lo;
          }
        } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
          this.d = (-1);
          return (-1);
        } else {
          this.d = 0;
          return 0;
        }
      } else {
        if ((ahi < 0)) {
          var aAbs__lo = ((-alo) | 0);
          var aAbs__hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
        } else {
          var aAbs__lo = alo;
          var aAbs__hi = ahi;
        }
        if ((bhi < 0)) {
          var bAbs__lo = ((-blo) | 0);
          var bAbs__hi = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
        } else {
          var bAbs__lo = blo;
          var bAbs__hi = bhi;
        }
        var absRLo = $p_RTLong$__unsigned_$div__I__I__I__I__I(this, aAbs__lo, aAbs__hi, bAbs__lo, bAbs__hi);
        if (((ahi ^ bhi) >= 0)) {
          return absRLo;
        } else {
          var hi$2 = this.d;
          this.d = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
          return ((-absRLo) | 0);
        }
      }
    });
    $p.aV = (function(alo, ahi, blo, bhi) {
      if (((blo | bhi) === 0)) {
        throw new $c_jl_ArithmeticException("/ by zero");
      }
      if ((ahi === (alo >> 31))) {
        if ((bhi === (blo >> 31))) {
          if ((blo !== (-1))) {
            var lo = $intMod(alo, blo);
            this.d = (lo >> 31);
            return lo;
          } else {
            this.d = 0;
            return 0;
          }
        } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
          this.d = 0;
          return 0;
        } else {
          this.d = ahi;
          return alo;
        }
      } else {
        if ((ahi < 0)) {
          var aAbs__lo = ((-alo) | 0);
          var aAbs__hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
        } else {
          var aAbs__lo = alo;
          var aAbs__hi = ahi;
        }
        if ((bhi < 0)) {
          var bAbs__lo = ((-blo) | 0);
          var bAbs__hi = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
        } else {
          var bAbs__lo = blo;
          var bAbs__hi = bhi;
        }
        var absRLo = $p_RTLong$__unsigned_$percent__I__I__I__I__I(this, aAbs__lo, aAbs__hi, bAbs__lo, bAbs__hi);
        if ((ahi < 0)) {
          var hi$2 = this.d;
          this.d = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
          return ((-absRLo) | 0);
        } else {
          return absRLo;
        }
      }
    });
    new $TypeData().i($c_RTLong$, "org.scalajs.linker.runtime.RuntimeLong$", ({
      an: 1
    }));
    var $n_RTLong$;
    function $m_RTLong$() {
      if ((!$n_RTLong$)) {
        $n_RTLong$ = new $c_RTLong$();
      }
      return $n_RTLong$;
    }
    function $f_sc_IterableOnceOps__foreach__F1__V($thiz, f) {
      var it = $thiz.p();
      while (it.k()) {
        f.w(it.h());
      }
    }
    function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
      return (($thiz.q() === 0) ? (("" + start) + end) : $thiz.am($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end).s.g);
    }
    function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
      var jsb = b.s;
      if ((start.length !== 0)) {
        jsb.g = (("" + jsb.g) + start);
      }
      var it = $thiz.p();
      if (it.k()) {
        var obj = it.h();
        jsb.g = (("" + jsb.g) + obj);
        while (it.k()) {
          jsb.g = (("" + jsb.g) + sep);
          var obj$1 = it.h();
          jsb.g = (("" + jsb.g) + obj$1);
        }
      }
      if ((end.length !== 0)) {
        jsb.g = (("" + jsb.g) + end);
      }
      return b;
    }
    function $p_s_concurrent_ExecutionContext$__global$lzycompute__s_concurrent_ExecutionContextExecutor($thiz) {
      if ((!$thiz.a3)) {
        $thiz.a4 = $m_sjs_concurrent_JSExecutionContext$().aj;
        $thiz.a3 = true;
      }
      return $thiz.a4;
    }
    /** @constructor */
    function $c_s_concurrent_ExecutionContext$() {
      this.a4 = null;
      this.a3 = false;
    }
    $p = $c_s_concurrent_ExecutionContext$.prototype = new $h_O();
    $p.constructor = $c_s_concurrent_ExecutionContext$;
    $p.aN = (function() {
      return ((!this.a3) ? $p_s_concurrent_ExecutionContext$__global$lzycompute__s_concurrent_ExecutionContextExecutor(this) : this.a4);
    });
    new $TypeData().i($c_s_concurrent_ExecutionContext$, "scala.concurrent.ExecutionContext$", ({
      b5: 1
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
    $p = $c_sr_ScalaRunTime$.prototype = new $h_O();
    $p.constructor = $c_sr_ScalaRunTime$;
    $p.x = (function(xs, idx) {
      if ((xs instanceof $ac_O)) {
        return xs.a[idx];
      } else if ((xs instanceof $ac_I)) {
        return xs.a[idx];
      } else if ((xs instanceof $ac_D)) {
        return xs.a[idx];
      } else if ((xs instanceof $ac_J)) {
        return xs.a[idx];
      } else if ((xs instanceof $ac_F)) {
        return xs.a[idx];
      } else if ((xs instanceof $ac_C)) {
        return $bC(xs.a[idx]);
      } else if ((xs instanceof $ac_B)) {
        return xs.a[idx];
      } else if ((xs instanceof $ac_S)) {
        return xs.a[idx];
      } else if ((xs instanceof $ac_Z)) {
        return xs.a[idx];
      } else if ((xs === null)) {
        throw new $c_jl_NullPointerException();
      } else {
        throw new $c_s_MatchError(xs);
      }
    });
    $p.ac = (function(xs) {
      return ((xs === null) ? null : ((xs.a.length === 0) ? $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($m_sci_ArraySeq$()) : new $c_sci_ArraySeq$ofRef(xs)));
    });
    new $TypeData().i($c_sr_ScalaRunTime$, "scala.runtime.ScalaRunTime$", ({
      b8: 1
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
    $p = $c_sr_Statics$.prototype = new $h_O();
    $p.constructor = $c_sr_Statics$;
    $p.aR = (function(lv) {
      var lo = lv.b;
      var hi = lv.c;
      return ((hi === (lo >> 31)) ? lo : (lo ^ hi));
    });
    $p.aK = (function(dv) {
      var iv = $doubleToInt(dv);
      if ((iv === dv)) {
        return iv;
      } else {
        var this$1 = $m_RTLong$();
        var lo = this$1.au(dv);
        var hi = this$1.d;
        return (($m_RTLong$().ab(lo, hi) === dv) ? (lo ^ hi) : $m_jl_FloatingPointBits$().a9(dv));
      }
    });
    $p.f = (function(x) {
      if ((x === null)) {
        return 0;
      } else if (((typeof x) === "number")) {
        return this.aK((+x));
      } else if ((x instanceof $c_RTLong)) {
        var t = $uJ(x);
        return this.aR(new $c_RTLong(t.b, t.c));
      } else {
        return $dp_hashCode__I(x);
      }
    });
    $p.aq = (function(n) {
      throw new $c_jl_IndexOutOfBoundsException(("" + n));
    });
    new $TypeData().i($c_sr_Statics$, "scala.runtime.Statics$", ({
      b9: 1
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
      this.aj = null;
      $n_sjs_concurrent_JSExecutionContext$ = this;
      this.aj = $m_sjs_concurrent_QueueExecutionContext$().aH();
    }
    $p = $c_sjs_concurrent_JSExecutionContext$.prototype = new $h_O();
    $p.constructor = $c_sjs_concurrent_JSExecutionContext$;
    new $TypeData().i($c_sjs_concurrent_JSExecutionContext$, "scala.scalajs.concurrent.JSExecutionContext$", ({
      ba: 1
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
    $p = $c_sjs_concurrent_QueueExecutionContext$.prototype = new $h_O();
    $p.constructor = $c_sjs_concurrent_QueueExecutionContext$;
    $p.aH = (function() {
      return (((typeof Promise) === "undefined") ? new $c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext() : new $c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext());
    });
    new $TypeData().i($c_sjs_concurrent_QueueExecutionContext$, "scala.scalajs.concurrent.QueueExecutionContext$", ({
      bb: 1
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
    $p = $c_sjs_js_JSConverters$JSRichIterableOnce$.prototype = new $h_O();
    $p.constructor = $c_sjs_js_JSConverters$JSRichIterableOnce$;
    $p.aY = (function(this$) {
      {
        var result = [];
        var this$2 = this$.p();
        while (this$2.k()) {
          var arg1 = this$2.h();
          (result.push(arg1) | 0);
        }
        return result;
      }
    });
    new $TypeData().i($c_sjs_js_JSConverters$JSRichIterableOnce$, "scala.scalajs.js.JSConverters$JSRichIterableOnce$", ({
      bf: 1
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
    $p = $c_sjs_js_special_package$.prototype = new $h_O();
    $p.constructor = $c_sjs_js_special_package$;
    $p.aa = (function(properties) {
      var result = ({});
      properties.ao(new $c_sjsr_AnonFunction1(((pair$2$2) => {
        result[pair$2$2.L] = pair$2$2.M;
      })));
      return result;
    });
    new $TypeData().i($c_sjs_js_special_package$, "scala.scalajs.js.special.package$", ({
      bk: 1
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
      this.a5 = null;
      this.a5 = init;
    }
    $p = $c_s_util_DynamicVariable.prototype = new $h_O();
    $p.constructor = $c_s_util_DynamicVariable;
    $p.i = (function() {
      return (("DynamicVariable(" + this.a5) + ")");
    });
    new $TypeData().i($c_s_util_DynamicVariable, "scala.util.DynamicVariable", ({
      bm: 1
    }));
    /** @constructor */
    function $c_s_util_hashing_MurmurHash3() {
    }
    $p = $c_s_util_hashing_MurmurHash3.prototype = new $h_O();
    $p.constructor = $c_s_util_hashing_MurmurHash3;
    /** @constructor */
    function $h_s_util_hashing_MurmurHash3() {
    }
    $h_s_util_hashing_MurmurHash3.prototype = $p;
    $p.e = (function(hash, data) {
      var h = this.as(hash, data);
      var i = h;
      h = ((i << 13) | ((i >>> 19) | 0));
      return (((-430675100) + Math.imul(5, h)) | 0);
    });
    $p.as = (function(hash, data) {
      var k = data;
      k = Math.imul((-862048943), k);
      var i = k;
      k = ((i << 15) | ((i >>> 17) | 0));
      k = Math.imul(461845907, k);
      return (hash ^ k);
    });
    $p.j = (function(hash, length) {
      return this.H((hash ^ length));
    });
    $p.H = (function(hash) {
      var h = hash;
      h = (h ^ ((h >>> 16) | 0));
      h = Math.imul((-2048144789), h);
      h = (h ^ ((h >>> 13) | 0));
      h = Math.imul((-1028477387), h);
      h = (h ^ ((h >>> 16) | 0));
      return h;
    });
    $p.ay = (function(x, seed, ignorePrefix) {
      var arr = x.V();
      if ((arr === 0)) {
        return $f_T__hashCode__I(x.G());
      } else {
        var h = seed;
        if ((!ignorePrefix)) {
          h = this.e(h, $f_T__hashCode__I(x.G()));
        }
        var i = 0;
        while ((i < arr)) {
          h = this.e(h, $m_sr_Statics$().f(x.W(i)));
          i = ((1 + i) | 0);
        }
        return this.j(h, arr);
      }
    });
    $p.b3 = (function(xs, seed) {
      var a = 0;
      var b = 0;
      var n = 0;
      var c = 1;
      var iterator = xs.p();
      while (iterator.k()) {
        var x = iterator.h();
        var h = $m_sr_Statics$().f(x);
        a = ((a + h) | 0);
        b = (b ^ h);
        c = Math.imul(c, (1 | h));
        n = ((1 + n) | 0);
      }
      var h$2 = seed;
      h$2 = this.e(h$2, a);
      h$2 = this.e(h$2, b);
      h$2 = this.as(h$2, c);
      return this.j(h$2, n);
    });
    $p.aT = (function(xs, seed) {
      var it = xs.p();
      var h = seed;
      if ((!it.k())) {
        return this.j(h, 0);
      }
      var x0 = it.h();
      if ((!it.k())) {
        return this.j(this.e(h, $m_sr_Statics$().f(x0)), 1);
      }
      var x1 = it.h();
      var initial = $m_sr_Statics$().f(x0);
      h = this.e(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().f(x1);
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while (it.k()) {
        h = this.e(h, prev);
        var hash = $m_sr_Statics$().f(it.h());
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.e(h, hash);
          i = ((1 + i) | 0);
          while (it.k()) {
            h = this.e(h, $m_sr_Statics$().f(it.h()));
            i = ((1 + i) | 0);
          }
          return this.j(h, i);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.H(this.e(this.e(h0, rangeDiff), prev));
    });
    $p.aI = (function(a, seed) {
      var h = seed;
      var l = $m_jl_reflect_Array$().a7(a);
      switch (l) {
        case 0: {
          return this.j(h, 0);
        }
        case 1: {
          return this.j(this.e(h, $m_sr_Statics$().f($m_sr_ScalaRunTime$().x(a, 0))), 1);
        }
        default: {
          var initial = $m_sr_Statics$().f($m_sr_ScalaRunTime$().x(a, 0));
          h = this.e(h, initial);
          var h0 = h;
          var prev = $m_sr_Statics$().f($m_sr_ScalaRunTime$().x(a, 1));
          var rangeDiff = ((prev - initial) | 0);
          var i = 2;
          while ((i < l)) {
            h = this.e(h, prev);
            var hash = $m_sr_Statics$().f($m_sr_ScalaRunTime$().x(a, i));
            if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
              h = this.e(h, hash);
              i = ((1 + i) | 0);
              while ((i < l)) {
                h = this.e(h, $m_sr_Statics$().f($m_sr_ScalaRunTime$().x(a, i)));
                i = ((1 + i) | 0);
              }
              return this.j(h, l);
            }
            prev = hash;
            i = ((1 + i) | 0);
          }
          return this.H(this.e(this.e(h0, rangeDiff), prev));
        }
      }
    });
    $p.aU = (function(start, step, last, seed) {
      return this.H(this.e(this.e(this.e(seed, start), step), last));
    });
    $p.aP = (function(a, seed) {
      var h = seed;
      var l = a.m();
      switch (l) {
        case 0: {
          return this.j(h, 0);
        }
        case 1: {
          return this.j(this.e(h, $m_sr_Statics$().f(a.l(0))), 1);
        }
        default: {
          var initial = $m_sr_Statics$().f(a.l(0));
          h = this.e(h, initial);
          var h0 = h;
          var prev = $m_sr_Statics$().f(a.l(1));
          var rangeDiff = ((prev - initial) | 0);
          var i = 2;
          while ((i < l)) {
            h = this.e(h, prev);
            var hash = $m_sr_Statics$().f(a.l(i));
            if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
              h = this.e(h, hash);
              i = ((1 + i) | 0);
              while ((i < l)) {
                h = this.e(h, $m_sr_Statics$().f(a.l(i)));
                i = ((1 + i) | 0);
              }
              return this.j(h, l);
            }
            prev = hash;
            i = ((1 + i) | 0);
          }
          return this.H(this.e(this.e(h0, rangeDiff), prev));
        }
      }
    });
    $p.aQ = (function(xs, seed) {
      var n = 0;
      var h = seed;
      var rangeState = 0;
      var rangeDiff = 0;
      var prev = 0;
      var initial = 0;
      var elems = xs;
      while ((!elems.z())) {
        var head = elems.y();
        var tail = elems.u();
        var hash = $m_sr_Statics$().f(head);
        h = this.e(h, hash);
        switch (rangeState) {
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
      return ((rangeState === 2) ? this.aU(initial, rangeDiff, prev, seed) : this.j(h, n));
    });
    /** @constructor */
    function $c_jl_Number() {
    }
    $p = $c_jl_Number.prototype = new $h_O();
    $p.constructor = $c_jl_Number;
    function $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace) {
      $thiz.ag = s;
      $thiz.aE = e;
      $thiz.aG = writableStackTrace;
      {
        $thiz.aM();
      }
      return $thiz;
    }
    class $c_jl_Throwable extends Error {
      constructor() {
        super();
        this.ag = null;
        this.aE = null;
        this.aG = false;
        this.aF = null;
      }
      a8() {
        return this.ag;
      }
      aM() {
        var reference = (this);
        this.aF = ((Object.prototype.toString.call(reference) === "[object Error]") ? reference : (((Error.captureStackTrace === (void 0)) || (!(!Object.isSealed(this)))) ? new Error() : (Error.captureStackTrace(this), this)));
        return this;
      }
      i() {
        var className = $objectClassName(this);
        var message = this.a8();
        return ((message === null) ? className : ((className + ": ") + message));
      }
      o() {
        return $c_O.prototype.o.call(this);
      }
      get "message"() {
        var m = this.a8();
        return ((m === null) ? "" : m);
      }
      get "name"() {
        return $objectClassName(this);
      }
      "toString"() {
        return this.i();
      }
    }
    /** @constructor */
    function $c_s_Console$() {
      this.ah = null;
      $n_s_Console$ = this;
      this.ah = new $c_s_util_DynamicVariable($m_jl_System$Streams$().af);
    }
    $p = $c_s_Console$.prototype = new $h_O();
    $p.constructor = $c_s_Console$;
    $p.ax = (function() {
      return this.ah.a5;
    });
    new $TypeData().i($c_s_Console$, "scala.Console$", ({
      ao: 1,
      b6: 1
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
    $p = $c_sr_AbstractFunction1.prototype = new $h_O();
    $p.constructor = $c_sr_AbstractFunction1;
    /** @constructor */
    function $h_sr_AbstractFunction1() {
    }
    $h_sr_AbstractFunction1.prototype = $p;
    $p.i = (function() {
      return "<function1>";
    });
    /** @constructor */
    function $c_s_util_hashing_MurmurHash3$() {
      this.F = 0;
      this.al = 0;
      $n_s_util_hashing_MurmurHash3$ = this;
      this.F = $f_T__hashCode__I("Seq");
      this.al = $f_T__hashCode__I("Map");
      $f_T__hashCode__I("Set");
      this.b3($m_sci_Nil$(), this.al);
    }
    $p = $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
    $p.constructor = $c_s_util_hashing_MurmurHash3$;
    $p.aW = (function(xs) {
      return ($is_sc_IndexedSeq(xs) ? this.aP(xs, this.F) : ((xs instanceof $c_sci_List) ? this.aQ(xs, this.F) : this.aT(xs, this.F)));
    });
    new $TypeData().i($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
      bo: 1,
      bn: 1
    }));
    var $n_s_util_hashing_MurmurHash3$;
    function $m_s_util_hashing_MurmurHash3$() {
      if ((!$n_s_util_hashing_MurmurHash3$)) {
        $n_s_util_hashing_MurmurHash3$ = new $c_s_util_hashing_MurmurHash3$();
      }
      return $n_s_util_hashing_MurmurHash3$;
    }
    class $c_jl_Exception extends $c_jl_Throwable {
    }
    function $f_s_Product2__productElement__I__O($thiz, n) {
      switch (n) {
        case 0: {
          return $thiz.L;
        }
        case 1: {
          return $thiz.M;
        }
        default: {
          throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 1)"));
        }
      }
    }
    function $f_s_Product3__productElement__I__O($thiz, n) {
      switch (n) {
        case 0: {
          return $thiz.N;
        }
        case 1: {
          return $thiz.O;
        }
        case 2: {
          return $thiz.P;
        }
        default: {
          throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 2)"));
        }
      }
    }
    /** @constructor */
    function $c_sc_Iterator$() {
      this.S = null;
      $n_sc_Iterator$ = this;
      this.S = new $c_sc_Iterator$$anon$19();
    }
    $p = $c_sc_Iterator$.prototype = new $h_O();
    $p.constructor = $c_sc_Iterator$;
    new $TypeData().i($c_sc_Iterator$, "scala.collection.Iterator$", ({
      aF: 1,
      aE: 1,
      a: 1
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
    $p = $c_sjs_js_Any$.prototype = new $h_O();
    $p.constructor = $c_sjs_js_Any$;
    $p.ap = (function(f) {
      return ((arg1$2) => f.w(arg1$2));
    });
    new $TypeData().i($c_sjs_js_Any$, "scala.scalajs.js.Any$", ({
      be: 1,
      bh: 1,
      bi: 1
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
      this.ak = null;
      this.ak = f;
    }
    $p = $c_sjsr_AnonFunction1.prototype = new $h_sr_AbstractFunction1();
    $p.constructor = $c_sjsr_AnonFunction1;
    $p.w = (function(arg1) {
      return (0, this.ak)(arg1);
    });
    new $TypeData().i($c_sjsr_AnonFunction1, "scala.scalajs.runtime.AnonFunction1", ({
      bl: 1,
      b7: 1,
      l: 1
    }));
    /** @constructor */
    function $c_Ljava_io_OutputStream() {
    }
    $p = $c_Ljava_io_OutputStream.prototype = new $h_O();
    $p.constructor = $c_Ljava_io_OutputStream;
    /** @constructor */
    function $h_Ljava_io_OutputStream() {
    }
    $h_Ljava_io_OutputStream.prototype = $p;
    function $f_jl_Boolean__hashCode__I($thiz) {
      return ($thiz ? 1231 : 1237);
    }
    new $TypeData().i(0, "java.lang.Boolean", ({
      a4: 1,
      a: 1,
      b: 1,
      c: 1
    }), ((x) => ((typeof x) === "boolean")));
    function $f_jl_Character__hashCode__I($thiz) {
      return $thiz;
    }
    new $TypeData().i(0, "java.lang.Character", ({
      a6: 1,
      a: 1,
      b: 1,
      c: 1
    }), ((x) => (x instanceof $Char)));
    class $c_jl_RuntimeException extends $c_jl_Exception {
    }
    /** @constructor */
    function $c_jl_StringBuilder() {
      this.g = null;
      this.g = "";
    }
    $p = $c_jl_StringBuilder.prototype = new $h_O();
    $p.constructor = $c_jl_StringBuilder;
    $p.i = (function() {
      return this.g;
    });
    $p.m = (function() {
      return this.g.length;
    });
    $p.an = (function(index) {
      return this.g.charCodeAt(index);
    });
    new $TypeData().i($c_jl_StringBuilder, "java.lang.StringBuilder", ({
      ah: 1,
      y: 1,
      M: 1,
      a: 1
    }));
    /** @constructor */
    function $c_sc_AbstractIterator() {
    }
    $p = $c_sc_AbstractIterator.prototype = new $h_O();
    $p.constructor = $c_sc_AbstractIterator;
    /** @constructor */
    function $h_sc_AbstractIterator() {
    }
    $h_sc_AbstractIterator.prototype = $p;
    $p.p = (function() {
      return this;
    });
    $p.i = (function() {
      return "<iterator>";
    });
    $p.am = (function(b, start, sep, end) {
      return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
    });
    $p.q = (function() {
      return (-1);
    });
    /** @constructor */
    function $c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext() {
      Promise.resolve((void 0));
    }
    $p = $c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext.prototype = new $h_O();
    $p.constructor = $c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext;
    new $TypeData().i($c_sjs_concurrent_QueueExecutionContext$PromisesExecutionContext, "scala.scalajs.concurrent.QueueExecutionContext$PromisesExecutionContext", ({
      bc: 1,
      Z: 1,
      Y: 1,
      Q: 1
    }));
    /** @constructor */
    function $c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext() {
    }
    $p = $c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext.prototype = new $h_O();
    $p.constructor = $c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext;
    new $TypeData().i($c_sjs_concurrent_QueueExecutionContext$TimeoutsExecutionContext, "scala.scalajs.concurrent.QueueExecutionContext$TimeoutsExecutionContext", ({
      bd: 1,
      Z: 1,
      Y: 1,
      Q: 1
    }));
    /** @constructor */
    function $c_Ljava_io_FilterOutputStream() {
    }
    $p = $c_Ljava_io_FilterOutputStream.prototype = new $h_Ljava_io_OutputStream();
    $p.constructor = $c_Ljava_io_FilterOutputStream;
    /** @constructor */
    function $h_Ljava_io_FilterOutputStream() {
    }
    $h_Ljava_io_FilterOutputStream.prototype = $p;
    class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
      constructor(s) {
        super();
        $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
      }
    }
    new $TypeData().i($c_jl_ArithmeticException, "java.lang.ArithmeticException", ({
      a3: 1,
      g: 1,
      f: 1,
      h: 1,
      a: 1
    }));
    new $TypeData().i(0, "java.lang.Byte", ({
      a5: 1,
      i: 1,
      a: 1,
      b: 1,
      c: 1
    }), ((x) => $isByte(x)));
    class $c_jl_IllegalArgumentException extends $c_jl_RuntimeException {
      constructor(s) {
        super();
        $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
      }
    }
    new $TypeData().i($c_jl_IllegalArgumentException, "java.lang.IllegalArgumentException", ({
      a9: 1,
      g: 1,
      f: 1,
      h: 1,
      a: 1
    }));
    class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
      constructor(s) {
        super();
        $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
      }
    }
    new $TypeData().i($c_jl_IndexOutOfBoundsException, "java.lang.IndexOutOfBoundsException", ({
      aa: 1,
      g: 1,
      f: 1,
      h: 1,
      a: 1
    }));
    /** @constructor */
    function $c_jl_JSConsoleBasedPrintStream$DummyOutputStream() {
    }
    $p = $c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype = new $h_Ljava_io_OutputStream();
    $p.constructor = $c_jl_JSConsoleBasedPrintStream$DummyOutputStream;
    new $TypeData().i($c_jl_JSConsoleBasedPrintStream$DummyOutputStream, "java.lang.JSConsoleBasedPrintStream$DummyOutputStream", ({
      ad: 1,
      L: 1,
      J: 1,
      N: 1,
      K: 1
    }));
    class $c_jl_NullPointerException extends $c_jl_RuntimeException {
      constructor() {
        super();
        $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
      }
    }
    new $TypeData().i($c_jl_NullPointerException, "java.lang.NullPointerException", ({
      ae: 1,
      g: 1,
      f: 1,
      h: 1,
      a: 1
    }));
    new $TypeData().i(0, "java.lang.Short", ({
      af: 1,
      i: 1,
      a: 1,
      b: 1,
      c: 1
    }), ((x) => $isShort(x)));
    class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
      constructor(s) {
        super();
        $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
      }
    }
    new $TypeData().i($c_jl_UnsupportedOperationException, "java.lang.UnsupportedOperationException", ({
      aj: 1,
      g: 1,
      f: 1,
      h: 1,
      a: 1
    }));
    class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
      constructor(s) {
        super();
        $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
      }
    }
    new $TypeData().i($c_ju_NoSuchElementException, "java.util.NoSuchElementException", ({
      am: 1,
      g: 1,
      f: 1,
      h: 1,
      a: 1
    }));
    function $p_s_MatchError__objString$lzycompute__T($thiz) {
      if ((!$thiz.Y)) {
        $thiz.Z = (($thiz.K === null) ? "null" : $p_s_MatchError__liftedTree1$1__T($thiz));
        $thiz.Y = true;
      }
      return $thiz.Z;
    }
    function $p_s_MatchError__objString__T($thiz) {
      return ((!$thiz.Y) ? $p_s_MatchError__objString$lzycompute__T($thiz) : $thiz.Z);
    }
    function $p_s_MatchError__ofClass$1__T($thiz) {
      var this$1 = $thiz.K;
      return ("of class " + $objectClassName(this$1));
    }
    function $p_s_MatchError__liftedTree1$1__T($thiz) {
      try {
        return ((($thiz.K + " (") + $p_s_MatchError__ofClass$1__T($thiz)) + ")");
      } catch (e) {
        return ("an instance " + $p_s_MatchError__ofClass$1__T($thiz));
      }
    }
    class $c_s_MatchError extends $c_jl_RuntimeException {
      constructor(obj) {
        super();
        this.Z = null;
        this.K = null;
        this.Y = false;
        this.K = obj;
        $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
      }
      a8() {
        return $p_s_MatchError__objString__T(this);
      }
    }
    new $TypeData().i($c_s_MatchError, "scala.MatchError", ({
      ap: 1,
      g: 1,
      f: 1,
      h: 1,
      a: 1
    }));
    /** @constructor */
    function $c_T2(_1, _2) {
      this.L = null;
      this.M = null;
      this.L = _1;
      this.M = _2;
    }
    $p = $c_T2.prototype = new $h_O();
    $p.constructor = $c_T2;
    $p.V = (function() {
      return 2;
    });
    $p.W = (function(n) {
      return $f_s_Product2__productElement__I__O(this, n);
    });
    $p.i = (function() {
      return (((("(" + this.L) + ",") + this.M) + ")");
    });
    $p.G = (function() {
      return "Tuple2";
    });
    $p.o = (function() {
      return $m_s_util_hashing_MurmurHash3$().ay(this, (-889275714), false);
    });
    var $d_T2 = new $TypeData().i($c_T2, "scala.Tuple2", ({
      as: 1,
      aq: 1,
      s: 1,
      j: 1,
      a: 1
    }));
    /** @constructor */
    function $c_T3(_1, _2, _3) {
      this.N = null;
      this.O = null;
      this.P = null;
      this.N = _1;
      this.O = _2;
      this.P = _3;
    }
    $p = $c_T3.prototype = new $h_O();
    $p.constructor = $c_T3;
    $p.V = (function() {
      return 3;
    });
    $p.W = (function(n) {
      return $f_s_Product3__productElement__I__O(this, n);
    });
    $p.i = (function() {
      return (((((("(" + this.N) + ",") + this.O) + ",") + this.P) + ")");
    });
    $p.G = (function() {
      return "Tuple3";
    });
    $p.o = (function() {
      return $m_s_util_hashing_MurmurHash3$().ay(this, (-889275714), false);
    });
    new $TypeData().i($c_T3, "scala.Tuple3", ({
      at: 1,
      ar: 1,
      s: 1,
      j: 1,
      a: 1
    }));
    function $f_sc_Iterable__toString__T($thiz) {
      return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, ($thiz.a6() + "("), ", ", ")");
    }
    /** @constructor */
    function $c_sc_Iterator$$anon$19() {
    }
    $p = $c_sc_Iterator$$anon$19.prototype = new $h_sc_AbstractIterator();
    $p.constructor = $c_sc_Iterator$$anon$19;
    $p.k = (function() {
      return false;
    });
    $p.aS = (function() {
      throw new $c_ju_NoSuchElementException("next on empty iterator");
    });
    $p.q = (function() {
      return 0;
    });
    $p.h = (function() {
      this.aS();
    });
    new $TypeData().i($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
      aG: 1,
      t: 1,
      w: 1,
      d: 1,
      e: 1
    }));
    function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
      if ((n < 0)) {
        throw new $c_jl_IndexOutOfBoundsException(("" + n));
      }
      var skipped = $thiz.aL(n);
      if (skipped.z()) {
        throw new $c_jl_IndexOutOfBoundsException(("" + n));
      }
      return skipped.y();
    }
    /** @constructor */
    function $c_sc_StrictOptimizedLinearSeqOps$$anon$1(outer) {
      this.C = null;
      this.C = outer;
    }
    $p = $c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype = new $h_sc_AbstractIterator();
    $p.constructor = $c_sc_StrictOptimizedLinearSeqOps$$anon$1;
    $p.k = (function() {
      return (!this.C.z());
    });
    $p.h = (function() {
      var r = this.C.y();
      this.C = this.C.u();
      return r;
    });
    new $TypeData().i($c_sc_StrictOptimizedLinearSeqOps$$anon$1, "scala.collection.StrictOptimizedLinearSeqOps$$anon$1", ({
      aK: 1,
      t: 1,
      w: 1,
      d: 1,
      e: 1
    }));
    function $f_jl_Double__hashCode__I($thiz) {
      return $m_jl_FloatingPointBits$().a9($thiz);
    }
    new $TypeData().i(0, "java.lang.Double", ({
      O: 1,
      i: 1,
      a: 1,
      b: 1,
      c: 1,
      k: 1
    }), ((x) => ((typeof x) === "number")));
    new $TypeData().i(0, "java.lang.Float", ({
      a7: 1,
      i: 1,
      a: 1,
      b: 1,
      c: 1,
      k: 1
    }), ((x) => $isFloat(x)));
    new $TypeData().i(0, "java.lang.Integer", ({
      ab: 1,
      i: 1,
      a: 1,
      b: 1,
      c: 1,
      k: 1
    }), ((x) => $isInt(x)));
    function $f_jl_Long__hashCode__I($thiz) {
      return ($thiz.b ^ $thiz.c);
    }
    new $TypeData().i(0, "java.lang.Long", ({
      P: 1,
      i: 1,
      a: 1,
      b: 1,
      c: 1,
      k: 1
    }), ((x) => (x instanceof $c_RTLong)));
    function $f_T__hashCode__I($thiz) {
      var res = 0;
      var mul = 1;
      var i = (((-1) + $thiz.length) | 0);
      while ((i >= 0)) {
        res = ((res + Math.imul($thiz.charCodeAt(i), mul)) | 0);
        mul = Math.imul(31, mul);
        i = (((-1) + i) | 0);
      }
      return res;
    }
    var $d_T = new $TypeData().i(0, "java.lang.String", ({
      ag: 1,
      a: 1,
      b: 1,
      y: 1,
      c: 1,
      k: 1
    }), ((x) => ((typeof x) === "string")));
    /** @constructor */
    function $c_sc_AbstractIterable() {
    }
    $p = $c_sc_AbstractIterable.prototype = new $h_O();
    $p.constructor = $c_sc_AbstractIterable;
    /** @constructor */
    function $h_sc_AbstractIterable() {
    }
    $h_sc_AbstractIterable.prototype = $p;
    $p.a6 = (function() {
      return this.I();
    });
    $p.ao = (function(f) {
      $f_sc_IterableOnceOps__foreach__F1__V(this, f);
    });
    $p.am = (function(b, start, sep, end) {
      return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
    });
    $p.q = (function() {
      return (-1);
    });
    /** @constructor */
    function $c_sc_ArrayOps$ArrayIterator(xs) {
      this.Q = null;
      this.t = 0;
      this.a0 = 0;
      this.Q = xs;
      this.t = 0;
      this.a0 = $m_jl_reflect_Array$().a7(this.Q);
    }
    $p = $c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
    $p.constructor = $c_sc_ArrayOps$ArrayIterator;
    $p.q = (function() {
      return ((this.a0 - this.t) | 0);
    });
    $p.k = (function() {
      return (this.t < this.a0);
    });
    $p.h = (function() {
      if ((this.t >= $m_jl_reflect_Array$().a7(this.Q))) {
        $m_sc_Iterator$().S.h();
      }
      var r = $m_sr_ScalaRunTime$().x(this.Q, this.t);
      this.t = ((1 + this.t) | 0);
      return r;
    });
    new $TypeData().i($c_sc_ArrayOps$ArrayIterator, "scala.collection.ArrayOps$ArrayIterator", ({
      aw: 1,
      t: 1,
      w: 1,
      d: 1,
      e: 1,
      a: 1
    }));
    /** @constructor */
    function $c_sc_IndexedSeqView$IndexedSeqViewIterator(self) {
      this.ai = null;
      this.R = 0;
      this.v = 0;
      this.ai = self;
      this.R = 0;
      this.v = self.m();
    }
    $p = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
    $p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
    $p.q = (function() {
      return this.v;
    });
    $p.k = (function() {
      return (this.v > 0);
    });
    $p.h = (function() {
      if ((this.v > 0)) {
        var r = this.ai.l(this.R);
        this.R = ((1 + this.R) | 0);
        this.v = (((-1) + this.v) | 0);
        return r;
      } else {
        return $m_sc_Iterator$().S.h();
      }
    });
    new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
      aD: 1,
      t: 1,
      w: 1,
      d: 1,
      e: 1,
      a: 1
    }));
    function $p_sci_ArraySeq$__emptyImpl$lzycompute__sci_ArraySeq$ofRef($thiz) {
      if ((!$thiz.a1)) {
        $thiz.a2 = new $c_sci_ArraySeq$ofRef(new $ac_O(0));
        $thiz.a1 = true;
      }
      return $thiz.a2;
    }
    function $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($thiz) {
      return ((!$thiz.a1) ? $p_sci_ArraySeq$__emptyImpl$lzycompute__sci_ArraySeq$ofRef($thiz) : $thiz.a2);
    }
    /** @constructor */
    function $c_sci_ArraySeq$() {
      this.a2 = null;
      this.a1 = false;
    }
    $p = $c_sci_ArraySeq$.prototype = new $h_O();
    $p.constructor = $c_sci_ArraySeq$;
    new $TypeData().i($c_sci_ArraySeq$, "scala.collection.immutable.ArraySeq$", ({
      aO: 1,
      aJ: 1,
      ay: 1,
      ax: 1,
      az: 1,
      a: 1
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
    $p = $c_Ljava_io_PrintStream.prototype = new $h_Ljava_io_FilterOutputStream();
    $p.constructor = $c_Ljava_io_PrintStream;
    /** @constructor */
    function $h_Ljava_io_PrintStream() {
    }
    $h_Ljava_io_PrintStream.prototype = $p;
    function $f_sc_View__toString__T($thiz) {
      return ($thiz.I() + "(<not computed>)");
    }
    function $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V($thiz, line) {
      if (((typeof console) !== "undefined")) {
        if (($thiz.ae && (!(!(!(!console.error)))))) {
          console.error(line);
        } else {
          console.log(line);
        }
      }
    }
    /** @constructor */
    function $c_jl_JSConsoleBasedPrintStream(isErr) {
      this.ae = false;
      this.B = null;
      this.ae = isErr;
      this.B = "";
    }
    $p = $c_jl_JSConsoleBasedPrintStream.prototype = new $h_Ljava_io_PrintStream();
    $p.constructor = $c_jl_JSConsoleBasedPrintStream;
    $p.ar = (function(s) {
      var rest = s;
      while ((rest !== "")) {
        var this$1$1 = rest;
        var nlPos = (this$1$1.indexOf("\n") | 0);
        if ((nlPos < 0)) {
          this.B = (("" + this.B) + rest);
          rest = "";
        } else {
          var $x_1 = this.B;
          var this$2 = rest;
          $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V(this, (("" + $x_1) + this$2.substring(0, nlPos)));
          this.B = "";
          var this$3 = rest;
          var beginIndex = ((1 + nlPos) | 0);
          rest = this$3.substring(beginIndex);
        }
      }
    });
    new $TypeData().i($c_jl_JSConsoleBasedPrintStream, "java.lang.JSConsoleBasedPrintStream", ({
      ac: 1,
      a2: 1,
      a1: 1,
      L: 1,
      J: 1,
      N: 1,
      K: 1,
      M: 1
    }));
    function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
      while (true) {
        if (((n <= 0) || s.z())) {
          return s;
        } else {
          var temp$n = (((-1) + n) | 0);
          var temp$s = s.u();
          n = temp$n;
          s = temp$s;
        }
      }
    }
    /** @constructor */
    function $c_sc_AbstractView() {
    }
    $p = $c_sc_AbstractView.prototype = new $h_sc_AbstractIterable();
    $p.constructor = $c_sc_AbstractView;
    /** @constructor */
    function $h_sc_AbstractView() {
    }
    $h_sc_AbstractView.prototype = $p;
    $p.i = (function() {
      return $f_sc_View__toString__T(this);
    });
    /** @constructor */
    function $c_sc_AbstractSeq() {
    }
    $p = $c_sc_AbstractSeq.prototype = new $h_sc_AbstractIterable();
    $p.constructor = $c_sc_AbstractSeq;
    /** @constructor */
    function $h_sc_AbstractSeq() {
    }
    $h_sc_AbstractSeq.prototype = $p;
    $p.o = (function() {
      return $m_s_util_hashing_MurmurHash3$().aW(this);
    });
    $p.i = (function() {
      return $f_sc_Iterable__toString__T(this);
    });
    /** @constructor */
    function $c_sc_AbstractSeqView() {
    }
    $p = $c_sc_AbstractSeqView.prototype = new $h_sc_AbstractView();
    $p.constructor = $c_sc_AbstractSeqView;
    /** @constructor */
    function $h_sc_AbstractSeqView() {
    }
    $h_sc_AbstractSeqView.prototype = $p;
    function $is_sc_IndexedSeq(obj) {
      return (!(!((obj && obj.$classData) && obj.$classData.n.v)));
    }
    function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
      $thiz.T = underlying;
      return $thiz;
    }
    /** @constructor */
    function $c_sc_SeqView$Id() {
      this.T = null;
    }
    $p = $c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
    $p.constructor = $c_sc_SeqView$Id;
    /** @constructor */
    function $h_sc_SeqView$Id() {
    }
    $h_sc_SeqView$Id.prototype = $p;
    $p.l = (function(idx) {
      return this.T.l(idx);
    });
    $p.m = (function() {
      return this.T.m();
    });
    /** @constructor */
    function $c_sc_IndexedSeqView$Id(underlying) {
      this.T = null;
      $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
    }
    $p = $c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
    $p.constructor = $c_sc_IndexedSeqView$Id;
    $p.p = (function() {
      return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this);
    });
    $p.I = (function() {
      return "IndexedSeqView";
    });
    $p.q = (function() {
      return this.m();
    });
    new $TypeData().i($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
      aC: 1,
      aI: 1,
      au: 1,
      av: 1,
      m: 1,
      n: 1,
      d: 1,
      p: 1,
      e: 1,
      o: 1,
      aL: 1,
      a: 1,
      aH: 1,
      q: 1,
      aB: 1,
      A: 1
    }));
    /** @constructor */
    function $c_sci_AbstractSeq() {
    }
    $p = $c_sci_AbstractSeq.prototype = new $h_sc_AbstractSeq();
    $p.constructor = $c_sci_AbstractSeq;
    /** @constructor */
    function $h_sci_AbstractSeq() {
    }
    $h_sci_AbstractSeq.prototype = $p;
    /** @constructor */
    function $c_scm_AbstractSeq() {
    }
    $p = $c_scm_AbstractSeq.prototype = new $h_sc_AbstractSeq();
    $p.constructor = $c_scm_AbstractSeq;
    /** @constructor */
    function $h_scm_AbstractSeq() {
    }
    $h_scm_AbstractSeq.prototype = $p;
    /** @constructor */
    function $c_sci_ArraySeq() {
    }
    $p = $c_sci_ArraySeq.prototype = new $h_sci_AbstractSeq();
    $p.constructor = $c_sci_ArraySeq;
    /** @constructor */
    function $h_sci_ArraySeq() {
    }
    $h_sci_ArraySeq.prototype = $p;
    $p.I = (function() {
      return "IndexedSeq";
    });
    $p.q = (function() {
      return this.m();
    });
    $p.a6 = (function() {
      return "ArraySeq";
    });
    /** @constructor */
    function $c_sci_ArraySeq$ofRef(unsafeArray) {
      this.E = null;
      this.E = unsafeArray;
    }
    $p = $c_sci_ArraySeq$ofRef.prototype = new $h_sci_ArraySeq();
    $p.constructor = $c_sci_ArraySeq$ofRef;
    $p.m = (function() {
      return this.E.a.length;
    });
    $p.l = (function(i) {
      return this.E.a[i];
    });
    $p.o = (function() {
      var this$1$1 = $m_s_util_hashing_MurmurHash3$();
      return this$1$1.aI(this.E, this$1$1.F);
    });
    $p.p = (function() {
      return new $c_sc_ArrayOps$ArrayIterator(this.E);
    });
    $p.w = (function(v1) {
      return this.l((v1 | 0));
    });
    new $TypeData().i($c_sci_ArraySeq$ofRef, "scala.collection.immutable.ArraySeq$ofRef", ({
      aP: 1,
      aN: 1,
      D: 1,
      u: 1,
      m: 1,
      n: 1,
      d: 1,
      p: 1,
      e: 1,
      o: 1,
      x: 1,
      r: 1,
      l: 1,
      q: 1,
      j: 1,
      G: 1,
      E: 1,
      H: 1,
      aQ: 1,
      v: 1,
      A: 1,
      aR: 1,
      I: 1,
      C: 1,
      B: 1,
      aA: 1,
      a: 1
    }));
    /** @constructor */
    function $c_sci_List() {
    }
    $p = $c_sci_List.prototype = new $h_sci_AbstractSeq();
    $p.constructor = $c_sci_List;
    /** @constructor */
    function $h_sci_List() {
    }
    $h_sci_List.prototype = $p;
    $p.p = (function() {
      return new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(this);
    });
    $p.I = (function() {
      return "LinearSeq";
    });
    $p.l = (function(n) {
      return $f_sc_LinearSeqOps__apply__I__O(this, n);
    });
    $p.z = (function() {
      return (this === $m_sci_Nil$());
    });
    $p.ao = (function(f) {
      var these = this;
      while ((!these.z())) {
        f.w(these.y());
        these = these.u();
      }
    });
    $p.m = (function() {
      var these = this;
      var len = 0;
      while ((!these.z())) {
        len = ((1 + len) | 0);
        these = these.u();
      }
      return len;
    });
    $p.a6 = (function() {
      return "List";
    });
    $p.w = (function(v1) {
      return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
    });
    $p.aL = (function(n) {
      return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
    });
    /** @constructor */
    function $c_sci_$colon$colon(head, next) {
      this.U = null;
      this.D = null;
      this.U = head;
      this.D = next;
    }
    $p = $c_sci_$colon$colon.prototype = new $h_sci_List();
    $p.constructor = $c_sci_$colon$colon;
    $p.y = (function() {
      return this.U;
    });
    $p.G = (function() {
      return "::";
    });
    $p.V = (function() {
      return 2;
    });
    $p.W = (function(x$1) {
      switch (x$1) {
        case 0: {
          return this.U;
        }
        case 1: {
          return this.D;
        }
        default: {
          return $m_sr_Statics$().aq(x$1);
        }
      }
    });
    $p.u = (function() {
      return this.D;
    });
    new $TypeData().i($c_sci_$colon$colon, "scala.collection.immutable.$colon$colon", ({
      aM: 1,
      F: 1,
      D: 1,
      u: 1,
      m: 1,
      n: 1,
      d: 1,
      p: 1,
      e: 1,
      o: 1,
      x: 1,
      r: 1,
      l: 1,
      q: 1,
      j: 1,
      G: 1,
      E: 1,
      H: 1,
      W: 1,
      S: 1,
      T: 1,
      X: 1,
      U: 1,
      C: 1,
      B: 1,
      I: 1,
      V: 1,
      a: 1,
      s: 1
    }));
    /** @constructor */
    function $c_sci_Nil$() {
    }
    $p = $c_sci_Nil$.prototype = new $h_sci_List();
    $p.constructor = $c_sci_Nil$;
    $p.aO = (function() {
      throw new $c_ju_NoSuchElementException("head of empty list");
    });
    $p.aX = (function() {
      throw new $c_jl_UnsupportedOperationException("tail of empty list");
    });
    $p.q = (function() {
      return 0;
    });
    $p.p = (function() {
      return $m_sc_Iterator$().S;
    });
    $p.G = (function() {
      return "Nil";
    });
    $p.V = (function() {
      return 0;
    });
    $p.W = (function(x$1) {
      return $m_sr_Statics$().aq(x$1);
    });
    $p.u = (function() {
      this.aX();
    });
    $p.y = (function() {
      this.aO();
    });
    new $TypeData().i($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
      aS: 1,
      F: 1,
      D: 1,
      u: 1,
      m: 1,
      n: 1,
      d: 1,
      p: 1,
      e: 1,
      o: 1,
      x: 1,
      r: 1,
      l: 1,
      q: 1,
      j: 1,
      G: 1,
      E: 1,
      H: 1,
      W: 1,
      S: 1,
      T: 1,
      X: 1,
      U: 1,
      C: 1,
      B: 1,
      I: 1,
      V: 1,
      a: 1,
      s: 1
    }));
    var $n_sci_Nil$;
    function $m_sci_Nil$() {
      if ((!$n_sci_Nil$)) {
        $n_sci_Nil$ = new $c_sci_Nil$();
      }
      return $n_sci_Nil$;
    }
    function $ct_scm_StringBuilder__jl_StringBuilder__($thiz, underlying) {
      $thiz.s = underlying;
      return $thiz;
    }
    function $ct_scm_StringBuilder__($thiz) {
      $ct_scm_StringBuilder__jl_StringBuilder__($thiz, new $c_jl_StringBuilder());
      return $thiz;
    }
    /** @constructor */
    function $c_scm_StringBuilder() {
      this.s = null;
    }
    $p = $c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
    $p.constructor = $c_scm_StringBuilder;
    $p.I = (function() {
      return "IndexedSeq";
    });
    $p.p = (function() {
      return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
    });
    $p.m = (function() {
      return this.s.m();
    });
    $p.q = (function() {
      return this.s.m();
    });
    $p.i = (function() {
      return this.s.g;
    });
    $p.w = (function(v1) {
      var i = (v1 | 0);
      return $bC(this.s.an(i));
    });
    $p.l = (function(i) {
      return $bC(this.s.an(i));
    });
    new $TypeData().i($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
      b4: 1,
      aT: 1,
      u: 1,
      m: 1,
      n: 1,
      d: 1,
      p: 1,
      e: 1,
      o: 1,
      x: 1,
      r: 1,
      l: 1,
      q: 1,
      j: 1,
      b2: 1,
      b0: 1,
      b3: 1,
      aW: 1,
      z: 1,
      b1: 1,
      aU: 1,
      aX: 1,
      aV: 1,
      aY: 1,
      v: 1,
      A: 1,
      aZ: 1,
      y: 1,
      a: 1
    }));
    $L0 = new $c_RTLong(0, 0);
    $d_J.z = $L0;
    $s_LTray__main__AT__V(new ($d_T.r().C)([]));

})();
