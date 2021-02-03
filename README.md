# Acknowledgments
Graphics used come from the Crestron application market, Slate theme - https://applicationmarket.crestron.com/slate-theme-documentation/
See https://www.crestron.com/developer for more info.

# Description
This is a very simple Crestron CH5 based project with the web page processor connection (XPanel)
It s not meant to be pretty or a fully working project, it's more for getting a basic project working and giving an idea of where to change the look of CH5 components using CSS.
There is also the option to use the emulator, should a processor not be available.

This project includes all required files, including the ones from npm.
Updates would need to be done manually.
This is to keep things as simple as possible.

# Processor
This should work on 3/4 series processors.
There is a license requirement (SW_MOBILITY) but there is a 60 day trial period.
Should the trial run out it can be reset using initialize/restore on the processor.
(Tested using an RMC3 puf version 1.7000.0021)

# Installation
If you haven't already got the ch5-utilities-cli;
First you will need to install node.js from https://nodejs.org

Then open a cmd window as admin and run the command;
    npm i -g @crestron/ch5-utilities-cli

If you already have it make sure it is version 0.1.52 or higher, 0.1.47 will not work for the deploy command.

# VS Code Extension
In VS Code, install the Crestron Components CH5 extension.
Close and reopen VS Code after this step.
I also install Live Server extension by Ritwick Dey, this allows the panel to be run in a browser, right click index.html in the folder view and use the 'Open with Live Server' option

# Setting up Chrome (excert from "Getting Started: Crestron CH5 Beta PDF)
Chrome Emulation of TSW-x60 Devices
While the CH5 emulator feature can emulate control system interactions, it cannot change
the view port size or pixel density to emulate TSW-x60 touch screen devices. However,
Chrome provides utilities to support mobile devices.

Use the web utilities and the settings provided below to emulate screen rendering on a
workstation to ensure that the project displays accurately on a TSW-x60 device.
Device Name Width Height Device Pixel Ratio Device Type
TSW-1060 1280 pixels 800 pixels 1 Mobile
TSW-760 1261 pixels 739 pixels 0.8125 Mobile
TSW-560 640 pixels 363 pixels 1.5 Mobile
TSW-560P 363 pixels 640 pixels 1.5 Mobile
For information on how to configure Chrome, refer to
https://developers.google.com/web/tools/chrome-devtools/device-mode/#custom.
NOTE: To ensure that the emulation is functioning correctly, refresh the Chrome web
browser after entering emulation mode.

# Setting up the project
Open the folder containing the project in VS Code.
Open a termial window in VS Code
If this is the first time using VS Code and if it says Windows Powershell at the top of the terminal window run the command;
 Set-ExecutionPolicy RemoteSigned

# If changing the Simpl connection
Connection information is in javascript\WebPanel.js 
I've left the commented out lines for info, now you only need the IPID to be set. 


# Build project archive for loading to the touch panel
Comment out the emulator scripts or they will work on the touchpanel and xpanel.
If you don't have a processor make sure they are not commented out.

You'll need to edit the WebPanel.js file in the javascript folder and change the IP addresses to the one for your processor.

In the terminal run the command (instead of "C:\project folder\app" use the filepath of the folder the index.html file is in);
ch5-cli archive -p CH5-Test-Project -d "C:\project folder\app" -o dist

This will create the .ch5z file that needs to be loaded to the touchpanel or processor

# Load project to touch panel or processor
In the terminal window (replace  ip_address with the touchpanels or processors IP address...)
 to deploy to a touch panel;
 ch5-cli deploy -H ip_address -t touchscreen dist/CH5-Test-Project.ch5z
 
 to deploy to a processor;
 ch5-cli deploy -H ip_address -p -t web dist/CH5-Test-Project.ch5z

 (using the -p flag means this will prompt for login details for the processor )