
function getCurrentWindow() {
    return browser.windows.getCurrent();
}

var gettingAllCommands = browser.commands.getAll();
gettingAllCommands.then((commands) => {
  for (let command of commands) {
    console.log(command);
  }
});


browser.commands.onCommand.addListener((command) => {
  if (command == "toggle-feature") {
    getCurrentWindow().then((currentWindow) => {
          var updateInfo = {
            state: "minimized"
          };

          browser.windows.update(currentWindow.id, updateInfo);
    });
  }
});
