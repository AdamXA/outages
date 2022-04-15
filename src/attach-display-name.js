export default (outage, siteInfo) => ({
  ...outage,
  name: siteInfo.devices.find((device) => device.id === outage.id).name,
});
