<div style="display: flex; align-items: center">
    <img alt="" src="assets/logo.svg" width="100" height="100">
    <h1 style="margin-bottom: 2rem; margin-left: 2rem;">YAPTIDE User Documentation</h1>
</div>

The YAPTIDE platform provides an easy way to work with particle transport simulations.
Most popular particle transport codes, like Geant4, TOPAS, MCNP require preparation of the input text files and running the simulation in a terminal.
The FLUKA code has an graphical user interface, called Flair, but it requires Linux (or Windows with WSL) to run.

The YAPTIDE platform provides a way to define a simulation in a web browser without the need to install any software. This is possible without any login or registration.
Having access to the computing resources (i.e. by registering in the [PlGrid](https://portal.plgrid.pl/) platform or deploying the project locally) allows to run the simulation in a parallel way using our web platform. The results of simulation can be visualized in the web browser or downloaded to the local computer.

## How to use the platform

### Demo version

![Demo landing page](assets/demo.png)

Demo version of the platform is hosted on the GitHub pages as [yaptide.github.io](https://yaptide.github.io/web_dev).
This version is free for use and doesn't require to register or login.
In demo version the platform works as an online editor for simulation input and results browser. The following functionalities are available:

  - defining and visualizing simulation geometry and materials
  - defining scoring geometry, scored quantities and advanced scoring options (like filtering)
  - defining particle source
  - specifying simulation settings (like physics parameters)
  - generating files with simulation input (to be executed on user resources)
  - browsing results of simulation (previously calculated using YAPTIDE platform or other software)


### Full version

![Simulations page - available for logged in users](assets/simulations.png)

Full version is hosted in the PlGrid infrastructure and requires registration and login. To access the platform visit [yaptide.c3.plgrid.pl](https://yaptide.c3.plgrid.pl).

You'll be able to execute your simulations in the cloud (few machines in C3 PlGrid Cloud) or HPC resources (Ares supercomputer in ACK Cyfronet). 

> [!NOTE]
> The platform requires registration and allows the access for selected group of users
> with account in the PLGrid infrastructure. To register in the platform, please contact the administrator.