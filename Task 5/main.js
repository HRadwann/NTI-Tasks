    const form = document.getElementById("countdownForm");
    const eventNameInput = document.getElementById("eventName");
    const timeRemainingInput = document.getElementById("timeRemaining");
    const countdownDisplay = document.getElementById("countdownDisplay");
    const eventList = document.getElementById("eventList");
    const searchInput = document.getElementById("searchInput");

    let events = [];

    form.addEventListener("submit", function(e) {
      e.preventDefault();

      const name = eventNameInput.value.trim();
      const seconds = parseInt(timeRemainingInput.value.trim());

      if (name === "") {
        alert("Event Name cannot be empty.");
        return;
      }
      if (isNaN(seconds) || seconds <= 0) {
        alert("Time Remaining must be a positive number.");
        return;
      }

      startCountdown(name, seconds);
      eventNameInput.value = "";
      timeRemainingInput.value = "";
    });

    function startCountdown(name, duration) {
      let remaining = duration;

      const eventObj = {
        name: name,
        message: `Time Remaining: ${remaining} seconds`,
        id: Date.now()
      };

      events.push(eventObj);
      updateEventList();

      const intervalId = setInterval(() => {
        remaining--;
        eventObj.message = `Time Remaining: ${remaining} seconds`;
        updateEventList();

        if (remaining <= 0) {
          clearInterval(intervalId);
        }
      }, 1000);

      setTimeout(() => {
        eventObj.message = `🎉 Event "${name}" has started!`;
        updateEventList();
      }, duration * 1000);
    }

    function updateEventList() {
      const filter = searchInput.value.toLowerCase();
      eventList.innerHTML = "";

      events
        .filter(event => event.name.toLowerCase().includes(filter))
        .forEach(event => {
          const div = document.createElement("div");
          div.className = "event-item";
          div.textContent = `${event.name}: ${event.message}`;
          eventList.appendChild(div);
        });
    }

    searchInput.addEventListener("input", updateEventList);
