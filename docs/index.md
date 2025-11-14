<div style="display: flex; align-items: center">
    <img alt="" src="assets/logo.svg" width="100" height="100">
    <h1 style="margin-bottom: 2rem; margin-left: 2rem;">YAPTIDE User Documentation</h1>
</div>

The YAPTIDE platform provides an easy way to work with particle transport simulations.
Most popular particle transport codes, like Geant4, TOPAS, MCNP require preparation of the input text files and running the simulation in a terminal.
The FLUKA code has a graphical user interface, called Flair, but it requires Linux (or Windows with WSL) to run.

The YAPTIDE platform provides a consistent graphical user interface for three simulation toolkits: SHIELD-HIT12A, FLUKA, and Geant4.
Without any login or registration, it allows to define simulations, browse the results of already finished simulations, and export ready-to-run input files that can be passed directly to the simulator.
For users with access to the computing resources (i.e. registered in the [PlGrid](https://portal.plgrid.pl/) platform or having deployed the project locally) it allows to submit jobs to the simulators.

## How to use the platform

### Demo version

![Demo landing page](assets/demo.png)

Demo version of the platform is hosted on the GitHub pages as [yaptide.github.io](https://yaptide.github.io/web_dev).
This version is free for use and doesn't require registration or login.
The following functionalities are available:

  - defining and visualizing simulation geometry and materials
  - defining scoring geometry, scored quantities and advanced scoring options (like filtering)
  - defining particle source
  - specifying simulation settings (like physics parameters)
  - generating files with simulation input (to be executed on user resources)
  - browsing results of simulation (previously calculated using YAPTIDE platform or other software)
  - running the simulation with Geant4 directly on users' machines


### Full version

![Simulations page - available for logged in users](assets/simulations.png)

Full version is hosted in the PlGrid infrastructure and requires registration and login. To access the platform visit [yaptide.c3.plgrid.pl](https://yaptide.c3.plgrid.pl).

You'll be able to execute your SHIELD-HIT12A and FLUKA simulations in the cloud (few machines in C3 PlGrid Cloud) or HPC resources (Ares supercomputer in ACK Cyfronet). 

!!! note
    The platform requires registration and allows the access for selected group of users
    with account in the PLGrid infrastructure. To register in the platform, please contact the administrator.