<template>
  <div class="auth" @click="close">
    <div class="auth__inside">
      <button class="auth__close-btn" @click="promptLoginModal">
        <img src="~assets/icons/close-icon.svg" alt="close" />
      </button>

      <!-- Signup Box -->
      <div class="auth__signup-box" v-if="!isLoginOpen">
        <div class="auth__signup-text">
          <div class="title">Sign Up</div>
          <p class="desc">Let's create your account</p>
        </div>

        <div class="auth__signup-form">
          <div class="username">
            <div class="input-div">
              <label for="username">Username</label>
              <input
                id="username"
                type="text"
                placeholder="Your Username Here"
                v-model="registerForm.username"
              />
            </div>

            <div class="icon">
              <img
                src="~assets/icons/authIcons/user.svg"
                alt="hidden password"
              />
            </div>
          </div>

          <div class="email">
            <div class="input-div">
              <label for="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Your Email Here"
                v-model="registerForm.email"
              />
            </div>
            <div class="icon">
              <img
                src="~assets/icons/authIcons/email.svg"
                alt="hidden password"
              />
            </div>
          </div>

          <div class="passwords">
            <div class="password">
              <div class="input-div">
                <label for="password">Password</label>
                <input
                  id="password"
                  type="password"
                  ref="pw"
                  value="FakePassword"
                  v-model="registerForm.password"
                />
              </div>
              <div class="hide-img" @click="blink('pw')">
                <svg
                  class="exposed-pw eye"
                  v-if="eye1Open"
                  id="Layer_5"
                  data-name="Layer 5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 10.92 6.08"
                >
                  <defs>
                    <style>
                      .cls-1,
                      .cls-2 {
                        fill: none;
                        stroke: #fff;
                        stroke-linecap: round;
                        stroke-miterlimit: 10;
                      }
                      .cls-1 {
                        stroke-width: 0.7px;
                      }
                      .cls-2 {
                        stroke-width: 0.5px;
                      }
                    </style>
                  </defs>
                  <title>Password Text and Icon OPEN EYES</title>
                  <path
                    class="cls-1"
                    d="M292.43,14.57c-3.11,3.51-6.91,3.58-10.21,0"
                    transform="translate(-281.87 -11.5)"
                  />
                  <path
                    class="cls-1"
                    d="M282.22,14.58c3.07-3.55,6.79-3.68,10.14-.14"
                    transform="translate(-281.87 -11.5)"
                  />
                  <ellipse
                    class="cls-2"
                    cx="287.25"
                    cy="14.39"
                    rx="1.26"
                    ry="1.16"
                    transform="translate(-282.17 -2.77) rotate(-1.74)"
                  />
                  <ellipse
                    class="cls-1"
                    cx="5.37"
                    cy="2.9"
                    rx="2.62"
                    ry="2.49"
                  />
                </svg>

                <svg
                  class="hidden-pw eye"
                  v-else
                  width="24"
                  height="17"
                  viewBox="0 0 24 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.8205 8.72197C22.5736 10.1511 21.1276 11.3934 19.5269 12.4107L18.371 11.2593C19.754 10.4097 21.0243 9.38907 22.1518 8.22146C20.8078 6.8273 19.2584 5.64691 17.5574 4.72126C18.134 5.63383 18.4766 6.67452 18.5549 7.75114C18.6332 8.82776 18.4448 9.90707 18.0063 10.8935L16.7853 9.67362C17.0073 8.93744 17.0568 8.16001 16.9297 7.40165C16.8027 6.64329 16.5027 5.92439 16.0529 5.30073C15.6031 4.67708 15.0157 4.16544 14.3362 3.80552C13.6567 3.44559 12.9035 3.24706 12.1348 3.22534H11.8666C11.4199 3.23729 10.9768 3.309 10.5491 3.43856L9.11719 2.00885C10.0034 1.79038 10.9114 1.67255 11.824 1.65759H12.0002H12.1775C18.8098 1.75635 23.6174 7.47743 23.8205 7.7232C23.9364 7.86384 23.9997 8.04038 23.9997 8.22259C23.9997 8.40479 23.9364 8.58133 23.8205 8.72197Z"
                    fill="white"
                  />
                  <path
                    d="M20.0052 15.1142C20.1525 15.2616 20.2352 15.4616 20.2351 15.67C20.235 15.8785 20.1521 16.0784 20.0046 16.2257C19.8572 16.373 19.6572 16.4557 19.4487 16.4556C19.2403 16.4555 19.0404 16.3726 18.8931 16.2251L16.5757 13.9044L14.9339 12.266L7.95815 5.28911L5.89102 3.2231L3.99671 1.33552C3.92376 1.26258 3.86589 1.17597 3.82641 1.08066C3.78692 0.985348 3.7666 0.883191 3.7666 0.780024C3.7666 0.676857 3.78692 0.5747 3.82641 0.479387C3.86589 0.384074 3.92376 0.297471 3.99671 0.224525C4.07079 0.151922 4.15852 0.0947079 4.25482 0.0561855C4.35113 0.017663 4.45411 -0.00140541 4.55782 8.06302e-05C4.66086 -0.000210138 4.76293 0.0199776 4.8581 0.0594711C4.95327 0.0989645 5.03964 0.156976 5.1122 0.230136L7.42622 2.5363L9.06803 4.17811L10.335 5.44397L14.7779 9.88797L16.0482 11.155L18.1143 13.2198L20.0052 15.1142Z"
                    fill="white"
                  />
                  <path
                    d="M11.9039 11.458C11.0781 11.4342 10.2925 11.0956 9.70833 10.5113C9.12411 9.92713 8.78544 9.1416 8.76172 8.31573L11.9039 11.458Z"
                    fill="white"
                  />
                  <path
                    d="M13.4515 13.0066L14.8846 14.4386C13.9983 14.6565 13.0903 14.7743 12.1778 14.7898H12.0004H11.8243C5.19193 14.69 0.384336 8.96664 0.180092 8.722C0.0636837 8.58118 0 8.40419 0 8.22149C0 8.03878 0.0636837 7.86179 0.180092 7.72098C1.42945 6.29123 2.87724 5.04789 4.47932 4.02887L5.63184 5.18476C4.24832 6.03412 2.97731 7.05439 1.84883 8.22149C3.19505 9.61636 4.74669 10.7971 6.44994 11.7228C5.87271 10.8105 5.5297 9.76975 5.4514 8.69301C5.37309 7.61626 5.56189 6.53684 6.00105 5.5506L7.21866 6.77158C7.07571 7.24158 7.00347 7.73023 7.00432 8.22149C7.00555 9.52332 7.51408 10.7734 8.42196 11.7064C9.32983 12.6395 10.5656 13.182 11.8669 13.2187H12.1351C12.5814 13.2072 13.0241 13.1359 13.4515 13.0066Z"
                    fill="white"
                  />
                  <path
                    d="M15.2379 8.12611L12.0957 4.98389C12.9216 5.00761 13.7071 5.34628 14.2913 5.9305C14.8755 6.51471 15.2142 7.30024 15.2379 8.12611Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>

            <div class="confirmPassword">
              <div class="input-div">
                <label for="cPassword">Confirm Password</label>
                <input
                  id="cPassword"
                  type="password"
                  ref="cpw"
                  value="FakePassword"
                  v-model="registerForm.password_confirmation"
                />
              </div>
              <div class="hide-img" @click="blink('cpw')">
                <svg
                  class="exposed-pw eye"
                  v-if="eye2Open"
                  id="Layer_5"
                  data-name="Layer 5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 10.92 6.08"
                >
                  <defs>
                    <style>
                      .cls-1,
                      .cls-2 {
                        fill: none;
                        stroke: #fff;
                        stroke-linecap: round;
                        stroke-miterlimit: 10;
                      }
                      .cls-1 {
                        stroke-width: 0.7px;
                      }
                      .cls-2 {
                        stroke-width: 0.5px;
                      }
                    </style>
                  </defs>
                  <title>Password Text and Icon OPEN EYES</title>
                  <path
                    class="cls-1"
                    d="M292.43,14.57c-3.11,3.51-6.91,3.58-10.21,0"
                    transform="translate(-281.87 -11.5)"
                  />
                  <path
                    class="cls-1"
                    d="M282.22,14.58c3.07-3.55,6.79-3.68,10.14-.14"
                    transform="translate(-281.87 -11.5)"
                  />
                  <ellipse
                    class="cls-2"
                    cx="287.25"
                    cy="14.39"
                    rx="1.26"
                    ry="1.16"
                    transform="translate(-282.17 -2.77) rotate(-1.74)"
                  />
                  <ellipse
                    class="cls-1"
                    cx="5.37"
                    cy="2.9"
                    rx="2.62"
                    ry="2.49"
                  />
                </svg>

                <svg
                  class="hidden-pw eye"
                  v-else
                  width="24"
                  height="17"
                  viewBox="0 0 24 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.8205 8.72197C22.5736 10.1511 21.1276 11.3934 19.5269 12.4107L18.371 11.2593C19.754 10.4097 21.0243 9.38907 22.1518 8.22146C20.8078 6.8273 19.2584 5.64691 17.5574 4.72126C18.134 5.63383 18.4766 6.67452 18.5549 7.75114C18.6332 8.82776 18.4448 9.90707 18.0063 10.8935L16.7853 9.67362C17.0073 8.93744 17.0568 8.16001 16.9297 7.40165C16.8027 6.64329 16.5027 5.92439 16.0529 5.30073C15.6031 4.67708 15.0157 4.16544 14.3362 3.80552C13.6567 3.44559 12.9035 3.24706 12.1348 3.22534H11.8666C11.4199 3.23729 10.9768 3.309 10.5491 3.43856L9.11719 2.00885C10.0034 1.79038 10.9114 1.67255 11.824 1.65759H12.0002H12.1775C18.8098 1.75635 23.6174 7.47743 23.8205 7.7232C23.9364 7.86384 23.9997 8.04038 23.9997 8.22259C23.9997 8.40479 23.9364 8.58133 23.8205 8.72197Z"
                    fill="white"
                  />
                  <path
                    d="M20.0052 15.1142C20.1525 15.2616 20.2352 15.4616 20.2351 15.67C20.235 15.8785 20.1521 16.0784 20.0046 16.2257C19.8572 16.373 19.6572 16.4557 19.4487 16.4556C19.2403 16.4555 19.0404 16.3726 18.8931 16.2251L16.5757 13.9044L14.9339 12.266L7.95815 5.28911L5.89102 3.2231L3.99671 1.33552C3.92376 1.26258 3.86589 1.17597 3.82641 1.08066C3.78692 0.985348 3.7666 0.883191 3.7666 0.780024C3.7666 0.676857 3.78692 0.5747 3.82641 0.479387C3.86589 0.384074 3.92376 0.297471 3.99671 0.224525C4.07079 0.151922 4.15852 0.0947079 4.25482 0.0561855C4.35113 0.017663 4.45411 -0.00140541 4.55782 8.06302e-05C4.66086 -0.000210138 4.76293 0.0199776 4.8581 0.0594711C4.95327 0.0989645 5.03964 0.156976 5.1122 0.230136L7.42622 2.5363L9.06803 4.17811L10.335 5.44397L14.7779 9.88797L16.0482 11.155L18.1143 13.2198L20.0052 15.1142Z"
                    fill="white"
                  />
                  <path
                    d="M11.9039 11.458C11.0781 11.4342 10.2925 11.0956 9.70833 10.5113C9.12411 9.92713 8.78544 9.1416 8.76172 8.31573L11.9039 11.458Z"
                    fill="white"
                  />
                  <path
                    d="M13.4515 13.0066L14.8846 14.4386C13.9983 14.6565 13.0903 14.7743 12.1778 14.7898H12.0004H11.8243C5.19193 14.69 0.384336 8.96664 0.180092 8.722C0.0636837 8.58118 0 8.40419 0 8.22149C0 8.03878 0.0636837 7.86179 0.180092 7.72098C1.42945 6.29123 2.87724 5.04789 4.47932 4.02887L5.63184 5.18476C4.24832 6.03412 2.97731 7.05439 1.84883 8.22149C3.19505 9.61636 4.74669 10.7971 6.44994 11.7228C5.87271 10.8105 5.5297 9.76975 5.4514 8.69301C5.37309 7.61626 5.56189 6.53684 6.00105 5.5506L7.21866 6.77158C7.07571 7.24158 7.00347 7.73023 7.00432 8.22149C7.00555 9.52332 7.51408 10.7734 8.42196 11.7064C9.32983 12.6395 10.5656 13.182 11.8669 13.2187H12.1351C12.5814 13.2072 13.0241 13.1359 13.4515 13.0066Z"
                    fill="white"
                  />
                  <path
                    d="M15.2379 8.12611L12.0957 4.98389C12.9216 5.00761 13.7071 5.34628 14.2913 5.9305C14.8755 6.51471 15.2142 7.30024 15.2379 8.12611Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div class="auth__signup-btn">
          <button class="btn" @click="clickSignup">Sign Up</button>
          <div class="or">
            or <button @click="$store.commit('auth/OPEN_LOGIN')">Log In</button>
          </div>
        </div>

        <div class="auth__signup-policy-text">
          <span>By creating an account, you agree to our</span>
          <NuxtLink to="/terms-of-service" class="terms"
            >Terms of Service</NuxtLink
          >
          and our
          <NuxtLink to="/privacy-policy" class="privacy-policy"
            >Privacy Policy</NuxtLink
          >
        </div>
      </div>

      <!-- Login Box -->
      <div class="auth__login-box" v-else>
        <div class="auth__login-text">
          <div class="title">Log In</div>
          <p class="desc">Welcome back! Let's log you in.</p>
        </div>

        <div class="auth__login-form">
          <div class="username">
            <div class="input-div">
              <label for="username">Username</label>
              <input
                id="username"
                type="text"
                placeholder="Your Username Here"
                v-model="loginForm.username"
              />
            </div>

            <div class="icon">
              <img
                src="~assets/icons/authIcons/user.svg"
                alt="hidden password"
              />
            </div>
          </div>

          <div class="password">
            <div class="input-div">
              <label for="password">Password</label>
              <input
                id="password"
                type="password"
                ref="pwL"
                value="FakePassword"
                v-model="loginForm.password"
              />
            </div>
            <div class="hide-img" @click="blinkL">
              <svg
                class="exposed-pw eye"
                v-if="eyeOpenL"
                id="Layer_5"
                data-name="Layer 5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 10.92 6.08"
              >
                <defs>
                  <style>
                    .cls-1,
                    .cls-2 {
                      fill: none;
                      stroke: #fff;
                      stroke-linecap: round;
                      stroke-miterlimit: 10;
                    }
                    .cls-1 {
                      stroke-width: 0.7px;
                    }
                    .cls-2 {
                      stroke-width: 0.5px;
                    }
                  </style>
                </defs>
                <title>Password Text and Icon OPEN EYES</title>
                <path
                  class="cls-1"
                  d="M292.43,14.57c-3.11,3.51-6.91,3.58-10.21,0"
                  transform="translate(-281.87 -11.5)"
                />
                <path
                  class="cls-1"
                  d="M282.22,14.58c3.07-3.55,6.79-3.68,10.14-.14"
                  transform="translate(-281.87 -11.5)"
                />
                <ellipse
                  class="cls-2"
                  cx="287.25"
                  cy="14.39"
                  rx="1.26"
                  ry="1.16"
                  transform="translate(-282.17 -2.77) rotate(-1.74)"
                />
                <ellipse class="cls-1" cx="5.37" cy="2.9" rx="2.62" ry="2.49" />
              </svg>

              <svg
                class="hidden-pw eye"
                v-else
                width="24"
                height="17"
                viewBox="0 0 24 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.8205 8.72197C22.5736 10.1511 21.1276 11.3934 19.5269 12.4107L18.371 11.2593C19.754 10.4097 21.0243 9.38907 22.1518 8.22146C20.8078 6.8273 19.2584 5.64691 17.5574 4.72126C18.134 5.63383 18.4766 6.67452 18.5549 7.75114C18.6332 8.82776 18.4448 9.90707 18.0063 10.8935L16.7853 9.67362C17.0073 8.93744 17.0568 8.16001 16.9297 7.40165C16.8027 6.64329 16.5027 5.92439 16.0529 5.30073C15.6031 4.67708 15.0157 4.16544 14.3362 3.80552C13.6567 3.44559 12.9035 3.24706 12.1348 3.22534H11.8666C11.4199 3.23729 10.9768 3.309 10.5491 3.43856L9.11719 2.00885C10.0034 1.79038 10.9114 1.67255 11.824 1.65759H12.0002H12.1775C18.8098 1.75635 23.6174 7.47743 23.8205 7.7232C23.9364 7.86384 23.9997 8.04038 23.9997 8.22259C23.9997 8.40479 23.9364 8.58133 23.8205 8.72197Z"
                  fill="white"
                />
                <path
                  d="M20.0052 15.1142C20.1525 15.2616 20.2352 15.4616 20.2351 15.67C20.235 15.8785 20.1521 16.0784 20.0046 16.2257C19.8572 16.373 19.6572 16.4557 19.4487 16.4556C19.2403 16.4555 19.0404 16.3726 18.8931 16.2251L16.5757 13.9044L14.9339 12.266L7.95815 5.28911L5.89102 3.2231L3.99671 1.33552C3.92376 1.26258 3.86589 1.17597 3.82641 1.08066C3.78692 0.985348 3.7666 0.883191 3.7666 0.780024C3.7666 0.676857 3.78692 0.5747 3.82641 0.479387C3.86589 0.384074 3.92376 0.297471 3.99671 0.224525C4.07079 0.151922 4.15852 0.0947079 4.25482 0.0561855C4.35113 0.017663 4.45411 -0.00140541 4.55782 8.06302e-05C4.66086 -0.000210138 4.76293 0.0199776 4.8581 0.0594711C4.95327 0.0989645 5.03964 0.156976 5.1122 0.230136L7.42622 2.5363L9.06803 4.17811L10.335 5.44397L14.7779 9.88797L16.0482 11.155L18.1143 13.2198L20.0052 15.1142Z"
                  fill="white"
                />
                <path
                  d="M11.9039 11.458C11.0781 11.4342 10.2925 11.0956 9.70833 10.5113C9.12411 9.92713 8.78544 9.1416 8.76172 8.31573L11.9039 11.458Z"
                  fill="white"
                />
                <path
                  d="M13.4515 13.0066L14.8846 14.4386C13.9983 14.6565 13.0903 14.7743 12.1778 14.7898H12.0004H11.8243C5.19193 14.69 0.384336 8.96664 0.180092 8.722C0.0636837 8.58118 0 8.40419 0 8.22149C0 8.03878 0.0636837 7.86179 0.180092 7.72098C1.42945 6.29123 2.87724 5.04789 4.47932 4.02887L5.63184 5.18476C4.24832 6.03412 2.97731 7.05439 1.84883 8.22149C3.19505 9.61636 4.74669 10.7971 6.44994 11.7228C5.87271 10.8105 5.5297 9.76975 5.4514 8.69301C5.37309 7.61626 5.56189 6.53684 6.00105 5.5506L7.21866 6.77158C7.07571 7.24158 7.00347 7.73023 7.00432 8.22149C7.00555 9.52332 7.51408 10.7734 8.42196 11.7064C9.32983 12.6395 10.5656 13.182 11.8669 13.2187H12.1351C12.5814 13.2072 13.0241 13.1359 13.4515 13.0066Z"
                  fill="white"
                />
                <path
                  d="M15.2379 8.12611L12.0957 4.98389C12.9216 5.00761 13.7071 5.34628 14.2913 5.9305C14.8755 6.51471 15.2142 7.30024 15.2379 8.12611Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>

        <div class="auth__login-btn">
          <button class="btn" @click="clickLogin">Log In</button>
          <div class="or">
            or
            <button @click="$store.commit('auth/OPEN_SIGNUP')">Sign Up</button>
          </div>
        </div>

        <div class="auth__login-forget-pw-text">
          Forgot your password? <a href="#">Click here</a> to recover it.
        </div>

        <div class="auth__login-policy-text">
          <span>By creating an account, you agree to our</span>
          <NuxtLink to="/terms-of-service" class="terms"
            >Terms of Service</NuxtLink
          >
          and our
          <NuxtLink to="/privacy-policy" class="privacy-policy"
            >Privacy Policy</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      eye1Open: false,
      eye2Open: false,
      eyeOpenL: false,
      registerForm: {},
      loginForm: {},
    };
  },
  computed: {
    isLoginOpen() {
      return this.$store.getters["auth/isLoginOpen"];
    },
  },
  methods: {
    promptLoginModal() {
      this.$store.commit("auth/AUTH_OPEN_CLOSE");
    },
    close(e) {
      const arr = [];
      const modal = e.target.classList;
      for (let i = 0; i < modal.length; i++) {
        arr.push(modal[i]);
      }

      if (arr.includes("auth")) {
        // this.promptLoginModal();
        this.$store.commit("auth/AUTH_OPEN_CLOSE");
        // this.$store.commit("auth/ENABLE_AUTH_BTN");
      }
    },
    clickSignup() {
      this.$axios
        .post("api/register", this.registerForm)
        .then((res) => {
          this.$toast.success(res.data.message);
          localStorage.setItem("user", JSON.stringify(res.data.entity));
          localStorage.setItem("token", res.data.token);
          this.$router.push("/roblox-accounts");
          this.$store.commit("auth/LOGIN");
          this.$router.push("/dashboard");
        })
        .catch((res) => {
          this.$toast.error(res.response.data.message);
        })
        .finally(() => {});
      // this.$router.push("/roblox-accounts");
      // setTimeout(() => {
      //   this.$store.commit("auth/AUTH_OPEN_CLOSE");
      // }, 100);
      // this.$store.commit("auth/LOGIN");
    },
    clickLogin() {
      this.$axios
        .post("api/login", this.loginForm)
        .then((res) => {
          this.$toast.success(res.data.message);
          localStorage.setItem("user", JSON.stringify(res.data.entity));
          localStorage.setItem("token", res.data.token);
          this.$store.commit("auth/AUTH_OPEN_CLOSE");
          this.$store.commit("auth/LOGIN");
          this.$router.push("/dashboard");
        })
        .catch((res) => {
          this.$toast.error(res.response.data.message);
        })
        .finally(() => {});

      /**** For Frontend coding ****/
      // this.$router.push("/dashboard");
      // setTimeout(() => {
      //   this.$store.commit("auth/AUTH_OPEN_CLOSE");
      // }, 100);
      // this.$store.commit("auth/LOGIN");
    },
    blink(varr) {
      if (varr === "pw") {
        this.eye1Open = !this.eye1Open;
        if (this.$refs.pw.type === "password") {
          this.$refs.pw.type = "text";
        } else {
          this.$refs.pw.type = "password";
        }
      } else {
        this.eye2Open = !this.eye2Open;
        if (this.$refs.cpw.type === "password") {
          this.$refs.cpw.type = "text";
        } else {
          this.$refs.cpw.type = "password";
        }
      }
    },
    blinkL() {
      this.eyeOpenL = !this.eyeOpenL;
      if (this.$refs.pwL.type === "password") {
        this.$refs.pwL.type = "text";
      } else {
        this.$refs.pwL.type = "password";
      }
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
.auth {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  color: #fff;
  z-index: 1004;
  // backdrop-filter: blur(rem(2));
  // background-color: rgba(0, 0, 0, 0.623);
  @include break-up(small) {
    display: flex;
    justify-content: center;
    align-items: center;
    top: rem(100);
  }

  &__inside {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    background-color: $purple-dark;

    @include break-up(small) {
      width: rem(700);
      height: auto;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: rem(25);
    }
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

  // ========= Signup Box ==========
  &__signup-box,
  &__login-box {
    margin-top: rem(70);
    width: rem(351);
    transition: all 1s ease;
    @include break-up(small) {
      margin-top: rem(110);
      width: rem(540);
    }
  }

  &__signup-text,
  &__login-text {
    margin-bottom: rem(65);
    .title {
      font-size: rem(22);
      line-height: rem(26);
      font-weight: 500;
    }
    .desc {
      font-size: rem(17);
      line-height: rem(20);
      font-weight: 300;
    }
  }

  &__signup-form {
    height: rem(220);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: rem(50);
    @include break-up(small) {
      margin-bottom: rem(35);
      height: rem(160);
    }
    .username,
    .email,
    .password,
    .confirmPassword {
      height: rem(40);
      border: 1px solid #fff;
      border-radius: rem(50);
      padding: 0 rem(22);
      display: grid;
      grid-template-columns: auto rem(26);
      // justify-content: space-between;
      align-items: center;
      background-color: $navy-blue;

      .input-div {
        padding-right: rem(10);
        display: flex;
        flex-direction: column;
        justify-content: center;
        label {
          font-size: rem(9);
          line-height: rem(11);
          color: $purple-light;
          margin-bottom: rem(1);
        }
        input {
          display: block;
          width: 100%;
          font-size: rem(12);
          line-height: rem(14);
          background: none;
          outline: none;
          border: none;
          color: #fff;

          &:-webkit-autofill {
            -webkit-text-fill-color: #fff;
            -webkit-box-shadow: 0 0 0px 1000px $navy-blue inset;
          }
        }
        ::placeholder {
          color: #fff;
        }
      }
    }
    .username,
    .email {
      // .input-div {
      //   input {
      //     @include break-up(small) {
      //       width: rem(440);
      //     }
      //   }
      // }
      .icon {
        display: flex;
        justify-content: center;
        align-items: center;

        img,
        svg {
          display: block;
        }
      }
    }

    .passwords {
      height: rem(100);
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      @include break-up(small) {
        flex-direction: row;
        height: auto;

        > div {
          width: rem(260);
          // display: flex;
          // align-items: center;
        }
      }
    }
  }

  &__signup-btn,
  &__login-btn {
    text-align: center;
    margin-bottom: rem(20);
    .btn {
      color: #fff;
      border: none;
      outline: none;
      background-color: $purple;
      width: rem(200);
      height: rem(40);
      font-weight: 500;
      font-size: rem(18);
      line-height: rem(21);
      border-radius: rem(50);
      margin-bottom: rem(15);
      cursor: pointer;

      &:hover {
        color: $purple;
        background-color: #fff;
        border: rem(2) solid $purple;
      }
    }

    .or {
      font-size: rem(14);
      line-height: rem(16);

      > button {
        font-weight: 600;
        background: none;
        border: none;
        outline: none;
        color: #fff;
        cursor: pointer;
      }
    }
  }
  &__login-btn {
    margin-bottom: rem(15);
  }

  &__signup-policy-text,
  &__login-policy-text {
    font-size: rem(12);
    line-height: rem(14);
    font-weight: 300;
    text-align: center;
    @include break-up(small) {
      margin-bottom: rem(94);
    }

    > a {
      font-weight: 600;
    }
  }

  // =========== Login box ===========
  &__login-form {
    height: rem(100);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: rem(50);
    @include break-up(small) {
      margin-bottom: rem(35);
    }

    > div {
      height: rem(40);
      border: 1px solid #fff;
      border-radius: rem(50);
      padding: 0 rem(22);
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: $navy-blue;

      .input-div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 70%;
        label {
          font-size: rem(9);
          line-height: rem(11);
          color: $purple-light;
          margin-bottom: rem(1);
        }
        input {
          display: block;
          width: 100%;
          font-size: rem(12);
          line-height: rem(14);
          background: none;
          outline: none;
          border: none;
          color: #fff;

          &:-webkit-autofill {
            -webkit-text-fill-color: #fff;
            -webkit-box-shadow: 0 0 0px 1000px $navy-blue inset;
          }
        }
        ::placeholder {
          color: #fff;
        }
      }
      .hide-img {
        display: flex;
        align-items: center;

        .eye {
          width: rem(24);
        }
      }
    }
  }

  &__login-forget-pw-text {
    font-size: rem(12);
    line-height: rem(14);
    text-align: center;
    margin-bottom: rem(30);
    a {
      font-weight: 600;
      margin-bottom: rem(30);
    }
  }
}
</style>