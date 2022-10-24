const tabs = document.querySelectorAll(".tab");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        if (tab.classList.contains("selected")) {
            return;
        }

        selectTab(tab);
        displayInfo(tab);
    });
});

function selectTab(tab) {
    const tabSelected = document.querySelector(".tab.selected");
    tabSelected.classList.remove("selected");

    tab.classList.add("selected");
}

function displayInfo(tab) {
    const infoSelected = document.querySelector(".info.selected");
    infoSelected.classList.remove("selected");

    const InfoElementId = `info-${tab.id}`;

    const infoToBeDisplayed = document.getElementById(InfoElementId);
    infoToBeDisplayed.classList.add("selected");
}
