const { app, tray, menu } = window.__TAURI__;

console.log("hello, from javascript");
app.getName().then((appName) => {
    console.log(appName);
});

const tauriIcon = await app.defaultWindowIcon();

function menuHandler(id) {
    console.log(id);
    var url;
    switch (id) {
        case ('tauri'):
            url = 'https://tauri.app';
            break;
        case ('scalajs'):
            url = 'https://scala-js.org';
            break;
        default:
            url = 'https://google.com';
    }
    window.location.replace(url);
};

const tauriMenu = await menu.Menu.new({
    items: [
        {id: 'tauri', text: 'Tauri', action: menuHandler, },
        {id: 'scalajs', text: 'Scala.js', action: menuHandler, },
    ]
});

function trayHandler(e) {
    console.log(e);
};

const options = {
    icon: tauriIcon,
    action: trayHandler,
    menu: tauriMenu,
};

const t = await tray.TrayIcon.new(options);