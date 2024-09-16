<script setup></script>

<template>
  <div class="flex flex-col gap-[20px] w-[842px]">
    <section>
      <div class="section-header flex items-center justify-between mb-5">
        <div class="flex flex-row items-center">
          <img
            class="h-[24px] w-[24px] mr-2"
            src="../assets/icons/icon-box.png"
            alt="" />
          <h3 class="text-sm">げんざいしんこうちゅうのプロモーション</h3>
        </div>
        <button
          class="btn bg-white rounded-3xl px-6 py-3 text-xs min-h-[auto] h-[auto] leading-none">
          すべてを見る
        </button>
      </div>

      <swiper-container class="main-banner" autoplay="true" loop="true">
        <swiper-slide>
          <img src="../assets/main-banner.png" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/main-banner.png" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/main-banner.png" alt="" />
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
          <h3 class="text-sm">無料で楽しめるスロットゲーム</h3>
        </div>
        <button
          class="btn shadow-none rounded-3xl px-6 py-3 text-xs min-h-[auto] h-[auto] leading-none">
          すべてを見る
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
          <h3 class="text-sm">無料で楽しめるスロットゲーム</h3>
        </div>
        <button
          class="btn shadow-none rounded-3xl px-6 py-3 text-xs min-h-[auto] h-[auto] leading-none">
          すべてを見る
        </button>
      </div>

      <div>
        <div class="flex flex-row gap-3">
          <button
            class="btn shadow-none text-xs py-3 px-6 rounded-3xl min-h-[auto] h-[auto] leading-none bg-[#f2f4f7] hover:bg-[#e4e6e9] hover:border-[#e4e6e9]">
            실시간 당첨
          </button>
          <button
            class="btn btn-outline py-3 px-6 text-xs rounded-3xl min-h-[auto] h-[auto] border-[#f2f4f7] leading-none hover:bg-[#e4e6e9] hover:text-[#333] hover:border-[#e4e6e9]">
            최고 당첨 금액 및 상품
          </button>
        </div>

        <div class="overflow-x-auto mt-5">
          <table class="realtime-table table table-xs">
            <!-- head -->
            <thead>
              <tr>
                <th class="text-left py-3">#</th>
                <th>Date</th>
                <th>Game</th>
                <th>ID</th>
                <th class="text-right">Bet Amount</th>
                <th class="text-right">Multiply</th>
                <th class="text-right">Winning</th>
                <th class="text-center">Replay</th>
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
                  <a class="text-blue-500" href="#">Play</a>
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
                  <a class="text-blue-500" href="#">Play</a>
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
                  <a class="text-blue-500" href="#">Play</a>
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
                  <a class="text-blue-500" href="#">Play</a>
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
                  <a class="text-blue-500" href="#">Play</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
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
</style>
