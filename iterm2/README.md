## My iTerm 2 instalation/theme config

### Install Homebrew

Open a terminal on your device and install homebrew with the following command.

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### Add Homebrew to path

After installing Homebrew, add it to the path (replace [username] with your actual username).<br>You can find your username by running the command `whoami`.

```bash
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/[username]/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

### Install iTerm2

To install, run.

```bash
brew install --cask iterm2
```

Switch to iTerm2 for the remainder of this setup.

### Install Git

If you don't have it installed yet, install git as well.

```bash
brew install git
```

### Install Oh-My-Zsh.

Run this command to install Oh-My-Zsh.

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

### Install Powerlevel10K

This is the theme we'll use for Oh-My-Zsh.<br>Clone this repo to install Powerlevel10K.

```bash
git clone https://github.com/romkatv/powerlevel10k.git $ZSH_CUSTOM/themes/powerlevel10k
```

Now that it's installed, open the `~/.zshrc` file with your preffered text editor.<br>Change the value of `ZSH_THEME` like this.

```bash
ZSH_THEME="powerlevel10k/powerlevel10k"
```

Save your chages and restart your terminal.<br>Run this command to restart your shell.

```bash
source ~/.zshrc
```

### Install Meslo Nerd Font

Install the font by pressing `y`.<br>
After the font is installed you have to quit iTerm2, you can do this by pressing `Cmd + Q`.

### Update VSCode terminal font

If you want you can also change your VSCode font. Todo this.<br>Open the `settings.json` file and add this line.

```bash
"terminal.integrated.fontFamily": "MesloLGS NF"
```

### Configure Powerlevel10K

Restart iTerm2. You should now be seeing the PowerLevel10K configuration process.<br>If you don't, run the following:

```bash
pk10 configure
```

Follow the instructions for the PowerLevel10K configuration to make your terminal look as desired.

### Change iTerm2 colors

#### My custom theme

1. Open iTerm2
2. Download my color theme by running the following command (the theme will be added in your `~/Downloads` directory).

```bash
curl https://raw.githubusercontent.com/RazeSevi/iTerm_config/main/Custom%20theme.itermcolors --output ~/Downloads/custom_theme.itermcolors
```

3. Open iTerm2 preferences
4. Go to Profiles -> Colors
5. Import the downloaded profile `custom_theme.itermcolors`
6. Select the color profile `custom_theme.itermcolors`

You can find other themes here: [iTerm Color Schemes](https://iterm2colorschemes.com/)

### Install ZSH Plugins

install `zsh-autosuggestions`

```bash
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

install `zsh-syntax-highlighting`

```bash
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

Open the `~/.zshrc` file with your text editor and modify the plugins line to what you see below.

```bash
plugins=(git zsh-autosuggestions zsh-syntax-highlighting web-search)
```

Load these new plugins by running.

```bash
source ~/.zshrc
```

#### That's it you're all set.


