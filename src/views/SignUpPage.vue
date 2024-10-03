<template>
  <div
    class="flex justify-around w-[900px] m-auto gap-10 items-start py-12 px-8 bg-white rounded-3xl shadow-sm">
    <!-- Left Side: Advertisement / Banner Section -->
    <div class="text-center">
      <img src="../assets/ads/ads-1.png" alt="Ad Banner" />
      <p class="mt-3">Join us and be a part of something great!</p>
    </div>

    <!-- Right Side: Signup Form Section -->
    <div class="w-full max-w-sm space-y-8">
      <h2 class="text-2xl font-bold text-center text-pink-600">Sign Up</h2>
      <form class="space-y-4">
        <!-- Username Field -->
        <div>
          <label class="label">
            <span class="label-text">Username</span>
          </label>
          <input
            type="text"
            placeholder="Enter your username"
            class="input input-bordered w-full"
            v-model="username" />
        </div>

        <!-- Email Field -->
        <div>
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            class="input input-bordered w-full"
            v-model="email" />
        </div>

        <!-- Password Field -->
        <div>
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            class="input input-bordered w-full"
            v-model="password" />
        </div>

        <!-- Re Password Field -->
        <div>
          <label class="label">
            <span class="label-text">Confirm Password</span>
          </label>
          <input
            type="password"
            placeholder="Re-enter your password"
            class="input input-bordered w-full"
            v-model="repassword" />
        </div>

        <!-- Signup Button -->
        <button
          type="button"
          class="btn text-white shadow-none border-none bg-pink hover:bg-pink-600 w-full py-5 min-h-0 h-auto"
          @click="handleSignup">
          Sign Up
        </button>
      </form>

      <!-- Divider -->
      <div class="divider">or</div>

      <!-- Social Media Signup -->
      <div class="flex justify-center space-x-4">
        <button
          class="btn shadow-none rounded-3xl px-5 py-3 text-xs min-h-[auto] h-[auto] leading-none flex items-center"
          @click="socialSignup('Google')">
          <GoogleIcon class="w-6 h-6 mr-2" />
          Google
        </button>
        <button
          class="btn shadow-none rounded-3xl px-5 py-3 text-xs min-h-[auto] h-[auto] leading-none flex items-center"
          @click="socialSignup('Facebook')">
          <FacebookIcon class="w-6 h-6 mr-2" />
          Facebook
        </button>
        <button
          class="btn shadow-none rounded-3xl px-5 py-3 text-xs min-h-[auto] h-[auto] leading-none flex items-center"
          @click="socialSignup('X')">
          <TwitterIcon class="w-6 h-6 mr-2" />
          X
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import GoogleIcon from 'vue-material-design-icons/Google.vue';
import FacebookIcon from 'vue-material-design-icons/Facebook.vue';
import TwitterIcon from 'vue-material-design-icons/Twitter.vue';

const username = ref('');
const email = ref('');
const password = ref('');
const repassword = ref('');

const handleSignup = () => {
  console.log('Signup attempt with:', {
    username: username.value,
    email: email.value,
    password: password.value,
    repassword: repassword.value,
  });
};

const socialSignup = (platform) => {
  console.log(`Sign up with ${platform}`);
};
</script>

<style>
/* Optional: Additional button icon styling */
.btn i {
  font-size: 1.25rem;
}
</style>
