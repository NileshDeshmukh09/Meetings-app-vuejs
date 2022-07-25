<template>
  <section class="container bg-info">
    
    <div class="add-form">
      <h2>Add new meeting</h2>
      <hr />
      <div>
        <form @submit.prevent="handleSubmit">
          <div><label for="date">Date</label></div>
          <div>
            <input type="date" class="form-control" v-model="date" name="date" id="date" placeholder="dd/mm/yyyy" />
          </div>
          <div><label for="startTime">Start time(hh:mm)</label></div>
          <div>
            <input
              type="time"
              name="startTime"
              id="startTime"
              placeholder="hh:mm"
              v-model="startTime"
              
            />
          </div>
          <div><label for="endTime">End time(hh:mm)</label></div>
          <div>
            <input
              type="time"
              name="endTime"
              id="endTime"
              v-model="endTime"
              placeholder="hh:mm"
            />
          </div>
          <div><label for="description" class="form">description</label></div>
          <div>
            <textarea
              name="description"
              id="description"
              cols="100"
              rows="6"
               class="form-control"
               v-model="description"
            ></textarea>
          </div>
          <div>
            <label for="email">EmailIDs of attendees or team's short</label>
          </div>
          <div><input type="text" name="email"  class="form-control" v-model="email" id="email_id" /></div>
          <div>
            Seperate EmailIDs/ team short names by commas - team short names
            always being with @
          </div>
          <div><button>Add Meetings</button></div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AddMeet",
  data() {
      return {
        date  : '',
        startTime  : '',
        endTime  : '',
        description  : '',
        email  : '',
        emails : [],
      }
  },
  methods : {
    handleSubmit(){
        const data = {
           date : this.date,
          //  startTime :{
          //    hours : 
          //  },
           endTime : this.endTime,
           startTime : this.startTime,
           description : this.description,
           email : this.email.split(","),
        }
        console.log(data);
    }
  }
};
</script>

<style>
</style>