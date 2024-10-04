// ** Создание ссылок для футрера
const initFooterLinks = async () => {
    try {
      const response = await fetch("js/data/footer-links.json");
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
  
      const sectionsContainer = document.getElementById("footer__links");
      const socialsContainer = document.getElementById("footer-socials");
  
      // ** Создание секций футера
      data.sections.forEach((section) => {
        const sectionElement = document.createElement("div");
        sectionElement.classList.add("footer__section");
  
        const titleElement = document.createElement("h2");
        titleElement.classList.add("footer__title");
        titleElement.textContent = section.title;
        sectionElement.appendChild(titleElement);
  
        const ulElement = document.createElement("ul");
        ulElement.classList.add("footer__menu-list");
  
        section.links.forEach((link) => {
          const liElement = document.createElement("li");
          liElement.classList.add("footer__menu-item");
  
          const aElement = document.createElement("a");
          aElement.classList.add("footer__menu-link");
          aElement.href = link.url;
          aElement.textContent = link.name;
  
          liElement.appendChild(aElement);
          ulElement.appendChild(liElement);
        });
  
        sectionElement.appendChild(ulElement);
        sectionsContainer.appendChild(sectionElement);
      });
  
      // ** Создание ссылок на социальные сети
      data.socials.forEach((social) => {
        const aElement = document.createElement("a");
        aElement.classList.add("footer__social-link");
        aElement.href = social.url;
        aElement.setAttribute("aria-label", social.name);
  
        const imgElement = document.createElement("img");
        imgElement.src = social.icon;
        imgElement.alt = `${social.name} icon`;
        imgElement.loading = "lazy";
  
        aElement.appendChild(imgElement);
        socialsContainer.appendChild(aElement);
      });
    } catch (error) {
      console.error("Error loading footer links:", error);
    }
  };
  
  export default initFooterLinks;
  