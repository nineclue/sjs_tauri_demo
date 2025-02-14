import scala.scalajs.js, js.Promise
import org.scalajs.dom
import scalatags.JsDom.all.*
import org.scalajs.dom.Event
import org.scalablytyped.runtime.StringDictionary
import typings.tauriAppsApi.coreMod //.invoke
import typings.std.RecordingState
import typings.tauriAppsApi.appMod
object Front:
    implicit val ec: scala.concurrent.ExecutionContext = scala.concurrent.ExecutionContext.global

    def main(as: Array[String]): Unit =
        val v = appMod.getTauriVersion().toFuture
        v.onComplete(tso => tso.toOption.foreach(s => println(s"Hello from Scala.js, $s")))
        dom.document.body.appendChild(content.render)

    val content =
        val nameInput = input(id := "greet-input", placeholder := "Enter a name...").render
        val greetMsg = p(id := "greet-msg").render
        def submitHandler(e: Event) =
            e.preventDefault()
            coreMod.invoke[String]("greet", StringDictionary("name" -> nameInput.value)).toFuture.onComplete: tryo => 
                println(s"Future completed : $tryo")
                tryo match
                    case scala.util.Success(msg: String) => 
                        greetMsg.textContent = msg
                    case _ => 
                        println("Failed to get message from 'greet'")
        tag("main")(cls := "container",
            h1("Welcome to Tauri"),
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
