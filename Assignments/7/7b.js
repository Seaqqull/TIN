// Imports
const { watch } = require('fs/promises');

// Variables initialization
const abortController = new AbortController();
const { signal } = abortController;
let updateNumber = 1;

// Parametrize run time of the application & directory
let fileName = "/users/allims/Documents/";
let applicationTime = 60000; // 1 minute

setTimeout(() => abortController.abort(), applicationTime);


// Behaviour declaration
const action = async(currentFile) => {
    console.log(`--- Start watching: ${currentFile}`)

    try {
        const watcher = watch(currentFile, { signal });
        for await (const event of watcher)
            console.log(`${updateNumber++}. Directory changes (${event.eventType}): ${event.filename}`)
    } catch(error) {
        if(error.name !== "AbortError")
            throw error;

        console.log("The application has stopped.");
    }

    console.log(`--- End watching: ${currentFile}`)
};

// Call
action(fileName);
