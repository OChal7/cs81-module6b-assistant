
function PersonalAssistant(name) {
  this.name = name;
  this.tasks = [];
  this.mood = 'neutral';
}

PersonalAssistant.prototype.addTask = function(task) {
  this.tasks.push(task);
  console.log(`${this.name} added task: "${task}"`);
};
