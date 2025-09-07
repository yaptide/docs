# Running the simulations

## Overview

We assume that you have already registered and logged in to the platform.
To run the simulation you need to have proper project loaded in the editor window. 

![Simulation set up](assets/running/simulation_set_up.png)

To run the simulation, click `RUN` in the title bar, or select Simulation page from the Navigation Bar on the left.

## Simulations Page

The Simulations Page consists of 3 main sections:

1. Simulations Archive, where all previously run simulations are presented in paginated view
2. Run new simulation form which presents different ways to run the simulation currently loaded to Editor
3. Last 5 simulations, which always displays the 5 most recent simulations

> [!NOTE] For convenience, the sidebar with sections 2. and 3. is pinned to Simulations, Input files, and Results pages.
> You can run and see recent simulations from each of these pages.

![Simulations Page](assets/running/simulations_page.png)

## Running the simulation

You could choose where to run simulation:

 - as *DIRECT RUN* in the dedicated cloud resources (currently limited to 15 cores machine in the C3 PLGrid Cloud)
 - as *BATCH RUN* in the HPC resources (by submitting the job to the SLURM batch management system in Ares supercomputer)

 The direct run may have much shorter time to start the simulation, but the parallelism is limited to 15 cores.
 The batch run may take longer to start the simulation, but the parallelism is limited only by the resources available in the HPC cluster.

## Direct run

Direct run is the default option. In the form, you can change the name (doesn't need to be the same as the project title),
number of tasks, and overwrite the number of primary particles (the default is specified under SETTINGS in Editor page).

![Direct Run](assets/running/direct_run.png)

When the parameters are set, click `START SIMULATION` to send it to the YAPTIDE server.
After successful submission, the simulation is in PENDING state.
The simulation will start automatically when the resources will be available, then it will change to RUNNING state,
and you will be able to see the progress of the simulation by observing the progress bar.

![Pending state](assets/running/direct_run_pending.png)
![Running state](assets/running/direct_run_running.png)

The simulation is also present in the pinned "Last 5 simulations" section.

![Pinned to Last 5 simulations section](assets/running/direct_run_queue.png)

When the simulation finishes, it will automatically navigate to Results page and display the results.

### Viewing results

Once all tasks are completed, the status of the simulation will change to `COMPLETED` and you will be able to see the results of the simulation.
You will be automatically redirected to the `Results` tab in the left menu.
First you will see a depth dose profile for the `AlongBeamAxis` scoring geometry.

![Alt text](assets/running/image-6.png)

The plots are interactive, using mouse coursor you can zoom selected fragments of the plot:

![Alt text](assets/running/image-8.png)

![Alt text](assets/running/image-9.png)

Both axis scale can be changed to logarithmic by right click in the axis area:

![Alt text](assets/running/image-10.png)
![Alt text](assets/running/image-11.png)

To revert the view you can click in the plot area and disable the logarithmic scale and zooming:
![Alt text](assets/running/image-12.png)

Plots data can be saved to CSV file by clicking on the `Export graph to CSV` button:
![Alt text](assets/running/image-13.png)
![Alt text](assets/running/image-14.png)

The YZ profile can be seen by selecting proper Output item. As we see collimator is stopping most of the protons on radius larger than 2 cm.

![Alt text](assets/running/image-15.png)

Two dimensional plots can be also inspected by plotting the profiles. On right click in the blue colored are we see proper menu:

![Alt text](assets/running/image-16.png)
![Alt text](assets/running/image-17.png)
![Alt text](assets/running/image-18.png)

X projection reveals that with 10^4 primaries statitics is not enough:
![Alt text](assets/running/image-19.png)

## Batch run

![Batch Run](assets/running/batch_run.png)

When executing simulation with 10^4 primaries and 15 cores, the process completed in 37 seconds. To obtain better statistics we will try to run 10^6 primaries on 100 parallel tasks. This is not possible with direct run, so we will use batch run.

![Alt text](assets/running/image-20.png)

The jobs may stay longer in `PENDING` state, waiting for the resources to be available.

![Alt text](assets/running/image-22.png)

once the simulation is running, the status will change to `RUNNING` and you will be able to see the progress of the simulation by observing the progress bar of each task.
The estimated time of each tasks may be seen by moving mouse cursor over the progress bar.

![Alt text](assets/running/image-23.png)