/*=========================================================
                EduPredict AI Boot Sequence
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const progress = document.querySelector(".progress-fill");
    const percentage = document.getElementById("percentage");
    const status = document.getElementById("status");

    const line1 = document.getElementById("line1");
    const line2 = document.getElementById("line2");
    const line3 = document.getElementById("line3");
    const line4 = document.getElementById("line4");
    const line5 = document.getElementById("line5");

    const steps = [

        {
            percent:20,
            status:"Initializing Neural Engine...",
            element:line1,
            text:"✔ Neural Engine Initialized"
        },

        {
            percent:40,
            status:"Loading Machine Learning Pipeline...",
            element:line2,
            text:"✔ Machine Learning Pipeline Loaded"
        },

        {
            percent:65,
            status:"Loading CatBoost Regressor...",
            element:line3,
            text:"✔ CatBoost Model Loaded"
        },

        {
            percent:85,
            status:"Loading XGBoost Regressor...",
            element:line4,
            text:"✔ XGBoost Model Loaded"
        },

        {
            percent:100,
            status:"Preparing Prediction Dashboard...",
            element:line5,
            text:"✔ Dashboard Ready"
        }

    ];

    let currentStep = 0;
    let currentPercent = 0;

    const timer = setInterval(() => {

        if(currentStep >= steps.length){

            clearInterval(timer);

            status.innerHTML =
                '<i class="fa-solid fa-circle-check"></i> AI Ready';

            percentage.textContent = "100%";

            setTimeout(()=>{

                window.location.href="/predictdata";

            },500);

            return;

        }

        const step = steps[currentStep];

        step.element.innerHTML =
        `<i class="fa-solid fa-check"></i> ${step.text}`;

        status.textContent = step.status;

        animateProgress(currentPercent,step.percent);

        currentPercent = step.percent;

        currentStep++;

    },600);

    function animateProgress(start,end){

        let value = start;

        const animation = setInterval(()=>{

            value++;

            progress.style.width = value+"%";

            percentage.textContent = value+"%";

            if(value>=end){

                clearInterval(animation);

            }

        },12);

    }

});

