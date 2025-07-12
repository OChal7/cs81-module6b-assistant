
function PersonalAssistant(name) {
  this.name = name;
  this.tasks = [];
  this.mood = 'neutral';
}

PersonalAssistant.prototype.addTask = function(task) {
  this.tasks.push(task);
  console.log(`${this.name} added task: "${task}"`);
};

PersonalAssistant.prototype.completeTask = function() {
  if (this.tasks.length === 0) {
    console.log("No tasks to complete!");
    return;
  }
  const done = this.tasks.shift();
  console.log(`Completing task: "${done}"`);
  console.log(`Now you have ${this.tasks.length} tasks left.`);
};

PersonalAssistant.prototype.reportMood = function() {
  console.log(`Mood: ${this.mood}`);
};

const jarvis = new PersonalAssistant('Jarvis');
console.log(`Hi! I'm ${jarvis.name}, your assistant.`);

jarvis.addTask('Finish CS81 Module 6 assignment');
jarvis.addTask('Review Lab instructions');
jarvis.addTask('Write thank-you email to tutee parent');

jarvis.mood = 'productive';
jarvis.reportMood();

jarvis.completeTask();
jarvis.completeTask();

jarvis.mood = 'accomplished';
jarvis.reportMood();
