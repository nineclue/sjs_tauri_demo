import scala.scalajs.js, js.annotation.JSGlobal, js.Promise
import org.scalajs.dom
import scalatags.JsDom.all.*
import org.scalajs.dom.Event

object Front:
    implicit val ec: scala.concurrent.ExecutionContext = scala.concurrent.ExecutionContext.global

    @js.native
    @JSGlobal("window.__TAURI__.core")
    object TauriCore extends js.Object:
        def invoke(fname: String, a: js.Object): Promise[js.Object] = js.native

    def main(as: Array[String]): Unit =
        println("Hello from Scala.js")
        dom.document.body.appendChild(content.render)

    val content = 
        val nameInput = input(id := "greet-input", placeholder := "Enter a name...").render
        val greetMsg = p(id := "greet-msg").render
        def submitHandler(e: Event) = 
            e.preventDefault()
            TauriCore.invoke("greet", js.Dynamic.literal("name" -> nameInput.textContent)).toFuture.onComplete: tryo =>
                tryo.toOption.foreach(jso => greetMsg.textContent = jso.asInstanceOf[String])
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

