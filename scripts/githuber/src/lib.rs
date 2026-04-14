mod broker;
mod config;
mod gh;
mod gh_executor;
mod identity;
mod lock;
mod runner;
mod service;
mod store;
mod task;
mod util;
mod workspace;

use config::{CommandKind, Config};
use service::Service;
use util::AppResult;

pub fn main_entry(args: Vec<String>) -> AppResult<()> {
    let config = Config::parse(args)?;
    let mut service = Service::bootstrap(config)?;
    match service.command() {
        CommandKind::Doctor => service.doctor(),
        CommandKind::Run => service.run_forever(),
        CommandKind::RunOnce => service.run_once(),
        CommandKind::Start => service.start_background(),
        CommandKind::Status => service.status(),
        CommandKind::Cleanup => service.cleanup(),
        CommandKind::Stop => service.stop(),
        CommandKind::Help => {
            println!("{}", Config::usage());
            Ok(())
        }
    }
}
