// Function to add CSS styles
const addCSS = () => {
  const styleElement = document.createElement("style");
  styleElement.textContent = `
  .campspace-widget {
    --color-campspace: #0db08a;
    --color-yellow-campspace: #fdb000;
    --color-light-grey-campspace: #f5f5f1;
    --color-dark-grey-campspace: #32322e;
    --color-blue-campspace: #4376ba;
    --color-primary-campspace: var(--color-campspace);
    --color-secondary-campspace: var(--color-yellow);
    --color-tertiary-campspace: var(--color-blue);
    --border-radius-small-campspace: 5px;
    --border-radius-medium-campspace: 8px;
    --border-radius-large-campspace: 16px;
    box-sizing: border-box;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
  
  .campspace-button {
    position: fixed;
    right: 20px;
    top: 50%;
    padding: 15px 30px;
    background-color: var(--color-campspace);
    color: var(--color-light-grey-campspace);
    border-radius: 8px 8px 0 0;
    border: none;
    cursor: pointer;
    z-index: 9999;
    transform: translate(50%, -50%) rotate(-90deg);
  }
  
  .campspace-widget article {
    border:none;
    width: clamp(15em, 50%, 34em);
    padding: 0;
    overflow: hidden;
}

.widget-images-slider picture{
      border-radius: var(--border-radius-medium-campspace);
    display: flex;
    width: 100%;
    height: 100%;
    animation: slide 16s infinite;
    list-style-type: none;
  }
  
  .widget-images-slider  img {
    width: 100%;  
  }
  
  .widget-content-overlay div {
    display: flex;
    justify-content: center;
    bottom: 0;
  }
  
  .widget-content-overlay img {
    position: absolute;
    width: 10em;
    left: 10px;
    top: 10px;
  }
  
  .widget-content-overlay p {
    position: absolute;
    right: 10px;
    top: -7px;
    font-weight: 500;
    padding: 0.5rem;
    border-radius: var(--border-radius-medium-campspace);
    color: var(--color-light-grey-campspace);
    background-color: var(--color-dark-grey-campspace);
  }
  
  .widget-content-overlay a {
    position: absolute;
    bottom: 50px;
    font-weight: 500;
    color: var(--color-light-grey-campspace);
    background-color: var(--color-blue-campspace);
    border-radius: 8px;
    text-decoration: none;
    touch-action: manipulation;
    padding: 1rem 2rem;
  }
  
  @keyframes slide {
    0%, 33% {
      transform: translateX(0);
    }
    36%, 67% {
      transform: translateX(-100%);
    }
    70%, 100% {
      transform: translateX(-200%);
    }
  }

  }


    `;
  document.head.appendChild(styleElement);
};

console.log("test");

// Function to create and append the widget to the body
const createWidget = (data) => {
  const section = document.createElement("section");
  section.className = "campspace-widget";
  // I want to load a image from the json file
  const widgetContent = `
        <button class="campspace-button" popovertarget="my-popover-widget" popovertargetaction="show">
          Book Now
        </button>
        <article popover id="my-popover-widget">
        
         <div class="widget-images-slider">
          <picture>
  <source srcset="https://campspace.com/media/detail/uploads/space/hc/_1/ab/hc_1ab9feda225824f00656866e916cfd6d.jpeg" type="image/webp">
  <source srcset="https://campspace.com/media/detail/uploads/space/hc/_1/ab/hc_1ab9feda225824f00656866e916cfd6d.jpeg" type="image/jpeg">
  <img src="https://campspace.com/media/detail/uploads/space/hc/_1/ab/hc_1ab9feda225824f00656866e916cfd6d.jpeg" alt="">

  <source srcset="https://campspace.com/media/detail/uploads/space/hc/_1/ab/hc_1ab9feda225824f00656866e916cfd6d.jpeg" type="image/webp">
  <source srcset="https://campspace.com/media/detail/uploads/space/hc/_1/ab/hc_1ab9feda225824f00656866e916cfd6d.jpeg" type="image/jpeg">
  <img src="https://campspace.com/media/detail/uploads/space/hc/_1/ab/hc_1ab9feda225824f00656866e916cfd6d.jpeg" alt="">

  <source srcset="https://campspace.com/media/detail/uploads/space/hc/_1/ab/hc_1ab9feda225824f00656866e916cfd6d.jpeg" type="image/webp">
  <source srcset="https://campspace.com/media/detail/uploads/space/hc/_1/ab/hc_1ab9feda225824f00656866e916cfd6d.jpeg" type="image/jpeg">
  <img src="https://campspace.com/media/detail/uploads/space/hc/_1/ab/hc_1ab9feda225824f00656866e916cfd6d.jpeg" alt="">
  </picture>
         </div>
          
          <div class="widget-content-overlay">
          <img src="${window.location.href}${data[0].campspace_logo}" alt="logo campspace">
          <p> From €${data[0].price}</p>
            <div>
              <a href="${data[0].booking_url}">
                Book Now
              </a>
            </div>
          </div>
        </article>

    `;

  section.innerHTML = widgetContent;
  document.body.appendChild(section);

  addCSS();
};

// Fetch the data from the API
fetch("https://campspace-dummy-data-bb26a5c22467.herokuapp.com/hosts")
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
  .then((data) => {
    console.log("gelukt", data);
    createWidget(data);
  });
