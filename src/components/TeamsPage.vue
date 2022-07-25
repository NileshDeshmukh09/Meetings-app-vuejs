<template>
  <div>
     <main class="container">
      <h1>Teams</h1>
      <hr />
      <p>view and edit teams you are part of</p>
      <div class="grid">
        <section class="teamsCard"> 
          <div class="team-name"><h2>MERN stack training</h2></div>
          <div class="team-short-name bold">@mern-stack-training</div>
          <div class="team-description">
            Group attending MERN stack training for website revamp project
          </div>
          <div>
            <button class="excuse_your_self">Excuse yourself</button>
          </div>
          <hr />
          <div>
            <p><span class="bold">Member:</span>john@example.com,</p>
          </div>
          <select name="member" id="member">
            <option value="select">Select Member</option>
            <option value="">jatin@gmail.com</option>
            <option value="">manish@gmail.com</option>
            <option value="">aniket@gmail.com</option>
            <option value="">atul@gmail.com</option>
          </select>
          <input type="submit" value="Add" class="btn-add" />
        </section>
        <section class="teamsCard"> 
          <div class="team-name"><h2>MERN stack training</h2></div>
          <div class="team-short-name bold">@mern-stack-training</div>
          <div class="team-description">
            Group attending MERN stack training for website revamp project
          </div>
          <div>
            <button class="excuse_your_self">Excuse yourself</button>
          </div>
          <hr />
          <div>
            <p><span class="bold">Member:</span>john@example.com,</p>
          </div>
          <select name="member" id="member">
            <option value="select">Select Member</option>
            <option value="">jatin@gmail.com</option>
            <option value="">manish@gmail.com</option>
            <option value="">aniket@gmail.com</option>
            <option value="">atul@gmail.com</option>
          </select>
          <input type="submit" value="Add" class="btn-add" />
        </section>
  
        <section class="teamsCard"> 
          <button class="plus">+</button>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
export default {
    name : "TeamsPage"
}
</script>

<style>

.teamsCard 
{
    border: 1px solid black;
    border-radius: 2px;
    padding: 15px;
    /* line-height: 1.5em; */
    font-weight: 100;
    height: 350px;
}
.grid{
    display: grid;
    grid-template-rows: repeat(1,300px);
    grid-template-columns: repeat(3,320px);
    gap: 1em 1em;
    justify-content: space-between;
    width: 100%;
}
.bold{
    font-weight: bold;
    font-size: 1.1em;
}
.team-name{
    margin-bottom: 10px;
}
.excuse_your_self{
    padding: 5px;
    color: white;
    background-color: rgb(212, 54, 54);
    margin-top: 3px;
    border: none;
    margin-bottom: 5px;
    border-radius: 3px;
}
h1{
     margin-top:15px ;
     margin-bottom: 10px;
}
main p{
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 1.2em;
    color:rgb(83, 83, 83)
}
section div:nth-child(6){
    margin-top:8px ;
}
.team-description{
    color:gray
}
#member{
    padding:5px;
    border-radius: 3px;
    margin-top: 2px;
}
.btn-add{
    padding: 5px;
    border-radius: 3px;
    color: white;
    border: none;
    background-color: rgb(30, 163, 163);
}
.plus{
    padding: 0;
    border: none;
    background: none;
    font-size: 70px;
    margin-left: 1.7em;
    margin-top: 1.4em;

}
@media ( max-width : 600px ) {
    .grid {
        grid-template-rows: repeat( 4, 300px );
        grid-template-columns: repeat( 1, 300px );
    }
}

</style>