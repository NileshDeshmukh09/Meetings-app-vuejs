<template>
  <div>
    <section class="container">
      <h1>Meetings</h1>
      <hr />
      <div class="meet-section ">
        <router-link to="/meetings" class="filter active ">filter/Search Meeting</router-link>
        <router-link to="/meetings/add" class="filter mx-2">Add a Meeting</router-link>
      </div>

      <router-view></router-view>
    </section>
  </div>
</template>

<script>
export default {
  name: "MeetingsPage",
};
</script>

<style>
.filter {
  border: 1px solid black;
  outline: none;
  border-bottom: 0px;
  background: none;
  padding: 3px;
  border-radius: 2px;
}
.active {
  color: black;
  text-decoration: none;
}
</style>