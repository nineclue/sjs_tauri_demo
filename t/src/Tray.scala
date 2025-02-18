import cats.effect.*
import cats.syntax.all.*
import typings.tauriAppsApi.appMod
import scala.language.experimental.namedTuples

object Tray extends IOApp:
    import scala.scalajs.js.Promise
    implicit val ec: scala.concurrent.ExecutionContext = scala.concurrent.ExecutionContext.global

    extension[A] (p: Promise[A])
        def handle(emsg: String)(f: Function[A, Unit]) =
            p.toFuture.onComplete: tryA =>
                tryA match
                    case scala.util.Success(a) => f(a)
                    case _ => throw new Exception(emsg)

    extension[A] (p: Promise[A])
        def toIO: IO[A] =
            IO.fromFuture(IO(p.toFuture))

    def run(as: List[String]): IO[ExitCode] =
        tray *>
        IO(ExitCode.Success)

    import typings.tauriAppsApi.{menuMenuItemMod => menuItemMod}
    import typings.tauriAppsApi.{menuMod, menuMenuMod}
    import scala.scalajs.js.JSConverters.*
    def trayMenu: Promise[menuMod.Menu] =
        type MenuItem = (id: String, text: String, url: String)
        val menus = Seq(
            (id = "tauri", text = "Tauri", url = "https://tauri.app"),
            (id = "scala", text = "Scala", url = "https://scala-lang.org"),
            (id = "scala.js", text = "Scala.js", url = "https://scala-js.org")
        )
        val menuItems = menus.map(mi =>
            menuItemMod.MenuItemOptions(mi.text).setId(mi.id).setAction(trayMenuHandler(mi.url)))
        val menuOption = menuMenuMod.MenuOptions().setItems(menuItems.toJSArray)
        menuMod.Menu.`new`(menuOption).asInstanceOf[Promise[menuMod.Menu]]

    def trayMenuHandler(url: String)(id: String): Unit =
        println(s"selected $id: open $url")

    import typings.tauriAppsApi.trayMod
    def tray =
        for
            // capabilities에 "core:app:allow-default-window-icon" 필요
            icon        <-  appMod.defaultWindowIcon().toIO
            menu        <-  trayMenu.toIO
            trayOption  =   trayMod.TrayIconOptions().setIcon(icon).setMenu(menu)
        yield
            trayMod.TrayIcon.`new`(trayOption).toIO
