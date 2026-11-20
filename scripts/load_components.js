/**
 * Represents a generic HtmlComponent defined in /components.
 * HtmlComponents are used for including components defined in component files into
 * a custom element. This creates one source of truth for what repeated UI should look like
 * instead of changes needing to be replicated across every file.
 */
class HtmlComponent extends HTMLElement {
    /**
     * Loads an HTML component from a provided source file path.
     * @param {string} componentPath - The path to the component source file.
     */
    async loadComponent(componentPath) {
        const response = await fetch(componentPath);
        if (!response.ok) {
            throw new Error(
                `Failed to load component: ${componentPath}`
            );
        }

        this.innerHTML = await response.text();
    }
}

class SiteHeader extends HtmlComponent {
    connectedCallback() {
        this.loadComponent("/components/site-header.html");
    }
}

customElements.define("site-header", SiteHeader);