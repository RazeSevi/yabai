## My Dev Environment Files

### Terminal setup

- [.zshrc](https://github.com/RazeSevi/Dev-enviroment-files/blob/main/.zshrc) - Zsh Shell Configuration
- [Custom_theme.itermcolors](https://github.com/RazeSevi/Dev-enviroment-files/blob/main/iterm2/Custom_theme.itermcolors) - iTerm2 Color Scheme
- [README.md](https://github.com/RazeSevi/Dev-enviroment-files/blob/main/iterm2/README.md) - iTerm2 README.md file

### Tmux Setup

- [.tmux.conf](https://github.com/RazeSevi/tmux/blob/main/.tmux.conf) - tmux configuration file
- [README.md](https://github.com/RazeSevi/tmux/blob/main/README.md)

### Yabai Tiling Window Manager Setup

#### Relevant files for yabai

- [yabai/yabairc](https://github.com/RazeSevi/Dev-enviroment-files/blob/main/yabai/yabairc)
- [yabai/README.md](https://github.com/RazeSevi/Dev-enviroment-files/blob/main/yabai/README.md)

#### Relevant files for skhd

- [skhd/skhdrc](https://github.com/RazeSevi/Dev-enviroment-files/blob/main/skhd/skhdrc) - This setup is explained in the same Yabai [README.md](https://github.com/RazeSevi/Dev-enviroment-files/blob/main/yabai/README.md) file.

### Neovim Setup

If you clone the repo into your machine and use the config by copying .config/nvim to your home folder, you'll have to restart neovim after the plugins install. After restart, if you are opening a lua file or another file I have language servers configured for, like html, css or javascript/typescript, you might also get an error saying that the server failed to start. This is because Mason hasn't installed it yet. Press enter to continue, Mason will automatically install it.

#### Relevant Files

- [.config/nvim](https://github.com/RazeSevi/nvim/tree/b4f8b4e04dadf8f42bbf48a4fbd0efe210b5868c)

#### Setup Requirements

- True Color Terminal like [iTerm2](https://iterm2.com)
- [Neovim](https://neovim.io)(Version 0.8 or Later)
- [Nerd Font](https://www.nerdfonts.com/) - I use Meslo Nerd Font
- [Ripgrep](https://github.com/BurntSushi/ripgrep) - For Telescope Fuzzy Finder
- XCode Command Line Tools
- If working with typescript/javascript and the typescript language server like me. You might need to install node.<br>

If you're on mac, like me, you can install iTerm2, Neovim, Ripgrep and Node with homebrew.

```bash
brew install --cask iterm2
```

```bash
brew install neovim
```

```bash
brew install Ripgrep
```

For XCode Command Line Tools do:


```bash
xcode-select --installed
```


