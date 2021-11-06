<template>
  <main>
    <section id="card">
      <img :src="avatarURI" alt="avatar">
      <br><br>
      <span class="bold">N. Vaiyavuthipinyo</span>
      <br>
      <span>Software Engineer</span>
      <br><br>
      <a href="https://kenta13elle.wordpress.com/">Slice of life blog</a>
      <br><br>
      <span class="italic">Under Renovation</span>
    </section>
  </main>
</template>

<script>
  const CryptoJS = require('crypto-js')

  export default {
    name: 'App',
    data() {
      return {
        avatarURI: 'https://www.gravatar.com/avatar/' + CryptoJS.MD5('k13elle@gmail.com')
      };
    }
  }
</script>

<style>

:root {
  --pantone-2021-1: #F5DF4D;
  --pantone-2021-2: #939597;

  --font-color: #333333;
  --background-color: #FEFEFE;

  --palette-1: var(--pantone-2021-2);
  --palette-2: var(--pantone-2021-1);

  --global-margin: 12px;
}

main {
  display: flex;
  width: calc(100vw - 24px);
  height: calc(100vh - 24px);
  padding: var(--global-margin);

  background-color: var(--palette-1);
  background-image:
    radial-gradient(circle at 100% 150%, var(--palette-1) 24%, var(--palette-2) 24%, var(--palette-2) 28%, var(--palette-1) 28%, var(--palette-1) 36%, var(--palette-2) 36%, var(--palette-2) 40%, transparent 40%, transparent),
    radial-gradient(circle at 0 150%, var(--palette-1) 24%, var(--palette-2) 24%, var(--palette-2) 28%, var(--palette-1) 28%, var(--palette-1) 36%, var(--palette-2) 36%, var(--palette-2) 40%, transparent 40%, transparent),
    radial-gradient(circle at 50% 100%, var(--palette-1) 10%, var(--palette-1) 23%, var(--palette-2) 23%, var(--palette-2) 30%, var(--palette-1) 30%, var(--palette-1) 43%, var(--palette-2) 43%, var(--palette-2) 50%, var(--palette-1) 50%, var(--palette-1) 63%, var(--palette-2) 63%, var(--palette-2) 71%, transparent 71%, transparent),
    radial-gradient(circle at 100% 50%, var(--palette-1) 5%, var(--palette-1) 15%, var(--palette-2) 15%, var(--palette-2) 20%, var(--palette-1) 20%, var(--palette-1) 29%, var(--palette-2) 29%, var(--palette-2) 34%, var(--palette-1) 34%, var(--palette-1) 44%, var(--palette-2) 44%, var(--palette-2) 49%, transparent 49%, transparent),
    radial-gradient(circle at 0 50%, var(--palette-1) 5%, var(--palette-1) 15%, var(--palette-2) 15%, var(--palette-2) 20%, var(--palette-1) 20%, var(--palette-1) 29%, var(--palette-2) 29%, var(--palette-2) 34%, var(--palette-1) 34%, var(--palette-1) 44%, var(--palette-2) 44%, var(--palette-2) 49%, transparent 49%, transparent);
  background-size: 100px 50px;

  align-items: center;
  justify-content: center;
}

@media (orientation: portrait) {
  main {
    align-items: baseline;
  }
}

#card {
  display: block;
  background: var(--background-color);
  color: var(--font-color);

  padding: 1rem;
  border-radius: 0.5rem;

  text-align: center;
}

#card > .avatar {
  border-radius: 9999px;
}

</style>