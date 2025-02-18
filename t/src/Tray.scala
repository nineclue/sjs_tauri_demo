import cats.effect.*
import typings.tauriAppsApi.{appMod, menuMod}
import scala.language.experimental.namedTuples

object Front extends IOApp:
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
        IO(ExitCode.Success)

    import typings.tauriAppsApi.{menuMenuItemMod => menuItemMod}
    import typings.tauriAppsApi.menuMenuMod
    import scala.scalajs.js.JSConverters.*
    def trayMenu =
        type MenuItem = (id: String, text: String, url: String)
        val menus = Seq(
            (id = "tauri", text = "Tauri", url = "https://tauri.app"),
            (id = "scala", text = "Scala", url = "https://scala-lang.org"),
            (id = "scala.js", text = "Scala.js", url = "https://scala-js.org")
        )
        val menuItems = menus.map(mi =>
            menuItemMod.MenuItemOptions(mi.text).setId(mi.id).setAction(trayMenuHandler))
        menuMod.Menu.`new`(menuMenuMod.MenuOptions().setItems(menuItems.toJSArray))

    def trayMenuHandler(id: String): Unit =
        println(id)

    import typings.tauriAppsApi.trayMod
    def tray =
        for
            icon        <-  appMod.defaultWindowIcon().toIO
            trayIcon    =   trayMod.TrayIcon()
            _           <-  trayIcon.setIcon(icon).toIO
            menu        <-  trayMenu.toIO
        yield
            trayIcon.setMenu(menu)
