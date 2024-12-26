
let a = 'К сожалению добавить блюдо в корзину и сама корзина не работает!)';
alert(a)

//Tabs.....................................................................

const tabsBtn = document.querySelectorAll('.a__texts-box');
const tabsItems = document.querySelectorAll('.a__row');

tabsBtn.forEach(function (item) {
    item.addEventListener("click", function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if ( ! currentBtn.classList.contains('active')){
            tabsBtn.forEach(function (item) {
                item.classList.remove('active');
            });
            tabsItems.forEach(function (item) {
                item.classList.remove('active');
            });

            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
});





