import mill._, scalalib._, scalajslib._
import mill.scalajslib.api._
import $ivy.`io.github.nafg.millbundler::millbundler::0.2.0`
import io.github.nafg.millbundler.jsdeps._
import io.github.nafg.millbundler._

trait base extends ScalaJSRollupModule {
    def scalaVersion = "3.6.3"
    def scalaJSVersion = "1.18.2"

    def ivyDeps = Agg(
        ivy"org.typelevel::cats-effect::3.5.7",
        ivy"com.lihaoyi::scalatags::0.13.1",
        ivy"org.scalablytyped::tauri-apps__api::2.3.0-c11587",
        ivy"org.scalablytyped::tauri-apps__plugin-notification::2.2.1-f89784"
    )

    override def moduleKind = ModuleKind.ESModule
    override def jsDeps =
        super.jsDeps() ++
            JsDeps(
                dependencies = Map(
                    "@tauri-apps/api" -> "^2.2.0",
                    "@tauri-apps/plugin-notification" -> "~2"
                )
            )

    def fl = Task {
        val jsPath = fastLinkJS().dest.path
		val targetPath = jsPath / os.up / os.up / os.up / "src"
		val target = targetPath / "main.js"
		os.copy.over(jsPath / "main.js", target)
		os.copy.over(jsPath / "main.js.map", targetPath / "main.js.map")
		PathRef(target)
    }

    def fb = Task {
        val bundles = devBundle()
        val jsPath = bundles.head.path / os.up
        val targetPath = jsPath / os.up / os.up / os.up / "src"
        val target = targetPath / "main.js"
        os.copy.over(jsPath / "out-bundle.js", target)
        val sourceMap = jsPath / "out-bundle.js.map"
        if (os.exists(sourceMap)) {
            os.copy.over(sourceMap, targetPath / "main.js.map")
        }
        PathRef(target)
    }

    def sc = Task {
        val bundles = prodBundle()
        val jsPath = bundles.head.path / os.up
        val targetPath = jsPath / os.up / os.up / os.up / "src"
        val target = targetPath / "main.js"
        os.copy.over(jsPath / "out-bundle.js", target)
        val sourceMap = jsPath / "out-bundle.js.map"
        if (os.exists(sourceMap)) {
            os.copy.over(sourceMap, targetPath / "main.js.map")
        }
        PathRef(target)
    }
}

object f extends base {
    override def mainClass: T[Option[String]] = Some("Front")
}

object t extends base {
  override def mainClass: T[Option[String]] = Some("Tray")
}
