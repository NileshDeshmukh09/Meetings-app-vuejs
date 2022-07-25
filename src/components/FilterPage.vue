<template>
  <div>
    <section class="container">
      <!-- <h1>Meetings</h1>
      <hr /> -->
      <!-- <div class="meet-section">
        <router-link to="/meetings" class="filter active"
        >filter/Search Meeting</router-link>
          <router-link to="/meetings/add" class="filter"
          >Add a Meeting</router-link
        >
      </div> -->
      <div id="search-filter" class="tabcontent">
        <div class="filter-form">
          <form action="" method="POST">
            <h1 id="filter-heading">search for meetings</h1>
            <hr />
            <div class="form-group">
              <label for="date" class="form-data">Date</label>
              <br />
              <select class="form-control" id="search">
                <option class="options">ALL</option>
                <option class="options">PAST</option>
                <option class="options">TODAY</option>
                <option class="options">UPCOMING</option>
              </select>
            </div>
            <div class="form-group">
              <label for="search" class="form-data">Search for</label>
              <textarea
                name="search"
                id="search"
                cols="5"
                rows="3"
                placeholder="search using words which describe the meeting"
              ></textarea>
            </div>

            <button class="btn-add">search</button>
          </form>
        </div>

        <div class="filter-box">
          <h1>Meeting Matching search criteria</h1>
          <hr />

          <div class="filter-content">
            <p><span id="meet-date">30 june 2022</span> 06:00 - 07:00</p>

            <p>Project kickoff</p>
            <div>
              <button class="excuse_your_self">Excuse yourself</button>
            </div>
            <hr />

            <p class="members-email">
              <span><b> Attendee :</b></span> fakeaniket@fynd.com ,
              fakemanish@fynd.com
            </p>
            <div>
              <select name="member" id="member">
                <option value="select">Select Member</option>
                <option value="">jatin@gmail.com</option>
                <option value="">manish@gmail.com</option>
                <option value="">aniket@gmail.com</option>
                <option value="">atul@gmail.com</option>
              </select>
              <button class="btn-add">Add</button>
            </div>
          </div>

          <div class="filter-content">
            <p><span id="meet-date">28 june 2022</span> 09:00 - 10:30</p>

            <p>AWS Architecture</p>
            <div>
              <button class="excuse_your_self">Excuse yourself</button>
            </div>
            <hr />

            <p class="members-email">
              <span>Attendee :</span> fakeemail@fynd.com , fakeemail02@fynd.com
            </p>
            <div>
              <select name="member" id="member">
                <option value="select">Select Member</option>
                <option value="">jatin@gmail.com</option>
                <option value="">manish@gmail.com</option>
                <option value="">aniket@gmail.com</option>
                <option value="">atul@gmail.com</option>
              </select>
              <button class="btn-add">Add</button>
            </div>
          </div>
        </div>
      </div>
    </section>
     <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "FilterPage",
  
};
</script>

<style>
h1 {
  margin-top: 10px;
  margin-bottom: 10px;
}
.meet-section {
  margin-top: 10px;
  margin-bottom: 5px;
}
.filter,
.add-meet {
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
.not-active {
  border: none;
  color: blue;
  text-decoration: none;
}
.filter-form {
  background-color: rgb(142, 206, 228);
  padding: 10px;
  margin-top: 7px;
  border-radius: 2px;
}
.form-group {
  margin-top: 10px;
  margin-bottom: 10px;
}
textarea {
  outline: none;
  border-radius: 3px;
  width: 100%;
}
.form-control {
  width: 100%;
  height: 2em;
}
.btn-add {
  padding: 5px;
  border-radius: 3px;
  color: white;
  border: none;
  background-color: rgb(3, 133, 133);
}
#member {
  padding: 4px;
  border-radius: 3px;
  margin-top: 2px;
}
.excuse_your_self {
  padding: 5px;
  color: white;
  background-color: rgb(212, 54, 54);
  margin-top: 3px;
  border: none;
  margin-bottom: 5px;
  border-radius: 3px;
}
.filter-content {
  width: 100%;
  border: 1px solid black;
  border-radius: 3px;
  padding: 5px;
  margin-top: 8px;
  margin-bottom: 8px;
}
</style>