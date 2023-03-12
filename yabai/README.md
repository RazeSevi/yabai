## Setup and use of the Yabai tiling manager

### Configure MacOS specific settings.

1. Open several desktops `~8` on your machine
2. Go to `Keyboard Settings` &rarr; `Shortcuts` &rarr; `Mission Control`
3. Expand `Mission control` and turn on Shortcuts for switching spaces `1-8` with `Ctrl + # of space`
4. Go to `System settings` &rarr; `Accessibility` &rarr; `Display`
5. Turn on `Reduce motion`
6. Go to `System settings` &rarr; `Deskop & Dock` &rarr; `Mission Control`
7. Turn off `Automatically Rearrange Spaces Based On Most Resent Use`
8. Personally, I only keep `Displays Have Separate Spaces` turned on here, and that's what I'd recommend

### Open a terminal window

Open a terminal window on your mac. Could be the default terminal or something else like iTerm2 which is what I'm currently using.

### Install Homebrew

Run the following command to install Homebrew

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

If necessary, when prompted, enter your password here and press enter.<br> If you haven't installed the XCode Command Line Tools, when prompted, press enter and homebrew will install this as well.

### Add to path (Only Apple silicon Macbooks)

After installing, add it to the path. This step shouldn't be necessary on Intel macs.<br>
Run the following two commands to do so.

```bash
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

### Install Yabai

Run the following command to install Yabai.

```bash
brew install koekeishiya/formulae/yabai
```

### Install Skhd

Run the following command to install Skhd

```bash
brew install koekeishiya/formulae/skhd
```

### Create the Yabai config file in your `.config` file

```bash
mkdir ~/.config/yabai
cd ~/.config/yabai
```

Create the yabai config file

```bash
touch yabairc
```

### Add Configuration Options to File
Open with preferred editor and add the following ("open -t yabairc", "code yabairc" (visual studio code), "vim yabairc", etc...).<br>
There are some configuration options that will be available only if you partially disable SIP (Sytem Integrity Protection).<br>
All of the options I've configured below will work without disabling SIP.<br>
<br>
Configure default layout to use: Binary Space Partitioning.

```bash
# default layout (can be bsp, stack or float)
yabai -m config layout bsp
```

Configure how window splits should be made.

```bash
# New window spawns to the right if vertical split, or bottom if horizontal split
yabai -m config window_placement second_child
```

Configure window padding

```bash
# padding set to 5px
yabai -m config top_padding 5
yabai -m config bottom_padding 5
yabai -m config left_padding 5
yabai -m config right_padding 5
yabai -m config window_gap 5
```

Configure mouse Settings

```bash
# center mouse on window with focus
yabai -m config mouse_follows_focus on

# modifier for clicking and dragging with mouse
yabai -m config mouse_modifier alt
# set modifier + left-click drag to move window
yabai -m config mouse_action1 move
# set modifier + right-click drag to resize window
yabai -m config mouse_action2 resize


# when window is dropped in center of another window, swap them (on edges it will split it)
yabai -m mouse_drop_action swap
```

Disable specific apps from being managed with yabai. Use this format for the apps you'd like to disable.

```bash
yabai -m rule --add app="^System Settings$" manage=off
yabai -m rule --add app="^Calculator$" manage=off
yabai -m rule --add app="^Karabiner-Elements$" manage=off
```

### Start yabai

```bash
brew services start yabai
```

Allow any prompts for accessibility permissions.<br>
Restart yabai:

```bash
brew services restart yabai
```

### Start Skhd

```bash
brew services start skhd
```

Allow any prompts for accessibility permissions.<br>
Restart Skhd

```bash
brew services restart skhd
```

### Create Skhd Config File in Home Directory

Create directory for skhd config file and move into it (config will live in ".config/skhd/skhdrc"):

```bash
mkdir ~/.config/skhd
cd ~/.config/skhd
```

Create the skhd config file.

```bash
touch skhdrc
```

### Add Keyboard Shortcuts To Config File

These shortcuts are completely up to you, but you can use mine as reference. The way I like to do it is to choose two primary modifiers and a third if necessary.<br>
These could be something like "alt", "shift + alt", and "ctrl + alt".<br>
<br>
One recommendation is to change "shift + alt" to "hyper" if you have a "hyper" key on your keyboard ("command" + "control" + "shift" + "alt"). You could configure a "hyper" key (replacing "Caps Lock" for example) with something like "Karabiner-Elements".<br>

#### Changing Focus Shortcuts

Change Focus Within Space

```bash
# change window focus within space
alt - j : yabai -m window --focus south
alt - k : yabai -m window --focus north
alt - h : yabai -m window --focus west
alt - l : yabai -m window --focus east
```

Change Focus Between Displays

```bash
#change focus between external displays (left and right)
alt - s: yabai -m display --focus west
alt - g: yabai -m display --focus east
```

#### Shortcuts For Modifying The Layout

```bash
# rotate layout clockwise
shift + alt - r : yabai -m space --rotate 270

# flip along y-axis
shift + alt - y : yabai -m space --mirror y-axis

# flip along x-axis
shift + alt - x : yabai -m space --mirror x-axis

# toggle window float
shift + alt - c : yabai -m window --toggle float --grid 4:4:1:1:2:2
```

#### Modifying Window Size Shortcuts

```bash
# maximize a window
shift + alt - m : yabai -m window --toggle zoom-fullscreen

# balance out tree of windows (resize to occupy same area)
shift + alt - e : yabai -m space --balance
```

#### Shortcuts For Moving Windows Around

Swap Windows Within Space

```bash
# swap windows
shift + alt - j : yabai -m window --swap south
shift + alt - k : yabai -m window --swap north
shift + alt - h : yabai -m window --swap west
shift + alt - l : yabai -m window --swap east
```

Move Window Within Space And Split

```bash
# move window and split
ctrl + alt - j : yabai -m window --warp south
ctrl + alt - k : yabai -m window --warp north
ctrl + alt - h : yabai -m window --warp west
ctrl + alt - l : yabai -m window --warp east
```

Move Window Across Displays

```bash
# move window to display left and right
shift + alt - s : yabai -m window --display west; yabai -m display --focus west;
shift + alt - g : yabai -m window --display east; yabai -m display --focus east;
```

Move Window To A Space (Desktop/Workspace)

```bash
#move window to prev and next space
shift + alt - p : yabai -m window --space prev;
shift + alt - n : yabai -m window --space next;

# move window to space #
shift + alt - 1 : yabai -m window --space 1;
shift + alt - 2 : yabai -m window --space 2;
shift + alt - 3 : yabai -m window --space 3;
shift + alt - 4 : yabai -m window --space 4;
shift + alt - 5 : yabai -m window --space 5;
shift + alt - 6 : yabai -m window --space 6;
shift + alt - 7 : yabai -m window --space 7;
```

### Stop/Start/Restart Yabai

```bash
# stop/start/restart yabai
ctrl + alt - q : brew services stop yabai
ctrl + alt - s : brew services start yabai
ctrl + alt - r : brew services restart yabai
```

## You're done the 2 files should look something like this.

### yabairc

```bash
# bsp, stack or float
yabai -m config layout bsp

yabai -m config window_placement second_child


# padding
yabai -m config top_padding 5
yabai -m config bottom_padding 5
yabai -m config left_padding 5
yabai -m config right_padding 5
yabai -m config window_gap 5

# mouse settings
yabai -m config mouse_follows_focus on

yabai -m config mouse_modifier cmd
# left click + drag
yabai -m config mouse_action1 move
# right click + drag
yabai -m config mouse_action2 resize

yabai -m mouse_drop_action swap

# Disable specific apps
yabai -m rule --add app="^System Settings$" manage=off
yabai -m rule --add app="^Calculator$" manage=off
```

### skhdrc

```bash
# Changing window focus withing space
# alt = option
alt - j : yabai -m window --focus south
alt - k : yabai -m window --focus north
alt - h : yabai -m window --focus west
alt - l : yabai -m window --focus east

# Change focus between external displays (Left and Right)
alt - s: yabai -m display --focus west
alt - g: yabai -m display --focus east

# Modify the layout
#
# rotate layout clockwise
shift + alt - r : yabai -m space --rotate 270
# Flip along y-axis
shift + alt - y : yabai -m space --mirror y-axis
# Flip along x-axis
shift + alt - x : yabai -m space --mirror x-axis
# Toggle window float
shift + alt - c : yabai -m window --toggle float --grid 4:4:1:1:2:2

# Modify window size

# Maximize window size
shift + alt - m : yabai -m window --toggle zoom-fullscreen

# Balance out tree of windows (resize to occupy same area)
shift + alt - e : yabai -m space --balance

# Moving windows around
shift + alt - j : yabai -m window --swap south
shift + alt - k : yabai -m window --swap north
shift + alt - h : yabai -m window --swap west
shift + alt - l : yabai -m window --swap east
# Move window and split
ctrl + alt - j : yabai -m window --warp south
ctrl + alt - k : yabai -m window --warp north
ctrl + alt - h : yabai -m window --warp west
ctrl + alt - l : yabai -m window --warp east

# Move to display
shift + alt - s : yabai -m window --display west; yabai -m display --focus west;
shift + alt - g : yabai -m window --display east; yabai -m display --focus east;
shift + alt - u : yabai -m window --display north; yabai -m display --focus north;
shift + alt - d : yabai -m window --display south; yabai -m display --focus south;

alt - u : yabai -m display --focus north;
alt - d : yabai -m display --focus south;

# Move window to next or previous space
shift + alt - p : yabai -m window --space prev;
shift + alt - n : yabai -m window --space next;

# Move window to space #
shift + alt - 1 : yabai -m window --space 1;
shift + alt - 2 : yabai -m window --space 2;
shift + alt - 3 : yabai -m window --space 3;
shift + alt - 4 : yabai -m window --space 4;
shift + alt - 5 : yabai -m window --space 5;
shift + alt - 6 : yabai -m window --space 6;
shift + alt - 7 : yabai -m window --space 7;
shift + alt - 8 : yabai -m window --space 8;
shift + alt - 9 : yabai -m window --space 9;

# Start/Stop yabai
ctrl + alt - q : brew services stop yabai
ctrl + alt - s : brew services start yabai
```
