import scala.scalajs.js, js.Promise
import org.scalajs.dom
import scalatags.JsDom.all.*
import org.scalajs.dom.Event
import org.scalablytyped.runtime.StringDictionary
import typings.tauriAppsApi.coreMod //.invoke
import typings.tauriAppsPluginNotification.{mod => notiMod}
import typings.std.RecordingState
import typings.tauriAppsApi.appMod
import cats.effect.*

object Front extends IOApp:
    implicit val ec: scala.concurrent.ExecutionContext = scala.concurrent.ExecutionContext.global
    import TauriUtil.*
    def run(as: List[String]): IO[ExitCode] =
        for
            tauriVersion    <-  appMod.getTauriVersion().toIO
            notiFlag        <-  notiMod.isPermissionGranted().toIO
            _               <-  IO(dom.document.body.appendChild(content(tauriVersion, notiFlag).render))
        yield ExitCode.Success

    def content(tauriVersion: String, notiFlag: Boolean) =
        val nameInput = input(id := "greet-input", placeholder := "Enter a name...").render
        val greetMsg = p(id := "greet-msg").render
        def submitHandler(e: Event) =
            e.preventDefault()
            coreMod.invoke[String]("greet", StringDictionary("name" -> nameInput.value)).handle("Failed to get message from 'greet'"): msg =>
                // greetMsg.textContent = msg
                val noti = notiMod.Options("Scala.js with Tauri").setBody(msg)
                notiMod.sendNotification(noti)
        tag("main")(cls := "container",
            h1(s"Welcome to Tauri ($tauriVersion)"),
            div(s"notification enabled : ${notiFlag}"),
            div(cls := "row",
                a(href := "https://tauri.app",
                    target := "_blank",
                    img(src := "/assets/tauri.svg", cls := "logo tauri", alt := "Tauri logo")),
                a(href := "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                    target := "_blank",
                    img(src := "/assets/javascript.svg", cls := "logo vanilla", alt := "JavaScript logo"))
            ),

            p("Click on the Tauri logo to learn more about the framework"),

            form(cls := "row", id := "greet-form",
                onsubmit := submitHandler,
                nameInput,
                button(`type` := "submit", "Greet")),
            greetMsg
        )
