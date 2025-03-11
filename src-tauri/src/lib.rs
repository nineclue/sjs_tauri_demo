// use tauri::Manager;
// #[tauri::command]
// fn navigate(url: String) {
//     let webview_window = Manager.get_webview_window("main").unwrap();
//     webview_window.navigate(url);
// }

#[tauri::command]
fn cprint(message: &str) {
    println!("cprint : {}", message);
}

use tauri::{Webview, Url};
#[tauri::command]
fn navigate(webview: Webview, url: &str) {
    let u = Url::parse(url);
    let _ = webview.navigate(u.unwrap());
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_notification::init())
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![navigate, cprint])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
