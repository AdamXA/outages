export default (outage, filterDate) => new Date(outage.begin) >= new Date(filterDate);
