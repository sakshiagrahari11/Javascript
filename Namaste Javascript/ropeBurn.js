function ropeBurn() {
    
    console.log("Burn the one end of first rope and both ends of second rope.");

    setTimeout(() => {
        console.log("Second rope burns after 30 min");

        setTimeout(() => {
            console.log("First Rope burns completely after 45 minutes.");           
        }, 15 * 60 * 1000); 
    }, 30 * 60 * 1000);
}

ropeBurn();
