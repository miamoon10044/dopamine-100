<script setup>
import { ref, onMounted } from 'vue';
import Countdown from '@chenfengyuan/vue-countdown';

// Function to calculate the time remaining until the start of the next month
const calculateTimeUntilNextMonth = () => {
  const now = new Date();
  const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  return nextMonth - now; // Time difference in milliseconds
};

// Reactive reference for the countdown time
const timeUntilNextMonth = ref(calculateTimeUntilNextMonth());

// Method to reset the countdown when the timer ends
const resetCountdown = () => {
  timeUntilNextMonth.value = calculateTimeUntilNextMonth();
};

// Function to format time by adding a leading zero if needed
const formatTime = (value) => {
  return String(value).padStart(2, '0');
};

// Reference to swiper-container
const swiperRef = ref(null);
// Swiper instance
let swiperInstance = null;

// Get the Swiper instance when the component is mounted
onMounted(() => {
  swiperInstance = swiperRef.value.swiper;
});

// Navigation methods
const slideNext = () => {
  if (swiperInstance) {
    swiperInstance.slideNext();
  }
};

const slidePrev = () => {
  if (swiperInstance) {
    swiperInstance.slidePrev();
  }
};
</script>

<template>
  <div class="flex gap-[20px]">
    <div class="flex flex-col gap-[20px] w-[842px]">
      <section>
        <div class="section-header flex items-center justify-between mb-5">
          <div class="flex flex-row items-center">
            <img
              class="h-[24px] w-[24px] mr-2"
              src="../assets/icons/icon-box.png"
              alt="" />
            <h3 class="text-sm">{{ $t('home.banner_title') }}</h3>
          </div>

          <div class="flex items-center gap-1">
            <div class="flex items-center gap-1">
              <button
                class="btn bg-white rounded-3xl px-1 py-1 text-xs min-h-[auto] h-[auto] leading-none text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                @click="slidePrev">
                <span class="material-symbols-outlined">chevron_left</span>
              </button>
              <button
                class="btn bg-white rounded-3xl px-1 py-1 text-xs min-h-[auto] h-[auto] leading-none text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                @click="slideNext">
                <span class="material-symbols-outlined">chevron_right</span>
              </button>
            </div>

            <button
              class="btn bg-white rounded-3xl px-5 py-3 text-xs min-h-[auto] h-[auto] leading-none">
              {{ $t('btn.see_all') }}
            </button>
          </div>
        </div>

        <swiper-container
          ref="swiperRef"
          class="main-banner"
          :autoplay="true"
          :slides-per-view="1"
          :autoplay-delay="5000"
          :loop="true">
          <swiper-slide>
            <img src="@/assets/banners/banner_2.png" alt="" />
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/banners/main-banner.png" alt="" />
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/banners/banner_2.png" alt="" />
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/banners/main-banner.png" alt="" />
          </swiper-slide>
        </swiper-container>
      </section>

      <section class="p-5 bg-white rounded-3xl shadow-sm">
        <div class="section-header flex items-center justify-between mb-5">
          <div class="flex flex-row items-center">
            <img
              class="h-[20px] w-[20px] mr-2"
              src="../assets/icons/icon-stars.png"
              alt="" />
            <h3 class="text-sm">{{ $t('home.slot_promo_title') }}</h3>
          </div>
          <button
            class="btn shadow-none rounded-3xl px-5 py-3 text-xs min-h-[auto] h-[auto] leading-none">
            {{ $t('btn.see_all') }}
          </button>
        </div>

        <div class="slot-game-container flex items-top justify-between">
          <div class="slot-game pb-3">
            <div>
              <img src="../assets/slot-games/slot-game-1.png" alt="" />
              <div class="game-container py-3 px-2">
                <div class="flex items-baseline justify-between">
                  <h3 class="slot-name text-sm">Duo fu duo cai Grand</h3>
                  <p class="slot-rtp text-xs">RTP 97.8</p>
                </div>
                <div class="flex items-center justify-between mt-1">
                  <p class="online text-xs">111 Online</p>

                  <div class="slot-rating flex items-center">
                    <p class="text-xs mr-1">4.0</p>
                    <div class="star-rating">
                      <input
                        type="radio"
                        id="comment-1-star5"
                        name="rating"
                        value="5" />
                      <label for="comment-1-star5">★</label>

                      <input
                        type="radio"
                        id="comment-1-star4"
                        name="rating"
                        value="4"
                        checked />
                      <label for="comment-1-star4">★</label>

                      <input
                        type="radio"
                        id="comment-1-star3"
                        name="rating"
                        value="3" />
                      <label for="comment-1-star3">★</label>

                      <input
                        type="radio"
                        id="comment-1-star2"
                        name="rating"
                        value="2" />
                      <label for="comment-1-star2">★</label>

                      <input
                        type="radio"
                        id="comment-1-star1"
                        name="rating"
                        value="1" />
                      <label for="comment-1-star1">★</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex gap-4 flex-col pt-5">
                <div class="flex items-center">
                  <img src="../assets/comments/user-3.png" alt="" />
                  <div class="comment-content ml-3">
                    <div class="flex items-baseline">
                      <h4 class="m-0 font-bold">Mina0802</h4>
                      <p class="m-0 pl-2 text-stone-500">ャラがかわい</p>
                    </div>
                    <p class="m-0">すぎて 癒されました！</p>
                  </div>
                </div>

                <div class="flex items-center">
                  <img src="../assets/comments/user-2.png" alt="" />
                  <div class="comment-content ml-3">
                    <div class="flex items-baseline">
                      <h4 class="m-0 font-bold">Mizuki</h4>
                      <p class="m-0 pl-2 text-stone-500">操作が簡単で</p>
                    </div>
                    <p class="m-0">ストレスなく楽しめました！</p>
                  </div>
                </div>

                <div class="flex items-center">
                  <img src="../assets/comments/user-1.png" alt="" />
                  <div class="comment-content ml-3">
                    <div class="flex items-baseline">
                      <h4 class="m-0 font-bold">Snow24</h4>
                      <p class="m-0 pl-2 text-stone-500">音楽が素敵で</p>
                    </div>
                    <p class="m-0">世界観に引き込まれます。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="slot-game">
            <div>
              <img src="../assets/slot-games/slot-game-2.png" alt="" />
              <div class="game-container py-3 px-2">
                <div class="flex items-baseline justify-between">
                  <h3 class="slot-name text-sm">Candy Wild Bonanza</h3>
                  <p class="slot-rtp text-xs">RTP 97.4</p>
                </div>
                <div class="flex items-center justify-between mt-1">
                  <p class="online text-xs">97 Online</p>

                  <div class="slot-rating flex items-center">
                    <p class="text-xs mr-1">4.0</p>
                    <div class="star-rating">
                      <input
                        type="radio"
                        id="comment-2-star5"
                        name="rating"
                        value="5" />
                      <label for="comment-2-star5">★</label>

                      <input
                        type="radio"
                        id="comment-2-star4"
                        name="rating"
                        value="4"
                        checked />
                      <label for="comment-2-star4">★</label>

                      <input
                        type="radio"
                        id="comment-2-star3"
                        name="rating"
                        value="3" />
                      <label for="comment-2-star3">★</label>

                      <input
                        type="radio"
                        id="comment-2-star2"
                        name="rating"
                        value="2" />
                      <label for="comment-2-star2">★</label>

                      <input
                        type="radio"
                        id="comment-2-star1"
                        name="rating"
                        value="1" />
                      <label for="comment-2-star1">★</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex gap-4 flex-col pt-5">
                <div class="flex items-center">
                  <img src="../assets/comments/user-3.png" alt="" />
                  <div class="ml-3 comment-content">
                    <div class="flex items-baseline">
                      <h4 class="m-0 font-bold">Mina0802</h4>
                      <p class="m-0 pl-2 text-stone-500">ャラがかわい</p>
                    </div>
                    <p class="m-0">すぎて 癒されました！</p>
                  </div>
                </div>

                <div class="flex items-center">
                  <img src="../assets/comments/user-2.png" alt="" />
                  <div class="comment-content ml-3">
                    <div class="flex items-baseline">
                      <h4 class="m-0 font-bold">Mizuki</h4>
                      <p class="m-0 pl-2 text-stone-500">操作が簡単で</p>
                    </div>
                    <p class="m-0">ストレスなく楽しめました！</p>
                  </div>
                </div>

                <div class="flex items-center">
                  <img src="../assets/comments/user-1.png" alt="" />
                  <div class="comment-content ml-3">
                    <div class="flex items-baseline">
                      <h4 class="m-0 font-bold">Snow24</h4>
                      <p class="m-0 pl-2 text-stone-500">音楽が素敵で</p>
                    </div>
                    <p class="m-0">世界観に引き込まれます。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="slot-game">
            <div>
              <img src="../assets/slot-games/slot-game-3.png" alt="" />
              <div class="game-container py-3 px-2">
                <div class="flex items-baseline justify-between">
                  <h3 class="slot-name text-sm">Pinata Wins</h3>
                  <p class="slot-rtp text-xs">RTP 98.2</p>
                </div>
                <div class="flex items-center justify-between mt-1">
                  <p class="online text-xs">11 Online</p>

                  <div class="slot-rating flex items-center">
                    <p class="text-xs mr-1">4.0</p>
                    <div class="star-rating">
                      <input
                        type="radio"
                        id="comment-3-star5"
                        name="rating"
                        value="5" />
                      <label for="comment-3-star5">★</label>

                      <input
                        type="radio"
                        id="comment-3-star4"
                        name="rating"
                        value="4"
                        checked />
                      <label for="comment-3-star4">★</label>

                      <input
                        type="radio"
                        id="comment-3-star3"
                        name="rating"
                        value="3" />
                      <label for="comment-3-star3">★</label>

                      <input
                        type="radio"
                        id="comment-3-star2"
                        name="rating"
                        value="2" />
                      <label for="comment-3-star2">★</label>

                      <input
                        type="radio"
                        id="comment-3-star1"
                        name="rating"
                        value="1" />
                      <label for="comment-3-star1">★</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex gap-4 flex-col pt-5">
                <div class="flex items-center">
                  <img src="../assets/comments/user-3.png" alt="" />
                  <div class="comment-content ml-3">
                    <div class="flex items-baseline">
                      <h4 class="m-0 font-bold">Mina0802</h4>
                      <p class="m-0 pl-2 text-stone-500">ャラがかわい</p>
                    </div>
                    <p class="m-0">すぎて 癒されました！</p>
                  </div>
                </div>

                <div class="flex items-center">
                  <img src="../assets/comments/user-2.png" alt="" />
                  <div class="comment-content ml-3">
                    <div class="flex items-baseline">
                      <h4 class="m-0 font-bold">Mizuki</h4>
                      <p class="m-0 pl-2 text-stone-500">操作が簡単で</p>
                    </div>
                    <p class="m-0">ストレスなく楽しめました！</p>
                  </div>
                </div>

                <div class="flex items-center">
                  <img src="../assets/comments/user-1.png" alt="" />
                  <div class="comment-content ml-3">
                    <div class="flex items-baseline">
                      <h4 class="m-0 font-bold">Snow24</h4>
                      <p class="m-0 pl-2 text-stone-500">音楽が素敵で</p>
                    </div>
                    <p class="m-0">世界観に引き込まれます。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="p-5 bg-white rounded-3xl shadow-sm">
        <div class="section-header flex items-center justify-between mb-5">
          <div class="flex flex-row items-center">
            <img
              class="h-[20px] w-[20px] mr-2"
              src="../assets/icons/icon-stars.png"
              alt="" />
            <h3 class="text-sm">{{ $t('home.slot_promo_title') }}</h3>
          </div>
          <button
            class="btn shadow-none rounded-3xl px-5 py-3 text-xs min-h-[auto] h-[auto] leading-none">
            {{ $t('btn.see_all') }}
          </button>
        </div>

        <div>
          <div class="flex flex-row gap-3">
            <button
              class="btn shadow-none text-xs py-3 px-5 rounded-3xl min-h-[auto] h-[auto] leading-none bg-[#f2f4f7] hover:bg-[#e4e6e9] hover:border-[#e4e6e9]">
              {{ $t('home.slot_promo_tab_btn1') }}
            </button>
            <button
              class="btn btn-outline py-3 px-5 text-xs rounded-3xl min-h-[auto] h-[auto] border-[#f2f4f7] leading-none hover:bg-[#e4e6e9] hover:text-[#333] hover:border-[#e4e6e9]">
              {{ $t('home.slot_promo_tab_btn2') }}
            </button>
          </div>

          <div class="overflow-x-auto mt-5">
            <table class="realtime-table table table-xs">
              <!-- head -->
              <thead>
                <tr>
                  <th class="text-left py-3">#</th>
                  <th>{{ $t('home.realtime_table_date') }}</th>
                  <th>{{ $t('home.realtime_table_game') }}</th>
                  <th>ID</th>
                  <th class="text-right">
                    {{ $t('home.realtime_table_bet_amount') }}
                  </th>
                  <th class="text-right">
                    {{ $t('home.realtime_table_multiply') }}
                  </th>
                  <th class="text-right">
                    {{ $t('home.realtime_table_winning') }}
                  </th>
                  <th class="text-center">
                    {{ $t('home.realtime_table_replay') }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="hover border-0">
                  <th class="text-gray-400 py-4">32562</th>
                  <td>14:32:53 11-07-2024</td>
                  <td>Candy Wild Bonanza</td>
                  <td>Teufers</td>
                  <td class="text-right">$88</td>
                  <td class="text-right">0.35X</td>
                  <td class="text-right">
                    <span class="font-bold">$3,240</span>
                  </td>
                  <td class="text-center">
                    <a class="text-blue-500" href="#">{{ $t('btn.play') }}</a>
                  </td>
                </tr>
                <tr class="hover border-0">
                  <th class="text-gray-400 py-4">32562</th>
                  <td>14:32:53 11-07-2024</td>
                  <td>Lucky Gotcha</td>
                  <td>Yukino</td>
                  <td class="text-right">$288</td>
                  <td class="text-right">3.35X</td>
                  <td class="text-right">
                    <span class="font-bold">Macbook Pro 16"</span>
                  </td>
                  <td class="text-center">
                    <a class="text-blue-500" href="#">{{ $t('btn.play') }}</a>
                  </td>
                </tr>
                <tr class="hover border-0">
                  <th class="text-gray-400 py-4">32562</th>
                  <td>14:32:53 11-07-2024</td>
                  <td>Jin Ji Bao Xi</td>
                  <td>Designoo</td>
                  <td class="text-right">$18</td>
                  <td class="text-right">8.35X</td>
                  <td class="text-right flex flex-col">
                    <span
                      class="uppercase text-[10px] leading-none tracking-[-1px]">
                      Mini Jackpot
                    </span>
                    <span class="font-bold">$5,325</span>
                  </td>
                  <td class="text-center">
                    <a class="text-blue-500" href="#">{{ $t('btn.play') }}</a>
                  </td>
                </tr>
                <tr class="hover border-0">
                  <th class="text-gray-400 py-4">32562</th>
                  <td>14:32:53 11-07-2024</td>
                  <td>Candy Wild Bonanza</td>
                  <td>Designoo</td>
                  <td class="text-right">$320</td>
                  <td class="text-right">12.35X</td>
                  <td class="text-right">
                    <span class="font-bold">$3,240</span>
                  </td>
                  <td class="text-center">
                    <a class="text-blue-500" href="#">{{ $t('btn.play') }}</a>
                  </td>
                </tr>
                <tr class="hover border-0">
                  <th class="text-gray-400 py-4">32562</th>
                  <td>14:32:53 11-07-2024</td>
                  <td>Lucky Neko</td>
                  <td>Designoo</td>
                  <td class="text-right">$160</td>
                  <td class="text-right">23.35X</td>
                  <td class="text-right">
                    <span class="font-bold">$123,240</span>
                  </td>
                  <td class="text-center">
                    <a class="text-blue-500" href="#">{{ $t('btn.play') }}</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>

    <aside class="flex flex-col gap-[20px] w-[320px]">
      <section class="p-4 bg-white rounded-3xl shadow-sm">
        <div
          class="flex gap-3 flex-col pb-3 border-b border-solid border-[#f2f4f7]">
          <div class="flex justify-between">
            <div class="flex items-center">
              <img class="mr-2" src="../assets/comments/user-1.png" alt="" />
              <div class="flex flex-col">
                <h4 class="text-[13px] font-bold">Bunny Pop</h4>
                <p class="m-0 text-[11px]">
                  {{ $t('home.temporary_account') }}
                </p>
              </div>
            </div>
            <div class="flex gap-2">
              <button
                class="btn btn-square btn-outline min-h-[auto] h-[42px] w-[42px] border-gray-300 hover:border-gray-400 hover:bg-gray-400 notif-active">
                <img class="bell" src="../assets/icons/icon-bell.png" alt="" />
              </button>
              <button
                class="btn btn-square btn-outline min-h-[0] h-[42px] w-[42px] border-gray-300 hover:border-gray-400 hover:bg-gray-400">
                <img src="../assets/icons/icon-container.png" alt="" />
              </button>
            </div>
          </div>

          <div class="flex gap-2">
            <span
              class="badge text-xs font-bold pl-2 pr-3 min-h-0 h-auto tracking-tighter">
              <img class="mr-1" src="../assets/icons/icon-bitcoin.png" alt="" />
              1,125,235,235
            </span>
            <span
              class="badge text-xs font-bold pl-2 pr-3 min-h-0 h-auto tracking-tighter">
              <img class="mr-1" src="../assets/icons/icon-ticket.png" alt="" />
              99
            </span>
            <span
              class="badge text-xs font-bold pl-2 pr-3 min-h-0 h-auto tracking-tighter">
              <img
                class="mr-1"
                src="../assets/icons/icon-ticket-colored.png"
                alt="" />
              99
            </span>
          </div>
        </div>

        <div class="pt-4 mb-1">
          <button
            class="btn text-white shadow-none border-none bg-pink hover:bg-pink-600 w-full py-2 min-h-0 h-auto">
            <img src="../assets/icons/icon-dp.png" alt="" />
            {{ $t('btn.cta') }}
          </button>
        </div>
      </section>

      <section class="p-4 bg-white rounded-3xl shadow-sm">
        <div
          class="countdown-container flex justify-between items-start flex-row mb-4">
          <div>
            <h3 class="text-sm color-[#474747] mb-1">
              {{ $t('home.spin_race') }}
            </h3>

            <countdown :time="timeUntilNextMonth" @end="resetCountdown">
              <template #default="{ days, hours, minutes, seconds }">
                <div class="flex gap-[1rem]">
                  <div class="number-container flex flex-col items-center">
                    <span class="timer-number">{{ formatTime(days) }}</span>
                    <span class="text-xs text-gray-300">日</span>
                  </div>
                  <div class="number-container flex flex-col items-center">
                    <span class="timer-number">{{ formatTime(hours) }}</span>
                    <span class="text-xs text-gray-300">時間</span>
                  </div>
                  <div class="number-container flex flex-col items-center">
                    <span class="timer-number">{{ formatTime(minutes) }}</span>
                    <span class="text-xs text-gray-300">分</span>
                  </div>
                  <div class="number-container flex flex-col items-center">
                    <span class="timer-number">{{ formatTime(seconds) }}</span>
                    <span class="text-xs text-gray-300">秒</span>
                  </div>
                </div>
              </template>
            </countdown>
          </div>
          <button
            class="btn shadow-none rounded-3xl px-5 py-3 text-xs min-h-[auto] h-[auto] leading-none">
            {{ $t('btn.see_all') }}
          </button>
        </div>
        <div class="flex flex-col">
          <div
            class="flex flex-row items-center py-3 border-t border-solid border-[#f5f5f5]">
            <p class="text-gray-300 text-xs mr-[16px]">1</p>
            <img
              class="shrink-0 w-[52px] h-[52px] mr-[12px]"
              src="../assets/comments/user-1.png"
              alt="" />
            <div class="mr-[8px] basis-[40%]">
              <h4 class="text-[13px] font-bold">Macbook Pro 16"</h4>
              <p class="text-xs">Username0912</p>
            </div>
            <p class="text-right text-xs font-bold basis-[25%]">195,250,000</p>
          </div>
          <div
            class="flex flex-row items-center py-3 border-t border-solid border-[#f5f5f5]">
            <p class="text-gray-300 text-xs mr-[16px]">2</p>
            <img
              class="shrink-0 w-[52px] h-[52px] mr-[12px]"
              src="../assets/comments/user-2.png"
              alt="" />
            <div class="mr-[8px] basis-[40%]">
              <h4 class="text-[13px] font-bold">Ipad Pro 6 gen</h4>
              <p class="text-xs">Username092</p>
            </div>
            <p class="text-right text-xs font-bold basis-[25%]">171,150,000</p>
          </div>
          <div
            class="flex flex-row items-center py-3 border-t border-solid border-[#f5f5f5]">
            <p class="text-gray-300 text-xs mr-[16px]">3</p>
            <img
              class="shrink-0 w-[52px] h-[52px] mr-[12px]"
              src="../assets/comments/user-3.png"
              alt="" />
            <div class="mr-[8px] basis-[40%]">
              <h4 class="text-[13px] font-bold">iPhone 16 Pro</h4>
              <p class="text-xs">Nickname0353</p>
            </div>
            <p class="text-right text-xs font-bold basis-[25%]">93,208,000</p>
          </div>

          <button
            class="btn shadow-none rounded-3xl px-5 py-4 mt-3 text-xs min-h-[auto] h-[auto] leading-none">
            {{ $t('btn.check_ranking') }}
          </button>

          <div class="flex flex-row items-center justify-center mt-4 mb-1">
            <p class="text-[11px] mr-2 text-gray-400">
              {{ $t('home.season_rewards_sponsored_by') }}
            </p>
            <img class="w-[100px]" src="../assets/logo.png" alt="" />
          </div>
        </div>
      </section>

      <section>
        <img src="../assets/ads/ads-1.png" alt="" />
      </section>
    </aside>
  </div>
</template>

<style scoped>
/* TODO: Move colors to themes */

.main-banner {
  width: 100%;
}

.section-header {
  h3 {
    color: #474747;
  }
}

/* Customizing Default Swiper Navigation Buttons */
.swiper-button-next,
.swiper-button-prev {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px;
  border-radius: 50%;
  z-index: 10;
}

/* Re-positioning the Next and Prev Buttons */
.swiper-button-prev {
  position: absolute;
  left: -50px; /* Adjust as needed */
  top: 50%;
  transform: translateY(-50%);
}

.swiper-button-next {
  position: absolute;
  right: -50px; /* Adjust as needed */
  top: 50%;
  transform: translateY(-50%);
}

.slot-rtp,
.online {
  color: #939393;
}

.slot-name {
  color: #474747;
}

.online {
  position: relative;
  margin-left: 12px;

  &:before {
    position: absolute;
    content: '';
    left: -12px;
    top: 50%;
    transform: translateY(-50%);
    background-color: #00ff18;
    height: 7px;
    width: 7px;
    border-radius: 50%;
    animation: pulse-animation 2s infinite;
  }
}

.star-rating {
  direction: rtl;
  font-size: 0.75rem;
  display: inline-block;
}

.star-rating input {
  display: none;
}

.star-rating label {
  color: #ddd;
  font-size: 0.75rem;
  cursor: pointer;
  transition: color 0.2s;
}

.star-rating input:checked ~ label {
  color: #f5b301;
}

.star-rating label:hover,
.star-rating label:hover ~ label {
  color: #f5b301;
}

.game-container {
  border-bottom: solid 1px #f5f5f5;
}

.comment-content {
  font-size: 13px;
  color: #333333;
}

.realtime-table thead tr {
  border-top: solid 1px #f0f0f0;
  border-bottom: solid 1px #f0f0f0;
}

.realtime-table tbody td {
  padding-top: 10px;
  padding-bottom: 10px;
}

.timer-number {
  font-family: 'Bebas Neue', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 28px;
}

.timer-number {
  position: relative;
  width: 22px;
  text-align: center;

  &:after {
    font-size: 18px;
    content: ':';
    display: block;
    position: absolute;
    right: -10px;
    top: 50%;
    transform: translateY(-50%);
    color: #d1d5db;
  }
}

.number-container {
  &:last-child {
    .timer-number {
      &:after {
        content: '';
      }
    }
  }
}

.notif-active {
  position: relative;

  &:before {
    position: absolute;
    content: '';
    right: 5px;
    top: 7px;
    background-color: #fc057b;
    height: 7px;
    width: 7px;
    border-radius: 50%;
    animation: pulse-animation 2s infinite;
  }
}

.bell {
  -webkit-animation: ring 8s 0.7s ease-in-out infinite;
  -webkit-transform-origin: 50% 4px;
  -moz-animation: ring 8s 0.7s ease-in-out infinite;
  -moz-transform-origin: 50% 4px;
  animation: ring 8s 0.7s ease-in-out infinite;
  transform-origin: 50% 4px;
}

@-webkit-keyframes ring {
  0% {
    -webkit-transform: rotateZ(0);
  }
  1% {
    -webkit-transform: rotateZ(30deg);
  }
  3% {
    -webkit-transform: rotateZ(-28deg);
  }
  5% {
    -webkit-transform: rotateZ(34deg);
  }
  7% {
    -webkit-transform: rotateZ(-32deg);
  }
  9% {
    -webkit-transform: rotateZ(30deg);
  }
  11% {
    -webkit-transform: rotateZ(-28deg);
  }
  13% {
    -webkit-transform: rotateZ(26deg);
  }
  15% {
    -webkit-transform: rotateZ(-24deg);
  }
  17% {
    -webkit-transform: rotateZ(22deg);
  }
  19% {
    -webkit-transform: rotateZ(-20deg);
  }
  21% {
    -webkit-transform: rotateZ(18deg);
  }
  23% {
    -webkit-transform: rotateZ(-16deg);
  }
  25% {
    -webkit-transform: rotateZ(14deg);
  }
  27% {
    -webkit-transform: rotateZ(-12deg);
  }
  29% {
    -webkit-transform: rotateZ(10deg);
  }
  31% {
    -webkit-transform: rotateZ(-8deg);
  }
  33% {
    -webkit-transform: rotateZ(6deg);
  }
  35% {
    -webkit-transform: rotateZ(-4deg);
  }
  37% {
    -webkit-transform: rotateZ(2deg);
  }
  39% {
    -webkit-transform: rotateZ(-1deg);
  }
  41% {
    -webkit-transform: rotateZ(1deg);
  }

  43% {
    -webkit-transform: rotateZ(0);
  }
  100% {
    -webkit-transform: rotateZ(0);
  }
}

@-moz-keyframes ring {
  0% {
    -moz-transform: rotate(0);
  }
  1% {
    -moz-transform: rotate(30deg);
  }
  3% {
    -moz-transform: rotate(-28deg);
  }
  5% {
    -moz-transform: rotate(34deg);
  }
  7% {
    -moz-transform: rotate(-32deg);
  }
  9% {
    -moz-transform: rotate(30deg);
  }
  11% {
    -moz-transform: rotate(-28deg);
  }
  13% {
    -moz-transform: rotate(26deg);
  }
  15% {
    -moz-transform: rotate(-24deg);
  }
  17% {
    -moz-transform: rotate(22deg);
  }
  19% {
    -moz-transform: rotate(-20deg);
  }
  21% {
    -moz-transform: rotate(18deg);
  }
  23% {
    -moz-transform: rotate(-16deg);
  }
  25% {
    -moz-transform: rotate(14deg);
  }
  27% {
    -moz-transform: rotate(-12deg);
  }
  29% {
    -moz-transform: rotate(10deg);
  }
  31% {
    -moz-transform: rotate(-8deg);
  }
  33% {
    -moz-transform: rotate(6deg);
  }
  35% {
    -moz-transform: rotate(-4deg);
  }
  37% {
    -moz-transform: rotate(2deg);
  }
  39% {
    -moz-transform: rotate(-1deg);
  }
  41% {
    -moz-transform: rotate(1deg);
  }

  43% {
    -moz-transform: rotate(0);
  }
  100% {
    -moz-transform: rotate(0);
  }
}

@keyframes ring {
  0% {
    transform: rotate(0);
  }
  1% {
    transform: rotate(30deg);
  }
  3% {
    transform: rotate(-28deg);
  }
  5% {
    transform: rotate(34deg);
  }
  7% {
    transform: rotate(-32deg);
  }
  9% {
    transform: rotate(30deg);
  }
  11% {
    transform: rotate(-28deg);
  }
  13% {
    transform: rotate(26deg);
  }
  15% {
    transform: rotate(-24deg);
  }
  17% {
    transform: rotate(22deg);
  }
  19% {
    transform: rotate(-20deg);
  }
  21% {
    transform: rotate(18deg);
  }
  23% {
    transform: rotate(-16deg);
  }
  25% {
    transform: rotate(14deg);
  }
  27% {
    transform: rotate(-12deg);
  }
  29% {
    transform: rotate(10deg);
  }
  31% {
    transform: rotate(-8deg);
  }
  33% {
    transform: rotate(6deg);
  }
  35% {
    transform: rotate(-4deg);
  }
  37% {
    transform: rotate(2deg);
  }
  39% {
    transform: rotate(-1deg);
  }
  41% {
    transform: rotate(1deg);
  }

  43% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(0);
  }
}
</style>
