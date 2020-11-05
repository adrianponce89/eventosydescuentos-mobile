async function getSchedules() {
  const res = await fetch('/v1/schedules', {
    method: 'GET',
  });
  const resJson = await res.json();
  if (res.status === 200) {
    return resJson;
  } else {
    return Promise.reject(resJson.error);
  }
}

export default {
  getSchedules,
};
