const api = process.env.REACT_APP_API;
const getInstancesApi = `${api}/describe`;
const startInstancesApi = `${api}/start`;
const stopInstancesApi = `${api}/stop`;

const getInstances = async body => {
  try {
    const res = await fetch(getInstancesApi, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': 'GNv1Clu8Tz7KbadNuO9YOaVQNYtLrhn92hWfiTs3',
      },
      body: JSON.stringify(body),
    });
    if (res.ok) {
      return res.json();
    } else {
      console.log(res);
    }
  } catch (e) {
    alert(e.toString());
    console.log(e);
  }
};

const startInstances = async instanceId => {
  try {
    const res = await fetch(startInstancesApi, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': 'GNv1Clu8Tz7KbadNuO9YOaVQNYtLrhn92hWfiTs3',
      },
      body: JSON.stringify(instanceId),
    });
    if (res.ok) {
      return res.json();
    } else {
      console.log(res);
    }
  } catch (e) {
    alert(e.toString());
    console.log(e);
  }
};

const stopInstances = async instanceId => {
  try {
    const res = await fetch(stopInstancesApi, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': 'GNv1Clu8Tz7KbadNuO9YOaVQNYtLrhn92hWfiTs3',
      },
      body: JSON.stringify(instanceId),
    });
    if (res.ok) {
      return res.json();
    } else {
      console.log(res);
    }
  } catch (e) {
    alert(e.toString());
    console.log(e);
  }
};

export default {
  getInstances,
  startInstances,
  stopInstances,
};
