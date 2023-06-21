// Function to create and append the widget to the body
const createWidget = async () => {
  try {
    const response = await fetch(
      "https://campspace-dummy-data-test-a454ba90df28.herokuapp.com/hosts"
    );
    const data = await response.json();
    const section = document.createElement("section");
    section.classList.add("campspace-widget");

    // Find the host with id 1 and fetch the images from the host
    const host = data.find((host) => host.id === "1");
    const [firstImage, secondImage, thirdImage] = host.images;

    const widgetContent = `
      <style>
      .campspace-widget {
        --color-campspace: #0db08a;
        --color-yellow-campspace: #fdb000;
        --color-light-grey-campspace: #f5f5f1;
        --color-dark-grey-campspace: #32322e;
        --color-blue-campspace: #4376ba;
        --color-darkBlue-campspace: #294060;
        --border-radius-small-campspace: 5px;
        --border-radius-medium-campspace: 8px;
        --border-radius-large-campspace: 16px;
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
        background-color: var(--color-campspace);
        color: var(--color-light-grey-campspace);
        border-radius: 8px 8px 0 0;
        border: none;
        cursor: pointer;
        z-index: 9999;
        font-size: 20px;
        transform: translate(50%, -50%) rotate(-90deg);
      }
      
      .campspace-widget article {
        border-radius: var(--border-radius-medium-campspace);
        border: none;
        width: clamp(15em, 50%, 27em);
        padding: 0;
        overflow: hidden;
      }
      
      .widget-images-slider {
        border-radius: var(--border-radius-medium-campspace);
        display: flex;
        width: 100%;
        height: 100%;
        animation: slide 16s infinite;
        list-style-type: none;
      }
      
      .widget-images-slider img {
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
        font-weight: 600;
        padding: 0.5rem;
        border-radius: var(--border-radius-medium-campspace);
        color: var(--color-light-grey-campspace);
        background-color: var(--color-dark-grey-campspace);
      }
      
      .widget-content-overlay a {
        position: absolute;
        bottom: 50px;
        font-weight: 600;
        color: var(--color-light-grey-campspace);
        background-color: var(--color-blue-campspace);
        border-radius: 8px;
        text-decoration: none;
        touch-action: manipulation;
        padding: 1rem 2rem;
      }
      
      .widget-content-overlay a:hover {
        background-color: var(--color-darkBlue-campspace);
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
        <div class="widget-images-slider">
          <img src="${firstImage.image}"  width="450" height="" alt="">
          <img src="${secondImage.image}"  width="450" height="450" alt="">
          <img src="${thirdImage.image}"  width="450" height="450" alt="">
        </div>
        <div class="widget-content-overlay">
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
    console.error("An error occurred:", error);
  }
};
