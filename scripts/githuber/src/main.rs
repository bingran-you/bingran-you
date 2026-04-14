fn main() {
    if let Err(error) = githuber::main_entry(std::env::args().collect()) {
        eprintln!("githuber: {error}");
        std::process::exit(1);
    }
}
