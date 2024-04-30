const cron = require("node-cron"); // Cron is like an alarm clock that schedules when the backup should run.
const { exec } = require("child_process"); // This is how Node.js can run shell commands, like a boss telling his chamcha to do something.

module.exports = {
  scheduleBackup() {
    // Setting the alarm to run a backup every day at midnight
    cron.schedule("0 0 * * *", () => {
      this.performBackup();
    });
  },

  performBackup() {
    // The command that performs the backup; it's like telling your computer to save all your kamai (earnings) safely.
    const cmd =
      "mysqldump -u yourUser -p yourPassword yourDatabase > backup.sql";
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        console.error(`Backup error: ${error}`); // If something goes wrong, it shouts out the error.
        return;
      }
      console.log("Database backup was successful!"); // Otherwise, it celebrates the success.
    });
  },
};
