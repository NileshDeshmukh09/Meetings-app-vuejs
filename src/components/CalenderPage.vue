<template>
  <div>
    <main class="container mt-3 mb-3">
        <h1>calender</h1>
        <hr>
        <div class="page-head">
                <h2>23 september</h2>
                <input type="date" class="date">
        </div>
        <h3>saturday</h3>
        <section>
            <div class="meeting-scedule">
                <div class="meet-number">1</div>
                <div class="meeting-details">meet</div>
            </div>
            <div class="meeting-scedule">
                <div class="meet-number">2</div>
                <div class="meeting-details">meet</div>
            </div>
            <div class="meeting-scedule">
                <div class="meet-number">3</div>
                <div class="meeting-details">meet</div>
            </div>
            <div class="meeting-scedule">
                <div class="meet-number">4</div>
                <div class="meeting-details">meet</div>
            </div>
            <div class="meeting-scedule">
                <div class="meet-number">5</div>
                <div class="meeting-details">meet</div>
            </div>
            <div class="meeting-scedule">
                <div class="meet-number">6</div>
                <div class="meeting-details">meet</div>
            </div>
            <div class="meeting-scedule">
                <div class="meet-number">7</div>
                <div class="meeting-details">meet</div>
            </div>
            <div class="meeting-scedule">
                <div class="meet-number">8</div>
                <div class="meeting-details">
                     meet
                    <div class="meeting-day-details">
                        <h5>project kickoff</h5>
                        <p>Attendee:hitesh2345@gmail.com</p>
                    </div>
                </div>
            </div>
            <div class="meeting-scedule">
                <div class="meet-number">9</div>
                <div class="meeting-details">meet</div>
            </div>
            <div class="meeting-scedule">
                <div class="meet-number">10</div>
                <div class="meeting-details">meet</div>
            </div>
            <div class="meeting-scedule">
                <div class="meet-number">11</div>
                <div class="meeting-details">meet</div>
            </div>
        </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'CalenderPage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.page-head{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
}
.date{
    border-radius: 5px;
    width: 180px;
    height: 40px;
}
h3{
    color: rgb(187, 187, 187);
}
.meeting-scedule{
    display: flex;
    align-items: center;
    margin: 8px;
}
.meet-number{
    width: 25px;
}
.meeting-details{
    flex-grow: 1;
    display: flex;
    flex-basis: 100%;
    background-color:rgb(131, 198, 221);;
    width: auto;
    height: 40px;
}
.meeting-day-details{
    flex-grow: 1;
    display: flex;
    position: relative;
    margin: 5px 0px 5px 0px;
    align-self: flex-start;
    justify-self: center;
    flex-direction: column;
    background-color:gray;
}

</style>
