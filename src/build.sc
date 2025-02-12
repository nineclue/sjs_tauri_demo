import mill.scalajslib.api.Report
import mill._, scalalib._, scalajslib._

object f extends ScalaJSModule {
    def scalaVersion = "3.6.3"
    def scalaJSVersion = "1.18.2"
    def ivyDeps = Agg(ivy"com.lihaoyi::scalatags::0.13.1")

    def scala  = Task {
        fastLinkJS()
        val jsPath = f.fastLinkJS().dest.path
        val targetPath = jsPath / os.up / os.up / os.up
        val target = targetPath / "main.js"
        os.copy.over(jsPath / "main.js", target)
        os.copy.over(jsPath / "main.js.map", targetPath / "smain.js.map")
        PathRef(target)
    }
}
