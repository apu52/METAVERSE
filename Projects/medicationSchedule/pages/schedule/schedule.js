const schedule = [
  { content: "Betadine Gargle", time: { hour: 9, minute: 0 } },
  {
    content: "Acetomyn (Blue Tablet) with warm water",
    time: { hour: 9, minute: 30 },
  },
  { content: "LoremIpsum (White Capsule)", time: { hour: 12, minute: 30 } },
  { content: "Betadine Gargle", time: { hour: 14, minute: 0 } },
  {
    content: "Acetomyn (Blue Tablet) with warm water",
    time: { hour: 21, minute: 0 },
  },
  { content: "LoremIpsum (White Capsule)", time: { hour: 23, minute: 59 } },
];

const colors = ["#FFA800", "#00D1FF", "#FF9AE9", "#00b68e", "#e098ff"];

const scheduleContainer = document.querySelector(".schedule");
function updateSchedule() {
  let currentTime = new Date();

  schedule.sort((a, b) => {
    if (a.time.hour != b.time.hour) return a.time.hour - b.time.hour;
    else return a.time.minute - b.time.minute;
  });
  next_index = 0;

  for (var i = 0; i < schedule.length; i++) {
    if (schedule[i].time.hour != currentTime.getHours()) {
      if (schedule[i].time.hour < currentTime.getHours()) {
        next_index = i + 1;
      } else {
        break;
      }
    } else {
      if (schedule[i].time.minute < currentTime.getMinutes()) {
        next_index = i + 1;
      } else {
        break;
      }
    }
  }
  next_i = next_index % schedule.length;

  console.log(schedule[next_i]);

  let currentTimeInserted = false;

  if (next_i == 0) {
    if (
      currentTime.getHours() < schedule[0].time.hour ||
      (currentTime.getHours() == schedule[0].time.hour &&
        currentTime.getMinutes() < schedule[0].time.minute)
    ) {
      scheduleContainer.innerHTML += `<div class='currentTime'></div>`;
      currentTimeInserted = true;
    }
  }

  for (var i = 0; i < schedule.length; i++) {
    scheduleContainer.innerHTML += `
      <div class="schedule-item">
        <div class="timestamp">
          <i class="fa fa-clock"></i>
          <div class="time">${schedule[i].time.hour}:${
      schedule[i].time.minute == 0 ? "00" : schedule[i].time.minute
    }</div>
        </div>
        <div class="content" style="--border-clr:${
          colors[i % colors.length]
        };">${schedule[i].content}</div>
    </div>
  `;
    if ((i + 1) % schedule.length == next_i) {
      if (!currentTimeInserted) {
        scheduleContainer.innerHTML += `<div class='currentTime'></div>`;
      }
    }
  }

  let currentTimeDiv = document.querySelector(".currentTime");
  currentTimeDiv.innerHTML = `
    <div class="timestamp">
      ${currentTime.getHours()}:${currentTime.getMinutes()}
    </div>
  `;
}
updateSchedule();
setInterval(updateSchedule, 60 * 1000);
