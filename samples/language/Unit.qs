/// # Sample
/// Unit
///
/// # Description
/// The `Unit` type is the singleton type whose only value is ().
/// Functions implicitly return `Unit` if no explicit or implicit
/// return is specified.
namespace MyQuantumApp {

    @EntryPoint()
    function ExplicitReturn() : Unit {
        return ();
    }
    operation NoReturn() : Unit {
        // No return, thus implicitly returning `Unit`.
    }
}
