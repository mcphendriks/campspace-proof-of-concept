const createWidget = async () => {
  try {
    const response = await fetch(
      "https://campspace-dummy-data-test-a454ba90df28.herokuapp.com/hosts"
    );
    const data = await response.json();
    const section = document.createElement("section");
    section.classList.add("campspace-widget");

    const host = data.find((host) => host.id === "1");
    const [firstImage, secondImage, thirdImage] = host.images;

    const widgetContent = `
      <style>

      .campspace-widget {
        --color-green: #0db08a;
        --color-light-grey: #f5f5f1;
        --color-dark-grey-: #32322e;
        --color-blue-: #4376ba;
        --color-dark-blue: #294060;
        --border-radius-small: 5px;
        --border-radius-medium: 8px;
       --border-radius-large: 16px;
        box-sizing: border-box;
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
      }

      .campspace-button {
        font-weight: 600;
        position: fixed;
        right: 20px;
        top: 50%;
        padding: 20px 50px;
        background-color: var(--color-green);
        color: var(--color-light-grey);
        border-radius: 8px 8px 0 0;
        border: none;
        cursor: pointer;
        z-index: 9999;
        font-size: 20px;
        transform: translate(50%, -50%) rotate(-90deg);
      }

      .campspace-widget article {
        border-radius: var(--border-radius-medium);
        border: none;
        width: clamp(15em, 50%, 27em);
        padding: 0;
        overflow: hidden;
      }

      .campspace-widget-images-slider {
        border-radius: var(--border-radius-medium);
        display: flex;
        width: 100%;
        height: 100%;
        animation: slide 16s infinite;
        list-style-type: none;
      }

      .campspace-widget-images-slider img {
        width: 100%;
      }

      .campspace-widget-content-overlay div {
        display: flex;
        justify-content: center;
        bottom: 0;
      }

      .campspace-widget-content-overlay img {
        position: absolute;
        width: 10em;
        left: 10px;
        top: 10px;
      }

      .campspace-widget-content-overlay p {
        position: absolute;
        right: 10px;
        top: -7px;
        font-weight: 600;
        padding: 0.5rem;
        border-radius: var(--border-radius-medium);
        color: var(--color-light-grey);
        background-color: var(--color-dark-grey-);
      }

      .campspace-widget-content-overlay a {
        position: absolute;
        bottom: 50px;
        font-weight: 600;
        color: var(--color-light-grey);
        background-color: var(--color-blue-);
        border-radius: 8px;
        text-decoration: none;
        touch-action: manipulation;
        padding: 1rem 2rem;
      }

      .campspace-widget-content-overlay a:hover {
        background-color: var(--color-dark-blue);
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
   
      </style>
      <button class="campspace-button" popovertarget="my-popover-widget" popovertargetaction="show">
        Book Now
      </button>
      <article popover id="my-popover-widget">
        <div class="campspace-widget-images-slider">
          <img src="${firstImage.image}" width="450" height="" alt="">
          <img src="${secondImage.image}" width="450" height="450" alt="">
          <img src="${thirdImage.image}" width="450" height="450" alt="">
        </div>
        <div class="campspace-widget-content-overlay">
          <img src="${data[0].campspace_logo}" alt="logo campspace">
          <p>From €${data[0].price}</p>
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
  } catch (error) {
    console.error(error);
  }
};

createWidget();
