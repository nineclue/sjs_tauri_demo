import typings.tauriAppsApi.appMod
import scala.language.experimental.namedTuples

object Tray: // extends IOApp:
    import scala.scalajs.js.Promise
    implicit val ec: scala.concurrent.ExecutionContext = scala.concurrent.ExecutionContext.global

    import typings.tauriAppsApi.{menuMenuItemMod => menuItemMod}
    import typings.tauriAppsApi.{menuMod, menuMenuMod}
    import scala.scalajs.js.JSConverters.*
    def trayMenu: Promise[menuMod.Menu] =
        type MenuItem = (id: String, text: String, url: String)
        val menus = Seq(
            (id = "tauri", text = "Tauri", url = "https://tauri.app"),
            // (id = "scala", text = "Scala", url = "https://scala-lang.org"),
            (id = "scala.js", text = "Scala.js", url = "https://scala-js.org")
        )
        val menuItems = menus.map(mi =>
            menuItemMod.MenuItemOptions(mi.text).setId(mi.id).setAction(trayMenuHandler(mi.url)))
        val menuOption = menuMenuMod.MenuOptions().setItems(menuItems.toJSArray)
        menuMod.Menu.`new`(menuOption).asInstanceOf[Promise[menuMod.Menu]]

    import org.scalajs.dom
    def trayMenuHandler(url: String)(id: String): Unit =
        println(s"selected $id: open $url")
        dom.window.location.replace(url)

    import typings.tauriAppsApi.trayMod
    def trayHandler(e: trayMod.TrayIconEvent) = 
        println(s"tray event : $e")

    def tray = 
        appMod.defaultWindowIcon().`then`: icon =>
            trayMenu.`then`: menu =>
                val trayOption = trayMod.TrayIconOptions().setIcon(icon).setMenu(menu).setAction(trayHandler)
                trayMod.TrayIcon.`new`(trayOption)

    def main(as: Array[String]): Unit = 
        tray

    /*
    // using cats effect IO
    import cats.effect.*
    import cats.syntax.all.*

    extension[A] (p: Promise[A])
        def handle(emsg: String)(f: Function[A, Unit]) =
            p.toFuture.onComplete: tryA =>
                tryA match
                    case scala.util.Success(a) => f(a)
                    case _ => throw new Exception(emsg)

    extension[A] (p: Promise[A])
        def toIO: IO[A] =
            IO.fromFuture(IO(p.toFuture))

    def tray =
        for
            // capabilities에 "core:app:allow-default-window-icon" 필요
            icon        <-  appMod.defaultWindowIcon().toIO
            menu        <-  trayMenu.toIO
            trayOption  =   trayMod.TrayIconOptions().setIcon(icon).setMenu(menu).setAction(trayHandler)
        yield
            trayMod.TrayIcon.`new`(trayOption).toIO

    def run(as: List[String]): IO[ExitCode] =
        tray >>
        IO(ExitCode.Success)
    */