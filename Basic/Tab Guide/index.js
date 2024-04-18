const TAB_MENU = document.getElementById(`tab_menu`);
const TAB_ELEMENTS = document.getElementsByClassName("tab_index");
const DIV_TABS = document.getElementById(`main_container`);

TAB_MENU.addEventListener("click", function(e){
	e.preventDefault();

	let clicked_tab = e.target.closest("a").getAttribute("href").slice(1);

	document.getElementById(clicked_tab).hidden = false;
	Array.from(DIV_TABS.children).forEach( element => {
		console.log(element.id);
		if(element.id != clicked_tab){element.hidden = true}
	})

})

