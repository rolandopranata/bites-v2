class MenuFood extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
      <div id="foods"><h2 class="menu-title">Food Menu</h2></div>
      `;
	}
}

customElements.define('menu-food', MenuFood);
