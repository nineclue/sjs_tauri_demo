import scala.scalajs.js.Promise
import cats.effect.IO

object TauriUtil:
    import scala.concurrent.ExecutionContext.Implicits.global

    extension[A] (p: Promise[A])
        def handle(emsg: String)(f: Function[A, Unit]) =
            p.toFuture.onComplete: tryA =>
                tryA match
                    case scala.util.Success(a) => f(a)
                    case _ => throw new Exception(emsg)

    extension[A] (p: Promise[A])
        def toIO: IO[A] =
            IO.fromFuture(IO(p.toFuture))
