<template>
  <a
    class="title"
    :aria-label="$site.title + ', back to home'"
    :href="$site.base"
  >
    <img
      class="logo"
      v-if="$theme.logo"
      :src="withBase($theme.logo)"
      alt="logo"
    />
    <span>{{ $site.title }}</span>
  </a>
  <div class="flex-grow"></div>
  <NavBarLinks class="hide-mobile" />
  <slot name="search" />
</template>

<script src="./NavBar"></script>

<style>
  .title {
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--text-color);
  }

  .flex-grow {
    flex-grow: 1;
  }

  .logo {
    margin-right: 0.75rem;
    height: 2rem;
    vertical-align: bottom;
    border-radius: 10px;
  }
  .hide-mobile {
    margin-right: 5rem;
  }
  @media screen and (max-width: 800px) {
    .hide-mobile {
      display: none;
    }
  }
</style>
