export default (outage, siteInfo) => siteInfo.devices.map((device) => device.id)
  .includes(outage.id);
