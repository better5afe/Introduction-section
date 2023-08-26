const openBtn = document.querySelector('.nav__btns--open');
const closeBtn = document.querySelector('.nav__btns--close');
const navList = document.querySelector('.nav__list');
const parentListItems = document.querySelectorAll('.parent-li');
const nestedListItems = document.querySelectorAll('.nested-li');
const dropdownArrows = document.querySelectorAll('.dropdown-arrow');
const nestedLists = document.querySelectorAll('.nav__list--nested');
const shadow = document.querySelector('.shadow');

const openNavHandler = () => {
	navList!.classList.add('nav-active');
	shadow!.classList.add('shadow-active');
	openBtn!.classList.remove('active');
	closeBtn!.classList.add('active');
};

const closeNavHandler = () => {
	navList!.classList.remove('nav-active');
	shadow!.classList.remove('shadow-active');
	closeBtn!.classList.remove('active');
	openBtn!.classList.add('active');
};

parentListItems.forEach((parentListItem) => {
	parentListItem.addEventListener('click', () => {
		const parentId = parentListItem.id;

		dropdownArrows.forEach((dropdownArrow) => {
			if (dropdownArrow.classList.contains(parentId)) {
				dropdownArrow.classList.toggle('rotated');
				return;
			}
		});

		nestedLists.forEach((nestedList) => {
			if (nestedList.classList.contains(parentId)) {
				nestedList.classList.toggle('active-list');
				return;
			}
		});
	});
});

nestedListItems.forEach((nestedListItem) =>
	nestedListItem.addEventListener('click', () => {
		closeNavHandler();
	})
);

openBtn!.addEventListener('click', () => {
	openNavHandler();
});

closeBtn!.addEventListener('click', () => {
	closeNavHandler();
});
