(function(){
    // Alerting the bot is running
    console.log("BM Bot is running!");

    // Declaring the cases
    const cases = [
        
    ];

    // Declaring the target elements
    const spans = document.querySelectorAll('span');

    // Looping through the spans
    spans.forEach((span)=>{
        //Detecting the click
        span.addEventListener('dblclick', function(){
            // Getting the ID
            const id = span.textContent.trim();

            console.log("ID: " + id);

            // Checking if the ID is in the cases
            if(cases.includes(id)){
                // Alerting the user
                span.innerHTML += `<br><p style="color: white; background: purple; padding: 5px 16px; border-radius: 6px; font-size: 14px; font-weight: bold;">BM CASE!!! Refer with provided materials</p>`;
            } else {
                // Alerting the user
                span.innerHTML += `<br><p style="color: white; background: blue; padding: 5px 16px; border-radius: 6px; font-size: 14px; font-weight: bold;">Not a BM Case. Handle cautiously</p>`;
            }
        });
    });

})();