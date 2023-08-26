var openBtn = document.querySelector('.nav__btns--open');
var closeBtn = document.querySelector('.nav__btns--close');
var navList = document.querySelector('.nav__list');
var parentListItems = document.querySelectorAll('.parent-li');
var nestedListItems = document.querySelectorAll('.nav__list--nested-item');
var dropdownArrows = document.querySelectorAll('.dropdown-arrow');
var nestedLists = document.querySelectorAll('.nav__list--nested');
var shadow = document.querySelector('.shadow');
var openNavHandler = function () {
    navList.classList.add('nav-active');
    shadow.classList.add('shadow-active');
    openBtn.classList.remove('active');
    closeBtn.classList.add('active');
};
var closeNavHandler = function () {
    navList.classList.remove('nav-active');
    shadow.classList.remove('shadow-active');
    closeBtn.classList.remove('active');
    openBtn.classList.add('active');
};
parentListItems.forEach(function (parentListItem) {
    parentListItem.addEventListener('click', function () {
        var parentId = parentListItem.id;
        dropdownArrows.forEach(function (dropdownArrow) {
            if (dropdownArrow.classList.contains(parentId)) {
                dropdownArrow.classList.toggle('rotated');
                return;
            }
        });
        nestedLists.forEach(function (nestedList) {
            if (nestedList.classList.contains(parentId)) {
                nestedList.classList.toggle('list-active');
                return;
            }
        });
    });
});
nestedListItems.forEach(function (nestedListItem) {
    return nestedListItem.addEventListener('click', function () {
        closeNavHandler();
    });
});
openBtn.addEventListener('click', function () {
    openNavHandler();
});
closeBtn.addEventListener('click', function () {
    closeNavHandler();
});
