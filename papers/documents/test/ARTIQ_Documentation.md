# PDF Document: ARTIQ Documentation.pdf

**File Path:** ARTIQ Documentation.pdf

**Processed Date:** 2026-02-10T18:15:23.816Z

**File Size:** 784.69 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 784

**Title:** ARTIQ Documentation

**Collection:** TEST

---

## Extracted Text Content

ARTIQ Documentation
Release 7.8180.21c6f57 M-Labs and contributors
Jul 27, 2023

CONTENTS

1 Introduction

1

2 Installing ARTIQ

3

2.1 Installing via Nix (Linux) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3

2.2 Installing via Conda (Windows, Linux) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5

2.3 Upgrading ARTIQ (with Nix) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6

2.4 Upgrading ARTIQ (with Conda) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6

2.5 Flashing gateware and firmware into the core device . . . . . . . . . . . . . . . . . . . . . . . . . . 6

2.6 Setting up the core device IP networking . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8

2.7 Miscellaneous configuration of the core device . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 9

3 Developing ARTIQ

11

4 Release notes

13

4.1 ARTIQ-7 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 13

4.2 ARTIQ-6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 14

4.3 ARTIQ-5 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 16

4.4 ARTIQ-4 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 17

4.5 ARTIQ-3 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 19

4.6 ARTIQ-2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 20

4.7 ARTIQ-1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 22

5 ARTIQ Real-Time I/O Concepts

25

5.1 The timeline . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 25

5.2 Underflow exceptions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 26

5.3 Sequence errors . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 27

5.4 Collisions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 28

5.5 Busy errors . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 28

5.6 Input channels and events . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 28

5.7 Overflow exceptions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 29

5.8 Seamless handover . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 29

5.9 Synchronization . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 30

5.10 RTIO reset . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 30

6 Getting started with the core language

31

6.1 Connecting to the core device . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 31

6.2 Host/core device interaction (RPC) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 32

6.3 Real-time Input/Output (RTIO) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 33

6.4 Parallel and sequential blocks . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 34

6.5 RTIO analyzer . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 35

6.6 Direct Memory Access (DMA) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 35

i

7 Compiler

37

7.1 Supported Python features . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 37

7.2 Remote procedure calls . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 37

7.3 Pitfalls . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 38

7.4 Asynchronous RPCs . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 38

7.5 Additional optimizations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 39

8 Getting started with the management system

41

8.1 Starting your first experiment with the master . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 41

8.2 Adding an argument . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 42

8.3 Setting up Git integration . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 42

8.4 Datasets . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 44

9 Core device

47

9.1 Flash storage . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 47

9.2 FPGA board ports . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 47

10 Management system

51

10.1 Components . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 51

10.2 Experiment scheduling . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 52

10.3 Git integration . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 53

10.4 Scheduler API reference . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 54

10.5 Client control broadcasts (CCBs) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 55

10.6 Front-end tool reference . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 56

11 The environment

63

11.1 The device database . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 63

11.2 Arguments . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 64

11.3 Datasets . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 64

12 Distributed Real Time Input/Output (DRTIO)

65

12.1 Using DRTIO . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 65

12.2 Internal details . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 67

13 Core language reference

71

13.1 artiq.language.core module . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 71

13.2 artiq.language.environment module . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 73

13.3 artiq.language.scan module . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 76

13.4 artiq.language.units module . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 77

14 Core drivers reference

79

14.1 System drivers . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 79

14.2 Digital I/O drivers . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 82

14.3 RF generation drivers . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 95

14.4 DAC/ADC drivers . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 129

14.5 Miscellaneous . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 139

15 List of available NDSPs

147

16 Developing a Network Device Support Package (NDSP)

149

16.1 The driver and controller . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 150

16.2 The client . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 151

16.3 Command-line arguments . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 152

16.4 Logging . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 152

16.5 Integration with ARTIQ experiments . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 153

ii

16.6 Remote execution support . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 154 16.7 General guidelines . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 154 16.8 Hosting your code . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 154

17 Utilities

155

17.1 Local running tool . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 155

17.2 Static compiler . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 156

17.3 Flash storage image generator . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 156

17.4 Flashing/Loading tool . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 157

17.5 Core device management tool . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 159

17.6 Core device logging controller . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 164

17.7 Moninj proxy . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 164

17.8 Core device RTIO analyzer tool . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 164

17.9 DRTIO routing table manipulation tool . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 165

18 Default network ports

167

19 FAQ

169

19.1 How do I . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 169

Python Module Index

173

Index

175

iii

iv

CHAPTER
ONE
INTRODUCTION
ARTIQ (Advanced Real-Time Infrastructure for Quantum physics) is the next-generation control system for quantum information experiments. It is maintained and developed by M-Labs and the initial development was for and in partnership with the Ion Storage Group at NIST. ARTIQ is free software and offered to the entire research community as a solution equally applicable to other challenging control tasks, including outside the field of ion trapping. Several other laboratories (e.g. at the University -
of Oxford, the Army Research Lab, and the University of Maryland) have later adopted ARTIQ as their control system and have contributed to it. The system features a high-level programming language that helps describing complex experiments, which is compiled and executed on dedicated hardware with nanosecond timing resolution and sub-microsecond latency. It includes graphical user interfaces to parametrize and schedule experiments and to visualize and explore the results. ARTIQ uses FPGA hardware t-
o perform its time-critical tasks. The Sinara hardware, and in particular the Kasli FPGA carrier, is designed to work with ARTIQ. ARTIQ is designed to be portable to hardware platforms from different vendors and FPGA manufacturers. Several different configurations of a high-end FPGA evaluation kit are also used and supported. FPGA platforms can be combined with any number of additional peripherals, either already accessible from ARTIQ or made accessible with little effort. ARTIQ and its dependenci-
es are available in the form of Nix packages (for Linux) and Conda packages (for Windows and Linux). Packages containing pre-compiled binary images to be loaded onto the hardware platforms are supplied for each configuration. Like any open source software ARTIQ can equally be built and installed directly from source. ARTIQ is supported by M-Labs and developed openly. Components, features, fixes, improvements, and extensions are funded by and developed for the partnering research groups. Core techn-
ologies employed include Python, Migen, Migen-AXI, Rust, MiSoC/VexRiscv, LLVM/llvmlite, and Qt5. Website: https://m-labs.hk/artiq Cite ARTIQ as Bourdeauducq, Sébastien et al. (2016). ARTIQ 1.0. Zenodo. 10.5281/zenodo. 51303. Copyright (C) 2014-2022 M-Labs Limited. Licensed under GNU LGPL version 3+.
1

ARTIQ Documentation, Release 7.8180.21c6f57

2

Chapter 1. Introduction

CHAPTER
TWO
INSTALLING ARTIQ
ARTIQ can be installed using the Nix (on Linux) or Conda (on Windows or Linux) package managers. Nix is an innovative, robust, fast, and high-quality solution that comes with a larger collection of packages and features than Conda. However, Windows support is poor (using it with Windows Subsystem for Linux still has many problems) and Nix can be harder to learn. Conda has a more traditional approach to package management, is much more limited, slow, and lower-quality than Nix, but it supports Wind-
ows and it is simpler to use when it functions correctly. In the current state of affairs, we recommend that Linux users install ARTIQ via Nix and Windows users install it via Conda.
2.1 Installing via Nix (Linux)
First, install the Nix package manager. Some distributions provide a package for the Nix package manager, otherwise, it can be installed via the script on the Nix website. Make sure you get Nix version 2.4 or higher. Once Nix is installed, enable Flakes:
$ mkdir -p ~/.config/nix $ echo "experimental-features = nix-command flakes" > ~/.config/nix/nix.conf
The easiest way to obtain ARTIQ is then to install it into the user environment with $ nix profile install git+https://github.com/m-labs/artiq.git\?ref=release-7. Answer “Yes” to the questions about setting Nix configuration options. This provides a minimal installation of ARTIQ where the usual commands (artiq_master, artiq_dashboard, artiq_run, etc.) are available. This installation is however quite limited, as Nix creates a dedicated Python environment for the ARTIQ commands alone. This means th-
at other useful Python packages that you may want (pandas, matplotlib, . . . ) are not available to them. Installing multiple packages and making them visible to the ARTIQ commands requires using the Nix language. Create an empty directory with a file flake.nix with the following contents:
{ inputs.artiq.url = "git+https://github.com/m-labs/artiq.git?ref=release-7"; inputs.extrapkg.url = "git+https://git.m-labs.hk/M-Labs/artiq-extrapkg.git?ref=release-
→7"; inputs.extrapkg.inputs.artiq.follows = "artiq"; outputs = { self, artiq, extrapkg }: let pkgs = artiq.inputs.nixpkgs.legacyPackages.x86_64-linux;
(continues on next page)
3

ARTIQ Documentation, Release 7.8180.21c6f57

(continued from previous page)
aqmain = artiq.packages.x86_64-linux; aqextra = extrapkg.packages.x86_64-linux; in { defaultPackage.x86_64-linux = pkgs.buildEnv {
name = "artiq-env"; paths = [
# ======================================== # EDIT BELOW # ======================================== (pkgs.python3.withPackages(ps: [
# List desired Python packages here. aqmain.artiq #ps.paramiko # needed if and only if flashing boards remotely (artiq_flash →H) #aqextra.flake8-artiq
# The NixOS package collection contains many other packages that you may find # interesting. Here are some examples: #ps.pandas #ps.numpy #ps.scipy #ps.numba #ps.matplotlib # or if you need Qt (will recompile): #(ps.matplotlib.override { enableQt = true; }) #ps.bokeh #ps.cirq #ps.qiskit ])) #aqextra.korad_ka3005p #aqextra.novatech409b # List desired non-Python packages here #aqmain.openocd-bscanspi # needed if and only if flashing boards # Other potentially interesting packages from the NixOS pack-
age collection: #pkgs.gtkwave #pkgs.spyder #pkgs.R #pkgs.julia # ======================================== # EDIT ABOVE # ======================================== ]; }; }; nixConfig = { # work around https://github.com/NixOS/nix/issues/6771 extra-trusted-public-keys = "nixbld.m-labs.hk→1:5aSRVA5b320xbNvu30tqxVPXpld73bhtOeH6uAjRyHc="; extra-substituters = "https://nixbld.m-labs.hk"; }; }
Then spawn a shell containing the packages with $ nix shell. The ARTIQ commands with all the additional packages should now be available.

4

Chapter 2. Installing ARTIQ

ARTIQ Documentation, Release 7.8180.21c6f57
You can exit the shell by typing Control-D. The next time $ nix shell is invoked, Nix uses the cached packages so the shell startup is fast. You can create directories containing each a flake.nix that correspond to different sets of packages. If you are familiar with Conda, using Nix in this way is similar to having multiple Conda environments. If your favorite package is not available with Nix, contact us using the helpdesk@ email.
2.2 Installing via Conda (Windows, Linux)
Warning: For Linux users, the Nix package manager is preferred, as it is more reliable and faster than Conda.
First, install Anaconda or the more minimalistic Miniconda. After installing either Anaconda or Miniconda, open a new terminal (also known as command line, console, or shell and denoted here as lines starting with $) and verify the following command works: $ conda
Executing just conda should print the help of the conda command. If your shell does not find the conda command, make sure that the Conda binaries are in your $PATH. If $ echo $PATH does not show the Conda directories, add them: execute $ export PATH=$HOME/miniconda3/bin:$PATH if you installed Conda into ~/miniconda3. Controllers for third-party devices (e.g. Thorlabs TCube, Lab Brick Digital Attenuator, etc.) that are not shipped with ARTIQ can also be installed with this script. Browse Hydra or s-
ee the list of NDSPs in this manual to find the names of the corresponding packages, and list them at the beginning of the script. Set up the Conda channel and install ARTIQ into a new Conda environment: $ conda config --prepend channels https://conda.m-labs.hk/artiq $ conda config --append channels conda-forge $ conda create -n artiq artiq
Note: The board-specific files containing bitstream and firmware for the FPGA board can be obtained through AFWS, and are only required when flashing. Controllers for third-party devices (e.g. Thorlabs TCube, Lab Brick Digital Attenuator, etc.) that are not shipped with ARTIQ can also be installed with Conda. Browse Hydra or see the list of NDSPs in this manual to find the names of the corresponding packages.
Note: On Windows, if the last command that creates and installs the ARTIQ environment fails with an error similar to “seeking backwards is not allowed”, try to re-run the command with admin rights.
Note: For commercial use you might need a license for Anaconda/Miniconda or for using the Anaconda package channel. Miniforge might be an alternative in a commercial environment as it does not include the Anaconda package channel by default. If you want to use Anaconda/Miniconda/Miniforge in a commercial environment, please check the license and the latest terms of service.
After the installation, activate the newly created environment by name.

2.2. Installing via Conda (Windows, Linux)

5

ARTIQ Documentation, Release 7.8180.21c6f57
$ conda activate artiq
This activation has to be performed in every new shell you open to make the ARTIQ tools from that environment available.
Note: Some ARTIQ examples also require matplotlib and numba, and they must be installed manually for running those examples. They are available in Conda.
2.3 Upgrading ARTIQ (with Nix)
Run $ nix profile upgrade if you installed ARTIQ into your user profile. If you used a flake.nix shell environment, make a back-up copy of the flake.lock file to enable rollback, then run $ nix flake update and re-enter $ nix shell. To rollback to the previous version, respectively use $ nix profile rollback or restore the backed-up version of the flake.lock file. You may need to reflash the gateware and firmware of the core device to keep it synchronized with the software.
2.4 Upgrading ARTIQ (with Conda)
When upgrading ARTIQ or when testing different versions it is recommended that new Conda environments are created instead of upgrading the packages in existing environments. Keep previous environments around until you are certain that they are not needed anymore and a new environment is known to work correctly. To install the latest version, just select a different environment name and run the installation command again. Switching between Conda environments using commands such as $ conda deactivat-
e artiq-6 and $ conda activate artiq-5 is the recommended way to roll back to previous versions of ARTIQ. You may need to reflash the gateware and firmware of the core device to keep it synchronized with the software. You can list the environments you have created using: $ conda env list
2.5 Flashing gateware and firmware into the core device
Note: If you have purchased a pre-assembled system from M-Labs or QUARTIQ, the gateware and firmware are already flashed and you can skip those steps, unless you want to replace them with a different version of ARTIQ.
You need to write three binary images onto the FPGA board: 1. The FPGA gateware bitstream 2. The bootloader 3. The ARTIQ runtime or satellite manager

6

Chapter 2. Installing ARTIQ

ARTIQ Documentation, Release 7.8180.21c6f57
2.5.1 Installing OpenOCD
Note: This version of OpenOCD is not applicable to Kasli-SoC.
OpenOCD can be used to write the binary images into the core device FPGA board’s flash memory. With Nix, add aqmain.openocd-bscanspi to the shell packages. Be careful not to add pkgs.openocd instead - this would install OpenOCD from the NixOS package collection, which does not support ARTIQ boards. With Conda, install openocd as follows: $ conda install -c m-labs openocd
2.5.2 Configuring OpenOCD
Note: These instructions are not applicable to Kasli-SoC.
Some additional steps are necessary to ensure that OpenOCD can communicate with the FPGA board. On Linux, first ensure that the current user belongs to the plugdev group (i.e. plugdev shown when you run $ groups). If it does not, run $ sudo adduser $USER plugdev and re-login. If you installed OpenOCD on Linux using Nix, use the which command to determine the path to OpenOCD, and then copy the udev rules: $ which openocd /nix/store/2bmsssvk3d0y5hra06pv54s2324m4srs-openocd-mlabs-0.10.0/bin/openocd $-
 sudo cp /nix/store/2bmsssvk3d0y5hra06pv54s2324m4srs-openocd-mlabs-0.10.0/share/openocd/ →contrib/60-openocd.rules /etc/udev/rules.d $ sudo udevadm trigger
NixOS users should of course configure OpenOCD through /etc/nixos/configuration.nix instead. If you installed OpenOCD on Linux using Conda and are using the Conda environment artiq, then execute the statements below. If you are using a different environment, you will have to replace artiq with the name of your environment: $ sudo cp ~/.conda/envs/artiq/share/openocd/contrib/60-openocd.rules /etc/udev/rules.d $ sudo udevadm trigger
On Windows, a third-party tool, Zadig, is necessary. Use it as follows: 1. Make sure the FPGA board’s JTAG USB port is connected to your computer. 2. Activate Options → List All Devices. 3. Select the “Digilent Adept USB Device (Interface 0)” or “FTDI Quad-RS232 HS” (or similar) device from the drop-down list. 4. Select WinUSB from the spinner list. 5. Click “Install Driver” or “Replace Driver”.
You may need to repeat these steps every time you plug the FPGA board into a port where it has not been plugged into previously on the same system.

2.5. Flashing gateware and firmware into the core device

7

ARTIQ Documentation, Release 7.8180.21c6f57
2.5.3 Obtaining the board binaries
If you have an active firmware subscription with M-Labs or QUARTIQ, you can obtain firmware that corresponds to the currently installed version of ARTIQ using AFWS (ARTIQ firmware service). One year of subscription is included with most hardware purchases. You may purchase or extend firmware subscriptions by writing to the sales@ email. Run the command:
$ afws_client [username] build [afws_directory] [variant]
Replace [username] with the login name that was given to you with the subscription, [variant] with the name of your system variant, and [afws_directory] with the name of an empty directory, which will be created by the command if it does not exist. Enter your password when prompted and wait for the build (if applicable) and download to finish. If you experience issues with the AFWS client, write to the helpdesk@ email. Without a subscription, you may build the firmware yourself from the open sourc-
e code. See the section Developing ARTIQ.
2.5.4 Writing the flash
Then, you can write the flash: • For Kasli:
$ artiq_flash -d [afws_directory]
The JTAG adapter is integrated into the Kasli board; for flashing (and debugging) you simply need to connect your computer to the micro-USB connector on the Kasli front panel.
• For Kasli-SoC:
$ artiq_coremgmt [-D 192.168.1.75] config write -f boot [afws_directory]/boot.bin
If the Kasli-SoC won’t boot due to corrupted firmware and artiq_coremgmt cannot access it, extract the SD card and replace boot.bin manually.
• For the KC705 board:
$ artiq_flash -t kc705 -d [afws_directory]
The SW13 switches need to be set to 00001.
2.6 Setting up the core device IP networking
For Kasli, insert a SFP/RJ45 transceiver (normally included with purchases from M-Labs and QUARTIQ) into the SFP0 port and connect it to an Ethernet port in your network. If the port is 10Mbps or 100Mbps and not 1000Mbps, make sure that the SFP/RJ45 transceiver supports the lower rate. Many SFP/RJ45 transceivers only support the 1000Mbps rate. If you do not have a SFP/RJ45 transceiver that supports 10Mbps and 100Mbps rates, you may instead use a gigabit Ethernet switch in the middle to perform rat-
e conversion. You can also insert other types of SFP transceivers into Kasli if you wish to use it directly in e.g. an optical fiber Ethernet network. If you purchased a Kasli device from M-Labs, it usually comes with the IP address 192.168.1.75. Once you can reach this IP, it can be changed with:

8

Chapter 2. Installing ARTIQ

ARTIQ Documentation, Release 7.8180.21c6f57

$ artiq_coremgmt -D 192.168.1.75 config write -s ip [new IP]
and then reboot the device (with artiq_flash start or a power cycle). In other cases, install OpenOCD as before, and flash the IP (and, if necessary, MAC) addresses directly:
$ artiq_mkfs flash_storage.img -s mac xx:xx:xx:xx:xx:xx -s ip xx.xx.xx.xx $ artiq_flash -t [board] -V [variant] -f flash_storage.img storage start
For Kasli devices, flashing a MAC address is not necessary as they can obtain it from their EEPROM. Check that you can ping the device. If ping fails, check that the Ethernet link LED is ON - on Kasli, it is the LED next to the SFP0 connector. As a next step, look at the messages emitted on the UART during boot. Use a program such as flterm or PuTTY to connect to the device’s serial port at 115200bps 8-N-1 and reboot the device. On Kasli, the serial port is on FTDI channel 2 with v1.1 hardware (wi-
th channel 0 being JTAG) and on FTDI channel 1 with v1.0 hardware. If you want to use IPv6, the device also has a link-local address that corresponds to its EUI-64, and an additional arbitrary IPv6 address can be defined by using the ip6 configuration key. All IPv4 and IPv6 addresses can be used at the same time.

2.7 Miscellaneous configuration of the core device
Those steps are optional. The core device usually needs to be restarted for changes to take effect. • Load the idle kernel
The idle kernel is the kernel (some piece of code running on the core device) which the core device runs whenever it is not connected to a PC via Ethernet. This kernel is therefore stored in the core device configuration flash storage. To flash the idle kernel, first compile the idle experiment. The idle experiment’s run() method must be a kernel: it must be decorated with the @kernel decorator (see next topic for more information about kernels). Since the core device is not connected to the PC, R-
PCs (calling Python code running on the PC from the kernel) are forbidden in the idle experiment. Then write it into the core device configuration flash storage:
$ artiq_compile idle.py $ artiq_coremgmt config write -f idle_kernel idle.elf

Note: You can find more information about how to use the artiq_coremgmt utility on the Utilities page.

• Load the startup kernel
The startup kernel is executed once when the core device powers up. It should initialize DDSes, set up TTL directions, etc. Proceed as with the idle kernel, but using the startup_kernel key in the artiq_coremgmt command.
For DRTIO systems, the startup kernel should wait until the desired destinations (including local RTIO) are up, using artiq.coredevice.Core.get_rtio_destination_status().
• Load the DRTIO routing table
If you are using DRTIO and the default routing table (for a star topology) is not suitable to your needs, prepare and load a different routing table. See Using DRTIO.
• Select the RTIO clock source (KC705 and Kasli)
The KC705 may use either an external clock signal, or its internal clock with external frequency or internal crystal reference. The clock is selected at power-up. Setting the RTIO clock source to “ext0_bypass” would bypass the Si5324 synthesiser, requiring that an input clock be present. To select the source, use one of these commands:

2.7. Miscellaneous configuration of the core device

9

ARTIQ Documentation, Release 7.8180.21c6f57
$ artiq_coremgmt config write -s rtio_clock int_125 # internal 125MHz clock (default) $ artiq_coremgmt config write -s rtio_clock ext0_bypass # external clock (bypass)
Other options include: • ext0_synth0_10to125 - external 10MHz reference clock used by Si5324 to synthesize a 125MHz RTIO clock, • ext0_synth0_100to125 - exteral 100MHz reference clock used by Si5324 to synthesize a 125MHz RTIO clock, • ext0_synth0_125to125 - exteral 125MHz reference clock used by Si5324 to synthesize a 125MHz RTIO clock, • int_100 - internal crystal reference is used by Si5324 to synthesize a 100MHz RTIO clock, • int_150 - internal crystal reference is used by Si5324 to synthesize-
 a 150MHz RTIO clock. • ext0_bypass_125 and ext0_bypass_100 - explicit aliases for ext0_bypass.
Availability of these options depends on the board and their configuration - specific setting may or may not be supported.

10

Chapter 2. Installing ARTIQ

CHAPTER
THREE
DEVELOPING ARTIQ
Warning: This section is only for software or FPGA developers who want to modify ARTIQ. The steps described here are not required if you simply want to run experiments with ARTIQ. If you purchased a system from M-Labs or QUARTIQ, we normally provide board binaries for you.
The easiest way to obtain an ARTIQ development environment is via the Nix package manager on Linux. The Nix system is used on the M-Labs Hydra server to build ARTIQ and its dependencies continuously; it ensures that all build instructions are up-to-date and allows binary packages to be used on developers’ machines, in particular for large tools such as the Rust compiler. ARTIQ itself does not depend on Nix, and it is also possible to compile everything from source (look into the flake.nix file and-
/or nixpkgs, and run the commands manually) - but Nix makes the process a lot easier.
• Download Vivado from Xilinx and install it (by running the official installer in a FHS chroot environment if using NixOS; the ARTIQ flake provides such an environment). If you do not want to write to /opt, you can install it in a folder of your home directory. The “appropriate” Vivado version to use for building the bitstream can vary. Some versions contain bugs that lead to hidden or visible failures, others work fine. Refer to Hydra and/or the flake.nix file from the ARTIQ repository in order -
to determine which version is used at M-Labs. If the Vivado GUI installer crashes, you may be able to work around the problem by running it in unattended mode with a command such as ./xsetup -a XilinxEULA,3rdPartyEULA,WebTalkTerms -b Install -e 'Vitis Unified Software Platform' -l /opt/Xilinx/.
• During the Vivado installation, uncheck Install cable drivers (they are not required as we use better and open source alternatives).
• Install the Nix package manager, version 2.4 or later. Prefer a single-user installation for simplicity. • If you did not install Vivado in its default location /opt, clone the ARTIQ Git repository and edit flake.nix
accordingly. • Enable flakes in Nix by e.g. adding experimental-features = nix-command flakes to nix.conf (for
example ~/.config/nix/nix.conf). • Enter the development shell by running nix develop git+https://github.com/m-labs/artiq.git\?
ref=release-7, or alternatively by cloning the ARTIQ Git repository and running nix develop at the root (where flake.nix is). • You can then build the firmware and gateware with a command such as $ python -m artiq.gateware. targets.kasli. If you are using a JSON system description file, use $ python -m artiq.gateware. targets.kasli_generic file.json. • Flash the binaries into the FPGA board with a command such as $ artiq_flash --srcbuild -d artiq_kasli/<your_variant>. You need to configure OpenOCD-
 as explained in the user section. OpenOCD is already part of the flake’s development environment.
11

ARTIQ Documentation, Release 7.8180.21c6f57
• Check that the board boots and examine the UART messages by running a serial terminal program, e.g. $ flterm /dev/ttyUSB1 (flterm is part of MiSoC and installed in the flake’s development environment). Leave the terminal running while you are flashing the board, so that you see the startup messages when the board boots immediately after flashing. You can also restart the board (without reflashing it) with $ artiq_flash start.
• The communication parameters are 115200 8-N-1. Ensure that your user has access to the serial device (e.g. by adding the user account to the dialout group).
Warning: Nix will make a read-only copy of the ARTIQ source to use in the shell environment. Therefore, any modifications that you make to the source after the shell is started will not be taken into account. A solution applicable to ARTIQ (and several other Python packages such as Migen and MiSoC) is to prepend the ARTIQ source directory to the PYTHONPATH environment variable after entering the shell. If you want this to be done by default, edit the devShell section of flake.nix.

12

Chapter 3. Developing ARTIQ

CHAPTER
FOUR
RELEASE NOTES
4.1 ARTIQ-7
Highlights: • New hardware support: – Kasli-SoC, a new EEM carrier based on a Zynq SoC, enabling much faster kernel execution (see: https://arxiv.org/abs/2111.15290). – DRTIO support on Zynq-based devices (Kasli-SoC and ZC706). – DRTIO support on KC705. – HVAMP_8CH 8 channel HV amplifier for Fastino / Zotinos – Almazny mezzanine board for Mirny – Phaser: improved documentation, exposed the DAC coarse mixer and sif_sync, exposed upconverter calibration and enabling/disabling of upconverter LO & RF -
outputs, added helpers to align Phaser updates to the RTIO timeline (get_next_frame_mu()). – Urukul: get(), get_mu(), get_att(), and get_att_mu() functions added for AD9910 and AD9912. • Softcore targets now use the RISC-V architecture (VexRiscv) instead of OR1K (mor1kx). • Gateware FPU is supported on KC705 and Kasli 2.0. • Faster compilation for large arrays/lists. • Faster exception handling. • Several exception handling bugs fixed. • Support for a simpler shared library system with faster call-
s into the runtime. This is only used by the NAC3 compiler (nac3ld) and improves RTIO output performance (test_pulse_rate) by 9-10%. • Moninj improvements: - Urukul monitoring and frequency setting (through dashboard) is now supported. - Core device moninj is now proxied via the aqctl_moninj_proxy controller. • The configuration entry rtio_clock supports multiple clocking settings, deprecating the usage of compile-time options. • Added support for 100MHz RTIO clock in DRTIO. • Previously detected -
RTIO async errors are reported to the host after each kernel terminates and a warning is logged. The warning is additional to the one already printed in the core device log immediately upon detection of the error. • Extended Kasli gateware JSON description with configuration for SPI over DIO.
13

ARTIQ Documentation, Release 7.8180.21c6f57
• TTL outputs can be now configured to work as a clock generator from the JSON. • On Kasli, the number of FIFO lanes in the scalable events dispatcher (SED) can now be configured in the JSON. • artiq_ddb_template generates edge-counter keys that start with the key of the corresponding TTL device (e.g.
ttl_0_counter for the edge counter on TTL device ttl_0). • artiq_master now has an --experiment-subdir option to scan only a subdirectory of the repository when
building the list of experiments. • Experiments can now be submitted by-content. • The master can now optionally log all experiments submitted into a CSV file. • Removed worker DB warning for writing a dataset that is also in the archive. • Experiments can now call scheduler.check_termination() to test if the user has requested graceful termi-
nation. • ARTIQ command-line programs and controllers now exit cleanly on Ctrl-C. • artiq_coremgmt reboot now reloads gateware as well, providing a more thorough and reliable device reset
(7-series FPGAs only). • Firmware and gateware can now be built on-demand on the M-Labs server using afws_client (subscribers
only). Self-compilation remains possible. • Easier-to-use packaging via Nix Flakes. • Python 3.10 support (experimental). Breaking changes: • Due to the new RISC-V CPU, the device database entry for the core device needs to be updated. The target
parameter needs to be set to rv32ima for Kasli 1.x and to rv32g for all other boards. Freshly generated device database templates already contain this update. • Updated Phaser-Upconverter default frequency 2.875 GHz. The new default uses the target PFD frequency of the hardware design. • Phaser.init() now disables all Kasli-oscillators. This avoids full power RF output being generated for some configurations. • Phaser: fixed coarse mixer frequency configuration • Mirny: Added extra delays in ADF53-
56.sync(). This avoids the need of an extra delay before calling ADF5356. init(). • The deprecated set_dataset(..., save=...) is no longer supported. • The PCA9548 I2C switch class was renamed to I2CSwitch, to accommodate support for PCA9547, and possibly other switches in future. Readback has been removed, and now only one channel per switch is supported.
4.2 ARTIQ-6
Highlights: • New hardware support: – Phaser, a quad channel 1GS/s RF generator card with dual IQ upconverter and dual 5MS/s ADC and FPGA.

14

Chapter 4. Release notes

ARTIQ Documentation, Release 7.8180.21c6f57
– Zynq SoC core device (ZC706), enabling kernels to run on 1 GHz CPU core with a floating-point unit for faster computations. This currently requires an external repository (https://git.m-labs.hk/m-labs/ artiq-zynq).
– Mirny 4-channel wide-band PLL/VCO-based microwave frequency synthesiser – Fastino 32-channel, 3MS/s per channel, 16-bit DAC EEM – Kasli 2.0, an improved core device with 12 built-in EEM slots, faster FPGA, 4 SFPs, and high-precision
clock recovery circuitry for DRTIO (to be supported in ARTIQ-7). • ARTIQ Python (core device kernels):
– Multidimensional arrays are now available on the core device, using NumPy syntax. Elementwise operations (e.g. +, /), matrix multiplication (@) and multidimensional indexing are supported; slices and views are not yet.
– Trigonometric and other common math functions from NumPy are now available on the core device (e.g. numpy.sin), both for scalar arguments and implicitly broadcast across multidimensional arrays.
– Failed assertions now raise AssertionErrors instead of aborting kernel execution. • Performance improvements:
– SERDES TTL inputs can now detect edges on pulses that are shorter than the RTIO period (https: //github.com/m-labs/artiq/issues/1432)
– Improved performance for kernel RPC involving list and array. • Coredevice SI to mu conversions now always return valid codes, or raise a ValueError. • Zotino now exposes voltage_to_mu() • ad9910:
– The maximum amplitude scale factor is now 0x3fff (was 0x3ffe before). – The default single-tone profile is now 7 (was 0). – Added option to set_mu() that affects the ASF, FTW and POW registers instead of the single-tone
profile register. • Mirny now supports HW revision independent, human readable clk_sel parameters: “XO”, “SMA”, and
“MMCX”. Passing an integer is backwards compatible. • Dashboard:
– Applets now restart if they are running and a ccb call changes their spec – A “Quick Open” dialog to open experiments by typing part of their name can be brought up Ctrl-P
(Ctrl+Return to immediately submit the selected entry with the default arguments). – The Applets dock now has a context menu command to quickly close all open applets (shortcut: Ctrl-
Alt-W). • Experiment results are now always saved to HDF5, even if run() fails. • Core device: panic_reset 1 now correctly resets the kernel CPU as well if communication CPU panic occurs. • NumberValue accepts a type parameter specifying the output as int or float • A parameter --identifier-str has been added to many targets to aid with reproducible builds. • Python 3.7 support in Conda packages. • kasli_generic JSON descriptions are now validated against a schema. Description defaults have moved -
from
Python to the schema. Warns if ARTIQ version is too old.

4.2. ARTIQ-6

15

ARTIQ Documentation, Release 7.8180.21c6f57

Breaking changes:
• artiq_netboot has been moved to its own repository at https://git.m-labs.hk/m-labs/artiq-netboot
• Core device watchdogs have been removed.
• The ARTIQ compiler now implements arrays following NumPy semantics, rather than as a thin veneer around lists. Most prior use cases of NumPy arrays in kernels should work unchanged with the new implementation, but the behavior might differ slightly in some cases (for instance, non-rectangular arrays are not currently supported).
• quamash has been replaced with qasync.
• Protocols are updated to use device endian.
• Analyzer dump format includes a byte for device endianness.
• To support variable numbers of Urukul cards in the future, the artiq.coredevice.suservo.SUServo constructor now accepts two device name lists, cpld_devices and dds_devices, rather than four individual arguments.
• Experiment classes with underscore-prefixed names are now ignored when artiq_client determines which experiment to submit (consistent with artiq_run).

4.3 ARTIQ-5
Highlights: • Performance improvements: – Faster RTIO event submission (1.5x improvement in pulse rate test) See: https://github.com/m-labs/ artiq/issues/636 – Faster compilation times (3 seconds saved on kernel compilation time on a typical medium-size experiment) See: https://github.com/m-labs/artiq/commit/611bcc4db4ed604a32d9678623617cd50e968cbf • Improved packaging and build system: – new continuous integration/delivery infrastructure based on Nix and Hydra, providing reproducibility, speed an-
d independence. – rolling release process (https://github.com/m-labs/artiq/issues/1326). – firmware, gateware and device database templates are automatically built for all supported Kasli variants. – new JSON description format for generic Kasli systems. – Nix packages are now supported. – many Conda problems worked around. – controllers are now out-of-tree. – split packages that enable lightweight applications that communicate with ARTIQ, e.g. controllers running on non-x86 single-board computers-
. • Improved Urukul support: – AD9910 RAM mode. – Configurable refclk divider and PLL bypass. – More reliable phase synchronization at high sample rates. – Synchronization calibration data can be read from EEPROM.

16

Chapter 4. Release notes

ARTIQ Documentation, Release 7.8180.21c6f57

• A gateware-level input edge counter has been added, which offers higher throughput and increased flexibility over the usual TTL input PHYs where edge timestamps are not required. See artiq.coredevice.edge_counter for the core device driver and artiq.gateware.rtio.phy.edge_counter/ artiq.gateware.eem.DIO. add_std for the gateware components.
• With DRTIO, Siphaser uses a better calibration mechanism. See: https://github.com/m-labs/artiq/commit/ cc58318500ecfa537abf24127f2c22e8fe66e0f8
• Schedule updates can be sent to influxdb (artiq_influxdb_schedule).
• Experiments can now programatically set their default pipeline, priority, and flush flag.
• List datasets can now be efficiently appended to from experiments using artiq.language.environment. HasEnvironment.append_to_dataset.
• The core device now supports IPv6.
• To make development easier, the bootloader can receive firmware and secondary FPGA gateware from the network.
• Python 3.7 compatibility (Nix and source builds only, no Conda).
• Various other bugs from 4.0 fixed.
• Preliminary Sayma v2 and Metlino hardware support.
Breaking changes:
• The artiq.coredevice.ad9910.AD9910 and artiq.coredevice.ad9914.AD9914 phase reference timestamp parameters have been renamed to ref_time_mu for consistency, as they are in machine units.
• The controller manager now ignores device database entries without the command key set to facilitate sharing of devices between multiple masters.
• The meaning of the -d/--dir and --srcbuild options of artiq_flash has changed.
• Controllers for third-party devices are now out-of-tree.
• aqctl_corelog now filters log messages below the WARNING level by default. This behavior can be changed using the -v and -q options like the other programs.
• On Kasli the firmware now starts with a unique default MAC address from EEPROM if mac is absent from the flash config.
• The -e/--experiment switch of artiq_run and artiq_compile has been renamed -c/--class-name.
• artiq_devtool has been removed.
• Much of artiq.protocols has been moved to a separate package sipyco. artiq_rpctool has been renamed to sipyco_rpctool.

4.4 ARTIQ-4
4.4.1 4.0
• The artiq.coredevice.ttl drivers no longer track the timestamps of submitted events in software, requiring the user to explicitly specify the timeout for count()/timestamp_mu(). Support for sync() has been dropped. Now that RTIO has gained DMA support, there is no longer a reliable way for the kernel CPU to track the individual events submitted on any one channel. Requiring the timeouts to be specified explicitly ensures consistent API behavior. To make this more convenient, the TTLInOut.gate_*(-
) functions now return the cursor position at the end of the gate, e.g.:

4.4. ARTIQ-4

17

ARTIQ Documentation, Release 7.8180.21c6f57
ttl_input.count(ttl_input.gate_rising(100 * us))
In most situations – that is, unless the timeline cursor is rewound after the respective gate_*() call – simply passing now_mu() is also a valid upgrade path:
ttl_input.count(now_mu())
The latter might use up more timeline slack than necessary, though. In place of TTL(In)Out.sync, the new Core.wait_until_mu() method can be used, which blocks execution until the hardware RTIO cursor reaches the given timestamp:
ttl_output.pulse(10 * us) self.core.wait_until_mu(now_mu())
• RTIO outputs use a new architecture called Scalable Event Dispatcher (SED), which allows building systems with large number of RTIO channels more efficiently. From the user perspective, collision errors become asynchronous, and non- monotonic timestamps on any combination of channels are generally allowed (instead of producing sequence errors). RTIO inputs are not affected.
• The DDS channel number for the NIST CLOCK target has changed. • The dashboard configuration files are now stored one-per-master, keyed by the server address argument and the
notify port. • The master now has a --name argument. If given, the dashboard is labelled with this name rather than the server
address. • artiq_flash targets Kasli by default. Use -t kc705 to flash a KC705 instead. • artiq_flash -m/--adapter has been changed to artiq_flash -V/--variant. • The proxy action of artiq_flash is determined automatically and should not be specified manually anymore. • kc705_dds has been renamed kc705. • The -H/--hw-adapter option of kc705 has been renamed -V/--variant. • SPI masters have been switched from misoc-spi to misoc-spi2. This affects all out-of-tree RTIO core device
drivers using those buses. See the various commits on e.g. the ad53xx driver for an example how to port from the old to the new bus. • The ad5360 coredevice driver has been renamed to ad53xx and the API has changed to better support Zotino. • artiq.coredevice.dds has been renamed to artiq.coredevice.ad9914 and simplified. DDS batch mode is no longer supported. The core_dds device is no longer necessary. • The configuration entry startup_clock is renamed rtio_clock. Switching clocks dynamically (i.-
e. without device restart) is no longer supported. • set_dataset(..., save=True) has been renamed set_dataset(..., archive=True). • On the AD9914 DDS, when switching to PHASE_MODE_CONTINUOUS from another mode, use the returned value of the last set_mu call as the phase offset for PHASE_MODE_CONTINUOUS to avoid a phase discontinuity. This is no longer done automatically. If one phase glitch when entering PHASE_MODE_CONTINUOUS is not an issue, this recommendation can be ignored.

18

Chapter 4. Release notes

ARTIQ Documentation, Release 7.8180.21c6f57

4.5 ARTIQ-3
4.5.1 3.7
No further notes.

4.5.2 3.6
No further notes.

4.5.3 3.5
No further notes.

4.5.4 3.4
No further notes.

4.5.5 3.3
No further notes.

4.5.6 3.2
• To accommodate larger runtimes, the flash layout as changed. As a result, the contents of the flash storage will be lost when upgrading. Set the values back (IP, MAC address, startup kernel, etc.) after the upgrade.

4.5.7 3.1
No further notes.

4.5.8 3.0
• The --embed option of applets is replaced with the environment variable ARTIQ_APPLET_EMBED. The GUI sets this enviroment variable itself and the user simply needs to remove the --embed argument.
• EnvExperiment’s prepare calls prepare for all its children.
• Dynamic __getattr__’s returning RPC target methods are not supported anymore. Controller driver classes must define all their methods intended for RPC as members.
• Datasets requested by experiments are by default archived into their HDF5 output. If this behavior is undesirable, turn it off by passing archive=False to get_dataset.
• seconds_to_mu and mu_to_seconds have become methods of the core device driver (use e.g. self.core. seconds_to_mu()).
• AD9858 DDSes and NIST QC1 hardware are no longer supported.
• The DDS class names and setup options have changed, this requires an update of the device database.

4.5. ARTIQ-3

19

ARTIQ Documentation, Release 7.8180.21c6f57
• int(a, width=b) has been removed. Use int32(a) and int64(a). • The KC705 gateware target has been renamed kc705_dds. • artiq.coredevice.comm_tcp has been renamed artiq.coredevice.comm_kernel, and Comm has been
renamed CommKernel. • The “collision” and “busy” RTIO errors are reported through the log instead of raising exceptions. • Results are still saved when analyze raises an exception. • LinearScan and RandomScan have been consolidated into RangeScan. • The Pipistrello is no longer supported. For a low-cost ARTIQ setup, use either ARTIQ 2.x with Pipistrello, or
the future ARTIQ 4.x with Kasli. Note that the Pipistrello board has also been discontinued by the manufacturer but its design files are freely available. • The device database is now generated by an executable Python script. To migrate an existing database, add device_db = at the beginning, and replace any PYON identifiers ( true, null, . . . ) with their Python equivalents (True, None . . . ). • Controllers are now named aqctl_XXX instead of XXX_controller. • In the device database, the comm dev-
ice has been folded into the core device. Move the “host” argument into the core device, and remove the comm device. • The core device log now contains important information about events such as RTIO collisions. A new controller aqctl_corelog must be running to forward those logs to the master. See the example device databases to see how to instantiate this controller. Using artiq_session ensures that a controller manager is running simultaneously with the master. • Experiments scheduled with the -
“flush pipeline” option now proceed when there are lower-priority experiments in the pipeline. Only experiments at the current (or higher) priority level are flushed. • The PDQ(2/3) driver has been removed and is now being maintained out-of tree at https://github.com/m-labs/ pdq. All SPI/USB driver layers, Mediator, CompoundPDQ and examples/documentation has been moved. • The master now rotates log files at midnight, rather than based on log size. • The results keys start_time and run_time are now-
 stored as doubles of UNIX time, rather than ints. The file names are still based on local time. • Packages are no longer available for 32-bit Windows.
4.6 ARTIQ-2
4.6.1 2.5
No further notes.

20

Chapter 4. Release notes

ARTIQ Documentation, Release 7.8180.21c6f57
4.6.2 2.4
No further notes.
4.6.3 2.3
• When using conda, add the conda-forge channel before installing ARTIQ.
4.6.4 2.2
No further notes.
4.6.5 2.1
No further notes.
4.6.6 2.0
No further notes.
4.6.7 2.0rc2
No further notes.
4.6.8 2.0rc1
• The format of the influxdb pattern file is simplified. The procedure to edit patterns is also changed to modifying the pattern file and calling: artiq_rpctool.py ::1 3248 call scan_patterns (or restarting the bridge) The patterns can be converted to the new format using this code snippet: from artiq.protocols import pyon patterns = pyon.load_file("influxdb_patterns.pyon") for p in patterns: print(p)
• The “GUI” has been renamed the “dashboard”. • When flashing NIST boards, use “-m nist_qcX” or “-m nist_clock” instead of just “-m qcX” or “-m clock” (#290). • Applet command lines now use templates (e.g. $python) instead of formats (e.g. {python}). • On Windows, GUI applications no longer open a console. For debugging purposes, the console messages can
still be displayed by running the GUI applications this way: python3.5 -m artiq.frontend.artiq_browser python3.5 -m artiq.frontend.artiq_dashboard (you may need to replace python3.5 with python) Please always include the console output when reporting a GUI crash.

4.6. ARTIQ-2

21

ARTIQ Documentation, Release 7.8180.21c6f57
• The result folders are formatted “%Y-%m-%d/%H instead of “%Y-%m-%d/%H-%M”. (i.e. grouping by day and then by hour, instead of by day and then by minute)
• The parent keyword argument of HasEnvironment (and EnvExperiment) has been replaced. Pass the parent as first argument instead.
• During experiment examination (and a fortiori repository scan), the values of all arguments are set to None regardless of any default values supplied.
• In the dashboard’s experiment windows, partial or full argument recomputation takes into account the repository revision field.
• By default, NumberValue and Scannable infer the scale from the unit for common units. • By default, artiq_client keeps the current persist flag on the master. • GUI state files for the browser and the dashboard are stores in “standard” locations for each operating system.
Those are ~/.config/artiq/2/artiq_*.pyon on Linux and C:\Users\<username>\AppData\Local\ m-labs\artiq\2\artiq_*.pyon on Windows 7. • The position of the time cursor is kept across experiments and RTIO resets are manual and explicit (interexperiment seamless handover). • All integers manipulated by kernels are numpy integers (numpy.int32, numpy.int64). If you pass an integer as a RPC argument, the target function receives a numpy type.
4.7 ARTIQ-1
4.7.1 1.3
No further notes.
4.7.2 1.2
No further notes.
4.7.3 1.1
• TCA6424A.set converts the “outputs” value to little-endian before programming it into the registers.
4.7.4 1.0
No further notes.

22

Chapter 4. Release notes

ARTIQ Documentation, Release 7.8180.21c6f57
4.7.5 1.0rc4
• setattr_argument and setattr_device add their key to kernel_invariants.
4.7.6 1.0rc3
• The HDF5 format has changed. – The datasets are located in the HDF5 subgroup datasets. – Datasets are now stored without additional type conversions and annotations from ARTIQ, trusting that h5py maps and converts types between HDF5 and python/numpy “as expected”.
• NumberValue now returns an integer if ndecimals = 0, scale = 1 and step is integer.
4.7.7 1.0rc2
• The CPU speed in the pipistrello gateware has been reduced from 83 1/3 MHz to 75 MHz. This will reduce the achievable sustained pulse rate and latency accordingly. ISE was intermittently failing to meet timing (#341).
• set_dataset in broadcast mode no longer returns a Notifier. Mutating datasets should be done with mutate_dataset instead (#345).
4.7.8 1.0rc1
• Experiments (your code) should use from artiq.experiment import * (and not from artiq import * as previously)
• Core device flash storage has moved due to increased runtime size. This requires reflashing the runtime and the flash storage filesystem image or erase and rewrite its entries.
• RTIOCollisionError has been renamed to RTIOCollision • the new API for DDS batches is:
with self.core_dds.batch: ...
with core_dds a device of type artiq.coredevice.dds.CoreDDS. The dds_bus device should not be used anymore. • LinearScan now supports scanning from high to low. Accordingly, its arguments min/max have been renamed to start/stop respectively. Same for RandomScan (even though there direction matters little).

4.7. ARTIQ-1

23

ARTIQ Documentation, Release 7.8180.21c6f57

24

Chapter 4. Release notes

CHAPTER
FIVE
ARTIQ REAL-TIME I/O CONCEPTS
The ARTIQ Real-Time I/O design employs several concepts to achieve its goals of high timing resolution on the nanosecond scale and low latency on the microsecond scale while still not sacrificing a readable and extensible language. In a typical environment two very different classes of hardware need to be controlled. One class is the vast arsenal of diverse laboratory hardware that interfaces with and is controlled from a typical PC. The other is specialized real-time hardware that requires tight -
coupling and a low-latency interface to a CPU. The ARTIQ code that describes a given experiment is composed of two types of “programs”: regular Python code that is executed on the host and ARTIQ kernels that are executed on a core device. The CPU that executes the ARTIQ kernels has direct access to specialized programmable I/O timing logic (part of the gateware). The two types of code can invoke each other and transitions between them are seamless. The ARTIQ kernels do not interface with the real--
time gateware directly. That would lead to imprecise, indeterminate, and generally unpredictable timing. Instead the CPU operates at one end of a bank of FIFO (first-in-first-out) buffers while the real-time gateware at the other end guarantees the all or nothing level of excellent timing precision. A FIFO for an output channel hold timestamps and event data describing when and what is to be executed. The CPU feeds events into this FIFO. A FIFO for an input channel contains timestamps and event da-
ta for events that have been recorded by the real-time gateware and are waiting to be read out by the CPU on the other end.
5.1 The timeline
The set of all input and output events on all channels constitutes the timeline. A high resolution wall clock (rtio_counter) counts clock cycles and causes output events to be executed when their timestamp matches the clock and input events to be recorded and stamped with the current clock value accordingly. The kernel runtime environment maintains a timeline cursor (called now) used as the timestamp when output events are submitted to the FIFOs. This timeline cursor can be moved forward or backwa-
rd on the timeline relative to its current value using artiq.language.core.delay() and artiq.language.core.delay_mu(), the later being a delay given in machine units as opposed to SI units. The absolute value of now on the timeline can be retrieved using artiq.language.core.now_mu() and it can be set using artiq.language.core.at_mu(). RTIO timestamps, the timeline cursor, and the rtio_counter wall clock are all relative to the core device startup/boot time. The wall clock keeps running across expe-
riments. Absolute timestamps can be large numbers. They are represented internally as 64-bit integers with a resolution of typically a nanosecond and a range of hundreds of years. Conversions between such a large integer number and a floating point representation can cause loss of precision through cancellation. When computing the difference of absolute timestamps, use self.core.mu_to_seconds(t2-t1), not self.core.mu_to_seconds(t2)-self.core. mu_to_seconds(t1) (see artiq.coredevice.Core.mu_to_seco-
nds()). When accumulating time, do it in machine units and not in SI units, so that rounding errors do not accumulate. The following basic example shows how to place output events on the timeline. It emits a precisely timed 2 µs pulse:
25

ARTIQ Documentation, Release 7.8180.21c6f57

ttl.on() delay(2*us) ttl.off()

The device ttl represents a single digital output channel (artiq.coredevice.ttl.TTLOut). The artiq. coredevice.ttl.TTLOut.on() method places an rising edge on the timeline at the current cursor position (now). Then the cursor is moved forward 2 µs and a falling edge event is placed at the new cursor position. Then later, when the wall clock reaches the respective timestamps the RTIO gateware executes the two events.
The following diagram shows what is going on at the different levels of the software and gateware stack (assuming one machine unit of time is 1 ns):

kernel

on() delay(2*us) off()

now

7000

9000

slack

4400

5800

rtio_counter ttl

2600

3200

7000

9000

2µs

The sequence is exactly equivalent to: ttl.pulse(2*us)

The artiq.coredevice.ttl.TTLOut.pulse() method advances the timeline cursor (using delay()) while other methods such as artiq.coredevice.ttl.TTLOut.on(), artiq.coredevice.ttl.TTLOut.off(), artiq. coredevice.ad9914.set(). The latter are called zero-duration methods.

5.2 Underflow exceptions
An RTIO event must always be programmed with a timestamp in the future. In other words, the timeline cursor now must be after the current wall clock rtio_counter: the past can not be altered. The following example tries to place an rising edge event on the timeline. If the current cursor is in the past, an artiq.coredevice.exceptions. RTIOUnderflow exception is thrown. The experiment attempts to handle the exception by moving the cursor forward and repeating the programming of the rising edge:
try: ttl.on()
except RTIOUnderflow: # try again at the next mains cycle delay(16.6667*ms) ttl.on()

26

Chapter 5. ARTIQ Real-Time I/O Concepts

ARTIQ Documentation, Release 7.8180.21c6f57

kernel now_mu
slack

on() RTIOUnderflow
t0
exception

delay()

on() t1

forbidden

<0

>0

allowed

rtio_counter

t0

tll

> t0

< t1

t1

To track down RTIOUnderflows in an experiment there are a few approaches:
• Exception backtraces show where underflow has occurred while executing the code.
• The integrated logic analyzer shows the timeline context that lead to the exception. The analyzer is always active and supports plotting of RTIO slack. RTIO slack is the difference between timeline cursor and wall clock time (now - rtio_counter).

5.3 Sequence errors
A sequence error happens when the sequence of coarse timestamps cannot be supported by the gateware. For example, there may have been too many timeline rewinds.
Internally, the gateware stores output events in an array of FIFO buffers (the “lanes”) and the timestamps in each lane must be strictly increasing. If an event with a decreasing or equal timestamp is submitted, the gateware selects the next lane, wrapping around if the final lane is reached. If this lane also contains an event with a timestamp beyond the one being submitted then a sequence error occurs. See this issue for a real-life example of how this works.
Notes:
• Strictly increasing timestamps never cause sequence errors.
• Configuring the gateware with more lanes for the RTIO core reduces the frequency of sequence errors.
• The number of lanes is a hard limit on the number of simultaneous RTIO output events.
• Whether a particular sequence of timestamps causes a sequence error or not is fully deterministic (starting from a known RTIO state, e.g. after a reset). Adding a constant offset to the whole sequence does not affect the result.
• Zero-duration methods (such as artiq.coredevice.ttl.TTLOut.on()) do not advance the timeline and so will consume additional lanes if they are scheduled simultaneously. Adding a tiny delay will prevent this (e.g. delay_mu(np.int64(self.core.ref_multiplier)), at least one coarse rtio cycle).
The offending event is discarded and the RTIO core keeps operating.
This error is reported asynchronously via the core device log: for performance reasons with DRTIO, the CPU does not wait for an error report from the satellite after writing an event. Therefore, it is not possible to raise an exception precisely.

5.3. Sequence errors

27

ARTIQ Documentation, Release 7.8180.21c6f57
5.4 Collisions
A collision happens when more than one event is submitted on a given channel with the same coarse timestamp, and that channel does not implement replacement behavior or the fine timestamps are different. Coarse timestamps correspond to the RTIO system clock (typically around 125MHz) whereas fine timestamps correspond to the RTIO SERDES clock (typically around 1GHz). Different channels may have different ratios between the coarse and fine timestamp clock frequencies. The offending event is discarde-
d and the RTIO core keeps operating. This error is reported asynchronously via the core device log: for performance reasons with DRTIO, the CPU does not wait for an error report from the satellite after writing an event. Therefore, it is not possible to raise an exception precisely.
5.5 Busy errors
A busy error happens when at least one output event could not be executed because the channel was already busy executing a previous event. The offending event was discarded. This error is reported asynchronously via the core device log.
5.6 Input channels and events
Input channels detect events, timestamp them, and place them in a buffer for the experiment to read out. The following example counts the rising edges occurring during a precisely timed 500 ns interval. If more than 20 rising edges are received, it outputs a pulse:
if input.count(input.gate_rising(500*ns)) > 20: delay(2*us) output.pulse(500*ns)
The artiq.coredevice.ttl.TTLInOut.count() method of an input channel will often lead to a situation of negative slack (timeline cursor now smaller than the current wall clock rtio_counter): The artiq.coredevice.ttl. TTLInOut.gate_rising() method leaves the timeline cursor at the closing time of the gate. count() must necessarily wait until the gate closing event has actually been executed, at which point rtio_counter > now: count() synchronizes timeline cursor (now) and wall clock (rtio_counter). -
In these situations, a delay() is necessary to re-establish positive slack so that further output events can be placed. Similar situations arise with methods such as artiq.coredevice.ttl.TTLInOut.sample_get() and artiq. coredevice.ttl.TTLInOut.watch_done().

28

Chapter 5. ARTIQ Real-Time I/O Concepts

kernel gate_rising() now_mu

ARTIQ Documentation, Release 7.8180.21c6f57

count()

delay()

pulse()

input gate output
5.7 Overflow exceptions
The RTIO input channels buffer input events received while an input gate is open, or at certain points in time when using the sampling API (artiq.coredevice.ttl.TTLInOut.sample_input()). The events are kept in a FIFO until the CPU reads them out via e.g. artiq.coredevice.ttl.TTLInOut.count(), artiq.coredevice.ttl.TTLInOut. timestamp_mu() or artiq.coredevice.ttl.TTLInOut.sample_get(). If the FIFO is full and another event is coming in, this causes an overflow condition. The condition is converted i-
nto an artiq.coredevice.exceptions. RTIOOverflow exception that is raised on a subsequent invocation of one of the readout methods (e.g. count(), timestamp_mu(), sample_get()).
5.8 Seamless handover
The timeline cursor persists across kernel invocations. This is demonstrated in the following example where a pulse is split across two kernels:
def run(): k1() k2()
@kernel def k1():
ttl.on() delay(1*s)
@kernel def k2():
ttl.off()
Here, run() calls k1() which exits leaving the cursor one second after the rising edge and k2() then submits a falling edge at that position.

5.7. Overflow exceptions

29

ARTIQ Documentation, Release 7.8180.21c6f57

kernel k1: on() now

k1: delay(dt) t

k1->k2 swap t+dt

k2: off()

rtio_counter ttl

t

t+dt

dt

5.9 Synchronization

The seamless handover of the timeline (cursor and events) across kernels and experiments implies that a kernel can exit long before the events it has submitted have been executed. If a previous kernel sets timeline cursor far in the future this effectively locks the system.
When a kernel should wait until all the events have been executed, use the artiq.coredevice.core.Core. wait_until_mu() with a timestamp after (or at) the last event:

kernel

on()

wait_until_mu(7000)

now

7000

rtio_counter ttl

2000

In many cases, now_mu() will return an appropriate timestamp: self.core.wait_until_mu(now_mu())

7000

5.10 RTIO reset
The seamless handover also means that a kernel is not guaranteed to always be executed with positive slack. An experiment can face any of these circumstances (large positive slack, full FIFOs, or negative slack). Therefore, when switching experiments it can be adequate to clear the RTIO FIFOs and initialize the timeline cursor to “sometime in the near future” using artiq.coredevice.core.Core.reset(). The example idle kernel implements this mechanism. Since it never waits for any input, it will rap-
idly fill the output FIFOs and would produce a large positive slack. To avoid large positive slack and to accommodate for seamless handover the idle kernel will only run when no other experiment is pending and the example will wait before submitting events until there is significant negative slack.

30

Chapter 5. ARTIQ Real-Time I/O Concepts

CHAPTER
SIX
GETTING STARTED WITH THE CORE LANGUAGE
6.1 Connecting to the core device
As a very first step, we will turn on a LED on the core device. Create a file led.py containing the following: from artiq.experiment import *
class LED(EnvExperiment): def build(self): self.setattr_device("core") self.setattr_device("led")
@kernel def run(self):
self.core.reset() self.led.on()
The central part of our code is our LED class, which derives from artiq.language.environment.EnvExperiment. Among other features, EnvExperiment calls our build() method and provides the setattr_device() method that interfaces to the device database to create the appropriate device drivers and make those drivers accessible as self. core and self.led. The kernel() decorator (@kernel) tells the system that the run() method must be compiled for and executed on the core device (instead of being interpr-
eted and executed as regular Python code on the host). The decorator uses self.core internally, which is why we request the core device using setattr_device() like any other. Copy the file device_db.py (containing the device database) from the examples/master folder of ARTIQ into the same directory as led.py (alternatively, you can use the --device-db option of artiq_run). You will probably want to set the IP address of the core device in device_db.py so that the computer can connect to it (it is -
the host parameter of the comm entry). See The device database for more information. The example device database is designed for the nist_clock hardware adapter on the KC705; see FPGA board ports for RTIO channel assignments if you need to adapt the device database to a different hardware platform.
Note: To obtain the examples, you can find where the ARTIQ package is installed on your machine with: python3 -c "import artiq; print(artiq.__path__[0])"
Run your code using artiq_run, which is part of the ARTIQ front-end tools: $ artiq_run led.py
31

ARTIQ Documentation, Release 7.8180.21c6f57
The process should terminate quietly and the LED of the device should turn on. Congratulations! You have a basic ARTIQ system up and running.
6.2 Host/core device interaction (RPC)
A method or function running on the core device (which we call a “kernel”) may communicate with the host by calling non-kernel functions that may accept parameters and may return a value. The “remote procedure call” (RPC) mechanisms handle automatically the communication between the host and the device of which function to call, with which parameters, and what the returned value is. Modify the code as follows:
def input_led_state() -> TBool: return input("Enter desired LED state: ") == "1"
class LED(EnvExperiment): def build(self): self.setattr_device("core") self.setattr_device("led")
@kernel def run(self):
self.core.reset() s = input_led_state() self.core.break_realtime() if s:
self.led.on() else:
self.led.off()
You can then turn the LED off and on by entering 0 or 1 at the prompt that appears:
$ artiq_run led.py Enter desired LED state: 1 $ artiq_run led.py Enter desired LED state: 0
What happens is the ARTIQ compiler notices that the input_led_state() function does not have a @kernel decorator (kernel()) and thus must be executed on the host. When the core device calls it, it sends a request to the host to execute it. The host displays the prompt, collects user input, and sends the result back to the core device, which sets the LED state accordingly. RPC functions must always return a value of the same type. When they return a value that is not None, the compiler should be in-
formed in advance of the type of the value, which is what the -> TBool annotation is for. Without the break_realtime() call, the RTIO events emitted by self.led.on() or self.led.off() would be scheduled at a fixed and very short delay after entering run(). These events would fail because the RPC to input_led_state() can take an arbitrary amount of time and therefore the deadline for submission of RTIO events would have long passed when self.led.on() or self.led.off() are called. The break_realtime-
() call is necessary to waive the real-time requirements of the LED state change. It advances the timeline far enough to ensure that events can meet the submission deadline.

32

Chapter 6. Getting started with the core language

ARTIQ Documentation, Release 7.8180.21c6f57

6.3 Real-time Input/Output (RTIO)
The point of running code on the core device is the ability to meet demanding real-time constraints. In particular, the core device can respond to an incoming stimulus or the result of a measurement with a low and predictable latency. We will see how to use inputs later; first, we must familiarize ourselves with how time is managed in kernels. Create a new file rtio.py containing the following:
from artiq.experiment import *

class Tutorial(EnvExperiment): def build(self): self.setattr_device("core") self.setattr_device("ttl0")
@kernel def run(self):
self.core.reset() self.ttl0.output() for i in range(1000000):
delay(2*us) self.ttl0.pulse(2*us)
In its build() method, the experiment obtains the core device and a TTL device called ttl0 as defined in the device database. In ARTIQ, TTL is used roughly synonymous with “a single generic digital signal” and does not refer to a specific signaling standard or voltage/current levels.
When run(), the experiment first ensures that ttl0 is in output mode and actively driving the device it is connected to. Bidirectional TTL channels (i.e. TTLInOut) are in input (high impedance) mode by default, output-only TTL channels (TTLOut) are always in output mode. There are no input-only TTL channels.
The experiment then drives one million 2 µs long pulses separated by 2 µs each. Connect an oscilloscope or logic analyzer to TTL0 and run artiq_run.py rtio.py. Notice that the generated signal’s period is precisely 4 µs, and that it has a duty cycle of precisely 50%. This is not what you would expect if the delay and the pulse were implemented with register-based general purpose input output (GPIO) that is CPU-controlled. The signal’s period would depend on CPU speed, and overhead from the loop, m-
emory management, function calls, etc, all of which are hard to predict and variable. Any asymmetry in the overhead would manifest itself in a distorted and variable duty cycle.
Instead, inside the core device, output timing is generated by the gateware and the CPU only programs switching commands with certain timestamps that the CPU computes.
This guarantees precise timing as long as the CPU can keep generating timestamps that are increasing fast enough. In case it fails to do that (and attempts to program an event with a timestamp smaller than the current RTIO clock timestamp), a RTIOUnderflow exception is raised. The kernel causing it may catch it (using a regular try... except... construct), or it will be propagated to the host.
Try reducing the period of the generated waveform until the CPU cannot keep up with the generation of switching events and the underflow exception is raised. Then try catching it:
from artiq.experiment import *

def print_underflow(): print("RTIO underflow occured")
6.3. Real-time Input/Output (RTIO)

(continues on next page)
33

ARTIQ Documentation, Release 7.8180.21c6f57
class Tutorial(EnvExperiment): def build(self): self.setattr_device("core") self.setattr_device("ttl0")
@kernel def run(self):
self.core.reset() try:
for i in range(1000000): self.ttl0.pulse(...) delay(...)
except RTIOUnderflow: print_underflow()

(continued from previous page)

6.4 Parallel and sequential blocks
It is often necessary that several pulses overlap one another. This can be expressed through the use of with parallel constructs, in which the events generated by the individual statements are executed at the same time. The duration of the parallel block is the duration of its longest statement.
Try the following code and observe the generated pulses on a 2-channel oscilloscope or logic analyzer:
for i in range(1000000): with parallel: self.ttl0.pulse(2*us) self.ttl1.pulse(4*us) delay(4*us)
ARTIQ can implement with parallel blocks without having to resort to any of the typical parallel processing approaches. It simply remembers the position on the timeline when entering the parallel block and then seeks back to that position after submitting the events generated by each statement. In other words, the statements in the parallel block are actually executed sequentially, only the RTIO events generated by them are scheduled to be executed in parallel. Note that if a statement takes a lot-
 of CPU time to execute (this different from the events scheduled by a statement taking a long time), it may cause a subsequent statement to miss the deadline for timely submission of its events. This then causes a RTIOUnderflow exception to be raised.
Within a parallel block, some statements can be made sequential again using a with sequential construct. Observe the pulses generated by this code:
for i in range(1000000): with parallel: with sequential: self.ttl0.pulse(2*us) delay(1*us) self.ttl0.pulse(1*us) self.ttl1.pulse(4*us) delay(4*us)
Particular care needs to be taken when working with parallel blocks in cases where a large number of RTIO events are generated as it possible to create sequencing errors (RTIO sequence error). Sequence errors do not halt execution of the kernel for performance reasons and instead are reported in the core log. If the aqctl_corelog process has been

34

Chapter 6. Getting started with the core language

ARTIQ Documentation, Release 7.8180.21c6f57

started with artiq_ctlmgr, then these errors will be posted to the master log. However, if an experiment is executed through artiq_run, these errors will not be visible outside of the core log. A sequence error is caused when the scalable event dispatcher (SED) cannot queue an RTIO event due to its timestamp being the same as or earlier than another event in its queue. By default, the SED has 8 lanes which allows parallel events to work without sequence errors in most cases, however if many (>8) e-
vents are queued with conflicting timestamps this error can surface. These errors can usually be overcome by reordering the generation of the events. Alternatively, the number of SED lanes can be increased in the gateware.
6.5 RTIO analyzer
The core device records the real-time I/O waveforms into a circular buffer. It is possible to dump any Python object so that it appears alongside the waveforms using the rtio_log function, which accepts a channel name (i.e. a log target) as the first argument:
from artiq.experiment import *

class Tutorial(EnvExperiment): def build(self): self.setattr_device("core") self.setattr_device("ttl0")
@kernel def run(self):
self.core.reset() for i in range(100):
self.ttl0.pulse(...) rtio_log("ttl0", "i", i) delay(...)
Afterwards, the recorded data can be extracted and written to a VCD file using artiq_coreanalyzer -w rtio.vcd (see: Core device RTIO analyzer tool). VCD files can be viewed using third-party tools such as GtkWave.
6.6 Direct Memory Access (DMA)
DMA allows you to store fixed sequences of pulses in system memory, and have the DMA core in the FPGA play them back at high speed. Pulse sequences that are too fast for the CPU (i.e. would cause RTIO underflows) can still be generated using DMA. The only modification of the sequence that the DMA core supports is shifting it in time (so it can be played back at any position of the timeline), everything else is fixed at the time of recording the sequence. Try this:
from artiq.experiment import *

class DMAPulses(EnvExperiment): def build(self): self.setattr_device("core") self.setattr_device("core_dma")
6.5. RTIO analyzer

(continues on next page)
35

ARTIQ Documentation, Release 7.8180.21c6f57

self.setattr_device("ttl0")

(continued from previous page)

@kernel def record(self):
with self.core_dma.record("pulses"): # all RTIO operations now go to the "pulses" # DMA buffer, instead of being executed immediately. for i in range(50): self.ttl0.pulse(100*ns) delay(100*ns)

@kernel def run(self):
self.core.reset() self.record() # prefetch the address of the DMA buffer # for faster playback trigger pulses_handle = self.core_dma.get_handle("pulses") self.core.break_realtime() while True:
# execute RTIO operations in the DMA buffer # each playback advances the timeline by 50*(100+100) ns self.core_dma.playback_handle(pulses_handle)

36

Chapter 6. Getting started with the core language

CHAPTER
SEVEN
COMPILER
The ARTIQ compiler transforms the Python code of the kernels into machine code executable on the core device. It is invoked automatically when calling a function that uses the @kernel decorator.
7.1 Supported Python features
A number of Python features can be used inside a kernel for compilation and execution on the core device. They include for and while loops, conditionals (if, else, elif), functions, exceptions, and statically typed variables of the following types:
• Booleans • 32-bit signed integers (default size) • 64-bit signed integers (use numpy.int64 to convert) • Double-precision floating point numbers • Lists of any supported types • String constants • User-defined classes, with attributes of any supported types (attributes that are not used anywhere in the kernel
are ignored) For a demonstration of some of these features, see the mandelbrot.py example. When several instances of a user-defined class are referenced from the same kernel, every attribute must have the same type in every instance of the class.
7.2 Remote procedure calls
Kernel code can call host functions without any additional ceremony. However, such functions are assumed to return None, and if a value other than None is returned, an exception is raised. To call a host function returning a value other than None its return type must be annotated using the standard Python syntax, e.g.: def return_four() -> TInt32:
return 4 The Python types correspond to ARTIQ type annotations as follows:
37

ARTIQ Documentation, Release 7.8180.21c6f57

Python NoneType bool int float str list of T NumPy array range numpy.int32 numpy.int64 numpy.float64

ARTIQ TNone TBool TInt32 or TInt64 TFloat TStr TList(T) TArray(T, num_dims) TRange32, TRange64 TInt32 TInt64 TFloat

7.3 Pitfalls
The ARTIQ compiler accepts nearly a strict subset of Python 3. However, by necessity there is a number of differences that can lead to bugs. Arbitrary-length integers are not supported at all on the core device; all integers are either 32-bit or 64-bit. This especially affects calculations that result in a 32-bit signed overflow; if the compiler detects a constant that doesn’t fit into 32 bits, the entire expression will be upgraded to 64-bit arithmetics, however if all constants are small, 32-bit-
 arithmetics will be used even if the result will overflow. Overflows are not detected. The result of calling the builtin round function is different when used with the builtin float type and the numpy. float64 type on the host interpreter; round(1.0) returns an integer value 1, whereas round(numpy.float64(1. 0)) returns a floating point value numpy.float64(1.0). Since both float and numpy.float64 are mapped to the builtin float type on the core device, this can lead to problems in functions marke-
d @portable; the workaround is to explicitly cast the argument of round to float: round(float(numpy.float64(1.0))) returns an integer on the core device as well as on the host interpreter. Empty lists do not have valid list element types, so they cannot be used in the kernel.
7.4 Asynchronous RPCs
If an RPC returns no value, it can be invoked in a way that does not block until the RPC finishes execution, but only until it is queued. (Submitting asynchronous RPCs too rapidly, as well as submitting asynchronous RPCs with arguments that are too large, can still block until completion.) To define an asynchronous RPC, use the @rpc annotation with a flag:
@rpc(flags={"async"}) def record_result(x):
self.results.append(x)

38

Chapter 7. Compiler

ARTIQ Documentation, Release 7.8180.21c6f57

7.5 Additional optimizations
The ARTIQ compiler runs many optimizations, most of which perform well on code that has pristine Python semantics. It also contains more powerful, and more invasive, optimizations that require opt-in to activate.

7.5.1 Fast-math flags
The compiler does not normally perform algebraically equivalent transformations on floating-point expressions, because this can dramatically change the result. However, it can be instructed to do so if all of the following is true:
• Arguments and results will not be not-a-number or infinity values; • The sign of a zero value is insignificant; • Any algebraically equivalent transformations, such as reassociation or replacing division with multiplication by
reciprocal, are legal to perform. If this is the case for a given kernel, a fast-math flag can be specified to enable more aggressive optimization for this specific kernel:
@kernel(flags={"fast-math"}) def calculate(x, y, z):
return x * z + y * z
This flag particularly benefits loops with I/O delays performed in fractional seconds rather than machine units, as well as updates to DDS phase and frequency.

7.5.2 Kernel invariants

The compiler attempts to remove or hoist out of loops any redundant memory load operations, as well as propagate known constants into function bodies, which can enable further optimization. However, it must make conservative assumptions about code that it is unable to observe, because such code can change the value of the attribute, making the optimization invalid.
When an attribute is known to never change while the kernel is running, it can be marked as a kernel invariant to enable more aggressive optimization for this specific attribute.
class Converter: kernel_invariants = {"ratio"}

def __init__(self, ratio=1.0): self.ratio = ratio

@kernel def convert(self, value):
return value * self.ratio ** 2

In the synthetic example above, the compiler will be able to detect that the result of evaluating self.ratio ** 2 never changes and replace it with a constant, removing an expensive floating-point operation.
class Worker: kernel_invariants = {"interval"}

def __init__(self, interval=1.0*us):

(continues on next page)

7.5. Additional optimizations

39

ARTIQ Documentation, Release 7.8180.21c6f57

self.interval = interval

(continued from previous page)

def work(self): # something useful

class Looper: def __init__(self, worker): self.worker = worker

@kernel def loop(self):
for _ in range(100): delay(self.worker.interval / 5.0) self.worker.work()

In the synthetic example above, the compiler will be able to detect that the result of evaluating self.interval / 5.0 never changes, even though it neither knows the value of self.worker.interval beforehand nor can it see through the self.worker.work() function call, and hoist the expensive floating-point division out of the loop, transforming the code for loop into an equivalent of the following:
@kernel def loop(self):
precomputed_delay_mu = self.core.seconds_to_mu(self.worker.interval / 5.0) for _ in range(100):
delay_mu(precomputed_delay_mu) self.worker.work()

40

Chapter 7. Compiler

CHAPTER
EIGHT
GETTING STARTED WITH THE MANAGEMENT SYSTEM
The management system is the high-level part of ARTIQ that schedules the experiments, distributes and stores the results, and manages devices and parameters. The manipulations described in this tutorial can be carried out using a single computer, without any special hardware.
8.1 Starting your first experiment with the master
In the previous tutorial, we used the artiq_run utility to execute our experiments, which is a simple stand-alone tool that bypasses the ARTIQ management system. We will now see how to run an experiment using the master (the central program in the management system that schedules and executes experiments) and the dashboard (that connects to the master and controls it). First, create a folder ~/artiq-master and copy the file device_db.py (containing the device database) found in the examples/master-
 directory from the ARTIQ sources. The master uses those files in the same way as artiq_run. Then create a ~/artiq-master/repository sub-folder to contain experiments. The master scans this repository folder to determine what experiments are available (the name of the folder can be changed using -r). Create a very simple experiment in ~/artiq-master/repository and save it as mgmt_tutorial.py: from artiq.experiment import *
class MgmtTutorial(EnvExperiment): """Management tutorial""" def build(self): pass # no devices used
def run(self): print("Hello World")
Start the master with: $ cd ~/artiq-master $ artiq_master
This last command should not return, as the master keeps running. Now, start the dashboard with the following commands in another terminal: $ cd ~ $ artiq_dashboard
41

ARTIQ Documentation, Release 7.8180.21c6f57

Note: The artiq_dashboard program uses a file called artiq_dashboard.pyon in the current directory to save and restore the GUI state (window/dock positions, last values entered by the user, etc.).
The dashboard should display the list of experiments from the repository folder in a dock called “Explorer”. There should be only the experiment we created. Select it and click “Submit”, then look at the “Log” dock for the output from this simple experiment.
Note: Multiple clients may be connected at the same time, possibly on different machines, and will be synchronized. See the -s option of artiq_dashboard and the --bind option of artiq_master to use the network. Both IPv4 and IPv6 are supported.

8.2 Adding an argument
Experiments may have arguments whose values can be set in the dashboard and used in the experiment’s code. Modify the experiment as follows:
def build(self): self.setattr_argument("count", NumberValue(ndecimals=0, step=1))
def run(self): for i in range(self.count): print("Hello World", i)
NumberValue represents a floating point numeric argument. There are many other types, see artiq.language. environment and artiq.language.scan. Use the command-line client to trigger a repository rescan:
artiq_client scan-repository
The dashboard should now display a spin box that allows you to set the value of the count argument. Try submitting the experiment as before.
8.3 Setting up Git integration
So far, we have used the bare filesystem for the experiment repository, without any version control. Using Git to host the experiment repository helps with the tracking of modifications to experiments and with the traceability of a result to a particular version of an experiment.
Note: The workflow we will describe in this tutorial corresponds to a situation where the ARTIQ master machine is also used as a Git server where multiple users may push and pull code. The Git setup can be customized according to your needs; the main point to remember is that when scanning or submitting, the ARTIQ master uses the internal Git data (not any working directory that may be present) to fetch the latest fully completed commit at the repository’s head.
We will use the current repository folder as working directory for making local modifications to the experiments, move it away from the master data directory, and create a new repository folder that holds the Git data used by the master. Stop the master with Ctrl-C and enter the following commands:

42

Chapter 8. Getting started with the management system

ARTIQ Documentation, Release 7.8180.21c6f57
$ cd ~/artiq-master $ mv repository ~/artiq-work $ mkdir repository $ cd repository $ git init --bare
Now, push data to into the bare repository. Initialize a regular (non-bare) Git repository into our working directory: $ cd ~/artiq-work $ git init
Then commit our experiment: $ git add mgmt_tutorial.py $ git commit -m "First version of the tutorial experiment"
and finally, push the commit into the master’s bare repository: $ git remote add origin ~/artiq-master/repository $ git push -u origin master
Start the master again with the -g flag, telling it to treat the contents of the repository folder (not artiq-work) as a bare Git repository: $ cd ~/artiq-master $ artiq_master -g
Note: You need at least one commit in the repository before you can start the master.
There should be no errors displayed, and if you start the GUI again, you will find the experiment there. To complete the master configuration, we must tell Git to make the master rescan the repository when new data is added to it. Create a file ~/artiq-master/repository/hooks/post-receive with the following contents: #!/bin/sh artiq_client scan-repository --async
Then set the execution permission on it: $ chmod 755 ~/artiq-master/repository/hooks/post-receive
Note: Remote machines may also push and pull into the master’s bare repository using e.g. Git over SSH.
Let’s now make a modification to the experiment. In the source present in the working directory, add an exclamation mark at the end of “Hello World”. Before committing it, check that the experiment can still be executed correctly by running it directly from the filesystem using: $ artiq_client submit ~/artiq-work/mgmt_tutorial.py
Note: You may also use the “Open file outside repository” feature of the GUI, by right-clicking on the explorer.

8.3. Setting up Git integration

43

ARTIQ Documentation, Release 7.8180.21c6f57

Note: Submitting an experiment from the repository using the artiq_client command-line tool is done using the -R flag.
Verify the log in the GUI. If you are happy with the result, commit the new version and push it into the master’s repository:
$ cd ~/artiq-work $ git commit -a -m "More enthusiasm" $ git push
Note: Notice that commands other than git push are not needed anymore.
The master should now run the new version from its repository. As an exercise, add another experiment to the repository, commit and push the result, and verify that it appears in the GUI.
8.4 Datasets
Modify the run() method of the experiment as follows:
def run(self): self.set_dataset("parabola", np.full(self.count, np.nan), broadcast=True) for i in range(self.count): self.mutate_dataset("parabola", i, i*i) time.sleep(0.5)
Note: You need to import the time module, and the numpy module as np.
Commit, push and submit the experiment as before. Go to the “Datasets” dock of the GUI and observe that a new dataset has been created. We will now create a new XY plot showing this new result. Plotting in the ARTIQ dashboard is achieved by programs called “applets”. Applets are independent programs that add simple GUI features and are run as separate processes (to achieve goals of modularity and resilience against poorly written applets). Users may write their own applets, or use those supplied w-
ith ARTIQ (in the artiq.applets module) that cover basic plotting. Applets are configured through their command line to select parameters such as the names of the datasets to plot. The list of command-line options can be retrieved using the -h option; for example you can run python3 -m artiq. applets.plot_xy -h in a terminal. In our case, create a new applet from the XY template by right-clicking on the applet list, and edit the applet command line so that it retrieves the parabola dataset (the co-
mmand line should now be ${artiq_applet}plot_xy parabola). Run the experiment again, and observe how the points are added one by one to the plot. After the experiment has finished executing, the results are written to a HDF5 file that resides in ~/artiq-master/ results/<date>/<hour>. Open that file with HDFView or h5dump, and observe the data we just generated as well as the Git commit ID of the experiment (a hexadecimal hash such as 947acb1f90ae1b8862efb489a9cc29f7d4e0c645 that represents the dat-
a at a particular time in the Git repository). The list of Git commit IDs can be found using the git log command in ~/artiq-work.

44

Chapter 8. Getting started with the management system

ARTIQ Documentation, Release 7.8180.21c6f57 Note: HDFView and h5dump are third-party tools not supplied with ARTIQ.

8.4. Datasets

45

ARTIQ Documentation, Release 7.8180.21c6f57

46

Chapter 8. Getting started with the management system

CHAPTER
NINE
CORE DEVICE
The core device is a FPGA-based hardware component that contains a softcore CPU tightly coupled with the so-called RTIO core that provides precision timing. The CPU executes Python code that is statically compiled by the ARTIQ compiler, and communicates with the core device peripherals (TTL, DDS, etc.) over the RTIO core. This architecture provides high timing resolution, low latency, low jitter, high level programming capabilities, and good integration with the rest of the Python experiment code.-
 While it is possible to use all the other parts of ARTIQ (controllers, master, GUI, dataset management, etc.) without a core device, many experiments require it.
9.1 Flash storage
The core device contains some flash space that can be used to store configuration data. This storage area is used to store the core device MAC address, IP address and even the idle kernel. The flash storage area is one sector (typically 64 kB) large and is organized as a list of key-value records. This flash storage space can be accessed by using artiq_coremgmt (see: Core device management tool).
9.2 FPGA board ports
All boards have a serial interface running at 115200bps 8-N-1 that can be used for debugging.
9.2.1 Kasli
Kasli is a versatile core device designed for ARTIQ as part of the Sinara family of boards. All variants support interfacing to various EEM daughterboards (TTL, DDS, ADC, DAC. . . ) connected directly to it.
Standalone variants Kasli is connected to the network using a 1000Base-X SFP module. No-name BiDi (1000Base-BX) modules have been used successfully. The SFP module for the network should be installed into the SFP0 cage. The other SFP cages are not used. The RTIO clock frequency is 125MHz or 150MHz, which is generated by the Si5324.
47

ARTIQ Documentation, Release 7.8180.21c6f57
DRTIO master variants
Kasli can be used as a DRTIO master that provides local RTIO channels and can additionally control one DRTIO satellite. The RTIO clock frequency is 125MHz or 150MHz, which is generated by the Si5324. The DRTIO line rate is 2.5Gbps or 3Gbps. As with the standalone configuration, the SFP module for the Ethernet network should be installed into the SFP0 cage. The DRTIO connections are on SFP1 and SFP2, and optionally on the SATA connector.
DRTIO satellite/repeater variants
Kasli can be used as a DRTIO satellite with a 125MHz or 150MHz RTIO clock and a 2.5Gbps or 3Gbps DRTIO line rate. The DRTIO upstream connection is on SFP0 or optionally on the SATA connector, and the remaining SFPs are downstream ports.
9.2.2 KC705
An alternative target board for the ARTIQ core device is the KC705 development board from Xilinx. It supports the NIST CLOCK and QC2 hardware (FMC).
Common problems
• The SW13 switches on the board need to be set to 00001. • When connected, the CLOCK adapter breaks the JTAG chain due to TDI not being connected to TDO on the
FMC mezzanine. • On some boards, the JTAG USB connector is not correctly soldered.
VADJ
With the NIST CLOCK and QC2 adapters, for safe operation of the DDS buses (to prevent damage to the IO banks of the FPGA), the FMC VADJ rail of the KC705 should be changed to 3.3V. Plug the Texas Instruments USB-TO-GPIO PMBus adapter into the PMBus connector in the corner of the KC705 and use the Fusion Digital Power Designer software to configure (requires Windows). Write to chip number U55 (address 52), channel 4, which is the VADJ rail, to make it 3.3V instead of 2.5V. Power cycle the KC705 boa-
rd to check that the startup voltage on the VADJ rail is now 3.3V.
NIST CLOCK
With the CLOCK hardware, the TTL lines are mapped as follows:

48

Chapter 9. Core device

ARTIQ Documentation, Release 7.8180.21c6f57

RTIO channel 3,7,11,15 0-2,4-6,8-10,12-14 16 17 18 19 20 21

TTL line TTL3,7,11,15 TTL0-2,4-6,8-10,12-14 PMT0 PMT1 SMA_GPIO_N LED AMS101_LDAC_B LA32_P

Capability Input+Output Output Input Input Input+Output Output Output Clock

The board has RTIO SPI buses mapped as follows:

RTIO channel 22 23 24 25 26

CS_N AMS101_CS_N SPI0_CS_N SPI1_CS_N SPI2_CS_N MMC_SPI_CS_N

MOSI AMS101_MOSI SPI0_MOSI SPI1_MOSI SPI2_MOSI MMC_SPI_MOSI

MISO
SPI0_MISO SPI1_MISO SPI2_MISO MMC_SPI_MISO

CLK AMS101_CLK SPI0_CLK SPI1_CLK SPI2_CLK MMC_SPI_CLK

The DDS bus is on channel 27.

NIST QC2 With the QC2 hardware, the TTL lines are mapped as follows:

RTIO channel 0-39 40 41 42 43, 44

TTL line TTL0-39 SMA_GPIO_N LED AMS101_LDAC_B CLK0, CLK1

Capability Input+Output Input+Output Output Output Clock

The board has RTIO SPI buses mapped as follows:

RTIO channel 45 46 47 48 49

CS_N AMS101_CS_N SPI0_CS_N SPI1_CS_N SPI2_CS_N SPI3_CS_N

MOSI AMS101_MOSI SPI0_MOSI SPI1_MOSI SPI2_MOSI SPI3_MOSI

MISO
SPI0_MISO SPI1_MISO SPI2_MISO SPI3_MISO

CLK AMS101_CLK SPI0_CLK SPI1_CLK SPI2_CLK SPI3_CLK

There are two DDS buses on channels 50 (LPC, DDS0-DDS11) and 51 (HPC, DDS12-DDS23).
The QC2 hardware uses TCA6424A I2C I/O expanders to define the directions of its TTL buffers. There is one such expander per FMC card, and they are selected using the PCA9548 on the KC705.
To avoid I/O contention, the startup kernel should first program the TCA6424A expanders and then call output() on all TTLInOut channels that should be configured as outputs.
See artiq.coredevice.i2c for more details.

9.2. FPGA board ports

49

ARTIQ Documentation, Release 7.8180.21c6f57
Clocking
The KC705 in standalone variants supports an internal 125 MHz RTIO clock (based on its crystal oscillator, or external reference for PLL for DRTIO variants) and an external clock, that can be selected using the rtio_clock configuration entry. Valid values are:
• int_125 - internal crystal oscillator, 125 MHz output (default), • ext0_bypass - external clock. KC705 in DRTIO variants and Kasli generates the RTIO clock using a PLL locked either to an internal crystal or to an external frequency reference. Valid values are: • int_125 - internal crystal oscillator using PLL, 125 MHz output (default), • int_100 - internal crystal oscillator using PLL, 100 MHz output, • int_150 - internal crystal oscillator using PLL, 150 MHz output, • ext0_synth0_10to125 - ext-
ernal 10 MHz reference using PLL, 125 MHz output, • ext0_synth0_100to125 - external 100 MHz reference using PLL, 125 MHz output, • ext0_synth0_125to125 - external 125 MHz reference using PLL, 125 MHz output, • ext0_bypass, ext0_bypass_125, ext0_bypass_100 - external clock - with explicit aliases available. The selected option can be observed in the core device boot logs. Options rtio_clock=int_XXX and rtio_clock=ext0_synth0_XXXXX generate the RTIO clock using a PLL locked either to an internal cry-
stal or to an external frequency reference (depending on exact option). rtio_clock=ext0_bypass bypasses that PLL and the user must supply the RTIO clock (typically 125 MHz) at the Kasli front panel SMA input. Bypassing the PLL ensures the skews between input clock, Kasli downstream clock outputs, and RTIO clock are deterministic accross reboots of the system. This is useful when phase determinism is required in situtations where the reference clock fans out to other devices before reaching Kasli.

50

Chapter 9. Core device

CHAPTER
TEN
MANAGEMENT SYSTEM
The management system described below is optional: experiments can be run one by one using artiq_run, and the controllers can run stand-alone (without a controller manager). For their very first steps with ARTIQ or in simple or particular cases, users do not need to deploy the management system.
10.1 Components
10.1.1 Master
The master is responsible for managing the parameter and device databases, the experiment repository, scheduling and running experiments, archiving results, and distributing real-time results. The master is a headless component, and one or several clients (command-line or GUI) use the network to interact with it.
10.1.2 Controller manager
Controller managers (started using the artiq_ctlmgr command that is part of the artiq-comtools package) are responsible for running and stopping controllers on a machine. There is one controller manager per network node that runs controllers. A controller manager connects to the master and uses the device database to determine what controllers need to be run. Changes in the device database are tracked by the manager and controllers are started and stopped accordingly. Controller managers use the l-
ocal network address of the connection to the master to filter the device database and run only those controllers that are allocated to the current node. Hostname resolution is supported.
Warning: With some network setups, the current machine’s hostname without the domain name resolves to a localhost address (127.0.0.1 or even 127.0.1.1). If you wish to use controllers across a network, make sure that the hostname you provide resolves to an IP address visible on the network (e.g. try providing the full hostname including the domain name).
51

ARTIQ Documentation, Release 7.8180.21c6f57
10.1.3 Command-line client
The command-line client connects to the master and permits modification and monitoring of the databases, monitoring the experiment schedule and log, and submitting experiments.
10.1.4 Dashboard
The dashboard connects to the master and is the main way of interacting with it. The main features of the dashboard are scheduling of experiments, setting of their arguments, examining the schedule, displaying real-time results, and debugging TTL and DDS channels in real time.
10.2 Experiment scheduling
10.2.1 Basics
To use hardware resources more efficiently, potentially compute-intensive pre-computation and analysis phases of other experiments are executed in parallel with the body of the current experiment that accesses the hardware. See also: These steps are implemented in Experiment. However, user-written experiments should usually derive from (subclass) artiq.language.environment.EnvExperiment. Experiments are divided into three phases that are programmed by the user:
1. The preparation stage, that pre-fetches and pre-computes any data that necessary to run the experiment. Users may implement this stage by overloading the prepare() method. It is not permitted to access hardware in this stage, as doing so may conflict with other experiments using the same devices.
2. The running stage, that corresponds to the body of the experiment, and typically accesses hardware. Users must implement this stage and overload the run() method.
3. The analysis stage, where raw results collected in the running stage are post-processed and may lead to updates of the parameter database. This stage may be implemented by overloading the analyze() method.
Note: Only the run() method implementation is mandatory; if the experiment does not fit into the pipelined scheduling model, it can leave one or both of the other methods empty (which is the default).
The three phases of several experiments are then executed in a pipelined manner by the scheduler in the ARTIQ master: experiment A executes its preparation stage, then experiment A executes its running stage while experiment B executes its preparation stage, and so on.
Note: The next experiment (B) may start run()ing before all events placed into (core device) RTIO buffers by the previous experiment (A) have been executed. These events can then execute while experiment B is run()ing. Using reset() clears the RTIO buffers, discarding pending events, including those left over from A. Interactions between events of different experiments can be avoided by preventing the run() method of experiment A from returning until all events have been executed. This is discusse-
d in the section on RTIO Synchronization.

52

Chapter 10. Management system

ARTIQ Documentation, Release 7.8180.21c6f57
10.2.2 Priorities and timed runs
When determining what experiment to begin executing next (i.e. entering the preparation stage), the scheduling looks at the following factors, by decreasing order of precedence:
1. Experiments may be scheduled with a due date. If there is one and it is not reached yet, the experiment is not eligible for preparation.
2. The integer priority value specified by the user. 3. The due date itself. The earlier the due date, the earlier the experiment is scheduled. 4. The run identifier (RID), an integer that is incremented at each experiment submission. This ensures that, all
other things being equal, experiments are scheduled in the same order as they are submitted.
10.2.3 Pauses
In the run stage, an experiment may yield to the scheduler by calling the pause() method of the scheduler. If there are other experiments with higher priority (e.g. a high-priority timed experiment has reached its due date), they are preemptively executed, and then pause() returns. Otherwise, pause() returns immediately. To check whether pause() would in fact not return immediately, use artiq.master.scheduler.Scheduler.check_pause(). The experiment must place the hardware in a safe state and disco-
nnect from the core device (typically, by calling self.core.comm.close() from the kernel, which is equivalent to artiq.coredevice.core.Core.close()) before calling pause(). Accessing the pause() and check_pause() methods is done through a virtual device called scheduler that is accessible to all experiments. The scheduler virtual device is requested like regular devices using get_device() (self. get_device()) or setattr_device() (self.setattr_device()). check_pause() can be called (via RPC) from a-
 kernel, but pause() must not.
10.2.4 Multiple pipelines
Multiple pipelines can operate in parallel inside the same master. It is the responsibility of the user to ensure that experiments scheduled in one pipeline will never conflict with those of another pipeline over resources (e.g. same devices). Pipelines are identified by their name, and are automatically created (when an experiment is scheduled with a pipeline name that does not exist) and destroyed (when they run empty).
10.3 Git integration
The master may use a Git repository for the storage of experiment source code. Using Git has many advantages. For example, each result file (HDF5) contains the commit ID corresponding to the exact source code that produced it, which helps reproducibility. Even though the master also supports non-bare repositories, it is recommended to use a bare repository so that it can easily support push transactions from clients. Create it with e.g.:
$ mkdir experiments $ cd experiments $ git init --bare

10.3. Git integration

53

ARTIQ Documentation, Release 7.8180.21c6f57
You want Git to notify the master every time the repository is pushed to (updated), so that it is rescanned for experiments and e.g. the GUI controls and the experiment list are updated. Create a file named post-receive in the hooks folder (this folder has been created by the git command), containing the following:
#!/bin/sh artiq_client scan-repository
Then set the execution permission on it:
$ chmod 755 hooks/post-receive
You may now run the master with the Git support enabled:
$ artiq_master -g -r /path_to/experiments
Push commits containing experiments to the bare repository using e.g. Git over SSH, and the new experiments should automatically appear in the dashboard.
Note: If you plan to run the ARTIQ system entirely on a single machine, you may also consider using a non-bare repository and the post-commit hook to trigger repository scans every time you commit changes (locally). The ARTIQ master never uses the repository’s working directory, but only what is committed. More precisely, when scanning the repository, it fetches the last (atomically) completed commit at that time of repository scan and checks it out in a temporary folder. This commit ID is used by-
 default when subsequently submitting experiments. There is one temporary folder by commit ID currently referenced in the system, so concurrently running experiments from different repository revisions is fully supported by the master.
The dashboard always runs experiments from the repository. The command-line client, by default, runs experiment from the raw filesystem (which is useful for iterating rapidly without creating many disorganized commits). If you want to use the repository instead, simply pass the -R option.
10.4 Scheduler API reference
The scheduler is exposed to the experiments via a virtual device called scheduler. It can be requested like any regular device, and then the methods below can be called on the returned object. The scheduler virtual device also contains the attributes rid, pipeline_name, priority and expid that contain the corresponding information about the current run. class artiq.master.scheduler.Scheduler(ridc, worker_handlers, experiment_db, log_submissions)
check_pause(rid) Returns True if there is a condition that could make pause not return immediately (termination requested or higher priority run). The typical purpose of this function is to check from a kernel whether returning control to the host and pausing would have an effect, in order to avoid the cost of switching kernels in the common case where pause does nothing. This function does not have side effects, and does not have to be followed by a call to pause.
check_termination(rid) Returns True if termination is requested.

54

Chapter 10. Management system

ARTIQ Documentation, Release 7.8180.21c6f57
delete(rid) Kills the run with the specified RID.
get_status() Returns a dictionary containing information about the runs currently tracked by the scheduler. Must not be modified.
request_termination(rid) Requests graceful termination of the run with the specified RID.
submit(pipeline_name, expid, priority=0, due_date=None, flush=False) Submits a new run. When called through an experiment, the default values of pipeline_name, expid and priority correspond to those of the current run.
10.5 Client control broadcasts (CCBs)
Client control broadcasts are requests made by experiments for clients to perform some action. Experiments do so by requesting the ccb virtual device and calling its issue method. The first argument of the issue method is the name of the broadcast, and any further positional and keyword arguments are passed to the broadcast. CCBs are used by experiments to configure applets in the dashboard, for example for plotting purposes. class artiq.dashboard.applets_ccb.AppletsCCBDock(*args, **kwargs)
ccb_create_applet(name, command, group=None, code=None) Requests the creation of a new applet. An applet is identified by its name and an optional list of groups that represent a path (nested groups). If group is a string, it corresponds to a single group. If group is None or an empty list, it corresponds to the root. command gives the command line used to run the applet, as if it was started from a shell. The dashboard substitutes variables such as $python that gives the complete file name of the-
 Python interpreter running the dashboard. If the name already exists (after following any specified groups), the command or code of the existing applet with that name is replaced, and the applet is restarted and shown at its previous position. If not, a new applet entry is created and the applet is shown at any position on the screen. If the group(s) do not exist, they are created. If code is not None, it should be a string that contains the full source code of the applet. In this case, command i-
s used to specify (optional) command-line arguments to the applet. This function is called when a CCB create_applet is issued.
ccb_disable_applet(name, group=None) Disables an applet. The applet is identified by its name, after following any specified groups. This function is called when a CCB disable_applet is issued.

10.5. Client control broadcasts (CCBs)

55

ARTIQ Documentation, Release 7.8180.21c6f57
ccb_disable_applet_group(group) Disables all the applets in a group. If the group is nested, group should be a list, with the names of the parents preceding the name of the group to disable. This function is called when a CCB disable_applet_group is issued.
10.6 Front-end tool reference
10.6.1 artiq_master

ARTIQ master
usage: artiq_master [-h] [--version] [--device-db DEVICE_DB] [--dataset-db DATASET_DB] [-g] [-r REPOSITORY] [--experiment-subdir EXPERIMENT_SUBDIR] [-v] [-q] [--log-file LOG_FILE] [--log-backup-count LOG_BACKUP_COUNT] [--name NAME] [--log-submissions LOG_SUBMISSIONS]

Named Arguments

--version --name --log-submissions

print the ARTIQ version number friendly name, displayed in dashboards to identify master instead of server address set the filename to create the experiment subimission

databases --device-db
--dataset-db

device database file (default: ‘“device_db.py”’) Default: “device_db.py” dataset file (default: ‘“dataset_db.pyon”’) Default: “dataset_db.pyon”

56

Chapter 10. Management system

ARTIQ Documentation, Release 7.8180.21c6f57

repository

-g, --git

use the Git repository backend

Default: False

-r, --repository

path to the repository (default: ‘“repository”’)

Default: “repository”

--experiment-subdir path to the experiment folder from the repository root (default: ‘’)

Default: “”

logging

-v, --verbose

increase logging level of the master process

Default: 0

-q, --quiet

decrease logging level of the master process

Default: 0

--log-file

store logs in rotated files; set the base filename

Default: “”

--log-backup-count number of old log files to keep, or 0 to keep all log files. ‘.<yyyy>-<mm>-<dd>’ is added to the base filename (default: 0)

Default: 0

10.6.2 artiq_client

ARTIQ CLI client
usage: artiq_client [-h] [-s SERVER] [--port PORT] [--version] {submit,delete,set-dataset,del-dataset,show,scan-devices,scan-repository,ls} ...

Positional Arguments

action

Possible choices: submit, delete, set-dataset, del-dataset, show, scan-devices, scan-repository, ls

10.6. Front-end tool reference

57

ARTIQ Documentation, Release 7.8180.21c6f57

Named Arguments -s, --server
--port --version

hostname or IP of the master to connect to Default: “::1” TCP port to use to connect to the master print the ARTIQ version number

Sub-commands:
submit
submit an experiment
artiq_client submit [-h] [-p PIPELINE] [-P PRIORITY] [-t TIMED] [-f] [-R] [-r REVISION] [--content] [-c CLASS_NAME] FILE [ARGUMENTS ...]

Positional Arguments

FILE ARGUMENTS

file containing the experiment to run run arguments

Named Arguments -p, --pipeline -P, --priority -t, --timed -f, --flush -R, --repository -r, --revision

pipeline to run the experiment in (default: “main”) Default: “main” priority (higher value means sooner scheduling, default: 0) Default: 0 set a due date for the experiment flush the pipeline before preparing the experiment Default: False use the experiment repository Default: False use a specific repository revision (defaults to head, ignored without -R)

58

Chapter 10. Management system

ARTIQ Documentation, Release 7.8180.21c6f57

--content -c, --class-name

submit by content Default: False name of the class to run

delete
delete an experiment from the schedule
artiq_client delete [-h] [-g] RID

Positional Arguments

RID

run identifier (RID)

Named Arguments -g

request graceful termination Default: False

set-dataset
add or modify a dataset
artiq_client set-dataset [-h] [-p | -n] NAME VALUE

Positional Arguments

NAME VALUE

name of the dataset value in PYON format

10.6. Front-end tool reference

59

ARTIQ Documentation, Release 7.8180.21c6f57

Named Arguments -p, --persist -n, --no-persist

make the dataset persistent Default: False make the dataset non-persistent Default: False

del-dataset
delete a dataset artiq_client del-dataset [-h] name

Positional Arguments

name

name of the dataset

show
show schedule, log, devices or datasets
artiq_client show [-h] WHAT

Positional Arguments

WHAT

Possible choices: schedule, log, ccb, devices, datasets select object to show: [‘schedule’, ‘log’, ‘ccb’, ‘devices’, ‘datasets’]

scan-devices
trigger a device database (re)scan artiq_client scan-devices [-h]

60

Chapter 10. Management system

ARTIQ Documentation, Release 7.8180.21c6f57

scan-repository
trigger a repository (re)scan
artiq_client scan-repository [-h] [--async] [REVISION]

Positional Arguments

REVISION

use a specific repository revision (defaults to head)

Named Arguments --async

trigger scan and return immediately Default: False

ls
list a directory on the master
artiq_client ls [-h] [directory]

Positional Arguments

directory

Default: “”

10.6.3 artiq_dashboard

ARTIQ Dashboard
usage: artiq_dashboard [-h] [--version] [-s SERVER] [--port-notify PORT_NOTIFY] [--port-control PORT_CONTROL] [--port-broadcast PORT_BROADCAST] [--db-file DB_FILE] [-p PLUGIN_MODULES]

10.6. Front-end tool reference

61

ARTIQ Documentation, Release 7.8180.21c6f57

Named Arguments --version -s, --server
--port-notify
--port-control
--port-broadcast
--db-file -p, --load-plugin

print the ARTIQ version number hostname or IP of the master to connect to Default: “::1” TCP port to connect to for notifications Default: 3250 TCP port to connect to for control Default: 3251 TCP port to connect to for broadcasts Default: 1067 database file for local GUI settings Python module to load on startup

10.6.4 artiq_session

ARTIQ session manager. Automatically runs the master, dashboard and local controller manager on the current machine. The latter requires the artiq-comtools package to be installed.
usage: artiq_session [-h] [--version] [-m M] [-d D] [-c C]

Named Arguments --version -m
-d
-c

print the ARTIQ version number add argument to the master command line Default: [] add argument to the dashboard command line Default: [] add argument to the controller manager command line Default: []

62

Chapter 10. Management system

CHAPTER
ELEVEN
THE ENVIRONMENT
Experiments interact with an environment that consists of devices, arguments and datasets. Access to the environment is handled by the class artiq.language.environment.EnvExperiment that experiments should derive from.
11.1 The device database
The device database contains information about the devices available in a ARTIQ installation, what drivers to use, what controllers to use and on what machine, and where the devices are connected. The master (or artiq_run) instantiates the device drivers (and the RPC clients in the case of controllers) for the experiments based on the contents of the device database. The device database is stored in the memory of the master and is generated by a Python script typically called device_db.py. That sc-
ript must define a global variable device_db with the contents of the database. The device database is a Python dictionary whose keys are the device names, and values can have several types.
11.1.1 Local devices
Local device entries are dictionaries that contain a type field set to local. They correspond to device drivers that are created locally on the master (as opposed to going through the controller mechanism). The fields module and class determine the location of the Python class that the driver consists of. The arguments field is another (possibly empty) dictionary that contains arguments to pass to the device driver constructor.
11.1.2 Controllers
Controller entries are dictionaries whose type field is set to controller. When an experiment requests such a device, a RPC client (see sipyco.pc_rpc) is created and connected to the appropriate controller. Controller entries are also used by controller managers to determine what controllers to run. The best_effort field is a boolean that determines whether to use sipyco.pc_rpc.Client or sipyco.pc_rpc. BestEffortClient. The host and port fields configure the TCP connection. The target field contai-
ns the name of the RPC target to use (you may use sipyco_rpctool on a controller to list its targets). Controller managers run the command field in a shell to launch the controller, after replacing {port} and {bind} by respectively the TCP port the controller should listen to (matches the port field) and an appropriate bind address for the controller’s listening socket.
63

ARTIQ Documentation, Release 7.8180.21c6f57
11.1.3 Aliases
If an entry is a string, that string is used as a key for another lookup in the device database.
11.2 Arguments
Arguments are values that parameterize the behavior of an experiment and are set before the experiment is executed. Requesting the values of arguments can only be done in the build phase of an experiment. The value requests are also used to define the GUI widgets shown in the explorer when the experiment is selected.
11.3 Datasets
Datasets are values (possibly arrays) that are read and written by experiments and live in a key-value store. A dataset may be broadcasted, that is, distributed to all clients connected to the master. For example, the ARTIQ GUI may plot it while the experiment is in progress to give rapid feedback to the user. Broadcasted datasets live in a global key-value store; experiments should use distinctive real-time result names in order to avoid conflicts. Broadcasted datasets may be used to communicate -
values across experiments; for example, a periodic calibration experiment may update a dataset read by payload experiments. Broadcasted datasets are replaced when a new dataset with the same key (name) is produced. Broadcasted datasets may be persistent: the master stores them in a file typically called dataset_db.pyon so they are saved across master restarts. Datasets produced by an experiment run may be archived in the HDF5 output for that run.

64

Chapter 11. The environment

CHAPTER
TWELVE
DISTRIBUTED REAL TIME INPUT/OUTPUT (DRTIO)
DRTIO is a time and data transfer system that allows ARTIQ RTIO channels to be distributed among several satellite devices synchronized and controlled by a central core device. The link is a high speed duplex serial line operating at 1Gbps or more, over copper or optical fiber. The main source of DRTIO traffic is the remote control of RTIO output and input channels. The protocol is optimized to maximize throughput and minimize latency, and handles flow control and error conditions (underflows, ove-
rflows, etc.) The DRTIO protocol also supports auxiliary, low-priority and non-realtime traffic. The auxiliary channel supports overriding and monitoring TTL I/Os. Auxiliary traffic never interrupts or delays the main traffic, so that it cannot cause unexpected poor performance (e.g. RTIO underflows). Time transfer and clock syntonization is typically done over the serial link alone. The DRTIO code is organized as much as possible to support porting to different types of transceivers (Xilinx MGTs,-
 Altera MGTs, soft transceivers running off regular FPGA IOs, etc.) and different synchronization mechanisms. The lower layers of DRTIO are similar to White Rabbit, with the following main differences:
• lower latency • deterministic latency • real-time/auxiliary channels • higher bandwidth • no Ethernet compatibility • only star or tree topologies are supported From ARTIQ kernels, DRTIO channels are used in the same way as local RTIO channels.
12.1 Using DRTIO
12.1.1 Terminology
In a system of interconnected DRTIO devices, each RTIO core (driving RTIO PHYs; for example a RTIO core would connect to a large bank of TTL signals) is assigned a number and is called a destination. One DRTIO device normally contains one RTIO core. On one DRTIO device, the immediate path that a RTIO request must take is called a hop: the request can be sent to the local RTIO core, or to another device downstream. Each possible hop is assigned a number. Hop 0 is normally the local RTIO core, and h-
ops 1 and above correspond to the respective downstream ports of the device.
65

ARTIQ Documentation, Release 7.8180.21c6f57
DRTIO devices are arranged in a tree topology, with the core device at the root. For each device, its distance from the root (in number of devices that are crossed) is called its rank. The root has rank 0, the devices immediately connected to it have rank 1, and so on.
12.1.2 The routing table
The routing table defines, for each destination, the list of hops (“route”) that must be taken from the root in order to reach it. It is stored in a binary format that can be manipulated with the artiq_route utility. The binary file is then programmed into the flash storage of the core device under the routing_table key. It is automatically distributed to downstream devices when the connections are established. Modifying the routing table requires rebooting the core device for the new table to be -
taken into account. All routes must end with the local RTIO core of the last device (0). The local RTIO core of the core device is a destination like any other, and it needs to be explicitly part of the routing table for kernels to be able to access it. If no routing table is programmed, the core device takes a default routing table for a star topology (i.e. with no devices of rank 2 or above), with destination 0 being the core device’s local RTIO core and destinations 1 and above corresponding to-
 devices on the respective downstream ports. Here is an example of creating and programming a routing table for a chain of 3 devices:
# create an empty routing table $ artiq_route rt.bin init
# set destination 0 to the local RTIO core $ artiq_route rt.bin set 0 0
# for destination 1, first use hop 1 (the first downstream port) # then use the local RTIO core of that second device. $ artiq_route rt.bin set 1 1 0
# for destination 2, use hop 1 and reach the second device as # before, then use hop 1 on that device to reach the third # device, and finally use the local RTIO core (hop 0) of the # third device. $ artiq_route rt.bin set 2 1 1 0
$ artiq_route rt.bin show 0: 0 1: 1 0 2: 1 1 0
$ artiq_coremgmt config write -f routing_table rt.bin

66

Chapter 12. Distributed Real Time Input/Output (DRTIO)

ARTIQ Documentation, Release 7.8180.21c6f57
12.1.3 Addressing distributed RTIO cores from kernels
Remote RTIO channels are accessed in the same way as local ones. Bits 16-24 of the RTIO channel number define the destination. Bits 0-15 of the RTIO channel number select the channel within the destination.
12.1.4 Link establishment
After devices have booted, it takes several seconds for all links in a DRTIO system to become established (especially with the long locking times of low-bandwidth PLLs that are used for jitter reduction purposes). Kernels should not attempt to access destinations until all required links are up (when this happens, the RTIODestinationUnreachable exception is raised). ARTIQ provides the method get_rtio_destination_status() that determines whether a destination can be reached. We recommend calling it-
 in a loop in your startup kernel for each important destination, to delay startup until they all can be reached.
12.1.5 Latency
Each hop increases the RTIO latency of a destination by a significant amount; that latency is however constant and can be compensated for in kernels. To limit latency in a system, fully utilize the downstream ports of devices to reduce the depth of the tree, instead of creating chains.
12.2 Internal details
12.2.1 Real-time and auxiliary packets
DRTIO is a packet-based protocol that uses two types of packets: • real-time packets, which are transmitted at high priority at a high bandwidth and are used for the bulk of RTIO commands and data. In the ARTIQ DRTIO implementation, real-time packets are processed entirely in gateware. • auxiliary packets, which are lower-bandwidth and are used for ancillary tasks such as housekeeping and monitoring/injection. Auxiliary packets are low-priority and their transmission has no impact on the timing of-
 real-time packets (however, transmission of real-time packets slows down the transmission of auxiliary packets). In the ARTIQ DRTIO implementation, the contents of the auxiliary packets are read and written directly by the firmware, with the gateware simply handling the transmission of the raw data.
12.2.2 Link layer
The lower layer of the DRTIO protocol stack is the link layer, which is responsible for delimiting real-time and auxiliary packets, and assisting with the establishment of a fixed-latency high speed serial transceiver link. DRTIO uses the IBM (Widmer and Franaszek) 8b/10b encoding. D characters (the encoded 8b symbols) always transmit real-time packet data, whereas K characters are used for idling and transmitting auxiliary packet data. At every logic clock cycle, the high-speed transceiver hardwa-
re transmits some amount N of 8b/10b characters (typically, N is 2 or 4) and receives the same amount. With DRTIO, those characters must be all of the D type or all of the K type; mixing D and K characters in the same logic clock cycle is not allowed. A real-time packet is defined by a series of D characters containing the packet’s payload, delimited by at least one K character. Real-time packets must be padded to satisfy the requirement that only D or only K characters are transmitted during a lo-
gic clock cycle, by making their length a multiple of N.

12.2. Internal details

67

ARTIQ Documentation, Release 7.8180.21c6f57
K characters, which are transmitted whenever there is no real-time data to transmit and to delimit real-time packets, are chosen using a 3-bit K selection word. If this K character is the first character in the set of N characters processed by the transceiver in the logic clock cycle, the mapping between the K selection word and the 8b/10b K space contains commas. If the K character is any of the subsequent characters processed by the transceiver, a different mapping is used that does not contain -
any commas. This scheme allows the receiver to align its logic clock with that of the transmitter, simply by shifting its logic clock so that commas are received into the first character position.
Note: Due to the shoddy design of transceiver hardware, this simple process of clock and comma alignment is difficult to perform in practice. The paper “High-speed, fixed-latency serial links with Xilinx FPGAs” (by Xue LIU, Qing-xu DENG, Bo-ning HOU and Ze-ke WANG) discusses techniques that can be used. The ARTIQ implementation simply keeps resetting the receiver until the comma is aligned, since relatively long lock times are acceptable.
The series of K selection words is then used to form auxiliary packets and the idle pattern. When there is no auxiliary packet to transfer or to delimitate auxiliary packets, the K selection word 100 is used. To transfer data from an auxiliary packet, the K selection word 0ab is used, with ab containing two bits of data from the packet. An auxiliary packet is delimited by at least one 100 K selection word. Both real-time traffic and K selection words are scrambled in order to make the generated el-
ectromagnetic interference practically independent from the DRTIO traffic. A multiplicative scrambler is used and its state is shared between the real-time traffic and K selection words, so that real-time data can be descrambled immediately after the scrambler has been synchronized from the K characters. Another positive effect of the scrambling is that commas always appear regularly in the absence of any traffic (and in practice also appear regularly on a busy link). This makes a receiver always -
able to synchronize itself to an idling transmitter, which removes the need for relatively complex link initialization states. Due to the use of K characters both as delimiters for real-time packets and as information carrier for auxiliary packets, auxiliary traffic is guaranteed a minimum bandwidth simply by having a maximum size limit on real-time packets.
12.2.3 Clocking
At the DRTIO satellite device, the recovered and aligned transceiver clock is used for clocking RTIO channels, after appropriate jitter filtering using devices such as the Si5324. The same clock is also used for clocking the DRTIO transmitter (loop timing), which simplifies clock domain transfers and allows for precise round-trip-time measurements to be done.
12.2.4 RTIO clock synchronization
As part of the DRTIO link initialization, a real-time packet is sent by the core device to each satellite device to make them load their respective timestamp counters with the timestamp values from their respective packets.
12.2.5 RTIO outputs
Controlling a remote RTIO output involves placing the RTIO event into the buffer of the destination. The core device maintains a cache of the buffer space available in each destination. If, according to the cache, there is space available, then a packet containing the event information (timestamp, address, channel, data) is sent immediately and the cached value is decremented by one. If, according to the cache, no space is available, then the core device sends a request for the space available in -
the destination and updates the cache. The process repeats until at least one remote buffer entry is available for the event, at which point a packet containing the event information is sent as before. Detecting underflow conditions is the responsibility of the core device; should an underflow occur then no DRTIO packet is transmitted. Sequence errors are handled similarly.

68

Chapter 12. Distributed Real Time Input/Output (DRTIO)

ARTIQ Documentation, Release 7.8180.21c6f57
12.2.6 RTIO inputs
The core device sends a request to the satellite for reading data from one of its channels. The request contains a timeout, which is the RTIO timestamp to wait for until an input event appears. The satellite then replies with either an input event (containing timestamp and data), a timeout, or an overflow error.

12.2. Internal details

69

ARTIQ Documentation, Release 7.8180.21c6f57

70

Chapter 12. Distributed Real Time Input/Output (DRTIO)

CHAPTER
THIRTEEN
CORE LANGUAGE REFERENCE
The most commonly used features from the ARTIQ language modules and from the core device modules are bundled together in artiq.experiment and can be imported with from artiq.experiment import *.
13.1 artiq.language.core module
Core ARTIQ extensions to the Python language. exception artiq.language.core.TerminationRequested
Raised by pause when the user has requested termination. artiq.language.core.at_mu(time)
Sets the RTIO time to the specified absolute value, in machine units. artiq.language.core.delay(duration)
Increases the RTIO time by the given amount (in seconds). artiq.language.core.delay_mu(duration)
Increases the RTIO time by the given amount (in machine units). artiq.language.core.host_only(function)
This decorator marks a function so that it can only be executed in the host Python interpreter. artiq.language.core.kernel(arg=None, flags={})
This decorator marks an object’s method for execution on the core device. When a decorated method is called from the Python interpreter, the core attribute of the object is retrieved and used as core device driver. The core device driver will typically compile, transfer and run the method (kernel) on the device. When kernels call another method:
• if the method is a kernel for the same core device, it is compiled and sent in the same binary. Calls between kernels happen entirely on the device.
• if the method is a regular Python method (not a kernel), it generates a remote procedure call (RPC) for execution on the host.
The decorator takes an optional parameter that defaults to :attr`core` and specifies the name of the attribute to use as core device driver. This decorator must be present in the global namespace of all modules using it for the import cache to work properly.
71

ARTIQ Documentation, Release 7.8180.21c6f57
artiq.language.core.kernel_from_string(parameters, body_code, decorator=<function kernel>) Build a kernel function from the supplied source code in string form, similar to exec()/eval().
Operating on pieces of source code as strings is a very brittle form of metaprogramming; kernels generated like this are hard to debug, and inconvenient to write. Nevertheless, this can sometimes be useful to work around restrictions in ARTIQ Python. In that instance, care should be taken to keep string-generated code to a minimum and cleanly separate it from surrounding code.
The resulting function declaration is also evaluated using exec() for use from host Python code. To encourage a modicum of code hygiene, no global symbols are available by default; any objects accessed by the function body must be passed in explicitly as parameters.
Parameters
• parameters – A list of parameter names the generated functions accepts. Each entry can either be a string or a tuple of two strings; if the latter, the second element specifies the type annotation.
• body_code – The code for the function body, in string form. return statements can be used to return values, as usual.
• decorator – One of kernel or portable (optionally with parameters) to specify how the function will be executed.
Returns The function generated from the arguments.
artiq.language.core.now_mu() Retrieve the current RTIO timeline cursor, in machine units.
Note the conceptual difference between this and the current value of the hardware RTIO counter; see e.g. artiq. coredevice.core.Core.get_rtio_counter_mu() for the latter.
artiq.language.core.portable(arg=None, flags={}) This decorator marks a function for execution on the same device as its caller.
In other words, a decorated function called from the interpreter on the host will be executed on the host (no compilation and execution on the core device). A decorated function called from a kernel will be executed on the core device (no RPC).
This decorator must be present in the global namespace of all modules using it for the import cache to work properly.
artiq.language.core.rpc(arg=None, flags={}) This decorator marks a function for execution on the host interpreter. This is also the default behavior of ARTIQ; however, this decorator allows specifying additional flags.
artiq.language.core.set_time_manager(time_manager) Set the time manager used for simulating kernels by running them directly inside the Python interpreter. The time manager responds to the entering and leaving of interleave/parallel/sequential blocks, delays, etc. and provides a time-stamped logging facility for events.
artiq.language.core.syscall(arg=None, flags={}) This decorator marks a function as a system call. When executed on a core device, a C function with the provided name (or the same name as the Python function, if not provided) will be called. When executed on host, the Python function will be called as usual.
Every argument and the return value must be annotated with ARTIQ types.
Only drivers should normally define syscalls.

72

Chapter 13. Core language reference

ARTIQ Documentation, Release 7.8180.21c6f57
13.2 artiq.language.environment module
class artiq.language.environment.BooleanValue(default=<class 'artiq.language.environment.NoDefault'>)
A boolean argument. exception artiq.language.environment.DefaultMissing
Raised by the default method of argument processors when no default value is available. class artiq.language.environment.EnumerationValue(choices, default=<class
'artiq.language.environment.NoDefault'>) An argument that can take a string value among a predefined set of values.
Parameters choices – A list of string representing the possible values of the argument. class artiq.language.environment.EnvExperiment(managers_or_parent, *args, **kwargs)
Base class for top-level experiments that use the HasEnvironment environment manager. Most experiments should derive from this class. prepare()
This default prepare method calls prepare() for all children, in the order of registration, if the child has a prepare() method. class artiq.language.environment.Experiment Base class for top-level experiments. Deriving from this class enables automatic experiment discovery in Python modules. analyze() Entry point for analyzing the results of the experiment. This method may be overloaded by the user to implement the analysis phase of the experiment, for example fitting curves. Splitting this phase-
 from run() enables tweaking the analysis algorithm on pre-existing data, and CPUbound analyses to be run overlapped with the next experiment in a pipelined manner. This method must not interact with the hardware. prepare() Entry point for pre-computing data necessary for running the experiment. Doing such computations outside of run() enables more efficient scheduling of multiple experiments that need to access the shared hardware during part of their execution. This method must not interact with-
 the hardware. run() The main entry point of the experiment. This method must be overloaded by the user to implement the main control flow of the experiment. This method may interact with the hardware. The experiment may call the scheduler’s pause() method while in run(). class artiq.language.environment.HasEnvironment(managers_or_parent, *args, **kwargs) Provides methods to manage the environment of an experiment (arguments, devices, datasets).

13.2. artiq.language.environment module

73

ARTIQ Documentation, Release 7.8180.21c6f57

append_to_dataset(key, value) Append a value to a dataset.
The target dataset must be a list (i.e. support append()), and must have previously been set from this experiment.
The broadcast/persist/archive mode of the given key remains unchanged from when the dataset was last set. Appended values are transmitted efficiently as incremental modifications in broadcast mode.
build() Should be implemented by the user to request arguments.
Other initialization steps such as requesting devices may also be performed here.
There are two situations where the requested devices are replaced by DummyDevice() and arguments are set to their defaults (or None) instead: when the repository is scanned to build the list of available experiments and when the dataset browser artiq_browser is used to open or run the analysis stage of an experiment. Do not rely on being able to operate on devices or arguments in build().
Datasets are read-only in this method.
Leftover positional and keyword arguments from the constructor are forwarded to this method. This is intended for experiments that are only meant to be executed programmatically (not from the GUI).
call_child_method(method, *args, **kwargs) Calls the named method for each child, if it exists for that child, in the order of registration.
Parameters
• method (str) – Name of the method to call
• args – Tuple of positional arguments to pass to all children
• kwargs – Dict of keyword arguments to pass to all children
get_argument(key, processor, group=None, tooltip=None) Retrieves and returns the value of an argument.
This function should only be called from build.
Parameters
• key – Name of the argument.
• processor – A description of how to process the argument, such as instances of BooleanValue and NumberValue.
• group – An optional string that defines what group the argument belongs to, for user interface purposes.
• tooltip – An optional string to describe the argument in more detail, applied as a tooltip to the argument name in the user interface.
get_dataset(key, default=<class 'artiq.language.environment.NoDefault'>, archive=True) Returns the contents of a dataset.
The local storage is searched first, followed by the master storage (which contains the broadcasted datasets from all experiments) if the key was not found initially.
If the dataset does not exist, returns the default value. If no default is provided, raises KeyError.
By default, datasets obtained by this method are archived into the output HDF5 file of the experiment. If an archived dataset is requested more than one time or is modified, only the value at the time of the first call is archived. This may impact reproducibility of experiments.

74

Chapter 13. Core language reference

ARTIQ Documentation, Release 7.8180.21c6f57

Parameters archive – Set to False to prevent archival together with the run’s results. Default is True.
get_device(key) Creates and returns a device driver.
get_device_db() Returns the full contents of the device database.
mutate_dataset(key, index, value) Mutate an existing dataset at the given index (e.g. set a value at a given position in a NumPy array)
If the dataset was created in broadcast mode, the modification is immediately transmitted.
If the index is a tuple of integers, it is interpreted as slice(*index). If the index is a tuple of tuples, each sub-tuple is interpreted as slice(*sub_tuple) (multi-dimensional slicing).
set_dataset(key, value, broadcast=False, persist=False, archive=True) Sets the contents and handling modes of a dataset.
Datasets must be scalars (bool, int, float or NumPy scalar) or NumPy arrays.
Parameters
• broadcast – the data is sent in real-time to the master, which dispatches it.
• persist – the master should store the data on-disk. Implies broadcast.
• archive – the data is saved into the local storage of the current run (archived as a HDF5 file).
set_default_scheduling(priority=None, pipeline_name=None, flush=None) Sets the default scheduling options.
This function should only be called from build.
setattr_argument(key, processor=None, group=None, tooltip=None) Sets an argument as attribute. The names of the argument and of the attribute are the same.
The key is added to the instance’s kernel invariants.
setattr_dataset(key, default=<class 'artiq.language.environment.NoDefault'>, archive=True) Sets the contents of a dataset as attribute. The names of the dataset and of the attribute are the same.
setattr_device(key) Sets a device driver as attribute. The names of the device driver and of the attribute are the same.
The key is added to the instance’s kernel invariants.
class artiq.language.environment.NoDefault Represents the absence of a default value.
class artiq.language.environment.NumberValue(default=<class 'artiq.language.environment.NoDefault'>, unit='', scale=None, step=None, min=None, max=None, ndecimals=2, type='auto')
An argument that can take a numerical value.
If type=="auto", the result will be a float unless ndecimals = 0, scale = 1 and step is an integer. Setting type to int will also result in an error unless these conditions are met.
When scale is not specified, and the unit is a common one (i.e. defined in artiq.language.units), then the scale is obtained from the unit using a simple string match. For example, milliseconds ("ms") units set the scale to 0.001. No unit (default) corresponds to a scale of 1.0.

13.2. artiq.language.environment module

75

ARTIQ Documentation, Release 7.8180.21c6f57
For arguments with uncommon or complex units, use both the unit parameter (a string for display) and the scale parameter (a numerical scale for experiments). For example, NumberValue(1, unit="xyz", scale=0.001) will display as 1 xyz in the GUI window because of the unit setting, and appear as the numerical value 0.001 in the code because of the scale setting.
Parameters • unit – A string representing the unit of the value. • scale – A numerical scaling factor by which the displayed value is multiplied when referenced in the experiment. • step – The step with which the value should be modified by up/down buttons in a UI. The default is the scale divided by 10. • min – The minimum value of the argument. • max – The maximum value of the argument. • ndecimals – The number of decimals a UI should use. • type – Type of this number. Accepts "float", "int" or -
"auto". Defaults to "auto".
class artiq.language.environment.PYONValue(default=<class 'artiq.language.environment.NoDefault'>) An argument that can be any PYON-serializable value.
class artiq.language.environment.StringValue(default=<class 'artiq.language.environment.NoDefault'>)
A string argument.
13.3 artiq.language.scan module
Implementation and management of scan objects. A scan object (e.g. artiq.language.scan.RangeScan) represents a one-dimensional sweep of a numerical range. Multi-dimensional scans are constructed by combining several scan objects, for example using artiq.language. scan.MultiScanManager. Iterate on a scan object to scan it, e.g.
for variable in self.scan: do_something(variable)
Iterating multiple times on the same scan object is possible, with the scan yielding the same values each time. Iterating concurrently on the same scan object (e.g. via nested loops) is also supported, and the iterators are independent from each other. class artiq.language.scan.CenterScan(center, span, step, randomize=False, seed=None)
A scan object that yields evenly spaced values within a span around a center. If step is finite, then center is always included. Values outside span around center are never included. If randomize is True the points are randomly ordered. class artiq.language.scan.ExplicitScan(sequence) A scan object that yields values from an explicitly defined sequence. class artiq.language.scan.MultiScanManager(*args) Makes an iterator that returns elements from the first scan object until it is exhausted, then p-
roceeds to the next iterable, until all of the scan objects are exhausted. Used for treating consecutive scans as a single scan.

76

Chapter 13. Core language reference

ARTIQ Documentation, Release 7.8180.21c6f57
Scan objects must be passed as a list of tuples (name, scan_object). Íteration produces scan points that have attributes that correspond to the names of the scan objects, and have the last value yielded by that scan object. class artiq.language.scan.NoScan(value, repetitions=1) A scan object that yields a single value for a specified number of repetitions. class artiq.language.scan.RangeScan(start, stop, npoints, randomize=False, seed=None) A scan object that yields a fixed number of evenly spaced-
 values in a range. If randomize is True the points are randomly ordered. class artiq.language.scan.Scannable(default=<class 'artiq.language.environment.NoDefault'>, unit='',
scale=None, global_step=None, global_min=None, global_max=None, ndecimals=2) An argument (as defined in artiq.language.environment) that takes a scan object. When scale is not specified, and the unit is a common one (i.e. defined in artiq.language.units), then the scale is obtained from the unit using a simple string match. For example, milliseconds ("ms") units set the scale to 0.001. No unit (default) corresponds to a scale of 1.0. For arguments with uncommon or complex units, use both the unit -
parameter (a string for display) and the scale parameter (a numerical scale for experiments). For example, a scan shown between 1 xyz and 10 xyz in the GUI with scale=0.001 and unit="xyz" results in values between 0.001 and 0.01 being scanned.
Parameters
• default – The default scan object. This parameter can be a list of scan objects, in which case the first one is used as default and the others are used to configure the default values of scan types that are not initially selected in the GUI.
• global_min – The minimum value taken by the scanned variable, common to all scan modes. The user interface takes this value to set the range of its input widgets.
• global_max – Same as global_min, but for the maximum value. • global_step – The step with which the value should be modified by up/down buttons in a
user interface. The default is the scale divided by 10. • unit – A string representing the unit of the scanned variable. • scale – A numerical scaling factor by which the displayed values are multiplied when ref-
erenced in the experiment. • ndecimals – The number of decimals a UI should use.
13.4 artiq.language.units module
This module contains floating point constants that correspond to common physical units (ns, MHz, . . . ). They are provided for convenience (e.g write MHz instead of 1000000.0) and code clarity purposes.

13.4. artiq.language.units module

77

ARTIQ Documentation, Release 7.8180.21c6f57

78

Chapter 13. Core language reference

CHAPTER
FOURTEEN
CORE DRIVERS REFERENCE
These drivers are for the core device and the peripherals closely integrated into it, which do not use the controller mechanism.
14.1 System drivers
14.1.1 artiq.coredevice.core module
exception artiq.coredevice.core.CompileError(diagnostic) class artiq.coredevice.core.Core(dmgr, host, ref_period, ref_multiplier=8, target='rv32g')
Core device driver. Parameters • host – hostname or IP address of the core device. • ref_period – period of the reference clock for the RTIO subsystem. On platforms that use clock multiplication and SERDES-based PHYs, this is the period after multiplication. For example, with a RTIO core clocked at 125MHz and a SERDES multiplication factor of 8, the reference period is 1ns. The time machine unit is equal to this period. • ref_multiplier – ratio between the RTIO fine timestamp frequency and the RTI-
O coarse timestamp frequency (e.g. SERDES multiplication factor).
break_realtime() Set the time cursor after the current value of the hardware RTIO counter plus a margin of 125000 machine units. If the time cursor is already after that position, this function does nothing.
get_rtio_counter_mu() Retrieve the current value of the hardware RTIO timeline counter. As the timing of kernel code executed on the CPU is inherently non-deterministic, the return value is by necessity only a lower bound for the actual value of the hardware register at the instant when execution resumes in the caller. For a more detailed description of these concepts, see ARTIQ Real-Time I/O Concepts.
get_rtio_destination_status(destination) Returns whether the specified RTIO destination is up. This is particularly useful in startup kernels to delay startup until certain DRTIO destinations are up.
79

ARTIQ Documentation, Release 7.8180.21c6f57
mu_to_seconds(mu) Convert machine units (RTIO cycles) to seconds. Parameters mu – cycle count to convert.
precompile(function, *args, **kwargs) Precompile a kernel and return a callable that executes it on the core device at a later time. Arguments to the kernel are set at compilation time and passed to this function, as additional positional and keyword arguments. The returned callable accepts no arguments. Precompiled kernels may use RPCs. Object attributes at the beginning of a precompiled kernel execution have the values they had at precompilation time. If up-to-date values are required, use RPC t-
o read them. Similarly, modified values are not written back, and explicit RPC should be used to modify host objects. Carefully review the source code of drivers calls used in precompiled kernels, as they may rely on host object attributes being transfered between kernel calls. Examples include code used to control DDS phase, and Urukul RF switch control via the CPLD register. The return value of the callable is the return value of the kernel, if any. The callable may be called several times.
reset() Clear RTIO FIFOs, release RTIO PHY reset, and set the time cursor at the current value of the hardware RTIO counter plus a margin of 125000 machine units.
seconds_to_mu(seconds) Convert seconds to the corresponding number of machine units (RTIO cycles). Parameters seconds – time (in seconds) to convert.
wait_until_mu(cursor_mu) Block execution until the hardware RTIO counter reaches the given value (see get_rtio_counter_mu()). If the hardware counter has already passed the given time, the function returns immediately.
14.1.2 artiq.coredevice.exceptions module
exception artiq.coredevice.exceptions.CacheError Raised when putting a value into a cache row would violate memory safety.
exception artiq.coredevice.exceptions.ClockFailure Raised when RTIO PLL has lost lock.
class artiq.coredevice.exceptions.CoreException(exceptions, exception_info, traceback, stack_pointers) Information about an exception raised or passed through the core device.
exception artiq.coredevice.exceptions.DMAError Raised when performing an invalid DMA operation.
exception artiq.coredevice.exceptions.I2CError Raised when a I2C transaction fails.
exception artiq.coredevice.exceptions.InternalError Raised when the runtime encounters an internal error condition.

80

Chapter 14. Core drivers reference

ARTIQ Documentation, Release 7.8180.21c6f57

exception artiq.coredevice.exceptions.RTIODestinationUnreachable Raised with a RTIO operation could not be completed due to a DRTIO link being down.
exception artiq.coredevice.exceptions.RTIOOverflow Raised when at least one event could not be registered into the RTIO input FIFO because it was full (CPU not reading fast enough).
This does not interrupt operations further than cancelling the current read attempt and discarding some events. Reading can be reattempted after the exception is caught, and events will be partially retrieved.
exception artiq.coredevice.exceptions.RTIOUnderflow Raised when the CPU or DMA core fails to submit a RTIO event early enough (with respect to the event’s timestamp).
The offending event is discarded and the RTIO core keeps operating.
exception artiq.coredevice.exceptions.SPIError Raised when a SPI transaction fails.
14.1.3 artiq.coredevice.dma module
Direct Memory Access (DMA) extension.
This feature allows storing pre-defined sequences of output RTIO events into the core device’s SDRAM, and playing them back at higher speeds than the CPU alone could achieve.
class artiq.coredevice.dma.CoreDMA(dmgr, core_device='core') Core device Direct Memory Access (DMA) driver.
Gives access to the DMA functionality of the core device.
erase(name) Removes the DMA trace with the given name from storage.
get_handle(name) Returns a handle to a previously recorded DMA trace. The returned handle is only valid until the next call to record() or erase().
playback(name) Replays a previously recorded DMA trace. This function blocks until the entire trace is submitted to the RTIO FIFOs.
playback_handle(handle) Replays a handle obtained with get_handle(). Using this function is much faster than playback() for replaying a set of traces repeatedly, but incurs the overhead of managing the handles onto the programmer.
record(name) Returns a context manager that will record a DMA trace called name. Any previously recorded trace with the same name is overwritten. The trace will persist across kernel switches.
class artiq.coredevice.dma.DMARecordContextManager Context manager returned by CoreDMA.record().
Upon entering, starts recording a DMA trace. All RTIO operations are redirected to a newly created DMA buffer after this call, and now is reset to zero.
Upon leaving, stops recording a DMA trace. All recorded RTIO operations are stored in a newly created trace, and now is restored to the value it had before the context manager was entered.

14.1. System drivers

81

ARTIQ Documentation, Release 7.8180.21c6f57

14.1.4 artiq.coredevice.cache module
class artiq.coredevice.cache.CoreCache(dmgr, core_device='core') Core device cache access get(key) Extract a value from the core device cache. After a value is extracted, it cannot be replaced with another value using put() until all kernel functions finish executing; attempting to replace it will result in a artiq. coredevice.exceptions.CacheError. If the cache does not contain any value associated with key, an empty list is returned. The value is not copied, so mutating it will change what’s sto-
red in the cache. Parameters key (str) – cache key Returns a list of 32-bit integers put(key, value) Put a value into the core device cache. The value will persist until reboot. To remove a value from the cache, call put() with an empty list. Parameters • key (str) – cache key • value (list) – a list of 32-bit integers

14.2 Digital I/O drivers
14.2.1 artiq.coredevice.ttl module
Drivers for TTL signals on RTIO. TTL channels (including the clock generator) all support output event replacement. For example, pulses of “zero” length (e.g. TTLInOut.on() immediately followed by TTLInOut.off(), without a delay) are suppressed. class artiq.coredevice.ttl.TTLClockGen(dmgr, channel, acc_width=24, core_device='core')
RTIO TTL clock generator driver. This should be used with TTL channels that have a clock generator built into the gateware (not compatible with regular TTL channels). The time cursor is not modified by any function in this class.
Parameters • channel – channel number • acc_width – accumulator width in bits
frequency_to_ftw(frequency) Returns the frequency tuning word corresponding to the given frequency.
ftw_to_frequency(ftw) Returns the frequency corresponding to the given frequency tuning word.
set(frequency) Like set_mu(), but using Hz.

82

Chapter 14. Core drivers reference

ARTIQ Documentation, Release 7.8180.21c6f57
set_mu(frequency) Set the frequency of the clock, in machine units, at the current position of the time cursor.
This also sets the phase, as the time of the first generated rising edge corresponds to the time of the call.
The clock generator contains a 24-bit phase accumulator operating on the RTIO clock. At each RTIO clock tick, the frequency tuning word is added to the phase accumulator. The most significant bit of the phase accumulator is connected to the TTL line. Setting the frequency tuning word has the additional effect of setting the phase accumulator to 0x800000.
Due to the way the clock generator operates, frequency tuning words that are not powers of two cause jitter of one RTIO clock cycle at the output.
stop() Stop the toggling of the clock and set the output level to 0.
class artiq.coredevice.ttl.TTLInOut(dmgr, channel, gate_latency_mu=None, core_device='core') RTIO TTL input/output driver.
In output mode, provides functions to set the logic level on the signal.
In input mode, provides functions to analyze the incoming signal, with real-time gating to prevent overflows.
RTIO TTLs supports zero-length transition suppression. For example, if two pulses are emitted back-to-back with no delay between them, they will be merged into a single pulse with a duration equal to the sum of the durations of the original pulses.
This should be used with bidirectional channels.
Note that the channel is in input mode by default. If you need to drive a signal, you must call output(). If the channel is in output mode most of the time in your setup, it is a good idea to call output() in the startup kernel.
There are three input APIs: gating, sampling and watching. When one API is active (e.g. the gate is open, or the input events have not been fully read out), another API must not be used simultaneously.
Parameters channel – channel number
count(up_to_timestamp_mu) Consume RTIO input events until the hardware timestamp counter has reached the specified timestamp and return the number of observed events.
This function does not interact with the timeline cursor.
See the gate_*() family of methods to select the input transitions that generate events, and timestamp_mu() to obtain the timestamp of the first event rather than an accumulated count.
Parameters up_to_timestamp_mu – The timestamp up to which execution is blocked, that is, up to which input events are guaranteed to be taken into account. (Events with later timestamps might still be registered if they are already available.)
Returns The number of events before the timeout elapsed (0 if none observed).

14.2. Digital I/O drivers

83

ARTIQ Documentation, Release 7.8180.21c6f57
Examples
To count events on channel ttl_input, up to the current timeline position:
ttl_input.count(now_mu())
If other events are scheduled between the end of the input gate period and when the number of events is counted, using now_mu() as timeout consumes an unnecessary amount of timeline slack. In such cases, it can be beneficial to pass a more precise timestamp, for example:
gate_end_mu = ttl_input.gate_rising(100 * us)
# Schedule a long pulse sequence, represented here by a delay. delay(10 * ms)
# Get number of rising edges. This will block until the end of # the gate window, but does not wait for the long pulse sequence # afterwards, thus (likely) completing with a large amount of # slack left. num_rising_edges = ttl_input.count(gate_end_mu)
The gate_*() family of methods return the cursor at the end of the window, allowing this to be expressed in a compact fashion:
ttl_input.count(ttl_input.gate_rising(100 * us))
gate_both(duration) Register both rising and falling edge events for the specified duration (in seconds). The time cursor is advanced by the specified duration. Returns The timeline cursor at the end of the gate window, for convenience when used with count()/timestamp_mu().
gate_both_mu(duration) Register both rising and falling edge events for the specified duration (in machine units). The time cursor is advanced by the specified duration. Returns The timeline cursor at the end of the gate window, for convenience when used with count()/timestamp_mu().
gate_falling(duration) Register falling edge events for the specified duration (in seconds). The time cursor is advanced by the specified duration. Returns The timeline cursor at the end of the gate window, for convenience when used with count()/timestamp_mu().
gate_falling_mu(duration) Register falling edge events for the specified duration (in machine units). The time cursor is advanced by the specified duration. Returns The timeline cursor at the end of the gate window, for convenience when used with count()/timestamp_mu().

84

Chapter 14. Core drivers reference

ARTIQ Documentation, Release 7.8180.21c6f57
gate_rising(duration) Register rising edge events for the specified duration (in seconds). The time cursor is advanced by the specified duration. Returns The timeline cursor at the end of the gate window, for convenience when used with count()/timestamp_mu().
gate_rising_mu(duration) Register rising edge events for the specified duration (in machine units). The time cursor is advanced by the specified duration. Returns The timeline cursor at the end of the gate window, for convenience when used with count()/timestamp_mu().
input() Set the direction to input at the current position of the time cursor. There must be a delay of at least one RTIO clock cycle before any other command can be issued. This method only configures the direction at the FPGA. When using buffered I/O interfaces, such as the Sinara TTL cards, the buffer direction must be configured separately in the hardware.
off() Set the output to a logic low state at the current position of the time cursor. The channel must be in output mode. The time cursor is not modified by this function.
on() Set the output to a logic high state at the current position of the time cursor. The channel must be in output mode. The time cursor is not modified by this function.
output() Set the direction to output at the current position of the time cursor. There must be a delay of at least one RTIO clock cycle before any other command can be issued. This method only configures the direction at the FPGA. When using buffered I/O interfaces, such as the Sinara TTL cards, the buffer direction must be configured separately in the hardware.
pulse(duration) Pulse the output high for the specified duration (in seconds). The time cursor is advanced by the specified duration.
pulse_mu(duration) Pulse the output high for the specified duration (in machine units). The time cursor is advanced by the specified duration.
sample_get() Returns the value of a sample previously obtained with sample_input(). Multiple samples may be queued (using multiple calls to sample_input()) into the RTIO FIFOs and subsequently read out using multiple calls to this function. This function does not interact with the time cursor.

14.2. Digital I/O drivers

85

ARTIQ Documentation, Release 7.8180.21c6f57
sample_get_nonrt() Convenience function that obtains the value of a sample at the position of the time cursor, breaks realtime, and returns the sample value.
sample_input() Instructs the RTIO core to read the value of the TTL input at the position of the time cursor. The time cursor is not modified by this function.
timestamp_mu(up_to_timestamp_mu) Return the timestamp of the next RTIO input event, or -1 if the hardware timestamp counter reaches the given value before an event is received. This function does not interact with the timeline cursor. See the gate_*() family of methods to select the input transitions that generate events, and count() for usage examples. Parameters up_to_timestamp_mu – The timestamp up to which execution is blocked, that is, up to which input events are guaranteed to be taken into -
account. (Events with later timestamps might still be registered if they are already available.) Returns The timestamp (in machine units) of the first event received; -1 on timeout.
watch_done() Stop watching the input at the position of the time cursor. Returns True if the input has not changed state while it was being watched. The time cursor is not modified by this function. This function always makes the slack negative.
watch_stay_off() Like watch_stay_on(), but for low levels.
watch_stay_on() Checks that the input is at a high level at the position of the time cursor and keep checking until watch_done() is called. Returns True if the input is high. A call to this function must always be followed by an eventual call to watch_done() (use e.g. a try/finally construct to ensure this). The time cursor is not modified by this function.
class artiq.coredevice.ttl.TTLOut(dmgr, channel, core_device='core') RTIO TTL output driver. This should be used with output-only channels. Parameters channel – channel number
off() Set the output to a logic low state at the current position of the time cursor. The time cursor is not modified by this function.
on() Set the output to a logic high state at the current position of the time cursor. The time cursor is not modified by this function.

86

Chapter 14. Core drivers reference

ARTIQ Documentation, Release 7.8180.21c6f57

pulse(duration) Pulse the output high for the specified duration (in seconds). The time cursor is advanced by the specified duration.
pulse_mu(duration) Pulse the output high for the specified duration (in machine units). The time cursor is advanced by the specified duration.

14.2.2 artiq.coredevice.edge_counter module

Driver for RTIO-enabled TTL edge counter.
Like for the TTL input PHYs, sensitivity can be configured over RTIO (gate_rising(), etc.). In contrast to the former, however, the count is accumulated in gateware, and only a single input event is generated at the end of each gate period:
with parallel: doppler_cool() self.pmt_counter.gate_rising(1 * ms)

with parallel: readout() self.pmt_counter.gate_rising(100 * us)

print("Doppler cooling counts:", self.pmt_counter.fetch_count()) print("Readout counts:", self.pmt_counter.fetch_count())

For applications where the timestamps of the individual input events are not required, this has two advantages over TTLInOut.count() beyond raw throughput. First, it is easy to count events during multiple separate periods without blocking to read back counts in between, as illustrated in the above example. Secondly, as each count total only takes up a single input event, it is much easier to acquire counts on several channels in parallel without risking input FIFO overflows:
# Using the TTLInOut driver, pmt_1 input events are only processed # after pmt_0 is done counting. To avoid RTIOOverflows, a round-robin # scheme would have to be implemented manually.

with parallel: self.pmt_0.gate_rising(10 * ms) self.pmt_1.gate_rising(10 * ms)

counts_0 = self.pmt_0.count(now_mu()) # blocks counts_1 = self.pmt_1.count(now_mu())

#

# Using gateware counters, only a single input event each is # generated, greatly reducing the load on the input FIFOs:

with parallel: self.pmt_0_counter.gate_rising(10 * ms) self.pmt_1_counter.gate_rising(10 * ms)

(continues on next page)

14.2. Digital I/O drivers

87

ARTIQ Documentation, Release 7.8180.21c6f57
(continued from previous page)
counts_0 = self.pmt_0_counter.fetch_count() # blocks counts_1 = self.pmt_1_counter.fetch_count()
See artiq.gateware.rtio.phy.edge_counter and artiq.gateware.eem.DIO.add_std() for the gateware components.
exception artiq.coredevice.edge_counter.CounterOverflow Raised when an edge counter value is read which indicates that the counter might have overflowed.
class artiq.coredevice.edge_counter.EdgeCounter(dmgr, channel, gateware_width=31, core_device='core')
RTIO TTL edge counter driver driver. Like for regular TTL inputs, timeline periods where the counter is sensitive to a chosen set of input transitions can be specified. Unlike the former, however, the specified edges do not create individual input events; rather, the total count can be requested as a single input event from the core (typically at the end of the gate window).
Parameters • channel – The RTIO channel of the gateware phy. • gateware_width – The width of the gateware counter register, in bits. This is only used for overflow handling; to change the size, the gateware needs to be rebuilt.
fetch_count() → numpy.int32 Wait for and return count total from previously requested input event. It is valid to trigger multiple gate periods without immediately reading back the count total; the results will be returned in order on subsequent fetch calls. This function blocks until a result becomes available.
fetch_timestamped_count(timeout_mu=<Mock name='mock.int64()' id='140737283821088'>) -> (numpy.int64, numpy.int32)
Wait for and return the timestamp and count total of a previously requested input event. It is valid to trigger multiple gate periods without immediately reading back the count total; the results will be returned in order on subsequent fetch calls. This function blocks until a result becomes available or the given timeout elapses.
Returns A tuple of timestamp (-1 if timeout elapsed) and counter value. (The timestamp is that of the requested input event – typically the gate closing time – and not that of any input edges.)
gate_both(duration) Count both rising and falling edges for the given duration, and request the total at the end. The counter is reset at the beginning of the gate period. Use set_config() directly for more detailed control. Parameters duration – The duration for which the gate is to stay open. Returns The timestamp at the end of the gate period, in machine units.
gate_both_mu(duration_mu) See gate_both_mu().

88

Chapter 14. Core drivers reference

ARTIQ Documentation, Release 7.8180.21c6f57
gate_falling(duration) Count falling edges for the given duration and request the total at the end. The counter is reset at the beginning of the gate period. Use set_config() directly for more detailed control. Parameters duration – The duration for which the gate is to stay open. Returns The timestamp at the end of the gate period, in machine units.
gate_falling_mu(duration_mu) See gate_falling().
gate_rising(duration) Count rising edges for the given duration and request the total at the end. The counter is reset at the beginning of the gate period. Use set_config() directly for more detailed control. Parameters duration – The duration for which the gate is to stay open. Returns The timestamp at the end of the gate period, in machine units.
gate_rising_mu(duration_mu) See gate_rising().
set_config(count_rising: bool, count_falling: bool, send_count_event: bool, reset_to_zero: bool) Emit an RTIO event at the current timeline position to set the gateware configuration. For most use cases, the gate_* wrappers will be more convenient. Parameters • count_rising – Whether to count rising signal edges. • count_falling – Whether to count falling signal edges. • send_count_event – If True, an input event with the current counter value is generated on the next clock cycle (once). • reset_t-
o_zero – If True, the counter value is reset to zero on the next clock cycle (once).
14.2.3 artiq.coredevice.shiftreg module
class artiq.coredevice.shiftreg.ShiftReg(dmgr, clk, ser, latch, n=32, dt=9.999999999999999e-06, ser_in=None)
Driver for shift registers/latch combos connected to TTLs set(data)
Sets the values of the latch outputs. This does not advance the timeline and the waveform is generated before now.

14.2. Digital I/O drivers

89

ARTIQ Documentation, Release 7.8180.21c6f57

14.2.4 artiq.coredevice.spi2 module
Driver for generic SPI on RTIO. This ARTIQ coredevice driver corresponds to the “new” MiSoC SPI core (v2). Output event replacement is not supported and issuing commands at the same time is an error. class artiq.coredevice.spi2.NRTSPIMaster(dmgr, busno=0, core_device='core')
Core device non-realtime Serial Peripheral Interface (SPI) bus master. Owns one non-realtime SPI bus. With this driver, SPI transactions and are performed by the CPU without involving RTIO. Realtime and non-realtime buses are separate and defined at bitstream compilation time. See SPIMaster for a description of the methods. set_config_mu(flags=0, length=8, div=6, cs=1)
Set the config register. Note that the non-realtime SPI cores are usually clocked by the system clock and not the RTIO clock. In many cases, the SPI configuration is already set by the firmware and you do not need to call this method. class artiq.coredevice.spi2.SPIMaster(dmgr, channel, div=0, length=0, core_device='core') Core device Serial Peripheral Interface (SPI) bus master. Owns one SPI bus. This ARTIQ coredevice driver corresponds to the “new” MiSoC SPI core (v2). Transfer Sequence: • If ne-
cessary, set the config register (set_config() and set_config_mu()) to activate and configure the core and to set various transfer parameters like transfer length, clock divider, and chip selects. • write() to the data register. Writing starts the transfer. • If the transfer included submitting the SPI input data as an RTIO input event (SPI_INPUT set), then read() the data. • If SPI_END was not set, repeat the transfer sequence. A transaction consists of one or more transfers. The chip select patt-
ern is asserted for the entire length of the transaction. All but the last transfer are submitted with SPI_END cleared in the configuration register. Parameters
• channel – RTIO channel number of the SPI bus to control. • div – Initial CLK divider, see also: update_xfer_duration_mu() • length – Initial transfer length, see also: update_xfer_duration_mu() • core_device – Core device name frequency_to_div(f ) Convert a SPI clock frequency to the closest SPI clock divider. read() Read SPI data submitted by the SPI core. For bit alignment and bit ordering see set_config(). This method does not alter the timeline. Returns SPI input data.

90

Chapter 14. Core drivers reference

ARTIQ Documentation, Release 7.8180.21c6f57
set_config(flags, length, freq, cs) Set the configuration register. • If SPI_CS_POLARITY is cleared (cs active low, the default), “cs all deasserted” means “all cs_n bits high”. • cs_n is not mandatory in the pads supplied to the gateware core. Framing and chip selection can also be handled independently through other means, e.g. TTLOut. • If there is a miso wire in the pads supplied in the gateware, input and output may be two signals (“4-wire SPI”), otherwise mosi must be used for both output an-
d input (“3-wire SPI”) and SPI_HALF_DUPLEX must to be set when reading data or when the slave drives the mosi signal at any point. • The first bit output on mosi is always the MSB/LSB (depending on SPI_LSB_FIRST) of the data written, independent of the length of the transfer. The last bit input from miso always ends up in the LSB/MSB (respectively) of the data read, independent of the length of the transfer. • cs is asserted at the beginning and deasserted at the end of the transaction. • cs handl-
ing is agnostic to whether it is one-hot or decoded somewhere downstream. If it is decoded, “cs all deasserted” should be handled accordingly (no slave selected). If it is one-hot, asserting multiple slaves should only be attempted if miso is either not connected between slaves, or open collector, or correctly multiplexed externally. • Changes to the configuration register take effect on the start of the next transfer with the exception of SPI_OFFLINE which takes effect immediately. • The SPI core-
 can only be written to when it is idle or waiting for the next transfer data. Writing (set_config(), set_config_mu() or write()) when the core is busy will result in an RTIO busy error being logged. This method advances the timeline by one coarse RTIO clock cycle. Configuration flags: • SPI_OFFLINE: all pins high-z (reset=1) • SPI_END: transfer in progress (reset=1) • SPI_INPUT: submit SPI read data as RTIO input event when transfer is complete (reset=0) • SPI_CS_POLARITY: active level of cs_n (r-
eset=0) • SPI_CLK_POLARITY: idle level of clk (reset=0) • SPI_CLK_PHASE: first edge after cs assertion to sample data on (reset=0). In Motorola/Freescale SPI language (SPI_CLK_POLARITY, SPI_CLK_PHASE) == (CPOL, CPHA): – (0, 0): idle low, output on falling, input on rising – (0, 1): idle low, output on rising, input on falling – (1, 0): idle high, output on rising, input on falling – (1, 1): idle high, output on falling, input on rising • SPI_LSB_FIRST: LSB is the first bit on the wire (reset=0) • -
SPI_HALF_DUPLEX: 3-wire SPI, in/out on mosi (reset=0)
Parameters
• flags – A bit map of SPI_* flags. • length – Number of bits to write during the next transfer. (reset=1)

14.2. Digital I/O drivers

91

ARTIQ Documentation, Release 7.8180.21c6f57

• freq – Desired SPI clock frequency. (reset=f_rtio/2) • cs – Bit pattern of chip selects to assert. Or number of the chip select to assert if cs is
decoded downstream. (reset=0)
set_config_mu(flags, length, div, cs) Set the config register (in SPI bus machine units). See also:
set_config()
Parameters • flags – A bit map of SPI_* flags. • length – Number of bits to write during the next transfer. (reset=1) • div – Counter load value to divide the RTIO clock by to generate the SPI clock. (minimum=2, reset=2) f_rtio_clk/f_spi == div. If div is odd, the setup phase of the SPI clock is one coarse RTIO clock cycle longer than the hold phase. • cs – Bit pattern of chip selects to assert. Or number of the chip select to assert if cs is decoded downstream. (reset=0)
update_xfer_duration_mu(div, length) Calculate and set the transfer duration. This method updates the SPI transfer duration which is used in write() to advance the timeline. Use this method (and avoid having to call set_config_mu()) when the divider and transfer length have been configured (using set_config() or set_config_mu()) by previous experiments and are known. This method is portable and can also be called from e.g. __init__().
Warning: If this method is called while recording a DMA sequence, the playback of the sequence will not update the driver state. When required, update the driver state manually (by calling this method) after playing back a DMA sequence.
Parameters • div – SPI clock divider (see: set_config_mu()) • length – SPI transfer length (see: set_config_mu())
write(data) Write SPI data to shift register register and start transfer. • The data register and the shift register are 32 bits wide. • Data writes take one ref_period cycle. • A transaction consisting of a single transfer (SPI_END) takes xfer_duration_mu =(n + 1)*div cycles RTIO time where n is the number of bits and div is the SPI clock divider. • Transfers in a multi-transfer transaction take up to one SPI clock cycle less time depending on multiple parameters. Advanced users may rewind the ti-
meline appropriately to achieve faster multi-transfer transactions. • The SPI core will be busy for the duration of the SPI transfer.

92

Chapter 14. Core drivers reference

ARTIQ Documentation, Release 7.8180.21c6f57
• For bit alignment and bit ordering see set_config(). • The SPI core can only be written to when it is idle or waiting for the next transfer data. Writing
(set_config(), set_config_mu() or write()) when the core is busy will result in an RTIO busy error being logged. This method advances the timeline by the duration of one single-transfer SPI transaction (xfer_duration_mu). Parameters data – SPI output data to be written.
14.2.5 artiq.coredevice.i2c module
Non-realtime drivers for I2C chips on the core device. class artiq.coredevice.i2c.I2CSwitch(dmgr, busno=0, address=232, core_device='core')
Driver for the I2C bus switch. PCA954X (or other) type detection is done by the CPU during I2C init. I2C transactions not real-time, and are performed by the CPU without involving RTIO. On the KC705, this chip is used for selecting the I2C buses on the two FMC connectors. HPC=1, LPC=2. set(channel)
Enable one channel. :param channel: channel number (0-7) unset()
Disable output of the I2C switch. class artiq.coredevice.i2c.PCF8574A(dmgr, busno=0, address=124, core_device='core')
Driver for the PCF8574 I2C remote 8-bit I/O expander. I2C transactions not real-time, and are performed by the CPU without involving RTIO. get()
Retrieve quasi-bidirectional pin input data. Returns Pin data
set(data) Drive data on the quasi-bidirectional pins. Parameters data – Pin data. High bits are weakly driven high (and thus inputs), low bits are strongly driven low.
class artiq.coredevice.i2c.TCA6424A(dmgr, busno=0, address=68, core_device='core') Driver for the TCA6424A I2C I/O expander. I2C transactions not real-time, and are performed by the CPU without involving RTIO. On the NIST QC2 hardware, this chip is used for switching the directions of TTL buffers. set(outputs) Drive all pins of the chip to the levels given by the specified 24-bit word. On the QC2 hardware, the LSB of the word determines the direction of TTL0 (on a given FMC card) and the MSB that -
of TTL23. A bit set to 1 means the TTL is an output.

14.2. Digital I/O drivers

93

ARTIQ Documentation, Release 7.8180.21c6f57
artiq.coredevice.i2c.i2c_poll(busno, busaddr) Poll I2C device at address. Parameters • busno – I2C bus number • busaddr – 8 bit I2C device address (LSB=0) Returns True if the poll was ACKed
artiq.coredevice.i2c.i2c_read_byte(busno, busaddr) Read one byte from a device. Parameters • busno – I2C bus number • busaddr – 8 bit I2C device address (LSB=0) Returns Byte read
artiq.coredevice.i2c.i2c_read_many(busno, busaddr, addr, data) Transfer multiple bytes from a device. Parameters • busno – I2c bus number • busaddr – 8 bit I2C device address (LSB=0) • addr – 8 bit data address • data – List of integers to be filled with the data read. One entry ber byte.
artiq.coredevice.i2c.i2c_write_byte(busno, busaddr, data, ack=True) Write one byte to a device. Parameters • busno – I2C bus number • busaddr – 8 bit I2C device address (LSB=0) • data – Data byte to be written • nack – Allow NACK
artiq.coredevice.i2c.i2c_write_many(busno, busaddr, addr, data, ack_last=True) Transfer multiple bytes to a device. Parameters • busno – I2c bus number • busaddr – 8 bit I2C device address (LSB=0) • addr – 8 bit data address • data – Data bytes to be written • ack_last – Expect I2C ACK of the last byte written. If False, the last byte may be NACKed (e.g. EEPROM full page writes).

94

Chapter 14. Core drivers reference

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:23.816Z
- **Text Length:** 193143 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
