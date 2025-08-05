
    const video = document.getElementById("webcam");
    const detectBtn = document.getElementById("detectBtn");
    const moodText = document.getElementById("moodText");
    const moodIcon = document.getElementById("moodIcon");
    const moodOutput = document.getElementById("moodOutput");
    const body = document.body;

    const moods = [
      { mood: "Happy", icon: "😊", bg: "bg-yellow-100", color: "#fde68a" },
      { mood: "Sad", icon: "😢", bg: "bg-blue-100", color: "#1e3a8a" },
      { mood: "Angry", icon: "😠", bg: "bg-red-100", color: "#dc2626" },
      { mood: "Surprised", icon: "😲", bg: "bg-purple-100", color: "#a855f7" },
      { mood: "Neutral", icon: "😐", bg: "bg-gray-100", color: "#334155" },
    ];
 
    // Webcam setup
    async function initWebcam() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
      } catch (error) {
        alert("Could not access webcam");
      }
    }

    // Simulate Mood Detection
    detectBtn.addEventListener("click", () => {
      const randomMood = moods[Math.floor(Math.random() * moods.length)];
      moodText.textContent = randomMood.mood;
      moodIcon.textContent = randomMood.icon;
      moodOutput.classList.remove("hidden");

      // Animate background color
      document.body.style.backgroundColor = randomMood.color;
    });

    initWebcam();
  