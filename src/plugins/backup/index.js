module.exports = (strapi) => {
  return {
    initialize() {
      const backupService = strapi.services.backup; // Access the backup service
      backupService.scheduleBackup(); // Schedule the backup job on initialization
    },
  };
};
