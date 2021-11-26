<template>
  <div class="support-fav">
    <transition name="error">
      <ErrorPayment v-if="isError" @vanish="isError = false" />
    </transition>
    <transition name="help">
      <HelpPayment v-if="isHelp" @vanish="isHelp = false" />
    </transition>
    <button class="support-fav__close-btn" @click="closeModal">
      <img src="~assets/icons/close-icon.svg" alt="close" />
    </button>

    <div class="support-fav__item-info">
      <div class="details">
        <h1 class="name">Item Name : {{ findAccModalData.name }}</h1>
        <div class="desc">
          Item Description : {{ findAccModalData.description }}
        </div>
        <div v-if="findAccModalData.sold_by" class="username">
          Sold By <span>{{ findAccModalData.sold_By }}</span>
        </div>
        <div class="rap-text">Rap</div>
        <div class="rap-amount">99.9K</div>
      </div>
      <div class="price">${{ findAccModalData.price }}</div>
    </div>

    <img
      class="support-fav__char"
      :src="findAccModalData.icon_url"
      alt="character"
    />

    <!-- Find Your Account -->
    <div v-if="!isContinued" class="support-fav__find-acc">
      <h2 class="title">Support your favorite creator</h2>

      <!-- Search Roblox Account -->
      <div class="support-fav__search-acc">
        <input type="text" placeholder="Roblox Username" />
        <img src="~assets/icons/search-icon.svg" alt="search-icon" />
      </div>
    </div>

    <div v-if="!isContinued" class="support-fav__text">
      Support your favorite video stars at no additional cost to you. Leave
      blank to ignore.
    </div>

    <!-- Continue Button -->
    <button
      v-if="!isContinued"
      class="support-fav__continue-btn"
      @click="continuePay"
    >
      Continue
    </button>

    <!-- Payment Methods -->
    <div v-if="isContinued" class="support-fav__payment-methods">
      <h3 class="title">Choose a Payment Method</h3>
      <div class="methods">
        <button class="dominus" @click="makePayment('error')">
          <h2>Pay with DominusGG Balance</h2>
          <span>
            <img src="~assets/icons/paymentMethods/dominus.svg" alt="dominus" />
          </span>
        </button>
        <button class="crypto" @click="makePayment('help')">
          <h2>Pay with Cryptocurrency</h2>
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 24C9.62663 24 7.30655 23.2962 5.33316 21.9776C3.35977 20.6591 1.8217 18.7849 0.91345 16.5922C0.0051994 14.3995 -0.23244 11.9867 0.230582 9.65892C0.693604 7.33115 1.83649 5.19295 3.51472 3.51472C5.19295 1.83649 7.33115 0.693604 9.65892 0.230582C11.9867 -0.23244 14.3995 0.0051994 16.5922 0.91345C18.7849 1.8217 20.6591 3.35977 21.9776 5.33316C23.2962 7.30655 24 9.62663 24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24ZM17.3911 10.5153C17.6269 8.94221 16.4292 8.09826 14.7925 7.53355L15.3246 5.40349L14.0277 5.0808L13.5111 7.15501C13.1697 7.06968 12.8207 6.99056 12.4716 6.90989L12.9929 4.82327L11.6975 4.49903L11.17 6.62909C10.8892 6.56548 10.6115 6.50188 10.3431 6.43362L8.55126 5.98061L8.20685 7.366C8.20685 7.366 9.16871 7.5863 9.1532 7.60181C9.67757 7.73213 9.77376 8.07964 9.75669 8.35579L9.1532 10.7806C9.19907 10.7916 9.24416 10.8055 9.28817 10.8225L9.1532 10.7899L8.29838 14.189C8.27967 14.2485 8.24941 14.3038 8.20933 14.3516C8.16926 14.3994 8.12015 14.4388 8.06482 14.4676C8.0095 14.4964 7.94903 14.5141 7.88689 14.5195C7.82475 14.5249 7.76214 14.5181 7.70265 14.4993C7.71661 14.5179 6.76096 14.265 6.76096 14.265L6.11713 15.7482L7.80504 16.1686C8.11532 16.2477 8.4256 16.3237 8.72812 16.4075L8.19289 18.5608L9.48675 18.8835L10.0189 16.755C10.3726 16.8496 10.7154 16.9381 11.0521 17.0234L10.5231 19.1441L11.8185 19.4668L12.3553 17.3166C14.566 17.7355 16.2337 17.5664 16.9272 15.5666C17.4919 13.9579 16.8993 13.0286 15.7357 12.4235C16.5844 12.2234 17.2204 11.6665 17.3911 10.5153ZM14.4279 14.6684C14.0292 16.2787 11.3251 15.4084 10.4393 15.1897L11.1514 12.3366C12.031 12.5554 14.8483 12.9898 14.4279 14.6684ZM14.8282 10.492C14.4652 11.9566 12.2094 11.2119 11.4803 11.0288L12.1257 8.44266C12.8548 8.62418 15.2114 8.96393 14.8297 10.492H14.8282Z"
                fill="white"
              />
            </svg>
          </span>
        </button>
        <button class="apple">
          <h2>Pay with Apple Pay</h2>
          <span>
            <svg
              width="38"
              height="24"
              viewBox="0 0 38 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.84297 8.72067C8.82589 8.46099 8.86073 8.20051 8.94547 7.95445C9.03021 7.70839 9.16315 7.48169 9.33651 7.2876C9.68602 6.88261 10.1782 6.62799 10.7107 6.57672C10.7496 7.11738 10.5776 7.6521 10.2308 8.06866C10.0652 8.27684 9.85389 8.44399 9.61318 8.55709C9.37246 8.67018 9.10887 8.72616 8.84297 8.72067Z"
                fill="black"
              />
              <path
                d="M12.6486 13.4093C12.4957 13.8736 12.2769 14.3136 11.9988 14.7156C11.6117 15.2861 11.211 15.8476 10.5703 15.8476C9.92957 15.8476 9.75751 15.5012 9.05569 15.5012C8.35387 15.5012 8.11163 15.8476 7.52753 15.8793C6.94343 15.911 6.4431 15.2725 6.05371 14.702C5.25454 13.5452 4.65007 11.442 5.47188 10.0247C5.66279 9.68016 5.9403 9.39137 6.277 9.18689C6.61369 8.98241 6.99791 8.86932 7.39169 8.8588C7.99617 8.84748 8.55762 9.25952 8.92212 9.25952C9.28661 9.25952 9.93862 8.77956 10.7061 8.82937C11.0419 8.84251 11.3702 8.93288 11.6655 9.09347C11.9608 9.25405 12.215 9.48053 12.4086 9.75532C12.1053 9.94219 11.8541 10.2027 11.6784 10.5126C11.5026 10.8225 11.408 11.1718 11.4034 11.528C11.4075 11.9282 11.5272 12.3188 11.7481 12.6526C11.969 12.9863 12.2817 13.2491 12.6486 13.4093Z"
                fill="black"
              />
              <path
                d="M17.3734 7.23102H14.1564V15.8068H15.4876V12.8773H17.3304C19.0125 12.8773 20.1943 11.7249 20.1943 10.0474C20.1943 8.36978 19.0374 7.23102 17.3734 7.23102ZM17.0157 11.7589H15.4876V8.36299H17.0225C18.1749 8.36299 18.8337 8.98104 18.8337 10.0632C18.8337 11.1454 18.1749 11.7589 17.0157 11.7589Z"
                fill="black"
              />
              <path
                d="M23.3729 9.44287C21.8266 9.44287 20.8644 10.2737 20.792 11.4034H22.0055C22.1187 10.8442 22.5828 10.4979 23.3253 10.4979C24.1087 10.4979 24.5796 10.9122 24.5796 11.6095V12.0894L22.868 12.1913C21.3806 12.2751 20.543 12.9452 20.543 14.0387C20.543 15.1321 21.3987 15.9245 22.6235 15.9245C23.0238 15.9297 23.4181 15.8275 23.7653 15.6284C24.1126 15.4293 24.4 15.1406 24.5977 14.7926H24.6271V15.8204H25.8564V11.5189C25.8564 10.2443 24.8875 9.44287 23.3729 9.44287ZM24.5796 13.4659C24.5796 14.2809 23.8777 14.899 22.9812 14.899C22.2907 14.899 21.8379 14.5413 21.8379 13.9934C21.8379 13.4455 22.2726 13.1195 23.0401 13.0652L24.5796 12.9701V13.4659Z"
                fill="black"
              />
              <path
                d="M30.9775 9.55383H32.3358L29.9904 16.1351C29.4561 17.6497 28.8381 18.1387 27.5408 18.1387C27.3661 18.1375 27.1915 18.1269 27.0178 18.107V17.0678C27.1558 17.087 27.2952 17.0945 27.4344 17.0905C28.0298 17.0905 28.34 16.8414 28.546 16.2008C28.546 16.1872 28.6592 15.8204 28.6592 15.8136L26.3953 9.55383H27.7876L29.3723 14.6432H29.395L30.9775 9.55383Z"
                fill="black"
              />
              <path
                d="M37.4682 2.64654C37.4651 2.41057 37.4439 2.17518 37.4048 1.94246C37.3644 1.70584 37.2881 1.47679 37.1784 1.26328C37.0706 1.05283 36.9308 0.860372 36.7641 0.692765C36.5971 0.525313 36.4045 0.385469 36.1936 0.278464C35.9796 0.16987 35.7507 0.0935772 35.5144 0.0520706C35.2865 0.0186444 35.0565 0.00124482 34.8261 0L34.5024 0H2.97255H2.64881C2.41209 0.00489753 2.17603 0.026839 1.94246 0.0656542C1.70613 0.107161 1.47725 0.183454 1.26328 0.292048C1.05588 0.398484 0.866428 0.536751 0.701821 0.701821C0.535762 0.870029 0.396084 1.06237 0.28752 1.27233C0.178864 1.48628 0.102568 1.71517 0.0611263 1.95151C0.0220725 2.18117 0.00163065 2.4136 0 2.64654C0 2.75521 0 2.87294 0 2.97029V21.0184C0 21.1248 0 21.2448 0 21.3421C0.00348403 21.5783 0.0261985 21.8138 0.0679181 22.0462C0.10936 22.2826 0.185656 22.5115 0.294312 22.7254C0.402876 22.9354 0.542554 23.1277 0.708612 23.2959C0.87622 23.4627 1.06868 23.6024 1.27912 23.7102C1.49264 23.8199 1.72169 23.8962 1.95831 23.9366C2.19179 23.9758 2.42793 23.997 2.66465 24H2.9884H34.5024H34.8261C35.0621 23.9969 35.2975 23.9757 35.5302 23.9366C35.7669 23.8962 35.9959 23.8199 36.2094 23.7102C36.6336 23.4943 36.9784 23.1496 37.1942 22.7254C37.3039 22.5119 37.3802 22.2828 37.4206 22.0462C37.4597 21.8135 37.4809 21.5781 37.484 21.3421C37.484 21.2335 37.484 21.1157 37.484 21.0184V2.97029C37.4727 2.86162 37.4704 2.75521 37.4682 2.64654ZM36.6758 21.0139C36.6758 21.1157 36.6758 21.2176 36.6758 21.3195C36.672 21.5158 36.6554 21.7117 36.626 21.9059C36.6 22.0633 36.5504 22.216 36.4788 22.3586C36.3402 22.6332 36.1172 22.8561 35.8427 22.9948C35.7 23.0664 35.5473 23.116 35.3899 23.142C35.1973 23.1717 35.0029 23.1883 34.808 23.1918H2.66013C2.46452 23.1886 2.26936 23.1719 2.07603 23.142C1.91868 23.1155 1.76611 23.0659 1.62324 22.9948C1.48786 22.9254 1.36412 22.8352 1.25649 22.7277C1.14839 22.6196 1.05821 22.4951 0.989341 22.3586C0.918551 22.2159 0.869704 22.0632 0.844449 21.9059C0.8128 21.7127 0.796148 21.5175 0.794642 21.3218C0.794642 21.2199 0.794642 21.118 0.794642 21.0161V2.97481C0.794642 2.87294 0.794642 2.77106 0.794642 2.66918C0.799996 2.47245 0.820431 2.27643 0.855768 2.08282C0.881024 1.92547 0.929871 1.77282 1.00066 1.63003C1.07052 1.49625 1.16063 1.37406 1.2678 1.2678C1.37565 1.1595 1.50026 1.06929 1.63683 1.00066C1.77948 0.929087 1.93214 0.879476 2.08961 0.853504C2.28287 0.822979 2.47807 0.806334 2.67371 0.803698H2.98161H34.4956H34.8035C34.9991 0.806334 35.1943 0.822979 35.3876 0.853504C35.545 0.880003 35.6975 0.92959 35.8404 1.00066C35.9759 1.06993 36.0997 1.16008 36.2071 1.2678C36.3159 1.37523 36.4062 1.49992 36.4743 1.63683C36.5463 1.77932 36.5959 1.93204 36.6214 2.08961C36.651 2.28299 36.6677 2.47812 36.6713 2.67371C36.6713 2.77559 36.6713 2.87746 36.6713 2.98161L36.6758 21.0139Z"
                fill="black"
              />
              <path
                d="M8.84297 8.72067C8.82589 8.46099 8.86073 8.20051 8.94547 7.95445C9.03021 7.70839 9.16315 7.48169 9.33651 7.2876C9.68602 6.88261 10.1782 6.62799 10.7107 6.57672C10.7496 7.11738 10.5776 7.6521 10.2308 8.06866C10.0652 8.27684 9.85389 8.44399 9.61318 8.55709C9.37246 8.67018 9.10887 8.72616 8.84297 8.72067Z"
                fill="white"
              />
              <path
                d="M12.6486 13.4093C12.4957 13.8736 12.2769 14.3136 11.9988 14.7156C11.6117 15.2861 11.211 15.8476 10.5703 15.8476C9.92957 15.8476 9.75751 15.5012 9.05569 15.5012C8.35387 15.5012 8.11163 15.8476 7.52753 15.8793C6.94343 15.911 6.4431 15.2725 6.05371 14.702C5.25454 13.5452 4.65007 11.442 5.47188 10.0247C5.66279 9.68016 5.9403 9.39137 6.277 9.18689C6.61369 8.98241 6.99791 8.86932 7.39169 8.8588C7.99617 8.84748 8.55762 9.25952 8.92212 9.25952C9.28661 9.25952 9.93862 8.77956 10.7061 8.82937C11.0419 8.84251 11.3702 8.93288 11.6655 9.09347C11.9608 9.25405 12.215 9.48053 12.4086 9.75532C12.1053 9.94219 11.8541 10.2027 11.6784 10.5126C11.5026 10.8225 11.408 11.1718 11.4034 11.528C11.4075 11.9282 11.5272 12.3188 11.7481 12.6526C11.969 12.9863 12.2817 13.2491 12.6486 13.4093Z"
                fill="white"
              />
              <path
                d="M17.3734 7.23102H14.1564V15.8068H15.4876V12.8773H17.3304C19.0125 12.8773 20.1943 11.7249 20.1943 10.0474C20.1943 8.36978 19.0374 7.23102 17.3734 7.23102ZM17.0157 11.7589H15.4876V8.36299H17.0225C18.1749 8.36299 18.8337 8.98104 18.8337 10.0632C18.8337 11.1454 18.1749 11.7589 17.0157 11.7589Z"
                fill="white"
              />
              <path
                d="M23.3729 9.44287C21.8266 9.44287 20.8644 10.2737 20.792 11.4034H22.0055C22.1187 10.8442 22.5828 10.4979 23.3253 10.4979C24.1087 10.4979 24.5796 10.9122 24.5796 11.6095V12.0894L22.868 12.1913C21.3806 12.2751 20.543 12.9452 20.543 14.0387C20.543 15.1321 21.3987 15.9245 22.6235 15.9245C23.0238 15.9297 23.4181 15.8275 23.7653 15.6284C24.1126 15.4293 24.4 15.1406 24.5977 14.7926H24.6271V15.8204H25.8564V11.5189C25.8564 10.2443 24.8875 9.44287 23.3729 9.44287ZM24.5796 13.4659C24.5796 14.2809 23.8777 14.899 22.9812 14.899C22.2907 14.899 21.8379 14.5413 21.8379 13.9934C21.8379 13.4455 22.2726 13.1195 23.0401 13.0652L24.5796 12.9701V13.4659Z"
                fill="white"
              />
              <path
                d="M32.3313 9.55383L29.9904 16.1351C29.4561 17.6497 28.8381 18.1387 27.5408 18.1387C27.3661 18.1375 27.1915 18.1269 27.0178 18.107V17.0678C27.1558 17.087 27.2952 17.0945 27.4344 17.0905C28.0298 17.0905 28.34 16.8414 28.546 16.2008C28.546 16.1872 28.6592 15.8204 28.6592 15.8136L26.3953 9.55383H27.7876L29.3723 14.6432H29.395L30.9797 9.55383H32.3313Z"
                fill="white"
              />
              <path
                d="M10.2308 8.06866C10.0652 8.27684 9.85389 8.44399 9.61318 8.55709C9.37246 8.67018 9.10887 8.72616 8.84297 8.72067C8.82589 8.46099 8.86073 8.20051 8.94547 7.95445C9.03021 7.70839 9.16315 7.48169 9.33651 7.2876C9.68602 6.88261 10.1782 6.62799 10.7107 6.57672C10.7496 7.11738 10.5776 7.6521 10.2308 8.06866Z"
                fill="black"
              />
              <path
                d="M12.6486 13.4093C12.4957 13.8736 12.2769 14.3136 11.9988 14.7156C11.6117 15.2861 11.211 15.8476 10.5703 15.8476C9.92957 15.8476 9.75751 15.5012 9.05569 15.5012C8.35387 15.5012 8.11163 15.8476 7.52753 15.8793C6.94343 15.911 6.4431 15.2725 6.05371 14.702C5.25454 13.5452 4.65007 11.442 5.47188 10.0247C5.66279 9.68016 5.9403 9.39137 6.277 9.18689C6.61369 8.98241 6.99791 8.86932 7.39169 8.8588C7.99617 8.84748 8.55762 9.25952 8.92212 9.25952C9.28661 9.25952 9.93862 8.77956 10.7061 8.82937C11.0419 8.84251 11.3702 8.93288 11.6655 9.09347C11.9608 9.25405 12.215 9.48053 12.4086 9.75532C12.1053 9.94219 11.8541 10.2027 11.6784 10.5126C11.5026 10.8225 11.408 11.1718 11.4034 11.528C11.4075 11.9282 11.5272 12.3188 11.7481 12.6526C11.969 12.9863 12.2817 13.2491 12.6486 13.4093Z"
                fill="black"
              />
              <path
                d="M17.3734 7.23102H14.1564V15.8068H15.4876V12.8773H17.3304C19.0125 12.8773 20.1943 11.7249 20.1943 10.0474C20.1943 8.36978 19.0374 7.23102 17.3734 7.23102ZM17.0157 11.7589H15.4876V8.36299H17.0225C18.1749 8.36299 18.8337 8.98104 18.8337 10.0632C18.8337 11.1454 18.1749 11.7589 17.0157 11.7589Z"
                fill="black"
              />
              <path
                d="M23.3729 9.44287C21.8266 9.44287 20.8644 10.2737 20.792 11.4034H22.0055C22.1187 10.8442 22.5828 10.4979 23.3253 10.4979C24.1087 10.4979 24.5796 10.9122 24.5796 11.6095V12.0894L22.868 12.1913C21.3806 12.2751 20.543 12.9452 20.543 14.0387C20.543 15.1321 21.3987 15.9245 22.6235 15.9245C23.0238 15.9297 23.4181 15.8275 23.7653 15.6284C24.1126 15.4293 24.4 15.1406 24.5977 14.7926H24.6271V15.8204H25.8564V11.5189C25.8564 10.2443 24.8875 9.44287 23.3729 9.44287ZM24.5796 13.4659C24.5796 14.2809 23.8777 14.899 22.9812 14.899C22.2907 14.899 21.8379 14.5413 21.8379 13.9934C21.8379 13.4455 22.2726 13.1195 23.0401 13.0652L24.5796 12.9701V13.4659Z"
                fill="black"
              />
              <path
                d="M32.3313 9.55383L29.9904 16.1351C29.4561 17.6497 28.8381 18.1387 27.5408 18.1387C27.3661 18.1375 27.1915 18.1269 27.0178 18.107V17.0678C27.1558 17.087 27.2952 17.0945 27.4344 17.0905C28.0298 17.0905 28.34 16.8414 28.546 16.2008C28.546 16.1872 28.6592 15.8204 28.6592 15.8136L26.3953 9.55383H27.7876L29.3723 14.6432H29.395L30.9797 9.55383H32.3313Z"
                fill="black"
              />
            </svg>
          </span>
        </button>
        <button class="card">
          <h2>Pay with Credit / Debit Card</h2>
          <span>
            <svg
              width="36"
              height="24"
              viewBox="0 0 36 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.7655 -4.41968e-05H3.62758C3.15196 -0.00149553 2.68071 0.0908868 2.24084 0.271813C1.80096 0.452739 1.4011 0.718656 1.06414 1.05434C0.727176 1.39002 0.459739 1.78887 0.277138 2.22805C0.0945375 2.66723 0.000360585 3.13812 0 3.61375L0 20.3889C0.00146181 21.3471 0.383135 22.2656 1.06121 22.9426C1.73929 23.6197 2.65834 23.9999 3.61655 23.9999H31.7545C32.7132 23.9992 33.6323 23.6179 34.31 22.9397C34.9876 22.2615 35.3683 21.3421 35.3683 20.3834V3.61375C35.3675 2.65744 34.9881 1.74035 34.3129 1.06311C33.6377 0.385862 32.7218 0.00360277 31.7655 -4.41968e-05ZM31.6965 19.862C31.6995 19.9692 31.681 20.0758 31.6422 20.1758C31.6034 20.2757 31.545 20.3669 31.4705 20.444C31.396 20.521 31.3068 20.5825 31.2083 20.6246C31.1097 20.6668 31.0037 20.6889 30.8965 20.6896H4.48827C4.38061 20.6896 4.27403 20.6681 4.17483 20.6262C4.07563 20.5844 3.98583 20.5231 3.91074 20.4459C3.83564 20.3688 3.77678 20.2773 3.73762 20.1771C3.69846 20.0768 3.67981 19.9696 3.68276 19.862V11.3324H31.6965V19.862ZM31.6965 6.49099H3.68276V4.13788C3.68276 3.92425 3.76762 3.71936 3.91869 3.5683C4.06975 3.41723 4.27464 3.33237 4.48827 3.33237H30.8965C31.1092 3.33382 31.3127 3.41933 31.4626 3.57024C31.6124 3.72115 31.6965 3.9252 31.6965 4.13788V6.49099Z"
                fill="white"
              />
              <path
                d="M20.4332 14.9876H6.29801C5.73734 14.9876 5.28284 15.4421 5.28284 16.0028C5.28284 16.5634 5.73734 17.018 6.29801 17.018H20.4332C20.9938 17.018 21.4483 16.5634 21.4483 16.0028C21.4483 15.4421 20.9938 14.9876 20.4332 14.9876Z"
                fill="white"
              />
              <path
                d="M28.4552 13.4455H26.869C26.2748 13.4455 25.7931 13.9272 25.7931 14.5214V17.4869C25.7931 18.0811 26.2748 18.5627 26.869 18.5627H28.4552C29.0493 18.5627 29.531 18.0811 29.531 17.4869V14.5214C29.531 13.9272 29.0493 13.4455 28.4552 13.4455Z"
                fill="white"
              />
            </svg>
          </span>
        </button>
        <button class="paypal">
          <h2>Pay with Paypal</h2>
          <span>
            <svg
              class="p2"
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              width="288"
              height="288"
            >
              <path
                d="M20.43705,7.10449a3.82273,3.82273,0,0,0-.57281-.5238,4.72529,4.72529,0,0,0-1.15766-3.73987C17.6226,1.61914,15.77494,1,13.2144,1H7.00053A1.89234,1.89234,0,0,0,5.13725,2.5918L2.5474,18.99805A1.53317,1.53317,0,0,0,4.063,20.7832H6.72709l-.082.52051A1.46684,1.46684,0,0,0,8.0933,23h3.23438a1.76121,1.76121,0,0,0,1.751-1.46973l.64063-4.03125.01074-.05468h.29883c4.03223,0,6.55078-1.99317,7.28516-5.7627A5.149,5.149,0,0,0,20.43705,7.10449ZM7.84233,13.7041l-.71448,4.53528-.08631.54382H4.606L7.09721,3H13.2144c1.93554,0,3.31738.4043,3.99218,1.16406a2.96675,2.96675,0,0,1,.60791,2.73334l-.01861.11224c-.01215.07648-.0232.15119-.0434.24622a5.84606,5.84606,0,0,1-2.00512,3.67053,6.67728,6.67728,0,0,1-4.21753,1.183H9.70658A1.87969,1.87969,0,0,0,7.84233,13.7041Zm11.50878-2.40527c-.55078,2.82812-2.24218,4.14551-5.32226,4.14551h-.4834a1.76109,1.76109,0,0,0-1.751,1.47265l-.64941,4.07422L8.71733,21l.47815-3.03387.61114-3.85285h1.7193c.1568,0,.29541-.02356.44812-.02893.35883-.01239.71661-.02618,1.05267-.06787.20526-.02557.39362-.07221.59034-.1087.27252-.05036.54522-.10016.80108-.17127.19037-.053.368-.12121.54907-.18561.23926-.0849.4748-.174.69757-.27868.168-.0791.32807-.16706.48658-.25727a6.77125,6.77125,0,0,0,.61236-.39172c.14228-.1026.28192-.20789.415-.321a6.56392,6.56392,0,0,0,.53693-.51892c.113-.12055.2287-.23755.33331-.36725a7.09,7.09,0,0,0,.48-.69263c.07648-.12219.16126-.23523.23163-.36383a8.33175,8.33175,0,0,0,.52075-1.15326c.00867-.02386.02106-.044.02954-.068.004-.01123.00989-.02057.01386-.03186A4.29855,4.29855,0,0,1,19.35111,11.29883Z"
                fill="#ffffff"
                class="color000 svgShape"
              ></path>
            </svg>
          </span>
        </button>
        <div ref="paypal"></div>
      </div>
    </div>

    <!-- Timing -->
    <div v-if="isContinued" class="support-fav__timing">
      <div class="title">Time remaining to complete transaction</div>
      <div class="time">{{ mm }} minutes {{ ss }} seconds</div>
    </div>

    <div v-if="isContinued" class="support-fav__notes">
      We will trade this item with the smallest item in your inventory. We are
      not responsible to anything that happens to your account after receiving
      the trade.
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      loaded: false,
      paidFor: false,
      product: {
        price: 777.77,
        description: "leg lamp from that one movie",
        img: "./assets/lamp.jpg",
      },
    };
  },
  data() {
    return {
      isContinued: false,
      isError: false,
      isHelp: false,
      mm: 5,
      ss: "00",
    };
  },
  computed: {
    findAccModalData() {
      return this.$store.getters["modals/findAccModalData"];
    },
    usernameChecked() {
      return this.$store.getters["auth/usernameChecked"];
    },
  },
  methods: {
    setLoaded: function () {
      this.loaded = true;
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  // description: this.product.description,
                  amount: {
                    currency_code: "USD",
                    value: "10"
               
                  },
                },
              ],
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            this.data;
            this.paidFor = true;
            console.log(order);
          },
          onError: (err) => {
            console.log(err);
          },
        })
        .render(this.$refs.paypal);
    },
    closeModal() {
      this.$store.commit("modals/OPEN_FEATURED_ITEM_MODAL");
      this.$store.commit("modals/CLOSE_FEAT_ITEM_MODAL");
    },
    continuePay() {
      this.isContinued = true;
      this.timerFunc();

      // Paypal sdk
      const script = document.createElement("script");
      script.src =
        "https://www.paypal.com/sdk/js?client-id=ATVKd9dDUZuvAQk4mrpEKbf2PaKhj3mmTGHKWr51NSsU1VMpUZzF8ODubz0k4VZa_o7FCi9RyitnKRhv&disable-funding=credit";
      script.addEventListener("load", this.setLoaded);
      document.body.appendChild(script);
    },
    makePayment(result) {
      if (result === "error") {
        this.isError = true;
      } else {
        this.isHelp = true;
      }
    },
    timerFunc() {
      const startingMinutes = 5;
      let time = startingMinutes * 60;

      const interval = setInterval(() => {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;

        seconds = seconds < 10 ? "0" + seconds : seconds;
        this.mm = minutes;
        this.ss = seconds;

        time--;

        if (time < 0) {
          clearInterval(interval);
          this.isContinued = false;
        }
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";
@import "~assets/scss/mixins";
/**
@ Mobile First Design
 */

.error-enter,
.error-leave-to {
  opacity: 0;
}
.error-enter-active,
.error-leave-active {
  transition: opacity 0.17s ease-in-out;
}
.error-leave,
.error-enter-to {
  opacity: 1;
}

.help-enter,
.help-leave-to {
  opacity: 0;
}
.help-enter-active,
.help-leave-active {
  transition: opacity 0.17s ease-in-out;
}
.help-leave,
.help-enter-to {
  opacity: 1;
}

.support-fav {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  color: #fff;
  background-color: $purple-dark;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @include break-up(small) {
    width: rem(700);
    height: auto;
    border-radius: rem(25);
  }

  &__close-btn {
    position: absolute;
    right: rem(20);
    top: rem(20);
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
  }

  &__item-info {
    width: rem(341);
    display: flex;
    margin-top: rem(70);
    justify-content: space-between;
    @include break-up(small) {
      width: rem(581);
    }

    .details {
      .name {
        font-size: rem(22);
        line-height: rem(26);
      }
      .desc {
        font-size: rem(17);
        line-height: rem(20);
        margin-bottom: rem(3);
      }
      .username {
        font-size: rem(12);
        line-height: rem(14);
        margin-bottom: rem(5);

        span {
          color: $purple-2;
        }
      }
      .rap-text {
        color: $purple-2;
        text-transform: uppercase;
        font-size: rem(24);
        line-height: rem(28);
        font-weight: 500;
      }
    }
    .price {
      font-size: rem(24);
      line-height: rem(28);
      font-weight: 500;
    }
  }

  &__char {
    width: rem(143);
    height: rem(143);
    margin-top: rem(-30);
    margin-bottom: rem(17);
    @include break-up(small) {
      margin-top: rem(-76);
    }
  }

  &__find-acc {
    margin-bottom: rem(29);
    @include break-up(small) {
      margin-bottom: rem(25);
    }
    .title {
      font-size: rem(17);
      line-height: rem(20);
      margin-bottom: rem(16);
      text-align: center;
    }
  }

  &__search-acc {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: rem(271);
    height: rem(40);
    background: $navy-blue;
    border: 1px solid white;
    border-radius: 50px;
    @include break-up(small) {
      width: rem(419);
    }

    ::placeholder {
      color: white;
    }

    input {
      color: white;
      font-size: rem(14);
      line-height: rem(16);
      font-weight: 300;
      border: none;
      outline: none;
      background: none;
      margin-left: rem(15);
      @include break-up(small) {
        margin-left: rem(21);
      }
    }
    img {
      margin-right: rem(13.31);
      @include break-up(small) {
        margin-right: rem(21);
      }
    }
  }

  &__text {
    width: rem(272);
    font-size: rem(17);
    line-height: rem(20);
    text-align: center;
    font-weight: 300;
    margin-bottom: rem(32);
  }

  &__continue-btn {
    width: rem(200);
    height: rem(40);
    background-color: $purple;

    border: none;
    outline: none;
    border-radius: rem(50);
    font-size: rem(18);
    line-height: rem(21);
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    @include break-up(small) {
      margin-bottom: rem(121);
    }

    &:hover {
      color: $purple;
      background-color: #fff;
      border: rem(2) solid $purple;
    }
  }

  // ===== Payment Methods =====
  &__payment-methods {
    width: rem(345);
    margin-bottom: rem(26);
    @include break-up(small) {
      width: rem(420);
      margin-bottom: rem(24);
    }

    .title {
      text-align: center;
      font-size: rem(17);
      line-height: rem(20);
      margin-bottom: rem(21);
      @include break-up(small) {
        margin-bottom: rem(31);
      }
    }

    .methods {
      > button {
        width: 100%;
        height: rem(40);
        border-radius: rem(50);
        display: flex;
        color: #fff;
        justify-content: space-between;
        align-items: center;
        border: none;
        outline: none;
        cursor: pointer;
        &:not(:last-child) {
          margin-bottom: rem(20);
        }

        h2 {
          font-size: rem(17);
          line-height: rem(20);
          margin-left: rem(20);
        }
        span {
          width: rem(42.51);
          display: flex;
          justify-content: center;
          margin-right: rem(10);
        }
      }
      .dominus {
        background-color: $purple;
        &:hover {
          color: $purple;
          background-color: #fff;
          border: rem(2) solid $purple;
        }
      }
      .crypto {
        background: #cd6a40;
        &:hover {
          color: #cd6a40;
          background-color: #fff;
          border: rem(2) solid #cd6a40;
          span {
            svg {
              path {
                fill: #cd6a40;
              }
            }
          }
        }
      }
      .apple {
        color: #000;
        &:hover {
          color: #fff;
          background-color: #000;
          border: rem(2) solid #fff;
          span {
            svg {
              path {
                fill: #fff;
              }
            }
          }
        }
      }
      .card {
        background: #4081cd;
        &:hover {
          color: #4081cd;
          background-color: #fff;
          border: rem(2) solid #4081cd;
          span {
            svg {
              path {
                fill: #4081cd;
              }
            }
          }
        }
      }
      .paypal {
        background: #0052b1;
        span {
          > svg {
            width: rem(41);
            height: rem(24);
          }
        }
        &:hover {
          color: #07376e;
          background-color: #fff;
          border: rem(2) solid #07376e;
          span {
            svg {
              path {
                fill: #07376e;
              }
            }
          }
        }
      }
    }
  }

  &__timing {
    width: rem(275);
    margin-bottom: rem(30);

    .title {
      font-size: rem(14);
      line-height: rem(16);
      font-weight: 300;
      margin-bottom: rem(5);
      text-align: center;
      @include break-up(small) {
        font-size: rem(17);
        line-height: rem(20);
      }
    }
    .time {
      font-size: rem(24);
      line-height: rem(28);
      color: #6d40cd;
      font-weight: 500;
      text-align: center;
    }
  }

  &__notes {
    width: rem(345);
    font-size: rem(12);
    line-height: rem(14);
    text-align: center;
    margin-bottom: rem(41);
    @include break-up(small) {
      margin-bottom: rem(35);
    }
  }
}
</style>