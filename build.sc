// import mill.scalajslib.api.Report
import mill._, scalalib._, scalajslib._
import $ivy.`com.github.lolgab::mill-scalablytyped::0.1.15`
import com.github.lolgab.mill.scalablytyped._

trait Base extends ScalaJSModule {
  def scalaVersion = "3.6.3"
  def scalaJSVersion = "1.18.2"
}

// object `scalablytyped-module` extends Base with ScalablyTyped

object f extends Base {
    def ivyDeps = Agg(ivy"com.lihaoyi::scalatags::0.13.1")
    // def moduleDeps = Seq(`scalablytyped-module`)
    /*
    private def baseScala(t: T[Report]) = Task {
        val jsPath = t().dest.path
        val targetPath = jsPath / os.up / os.up / os.up
        val target = targetPath / "main.js"
        os.copy.over(jsPath / "main.js", target)
        os.copy.over(jsPath / "main.js.map", targetPath / "smain.js.map")
        PathRef(target)
    }
    def fscala = baseScala(f.fastLinkJS)
    def scala = baseScala(f.fullLinkJS)
    */

    def fsc  = Task {
        val jsPath = f.fastLinkJS().dest.path
        val targetPath = jsPath / os.up / os.up / os.up / "src"
        val target = targetPath / "main.js"
        os.copy.over(jsPath / "main.js", target)
        os.copy.over(jsPath / "main.js.map", targetPath / "main.js.map")
        PathRef(target)
    }
    def sc = Task {
        val jsPath = f.fullLinkJS().dest.path
        val targetPath = jsPath / os.up / os.up / os.up / "src"
        val target = targetPath / "main.js"
        os.copy.over(jsPath / "main.js", target)
        os.copy.over(jsPath / "main.js.map", targetPath / "main.js.map")
        PathRef(target)
    }
}
