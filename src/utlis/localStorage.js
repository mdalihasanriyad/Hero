export const getApps = () => {
  return JSON.parse(localStorage.getItem("installedApps")) || [];
};

export const saveApp = (app) => {
  const apps = getApps();
  const exists = apps.find(a => a.id === app.id);

  if (!exists) {
    apps.push(app);
    localStorage.setItem("installedApps", JSON.stringify(apps));
  }
};

export const removeApp = (id) => {
  const apps = getApps().filter(a => a.id !== id);
  localStorage.setItem("installedApps", JSON.stringify(apps));
};