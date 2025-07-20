    let countdownInterval;
    let currentTime;
    let messages = [];
    let currentMessageIndex = 0;

    function startCountdown() {
      const eventName = document.getElementById('eventName').value.trim();
      const duration = parseInt(document.getElementById('duration').value);
      const messageText = document.getElementById('messages').value.trim();

      if (!eventName || !duration || !messageText) {
        alert('Please fill in all fields!');
        return;
      }

      messages = messageText.split('\n').filter(msg => msg.trim() !== '');
      if (messages.length === 0) {
        alert('Please enter at least one message!');
        return;
      }

      currentTime = duration;
      currentMessageIndex = 0;

      document.getElementById('setupForm').style.display = 'none';
      document.getElementById('timerDisplay').classList.add('active');
      document.getElementById('eventTitle').textContent = eventName;
      document.getElementById('countdown').textContent = currentTime;
      document.getElementById('message').textContent = messages[currentMessageIndex];

      countdownInterval = setInterval(function () {
        currentTime--;
        document.getElementById('countdown').textContent = currentTime;

        if (currentTime > 0) {
          currentMessageIndex = (currentMessageIndex + 1) % messages.length;
          document.getElementById('message').textContent = messages[currentMessageIndex];
        } else {
          clearInterval(countdownInterval);
          showCelebration(eventName);
        }
      }, 2000);
    }

    function showCelebration(eventName) {
      document.getElementById('timerDisplay').classList.remove('active');
      document.getElementById('celebration').classList.add('active');
      document.getElementById('celebrationEvent').textContent = eventName;

      try {
        const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmgfBTWH0fPTgjMGHm7A7+OZURE');
        audio.play();
      } catch (e) {
        console.error('Failed to play audio:', e);
      }
    }

    function resetTimer() {
      clearInterval(countdownInterval);
      document.getElementById('setupForm').style.display = 'block';
      document.getElementById('timerDisplay').classList.remove('active');
      document.getElementById('celebration').classList.remove('active');
      document.getElementById('eventName').value = '';
      document.getElementById('duration').value = '';
      document.getElementById('messages').value = '';
    }

    window.addEventListener('load', function () {
      document.getElementById('messages').value =
        'Get ready for the event!\nAlmost there!\nFinal countdown!\nHere we go!';
    });
